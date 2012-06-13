var Utils=Utils||{},global=global||this;if(Utils){(function(){var e={INDEX_SIZE_ERROR:"The index is not in the allowed range.",HEIRARCHY_REQUEST_ERROR:"The operation would yield an incorrect node tree.",WRONG_DOCUMENT_ERROR:"The object is in the wrong document.",INVALID_CHARACTER_ERROR:"The string contains invalid characters.",NO_MODIFICATION_ALLOWED_ERROR:"The object can not be modified.",NOT_FOUND_ERROR:"The object can not be found here.",NOT_SUPPORTED_ERROR:"The operation is not supported.",INVALID_STATE_ERROR:"The object is in an invalid state.",SYNTAX_ERROR:"The string did not match the expected pattern.",INVALID_MODIFICATION_ERROR:"The object can not be modified in this way.",NAMESPACE_ERROR:"The operation is not allowed by Namespaces in XML.",INVALID_ACCESS_ERROR:"The object does not support the operation or argument.",TYPE_MISMATCH_ERROR:"The type of the object does not match the expected type.",SECURITY_ERROR:"The operation is insecure.",NETWORK_ERROR:"A network error occurred.",ABORT_ERROR:"The operation was aborted.",URL_MISMATCH_ERROR:"The given URL does not match another URL.",QUOTA_EXCEEDED_ERROR:"The quota has been exceeded.",TIMEOUT_ERROR:"The operation timed out.",INVALID_NODE_TYPE_ERROR:"The supplied node is incorrect or has an incorrect ancestor for this operation.",DATA_CLONE_ERROR:"The object can not be cloned."};function c(){throw new Error(e.INDEX_SIZE_ERROR)}function k(){throw new Error(e.HEIRARCHY_REQUEST_ERROR)}function f(){throw new Error(e.WRONG_DOCUMENT_ERROR)}function h(){throw new Error(e.INVALID_CHARACTER_ERROR)}function o(){var w="NO_MODIFICATION_ALLOWED_ERROR";throw new Error(e[w])}function b(){throw new Error(e.NOT_FOUND_ERROR)}function p(){throw new Error(e.NOT_SUPPORTED_ERROR)}function i(){throw new Error(e.INVALID_STATE_ERROR)}function n(){throw new Error(e.SYNTAX_ERROR)}function m(){throw new Error(e.INVALID_MODIFICATION_ERROR)}function s(){throw new Error(e.NAMESPACE_ERROR)}function r(){throw new Error(e.INVALID_ACCESS_ERROR)}function v(){throw new Error(e.TYPE_MISMATCH_ERROR)}function u(){throw new Error(e.SECURITY_ERROR)}function a(){throw new Error(e.NETWORK_ERROR)}function l(){throw new Error(e.ABORT_ERROR)}function q(){throw new Error(e.URL_MISMATCH_ERROR)}function g(){throw new Error(e.QUOTA_EXCEEDED_ERROR)}function j(){throw new Error(e.TIMEOUT_ERROR)}function d(){throw new Error(e.INVALID_NODE_TYPE_ERROR)}function t(){throw new Error(e.DATA_CLONE_ERROR)}Utils.raise=Utils.raise||{types:e,indexSize:c,heirarchyRequest:k,wrongDocument:f,invalidCharacter:h,noModificationAllowed:o,notFound:b,notSupported:p,invalidState:i,syntax:n,invalidModification:m,namespace:s,invalidAccess:r,typeMismatch:v,security:u,network:a,abort:l,urlMismatch:q,quotaExceeded:g,timeout:j,invalidNodeType:d,dataClone:t}}())}if(Utils){(function(){Utils.types=Utils.types||{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCRESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12}}())}if(Utils){(function(){var t=Utils.types,k,u,g;k={object:true,"function":true,unknown:true};u=(function(){var w=null;if(global.document){if(typeof global.document==="object"){w=global.document}}return w}());function b(x,w){return typeof x===w}function d(x){var w=typeof x;return k[w]}function e(y){var x=typeof y,w=false;if(y&&k[x]){w=typeof y.length==="number"}return w}function c(y){var x=typeof y,w=false;if(y&&k[x]){w=typeof y.nodeType==="number"}return w}function v(z,x){var y=typeof z,w=false;if(z&&k[y]){w=z.nodeType===x}return w}function n(x){var w=t.ELEMENT_NODE;return v(x,w)}function j(x){var w=t.ATTRIBUTE_NODE;return v(x,w)}function h(x){var w=t.TEXT_NODE;return v(x,w)}function p(x){var w=t.CDATA_SECTION_NODE;return v(x,w)}function r(y){var w="ENTITY_REFERENCE_NODE",x=t[w];return v(y,x)}function o(x){var w=t.ENTITY_NODE;return v(x,w)}function a(y){var w="PROCESSING_INSTRUCTION_NODE",x=t[w];return v(y,x)}function q(x){var w=t.COMMENT_NODE;return v(x,w)}function i(x){var w=t.DOCUMENT_NODE;return v(x,w)}function m(w){return w===global.document}g=(function(){var w=i;if(!c(u)){w=m}return w}());function s(x){var w=t.DOCUMENT_TYPE_NODE;return v(x,w)}function f(y){var w="DOCUMENT_FRAGMENT_NODE",x=t[w];return v(y,x)}function l(x){var w=t.NOTATION_NODE;return v(x,w)}u=null;Utils.is=Utils.is||{type:b,hostObject:d,arrayLike:e,nodeLike:c,nodeType:v,element:n,attribute:j,text:h,cDataSection:p,entityReference:r,entity:o,processingInstruction:a,comment:q,document:g,documentType:s,documentFragment:f,notation:l}}())}if(Utils){(function(){var a=Utils.is.arrayLike;function b(g){var e,d,f,c=[];if(a(g)){c.length=g.length;e=g.length-1;for(d=e;d>-1;d-=1){f=e-d;c[f]=g[f]}}return c}Utils.helpers=Utils.helpers||{makeArray:b}}())}if(Utils){(function(){var g=Utils.is.nodeLike,d=Utils.is.hostObject,n=Utils.is.arrayLike;function i(s,p,r){var q="insertBefore",o=null;if(g(s)&&g(p)&&g(r)){if(d(s[q])){o=s[q](p,r)}}return o}function j(s,t,r){var q,p,u,o;if(n(t)){q=t.length-1;for(p=q;p>-1;p-=1){u=q-p;i(s,t[u],r)}}return o}function e(q,r){var p="appendChild",o=null;if(g(q)&&g(r)){if(d(q[p])){o=q[p](r)}}return o}function b(r,s){var q,p,t,o;if(n(s)){q=s.length-1;for(p=q;p>-1;p-=1){t=q-p;e(r,s[t])}}return o}function l(q,r){var p="removeChild",o=null;if(g(q)&&g(r)){if(d(q[p])){o=q[p](r)}}return o}function h(s,q,p){var r="replaceChild",o=null;if(g(s)&&g(q)&&g(p)){if(d(s[r])){o=s[r](q,p)}}return o}function c(r,p){var q="cloneNode",o=null;if(g(r)){if(d(r[q])){o=r[q](r,p)}}return o}function m(p){var o=false;if(g(p)){o=typeof p.nodeName==="string"}return o}function a(s,q){var r="toLowerCase",p="toUpperCase",o=null;if(m(s)){o=s.nodeName;if(q){o=o[r]()}else{if(!q){o=o[p]()}}}return o}function k(p){var o=false;if(g(p)){o=typeof p.nodeValue==="string"}return o}function f(p){var o=null;if(k(p)){o=p.nodeValue}return o}Utils.node=Utils.node||{prepend:i,prependList:j,append:e,appendList:b,remove:l,replace:h,clone:c,name:a,value:f}}())}if(Utils){(function(){var i=Utils.is.document,e=Utils.is.hostObject,k,f,a,j,n,h,b,q,p;k=(function(){var r=null;if(global.document){if(typeof global.document==="object"){r=global.document}}return r}());function o(u,s){var t="createElement",r=null;if(i(u)){r=u[t](s)}return r}f=(function(){var s="createElement",r=null;if(i(k)){if(e(k[s])){r=o}}return r}());function d(v,u,s){var t="createElementNS",r=null;if(i(v)){r=v[t](u,s)}return r}a=(function(){var s="createElementNS",r=null;if(i(k)){if(e(k[s])){r=d}}return r}());function c(t,u){var s="createTextNode",r=null;if(i(t)){r=t[s](u)}return r}j=(function(){var s="createTextNode",r=null;if(i(k)){if(e(k[s])){r=c}}return r}());function m(u,t,v){var s="createProcessingInstruction",r=null;if(i(u)){r=u[s](t,v)}return r}n=(function(){var s="createProcessingInstruction",r=null;if(i(k)){if(e(k[s])){r=m}}return r}());function g(t,u){var s="createComment",r=null;if(i(t)){r=t[s](u)}return r}h=(function(){var s="createComment",r=null;if(i(k)){if(e(k[s])){r=g}}return r}());b=(function(){var s="createDocumentFragment",r=false;if(i(k)){if(e(k[s])){r=true}}return r}());q=(function(){var s="createDocumentFragment",r=b;if(b){try{k[s]()}catch(t){r=false}}return r}());function l(t){var s="createDocumentFragment",r=null;if(i(t)){r=t[s]()}return r}p=(function(){var r=null;if(q){r=l}return r}());k=null;Utils.create=Utils.create||{element:f,elementNS:a,text:j,processingInstruction:n,comment:h,documentFragment:p}}())}if(Utils){(function(){var t=Utils.types,k=Utils.is.nodeLike,l=Utils.helpers.makeArray,q=Utils.is.document,C=Utils.is.hostObject,U=Utils.is.element,F=Utils.is.arrayLike,h,c,O,V,y,u,f,n,a,j,L,I,J,A,B,E,S,D,R,K,p,o,e,P,x;h=(function(){var Z=null;if(q(global.document)){Z=global.document}return Z}());c=(function(){var Z={};Z[t.ELEMENT_NODE]=true;Z[t.DOCMENT_NODE]=true;Z[t.DOCUMENT_FRAGMENT_NODE]=true;return Z}());function s(ab){var aa=c,Z=false;if(k(ab)){Z=typeof aa[ab.nodeType]==="undefined"}return Z}function i(aa){var Z=aa;return function(ad,ac){var ab=null;if(q(ad)){ab=l(ad[Z](ac))}return ab}}y=(function(){var aa="getElementsByName",Z=null;if(q(h)){if(C(h[aa])){Z=i(aa)}}return Z}());function v(aa){var Z=aa;return function(ad,ac){var ab=null;if(q(ad)||U(ad)){ab=l(ad[Z](ac))}return ab}}u=(function(){var aa="getElementsByTagName",Z=null;if(q(h)){if(C(h[aa])){Z=v(aa)}}return Z}());function r(aa){var Z=aa;return function(ac,ad,ae){var ab=null;if(q(ac)||U(ac)){ab=l(ac[Z](ad,ae))}return ab}}f=(function(){var aa="getElementsByTagNameNS",Z=null;if(q(h)){if(C(h[aa])){Z=r(aa)}}return Z}());function H(aa){var Z=aa;return function(ac,ad){var ab=null;if(q(ac)||U(ac)){ab=l(ac[Z](ad))}return ab}}n=(function(){var aa="getElementsByClassName",Z=null;if(q(h)){if(C(h[aa])){Z=H(aa)}}return Z}());function Q(aa){var Z=aa;return function(ac,ad){var ab=null;if(q(ac)){ab=ac[Z](ad)}return ab}}a=(function(){var aa="getElementById",Z=null;if(q(h)){if(C(h[aa])){Z=Q(aa)}}return Z}());function d(aa){var Z=aa;return function(ac,ad){var ab=null;if(s(ac)){ab=ac[Z](ad)}return ab}}j=(function(){var aa="querySelector",Z=null;if(s(h)){if(C(h[aa])){Z=d(aa)}}return Z}());function b(aa){var Z=aa;return function(ac,ad){var ab=null;if(s(ac)){ab=l(ac[Z](ad))}return ab}}L=(function(){var aa="querySelectorAll",Z=null;if(s(h)){if(C(h[aa])){Z=b(aa)}}return Z}());function z(aa){var Z=null;if(q(aa)){Z=aa.head}return Z}function Y(ab){var aa,Z=null;if(q(ab)){aa=u(ab,"head");if(F(aa)){Z=aa[0]}}return Z}O=(function(){var ab,aa="getElementsByTagName",Z=null;if(q(h)){ab=C(h.head);if(ab){Z=z}else{if(C(h[aa])){Z=Y}}}return Z}());function M(aa){var Z=null;if(q(aa)){Z=aa.body}return Z}function g(ab){var aa,Z=null;if(q(ab)){aa=u(ab,"body");if(F(aa)){Z=aa[0]}}return Z}V=(function(){var ab,aa="getElementsByTagName",Z=null;if(q(h)){ab=C(h.body);if(ab){Z=M}else{if(C(h[aa])){Z=g}}}return Z}());function N(aa){var Z=aa;if(!k(aa)&&F(aa)){Z=l(aa)}return Z}function G(aa){var Z=aa;return function(ac){var ab=null;if(q(ac)){ab=l(ac[Z])}return ab}}function T(ab,aa){var Z=null;if(q(ab)){if(C(ab[aa])){Z=G(aa)}}return Z}function w(aa){var Z=aa;return function(ad,ac){var ab=null;if(q(ad)){ab=N(ad[Z][ac])}return ab}}function X(ab,aa){var Z=null;if(q(ab)){if(C(ab[aa])){Z=w(aa)}}return Z}I=(function(){return X(h,"images")}());J=(function(){return T(h,"images")}());A=(function(){return X(h,"embeds")}());B=(function(){return T(h,"embeds")}());E=(function(){return X(h,"links")}());S=(function(){return T(h,"links")}());D=(function(){return X(h,"forms")}());R=(function(){return T(h,"forms")}());K=(function(){return X(h,"scripts")}());p=(function(){return T(h,"scripts")}());o=(function(){return X(h,"applets")}());e=(function(){return T(h,"applets")}());P=(function(){return X(h,"anchors")}());x=(function(){return T(h,"anchors")}());function W(ac,ab,aa){var Z=null;if(ac&&C(ac[ab])){Z=N(ac[ab][aa])}return Z}function m(ab,aa){var Z=null;if(ab&&C(ab[aa])){Z=l(ab[aa])}return Z}h=null;Utils.select=Utils.select||{byName:y,byTagName:u,byTagNameNS:f,byClassName:n,byId:a,query:j,queryAll:L,body:V,head:O,images:I,allImages:J,embeds:A,allEmbeds:B,plugins:A,allPlugins:B,links:E,allLinks:S,forms:D,allForms:R,scripts:K,allScripts:p,applets:o,allApplets:e,anchors:P,allAnchors:x,namedItem:W,collection:m}}())};