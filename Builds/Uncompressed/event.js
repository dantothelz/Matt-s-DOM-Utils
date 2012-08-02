if (typeof Utils === "object" && Utils) {

	Utils.event = Utils.event || {};

       /**
        * @public
        *
        * @description
        * Object containing custom `this` values
        * for use with bound event handlers.
        */

	Utils.event.these = {};

       /**
        * @public
        *
        * @description
        * Object containing all event handlers
        * created via this module.
        */

	Utils.event.handlers = {};

	(function () {

               /**
                * @module
                * Utils.event
                *
                * @description
                *
                * @dependencies
                * * null
                */

		var hostTypes,

			doc,

			canCall,

			handlerId,

			canGetParentWindow,
			canGetDefaultView,

			isWindow,

			addWindowListener,
			removeWindowListener,

			nodeTypes,

			isDocument,

			docEl,

			addDocumentListener,
			removeDocumentListener,

			addElementListener,
			removeElementListener;

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
                * Variable containing the current document
                * node-like object.
                */

		doc = global.document;

               /**
                * @private
                *
                * @description
                * Boolean asserting if `Function.prototype.call`
                * is available.
                */

		canCall = typeof Function.prototype.call ===
			"function";

               /**
                * @private
                *
                * @description
                * Number representing the numeric index for the
                * next event handler created via this module.
                */

		handlerId = 0;

               /**
                * @private
                *
                * @description
                * Method that returns the stored `this` value
                * corresponding to the specified numeric index.
                *
                * @param id Number
                * A numeric key to access.
                */

		function getThisValue(
			id
		)
		{
			var t = "these";
			return Utils.event[t][id];
		}

               /**
                * @private
                *
                * @description
                * Method that returns the unbound event handler
                * corresponding to the specified numeric index.
                *
                * @param id Number
                * A numeric key to access.
                */

		function getUnboundHandler(
			id
		)
		{
			var h = "handlers",
				u = "unbound";
			return Utils.event[h][id][u];
		}

               /**
                * @private
                *
                * @description
                * Method that returns a bound event handler created
                * from the implicit unbound event handler
                * corresponding to the specified numeric index.
                *
                * @param id Number
                * A numeric key to access.
                */

		function generateBoundHandler(
			id
		)
		{
			return function (evt) {
				return getUnboundHandler(id).call(
					getThisValue(id),
					evt
				);
			};
		}

               /**
                * @private
                *
                * @description
                * Method that returns a bound event handler created
                * from the specified numeric index, and attaches
                * a numeric id property to the handler; returns
                * `null` if not applicable.
                *
                * @param id Number
                * A numeric key to access.
                */

		function createBoundHandler(
			id
		)
		{
			var result = null;
			if (canCall) {
				result = generateBoundHandler(
					id
				);
				result.handlerId = handlerId;
				handlerId += 1;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that creates a bound event handler
                * and a new "row" in the event handlers table along
                * with a new "row" in the `this` values table.
                *
                * @param handler Function
                * An unbound event handler to bind.
                *
                * @param thisValue *
                * A value to bind to pass the unbound event handler
                * as the value of the `this` keyword.
                */

		function createHandlerRow(
			handler,
			thisValue
		)
		{
			var h = "handlers",
				id = handlerId,
				t = "these",
				b = "bound";
			Utils.event[h][id] = {
				"unbound": handler,
				"bound": createBoundHandler(id)
			};
			Utils.event[t][id] = thisValue;
			handler = null;
			thisValue = null;
			return Utils.event[h][id][b];
		}

               /**
                * @public `Utils.event.bindHandler`
                *
                * @description
                * Method that creates a bound event handler from
                * the specified unbound event handler and a
                * specific value for the `this` keyword; returns
                * the unbound handler if not applicable.
                *
                * @param handler Function
                * An unbound event handler to bind.
                *
                * @param thisValue *
                * A value to bind to pass the unbound event handler
                * as the value of the `this` keyword.
                */

		function bindHandler(
			handler,
			thisValue
		)
		{
			var u = "undefined";
			if (handler && typeof handler ===
				"function") {
				if (handler.handlerId === global[u]) {
					return createHandlerRow(
						handler,
						thisValue
					);
				}
			}
			thisValue = null;
			return handler;
		}

		Utils.event.bindHandler = bindHandler;

               /**
                * @private
                *
                * @description
                * Method that deletes the "row" corresponding
                * to the specified numeric index in the event
                * handlers "table".
                *
                * @param id Number
                * A numeric index to access.
                */

		function removeHandlerRow(
			id
		)
		{
			var e = "event",
				h = "handlers",
				obj = Utils[e][h],
				u = "undefined",
				result = false;
			if (obj[id] !== global[u]) {
				result = delete obj[id];
			}
			obj = null;
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that deletes the "row" corresponding
                * to the specified numeric index in the `this`
                * keyword values "table".
                *
                * @param id Number
                * A numeric index to access.
                */

		function removeThisValue(
			id
		)
		{
			var e = "event",
				t = "these",
				obj = Utils[e][t],
				u = "undefined",
				result = false;
			if (obj[id] !== global[u]) {
				result = delete obj[id];
			}
			obj = null;
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that deletes the "rows" corresponding
                * to the specified numeric index in both the event
                * handlers "table" and the `this` keyword values
                * "table".
                *
                * @param id Number
                * A numeric index to access.
                */

		function clearHandlerData(
			id
		)
		{
			var result;
			removeHandlerRow(
				id
			);
			removeThisValue(
				id
			);
			return result;
		}

               /**
                * @public `Utils.event.unbindHandler`
                *
                * @description
                * Method that unbinds a bound event handler from
                * the specified bound event handler and removes
                * its corresponding "rows" from both the event
                * handlers and `this` keyword values "tables";
                * returns `null` if not applicable.
                *
                * @param bound Function
                * An bound event handler to unbind.
                */

		function unbindHandler(
			bound
		)
		{
			var result = null;
			if (bound && typeof bound ===
				"function") {
				if (typeof bound.handlerId ===
					"number") {
					result = getUnboundHandler(
						bound.handlerId
					);
					clearHandlerData(
						bound.handlerId
					);
				}
			}
			bound = null;
			return result;
		}

		Utils.event.unbindHandler = unbindHandler;

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is the current Window.
                *
                * @param obj Object
                * An object to assert.
                */

		function isCurrentWindow(
			obj
		)
		{
			return obj === global;
		}

               /**
                * @private
                *
                * @description
                * Method that returns the implicit document
                * for the Window provided; returns `null` if not
                * applicable.
                *
                * @param win Object
                * A Window-like object to access.
                */

		function getWindowDocument(
			win
		)
		{
			var key = "document";
			if (isHostObject(win[key])) {
				return win[key];
			}
			win = null;
			return null;
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * boolean asserting if `parentWindow` is an
                * available property of the current document.
                */

		canGetParentWindow = (function () {
			var key = "parentWindow";
			return isHostObject(doc[key]);
		}());

               /**
                * @private
                *
                * @description
                * Method that returns the "parent" Window for the
                * document provided; returns `null` if not
                * applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		function getParentWindow(
			doc
		)
		{
			var key = "parentWindow";
			if (isHostObject(doc[key])) {
				return doc[key];
			}
			doc = null;
			return null;
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * boolean asserting if `defaultView` is an available
                * property of the current document.
                */

		canGetDefaultView = (function () {
			var key = "defaultView";
			return isHostObject(doc[key]);
		}());

               /**
                * @private
                *
                * @description
                * Method that returns the "view" for the document
                * provided; returns `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		function getDefaultView(
			doc
		)
		{
			var key = "defaultView";
			if (isHostObject(doc[key])) {
				return doc[key];
			}
			doc = null;
			return null;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is the "parent" Window for the
                * implicit document provided.
                *
                * @param obj Object
                * An object to assert.
                */

		function isParentWindow(
			obj
		)
		{
			return obj === getParentWindow(
				getWindowDocument(obj) ||
				global.document
			);
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is the "view" for the implicit
                * document provided.
                *
                * @param obj Object
                * An object to assert.
                */

		function isDefaultView(
			obj
		)
		{
			return obj === getDefaultView(
				getWindowDocument(obj) ||
				global.document
			);
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * method that returns a boolean asserting if the
                * specified object is a Window object.
                *
                * @param obj Object
                * An object to assert.
                *
                * @see `isCurrentWindow`
                * @see `isParentWindow`
                * @see `isDefaultView`
                */

		isWindow = (function () {
			var result = isCurrentWindow;
			if (canGetParentWindow) {
				result = isParentWindow;
			} else if (canGetDefaultView) {
				result = isDefaultView;
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that adds an event listener to the
                * specified EventTarget object.
                *
                * @param obj Object
                * An EventTarget object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase will be
                * utilised for the event.
                *
                * @see DOM Level 2+ Events Spec
                */

		function addEvent(
			obj,
			evt,
			handler,
			capture
		)
		{
			var key = "addEventListener",
				result;
			obj[key](
				evt,
				handler,
				capture
			);
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that adds an event listener to the
                * specified Window object; returns `null` if not
                * applicable.
                *
                * @param win Object
                * A Window object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase will be
                * utilised for the event.
                */

		function addWindowEvent(
			win,
			evt,
			handler,
			capture
		)
		{
			var result = null;
			if (isWindow(win)) {
				result = addEvent(
					win,
					evt,
					handler,
					capture
				);
			}
			win = null;
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that attaches an event listener to the
                * specified object.
                *
                * @param obj Object
                * An object to attach a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @see MSDN, attachEvent
                */

		function attachEvent(
			obj,
			evt,
			handler
		)
		{
			var key = "attachEvent",
				result;
			obj[key](
				"on" + evt,
				handler
			);
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that attaches an event listener to the
                * specified Window object; returns `null` if not
                * applicable.
                *
                * @param win Object
                * A Window object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                */

		function attachWindowEvent(
			win,
			evt,
			handler
		)
		{
			var result = null;
			if (isWindow(win)) {
				result = attachEvent(
					win,
					evt,
					handler
				);
			}
			win = null;
			return result;
		}

               /**
                * @public `Utils.event.addWindowListener`
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a method that adds an
                * event listener to the specified Window object;
                * returns `null` if not applicable.
                *
                * @param win Object
                * A Window object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase will be
                * utilised for the event.
                *
                * @see `addWindowEvent`.
                * @see `attachWindowEvent`.
                */

		addWindowListener = (function () {
			var aEL = "addEventListener",
				aE = "attachEvent",
				result = null;
			if (isHostObject(global.window[aEL])) {
				result = addWindowEvent;
			} else if (isHostObject(global.window[aE])) {
				result = attachWindowEvent;
			}
			return result;
		}());

		Utils.event.addWindowListener =
			addWindowListener;

               /**
                * @private
                *
                * @description
                * Method that removes an event listener from the
                * specified EventTarget object.
                *
                * @param obj Object
                * An EventTarget object to remove a listener from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase was used
                * for the specified listener.
                *
                * @see DOM Level 2+ Events Spec
                */

		function removeEvent(
			obj,
			evt,
			handler,
			capture
		)
		{
			var key = "removeEventListener",
				result;
			obj[key](
				evt,
				handler,
				capture
			);
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that removes an event listener from the
                * specified Window object; returns `null` if not
                * applicable.
                *
                * @param win Object
                * A Window object to remove a listener from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase was used
                * for the specified listener.
                */

		function removeWindowEvent(
			win,
			evt,
			handler,
			capture
		)
		{
			var result = null;
			if (isWindow(win)) {
				result = removeEvent(
					win,
					evt,
					handler,
					capture
				);
			}
			win = null;
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that detaches an event listener from the
                * specified object.
                *
                * @param obj Object
                * An object to detach a listener from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @see MSDN, attachEvent
                */

		function detachEvent(
			obj,
			evt,
			handler
		)
		{
			var key = "detachEvent",
				result;
			obj[key](
				"on" + evt,
				handler
			);
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that detaches an event listener from the
                * specified Window object; returns `null` if not
                * applicable.
                *
                * @param win Object
                * A Window object to detach a listener from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                */

		function detachWindowEvent(
			win,
			evt,
			handler
		)
		{
			var result = null;
			if (isWindow(win)) {
				result = detachEvent(
					win,
					evt,
					handler
				);
			}
			win = null;
			return result;
		}

               /**
                * @public `Utils.event.removeWindowListener`
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a method that removes
                * an event listener from the specified Window object;
                * returns `null` if not applicable.
                *
                * @param win Object
                * A Window object to remove a listener from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase was used
                * for the specified listener.
                *
                * @see `removeWindowEvent`.
                * @see `detachWindowEvent`.
                */

		removeWindowListener = (function () {
			var rEL = "removeEventListener",
				dE = "detachEvent",
				result = null;
			if (isHostObject(global.window[rEL])) {
				result = removeWindowEvent;
			} else if (isHostObject(global.window[dE])) {
				result = detachWindowEvent;
			}
			return result;
		}());

		Utils.event.removeWindowListener =
			removeWindowListener;

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
			return isNodeType(
				obj,
				type
			);
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

		function isCurrentDocument(
			obj
		)
		{
			return obj === global.document;
		}

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
                * @closure
                *
                * @description
                * Wrapper method that returns a boolean asserting if
                * the specified object is a document node-like
                * object or the current document.
                *
                * @param obj Object
                * An object to assert.
                *
                * @see `isDocumentNode`.
                * @see `isCurrentDocument`.
                */

		isDocument = (function () {
			var result = isDocumentNode;
			if (!isNodeLike(doc)) {
				result = isCurrentDocument;
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that adds an event listener to the
                * specified Document node-like object; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A Document node-like object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase will be
                * utilised for the event.
                */

		function addDocumentEvent(
			doc,
			evt,
			handler,
			capture
		)
		{
			var result = null;
			if (isDocument(doc)) {
				result = addEvent(
					doc,
					evt,
					handler,
					capture
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that attaches an event listener to the
                * specified Document node-like object; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A Document node-like object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                */

		function attachDocumentEvent(
			doc,
			evt,
			handler
		)
		{
			var result = null;
			if (isDocument(doc)) {
				result = attachEvent(
					doc,
					evt,
					handler
				);
			}
			return result;
		}

               /**
                * @public `Utils.event.addDocumentListener`
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a method that adds an
                * event listener to the specified Document node-like
                * object; returns `null` if not applicable.
                *
                * @param doc Object
                * A Document node-like object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase will be
                * utilised for the event.
                *
                * @see `addDocumentEvent`.
                * @see `attachDocumentEvent`.
                */

		addDocumentListener = (function () {
			var aEL = "addEventListener",
				aE = "attachEvent",
				result = null;
			if (isHostObject(doc[aEL])) {
				result = addDocumentEvent;
			} else if (isHostObject(doc[aE])) {
				result = attachDocumentEvent;
			}
			return result;
		}());

		Utils.event.addDocumentListener =
			addDocumentListener;

               /**
                * @private
                *
                * @description
                * Method that removes an event listener from the
                * specified Document node-like object; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A Document node-like object to remove a listener
                * from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase was used
                * for the specified listener.
                */

		function removeDocumentEvent(
			doc,
			evt,
			handler,
			capture
		)
		{
			var result = null;
			if (isDocument(doc)) {
				result = removeEvent(
					doc,
					evt,
					handler,
					capture
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that detaches an event listener from the
                * specified Document node-like object; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A Document node-like object to detach a listener
                * from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                */

		function detachDocumentEvent(
			doc,
			evt,
			handler
		)
		{
			var result = null;
			if (isDocument(doc)) {
				result = detachEvent(
					doc,
					evt,
					handler
				);
			}
			return result;
		}

               /**
                * @public `Utils.event.removeDocumentListener`
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a method that removes
                * an event listener from the specified Document
                * node-like object; returns `null` if not applicable.
                *
                * @param doc Object
                * A Document node-like object to remove a listener
                * from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase was used
                * for the specified listener.
                *
                * @see `removeDocumentEvent`.
                * @see `detachDocumentEvent`.
                */

		removeDocumentListener = (function () {
			var rEL = "removeEventListener",
				dE = "detachEvent",
				result = null;
			if (isHostObject(doc[rEL])) {
				result = removeDocumentEvent;
			} else if (isHostObject(doc[dE])) {
				result = detachDocumentEvent;
			}
			return result;
		}());

		Utils.event.removeDocumentListener =
			removeDocumentListener;

               /**
                * @private
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
			return isNodeType(
				obj,
				type
			);
		}

               /**
                * @private
                *
                * @description
                * Method that adds an event listener to the
                * specified Element node-like object; returns
                * `null` if not applicable.
                *
                * @param el Object
                * An Element node-like object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase will be
                * utilised for the event.
                */

		function addElementEvent(
			el,
			evt,
			handler,
			capture
		)
		{
			var result = null;
			if (isElementNode(el)) {
				result = addEvent(
					el,
					evt,
					handler,
					capture
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that attaches an event listener to the
                * specified Element node-like object; returns
                * `null` if not applicable.
                *
                * @param el Object
                * An Element node-like object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                */

		function attachElementEvent(
			el,
			evt,
			handler
		)
		{
			var result = null;
			if (isElementNode(el)) {
				result = attachEvent(
					el,
					evt,
					handler
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
                * Wrapper method that returns the current document's
                * root Element node-like object; returns `null` if not
                * applicable.
                */

		docEl = (function () {
			var key = "documentElement",
				result = null;
			if (isHostObject(doc[key])) {
				result = doc[key];
			}
			return result;
		}());

               /**
                * @public `Utils.event.addElementListener`
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a method that adds an
                * event listener to the specified Element node-like
                * object; returns `null` if not applicable.
                *
                * @param doc Object
                * An Element node-like object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase will be
                * utilised for the event.
                *
                * @see `addElementEvent`.
                * @see `attachElementEvent`.
                */

		addElementListener = (function () {
			var aEL = "addEventListener",
				aE = "attachEvent",
				result = null;
			if (docEl) {
				if (isHostObject(docEl[aEL])) {
					result = addElementEvent;
				} else if (isHostObject(docEl[aE])) {
					result = attachElementEvent;
				}
			}
			return result;
		}());

		Utils.event.addElementListener =
			addElementListener;

               /**
                * @private
                *
                * @description
                * Method that removes an event listener from the
                * specified Element node-like object; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * An Element node-like object to remove a listener
                * from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase was used
                * for the specified listener.
                */

		function removeElementEvent(
			el,
			evt,
			handler,
			capture
		)
		{
			var result = null;
			if (isElementNode(el)) {
				result = removeEvent(
					el,
					evt,
					handler,
					capture
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that detaches an event listener from the
                * specified Element node-like object; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * An Element node-like object to detach a listener
                * from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                */

		function detachElementEvent(
			el,
			evt,
			handler
		)
		{
			var result = null;
			if (isElementNode(el)) {
				result = detachEvent(
					el,
					evt,
					handler
				);
			}
			return result;
		}

               /**
                * @public `Utils.event.removeElementListener`
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a method that removes
                * an event listener from the specified Element
                * node-like object; returns `null` if not applicable.
                *
                * @param doc Object
                * An Element node-like object to remove a listener
                * from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase was used
                * for the specified listener.
                *
                * @see `removeElementEvent`.
                * @see `detachElementEvent`.
                */

		removeElementListener = (function () {
			var rEL = "removeEventListener",
				dE = "detachEvent",
				result = null;
			if (docEl) {
				if (isHostObject(docEl[rEL])) {
					result = removeElementEvent;
				} else if (isHostObject(docEl[dE])) {
					result = detachElementEvent;
				}
			}
			return result;
		}());

		Utils.event.removeElementListener =
			removeElementListener;

               /**
                * @public `Utils.event.getObject`
                *
                * @description
                * Method that returns the event object for the
                * specified Event object.
                *
                * @param evt Object
                * An Event object to return.
                */

		function getEventObject(
			evt
		)
		{
			var result = evt;
			if (isHostObject(global.event)) {
				result = global.event;
			}
			return result;
		}

		Utils.event.getObject = getEventObject;

               /**
                * @private
                *
                * @description
                * Method that returns the target for the passed
                * Event object; returns `null` if not applicable.
                *
                * @param evt Object
                * An Event object to access.
                */

		function getPassedTarget(
			evt
		)
		{
			var key = "target",
				result = null;
			if (evt && isHostObject(evt[key])) {
				result = evt[key];
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns the target for the global
                * event object; returns `null` if not applicable.
                */

		function getGlobalTarget()
		{
			var key = "srcElement",
				result = null;
			if (isHostObject(global.event[key])) {
				result = global.event[key];
			}
			return result;
		}

               /**
                * @public `Utils.event.getTarget`
                *
                * @description
                * Method that returns the target for the specified
                * Event object.
                *
                * @param evt Object
                * An Event object to access.
                *
                * @see `getPassedTarget`.
                * @see `getGlobalTarget`.
                */

		function getEventTarget(
			evt
		)
		{
			var result = getPassedTarget(
				evt
			);
			if (isHostObject(global.event)) {
				result = getGlobalTarget();
			}
			return result;
		}

		Utils.event.getTarget = getEventTarget;

		doc = null;
		docEl = null;
	}());
}

