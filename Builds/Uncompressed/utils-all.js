var Utils = Utils || {},
	global = global || this;
/**
 * @title Matt's DOM Utils
 * @see http://www.fortybelow.ca/projects/JavaScript/Utils/
 *
 * @description
 * A collection of widely-tested DOM utilities and modules
 * that work in a maximal amount of environments.
 *
 * @author Matt McDonald
 * @contact [firstName.toLowerCase();]@fortybelow.ca
 * @see http://www.fortybelow.ca
*/

/*
        jslint sloppy: true, white: true, maxerr: 1,
        indent: 8
*/

/*
        jshint forin: true, noarg: true, noempty: true,
        eqeqeq: true, bitwise: true, undef: true, curly: true,
        indent: 8, maxerr: 1
*/

if (Utils) {
	(function () {

               /**
                * @module
                * Utils.raise
                *
                * @description
                * DOM Level 4-compliant custom errors and
                * methods to "raise" (throw) them.
                *
                * @dependencies
                * * null
                */

               /**
                * @public `Utils.raise.types`.
                *
                * @description
                * Object exposing errors.
                *
                * @see DOM Level 4 Spec 3.3 (Error types).
                */

		var errorTypes = {
			"INDEX_SIZE_ERROR": "The index is not in " +
				"the allowed range.",
			"HEIRARCHY_REQUEST_ERROR": "The operation " +
				"would yield an incorrect node " +
				"tree.",
			"WRONG_DOCUMENT_ERROR": "The object is in " +
				"the wrong document.",
			"INVALID_CHARACTER_ERROR": "The string " +
				"contains invalid characters.",
			"NO_MODIFICATION_ALLOWED_ERROR": "The " +
				"object can not be modified.",
			"NOT_FOUND_ERROR": "The object can not be " +
				"found here.",
			"NOT_SUPPORTED_ERROR": "The operation is " +
				"not supported.",
			"INVALID_STATE_ERROR": "The object is in " +
				"an invalid state.",
			"SYNTAX_ERROR": "The string did not match " +
				"the expected pattern.",
			"INVALID_MODIFICATION_ERROR": "The object " +
				"can not be modified in this way.",
			"NAMESPACE_ERROR": "The operation is not " +
				"allowed by Namespaces in XML.",
			"INVALID_ACCESS_ERROR": "The object does " +
				"not support the operation or " +
				"argument.",
			"TYPE_MISMATCH_ERROR": "The type of the " +
				"object does not match the " +
				"expected type.",
			"SECURITY_ERROR": "The operation is " +
				"insecure.",
			"NETWORK_ERROR": "A network error " +
				"occurred.",
			"ABORT_ERROR": "The operation was " +
				"aborted.",
			"URL_MISMATCH_ERROR": "The given URL " +
				"does not match another URL.",
			"QUOTA_EXCEEDED_ERROR": "The quota has " +
				"been exceeded.",
			"TIMEOUT_ERROR": "The operation timed " +
				"out.",
			"INVALID_NODE_TYPE_ERROR": "The supplied " +
				"node is incorrect or has an " +
				"incorrect ancestor for this " +
				"operation.",
			"DATA_CLONE_ERROR": "The object can not " +
				"be cloned."
		};

               /**
                * @public `Utils.raise.indexSize`.
                */

		function raiseIndexSize()
		{
			throw new Error(
				errorTypes.INDEX_SIZE_ERROR
			);
		}

               /**
                * @public `Utils.raise.heirarchyRequest`.
                */

		function raiseHeirarchyRequest()
		{
			throw new Error(
				errorTypes.HEIRARCHY_REQUEST_ERROR
			);
		}

               /**
                * @public `Utils.raise.wrongDocument`.
                */

		function raiseWrongDocument()
		{
			throw new Error(
				errorTypes.WRONG_DOCUMENT_ERROR
			);
		}

               /**
                * @public `Utils.raise.invalidCharacter`.
                */

		function raiseInvalidCharacter()
		{
			throw new Error(
				errorTypes.INVALID_CHARACTER_ERROR
			);
		}

               /**
                * @public `Utils.raise.noModificationAllowed`.
                */

		function raiseNoModificationAllowed()
		{
			var key = "NO_MODIFICATION_ALLOWED_ERROR";
			throw new Error(
				errorTypes[key]
			);
		}

               /**
                * @public `Utils.raise.notFound`.
                */

		function raiseNotFound()
		{
			throw new Error(
				errorTypes.NOT_FOUND_ERROR
			);
		}

               /**
                * @public `Utils.raise.notSupported`.
                */

		function raiseNotSupported()
		{
			throw new Error(
				errorTypes.NOT_SUPPORTED_ERROR
			);
		}

               /**
                * @public `Utils.raise.invalidState`.
                */

		function raiseInvalidState()
		{
			throw new Error(
				errorTypes.INVALID_STATE_ERROR
			);
		}

               /**
                * @public `Utils.raise.syntax`.
                */

		function raiseSyntax()
		{
			throw new Error(
				errorTypes.SYNTAX_ERROR
			);
		}

               /**
                * @public `Utils.raise.invalidModification`.
                */

		function raiseInvalidModification()
		{
			throw new Error(
				errorTypes.INVALID_MODIFICATION_ERROR
			);
		}

               /**
                * @public `Utils.raise.namespace`.
                */

		function raiseNamespace()
		{
			throw new Error(
				errorTypes.NAMESPACE_ERROR
			);
		}

               /**
                * @public `Utils.raise.invalidAccess`.
                */

		function raiseInvalidAccess()
		{
			throw new Error(
				errorTypes.INVALID_ACCESS_ERROR
			);
		}

               /**
                * @public `Utils.raise.typeMismatch`.
                */

		function raiseTypeMismatch()
		{
			throw new Error(
				errorTypes.TYPE_MISMATCH_ERROR
			);
		}

               /**
                * @public `Utils.raise.security`.
                */

		function raiseSecurity()
		{
			throw new Error(
				errorTypes.SECURITY_ERROR
			);
		}

               /**
                * @public `Utils.raise.network`.
                */

		function raiseNetwork()
		{
			throw new Error(
				errorTypes.NETWORK_ERROR
			);
		}

               /**
                * @public `Utils.raise.abort`.
                */

		function raiseAbort()
		{
			throw new Error(
				errorTypes.ABORT_ERROR
			);
		}

               /**
                * @public `Utils.raise.urlMismatch`.
                */

		function raiseUrlMismatch()
		{
			throw new Error(
				errorTypes.URL_MISMATCH_ERROR
			);
		}

               /**
                * @public `Utils.raise.quotaExceeded`.
                */

		function raiseQuotaExceeded()
		{
			throw new Error(
				errorTypes.QUOTA_EXCEEDED_ERROR
			);
		}

               /**
                * @public `Utils.raise.timeout`.
                */

		function raiseTimeout()
		{
			throw new Error(
				errorTypes.TIMEOUT_ERROR
			);
		}

               /**
                * @public `Utils.raise.invalidNodeType`.
                */

		function raiseInvalidNodeType()
		{
			throw new Error(
				errorTypes.INVALID_NODE_TYPE_ERROR
			);
		}

               /**
                * @public `Utils.raise.dataClone`.
                */

		function raiseDataClone()
		{
			throw new Error(
				errorTypes.DATA_CLONE_ERROR
			);
		}

		Utils.raise = Utils.raise || {
			"types": errorTypes,

			"indexSize": raiseIndexSize,
			"heirarchyRequest":
				raiseHeirarchyRequest,
			"wrongDocument": raiseWrongDocument,
			"invalidCharacter":
				raiseInvalidCharacter,
			"noModificationAllowed":
				raiseNoModificationAllowed,
			"notFound": raiseNotFound,
			"notSupported": raiseNotSupported,
			"invalidState": raiseInvalidState,
			"syntax": raiseSyntax,
			"invalidModification":
				raiseInvalidModification,
			"namespace": raiseNamespace,
			"invalidAccess": raiseInvalidAccess,
			"typeMismatch": raiseTypeMismatch,
			"security": raiseSecurity,
			"network": raiseNetwork,
			"abort": raiseAbort,
			"urlMismatch": raiseUrlMismatch,
			"quotaExceeded": raiseQuotaExceeded,
			"timeout": raiseTimeout,
			"invalidNodeType":
				raiseInvalidNodeType,
			"dataClone": raiseDataClone
		};
	}());
}

