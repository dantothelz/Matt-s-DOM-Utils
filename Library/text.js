if (typeof Utils === "object" && Utils) {
	(function () {

               /**
                * @module
                * Utils.text
                *
                * @description
                * DOM Level 4-style `textContent` implementation.
                *
                * @see DOM 4 Spec section 5.3 (Node, textContent).
                *
                * @dependencies
                * * null
                */

		var doc,

			hostTypes,
			nodeTypes,

			textGetters,
			textGetterDecisions,

			textSetters,

			createText,

			textSetterDecisions,

			valueSetters;

               /**
                * @private
                *
                * @description
                * Variable containing the current document
                * node-like object.
                */

		doc = global.document;

               /**
                * @private
                *
                * @description
                * Object containing "normal" types associated with
                * host objects (exludes "unknown").
                */

		hostTypes = {
			"object": true,
			"function": true
		};

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is node-like.
                *
                * @param obj Object
                * An object to assert.
                */

		function isNodeLike(
			obj
		)
		{
			var type = typeof obj,
				normal = hostTypes[type] && obj,
				result = false;
			if (normal || type === "unknown") {
				result = typeof obj.nodeType ===
					"number";
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a host-like object (by passing
                * one of two assertions:
		* a) a `typeof` result of "object" or "function"
		* along with "truthiness";
		* b) a `typeof` result of "unknown".
		*
                * @param obj Object
                * An object to assert.
                */

		function isHostObject(
			obj
		)
		{
			var type = typeof obj,
				normal = hostTypes[type] && obj;
			return !!(normal || type === "unknown");
		}

               /**
                * @private
                *
                * @description
                * Helper method for `traverse*` methods; calls
                * the specified callback with a node-like object
                * passed.
                *
                * @param obj Object
                * A node-like object to pass.
                *
                * @param callback Function
                * A function to call.
                *
                * @param result Array
                * An array-like object to modify.
                */

		function pushCallback(
			obj,
			callback,
			result
		)
		{
			var called;
			if (typeof callback === "function") {
				called = callback(
					obj
				);
				if (called === true) {
					result[result.length] = obj;
				} else if (called) {
					result[result.length] = called;
				}
			}
		}

               /**
                * @private
                *
                * @description
                * Wrapper method for `removeChild`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @see `Node::removeChild`.
                * 
                * @param par Object
                * A node-like object that will attempt to remove
                * another node-like object.
                * 
                * @param obj Object
                * A node-like object to be removed.
                */

		function removeChild(
			par,
			obj
		)
		{
			var key = "removeChild",
				result = null;
			if (isNodeLike(par) && isNodeLike(obj)) {
				if (isHostObject(par[key])) {
					result = par[key](
						obj
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method used as a callback for `traverse*`; removes
                * a node-like object from the document tree; returns
                * `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to remove.
                */

		function clearNode(
			obj
		)
		{
			var result = null;
			if (isNodeLike(obj)) {
				removeChild(
					obj.parentNode,
					obj
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that clears a node-like object's
                * `childNodes`.
                *
                * @param obj Object
                * A node-like object to clear `childNodes` from.
                */

		function clearChildNodes(
			obj
		)
		{
			var result;
			if (isNodeLike(obj)) {
				while (obj.firstChild) {
					clearNode(
						obj.firstChild
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Object of documented `nodeType`s.
                *
                * @see DOM 4 Spec 5.3 (Node, nodeType).
                */

		nodeTypes = {
			"ELEMENT_NODE": 1,
			"ATTRIBUTE_NODE": 2,
			"TEXT_NODE": 3,
			"CDATA_SECTION_NODE": 4,
			"ENTITY_REFERENCE_NODE": 5,
			"ENTITY_NODE": 6,
			"PROCRESSING_INSTRUCTION_NODE": 7,
			"COMMENT_NODE": 8,
			"DOCUMENT_NODE": 9,
			"DOCUMENT_TYPE_NODE": 10,
			"DOCUMENT_FRAGMENT_NODE": 11,
			"NOTATION_NODE": 12
		};

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Variable containing keys of `nodeType` values
                * that can retrieve text.
                *
                * @see `Utils.types`.
                */

		textGetters = (function () {
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = true;
			result[nodeTypes.TEXT_NODE] = true;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				true;
			result[nodeTypes.COMMENT_NODE] = true;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				true;
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified node-like object can retrieve textual
                * content.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canGetText(
			obj
		)
		{
			var getters = textGetters,
				result = false;
			if (isNodeLike(obj)) {
				if (getters[obj.nodeType]) {
					result = true;
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object has a certain value for the
                * `nodeType` property.
                *
                * @param obj Object
                * An object which will have its `nodeType`
                * property checked.
                *
                * @param num Number
                * A number to assert.
                */

		function isNodeType(
			obj,
			num
		)
		{
			var type = typeof obj,
				normal = hostTypes[type] && obj,
				result = false;
			if (normal || type === "unknown") {
				result = obj.nodeType === num;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a text node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isText(
			obj
		)
		{
			var type = nodeTypes.TEXT_NODE;
			return isNodeType(
				obj,
				type
			);
		}

               /**
                * @private
                *
                * @description
                * Getter method for `nodeValue`; returns the
                * wrapped property's result or `null` if not
                * applicable.
                *
                * @see `Node::nodeValue`.
                * @see `CharacterData::data`.
                * @see `Text::data` (inherited from above).
                * 
                * @param obj Object
                * A node-like object to retrieve the `nodeValue`
                * property from.
                */

		function getNodeValue(
			obj
		)
		{
			var key = "nodeValue",
				result = null;
			if (isNodeLike(obj)) {
				if (typeof obj[key] === "string") {
					result = obj[key];
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method used as a callback for `traverse*`; returns
                * the `nodeValue` property value for the specified
                * node-like object if it is a text node-like object;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function filterTextData(
			obj
		)
		{
			var result = null;
			if (isText(obj)) {
				result = getNodeValue(
					obj
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that retrieves the `nodeValue`
                * property value of a node-like object; returns
                * `null` if not applicable.
                *
                * @param obj Object
                * A text node-like object to use.
                *
                * @see `getText`.
                */

		function grabText(
			obj
		)
		{
			return getNodeValue(
				obj
			);
		}
               /**
                * @private
                *
                * @description
                * Method returning a boolean asserting if a
                * node-like object can be traversed via its
                * `childNodes` property.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canTraverse(
			obj
		)
		{
			var result = false;
			if (isNodeLike(obj)) {
				result = isHostObject(
					obj.childNodes
				);
			}
			return result;
		}
               /**
                * @public `Utils.traverse.nodeTree`.
                *
                * @description
                * Method that traverses the specified node-like
                * object's subtree, calling a callback on each
                * node-like object; results are returned as an
                * array-like object.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @param result Array
                * An array-like object used to collect callback
                * results.
                */

		function traverseChildNodeTree(
			obj,
			callback,
			result
		)
		{
			// FIXME: get this <= 20 lines
			var max,
				aux,
				diff;
			result = result || [];
			if (canTraverse(obj)) {
				max = obj.childNodes.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					traverseChildNodeTree(
						obj.childNodes[diff],
						callback,
						result
					);
					pushCallback(
						obj.childNodes[diff],
						callback,
						result
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that concatenates the `nodeValue`
                * property value of text node-like objects
                * in the specified node-like object's subtree;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @see `getText`.
                */

		function collectText(
			obj
		)
		{
			var nodes,
				result = null;
			if (isNodeLike(obj)) {
				nodes = traverseChildNodeTree(
					obj,
					filterTextData
				);
				result = nodes.join(
					""
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Object containing decisions for specific
                * `nodeType` values pertaining to the retrieval of
                * textual content.
                */

		textGetterDecisions = (function () {
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = collectText;
			result[nodeTypes.TEXT_NODE] = grabText;
			result[nodeTypes.COMMENT_NODE] = grabText;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				collectText;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				grabText;
			return result;
		}());

               /**
                * @public `Utils.text.get`.
                *
                * @description
                * Method that returns a concatenated string
                * consisting of `nodeValue` property values of text
                * node-like objects from the specified node-like
                * object's subtree or the `nodeValue` property value
                * of the node-like object itself; returns `null` if
                * not applicable.
                *
                * @param obj Object
                * A node-like object to retrieve textual content
                * from.
                *
                * @see DOM 4 Spec section 5.3 (`Node::textContent`,
                * getting).
                */

		function getText(
			obj
		)
		{
			var decisions = textGetterDecisions,
				decision,
				result = null;
			if (canGetText(obj)) {
				decision = decisions[obj.nodeType];
				if (typeof decision === "function") {
					result = decision(
						obj
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Object containing keys of `nodeType` values that
                * can overwrite text.
                *
                * @see `Utils.types`.
                */

		textSetters = (function () {
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = true;
			result[nodeTypes.TEXT_NODE] = true;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				true;
			result[nodeTypes.COMMENT_NODE] = true;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				true;
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified node can overwrite textual content.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canSetText(
			obj
		)
		{
			var setters = textSetters,
				result = false;
			if (isNodeLike(obj)) {
				if (setters[obj.nodeType]) {
					result = true;
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Wrapper method for `createTextNode`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @param doc Object
                * A document node-like object to create a text
                * node-like object in.
                *
                * @param text String
                * A string representing the `nodeValue` of the
                * text node-like object to be created.
                *
                * @see `Document::createTextNode`.
                */

		function createTextNode(
			doc,
			text
		)
		{
			var key = "createTextNode";
			return doc[key](
				text
			);
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * the result of `createTextNode` or `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to create a text
                * node-like object in.
                *
                * @param text String
                * A string representing the `nodeValue` of the
                * text node-like object to be created.
                *
                * @see `createTextNode`.
                */

		createText = (function () {
			var key = "createTextNode",
				result = null;
			if (isHostObject(doc[key])) {
				result = createTextNode;
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method that wraps `createText`;
                * returns `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to create a text
                * node-like object in.
                *
                * @param text String
                * A string representing the `nodeValue` of the
                * text node-like object to be created.
                */

		function wrapCreateText(
			doc,
			text
		)
		{
			var result = null;
			if (createText) {
				result = createText(
					doc,
					text
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Wrapper method for `appendChild`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @see `Node::appendChild`.
                * 
                * @param par Object
                * A node-like object that will attempt to append
                * a node-like object.
                * 
                * @param obj Object
                * A node-like object to append.
                */

		function appendChild(
			par,
			obj
		)
		{
			var key = "appendChild",
				result = null;
			if (isNodeLike(par) && isNodeLike(obj)) {
				if (isHostObject(par[key])) {
					result = par[key](
						obj
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that returns the result of the
                * creation and suffixion of a text node-like object
                * to the specified node-like object; returns `null`
                * if not applicable.
                *
                * @param obj Object
                * A node-like object to append the created text node
                * like object to.
                *
                * @param text String
                * A string containing textual content to add.
                *
                * @param doc Object
                * A document node-like object used to create a text
                * node-like object.
                */

		function appendText(
			obj,
			text,
			doc
		)
		{
			var node,
				result = null;
				node = wrapCreateText(
					doc,
					text
				);
				result = appendChild(
					obj,
					node
				);
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that clears the specified
                * node-like object's subtree and appends a text
                * node-like object with a specific string;
                * returns the textual content added or `null` if not
                * applicable.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @param text String
                * A string containing textual content to add.
                *
                * @param doc Object
                * A document node-like object used to create a text
                * node-like object.
                *
                * @see `setText`.
                */

		function overrideText(
			obj,
			text,
			doc
		)
		{
			var textNode,
				result = null;
			if (isNodeLike(obj)) {
				clearChildNodes(
					obj
				);
				textNode = appendText(
					obj,
					text,
					doc
				);
				result = getNodeValue(
					textNode
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Setter method for `nodeValue`; returns the
                * wrapped property's result or `null` if not
                * applicable.
                *
                * @see `Node::nodeValue`.
                * @see `CharacterData::data`.
                * @see `Text::data`.
                * 
                * @param obj Object
                * A node-like object to retrieve the `nodeValue`
                * property from.
                * 
                * @param newValue String
                * A string containing the new value for the
		* `nodeValue` property.
                */

		function setNodeValue(
			obj,
			newValue
		)
		{
			var key = "nodeValue",
				result = null;
			if (isNodeLike(obj)) {
				if (valueSetters[obj.nodeType]) {
					result = obj[key] = newValue;
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Object of `nodeTypes` that can set the 
                * `nodeValue` property.
                *
                * @see DOM 4 Spec 5.3 (Node, nodeValue).
                */

		valueSetters = (function () {
			var result = {};
			result[nodeTypes.TEXT_NODE] = true;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				true;
			result[nodeTypes.COMMENT_NODE] = true;
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method that replaces the `nodeValue`
                * property value of the specified node-like object
                * with a specific string.
                *
                * @param text String
                * A string containing textual content to add.
                *
                * @param obj Object
                * A node-like object to replace the `nodeValue`
                * property value of.
                *
                * @see `setText`.
                */

		function replaceText(
			obj,
			text
		)
		{
			return setNodeValue(
				obj,
				text
			);
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Object containing decisions for specific
                * `nodeType` values pertaining to the replacement
                * textual content.
                */

		textSetterDecisions = (function () {
			var result = {};
			result[nodeTypes.ELEMENT_NODE] =
				overrideText;
			result[nodeTypes.TEXT_NODE] =
				replaceText;
			result[nodeTypes.COMMENT_NODE] =
				replaceText;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				overrideText;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				replaceText;
			return result;
		}());

               /**
                * @public `Utils.text.set`.
                *
                * @description
                * Method that returns a string consisting of textual
                * content that replaces existing textual content;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to replace the textual content
                * of.
                *
                * @param text String
                * A string containing the textual content to act as
                * a replacement.
                *
                * @param doc Document
                * A document node-like object to create a text
                * node-like object with.
                *
                * @see DOM 4 Spec section 5.3 (`Node::textContent`,
                * setting).
                */

		function setText(
			obj,
			text,
			doc
		)
		{
			var decisions = textSetterDecisions,
				decision,
				result = null;
			if (canSetText(obj)) {
				decision = decisions[obj.nodeType];
				if (typeof decision === "function") {
					result = decision(
						obj,
						text,
						doc
					);
				}
			}
			return result;
		}

		doc = null;

		Utils.text = Utils.text || {
			"get": getText,
			"set": setText
		};
	}());
}

