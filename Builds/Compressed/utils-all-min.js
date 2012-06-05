var Utils=Utils||{},global=global||this;if(Utils){(function(){var e={INDEX_SIZE_ERROR:"The index is not in the allowed range.",HEIRARCHY_REQUEST_ERROR:"The operation would yield an incorrect node tree.",WRONG_DOCUMENT_ERROR:"The object is in the wrong document.",INVALID_CHARACTER_ERROR:"The string contains invalid characters.",NO_MODIFICATION_ALLOWED_ERROR:"The object can not be modified.",NOT_FOUND_ERROR:"The object can not be found here.",NOT_SUPPORTED_ERROR:"The operation is not supported.",INVALID_STATE_ERROR:"The object is in an invalid state.",SYNTAX_ERROR:"The string did not match the expected pattern.",INVALID_MODIFICATION_ERROR:"The object can not be modified in this way.",NAMESPACE_ERROR:"The operation is not allowed by Namespaces in XML.",INVALID_ACCESS_ERROR:"The object does not support the operation or argument.",TYPE_MISMATCH_ERROR:"The type of the object does not match the expected type.",SECURITY_ERROR:"The operation is insecure.",NETWORK_ERROR:"A network error occurred.",ABORT_ERROR:"The operation was aborted.",URL_MISMATCH_ERROR:"The given URL does not match another URL.",QUOTA_EXCEEDED_ERROR:"The quota has been exceeded.",TIMEOUT_ERROR:"The operation timed out.",INVALID_NODE_TYPE_ERROR:"The supplied node is incorrect or has an incorrect ancestor for this operation.",DATA_CLONE_ERROR:"The object can not be cloned."};function c(){throw new Error(e.INDEX_SIZE_ERROR)}function k(){throw new Error(e.HEIRARCHY_REQUEST_ERROR)}function f(){throw new Error(e.WRONG_DOCUMENT_ERROR)}function h(){throw new Error(e.INVALID_CHARACTER_ERROR)}function o(){var w="NO_MODIFICATION_ALLOWED_ERROR";throw new Error(e[w])}function b(){throw new Error(e.NOT_FOUND_ERROR)}function p(){throw new Error(e.NOT_SUPPORTED_ERROR)}function i(){throw new Error(e.INVALID_STATE_ERROR)}function n(){throw new Error(e.SYNTAX_ERROR)}function m(){throw new Error(e.INVALID_MODIFICATION_ERROR)}function s(){throw new Error(e.NAMESPACE_ERROR)}function r(){throw new Error(e.INVALID_ACCESS_ERROR)}function v(){throw new Error(e.TYPE_MISMATCH_ERROR)}function u(){throw new Error(e.SECURITY_ERROR)}function a(){throw new Error(e.NETWORK_ERROR)}function l(){throw new Error(e.ABORT_ERROR)}function q(){throw new Error(e.URL_MISMATCH_ERROR)}function g(){throw new Error(e.QUOTA_EXCEEDED_ERROR)}function j(){throw new Error(e.TIMEOUT_ERROR)}function d(){throw new Error(e.INVALID_NODE_TYPE_ERROR)}function t(){throw new Error(e.DATA_CLONE_ERROR)}Utils.raise=Utils.raise||{types:e,indexSize:c,heirarchyRequest:k,wrongDocument:f,invalidCharacter:h,noModificationAllowed:o,notFound:b,notSupported:p,invalidState:i,syntax:n,invalidModification:m,namespace:s,invalidAccess:r,typeMismatch:v,security:u,network:a,abort:l,urlMismatch:q,quotaExceeded:g,timeout:j,invalidNodeType:d,dataClone:t}}())}if(Utils){(function(){Utils.types=Utils.types||{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCRESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12}}())}if(Utils){(function(){var t=Utils.types,k,u,g;k={object:true,"function":true,unknown:true};u=(function(){var w=null;if(global.document){if(typeof global.document==="object"){w=global.document}}return w}());function b(x,w){return typeof x===w}function d(x){var w=typeof x;return k[w]}function e(y){var x=typeof y,w=false;if(y&&k[x]){w=typeof y.length==="number"}return w}function c(y){var x=typeof y,w=false;if(y&&k[x]){w=typeof y.nodeType==="number"}return w}function v(z,x){var y=typeof z,w=false;if(z&&k[y]){w=z.nodeType===x}return w}function n(x){var w=t.ELEMENT_NODE;return v(x,w)}function j(x){var w=t.ATTRIBUTE_NODE;return v(x,w)}function h(x){var w=t.TEXT_NODE;return v(x,w)}function p(x){var w=t.CDATA_SECTION_NODE;return v(x,w)}function r(y){var w="ENTITY_REFERENCE_NODE",x=t[w];return v(y,x)}function o(x){var w=t.ENTITY_NODE;return v(x,w)}function a(y){var w="PROCESSING_INSTRUCTION_NODE",x=t[w];return v(y,x)}function q(x){var w=t.COMMENT_NODE;return v(x,w)}function i(x){var w=t.DOCUMENT_NODE;return v(x,w)}function m(w){return w===global.document}g=(function(){var w=i;if(!c(u)){w=m}return w}());function s(x){var w=t.DOCUMENT_TYPE_NODE;return v(x,w)}function f(y){var w="DOCUMENT_FRAGMENT_NODE",x=t[w];return v(y,x)}function l(x){var w=t.NOTATION_NODE;return v(x,w)}u=null;Utils.is=Utils.is||{type:b,hostObject:d,arrayLike:e,nodeLike:c,nodeType:v,element:n,attribute:j,text:h,cDataSection:p,entityReference:r,entity:o,processingInstruction:a,comment:q,document:g,documentType:s,documentFragment:f,notation:l}}())}if(Utils){(function(){var a=Utils.is.nodeLike;function b(e){var d=false;if(a(e)){d=typeof e.nodeName==="string"}return d}function c(e){var d=false;if(a(e)){d=typeof e.nodeValue==="string"}return d}Utils.can=Utils.can||{getName:b,getValue:c}}())}if(Utils){(function(){var a=Utils.is.arrayLike;function b(g){var e,d,f,c=[];if(a(g)){c.length=g.length;e=g.length-1;for(d=e;d>-1;d-=1){f=e-d;c[f]=g[f]}}return c}Utils.helpers=Utils.helpers||{makeArray:b}}())}if(Utils){(function(){var g=Utils.is.nodeLike,d=Utils.is.hostObject,m=Utils.is.arrayLike,n=Utils.can.getName,l=Utils.can.getValue;function i(s,p,r){var q="insertBefore",o=null;if(g(s)&&g(p)&&g(r)){if(d(s[q])){o=s[q](p,r)}}return o}function j(s,t,r){var q,p,u,o;if(m(t)){q=t.length-1;for(p=q;p>-1;p-=1){u=q-p;i(s,t[u],r)}}return o}function e(q,r){var p="appendChild",o=null;if(g(q)&&g(r)){if(d(q[p])){o=q[p](r)}}return o}function b(r,s){var q,p,t,o;if(m(s)){q=s.length-1;for(p=q;p>-1;p-=1){t=q-p;e(r,s[t])}}return o}function k(q,r){var p="removeChild",o=null;if(g(q)&&g(r)){if(d(q[p])){o=q[p](r)}}return o}function h(s,q,p){var r="replaceChild",o=null;if(g(s)&&g(q)&&g(p)){if(d(s[r])){o=s[r](q,p)}}return o}function c(r,p){var q="cloneNode",o=null;if(g(r)){if(d(r[q])){o=r[q](r,p)}}return o}function a(s,q){var r="toLowerCase",p="toUpperCase",o=null;if(n(s)){o=s.nodeName;if(q){o=o[r]()}else{if(!q){o=o[p]()}}}return o}function f(p){var o=null;if(l(p)){o=p.nodeValue}return o}Utils.node=Utils.node||{prepend:i,prependList:j,append:e,appendList:b,remove:k,replace:h,clone:c,name:a,value:f}}())}if(Utils){(function(){var h=Utils.is.document,d=Utils.is.hostObject,j,e,a,i,m,g,o;j=(function(){var p=null;if(global.document){if(typeof global.document==="object"){p=global.document}}return p}());function n(s,q){var r="createElement",p=null;if(h(s)){p=s[r](q)}return p}e=(function(){var q="createElement",p=null;if(h(j)){if(d(j[q])){p=n}}return p}());function c(t,s,q){var r="createElementNS",p=null;if(h(t)){p=t[r](s,q)}return p}a=(function(){var q="createElementNS",p=null;if(h(j)){if(d(j[q])){p=c}}return p}());function b(r,s){var q="createTextNode",p=null;if(h(r)){p=r[q](s)}return p}i=(function(){var q="createTextNode",p=null;if(h(j)){if(d(j[q])){p=b}}return p}());function l(s,r,t){var q="createProcessingInstruction",p=null;if(h(s)){p=s[q](r,t)}return p}m=(function(){var q="createProcessingInstruction",p=null;if(h(j)){if(d(j[q])){p=l}}return p}());function f(r,s){var q="createComment",p=null;if(h(r)){p=r[q](s)}return p}g=(function(){var q="createComment",p=null;if(h(j)){if(d(j[q])){p=f}}return p}());function k(r){var q="createDocumentFragment",p=null;if(h(r)){p=r[q]()}return p}o=(function(){var q="createDocumentFragment",p=null;if(h(j)){if(d(j[q])){p=k}}return p}());j=null;Utils.create=Utils.create||{element:e,elementNS:a,text:i,processingInstruction:m,comment:g,documentFragment:o}}())}if(Utils){(function(){var B,w=Utils.is.document,T=Utils.is.element,E=Utils.is.hostObject,h=Utils.raise.invalidCharacter,x=Utils.raise.syntax,H=Utils.is.arrayLike,s=Utils.helpers.makeArray,j,z,i,P,U,O,K,C,p,t,W,c,F;B={" ":true,"\t":true,"\n":true,"\f":true,"\r":true};j=(function(){var X=null;if(w(global.document)){X=global.document}return X}());z=(function(){var X=null;if(j&&j.body){X=j.body}return X}());i=(function(){var X=false;if(T(z)){X=typeof z.className==="string"}return X}());P=(function(){var X=false;if(T(z)){X=E(z.classList)}return X}());function d(aa,Z){var Y=aa,X=Z;return function(ac,ab){if(T(ac)){X=ac.classList[Y](ab)}return X}}U=(function(){var Y="contains",X=null;if(z&&P&&E(z.classList[Y])){X=d(Y,"false")}return X}());function o(Z){var Y=B[Z],X=false;if(typeof Y!=="undefined"){h()}else{if(Z===""){x()}else{if(typeof Y==="undefined"){X=true}}}return X}function r(aa){var Z=0,Y,X=true;if(aa&&aa.length){Y=aa.length;for(Z;Z<Y;Z+=1){X=o(aa.charAt(Z))}}return X}function M(Z,ab,aa){var Y=false,X="";if(Z&&Z!==" "){Y=o(Z)}if(!Y&&ab.length){aa[aa.length]=ab}else{if(Y){X=ab+Z}}return X}function b(aa){var Z=0,Y,ab="",X=[];if(aa&&aa.length){Y=aa.length+1;for(Z;Z<Y;Z+=1){ab=M(aa.charAt(Z),ab,X)}}return X}function v(Y){var X=[];if(i){X=b(Y.className)}return X}function I(aa,ab){var Z=0,Y,X=false;Y=aa.length;for(Z;Z<Y;Z+=1){if(ab===aa[Z]){X=true;break}}return X}function G(Z,Y){var X=false;if(r(Y)){X=I(Z,Y)}return X}function n(Z,Y){var X=null;if(T(Z)){X=G(v(Z),Y)}return X}O=(function(){var X=null;if(P){X=U}else{if(!P&&T(z)){X=n}}return X}());function y(ab,aa){var Z=0,Y=aa.length,X=true;if(O){while(Z<Y&&X){X=O(ab,aa[Z]);Z+=1}}return X}function a(Z,Y){var X=false;if(T(Z)){if(H(Y)){X=y(Z,Y)}}return X}K=(function(){var X=null;if(z&&P&&E(z.classList.add)){X=d("add")}return X}());function f(aa,Z,Y){var X=false;if(O){if(!O(aa,Z)){Y[Y.length]=Z;X=true}}return X}function L(aa,Y,Z){var X=false;if(r(Y)){X=f(aa,Y,Z)}return X}function Q(Z,Y){var X;if(i){Z.className=Y.join(" ")}return X}function g(aa,Y){var Z,X;if(T(aa)){Z=v(aa);L(aa,Y,Z);Q(aa,Z)}return X}C=(function(){var X=null;if(P){X=K}else{if(!P&&T(z)){X=g}}return X}());function k(ab,aa){var Z=0,Y=aa.length,X;if(C){for(Z;Z<Y;Z+=1){C(ab,aa[Z])}}return X}function J(Z,Y){var X;if(T(Z)){if(H(Y)){k(Z,Y)}}return X}p=(function(){var Y="remove",X=null;if(z&&P&&E(z.classList[Y])){X=d(Y)}return X}());function u(aa,ad){var Z=ad.length-1,Y=Z,ae,ac=0,ab,X;for(Y;Y>-1;Y-=1){ae=Z-Y;ab=ad[ae];if(ab===aa){delete ad[ae]}else{if(ab!==aa){delete ad[ae];ad[ac]=ab;ac+=1}}}ad.length=ac;return X}function V(aa,Y,Z){var X;if(O){if(O(aa,Y)){X=u(Y,Z)}}return X}function q(aa,Y,Z){var X;if(r(Y)){V(aa,Y,Z)}return X}function e(aa,Y){var Z,X;if(T(aa)){Z=v(aa);q(aa,Y,Z);Q(aa,Z)}return X}t=(function(){var X=null;if(P){X=p}else{if(!P&&T(z)){X=e}}return X}());function D(ac,ab){var Z=ab.length,Y=Z,aa,X;if(t){for(Y;Y>-1;Y-=1){aa=Z-Y;t(ac,ab[aa])}}return X}function m(Z,Y){var X;if(T(Z)){if(H(Y)){D(Z,Y)}}return X}W=(function(){var Y="toggle",X=null;if(z&&P&&E(z.classList[Y])){X=d(Y,"false")}return X}());function N(aa,Z){var Y,X=false;if(T(aa)&&O){Y=O(aa,Z);if(!Y&&C){C(aa,Z);X=true}else{if(Y&&t){t(aa,Z)}}}return X}c=(function(){var X=null;if(j){if(P){X=W}else{if(!P&&T(z)){X=N}}}return X}());function S(ab,aa){var Z=0,Y=aa.length,X;if(c){for(Z;Z<Y;Z+=1){c(ab,aa[Z])}}return X}function A(Z,Y){var X;if(T(Z)){if(H(Y)){S(Z,Y)}}return X}function l(aa,Y){var Z,X=null;if(T(aa)){Z=v(aa);if(Y>=0&&Y<Z.length){X=Z[Y]}}return X}function R(Y){var X=null;if(T(Y)){X=s(Y.classList)}return X}F=(function(){var X=null;if(z){if(P){X=R}else{if(!P&&T(z)){X=v}}}return X}());j=null;z=null;Utils.classes=Utils.classes||{contains:O,containsList:a,add:C,addList:J,remove:t,removeList:m,toggle:c,toggleList:A,item:l,get:F}}())}if(Utils){(function(){var w=Utils.is.document,A=Utils.types,o=Utils.is.nodeLike,J=Utils.is.hostObject,u=Utils.helpers.makeArray,K=Utils.is.arrayLike,Z=Utils.is.element,p=Utils.node.remove,h=Utils.is.text,y=Utils.can.getValue,X=Utils.create.text,i,Y,aa,q,V,r;i=(function(){var ae=null;if(w(global.document)){ae=global.document}return ae}());Y=(function(){var ae={};ae[A.ELEMENT_NODE]=true;ae[A.TEXT_NODE]=true;ae[A.PROCESSING_INSTRUCTION_NODE]=true;ae[A.COMMENT_NODE]=true;ae[A.DOCUMENT_FRAGMENT_NODE]=true;return ae}());function z(ag){var af=Y,ae=false;if(o(ag)){if(af[ag.nodeType]){ae=true}}return ae}aa=(function(){var ae={};ae[A.ELEMENT_NODE]=true;ae[A.TEXT_NODE]=true;ae[A.PROCESSING_INSTRUCTION_NODE]=true;ae[A.COMMENT_NODE]=true;ae[A.DOCUMENT_FRAGMENT_NODE]=true;return ae}());function C(ag){var af=aa,ae=false;if(o(ag)){if(af[ag.nodeType]){ae=true}}return ae}function g(ag){var af="childNodes",ae=null;if(o(ag)){if(J(ag[af])){ae=u(ag[af])}}return ae}function U(ag,ah,ae){var af;if(typeof ah==="function"){af=ah(ag);if(af===true){ae[ae.length]=ag}else{if(af){ae[ae.length]=af}}}}function k(ai,aj){var ag,af,ah,ae=[];if(K(ai)){ag=ai.length-1;for(af=ag;af>-1;af-=1){ah=ag-af;U(ai[ah],aj,ae)}}return ae}function B(af,ag){var ae=[];if(typeof ag==="function"){ae=k(g(af),ag)}return ae}function n(af){var ae=null;if(o(af)){p(af.parentNode,af)}return ae}function ac(af){var ae=null;if(o(af)){ae=B(af,n)}return ae}function d(af){var ae=false;if(Z(af)){ae=true}return ae}function I(ae){return k(g(ae),d)}function S(ag){var af="children",ae=null;if(Z(ag)){if(J(ag[af])){ae=u(ag[af])}}return ae}function P(af){var ae=false;if(Z(af)){ae=J(af.children)}return ae}q=(function(){var af,ae;if(i){af=P(i.body);if(af){ae=S}else{if(!af){ae=I}}}return ae}());function L(af,ag){var ae=[];if(q){if(typeof ag==="function"){ae=k(q(af),ag)}}return ae}function H(af){var ae=false;if(Z(af)){ae=n(af)}return ae}function s(af){var ae=null;if(o(af)){ae=L(af,H)}return ae}function l(af){var ae=null;if(h(af)){ae=af.nodeValue}return ae}function a(af){var ae=null;if(y(af)){ae=af.nodeValue}return ae}function R(ah,af,ag){var ae;ag[ag.length]=ah;if(af.length){ag[ag.length]=af}return ae}function E(af){var ae=false;if(o(af)){ae=J(af.childNodes)}return ae}function j(aj){var ah,ag,ai,af,ae=[];if(E(aj)){ah=aj.childNodes.length-1;for(ag=ah;ag>-1;ag-=1){ai=ah-ag;af=j(aj.childNodes[ai]);R(aj.childNodes[ai],af,ae)}}return ae}function T(ag){var af="childNodes",ae=null;if(o(ag)){if(J(ag[af])){ae=j(ag)}}return ae}function D(ai,aj,ag){var af,ae,ah;ag=ag||[];if(E(ai)){af=ai.childNodes.length-1;for(ae=af;ae>-1;ae-=1){ah=af-ae;D(ai.childNodes[ah],aj,ag);U(ai.childNodes[ah],aj,ag)}}return ag}function Q(ag){var af,ae=null;if(o(ag)){af=D(ag,l);ae=af.join("")}return ae}V=(function(){var ae={};ae[A.ELEMENT_NODE]=Q;ae[A.TEXT_NODE]=a;ae[A.COMMENT_NODE]=a;ae[A.DOCUMENT_FRAGMENT_NODE]=Q;ae[A.PROCESSING_INSTRUCTION_NODE]=a;return ae}());function b(ah){var ag=V,af,ae=null;if(z(ah)){af=ag[ah.nodeType];if(typeof af==="function"){ae=af(ah)}}return ae}function x(ai,ag,af){var ah,ae=null;ai=ai||"";if(o(ag)){if(w(af)){ah=X(af,ai);ac(ag);Utils.node.append(ag,ah);ae=Utils.node.value(ah)}}return ae}function c(ag,af){var ae=null;ag=ag||"";if(Utils.can.getValue(af)){af.nodeValue=ag;ae=af.nodeValue}return ae}r=(function(){var ae={};ae[A.ELEMENT_NODE]=x;ae[A.TEXT_NODE]=c;ae[A.COMMENT_NODE]=c;ae[A.DOCUMENT_FRAGMENT_NODE]=x;ae[A.PROCESSING_INSTRUCTION_NODE]=c;return ae}());function f(aj,ai,ah){var ag=r,af,ae=null;if(C(ai)){af=ag[ai.nodeType];if(typeof af==="function"){ae=af(aj,ai,ah)}}return ae}function G(ai,aj,ag){var af,ae,ah;ag=ag||[];if(K(ai)){af=ai.length-1;for(ae=af;ae>-1;ae-=1){ah=af-ae;G(ai[ah],aj,ag);U(ai[ah],aj,ag)}}return ag}function ab(ag,af,ah){var ae;if(Z(ag)){R(ag,af,ah)}return ae}function N(aj){var ah,ag,ai,af,ae=[];if(E(aj)){ah=aj.childNodes.length-1;for(ag=ah;ag>-1;ag-=1){ai=ah-ag;af=N(aj.childNodes[ai]);ab(aj.childNodes[ai],af,ae)}}return ae}function O(ag){var af="childNodes",ae=null;if(o(ag)){if(J(ag[af])){ae=N(ag)}}return ae}function m(af,ah,ag){var ae;if(Z(af)){U(af,ah,ag)}return ae}function F(ai,aj,ag){var af,ae,ah;ag=ag||[];if(E(ai)){af=ai.childNodes.length-1;for(ae=af;ae>-1;ae-=1){ah=af-ae;F(ai.childNodes[ah],aj,ag);m(ai.childNodes[ah],aj,ag)}}return ag}function t(ag){var af="parent",ae=null;if(o(ag)){if(ag.parentNode){ae={};ae.value=ag.parentNode;ae[af]=t(ag.parentNode)}else{if(!ag.parentNode){ae=null}}}return ae}function M(ag,ah){var af="parent",ae=false;if(o(ah)){while(ag){if(ag.value===ah){ae=true;break}ag=ag[af]}}return ae}function ad(af,ah){var ag,ae=false;if(o(ah)){ag=t(ah);ae=M(ag,af)}return ae}function e(af){var ae=false;if(af&&typeof af==="object"){ae=typeof af.value==="object"}return ae}function W(ag,ah){var af="parent",ae=[];if(e(ag)){while(ag){U(ag.value,ah,ae);ag=ag[af]}}return ae}function v(af,ag){var ae=[];if(typeof ag==="function"){ae=W(t(af),ag)}return ae}i=null;Utils.traverse=Utils.traverse||{getNodes:g,linear:k,nodes:B,clearNodes:ac,getElements:q,elements:L,clearElements:s,getNodeTree:T,nodeTree:D,getText:b,setText:f,recursive:G,getElementTree:O,elementTree:F,getAncestors:t,isAncestor:ad,list:W,ancestors:v}}())}if(Utils){(function(){var u=Utils.types,k=Utils.is.nodeLike,l=Utils.helpers.makeArray,r=Utils.is.document,C=Utils.is.hostObject,T=Utils.is.element,F=Utils.is.arrayLike,h,c,N,U,y,v,f,o,a,j,K,H,I,A,B,E,R,D,Q,J,q,p,e,O,x;h=(function(){var X=null;if(r(global.document)){X=global.document}return X}());c=(function(){var X={};X[u.ELEMENT_NODE]=true;X[u.DOCMENT_NODE]=true;X[u.DOCUMENT_FRAGMENT_NODE]=true;return X}());function t(Z){var Y=c,X=false;if(k(Z)){X=typeof Y[Z.nodeType]==="undefined"}return X}function i(Y){var X=Y;return function(ab,aa){var Z=null;if(r(ab)){Z=l(ab[X](aa))}return Z}}y=(function(){var Y="getElementsByName",X=null;if(r(h)){if(C(h[Y])){X=i(Y)}}return X}());function w(Y){var X=Y;return function(ab,aa){var Z=null;if(r(ab)||T(ab)){Z=l(ab[X](aa))}return Z}}v=(function(){var Y="getElementsByTagName",X=null;if(r(h)){if(C(h[Y])){X=w(Y)}}return X}());function s(Y){var X=Y;return function(aa,ab,ac){var Z=null;if(r(aa)||T(aa)){Z=l(aa[X](ab,ac))}return Z}}f=(function(){var Y="getElementsByTagNameNS",X=null;if(r(h)){if(C(h[Y])){X=s(Y)}}return X}());function G(Y){var X=Y;return function(aa,ab){var Z=null;if(r(aa)||T(aa)){Z=l(aa[X](ab))}return Z}}o=(function(){var Y="getElementsByClassName",X=null;if(r(h)){if(C(h[Y])){X=G(Y)}}return X}());function P(Y){var X=Y;return function(aa,ab){var Z=null;if(r(aa)){Z=aa[X](ab)}return Z}}a=(function(){var Y="getElementById",X=null;if(r(h)){if(C(h[Y])){X=P(Y)}}return X}());function d(Y){var X=Y;return function(aa,ab){var Z=null;if(t(aa)){Z=aa[X](ab)}return Z}}j=(function(){var Y="querySelector",X=null;if(t(h)){if(C(h[Y])){X=d(Y)}}return X}());function b(Y){var X=Y;return function(aa,ab){var Z=null;if(t(aa)){Z=l(aa[X](ab))}return Z}}K=(function(){var Y="querySelectorAll",X=null;if(t(h)){if(C(h[Y])){X=b(Y)}}return X}());function z(Y){var X=null;if(r(Y)){X=Y.head}return X}function W(Z){var Y,X=null;if(r(Z)){Y=v(Z,"head");if(F(Y)){X=Y[0]}}return X}N=(function(){var Y,X=null;if(r(h)){Y=C(h.head);if(Y){X=z}else{if(!Y){X=W}}}return X}());function L(Y){var X=null;if(r(Y)){X=Y.body}return X}function g(Z){var Y,X=null;if(r(Z)){Y=v(Z,"body");if(F(Y)){X=Y[0]}}return X}U=(function(){var Y,X=null;if(r(h)){Y=C(h.body);if(Y){X=L}else{if(!Y){X=g}}}return X}());function M(Y){var X=Y;if(!k(Y)&&F(Y)){X=l(Y)}return X}function m(Y){var X=Y;return function(aa){var Z=null;if(r(aa)){Z=l(aa[X])}return Z}}function S(Z,Y){var X=null;if(r(Z)){if(C(Z[Y])){X=m(Y)}}return X}function n(Y){var X=Y;return function(ab,aa){var Z=null;if(r(ab)){Z=M(ab[X][aa])}return Z}}function V(Z,Y){var X=null;if(r(Z)){if(C(Z[Y])){X=n(Y)}}return X}H=(function(){return V(h,"images")}());I=(function(){return S(h,"images")}());A=(function(){return V(h,"embeds")}());B=(function(){return S(h,"embeds")}());E=(function(){return V(h,"links")}());R=(function(){return S(h,"links")}());D=(function(){return V(h,"forms")}());Q=(function(){return S(h,"forms")}());J=(function(){return V(h,"scripts")}());q=(function(){return S(h,"scripts")}());p=(function(){return V(h,"applets")}());e=(function(){return S(h,"applets")}());O=(function(){return V(h,"anchors")}());x=(function(){return S(h,"anchors")}());h=null;Utils.select=Utils.select||{byName:y,byTagName:v,byTagNameNS:f,byClassName:o,byId:a,query:j,queryAll:K,body:U,head:N,images:H,allImages:I,embeds:A,allEmbeds:B,plugins:A,allPlugins:B,links:E,allLinks:R,forms:D,allForms:Q,scripts:J,allScripts:q,applets:p,allApplets:e,anchors:O,allAnchors:x}}())};