if (Utils) {
	(function () {

               /**
                * @module
                * Utils.types
                *
                * @description
                * Documented `nodeType` property values.
                *
                * @see DOM 4 Spec 5.3 (Node, nodeType).
                *
                * @dependencies
                * * null
                */

               /**
                * @public `Utils.types`.
                *
                * @description
                * Object of documented `nodeType`s.
                *
                * @see DOM 4 Spec 5.3 (Node, nodeType).
                */

		Utils.types = Utils.types || {
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
	}());
}

if (Utils) {
	(function () {

               /**
                * @module
                * Utils.is
                *
                * @description
                * Various tests.
                *
                * @dependencies
                * * Utils.types
                */

		var nodeTypes = Utils.types,
			hostTypes,

			doc,

			isDocument;

               /**
                * @private
                *
                * @description
                * Object containing types considered associated with
                * host objects.
                */

		hostTypes = {
			"object": true,
			"function": true,
			"unknown": true
		};

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Object containing the current document
                * node-like object or `null`.
                */

		doc = (function () {
			var result = null;
			if (global.document) {
				if (typeof global.document ===
					"object") {
					result = global.document;
				}
			}
			return result;
		}());

               /**
                * @public `Utils.is.type`.
                *
                * @description
                * Method that returns a boolean asserting
                * if the specified value returns a specific
                * string from a `typeof` check.
                *
                * @param val *
                * A value to use for a `typeof` check.
                *
                * @param type String
                * A string to assert for equality against the
                * `typeof` check.
                */

		function isType(
			val,
			type
		)
		{
			return typeof val === type;
		}

               /**
                * @public `Utils.is.hostObject`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a host-like object (by having
                * a "type" of "object", "function" or "unknown").
                */

		function isHostObject(
			obj
		)
		{
			var type = typeof obj;
			return hostTypes[type];
		}

               /**
                * @public `Utils.is.arrayLike`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is array-like.
                *
                * @param obj Object
                * An object to assert.
                */

		function isArrayLike(
			obj
		)
		{
			var type = typeof obj,
				result = false;
			if (obj && hostTypes[type]) {
				result = typeof obj.length ===
					"number";
			}
			return result;
		}

               /**
                * @public `Utils.is.nodeLike`.
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
				result = false;
			if (obj && hostTypes[type]) {
				result = typeof obj.nodeType ===
					"number";
			}
			return result;
		}

               /**
                * @public `Utils.is.nodeType`.
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
				result = false;
			if (obj && hostTypes[type]) {
				result = obj.nodeType === num;
			}
			return result;
		}

               /**
                * @public `Utils.is.element`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is an element node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isElementNode(
			obj
		)
		{
			var type = nodeTypes.ELEMENT_NODE;
			return isNodeType(obj, type);
		}

               /**
                * @public `Utils.is.attribute`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is an attribute node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isAttributeNode(
			obj
		)
		{
			var type = nodeTypes.ATTRIBUTE_NODE;
			return isNodeType(obj, type);
		}

               /**
                * @public `Utils.is.text`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a text node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isTextNode(
			obj
		)
		{
			var type = nodeTypes.TEXT_NODE;
			return isNodeType(obj, type);
		}

               /**
                * @public `Utils.is.cDataSection`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a cData section node-like
                * object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isCDataSectionNode(
			obj
		)
		{
			var type = nodeTypes.CDATA_SECTION_NODE;
			return isNodeType(obj, type);
		}

               /**
                * @public `Utils.is.entityReference`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is an entity reference node-like
                * object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isEntityReferenceNode(
			obj
		)
		{
			var key = "ENTITY_REFERENCE_NODE",
				type = nodeTypes[key];
			return isNodeType(obj, type);
		}

               /**
                * @public `Utils.is.entity`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is an entity node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isEntityNode(
			obj
		)
		{
			var type = nodeTypes.ENTITY_NODE;
			return isNodeType(obj, type);
		}

               /**
                * @public `Utils.is.processingInstruction`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a processing instruction
                * node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isProcessingInstructionNode(
			obj
		)
		{
			var key = "PROCESSING_INSTRUCTION_NODE",
				type = nodeTypes[key];
			return isNodeType(obj, type);
		}

               /**
                * @public `Utils.is.comment`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a comment node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isCommentNode(
			obj
		)
		{
			var type = nodeTypes.COMMENT_NODE;
			return isNodeType(obj, type);
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a document node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isDocumentNode(
			obj
		)
		{
			var type = nodeTypes.DOCUMENT_NODE;
			return isNodeType(obj, type);
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is the current document.
                *
                * @param obj Object
                * An object to assert.
                */

		function isAlmostDocument(
			obj
		)
		{
			return obj === global.document;
		}

               /**
                * @public `Utils.is.document`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * boolean asserting if the specified object is a
                * document node-like object or the current document.
                *
                * @param obj Object
                * An object to assert.
                *
                * @see `isDocumentNode`.
                * @see `isAlmostDocument`.
                */

		isDocument = (function () {
			var result = isDocumentNode;
			if (!isNodeLike(doc)) {
				result = isAlmostDocument;
			}
			return result;
		}());

               /**
                * @public `Utils.is.documentType`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a document type node-like
                * object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isDocumentTypeNode(
			obj
		)
		{
			var type = nodeTypes.DOCUMENT_TYPE_NODE;
			return isNodeType(obj, type);
		}

               /**
                * @public `Utils.is.documentFragment`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a document fragment node-like
                * object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isDocumentFragmentNode(
			obj
		)
		{
			var key = "DOCUMENT_FRAGMENT_NODE",
				type = nodeTypes[key];
			return isNodeType(obj, type);
		}

               /**
                * @public `Utils.is.notation`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a notation node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isNotationNode(
			obj
		)
		{
			var type = nodeTypes.NOTATION_NODE;
			return isNodeType(obj, type);
		}

		doc = null;

		Utils.is = Utils.is || {
			"type": isType,

			"hostObject": isHostObject,

			"arrayLike": isArrayLike,

			"nodeLike": isNodeLike,
			"nodeType": isNodeType,

			"element": isElementNode,
			"attribute": isAttributeNode,
			"text": isTextNode,
			"cDataSection": isCDataSectionNode,
			"entityReference":
				isEntityReferenceNode,
			"entity": isEntityNode,
			"processingInstruction":
				isProcessingInstructionNode,
			"comment": isCommentNode,
			"document": isDocument,
			"documentType": isDocumentTypeNode,
			"documentFragment":
				isDocumentFragmentNode,
			"notation": isNotationNode
		};
	}());
}

if (Utils) {
	(function () {

               /**
                * @module
                * Utils.can
                *
                * @description
                * Various capability tests for core modules that
                * follow.
                *
                * @dependencies
                * * Utils.is
                */

		var isNodeLike = Utils.is.nodeLike;

               /**
                * @public `Utils.can.getName`.
                *
                * @description
                * Method that returns a boolean asserting if a
                * specified object can retrieve the `nodeName`
                * property.
                *
                * @param obj Object
                * An object to assert.
                */

		function canGetName(
			obj
		)
		{
			var result = false;
			if (isNodeLike(obj)) {
				result = typeof obj.nodeName ===
					"string";
			}
			return result;
		}

               /**
                * @public `Utils.can.getValue`.
                *
                * @description
                * Method that returns a boolean asserting if a
                * specified object can retrieve the `nodeValue`
                * property.
                *
                * @param obj Object
                * An object to assert.
                */

		function canGetValue(
			obj
		)
		{
			var result = false;
			if (isNodeLike(obj)) {
				result = typeof obj.nodeValue ===
					"string";
			}
			return result;
		}

		Utils.can = Utils.can || {
			"getName": canGetName,
			"getValue": canGetValue
		};
	}());
}

if (Utils) {
	(function () {

               /**
                * @module
                * Utils.helpers
                *
                * @description
                * Various helper methods for common tasks.
                *
                * @dependencies
                * * Utils.is
                */

		var isArrayLike = Utils.is.arrayLike;

               /**
                * @public `Utils.helpers.makeArray`.
                *
                * @description
                * Method that returns an array produced from an
                * iterable object.
                *
                * @param obj Object
                * An object to iterate.
                */

		function makeArray(
			obj
		)
		{
			var max,
				aux,
				diff,
				result = [];
			if (isArrayLike(obj)) {
				result.length = obj.length;
				max = obj.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					result[diff] = obj[diff];
				}
			}
			return result;
		}

		Utils.helpers = Utils.helpers || {
			"makeArray": makeArray
		};
	}());
}

