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

