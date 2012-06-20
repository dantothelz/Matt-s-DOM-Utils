/**
 * Copyright (C) 2012 Matt McDonald.
 *
 * Matt's DOM Utils (Utils) is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * Lesser General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Matt's DOM Utils (Utils) is distributed in the hope
 * that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Lesser General
 * Public License along with Matt's DOM Utils (Utils).
 * If not, see <http://www.gnu.org/licenses/>.
 *
 * @see http://www.fortybelow.ca/projects/JavaScript/Utils/
 */

var Utils=Utils||{},global=global||this;if(typeof Utils==="object"&&Utils){(function(){var e={INDEX_SIZE_ERROR:"The index is not in the allowed range.",HEIRARCHY_REQUEST_ERROR:"The operation would yield an incorrect node tree.",WRONG_DOCUMENT_ERROR:"The object is in the wrong document.",INVALID_CHARACTER_ERROR:"The string contains invalid characters.",NO_MODIFICATION_ALLOWED_ERROR:"The object can not be modified.",NOT_FOUND_ERROR:"The object can not be found here.",NOT_SUPPORTED_ERROR:"The operation is not supported.",INVALID_STATE_ERROR:"The object is in an invalid state.",SYNTAX_ERROR:"The string did not match the expected pattern.",INVALID_MODIFICATION_ERROR:"The object can not be modified in this way.",NAMESPACE_ERROR:"The operation is not allowed by Namespaces in XML.",INVALID_ACCESS_ERROR:"The object does not support the operation or argument.",TYPE_MISMATCH_ERROR:"The type of the object does not match the expected type.",SECURITY_ERROR:"The operation is insecure.",NETWORK_ERROR:"A network error occurred.",ABORT_ERROR:"The operation was aborted.",URL_MISMATCH_ERROR:"The given URL does not match another URL.",QUOTA_EXCEEDED_ERROR:"The quota has been exceeded.",TIMEOUT_ERROR:"The operation timed out.",INVALID_NODE_TYPE_ERROR:"The supplied node is incorrect or has an incorrect ancestor for this operation.",DATA_CLONE_ERROR:"The object can not be cloned."};function c(){throw new Error(e.INDEX_SIZE_ERROR)}function k(){throw new Error(e.HEIRARCHY_REQUEST_ERROR)}function f(){throw new Error(e.WRONG_DOCUMENT_ERROR)}function h(){throw new Error(e.INVALID_CHARACTER_ERROR)}function o(){var w="NO_MODIFICATION_ALLOWED_ERROR";throw new Error(e[w])}function b(){throw new Error(e.NOT_FOUND_ERROR)}function p(){throw new Error(e.NOT_SUPPORTED_ERROR)}function i(){throw new Error(e.INVALID_STATE_ERROR)}function n(){throw new Error(e.SYNTAX_ERROR)}function m(){throw new Error(e.INVALID_MODIFICATION_ERROR)}function s(){throw new Error(e.NAMESPACE_ERROR)}function r(){throw new Error(e.INVALID_ACCESS_ERROR)}function v(){throw new Error(e.TYPE_MISMATCH_ERROR)}function u(){throw new Error(e.SECURITY_ERROR)}function a(){throw new Error(e.NETWORK_ERROR)}function l(){throw new Error(e.ABORT_ERROR)}function q(){throw new Error(e.URL_MISMATCH_ERROR)}function g(){throw new Error(e.QUOTA_EXCEEDED_ERROR)}function j(){throw new Error(e.TIMEOUT_ERROR)}function d(){throw new Error(e.INVALID_NODE_TYPE_ERROR)}function t(){throw new Error(e.DATA_CLONE_ERROR)}Utils.raise=Utils.raise||{types:e,indexSize:c,heirarchyRequest:k,wrongDocument:f,invalidCharacter:h,noModificationAllowed:o,notFound:b,notSupported:p,invalidState:i,syntax:n,invalidModification:m,namespace:s,invalidAccess:r,typeMismatch:v,security:u,network:a,abort:l,urlMismatch:q,quotaExceeded:g,timeout:j,invalidNodeType:d,dataClone:t}}())}if(typeof Utils==="object"&&Utils){(function(){Utils.types=Utils.types||{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCRESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12}}())}if(typeof Utils==="object"&&Utils){(function(){var t=Utils.types,k,u,g;k={object:true,"function":true};u=(function(){var w=null;if(global.document){if(typeof global.document==="object"){w=global.document}}return w}());function b(x,w){return typeof x===w}function d(y){var w=typeof y,x=k[w]&&y;return !!(x||w==="unknown")}function e(z){var x=typeof z,y=k[x]&&z,w=false;if(y||x==="unknown"){w=typeof z.length==="number"}return w}function c(z){var x=typeof z,y=k[x]&&z,w=false;if(y||x==="unknown"){w=typeof z.nodeType==="number"}return w}function v(A,x){var y=typeof A,z=k[y]&&A,w=false;if(z||y==="unknown"){w=A.nodeType===x}return w}function n(x){var w=t.ELEMENT_NODE;return v(x,w)}function j(x){var w=t.ATTRIBUTE_NODE;return v(x,w)}function h(x){var w=t.TEXT_NODE;return v(x,w)}function p(x){var w=t.CDATA_SECTION_NODE;return v(x,w)}function r(y){var w="ENTITY_REFERENCE_NODE",x=t[w];return v(y,x)}function o(x){var w=t.ENTITY_NODE;return v(x,w)}function a(y){var w="PROCESSING_INSTRUCTION_NODE",x=t[w];return v(y,x)}function q(x){var w=t.COMMENT_NODE;return v(x,w)}function i(x){var w=t.DOCUMENT_NODE;return v(x,w)}function m(w){return w===global.document}g=(function(){var w=i;if(!c(u)){w=m}return w}());function s(x){var w=t.DOCUMENT_TYPE_NODE;return v(x,w)}function f(y){var w="DOCUMENT_FRAGMENT_NODE",x=t[w];return v(y,x)}function l(x){var w=t.NOTATION_NODE;return v(x,w)}u=null;Utils.is=Utils.is||{type:b,hostObject:d,arrayLike:e,nodeLike:c,nodeType:v,element:n,attribute:j,text:h,cDataSection:p,entityReference:r,entity:o,processingInstruction:a,comment:q,document:g,documentType:s,documentFragment:f,notation:l}}())}if(typeof Utils==="object"&&Utils){(function(){var a=Utils.is.arrayLike;function b(g){var e,d,f,c=[];if(a(g)){c.length=g.length;e=g.length-1;for(d=e;d>-1;d-=1){f=e-d;c[f]=g[f]}}return c}Utils.helpers=Utils.helpers||{makeArray:b}}())}if(typeof Utils==="object"&&Utils){(function(){var f=Utils.types,i=Utils.is.nodeLike,d=Utils.is.hostObject,p=Utils.is.arrayLike,q;q=(function(){var r={};r[f.TEXT_NODE]=true;r[f.PROCESSING_INSTRUCTION_NODE]=true;r[f.COMMENT_NODE]=true;return r}());function k(v,s,u){var t="insertBefore",r=null;if(i(v)&&i(s)&&i(u)){if(d(v[t])){r=v[t](s,u)}}return r}function l(v,w,u){var t,s,x,r;if(p(w)){t=w.length-1;for(s=t;s>-1;s-=1){x=t-s;k(v,w[x],u)}}return r}function g(t,u){var s="appendChild",r=null;if(i(t)&&i(u)){if(d(t[s])){r=t[s](u)}}return r}function b(u,v){var t,s,w,r;if(p(v)){t=v.length-1;for(s=t;s>-1;s-=1){w=t-s;g(u,v[w])}}return r}function n(t,u){var s="removeChild",r=null;if(i(t)&&i(u)){if(d(t[s])){r=t[s](u)}}return r}function j(v,t,s){var u="replaceChild",r=null;if(i(v)&&i(t)&&i(s)){if(d(v[u])){r=v[u](t,s)}}return r}function c(u,s){var t="cloneNode",r=null;if(i(u)){if(d(u[t])){r=u[t](u,s)}}return r}function o(s){var r=false;if(i(s)){r=typeof s.nodeName==="string"}return r}function a(v,t){var u="toLowerCase",s="toUpperCase",r=null;if(o(v)){r=v.nodeName;if(t){r=r[u]()}else{if(!t){r=r[s]()}}}return r}function m(s){var r=false;if(i(s)){r=typeof s.nodeValue==="string"}return r}function h(s){var r=null;if(m(s)){r=s.nodeValue}return r}function e(u,t){var s="nodeValue",r=null;if(i(u)){if(q[u.nodeType]){r=u[s]=t}}return r}Utils.node=Utils.node||{prepend:k,prependList:l,append:g,appendList:b,remove:n,replace:j,clone:c,getName:a,getValue:h,setValue:e}}())}if(typeof Utils==="object"&&Utils){(function(){var i=Utils.is.document,e=Utils.is.hostObject,k,f,a,j,n,h,b,q,p;k=(function(){var r=null;if(global.document){if(typeof global.document==="object"){r=global.document}}return r}());function o(u,s){var t="createElement",r=null;if(i(u)){r=u[t](s)}return r}f=(function(){var s="createElement",r=null;if(i(k)){if(e(k[s])){r=o}}return r}());function d(v,u,s){var t="createElementNS",r=null;if(i(v)){r=v[t](u,s)}return r}a=(function(){var s="createElementNS",r=null;if(i(k)){if(e(k[s])){r=d}}return r}());function c(t,u){var s="createTextNode",r=null;if(i(t)){r=t[s](u)}return r}j=(function(){var s="createTextNode",r=null;if(i(k)){if(e(k[s])){r=c}}return r}());function m(u,t,v){var s="createProcessingInstruction",r=null;if(i(u)){r=u[s](t,v)}return r}n=(function(){var s="createProcessingInstruction",r=null;if(i(k)){if(e(k[s])){r=m}}return r}());function g(t,u){var s="createComment",r=null;if(i(t)){r=t[s](u)}return r}h=(function(){var s="createComment",r=null;if(i(k)){if(e(k[s])){r=g}}return r}());b=(function(){var s="createDocumentFragment",r=false;if(i(k)){if(e(k[s])){r=true}}return r}());q=(function(){var s="createDocumentFragment",r=b;if(b){try{k[s]()}catch(t){r=false}}return r}());function l(t){var s="createDocumentFragment",r=null;if(i(t)){r=t[s]()}return r}p=(function(){var r=null;if(q){r=l}return r}());k=null;Utils.create=Utils.create||{element:f,elementNS:a,text:j,processingInstruction:n,comment:h,documentFragment:p}}())}if(typeof Utils==="object"&&Utils){(function(){var F,A=Utils.is.document,Z=Utils.is.element,I=Utils.is.hostObject,i=Utils.raise.invalidCharacter,B=Utils.raise.syntax,M=Utils.is.arrayLike,u=Utils.helpers.makeArray,k,D,j,V,aa,U,P,G,r,v,ac,d,y,m,J;F={" ":true,"\t":true,"\n":true,"\f":true,"\r":true};k=(function(){var ad=null;if(A(global.document)){ad=global.document}return ad}());D=(function(){var ad=null;if(k&&k.body){ad=k.body}return ad}());j=(function(){var ad=false;if(Z(D)){ad=typeof D.className==="string"}return ad}());V=(function(){var ad=false;if(Z(D)){ad=I(D.classList)}return ad}());function e(ag,af){var ae=ag,ad=af;return function(ai,ah){if(Z(ai)){ad=ai.classList[ae](ah)}return ad}}aa=(function(){var ae="contains",ad=null;if(D&&V&&I(D.classList[ae])){ad=e(ae,"false")}return ad}());function q(af){var ae=F[af],ad=false;if(typeof ae!=="undefined"){i()}else{if(af===""){B()}else{if(typeof ae==="undefined"){ad=true}}}return ad}function t(ag){var af=0,ae,ad=true;if(ag&&ag.length){ae=ag.length;for(af;af<ae;af+=1){ad=q(ag.charAt(af))}}return ad}function S(af,ah,ag){var ae=false,ad="";if(af&&af!==" "){ae=q(af)}if(!ae&&ah.length){ag[ag.length]=ah}else{if(ae){ad=ah+af}}return ad}function c(ag){var af=0,ae,ah="",ad=[];if(ag&&ag.length){ae=ag.length+1;for(af;af<ae;af+=1){ah=S(ag.charAt(af),ah,ad)}}return ad}function z(ae){var ad=[];if(j){ad=c(ae.className)}return ad}function N(ag,ah){var af=0,ae,ad=false;ae=ag.length;for(af;af<ae;af+=1){if(ah===ag[af]){ad=true;break}}return ad}function K(af,ae){var ad=false;if(t(ae)){ad=N(af,ae)}return ad}function o(af,ae){var ad=null;if(Z(af)){ad=K(z(af),ae)}return ad}U=(function(){var ad=null;if(V){ad=aa}else{if(!V&&Z(D)){ad=o}}return ad}());function a(af,ae){var ad=null;if(U){ad=U(af,ae)}return ad}function C(ah,ag){var af=0,ae=ag.length,ad=true;while(af<ae&&ad){ad=a(ah,ag[af]);ad=!!ad;af+=1}return ad}function b(af,ae){var ad=false;if(Z(af)){if(M(ae)){ad=C(af,ae)}}return ad}P=(function(){var ad=null;if(D&&V&&I(D.classList.add)){ad=e("add")}return ad}());function g(ag,af,ae){var ad=false;if(!a(ag,af)){ae[ae.length]=af;ad=true}return ad}function R(ag,ae,af){var ad=false;if(t(ae)){ad=g(ag,ae,af)}return ad}function W(af,ae){var ad;if(j){af.className=ae.join(" ")}return ad}function h(ag,ae){var af,ad;if(Z(ag)){af=z(ag);R(ag,ae,af);W(ag,af)}return ad}G=(function(){var ad=null;if(V){ad=P}else{if(!V&&Z(D)){ad=h}}return ad}());function Q(af,ae){var ad=null;if(G){ad=G(af,ae)}return ad}function l(ah,ag){var af=0,ae=ag.length,ad;for(af;af<ae;af+=1){Q(ah,ag[af])}return ad}function O(af,ae){var ad;if(Z(af)){if(M(ae)){l(af,ae)}}return ad}r=(function(){var ae="remove",ad=null;if(D&&V&&I(D.classList[ae])){ad=e(ae)}return ad}());function x(ag,aj){var af=aj.length-1,ae=af,ak,ai=0,ah,ad;for(ae;ae>-1;ae-=1){ak=af-ae;ah=aj[ak];if(ah===ag){delete aj[ak]}else{if(ah!==ag){delete aj[ak];aj[ai]=ah;ai+=1}}}aj.length=ai;return ad}function ab(ag,ae,af){var ad;if(a(ag,ae)){ad=x(ae,af)}return ad}function s(ag,ae,af){var ad;if(t(ae)){ab(ag,ae,af)}return ad}function f(ag,ae){var af,ad;if(Z(ag)){af=z(ag);s(ag,ae,af);W(ag,af)}return ad}v=(function(){var ad=null;if(V){ad=r}else{if(!V&&Z(D)){ad=f}}return ad}());function L(af,ae){var ad=null;if(v){ad=v(af,ae)}return ad}function H(ai,ah){var af=ah.length,ae=af,ag,ad;for(ae;ae>-1;ae-=1){ag=af-ae;L(ai,ah[ag])}return ad}function n(af,ae){var ad;if(Z(af)){if(M(ae)){H(af,ae)}}return ad}ac=(function(){var ae="toggle",ad=null;if(D&&V&&I(D.classList[ae])){ad=e(ae,"false")}return ad}());function T(ag,af){var ae=a(ag,af),ad=false;if(!ae){Q(ag,af);ad=true}else{if(ae){L(ag,af)}}return ad}d=(function(){var ad=null;if(k){if(V){ad=ac}else{if(!V&&Z(D)){ad=T}}}return ad}());function w(af,ae){var ad=null;if(d){ad=d(af,ae)}return ad}function Y(ah,ag){var af=0,ae=ag.length,ad;for(af;af<ae;af+=1){w(ah,ag[af])}return ad}function E(af,ae){var ad;if(Z(af)){if(M(ae)){Y(af,ae)}}return ad}y=(function(){var ad=null;if(D&&V&&I(D.classList.item)){ad=e("item",null)}return ad}());function p(ag,ae){var af,ad=null;if(Z(ag)){af=z(ag);if(ae>=0&&ae<af.length){ad=af[ae]}}return ad}m=(function(){var ad=null;if(k){if(V){ad=y}else{if(!V&&Z(D)){ad=p}}}return ad}());function X(ae){var ad=null;if(Z(ae)){ad=u(ae.classList)}return ad}J=(function(){var ad=null;if(D){if(V){ad=X}else{if(!V&&Z(D)){ad=z}}}return ad}());k=null;D=null;Utils.classes=Utils.classes||{contains:U,containsList:b,add:G,addList:O,remove:v,removeList:n,toggle:d,toggleList:E,item:m,get:J}}())}if(typeof Utils==="object"&&Utils){(function(){var y=Utils.is.document,B=Utils.types,q=Utils.is.nodeLike,L=Utils.is.hostObject,w=Utils.helpers.makeArray,N=Utils.is.arrayLike,af=Utils.is.element,r=Utils.node.remove,h=Utils.is.text,F=Utils.node.getValue,ad=Utils.create.text,Y=Utils.node.append,aj=Utils.node.setValue,k,ae,ag,s,ac,t,g;k=(function(){var al=null;if(y(global.document)){al=global.document}return al}());ae=(function(){var al={};al[B.ELEMENT_NODE]=true;al[B.TEXT_NODE]=true;al[B.PROCESSING_INSTRUCTION_NODE]=true;al[B.COMMENT_NODE]=true;al[B.DOCUMENT_FRAGMENT_NODE]=true;return al}());function A(an){var am=ae,al=false;if(q(an)){if(am[an.nodeType]){al=true}}return al}ag=(function(){var al={};al[B.ELEMENT_NODE]=true;al[B.TEXT_NODE]=true;al[B.PROCESSING_INSTRUCTION_NODE]=true;al[B.COMMENT_NODE]=true;al[B.DOCUMENT_FRAGMENT_NODE]=true;return al}());function D(an){var am=ag,al=false;if(q(an)){if(am[an.nodeType]){al=true}}return al}function P(an){var am="childNodes",al=null;if(q(an)){if(L(an[am])){al=w(an[am])}}return al}g=(function(){var am="childNodes",al=null;if(y(k)){if(L(k[am])){al=P}}return al}());function ab(an,ao,al){var am;if(typeof ao==="function"){am=ao(an);if(am===true){al[al.length]=an}else{if(am){al[al.length]=am}}}}function n(ap,aq){var an,am,ao,al=[];if(N(ap)){an=ap.length-1;for(am=an;am>-1;am-=1){ao=an-am;ab(ap[ao],aq,al)}}return al}function S(am){var al=null;if(g){al=g(am)}return al}function C(am,an){var al=[];if(typeof an==="function"){al=n(S(am),an)}return al}function p(am){var al=null;if(q(am)){r(am.parentNode,am)}return al}function ai(am){var al=null;if(q(am)){al=C(am,p)}return al}function d(am){var al=false;if(af(am)){al=true}return al}function K(al){return n(S(al),d)}function Z(an){var am="children",al=null;if(af(an)){if(L(an[am])){al=w(an[am])}}return al}function V(am){var al=false;if(af(am)){al=L(am.children)}return al}s=(function(){var am,al;if(k){am=V(k.body);if(am){al=Z}else{if(!am){al=K}}}return al}());function M(am){var al=null;if(s){al=s(am)}return al}function O(am,an){var al=[];if(typeof an==="function"){al=n(M(am),an)}return al}function J(am){var al=false;if(af(am)){al=p(am)}return al}function u(am){var al=null;if(q(am)){al=O(am,J)}return al}function m(am){var al=null;if(h(am)){al=F(am)}return al}function a(al){return F(al)}function X(ao,am,an){var al;an[an.length]=ao;if(am.length){an[an.length]=am}return al}function G(am){var al=false;if(q(am)){al=L(am.childNodes)}return al}function l(aq){var ao,an,ap,am,al=[];if(G(aq)){ao=aq.childNodes.length-1;for(an=ao;an>-1;an-=1){ap=ao-an;am=l(aq.childNodes[ap]);X(aq.childNodes[ap],am,al)}}return al}function aa(an){var am="childNodes",al=null;if(q(an)){if(L(an[am])){al=l(an)}}return al}function E(ap,aq,an){var am,al,ao;an=an||[];if(G(ap)){am=ap.childNodes.length-1;for(al=am;al>-1;al-=1){ao=am-al;E(ap.childNodes[ao],aq,an);ab(ap.childNodes[ao],aq,an)}}return an}function W(an){var am,al=null;if(q(an)){am=E(an,m);al=am.join("")}return al}ac=(function(){var al={};al[B.ELEMENT_NODE]=W;al[B.TEXT_NODE]=a;al[B.COMMENT_NODE]=a;al[B.DOCUMENT_FRAGMENT_NODE]=W;al[B.PROCESSING_INSTRUCTION_NODE]=a;return al}());function b(ao){var an=ac,am,al=null;if(A(ao)){am=an[ao.nodeType];if(typeof am==="function"){al=am(ao)}}return al}function j(am,an){var al=null;if(ad){al=ad(am,an)}return al}function U(ao,ap,an){var am,al=null;am=j(an,ap);al=Y(ao,am);return al}function z(an,ap,am){var ao,al=null;if(q(an)){if(y(am)){ai(an);ao=U(an,ap,am);al=F(ao)}}return al}function c(al,am){return aj(al,am)}t=(function(){var al={};al[B.ELEMENT_NODE]=z;al[B.TEXT_NODE]=c;al[B.COMMENT_NODE]=c;al[B.DOCUMENT_FRAGMENT_NODE]=z;al[B.PROCESSING_INSTRUCTION_NODE]=c;return al}());function f(ap,aq,ao){var an=t,am,al=null;if(D(ap)){am=an[ap.nodeType];if(typeof am==="function"){al=am(ap,aq,ao)}}return al}function I(ap,aq,an){var am,al,ao;an=an||[];if(N(ap)){am=ap.length-1;for(al=am;al>-1;al-=1){ao=am-al;I(ap[ao],aq,an);ab(ap[ao],aq,an)}}return an}function ah(an,am,ao){var al;if(af(an)){X(an,am,ao)}return al}function R(aq){var ao,an,ap,am,al=[];if(G(aq)){ao=aq.childNodes.length-1;for(an=ao;an>-1;an-=1){ap=ao-an;am=R(aq.childNodes[ap]);ah(aq.childNodes[ap],am,al)}}return al}function T(an){var am="childNodes",al=null;if(q(an)){if(L(an[am])){al=R(an)}}return al}function o(am,ao,an){var al;if(af(am)){ab(am,ao,an)}return al}function H(ap,aq,an){var am,al,ao;an=an||[];if(G(ap)){am=ap.childNodes.length-1;for(al=am;al>-1;al-=1){ao=am-al;H(ap.childNodes[ao],aq,an);o(ap.childNodes[ao],aq,an)}}return an}function v(an){var am="parent",al=null;if(q(an)){if(L(an.parentNode)){al={};al.value=an.parentNode;al[am]=v(an.parentNode)}}return al}function Q(an,ao){var am="parent",al=false;if(q(ao)){while(an){if(an.value===ao){al=true;break}an=an[am]}}return al}function ak(am,ao){var an,al=false;if(q(ao)){an=v(ao);al=Q(an,am)}return al}function e(am){var al=false;if(am&&typeof am==="object"){al=typeof am.value==="object"}return al}function i(an,ao){var am="parent",al=[];if(e(an)){while(an){ab(an.value,ao,al);an=an[am]}}return al}function x(am,an){var al=[];if(typeof an==="function"){al=i(v(am),an)}return al}k=null;Utils.traverse=Utils.traverse||{getNodes:g,linear:n,nodes:C,clearNodes:ai,getElements:s,elements:O,clearElements:u,getNodeTree:aa,nodeTree:E,getText:b,setText:f,recursive:I,getElementTree:T,elementTree:H,getAncestors:v,isAncestor:ak,list:i,ancestors:x}}())}if(typeof Utils==="object"&&Utils){(function(){var t=Utils.types,k=Utils.is.nodeLike,l=Utils.helpers.makeArray,q=Utils.is.document,C=Utils.is.hostObject,U=Utils.is.element,F=Utils.is.arrayLike,h,c,O,V,y,u,f,n,a,j,L,I,J,A,B,E,S,D,R,K,p,o,e,P,x;h=(function(){var Z=null;if(q(global.document)){Z=global.document}return Z}());c=(function(){var Z={};Z[t.ELEMENT_NODE]=true;Z[t.DOCUMENT_NODE]=true;Z[t.DOCUMENT_FRAGMENT_NODE]=true;return Z}());function s(ab){var aa=c,Z=false;if(k(ab)){Z=typeof aa[ab.nodeType]!=="undefined"}return Z}function i(aa){var Z=aa;return function(ad,ac){var ab=null;if(q(ad)){ab=l(ad[Z](ac))}return ab}}y=(function(){var aa="getElementsByName",Z=null;if(q(h)){if(C(h[aa])){Z=i(aa)}}return Z}());function v(aa){var Z=aa;return function(ad,ac){var ab=null;if(q(ad)||U(ad)){ab=l(ad[Z](ac))}return ab}}u=(function(){var aa="getElementsByTagName",Z=null;if(q(h)){if(C(h[aa])){Z=v(aa)}}return Z}());function r(aa){var Z=aa;return function(ac,ad,ae){var ab=null;if(q(ac)||U(ac)){ab=l(ac[Z](ad,ae))}return ab}}f=(function(){var aa="getElementsByTagNameNS",Z=null;if(q(h)){if(C(h[aa])){Z=r(aa)}}return Z}());function H(aa){var Z=aa;return function(ac,ad){var ab=null;if(q(ac)||U(ac)){ab=l(ac[Z](ad))}return ab}}n=(function(){var aa="getElementsByClassName",Z=null;if(q(h)){if(C(h[aa])){Z=H(aa)}}return Z}());function Q(aa){var Z=aa;return function(ac,ad){var ab=null;if(q(ac)){ab=ac[Z](ad)}return ab}}a=(function(){var aa="getElementById",Z=null;if(q(h)){if(C(h[aa])){Z=Q(aa)}}return Z}());function d(aa){var Z=aa;return function(ac,ad){var ab=null;if(s(ac)){ab=ac[Z](ad)}return ab}}j=(function(){var aa="querySelector",Z=null;if(s(h)){if(C(h[aa])){Z=d(aa)}}return Z}());function b(aa){var Z=aa;return function(ac,ad){var ab=null;if(s(ac)){ab=l(ac[Z](ad))}return ab}}L=(function(){var aa="querySelectorAll",Z=null;if(s(h)){if(C(h[aa])){Z=b(aa)}}return Z}());function z(aa){var Z=null;if(q(aa)){Z=aa.head}return Z}function Y(ab){var aa,Z=null;if(q(ab)){aa=u(ab,"head");if(F(aa)){Z=aa[0]}}return Z}O=(function(){var aa="getElementsByTagName",Z=null;if(q(h)){if(C(h.head)){Z=z}else{if(C(h[aa])){Z=Y}}}return Z}());function M(aa){var Z=null;if(q(aa)){Z=aa.body}return Z}function g(ab){var aa,Z=null;if(q(ab)){aa=u(ab,"body");if(F(aa)){Z=aa[0]}}return Z}V=(function(){var aa="getElementsByTagName",Z=null;if(q(h)){if(C(h.body)){Z=M}else{if(C(h[aa])){Z=g}}}return Z}());function N(aa){var Z=aa;if(!k(aa)&&F(aa)){Z=l(aa)}return Z}function G(aa){var Z=aa;return function(ac){var ab=null;if(q(ac)){ab=l(ac[Z])}return ab}}function T(ab,aa){var Z=null;if(q(ab)){if(C(ab[aa])){Z=G(aa)}}return Z}function w(aa){var Z=aa;return function(ad,ac){var ab=null;if(q(ad)){ab=N(ad[Z][ac])}return ab}}function X(ab,aa){var Z=null;if(q(ab)){if(C(ab[aa])){Z=w(aa)}}return Z}I=(function(){return X(h,"images")}());J=(function(){return T(h,"images")}());A=(function(){return X(h,"embeds")}());B=(function(){return T(h,"embeds")}());E=(function(){return X(h,"links")}());S=(function(){return T(h,"links")}());D=(function(){return X(h,"forms")}());R=(function(){return T(h,"forms")}());K=(function(){return X(h,"scripts")}());p=(function(){return T(h,"scripts")}());o=(function(){return X(h,"applets")}());e=(function(){return T(h,"applets")}());P=(function(){return X(h,"anchors")}());x=(function(){return T(h,"anchors")}());function W(ac,ab,aa){var Z=null;if(ac&&C(ac[ab])){Z=N(ac[ab][aa])}return Z}function m(ab,aa){var Z=null;if(ab&&C(ab[aa])){Z=l(ab[aa])}return Z}h=null;Utils.select=Utils.select||{byName:y,byTagName:u,byTagNameNS:f,byClassName:n,byId:a,query:j,queryAll:L,body:V,head:O,images:I,allImages:J,embeds:A,allEmbeds:B,plugins:A,allPlugins:B,links:E,allLinks:S,forms:D,allForms:R,scripts:K,allScripts:p,applets:o,allApplets:e,anchors:P,allAnchors:x,namedItem:W,collection:m}}())};