if (Utils) {
	(function () {

               /**
                * @module
                * Utils.node
                *
                * @description
                * Various DOM node method wrappers.
                *
                * @dependencies
                * * Utils.is
                * * Utils.can
                */

		var isNodeLike = Utils.is.nodeLike,
			isHostObject = Utils.is.hostObject,
			isArrayLike = Utils.is.arrayLike,
			canGetName = Utils.can.getName,
			canGetValue = Utils.can.getValue;

               /**
                * @public `Utils.node.prepend`.
                *
                * @description
                * Wrapper method for `insertBefore`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @see `Node::insertBefore`.
                * 
                * @param par Object
                * A node-like object that will attempt to prefix
                * a node-like object.
                *
                * @param newObj Object
                * A node-like object to prefix.
                * 
                * @param refObj Object
                * A node-like object to insert before.
                */

		function insertBefore(
			par,
			newObj,
			refObj
		)
		{
			var key = "insertBefore",
				result = null;
			if (isNodeLike(par) && isNodeLike(newObj) &&
				isNodeLike(refObj)) {
				if (isHostObject(par[key])) {
					result = par[key](
						newObj,
						refObj
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.node.prependList`.
                *
                * @description
                * Method that passes each element of an array-like
                * object to `insertBefore`.
                *
                * @see `insertBefore`.
                * 
                * @param par Object
                * A node-like object that will attempt to prepend
                * a list of node-like objects.
                *
                * @param list Array
                * A list of node-like objects to prepend.
                * 
                * @param refObj Object
                * A node-like object to prepend before.
                */

		function insertListBefore(
			par,
			list,
			refObj
		)
		{
			var max,
				aux,
				diff,
				result;
			if (isArrayLike(list)) {
				max = list.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					insertBefore(
						par,
						list[diff],
						refObj
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.node.append`
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
                * @public `Utils.node.appendList`.
                *
                * @description
                * Method that passes each element of an array-like
                * object to `appendChild`.
                *
                * @see `appendChild`.
                * 
                * @param par Object
                * A node-like object that will attempt to append
                * a list of node-like objects.
                * 
                * @param list Array
                * A list of node-like objects to append.
                */

		function appendList(
			par,
			list
		)
		{
			var max,
				aux,
				diff,
				result;
			if (isArrayLike(list)) {
				max = list.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					appendChild(
						par,
						list[diff]
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.node.remove`.
                *
                * @description
                * Wrapper method for `appendChild`; returns the
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
                * @public `Utils.node.replace`.
                *
                * @description
                * Wrapper method for `replaceChild`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @see `Node::replaceChild`.
                * 
                * @param par Object
                * A node-like object that will attempt to replace
                * another node-like object.
                * 
                * @param newObj Object
                * A node-like object to replace a node-like object
                * with.
                * 
                * @param oldObj Object
                * A node-like object to be replaced.
                */

		function replaceChild(
			par,
			newObj,
			oldObj
		)
		{
			var key = "replaceChild",
				result = null;
			if (isNodeLike(par) && isNodeLike(newObj) &&
				isNodeLike(oldObj)) {
				if (isHostObject(par[key])) {
					result = par[key](
						newObj,
						oldObj
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.node.clone`.
                *
                * @description
                * Wrapper method for `cloneNode`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @see `Node::cloneNode`.
                * 
                * @param obj Object
                * A node-like object to be cloned.
                * 
                * @param deep Boolean
                * A boolean determining if a "deep" (recursive)
                * clone will occur.
                */

		function cloneNode(
			obj,
			deep
		)
		{
			var key = "cloneNode",
				result = null;
			if (isNodeLike(obj)) {
				if (isHostObject(obj[key])) {
					result = obj[key](
						obj,
						deep
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.node.name`.
                *
                * @description
                * Wrapper method for `nodeName`; returns the
                * wrapped property's result or `null` if not
                * applicable.
                *
                * @see `Node::nodeName`.
                * @see `Element::tagName`.
                * 
                * @param obj Object
                * A node-like object to retrieve the `nodeName`
                * property from.
                * 
                * @param lower Boolean
                * A boolean determining if a the `nodeName` will
                * be returned in lower case form.
                */

		function getName(
			obj,
			lower
		)
		{
			var lowKey = "toLowerCase",
				upKey = "toUpperCase",
				result = null;
			if (canGetName(obj)) {
				result = obj.nodeName;
				if (lower) {
					result = result[lowKey]();
				} else if (!lower) {
					result = result[upKey]();
				}
			}
			return result;
		}

               /**
                * @public `Utils.node.value`.
                *
                * @description
                * Wrapper method for `nodeValue`; returns the
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

		function getValue(
			obj
		)
		{
			var result = null;
			if (canGetValue(obj)) {
				result = obj.nodeValue;
			}
			return result;
		}

		Utils.node = Utils.node || {
			"prepend": insertBefore,
			"prependList": insertListBefore,
			"append": appendChild,
			"appendList": appendList,
			"remove": removeChild,
			"replace": replaceChild,
			"clone": cloneNode,
			"name": getName,
			"value": getValue
		};
	}());
}
if (Utils) {
	(function () {

               /**
                * @module
                * Utils.create
                *
                * @description
                * Various creation method wrappers.
                *
                * @dependencies
                * * Utils.is
                */

		var isDocument = Utils.is.document,
			isHostObject = Utils.is.hostObject,

			doc,

			createElement,
			createElementNS,
			createText,
			createProcessingInstruction,
			createComment,
			createDocumentFragment;

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Variable containing the current document
                * node-like object or `null`.
                */

		doc = (function () {
			var result = null;
			if (global.document) {
				if (typeof global.document ===
					"object") {
					result = global.document;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method for `createElement`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @param doc Object
                * A document node-like object to create an element
                * node-like object in.
                *
                * @param tag String
                * A string representing the `tagName` of the created
                * element node-like object.
                *
                * @see `Document::createElement`.
                */

		function createElementNode(
			doc,
			tag
		)
		{
			var key = "createElement",
				result = null;
			if (isDocument(doc)) {
				result = doc[key](
					tag
				);
			}
			return result;
		}

               /**
                * @public `Utils.create.element`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * the result of `createElementNode` or `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to create an element
                * node-like object in.
                *
                * @param tag String
                * A string representing the `tagName` of the created
                * element node-like object.
                *
                * @see `createElementNode`.
                */

		createElement = (function () {
			var key = "createElement",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = createElementNode;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method for `createElementNS`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @param doc Object
                * A document node-like object to create an element
                * node-like object in.
                *
                * @param uri String
                * A string representing the namespace URI of the
                * element node-like object to be created.
                *
                * @param name String
                * A string representing the qualified name
                * ([namespace:]local) of the element node-like object
                * to be created.
                *
                * @see `Document::createElementNS`.
                */

		function createElementNodeNS(
			doc,
			uri,
			name
		)
		{
			var key = "createElementNS",
				result = null;
			if (isDocument(doc)) {
				result = doc[key](
					uri,
					name
				);
			}
			return result;
		}

               /**
                * @public `Utils.create.elementNS`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * the result of `createElementNodeNS` or `null`
                * if not applicable.
                *
                * @param uri String
                * A string representing the namespace URI of the
                * element node-like object to be created.
                *
                * @param name String
                * A string representing the qualified name
                * ([namespace:]local) of the element node-like object
                * to be created.
                *
                * @see `createElementNodeNS`.
                */

		createElementNS = (function () {
			var key = "createElementNS",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = createElementNodeNS;
				}
			}
			return result;
		}());

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
			var key = "createTextNode",
				result = null;
			if (isDocument(doc)) {
				result = doc[key](
					text
				);
			}
			return result;
		}

               /**
                * @public `Utils.create.text`.
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
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = createTextNode;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method for `createProcessingInstruction`;
                * returns the wrapped method's result or `null` if
                * not applicable.
                *
                * @param doc Object
                * A document node-like object to create a
                * processing instruction node-like object in.
                *
                * @param target String
                * A string representing the `target` of the created
                * processing instruction node-like object.
                *
                * @param text String
                * A string representing the `nodeValue` of the created
                * processing instruction node-like object.
                *
                * @see `Document::createProcessingInstruction`.
                */

		function createPINode(
			doc,
			target,
			text
		)
		{
			var key = "createProcessingInstruction",
				result = null;
			if (isDocument(doc)) {
				result = doc[key](
					target,
					text
				);
			}
			return result;
		}

               /**
                * @public `Utils.create.processingInstruction`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * the result of `createPINode` or
                * `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to create a
                * processing instruction node-like object in.
                *
                * @param target String
                * A string representing the `target` of the created
                * processing instruction node-like object.
                *
                * @param text String
                * A string representing the `nodeValue` of the created
                * processing instruction node-like object.
                *
                * @see `createPINode`.
                */

		createProcessingInstruction = (function () {
			var key = "createProcessingInstruction",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = createPINode;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method for `createComment`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @param doc Object
                * A document node-like object to create a comment
                * node-like object in.
                *
                * @param text String
                * A string representing the `nodeValue` of the created
                * comment node-like object.
                *
                * @see `Document::createComment`.
                */

		function createCommentNode(
			doc,
			text
		)
		{
			var key = "createComment",
				result = null;
			if (isDocument(doc)) {
				result = doc[key](
					text
				);
			}
			return result;
		}

               /**
                * @public `Utils.create.comment`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * the result of `createCommentNode` or `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to create a comment
                * node-like object in.
                *
                * @param text String
                * A string representing the `nodeValue` of the created
                * comment node-like object.
                *
                * @see `createCommentNode`.
                */

		createComment = (function () {
			var key = "createComment",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = createCommentNode;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method for `createDocumentFragment`;
                * returns the wrapped method's result or `null` if
                * not applicable.
                *
                * @param doc Object
                * A document node-like object to create a
                * document fragment node-like object in.
                *
                * @see `Document::createDocumentFragment`.
                */

		function createDocFragNode(
			doc
		)
		{
			// FIXME: in IE 5, doc.cDF is uncallable.
			var key = "createDocumentFragment",
				result = null;
			if (isDocument(doc)) {
				result = doc[key]();
			}
			return result;
		}

               /**
                * @public `Utils.create.documentFragment`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * the result of `createDocFragNode` or `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to create a
                * document fragment node-like object in.
                *
                * @see `createDocFragNode`.
                */

		createDocumentFragment = (function () {
			var key = "createDocumentFragment",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = createDocFragNode;
				}
			}
			return result;
		}());

		doc = null;

		Utils.create = Utils.create || {
			"element": createElement,
			"elementNS": createElementNS,
			"text": createText,
			"processingInstruction":
				createProcessingInstruction,
			"comment": createComment,
			"documentFragment":
				createDocumentFragment
		};
	}());
}

if (Utils) {
	(function () {

               /**
                * @module
                * Utils.classes
                *
                * @description
                * DOM Level 4-style `classList` implementation with
                * additional features.
                *
                * @see DOM 4 Spec section 5.7 (Element, classList).
                * @see DOM 4 Spec section 9.2 (DOMTokenList).
                *
                * @dependencies
                * * Utils.raise
                * * Utils.is
                * * Utils.helpers
                */

		var invalidChars,
			isDocument = Utils.is.document,
			isElement = Utils.is.element,
			isHostObject = Utils.is.hostObject,
			raiseInvalid = Utils.raise.invalidCharacter,
			raiseSyntax = Utils.raise.syntax,
			isArrayLike = Utils.is.arrayLike,
			makeArray = Utils.helpers.makeArray,

			doc,
			body,

			canGetClassName,
			canUseClassList,
			forkHasClass,
			hasClass,
			forkAddClass,
			addClass,
			forkRemoveClass,
			removeClass,
			forkToggleClass,
			toggleClass,
			getClasses;

               /**
                * @private
                *
                * @description
                * Object containing characters whose presence is
                * considered invalid in a token list.
                * node or `null`.
                */

		invalidChars = {
			" ": true,
			"\t": true,
			"\n": true,
			"\f": true,
			"\r": true
		};

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Variable containing the current document
                * node-like object or `null`.
                */

		doc = (function () {
			var result = null;
			if (isDocument(global.document)) {
				result = global.document;
			}
			return result;
		}());

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Variable containing the current body
                * node-like object or `null`.
                */

		body = (function () {
			var result = null;
			if (doc && doc.body) {
				result = doc.body;
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Boolean asserting if element node-like objects
                * can retrieve the `className` property.
                */

		canGetClassName = (function () {
			var result = false;
			if (isElement(body)) {
				result = typeof body.className ===
					"string";
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Boolean asserting if element node-like objects
                * can retrieve the `classList` property.
                */

		canUseClassList = (function () {
			var result = false;
			if (isElement(body)) {
				result = isHostObject(
					body.classList
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method that returns a closure, wrapping
                * a specified key and initial return value.
                *
                * @param method String
                * A string containing the key of the method to be
                * called.
                *
                * @param base *
                * An initial return value.
                */

		function forkMethod(
			method,
			base
		)
		{
			var key = method,
				result = base;
			return function (obj, token) {
				if (isElement(obj)) {
					result = obj.classList[key](
						token
					);
				}
				return result;
			};
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * the result of `forkMethod` or `null`
                * if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkMethod`.
                */

		forkHasClass = (function () {
			var key = "contains",
				result = null;
			if (body && canUseClassList &&
				isHostObject(body.classList[key])) {
				result = forkMethod(
					key,
					"false"
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method that returns a boolean asserting if
                * the character passed is "valid" for use within a
                * class "token"; throws an error if the character is
                * a key of `invalidChars` or if it is an empty string.
                *
                * @param chr String
                * A string containing the character to assert.
                *
                * @throws `Utils.raise.types.invalidCharacter`;
                */

		function checkCharacter(
			chr
		)
		{
			var invalidChar = invalidChars[chr],
				result = false;
			if (typeof invalidChar !== "undefined") {
				raiseInvalid();
			} else if (chr === "") {
				raiseSyntax();
			} else if (typeof invalidChar ===
				"undefined") {
				result = true;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if
                * the token specified contains any invalid
                * characters.
                *
                * @param token String
                * A string containing the token to assert.
                */

		function checkToken(
			token
		)
		{
			var index = 0,
				max,
				result = true;
			if (token && token.length) {
				max = token.length;
				for (index; index < max; index += 1) {
					result = checkCharacter(
						token.charAt(index)
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that returns a modified list of
                * tokens depending on the validity of the
                * character passed, ignoring spaces.
                *
                * @param chr String
                * A string containing the character to check.
                *
                * @param sequence String
                * A string containing the sequence to use.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * modify.
                */

		function handleCharacter(
			chr,
			sequence,
			tokens
		)
		{
			var validChar = false,
				result = "";
			if (chr && chr !== " ") {
				validChar = checkCharacter(chr);
			}
			if (!validChar && sequence.length) {
				tokens[tokens.length] = sequence;
			} else if (validChar) {
				result = sequence + chr;
			}
			return result;
		}

               /**
                * @private
                * 
                * @description
                * Method that builds a token list from a
                * (space-separated) string.
                *
                * @param chars String
                * A string containing the characters to handle.
                *
                * @see DOM Level 4 Spec 2.3.2 (Space-separated
                * tokens).
                */

		function buildTokenList(
			chars
		)
		{
			var index = 0,
				max,
				sequence = "",
				result = [];
			if (chars && chars.length) {
				max = chars.length + 1;
				for (index; index < max; index += 1) {
					sequence = handleCharacter(
						chars.charAt(index),
						sequence,
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
                * Method that returns a token list of an element
                * node-like object; returns `null` if not
                * applicable.
                *
                * @param obj Object
                * An element node-like object to use.
                */

		function buildClassList(
			obj
		)
		{
			var result = [];
			if (canGetClassName) {
				result = buildTokenList(
					obj.className
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that returns a boolean asserting
                * if the specified token can be found in a token
                * list.
                *
                * @param list Array
                * An array-like object of tokens to search.
                *
                * @param find String
                * A string containing the token to find.
                */

		function findToken(
			list,
			find
		)
		{
			var index = 0,
				max,
				result = false;
			max = list.length;
			for (index; index < max; index += 1) {
				if (find === list[index]) {
					result = true;
					break;
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that returns a boolean asserting
                * if the specified token is valid and is present
                * in a specific token list.
                *
                * @param list Array
                * An array-like object of tokens to search.
                *
                * @param token String
                * A string containing the token to find.
                */

		function attemptTokenSearch(
			list,
			token
		)
		{
			var result = false;
			if (checkToken(token)) {
				result = findToken(
					list,
					token
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting
                * if the specified token is contained by a specific
                * element node-like object's token list; returns
                * `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param token String
                * A string containing the token to find.
                */

		function hasSingleClass(
			obj,
			token
		)
		{
			var result = null;
			if (isElement(obj)) {
				result = attemptTokenSearch(
					buildClassList(obj),
					token
				);
			}
			return result;
		}

               /**
                * @public `Utils.classes.contains`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * boolean asserting if the specified token is
                * contained by a specific element node-like object's
                * token list; returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkHasClass`.
                * @see `hasSingleClass`.
                */

		hasClass = (function () {
			var result = null;
			if (canUseClassList) {
				result = forkHasClass;
			} else if (!canUseClassList &&
				isElement(body)) {
				result = hasSingleClass;
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method that iterates over the specified list
                * of tokens and returns a boolean asserting their
                * presence in a specific element node-like object's
                * token list.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * search for.
                */

		function searchClassesInList(
			obj,
			tokens
		)
		{
			var index = 0,
				max = tokens.length,
				result = true;
			if (hasClass) {
				while (index < max && result) {
					result = hasClass(
						obj,
						tokens[index]
					);
					index += 1;
				}
			}
			return result;
		}

               /**
                * @public `Utils.classes.containsList`.
                *
                * @description
                * Method that returns a boolean asserting if an
                * array-like object of tokens is contained by
                * a token list (independent of order).
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * search for.
                */

		function hasClasses(
			obj,
			tokens
		)
		{
			var result = false;
			if (isElement(obj)) {
				if (isArrayLike(tokens)) {
					result = searchClassesInList(
						obj,
						tokens
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
                * Wrapper method that returns (via a closure)
                * the result of `forkMethod` or `null`
                * if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkMethod`.
                */

		forkAddClass = (function () {
			var result = null;
			if (body && canUseClassList &&
				isHostObject(body.classList.add)) {
				result = forkMethod(
					"add"
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method that returns a boolean asserting
                * if the specified token list already contains
                * a specific token and can be added to a token list.
                *
                * @param obj Object
                * An object used as the source of a token list.
                *
                * @param add String
                * A string containing a token to be added to a
                * specific token list.
                *
                * @param list Array
                * An array-like object to be modified.
                */

		function attemptClassAddition(
			obj,
			add,
			list
		)
		{
			var result = false;
			if (hasClass) {
				if (!hasClass(obj, add)) {
					list[list.length] = add;
					result = true;
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that returns a boolean asserting
                * if the specified token is valid and can be added
                * to a specific token list.
                *
                * @param obj Object
                * An object used as the source of a token list.
                *
                * @param token String
                * A string containing a token to be added to a
                * specific token list.
                *
                * @param list Array
                * An array-like object to be modified.
                */

		function classAdditionCheck(
			obj,
			token,
			list
		)
		{
			var result = false;
			if (checkToken(token)) {
				result = attemptClassAddition(
					obj,
					token,
					list
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that assigns the specified token list
                * to a node-like object's `className` property as a
                * string.
                *
                * @param obj Object
                * An element node-like object whose `className`
                * property will be overridden.
                *
                * @param list Array
                * An array-like object of tokens to be sourced.
                */

		function overwriteClass(
			obj,
			list
		)
		{
			var result;
			if (canGetClassName) {
				obj.className = list.join(" ");
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that add a single token to a token list and
                * applies the list to the specified node-like
                * object's `className` property.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param token String
                * A string containing the token to add.
                */

		function addSingleClass(
			obj,
			token
		)
		{
			var list,
				result;
			if (isElement(obj)) {
				list = buildClassList(obj);
				classAdditionCheck(
					obj,
					token,
					list
				);
				overwriteClass(obj, list);
			}
			return result;
		}

               /**
                * @public `Utils.classes.add`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * boolean asserting if the specified token is
                * contained by a specific element node-like object's
                * token list and adds it to the token list; returns
                * `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkAddClass`.
                * @see `addSingleClass`.
                */

		addClass = (function () {
			var result = null;
			if (canUseClassList){
				result = forkAddClass;
			} else if (!canUseClassList &&
					isElement(body)) {
				result = addSingleClass;
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method that iterates over the specified list
                * of tokens and adds them to a specific element
                * node-like object's token list.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * add.
                */

		function addClassesToList(
			obj,
			tokens
		)
		{
			var index = 0,
				max = tokens.length,
				result;
			if (addClass) {
				for (index; index < max; index += 1) {
					addClass(
						obj,
						tokens[index]
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.classes.addList`.
                *
                * @description
                * Method that adds an array-like object of tokens to
                * a specified token list.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * add.
                */

		function addClasses(
			obj,
			tokens
		)
		{
			var result;
			if (isElement(obj)) {
				if (isArrayLike(tokens)) {
					addClassesToList(
						obj,
						tokens
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
                * Wrapper method that returns (via a closure)
                * the result of `forkMethod` or `null`
                * if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkMethod`.
                */

		forkRemoveClass = (function () {
			var key = "remove",
				result = null;
			if (body && canUseClassList &&
				isHostObject(body.classList[key])) {
				result = forkMethod(
					key
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method that removes the specified token
                * from a specific token list if it is inside of
                * the list.
                *
                * @param remove String
                * A token to be remove from a specific token list.
                *
                * @param list Array
                * An array-like object to be modified.
                */

		function removeToken(
			remove,
			list
		)
		{
			var max = list.length - 1,
				aux = max,
				diff,
				cleaned = 0,
				token,
				result;
			for (aux; aux > -1; aux -= 1) {
				diff = max - aux;
				token = list[diff];
				if (token === remove) {
					delete list[diff];
				} else if (token !== remove) {
					delete list[diff];
					list[cleaned] = token;
					cleaned += 1;
				}
			}
			list.length = cleaned;
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that attempts to remove the
                * specified token from a specific token list.
                *
                * @param obj Object
                * An object used as the source of a token list.
                *
                * @param remove String
                * A string containing a token to remove from a
                * specific token list.
                *
                * @param list Array
                * An array-like object to be modified.
                */

		function attemptClassRemoval(
			obj,
			remove,
			list
		)
		{
			var result;
			if (hasClass) {
				if (hasClass(obj, remove)) {
					result = removeToken(
						remove,
						list
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that checks the specified token
                * and attempts to remove it from a specific token
                * list.
                *
                * @param obj Object
                * An object used as the source of a token list.
                *
                * @param token String
                * A string containing a token to remove from
                * a specific token list.
                *
                * @param list Array
                * An array-like object to be modified.
                */

		function classRemovalCheck(
			obj,
			token,
			list
		)
		{
			var result;
			if (checkToken(token)) {
				attemptClassRemoval(
					obj,
					token,
					list
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that removes a single token from a token
                * list and applies the list to the specified
                * node-like object's `className` property.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param token String
                * A string containing the token to remove.
                */

		function removeSingleClass(
			obj,
			token
		)
		{
			var list,
				result;
			if (isElement(obj)) {
				list = buildClassList(obj);
				classRemovalCheck(
					obj,
					token,
					list
				);
				overwriteClass(obj, list);
			}
			return result;
		}

               /**
                * @public `Utils.classes.remove`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * boolean asserting if the specified token is
                * contained by a specific element node-like object's
                * token list and removes it from the token list;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkRemoveClass`.
                * @see `removeSingleClass`.
                */

		removeClass = (function () {
			var result = null;
			if (canUseClassList) {
				result = forkRemoveClass;
			} else if (!canUseClassList &&
				isElement(body)) {
				result = removeSingleClass;
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method that iterates over the specified list
                * of tokens and removes them from a specific element
                * node-like object's token list.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * remove.
                */

		function removeClassesFromList(
			obj,
			tokens
		)
		{
			var max = tokens.length,
				aux = max,
				diff,
				result;
			if (removeClass) {
				for (aux; aux > -1; aux -= 1) {
					diff = max - aux;
					removeClass(
						obj,
						tokens[diff]
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.classes.removeList`.
                *
                * @description
                * Method that removes an array-like object of tokens
                * from a specified token list.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * remove.
                */

		function removeClasses(
			obj,
			tokens
		)
		{
			var result;
			if (isElement(obj)) {
				if (isArrayLike(tokens)) {
					removeClassesFromList(
						obj,
						tokens
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
                * Wrapper method that returns (via a closure)
                * the result of `forkMethod` or `null`
                * if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkMethod`.
                */

		forkToggleClass = (function () {
			var key = "toggle",
				result = null;
			if (body && canUseClassList &&
				isHostObject(body.classList[key])) {
				result = forkMethod(
					key,
					"false"
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that toggles a single token from a token
                * list and applies the list to the specified
                * node-like object's `className` property.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param token String
                * A string containing the token to toggle.
                */

		function toggleSingleClass(
			obj,
			token
		)
		{
			var has,
				result = false;
			if (isElement(obj) && hasClass) {
				has = hasClass(obj, token);
				if (!has && addClass) {
					addClass(
						obj,
						token
					);
					result = true;
				} else if (has && removeClass) {
					removeClass(
						obj,
						token
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.classes.toggle`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * boolean asserting if the specified token can
                * be removed from a specific element node-like
                * object's token list and removes or adds it to
                * the token list; returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkToggleClass`.
                * @see `toggleSingleClass`.
                */

		toggleClass = (function () {
			var result = null;
			if (doc) {
				if (canUseClassList) {
					result = forkToggleClass;
				} else if (!canUseClassList &&
					isElement(body)) {
					result = toggleSingleClass;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method that iterates over the specified list
                * of tokens and toggles them on a specific element
                * node-like object's token list.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * toggle.
                */

		function toggleClassesInList(
			obj,
			tokens
		)
		{
			var index = 0,
				max = tokens.length,
				result;
			if (toggleClass) {
				for (index; index < max; index += 1) {
					toggleClass(
						obj,
						tokens[index]
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.classes.toggleList`.
                *
                * @description
                * Method that toggles an array-like object of tokens
                * on a specified token list.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * toggle.
                */

		function toggleClasses(
			obj,
			tokens
		)
		{
			var result;
			if (isElement(obj)) {
				if (isArrayLike(tokens)) {
					toggleClassesInList(
						obj,
						tokens
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.classes.item`.
                *
                * @description
                * Method that returns the token at the specified
                * index in a specific node-like object's token list;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param index Number
                * A number to be the index retrieve.
                */

		function getClass(
			obj,
			index
		)
		{
			var tokens,
				result = null;
			if (isElement(obj)) {
				tokens = buildClassList(obj);
				if (index >= 0 && 
					index < tokens.length) {
					result = tokens[index];
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a node-like object's token
                * list converted to an array-like object.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                */

		function wrapClassList(
			obj
		)
		{
			var result = null;
			if (isElement(obj)) {
				result = makeArray(
					obj.classList
				);
			}
			return result;
		}

               /**
                * @public `Utils.classes.get`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * an array-like object containing a node-like
                * token list returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @see `wrapClassList`.
                * @see `buildClassList`.
                */

		getClasses = (function () {
			var result = null;
			if (body) {
				if (canUseClassList) {
					result = wrapClassList;
				} else if (!canUseClassList &&
					isElement(body)) {
					result = buildClassList;
				}
			}
			return result;
		}());

		doc = null;
		body = null;

		Utils.classes = Utils.classes || {
			"contains": hasClass,
			"containsList": hasClasses,

			"add": addClass,
			"addList": addClasses,

			"remove": removeClass,
			"removeList": removeClasses,

			"toggle": toggleClass,
			"toggleList": toggleClasses,

			"item": getClass,
			"get": getClasses
		};
	}());
}

if (Utils) {
	(function () {

               /**
                * @module
                * Utils.classes
                *
                * @description
                * DOM Level 4-style `classList` implementation with
                * additional features.
                *
                * @see DOM 4 Spec section 5.7 (Element, classList).
                * @see DOM 4 Spec section 9.2 (DOMTokenList).
                *
                * @dependencies
                * * Utils.raise
                * * Utils.is
                * * Utils.helpers
                */

		var isDocument = Utils.is.document,
			nodeTypes = Utils.types,
			isNodeLike = Utils.is.nodeLike,
			isHostObject = Utils.is.hostObject,
			makeArray = Utils.helpers.makeArray,
			isArrayLike = Utils.is.arrayLike,
			isElement = Utils.is.element,
			removeNode = Utils.node.remove,
			isText = Utils.is.text,
			canGetValue = Utils.can.getValue,
			createText = Utils.create.text,

			doc,

			textGetters,
			textSetters,
			getChildren,
			textGetterDecisions,
			textSetterDecisions;

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Variable containing the current document
                * node-like object or `null`.
                */

		doc = (function () {
			var result = null;
			if (isDocument(global.document)) {
				result = global.document;
			}
			return result;
		}());

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
                * @public `Utils.traverse.getNodes`.
                *
                * @description
                * Method that returns an array-like object of
                * `childNodes` collected from a node-like object;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to process.
                */

		function getChildNodes(
			obj
		)
		{
			var key = "childNodes",
				result = null;
			if (isNodeLike(obj)) {
				if (isHostObject(obj[key])) {
					result = makeArray(
						obj[key]
					);
				}
			}
			return result;
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
				called = callback(obj);
				if (called === true) {
					result[result.length] = obj;
				} else if (called) {
					result[result.length] = called;
				}
			}
		}

               /**
                * @public `Utils.traverse.linear`.
                *
                * @description
                * Method that traverses an array-like object,
                * calling a callback on each element; results are
                * returned as an array-like object.
                *
                * @param obj Array
                * An array-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                */

		function traverseLinear(
			obj,
			callback
		)
		{
			var max,
				aux,
				diff,
				result = [];
			if (isArrayLike(obj)) {
				max = obj.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					pushCallback(
						obj[diff],
						callback,
						result
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.nodes`.
                *
                * @description
                * Method that traverses a node-like object's
                * `childNodes` (via `traverseLinear`), calling a
                * callback on each node-like object; results are
                * returned as an array-like object.
                *
                * @param obj Object
                * A node-like object to source `childNodes` from.
                *
                * @param callback Function
                * A function to call.
                *
                * @see `traverseLinear`.
                */

		function traverseChildNodes(
			obj,
			callback
		)
		{
			var result = [];
			if (typeof callback === "function") {
				result = traverseLinear(
					getChildNodes(obj),
					callback
				);
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
				removeNode(
					obj.parentNode,
					obj
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.clearNodes`.
                *
                * @description
                * Method that clears a node-like object's
                * `childNodes` (via `traverseChildNodes`),
                * returning them upon successful removal;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to clear `childNodes` from.
                *
                * @see `traverseChildNodes`.
                */

		function clearChildNodes(
			obj
		)
		{
			var result = null;
			if (isNodeLike(obj)) {
				result = traverseChildNodes(
					obj,
					clearNode
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method used as a callback for `traverse*`; returns
                * a boolean asserting if the specified node-like
                * object passed is an element node-like object.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function filterElementNode(
			obj
		)
		{
			var result = false;
			if (isElement(obj)) {
				result = true;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that collects the specified
                * element node-like object's `children` as an
                * array-like object; returns `null` if not
                * applicable.
                *
                * @param obj Object
                * An element node-like object to traverse.
                *
                * @see `traverseLinear`.
                */

		function forkChildren(
			obj
		)
		{
			return traverseLinear(
				getChildNodes(obj),
				filterElementNode
			);
		}

               /**
                * @private
                *
                * @description
                * Helper method that collects the specified
                * element node-like object's `children` via its
                * `children` property as an array-like object;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to traverse.
                */

		function getNativeChildren(
			obj
		)
		{
			var key = "children",
				result = null;
			if (isElement(obj)) {
				if (isHostObject(obj[key])) {
					result = makeArray(
						obj[key]
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if `obj`
                * can access the `children` property.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canGetChildren(
			obj
		)
		{
			var result = false;
			if (isElement(obj)) {
				result = isHostObject(
					obj.children
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.getElements`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) an
                * array-like object of element node-like objects
                * from an element node-like object; returns `null`
                * if not applicable.
                *
                * @see `getNativeChildren`.
                * @see `forkChildren`.
                */

		getChildren = (function () {
			var canGet,
				result;
			if (doc) {
				canGet = canGetChildren(doc.body);
				if (canGet) {
					result = getNativeChildren;
				} else if (!canGet) {
					result = forkChildren;
				}
			}
			return result;
		}());

               /**
                * @public `Utils.traverse.elements`.
                *
                * @description
                * Method that traverses an element node-like object's
                * `children` (via `traverseLinear`), calling a
                * callback on each element node-like object; results
                * are returned as an array-like object.
                *
                * @param obj Object
                * An element node-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @see `traverseLinear`.
                */

		function traverseChildren(
			obj,
			callback
		)
		{
			var result = [];
			if (getChildren) {
				if (typeof callback === "function") {
					result = traverseLinear(
						getChildren(obj),
						callback
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method used as a callback for `traverse*`; returns
                * a boolean asserting if the specified node-like
                * object passed is an element node-like object and
                * can be removed.
                *
                * @param obj Object
                * An element node-like object to assert.
                */

		function removeElementNode(
			obj
		)
		{
			var result = false;
			if (isElement(obj)) {
				result = clearNode(
					obj
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.clearElements`.
                *
                * @description
                * Method that clears an element node-like object's
                * `children`, returning them upon successful
                * removal; returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to clear `children`
                * from.
                *
                * @see `traverseChildren`.
                */

		function clearChildren(
			obj
		)
		{
			var result = null;
			if (isNodeLike(obj)) {
				result = traverseChildren(
					obj,
					removeElementNode
				);
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
				result = obj.nodeValue;
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
			var result = null;
			if (canGetValue(obj)) {
				result = obj.nodeValue;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that adds a node-like object and an
                * array-like object (tree) to an array-like object.
                *
                * @param obj Object
                * A node-like object to add.
                *
                * @param tree Array
                * An array-like object (tree) to add.
                *
                * @param par Array
                * An array-like object to modify.
                *
                * @see `collectChildNodeTree`.
                */

		function addTree(
			obj,
			tree,
			par
		)
		{
			var result;
			par[par.length] = obj;
			if (tree.length) {
				par[par.length] = tree;
			}
			return result;
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
				result = isHostObject(obj.childNodes);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Recursive method that returns an array-like object
                * from a node-like object's subtree.
                * 
                *
                * @param obj Object
                * A node-like object to traverse.
                */

		function collectChildNodeTree(
			obj
		)
		{
			var max,
				aux,
				diff,
				tree,
				result = [];
			if (canTraverse(obj)) {
				max = obj.childNodes.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					tree = collectChildNodeTree(
						obj.childNodes[diff]
					);
					addTree(
						obj.childNodes[diff],
						tree,
						result
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.getNodeTree`.
                *
                * @description
                * Method that collects an array-like object from
                * the specified node-like object's subtree; returns
                * `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to traverse.
                */

		function getChildNodeTree(
			obj
		)
		{
			var key = "childNodes",
				result = null;
			if (isNodeLike(obj)) {
				if (isHostObject(obj[key])) {
					result = collectChildNodeTree(
						obj
					);
				}
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
				result = nodes.join("");
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
                * @public `Utils.traverse.getText`.
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
					result = decision(obj);
				}
			}
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
                * @param text String
                * A string containing textual content to add.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @param doc Object
                * A document node-like object used to create a text
                * node-like object.
                *
                * @see `setText`.
                */

		function overrideText(
			text,
			obj,
			doc
		)
		{
			var textNode,
				result = null;
			text = text || "";
			if (isNodeLike(obj)) {
				if (isDocument(doc)) {
					textNode = createText(
						doc,
						text
					);
					clearChildNodes(obj);
					Utils.node.append(
						obj,
						textNode
					);
					result = Utils.node.value(
						textNode
					);
				}
			}
			return result;
		}

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
			text,
			obj
		)
		{
			var result = null;
			text = text || "";
			if (Utils.can.getValue(obj)) {
				obj.nodeValue = text;
				result = obj.nodeValue;
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
                * @public `Utils.traverse.setText`.
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
                * @see DOM 4 Spec section 5.3 (`Node::textContent`,
                * setting).
                */

		function setText(
			text,
			obj,
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
						text,
						obj,
						doc
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.recursive`.
                *
                * @description
                * Recursive method that traverses an array-like
                * object, calling a callback on each element; results
                * are returned as an array-like object.
                *
                * @param obj Array
                * An array-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @param result Array
                * An array-like object used to collect callback
                * results.
                */

		function traverseRecursive(
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
			if (isArrayLike(obj)) {
				max = obj.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					traverseRecursive(
						obj[diff],
						callback,
						result
					);
					pushCallback(
						obj[diff],
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
                * Helper method that passes the specified node-like
                * object and a specific array-like object for
                * processing if the specified node-like object
                * is an element node-like object.
                *
                * @param obj Object
                * A node-like object to add.
                *
                * @param tree Array
                * An array-like object to add.
                *
                * @param collection Array
                * An array-like object to modify.
                */

		function addRecursiveChild(
			obj,
			tree,
			collection
		)
		{
			var result;
			if (isElement(obj)) {
				addTree(
					obj,
					tree,
					collection
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Recursive method that traverses the specified
                * element node-like object's subtree and returns an
                * array-like object of element node-like objects.
                *
                * @param obj Object
                * An element node-like object to traverse.
                */

		function collectChildrenTree(
			obj
		)
		{
			var max,
				aux,
				diff,
				tree,
				result = [];
			if (canTraverse(obj)) {
				max = obj.childNodes.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					tree = collectChildrenTree(
						obj.childNodes[diff]
					);
					addRecursiveChild(
						obj.childNodes[diff],
						tree,
						result
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.getElementTree`.
                *
                * @description
                * Recursive method that returns an array-like object
                * containing element node-like objects from the
                * specified element node-like object's subtree;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to traverse.
                */

		function getChildrenTree(
			obj
		)
		{
			var key = "childNodes",
				result = null;
			if (isNodeLike(obj)) {
				if (isHostObject(obj[key])) {
					result = collectChildrenTree(
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
                * Helper method that passes the specified node-like
                * object for processing if the specified node-like
                * object is an element node-like object.
                *
                * @param obj Object
                * A node-like object to add.
                *
                * @param callback Function
                * An function to call.
                *
                * @param collection Array
                * An array-like object to modify.
                */

		function handleRecursiveChild(
			obj,
			callback,
			collection
		)
		{
			var result;
			if (isElement(obj)) {
				pushCallback(
					obj,
					callback,
					collection
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.elementTree`.
                *
                * @description
                * Method that traverses an element node-like object's
                * subtree, calling a callback only on each element
                * node-like object in the subtree; results are
                * returned as an array-like object.
                *
                * @param obj Object
                * An element node-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @param result Array
                * An array-like object used to collect callback
                * results.
                */

		function traverseChildrenTree(
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
					traverseChildrenTree(
						obj.childNodes[diff],
						callback,
						result
					);
					handleRecursiveChild(
						obj.childNodes[diff],
						callback,
						result
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.getAncestors`.
                *
                * @description
                * Method that returns a linked list of ancestors of a
                * node-like object to the top of the document tree
                * (`document`); returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @example `getAncestorList(document.body);`
                *       return {
                *               "parent": {
                *                       "parent": null,
                *                       "value": [`document`]
                *               },
                *               "value": [`documentElement`]
                *       };
                */

		function getAncestorList(
			obj
		)
		{
			var key = "parent",
				result = null;
			if (isNodeLike(obj)) {
				if (obj.parentNode) {
					result = {};
					result.value = obj.parentNode;
					result[key] = getAncestorList(
						obj.parentNode
					);
				} else if (!obj.parentNode) {
					result = null;
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method returning a boolean asserting if a linked
                * list-like object (preferably created via
                * `getAncestorList`) contains an object.
                *
                * @param list Object
                * A linked list-like object to traverse.
                *
                * @param obj Object
                * An object to find.
                *
                * @see `getAncestorList`.
                */

		function listContainsNode(
			list,
			obj
		)
		{
			var key = "parent",
				result = false;
			if (isNodeLike(obj)) {
				while (list) {
					if (list.value === obj) {
						result = true;
						break;
					}
					list = list[key];
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.isAncestor`.
                *
                * @description
                * Method returning a boolean asserting if the
                * specified node-like object is an ancestor of a
                * specific node-like object.
                *
                * @param par Object
                * A node-like object to find.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @see `listContainsNode`.
                */

		function isAncestor(
			par,
			obj
		)
		{
			var list,
				result = false;
			if (isNodeLike(obj)) {
				list = getAncestorList(obj);
				result = listContainsNode(
					list,
					par
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that returns a boolean asserting if
                * a linked list can be traversed.
                *
                * @param list Object
                * A linked list-like object to assert.
                */

		function canTraverseList(
			list
		)
		{
			var result = false;
			if (list && typeof list === "object") {
				result = typeof list.value ===
					"object";
			}
			return result;
		}

               /**
                * @public `Utils.traverse.list`.
                *
                * @description
                * Method that traverses a linked list-like
                * object, calling a callback on each node in the
                * list-like object; results are returned as an
                * array-like object.
                *
                * @param list Object
                * A linked list-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                */

		function traverseList(
			list,
			callback
		)
		{
			var key = "parent",
				result = [];
			if (canTraverseList(list)) {
				while (list) {
					pushCallback(
						list.value,
						callback,
						result
					);
					list = list[key];
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.ancestors`.
                *
                * @description
                * Method that traverses a node-like object's
                * ancestral tree (via `traverseList`), calling a
                * callback on each node in the list-like object;
                * results are returned as an array-like object.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @see `traverseList`.
                */

		function traverseAncestors(
			obj,
			callback
		)
		{
			var result = [];
			if (typeof callback === "function") {
				result = traverseList(
					getAncestorList(obj),
					callback
				);
			}
			return result;
		}

		doc = null;

		Utils.traverse = Utils.traverse || {
			"getNodes": getChildNodes,

			"linear": traverseLinear,
			"nodes": traverseChildNodes,
			"clearNodes": clearChildNodes,

			"getElements": getChildren,
			"elements": traverseChildren,
			"clearElements": clearChildren,

			"getNodeTree": getChildNodeTree,

			"nodeTree": traverseChildNodeTree,

			"getText": getText,
			"setText": setText,

			"recursive": traverseRecursive,

			"getElementTree": getChildrenTree,
			"elementTree": traverseChildrenTree,

			"getAncestors": getAncestorList,
			"isAncestor": isAncestor,
			"list": traverseList,
			"ancestors": traverseAncestors
		};
	}());
}

if (Utils) {
	(function () {

               /**
                * @module
                * Utils.select
                *
                * @description
                * Various selection wrappers.
                *
                * @dependencies
                * * Utils.types
                * * Utils.is
                * * Utils.helpers
                */

		var nodeTypes = Utils.types,
			isNodeLike = Utils.is.nodeLike,
			makeArray = Utils.helpers.makeArray,
			isDocument = Utils.is.document,
			isHostObject = Utils.is.hostObject,
			isElement = Utils.is.element,
			isArrayLike = Utils.is.arrayLike,

			doc,

			selectorTypes,

			getHead,
			getBody,
			getElementsByName,
			getElementsByTagName,
			getElementsByTagNameNS,
			getElementsByClassName,
			getElementById,
			querySelector,
			querySelectorAll,
			getImages,
			getAllImages,
			getEmbeds,
			getAllEmbeds,
			getLinks,
			getAllLinks,
			getForms,
			getAllForms,
			getScripts,
			getAllScripts,
			getApplets,
			getAllApplets,
			getAnchors,
			getAllAnchors;

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Variable containing the current document
                * node-like object or `null`.
                */

		doc = (function () {
			var result = null;
			if (isDocument(global.document)) {
				result = global.document;
			}
			return result;
		}());

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Object containing applicable `nodeType` property
                * values for `querySelector*`.
                */

		selectorTypes = (function () {
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = true;
			result[nodeTypes.DOCMENT_NODE] = true;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] = true;
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method that returns a boolean asserting if
                * a node-like object can call `querySelector*`.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canCallSelectors(
			obj
		)
		{
			var types = selectorTypes,
				result = false;
			if (isNodeLike(obj)) {
				result = typeof types[obj.nodeType] ===
					"undefined";
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key, and calls it as a method.
                *
                * @param method String
                * A string containing the key to call as a method of
                * a document node-like object.
                */

		function getByName(
			method
		)
		{
			var key = method;
			return function (doc, name) {
				var result = null;
				if (isDocument(doc)) {
					result = makeArray(
						doc[key](name)
					);
				}
				return result;
			};
		}

               /**
                * @public `Utils.select.byName`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns an array-like object
                * of node-like objects that match the specified
                * "name"; returns `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getElementsByName = (function () {
			var key = "getElementsByName",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = getByName(
						key
					);
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key, and calls it as a method.
                *
                * @param method String
                * A string containing the key to call as a method of
                * a document node-like object or an element
                * node-like object.
                */

		function getByTagName(
			method
		)
		{
			var key = method;
			return function (caller, tag) {
				var result = null;
				if (isDocument(caller) ||
					isElement(caller)) {
					result = makeArray(
						caller[key](tag)
					);
				}
				return result;
			};
		}

               /**
                * @public `Utils.select.byTagName`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns an array-like object
                * of node-like objects that match the specified
                * "tag"; returns `null` if not applicable.
                *
                * @param caller Object
                * A document node-like object or element node-like
                * object to access.
                *
                * @param tag String
                * A string containing the "tag" to find.
                */

		getElementsByTagName = (function () {
			var key = "getElementsByTagName",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = getByTagName(
						key
					);
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key, and calls it as a method.
                *
                * @param method String
                * A string containing the key to call as a method of
                * a document node-like object or an element
                * node-like object.
                */

		function getByTagNameNS(
			method
		)
		{
			var key = method;
			return function (caller, local, ns) {
				var result = null;
				if (isDocument(caller) ||
					isElement(caller)) {
					result = makeArray(
						caller[key](local, ns)
					);
				}
				return result;
			};
		}

               /**
                * @public `Utils.select.byTagNameNS`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns an array-like object
                * of node-like objects that match the specified
                * "namespace" and/or "local name"; returns `null`
                * if not applicable.
                *
                * @param caller Object
                * A document node-like object or element node-like
                * object to access.
                *
                * @param local String
                * A string containing the "local name" to find.
                *
                * @param ns String
                * A string containing the "namespace" to find.
                */

		getElementsByTagNameNS = (function () {
			var key = "getElementsByTagNameNS",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = getByTagNameNS(
						key
					);
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key, and calls it as a method.
                *
                * @param method String
                * A string containing the key to call as a method of
                * a document node-like object or an element
                * node-like object.
                */

		function getByClassName(
			method
		)
		{
			var key = method;
			return function (caller, names) {
				var result = null;
				if (isDocument(caller) ||
					isElement(caller)) {
					result = makeArray(
						caller[key](names)
					);
				}
				return result;
			};
		}

               /**
                * @public `Utils.select.byClassName`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns an array-like object
                * of node-like objects that match the specified
                * "class name(s)"; returns `null` if not applicable.
                *
                * @param caller Object
                * A document node-like object or element node-like
                * object to access.
                *
                * @param names String
                * A string containing the "class name(s)" to find.
                */

		getElementsByClassName = (function () {
			var key = "getElementsByClassName",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = getByClassName(
						key
					);
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key, and calls it as a method.
                *
                * @param method String
                * A string containing the key to call as a method of
                * a document node-like object.
                */

		function getById(
			method
		)
		{
			var key = method;
			return function (doc, id) {
				var result = null;
				if (isDocument(doc)) {
					result = doc[key](id);
				}
				return result;
			};
		}

               /**
                * @public `Utils.select.byId`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a node-like object. 
                * that matches the specified "id"; returns `null` if
                * not applicable.
                *
                * @param doc Object
                * A document node-like object object to access.
                *
                * @param id String
                * A string containing the "id" to find.
                */

		getElementById = (function () {
			var key = "getElementById",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = getById(
						key
					);
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key, and calls it as a method.
                *
                * @param method String
                * A string containing the key to call as a method of
                * a node-like object.
                */

		function getQuerySelector(
			method
		)
		{
			var key = method;
			return function (caller, selectors) {
				var result = null;
				if (canCallSelectors(caller)) {
					result = caller[key](
						selectors
					);
				}
				return result;
			};
		}

               /**
                * @public `Utils.select.query`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a node-like object. 
                * that matches the specified "selectors"; returns
                * `null` if not applicable.
                *
                * @param caller Object
                * A node-like object object to access.
                *
                * @param selectors String
                * A string containing the "selectors" to find.
                */

		querySelector = (function () {
			var key = "querySelector",
				result = null;
			if (canCallSelectors(doc)) {
				if (isHostObject(doc[key])) {
					result = getQuerySelector(
						key
					);
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key, and calls it as a method.
                *
                * @param method String
                * A string containing the key to call as a method of
                * a node-like object.
                */

		function getQuerySelectorAll(
			method
		)
		{
			var key = method;
			return function (caller, selectors) {
				var result = null;
				if (canCallSelectors(caller)) {
					result = makeArray(
						caller[key](selectors)
					);
				}
				return result;
			};
		}

               /**
                * @public `Utils.select.queryAll`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns an array-like object
                * of node-like objects that match the specified
                * "selectors"; returns `null` if not applicable.
                *
                * @param caller Object
                * A node-like object object to access.
                *
                * @param selectors String
                * A string containing the "selectors" to find.
                */

		querySelectorAll = (function () {
			var key = "querySelectorAll",
				result = null;
			if (canCallSelectors(doc)) {
				if (isHostObject(doc[key])) {
					result = getQuerySelectorAll(
						key
					);
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns the "head" element node-like
                * object for the specified document; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		function getNativeHead(
			doc
		)
		{
			var result = null;
			if (isDocument(doc)) {
				result = doc.head;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns the "head" element node-like
                * object for the specified document; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		function forkHead(
			doc
		)
		{
			var heads,
				result = null;
			if (isDocument(doc)) {
				heads = getElementsByTagName(
					doc,
					"head"
				);
				if (isArrayLike(heads)) {
					result = heads[0];
				}
			}
			return result;
		}

               /**
                * @public `Utils.select.head`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) the
                * "head" element node-like object for the specified
                * document node-like object; returns `null` if not
                * applicable.
                *
                * @see `getNativeHead`.
                * @see `forkHead`.
                */

		getHead = (function () {
			var headProp,
				result = null;
			if (isDocument(doc)) {
				headProp = isHostObject(doc.head);
				if (headProp) {
					result = getNativeHead;
				} else if (!headProp) {
					result = forkHead;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns the "body" element node-like
                * object for the specified document; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		function getNativeBody(
			doc
		)
		{
			var result = null;
			if (isDocument(doc)) {
				result = doc.body;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns the "body" element node-like
                * object for the specified document; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		function forkBody(
			doc
		)
		{
			var bodies,
				result = null;
			if (isDocument(doc)) {
				bodies = getElementsByTagName(
					doc,
					"body"
				);
				if (isArrayLike(bodies)) {
					result = bodies[0];
				}
			}
			return result;
		}

               /**
                * @public `Utils.select.body`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) the
                * "body" element node-like object for the specified
                * document node-like object; returns `null` if not
                * applicable.
                *
                * @see `getNativeBody`.
                * @see `forkBody`.
                */

		getBody = (function () {
			var bodyProp,
				result = null;
			if (isDocument(doc)) {
				bodyProp = isHostObject(doc.body);
				if (bodyProp) {
					result = getNativeBody;
				} else if (!bodyProp) {
					result = forkBody;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method that converts an `HTMLCollection` to
                * an array-like object if necessary and returns it.
                *
                * @param items Object
                * An array-like or node-like object to examine.
                */

		function adjustItems(
			items
		)
		{
			var result = items;
			if (!isNodeLike(items) &&
				isArrayLike(items)) {
				result = makeArray(items);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified collection, and converts it to an
                * array-like object.
                *
                * @param collection String
                * A string containing the key to access as a
                * property of a document node-like object.
                */

		function getCollection(
			collection
		)
		{
			var key = collection;
			return function (doc) {
				var result = null;
				if (isDocument(doc)) {
					result = makeArray(
						doc[key]
					);
				}
				return result;
			};
		}

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key; returns `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param key String
                * A string containing the key to access as a
                * property of a document node-like object.
                */

		function wrapCollection(
			doc,
			key
		)
		{
			var result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = getCollection(
						key
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns node-like objects from an
                * `HTMLCollection` based upon a key; returns `null`
                * if not applicable.
                *
                * @param collection String
                * A string containing the key to access as a
                * property of a document node-like object.
                */

		function getNamedItems(
			collection
		)
		{
			var key = collection;
			return function (doc, name) {
				var result = null;
				if (isDocument(doc)) {
					result = adjustItems(
						doc[key][name]
					);
				}
				return result;
			};
		}

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key; returns `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param key String
                * A string containing the key to access as a
                * property of a document node-like object.
                */

		function wrapNamedItems(
			doc,
			key
		)
		{
			var result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = getNamedItems(
						key
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.select.images`.
                *
                * @description
                * Method that returns an array-like object
                * containing the node-like objects that match the
                * specified "name" in a specific document node-like
                * object's `images` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getImages = (function () {
			return wrapNamedItems(
				doc,
				"images"
			);
		}());

               /**
                * @public `Utils.select.allImages`.
                *
                * @description
                * Method that returns an array-like object
                * containing the specified document node-like
                * object's `images` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		getAllImages = (function () {
			return wrapCollection(
				doc,
				"images"
			);
		}());

               /**
                * @public `Utils.select.embeds`.
                * @public `Utils.select.plugins`.
                *
                * @description
                * Method that returns an array-like object
                * containing the node-like objects that match the
                * specified "name" in a specific document node-like
                * object's `embeds` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getEmbeds = (function () {
			return wrapNamedItems(
				doc,
				"embeds"
			);
		}());

               /**
                * @public `Utils.select.allEmbeds`.
                * @public `Utils.select.allPlugins`.
                *
                * @description
                * Method that returns an array-like object
                * containing the specified document node-like
                * object's `embeds` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		getAllEmbeds = (function () {
			return wrapCollection(
				doc,
				"embeds"
			);
		}());

               /**
                * @public `Utils.select.links`.
                *
                * @description
                * Method that returns an array-like object
                * containing the node-like objects that match the
                * specified "name" in a specific document node-like
                * object's `links` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getLinks = (function () {
			return wrapNamedItems(
				doc,
				"links"
			);
		}());

               /**
                * @public `Utils.select.allLinks`.
                *
                * @description
                * Method that returns an array-like object
                * containing the specified document node-like
                * object's `links` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		getAllLinks = (function () {
			return wrapCollection(
				doc,
				"links"
			);
		}());

               /**
                * @public `Utils.select.forms`.
                *
                * @description
                * Method that returns an array-like object
                * containing the node-like objects that match the
                * specified "name" in a specific document node-like
                * object's `forms` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getForms = (function () {
			return wrapNamedItems(
				doc,
				"forms"
			);
		}());

               /**
                * @public `Utils.select.allForms`.
                *
                * @description
                * Method that returns an array-like object
                * containing the specified document node-like
                * object's `forms` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		getAllForms = (function () {
			return wrapCollection(
				doc,
				"forms"
			);
		}());

               /**
                * @public `Utils.select.scripts`.
                *
                * @description
                * Method that returns an array-like object
                * containing the node-like objects that match the
                * specified "name" in a specific document node-like
                * object's `scripts` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getScripts = (function () {
			return wrapNamedItems(
				doc,
				"scripts"
			);
		}());

               /**
                * @public `Utils.select.allScripts`.
                *
                * @description
                * Method that returns an array-like object
                * containing the specified document node-like
                * object's `scripts` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		getAllScripts = (function () {
			return wrapCollection(
				doc,
				"scripts"
			);
		}());

               /**
                * @public `Utils.select.applets`.
                *
                * @description
                * Method that returns an array-like object
                * containing the node-like objects that match the
                * specified "name" in a specific document node-like
                * object's `applets` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getApplets = (function () {
			return wrapNamedItems(
				doc,
				"applets"
			);
		}());

               /**
                * @public `Utils.select.allApplets`.
                *
                * @description
                * Method that returns an array-like object
                * containing the specified document node-like
                * object's `applets` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		getAllApplets = (function () {
			return wrapCollection(
				doc,
				"applets"
			);
		}());

               /**
                * @public `Utils.select.anchors`.
                *
                * @description
                * Method that returns an array-like object
                * containing the node-like objects that match the
                * specified "name" in a specific document node-like
                * object's `anchors` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getAnchors = (function () {
			return wrapNamedItems(
				doc,
				"anchors"
			);
		}());

               /**
                * @public `Utils.select.allAnchors`.
                *
                * @description
                * Method that returns an array-like object
                * containing the specified document node-like
                * object's `anchors` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		getAllAnchors = (function () {
			return wrapCollection(
				doc,
				"anchors"
			);
		}());

		doc = null;

		Utils.select = Utils.select || {
			"byName": getElementsByName,

			"byTagName": getElementsByTagName,
			"byTagNameNS": getElementsByTagNameNS,

			"byClassName": getElementsByClassName,

			"byId": getElementById,

			"query": querySelector,
			"queryAll": querySelectorAll,

			"body": getBody,
			"head": getHead,

			"images": getImages,
			"allImages": getAllImages,

			"embeds": getEmbeds,
			"allEmbeds": getAllEmbeds,

			"plugins": getEmbeds,
			"allPlugins": getAllEmbeds,

			"links": getLinks,
			"allLinks": getAllLinks,

			"forms": getForms,
			"allForms": getAllForms,

			"scripts": getScripts,
			"allScripts": getAllScripts,
		
			"applets": getApplets,
			"allApplets": getAllApplets,

			"anchors": getAnchors,
			"allAnchors": getAllAnchors
		};
	}());
}

