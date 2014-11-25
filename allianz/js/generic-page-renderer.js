window.Modernizr=function(az,ay,ax){function U(b){ap.cssText=b
}function T(d,c){return U(al.join(d+";")+(c||""))
}function S(d,c){return typeof d===c
}function R(d,c){return !!~(""+d).indexOf(c)
}function Q(f,c){for(var h in f){var g=f[h];
if(!R(g,"-")&&ap[g]!==ax){return c=="pfx"?g:!0
}}return !1
}function P(g,c,j){for(var i in g){var h=c[g[i]];
if(h!==ax){return j===!1?g[i]:S(h,"function")?h.bind(j||c):h
}}return !1
}function O(g,f,j){var i=g.charAt(0).toUpperCase()+g.slice(1),h=(g+" "+aj.join(i+" ")+i).split(" ");
return S(f,"string")||S(f,"undefined")?Q(h,f):(h=(g+" "+ai.join(i+" ")+i).split(" "),P(h,f,j))
}function N(){av.input=function(f){for(var b=0,a=f.length;
b<a;
b++){ae[f[b]]=f[b] in ao
}return ae.list&&(ae.list=!!ay.createElement("datalist")&&!!az.HTMLDataListElement),ae
}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),av.inputtypes=function(b){for(var l=0,k,j,g,c=b.length;
l<c;
l++){ao.setAttribute("type",j=b[l]),k=ao.type!=="text",k&&(ao.value=an,ao.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(j)&&ao.style.WebkitAppearance!==ax?(at.appendChild(ao),g=ay.defaultView,k=g.getComputedStyle&&g.getComputedStyle(ao,null).WebkitAppearance!=="textfield"&&ao.offsetHeight!==0,at.removeChild(ao)):/^(search|tel)$/.test(j)||(/^(url|email)$/.test(j)?k=ao.checkValidity&&ao.checkValidity()===!1:k=ao.value!=an)),af[b[l]]=!!k
}return af
}("search tel url email datetime date month week time datetime-local number range color".split(" "))
}var aw="2.6.2",av={},au=!0,at=ay.documentElement,ar="modernizr",aq=ay.createElement(ar),ap=aq.style,ao=ay.createElement("input"),an=":)",am={}.toString,al=" -webkit- -moz- -o- -ms- ".split(" "),ak="Webkit Moz O ms",aj=ak.split(" "),ai=ak.toLowerCase().split(" "),ah={svg:"http://www.w3.org/2000/svg"},ag={},af={},ae={},ad=[],ac=ad.slice,ab,aa=function(v,u,t,s){var r,q,p,o,h=ay.createElement("div"),g=ay.body,b=g||ay.createElement("body");
if(parseInt(t,10)){while(t--){p=ay.createElement("div"),p.id=s?s[t]:ar+(t+1),h.appendChild(p)
}}return r=["&#173;",'<style id="s',ar,'">',v,"</style>"].join(""),h.id=ar,(g?h:b).innerHTML+=r,b.appendChild(h),g||(b.style.background="",b.style.overflow="hidden",o=at.style.overflow,at.style.overflow="hidden",at.appendChild(b)),q=u(h,v),g?h.parentNode.removeChild(h):(b.parentNode.removeChild(b),at.style.overflow=o),!!q
},Z=function(a){var f=az.matchMedia||az.msMatchMedia;
if(f){return f(a).matches
}var e;
return aa("@media "+a+" { #"+ar+" { position: absolute; } }",function(c){e=(az.getComputedStyle?getComputedStyle(c,null):c.currentStyle)["position"]=="absolute"
}),e
},Y=function(){function c(h,g){g=g||ay.createElement(b[h]||"div"),h="on"+h;
var a=h in g;
return a||(g.setAttribute||(g=ay.createElement("div")),g.setAttribute&&g.removeAttribute&&(g.setAttribute(h,""),a=S(g[h],"function"),S(g[h],"undefined")||(g[h]=ax),g.removeAttribute(h))),g=null,a
}var b={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};
return c
}(),X={}.hasOwnProperty,V;
!S(X,"undefined")&&!S(X.call,"undefined")?V=function(d,c){return X.call(d,c)
}:V=function(d,c){return c in d&&S(d.constructor.prototype[c],"undefined")
},Function.prototype.bind||(Function.prototype.bind=function(a){var h=this;
if(typeof h!="function"){throw new TypeError
}var g=ac.call(arguments,1),f=function(){if(this instanceof f){var b=function(){};
b.prototype=h.prototype;
var d=new b,c=h.apply(d,g.concat(ac.call(arguments)));
return Object(c)===c?c:d
}return h.apply(a,g.concat(ac.call(arguments)))
};
return f
}),ag.flexbox=function(){return O("flexWrap")
},ag.canvas=function(){var b=ay.createElement("canvas");
return !!b.getContext&&!!b.getContext("2d")
},ag.canvastext=function(){return !!av.canvas&&!!S(ay.createElement("canvas").getContext("2d").fillText,"function")
},ag.webgl=function(){return !!az.WebGLRenderingContext
},ag.touch=function(){var a;
return"ontouchstart" in az||az.DocumentTouch&&ay instanceof DocumentTouch?a=!0:aa(["@media (",al.join("touch-enabled),("),ar,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=b.offsetTop===9
}),a
},ag.geolocation=function(){return"geolocation" in navigator
},ag.postmessage=function(){return !!az.postMessage
},ag.websqldatabase=function(){return !!az.openDatabase
},ag.indexedDB=function(){return !!O("indexedDB",az)
},ag.hashchange=function(){return Y("hashchange",az)&&(ay.documentMode===ax||ay.documentMode>7)
},ag.history=function(){return !!az.history&&!!history.pushState
},ag.draganddrop=function(){var b=ay.createElement("div");
return"draggable" in b||"ondragstart" in b&&"ondrop" in b
},ag.websockets=function(){return"WebSocket" in az||"MozWebSocket" in az
},ag.rgba=function(){return U("background-color:rgba(150,255,150,.5)"),R(ap.backgroundColor,"rgba")
},ag.hsla=function(){return U("background-color:hsla(120,40%,100%,.5)"),R(ap.backgroundColor,"rgba")||R(ap.backgroundColor,"hsla")
},ag.multiplebgs=function(){return U("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(ap.background)
},ag.backgroundsize=function(){return O("backgroundSize")
},ag.borderimage=function(){return O("borderImage")
},ag.borderradius=function(){return O("borderRadius")
},ag.boxshadow=function(){return O("boxShadow")
},ag.textshadow=function(){return ay.createElement("div").style.textShadow===""
},ag.opacity=function(){return T("opacity:.55"),/^0.55$/.test(ap.opacity)
},ag.cssanimations=function(){return O("animationName")
},ag.csscolumns=function(){return O("columnCount")
},ag.cssgradients=function(){var e="background-image:",d="gradient(linear,left top,right bottom,from(#9f9),to(white));",f="linear-gradient(left top,#9f9, white);";
return U((e+"-webkit- ".split(" ").join(d+e)+al.join(f+e)).slice(0,-e.length)),R(ap.backgroundImage,"gradient")
},ag.cssreflections=function(){return O("boxReflect")
},ag.csstransforms=function(){return !!O("transform")
},ag.csstransforms3d=function(){var b=!!O("perspective");
return b&&"webkitPerspective" in at.style&&aa("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(a,d){b=a.offsetLeft===9&&a.offsetHeight===3
}),b
},ag.csstransitions=function(){return O("transition")
},ag.fontface=function(){var b;
return aa('@font-face {font-family:"font";src:url("https://")}',function(k,j){var i=ay.getElementById("smodernizr"),h=i.sheet||i.styleSheet,a=h?h.cssRules&&h.cssRules[0]?h.cssRules[0].cssText:h.cssText||"":"";
b=/src/i.test(a)&&a.indexOf(j.split(" ")[0])===0
}),b
},ag.generatedcontent=function(){var b;
return aa(["#",ar,"{font:0/0 a}#",ar,':after{content:"',an,'";visibility:hidden;font:3px/1 a}'].join(""),function(a){b=a.offsetHeight>=3
}),b
},ag.video=function(){var b=ay.createElement("video"),f=!1;
try{if(f=!!b.canPlayType){f=new Boolean(f),f.ogg=b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),f.h264=b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),f.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")
}}catch(e){}return f
},ag.audio=function(){var b=ay.createElement("audio"),f=!1;
try{if(f=!!b.canPlayType){f=new Boolean(f),f.ogg=b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),f.mp3=b.canPlayType("audio/mpeg;").replace(/^no$/,""),f.wav=b.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),f.m4a=(b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")).replace(/^no$/,"")
}}catch(e){}return f
},ag.localstorage=function(){try{return localStorage.setItem(ar,ar),localStorage.removeItem(ar),!0
}catch(b){return !1
}},ag.sessionstorage=function(){try{return sessionStorage.setItem(ar,ar),sessionStorage.removeItem(ar),!0
}catch(b){return !1
}},ag.webworkers=function(){return !!az.Worker
},ag.applicationcache=function(){return !!az.applicationCache
},ag.svg=function(){return !!ay.createElementNS&&!!ay.createElementNS(ah.svg,"svg").createSVGRect
},ag.inlinesvg=function(){var b=ay.createElement("div");
return b.innerHTML="<svg/>",(b.firstChild&&b.firstChild.namespaceURI)==ah.svg
},ag.smil=function(){return !!ay.createElementNS&&/SVGAnimate/.test(am.call(ay.createElementNS(ah.svg,"animate")))
},ag.svgclippaths=function(){return !!ay.createElementNS&&/SVGClipPath/.test(am.call(ay.createElementNS(ah.svg,"clipPath")))
};
for(var M in ag){V(ag,M)&&(ab=M.toLowerCase(),av[ab]=ag[M](),ad.push((av[ab]?"":"no-")+ab))
}return av.input||N(),av.addTest=function(e,c){if(typeof e=="object"){for(var f in e){V(e,f)&&av.addTest(f,e[f])
}}else{e=e.toLowerCase();
if(av[e]!==ax){return av
}c=typeof c=="function"?c():c,typeof au!="undefined"&&au&&(at.className+=" "+(c?"":"no-")+e),av[e]=c
}return av
},U(""),aq=ao=null,function(J,I){function z(f,e){var h=f.createElement("p"),g=f.getElementsByTagName("head")[0]||f.documentElement;
return h.innerHTML="x<style>"+e+"</style>",g.insertBefore(h.lastChild,g.firstChild)
}function y(){var b=s.elements;
return typeof b=="string"?b.split(" "):b
}function x(d){var c=B[d[D]];
return c||(c={},C++,d[D]=C,B[C]=c),c
}function w(b,h,e){h||(h=I);
if(A){return h.createElement(b)
}e||(e=x(h));
var d;
return e.cache[b]?d=e.cache[b].cloneNode():F.test(b)?d=(e.cache[b]=e.createElem(b)).cloneNode():d=e.createElem(b),d.canHaveChildren&&!G.test(b)?e.frag.appendChild(d):d
}function v(b,l){b||(b=I);
if(A){return b.createDocumentFragment()
}l=l||x(b);
var k=l.frag.cloneNode(),j=0,i=y(),h=i.length;
for(;
j<h;
j++){k.createElement(i[j])
}return k
}function u(d,c){c.cache||(c.cache={},c.createElem=d.createElement,c.createFrag=d.createDocumentFragment,c.frag=c.createFrag()),d.createElement=function(a){return s.shivMethods?w(a,d,c):c.createElem(a)
},d.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+y().join().replace(/\w+/g,function(b){return c.createElem(b),c.frag.createElement(b),'c("'+b+'")'
})+");return n}")(s,c.frag)
}function t(b){b||(b=I);
var d=x(b);
return s.shivCSS&&!E&&!d.hasCSS&&(d.hasCSS=!!z(b,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),A||u(b,d),b
}var H=J.html5||{},G=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,F=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,E,D="_html5shiv",C=0,B={},A;
(function(){try{var b=I.createElement("a");
b.innerHTML="<xyz></xyz>",E="hidden" in b,A=b.childNodes.length==1||function(){I.createElement("a");
var c=I.createDocumentFragment();
return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"
}()
}catch(d){E=!0,A=!0
}})();
var s={elements:H.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:H.shivCSS!==!1,supportsUnknownElements:A,shivMethods:H.shivMethods!==!1,type:"default",shivDocument:t,createElement:w,createDocumentFragment:v};
J.html5=s,t(I)
}(this,ay),av._version=aw,av._prefixes=al,av._domPrefixes=ai,av._cssomPrefixes=aj,av.mq=Z,av.hasEvent=Y,av.testProp=function(b){return Q([b])
},av.testAllProps=O,av.testStyles=aa,av.prefixed=function(e,d,f){return d?O(e,d,f):O(e,"pfx")
},at.className=at.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(au?" js "+ad.join(" "):""),av
}(this,this.document),function(ae,ad,ac){function ab(b){return"[object Function]"==P.call(b)
}function aa(b){return"string"==typeof b
}function Z(){}function Y(b){return !b||"loaded"==b||"complete"==b||"uninitialized"==b
}function X(){var b=O.shift();
M=1,b?b.t?R(function(){("c"==b.t?L.injectCss:L.injectJs)(b.s,0,b.a,b.x,b.e,1)
},0):(b(),X()):M=0
}function V(w,v,t,s,q,p,n){function m(a){if(!g&&Y(h.readyState)&&(x.r=g=1,!M&&X(),h.onload=h.onreadystatechange=null,a)){"img"!=w&&R(function(){I.removeChild(h)
},50);
for(var c in D[v]){D[v].hasOwnProperty(c)&&D[v][c].onload()
}}}var n=n||L.errorTimeout,h=ad.createElement(w),g=0,b=0,x={t:t,s:v,e:q,a:p,x:n};
1===D[v]&&(b=1,D[v]=[]),"object"==w?h.data=v:(h.src=v,h.type=w),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){m.call(this,b)
},O.splice(s,0,x),"img"!=w&&(b||2===D[v]?(I.insertBefore(h,J?null:Q),R(m,n)):D[v].push(h))
}function U(g,e,j,i,h){return M=0,e=e||"j",aa(g)?V("c"==e?G:H,g,e,this.i++,j,i,h):(O.splice(this.i++,0,g),1==O.length&&X()),this
}function T(){var b=L;
return b.loader={load:U,i:0},b
}var S=ad.documentElement,R=ae.setTimeout,Q=ad.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance" in S.style,J=K&&!!ad.createRange().compareNode,I=J?S:Q.parentNode,S=ae.opera&&"[object Opera]"==P.call(ae.opera),S=!!ad.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(b){return"[object Array]"==P.call(b)
},E=[],D={},C={timeout:function(d,c){return c.length&&(d.timeout=c[0]),d
}},N,L;
L=function(e){function c(i){var i=i.split("!"),h=E.length,q=i.pop(),p=i.length,q={url:q,origUrl:q,prefixes:i},o,l,j;
for(l=0;
l<p;
l++){j=i[l].split("="),(o=C[j.shift()])&&(q=o(q,j))
}for(l=0;
l<h;
l++){q=E[l](q)
}return q
}function n(b,s,r,q,p){var o=c(b),l=o.autoCallback;
o.url.split(".").pop().split("?").shift(),o.bypass||(s&&(s=ab(s)?s:s[b]||s[q]||s[b.split("/").pop().split("?")[0]]),o.instead?o.instead(b,s,r,q,p):(D[o.url]?o.noexec=!0:D[o.url]=1,r.load(o.url,o.forceCSS||!o.forceJS&&"css"==o.url.split(".").pop().split("?").shift()?"c":ac,o.noexec,o.attrs,o.timeout),(ab(s)||ab(l))&&r.load(function(){T(),s&&s(o.origUrl,p,q),l&&l(o.origUrl,p,q),D[o.url]=2
})))
}function m(w,v){function u(b,h){if(b){if(aa(b)){h||(r=function(){var i=[].slice.call(arguments);
q.apply(this,i),p()
}),n(b,r,v,0,t)
}else{if(Object(b)===b){for(g in o=function(){var a=0,i;
for(i in b){b.hasOwnProperty(i)&&a++
}return a
}(),b){b.hasOwnProperty(g)&&(!h&&!--o&&(ab(r)?r=function(){var i=[].slice.call(arguments);
q.apply(this,i),p()
}:r[g]=function(i){return function(){var a=[].slice.call(arguments);
i&&i.apply(this,a),p()
}
}(q[g])),n(b[g],r,v,g,t))
}}}}else{!h&&p()
}}var t=!!w.test,s=w.load||w.both,r=w.callback||Z,q=r,p=w.complete||Z,o,g;
u(t?w.yep:w.nope,!!s),s&&u(s)
}var k,f,d=this.yepnope.loader;
if(aa(e)){n(e,0,d,0)
}else{if(F(e)){for(k=0;
k<e.length;
k++){f=e[k],aa(f)?n(f,0,d,0):F(f)?L(f):Object(f)===f&&m(f,d)
}}else{Object(e)===e&&m(e,d)
}}},L.addPrefix=function(d,c){C[d]=c
},L.addFilter=function(b){E.push(b)
},L.errorTimeout=10000,null==ad.readyState&&ad.addEventListener&&(ad.readyState="loading",ad.addEventListener("DOMContentLoaded",N=function(){ad.removeEventListener("DOMContentLoaded",N,0),ad.readyState="complete"
},0)),ae.yepnope=T(),ae.yepnope.executeStack=X,ae.yepnope.injectJs=function(r,q,p,n,m,h){var g=ad.createElement("script"),f,b,n=n||L.errorTimeout;
g.src=r;
for(b in p){g.setAttribute(b,p[b])
}q=h?X:q||Z,g.onreadystatechange=g.onload=function(){!f&&Y(g.readyState)&&(f=1,q(),g.onload=g.onreadystatechange=null)
},R(function(){f||(f=1,q(1))
},n),m?g.onload():Q.parentNode.insertBefore(g,Q)
},ae.yepnope.injectCss=function(b,n,m,l,k,h){var l=ad.createElement("link"),f,n=h?X:n||Z;
l.href=b,l.rel="stylesheet",l.type="text/css";
for(f in m){l.setAttribute(f,m[f])
}k||(Q.parentNode.insertBefore(l,Q),R(n,0))
}
}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))
};
window.enquire=function(b){function a(k,j){var o,l=0,m=k.length;
for(l;
m>l&&(o=j(k[l],l),o!==!1);
l++){}}function h(e){return"[object Array]"===Object.prototype.toString.apply(e)
}function c(e){return"function"==typeof e
}function f(e){this.options=e,!e.deferSetup&&this.setup()
}function g(e,k){this.query=e,this.isUnconditional=k,this.handlers=[],this.mql=b(e);
var j=this;
this.listener=function(i){j.mql=i,j.assess()
},this.mql.addListener(this.listener)
}function d(){if(!b){throw Error("matchMedia not present, legacy browsers require a polyfill")
}this.queries={},this.browserIsIncapable=!b("only all").matches
}return f.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0
},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()
},off:function(){this.options.unmatch&&this.options.unmatch()
},destroy:function(){this.options.destroy?this.options.destroy():this.off()
},equals:function(e){return this.options===e||this.options.match===e
}},g.prototype={addHandler:function(j){var e=new f(j);
this.handlers.push(e),this.mql.matches&&e.on()
},removeHandler:function(e){var i=this.handlers;
a(i,function(j,k){return j.equals(e)?(j.destroy(),!i.splice(k,1)):void 0
})
},clear:function(){a(this.handlers,function(e){e.destroy()
}),this.mql.removeListener(this.listener),this.handlers.length=0
},assess:function(){var e=this.mql.matches||this.isUnconditional?"on":"off";
a(this.handlers,function(j){j[e]()
})
}},d.prototype={register:function(j,m,l){var k=this.queries,i=l&&this.browserIsIncapable;
return k[j]||(k[j]=new g(j,i)),c(m)&&(m={match:m}),h(m)||(m=[m]),a(m,function(e){k[j].addHandler(e)
}),this
},unregister:function(j,e){var k=this.queries[j];
return k&&(e?k.removeHandler(e):(k.clear(),delete this.queries[j])),this
}},new d
}(window.matchMedia);
$(document).ready(function(){$("h3.relatedExpander a").on("click",function(b){b.preventDefault();
var c=$(this).parent().width();
var a=$(this).parent().parent(".related-area");
$(this).parent().toggleClass("open");
a.find(".expander").slideToggle(300,function(){})
})
});
function goToConfigurationPage(){window.location=window.location.href.split("home")[0]+"application/configuration/global.html"
}
/*!
	jQuery ColorBox v1.4.4 - 2013-03-10 
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(bb,aS,a6){function aY(a,c,d){var b=aS.createElement(a);
return c&&(b.id=aa+c),d&&(b.style.cssText=d),bb(b)
}function a0(){return a6.innerHeight?a6.innerHeight:bb(a6).height()
}function aU(c){var b=a3.length,a=(an+c)%b;
return 0>a?b+a:a
}function a7(b,a){return Math.round((/%/.test(b)?("x"===a?aA.width():a0())/100:1)*parseInt(b,10))
}function a2(b,a){return b.photo||b.photoRegex.test(a)
}function aT(b,a){return b.retinaUrl&&a6.devicePixelRatio>1?a.replace(b.photoRegex,b.retinaSuffix):a
}function bf(a){"contains" in a8[0]&&!a8[0].contains(a.target)&&(a.stopPropagation(),a8.focus())
}function bc(){var b,a=bb.data(aE,ab);
null==a?(bg=bb.extend({},ae),console&&console.log&&console.log("Error: cboxElement missing settings object")):bg=bb.extend({},a);
for(b in bg){bb.isFunction(bg[b])&&"on"!==b.slice(0,2)&&(bg[b]=bg[b].call(aE))
}bg.rel=bg.rel||aE.rel||bb(aE).data("rel")||"nofollow",bg.href=bg.href||bb(aE).attr("href"),bg.title=bg.title||aE.title,"string"==typeof bg.href&&(bg.href=bb.trim(bg.href))
}function bd(a,b){bb(aS).trigger(a),ak.trigger(a),bb.isFunction(b)&&b.call(aE)
}function aR(){var f,b,a,g,j,d=aa+"Slideshow_",c="click."+aa;
bg.slideshow&&a3[1]?(b=function(){clearTimeout(f)
},a=function(){(bg.loop||a3[an+1])&&(f=setTimeout(al.next,bg.slideshowSpeed))
},g=function(){ai.html(bg.slideshowStop).unbind(c).one(c,j),ak.bind(aI,a).bind(aG,b).bind(a4,j),a8.removeClass(d+"off").addClass(d+"on")
},j=function(){b(),ak.unbind(aI,a).unbind(aG,b).unbind(a4,j),ai.html(bg.slideshowStart).unbind(c).one(c,function(){al.next(),g()
}),a8.removeClass(d+"on").addClass(d+"off")
},bg.slideshowAuto?g():j()):a8.removeClass(d+"off "+d+"on")
}function ba(a){aL||(aE=a,bc(),a3=bb(aE),an=0,"nofollow"!==bg.rel&&(a3=bb("."+aW).filter(function(){var c,b=bb.data(this,ab);
return b&&(c=bb(this).data("rel")||b.rel||this.rel),c===bg.rel
}),an=a3.index(aE),-1===an&&(a3=a3.add(aE),an=a3.length-1)),aP.css({opacity:parseFloat(bg.opacity),cursor:bg.overlayClose?"pointer":"auto",visibility:"visible"}).show(),aV||(aV=af=!0,a8.css({visibility:"hidden",display:"block"}),aw=aY(aF,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(aO),aM=aN.height()+ag.height()+aO.outerHeight(!0)-aO.height(),aB=be.width()+aC.width()+aO.outerWidth(!0)-aO.width(),aD=aw.outerHeight(!0),ao=aw.outerWidth(!0),bg.w=a7(bg.initialWidth,"x"),bg.h=a7(bg.initialHeight,"y"),al.position(),ax&&aA.bind("resize."+ah+" scroll."+ah,function(){aP.css({width:aA.width(),height:a0(),top:aA.scrollTop(),left:aA.scrollLeft()})
}).trigger("resize."+ah),aR(),bd(a9,bg.onOpen),ar.add(ad).hide(),am.html(bg.close).show(),a8.focus(),aS.addEventListener&&(aS.addEventListener("focus",bf,!0),ak.one(aJ,function(){aS.removeEventListener("focus",bf,!0)
})),bg.returnFocus&&ak.one(aJ,function(){bb(aE).focus()
})),al.load(!0))
}function aX(){!a8&&aS.body&&(au=!1,aA=bb(a6),a8=aY(aF).attr({id:ab,"class":aH?aa+(ax?"IE6":"IE"):"",role:"dialog",tabindex:"-1"}).hide(),aP=aY(aF,"Overlay",ax?"position:absolute":"").hide(),aq=aY(aF,"LoadingOverlay").add(aY(aF,"LoadingGraphic")),aQ=aY(aF,"Wrapper"),aO=aY(aF,"Content").append(ad=aY(aF,"Title"),ap=aY(aF,"Current"),aj=aY("button","Previous"),az=aY("button","Next"),ai=aY("button","Slideshow"),aq,am=aY("button","Close")),aQ.append(aY(aF).append(aY(aF,"TopLeft"),aN=aY(aF,"TopCenter"),aY(aF,"TopRight")),aY(aF,!1,"clear:left").append(be=aY(aF,"MiddleLeft"),aO,aC=aY(aF,"MiddleRight")),aY(aF,!1,"clear:left").append(aY(aF,"BottomLeft"),ag=aY(aF,"BottomCenter"),aY(aF,"BottomRight"))).find("div div").css({"float":"left"}),av=aY(aF,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),ar=az.add(aj).add(ap).add(ai),bb(aS.body).append(aP,a8.append(aQ,av)))
}function a1(){function a(b){b.which>1||b.shiftKey||b.altKey||b.metaKey||(b.preventDefault(),ba(this))
}return a8?(au||(au=!0,az.click(function(){al.next()
}),aj.click(function(){al.prev()
}),am.click(function(){al.close()
}),aP.click(function(){bg.overlayClose&&al.close()
}),bb(aS).bind("keydown."+aa,function(c){var b=c.keyCode;
aV&&bg.escKey&&27===b&&(c.preventDefault(),al.close()),aV&&bg.arrowKey&&a3[1]&&!c.altKey&&(37===b?(c.preventDefault(),aj.click()):39===b&&(c.preventDefault(),az.click()))
}),bb.isFunction(bb.fn.on)?bb(aS).on("click."+aa,"."+aW,a):bb("."+aW).live("click."+aa,a)),!0):!1
}var aP,a8,aQ,aO,aN,be,aC,ag,a3,aA,aw,av,aq,ad,ap,ai,az,aj,am,ar,bg,aM,aB,aD,ao,aE,an,a5,aV,af,aL,ay,al,ac,au,ae={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:0.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},ab="colorbox",aa="cbox",aW=aa+"Element",a9=aa+"_open",aG=aa+"_load",aI=aa+"_complete",a4=aa+"_cleanup",aJ=aa+"_closed",aZ=aa+"_purge",aH=!bb.support.leadingWhitespace,ax=aH&&!a6.XMLHttpRequest,ah=aa+"_IE6",ak=bb({}),aF="div",aK=0;
bb.colorbox||(bb(aX),al=bb.fn[ab]=bb[ab]=function(b,a){var c=this;
if(b=b||{},aX(),a1()){if(bb.isFunction(c)){c=bb("<a/>"),b.open=!0
}else{if(!c[0]){return c
}}a&&(b.onComplete=a),c.each(function(){bb.data(this,ab,bb.extend({},bb.data(this,ab)||ae,b))
}).addClass(aW),(bb.isFunction(b.open)&&b.open.call(c)||b.open)&&ba(c[0])
}return c
},al.position=function(h,m){function g(a){aN[0].style.width=ag[0].style.width=aO[0].style.width=parseInt(a.style.width,10)-aB+"px",aO[0].style.height=be[0].style.height=aC[0].style.height=parseInt(a.style.height,10)-aM+"px"
}var c,b,f,n=0,k=0,j=a8.offset();
aA.unbind("resize."+aa),a8.css({top:-90000,left:-90000}),b=aA.scrollTop(),f=aA.scrollLeft(),bg.fixed&&!ax?(j.top-=b,j.left-=f,a8.css({position:"fixed"})):(n=b,k=f,a8.css({position:"absolute"})),k+=bg.right!==!1?Math.max(aA.width()-bg.w-ao-aB-a7(bg.right,"x"),0):bg.left!==!1?a7(bg.left,"x"):Math.round(Math.max(aA.width()-bg.w-ao-aB,0)/2),n+=bg.bottom!==!1?Math.max(a0()-bg.h-aD-aM-a7(bg.bottom,"y"),0):bg.top!==!1?a7(bg.top,"y"):Math.round(Math.max(a0()-bg.h-aD-aM,0)/2),a8.css({top:j.top,left:j.left,visibility:"visible"}),h=a8.width()===bg.w+ao&&a8.height()===bg.h+aD?0:h||0,aQ[0].style.width=aQ[0].style.height="9999px",c={width:bg.w+ao+aB,height:bg.h+aD+aM,top:n,left:k},0===h&&a8.css(c),a8.dequeue().animate(c,{duration:h,complete:function(){g(this),af=!1,aQ[0].style.width=bg.w+ao+aB+"px",aQ[0].style.height=bg.h+aD+aM+"px",bg.reposition&&setTimeout(function(){aA.bind("resize."+aa,al.position)
},1),m&&m()
},step:function(){g(this)
}})
},al.resize=function(a){aV&&(a=a||{},a.width&&(bg.w=a7(a.width,"x")-ao-aB),a.innerWidth&&(bg.w=a7(a.innerWidth,"x")),aw.css({width:bg.w}),a.height&&(bg.h=a7(a.height,"y")-aD-aM),a.innerHeight&&(bg.h=a7(a.innerHeight,"y")),a.innerHeight||a.height||(aw.css({height:"auto"}),bg.h=aw.height()),aw.css({height:bg.h}),al.position("none"===bg.transition?0:bg.speed))
},al.prep=function(d){function c(){return bg.w=bg.w||aw.width(),bg.w=bg.mw&&bg.mw<bg.w?bg.mw:bg.w,bg.w
}function f(){return bg.h=bg.h||aw.height(),bg.h=bg.mh&&bg.mh<bg.h?bg.mh:bg.h,bg.h
}if(aV){var e,b="none"===bg.transition?0:bg.speed;
aw.empty().remove(),aw=aY(aF,"LoadedContent").append(d),aw.hide().appendTo(av.show()).css({width:c(),overflow:bg.scrolling?"auto":"hidden"}).css({height:f()}).prependTo(aO),av.hide(),bb(a5).css({"float":"none"}),e=function(){function j(){aH&&a8[0].style.removeAttribute("filter")
}var g,m,k=a3.length,l="frameBorder",a="allowTransparency";
aV&&(m=function(){clearTimeout(ay),aq.hide(),bd(aI,bg.onComplete)
},aH&&a5&&aw.fadeIn(100),ad.html(bg.title).add(aw).show(),k>1?("string"==typeof bg.current&&ap.html(bg.current.replace("{current}",an+1).replace("{total}",k)).show(),az[bg.loop||k-1>an?"show":"hide"]().html(bg.next),aj[bg.loop||an?"show":"hide"]().html(bg.previous),bg.slideshow&&ai.show(),bg.preloading&&bb.each([aU(-1),aU(1)],function(){var p,h,q=a3[this],r=bb.data(q,ab);
r&&r.href?(p=r.href,bb.isFunction(p)&&(p=p.call(q))):p=bb(q).attr("href"),p&&a2(r,p)&&(p=aT(r,p),h=new Image,h.src=p)
})):ar.hide(),bg.iframe?(g=aY("iframe")[0],l in g&&(g[l]=0),a in g&&(g[a]="true"),bg.scrolling||(g.scrolling="no"),bb(g).attr({src:bg.href,name:(new Date).getTime(),"class":aa+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",m).appendTo(aw),ak.one(aZ,function(){g.src="//about:blank"
}),bg.fastIframe&&bb(g).trigger("load")):m(),"fade"===bg.transition?a8.fadeTo(b,1,j):j())
},"fade"===bg.transition?a8.fadeTo(b,0,function(){al.position(0,e)
}):al.position(b,e)
}},al.load=function(d){var h,e,b,c=al.prep,g=++aK;
af=!0,a5=!1,aE=a3[an],d||bc(),ac&&a8.add(aP).removeClass(ac),bg.className&&a8.add(aP).addClass(bg.className),ac=bg.className,bd(aZ),bd(aG,bg.onLoad),bg.h=bg.height?a7(bg.height,"y")-aD-aM:bg.innerHeight&&a7(bg.innerHeight,"y"),bg.w=bg.width?a7(bg.width,"x")-ao-aB:bg.innerWidth&&a7(bg.innerWidth,"x"),bg.mw=bg.w,bg.mh=bg.h,bg.maxWidth&&(bg.mw=a7(bg.maxWidth,"x")-ao-aB,bg.mw=bg.w&&bg.w<bg.mw?bg.w:bg.mw),bg.maxHeight&&(bg.mh=a7(bg.maxHeight,"y")-aD-aM,bg.mh=bg.h&&bg.h<bg.mh?bg.h:bg.mh),h=bg.href,ay=setTimeout(function(){aq.show()
},100),bg.inline?(b=aY(aF).hide().insertBefore(bb(h)[0]),ak.one(aZ,function(){b.replaceWith(aw.children())
}),c(bb(h))):bg.iframe?c(" "):bg.html?c(bg.html):a2(bg,h)?(h=aT(bg,h),bb(a5=new Image).addClass(aa+"Photo").bind("error",function(){bg.title=!1,c(aY(aF,"Error").html(bg.imgError))
}).one("load",function(){var a;
g===aK&&(bg.retinaImage&&a6.devicePixelRatio>1&&(a5.height=a5.height/a6.devicePixelRatio,a5.width=a5.width/a6.devicePixelRatio),bg.scalePhotos&&(e=function(){a5.height-=a5.height*a,a5.width-=a5.width*a
},bg.mw&&a5.width>bg.mw&&(a=(a5.width-bg.mw)/a5.width,e()),bg.mh&&a5.height>bg.mh&&(a=(a5.height-bg.mh)/a5.height,e())),bg.h&&(a5.style.marginTop=Math.max(bg.mh-a5.height,0)/2+"px"),a3[1]&&(bg.loop||a3[an+1])&&(a5.style.cursor="pointer",a5.onclick=function(){al.next()
}),aH&&(a5.style.msInterpolationMode="bicubic"),setTimeout(function(){c(a5)
},1))
}),setTimeout(function(){a5.src=h
},1)):h&&av.load(h,bg.data,function(f,a){g===aK&&c("error"===a?aY(aF,"Error").html(bg.xhrError):bb(this).contents())
})
},al.next=function(){!af&&a3[1]&&(bg.loop||a3[an+1])&&(an=aU(1),al.load())
},al.prev=function(){!af&&a3[1]&&(bg.loop||an)&&(an=aU(-1),al.load())
},al.close=function(){aV&&!aL&&(aL=!0,aV=!1,bd(a4,bg.onCleanup),aA.unbind("."+aa+" ."+ah),aP.fadeTo(200,0),a8.stop().fadeTo(300,0,function(){a8.add(aP).css({opacity:1,cursor:"auto"}).hide(),bd(aZ),aw.empty().remove(),setTimeout(function(){aL=!1,bd(aJ,bg.onClosed)
},1)
}))
},al.remove=function(){bb([]).add(a8).add(aP).remove(),a8=null,bb("."+aW).removeData(ab).removeClass(aW),bb(aS).unbind("click."+aa)
},al.element=function(){return bb(aE)
},al.settings=ae)
})(jQuery,document,window);
/*! Video.js v4.3.0 Copyright 2013 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */
(function(){var b=void 0,f=!0,h=null,l=!1;
function m(){return function(){}
}function p(a){return function(){return this[a]
}
}function s(a){return function(){return a
}
}var t;
document.createElement("video");
document.createElement("audio");
document.createElement("track");
function u(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));
if(u.xa[a]){return u.xa[a]
}a=u.w(a)
}if(!a||!a.nodeName){throw new TypeError("The element or ID supplied is not valid. (videojs)")
}return a.player||new u.s(a,c,d)
}var v=u;
window.Td=window.Ud=u;
u.Tb="4.3";
u.Fc="https:"==document.location.protocol?"https://":"http://";
u.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{}},notSupportedMessage:'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'};
"GENERATED_CDN_VSN"!==u.Tb&&(v.options.flash.swf=u.Fc+"vjs.zencdn.net/"+u.Tb+"/video-js.swf");
u.xa={};
u.la=u.CoreObject=m();
u.la.extend=function(a){var c,d;
a=a||{};
c=a.init||a.i||this.prototype.init||this.prototype.i||m();
d=function(){c.apply(this,arguments)
};
d.prototype=u.k.create(this.prototype);
d.prototype.constructor=d;
d.extend=u.la.extend;
d.create=u.la.create;
for(var e in a){a.hasOwnProperty(e)&&(d.prototype[e]=a[e])
}return d
};
u.la.create=function(){var a=u.k.create(this.prototype);
this.apply(a,arguments);
return a
};
u.d=function(a,c,d){var e=u.getData(a);
e.z||(e.z={});
e.z[c]||(e.z[c]=[]);
d.t||(d.t=u.t++);
e.z[c].push(d);
e.W||(e.disabled=l,e.W=function(c){if(!e.disabled){c=u.kc(c);
var d=e.z[c.type];
if(d){for(var d=d.slice(0),k=0,q=d.length;
k<q&&!c.pc();
k++){d[k].call(a,c)
}}}});
1==e.z[c].length&&(document.addEventListener?a.addEventListener(c,e.W,l):document.attachEvent&&a.attachEvent("on"+c,e.W))
};
u.o=function(a,c,d){if(u.oc(a)){var e=u.getData(a);
if(e.z){if(c){var g=e.z[c];
if(g){if(d){if(d.t){for(e=0;
e<g.length;
e++){g[e].t===d.t&&g.splice(e--,1)
}}}else{e.z[c]=[]
}u.gc(a,c)
}}else{for(g in e.z){c=g,e.z[c]=[],u.gc(a,c)
}}}}};
u.gc=function(a,c){var d=u.getData(a);
0===d.z[c].length&&(delete d.z[c],document.removeEventListener?a.removeEventListener(c,d.W,l):document.detachEvent&&a.detachEvent("on"+c,d.W));
u.Bb(d.z)&&(delete d.z,delete d.W,delete d.disabled);
u.Bb(d)&&u.vc(a)
};
u.kc=function(a){function c(){return f
}function d(){return l
}if(!a||!a.Cb){var e=a||window.event;
a={};
for(var g in e){"layerX"!==g&&"layerY"!==g&&(a[g]=e[g])
}a.target||(a.target=a.srcElement||document);
a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;
a.preventDefault=function(){e.preventDefault&&e.preventDefault();
a.returnValue=l;
a.Ab=c
};
a.Ab=d;
a.stopPropagation=function(){e.stopPropagation&&e.stopPropagation();
a.cancelBubble=f;
a.Cb=c
};
a.Cb=d;
a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();
a.pc=c;
a.stopPropagation()
};
a.pc=d;
if(a.clientX!=h){g=document.documentElement;
var j=document.body;
a.pageX=a.clientX+(g&&g.scrollLeft||j&&j.scrollLeft||0)-(g&&g.clientLeft||j&&j.clientLeft||0);
a.pageY=a.clientY+(g&&g.scrollTop||j&&j.scrollTop||0)-(g&&g.clientTop||j&&j.clientTop||0)
}a.which=a.charCode||a.keyCode;
a.button!=h&&(a.button=a.button&1?0:a.button&4?1:a.button&2?2:0)
}return a
};
u.j=function(a,c){var d=u.oc(a)?u.getData(a):{},e=a.parentNode||a.ownerDocument;
"string"===typeof c&&(c={type:c,target:a});
c=u.kc(c);
d.W&&d.W.call(a,c);
if(e&&!c.Cb()&&c.bubbles!==l){u.j(e,c)
}else{if(!e&&!c.Ab()&&(d=u.getData(c.target),c.target[c.type])){d.disabled=f;
if("function"===typeof c.target[c.type]){c.target[c.type]()
}d.disabled=l
}}return !c.Ab()
};
u.U=function(a,c,d){function e(){u.o(a,c,e);
d.apply(this,arguments)
}e.t=d.t=d.t||u.t++;
u.d(a,c,e)
};
var w=Object.prototype.hasOwnProperty;
u.e=function(a,c){var d,e;
d=document.createElement(a||"div");
for(e in c){w.call(c,e)&&(-1!==e.indexOf("aria-")||"role"==e?d.setAttribute(e,c[e]):d[e]=c[e])
}return d
};
u.$=function(a){return a.charAt(0).toUpperCase()+a.slice(1)
};
u.k={};
u.k.create=Object.create||function(a){function c(){}c.prototype=a;
return new c
};
u.k.ua=function(a,c,d){for(var e in a){w.call(a,e)&&c.call(d||this,e,a[e])
}};
u.k.B=function(a,c){if(!c){return a
}for(var d in c){w.call(c,d)&&(a[d]=c[d])
}return a
};
u.k.ic=function(a,c){var d,e,g;
a=u.k.copy(a);
for(d in c){w.call(c,d)&&(e=a[d],g=c[d],a[d]=u.k.qc(e)&&u.k.qc(g)?u.k.ic(e,g):c[d])
}return a
};
u.k.copy=function(a){return u.k.B({},a)
};
u.k.qc=function(a){return !!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object
};
u.bind=function(a,c,d){function e(){return c.apply(a,arguments)
}c.t||(c.t=u.t++);
e.t=d?d+"_"+c.t:c.t;
return e
};
u.ra={};
u.t=1;
u.expando="vdata"+(new Date).getTime();
u.getData=function(a){var c=a[u.expando];
c||(c=a[u.expando]=u.t++,u.ra[c]={});
return u.ra[c]
};
u.oc=function(a){a=a[u.expando];
return !(!a||u.Bb(u.ra[a]))
};
u.vc=function(a){var c=a[u.expando];
if(c){delete u.ra[c];
try{delete a[u.expando]
}catch(d){a.removeAttribute?a.removeAttribute(u.expando):a[u.expando]=h
}}};
u.Bb=function(a){for(var c in a){if(a[c]!==h){return l
}}return f
};
u.n=function(a,c){-1==(" "+a.className+" ").indexOf(" "+c+" ")&&(a.className=""===a.className?c:a.className+" "+c)
};
u.u=function(a,c){var d,e;
if(-1!=a.className.indexOf(c)){d=a.className.split(" ");
for(e=d.length-1;
0<=e;
e--){d[e]===c&&d.splice(e,1)
}a.className=d.join(" ")
}};
u.na=u.e("video");
u.F=navigator.userAgent;
u.Mc=/iPhone/i.test(u.F);
u.Lc=/iPad/i.test(u.F);
u.Nc=/iPod/i.test(u.F);
u.Kc=u.Mc||u.Lc||u.Nc;
var aa=u,x;
var y=u.F.match(/OS (\d+)_/i);
x=y&&y[1]?y[1]:b;
aa.Fd=x;
u.Ic=/Android/i.test(u.F);
var ba=u,z;
var A=u.F.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),B,C;
A?(B=A[1]&&parseFloat(A[1]),C=A[2]&&parseFloat(A[2]),z=B&&C?parseFloat(A[1]+"."+A[2]):B?B:h):z=h;
ba.Gc=z;
u.Oc=u.Ic&&/webkit/i.test(u.F)&&2.3>u.Gc;
u.Jc=/Firefox/i.test(u.F);
u.Gd=/Chrome/i.test(u.F);
u.ac=!!("ontouchstart" in window||window.Hc&&document instanceof window.Hc);
u.xb=function(a){var c,d,e,g;
c={};
if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;
for(var j=d.length-1;
0<=j;
j--){e=d[j].name;
g=d[j].value;
if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+",")){g=g!==h?f:l
}c[e]=g
}}return c
};
u.Kd=function(a,c){var d="";
document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");
return d
};
u.zb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)
};
u.Pb={};
u.w=function(a){0===a.indexOf("#")&&(a=a.slice(1));
return document.getElementById(a)
};
u.La=function(a,c){c=c||a;
var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),j=Math.floor(c/60%60),k=Math.floor(c/3600);
if(isNaN(a)||Infinity===a){g=e=d="-"
}g=0<g||0<k?g+":":"";
return g+(((g||10<=j)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)
};
u.Tc=function(){document.body.focus();
document.onselectstart=s(l)
};
u.Bd=function(){document.onselectstart=s(f)
};
u.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")
};
u.round=function(a,c){c||(c=0);
return Math.round(a*Math.pow(10,c))/Math.pow(10,c)
};
u.tb=function(a,c){return{length:1,start:function(){return a
},end:function(){return c
}}
};
u.get=function(a,c,d){var e,g;
"undefined"===typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")
}catch(d){}throw Error("This browser does not support XMLHttpRequest.")
});
g=new XMLHttpRequest;
try{g.open("GET",a)
}catch(j){d(j)
}e=0===a.indexOf("file:")||0===window.location.href.indexOf("file:")&&-1===a.indexOf("http");
g.onreadystatechange=function(){4===g.readyState&&(200===g.status||e&&0===g.status?c(g.responseText):d&&d())
};
try{g.send()
}catch(k){d&&d(k)
}};
u.td=function(a){try{var c=window.localStorage||l;
c&&(c.volume=a)
}catch(d){22==d.code||1014==d.code?u.log("LocalStorage Full (VideoJS)",d):18==d.code?u.log("LocalStorage not allowed (VideoJS)",d):u.log("LocalStorage Error (VideoJS)",d)
}};
u.mc=function(a){a.match(/^https?:\/\//)||(a=u.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);
return a
};
u.log=function(){u.log.history=u.log.history||[];
u.log.history.push(arguments);
window.console&&window.console.log(Array.prototype.slice.call(arguments))
};
u.ad=function(a){var c,d;
a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());
if(!c){return{left:0,top:0}
}a=document.documentElement;
d=document.body;
return{left:c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0),top:c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0)}
};
u.c=u.la.extend({i:function(a,c,d){this.b=a;
this.g=u.k.copy(this.g);
c=this.options(c);
this.Q=c.id||(c.el&&c.el.id?c.el.id:a.id()+"_component_"+u.t++);
this.gd=c.name||h;
this.a=c.el||this.e();
this.G=[];
this.qb={};
this.V={};
if((a=this.g)&&a.children){var e=this;
u.k.ua(a.children,function(a,c){c!==l&&!c.loadEvent&&(e[a]=e.Z(a,c))
})
}this.L(d)
}});
t=u.c.prototype;
t.D=function(){this.j("dispose");
if(this.G){for(var a=this.G.length-1;
0<=a;
a--){this.G[a].D&&this.G[a].D()
}}this.V=this.qb=this.G=h;
this.o();
this.a.parentNode&&this.a.parentNode.removeChild(this.a);
u.vc(this.a);
this.a=h
};
t.b=f;
t.K=p("b");
t.options=function(a){return a===b?this.g:this.g=u.k.ic(this.g,a)
};
t.e=function(a,c){return u.e(a,c)
};
t.w=p("a");
t.id=p("Q");
t.name=p("gd");
t.children=p("G");
t.Z=function(a,c){var d,e;
"string"===typeof a?(e=a,c=c||{},d=c.componentClass||u.$(e),c.name=e,d=new window.videojs[d](this.b||this,c)):d=a;
this.G.push(d);
"function"===typeof d.id&&(this.qb[d.id()]=d);
(e=e||d.name&&d.name())&&(this.V[e]=d);
"function"===typeof d.el&&d.el()&&(this.sa||this.a).appendChild(d.el());
return d
};
t.removeChild=function(a){"string"===typeof a&&(a=this.V[a]);
if(a&&this.G){for(var c=l,d=this.G.length-1;
0<=d;
d--){if(this.G[d]===a){c=f;
this.G.splice(d,1);
break
}}c&&(this.qb[a.id]=h,this.V[a.name]=h,(c=a.w())&&c.parentNode===(this.sa||this.a)&&(this.sa||this.a).removeChild(a.w()))
}};
t.T=s("");
t.d=function(a,c){u.d(this.a,a,u.bind(this,c));
return this
};
t.o=function(a,c){u.o(this.a,a,c);
return this
};
t.U=function(a,c){u.U(this.a,a,u.bind(this,c));
return this
};
t.j=function(a,c){u.j(this.a,a,c);
return this
};
t.L=function(a){a&&(this.aa?a.call(this):(this.Sa===b&&(this.Sa=[]),this.Sa.push(a)));
return this
};
t.Ua=function(){this.aa=f;
var a=this.Sa;
if(a&&0<a.length){for(var c=0,d=a.length;
c<d;
c++){a[c].call(this)
}this.Sa=[];
this.j("ready")
}};
t.n=function(a){u.n(this.a,a);
return this
};
t.u=function(a){u.u(this.a,a);
return this
};
t.show=function(){this.a.style.display="block";
return this
};
t.C=function(){this.a.style.display="none";
return this
};
function D(a){a.u("vjs-lock-showing")
}t.disable=function(){this.C();
this.show=m()
};
t.width=function(a,c){return E(this,"width",a,c)
};
t.height=function(a,c){return E(this,"height",a,c)
};
t.Xc=function(a,c){return this.width(a,f).height(c)
};
function E(a,c,d,e){if(d!==b){return a.a.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px",e||a.j("resize"),a
}if(!a.a){return 0
}d=a.a.style[c];
e=d.indexOf("px");
return -1!==e?parseInt(d.slice(0,e),10):parseInt(a.a["offset"+u.$(c)],10)
}u.q=u.c.extend({i:function(a,c){u.c.call(this,a,c);
var d=l;
this.d("touchstart",function(a){a.preventDefault();
d=f
});
this.d("touchmove",function(){d=l
});
var e=this;
this.d("touchend",function(a){d&&e.p(a);
a.preventDefault()
});
this.d("click",this.p);
this.d("focus",this.Oa);
this.d("blur",this.Na)
}});
t=u.q.prototype;
t.e=function(a,c){c=u.k.B({className:this.T(),innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+(this.qa||"Need Text")+"</span></div>",qd:"button","aria-live":"polite",tabIndex:0},c);
return u.c.prototype.e.call(this,a,c)
};
t.T=function(){return"vjs-control "+u.c.prototype.T.call(this)
};
t.p=m();
t.Oa=function(){u.d(document,"keyup",u.bind(this,this.ba))
};
t.ba=function(a){if(32==a.which||13==a.which){a.preventDefault(),this.p()
}};
t.Na=function(){u.o(document,"keyup",u.bind(this,this.ba))
};
u.O=u.c.extend({i:function(a,c){u.c.call(this,a,c);
this.Sc=this.V[this.g.barName];
this.handle=this.V[this.g.handleName];
a.d(this.tc,u.bind(this,this.update));
this.d("mousedown",this.Pa);
this.d("touchstart",this.Pa);
this.d("focus",this.Oa);
this.d("blur",this.Na);
this.d("click",this.p);
this.b.d("controlsvisible",u.bind(this,this.update));
a.L(u.bind(this,this.update));
this.P={}
}});
t=u.O.prototype;
t.e=function(a,c){c=c||{};
c.className+=" vjs-slider";
c=u.k.B({qd:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);
return u.c.prototype.e.call(this,a,c)
};
t.Pa=function(a){a.preventDefault();
u.Tc();
this.P.move=u.bind(this,this.Hb);
this.P.end=u.bind(this,this.Ib);
u.d(document,"mousemove",this.P.move);
u.d(document,"mouseup",this.P.end);
u.d(document,"touchmove",this.P.move);
u.d(document,"touchend",this.P.end);
this.Hb(a)
};
t.Ib=function(){u.Bd();
u.o(document,"mousemove",this.P.move,l);
u.o(document,"mouseup",this.P.end,l);
u.o(document,"touchmove",this.P.move,l);
u.o(document,"touchend",this.P.end,l);
this.update()
};
t.update=function(){if(this.a){var a,c=this.yb(),d=this.handle,e=this.Sc;
isNaN(c)&&(c=0);
a=c;
if(d){a=this.a.offsetWidth;
var g=d.w().offsetWidth;
a=g?g/a:0;
c*=1-a;
a=c+a/2;
d.w().style.left=u.round(100*c,2)+"%"
}e.w().style.width=u.round(100*a,2)+"%"
}};
function F(a,c){var d,e,g,j;
d=a.a;
e=u.ad(d);
j=g=d.offsetWidth;
d=a.handle;
if(a.g.Cd){return j=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.w().offsetHeight,j+=d/2,g-=d),Math.max(0,Math.min(1,(j-e+g)/g))
}g=e.left;
e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;
d&&(d=d.w().offsetWidth,g+=d/2,j-=d);
return Math.max(0,Math.min(1,(e-g)/j))
}t.Oa=function(){u.d(document,"keyup",u.bind(this,this.ba))
};
t.ba=function(a){37==a.which?(a.preventDefault(),this.yc()):39==a.which&&(a.preventDefault(),this.zc())
};
t.Na=function(){u.o(document,"keyup",u.bind(this,this.ba))
};
t.p=function(a){a.stopImmediatePropagation();
a.preventDefault()
};
u.ea=u.c.extend();
u.ea.prototype.defaultValue=0;
u.ea.prototype.e=function(a,c){c=c||{};
c.className+=" vjs-slider-handle";
c=u.k.B({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);
return u.c.prototype.e.call(this,"div",c)
};
u.ma=u.c.extend();
function ca(a,c){a.Z(c);
c.d("click",u.bind(a,function(){D(this)
}))
}u.ma.prototype.e=function(){var a=this.options().Vc||"ul";
this.sa=u.e(a,{className:"vjs-menu-content"});
a=u.c.prototype.e.call(this,"div",{append:this.sa,className:"vjs-menu"});
a.appendChild(this.sa);
u.d(a,"click",function(a){a.preventDefault();
a.stopImmediatePropagation()
});
return a
};
u.N=u.q.extend({i:function(a,c){u.q.call(this,a,c);
this.selected(c.selected)
}});
u.N.prototype.e=function(a,c){return u.q.prototype.e.call(this,"li",u.k.B({className:"vjs-menu-item",innerHTML:this.g.label},c))
};
u.N.prototype.p=function(){this.selected(f)
};
u.N.prototype.selected=function(a){a?(this.n("vjs-selected"),this.a.setAttribute("aria-selected",f)):(this.u("vjs-selected"),this.a.setAttribute("aria-selected",l))
};
u.R=u.q.extend({i:function(a,c){u.q.call(this,a,c);
this.wa=this.Ka();
this.Z(this.wa);
this.I&&0===this.I.length&&this.C();
this.d("keyup",this.ba);
this.a.setAttribute("aria-haspopup",f);
this.a.setAttribute("role","button")
}});
t=u.R.prototype;
t.pa=l;
t.Ka=function(){var a=new u.ma(this.b);
this.options().title&&a.w().appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.$(this.A),zd:-1}));
if(this.I=this.createItems()){for(var c=0;
c<this.I.length;
c++){ca(a,this.I[c])
}}return a
};
t.ta=m();
t.T=function(){return this.className+" vjs-menu-button "+u.q.prototype.T.call(this)
};
t.Oa=m();
t.Na=m();
t.p=function(){this.U("mouseout",u.bind(this,function(){D(this.wa);
this.a.blur()
}));
this.pa?G(this):H(this)
};
t.ba=function(a){a.preventDefault();
32==a.which||13==a.which?this.pa?G(this):H(this):27==a.which&&this.pa&&G(this)
};
function H(a){a.pa=f;
a.wa.n("vjs-lock-showing");
a.a.setAttribute("aria-pressed",f);
a.I&&0<a.I.length&&a.I[0].w().focus()
}function G(a){a.pa=l;
D(a.wa);
a.a.setAttribute("aria-pressed",l)
}u.s=u.c.extend({i:function(a,c,d){this.M=a;
c=u.k.B(da(a),c);
this.v={};
this.uc=c.poster;
this.sb=c.controls;
a.controls=l;
u.c.call(this,this,c,d);
this.controls()?this.n("vjs-controls-enabled"):this.n("vjs-controls-disabled");
this.U("play",function(a){u.j(this.a,{type:"firstplay",target:this.a})||(a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation())
});
this.d("ended",this.hd);
this.d("play",this.Kb);
this.d("firstplay",this.jd);
this.d("pause",this.Jb);
this.d("progress",this.ld);
this.d("durationchange",this.sc);
this.d("error",this.Gb);
this.d("fullscreenchange",this.kd);
u.xa[this.Q]=this;
c.plugins&&u.k.ua(c.plugins,function(a,c){this[a](c)
},this);
var e,g,j,k;
e=this.Mb;
a=function(){e();
clearInterval(g);
g=setInterval(u.bind(this,e),250)
};
c=function(){e();
clearInterval(g)
};
this.d("mousedown",a);
this.d("mousemove",e);
this.d("mouseup",c);
this.d("keydown",e);
this.d("keyup",e);
this.d("touchstart",a);
this.d("touchmove",e);
this.d("touchend",c);
this.d("touchcancel",c);
j=setInterval(u.bind(this,function(){this.ka&&(this.ka=l,this.ja(f),clearTimeout(k),k=setTimeout(u.bind(this,function(){this.ka||this.ja(l)
}),2000))
}),250);
this.d("dispose",function(){clearInterval(j);
clearTimeout(k)
})
}});
t=u.s.prototype;
t.g=u.options;
t.D=function(){this.j("dispose");
this.o("dispose");
u.xa[this.Q]=h;
this.M&&this.M.player&&(this.M.player=h);
this.a&&this.a.player&&(this.a.player=h);
clearInterval(this.Ra);
this.za();
this.h&&this.h.D();
u.c.prototype.D.call(this)
};
function da(a){var c={sources:[],tracks:[]};
u.k.B(c,u.xb(a));
if(a.hasChildNodes()){var d,e,g,j;
a=a.childNodes;
g=0;
for(j=a.length;
g<j;
g++){d=a[g],e=d.nodeName.toLowerCase(),"source"===e?c.sources.push(u.xb(d)):"track"===e&&c.tracks.push(u.xb(d))
}}return c
}t.e=function(){var a=this.a=u.c.prototype.e.call(this,"div"),c=this.M;
c.removeAttribute("width");
c.removeAttribute("height");
if(c.hasChildNodes()){var d,e,g,j,k;
d=c.childNodes;
e=d.length;
for(k=[];
e--;
){g=d[e],j=g.nodeName.toLowerCase(),"track"===j&&k.push(g)
}for(d=0;
d<k.length;
d++){c.removeChild(k[d])
}}c.id=c.id||"vjs_video_"+u.t++;
a.id=c.id;
a.className=c.className;
c.id+="_html5_api";
c.className="vjs-tech";
c.player=a.player=this;
this.n("vjs-paused");
this.width(this.g.width,f);
this.height(this.g.height,f);
c.parentNode&&c.parentNode.insertBefore(a,c);
u.zb(c,a);
return a
};
function I(a,c,d){a.h?(a.aa=l,a.h.D(),a.Eb&&(a.Eb=l,clearInterval(a.Ra)),a.Fb&&J(a),a.h=l):"Html5"!==c&&a.M&&(u.l.jc(a.M),a.M=h);
a.ia=c;
a.aa=l;
var e=u.k.B({source:d,parentEl:a.a},a.g[c.toLowerCase()]);
d&&(d.src==a.v.src&&0<a.v.currentTime&&(e.startTime=a.v.currentTime),a.v.src=d.src);
a.h=new window.videojs[c](a,e);
a.h.L(function(){this.b.Ua();
if(!this.m.progressEvents){var a=this.b;
a.Eb=f;
a.Ra=setInterval(u.bind(a,function(){this.v.lb<this.buffered().end(0)?this.j("progress"):1==this.Ja()&&(clearInterval(this.Ra),this.j("progress"))
}),500);
a.h.U("progress",function(){this.m.progressEvents=f;
var a=this.b;
a.Eb=l;
clearInterval(a.Ra)
})
}this.m.timeupdateEvents||(a=this.b,a.Fb=f,a.d("play",a.Cc),a.d("pause",a.za),a.h.U("timeupdate",function(){this.m.timeupdateEvents=f;
J(this.b)
}))
})
}function J(a){a.Fb=l;
a.za();
a.o("play",a.Cc);
a.o("pause",a.za)
}t.Cc=function(){this.hc&&this.za();
this.hc=setInterval(u.bind(this,function(){this.j("timeupdate")
}),250)
};
t.za=function(){clearInterval(this.hc)
};
t.Kb=function(){u.u(this.a,"vjs-paused");
u.n(this.a,"vjs-playing")
};
t.jd=function(){this.g.starttime&&this.currentTime(this.g.starttime);
this.n("vjs-has-started")
};
t.Jb=function(){u.u(this.a,"vjs-playing");
u.n(this.a,"vjs-paused")
};
t.ld=function(){1==this.Ja()&&this.j("loadedalldata")
};
t.hd=function(){this.g.loop&&(this.currentTime(0),this.play())
};
t.sc=function(){this.duration(K(this,"duration"))
};
t.kd=function(){this.H?this.n("vjs-fullscreen"):this.u("vjs-fullscreen")
};
t.Gb=function(a){u.log("Video Error",a)
};
function L(a,c,d){if(a.h&&!a.h.aa){a.h.L(function(){this[c](d)
})
}else{try{a.h[c](d)
}catch(e){throw u.log(e),e
}}}function K(a,c){if(a.h&&a.h.aa){try{return a.h[c]()
}catch(d){throw a.h[c]===b?u.log("Video.js: "+c+" method not defined for "+a.ia+" playback technology.",d):"TypeError"==d.name?(u.log("Video.js: "+c+" unavailable on "+a.ia+" playback technology element.",d),a.h.aa=l):u.log(d),d
}}}t.play=function(){L(this,"play");
return this
};
t.pause=function(){L(this,"pause");
return this
};
t.paused=function(){return K(this,"paused")===l?l:f
};
t.currentTime=function(a){return a!==b?(this.v.rc=a,L(this,"setCurrentTime",a),this.Fb&&this.j("timeupdate"),this):this.v.currentTime=K(this,"currentTime")||0
};
t.duration=function(a){if(a!==b){return this.v.duration=parseFloat(a),this
}this.v.duration===b&&this.sc();
return this.v.duration
};
t.buffered=function(){var a=K(this,"buffered"),c=a.length-1,d=this.v.lb=this.v.lb||0;
a&&(0<=c&&a.end(c)!==d)&&(d=a.end(c),this.v.lb=d);
return u.tb(0,d)
};
t.Ja=function(){return this.duration()?this.buffered().end(0)/this.duration():0
};
t.volume=function(a){if(a!==b){return a=Math.max(0,Math.min(1,parseFloat(a))),this.v.volume=a,L(this,"setVolume",a),u.td(a),this
}a=parseFloat(K(this,"volume"));
return isNaN(a)?1:a
};
t.muted=function(a){return a!==b?(L(this,"setMuted",a),this):K(this,"muted")||l
};
t.Ta=function(){return K(this,"supportsFullScreen")||l
};
t.ya=function(){var a=u.Pb.ya;
this.H=f;
a?(u.d(document,a.vb,u.bind(this,function(c){this.H=document[a.H];
this.H===l&&u.o(document,a.vb,arguments.callee);
this.j("fullscreenchange")
})),this.a[a.wc]()):this.h.Ta()?L(this,"enterFullScreen"):(this.cd=f,this.Yc=document.documentElement.style.overflow,u.d(document,"keydown",u.bind(this,this.lc)),document.documentElement.style.overflow="hidden",u.n(document.body,"vjs-full-window"),this.j("enterFullWindow"),this.j("fullscreenchange"));
return this
};
t.ob=function(){var a=u.Pb.ya;
this.H=l;
if(a){document[a.nb]()
}else{this.h.Ta()?L(this,"exitFullScreen"):(M(this),this.j("fullscreenchange"))
}return this
};
t.lc=function(a){27===a.keyCode&&(this.H===f?this.ob():M(this))
};
function M(a){a.cd=l;
u.o(document,"keydown",a.lc);
document.documentElement.style.overflow=a.Yc;
u.u(document.body,"vjs-full-window");
a.j("exitFullWindow")
}t.src=function(a){if(a instanceof Array){var c;
a:{c=a;
for(var d=0,e=this.g.techOrder;
d<e.length;
d++){var g=u.$(e[d]),j=window.videojs[g];
if(j.isSupported()){for(var k=0,q=c;
k<q.length;
k++){var n=q[k];
if(j.canPlaySource(n)){c={source:n,h:g};
break a
}}}}c=l
}c?(a=c.source,c=c.h,c==this.ia?this.src(a):I(this,c,a)):this.a.appendChild(u.e("p",{innerHTML:this.options().notSupportedMessage}))
}else{a instanceof Object?window.videojs[this.ia].canPlaySource(a)?this.src(a.src):this.src([a]):(this.v.src=a,this.aa?(L(this,"src",a),"auto"==this.g.preload&&this.load(),this.g.autoplay&&this.play()):this.L(function(){this.src(a)
}))
}return this
};
t.load=function(){L(this,"load");
return this
};
t.currentSrc=function(){return K(this,"currentSrc")||this.v.src||""
};
t.Qa=function(a){return a!==b?(L(this,"setPreload",a),this.g.preload=a,this):K(this,"preload")
};
t.autoplay=function(a){return a!==b?(L(this,"setAutoplay",a),this.g.autoplay=a,this):K(this,"autoplay")
};
t.loop=function(a){return a!==b?(L(this,"setLoop",a),this.g.loop=a,this):K(this,"loop")
};
t.poster=function(a){return a!==b?(this.uc=a,this):this.uc
};
t.controls=function(a){return a!==b?(a=!!a,this.sb!==a&&((this.sb=a)?(this.u("vjs-controls-disabled"),this.n("vjs-controls-enabled"),this.j("controlsenabled")):(this.u("vjs-controls-enabled"),this.n("vjs-controls-disabled"),this.j("controlsdisabled"))),this):this.sb
};
u.s.prototype.Sb;
t=u.s.prototype;
t.Rb=function(a){return a!==b?(a=!!a,this.Sb!==a&&((this.Sb=a)?(this.n("vjs-using-native-controls"),this.j("usingnativecontrols")):(this.u("vjs-using-native-controls"),this.j("usingcustomcontrols"))),this):this.Sb
};
t.error=function(){return K(this,"error")
};
t.seeking=function(){return K(this,"seeking")
};
t.ka=f;
t.Mb=function(){this.ka=f
};
t.Qb=f;
t.ja=function(a){return a!==b?(a=!!a,a!==this.Qb&&((this.Qb=a)?(this.ka=f,this.u("vjs-user-inactive"),this.n("vjs-user-active"),this.j("useractive")):(this.ka=l,this.h.U("mousemove",function(a){a.stopPropagation();
a.preventDefault()
}),this.u("vjs-user-active"),this.n("vjs-user-inactive"),this.j("userinactive"))),this):this.Qb
};
var N,O,P;
P=document.createElement("div");
O={};
P.Hd!==b?(O.wc="requestFullscreen",O.nb="exitFullscreen",O.vb="fullscreenchange",O.H="fullScreen"):(document.mozCancelFullScreen?(N="moz",O.H=N+"FullScreen"):(N="webkit",O.H=N+"IsFullScreen"),P[N+"RequestFullScreen"]&&(O.wc=N+"RequestFullScreen",O.nb=N+"CancelFullScreen"),O.vb=N+"fullscreenchange");
document[O.nb]&&(u.Pb.ya=O);
u.Fa=u.c.extend();
u.Fa.prototype.g={Md:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{}}};
u.Fa.prototype.e=function(){return u.e("div",{className:"vjs-control-bar"})
};
u.Yb=u.q.extend({i:function(a,c){u.q.call(this,a,c);
a.d("play",u.bind(this,this.Kb));
a.d("pause",u.bind(this,this.Jb))
}});
t=u.Yb.prototype;
t.qa="Play";
t.T=function(){return"vjs-play-control "+u.q.prototype.T.call(this)
};
t.p=function(){this.b.paused()?this.b.play():this.b.pause()
};
t.Kb=function(){u.u(this.a,"vjs-paused");
u.n(this.a,"vjs-playing");
this.a.children[0].children[0].innerHTML="Pause"
};
t.Jb=function(){u.u(this.a,"vjs-playing");
u.n(this.a,"vjs-paused");
this.a.children[0].children[0].innerHTML="Play"
};
u.Ya=u.c.extend({i:function(a,c){u.c.call(this,a,c);
a.d("timeupdate",u.bind(this,this.Ca))
}});
u.Ya.prototype.e=function(){var a=u.c.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});
this.content=u.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});
a.appendChild(u.e("div").appendChild(this.content));
return a
};
u.Ya.prototype.Ca=function(){var a=this.b.Nb?this.b.v.currentTime:this.b.currentTime();
this.content.innerHTML='<span class="vjs-control-text">Current Time </span>'+u.La(a,this.b.duration())
};
u.Za=u.c.extend({i:function(a,c){u.c.call(this,a,c);
a.d("timeupdate",u.bind(this,this.Ca))
}});
u.Za.prototype.e=function(){var a=u.c.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});
this.content=u.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">Duration Time </span>0:00',"aria-live":"off"});
a.appendChild(u.e("div").appendChild(this.content));
return a
};
u.Za.prototype.Ca=function(){var a=this.b.duration();
a&&(this.content.innerHTML='<span class="vjs-control-text">Duration Time </span>'+u.La(a))
};
u.cc=u.c.extend({i:function(a,c){u.c.call(this,a,c)
}});
u.cc.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})
};
u.fb=u.c.extend({i:function(a,c){u.c.call(this,a,c);
a.d("timeupdate",u.bind(this,this.Ca))
}});
u.fb.prototype.e=function(){var a=u.c.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});
this.content=u.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">Remaining Time </span>-0:00',"aria-live":"off"});
a.appendChild(u.e("div").appendChild(this.content));
return a
};
u.fb.prototype.Ca=function(){this.b.duration()&&(this.content.innerHTML='<span class="vjs-control-text">Remaining Time </span>-'+u.La(this.b.duration()-this.b.currentTime()))
};
u.Ga=u.q.extend({i:function(a,c){u.q.call(this,a,c)
}});
u.Ga.prototype.qa="Fullscreen";
u.Ga.prototype.T=function(){return"vjs-fullscreen-control "+u.q.prototype.T.call(this)
};
u.Ga.prototype.p=function(){this.b.H?(this.b.ob(),this.a.children[0].children[0].innerHTML="Fullscreen"):(this.b.ya(),this.a.children[0].children[0].innerHTML="Non-Fullscreen")
};
u.eb=u.c.extend({i:function(a,c){u.c.call(this,a,c)
}});
u.eb.prototype.g={children:{seekBar:{}}};
u.eb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})
};
u.Zb=u.O.extend({i:function(a,c){u.O.call(this,a,c);
a.d("timeupdate",u.bind(this,this.Ba));
a.L(u.bind(this,this.Ba))
}});
t=u.Zb.prototype;
t.g={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};
t.tc="timeupdate";
t.e=function(){return u.O.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})
};
t.Ba=function(){var a=this.b.Nb?this.b.v.currentTime:this.b.currentTime();
this.a.setAttribute("aria-valuenow",u.round(100*this.yb(),2));
this.a.setAttribute("aria-valuetext",u.La(a,this.b.duration()))
};
t.yb=function(){var a;
"Flash"===this.b.ia&&this.b.seeking()?(a=this.b.v,a=a.rc?a.rc:this.b.currentTime()):a=this.b.currentTime();
return a/this.b.duration()
};
t.Pa=function(a){u.O.prototype.Pa.call(this,a);
this.b.Nb=f;
this.Dd=!this.b.paused();
this.b.pause()
};
t.Hb=function(a){a=F(this,a)*this.b.duration();
a==this.b.duration()&&(a-=0.1);
this.b.currentTime(a)
};
t.Ib=function(a){u.O.prototype.Ib.call(this,a);
this.b.Nb=l;
this.Dd&&this.b.play()
};
t.zc=function(){this.b.currentTime(this.b.currentTime()+5)
};
t.yc=function(){this.b.currentTime(this.b.currentTime()-5)
};
u.ab=u.c.extend({i:function(a,c){u.c.call(this,a,c);
a.d("progress",u.bind(this,this.update))
}});
u.ab.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text">Loaded: 0%</span>'})
};
u.ab.prototype.update=function(){this.a.style&&(this.a.style.width=u.round(100*this.b.Ja(),2)+"%")
};
u.Xb=u.c.extend({i:function(a,c){u.c.call(this,a,c)
}});
u.Xb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text">Progress: 0%</span>'})
};
u.gb=u.ea.extend();
u.gb.prototype.defaultValue="00:00";
u.gb.prototype.e=function(){return u.ea.prototype.e.call(this,"div",{className:"vjs-seek-handle"})
};
u.ib=u.c.extend({i:function(a,c){u.c.call(this,a,c);
a.h&&(a.h.m&&a.h.m.volumeControl===l)&&this.n("vjs-hidden");
a.d("loadstart",u.bind(this,function(){a.h.m&&a.h.m.volumeControl===l?this.n("vjs-hidden"):this.u("vjs-hidden")
}))
}});
u.ib.prototype.g={children:{volumeBar:{}}};
u.ib.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})
};
u.hb=u.O.extend({i:function(a,c){u.O.call(this,a,c);
a.d("volumechange",u.bind(this,this.Ba));
a.L(u.bind(this,this.Ba));
setTimeout(u.bind(this,this.update),0)
}});
t=u.hb.prototype;
t.Ba=function(){this.a.setAttribute("aria-valuenow",u.round(100*this.b.volume(),2));
this.a.setAttribute("aria-valuetext",u.round(100*this.b.volume(),2)+"%")
};
t.g={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};
t.tc="volumechange";
t.e=function(){return u.O.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})
};
t.Hb=function(a){this.b.muted()&&this.b.muted(l);
this.b.volume(F(this,a))
};
t.yb=function(){return this.b.muted()?0:this.b.volume()
};
t.zc=function(){this.b.volume(this.b.volume()+0.1)
};
t.yc=function(){this.b.volume(this.b.volume()-0.1)
};
u.dc=u.c.extend({i:function(a,c){u.c.call(this,a,c)
}});
u.dc.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})
};
u.jb=u.ea.extend();
u.jb.prototype.defaultValue="00:00";
u.jb.prototype.e=function(){return u.ea.prototype.e.call(this,"div",{className:"vjs-volume-handle"})
};
u.da=u.q.extend({i:function(a,c){u.q.call(this,a,c);
a.d("volumechange",u.bind(this,this.update));
a.h&&(a.h.m&&a.h.m.volumeControl===l)&&this.n("vjs-hidden");
a.d("loadstart",u.bind(this,function(){a.h.m&&a.h.m.volumeControl===l?this.n("vjs-hidden"):this.u("vjs-hidden")
}))
}});
u.da.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})
};
u.da.prototype.p=function(){this.b.muted(this.b.muted()?l:f)
};
u.da.prototype.update=function(){var a=this.b.volume(),c=3;
0===a||this.b.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);
this.b.muted()?"Unmute"!=this.a.children[0].children[0].innerHTML&&(this.a.children[0].children[0].innerHTML="Unmute"):"Mute"!=this.a.children[0].children[0].innerHTML&&(this.a.children[0].children[0].innerHTML="Mute");
for(a=0;
4>a;
a++){u.u(this.a,"vjs-vol-"+a)
}u.n(this.a,"vjs-vol-"+c)
};
u.oa=u.R.extend({i:function(a,c){u.R.call(this,a,c);
a.d("volumechange",u.bind(this,this.update));
a.h&&(a.h.m&&a.h.m.Dc===l)&&this.n("vjs-hidden");
a.d("loadstart",u.bind(this,function(){a.h.m&&a.h.m.Dc===l?this.n("vjs-hidden"):this.u("vjs-hidden")
}));
this.n("vjs-menu-button")
}});
u.oa.prototype.Ka=function(){var a=new u.ma(this.b,{Vc:"div"}),c=new u.hb(this.b,u.k.B({Cd:f},this.g.Vd));
a.Z(c);
return a
};
u.oa.prototype.p=function(){u.da.prototype.p.call(this);
u.R.prototype.p.call(this)
};
u.oa.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})
};
u.oa.prototype.update=u.da.prototype.update;
u.cb=u.q.extend({i:function(a,c){u.q.call(this,a,c);
(!a.poster()||!a.controls())&&this.C();
a.d("play",u.bind(this,this.C))
}});
u.cb.prototype.e=function(){var a=u.e("div",{className:"vjs-poster",tabIndex:-1}),c=this.b.poster();
c&&("backgroundSize" in a.style?a.style.backgroundImage='url("'+c+'")':a.appendChild(u.e("img",{src:c})));
return a
};
u.cb.prototype.p=function(){this.K().controls()&&this.b.play()
};
u.Wb=u.c.extend({i:function(a,c){u.c.call(this,a,c);
a.d("canplay",u.bind(this,this.C));
a.d("canplaythrough",u.bind(this,this.C));
a.d("playing",u.bind(this,this.C));
a.d("seeked",u.bind(this,this.C));
a.d("seeking",u.bind(this,this.show));
a.d("seeked",u.bind(this,this.C));
a.d("error",u.bind(this,this.show));
a.d("waiting",u.bind(this,this.show))
}});
u.Wb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})
};
u.Wa=u.q.extend();
u.Wa.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})
};
u.Wa.prototype.p=function(){this.b.play()
};
u.r=u.c.extend({i:function(a,c,d){u.c.call(this,a,c,d);
var e,g;
g=this;
e=this.K();
a=function(){if(e.controls()&&!e.Rb()){var a,c;
g.d("mousedown",g.p);
g.d("touchstart",function(a){a.preventDefault();
a.stopPropagation();
c=this.b.ja()
});
a=function(a){a.stopPropagation();
c&&this.b.Mb()
};
g.d("touchmove",a);
g.d("touchleave",a);
g.d("touchcancel",a);
g.d("touchend",a);
var d,n,r;
d=0;
g.d("touchstart",function(){d=(new Date).getTime();
r=f
});
a=function(){r=l
};
g.d("touchmove",a);
g.d("touchleave",a);
g.d("touchcancel",a);
g.d("touchend",function(){r===f&&(n=(new Date).getTime()-d,250>n&&this.j("tap"))
});
g.d("tap",g.md)
}};
c=u.bind(g,g.pd);
this.L(a);
e.d("controlsenabled",a);
e.d("controlsdisabled",c)
}});
u.r.prototype.pd=function(){this.o("tap");
this.o("touchstart");
this.o("touchmove");
this.o("touchleave");
this.o("touchcancel");
this.o("touchend");
this.o("click");
this.o("mousedown")
};
u.r.prototype.p=function(a){0===a.button&&this.K().controls()&&(this.K().paused()?this.K().play():this.K().pause())
};
u.r.prototype.md=function(){this.K().ja(!this.K().ja())
};
u.r.prototype.m={volumeControl:f,fullscreenResize:l,progressEvents:l,timeupdateEvents:l};
u.media={};
u.media.Va="play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");
function ea(){var a=u.media.Va[i];
return function(){throw Error('The "'+a+"\" method is not available on the playback technology's API")
}
}for(var i=u.media.Va.length-1;
0<=i;
i--){u.r.prototype[u.media.Va[i]]=ea()
}u.l=u.r.extend({i:function(a,c,d){this.m.volumeControl=u.l.Uc();
this.m.movingMediaElementInDOM=!u.Kc;
this.m.fullscreenResize=f;
u.r.call(this,a,c,d);
(c=c.source)&&this.a.currentSrc===c.src&&0<this.a.networkState?a.j("loadstart"):c&&(this.a.src=c.src);
if(u.ac&&a.options().nativeControlsForTouch!==l){var e,g,j,k;
e=this;
g=this.K();
c=g.controls();
e.a.controls=!!c;
j=function(){e.a.controls=f
};
k=function(){e.a.controls=l
};
g.d("controlsenabled",j);
g.d("controlsdisabled",k);
c=function(){g.o("controlsenabled",j);
g.o("controlsdisabled",k)
};
e.d("dispose",c);
g.d("usingcustomcontrols",c);
g.Rb(f)
}a.L(function(){this.M&&(this.g.autoplay&&this.paused())&&(delete this.M.poster,this.play())
});
for(a=u.l.$a.length-1;
0<=a;
a--){u.d(this.a,u.l.$a[a],u.bind(this.b,this.$c))
}this.Ua()
}});
t=u.l.prototype;
t.D=function(){u.r.prototype.D.call(this)
};
t.e=function(){var a=this.b,c=a.M,d;
if(!c||this.m.movingMediaElementInDOM===l){c?(d=c.cloneNode(l),u.l.jc(c),c=d,a.M=h):c=u.e("video",{id:a.id()+"_html5_api",className:"vjs-tech"}),c.player=a,u.zb(c,a.w())
}d=["autoplay","preload","loop","muted"];
for(var e=d.length-1;
0<=e;
e--){var g=d[e];
a.g[g]!==h&&(c[g]=a.g[g])
}return c
};
t.$c=function(a){this.j(a);
a.stopPropagation()
};
t.play=function(){this.a.play()
};
t.pause=function(){this.a.pause()
};
t.paused=function(){return this.a.paused
};
t.currentTime=function(){return this.a.currentTime
};
t.sd=function(a){try{this.a.currentTime=a
}catch(c){u.log(c,"Video is not ready. (Video.js)")
}};
t.duration=function(){return this.a.duration||0
};
t.buffered=function(){return this.a.buffered
};
t.volume=function(){return this.a.volume
};
t.xd=function(a){this.a.volume=a
};
t.muted=function(){return this.a.muted
};
t.vd=function(a){this.a.muted=a
};
t.width=function(){return this.a.offsetWidth
};
t.height=function(){return this.a.offsetHeight
};
t.Ta=function(){return"function"==typeof this.a.webkitEnterFullScreen&&(/Android/.test(u.F)||!/Chrome|Mac OS X 10.5/.test(u.F))?f:l
};
t.src=function(a){this.a.src=a
};
t.load=function(){this.a.load()
};
t.currentSrc=function(){return this.a.currentSrc
};
t.Qa=function(){return this.a.Qa
};
t.wd=function(a){this.a.Qa=a
};
t.autoplay=function(){return this.a.autoplay
};
t.rd=function(a){this.a.autoplay=a
};
t.controls=function(){return this.a.controls
};
t.loop=function(){return this.a.loop
};
t.ud=function(a){this.a.loop=a
};
t.error=function(){return this.a.error
};
t.seeking=function(){return this.a.seeking
};
u.l.isSupported=function(){return !!u.na.canPlayType
};
u.l.mb=function(a){try{return !!u.na.canPlayType(a.type)
}catch(c){return""
}};
u.l.Uc=function(){var a=u.na.volume;
u.na.volume=a/2+0.1;
return a!==u.na.volume
};
u.l.$a="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
u.l.jc=function(a){if(a){a.player=h;
for(a.parentNode&&a.parentNode.removeChild(a);
a.hasChildNodes();
){a.removeChild(a.firstChild)
}a.removeAttribute("src");
"function"===typeof a.load&&a.load()
}};
u.Oc&&(document.createElement("video").constructor.prototype.canPlayType=function(a){return a&&-1!=a.toLowerCase().indexOf("video/mp4")?"maybe":""
});
u.f=u.r.extend({i:function(a,c,d){u.r.call(this,a,c,d);
var e=c.source;
d=c.parentEl;
var g=this.a=u.e("div",{id:a.id()+"_temp_flash"}),j=a.id()+"_flash_api";
a=a.g;
var k=u.k.B({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:a.autoplay,preload:a.Qa,loop:a.loop,muted:a.muted},c.flashVars),q=u.k.B({wmode:"opaque",bgcolor:"#000000"},c.params),n=u.k.B({id:j,name:j,"class":"vjs-tech"},c.attributes);
e&&(e.type&&u.f.ed(e.type)?(a=u.f.Ac(e.src),k.rtmpConnection=encodeURIComponent(a.rb),k.rtmpStream=encodeURIComponent(a.Ob)):k.src=encodeURIComponent(u.mc(e.src)));
u.zb(g,d);
c.startTime&&this.L(function(){this.load();
this.play();
this.currentTime(c.startTime)
});
if(c.iFrameMode===f&&!u.Jc){var r=u.e("iframe",{id:j+"_iframe",name:j+"_iframe",className:"vjs-tech",scrolling:"no",marginWidth:0,marginHeight:0,frameBorder:0});
k.readyFunction="ready";
k.eventProxyFunction="events";
k.errorEventProxyFunction="errors";
u.d(r,"load",u.bind(this,function(){var a,d=r.contentWindow;
a=r.contentDocument?r.contentDocument:r.contentWindow.document;
a.write(u.f.nc(c.swf,k,q,n));
d.player=this.b;
d.ready=u.bind(this.b,function(c){var d=this.h;
d.a=a.getElementById(c);
u.f.pb(d)
});
d.events=u.bind(this.b,function(a,c){this&&"flash"===this.ia&&this.j(c)
});
d.errors=u.bind(this.b,function(a,c){u.log("Flash Error",c)
})
}));
g.parentNode.replaceChild(r,g)
}else{u.f.Zc(c.swf,g,k,q,n)
}}});
t=u.f.prototype;
t.D=function(){u.r.prototype.D.call(this)
};
t.play=function(){this.a.vjs_play()
};
t.pause=function(){this.a.vjs_pause()
};
t.src=function(a){u.f.dd(a)?(a=u.f.Ac(a),this.Qd(a.rb),this.Rd(a.Ob)):(a=u.mc(a),this.a.vjs_src(a));
if(this.b.autoplay()){var c=this;
setTimeout(function(){c.play()
},0)
}};
t.currentSrc=function(){var a=this.a.vjs_getProperty("currentSrc");
if(a==h){var c=this.Od(),d=this.Pd();
c&&d&&(a=u.f.yd(c,d))
}return a
};
t.load=function(){this.a.vjs_load()
};
t.poster=function(){this.a.vjs_getProperty("poster")
};
t.buffered=function(){return u.tb(0,this.a.vjs_getProperty("buffered"))
};
t.Ta=s(l);
var Q=u.f.prototype,R="rtmpConnection rtmpStream preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),S="error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");
function fa(){var a=R[T],c=a.charAt(0).toUpperCase()+a.slice(1);
Q["set"+c]=function(c){return this.a.vjs_setProperty(a,c)
}
}function U(a){Q[a]=function(){return this.a.vjs_getProperty(a)
}
}var T;
for(T=0;
T<R.length;
T++){U(R[T]),fa()
}for(T=0;
T<S.length;
T++){U(S[T])
}u.f.isSupported=function(){return 10<=u.f.version()[0]
};
u.f.mb=function(a){if(!a.type){return""
}a=a.type.replace(/;.*/,"").toLowerCase();
if(a in u.f.bd||a in u.f.Bc){return"maybe"
}};
u.f.bd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};
u.f.Bc={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};
u.f.onReady=function(a){a=u.w(a);
var c=a.player||a.parentNode.player,d=c.h;
a.player=c;
d.a=a;
u.f.pb(d)
};
u.f.pb=function(a){a.w().vjs_getProperty?a.Ua():setTimeout(function(){u.f.pb(a)
},50)
};
u.f.onEvent=function(a,c){u.w(a).player.j(c)
};
u.f.onError=function(a,c){u.w(a).player.j("error");
u.log("Flash Error",c,a)
};
u.f.version=function(){var a="0,0,0";
try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]
}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])
}catch(d){}}return a.split(",")
};
u.f.Zc=function(a,c,d,e,g){a=u.f.nc(a,d,e,g);
a=u.e("div",{innerHTML:a}).childNodes[0];
d=c.parentNode;
c.parentNode.replaceChild(a,c);
var j=d.childNodes[0];
setTimeout(function(){j.style.display="block"
},1000)
};
u.f.nc=function(a,c,d,e){var g="",j="",k="";
c&&u.k.ua(c,function(a,c){g+=a+"="+c+"&amp;"
});
d=u.k.B({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);
u.k.ua(d,function(a,c){j+='<param name="'+a+'" value="'+c+'" />'
});
e=u.k.B({data:a,width:"100%",height:"100%"},e);
u.k.ua(e,function(a,c){k+=a+'="'+c+'" '
});
return'<object type="application/x-shockwave-flash"'+k+">"+j+"</object>"
};
u.f.yd=function(a,c){return a+"&"+c
};
u.f.Ac=function(a){var c={rb:"",Ob:""};
if(!a){return c
}var d=a.indexOf("&"),e;
-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));
c.rb=a.substring(0,d);
c.Ob=a.substring(e,a.length);
return c
};
u.f.ed=function(a){return a in u.f.Bc
};
u.f.Qc=/^rtmp[set]?:\/\//i;
u.f.dd=function(a){return u.f.Qc.test(a)
};
u.Pc=u.c.extend({i:function(a,c,d){u.c.call(this,a,c,d);
if(!a.g.sources||0===a.g.sources.length){c=0;
for(d=a.g.techOrder;
c<d.length;
c++){var e=u.$(d[c]),g=window.videojs[e];
if(g&&g.isSupported()){I(a,e);
break
}}}else{a.src(a.g.sources)
}}});
function V(a){a.Aa=a.Aa||[];
return a.Aa
}function W(a,c,d){for(var e=a.Aa,g=0,j=e.length,k,q;
g<j;
g++){k=e[g],k.id()===c?(k.show(),q=k):d&&(k.J()==d&&0<k.mode())&&k.disable()
}(c=q?q.J():d?d:l)&&a.j(c+"trackchange")
}u.X=u.c.extend({i:function(a,c){u.c.call(this,a,c);
this.Q=c.id||"vjs_"+c.kind+"_"+c.language+"_"+u.t++;
this.xc=c.src;
this.Wc=c["default"]||c.dflt;
this.Ad=c.title;
this.Ld=c.srclang;
this.fd=c.label;
this.fa=[];
this.ec=[];
this.ga=this.ha=0;
this.b.d("fullscreenchange",u.bind(this,this.Rc))
}});
t=u.X.prototype;
t.J=p("A");
t.src=p("xc");
t.ub=p("Wc");
t.title=p("Ad");
t.label=p("fd");
t.readyState=p("ha");
t.mode=p("ga");
t.Rc=function(){this.a.style.fontSize=this.b.H?140*(screen.width/this.b.width())+"%":""
};
t.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-"+this.A+" vjs-text-track"})
};
t.show=function(){X(this);
this.ga=2;
u.c.prototype.show.call(this)
};
t.C=function(){X(this);
this.ga=1;
u.c.prototype.C.call(this)
};
t.disable=function(){2==this.ga&&this.C();
this.b.o("timeupdate",u.bind(this,this.update,this.Q));
this.b.o("ended",u.bind(this,this.reset,this.Q));
this.reset();
this.b.V.textTrackDisplay.removeChild(this);
this.ga=0
};
function X(a){0===a.ha&&a.load();
0===a.ga&&(a.b.d("timeupdate",u.bind(a,a.update,a.Q)),a.b.d("ended",u.bind(a,a.reset,a.Q)),("captions"===a.A||"subtitles"===a.A)&&a.b.V.textTrackDisplay.Z(a))
}t.load=function(){0===this.ha&&(this.ha=1,u.get(this.xc,u.bind(this,this.nd),u.bind(this,this.Gb)))
};
t.Gb=function(a){this.error=a;
this.ha=3;
this.j("error")
};
t.nd=function(a){var c,d;
a=a.split("\n");
for(var e="",g=1,j=a.length;
g<j;
g++){if(e=u.trim(a[g])){-1==e.indexOf("--\x3e")?(c=e,e=u.trim(a[++g])):c=this.fa.length;
c={id:c,index:this.fa.length};
d=e.split(" --\x3e ");
c.startTime=Y(d[0]);
c.va=Y(d[1]);
for(d=[];
a[++g]&&(e=u.trim(a[g]));
){d.push(e)
}c.text=d.join("<br/>");
this.fa.push(c)
}}this.ha=2;
this.j("loaded")
};
function Y(a){var c=a.split(":");
a=0;
var d,e,g;
3==c.length?(d=c[0],e=c[1],c=c[2]):(d=0,e=c[0],c=c[1]);
c=c.split(/\s+/);
c=c.splice(0,1)[0];
c=c.split(/\.|,/);
g=parseFloat(c[1]);
c=c[0];
a+=3600*parseFloat(d);
a+=60*parseFloat(e);
a+=parseFloat(c);
g&&(a+=g/1000);
return a
}t.update=function(){if(0<this.fa.length){var a=this.b.currentTime();
if(this.Lb===b||a<this.Lb||this.Ma<=a){var c=this.fa,d=this.b.duration(),e=0,g=l,j=[],k,q,n,r;
a>=this.Ma||this.Ma===b?r=this.wb!==b?this.wb:0:(g=f,r=this.Db!==b?this.Db:c.length-1);
for(;
;
){n=c[r];
if(n.va<=a){e=Math.max(e,n.va),n.Ia&&(n.Ia=l)
}else{if(a<n.startTime){if(d=Math.min(d,n.startTime),n.Ia&&(n.Ia=l),!g){break
}}else{g?(j.splice(0,0,n),q===b&&(q=r),k=r):(j.push(n),k===b&&(k=r),q=r),d=Math.min(d,n.va),e=Math.max(e,n.startTime),n.Ia=f
}}if(g){if(0===r){break
}else{r--
}}else{if(r===c.length-1){break
}else{r++
}}}this.ec=j;
this.Ma=d;
this.Lb=e;
this.wb=k;
this.Db=q;
a=this.ec;
c="";
d=0;
for(e=a.length;
d<e;
d++){c+='<span class="vjs-tt-cue">'+a[d].text+"</span>"
}this.a.innerHTML=c;
this.j("cuechange")
}}};
t.reset=function(){this.Ma=0;
this.Lb=this.b.duration();
this.Db=this.wb=0
};
u.Ub=u.X.extend();
u.Ub.prototype.A="captions";
u.$b=u.X.extend();
u.$b.prototype.A="subtitles";
u.Vb=u.X.extend();
u.Vb.prototype.A="chapters";
u.bc=u.c.extend({i:function(a,c,d){u.c.call(this,a,c,d);
if(a.g.tracks&&0<a.g.tracks.length){c=this.b;
a=a.g.tracks;
var e;
for(d=0;
d<a.length;
d++){e=a[d];
var g=c,j=e.kind,k=e.label,q=e.language,n=e;
e=g.Aa=g.Aa||[];
n=n||{};
n.kind=j;
n.label=k;
n.language=q;
j=u.$(j||"subtitles");
g=new window.videojs[j+"Track"](g,n);
e.push(g)
}}}});
u.bc.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-text-track-display"})
};
u.Y=u.N.extend({i:function(a,c){var d=this.ca=c.track;
c.label=d.label();
c.selected=d.ub();
u.N.call(this,a,c);
this.b.d(d.J()+"trackchange",u.bind(this,this.update))
}});
u.Y.prototype.p=function(){u.N.prototype.p.call(this);
W(this.b,this.ca.Q,this.ca.J())
};
u.Y.prototype.update=function(){this.selected(2==this.ca.mode())
};
u.bb=u.Y.extend({i:function(a,c){c.track={J:function(){return c.kind
},K:a,label:function(){return c.kind+" off"
},ub:s(l),mode:s(l)};
u.Y.call(this,a,c);
this.selected(f)
}});
u.bb.prototype.p=function(){u.Y.prototype.p.call(this);
W(this.b,this.ca.Q,this.ca.J())
};
u.bb.prototype.update=function(){for(var a=V(this.b),c=0,d=a.length,e,g=f;
c<d;
c++){e=a[c],e.J()==this.ca.J()&&2==e.mode()&&(g=l)
}this.selected(g)
};
u.S=u.R.extend({i:function(a,c){u.R.call(this,a,c);
1>=this.I.length&&this.C()
}});
u.S.prototype.ta=function(){var a=[],c;
a.push(new u.bb(this.b,{kind:this.A}));
for(var d=0;
d<V(this.b).length;
d++){c=V(this.b)[d],c.J()===this.A&&a.push(new u.Y(this.b,{track:c}))
}return a
};
u.Da=u.S.extend({i:function(a,c,d){u.S.call(this,a,c,d);
this.a.setAttribute("aria-label","Captions Menu")
}});
u.Da.prototype.A="captions";
u.Da.prototype.qa="Captions";
u.Da.prototype.className="vjs-captions-button";
u.Ha=u.S.extend({i:function(a,c,d){u.S.call(this,a,c,d);
this.a.setAttribute("aria-label","Subtitles Menu")
}});
u.Ha.prototype.A="subtitles";
u.Ha.prototype.qa="Subtitles";
u.Ha.prototype.className="vjs-subtitles-button";
u.Ea=u.S.extend({i:function(a,c,d){u.S.call(this,a,c,d);
this.a.setAttribute("aria-label","Chapters Menu")
}});
t=u.Ea.prototype;
t.A="chapters";
t.qa="Chapters";
t.className="vjs-chapters-button";
t.ta=function(){for(var a=[],c,d=0;
d<V(this.b).length;
d++){c=V(this.b)[d],c.J()===this.A&&a.push(new u.Y(this.b,{track:c}))
}return a
};
t.Ka=function(){for(var a=V(this.b),c=0,d=a.length,e,g,j=this.I=[];
c<d;
c++){if(e=a[c],e.J()==this.A&&e.ub()){if(2>e.readyState()){this.Id=e;
e.d("loaded",u.bind(this,this.Ka));
return
}g=e;
break
}}a=this.wa=new u.ma(this.b);
a.a.appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.$(this.A),zd:-1}));
if(g){e=g.fa;
for(var k,c=0,d=e.length;
c<d;
c++){k=e[c],k=new u.Xa(this.b,{track:g,cue:k}),j.push(k),a.Z(k)
}}0<this.I.length&&this.show();
return a
};
u.Xa=u.N.extend({i:function(a,c){var d=this.ca=c.track,e=this.cue=c.cue,g=a.currentTime();
c.label=e.text;
c.selected=e.startTime<=g&&g<e.va;
u.N.call(this,a,c);
d.d("cuechange",u.bind(this,this.update))
}});
u.Xa.prototype.p=function(){u.N.prototype.p.call(this);
this.b.currentTime(this.cue.startTime);
this.update(this.cue.startTime)
};
u.Xa.prototype.update=function(){var a=this.cue,c=this.b.currentTime();
this.selected(a.startTime<=c&&c<a.va)
};
u.k.B(u.Fa.prototype.g.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});
if("undefined"!==typeof window.JSON&&"function"===window.JSON.parse){u.JSON=window.JSON
}else{u.JSON={};
var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
u.JSON.parse=function(a,c){function d(a,e){var k,q,n=a[e];
if(n&&"object"===typeof n){for(k in n){Object.prototype.hasOwnProperty.call(n,k)&&(q=d(n,k),q!==b?n[k]=q:delete n[k])
}}return c.call(a,e,n)
}var e;
a=String(a);
Z.lastIndex=0;
Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e
}throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
}
}u.fc=function(){var a,c,d=document.getElementsByTagName("video");
if(d&&0<d.length){for(var e=0,g=d.length;
e<g;
e++){if((c=d[e])&&c.getAttribute){c.player===b&&(a=c.getAttribute("data-setup"),a!==h&&(a=u.JSON.parse(a||"{}"),v(c,a)))
}else{u.kb();
break
}}}else{u.Ec||u.kb()
}};
u.kb=function(){setTimeout(u.fc,1)
};
"complete"===document.readyState?u.Ec=f:u.U(window,"load",function(){u.Ec=f
});
u.kb();
u.od=function(a,c){u.s.prototype[a]=c
};
var ga=this;
ga.Ed=f;
function $(a,c){var d=a.split("."),e=ga;
!(d[0] in e)&&e.execScript&&e.execScript("var "+d[0]);
for(var g;
d.length&&(g=d.shift());
){!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}
}}$("videojs",u);
$("_V_",u);
$("videojs.options",u.options);
$("videojs.players",u.xa);
$("videojs.TOUCH_ENABLED",u.ac);
$("videojs.cache",u.ra);
$("videojs.Component",u.c);
u.c.prototype.player=u.c.prototype.K;
u.c.prototype.dispose=u.c.prototype.D;
u.c.prototype.createEl=u.c.prototype.e;
u.c.prototype.el=u.c.prototype.w;
u.c.prototype.addChild=u.c.prototype.Z;
u.c.prototype.children=u.c.prototype.children;
u.c.prototype.on=u.c.prototype.d;
u.c.prototype.off=u.c.prototype.o;
u.c.prototype.one=u.c.prototype.U;
u.c.prototype.trigger=u.c.prototype.j;
u.c.prototype.triggerReady=u.c.prototype.Ua;
u.c.prototype.show=u.c.prototype.show;
u.c.prototype.hide=u.c.prototype.C;
u.c.prototype.width=u.c.prototype.width;
u.c.prototype.height=u.c.prototype.height;
u.c.prototype.dimensions=u.c.prototype.Xc;
u.c.prototype.ready=u.c.prototype.L;
u.c.prototype.addClass=u.c.prototype.n;
u.c.prototype.removeClass=u.c.prototype.u;
$("videojs.Player",u.s);
u.s.prototype.dispose=u.s.prototype.D;
u.s.prototype.requestFullScreen=u.s.prototype.ya;
u.s.prototype.cancelFullScreen=u.s.prototype.ob;
u.s.prototype.bufferedPercent=u.s.prototype.Ja;
u.s.prototype.usingNativeControls=u.s.prototype.Rb;
u.s.prototype.reportUserActivity=u.s.prototype.Mb;
u.s.prototype.userActive=u.s.prototype.ja;
$("videojs.MediaLoader",u.Pc);
$("videojs.TextTrackDisplay",u.bc);
$("videojs.ControlBar",u.Fa);
$("videojs.Button",u.q);
$("videojs.PlayToggle",u.Yb);
$("videojs.FullscreenToggle",u.Ga);
$("videojs.BigPlayButton",u.Wa);
$("videojs.LoadingSpinner",u.Wb);
$("videojs.CurrentTimeDisplay",u.Ya);
$("videojs.DurationDisplay",u.Za);
$("videojs.TimeDivider",u.cc);
$("videojs.RemainingTimeDisplay",u.fb);
$("videojs.Slider",u.O);
$("videojs.ProgressControl",u.eb);
$("videojs.SeekBar",u.Zb);
$("videojs.LoadProgressBar",u.ab);
$("videojs.PlayProgressBar",u.Xb);
$("videojs.SeekHandle",u.gb);
$("videojs.VolumeControl",u.ib);
$("videojs.VolumeBar",u.hb);
$("videojs.VolumeLevel",u.dc);
$("videojs.VolumeMenuButton",u.oa);
$("videojs.VolumeHandle",u.jb);
$("videojs.MuteToggle",u.da);
$("videojs.PosterImage",u.cb);
$("videojs.Menu",u.ma);
$("videojs.MenuItem",u.N);
$("videojs.MenuButton",u.R);
u.R.prototype.createItems=u.R.prototype.ta;
u.S.prototype.createItems=u.S.prototype.ta;
u.Ea.prototype.createItems=u.Ea.prototype.ta;
$("videojs.SubtitlesButton",u.Ha);
$("videojs.CaptionsButton",u.Da);
$("videojs.ChaptersButton",u.Ea);
$("videojs.MediaTechController",u.r);
u.r.prototype.features=u.r.prototype.m;
u.r.prototype.m.volumeControl=u.r.prototype.m.Dc;
u.r.prototype.m.fullscreenResize=u.r.prototype.m.Jd;
u.r.prototype.m.progressEvents=u.r.prototype.m.Nd;
u.r.prototype.m.timeupdateEvents=u.r.prototype.m.Sd;
$("videojs.Html5",u.l);
u.l.Events=u.l.$a;
u.l.isSupported=u.l.isSupported;
u.l.canPlaySource=u.l.mb;
u.l.prototype.setCurrentTime=u.l.prototype.sd;
u.l.prototype.setVolume=u.l.prototype.xd;
u.l.prototype.setMuted=u.l.prototype.vd;
u.l.prototype.setPreload=u.l.prototype.wd;
u.l.prototype.setAutoplay=u.l.prototype.rd;
u.l.prototype.setLoop=u.l.prototype.ud;
$("videojs.Flash",u.f);
u.f.isSupported=u.f.isSupported;
u.f.canPlaySource=u.f.mb;
u.f.onReady=u.f.onReady;
$("videojs.TextTrack",u.X);
u.X.prototype.label=u.X.prototype.label;
$("videojs.CaptionsTrack",u.Ub);
$("videojs.SubtitlesTrack",u.$b);
$("videojs.ChaptersTrack",u.Vb);
$("videojs.autoSetup",u.fc);
$("videojs.plugin",u.od);
$("videojs.createTimeRange",u.tb)
})();
function createCookie(c,e,f){var d=document.getElementById("CookieInner").getAttribute("data-domain");
if(f){var b=new Date();
b.setTime(b.getTime()+(f*24*60*60*1000));
var a="; expires="+b.toGMTString()
}else{var a=""
}document.cookie=c+"="+e+a+";domain=."+d+";path=/"
}function readCookie(b){var e=b+"=";
var a=document.cookie.split(";");
for(var d=0;
d<a.length;
d++){var f=a[d];
while(f.charAt(0)==" "){f=f.substring(1,f.length)
}if(f.indexOf(e)==0){return f.substring(e.length,f.length)
}}return null
}function eraseCookie(a){createCookie(a,"",-1)
}function CookieIsNull(){var c=document.getElementById("CookieInner").getAttribute("data-js-avi");
var a=document.getElementById("CookieInner").getAttribute("data-js-notavi");
var b=document.getElementById("CookieInner").getAttribute("data-plink");
a=a+" <a href ='"+b+"'>See our cookie policy</a>";
c=c+" <a href ='"+b+"'>See our cookie policy</a>";
tCCont=document.getElementById("CookieContainer");
createCookie("AgreeToAllianzCookieTermsQuestion","AcceptAllianzCookieTermsYes",30);
if(typeof jQuery!="undefined"){$("#CookieContainer").css({display:"none",position:"relative",width:"100%"});
$("#CookieClose").css("display","block");
$("#CookieText").html(c);
$("#CookieContainer").slideDown("slow")
}else{tCCont.style.position="relative";
tCCont.style.width="100%";
document.getElementById("CookieClose").style.display="block";
document.getElementById("CookieText").innerHTML=(c)
}}function CookieClose(){tCCont=document.getElementById("CookieContainer");
if(typeof jQuery!="undefined"){$("#CookieContainer").css("display","none")
}else{tCCont.style.display="none"
}}function expandable(){$(".flap-head").each(function(){$(this).not(".open").next(".flap-content").hide()
});
$(".flap-head").on("click",function(a){a.preventDefault();
var b=$(this).parent().width();
$(this).next(".flap-content").width(b);
$(this).toggleClass("open");
$(this).next(".flap-content").slideToggle(300,function(){$(this).width("auto")
})
})
}$(document).ready(function(){if($(".expandable").length){expandable()
}});
var TabsSelect={init:function(){this.makeSelectMenu();
this.bindUIfunctions();
this.pageLoadCorrectTab()
},bindUIfunctions:function(){$(".content-panel").on("click",".transformer-tabs li:not('.active') a[href^='#']",function(a){TabsSelect.changeTab(this.hash,this);
a.preventDefault()
}).on("change",".transformer-tabs select",function(a){TabsSelect.changeTab(this.value,this);
a.preventDefault()
})
},changeTab:function(b,a){$("[href="+b+"]").parent().addClass("active").siblings().removeClass("active");
$(b).addClass("active").siblings().removeClass("active");
$("[value="+b+"]").parent().val(b);
if(!$("html").hasClass("no-history")){window.history.replaceState("","",b)
}},pageLoadCorrectTab:function(){$(".tabs").each(function(c){var e=document.location.hash,d=$(this).find("[href="+e+"]"),a=$(".transformer-tabs li a",this).map(function(){return $(this).attr("href")
}).toArray(),b=$.inArray(e,a);
if(e.length>1&&b!==-1){TabsSelect.changeTab(e,d)
}else{$(this).find("nav li:first-child").addClass("active");
$(this).find(".tabItem:eq(0)").addClass("active")
}})
},makeSelectMenu:function(){$("<span class='tabs-heading'>Tab Content:</span><select class='tabs-select-menu' />").appendTo(".transformer-tabs");
$(".transformer-tabs").each(function(){var a=$(this),b=a.find("select");
a.find("a").each(function(){var c=$(this);
$("<option />",{value:c.attr("href"),text:c.text()}).appendTo(b)
})
})
}};
$(document).ready(function(){if($(".tabs-select").length){TabsSelect.init()
}});
/*!---- Product list js code ----*/
$(function(){$(".productList li.prod > a").on({mouseenter:function(){$(".productList li.prod").removeClass("active");
$(this).parent().addClass("active")
}});
$(".productList li.prod:first-child").addClass("active")
});
function tableMagic(){$("table.striped tr:nth-child(even)").addClass("zebra")
}function initResponsiveTable(){$(".tableWrapper table").addClass("responsive");
var e=false;
var b=function(){if(($(window).width()<640)&&!e){e=true;
$("table.responsive").each(function(g,f){c($(f))
});
return true
}else{if(e&&($(window).width()>640)){e=false;
$("table.responsive").each(function(g,f){d($(f))
})
}}};
$(window).load(b);
$(window).on("redraw",function(){e=false;
b()
});
$(window).on("resize",b);
function c(g){g.wrap("<div class='table-wrapper' />");
var h=g.find("caption");
var f=h.text();
h.addClass("hidden");
g.closest(".tableWrapper").prepend("<h3 class='table-caption'>"+f+"</h3>");
var i=g.clone();
i.find("td:not(:first-child), th:not(:first-child)").css("display","none");
i.removeClass("responsive");
g.closest(".table-wrapper").append(i);
i.wrap("<div class='pinned' />");
g.wrap("<div class='scrollable' />");
a(g,i)
}function d(f){f.closest(".table-wrapper").find(".pinned").remove();
f.closest(".tableWrapper").find(".table-caption").remove();
f.closest(".tableWrapper").find("caption").removeClass("hidden");
f.unwrap();
f.unwrap()
}function a(g,j){var i=g.find("tr"),f=j.find("tr"),h=[];
i.each(function(m){var l=$(this),k=l.find("th, td");
k.each(function(){var n=$(this).outerHeight(true);
h[m]=h[m]||0;
if(n>h[m]){h[m]=n
}})
});
f.each(function(k){$(this).height(h[k])
})
}}$(document).ready(function(){tableMagic();
if($("body.mobileEnabled .tableWrapper").length){initResponsiveTable()
}});
function dynamicCharts(){Highcharts.visualize=function(k,i){i.series=[];
if(i.chart.defaultSeriesType!="pie"){i.xAxis.categories=[];
$("tr",k).each(function(l){var m=this;
if(l===0){$("th, td",m).each(function(n){var o=this.innerHTML;
if(n>0){i.series.push({name:o,data:[]})
}})
}else{$("th",m).each(function(n){i.xAxis.categories.push(this.innerHTML)
});
$("td",m).each(function(n){i.series[n].data.push(parseInt(this.innerHTML))
})
}})
}else{$("tr",k).each(function(l){var m=this;
if(l===0){$("th, td",m).each(function(n){var o=this.innerHTML;
if(n>0){i.series.push({name:o,data:[]})
}})
}else{$("th",m).each(function(n){var o=this
});
$("td",m).each(function(n){var o=this;
i.series[n].data.push({y:parseInt(o.innerHTML),name:$("th",m).text()})
})
}})
}var j=new Highcharts.Chart($.extend({},i))
};
function f(r){var n=$(r).attr("data-chart-table-id");
var p=$(r).attr("id");
var m=$(r).attr("data-x-axis-title");
var l=$(r).attr("data-y-axis-title");
var o=$(r).attr("data-disable-tooltip");
var k=$(r).attr("data-show-data-labels");
var q=$("#"+n).find("caption").text();
var i=$(r).attr("data-chart-title");
if(i){q=i
}var s=document.getElementById(n),j={chart:{renderTo:p,defaultSeriesType:"pie",plotBackgroundColor:""},legend:{enabled:false},title:{text:q},tooltip:{formatter:function(){return"<strong>"+this.series.name+"</strong><br/>"+this.y+" "+this.point.name
},enabled:(o=="false")},plotOptions:{pie:{allowPointSelect:true,cursor:"pointer",showInLegend:true,dataLabels:{distance:-40,color:"white",enabled:(k=="true"),formatter:function(){return"<strong>"+this.point.name+"</strong>:<br/> "+this.percentage.toFixed(2)+" %"
}}}}};
Highcharts.visualize(s,j)
}function e(s){var m=$(s).attr("data-chart-table-id");
var q=$(s).attr("id");
var l=$(s).attr("data-x-axis-title");
var k=$(s).attr("data-y-axis-title");
var o=$(s).attr("data-disable-tooltip");
var j=$(s).attr("data-show-data-labels");
var r=$(s).attr("data-chart-stacking");
var p=$("#"+m).find("caption").text();
var i=$(s).attr("data-chart-title");
if(i){p=i
}var t=document.getElementById(m),n={chart:{renderTo:q,defaultSeriesType:"line"},legend:{},title:{text:p},xAxis:{title:{text:l}},yAxis:{title:{text:k}},plotOptions:{series:{dataLabels:{enabled:(j=="true")},stacking:r}},tooltip:{formatter:function(){return"<strong>"+this.series.name+":</strong> "+this.y
},enabled:(o=="false")}};
Highcharts.visualize(t,n)
}function a(s){var n=$(s).attr("data-chart-table-id");
var q=$(s).attr("id");
var m=$(s).attr("data-x-axis-title");
var l=$(s).attr("data-y-axis-title");
var o=$(s).attr("data-disable-tooltip");
var k=$(s).attr("data-show-data-labels");
var r=$(s).attr("data-chart-stacking");
var p=$("#"+n).find("caption").text();
var i=$(s).attr("data-chart-title");
if(i){p=i
}var t=document.getElementById(n),j={chart:{renderTo:q,defaultSeriesType:"bar"},legend:{},title:{text:p},xAxis:{title:{text:m}},yAxis:{title:{text:l}},plotOptions:{series:{dataLabels:{enabled:(k=="true")},stacking:r}},tooltip:{formatter:function(){return"<strong>"+this.series.name+":</strong> "+this.y
},enabled:(o=="false")}};
Highcharts.visualize(t,j)
}function h(r){var m=$(r).attr("data-chart-table-id");
var p=$(r).attr("id");
var l=$(r).attr("data-x-axis-title");
var k=$(r).attr("data-y-axis-title");
var n=$(r).attr("data-disable-tooltip");
var j=$(r).attr("data-show-data-labels");
var q=$(r).attr("data-chart-stacking");
var o=$("#"+m).find("caption").text();
var i=$(r).attr("data-chart-title");
if(i){o=i
}var t=document.getElementById(m),s={chart:{renderTo:p,defaultSeriesType:"column"},legend:{},title:{text:o},xAxis:{title:{text:l}},yAxis:{title:{text:k}},plotOptions:{series:{dataLabels:{enabled:(j=="true")},stacking:q}},tooltip:{formatter:function(){return"<strong>"+this.series.name+":</strong> "+this.y
},enabled:(n=="false")}};
Highcharts.visualize(t,s)
}function b(){var j=$('*[data-chart-type="pie"]');
var i=$.makeArray(j);
$.each(i,function(){var k=$(this).attr("id");
var l=$(this).attr("data-chart-table-id");
f(this)
})
}function d(){var j=$('*[data-chart-type="line"]');
var i=$.makeArray(j);
$.each(i,function(){var k=$(this).attr("id");
var l=$(this).attr("data-chart-table-id");
e(this)
})
}function g(){var j=$('*[data-chart-type="bar"]');
var i=$.makeArray(j);
$.each(i,function(){var k=$(this).attr("id");
var l=$(this).attr("data-chart-table-id");
a(this)
})
}function c(){var j=$('*[data-chart-type="col"]');
var i=$.makeArray(j);
$.each(i,function(){var k=$(this).attr("id");
var l=$(this).attr("data-chart-table-id");
h(this)
})
}b();
d();
g();
c()
}function highchartInit(){if($(".highcharts").length){dynamicCharts()
}}$(document).ready(function(){highchartInit()
});
(function(){function ay(p,n){var r;
p||(p={});
for(r in n){p[r]=n[r]
}return p
}function ar(){var p,n=arguments,t,s={},r=function(v,u){var x,w;
typeof v!=="object"&&(v={});
for(w in u){u.hasOwnProperty(w)&&(x=u[w],v[w]=x&&typeof x==="object"&&Object.prototype.toString.call(x)!=="[object Array]"&&typeof x.nodeType!=="number"?r(v[w]||{},x):u[w])
}return v
};
n[0]===!0&&(s=n[1],n=Array.prototype.slice.call(n,2));
t=n.length;
for(p=0;
p<t;
p++){s=r(s,n[p])
}return s
}function ao(p,n){return parseInt(p,n||10)
}function bQ(n){return typeof n==="string"
}function aW(n){return typeof n==="object"
}function ak(n){return Object.prototype.toString.call(n)==="[object Array]"
}function B(n){return typeof n==="number"
}function c(n){return a0.log(n)/a0.LN10
}function bB(n){return a0.pow(10,n)
}function a9(p,n){for(var r=p.length;
r--;
){if(p[r]===n){p.splice(r,1);
break
}}}function aw(n){return n!==av&&n!==null
}function au(p,n,t){var s,r;
if(bQ(n)){aw(t)?p.setAttribute(n,t):p&&p.getAttribute&&(r=p.getAttribute(n))
}else{if(aw(n)&&aW(n)){for(s in n){p.setAttribute(s,n[s])
}}}return r
}function af(n){return ak(n)?n:[n]
}function aC(){var p=arguments,n,s,r=p.length;
for(n=0;
n<r;
n++){if(s=p[n],typeof s!=="undefined"&&s!==null){return s
}}}function bl(p,n){if(bM&&n&&n.opacity!==av){n.filter="alpha(opacity="+n.opacity*100+")"
}ay(p.style,n)
}function aV(p,n,t,s,r){p=ap.createElement(p);
n&&ay(p,n);
r&&bl(p,{padding:0,border:aY,margin:0});
t&&bl(p,t);
s&&s.appendChild(p);
return p
}function aF(p,n){var r=function(){};
r.prototype=new p;
ay(r.prototype,n);
return r
}function aG(p,n,v,u){var t=be.lang,p=+p||0,s=n===-1?(p.toString().split(".")[1]||"").length:isNaN(n=a4(n))?2:n,n=v===void 0?t.decimalPoint:v,u=u===void 0?t.thousandsSep:u,t=p<0?"-":"",v=String(ao(p=a4(p).toFixed(s))),r=v.length>3?v.length%3:0;
return t+(r?v.substr(0,r)+u:"")+v.substr(r).replace(/(\d{3})(?=\d)/g,"$1"+u)+(s?n+a4(p-v).toFixed(s).slice(2):"")
}function ag(p,n){return Array((n||2)+1-String(p).length).join(0)+p
}function aQ(p,n,s){var r=p[n];
p[n]=function(){var t=Array.prototype.slice.call(arguments);
t.unshift(r);
return s.apply(this,t)
}
}function i(y,x){for(var w="{",v=!1,u,t,s,r,p,n=[];
(w=y.indexOf(w))!==-1;
){u=y.slice(0,w);
if(v){t=u.split(":");
s=t.shift().split(".");
p=s.length;
u=x;
for(r=0;
r<p;
r++){u=u[s[r]]
}if(t.length){t=t.join(":"),s=/\.([0-9])/,r=be.lang,p=void 0,/f$/.test(t)?(p=(p=t.match(s))?p[1]:-1,u=aG(u,p,r.decimalPoint,t.indexOf(",")>-1?r.thousandsSep:"")):u=bx(t,u)
}}n.push(u);
y=y.slice(w+1);
w=(v=!v)?"}":"{"
}n.push(y);
return n.join("")
}function bD(n){return a0.pow(10,a3(a0.log(n)/a0.LN10))
}function bg(p,n,t,s){var r,t=aC(t,1);
r=p/t;
n||(n=[1,2,2.5,5,10],s&&s.allowDecimals===!1&&(t===1?n=[1,2,5,10]:t<=0.1&&(n=[1/t])));
for(s=0;
s<n.length;
s++){if(p=n[s],r<=(n[s]+(n[s+1]||n[s]))/2){break
}}p*=t;
return p
}function bP(){this.symbol=this.color=0
}function aH(p,n){var t=p.length,s,r;
for(r=0;
r<t;
r++){p[r].ss_i=r
}p.sort(function(u,v){s=n(u,v);
return s===0?u.ss_i-v.ss_i:s
});
for(r=0;
r<t;
r++){delete p[r].ss_i
}}function m(p){for(var n=p.length,r=p[0];
n--;
){p[n]<r&&(r=p[n])
}return r
}function bv(p){for(var n=p.length,r=p[0];
n--;
){p[n]>r&&(r=p[n])
}return r
}function bY(p,n){for(var r in p){p[r]&&p[r]!==n&&p[r].destroy&&p[r].destroy(),delete p[r]
}}function bJ(n){aZ||(aZ=aV(bU));
n&&aZ.appendChild(n);
aZ.innerHTML=""
}function h(p,n){var r="Highcharts error #"+p+": www.highcharts.com/errors/"+p;
if(n){throw r
}else{bn.console&&console.log(r)
}}function by(n){return parseFloat(n.toPrecision(14))
}function bs(p,n){aI=aC(p,n.animation)
}function bA(){var p=be.global.useUTC,n=p?"getUTC":"get",r=p?"setUTC":"set";
aO=(p&&be.global.timezoneOffset||0)*60000;
aA=p?Date.UTC:function(t,s,x,w,v,u){return(new Date(t,s,aC(x,1),aC(w,0),aC(v,0),aC(u,0))).getTime()
};
ah=n+"Minutes";
j=n+"Hours";
bV=n+"Day";
aq=n+"Date";
Z=n+"Month";
e=n+"FullYear";
a8=r+"Minutes";
aE=r+"Hours";
bG=r+"Date";
ae=r+"Month";
g=r+"FullYear"
}function aj(){}function an(p,n,s,r){this.axis=p;
this.pos=n;
this.type=s||"";
this.isNew=!0;
!s&&!r&&this.addLabel()
}function l(){this.init.apply(this,arguments)
}function bT(p,n,v,u,t,s){var r=p.chart.inverted;
this.axis=p;
this.isNegative=v;
this.options=n;
this.x=u;
this.total=null;
this.points={};
this.stack=t;
this.percent=s==="percent";
this.alignOptions={align:n.align||(r?v?"left":"right":"center"),verticalAlign:n.verticalAlign||(r?"middle":v?"bottom":"top"),y:aC(n.y,r?4:v?14:-6),x:aC(n.x,r?v?-6:6:0)};
this.textAlign=n.textAlign||(r?v?"right":"left":"center")
}function bp(){this.init.apply(this,arguments)
}function bO(){this.init.apply(this,arguments)
}var av,ap=document,bn=window,a0=Math,at=a0.round,a3=a0.floor,bF=a0.ceil,ax=a0.max,bc=a0.min,a4=a0.abs,aU=a0.cos,a2=a0.sin,bR=a0.PI,bC=bR*2/360,bX=navigator.userAgent,bE=bn.opera,bM=/msie/i.test(bX)&&!bE,bz=ap.documentMode===8,a6=/AppleWebKit/.test(bX),K=/Firefox/.test(bX),bj=/(Mobile|Android|Windows Phone)/.test(bX),bd="http://www.w3.org/2000/svg",aT=!!ap.createElementNS&&!!ap.createElementNS(bd,"svg").createSVGRect,bI=K&&parseInt(bX.split("Firefox/")[1],10)<4,ac=!aT&&!bM&&!!ap.createElement("canvas").getContext,d,aD=ap.documentElement.ontouchstart!==av,aJ={},aL=0,aZ,be,bx,aI,al,bi,bS=function(){},bk=[],bU="div",aY="none",br=/^[0-9]+$/,ai="rgba(192,192,192,"+(aT?0.0001:0.002)+")",k="stroke-width",aA,aO,ah,j,bV,aq,Z,e,a8,aE,bG,ae,g,a5={};
bn.Highcharts=bn.Highcharts?h(16,!0):{};
bx=function(A,z,y){if(!aw(z)||isNaN(z)){return"Invalid date"
}var A=aC(A,"%Y-%m-%d %H:%M:%S"),x=new Date(z-aO),w,v=x[j](),u=x[bV](),t=x[aq](),s=x[Z](),r=x[e](),p=be.lang,n=p.weekdays,x=ay({a:n[u].substr(0,3),A:n[u],d:ag(t),e:t,b:p.shortMonths[s],B:p.months[s],m:ag(s+1),y:r.toString().substr(2,2),Y:r,H:ag(v),I:ag(v%12||12),l:v%12||12,M:ag(x[ah]()),p:v<12?"AM":"PM",P:v<12?"am":"pm",S:ag(x.getSeconds()),L:ag(at(z%1000),3)},Highcharts.dateFormats);
for(w in x){for(;
A.indexOf("%"+w)!==-1;
){A=A.replace("%"+w,typeof x[w]==="function"?x[w](z):x[w])
}}return y?A.substr(0,1).toUpperCase()+A.substr(1):A
};
bP.prototype={wrapColor:function(n){if(this.color>=n){this.color=0
}},wrapSymbol:function(n){if(this.symbol>=n){this.symbol=0
}}};
bi=function(){for(var p=0,n=arguments,s=n.length,r={};
p<s;
p++){r[n[p++]]=n[p]
}return r
}("millisecond",1,"second",1000,"minute",60000,"hour",3600000,"day",86400000,"week",604800000,"month",2678400000,"year",31556952000);
al={init:function(y,x,w){var x=x||"",v=y.shift,u=x.indexOf("C")>-1,t=u?7:3,s,x=x.split(" "),w=[].concat(w),r,p,n=function(z){for(s=z.length;
s--;
){z[s]==="M"&&z.splice(s+1,0,z[s+1],z[s+2],z[s+1],z[s+2])
}};
u&&(n(x),n(w));
y.isArea&&(r=x.splice(x.length-6,6),p=w.splice(w.length-6,6));
if(v<=w.length/t&&x.length===w.length){for(;
v--;
){w=[].concat(w).splice(0,t).concat(w)
}}y.shift=0;
if(x.length){for(y=w.length;
x.length<y;
){v=[].concat(x).splice(x.length-t,t),u&&(v[t-6]=v[t-2],v[t-5]=v[t-1]),x=x.concat(v)
}}r&&(x=x.concat(r),w=w.concat(p));
return[x,w]
},step:function(p,n,u,t){var s=[],r=p.length;
if(u===1){s=t
}else{if(r===n.length&&u<1){for(;
r--;
){t=parseFloat(p[r]),s[r]=isNaN(t)?p[r]:u*parseFloat(n[r]-t)+t
}}else{s=n
}}return s
}};
(function(n){bn.HighchartsAdapter=bn.HighchartsAdapter||n&&{init:function(p){var v=n.fx,u=v.step,t,s=n.Tween,r=s&&s.propHooks;
t=n.cssHooks.opacity;
n.extend(n.easing,{easeOutQuad:function(x,w,A,z,y){return -z*(w/=y)*(w-2)+A
}});
n.each(["cur","_default","width","height","opacity"],function(x,w){var z=u,y;
w==="cur"?z=v.prototype:w==="_default"&&s&&(z=r[w],w="set");
(y=z[w])&&(z[w]=function(C){var A,C=x?C:this;
if(C.prop!=="align"){return A=C.elem,A.attr?A.attr(C.prop,w==="cur"?av:C.now):y.apply(this,arguments)
}})
});
aQ(t,"get",function(x,w,y){return w.attr?w.opacity||0:x.call(this,w,y)
});
t=function(w){var y=w.elem,x;
if(!w.started){x=p.init(y,y.d,y.toD),w.start=x[0],w.end=x[1],w.started=!0
}y.attr("d",p.step(w.start,w.end,w.pos,y.toD))
};
s?r.d={set:t}:u.d=t;
this.each=Array.prototype.forEach?function(x,w){return Array.prototype.forEach.call(x,w)
}:function(x,w){for(var z=0,y=x.length;
z<y;
z++){if(w.call(x[z],x[z],z,x)===!1){return z
}}};
n.fn.highcharts=function(){var x="Chart",w=arguments,z,y;
bQ(w[0])&&(x=w[0],w=Array.prototype.slice.call(w,1));
z=w[0];
if(z!==av){z.chart=z.chart||{},z.chart.renderTo=this[0],new Highcharts[x](z,w[1]),y=this
}z===av&&(y=bk[au(this[0],"data-highcharts-chart")]);
return y
}
},getScript:n.getScript,inArray:n.inArray,adapterRun:function(p,r){return n(p)[r]()
},grep:n.grep,map:function(p,u){for(var t=[],s=0,r=p.length;
s<r;
s++){t[s]=u.call(p[s],p[s],s,p)
}return t
},offset:function(p){return n(p).offset()
},addEvent:function(p,s,r){n(p).bind(s,r)
},removeEvent:function(p,t,s){var r=ap.removeEventListener?"removeEventListener":"detachEvent";
ap[r]&&p&&!p[r]&&(p[r]=function(){});
n(p).unbind(t,s)
},fireEvent:function(p,w,v,u){var t=n.Event(w),s="detached"+w,r;
!bM&&v&&(delete v.layerX,delete v.layerY);
ay(t,v);
p[w]&&(p[s]=p[w],p[w]=null);
n.each(["preventDefault","stopPropagation"],function(y,x){var z=t[x];
t[x]=function(){try{z.call(t)
}catch(A){x==="preventDefault"&&(r=!0)
}}
});
n(p).trigger(t);
p[s]&&(p[w]=p[s],p[s]=null);
u&&!t.isDefaultPrevented()&&!r&&u(t)
},washMouseEvent:function(p){var r=p.originalEvent||p;
if(r.pageX===av){r.pageX=p.pageX,r.pageY=p.pageY
}return r
},animate:function(p,t,s){var r=n(p);
if(!p.style){p.style={}
}if(t.d){p.toD=t.d,t.d=1
}r.stop();
t.opacity!==av&&p.attr&&(t.opacity+="px");
r.animate(t,s)
},stop:function(p){n(p).stop()
}}
})(bn.jQuery);
var aS=bn.HighchartsAdapter,a7=aS||{};
aS&&aS.init.call(aS,al);
var ad=a7.adapterRun,aN=a7.getScript,bH=a7.inArray,az=a7.each,o=a7.grep,am=a7.offset,H=a7.map,bf=a7.addEvent,aR=a7.removeEvent,bo=a7.fireEvent,q=a7.washMouseEvent,f=a7.animate,bN=a7.stop,a7={enabled:!0,x:0,y:15,style:{color:"#666",cursor:"default",fontSize:"11px"}};
be={colors:"#2f7ed8,#0d233a,#8bbc21,#910000,#1aadce,#492970,#f28f43,#77a1e5,#c42525,#a6c96a".split(","),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:","},global:{useUTC:!0,canvasToolsURL:"http://code.highcharts.com/3.0.9/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/3.0.9/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:5,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],style:{fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',fontSize:"12px"},backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#274b6d",fontSize:"16px"}},subtitle:{text:"",align:"center",style:{color:"#4d759e"}},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1000},events:{},lineWidth:2,marker:{enabled:!0,lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:ar(a7,{align:"center",enabled:!1,formatter:function(){return this.y===null?"":aG(this.y,-1)
},verticalAlign:"bottom",y:0}),cropThreshold:300,pointRange:0,states:{hover:{marker:{}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1000}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name
},borderWidth:1,borderColor:"#909090",borderRadius:5,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{cursor:"pointer",color:"#274b6d",fontSize:"12px"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"1em"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:!0,animation:aT,backgroundColor:"rgba(255, 255, 255, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',shadow:!0,snap:bj?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};
var aP=be.plotOptions,aS=aP.line;
bA();
var b=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,bL=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,bu=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,bq=function(p){var n=[],s,r;
(function(t){t&&t.stops?r=H(t.stops,function(u){return bq(u[1])
}):(s=b.exec(t))?n=[ao(s[1]),ao(s[2]),ao(s[3]),parseFloat(s[4],10)]:(s=bL.exec(t))?n=[ao(s[1],16),ao(s[2],16),ao(s[3],16),1]:(s=bu.exec(t))&&(n=[ao(s[1]),ao(s[2]),ao(s[3]),1])
})(p);
return{get:function(u){var t;
r?(t=ar(p),t.stops=[].concat(t.stops),az(r,function(w,v){t.stops[v]=[t.stops[v][0],w.get(u)]
})):t=n&&!isNaN(n[0])?u==="rgb"?"rgb("+n[0]+","+n[1]+","+n[2]+")":u==="a"?n[3]:"rgba("+n.join(",")+")":p;
return t
},brighten:function(t){if(r){az(r,function(v){v.brighten(t)
})
}else{if(B(t)&&t!==0){var u;
for(u=0;
u<3;
u++){n[u]+=ao(t*255),n[u]<0&&(n[u]=0),n[u]>255&&(n[u]=255)
}}}return this
},rgba:n,setOpacity:function(t){n[3]=t;
return this
}}
};
aj.prototype={init:function(p,n){this.element=n==="span"?aV(n):ap.createElementNS(bd,n);
this.renderer=p;
this.attrSetters={}
},opacity:1,animate:function(p,n,r){n=aC(n,aI,!0);
bN(this);
if(n){n=ar(n);
if(r){n.complete=r
}f(this,p,n)
}else{this.attr(p),r&&r()
}},attr:function(E,D){var C,A,z,y,x=this.element,w=x.nodeName.toLowerCase(),v=this.renderer,u,t=this.attrSetters,s=this.shadows,r,n,p=this;
bQ(E)&&aw(D)&&(C=E,E={},E[C]=D);
if(bQ(E)){C=E,w==="circle"?C={x:"cx",y:"cy"}[C]||C:C==="strokeWidth"&&(C="stroke-width"),p=au(x,C)||this[C]||0,C!=="d"&&C!=="visibility"&&C!=="fill"&&(p=parseFloat(p))
}else{for(C in E){if(u=!1,A=E[C],z=t[C]&&t[C].call(this,A,C),z!==!1){z!==av&&(A=z);
if(C==="d"){A&&A.join&&(A=A.join(" ")),/(NaN| {2}|^$)/.test(A)&&(A="M 0 0")
}else{if(C==="x"&&w==="text"){for(z=0;
z<x.childNodes.length;
z++){y=x.childNodes[z],au(y,"x")===au(x,"x")&&au(y,"x",A)
}}else{if(this.rotation&&(C==="x"||C==="y")){n=!0
}else{if(C==="fill"){A=v.color(A,x,C)
}else{if(w==="circle"&&(C==="x"||C==="y")){C={x:"cx",y:"cy"}[C]||C
}else{if(w==="rect"&&C==="r"){au(x,{rx:A,ry:A}),u=!0
}else{if(C==="translateX"||C==="translateY"||C==="rotation"||C==="verticalAlign"||C==="scaleX"||C==="scaleY"){u=n=!0
}else{if(C==="stroke"){A=v.color(A,x,C)
}else{if(C==="dashstyle"){if(C="stroke-dasharray",A=A&&A.toLowerCase(),A==="solid"){A=aY
}else{if(A){A=A.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");
for(z=A.length;
z--;
){A[z]=ao(A[z])*aC(E["stroke-width"],this["stroke-width"])
}A=A.join(",")
}}}else{if(C==="width"){A=ao(A)
}else{if(C==="align"){C="text-anchor",A={left:"start",center:"middle",right:"end"}[A]
}else{if(C==="title"){z=x.getElementsByTagName("title")[0],z||(z=ap.createElementNS(bd,"title"),x.appendChild(z)),z.textContent=A
}}}}}}}}}}}}C==="strokeWidth"&&(C="stroke-width");
if(C==="stroke-width"||C==="stroke"){this[C]=A;
if(this.stroke&&this["stroke-width"]){au(x,"stroke",this.stroke),au(x,"stroke-width",this["stroke-width"]),this.hasStroke=!0
}else{if(C==="stroke-width"&&A===0&&this.hasStroke){x.removeAttribute("stroke"),this.hasStroke=!1
}}u=!0
}this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(C)&&(r||(this.symbolAttr(E),r=!0),u=!0);
if(s&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(C)){for(z=s.length;
z--;
){au(s[z],C,C==="height"?ax(A-(s[z].cutHeight||0),0):A)
}}if((C==="width"||C==="height")&&w==="rect"&&A<0){A=0
}this[C]=A;
C==="text"?(A!==this.textStr&&delete this.bBox,this.textStr=A,this.added&&v.buildText(this)):u||au(x,C,A)
}}n&&this.updateTransform()
}return p
},addClass:function(p){var n=this.element,r=au(n,"class")||"";
r.indexOf(p)===-1&&au(n,"class",r+" "+p);
return this
},symbolAttr:function(p){var n=this;
az("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(r){n[r]=aC(p[r],n[r])
});
n.attr({d:n.renderer.symbols[n.symbolName](n.x,n.y,n.width,n.height,n)})
},clip:function(n){return this.attr("clip-path",n?"url("+this.renderer.url+"#"+n.id+")":aY)
},crisp:function(x,w,v,u,t){var s,r={},p={},n,x=x||this.strokeWidth||this.attr&&this.attr("stroke-width")||0;
n=at(x)%2/2;
p.x=a3(w||this.x||0)+n;
p.y=a3(v||this.y||0)+n;
p.width=a3((u||this.width||0)-2*n);
p.height=a3((t||this.height||0)-2*n);
p.strokeWidth=x;
for(s in p){this[s]!==p[s]&&(this[s]=r[s]=p[s])
}return r
},css:function(p){var n=this.element,u=this.textWidth=p&&p.width&&n.nodeName.toLowerCase()==="text"&&ao(p.width),t,s="",r=function(w,v){return"-"+v.toLowerCase()
};
if(p&&p.color){p.fill=p.color
}this.styles=p=ay(this.styles,p);
u&&delete p.width;
if(bM&&!aT){bl(this.element,p)
}else{for(t in p){s+=t.replace(/([A-Z])/g,r)+":"+p[t]+";"
}au(n,"style",s)
}u&&this.added&&this.renderer.buildText(this);
return this
},on:function(p,n){var s=this,r=s.element;
aD&&p==="click"?(r.ontouchstart=function(t){s.touchEventFired=Date.now();
t.preventDefault();
n.call(r,t)
},r.onclick=function(t){(bX.indexOf("Android")===-1||Date.now()-(s.touchEventFired||0)>1100)&&n.call(r,t)
}):r["on"+p]=n;
return this
},setRadialReference:function(n){this.element.radialReference=n;
return this
},translate:function(p,n){return this.attr({translateX:p,translateY:n})
},invert:function(){this.inverted=!0;
this.updateTransform();
return this
},updateTransform:function(){var p=this.translateX||0,n=this.translateY||0,u=this.scaleX,t=this.scaleY,s=this.inverted,r=this.rotation;
s&&(p+=this.attr("width"),n+=this.attr("height"));
p=["translate("+p+","+n+")"];
s?p.push("rotate(90) scale(-1,1)"):r&&p.push("rotate("+r+" "+(this.x||0)+" "+(this.y||0)+")");
(aw(u)||aw(t))&&p.push("scale("+aC(u,1)+" "+aC(t,1)+")");
p.length&&au(this.element,"transform",p.join(" "))
},toFront:function(){var n=this.element;
n.parentNode.appendChild(n);
return this
},align:function(p,n,w){var v,u,t,s,r={};
u=this.renderer;
t=u.alignedObjects;
if(p){if(this.alignOptions=p,this.alignByTranslate=n,!w||bQ(w)){this.alignTo=v=w||"renderer",a9(t,this),t.push(this),w=null
}}else{p=this.alignOptions,n=this.alignByTranslate,v=this.alignTo
}w=aC(w,u[v],u);
v=p.align;
u=p.verticalAlign;
t=(w.x||0)+(p.x||0);
s=(w.y||0)+(p.y||0);
if(v==="right"||v==="center"){t+=(w.width-(p.width||0))/{right:1,center:2}[v]
}r[n?"translateX":"x"]=at(t);
if(u==="bottom"||u==="middle"){s+=(w.height-(p.height||0))/({bottom:1,middle:2}[u]||1)
}r[n?"translateY":"y"]=at(s);
this[this.placed?"animate":"attr"](r);
this.placed=!0;
this.alignAttr=r;
return this
},getBBox:function(){var x=this.bBox,w=this.renderer,v,u,t=this.rotation;
v=this.element;
var s=this.styles,r=t*bC;
u=this.textStr;
var p;
if(u===""||br.test(u)){p=u.length+"|"+s.fontSize+"|"+s.fontFamily,x=w.cache[p]
}if(!x){if(v.namespaceURI===bd||w.forExport){try{x=v.getBBox?ay({},v.getBBox()):{width:v.offsetWidth,height:v.offsetHeight}
}catch(n){}if(!x||x.width<0){x={width:0,height:0}
}}else{x=this.htmlGetBBox()
}if(w.isSVG){v=x.width;
u=x.height;
if(bM&&s&&s.fontSize==="11px"&&u.toPrecision(3)==="16.9"){x.height=u=14
}if(t){x.width=a4(u*a2(r))+a4(v*aU(r)),x.height=a4(u*aU(r))+a4(v*a2(r))
}}this.bBox=x;
p&&(w.cache[p]=x)
}return x
},show:function(){return this.attr({visibility:"visible"})
},hide:function(){return this.attr({visibility:"hidden"})
},fadeOut:function(p){var n=this;
n.animate({opacity:0},{duration:p||150,complete:function(){n.hide()
}})
},add:function(p){var n=this.renderer,w=p||n,v=w.element||n.box,u=v.childNodes,t=this.element,s=au(t,"zIndex"),r;
if(p){this.parentGroup=p
}this.parentInverted=p&&p.inverted;
this.textStr!==void 0&&n.buildText(this);
if(s){w.handleZ=!0,s=ao(s)
}if(w.handleZ){for(w=0;
w<u.length;
w++){if(p=u[w],n=au(p,"zIndex"),p!==t&&(ao(n)>s||!aw(s)&&aw(n))){v.insertBefore(t,p);
r=!0;
break
}}}r||v.appendChild(t);
this.added=!0;
bo(this,"add");
return this
},safeRemoveChild:function(p){var n=p.parentNode;
n&&n.removeChild(p)
},destroy:function(){var p=this,n=p.element||{},u=p.shadows,t=p.renderer.isSVG&&n.nodeName==="SPAN"&&p.parentGroup,s,r;
n.onclick=n.onmouseout=n.onmouseover=n.onmousemove=n.point=null;
bN(p);
if(p.clipPath){p.clipPath=p.clipPath.destroy()
}if(p.stops){for(r=0;
r<p.stops.length;
r++){p.stops[r]=p.stops[r].destroy()
}p.stops=null
}p.safeRemoveChild(n);
for(u&&az(u,function(v){p.safeRemoveChild(v)
});
t&&t.div.childNodes.length===0;
){n=t.parentGroup,p.safeRemoveChild(t.div),delete t.div,t=n
}p.alignTo&&a9(p.renderer.alignedObjects,p);
for(s in p){delete p[s]
}return null
},shadow:function(z,y,x){var w=[],v,u,t=this.element,s,r,p,n;
if(z){r=aC(z.width,3);
p=(z.opacity||0.15)/r;
n=this.parentInverted?"(-1,-1)":"("+aC(z.offsetX,1)+", "+aC(z.offsetY,1)+")";
for(v=1;
v<=r;
v++){u=t.cloneNode(0);
s=r*2+1-2*v;
au(u,{isShadow:"true",stroke:z.color||"black","stroke-opacity":p*v,"stroke-width":s,transform:"translate"+n,fill:aY});
if(x){au(u,"height",ax(au(u,"height")-s,0)),u.cutHeight=s
}y?y.element.appendChild(u):t.parentNode.insertBefore(u,t);
w.push(u)
}this.shadows=w
}return this
}};
var aM=function(){this.init.apply(this,arguments)
};
aM.prototype={Element:aj,init:function(p,n,w,v){var u=location,t,s;
t=this.createElement("svg").attr({version:"1.1"});
s=t.element;
p.appendChild(s);
p.innerHTML.indexOf("xmlns")===-1&&au(s,"xmlns",bd);
this.isSVG=!0;
this.box=s;
this.boxWrapper=t;
this.alignedObjects=[];
this.url=(K||a6)&&ap.getElementsByTagName("base").length?u.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";
this.createElement("desc").add().element.appendChild(ap.createTextNode("Created with Highcharts 3.0.9"));
this.defs=this.createElement("defs").add();
this.forExport=v;
this.gradients={};
this.cache={};
this.setSize(n,w,!1);
var r;
if(K&&p.getBoundingClientRect){this.subPixelFix=n=function(){bl(p,{left:0,top:0});
r=p.getBoundingClientRect();
bl(p,{left:bF(r.left)-r.left+"px",top:bF(r.top)-r.top+"px"})
},n(),bf(bn,"resize",n)
}},isHidden:function(){return !this.boxWrapper.getBBox().width
},destroy:function(){var n=this.defs;
this.box=null;
this.boxWrapper=this.boxWrapper.destroy();
bY(this.gradients||{});
this.gradients=null;
if(n){this.defs=n.destroy()
}this.subPixelFix&&aR(bn,"resize",this.subPixelFix);
return this.alignedObjects=null
},createElement:function(p){var n=new this.Element;
n.init(this,p);
return n
},draw:function(){},buildText:function(D){for(var C=D.element,A=this,z=A.forExport,y=aC(D.textStr,"").toString().replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g),x=C.childNodes,w=/style="([^"]+)"/,v=/href="(http[^"]+)"/,u=au(C,"x"),t=D.styles,s=D.textWidth,r=t&&t.lineHeight,p=x.length,n=function(E){return r?ao(r):A.fontMetrics(/px$/.test(E&&E.style.fontSize)?E.style.fontSize:t.fontSize||11).h
};
p--;
){C.removeChild(x[p])
}s&&!D.added&&this.box.appendChild(C);
y[y.length-1]===""&&y.pop();
az(y,function(I,G){var F,E=0,I=I.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");
F=I.split("|||");
az(F,function(P){if(P!==""||F.length===1){var M={},N=ap.createElementNS(bd,"tspan"),L;
w.test(P)&&(L=P.match(w)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),au(N,"style",L));
v.test(P)&&!z&&(au(N,"onclick",'location.href="'+P.match(v)[1]+'"'),bl(N,{cursor:"pointer"}));
P=(P.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"<").replace(/&gt;/g,">");
if(P!==" "&&(N.appendChild(ap.createTextNode(P)),E?M.dx=0:M.x=u,au(N,M),!E&&G&&(!aT&&z&&bl(N,{display:"block"}),au(N,"dy",n(N),a6&&N.offsetHeight)),C.appendChild(N),E++,s)){for(var P=P.replace(/([^\^])-/g,"$1- ").split(" "),M=P.length>1&&t.whiteSpace!=="nowrap",S,T,Q=D._clipHeight,R=[],J=n(),O=1;
M&&(P.length||R.length);
){delete D.bBox,S=D.getBBox(),T=S.width,!aT&&A.forExport&&(T=A.measureSpanWidth(N.firstChild.data,D.styles)),S=T>s,!S||P.length===1?(P=R,R=[],P.length&&(O++,Q&&O*J>Q?(P=["..."],D.attr("title",D.textStr)):(N=ap.createElementNS(bd,"tspan"),au(N,{dy:J,x:u}),L&&au(N,"style",L),C.appendChild(N),T>s&&(s=T)))):(N.removeChild(N.firstChild),R.unshift(P.pop())),P.length&&N.appendChild(ap.createTextNode(P.join(" ").replace(/- /g,"-")))
}}}})
})
},button:function(J,I,G,F,E,D,C,A,z){var y=this.label(J,I,G,z,null,null,null,null,"button"),x=0,w,v,r,t,u,s,J={x1:0,y1:0,x2:0,y2:1},E=ar({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:J,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},E);
r=E.style;
delete E.style;
D=ar(E,{stroke:"#68A",fill:{linearGradient:J,stops:[[0,"#FFF"],[1,"#ACF"]]}},D);
t=D.style;
delete D.style;
C=ar(E,{stroke:"#68A",fill:{linearGradient:J,stops:[[0,"#9BD"],[1,"#CDF"]]}},C);
u=C.style;
delete C.style;
A=ar(E,{style:{color:"#CCC"}},A);
s=A.style;
delete A.style;
bf(y.element,bM?"mouseover":"mouseenter",function(){x!==3&&y.attr(D).css(t)
});
bf(y.element,bM?"mouseout":"mouseleave",function(){x!==3&&(w=[E,D,C][x],v=[r,t,u][x],y.attr(w).css(v))
});
y.setState=function(n){(y.state=x=n)?n===2?y.attr(C).css(u):n===3&&y.attr(A).css(s):y.attr(E).css(r)
};
return y.on("click",function(){x!==3&&F.call(y)
}).attr(E).css(ay({cursor:"default"},r))
},crispLine:function(p,n){p[1]===p[4]&&(p[1]=p[4]=at(p[1])-n%2/2);
p[2]===p[5]&&(p[2]=p[5]=at(p[2])+n%2/2);
return p
},path:function(p){var n={fill:aY};
ak(p)?n.d=p:aW(p)&&ay(n,p);
return this.createElement("path").attr(n)
},circle:function(p,n,r){p=aW(p)?p:{x:p,y:n,r:r};
return this.createElement("circle").attr(p)
},arc:function(p,n,u,t,s,r){if(aW(p)){n=p.y,u=p.r,t=p.innerR,s=p.start,r=p.end,p=p.x
}p=this.symbol("arc",p||0,n||0,u||0,u||0,{innerR:t||0,start:s||0,end:r||0});
p.r=u;
return p
},rect:function(p,n,u,t,s,r){s=aW(p)?p.r:s;
s=this.createElement("rect").attr({rx:s,ry:s,fill:aY});
return s.attr(aW(p)?p:s.crisp(r,p,n,ax(u,0),ax(t,0)))
},setSize:function(p,n,t){var s=this.alignedObjects,r=s.length;
this.width=p;
this.height=n;
for(this.boxWrapper[aC(t,!0)?"animate":"attr"]({width:p,height:n});
r--;
){s[r].align()
}},g:function(p){var n=this.createElement("g");
return aw(p)?n.attr({"class":"highcharts-"+p}):n
},image:function(p,n,u,t,s){var r={preserveAspectRatio:aY};
arguments.length>1&&ay(r,{x:n,y:u,width:t,height:s});
r=this.createElement("image").attr(r);
r.element.setAttributeNS?r.element.setAttributeNS("http://www.w3.org/1999/xlink","href",p):r.element.setAttribute("hc-svg-href",p);
return r
},symbol:function(z,y,x,w,v,u){var t,s=this.symbols[z],s=s&&s(at(y),at(x),w,v,u),r=/^url\((.*?)\)$/,p,n;
if(s){t=this.path(s),ay(t,{symbolName:z,x:y,y:x,width:w,height:v}),u&&ay(t,u)
}else{if(r.test(z)){n=function(C,A){C.element&&(C.attr({width:A[0],height:A[1]}),C.alignByTranslate||C.translate(at((w-A[0])/2),at((v-A[1])/2)))
},p=z.match(r)[1],z=aJ[p],t=this.image(p).attr({x:y,y:x}),t.isImg=!0,z?n(t,z):(t.attr({width:0,height:0}),aV("img",{onload:function(){n(t,aJ[p]=[this.width,this.height])
},src:p}))
}}return t
},symbols:{circle:function(p,n,t,s){var r=0.166*t;
return["M",p+t/2,n,"C",p+t+r,n,p+t+r,n+s,p+t/2,n+s,"C",p-r,n+s,p-r,n,p+t/2,n,"Z"]
},square:function(p,n,s,r){return["M",p,n,"L",p+s,n,p+s,n+r,p,n+r,"Z"]
},triangle:function(p,n,s,r){return["M",p+s/2,n,"L",p+s,n+r,p,n+r,"Z"]
},"triangle-down":function(p,n,s,r){return["M",p,n,"L",p+s,n,p+s/2,n+r,"Z"]
},diamond:function(p,n,s,r){return["M",p+s/2,n,"L",p+s,n+r/2,p+s/2,n+r,p,n+r/2,"Z"]
},arc:function(z,y,x,w,v){var u=v.start,x=v.r||x||w,t=v.end-0.001,w=v.innerR,s=v.open,r=aU(u),p=a2(u),n=aU(t),t=a2(t),v=v.end-u<bR?0:1;
return["M",z+x*r,y+x*p,"A",x,x,0,v,1,z+x*n,y+x*t,s?"M":"L",z+w*n,y+w*t,"A",w,w,0,v,0,z+w*r,y+w*p,s?"":"Z"]
}},clipRect:function(p,n,u,t){var s="highcharts-"+aL++,r=this.createElement("clipPath").attr({id:s}).add(this.defs),p=this.rect(p,n,u,t,0).add(r);
p.id=s;
p.clipPath=r;
return p
},color:function(D,C,A){var z=this,y,x=/^rgba/,w,v,u,t,s,r,p,n=[];
D&&D.linearGradient?w="linearGradient":D&&D.radialGradient&&(w="radialGradient");
if(w){A=D[w];
v=z.gradients;
t=D.stops;
C=C.radialReference;
ak(A)&&(D[w]=A={x1:A[0],y1:A[1],x2:A[2],y2:A[3],gradientUnits:"userSpaceOnUse"});
w==="radialGradient"&&C&&!aw(A.gradientUnits)&&(A=ar(A,{cx:C[0]-C[2]/2+A.cx*C[2],cy:C[1]-C[2]/2+A.cy*C[2],r:A.r*C[2],gradientUnits:"userSpaceOnUse"}));
for(p in A){p!=="id"&&n.push(p,A[p])
}for(p in t){n.push(t[p])
}n=n.join(",");
v[n]?D=v[n].id:(A.id=D="highcharts-"+aL++,v[n]=u=z.createElement(w).attr(A).add(z.defs),u.stops=[],az(t,function(E){x.test(E[1])?(y=bq(E[1]),s=y.get("rgb"),r=y.get("a")):(s=E[1],r=1);
E=z.createElement("stop").attr({offset:E[0],"stop-color":s,"stop-opacity":r}).add(u);
u.stops.push(E)
}));
return"url("+z.url+"#"+D+")"
}else{return x.test(D)?(y=bq(D),au(C,A+"-opacity",y.get("a")),y.get("rgb")):(C.removeAttribute(A+"-opacity"),D)
}},text:function(p,n,u,t){var s=be.chart.style,r=ac||!aT&&this.forExport;
if(t&&!this.forExport){return this.html(p,n,u)
}n=at(aC(n,0));
u=at(aC(u,0));
p=this.createElement("text").attr({x:n,y:u,text:p}).css({fontFamily:s.fontFamily,fontSize:s.fontSize});
r&&p.css({position:"absolute"});
p.x=n;
p.y=u;
return p
},fontMetrics:function(p){var p=ao(p||11),p=p<24?p+4:at(p*1.2),n=at(p*0.8);
return{h:p,b:n}
},label:function(ba,ab,aa,Y,X,V,U,T,S){function R(){var s,n;
s=M.element.style;
r=(p===void 0||t===void 0||L.styles.textAlign)&&M.getBBox();
L.width=(p||r.width||0)+2*w+N;
L.height=(t||r.height||0)+2*w;
u=w+J.fontMetrics(s&&s.fontSize).b;
if(C){if(!D){s=at(-G*w),n=T?-u:0,L.box=D=Y?J.symbol(Y,s,n,L.width,L.height,E):J.rect(s,n,L.width,L.height,0,E[k]),D.add(L)
}D.isImg||D.attr(ar({width:L.width,height:L.height},E));
E=null
}}function Q(){var s=L.styles,s=s&&s.textAlign,n=N+w*(1-G),v;
v=T?0:u;
if(aw(p)&&(s==="center"||s==="right")){n+={center:0.5,right:1}[s]*(p-r.width)
}(n!==M.x||v!==M.y)&&M.attr({x:n,y:v});
M.x=n;
M.y=v
}function P(s,n){D?D.attr(s,n):E[s]=n
}function O(){M.add(L);
L.attr({text:ba,x:ab,y:aa});
D&&aw(X)&&L.attr({anchorX:X,anchorY:V})
}var J=this,L=J.g(S),M=J.text("",0,0,U).attr({zIndex:1}),D,r,G=0,w=3,N=0,p,t,F,A,I=0,E={},u,U=L.attrSetters,C;
bf(L,"add",O);
U.width=function(n){p=n;
return !1
};
U.height=function(n){t=n;
return !1
};
U.padding=function(n){aw(n)&&n!==w&&(w=n,Q());
return !1
};
U.paddingLeft=function(n){aw(n)&&n!==N&&(N=n,Q());
return !1
};
U.align=function(n){G={left:0,center:0.5,right:1}[n];
return !1
};
U.text=function(s,n){M.attr(n,s);
R();
Q();
return !1
};
U[k]=function(s,n){C=!0;
I=s%2/2;
P(n,s);
return !1
};
U.stroke=U.fill=U.r=function(s,n){n==="fill"&&(C=!0);
P(n,s);
return !1
};
U.anchorX=function(s,n){X=s;
P(n,s+I-F);
return !1
};
U.anchorY=function(s,n){V=s;
P(n,s-A);
return !1
};
U.x=function(n){L.x=n;
n-=G*((p||r.width)+w);
F=at(n);
L.attr("translateX",F);
return !1
};
U.y=function(n){A=L.y=at(n);
L.attr("translateY",A);
return !1
};
var x=L.css;
return ay(L,{css:function(s){if(s){var n={},s=ar(s);
az("fontSize,fontWeight,fontFamily,color,lineHeight,width,textDecoration,textShadow".split(","),function(v){s[v]!==av&&(n[v]=s[v],delete s[v])
});
M.css(n)
}return x.call(L,s)
},getBBox:function(){return{width:r.width+2*w,height:r.height+2*w,x:r.x-w,y:r.y-w}
},shadow:function(n){D&&D.shadow(n);
return L
},destroy:function(){aR(L,"add",O);
aR(L.element,"mouseenter");
aR(L.element,"mouseleave");
M&&(M=M.destroy());
D&&(D=D.destroy());
aj.prototype.destroy.call(L);
L=J=R=Q=P=O=null
}})
}};
d=aM;
ay(aj.prototype,{htmlCss:function(p){var n=this.element;
if(n=p&&n.tagName==="SPAN"&&p.width){delete p.width,this.textWidth=n,this.updateTransform()
}this.styles=ay(this.styles,p);
bl(this.element,p);
return this
},htmlGetBBox:function(){var p=this.element,n=this.bBox;
if(!n){if(p.nodeName==="text"){p.style.position="absolute"
}n=this.bBox={x:p.offsetLeft,y:p.offsetTop,width:p.offsetWidth,height:p.offsetHeight}
}return n
},htmlUpdateTransform:function(){if(this.added){var C=this.renderer,A=this.element,z=this.translateX||0,y=this.translateY||0,x=this.x||0,w=this.y||0,v=this.textAlign||"left",u={left:0,center:0.5,right:1}[v],t=this.shadows;
bl(A,{marginLeft:z,marginTop:y});
t&&az(t,function(D){bl(D,{marginLeft:z+1,marginTop:y+1})
});
this.inverted&&az(A.childNodes,function(D){C.invertChild(D,A)
});
if(A.tagName==="SPAN"){var s=this.rotation,r,p=ao(this.textWidth),n=[s,v,A.innerHTML,this.textWidth].join(",");
if(n!==this.cTT){r=C.fontMetrics(A.style.fontSize).b;
aw(s)&&this.setSpanRotation(s,u,r);
t=aC(this.elemWidth,A.offsetWidth);
if(t>p&&/[ \-]/.test(A.textContent||A.innerText)){bl(A,{width:p+"px",display:"block",whiteSpace:"normal"}),t=p
}this.getSpanCorrection(t,r,u,s,v)
}bl(A,{left:x+(this.xCorr||0)+"px",top:w+(this.yCorr||0)+"px"});
if(a6){r=A.offsetHeight
}this.cTT=n
}}else{this.alignOnAdd=!0
}},setSpanRotation:function(p,n,t){var s={},r=bM?"-ms-transform":a6?"-webkit-transform":K?"MozTransform":bE?"-o-transform":"";
s[r]=s.transform="rotate("+p+"deg)";
s[r+(K?"Origin":"-origin")]=n*100+"% "+t+"px";
bl(this.element,s)
},getSpanCorrection:function(p,n,r){this.xCorr=-p*r;
this.yCorr=-n
}});
ay(aM.prototype,{html:function(p,n,w){var v=be.chart.style,u=this.createElement("span"),t=u.attrSetters,s=u.element,r=u.renderer;
t.text=function(x){x!==s.innerHTML&&delete this.bBox;
s.innerHTML=x;
return !1
};
t.x=t.y=t.align=t.rotation=function(y,x){x==="align"&&(x="textAlign");
u[x]=y;
u.htmlUpdateTransform();
return !1
};
u.attr({text:p,x:at(n),y:at(w)}).css({position:"absolute",whiteSpace:"nowrap",fontFamily:v.fontFamily,fontSize:v.fontSize});
u.css=u.htmlCss;
if(r.isSVG){u.add=function(y){var x,A=r.box.parentNode,z=[];
if(this.parentGroup=y){if(x=y.div,!x){for(;
y;
){z.push(y),y=y.parentGroup
}az(z.reverse(),function(C){var D;
x=C.div=C.div||aV(bU,{className:au(C.element,"class")},{position:"absolute",left:(C.translateX||0)+"px",top:(C.translateY||0)+"px"},x||A);
D=x.style;
ay(C.attrSetters,{translateX:function(E){D.left=E+"px"
},translateY:function(E){D.top=E+"px"
},visibility:function(F,E){D[E]=F
}})
})
}}else{x=A
}x.appendChild(s);
u.added=!0;
u.alignOnAdd&&u.htmlUpdateTransform();
return u
}
}return u
}});
var aX;
if(!aT&&!ac){Highcharts.VMLElement=aX={init:function(p,n){var t=["<",n,' filled="f" stroked="f"'],s=["position: ","absolute",";"],r=n===bU;
(n==="shape"||r)&&s.push("left:0;top:0;width:1px;height:1px;");
s.push("visibility: ",r?"hidden":"visible");
t.push(' style="',s.join(""),'"/>');
if(n){t=r||n==="span"||n==="img"?t.join(""):p.prepVML(t),this.element=aV(t)
}this.renderer=p;
this.attrSetters={}
},add:function(p){var n=this.renderer,s=this.element,r=n.box,r=p?p.element||p:r;
p&&p.inverted&&n.invertChild(s,r);
r.appendChild(s);
this.added=!0;
this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();
bo(this,"add");
return this
},updateTransform:aj.prototype.htmlUpdateTransform,setSpanRotation:function(){var p=this.rotation,n=aU(p*bC),r=a2(p*bC);
bl(this.element,{filter:p?["progid:DXImageTransform.Microsoft.Matrix(M11=",n,", M12=",-r,", M21=",r,", M22=",n,", sizingMethod='auto expand')"].join(""):aY})
},getSpanCorrection:function(x,w,v,u,t){var s=u?aU(u*bC):1,r=u?a2(u*bC):0,p=aC(this.elemHeight,this.element.offsetHeight),n;
this.xCorr=s<0&&-x;
this.yCorr=r<0&&-p;
n=s*r<0;
this.xCorr+=r*w*(n?1-v:v);
this.yCorr-=s*w*(u?n?v:1-v:1);
t&&t!=="left"&&(this.xCorr-=x*v*(s<0?-1:1),u&&(this.yCorr-=p*v*(r<0?-1:1)),bl(this.element,{textAlign:t}))
},pathToVML:function(p){for(var n=p.length,r=[];
n--;
){if(B(p[n])){r[n]=at(p[n]*10)-5
}else{if(p[n]==="Z"){r[n]="x"
}else{if(r[n]=p[n],p.isArc&&(p[n]==="wa"||p[n]==="at")){r[n+5]===r[n+7]&&(r[n+7]+=p[n+7]>p[n+5]?1:-1),r[n+6]===r[n+8]&&(r[n+8]+=p[n+8]>p[n+6]?1:-1)
}}}}return r.join(" ")||"x"
},attr:function(E,D){var C,A,z,y=this.element||{},x=y.style,w=y.nodeName,v=this.renderer,u=this.symbolName,t,s=this.shadows,r,n=this.attrSetters,p=this;
bQ(E)&&aw(D)&&(C=E,E={},E[C]=D);
if(bQ(E)){C=E,p=C==="strokeWidth"||C==="stroke-width"?this.strokeweight:this[C]
}else{for(C in E){if(A=E[C],r=!1,z=n[C]&&n[C].call(this,A,C),z!==!1&&A!==null){z!==av&&(A=z);
if(u&&/^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(C)){t||(this.symbolAttr(E),t=!0),r=!0
}else{if(C==="d"){A=A||[];
this.d=A.join(" ");
y.path=A=this.pathToVML(A);
if(s){for(z=s.length;
z--;
){s[z].path=s[z].cutOff?this.cutOffPath(A,s[z].cutOff):A
}}r=!0
}else{if(C==="visibility"){if(s){for(z=s.length;
z--;
){s[z].style[C]=A
}}w==="DIV"&&(A=A==="hidden"?"-999em":0,bz||(x[C]=A?"visible":"hidden"),C="top");
x[C]=A;
r=!0
}else{if(C==="zIndex"){A&&(x[C]=A),r=!0
}else{if(bH(C,["x","y","width","height"])!==-1){this[C]=A,C==="x"||C==="y"?C={x:"left",y:"top"}[C]:A=ax(0,A),this.updateClipping?(this[C]=A,this.updateClipping()):x[C]=A,r=!0
}else{if(C==="class"&&w==="DIV"){y.className=A
}else{if(C==="stroke"){A=v.color(A,y,C),C="strokecolor"
}else{if(C==="stroke-width"||C==="strokeWidth"){y.stroked=A?!0:!1,C="strokeweight",this[C]=A,B(A)&&(A+="px")
}else{if(C==="dashstyle"){(y.getElementsByTagName("stroke")[0]||aV(v.prepVML(["<stroke/>"]),null,null,y))[C]=A||"solid",this.dashstyle=A,r=!0
}else{if(C==="fill"){if(w==="SPAN"){x.color=A
}else{if(w!=="IMG"){y.filled=A!==aY?!0:!1,A=v.color(A,y,C,this),C="fillcolor"
}}}else{if(C==="opacity"){r=!0
}else{if(w==="shape"&&C==="rotation"){this[C]=y.style[C]=A,y.style.left=-at(a2(A*bC)+1)+"px",y.style.top=at(aU(A*bC))+"px"
}else{if(C==="translateX"||C==="translateY"||C==="rotation"){this[C]=A,this.updateTransform(),r=!0
}}}}}}}}}}}}}r||(bz?y[C]=A:au(y,C,A))
}}}return p
},clip:function(p){var n=this,r;
p?(r=p.members,a9(r,n),r.push(n),n.destroyClip=function(){a9(r,n)
},p=p.getCSS(n)):(n.destroyClip&&n.destroyClip(),p={clip:bz?"inherit":"rect(auto)"});
return n.css(p)
},css:aj.prototype.htmlCss,safeRemoveChild:function(n){n.parentNode&&bJ(n)
},destroy:function(){this.destroyClip&&this.destroyClip();
return aj.prototype.destroy.apply(this)
},on:function(p,n){this.element["on"+p]=function(){var r=bn.event;
r.target=r.srcElement;
n(r)
};
return this
},cutOffPath:function(p,n){var r,p=p.split(/[ ,]/);
r=p.length;
if(r===9||r===11){p[r-4]=p[r-2]=ao(p[r-2])-10*n
}return p.join(" ")
},shadow:function(E,D,C){var A=[],z,y=this.element,x=this.renderer,w,v=y.style,u,t=y.path,s,r,n,p;
t&&typeof t.value!=="string"&&(t="x");
r=t;
if(E){n=aC(E.width,3);
p=(E.opacity||0.15)/n;
for(z=1;
z<=3;
z++){s=n*2+1-2*z;
C&&(r=this.cutOffPath(t.value,s+0.5));
u=['<shape isShadow="true" strokeweight="',s,'" filled="false" path="',r,'" coordsize="10 10" style="',y.style.cssText,'" />'];
w=aV(x.prepVML(u),null,{left:ao(v.left)+aC(E.offsetX,1),top:ao(v.top)+aC(E.offsetY,1)});
if(C){w.cutOff=s+1
}u=['<stroke color="',E.color||"black",'" opacity="',p*z,'"/>'];
aV(x.prepVML(u),null,null,w);
D?D.element.appendChild(w):y.parentNode.insertBefore(w,y);
A.push(w)
}this.shadows=A
}return this
}};
aX=aF(aj,aX);
var a={Element:aX,isIE8:bX.indexOf("MSIE 8.0")>-1,init:function(p,n,u){var t,s;
this.alignedObjects=[];
t=this.createElement(bU);
s=t.element;
s.style.position="relative";
p.appendChild(t.element);
this.isVML=!0;
this.box=s;
this.boxWrapper=t;
this.cache={};
this.setSize(n,u,!1);
if(!ap.namespaces.hcv){ap.namespaces.add("hcv","urn:schemas-microsoft-com:vml");
try{ap.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
}catch(r){ap.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
}}},isHidden:function(){return !this.box.offsetWidth
},clipRect:function(p,n,u,t){var s=this.createElement(),r=aW(p);
return ay(s,{members:[],left:(r?p.x:p)+1,top:(r?p.y:n)+1,width:(r?p.width:u)-1,height:(r?p.height:t)-1,getCSS:function(w){var v=w.element,A=v.nodeName,w=w.inverted,z=this.top-(A==="shape"?v.offsetTop:0),y=this.left,v=y+this.width,x=z+this.height,z={clip:"rect("+at(w?y:z)+"px,"+at(w?x:v)+"px,"+at(w?v:x)+"px,"+at(w?z:y)+"px)"};
!w&&bz&&A==="DIV"&&ay(z,{width:v+"px",height:x+"px"});
return z
},updateClipping:function(){az(s.members,function(v){v.css(s.getCSS(v))
})
}})
},color:function(bb,ba,ab,aa){var Y=this,X,V=/^rgba/,U,T,S=aY;
bb&&bb.linearGradient?T="gradient":bb&&bb.radialGradient&&(T="pattern");
if(T){var R,Q,P=bb.linearGradient||bb.radialGradient,M,N,O,C,I,G="",bb=bb.stops,E,A=[],J=function(){U=['<fill colors="'+A.join(",")+'" opacity="',O,'" o:opacity2="',N,'" type="',T,'" ',G,'focus="100%" method="any" />'];
aV(Y.prepVML(U),null,null,ba)
};
M=bb[0];
E=bb[bb.length-1];
M[0]>0&&bb.unshift([0,M[1]]);
E[0]<1&&bb.push([1,E[1]]);
az(bb,function(r,n){V.test(r[1])?(X=bq(r[1]),R=X.get("rgb"),Q=X.get("a")):(R=r[1],Q=1);
A.push(r[0]*100+"% "+R);
n?(O=Q,C=R):(N=Q,I=R)
});
if(ab==="fill"){if(T==="gradient"){ab=P.x1||P[0]||0,bb=P.y1||P[1]||0,M=P.x2||P[2]||0,P=P.y2||P[3]||0,G='angle="'+(90-a0.atan((P-bb)/(M-ab))*180/bR)+'"',J()
}else{var S=P.r,p=S*2,F=S*2,D=P.cx,L=P.cy,z=ba.radialReference,y,S=function(){z&&(y=aa.getBBox(),D+=(z[0]-y.x)/y.width-0.5,L+=(z[1]-y.y)/y.height-0.5,p*=z[2]/y.width,F*=z[2]/y.height);
G='src="'+be.global.VMLRadialGradientURL+'" size="'+p+","+F+'" origin="0.5,0.5" position="'+D+","+L+'" color2="'+I+'" ';
J()
};
aa.added?S():bf(aa,"add",S);
S=C
}}else{S=R
}}else{if(V.test(bb)&&ba.tagName!=="IMG"){X=bq(bb),U=["<",ab,' opacity="',X.get("a"),'"/>'],aV(this.prepVML(U),null,null,ba),S=X.get("rgb")
}else{S=ba.getElementsByTagName(ab);
if(S.length){S[0].opacity=1,S[0].type="solid"
}S=bb
}}return S
},prepVML:function(p){var n=this.isIE8,p=p.join("");
n?(p=p.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),p=p.indexOf('style="')===-1?p.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):p.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):p=p.replace("<","<hcv:");
return p
},text:aM.prototype.html,path:function(p){var n={coordsize:"10 10"};
ak(p)?n.d=p:aW(p)&&ay(n,p);
return this.createElement("shape").attr(n)
},circle:function(p,n,s){var r=this.symbol("circle");
if(aW(p)){s=p.r,n=p.y,p=p.x
}r.isCircle=!0;
r.r=s;
return r.attr({x:p,y:n})
},g:function(p){var n;
p&&(n={className:"highcharts-"+p,"class":"highcharts-"+p});
return this.createElement(bU).attr(n)
},image:function(p,n,u,t,s){var r=this.createElement("img").attr({src:p});
arguments.length>1&&r.attr({x:n,y:u,width:t,height:s});
return r
},rect:function(p,n,v,u,t,s){var r=this.symbol("rect");
r.r=aW(p)?p.r:t;
return r.attr(aW(p)?p:r.crisp(s,p,n,ax(v,0),ax(u,0)))
},invertChild:function(p,n){var r=n.style;
bl(p,{flip:"x",left:ao(r.width)-1,top:ao(r.height)-1,rotation:-90})
},symbols:{arc:function(z,y,x,w,v){var u=v.start,t=v.end,s=v.r||x||w,x=v.innerR,w=aU(u),r=a2(u),p=aU(t),n=a2(t);
if(t-u===0){return["x"]
}u=["wa",z-s,y-s,z+s,y+s,z+s*w,y+s*r,z+s*p,y+s*n];
v.open&&!x&&u.push("e","M",z,y);
u.push("at",z-x,y-x,z+x,y+x,z+x*p,y+x*n,z+x*w,y+x*r,"x","e");
u.isArc=!0;
return u
},circle:function(p,n,t,s,r){r&&(t=s=2*r.r);
r&&r.isCircle&&(p-=t/2,n-=s/2);
return["wa",p,n,p+t,n+s,p+t,n+s/2,p+t,n+s/2,"e"]
},rect:function(p,n,w,v,u){var t=p+w,s=n+v,r;
!aw(u)||!u.r?t=aM.prototype.symbols.square.apply(0,arguments):(r=bc(u.r,w,v),t=["M",p+r,n,"L",t-r,n,"wa",t-2*r,n,t,n+2*r,t-r,n,t,n+r,"L",t,s-r,"wa",t-2*r,s-2*r,t,s,t,s-r,t-r,s,"L",p+r,s,"wa",p,s-2*r,p+2*r,s,p+r,s,p,s-r,"L",p,n+r,"wa",p,n,p+2*r,n+2*r,p,n+r,p+r,n,"x","e"]);
return t
}}};
Highcharts.VMLRenderer=aX=function(){this.init.apply(this,arguments)
};
aX.prototype=ar(aM.prototype,a);
d=aX
}aM.prototype.measureSpanWidth=function(p,n){var s=ap.createElement("span"),r;
r=ap.createTextNode(p);
s.appendChild(r);
bl(s,n);
this.box.appendChild(s);
r=s.offsetWidth;
bJ(s);
return r
};
var bW;
if(ac){Highcharts.CanVGRenderer=aX=function(){bd="http://www.w3.org/1999/xhtml"
},aX.prototype.symbols={},bW=function(){function p(){var r=n.length,s;
for(s=0;
s<r;
s++){n[s]()
}n=[]
}var n=[];
return{push:function(s,r){n.length===0&&aN(r,p);
n.push(s)
}}
}(),d=aX
}an.prototype={addLabel:function(){var C=this.axis,A=C.options,z=C.chart,y=C.horiz,x=C.categories,w=C.names,v=this.pos,u=A.labels,t=C.tickPositions,y=y&&x&&!u.step&&!u.staggerLines&&!u.rotation&&z.plotWidth/t.length||!y&&(z.margin[3]||z.chartWidth*0.33),s=v===t[0],r=v===t[t.length-1],p,w=x?aC(x[v],w[v],v):v,x=this.label,n=t.info;
C.isDatetimeAxis&&n&&(p=A.dateTimeLabelFormats[n.higherRanks[v]||n.unitName]);
this.isFirst=s;
this.isLast=r;
A=C.labelFormatter.call({axis:C,chart:z,isFirst:s,isLast:r,dateTimeLabelFormat:p,value:C.isLog?by(bB(w)):w});
v=y&&{width:ax(1,at(y-2*(u.padding||10)))+"px"};
v=ay(v,u.style);
if(aw(x)){x&&x.attr({text:A}).css(v)
}else{p={align:C.labelAlign};
if(B(u.rotation)){p.rotation=u.rotation
}if(y&&u.ellipsis){p._clipHeight=C.len/t.length
}this.label=aw(A)&&u.enabled?z.renderer.text(A,0,0,u.useHTML).attr(p).css(v).add(C.labelGroup):null
}},getLabelSize:function(){var p=this.label,n=this.axis;
return p?p.getBBox()[n.horiz?"height":"width"]:0
},getLabelSides:function(){var p=this.label.getBBox(),n=this.axis,s=n.horiz,r=n.options.labels,p=s?p.width:p.height,n=s?p*{left:0,center:0.5,right:1}[n.labelAlign]-r.x:p;
return[-n,p-n]
},handleOverflow:function(I,G){var r;
var F=!0,E=this.axis,D=this.isFirst,C=this.isLast,A=E.horiz?G.x:G.y,z=E.reversed,y=E.tickPositions,x=this.getLabelSides(),w=x[0],x=x[1],v=E.pos,u=v+E.len,p=this.label.line||0,s=E.labelEdge,t=E.justifyLabels&&(D||C);
s[p]===av||A+w>s[p]?s[p]=A+x:t||(F=!1);
if(t){r=(E=E.ticks[y[I+(D?1:-1)]])&&E.label.xy&&E.label.xy.x+E.getLabelSides()[D?0:1],y=r,D&&!z||C&&z?A+w<v&&(A=v-w,E&&A+x>y&&(F=!1)):A+x>u&&(A=u-x,E&&A+w<y&&(F=!1)),G.x=A
}return F
},getPosition:function(p,n,v,u){var t=this.axis,s=t.chart,r=u&&s.oldChartHeight||s.chartHeight;
return{x:p?t.translate(n+v,null,null,u)+t.transB:t.left+t.offset+(t.opposite?(u&&s.oldChartWidth||s.chartWidth)-t.right-t.left:0),y:p?r-t.bottom+t.offset-(t.opposite?t.height:0):r-t.translate(n+v,null,null,u)-t.transB}
},getLabelPosition:function(D,C,A,z,y,x,w,v){var u=this.axis,t=u.transA,s=u.reversed,r=u.staggerLines,p=u.chart.renderer.fontMetrics(y.style.fontSize).b,n=y.rotation,D=D+y.x-(x&&z?x*t*(s?-1:1):0),C=C+y.y-(x&&!z?x*t*(s?1:-1):0);
n&&u.side===2&&(C-=p-p*aU(n*bC));
!aw(y.y)&&!n&&(C+=p-A.getBBox().height/2);
if(r){A.line=w/(v||1)%r,C+=A.line*(u.labelOffset/r)
}return{x:D,y:C}
},getMarkPath:function(p,n,u,t,s,r){return r.crispLine(["M",p,n,"L",p+(s?0:-u),n+(s?u:0)],t)
},render:function(ab,aa,Y){var X=this.axis,V=X.options,U=X.chart.renderer,T=X.horiz,S=this.type,R=this.label,Q=this.pos,P=V.labels,O=this.gridLine,N=S?S+"Grid":"grid",J=S?S+"Tick":"tick",M=V[N+"LineWidth"],L=V[N+"LineColor"],C=V[N+"LineDashStyle"],F=V[J+"Length"],N=V[J+"Width"]||0,E=V[J+"Color"],A=V[J+"Position"],J=this.mark,G=P.step,n=!0,z=X.tickmarkOffset,D=this.getPosition(T,Q,z,aa),u=D.x,D=D.y,I=T&&u===X.pos+X.len||!T&&D===X.pos?-1:1;
this.isActive=!0;
if(M){Q=X.getPlotLinePath(Q+z,M*I,aa,!0);
if(O===av){O={stroke:L,"stroke-width":M};
if(C){O.dashstyle=C
}if(!S){O.zIndex=1
}if(aa){O.opacity=0
}this.gridLine=O=M?U.path(Q).attr(O).add(X.gridGroup):null
}if(!aa&&O&&Q){O[this.isNew?"attr":"animate"]({d:Q,opacity:Y})
}}if(N&&F){A==="inside"&&(F=-F),X.opposite&&(F=-F),S=this.getMarkPath(u,D,F,N*I,T,U),J?J.animate({d:S,opacity:Y}):this.mark=U.path(S).attr({stroke:E,"stroke-width":N,opacity:Y}).add(X.axisGroup)
}if(R&&!isNaN(u)){R.xy=D=this.getLabelPosition(u,D,R,T,P,z,ab,G),this.isFirst&&!this.isLast&&!aC(V.showFirstLabel,1)||this.isLast&&!this.isFirst&&!aC(V.showLastLabel,1)?n=!1:!X.isRadial&&!P.step&&!P.rotation&&!aa&&Y!==0&&(n=this.handleOverflow(ab,D)),G&&ab%G&&(n=!1),n&&!isNaN(D.y)?(D.opacity=Y,R[this.isNew?"attr":"animate"](D),this.isNew=!1):R.attr("y",-9999)
}},destroy:function(){bY(this,this.axis)
}};
var bK=function(p,n){this.axis=p;
if(n){this.options=n,this.id=n.id
}};
bK.prototype={render:function(){var P=this,O=P.axis,N=O.horiz,M=(O.pointRange||0)/2,L=P.options,J=L.label,I=P.label,G=L.width,F=L.to,E=L.from,D=aw(E)&&aw(F),C=L.value,A=L.dashStyle,x=P.svgElem,z=[],y,s=L.color,n=L.zIndex,v=L.events,t=O.chart.renderer;
O.isLog&&(E=c(E),F=c(F),C=c(C));
if(G){if(z=O.getPlotLinePath(C,G),M={stroke:s,"stroke-width":G},A){M.dashstyle=A
}}else{if(D){if(E=ax(E,O.min-M),F=bc(F,O.max+M),z=O.getPlotBandPath(E,F,L),M={fill:s},L.borderWidth){M.stroke=L.borderColor,M["stroke-width"]=L.borderWidth
}}else{return
}}if(aw(n)){M.zIndex=n
}if(x){if(z){x.animate({d:z},null,x.onGetPath)
}else{if(x.hide(),x.onGetPath=function(){x.show()
},I){P.label=I=I.destroy()
}}}else{if(z&&z.length&&(P.svgElem=x=t.path(z).attr(M).add(),v)){for(y in L=function(p){x.on(p,function(r){v[p].apply(P,[r])
})
},v){L(y)
}}}if(J&&aw(J.text)&&z&&z.length&&O.width>0&&O.height>0){J=ar({align:N&&D&&"center",x:N?!D&&4:10,verticalAlign:!N&&D&&"middle",y:N?D?16:10:D?6:-4,rotation:N&&!D&&90},J);
if(!I){P.label=I=t.text(J.text,0,0,J.useHTML).attr({align:J.textAlign||J.align,rotation:J.rotation,zIndex:n}).css(J.style).add()
}O=[z[1],z[4],aC(z[6],z[1])];
z=[z[2],z[5],aC(z[7],z[2])];
N=m(O);
D=m(z);
I.align(J,!1,{x:N,y:D,width:bv(O)-N,height:bv(z)-D});
I.show()
}else{I&&I.hide()
}return P
},destroy:function(){a9(this.axis.plotLinesAndBands,this);
delete this.axis;
bY(this)
}};
l.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#C0C0C0",labels:a7,lineColor:"#C0D0E0",lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:5,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#4d759e",fontWeight:"bold"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:!0,tickWidth:0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return aG(this.total,-1)
},style:a7.style}},defaultLeftAxisOptions:{labels:{x:-8,y:null},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:8,y:null},title:{rotation:90}},defaultBottomAxisOptions:{labels:{x:0,y:14},title:{rotation:0}},defaultTopAxisOptions:{labels:{x:0,y:-5},title:{rotation:0}},init:function(p,n){var u=n.isX;
this.horiz=p.inverted?!u:u;
this.coll=(this.isXAxis=u)?"xAxis":"yAxis";
this.opposite=n.opposite;
this.side=n.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);
this.setOptions(n);
var t=this.options,s=t.type;
this.labelFormatter=t.labels.formatter||this.defaultLabelFormatter;
this.userOptions=n;
this.minPixelPadding=0;
this.chart=p;
this.reversed=t.reversed;
this.zoomEnabled=t.zoomEnabled!==!1;
this.categories=t.categories||s==="category";
this.names=[];
this.isLog=s==="logarithmic";
this.isDatetimeAxis=s==="datetime";
this.isLinked=aw(t.linkedTo);
this.tickmarkOffset=this.categories&&t.tickmarkPlacement==="between"?0.5:0;
this.ticks={};
this.labelEdge=[];
this.minorTicks={};
this.plotLinesAndBands=[];
this.alternateBands={};
this.len=0;
this.minRange=this.userMinRange=t.minRange||t.maxZoom;
this.range=t.range;
this.offset=t.offset||0;
this.stacks={};
this.oldStacks={};
this.stackExtremes={};
this.min=this.max=null;
this.crosshair=aC(t.crosshair,af(p.options.tooltip.crosshairs)[u?0:1],!1);
var r,t=this.options.events;
bH(this,p.axes)===-1&&(p.axes.push(this),p[this.coll].push(this));
this.series=this.series||[];
if(p.inverted&&u&&this.reversed===av){this.reversed=!0
}this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;
for(r in t){bf(this,r,t[r])
}if(this.isLog){this.val2lin=c,this.lin2val=bB
}},setOptions:function(n){this.options=ar(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],ar(be[this.coll],n))
},defaultLabelFormatter:function(){var p=this.axis,n=this.value,w=p.categories,v=this.dateTimeLabelFormat,u=be.lang.numericSymbols,t=u&&u.length,s,r=p.options.labels.format,p=p.isLog?n:p.tickInterval;
if(r){s=i(r,this)
}else{if(w){s=n
}else{if(v){s=bx(v,n)
}else{if(t&&p>=1000){for(;
t--&&s===av;
){w=Math.pow(1000,t+1),p>=w&&u[t]!==null&&(s=aG(n/w,-1)+u[t])
}}}}}s===av&&(s=n>=10000?aG(n,0):aG(n,-1,av,""));
return s
},getSeriesExtremes:function(){var p=this,n=p.chart;
p.hasVisibleSeries=!1;
p.dataMin=p.dataMax=null;
p.stackExtremes={};
p.buildStacks();
az(p.series,function(t){if(t.visible||!n.options.chart.ignoreHiddenSeries){var s;
s=t.options.threshold;
var r;
p.hasVisibleSeries=!0;
p.isLog&&s<=0&&(s=null);
if(p.isXAxis){if(s=t.xData,s.length){p.dataMin=bc(aC(p.dataMin,s[0]),m(s)),p.dataMax=ax(aC(p.dataMax,s[0]),bv(s))
}}else{t.getExtremes();
r=t.dataMax;
t=t.dataMin;
if(aw(t)&&aw(r)){p.dataMin=bc(aC(p.dataMin,t),t),p.dataMax=ax(aC(p.dataMax,r),r)
}if(aw(s)){if(p.dataMin>=s){p.dataMin=s,p.ignoreMinPadding=!0
}else{if(p.dataMax<s){p.dataMax=s,p.ignoreMaxPadding=!0
}}}}}})
},translate:function(z,y,x,w,v,u){var t=this.len,s=1,r=0,p=w?this.oldTransA:this.transA,w=w?this.oldMin:this.min,n=this.minPixelPadding,v=(this.options.ordinal||this.isLog&&v)&&this.lin2val;
if(!p){p=this.transA
}x&&(s*=-1,r=t);
this.reversed&&(s*=-1,r-=s*t);
y?(z=z*s+r,z-=n,z=z/p+w,v&&(z=this.lin2val(z))):(v&&(z=this.val2lin(z)),u==="between"&&(u=0.5),z=s*(z-w)*p+r+s*n+(B(u)?p*u*this.pointRange:0));
return z
},toPixels:function(p,n){return this.translate(p,!1,!this.horiz,null,!0)+(n?0:this.pos)
},toValue:function(p,n){return this.translate(p-(n?0:this.pos),!0,!this.horiz,null,!0)
},getPlotLinePath:function(C,A,z,y,x){var w=this.chart,v=this.left,u=this.top,t,s,r=z&&w.oldChartHeight||w.chartHeight,p=z&&w.oldChartWidth||w.chartWidth,n;
t=this.transB;
x=aC(x,this.translate(C,null,null,z));
C=z=at(x+t);
t=s=at(r-x-t);
if(isNaN(x)){n=!0
}else{if(this.horiz){if(t=u,s=r-this.bottom,C<v||C>v+this.width){n=!0
}}else{if(C=v,z=p-this.right,t<u||t>u+this.height){n=!0
}}}return n&&!y?null:w.renderer.crispLine(["M",C,t,"L",z,s],A||1)
},getLinearTickPositions:function(p,n,t){for(var s,n=by(a3(n/p)*p),t=by(bF(t/p)*p),r=[];
n<=t;
){r.push(n);
n=by(n+p);
if(n===s){break
}s=n
}return r
},getMinorTickPositions:function(){var p=this.options,n=this.tickPositions,t=this.minorTickInterval,s=[],r;
if(this.isLog){r=n.length;
for(p=1;
p<r;
p++){s=s.concat(this.getLogTickPositions(t,n[p-1],n[p],!0))
}}else{if(this.isDatetimeAxis&&p.minorTickInterval==="auto"){s=s.concat(this.getTimeTicks(this.normalizeTimeTickInterval(t),this.min,this.max,p.startOfWeek)),s[0]<this.min&&s.shift()
}else{for(n=this.min+(n[0]-this.min)%t;
n<=this.max;
n+=t){s.push(n)
}}}return s
},adjustForMinRange:function(){var z=this.options,y=this.min,x=this.max,w,v=this.dataMax-this.dataMin>=this.minRange,u,t,s,r,p;
if(this.isXAxis&&this.minRange===av&&!this.isLog){aw(z.min)||aw(z.max)?this.minRange=null:(az(this.series,function(A){r=A.xData;
for(t=p=A.xIncrement?1:r.length-1;
t>0;
t--){if(s=r[t]-r[t-1],u===av||s<u){u=s
}}}),this.minRange=bc(u*5,this.dataMax-this.dataMin))
}if(x-y<this.minRange){var n=this.minRange;
w=(n-x+y)/2;
w=[y-w,aC(z.min,y-w)];
if(v){w[2]=this.dataMin
}y=bv(w);
x=[y+n,aC(z.max,y+n)];
if(v){x[2]=this.dataMax
}x=m(x);
x-y<n&&(w[0]=x-n,w[1]=aC(z.min,x-n),y=bv(w))
}this.min=y;
this.max=x
},setAxisTranslation:function(x){var w=this.max-this.min,v=0,u,t=0,s=0,r=this.linkedParent,p=!!this.categories,n=this.transA;
if(this.isXAxis||p){r?(t=r.minPointOffset,s=r.pointRangePadding):az(this.series,function(z){var C=ax(z.pointRange,+p),A=z.options.pointPlacement,y=z.closestPointRange;
C>w&&(C=0);
v=ax(v,C);
t=ax(t,bQ(A)?0:C/2);
s=ax(s,A==="on"?0:C);
!z.noSharedTooltip&&aw(y)&&(u=aw(u)?bc(u,y):y)
}),r=this.ordinalSlope&&u?this.ordinalSlope/u:1,this.minPointOffset=t*=r,this.pointRangePadding=s*=r,this.pointRange=bc(v,w),this.closestPointRange=u
}if(x){this.oldTransA=n
}this.translationSlope=this.transA=n=this.len/(w+s||1);
this.transB=this.horiz?this.left:this.bottom;
this.minPixelPadding=n*t
},setTickPositions:function(E){var D=this,C=D.chart,A=D.options,z=D.isLog,y=D.isDatetimeAxis,x=D.isXAxis,w=D.isLinked,v=D.options.tickPositioner,u=A.maxPadding,t=A.minPadding,s=A.tickInterval,r=A.minTickInterval,n=A.tickPixelInterval,p,F=D.categories;
w?(D.linkedParent=C[D.coll][A.linkedTo],C=D.linkedParent.getExtremes(),D.min=aC(C.min,C.dataMin),D.max=aC(C.max,C.dataMax),A.type!==D.linkedParent.options.type&&h(11,1)):(D.min=aC(D.userMin,A.min,D.dataMin),D.max=aC(D.userMax,A.max,D.dataMax));
if(z){!E&&bc(D.min,aC(D.dataMin,D.min))<=0&&h(10,1),D.min=by(c(D.min)),D.max=by(c(D.max))
}if(D.range&&aw(D.max)){D.userMin=D.min=ax(D.min,D.max-D.range),D.userMax=D.max,D.range=null
}D.beforePadding&&D.beforePadding();
D.adjustForMinRange();
if(!F&&!D.usePercentage&&!w&&aw(D.min)&&aw(D.max)&&(C=D.max-D.min)){if(!aw(A.min)&&!aw(D.userMin)&&t&&(D.dataMin<0||!D.ignoreMinPadding)){D.min-=C*t
}if(!aw(A.max)&&!aw(D.userMax)&&u&&(D.dataMax>0||!D.ignoreMaxPadding)){D.max+=C*u
}}D.min===D.max||D.min===void 0||D.max===void 0?D.tickInterval=1:w&&!s&&n===D.linkedParent.options.tickPixelInterval?D.tickInterval=D.linkedParent.tickInterval:(D.tickInterval=aC(s,F?1:(D.max-D.min)*n/ax(D.len,n)),!aw(s)&&D.len<n&&!this.isRadial&&!F&&A.startOnTick&&A.endOnTick&&(p=!0,D.tickInterval/=4));
x&&!E&&az(D.series,function(G){G.processData(D.min!==D.oldMin||D.max!==D.oldMax)
});
D.setAxisTranslation(!0);
D.beforeSetTickPositions&&D.beforeSetTickPositions();
if(D.postProcessTickInterval){D.tickInterval=D.postProcessTickInterval(D.tickInterval)
}if(D.pointRange){D.tickInterval=ax(D.pointRange,D.tickInterval)
}if(!s&&D.tickInterval<r){D.tickInterval=r
}if(!y&&!z&&!s){D.tickInterval=bg(D.tickInterval,null,bD(D.tickInterval),A)
}D.minorTickInterval=A.minorTickInterval==="auto"&&D.tickInterval?D.tickInterval/5:A.minorTickInterval;
D.tickPositions=E=A.tickPositions?[].concat(A.tickPositions):v&&v.apply(D,[D.min,D.max]);
if(!E){!D.ordinalPositions&&(D.max-D.min)/D.tickInterval>ax(2*D.len,200)&&h(19,!0),E=y?D.getTimeTicks(D.normalizeTimeTickInterval(D.tickInterval,A.units),D.min,D.max,A.startOfWeek,D.ordinalPositions,D.closestPointRange,!0):z?D.getLogTickPositions(D.tickInterval,D.min,D.max):D.getLinearTickPositions(D.tickInterval,D.min,D.max),p&&E.splice(1,E.length-2),D.tickPositions=E
}if(!w){z=E[0],y=E[E.length-1],w=D.minPointOffset||0,A.startOnTick?D.min=z:D.min-w>z&&E.shift(),A.endOnTick?D.max=y:D.max+w<y&&E.pop(),E.length===1&&(D.min-=0.001,D.max+=0.001)
}},setMaxTicks:function(){var p=this.chart,n=p.maxTicks||{},s=this.tickPositions,r=this._maxTicksKey=[this.coll,this.pos,this.len].join("-");
if(!this.isLinked&&!this.isDatetimeAxis&&s&&s.length>(n[r]||0)&&this.options.alignTicks!==!1){n[r]=s.length
}p.maxTicks=n
},adjustTickAmount:function(){var p=this._maxTicksKey,n=this.tickPositions,t=this.chart.maxTicks;
if(t&&t[p]&&!this.isDatetimeAxis&&!this.categories&&!this.isLinked&&this.options.alignTicks!==!1&&this.min!==av){var s=this.tickAmount,r=n.length;
this.tickAmount=p=t[p];
if(r<p){for(;
n.length<p;
){n.push(by(n[n.length-1]+this.tickInterval))
}this.transA*=(r-1)/(p-1);
this.max=n[n.length-1]
}if(aw(s)&&p!==s){this.isDirty=!0
}}},setScale:function(){var p=this.stacks,n,t,s,r;
this.oldMin=this.min;
this.oldMax=this.max;
this.oldAxisLength=this.len;
this.setAxisSize();
r=this.len!==this.oldAxisLength;
az(this.series,function(u){if(u.isDirtyData||u.isDirty||u.xAxis.isDirty){s=!0
}});
if(r||s||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax){if(!this.isXAxis){for(n in p){for(t in p[n]){p[n][t].total=null,p[n][t].cum=0
}}}this.forceRedraw=!1;
this.getSeriesExtremes();
this.setTickPositions();
this.oldUserMin=this.userMin;
this.oldUserMax=this.userMax;
if(!this.isDirty){this.isDirty=r||this.min!==this.oldMin||this.max!==this.oldMax
}}else{if(!this.isXAxis){if(this.oldStacks){p=this.stacks=this.oldStacks
}for(n in p){for(t in p[n]){p[n][t].cum=p[n][t].total
}}}}this.setMaxTicks()
},setExtremes:function(p,n,v,u,t){var s=this,r=s.chart,v=aC(v,!0),t=ay(t,{min:p,max:n});
bo(s,"setExtremes",t,function(){s.userMin=p;
s.userMax=n;
s.eventArgs=t;
s.isDirtyExtremes=!0;
v&&r.redraw(u)
})
},zoom:function(p,n){this.allowZoomOutside||(aw(this.dataMin)&&p<=this.dataMin&&(p=av),aw(this.dataMax)&&n>=this.dataMax&&(n=av));
this.displayBtn=p!==av||n!==av;
this.setExtremes(p,n,!1,av,{trigger:"zoom"});
return !0
},setAxisSize:function(){var p=this.chart,n=this.options,v=n.offsetLeft||0,u=n.offsetRight||0,t=this.horiz,s,r;
this.left=r=aC(n.left,p.plotLeft+v);
this.top=s=aC(n.top,p.plotTop);
this.width=v=aC(n.width,p.plotWidth-v+u);
this.height=n=aC(n.height,p.plotHeight);
this.bottom=p.chartHeight-n-s;
this.right=p.chartWidth-v-r;
this.len=ax(t?v:n,0);
this.pos=t?r:s
},getExtremes:function(){var n=this.isLog;
return{min:n?by(bB(this.min)):this.min,max:n?by(bB(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}
},getThreshold:function(p){var n=this.isLog,r=n?bB(this.min):this.min,n=n?bB(this.max):this.max;
r>p||p===null?p=r:n<p&&(p=n);
return this.translate(p,0,1,0,1)
},autoLabelAlign:function(n){n=(aC(n,0)-this.side*90+720)%360;
return n>15&&n<165?"right":n>195&&n<345?"left":"center"
},getOffset:function(){var Y=this,X=Y.chart,V=X.renderer,U=Y.options,T=Y.tickPositions,S=Y.ticks,R=Y.horiz,Q=Y.side,P=X.inverted?[1,0,3,2][Q]:Q,O,N=0,M,L=0,I=U.title,J=U.labels,n=0,D=X.axisOffset,C=X.clipOffset,F=[-1,1,1,-1][Q],E,A=1,p=aC(J.maxStaggerLines,5),u,t,s,G;
Y.hasData=O=Y.hasVisibleSeries||aw(Y.min)&&aw(Y.max)&&!!T;
Y.showAxis=X=O||aC(U.showEmpty,!0);
Y.staggerLines=Y.horiz&&J.staggerLines;
if(!Y.axisGroup){Y.gridGroup=V.g("grid").attr({zIndex:U.gridZIndex||1}).add(),Y.axisGroup=V.g("axis").attr({zIndex:U.zIndex||2}).add(),Y.labelGroup=V.g("axis-labels").attr({zIndex:J.zIndex||7}).add()
}if(O||Y.isLinked){Y.labelAlign=aC(J.align||Y.autoLabelAlign(J.rotation));
az(T,function(r){S[r]?S[r].addLabel():S[r]=new an(Y,r)
});
if(Y.horiz&&!Y.staggerLines&&p&&!J.rotation){for(E=Y.reversed?[].concat(T).reverse():T;
A<p;
){O=[];
u=!1;
for(J=0;
J<E.length;
J++){t=E[J],s=(s=S[t].label&&S[t].label.getBBox())?s.width:0,G=J%A,s&&(t=Y.translate(t),O[G]!==av&&t<O[G]&&(u=!0),O[G]=t+s)
}if(u){A++
}else{break
}}if(A>1){Y.staggerLines=A
}}az(T,function(r){if(Q===0||Q===2||{1:"left",3:"right"}[Q]===Y.labelAlign){n=ax(S[r].getLabelSize(),n)
}});
if(Y.staggerLines){n*=Y.staggerLines,Y.labelOffset=n
}}else{for(E in S){S[E].destroy(),delete S[E]
}}if(I&&I.text&&I.enabled!==!1){if(!Y.axisTitle){Y.axisTitle=V.text(I.text,0,0,I.useHTML).attr({zIndex:7,rotation:I.rotation||0,align:I.textAlign||{low:"left",middle:"center",high:"right"}[I.align]}).css(I.style).add(Y.axisGroup),Y.axisTitle.isNew=!0
}if(X){N=Y.axisTitle.getBBox()[R?"height":"width"],L=aC(I.margin,R?5:10),M=I.offset
}Y.axisTitle[X?"show":"hide"]()
}Y.offset=F*aC(U.offset,D[Q]);
Y.axisTitleMargin=aC(M,n+L+(Q!==2&&n&&F*U.labels[R?"y":"x"]));
D[Q]=ax(D[Q],Y.axisTitleMargin+N+F*Y.offset);
C[P]=ax(C[P],a3(U.lineWidth/2)*2)
},getLinePath:function(p){var n=this.chart,u=this.opposite,t=this.offset,s=this.horiz,r=this.left+(u?this.width:0)+t,t=n.chartHeight-this.bottom-(u?this.height:0)+t;
u&&(p*=-1);
return n.renderer.crispLine(["M",s?this.left:r,s?t:this.top,"L",s?n.chartWidth-this.right:r,s?t:n.chartHeight-this.bottom],p)
},getTitlePosition:function(){var x=this.horiz,w=this.left,v=this.top,u=this.len,t=this.options.title,s=x?w:v,r=this.opposite,p=this.offset,n=ao(t.style.fontSize||12),u={low:s+(x?0:u),middle:s+u/2,high:s+(x?u:0)}[t.align],w=(x?v+this.height:w)+(x?1:-1)*(r?-1:1)*this.axisTitleMargin+(this.side===2?n:0);
return{x:x?u:w+(r?this.width:0)+p+(t.x||0),y:x?w-(r?this.height:0)+p:u+(t.y||0)}
},render:function(){var bb=this,ba=bb.horiz,ab=bb.reversed,aa=bb.chart,Y=aa.renderer,X=bb.options,V=bb.isLog,U=bb.isLinked,T=bb.tickPositions,S,R=bb.axisTitle,Q=bb.stacks,P=bb.ticks,L=bb.minorTicks,N=bb.alternateBands,O=X.stackLabels,E=X.alternateGridColor,G=bb.tickmarkOffset,I=X.lineWidth,D=aa.hasRendered&&aw(bb.oldMin)&&!isNaN(bb.oldMin),F=bb.hasData,C=bb.showAxis,u,t=bb.justifyLabels=!bb.staggerLines&&ba&&X.labels.overflow==="justify",p;
bb.labelEdge.length=0;
az([P,L,N],function(r){for(var n in r){r[n].isActive=!1
}});
if(F||U){if(bb.minorTickInterval&&!bb.categories&&az(bb.getMinorTickPositions(),function(n){L[n]||(L[n]=new an(bb,n,"minor"));
D&&L[n].isNew&&L[n].render(null,!0);
L[n].render(null,!1,1)
}),T.length&&(S=T.slice(),(ba&&ab||!ba&&!ab)&&S.reverse(),t&&(S=S.slice(1).concat([S[0]])),az(S,function(n,r){t&&(r=r===S.length-1?0:r+1);
if(!U||n>=bb.min&&n<=bb.max){P[n]||(P[n]=new an(bb,n)),D&&P[n].isNew&&P[n].render(r,!0,0.1),P[n].render(r,!1,1)
}}),G&&bb.min===0&&(P[-1]||(P[-1]=new an(bb,-1,null,!0)),P[-1].render(-1))),E&&az(T,function(n,r){if(r%2===0&&n<bb.max){N[n]||(N[n]=new bK(bb)),u=n+G,p=T[r+1]!==av?T[r+1]+G:bb.max,N[n].options={from:V?bB(u):u,to:V?bB(p):p,color:E},N[n].render(),N[n].isActive=!0
}}),!bb._addedPlotLB){az((X.plotLines||[]).concat(X.plotBands||[]),function(n){bb.addPlotBandOrLine(n)
}),bb._addedPlotLB=!0
}}az([P,L,N],function(r){var n,x,w=[],v=aI?aI.duration||500:0,s=function(){for(x=w.length;
x--;
){r[w[x]]&&!r[w[x]].isActive&&(r[w[x]].destroy(),delete r[w[x]])
}};
for(n in r){if(!r[n].isActive){r[n].render(n,!1,0),r[n].isActive=!1,w.push(n)
}}r===N||!aa.hasRendered||!v?s():v&&setTimeout(s,v)
});
if(I){ba=bb.getLinePath(I),bb.axisLine?bb.axisLine.animate({d:ba}):bb.axisLine=Y.path(ba).attr({stroke:X.lineColor,"stroke-width":I,zIndex:7}).add(bb.axisGroup),bb.axisLine[C?"show":"hide"]()
}if(R&&C){R[R.isNew?"attr":"animate"](bb.getTitlePosition()),R.isNew=!1
}if(O&&O.enabled){var J,M,X=bb.stackTotalGroup;
if(!X){bb.stackTotalGroup=X=Y.g("stack-labels").attr({visibility:"visible",zIndex:6}).add()
}X.translate(aa.plotLeft,aa.plotTop);
for(J in Q){for(M in Y=Q[J],Y){Y[M].render(X)
}}}bb.isDirty=!1
},redraw:function(){var n=this.chart.pointer;
n.reset&&n.reset(!0);
this.render();
az(this.plotLinesAndBands,function(p){p.render()
});
az(this.series,function(p){p.isDirty=!0
})
},buildStacks:function(){var p=this.series,n=p.length;
if(!this.isXAxis){for(;
n--;
){p[n].setStackedPoints()
}if(this.usePercentage){for(n=0;
n<p.length;
n++){p[n].setPercentStacks()
}}}},destroy:function(p){var n=this,t=n.stacks,s,r=n.plotLinesAndBands;
p||aR(n);
for(s in t){bY(t[s]),t[s]=null
}az([n.ticks,n.minorTicks,n.alternateBands],function(u){bY(u)
});
for(p=r.length;
p--;
){r[p].destroy()
}az("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),function(u){n[u]&&(n[u]=n[u].destroy())
});
this.cross&&this.cross.destroy()
},drawCrosshair:function(p,n){if(this.crosshair){if((aw(n)||!aC(this.crosshair.snap,!0))===!1){this.hideCrosshair()
}else{var t,s=this.crosshair,r=s.animation;
aC(s.snap,!0)?aw(n)&&(t=this.chart.inverted!=this.horiz?n.plotX:this.len-n.plotY):t=this.horiz?p.chartX-this.pos:this.len-p.chartY+this.pos;
t=this.isRadial?this.getPlotLinePath(this.isXAxis?n.x:aC(n.stackY,n.y)):this.getPlotLinePath(null,null,null,null,t);
if(t===null){this.hideCrosshair()
}else{if(this.cross){this.cross.attr({visibility:"visible"})[r?"animate":"attr"]({d:t},r)
}else{r={"stroke-width":s.width||1,stroke:s.color||"#C0C0C0",zIndex:s.zIndex||2};
if(s.dashStyle){r.dashstyle=s.dashStyle
}this.cross=this.chart.renderer.path(t).attr(r).add()
}}}}},hideCrosshair:function(){this.cross&&this.cross.hide()
}};
ay(l.prototype,{getPlotBandPath:function(p,n){var s=this.getPlotLinePath(n),r=this.getPlotLinePath(p);
r&&s?r.push(s[4],s[5],s[1],s[2]):r=null;
return r
},addPlotBand:function(n){this.addPlotBandOrLine(n,"plotBands")
},addPlotLine:function(n){this.addPlotBandOrLine(n,"plotLines")
},addPlotBandOrLine:function(p,n){var s=(new bK(this,p)).render(),r=this.userOptions;
s&&(n&&(r[n]=r[n]||[],r[n].push(p)),this.plotLinesAndBands.push(s));
return s
},removePlotBandOrLine:function(p){for(var n=this.plotLinesAndBands,t=this.options,s=this.userOptions,r=n.length;
r--;
){n[r].id===p&&n[r].destroy()
}az([t.plotLines||[],s.plotLines||[],t.plotBands||[],s.plotBands||[]],function(u){for(r=u.length;
r--;
){u[r].id===p&&a9(u,u[r])
}})
}});
l.prototype.getLogTickPositions=function(A,z,y,x){var w=this.options,v=this.len,u=[];
if(!x){this._minorAutoInterval=null
}if(A>=0.5){A=at(A),u=this.getLinearTickPositions(A,z,y)
}else{if(A>=0.08){for(var v=a3(z),t,s,r,p,n,w=A>0.3?[1,2,4]:A>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];
v<y+1&&!n;
v++){s=w.length;
for(t=0;
t<s&&!n;
t++){r=c(bB(v)*w[t]),r>z&&(!x||p<=y)&&u.push(p),p>y&&(n=!0),p=r
}}}else{if(z=bB(z),y=bB(y),A=w[x?"minorTickInterval":"tickInterval"],A=aC(A==="auto"?null:A,this._minorAutoInterval,(y-z)*(w.tickPixelInterval/(x?5:1))/((x?v/this.tickPositions.length:v)||1)),A=bg(A,null,bD(A)),u=H(this.getLinearTickPositions(A,z,y),c),!x){this._minorAutoInterval=A/5
}}}if(!x){this.tickInterval=A
}return u
};
l.prototype.getTimeTicks=function(D,C,A,z){var y=[],x={},w=be.global.useUTC,v,u=new Date(C-aO),t=D.unitRange,s=D.count;
if(aw(C)){t>=bi.second&&(u.setMilliseconds(0),u.setSeconds(t>=bi.minute?0:s*a3(u.getSeconds()/s)));
if(t>=bi.minute){u[a8](t>=bi.hour?0:s*a3(u[ah]()/s))
}if(t>=bi.hour){u[aE](t>=bi.day?0:s*a3(u[j]()/s))
}if(t>=bi.day){u[bG](t>=bi.month?1:s*a3(u[aq]()/s))
}t>=bi.month&&(u[ae](t>=bi.year?0:s*a3(u[Z]()/s)),v=u[e]());
t>=bi.year&&(v-=v%s,u[g](v));
if(t===bi.week){u[bG](u[aq]()-u[bV]()+aC(z,1))
}C=1;
aO&&(u=new Date(u.getTime()+aO));
v=u[e]();
for(var z=u.getTime(),r=u[Z](),p=u[aq](),n=w?aO:(86400000+u.getTimezoneOffset()*60000)%86400000;
z<A;
){y.push(z),t===bi.year?z=aA(v+C*s,0):t===bi.month?z=aA(v,r+C*s):!w&&(t===bi.day||t===bi.week)?z=aA(v,r,p+C*s*(t===bi.day?1:7)):z+=t*s,C++
}y.push(z);
az(o(y,function(E){return t<=bi.hour&&E%bi.day===n
}),function(E){x[E]="day"
})
}y.info=ay(D,{higherRanks:x,totalRange:t*s});
return y
};
l.prototype.normalizeTimeTickInterval=function(p,n){var v=n||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],u=v[v.length-1],t=bi[u[0]],s=u[1],r;
for(r=0;
r<v.length;
r++){if(u=v[r],t=bi[u[0]],s=u[1],v[r+1]&&p<=(t*s[s.length-1]+bi[v[r+1][0]])/2){break
}}t===bi.year&&p<5*t&&(s=[1,2,5]);
v=bg(p/t,s,u[0]==="year"?ax(bD(p/t),1):1);
return{unitRange:t,count:v,unitName:u[0]}
};
bT.prototype={destroy:function(){bY(this,this.axis)
},render:function(p){var n=this.options,r=n.format,r=r?i(r,this):n.formatter.call(this);
this.label?this.label.attr({text:r,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(r,0,0,n.useHTML).css(n.style).attr({align:this.textAlign,rotation:n.rotation,visibility:"hidden"}).add(p)
},setOffset:function(x,w){var v=this.axis,u=v.chart,t=u.inverted,s=this.isNegative,r=v.translate(this.percent?100:this.total,0,0,0,1),v=v.translate(0),v=a4(r-v),p=u.xAxis[0].translate(this.x)+x,n=u.plotHeight,s={x:t?s?r:r-v:p,y:t?n-p-w:s?n-r-v:n-r,width:t?v:w,height:t?w:v};
if(t=this.label){t.align(this.alignOptions,null,s),s=t.alignAttr,t.attr({visibility:this.options.crop===!1||u.isInsidePlot(s.x,s.y)?aT?"inherit":"visible":"hidden"})
}}};
bp.prototype={init:function(p,n){var t=n.borderWidth,s=n.style,r=ao(s.padding);
this.chart=p;
this.options=n;
this.crosshairs=[];
this.now={x:0,y:0};
this.isHidden=!0;
this.label=p.renderer.label("",0,0,n.shape,null,null,n.useHTML,null,"tooltip").attr({padding:r,fill:n.backgroundColor,"stroke-width":t,r:n.borderRadius,zIndex:8}).css(s).css({padding:0}).add().attr({y:-999});
ac||this.label.shadow(n.shadow);
this.shared=n.shared
},destroy:function(){if(this.label){this.label=this.label.destroy()
}clearTimeout(this.hideTimer);
clearTimeout(this.tooltipTimeout)
},move:function(p,n,v,u){var t=this,s=t.now,r=t.options.animation!==!1&&!t.isHidden;
ay(s,{x:r?(2*s.x+p)/3:p,y:r?(s.y+n)/2:n,anchorX:r?(2*s.anchorX+v)/3:v,anchorY:r?(s.anchorY+u)/2:u});
t.label.attr(s);
if(r&&(a4(p-s.x)>1||a4(n-s.y)>1)){clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){t&&t.move(p,n,v,u)
},32)
}},hide:function(){var p=this,n;
clearTimeout(this.hideTimer);
if(!this.isHidden){n=this.chart.hoverPoints,this.hideTimer=setTimeout(function(){p.label.fadeOut();
p.isHidden=!0
},aC(this.options.hideDelay,500)),n&&az(n,function(r){r.setState()
}),this.chart.hoverPoints=null
}},getAnchor:function(x,w){var v,u=this.chart,t=u.inverted,s=u.plotTop,r=0,p=0,n,x=af(x);
v=x[0].tooltipPos;
this.followPointer&&w&&(w.chartX===av&&(w=u.pointer.normalize(w)),v=[w.chartX-u.plotLeft,w.chartY-s]);
v||(az(x,function(y){n=y.series.yAxis;
r+=y.plotX;
p+=(y.plotLow?(y.plotLow+y.plotHigh)/2:y.plotY)+(!t&&n?n.top-s:0)
}),r/=x.length,p/=x.length,v=[t?u.plotWidth-p:r,this.shared&&!t&&x.length>1&&w?w.chartY-s:t?u.plotHeight-r:p]);
return H(v,at)
},getPosition:function(A,z,y){var x=this.chart,w=x.plotLeft,v=x.plotTop,u=x.plotWidth,t=x.plotHeight,s=aC(this.options.distance,12),r=y.plotX,y=y.plotY,x=r+w+(x.inverted?s:-A-s),p=y-z+v+15,n;
x<7&&(x=w+ax(r,0)+s);
x+A>w+u&&(x-=x+A-(w+u),p=y-z+v-s,n=!0);
p<v+5&&(p=v+5,n&&y>=p&&y<=p+z&&(p=y+v+s));
p+z>v+t&&(p=ax(v,v+t-z-s));
return{x:x,y:p}
},defaultFormatter:function(p){var n=this.points||af(this),s=n[0].series,r;
r=[s.tooltipHeaderFormatter(n[0])];
az(n,function(t){s=t.series;
r.push(s.tooltipFormatter&&s.tooltipFormatter(t)||t.point.tooltipFormatter(s.tooltipOptions.pointFormat))
});
r.push(p.options.footerFormat||"");
return r.join("")
},refresh:function(A,z){var y=this.chart,x=this.label,w=this.options,v,u,t={},s,r=[];
s=w.formatter||this.defaultFormatter;
var t=y.hoverPoints,p,n=this.shared;
clearTimeout(this.hideTimer);
this.followPointer=af(A)[0].series.tooltipOptions.followPointer;
u=this.getAnchor(A,z);
v=u[0];
u=u[1];
n&&(!A.series||!A.series.noSharedTooltip)?(y.hoverPoints=A,t&&az(t,function(C){C.setState()
}),az(A,function(C){C.setState("hover");
r.push(C.getLabelConfig())
}),t={x:A[0].category,y:A[0].y},t.points=r,A=A[0]):t=A.getLabelConfig();
s=s.call(t,this);
t=A.series;
s===!1?this.hide():(this.isHidden&&(bN(x),x.attr("opacity",1).show()),x.attr({text:s}),p=w.borderColor||A.color||t.color||"#606060",x.attr({stroke:p}),this.updatePosition({plotX:v,plotY:u}),this.isHidden=!1);
bo(y,"tooltipRefresh",{text:s,x:v+y.plotLeft,y:u+y.plotTop,borderColor:p})
},updatePosition:function(p){var n=this.chart,r=this.label,r=(this.options.positioner||this.getPosition).call(this,r.width,r.height,p);
this.move(at(r.x),at(r.y),p.plotX+n.plotLeft,p.plotY+n.plotTop)
}};
var bm=Highcharts.Pointer=function(p,n){this.init(p,n)
};
bm.prototype={init:function(p,n){var u=n.chart,t=u.events,s=ac?"":u.zoomType,u=p.inverted,r;
this.options=n;
this.chart=p;
this.zoomX=r=/x/.test(s);
this.zoomY=s=/y/.test(s);
this.zoomHor=r&&!u||s&&u;
this.zoomVert=s&&!u||r&&u;
this.runChartClick=t&&!!t.click;
this.pinchDown=[];
this.lastValidTouch={};
if(n.tooltip.enabled){p.tooltip=new bp(p,n.tooltip)
}this.setDOMEvents()
},normalize:function(p,n){var s,r,p=p||bn.event;
if(!p.target){p.target=p.srcElement
}p=q(p);
r=p.touches?p.touches.item(0):p;
if(!n){this.chartPosition=n=am(this.chart.container)
}r.pageX===av?(s=ax(p.x,p.clientX-n.left),r=p.y):(s=r.pageX-n.left,r=r.pageY-n.top);
return ay(p,{chartX:at(s),chartY:at(r)})
},getCoordinates:function(p){var n={xAxis:[],yAxis:[]};
az(this.chart.axes,function(r){n[r.isXAxis?"xAxis":"yAxis"].push({axis:r,value:r.toValue(p[r.horiz?"chartX":"chartY"])})
});
return n
},getIndex:function(p){var n=this.chart;
return n.inverted?n.plotHeight+n.plotTop-p.chartY:p.chartX-n.plotLeft
},runPointActions:function(C){var A=this,z=A.chart,y=z.series,x=z.tooltip,w,v,u=z.hoverPoint,t=z.hoverSeries,s,r,p=z.chartWidth,n=A.getIndex(C);
if(x&&A.options.tooltip.shared&&(!t||!t.noSharedTooltip)){v=[];
s=y.length;
for(r=0;
r<s;
r++){if(y[r].visible&&y[r].options.enableMouseTracking!==!1&&!y[r].noSharedTooltip&&y[r].tooltipPoints.length&&(w=y[r].tooltipPoints[n])&&w.series){w._dist=a4(n-w.clientX),p=bc(p,w._dist),v.push(w)
}}for(s=v.length;
s--;
){v[s]._dist>p&&v.splice(s,1)
}if(v.length&&v[0].clientX!==A.hoverX){x.refresh(v,C),A.hoverX=v[0].clientX
}}if(t&&t.tracker){if((w=t.tooltipPoints[n])&&w!==u){w.onMouseOver(C)
}}else{x&&x.followPointer&&!x.isHidden&&(y=x.getAnchor([{}],C),x.updatePosition({plotX:y[0],plotY:y[1]}))
}if(x&&!A._onDocumentMouseMove){A._onDocumentMouseMove=function(D){A.onDocumentMouseMove(D)
},bf(ap,"mousemove",A._onDocumentMouseMove)
}az(z.axes,function(D){D.drawCrosshair(C,aC(w,u))
})
},reset:function(p){var n=this.chart,u=n.hoverSeries,t=n.hoverPoint,s=n.tooltip,r=s&&s.shared?n.hoverPoints:t;
(p=p&&s&&r)&&af(r)[0].plotX===av&&(p=!1);
if(p){s.refresh(r),t&&t.setState(t.state,!0)
}else{if(t){t.onMouseOut()
}if(u){u.onMouseOut()
}s&&s.hide();
if(this._onDocumentMouseMove){aR(ap,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=null
}az(n.axes,function(v){v.hideCrosshair()
});
this.hoverX=null
}},scaleGroups:function(p,n){var s=this.chart,r;
az(s.series,function(t){r=p||t.getPlotBox();
t.xAxis&&t.xAxis.zoomEnabled&&(t.group.attr(r),t.markerGroup&&(t.markerGroup.attr(r),t.markerGroup.clip(n?s.clipRect:null)),t.dataLabelsGroup&&t.dataLabelsGroup.attr(r))
});
s.clipRect.attr(n||s.clipBox)
},pinchTranslate:function(p,n,w,v,u,t,s,r){p&&this.pinchTranslateDirection(!0,w,v,u,t,s,r);
n&&this.pinchTranslateDirection(!1,w,v,u,t,s,r)
},pinchTranslateDirection:function(ba,ab,aa,Y,X,V,U,T){var S=this.chart,R=ba?"x":"y",Q=ba?"X":"Y",P="chart"+Q,O=ba?"width":"height",J=S["plot"+(ba?"Left":"Top")],M,N,L=T||1,G=S.inverted,F=S.bounds[ba?"h":"v"],I=ab.length===1,C=ab[0][P],E=aa[0][P],D=!I&&ab[1][P],A=!I&&aa[1][P],z,aa=function(){!I&&a4(C-D)>20&&(L=T||a4(E-A)/a4(C-D));
N=(J-E)/L+C;
M=S["plot"+(ba?"Width":"Height")]/L
};
aa();
ab=N;
ab<F.min?(ab=F.min,z=!0):ab+M>F.max&&(ab=F.max-M,z=!0);
z?(E-=0.8*(E-U[R][0]),I||(A-=0.8*(A-U[R][1])),aa()):U[R]=[E,A];
G||(V[R]=N-J,V[O]=M);
V=G?1/L:L;
X[O]=M;
X[R]=ab;
Y[G?ba?"scaleY":"scaleX":"scale"+Q]=L;
Y["translate"+Q]=V*J+(E-V*C)
},pinch:function(E){var D=this,C=D.chart,A=D.pinchDown,z=C.tooltip&&C.tooltip.options.followTouchMove,y=E.touches,x=y.length,w=D.lastValidTouch,v=D.zoomHor||D.pinchHor,u=D.zoomVert||D.pinchVert,t=v||u,s=D.selectionMarker,r={},n=x===1&&(D.inClass(E.target,"highcharts-tracker")&&C.runTrackerClick||C.runChartClick),p={};
(t||z)&&!n&&E.preventDefault();
H(y,function(F){return D.normalize(F)
});
if(E.type==="touchstart"){az(y,function(G,F){A[F]={chartX:G.chartX,chartY:G.chartY}
}),w.x=[A[0].chartX,A[1]&&A[1].chartX],w.y=[A[0].chartY,A[1]&&A[1].chartY],az(C.axes,function(G){if(G.zoomEnabled){var F=C.bounds[G.horiz?"h":"v"],M=G.minPixelPadding,L=G.toPixels(G.dataMin),J=G.toPixels(G.dataMax),I=bc(L,J),L=ax(L,J);
F.min=bc(G.pos,I-M);
F.max=ax(G.pos+G.len,L+M)
}})
}else{if(A.length){if(!s){D.selectionMarker=s=ay({destroy:bS},C.plotBox)
}D.pinchTranslate(v,u,A,y,r,s,p,w);
D.hasPinched=t;
D.scaleGroups(r,p);
!t&&z&&x===1&&this.runPointActions(D.normalize(E))
}}},dragStart:function(p){var n=this.chart;
n.mouseIsDown=p.type;
n.cancelClick=!1;
n.mouseDownX=this.mouseDownX=p.chartX;
n.mouseDownY=this.mouseDownY=p.chartY
},drag:function(D){var C=this.chart,A=C.options.chart,z=D.chartX,y=D.chartY,x=this.zoomHor,w=this.zoomVert,v=C.plotLeft,u=C.plotTop,t=C.plotWidth,s=C.plotHeight,r,p=this.mouseDownX,n=this.mouseDownY;
z<v?z=v:z>v+t&&(z=v+t);
y<u?y=u:y>u+s&&(y=u+s);
this.hasDragged=Math.sqrt(Math.pow(p-z,2)+Math.pow(n-y,2));
if(this.hasDragged>10){r=C.isInsidePlot(p-v,n-u);
if(C.hasCartesianSeries&&(this.zoomX||this.zoomY)&&r&&!this.selectionMarker){this.selectionMarker=C.renderer.rect(v,u,x?1:t,w?1:s,0).attr({fill:A.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add()
}this.selectionMarker&&x&&(z-=p,this.selectionMarker.attr({width:a4(z),x:(z>0?0:z)+p}));
this.selectionMarker&&w&&(z=y-n,this.selectionMarker.attr({height:a4(z),y:(z>0?0:z)+n}));
r&&!this.selectionMarker&&A.panning&&C.pan(D,A.panning)
}},drop:function(p){var n=this.chart,w=this.hasPinched;
if(this.selectionMarker){var v={xAxis:[],yAxis:[],originalEvent:p.originalEvent||p},u=this.selectionMarker,t=u.x,s=u.y,r;
if(this.hasDragged||w){az(n.axes,function(y){if(y.zoomEnabled){var x=y.horiz,z=y.toValue(x?t:s),x=y.toValue(x?t+u.width:s+u.height);
!isNaN(z)&&!isNaN(x)&&(v[y.coll].push({axis:y,min:bc(z,x),max:ax(z,x)}),r=!0)
}}),r&&bo(n,"selection",v,function(x){n.zoom(ay(x,w?{animation:!1}:null))
})
}this.selectionMarker=this.selectionMarker.destroy();
w&&this.scaleGroups()
}if(n){bl(n.container,{cursor:n._cursor}),n.cancelClick=this.hasDragged>10,n.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[]
}},onContainerMouseDown:function(n){n=this.normalize(n);
n.preventDefault&&n.preventDefault();
this.dragStart(n)
},onDocumentMouseUp:function(n){this.drop(n)
},onDocumentMouseMove:function(p){var n=this.chart,s=this.chartPosition,r=n.hoverSeries,p=this.normalize(p,s);
s&&r&&!this.inClass(p.target,"highcharts-tracker")&&!n.isInsidePlot(p.chartX-n.plotLeft,p.chartY-n.plotTop)&&this.reset()
},onContainerMouseLeave:function(){this.reset();
this.chartPosition=null
},onContainerMouseMove:function(p){var n=this.chart,p=this.normalize(p);
n.mouseIsDown==="mousedown"&&this.drag(p);
(this.inClass(p.target,"highcharts-tracker")||n.isInsidePlot(p.chartX-n.plotLeft,p.chartY-n.plotTop))&&!n.openMenu&&this.runPointActions(p)
},inClass:function(p,n){for(var r;
p;
){if(r=au(p,"class")){if(r.indexOf(n)!==-1){return !0
}else{if(r.indexOf("highcharts-container")!==-1){return !1
}}}p=p.parentNode
}},onTrackerMouseOut:function(p){var n=this.chart.hoverSeries,r=(p=p.relatedTarget||p.toElement)&&p.point&&p.point.series;
if(n&&!n.options.stickyTracking&&!this.inClass(p,"highcharts-tooltip")&&r!==n){n.onMouseOut()
}},onContainerClick:function(x){var w=this.chart,v=w.hoverPoint,u=w.plotLeft,t=w.plotTop,s=w.inverted,r,p,n,x=this.normalize(x);
x.cancelBubble=!0;
if(!w.cancelClick){v&&this.inClass(x.target,"highcharts-tracker")?(r=this.chartPosition,p=v.plotX,n=v.plotY,ay(v,{pageX:r.left+u+(s?w.plotWidth-n:p),pageY:r.top+t+(s?w.plotHeight-p:n)}),bo(v.series,"click",ay(x,{point:v})),w.hoverPoint&&v.firePointEvent("click",x)):(ay(x,this.getCoordinates(x)),w.isInsidePlot(x.chartX-u,x.chartY-t)&&bo(w,"click",x))
}},onContainerTouchStart:function(p){var n=this.chart;
p.touches.length===1?(p=this.normalize(p),n.isInsidePlot(p.chartX-n.plotLeft,p.chartY-n.plotTop)?(this.runPointActions(p),this.pinch(p)):this.reset()):p.touches.length===2&&this.pinch(p)
},onContainerTouchMove:function(n){(n.touches.length===1||n.touches.length===2)&&this.pinch(n)
},onDocumentTouchEnd:function(n){this.drop(n)
},setDOMEvents:function(){var p=this,n=p.chart.container,r;
this._events=r=[[n,"onmousedown","onContainerMouseDown"],[n,"onmousemove","onContainerMouseMove"],[n,"onclick","onContainerClick"],[n,"mouseleave","onContainerMouseLeave"],[ap,"mouseup","onDocumentMouseUp"]];
aD&&r.push([n,"ontouchstart","onContainerTouchStart"],[n,"ontouchmove","onContainerTouchMove"],[ap,"touchend","onDocumentTouchEnd"]);
az(r,function(s){p["_"+s[2]]=function(t){p[s[2]](t)
};
s[1].indexOf("on")===0?s[0][s[1]]=p["_"+s[2]]:bf(s[0],s[1],p["_"+s[2]])
})
},destroy:function(){var n=this;
az(n._events,function(p){p[1].indexOf("on")===0?p[0][p[1]]=null:aR(p[0],p[1],n["_"+p[2]])
});
delete n._events;
clearInterval(n.tooltipTimeout)
}};
a7=Highcharts.TrackerMixin={drawTrackerPoint:function(){var p=this,n=p.chart,u=n.pointer,t=p.options.cursor,s=t&&{cursor:t},r=function(x){var w=x.target,v;
if(n.hoverSeries!==p){p.onMouseOver()
}for(;
w&&!v;
){v=w.point,w=w.parentNode
}if(v!==av&&v!==n.hoverPoint){v.onMouseOver(x)
}};
az(p.points,function(v){if(v.graphic){v.graphic.element.point=v
}if(v.dataLabel){v.dataLabel.element.point=v
}});
if(!p._hasTracking){az(p.trackerGroups,function(v){if(p[v]&&(p[v].addClass("highcharts-tracker").on("mouseover",r).on("mouseout",function(w){u.onTrackerMouseOut(w)
}).css(s),aD)){p[v].on("touchstart",r)
}}),p._hasTracking=!0
}},drawTrackerGraph:function(){var D=this,C=D.options,A=C.trackByArea,z=[].concat(A?D.areaPath:D.graphPath),y=z.length,x=D.chart,w=x.pointer,v=x.renderer,u=x.options.tooltip.snap,t=D.tracker,s=C.cursor,r=s&&{cursor:s},s=D.singlePoints,p,n=function(){if(x.hoverSeries!==D){D.onMouseOver()
}};
if(y&&!A){for(p=y+1;
p--;
){z[p]==="M"&&z.splice(p+1,0,z[p+1]-u,z[p+2],"L"),(p&&z[p]==="M"||p===y)&&z.splice(p,0,"L",z[p-2]+u,z[p-1])
}}for(p=0;
p<s.length;
p++){y=s[p],z.push("M",y.plotX-u,y.plotY,"L",y.plotX+u,y.plotY)
}t?t.attr({d:z}):(D.tracker=v.path(z).attr({"stroke-linejoin":"round",visibility:D.visible?"visible":"hidden",stroke:ai,fill:A?ai:aY,"stroke-width":C.lineWidth+(A?0:2*u),zIndex:2}).add(D.group),az([D.tracker,D.markerGroup],function(E){E.addClass("highcharts-tracker").on("mouseover",n).on("mouseout",function(F){w.onTrackerMouseOut(F)
}).css(r);
if(aD){E.on("touchstart",n)
}}))
}};
if(bn.PointerEvent||bn.MSPointerEvent){var bh={};
bm.prototype.getWebkitTouches=function(){var p,n=[];
n.item=function(r){return this[r]
};
for(p in bh){bh.hasOwnProperty(p)&&n.push({pageX:bh[p].pageX,pageY:bh[p].pageY,target:bh[p].target})
}return n
};
aQ(bm.prototype,"init",function(p,n,r){n.container.style["-ms-touch-action"]=n.container.style["touch-action"]="none";
p.call(this,n,r)
});
aQ(bm.prototype,"setDOMEvents",function(p){var n=this;
p.apply(this,Array.prototype.slice.call(arguments,1));
az([[this.chart.container,"PointerDown","touchstart","onContainerTouchStart",function(r){bh[r.pointerId]={pageX:r.pageX,pageY:r.pageY,target:r.currentTarget}
}],[this.chart.container,"PointerMove","touchmove","onContainerTouchMove",function(r){bh[r.pointerId]={pageX:r.pageX,pageY:r.pageY};
if(!bh[r.pointerId].target){bh[r.pointerId].target=r.currentTarget
}}],[document,"PointerUp","touchend","onDocumentTouchEnd",function(r){delete bh[r.pointerId]
}]],function(r){bf(r[0],window.PointerEvent?r[1].toLowerCase():"MS"+r[1],function(s){s=s.originalEvent;
if(s.pointerType==="touch"||s.pointerType===s.MSPOINTER_TYPE_TOUCH){r[4](s),n[r[3]]({type:r[2],target:s.currentTarget,preventDefault:bS,touches:n.getWebkitTouches()})
}})
})
})
}var bt=Highcharts.Legend=function(p,n){this.init(p,n)
};
bt.prototype={init:function(p,n){var u=this,t=n.itemStyle,s=aC(n.padding,8),r=n.itemMarginTop||0;
this.options=n;
if(n.enabled){u.baseline=ao(t.fontSize)+3+r,u.itemStyle=t,u.itemHiddenStyle=ar(t,n.itemHiddenStyle),u.itemMarginTop=r,u.padding=s,u.initialItemX=s,u.initialItemY=s-5,u.maxItemWidth=0,u.chart=p,u.itemHeight=0,u.lastLineHeight=0,u.symbolWidth=aC(n.symbolWidth,16),u.pages=[],u.render(),bf(u.chart,"endResize",function(){u.positionCheckboxes()
})
}},colorizeItem:function(y,x){var w=this.options,v=y.legendItem,u=y.legendLine,t=y.legendSymbol,s=this.itemHiddenStyle.color,w=x?w.itemStyle.color:s,r=x?y.legendColor||y.color:s,s=y.options&&y.options.marker,p={stroke:r,fill:r},n;
v&&v.css({fill:w,color:w});
u&&u.attr({stroke:r});
if(t){if(s&&t.isMarker){for(n in s=y.convertAttribs(s),s){v=s[n],v!==av&&(p[n]=v)
}}t.attr(p)
}},positionItem:function(p){var n=this.options,u=n.symbolPadding,n=!n.rtl,t=p._legendItemPos,s=t[0],t=t[1],r=p.checkbox;
p.legendGroup&&p.legendGroup.translate(n?s:this.legendWidth-s-2*u-4,t);
if(r){r.x=s,r.y=t
}},destroyItem:function(p){var n=p.checkbox;
az(["legendItem","legendLine","legendSymbol","legendGroup"],function(r){p[r]&&(p[r]=p[r].destroy())
});
n&&bJ(p.checkbox)
},destroy:function(){var p=this.group,n=this.box;
if(n){this.box=n.destroy()
}if(p){this.group=p.destroy()
}},positionCheckboxes:function(p){var n=this.group.alignAttr,s,r=this.clipHeight||this.legendHeight;
if(n){s=n.translateY,az(this.allItems,function(v){var u=v.checkbox,t;
u&&(t=s+u.y+(p||0)+3,bl(u,{left:n.translateX+v.legendItemWidth+u.x-20+"px",top:t+"px",display:t>s-6&&t<s+r-6?"":aY}))
})
}},renderTitle:function(){var p=this.padding,n=this.options.title,r=0;
if(n.text){if(!this.title){this.title=this.chart.renderer.label(n.text,p-3,p-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(n.style).add(this.group)
}p=this.title.getBBox();
r=p.height;
this.offsetWidth=p.width;
this.contentGroup.attr({translateY:r})
}this.titleHeight=r
},renderItem:function(T){var A;
var S=this,R=S.chart,Q=R.renderer,P=S.options,O=P.layout==="horizontal",N=S.symbolWidth,M=P.symbolPadding,L=S.itemStyle,J=S.itemHiddenStyle,I=S.padding,G=O?aC(P.itemDistance,8):0,F=!P.rtl,C=P.width,E=P.itemMarginBottom||0,D=S.itemMarginTop,x=S.initialItemX,z=T.legendItem,w=T.series&&T.series.drawLegendSymbol?T.series:T,s=w.options,s=s&&s.showCheckbox,n=P.useHTML;
if(!z&&(T.legendGroup=Q.g("legend-item").attr({zIndex:1}).add(S.scrollGroup),w.drawLegendSymbol(S,T),T.legendItem=z=Q.text(P.labelFormat?i(P.labelFormat,T):P.labelFormatter.call(T),F?N+M:-M,S.baseline,n).css(ar(T.visible?L:J)).attr({align:F?"left":"right",zIndex:2}).add(T.legendGroup),(n?z:T.legendGroup).on("mouseover",function(){T.setState("hover");
z.css(S.options.itemHoverStyle)
}).on("mouseout",function(){z.css(T.visible?L:J);
T.setState()
}).on("click",function(p){var r=function(){T.setVisible()
},p={browserEvent:p};
T.firePointEvent?T.firePointEvent("legendItemClick",p,r):bo(T,"legendItemClick",p,r)
}),S.colorizeItem(T,T.visible),s)){T.checkbox=aV("input",{type:"checkbox",checked:T.selected,defaultChecked:T.selected},P.itemCheckboxStyle,R.container),bf(T.checkbox,"click",function(p){bo(T,"checkboxClick",{checked:p.target.checked},function(){T.select()
})
})
}Q=z.getBBox();
A=T.legendItemWidth=P.itemWidth||T.legendItemWidth||N+M+Q.width+G+(s?20:0),P=A;
S.itemHeight=N=at(T.legendItemHeight||Q.height);
if(O&&S.itemX-x+P>(C||R.chartWidth-2*I-x)){S.itemX=x,S.itemY+=D+S.lastLineHeight+E,S.lastLineHeight=0
}S.maxItemWidth=ax(S.maxItemWidth,P);
S.lastItemY=D+S.itemY+E;
S.lastLineHeight=ax(N,S.lastLineHeight);
T._legendItemPos=[S.itemX,S.itemY];
O?S.itemX+=P:(S.itemY+=D+N+E,S.lastLineHeight=N);
S.offsetWidth=C||ax((O?S.itemX-x-G:P)+I,S.offsetWidth)
},getAllItems:function(){var n=[];
az(this.chart.series,function(p){var r=p.options;
if(aC(r.showInLegend,!aw(r.linkedTo)?av:!1,!0)){n=n.concat(p.legendItems||(r.legendType==="point"?p.data:p))
}});
return n
},render:function(){var C=this,A=C.chart,z=A.renderer,y=C.group,x,w,v,u,t=C.box,s=C.options,r=C.padding,p=s.borderWidth,n=s.backgroundColor;
C.itemX=C.initialItemX;
C.itemY=C.initialItemY;
C.offsetWidth=0;
C.lastItemY=0;
if(!y){C.group=y=z.g("legend").attr({zIndex:7}).add(),C.contentGroup=z.g().attr({zIndex:1}).add(y),C.scrollGroup=z.g().add(C.contentGroup)
}C.renderTitle();
x=C.getAllItems();
aH(x,function(E,D){return(E.options&&E.options.legendIndex||0)-(D.options&&D.options.legendIndex||0)
});
s.reversed&&x.reverse();
C.allItems=x;
C.display=w=!!x.length;
az(x,function(D){C.renderItem(D)
});
v=s.width||C.offsetWidth;
u=C.lastItemY+C.lastLineHeight+C.titleHeight;
u=C.handleOverflow(u);
if(p||n){v+=r;
u+=r;
if(t){if(v>0&&u>0){t[t.isNew?"attr":"animate"](t.crisp(null,null,null,v,u)),t.isNew=!1
}}else{C.box=t=z.rect(0,0,v,u,s.borderRadius,p||0).attr({stroke:s.borderColor,"stroke-width":p||0,fill:n||aY}).add(y).shadow(s.shadow),t.isNew=!0
}t[w?"show":"hide"]()
}C.legendWidth=v;
C.legendHeight=u;
az(x,function(D){C.positionItem(D)
});
w&&y.align(ay({width:v,height:u},s),!0,"spacingBox");
A.isResizing||this.positionCheckboxes()
},handleOverflow:function(F){var E=this,D=this.chart,C=D.renderer,A=this.options,z=A.y,z=D.spacingBox.height+(A.verticalAlign==="top"?-z:z)-this.padding,y=A.maxHeight,x,w=this.clipRect,v=A.navigation,u=aC(v.animation,!0),t=v.arrowSize||12,r=this.nav,n=this.pages,p,G=this.allItems;
A.layout==="horizontal"&&(z/=2);
y&&(z=bc(z,y));
n.length=0;
if(F>z&&!A.useHTML){this.clipHeight=x=z-20-this.titleHeight-this.padding;
this.currentPage=aC(this.currentPage,1);
this.fullHeight=F;
az(G,function(I,s){var M=I._legendItemPos[1],L=at(I.legendItem.bBox.height),J=n.length;
if(!J||M-n[J-1]>x){n.push(p||M)
}s===G.length-1&&M+L-n[J-1]>x&&n.push(M);
M!==p&&(p=M)
});
if(!w){w=E.clipRect=C.clipRect(0,this.padding,9999,0),E.contentGroup.clip(w)
}w.attr({height:x});
if(!r){this.nav=r=C.g().attr({zIndex:1}).add(this.group),this.up=C.symbol("triangle",0,0,t,t).on("click",function(){E.scroll(-1,u)
}).add(r),this.pager=C.text("",15,10).css(v.style).add(r),this.down=C.symbol("triangle-down",0,0,t,t).on("click",function(){E.scroll(1,u)
}).add(r)
}E.scroll(0);
F=z
}else{if(r){w.attr({height:D.chartHeight}),r.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0
}}return F
},scroll:function(y,x){var w=this.pages,v=w.length,u=this.currentPage+y,t=this.clipHeight,s=this.options.navigation,r=s.activeColor,s=s.inactiveColor,p=this.pager,n=this.padding;
u>v&&(u=v);
if(u>0){x!==av&&bs(x,this.chart),this.nav.attr({translateX:n,translateY:t+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:u===1?s:r}).css({cursor:u===1?"default":"pointer"}),p.attr({text:u+"/"+v}),this.down.attr({x:18+this.pager.getBBox().width,fill:u===v?s:r}).css({cursor:u===v?"default":"pointer"}),w=-w[u-1]+this.initialItemY,this.scrollGroup.animate({translateY:w}),this.currentPage=u,this.positionCheckboxes(w)
}}};
aX=Highcharts.LegendSymbolMixin={drawRectangle:function(p,n){var r=p.options.symbolHeight||12;
n.legendSymbol=this.chart.renderer.rect(0,p.baseline-5-r/2,p.symbolWidth,r,aC(p.options.symbolRadius,2)).attr({zIndex:3}).add(n.legendGroup)
},drawLineMarker:function(p){var n=this.options,v=n.marker,u;
u=p.symbolWidth;
var t=this.chart.renderer,s=this.legendGroup,p=p.baseline-at(t.fontMetrics(p.options.itemStyle.fontSize).b*0.3),r;
if(n.lineWidth){r={"stroke-width":n.lineWidth};
if(n.dashStyle){r.dashstyle=n.dashStyle
}this.legendLine=t.path(["M",0,p,"L",u,p]).attr(r).add(s)
}if(v&&v.enabled){n=v.radius,this.legendSymbol=u=t.symbol(this.symbol,u/2-n,p-n,2*n,2*n).add(s),u.isMarker=!0
}}};
/Trident\/7\.0/.test(bX)&&aQ(bt.prototype,"positionItem",function(p,n){var s=this,r=function(){n._legendItemPos&&p.call(s,n)
};
s.chart.renderer.forExport?r():setTimeout(r)
});
bO.prototype={init:function(p,n){var v,u=p.series;
p.series=null;
v=ar(be,p);
v.series=p.series=u;
this.userOptions=p;
u=v.chart;
this.margin=this.splashArray("margin",u);
this.spacing=this.splashArray("spacing",u);
var t=u.events;
this.bounds={h:{},v:{}};
this.callback=n;
this.isResizing=0;
this.options=v;
this.axes=[];
this.series=[];
this.hasCartesianSeries=u.showAxes;
var s=this,r;
s.index=bk.length;
bk.push(s);
u.reflow!==!1&&bf(s,"load",function(){s.initReflow()
});
if(t){for(r in t){bf(s,r,t[r])
}}s.xAxis=[];
s.yAxis=[];
s.animation=ac?!1:aC(u.animation,!0);
s.pointCount=0;
s.counters=new bP;
s.firstRender()
},initSeries:function(p){var n=this.options.chart;
(n=a5[p.type||n.type||n.defaultSeriesType])||h(17,!0);
n=new n;
n.init(this,p);
return n
},isInsidePlot:function(p,n,s){var r=s?n:p,p=s?p:n;
return r>=0&&r<=this.plotWidth&&p>=0&&p<=this.plotHeight
},adjustTickAmounts:function(){this.options.chart.alignTicks!==!1&&az(this.axes,function(n){n.adjustTickAmount()
});
this.maxTicks=null
},redraw:function(D){var C=this.axes,A=this.series,z=this.pointer,y=this.legend,x=this.isDirtyLegend,w,v,u=this.isDirtyBox,t=A.length,s=t,r=this.renderer,p=r.isHidden(),n=[];
bs(D,this);
p&&this.cloneRenderTo();
for(this.layOutTitles();
s--;
){if(D=A[s],D.options.stacking&&(w=!0,D.isDirty)){v=!0;
break
}}if(v){for(s=t;
s--;
){if(D=A[s],D.options.stacking){D.isDirty=!0
}}}az(A,function(E){E.isDirty&&E.options.legendType==="point"&&(x=!0)
});
if(x&&y.options.enabled){y.render(),this.isDirtyLegend=!1
}w&&this.getStacks();
if(this.hasCartesianSeries){if(!this.isResizing){this.maxTicks=null,az(C,function(E){E.setScale()
})
}this.adjustTickAmounts();
this.getMargins();
az(C,function(E){E.isDirty&&(u=!0)
});
az(C,function(E){if(E.isDirtyExtremes){E.isDirtyExtremes=!1,n.push(function(){bo(E,"afterSetExtremes",ay(E.eventArgs,E.getExtremes()));
delete E.eventArgs
})
}(u||w)&&E.redraw()
})
}u&&this.drawChartBox();
az(A,function(E){E.isDirty&&E.visible&&(!E.isCartesian||E.xAxis)&&E.redraw()
});
z&&z.reset&&z.reset(!0);
r.draw();
bo(this,"redraw");
p&&this.cloneRenderTo(!0);
az(n,function(E){E.call()
})
},get:function(p){var n=this.axes,t=this.series,s,r;
for(s=0;
s<n.length;
s++){if(n[s].options.id===p){return n[s]
}}for(s=0;
s<t.length;
s++){if(t[s].options.id===p){return t[s]
}}for(s=0;
s<t.length;
s++){r=t[s].points||[];
for(n=0;
n<r.length;
n++){if(r[n].id===p){return r[n]
}}}return null
},getAxes:function(){var p=this,n=this.options,r=n.xAxis=af(n.xAxis||{}),n=n.yAxis=af(n.yAxis||{});
az(r,function(t,s){t.index=s;
t.isX=!0
});
az(n,function(t,s){t.index=s
});
r=r.concat(n);
az(r,function(s){new l(p,s)
});
p.adjustTickAmounts()
},getSelectedPoints:function(){var n=[];
az(this.series,function(p){n=n.concat(o(p.points||[],function(r){return r.selected
}))
});
return n
},getSelectedSeries:function(){return o(this.series,function(n){return n.selected
})
},getStacks:function(){var n=this;
az(n.yAxis,function(p){if(p.stacks&&p.hasVisibleSeries){p.oldStacks=p.stacks
}});
az(n.series,function(p){if(p.options.stacking&&(p.visible===!0||n.options.chart.ignoreHiddenSeries===!1)){p.stackKey=p.type+aC(p.options.stack,"")
}})
},showResetZoom:function(){var p=this,n=be.lang,u=p.options.chart.resetZoomButton,t=u.theme,s=t.states,r=u.relativeTo==="chart"?null:"plotBox";
this.resetZoomButton=p.renderer.button(n.resetZoom,null,null,function(){p.zoomOut()
},t,s&&s.hover).attr({align:u.position.align,title:n.resetZoomTitle}).add().align(u.position,!1,r)
},zoomOut:function(){var n=this;
bo(n,"selection",{resetSelection:!0},function(){n.zoom()
})
},zoom:function(p){var n,t=this.pointer,s=!1,r;
!p||p.resetSelection?az(this.axes,function(u){n=u.zoom()
}):az(p.xAxis.concat(p.yAxis),function(u){var w=u.axis,v=w.isXAxis;
if(t[v?"zoomX":"zoomY"]||t[v?"pinchX":"pinchY"]){n=w.zoom(u.min,u.max),w.displayBtn&&(s=!0)
}});
r=this.resetZoomButton;
if(s&&!r){this.showResetZoom()
}else{if(!s&&aW(r)){this.resetZoomButton=r.destroy()
}}n&&this.redraw(aC(this.options.chart.animation,p&&p.animation,this.pointCount<100))
},pan:function(p,n){var t=this,s=t.hoverPoints,r;
s&&az(s,function(u){u.setState()
});
az(n==="xy"?[1,0]:[1],function(u){var A=p[u?"chartX":"chartY"],z=t[u?"xAxis":"yAxis"][0],y=t[u?"mouseDownX":"mouseDownY"],x=(z.pointRange||0)/2,w=z.getExtremes(),v=z.toValue(y-A,!0)+x,y=z.toValue(y+t[u?"plotWidth":"plotHeight"]-A,!0)-x;
z.series.length&&v>bc(w.dataMin,w.min)&&y<ax(w.dataMax,w.max)&&(z.setExtremes(v,y,!1,!1,{trigger:"pan"}),r=!0);
t[u?"mouseDownX":"mouseDownY"]=A
});
r&&t.redraw(!1);
bl(t.container,{cursor:"move"})
},setTitle:function(p,n){var r;
var u=this,t=u.options,s;
s=t.title=ar(t.title,p);
r=t.subtitle=ar(t.subtitle,n),t=r;
az([["title",p,s],["subtitle",n,t]],function(w){var v=w[0],y=u[v],x=w[1],w=w[2];
y&&x&&(u[v]=y=y.destroy());
w&&w.text&&!y&&(u[v]=u.renderer.text(w.text,0,0,w.useHTML).attr({align:w.align,"class":"highcharts-"+v,zIndex:w.zIndex||4}).css(w.style).add())
});
u.layOutTitles()
},layOutTitles:function(){var p=0,n=this.title,u=this.subtitle,t=this.options,s=t.title,t=t.subtitle,r=this.spacingBox.width-44;
if(n&&(n.css({width:(s.width||r)+"px"}).align(ay({y:15},s),!1,"spacingBox"),!s.floating&&!s.verticalAlign)){p=n.getBBox().height,p>=18&&p<=25&&(p=15)
}u&&(u.css({width:(t.width||r)+"px"}).align(ay({y:p+s.margin},t),!1,"spacingBox"),!t.floating&&!t.verticalAlign&&(p=bF(p+u.getBBox().height)));
this.titleOffset=p
},getChartSize:function(){var p=this.options.chart,n=this.renderToClone||this.renderTo;
this.containerWidth=ad(n,"width");
this.containerHeight=ad(n,"height");
this.chartWidth=ax(0,p.width||this.containerWidth||600);
this.chartHeight=ax(0,aC(p.height,this.containerHeight>19?this.containerHeight:400))
},cloneRenderTo:function(p){var n=this.renderToClone,r=this.container;
p?n&&(this.renderTo.appendChild(r),bJ(n),delete this.renderToClone):(r&&r.parentNode===this.renderTo&&this.renderTo.removeChild(r),this.renderToClone=n=this.renderTo.cloneNode(0),bl(n,{position:"absolute",top:"-9999px",display:"block"}),ap.body.appendChild(n),r&&n.appendChild(r))
},getContainer:function(){var p,n=this.options.chart,t,s,r;
this.renderTo=p=n.renderTo;
r="highcharts-"+aL++;
if(bQ(p)){this.renderTo=p=ap.getElementById(p)
}p||h(13,!0);
t=ao(au(p,"data-highcharts-chart"));
!isNaN(t)&&bk[t]&&bk[t].destroy();
au(p,"data-highcharts-chart",this.index);
p.innerHTML="";
p.offsetWidth||this.cloneRenderTo();
this.getChartSize();
t=this.chartWidth;
s=this.chartHeight;
this.container=p=aV(bU,{className:"highcharts-container"+(n.className?" "+n.className:""),id:r},ay({position:"relative",overflow:"hidden",width:t+"px",height:s+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},n.style),this.renderToClone||p);
this._cursor=p.style.cursor;
this.renderer=n.forExport?new aM(p,t,s,!0):new d(p,t,s);
ac&&this.renderer.create(this,p,t,s)
},getMargins:function(){var z=this.spacing,y,x=this.legend,w=this.margin,v=this.options.legend,u=aC(v.margin,10),t=v.x,s=v.y,r=v.align,p=v.verticalAlign,n=this.titleOffset;
this.resetMargins();
y=this.axisOffset;
if(n&&!aw(w[0])){this.plotTop=ax(this.plotTop,n+this.options.title.margin+z[0])
}if(x.display&&!v.floating){if(r==="right"){if(!aw(w[1])){this.marginRight=ax(this.marginRight,x.legendWidth-t+u+z[1])
}}else{if(r==="left"){if(!aw(w[3])){this.plotLeft=ax(this.plotLeft,x.legendWidth+t+u+z[3])
}}else{if(p==="top"){if(!aw(w[0])){this.plotTop=ax(this.plotTop,x.legendHeight+s+u+z[0])
}}else{if(p==="bottom"&&!aw(w[2])){this.marginBottom=ax(this.marginBottom,x.legendHeight-s+u+z[2])
}}}}}this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);
this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);
this.hasCartesianSeries&&az(this.axes,function(A){A.getOffset()
});
aw(w[3])||(this.plotLeft+=y[3]);
aw(w[0])||(this.plotTop+=y[0]);
aw(w[2])||(this.marginBottom+=y[2]);
aw(w[1])||(this.marginRight+=y[1]);
this.setChartSize()
},reflow:function(p){var n=this,u=n.options.chart,t=n.renderTo,s=u.width||ad(t,"width"),r=u.height||ad(t,"height"),u=p?p.target:bn,t=function(){if(n.container){n.setSize(s,r,!1),n.hasUserSize=null
}};
if(!n.hasUserSize&&s&&r&&(u===bn||u===ap)){if(s!==n.containerWidth||r!==n.containerHeight){clearTimeout(n.reflowTimeout),p?n.reflowTimeout=setTimeout(t,100):t()
}n.containerWidth=s;
n.containerHeight=r
}},initReflow:function(){var p=this,n=function(r){p.reflow(r)
};
bf(bn,"resize",n);
bf(p,"destroy",function(){aR(bn,"resize",n)
})
},setSize:function(p,n,v){var u=this,t,s,r;
u.isResizing+=1;
r=function(){u&&bo(u,"endResize",null,function(){u.isResizing-=1
})
};
bs(v,u);
u.oldChartHeight=u.chartHeight;
u.oldChartWidth=u.chartWidth;
if(aw(p)){u.chartWidth=t=ax(0,at(p)),u.hasUserSize=!!t
}if(aw(n)){u.chartHeight=s=ax(0,at(n))
}(aI?f:bl)(u.container,{width:t+"px",height:s+"px"},aI);
u.setChartSize(!0);
u.renderer.setSize(t,s,v);
u.maxTicks=null;
az(u.axes,function(w){w.isDirty=!0;
w.setScale()
});
az(u.series,function(w){w.isDirty=!0
});
u.isDirtyLegend=!0;
u.isDirtyBox=!0;
u.getMargins();
u.redraw(v);
u.oldChartHeight=null;
bo(u,"resize");
aI===!1?r():setTimeout(r,aI&&aI.duration||500)
},setChartSize:function(A){var z=this.inverted,y=this.renderer,x=this.chartWidth,w=this.chartHeight,v=this.options.chart,u=this.spacing,t=this.clipOffset,s,r,p,n;
this.plotLeft=s=at(this.plotLeft);
this.plotTop=r=at(this.plotTop);
this.plotWidth=p=ax(0,at(x-s-this.marginRight));
this.plotHeight=n=ax(0,at(w-r-this.marginBottom));
this.plotSizeX=z?n:p;
this.plotSizeY=z?p:n;
this.plotBorderWidth=v.plotBorderWidth||0;
this.spacingBox=y.spacingBox={x:u[3],y:u[0],width:x-u[3]-u[1],height:w-u[0]-u[2]};
this.plotBox=y.plotBox={x:s,y:r,width:p,height:n};
x=2*a3(this.plotBorderWidth/2);
z=bF(ax(x,t[3])/2);
y=bF(ax(x,t[0])/2);
this.clipBox={x:z,y:y,width:a3(this.plotSizeX-ax(x,t[1])/2-z),height:a3(this.plotSizeY-ax(x,t[2])/2-y)};
A||az(this.axes,function(C){C.setAxisSize();
C.setAxisTranslation()
})
},resetMargins:function(){var p=this.spacing,n=this.margin;
this.plotTop=aC(n[0],p[0]);
this.marginRight=aC(n[1],p[1]);
this.marginBottom=aC(n[2],p[2]);
this.plotLeft=aC(n[3],p[3]);
this.axisOffset=[0,0,0,0];
this.clipOffset=[0,0,0,0]
},drawChartBox:function(){var S=this.options.chart,R=this.renderer,Q=this.chartWidth,P=this.chartHeight,O=this.chartBackground,N=this.plotBackground,M=this.plotBorder,L=this.plotBGImage,J=S.borderWidth||0,I=S.backgroundColor,G=S.plotBackgroundColor,F=S.plotBackgroundImage,E=S.plotBorderWidth||0,z,C=this.plotLeft,D=this.plotTop,A=this.plotWidth,x=this.plotHeight,y=this.plotBox,v=this.clipRect,u=this.clipBox;
z=J+(S.shadow?8:0);
if(J||I){if(O){O.animate(O.crisp(null,null,null,Q-z,P-z))
}else{O={fill:I||aY};
if(J){O.stroke=S.borderColor,O["stroke-width"]=J
}this.chartBackground=R.rect(z/2,z/2,Q-z,P-z,S.borderRadius,J).attr(O).add().shadow(S.shadow)
}}if(G){N?N.animate(y):this.plotBackground=R.rect(C,D,A,x,0).attr({fill:G}).add().shadow(S.plotShadow)
}if(F){L?L.animate(y):this.plotBGImage=R.image(F,C,D,A,x).add()
}v?v.animate({width:u.width,height:u.height}):this.clipRect=R.clipRect(u);
if(E){M?M.animate(M.crisp(null,C,D,A,x)):this.plotBorder=R.rect(C,D,A,x,0,-E).attr({stroke:S.plotBorderColor,"stroke-width":E,zIndex:1}).add()
}this.isDirtyBox=!1
},propFromSeries:function(){var p=this,n=p.options.chart,u,t=p.options.series,s,r;
az(["inverted","angular","polar"],function(v){u=a5[n.type||n.defaultSeriesType];
r=p[v]||n[v]||u&&u.prototype[v];
for(s=t&&t.length;
!r&&s--;
){(u=a5[t[s].type])&&u.prototype[v]&&(r=!0)
}p[v]=r
})
},linkSeries:function(){var p=this,n=p.series;
az(n,function(r){r.linkedSeries.length=0
});
az(n,function(r){var s=r.options.linkedTo;
if(bQ(s)&&(s=s===":previous"?p.series[r.index-1]:p.get(s))){s.linkedSeries.push(r),r.linkedParent=s
}})
},render:function(){var p=this,n=p.axes,v=p.renderer,u=p.options,t=u.labels,s=u.credits,r;
p.setTitle();
p.legend=new bt(p,u.legend);
p.getStacks();
az(n,function(w){w.setScale()
});
p.getMargins();
p.maxTicks=null;
az(n,function(w){w.setTickPositions(!0);
w.setMaxTicks()
});
p.adjustTickAmounts();
p.getMargins();
p.drawChartBox();
p.hasCartesianSeries&&az(n,function(w){w.render()
});
if(!p.seriesGroup){p.seriesGroup=v.g("series-group").attr({zIndex:3}).add()
}az(p.series,function(w){w.translate();
w.setTooltipPoints();
w.render()
});
t.items&&az(t.items,function(w){var z=ay(t.style,w.style),y=ao(z.left)+p.plotLeft,x=ao(z.top)+p.plotTop+12;
delete z.left;
delete z.top;
v.text(w.html,y,x).attr({zIndex:2}).css(z).add()
});
if(s.enabled&&!p.credits){r=s.href,p.credits=v.text(s.text,0,0).on("click",function(){if(r){location.href=r
}}).attr({align:s.position.align,zIndex:8}).css(s.style).add().align(s.position)
}p.hasRendered=!0
},destroy:function(){var p=this,n=p.axes,u=p.series,t=p.container,s,r=t&&t.parentNode;
bo(p,"destroy");
bk[p.index]=av;
p.renderTo.removeAttribute("data-highcharts-chart");
aR(p);
for(s=n.length;
s--;
){n[s]=n[s].destroy()
}for(s=u.length;
s--;
){u[s]=u[s].destroy()
}az("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(v){var w=p[v];
w&&w.destroy&&(p[v]=w.destroy())
});
if(t){t.innerHTML="",aR(t),r&&bJ(t)
}for(s in p){delete p[s]
}},isReadyToRender:function(){var n=this;
return !aT&&bn==bn.top&&ap.readyState!=="complete"||ac&&!bn.canvg?(ac?bW.push(function(){n.firstRender()
},n.options.global.canvasToolsURL):ap.attachEvent("onreadystatechange",function(){ap.detachEvent("onreadystatechange",n.firstRender);
ap.readyState==="complete"&&n.firstRender()
}),!1):!0
},firstRender:function(){var p=this,n=p.options,r=p.callback;
if(p.isReadyToRender()){p.getContainer(),bo(p,"init"),p.resetMargins(),p.setChartSize(),p.propFromSeries(),p.getAxes(),az(n.series||[],function(s){p.initSeries(s)
}),p.linkSeries(),bo(p,"beforeRender"),p.pointer=new bm(p,n),p.render(),p.renderer.draw(),r&&r.apply(p,[p]),az(p.callbacks,function(s){s.apply(p,[p])
}),p.cloneRenderTo(!0),bo(p,"load")
}},splashArray:function(p,n){var r=n[p],r=aW(r)?r:[r,r,r,r];
return[aC(n[p+"Top"],r[0]),aC(n[p+"Right"],r[1]),aC(n[p+"Bottom"],r[2]),aC(n[p+"Left"],r[3])]
}};
bO.prototype.callbacks=[];
var a=Highcharts.CenteredSeriesMixin={getCenter:function(){var p=this.options,n=this.chart,w=2*(p.slicedOffset||0),v,u=n.plotWidth-2*w,t=n.plotHeight-2*w,n=p.center,p=[aC(n[0],"50%"),aC(n[1],"50%"),p.size||"100%",p.innerSize||0],s=bc(u,t),r;
return H(p,function(y,x){r=/%$/.test(y);
v=x<2||x===2&&r;
return(r?[u,t,s,s][x]*ao(y)/100:y)+(v?w:0)
})
}},aK=function(){};
aK.prototype={init:function(p,n,r){this.series=p;
this.applyOptions(n,r);
this.pointAttr={};
if(p.options.colorByPoint&&(n=p.options.colors||p.chart.options.colors,this.color=this.color||n[p.colorCounter++],p.colorCounter===n.length)){p.colorCounter=0
}p.chart.pointCount++;
return this
},applyOptions:function(p,n){var s=this.series,r=s.pointValKey,p=aK.prototype.optionsToObject.call(this,p);
ay(this,p);
this.options=this.options?ay(this.options,p):p;
if(r){this.y=this[r]
}if(this.x===av&&s){this.x=n===av?s.autoIncrement():n
}return this
},optionsToObject:function(p){var n={},v=this.series,u=v.pointArrayMap||["y"],t=u.length,s=0,r=0;
if(typeof p==="number"||p===null){n[u[0]]=p
}else{if(ak(p)){if(p.length>t){v=typeof p[0];
if(v==="string"){n.name=p[0]
}else{if(v==="number"){n.x=p[0]
}}s++
}for(;
r<t;
){n[u[r++]]=p[s++]
}}else{if(typeof p==="object"){n=p;
if(p.dataLabels){v._hasPointLabels=!0
}if(p.marker){v._hasPointMarkers=!0
}}}}return n
},destroy:function(){var p=this.series.chart,n=p.hoverPoints,r;
p.pointCount--;
if(n&&(this.setState(),a9(n,this),!n.length)){p.hoverPoints=null
}if(this===p.hoverPoint){this.onMouseOut()
}if(this.graphic||this.dataLabel){aR(this),this.destroyElements()
}this.legendItem&&p.legend.destroyItem(this);
for(r in this){this[r]=null
}},destroyElements:function(){for(var p="graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","),n,r=6;
r--;
){n=p[r],this[n]&&(this[n]=this[n].destroy())
}},getLabelConfig:function(){return{x:this.category,y:this.y,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}
},select:function(p,n){var t=this,s=t.series,r=s.chart,p=aC(p,!t.selected);
t.firePointEvent(p?"select":"unselect",{accumulate:n},function(){t.selected=t.options.selected=p;
s.options.data[bH(t,s.data)]=t.options;
t.setState(p&&"select");
n||az(r.getSelectedPoints(),function(u){if(u.selected&&u!==t){u.selected=u.options.selected=!1,s.options.data[bH(u,s.data)]=u.options,u.setState(""),u.firePointEvent("unselect")
}})
})
},onMouseOver:function(p){var n=this.series,t=n.chart,s=t.tooltip,r=t.hoverPoint;
if(r&&r!==this){r.onMouseOut()
}this.firePointEvent("mouseOver");
s&&(!s.shared||n.noSharedTooltip)&&s.refresh(this,p);
this.setState("hover");
t.hoverPoint=this
},onMouseOut:function(){var p=this.series.chart,n=p.hoverPoints;
if(!n||bH(this,n)===-1){this.firePointEvent("mouseOut"),this.setState(),p.hoverPoint=null
}},tooltipFormatter:function(p){var n=this.series,u=n.tooltipOptions,t=aC(u.valueDecimals,""),s=u.valuePrefix||"",r=u.valueSuffix||"";
az(n.pointArrayMap||["y"],function(v){v="{point."+v;
if(s||r){p=p.replace(v+"}",s+v+"}"+r)
}p=p.replace(v+"}",v+":,."+t+"f}")
});
return i(p,{point:this,series:this.series})
},firePointEvent:function(p,n,t){var s=this,r=this.series.options;
(r.point.events[p]||s.options&&s.options.events&&s.options.events[p])&&this.importEvents();
p==="click"&&r.allowPointSelect&&(t=function(u){s.select(null,u.ctrlKey||u.metaKey||u.shiftKey)
});
bo(this,p,n,t)
},importEvents:function(){if(!this.hasImportedEvents){var p=ar(this.series.options.point,this.options).events,n;
this.events=p;
for(n in p){bf(this,n,p[n])
}this.hasImportedEvents=!0
}},setState:function(D,C){var A=this.plotX,z=this.plotY,y=this.series,x=y.options.states,w=aP[y.type].marker&&y.options.marker,v=w&&!w.enabled,u=w&&w.states[D],t=u&&u.enabled===!1,s=y.stateMarkerGraphic,r=this.marker||{},p=y.chart,n=this.pointAttr,D=D||"",C=C&&s;
if(!(D===this.state&&!C||this.selected&&D!=="select"||x[D]&&x[D].enabled===!1||D&&(t||v&&!u.enabled)||D&&r.states&&r.states[D]&&r.states[D].enabled===!1)){if(this.graphic){x=w&&this.graphic.symbolName&&n[D].r,this.graphic.attr(ar(n[D],x?{x:A-x,y:z-x,width:2*x,height:2*x}:{}))
}else{if(D&&u){if(x=u.radius,r=r.symbol||y.symbol,s&&s.currentSymbol!==r&&(s=s.destroy()),s){s[C?"animate":"attr"]({x:A-x,y:z-x})
}else{y.stateMarkerGraphic=s=p.renderer.symbol(r,A-x,z-x,2*x,2*x).attr(n[D]).add(y.markerGroup),s.currentSymbol=r
}}if(s){s[D&&p.isInsidePlot(A,z,p.inverted)?"show":"hide"]()
}}this.state=D
}}};
var a1=function(){};
a1.prototype={isCartesian:!0,type:"line",pointClass:aK,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],init:function(p,n){var v=this,u,t,s=p.series,r=function(x,w){return aC(x.options.index,x._i)-aC(w.options.index,w._i)
};
v.chart=p;
v.options=n=v.setOptions(n);
v.linkedSeries=[];
v.bindAxes();
ay(v,{name:n.name,state:"",pointAttr:{},visible:n.visible!==!1,selected:n.selected===!0});
if(ac){n.animation=!1
}t=n.events;
for(u in t){bf(v,u,t[u])
}if(t&&t.click||n.point&&n.point.events&&n.point.events.click||n.allowPointSelect){p.runTrackerClick=!0
}v.getColor();
v.getSymbol();
az(v.parallelArrays,function(w){v[w+"Data"]=[]
});
v.setData(n.data,!1);
if(v.isCartesian){p.hasCartesianSeries=!0
}s.push(v);
v._i=s.length-1;
aH(s,r);
this.yAxis&&aH(this.yAxis.series,r);
az(s,function(x,w){x.index=w;
x.name=x.name||"Series "+(w+1)
})
},bindAxes:function(){var p=this,n=p.options,s=p.chart,r;
az(p.axisTypes||[],function(t){az(s[t],function(u){r=u.options;
if(n[t]===r.index||n[t]!==av&&n[t]===r.id||n[t]===av&&r.index===0){u.series.push(p),p[t]=u,u.isDirty=!0
}});
!p[t]&&p.optionalAxis!==t&&h(18,!0)
})
},updateParallelArrays:function(p,n){var s=p.series,r=arguments;
az(s.parallelArrays,typeof n==="number"?function(u){var t=u==="y"&&s.toYData?s.toYData(p):p[u];
s[u+"Data"][n]=t
}:function(t){Array.prototype[n].apply(s[t+"Data"],Array.prototype.slice.call(r,2))
})
},autoIncrement:function(){var p=this.options,n=this.xIncrement,n=aC(n,p.pointStart,0);
this.pointInterval=aC(this.pointInterval,p.pointInterval,1);
this.xIncrement=n+this.pointInterval;
return n
},getSegments:function(){var p=-1,n=[],t,s=this.points,r=s.length;
if(r){if(this.options.connectNulls){for(t=r;
t--;
){s[t].y===null&&s.splice(t,1)
}s.length&&(n=[s])
}else{az(s,function(v,u){v.y===null?(u>p+1&&n.push(s.slice(p+1,u)),p=u):u===r-1&&n.push(s.slice(p+1,u+1))
})
}}this.segments=n
},setOptions:function(p){var n=this.chart,t=n.options.plotOptions,n=n.userOptions||{},s=n.plotOptions||{},r=t[this.type];
this.userOptions=p;
t=ar(r,t.series,p);
this.tooltipOptions=ar(be.tooltip,be.plotOptions[this.type].tooltip,n.tooltip,s.series&&s.series.tooltip,s[this.type]&&s[this.type].tooltip,p.tooltip);
r.marker===null&&delete t.marker;
return t
},getColor:function(){var p=this.options,n=this.userOptions,t=this.chart.options.colors,s=this.chart.counters,r;
r=p.color||aP[this.type].color;
if(!r&&!p.colorByPoint){aw(n._colorIndex)?p=n._colorIndex:(n._colorIndex=s.color,p=s.color++),r=t[p]
}this.color=r;
s.wrapColor(t.length)
},getSymbol:function(){var p=this.userOptions,n=this.options.marker,s=this.chart,r=s.options.symbols,s=s.counters;
this.symbol=n.symbol;
if(!this.symbol){aw(p._symbolIndex)?p=p._symbolIndex:(p._symbolIndex=s.symbol,p=s.symbol++),this.symbol=r[p]
}if(/^url/.test(this.symbol)){n.radius=0
}s.wrapSymbol(r.length)
},drawLegendSymbol:aX.drawLineMarker,setData:function(D,C){var A=this,z=A.points,y=A.options,x=A.chart,w=null,v=A.xAxis,u=v&&!!v.categories,t;
A.xIncrement=null;
A.pointRange=u?1:y.pointRange;
A.colorCounter=0;
var D=D||[],s=D.length;
t=y.turboThreshold;
var r=this.xData,p=this.yData,n=A.pointArrayMap,n=n&&n.length;
az(this.parallelArrays,function(E){A[E+"Data"].length=0
});
if(t&&s>t){for(t=0;
w===null&&t<s;
){w=D[t],t++
}if(B(w)){u=aC(y.pointStart,0);
y=aC(y.pointInterval,1);
for(t=0;
t<s;
t++){r[t]=u,p[t]=D[t],u+=y
}A.xIncrement=u
}else{if(ak(w)){if(n){for(t=0;
t<s;
t++){y=D[t],r[t]=y[0],p[t]=y.slice(1,n+1)
}}else{for(t=0;
t<s;
t++){y=D[t],r[t]=y[0],p[t]=y[1]
}}}else{h(12)
}}}else{for(t=0;
t<s;
t++){if(D[t]!==av&&(y={series:A},A.pointClass.prototype.applyOptions.apply(y,[D[t]]),A.updateParallelArrays(y,t),u&&y.name)){v.names[y.x]=y.name
}}}bQ(p[0])&&h(14,!0);
A.data=[];
A.options.data=D;
for(t=z&&z.length||0;
t--;
){z[t]&&z[t].destroy&&z[t].destroy()
}if(v){v.minRange=v.userMinRange
}A.isDirty=A.isDirtyData=x.isDirtyBox=!0;
aC(C,!0)&&x.redraw(!1)
},processData:function(z){var y=this.xData,x=this.yData,w=y.length,v;
v=0;
var u,t,s=this.xAxis,r=this.options,p=r.cropThreshold,n=this.isCartesian;
if(n&&!this.isDirty&&!s.isDirty&&!this.yAxis.isDirty&&!z){return !1
}if(n&&this.sorted&&(!p||w>p||this.forceCrop)){if(z=s.min,s=s.max,y[w-1]<z||y[0]>s){y=[],x=[]
}else{if(y[0]<z||y[w-1]>s){v=this.cropData(this.xData,this.yData,z,s),y=v.xData,x=v.yData,v=v.start,u=!0
}}}for(s=y.length-1;
s>=0;
s--){w=y[s]-y[s-1],w>0&&(t===av||w<t)?t=w:w<0&&this.requireSorting&&h(15)
}this.cropped=u;
this.cropStart=v;
this.processedXData=y;
this.processedYData=x;
if(r.pointRange===null){this.pointRange=t||1
}this.closestPointRange=t
},cropData:function(x,w,v,u){var t=x.length,s=0,r=t,p=aC(this.cropShoulder,1),n;
for(n=0;
n<t;
n++){if(x[n]>=v){s=ax(0,n-p);
break
}}for(;
n<t;
n++){if(x[n]>u){r=n+p;
break
}}return{xData:x.slice(s,r),yData:w.slice(s,r),start:s,end:r}
},generatePoints:function(){var C=this.options.data,A=this.data,z,y=this.processedXData,x=this.processedYData,w=this.pointClass,v=y.length,u=this.cropStart||0,t,s=this.hasGroupedData,r,p=[],n;
if(!A&&!s){A=[],A.length=C.length,A=this.data=A
}for(n=0;
n<v;
n++){t=u+n,s?p[n]=(new w).init(this,[y[n]].concat(af(x[n]))):(A[t]?r=A[t]:C[t]!==av&&(A[t]=r=(new w).init(this,C[t],y[n])),p[n]=r)
}if(A&&(v!==(z=A.length)||s)){for(n=0;
n<z;
n++){if(n===u&&!s&&(n+=v),A[n]){A[n].destroyElements(),A[n].plotX=av
}}}this.data=A;
this.points=p
},setStackedPoints:function(){if(this.options.stacking&&!(this.visible!==!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var M=this.processedXData,L=this.processedYData,J=[],I=L.length,G=this.options,F=G.threshold,E=G.stack,G=G.stacking,D=this.stackKey,C="-"+D,A=this.negStacks,z=this.yAxis,y=z.stacks,x=z.oldStacks,t,v,w,u,s;
for(w=0;
w<I;
w++){u=M[w];
s=L[w];
v=(t=A&&s<F)?C:D;
y[v]||(y[v]={});
if(!y[v][u]){x[v]&&x[v][u]?(y[v][u]=x[v][u],y[v][u].total=null):y[v][u]=new bT(z,z.options.stackLabels,t,u,E,G)
}v=y[v][u];
v.points[this.index]=[v.cum||0];
G==="percent"?(t=t?D:C,A&&y[t]&&y[t][u]?(t=y[t][u],v.total=t.total=ax(t.total,v.total)+a4(s)||0):v.total=by(v.total+(a4(s)||0))):v.total=by(v.total+(s||0));
v.cum=(v.cum||0)+(s||0);
v.points[this.index].push(v.cum);
J[w]=v.cum
}if(G==="percent"){z.usePercentage=!0
}this.stackedYData=J;
z.oldStacks={}
}},setPercentStacks:function(){var p=this,n=p.stackKey,r=p.yAxis.stacks;
az([n,"-"+n],function(s){var w;
for(var v=p.xData.length,u,t;
v--;
){if(u=p.xData[v],w=(t=r[s]&&r[s][u])&&t.points[p.index],u=w){t=t.total?100/t.total:0,u[0]=by(u[0]*t),u[1]=by(u[1]*t),p.stackedYData[v]=u[1]
}}})
},getExtremes:function(A){var z=this.yAxis,y=this.processedXData,x,w=[],v=0;
x=this.xAxis.getExtremes();
var u=x.min,t=x.max,s,r,p,n,A=A||this.stackedYData||this.processedYData;
x=A.length;
for(n=0;
n<x;
n++){if(r=y[n],p=A[n],s=p!==null&&p!==av&&(!z.isLog||p.length||p>0),r=this.getExtremesFromAll||this.cropped||(y[n+1]||r)>=u&&(y[n-1]||r)<=t,s&&r){if(s=p.length){for(;
s--;
){p[s]!==null&&(w[v++]=p[s])
}}else{w[v++]=p
}}}this.dataMin=aC(void 0,m(w));
this.dataMax=aC(void 0,bv(w))
},translate:function(){this.processedXData||this.processData();
this.generatePoints();
for(var G=this.options,F=G.stacking,E=this.xAxis,D=E.categories,C=this.yAxis,A=this.points,z=A.length,y=!!this.modifyValue,x=G.pointPlacement,w=x==="between"||B(x),v=G.threshold,G=0;
G<z;
G++){var u=A[G],t=u.x,n=u.y,s=u.low,r=F&&C.stacks[(this.negStacks&&n<v?"-":"")+this.stackKey];
if(C.isLog&&n<=0){u.y=n=null
}u.plotX=E.translate(t,0,0,0,1,x,this.type==="flags");
if(F&&this.visible&&r&&r[t]){r=r[t],n=r.points[this.index],s=n[0],n=n[1],s===0&&(s=aC(v,C.min)),C.isLog&&s<=0&&(s=null),u.total=u.stackTotal=r.total,u.percentage=F==="percent"&&u.y/r.total*100,u.stackY=n,r.setOffset(this.pointXOffset||0,this.barW||0)
}u.yBottom=aw(s)?C.translate(s,0,1,0,1):null;
y&&(n=this.modifyValue(n,u));
u.plotY=typeof n==="number"&&n!==Infinity?C.translate(n,0,1,0,1):av;
u.clientX=w?E.translate(t,0,0,0,1):u.plotX;
u.negative=u.y<(v||0);
u.category=D&&D[u.x]!==av?D[u.x]:u.x
}this.getSegments()
},setTooltipPoints:function(y){var x=[],w,v,u=this.xAxis,t=u&&u.getExtremes(),s=u?u.tooltipLen||u.len:this.chart.plotSizeX,r,p,n=[];
if(this.options.enableMouseTracking!==!1){if(y){this.tooltipPoints=null
}az(this.segments||this.points,function(z){x=x.concat(z)
});
u&&u.reversed&&(x=x.reverse());
this.orderTooltipPoints&&this.orderTooltipPoints(x);
y=x.length;
for(p=0;
p<y;
p++){if(u=x[p],w=u.x,w>=t.min&&w<=t.max){r=x[p+1];
w=v===av?0:v+1;
for(v=x[p+1]?bc(ax(0,a3((u.clientX+(r?r.wrappedClientX||r.clientX:s))/2)),s):s;
w>=0&&w<=v;
){n[w++]=u
}}}this.tooltipPoints=n
}},tooltipHeaderFormatter:function(p){var n=this.tooltipOptions,v=n.dateTimeLabelFormats,u=n.xDateFormat,t=this.xAxis,s=t&&t.options.type==="datetime",n=n.headerFormat,t=t&&t.closestPointRange,r;
if(s&&!u){if(t){for(r in bi){if(bi[r]>=t){u=v[r];
break
}}}else{u=v.day
}u=u||v.year
}s&&u&&B(p.key)&&(n=n.replace("{point.key}","{point.key:"+u+"}"));
return i(n,{point:p,series:this})
},onMouseOver:function(){var p=this.chart,n=p.hoverSeries;
if(n&&n!==this){n.onMouseOut()
}this.options.events.mouseOver&&bo(this,"mouseOver");
this.setState("hover");
p.hoverSeries=this
},onMouseOut:function(){var p=this.options,n=this.chart,s=n.tooltip,r=n.hoverPoint;
if(r){r.onMouseOut()
}this&&p.events.mouseOut&&bo(this,"mouseOut");
s&&!p.stickyTracking&&(!s.shared||this.noSharedTooltip)&&s.hide();
this.setState();
n.hoverSeries=null
},animate:function(p){var n=this,w=n.chart,v=w.renderer,u;
u=n.options.animation;
var t=w.clipBox,s=w.inverted,r;
if(u&&!aW(u)){u=aP[n.type].animation
}r="_sharedClip"+u.duration+u.easing;
if(p){p=w[r],u=w[r+"m"],p||(w[r]=p=v.clipRect(ay(t,{width:0})),w[r+"m"]=u=v.clipRect(-99,s?-w.plotLeft:-w.plotTop,99,s?w.chartWidth:w.chartHeight)),n.group.clip(p),n.markerGroup.clip(u),n.sharedClipKey=r
}else{if(p=w[r]){p.animate({width:w.plotSizeX},u),w[r+"m"].animate({width:w.plotSizeX+99},u)
}n.animate=null;
n.animationTimeout=setTimeout(function(){n.afterAnimate()
},u.duration)
}},afterAnimate:function(){var p=this.chart,n=this.sharedClipKey,r=this.group;
r&&this.options.clip!==!1&&(r.clip(p.clipRect),this.markerGroup.clip());
setTimeout(function(){n&&p[n]&&(p[n]=p[n].destroy(),p[n+"m"]=p[n+"m"].destroy())
},100)
},drawPoints:function(){var D,C=this.points,A=this.chart,z,y,x,w,v,u,t,s,r=this.options.marker,p,n=this.markerGroup;
if(r.enabled||this._hasPointMarkers){for(x=C.length;
x--;
){if(w=C[x],z=a3(w.plotX),y=w.plotY,s=w.graphic,u=w.marker||{},D=r.enabled&&u.enabled===av||u.enabled,p=A.isInsidePlot(at(z),y,A.inverted),D&&y!==av&&!isNaN(y)&&w.y!==null){if(D=w.pointAttr[w.selected?"select":""],v=D.r,u=aC(u.symbol,this.symbol),t=u.indexOf("url")===0,s){s.attr({visibility:p?aT?"inherit":"visible":"hidden"}).animate(ay({x:z-v,y:y-v},s.symbolName?{width:2*v,height:2*v}:{}))
}else{if(p&&(v>0||t)){w.graphic=A.renderer.symbol(u,z-v,y-v,2*v,2*v).attr(D).add(n)
}}}else{if(s){w.graphic=s.destroy()
}}}}},convertAttribs:function(p,n,w,v){var u=this.pointAttrToOptions,t,s,r={},p=p||{},n=n||{},w=w||{},v=v||{};
for(t in u){s=u[t],r[t]=aC(p[s],n[t],w[t],v[t])
}return r
},getAttribs:function(){var G=this,F=G.options,E=aP[G.type].marker?F.marker:F,D=E.states,C=D.hover,A,z=G.color,y={stroke:z,fill:z},x=G.points||[],w=[],v,u=G.pointAttrToOptions,t=F.negativeColor,r=E.lineColor,p=E.fillColor,I;
F.marker?(C.radius=C.radius||E.radius+2,C.lineWidth=C.lineWidth||E.lineWidth+1):C.color=C.color||bq(C.color||z).brighten(C.brightness).get();
w[""]=G.convertAttribs(E,y);
az(["hover","select"],function(n){w[n]=G.convertAttribs(D[n],w[""])
});
G.pointAttr=w;
for(z=x.length;
z--;
){y=x[z];
if((E=y.options&&y.options.marker||y.options)&&E.enabled===!1){E.radius=0
}if(y.negative&&t){y.color=y.fillColor=t
}v=F.colorByPoint||y.color;
if(y.options){for(I in u){aw(E[u[I]])&&(v=!0)
}}if(v){E=E||{};
v=[];
D=E.states||{};
A=D.hover=D.hover||{};
if(!F.marker){A.color=bq(A.color||y.color).brighten(A.brightness||C.brightness).get()
}A={color:y.color};
if(!p){A.fillColor=y.color
}if(!r){A.lineColor=y.color
}v[""]=G.convertAttribs(ay(A,E),w[""]);
v.hover=G.convertAttribs(D.hover,w.hover,v[""]);
v.select=G.convertAttribs(D.select,w.select,v[""])
}else{v=w
}y.pointAttr=v
}},destroy:function(){var x=this,w=x.chart,v=/AppleWebKit\/533/.test(bX),u,t,s=x.data||[],r,p,n;
bo(x,"destroy");
aR(x);
az(x.axisTypes||[],function(y){if(n=x[y]){a9(n.series,x),n.isDirty=n.forceRedraw=!0
}});
x.legendItem&&x.chart.legend.destroyItem(x);
for(t=s.length;
t--;
){(r=s[t])&&r.destroy&&r.destroy()
}x.points=null;
clearTimeout(x.animationTimeout);
az("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","),function(y){x[y]&&(u=v&&y==="group"?"hide":"destroy",x[y][u]())
});
if(w.hoverSeries===x){w.hoverSeries=null
}a9(w.series,x);
for(p in x){delete x[p]
}},getSegmentPath:function(p){var n=this,s=[],r=n.options.step;
az(p,function(x,w){var v=x.plotX,u=x.plotY,t;
n.getPointSpline?s.push.apply(s,n.getPointSpline(p,x,w)):(s.push(w?"L":"M"),r&&w&&(t=p[w-1],r==="right"?s.push(t.plotX,u):r==="center"?s.push((t.plotX+v)/2,t.plotY,(t.plotX+v)/2,u):s.push(v,t.plotY)),s.push(x.plotX,x.plotY))
});
return s
},getGraphPath:function(){var p=this,n=[],s,r=[];
az(p.segments,function(t){s=p.getSegmentPath(t);
t.length>1?n=n.concat(s):r.push(t[0])
});
p.singlePoints=r;
return p.graphPath=n
},drawGraph:function(){var p=this,n=this.options,w=[["graph",n.lineColor||this.color]],v=n.lineWidth,u=n.dashStyle,t=n.linecap!=="square",s=this.getGraphPath(),r=n.negativeColor;
r&&w.push(["graphNeg",r]);
az(w,function(A,z){var y=A[0],x=p[y];
if(x){bN(x),x.animate({d:s})
}else{if(v&&s.length){x={stroke:A[1],"stroke-width":v,zIndex:1},u?x.dashstyle=u:t&&(x["stroke-linecap"]=x["stroke-linejoin"]="round"),p[y]=p.chart.renderer.path(s).attr(x).add(p.group).shadow(!z&&n.shadow)
}}})
},clipNeg:function(){var A=this.options,z=this.chart,y=z.renderer,x=A.negativeColor||A.negativeFillColor,w,v=this.graph,u=this.area,t=this.posClip,s=this.negClip;
w=z.chartWidth;
var r=z.chartHeight,p=ax(w,r),n=this.yAxis;
if(x&&(v||u)){x=at(n.toPixels(A.threshold||0,!0));
x<0&&(p-=x);
A={x:0,y:0,width:p,height:x};
p={x:0,y:x,width:p,height:p};
if(z.inverted){A.height=p.y=z.plotWidth-x,y.isVML&&(A={x:z.plotWidth-x-z.plotLeft,y:0,width:w,height:r},p={x:x+z.plotLeft-w,y:0,width:z.plotLeft+x,height:w})
}n.reversed?(z=p,w=A):(z=A,w=p);
t?(t.animate(z),s.animate(w)):(this.posClip=t=y.clipRect(z),this.negClip=s=y.clipRect(w),v&&this.graphNeg&&(v.clip(t),this.graphNeg.clip(s)),u&&(u.clip(t),this.areaNeg.clip(s)))
}},invertGroups:function(){function p(){var s={width:n.yAxis.len,height:n.xAxis.len};
az(["group","markerGroup"],function(t){n[t]&&n[t].attr(s).invert()
})
}var n=this,r=n.chart;
if(n.xAxis){bf(r,"resize",p),bf(n,"destroy",function(){aR(r,"resize",p)
}),p(),n.invertGroups=p
}},plotGroup:function(p,n,v,u,t){var s=this[p],r=!s;
r&&(this[p]=s=this.chart.renderer.g(n).attr({visibility:v,zIndex:u||0.1}).add(t));
s[r?"attr":"animate"](this.getPlotBox());
return s
},getPlotBox:function(){return{translateX:this.xAxis?this.xAxis.left:this.chart.plotLeft,translateY:this.yAxis?this.yAxis.top:this.chart.plotTop,scaleX:1,scaleY:1}
},render:function(){var p=this.chart,n,w=this.options,v=w.animation&&!!this.animate&&p.renderer.isSVG,u=this.visible?"visible":"hidden",t=w.zIndex,s=this.hasRendered,r=p.seriesGroup;
n=this.plotGroup("group","series",u,t,r);
this.markerGroup=this.plotGroup("markerGroup","markers",u,t,r);
v&&this.animate(!0);
this.getAttribs();
n.inverted=this.isCartesian?p.inverted:!1;
this.drawGraph&&(this.drawGraph(),this.clipNeg());
this.drawDataLabels&&this.drawDataLabels();
this.visible&&this.drawPoints();
this.options.enableMouseTracking!==!1&&this.drawTracker();
p.inverted&&this.invertGroups();
w.clip!==!1&&!this.sharedClipKey&&!s&&n.clip(p.clipRect);
v?this.animate():s||this.afterAnimate();
this.isDirty=this.isDirtyData=!1;
this.hasRendered=!0
},redraw:function(){var p=this.chart,n=this.isDirtyData,t=this.group,s=this.xAxis,r=this.yAxis;
t&&(p.inverted&&t.attr({width:p.plotWidth,height:p.plotHeight}),t.animate({translateX:aC(s&&s.left,p.plotLeft),translateY:aC(r&&r.top,p.plotTop)}));
this.translate();
this.setTooltipPoints(!0);
this.render();
n&&bo(this,"updatedData")
},setState:function(p){var n=this.options,t=this.graph,s=this.graphNeg,r=n.states,n=n.lineWidth,p=p||"";
if(this.state!==p){this.state=p,r[p]&&r[p].enabled===!1||(p&&(n=r[p].lineWidth||n+1),t&&!t.dashstyle&&(p={"stroke-width":n},t.attr(p),s&&s.attr(p)))
}},setVisible:function(p,n){var w=this,v=w.chart,u=w.legendItem,t,s=v.options.chart.ignoreHiddenSeries,r=w.visible;
t=(w.visible=p=w.userOptions.visible=p===av?!r:p)?"show":"hide";
az(["group","dataLabelsGroup","markerGroup","tracker"],function(x){if(w[x]){w[x][t]()
}});
if(v.hoverSeries===w){w.onMouseOut()
}u&&v.legend.colorizeItem(w,p);
w.isDirty=!0;
w.options.stacking&&az(v.series,function(x){if(x.options.stacking&&x.visible){x.isDirty=!0
}});
az(w.linkedSeries,function(x){x.setVisible(p,!1)
});
if(s){v.isDirtyBox=!0
}n!==!1&&v.redraw();
bo(w,t)
},show:function(){this.setVisible(!0)
},hide:function(){this.setVisible(!1)
},select:function(n){this.selected=n=n===av?!this.selected:n;
if(this.checkbox){this.checkbox.checked=n
}bo(this,n?"select":"unselect")
},drawTracker:a7.drawTrackerGraph};
ay(bO.prototype,{addSeries:function(p,n,t){var s,r=this;
p&&(n=aC(n,!0),bo(r,"addSeries",{options:p},function(){s=r.initSeries(p);
r.isDirtyLegend=!0;
r.linkSeries();
n&&r.redraw(t)
}));
return s
},addAxis:function(p,n,u,t){var s=n?"xAxis":"yAxis",r=this.options;
new l(this,ar(p,{index:this[s].length,isX:n}));
r[s]=af(r[s]||{});
r[s].push(p);
aC(u,!0)&&this.redraw(t)
},showLoading:function(p){var n=this.options,s=this.loadingDiv,r=n.loading;
if(!s){this.loadingDiv=s=aV(bU,{className:"highcharts-loading"},ay(r.style,{zIndex:10,display:aY}),this.container),this.loadingSpan=aV("span",null,r.labelStyle,s)
}this.loadingSpan.innerHTML=p||n.lang.loading;
if(!this.loadingShown){bl(s,{opacity:0,display:"",left:this.plotLeft+"px",top:this.plotTop+"px",width:this.plotWidth+"px",height:this.plotHeight+"px"}),f(s,{opacity:r.style.opacity},{duration:r.showDuration||0}),this.loadingShown=!0
}},hideLoading:function(){var p=this.options,n=this.loadingDiv;
n&&f(n,{opacity:0},{duration:p.loading.hideDuration||100,complete:function(){bl(n,{display:aY})
}});
this.loadingShown=!1
}});
ay(aK.prototype,{update:function(y,x,w){var v=this,u=v.series,t=v.graphic,s,r=u.data,p=u.chart,n=u.options,x=aC(x,!0);
v.firePointEvent("update",{options:y},function(){v.applyOptions(y);
if(aW(y)){u.getAttribs();
if(t){y&&y.marker&&y.marker.symbol?v.graphic=t.destroy():t.attr(v.pointAttr[v.state||""])
}if(y&&y.dataLabels&&v.dataLabel){v.dataLabel=v.dataLabel.destroy()
}}s=bH(v,r);
u.updateParallelArrays(v,s);
n.data[s]=v.options;
u.isDirty=u.isDirtyData=!0;
if(!u.fixedBox&&u.hasCartesianSeries){p.isDirtyBox=!0
}n.legendType==="point"&&p.legend.destroyItem(v);
x&&p.redraw(w)
})
},remove:function(p,n){var w=this,v=w.series,u=v.points,t=v.chart,s,r=v.data;
bs(n,t);
p=aC(p,!0);
w.firePointEvent("remove",null,function(){s=bH(w,r);
r.length===u.length&&u.splice(s,1);
r.splice(s,1);
v.options.data.splice(s,1);
v.updateParallelArrays(w,"splice",s,1);
w.destroy();
v.isDirty=!0;
v.isDirtyData=!0;
p&&t.redraw()
})
}});
ay(a1.prototype,{addPoint:function(D,C,A,z){var y=this.options,x=this.data,w=this.graph,v=this.area,u=this.chart,t=this.xAxis&&this.xAxis.names,s=w&&w.shift||0,r=y.data,p,n=this.xData;
bs(z,u);
A&&az([w,v,this.graphNeg,this.areaNeg],function(E){if(E){E.shift=s+1
}});
if(v){v.isArea=!0
}C=aC(C,!0);
z={series:this};
this.pointClass.prototype.applyOptions.apply(z,[D]);
w=z.x;
v=n.length;
if(this.requireSorting&&w<n[v-1]){for(p=!0;
v&&n[v-1]>w;
){v--
}}this.updateParallelArrays(z,"splice",v,0,0);
this.updateParallelArrays(z,v);
if(t){t[w]=z.name
}r.splice(v,0,D);
p&&(this.data.splice(v,0,null),this.processData());
y.legendType==="point"&&this.generatePoints();
A&&(x[0]&&x[0].remove?x[0].remove(!1):(x.shift(),this.updateParallelArrays(z,"shift"),r.shift()));
this.isDirtyData=this.isDirty=!0;
C&&(this.getAttribs(),u.redraw())
},remove:function(p,n){var s=this,r=s.chart,p=aC(p,!0);
if(!s.isRemoving){s.isRemoving=!0,bo(s,"remove",null,function(){s.destroy();
r.isDirtyLegend=r.isDirtyBox=!0;
r.linkSeries();
p&&r.redraw(n)
})
}s.isRemoving=!1
},update:function(p,n){var u=this.chart,t=this.type,s=a5[t].prototype,r,p=ar(this.userOptions,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},p);
this.remove(!1);
for(r in s){s.hasOwnProperty(r)&&(this[r]=av)
}ay(this,a5[p.type||t].prototype);
this.init(u,p);
aC(n,!0)&&u.redraw(!1)
}});
ay(l.prototype,{update:function(p,n){var r=this.chart,p=r.options[this.coll][this.options.index]=ar(this.userOptions,p);
this.destroy(!0);
this._addedPlotLB=this.userMin=this.userMax=av;
this.init(r,ay(p,{events:av}));
r.isDirtyBox=!0;
aC(n,!0)&&r.redraw()
},remove:function(p){var n=this.chart,r=this.coll;
az(this.series,function(s){s.remove(!1)
});
a9(n.axes,this);
a9(n[r],this);
n.options[r].splice(this.options.index,1);
az(n[r],function(t,s){t.options.index=s
});
this.destroy();
n.isDirtyBox=!0;
aC(p,!0)&&n.redraw()
},setTitle:function(p,n){this.update({title:p},n)
},setCategories:function(p,n){this.update({categories:p},n)
}});
var aB=aF(a1);
a5.line=aB;
aP.area=ar(aS,{threshold:0});
var bw=aF(a1,{type:"area",getSegments:function(){var E=[],D=[],C=[],A=this.xAxis,z=this.yAxis,y=z.stacks[this.stackKey],x={},w,v,u=this.points,t=this.options.connectNulls,s,r,p;
if(this.options.stacking&&!this.cropped){for(r=0;
r<u.length;
r++){x[u[r].x]=u[r]
}for(p in y){y[p].total!==null&&C.push(+p)
}C.sort(function(F,n){return F-n
});
az(C,function(n){if(!t||x[n]&&x[n].y!==null){x[n]?D.push(x[n]):(w=A.translate(n),s=y[n].percent?y[n].total?y[n].cum*100/y[n].total:0:y[n].cum,v=z.toPixels(s,!0),D.push({y:null,plotX:w,clientX:w,plotY:v,yBottom:v,onMouseOver:bS}))
}});
D.length&&E.push(D)
}else{a1.prototype.getSegments.call(this),E=this.segments
}this.segments=E
},getSegmentPath:function(p){var n=a1.prototype.getSegmentPath.call(this,p),v=[].concat(n),u,t=this.options;
u=n.length;
var s=this.yAxis.getThreshold(t.threshold),r;
u===3&&v.push("L",n[1],n[2]);
if(t.stacking&&!this.closedStacks){for(u=p.length-1;
u>=0;
u--){r=aC(p[u].yBottom,s),u<p.length-1&&t.step&&v.push(p[u+1].plotX,r),v.push(p[u].plotX,r)
}}else{this.closeSegment(v,p,s)
}this.areaPath=this.areaPath.concat(v);
return n
},closeSegment:function(p,n,r){p.push("L",n[n.length-1].plotX,r,"L",n[0].plotX,r)
},drawGraph:function(){this.areaPath=[];
a1.prototype.drawGraph.apply(this);
var p=this,n=this.areaPath,u=this.options,t=u.negativeColor,s=u.negativeFillColor,r=[["area",this.color,u.fillColor]];
(t||s)&&r.push(["areaNeg",t,s]);
az(r,function(x){var w=x[0],v=p[w];
v?v.animate({d:n}):p[w]=p.chart.renderer.path(n).attr({fill:aC(x[2],bq(x[1]).setOpacity(aC(u.fillOpacity,0.75)).get()),zIndex:0}).add(p.group)
})
},drawLegendSymbol:aX.drawRectangle});
a5.area=bw;
aP.spline=ar(aS);
aB=aF(a1,{type:"spline",getPointSpline:function(A,z,y){var x=z.plotX,w=z.plotY,v=A[y-1],u=A[y+1],t,s,r,p;
if(v&&u){A=v.plotY;
r=u.plotX;
var u=u.plotY,n;
t=(1.5*x+v.plotX)/2.5;
s=(1.5*w+A)/2.5;
r=(1.5*x+r)/2.5;
p=(1.5*w+u)/2.5;
n=(p-s)*(r-x)/(r-t)+w-p;
s+=n;
p+=n;
s>A&&s>w?(s=ax(A,w),p=2*w-s):s<A&&s<w&&(s=bc(A,w),p=2*w-s);
p>u&&p>w?(p=ax(u,w),s=2*w-p):p<u&&p<w&&(p=bc(u,w),s=2*w-p);
z.rightContX=r;
z.rightContY=p
}y?(z=["C",v.rightContX||v.plotX,v.rightContY||v.plotY,t||x,s||w,x,w],v.rightContX=v.rightContY=null):z=["M",x,w];
return z
}});
a5.spline=aB;
aP.areaspline=ar(aP.area);
bw=bw.prototype;
aB=aF(aB,{type:"areaspline",closedStacks:!0,getSegmentPath:bw.getSegmentPath,closeSegment:bw.closeSegment,drawGraph:bw.drawGraph,drawLegendSymbol:aX.drawRectangle});
a5.areaspline=aB;
aP.column=ar(aS,{borderColor:"#FFFFFF",borderWidth:1,borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},stickyTracking:!1,threshold:0});
aB=aF(a1,{type:"column",pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color",r:"borderRadius"},cropShoulder:0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){a1.prototype.init.apply(this,arguments);
var p=this,n=p.chart;
n.hasRendered&&az(n.series,function(r){if(r.type===p.type){r.isDirty=!0
}})
},getColumnMetrics:function(){var A=this,z=A.options,y=A.xAxis,x=A.yAxis,w=y.reversed,v,u={},t,s=0;
z.grouping===!1?s=1:az(A.chart.series,function(C){var E=C.options,D=C.yAxis;
if(C.type===A.type&&C.visible&&x.len===D.len&&x.pos===D.pos){E.stacking?(v=C.stackKey,u[v]===av&&(u[v]=s++),t=u[v]):E.grouping!==!1&&(t=s++),C.columnIndex=t
}});
var y=bc(a4(y.transA)*(y.ordinalSlope||z.pointRange||y.closestPointRange||1),y.len),r=y*z.groupPadding,p=(y-2*r)/s,n=z.pointWidth,z=aw(n)?(p-n)/2:p*z.pointPadding,n=aC(n,p-2*z);
return A.columnMetrics={width:n,offset:z+(r+((w?s-(A.columnIndex||0):A.columnIndex)||0)*p-y/2)*(w?-1:1)}
},translate:function(){var z=this.chart,y=this.options,x=y.borderWidth,w=this.yAxis,v=this.translatedThreshold=w.getThreshold(y.threshold),u=aC(y.minPointLength,5),y=this.getColumnMetrics(),t=y.width,s=this.barW=bF(ax(t,1+2*x)),r=this.pointXOffset=y.offset,p=-(x%2?0.5:0),n=x%2?0.5:1;
z.renderer.isVML&&z.inverted&&(n+=1);
a1.prototype.translate.apply(this);
az(this.points,function(C){var A=aC(C.yBottom,v),I=bc(ax(-999-A,C.plotY),w.len+999+A),G=C.plotX+r,F=s,E=bc(I,A),D,I=ax(I,A)-E;
a4(I)<u&&u&&(I=u,E=at(a4(E-v)>u?A-u:v-(w.translate(C.y,0,1,0,1)<=v?u:0)));
C.barX=G;
C.pointWidth=t;
A=a4(G)<0.5;
F=at(G+F)+p;
G=at(G)+p;
F-=G;
D=a4(E)<0.5;
I=at(E+I)+n;
E=at(E)+n;
I-=E;
A&&(G+=1,F-=1);
D&&(E-=1,I+=1);
C.shapeType="rect";
C.shapeArgs={x:G,y:E,width:F,height:I}
})
},getSymbol:bS,drawLegendSymbol:aX.drawRectangle,drawGraph:bS,drawPoints:function(){var p=this,n=this.chart,u=p.options,t=n.renderer,s=n.options.animationLimit||250,r;
az(p.points,function(x){var w=x.plotY,v=x.graphic;
if(w!==av&&!isNaN(w)&&x.y!==null){r=x.shapeArgs,v?(bN(v),v[n.pointCount<s?"animate":"attr"](ar(r))):x.graphic=t[x.shapeType](r).attr(x.pointAttr[x.selected?"select":""]).add(p.group).shadow(u.shadow,null,u.stacking&&!u.borderRadius)
}else{if(v){x.graphic=v.destroy()
}}})
},drawTracker:a7.drawTrackerPoint,animate:function(p){var n=this.yAxis,t=this.options,s=this.chart.inverted,r={};
if(aT){p?(r.scaleY=0.001,p=bc(n.pos+n.len,ax(n.pos,n.toPixels(t.threshold))),s?r.translateX=p-n.len:r.translateY=p,this.group.attr(r)):(r.scaleY=1,r[s?"translateX":"translateY"]=n.pos,this.group.animate(r,this.options.animation),this.animate=null)
}},remove:function(){var p=this,n=p.chart;
n.hasRendered&&az(n.series,function(r){if(r.type===p.type){r.isDirty=!0
}});
a1.prototype.remove.apply(p,arguments)
}});
a5.column=aB;
aP.bar=ar(aP.column);
aB=aF(aB,{type:"bar",inverted:!0});
a5.bar=aB;
aP.scatter=ar(aS,{lineWidth:0,tooltip:{headerFormat:'<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",followPointer:!0},stickyTracking:!1});
aB=aF(a1,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["markerGroup"],takeOrdinalPosition:!1,drawTracker:a7.drawTrackerPoint,drawGraph:function(){this.options.lineWidth&&a1.prototype.drawGraph.call(this)
},setTooltipPoints:bS});
a5.scatter=aB;
aP.pie=ar(aS,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.name
}},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});
aS={type:"pie",isCartesian:!1,pointClass:aF(aK,{init:function(){aK.prototype.init.apply(this,arguments);
var p=this,n;
if(p.y<0){p.y=null
}ay(p,{visible:p.visible!==!1,name:aC(p.name,"Slice")});
n=function(r){p.slice(r.type==="select")
};
bf(p,"select",n);
bf(p,"unselect",n);
return p
},setVisible:function(p){var n=this,t=n.series,s=t.chart,r;
n.visible=n.options.visible=p=p===av?!n.visible:p;
t.options.data[bH(n,t.data)]=n.options;
r=p?"show":"hide";
az(["graphic","dataLabel","connector","shadowGroup"],function(u){if(n[u]){n[u][r]()
}});
n.legendItem&&s.legend.colorizeItem(n,p);
if(!t.isDirty&&t.options.ignoreHiddenPoint){t.isDirty=!0,s.redraw()
}},slice:function(p,n,s){var r=this.series;
bs(s,r.chart);
aC(n,!0);
this.sliced=this.options.sliced=p=aw(p)?p:!this.sliced;
r.options.data[bH(this,r.data)]=this.options;
p=p?this.slicedTranslation:{translateX:0,translateY:0};
this.graphic.animate(p);
this.shadowGroup&&this.shadowGroup.animate(p)
}}),requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},getColor:bS,animate:function(p){var n=this,s=n.points,r=n.startAngleRad;
if(!p){az(s,function(t){var u=t.graphic,t=t.shapeArgs;
u&&(u.attr({r:n.center[3]/2,start:r,end:r}),u.animate({r:t.r,start:t.start,end:t.end},n.options.animation))
}),n.animate=null
}},setData:function(p,n){a1.prototype.setData.call(this,p,!1);
this.processData();
this.generatePoints();
aC(n,!0)&&this.chart.redraw()
},generatePoints:function(){var p,n=0,u,t,s,r=this.options.ignoreHiddenPoint;
a1.prototype.generatePoints.call(this);
u=this.points;
t=u.length;
for(p=0;
p<t;
p++){s=u[p],n+=r&&!s.visible?0:s.y
}this.total=n;
for(p=0;
p<t;
p++){s=u[p],s.percentage=n>0?s.y/n*100:0,s.total=n
}},translate:function(F){this.generatePoints();
var E=0,D=this.options,C=D.slicedOffset,A=C+D.borderWidth,z,y,x,w=D.startAngle||0,v=this.startAngleRad=bR/180*(w-90),w=(this.endAngleRad=bR/180*((D.endAngle||w+360)-90))-v,u=this.points,t=D.dataLabels.distance,D=D.ignoreHiddenPoint,s,r=u.length,p;
if(!F){this.center=F=this.getCenter()
}this.getX=function(n,G){x=a0.asin((n-F[1])/(F[2]/2+t));
return F[0]+(G?-1:1)*aU(x)*(F[2]/2+t)
};
for(s=0;
s<r;
s++){p=u[s];
z=v+E*w;
if(!D||p.visible){E+=p.percentage/100
}y=v+E*w;
p.shapeType="arc";
p.shapeArgs={x:F[0],y:F[1],r:F[2]/2,innerR:F[3]/2,start:at(z*1000)/1000,end:at(y*1000)/1000};
x=(y+z)/2;
x>0.75*w&&(x-=2*bR);
p.slicedTranslation={translateX:at(aU(x)*C),translateY:at(a2(x)*C)};
z=aU(x)*F[2]/2;
y=a2(x)*F[2]/2;
p.tooltipPos=[F[0]+z*0.7,F[1]+y*0.7];
p.half=x<-bR/2||x>bR/2?1:0;
p.angle=x;
A=bc(A,t/2);
p.labelPos=[F[0]+z+aU(x)*t,F[1]+y+a2(x)*t,F[0]+z+aU(x)*A,F[1]+y+a2(x)*A,F[0]+z,F[1]+y,t<0?"center":p.half?"right":"left",x]
}},setTooltipPoints:bS,drawGraph:null,drawPoints:function(){var p=this,n=p.chart.renderer,v,u,t=p.options.shadow,s,r;
if(t&&!p.shadowGroup){p.shadowGroup=n.g("shadow").add(p.group)
}az(p.points,function(w){u=w.graphic;
r=w.shapeArgs;
s=w.shadowGroup;
if(t&&!s){s=w.shadowGroup=n.g("shadow").add(p.shadowGroup)
}v=w.sliced?w.slicedTranslation:{translateX:0,translateY:0};
s&&s.attr(v);
u?u.animate(ay(r,v)):w.graphic=u=n.arc(r).setRadialReference(p.center).attr(w.pointAttr[w.selected?"select":""]).attr({"stroke-linejoin":"round"}).attr(v).add(p.group).shadow(t,s);
w.visible!==void 0&&w.setVisible(w.visible)
})
},sortByAngle:function(p,n){p.sort(function(r,s){return r.angle!==void 0&&(s.angle-r.angle)*n
})
},drawTracker:a7.drawTrackerPoint,drawLegendSymbol:aX.drawRectangle,getCenter:a.getCenter,getSymbol:bS};
aS=aF(a1,aS);
a5.pie=aS;
a1.prototype.drawDataLabels=function(){var p=this,n=p.options,w=n.cursor,v=n.dataLabels,n=p.points,u,t,s,r;
if(v.enabled||p._hasPointLabels){p.dlProcessOptions&&p.dlProcessOptions(v),r=p.plotGroup("dataLabelsGroup","data-labels",p.visible?"visible":"hidden",v.zIndex||6),t=v,az(n,function(y){var C,A=y.dataLabel,z,x,D=y.connector,E=!0;
u=y.options&&y.options.dataLabels;
C=aC(u&&u.enabled,t.enabled);
if(A&&!C){y.dataLabel=A.destroy()
}else{if(C){v=ar(t,u);
C=v.rotation;
z=y.getLabelConfig();
s=v.format?i(v.format,z):v.formatter.call(z,v);
v.style.color=aC(v.color,v.style.color,p.color,"black");
if(A){if(aw(s)){A.attr({text:s}),E=!1
}else{if(y.dataLabel=A=A.destroy(),D){y.connector=D.destroy()
}}}else{if(aw(s)){A={fill:v.backgroundColor,stroke:v.borderColor,"stroke-width":v.borderWidth,r:v.borderRadius||0,rotation:C,padding:v.padding,zIndex:1};
for(x in A){A[x]===av&&delete A[x]
}A=y.dataLabel=p.chart.renderer[C?"text":"label"](s,0,-999,null,null,null,v.useHTML).attr(A).css(ay(v.style,w&&{cursor:w})).add(r).shadow(v.shadow)
}}A&&p.alignDataLabel(y,A,v,null,E)
}}})
}};
a1.prototype.alignDataLabel=function(y,x,w,v,u){var t=this.chart,s=t.inverted,r=aC(y.plotX,-999),p=aC(y.plotY,-999),n=x.getBBox();
if(y=this.visible&&(y.series.forceDL||t.isInsidePlot(y.plotX,y.plotY,s))){v=ay({x:s?t.plotWidth-p:r,y:at(s?t.plotHeight-r:p),width:0,height:0},v),ay(w,{width:n.width,height:n.height}),w.rotation?(s={align:w.align,x:v.x+w.x+v.width/2,y:v.y+w.y+v.height/2},x[u?"attr":"animate"](s)):(x.align(w,null,v),s=x.alignAttr,aC(w.overflow,"justify")==="justify"?this.justifyDataLabel(x,w,s,n,v,u):aC(w.crop,!0)&&(y=t.isInsidePlot(s.x,s.y)&&t.isInsidePlot(s.x+n.width,s.y+n.height)))
}if(!y){x.attr({y:-999}),x.placed=!1
}};
a1.prototype.justifyDataLabel=function(z,y,x,w,v,u){var t=this.chart,s=y.align,r=y.verticalAlign,p,n;
p=x.x;
if(p<0){s==="right"?y.align="left":y.x=-p,n=!0
}p=x.x+w.width;
if(p>t.plotWidth){s==="left"?y.align="right":y.x=t.plotWidth-p,n=!0
}p=x.y;
if(p<0){r==="bottom"?y.verticalAlign="top":y.y=-p,n=!0
}p=x.y+w.height;
if(p>t.plotHeight){r==="top"?y.verticalAlign="bottom":y.y=t.plotHeight-p,n=!0
}if(n){z.placed=!u,z.align(y,null,v)
}};
if(a5.pie){a5.pie.prototype.drawDataLabels=function(){var cd=this,cc=cd.data,cb,ca=cd.chart,b9=cd.options.dataLabels,b8=aC(b9.connectorPadding,10),b7=aC(b9.connectorWidth,1),b6=ca.plotWidth,ca=ca.plotHeight,b5,b4,b3=aC(b9.softConnector,!0),b2=b9.distance,b1=cd.center,bb=b1[2]/2,b0=b1[1],ab=b2>0,X,U,S,Q,O=[[],[]],w,bZ,V,s,ba,Y=[0,0,0,0],P=function(t,r){return r.y-t.y
};
if(cd.visible&&(b9.enabled||cd._hasPointLabels)){a1.prototype.drawDataLabels.apply(cd);
az(cc,function(r){r.dataLabel&&r.visible&&O[r.half].push(r)
});
for(s=0;
!Q&&cc[s];
){Q=cc[s]&&cc[s].dataLabel&&(cc[s].dataLabel.getBBox().height||21),s++
}for(s=2;
s--;
){var cc=[],M=[],T=O[s],R=T.length,aa;
cd.sortByAngle(T,s-0.5);
if(b2>0){for(ba=b0-bb-b2;
ba<=b0+bb+b2;
ba+=Q){cc.push(ba)
}U=cc.length;
if(R>U){cb=[].concat(T);
cb.sort(P);
for(ba=R;
ba--;
){cb[ba].rank=ba
}for(ba=R;
ba--;
){T[ba].rank>=U&&T.splice(ba,1)
}R=T.length
}for(ba=0;
ba<R;
ba++){cb=T[ba];
S=cb.labelPos;
cb=9999;
var p,n;
for(n=0;
n<U;
n++){p=a4(cc[n]-S[1]),p<cb&&(cb=p,aa=n)
}if(aa<ba&&cc[ba]!==null){aa=ba
}else{for(U<R-ba+aa&&cc[ba]!==null&&(aa=U-R+ba);
cc[aa]===null;
){aa++
}}M.push({i:aa,y:cc[aa]});
cc[aa]=null
}M.sort(P)
}for(ba=0;
ba<R;
ba++){cb=T[ba];
S=cb.labelPos;
X=cb.dataLabel;
V=cb.visible===!1?"hidden":"visible";
cb=S[1];
if(b2>0){if(U=M.pop(),aa=U.i,bZ=U.y,cb>bZ&&cc[aa+1]!==null||cb<bZ&&cc[aa-1]!==null){bZ=cb
}}else{bZ=cb
}w=b9.justify?b1[0]+(s?-1:1)*(bb+b2):cd.getX(aa===0||aa===cc.length-1?cb:bZ,s);
X._attr={visibility:V,align:S[6]};
X._pos={x:w+b9.x+({left:b8,right:-b8}[S[6]]||0),y:bZ+b9.y-10};
X.connX=w;
X.connY=bZ;
if(this.options.size===null){U=X.width,w-U<b8?Y[3]=ax(at(U-w+b8),Y[3]):w+U>b6-b8&&(Y[1]=ax(at(w+U-b6+b8),Y[1])),bZ-Q/2<0?Y[0]=ax(at(-bZ+Q/2),Y[0]):bZ+Q/2>ca&&(Y[2]=ax(at(bZ+Q/2-ca),Y[2]))
}}}if(bv(Y)===0||this.verifyDataLabelOverflow(Y)){this.placeDataLabels(),ab&&b7&&az(this.points,function(r){b5=r.connector;
S=r.labelPos;
if((X=r.dataLabel)&&X._pos){V=X._attr.visibility,w=X.connX,bZ=X.connY,b4=b3?["M",w+(S[6]==="left"?5:-5),bZ,"C",w,bZ,2*S[2]-S[4],2*S[3]-S[5],S[2],S[3],"L",S[4],S[5]]:["M",w+(S[6]==="left"?5:-5),bZ,"L",S[2],S[3],"L",S[4],S[5]],b5?(b5.animate({d:b4}),b5.attr("visibility",V)):r.connector=b5=cd.chart.renderer.path(b4).attr({"stroke-width":b7,stroke:b9.connectorColor||r.color||"#606060",visibility:V}).add(cd.group)
}else{if(b5){r.connector=b5.destroy()
}}})
}}},a5.pie.prototype.placeDataLabels=function(){az(this.points,function(p){var p=p.dataLabel,n;
if(p){(n=p._pos)?(p.attr(p._attr),p[p.moved?"animate":"attr"](n),p.moved=!0):p&&p.attr({y:-999})
}})
},a5.pie.prototype.alignDataLabel=bS,a5.pie.prototype.verifyDataLabelOverflow=function(p){var n=this.center,u=this.options,t=u.center,s=u=u.minSize||80,r;
t[0]!==null?s=ax(n[2]-ax(p[1],p[3]),u):(s=ax(n[2]-p[1]-p[3],u),n[0]+=(p[3]-p[1])/2);
t[1]!==null?s=ax(bc(s,n[2]-ax(p[0],p[2])),u):(s=ax(bc(s,n[2]-p[0]-p[2]),u),n[1]+=(p[0]-p[2])/2);
s<n[2]?(n[2]=s,this.translate(n),az(this.points,function(v){if(v.dataLabel){v.dataLabel._pos=null
}}),this.drawDataLabels&&this.drawDataLabels()):r=!0;
return r
}
}if(a5.column){a5.column.prototype.alignDataLabel=function(y,x,w,v,u){var t=this.chart,s=t.inverted,r=y.dlBox||y.shapeArgs,p=y.below||y.plotY>aC(this.translatedThreshold,t.plotSizeY),n=aC(w.inside,!!this.options.stacking);
if(r&&(v=ar(r),s&&(v={x:t.plotWidth-v.y-v.height,y:t.plotHeight-v.x-v.width,width:v.height,height:v.width}),!n)){s?(v.x+=p?0:v.width,v.width=0):(v.y+=p?v.height:0,v.height=0)
}w.align=aC(w.align,!s||n?"center":p?"right":"left");
w.verticalAlign=aC(w.verticalAlign,s||n?"middle":p?"top":"bottom");
a1.prototype.alignDataLabel.call(this,y,x,w,v,u)
}
}ay(Highcharts,{Axis:l,Chart:bO,Color:bq,Point:aK,Tick:an,Tooltip:bp,Renderer:d,Series:a1,SVGElement:aj,SVGRenderer:aM,arrayMin:m,arrayMax:bv,charts:bk,dateFormat:bx,format:i,pathAnim:al,getOptions:function(){return be
},hasBidiBug:bI,isTouchDevice:bj,numberFormat:aG,seriesTypes:a5,setOptions:function(n){be=ar(!0,be,n);
bA();
return be
},addEvent:bf,removeEvent:aR,createElement:aV,discardElement:bJ,css:bl,each:az,extend:ay,map:H,merge:ar,pick:aC,splat:af,extendClass:aF,pInt:ao,wrap:aQ,svg:aT,canvas:ac,vml:!aT&&!ac,product:"Highcharts",version:"3.0.9"})
})();
(function(){var f=Highcharts,e=f.Chart,d=f.addEvent,p=f.removeEvent,m=f.createElement,i=f.discardElement,k=f.css,h=f.merge,c=f.each,a=f.extend,l=Math.max,o=document,j=window,b=o.documentElement.ontouchstart!==undefined,g=f.getOptions();
a(g.lang,{downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",exportButtonTitle:"Export to raster or vector image",printButtonTitle:"Print the chart"});
g.navigation={menuStyle:{border:"1px solid #A0A0A0",background:"#FFFFFF"},menuItemStyle:{padding:"0 5px",background:"none",color:"#303030",fontSize:b?"14px":"11px"},menuItemHoverStyle:{background:"#4572A5",color:"#FFFFFF"},buttonOptions:{align:"right",backgroundColor:{linearGradient:[0,0,0,20],stops:[[0.4,"#F7F7F7"],[0.6,"#E3E3E3"]]},borderColor:"#B0B0B0",borderRadius:3,borderWidth:1,height:20,hoverBorderColor:"#909090",hoverSymbolFill:"#81A7CF",hoverSymbolStroke:"#4572A5",symbolFill:"#E0E0E0",symbolStroke:"#A0A0A0",symbolX:11.5,symbolY:10.5,verticalAlign:"top",width:24,y:10}};
g.exporting={type:"image/png",url:"http://export.highcharts.com/",width:800,enableImages:false,buttons:{exportButton:{symbol:"exportIcon",x:-10,symbolFill:"#A8BF77",hoverSymbolFill:"#768F3E",_id:"exportButton",_titleKey:"exportButtonTitle",menuItems:[{textKey:"downloadPNG",onclick:function(){this.exportChart()
}},{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})
}},{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})
}},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})
}}]},printButton:{symbol:"printIcon",x:-36,symbolFill:"#B5C9DF",hoverSymbolFill:"#779ABF",_id:"printButton",_titleKey:"printButtonTitle",onclick:function(){this.print()
}}}};
a(e.prototype,{getSVG:function(w){var v=this,x,s,u,n,t,q,r=h(v.options,w);
if(!o.createElementNS){o.createElementNS=function(y,z){var A=o.createElement(z);
A.getBBox=function(){return f.Renderer.prototype.Element.prototype.getBBox.apply({element:A})
};
return A
}
}w=m("div",null,{position:"absolute",top:"-9999em",width:v.chartWidth+"px",height:v.chartHeight+"px"},o.body);
a(r.chart,{renderTo:w,forExport:true});
r.exporting.enabled=false;
if(!r.exporting.enableImages){r.chart.plotBackgroundImage=null
}r.series=[];
c(v.series,function(y){u=y.options;
u.animation=false;
u.showCheckbox=false;
u.visible=y.visible;
if(!r.exporting.enableImages){if(u&&u.marker&&/^url\(/.test(u.marker.symbol)){u.marker.symbol="circle"
}}u.data=[];
c(y.data,function(z){n=z.config;
t={x:z.x,y:z.y,name:z.name};
typeof n==="object"&&z.config&&n.constructor!==Array&&a(t,n);
t.visible=z.visible;
u.data.push(t);
if(!r.exporting.enableImages){(q=z.config&&z.config.marker)&&/^url\(/.test(q.symbol)&&delete q.symbol
}});
r.series.push(u)
});
x=new Highcharts.Chart(r);
c(["xAxis","yAxis"],function(y){c(v[y],function(B,D){var A=x[y][D],z=B.getExtremes(),C=z.userMin;
z=z.userMax;
if(C!==void 0||z!==void 0){A.setExtremes(C,z,true,false)
}})
});
s=x.container.innerHTML;
r=null;
x.destroy();
i(w);
s=s.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/isTracker="[^"]+"/g,"").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ href=/g," xlink:href=").replace(/&nbsp;/g,"\u00a0").replace(/&shy;/g,"\u00ad").replace(/id=([^" >]+)/g,'id="$1"').replace(/class=([^" ]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/<img ([^>]*)>/gi,"<image $1 />").replace(/<\/image>/g,"").replace(/<image ([^>]*)([^\/])>/gi,"<image $1$2 />").replace(/width=(\d+)/g,'width="$1"').replace(/height=(\d+)/g,'height="$1"').replace(/hc-svg-href="/g,'xlink:href="').replace(/style="([^"]+)"/g,function(y){return y.toLowerCase()
});
s=s.replace(/(url\(#highcharts-[0-9]+)&quot;/g,"$1").replace(/&quot;/g,"'");
if(s.match(/ xmlns="/g).length===2){s=s.replace(/xmlns="[^"]+"/,"")
}return s
},exportChart:function(n,s){var q,r=this.getSVG(s);
n=h(this.options.exporting,n);
q=m("form",{method:"post",action:n.url},{display:"none"},o.body);
c(["filename","type","width","svg"],function(t){m("input",{type:"hidden",name:t,value:{filename:n.filename||"chart",type:n.type,width:n.width,svg:r}[t]},null,q)
});
q.submit();
i(q)
},print:function(){var n=this,u=n.container,q=[],s=u.parentNode,t=o.body,r=t.childNodes;
if(!n.isPrinting){n.isPrinting=true;
c(r,function(w,v){if(w.nodeType===1){q[v]=w.style.display;
w.style.display="none"
}});
t.appendChild(u);
j.print();
setTimeout(function(){s.appendChild(u);
c(r,function(w,v){if(w.nodeType===1){w.style.display=q[v]
}});
n.isPrinting=false
},1000)
}},contextMenu:function(E,D,F,y,B,t){var A=this,u=A.options.navigation,w=u.menuItemStyle,v=A.chartWidth,x=A.chartHeight,q="cache-"+E,s=A[q],r=l(B,t),n,C;
if(!s){A[q]=s=m("div",{className:"highcharts-"+E},{position:"absolute",zIndex:1000,padding:r+"px"},A.container);
n=m("div",null,a({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},u.menuStyle),s);
C=function(){k(s,{display:"none"})
};
d(s,"mouseleave",C);
c(D,function(z){if(z){var G=m("div",{onmouseover:function(){k(this,u.menuItemHoverStyle)
},onmouseout:function(){k(this,w)
},innerHTML:z.text||A.options.lang[z.textKey]},a({cursor:"pointer"},w),n);
G[b?"ontouchstart":"onclick"]=function(){C();
z.onclick.apply(A,arguments)
};
A.exportDivElements.push(G)
}});
A.exportDivElements.push(n,s);
A.exportMenuWidth=s.offsetWidth;
A.exportMenuHeight=s.offsetHeight
}E={display:"block"};
if(F+A.exportMenuWidth>v){E.right=v-F-B-r+"px"
}else{E.left=F-r+"px"
}if(y+t+A.exportMenuHeight>x){E.bottom=x-y-r+"px"
}else{E.top=y+t-r+"px"
}k(s,E)
},addButton:function(B){function A(){w.attr(q);
u.attr(r)
}var C=this,x=C.renderer,z=h(C.options.navigation.buttonOptions,B),s=z.onclick,y=z.menuItems,t=z.width,v=z.height,u,w,n;
B=z.borderWidth;
var r={stroke:z.borderColor},q={stroke:z.symbolStroke,fill:z.symbolFill};
if(!C.exportDivElements){C.exportDivElements=[];
C.exportSVGElements=[]
}if(z.enabled!==false){u=x.rect(0,0,t,v,z.borderRadius,B).align(z,true).attr(a({fill:z.backgroundColor,"stroke-width":B,zIndex:19},r)).add();
n=x.rect(0,0,t,v,0).align(z).attr({id:z._id,fill:"rgba(255, 255, 255, 0.001)",title:C.options.lang[z._titleKey],zIndex:21}).css({cursor:"pointer"}).on("mouseover",function(){w.attr({stroke:z.hoverSymbolStroke,fill:z.hoverSymbolFill});
u.attr({stroke:z.hoverBorderColor})
}).on("mouseout",A).on("click",A).add();
if(y){s=function(){A();
var D=n.getBBox();
C.contextMenu("export-menu",y,D.x,D.y,t,v)
}
}n.on("click",function(){s.apply(C,arguments)
});
w=x.symbol(z.symbol,z.symbolX,z.symbolY,(z.symbolSize||12)/2).align(z,true).attr(a(q,{"stroke-width":z.symbolStrokeWidth||1,zIndex:20})).add();
C.exportSVGElements.push(u,n,w)
}},destroyExport:function(){var n,q;
for(n=0;
n<this.exportSVGElements.length;
n++){q=this.exportSVGElements[n];
q.onclick=q.ontouchstart=null;
this.exportSVGElements[n]=q.destroy()
}for(n=0;
n<this.exportDivElements.length;
n++){q=this.exportDivElements[n];
p(q,"mouseleave");
this.exportDivElements[n]=q.onmouseout=q.onmouseover=q.ontouchstart=q.onclick=null;
i(q)
}}});
f.Renderer.prototype.symbols.exportIcon=function(n,r,q){return["M",n-q,r+q,"L",n+q,r+q,n+q,r+q*0.5,n-q,r+q*0.5,"Z","M",n,r+q*0.5,"L",n-q*0.5,r-q/3,n-q/6,r-q/3,n-q/6,r-q,n+q/6,r-q,n+q/6,r-q/3,n+q*0.5,r-q/3,"Z"]
};
f.Renderer.prototype.symbols.printIcon=function(n,r,q){return["M",n-q,r+q*0.5,"L",n+q,r+q*0.5,n+q,r-q/3,n-q,r-q/3,"Z","M",n-q*0.5,r-q/3,"L",n-q*0.5,r-q,n+q*0.5,r-q,n+q*0.5,r-q/3,"Z","M",n-q*0.5,r+q*0.5,"L",n-q*0.75,r+q,n+q*0.75,r+q,n+q*0.5,r+q*0.5,"Z"]
};
e.prototype.callbacks.push(function(n){var s,q=n.options.exporting,r=q.buttons;
if(q.enabled!==false){for(s in r){n.addButton(r[s])
}d(n,"destroy",n.destroyExport)
}})
})();
Highcharts.theme={colors:["#426bb3","#aa4643","#89a54e","#80699b","#fbdb56","#009ca6","#42bbe2","#f57eb6","#003781","#939598"],chart:{backgroundColor:"#F0F0F0",borderWidth:6,borderColor:"#ffffff",borderRadius:0,plotBackgroundColor:"rgba(255, 255, 255, .4)",plotShadow:false,plotBorderWidth:0,spacingLeft:14,spacingTop:21,spacingBottom:25,spacingRight:17},title:{align:"left",x:5,y:10,style:{color:"#003781",font:"14px Verdana, sans-serif",fontWeight:"bold"}},subtitle:{style:{color:"#666666",font:"12px Verdana, sans-serif"}},xAxis:{gridLineWidth:0,gridLineColor:"#e3e3e3",lineColor:"#cfd0d2",tickColor:"#cfd0d2",labels:{style:{color:"#898D94",font:"10px Verdana, sans-serif"}},title:{style:{color:"#898D94",fontWeight:"bold",fontSize:"11px",fontFamily:"Verdana, sans-serif"}}},yAxis:{minorTickInterval:"",lineColor:"#cfd0d2",lineWidth:0,tickWidth:0,tickColor:"#cfd0d2",gridLineColor:"#e3e3e3",gridLineWidth:1,labels:{style:{color:"#898D94",font:"9px Verdana, sans-serif"}},title:{style:{color:"#898D94",fontWeight:"bold",fontSize:"11px",fontFamily:"Verdana, sans-serif"}}},legend:{borderWidth:1,borderColor:"#d3d3d3",borderRadius:3,floating:false,verticalAlign:"bottom",x:0,y:10,backgroundColor:"rgba(255, 255, 255, .7)",itemStyle:{font:"8pt Verdana, sans-serif",color:"#003871"},itemHoverStyle:{color:"#009ee0"},itemHiddenStyle:{color:"#cfd0d2"},labelFormatter:function(){return this.name+"<em>(click to hide)</em>"
}},credits:{enabled:false},plotOptions:{series:{pointPadding:0.1,groupPadding:0.15,borderWidth:1,shadow:true,dataLabels:{color:"#4d4d4d"}}},labels:{style:{color:"red"}}};
var highchartsOptions=Highcharts.setOptions(Highcharts.theme);
function resizeVidFunc(){a();
function a(){var d=$("video");
for(var c=0;
c<d.length;
c++){var e=d[c];
videojs(e.id).ready(function(){var f=this;
var g=f.height()/f.width();
b(f,g)
})
}function b(f,h){var i=f.id(),g=document.getElementById(i).parentElement.offsetWidth;
f.width(g).height(g*h)
}}jQuery(window).resize(a)
}$(document).ready(function(){if($("video").length){resizeVidFunc()
}});
function cantFind(linkOption){if(linkOption!=null&&linkOption.path!=""){eval("parent.location='"+linkOption.path+"'")
}else{jQuery("#cant-find-2").empty();
if(linkOption!=null){$("#cant-find-2").append($("<option></option>").attr("value","").text(cantFindOptions.secondDropdownFaceValue));
jQuery.each(linkOption.links,function(id,link){$("#cant-find-2").append($("<option></option>").attr("value",id).text(link.label))
})
}}}function initCantFind(){if($("#cant-find-1").length==0){return
}var a=$("#cant-find-1").val().length==0?true:false;
if(!a){$("#cant-find-1 option:first").attr("selected","selected")
}}(function(a){a.fn.hoverIntent=function(m,d,h){var j={interval:100,sensitivity:7,timeout:0};
if(typeof m==="object"){j=a.extend(j,m)
}else{if(a.isFunction(d)){j=a.extend(j,{over:m,out:d,selector:h})
}else{j=a.extend(j,{over:m,out:m,selector:d})
}}var l,k,g,f;
var e=function(n){l=n.pageX;
k=n.pageY
};
var c=function(o,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);
if((Math.abs(g-l)+Math.abs(f-k))<j.sensitivity){a(n).off("mousemove.hoverIntent",e);
n.hoverIntent_s=1;
return j.over.apply(n,[o])
}else{g=l;
f=k;
n.hoverIntent_t=setTimeout(function(){c(o,n)
},j.interval)
}};
var i=function(o,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);
n.hoverIntent_s=0;
return j.out.apply(n,[o])
};
var b=function(p){var o=jQuery.extend({},p);
var n=this;
if(n.hoverIntent_t){n.hoverIntent_t=clearTimeout(n.hoverIntent_t)
}if(p.type=="mouseenter"){g=o.pageX;
f=o.pageY;
a(n).on("mousemove.hoverIntent",e);
if(n.hoverIntent_s!=1){n.hoverIntent_t=setTimeout(function(){c(o,n)
},j.interval)
}}else{a(n).off("mousemove.hoverIntent",e);
if(n.hoverIntent_s==1){n.hoverIntent_t=setTimeout(function(){i(o,n)
},j.timeout)
}}};
return this.on({"mouseenter.hoverIntent":b,"mouseleave.hoverIntent":b},j.selector)
}
})(jQuery);
(function(b){var a=(function(){var o={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},e=(function(){var c=/iPhone|iPad|iPod/i.test(navigator.userAgent);
if(c){b(window).load(function(){b("body").children().on("click",b.noop)
})
}return c
})(),j=(function(){var c=document.documentElement.style;
return("behavior" in c&&"fill" in c&&/iemobile/i.test(navigator.userAgent))
})(),l=function(r,s){var c=o.menuClass;
if(s.cssArrows){c+=" "+o.menuArrowClass
}r.toggleClass(c)
},q=function(c,r){return c.find("li."+r.pathClass).slice(0,r.pathLevels).addClass(r.hoverClass+" "+o.bcClass).filter(function(){return(b(this).children(r.popUpSelector).hide().show().length)
}).removeClass(r.pathClass)
},m=function(c){c.children("a").toggleClass(o.anchorClass)
},f=function(c){var r=c.css("ms-touch-action");
r=(r==="pan-y")?"auto":"pan-y";
c.css("ms-touch-action",r)
},i=function(s,t){var c="li:has("+t.popUpSelector+")";
if(b.fn.hoverIntent&&!t.disableHI){s.hoverIntent(k,g,c)
}else{s.on("mouseenter.superfish",c,k).on("mouseleave.superfish",c,g)
}var r="MSPointerDown.superfish";
if(!e){r+=" touchend.superfish"
}if(j){r+=" mousedown.superfish"
}s.on("focusin.superfish","li",k).on("focusout.superfish","li",g).on(r,"a",t,h)
},h=function(s){var r=b(this),c=r.siblings(s.data.popUpSelector);
if(c.length>0&&c.is(":hidden")){r.one("click.superfish",false);
if(s.type==="MSPointerDown"){r.trigger("focus")
}else{b.proxy(k,r.parent("li"))()
}}},k=function(){var c=b(this),r=n(c);
clearTimeout(r.sfTimer);
c.siblings().superfish("hide").end().superfish("show")
},g=function(){var c=b(this),r=n(c);
if(e){b.proxy(p,c,r)()
}else{clearTimeout(r.sfTimer);
r.sfTimer=setTimeout(b.proxy(p,c,r),r.delay)
}},p=function(c){c.retainPath=(b.inArray(this[0],c.$path)>-1);
this.superfish("hide");
if(!this.parents("."+c.hoverClass).length){c.onIdle.call(d(this));
if(c.$path.length){b.proxy(k,c.$path)()
}}},d=function(c){return c.closest("."+o.menuClass)
},n=function(c){return d(c).data("sf-options")
};
return{hide:function(r){if(this.length){var u=this,v=n(u);
if(!v){return this
}var s=(v.retainPath===true)?v.$path:"",c=u.find("li."+v.hoverClass).add(this).not(s).removeClass(v.hoverClass).children(v.popUpSelector),t=v.speedOut;
if(r){c.show();
t=0
}v.retainPath=false;
v.onBeforeHide.call(c);
c.stop(true,true).animate(v.animationOut,t,function(){var w=b(this);
v.onHide.call(w)
})
}return this
},show:function(){var s=n(this);
if(!s){return this
}var r=this.addClass(s.hoverClass),c=r.children(s.popUpSelector);
s.onBeforeShow.call(c);
c.stop(true,true).animate(s.animation,s.speed,function(){s.onShow.call(c)
});
return this
},destroy:function(){return this.each(function(){var r=b(this),s=r.data("sf-options"),c;
if(!s){return false
}c=r.find(s.popUpSelector).parent("li");
clearTimeout(s.sfTimer);
l(r,s);
m(c);
f(r);
r.off(".superfish").off(".hoverIntent");
c.children(s.popUpSelector).attr("style",function(t,u){return u.replace(/display[^;]+;?/g,"")
});
s.$path.removeClass(s.hoverClass+" "+o.bcClass).addClass(s.pathClass);
r.find("."+s.hoverClass).removeClass(s.hoverClass);
s.onDestroy.call(r);
r.removeData("sf-options")
})
},init:function(c){return this.each(function(){var s=b(this);
if(s.data("sf-options")){return false
}var t=b.extend({},b.fn.superfish.defaults,c),r=s.find(t.popUpSelector).parent("li");
t.$path=q(s,t);
s.data("sf-options",t);
l(s,t);
m(r);
f(s);
i(s,t);
r.not("."+o.bcClass).superfish("hide",true);
t.onInit.call(this)
})
}}
})();
b.fn.superfish=function(d,c){if(a[d]){return a[d].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof d==="object"||!d){return a.init.apply(this,arguments)
}else{return b.error("Method "+d+" does not exist on jQuery.fn.superfish")
}}};
b.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:true,disableHI:false,onInit:b.noop,onBeforeShow:b.noop,onShow:b.noop,onBeforeHide:b.noop,onHide:b.noop,onIdle:b.noop,onDestroy:b.noop};
b.fn.extend({hideSuperfishUl:a.hide,showSuperfishUl:a.show})
})(jQuery);
function navinit(){var a=$("a.menu-toggle"),c=$(".mobileEnabled ul.sf-menu"),b=false;
$("#flyout.ie6 #main-nav > li").hover(function(){$(this).addClass("sfhover")
},function(){$(this).removeClass("sfhover")
});
$("ul.sf-menu").superfish({pathClass:"current",delay:700});
$("ul.sf-menu > li:not(:has(ul))").addClass("empty");
if($("body.mobileEnabled").length>=1){enquire.register("screen and (max-width: 982px)",{setup:function(){a.click(function(){c.fadeToggle(300);
if(!a.hasClass("open")){$("video-js").css({visibility:"hidden"})
}else{$("video-js").css({visibility:"visible"})
}a.toggleClass("open")
});
$("ul.sf-menu > li > .sf-with-ul").click(function(d){if(c.hasClass("mob")){d.preventDefault();
$(this).parent().toggleClass("show-subnav")
}})
},match:function(){c.hide().addClass("mob");
a.removeClass("open");
if(!b===true){$("ul.sf-menu > li > .sf-with-ul").each(function(d){var f=$(this).text(),e=$(this).attr("href");
$(this).next("ul").prepend("<li class='index-link'><a href="+e+">"+f+"</a></li>")
});
b=true
}},unmatch:function(){$(".sf-menu li").removeClass("show-subnav");
c.show().removeClass("mob");
a.removeClass("open")
}})
}}$(document).ready(function(){if($(".navigation").length){navinit()
}});
function placeholderPoly(){jQuery.support.placeholder=false;
test=document.createElement("input");
if("placeholder" in test){jQuery.support.placeholder=true
}if(!$.support.placeholder){$("input, textarea").focus(function(){if($(this).val()==$(this).attr("placeholder")){$(this).val("");
$(this).removeClass("auto-hint")
}});
$("input, textarea").blur(function(){if($(this).val()==""&&$(this).attr("placeholder")!=""){$(this).val($(this).attr("placeholder"));
$(this).addClass("auto-hint")
}});
$("input, textarea").each(function(){if($(this).attr("placeholder")==""){return
}if($(this).val()==""){$(this).val($(this).attr("placeholder"));
$(this).addClass("auto-hint")
}else{$(this).removeClass("auto-hint")
}})
}}function internetSearch(){$(".search-toggle").click(function(a){a.preventDefault();
if($(".search.external:hidden").length>="1"){$(".search.external").slideDown(400)
}else{$(".search.external").slideUp(200)
}});
enquire.register("screen and (max-width: 480px)",{match:function(){$(".search.external").show()
},unmatch:function(){$(".search.external").hide()
}});
enquire.register("screen and (max-width: 300px)",{match:function(){$(".search-toggle").hide()
},unmatch:function(){$(".search-toggle").show()
}})
}$(document).ready(function(){placeholderPoly();
if($(".search.external").length){internetSearch()
}});
(function(c){var d={speed:700,pause:4000,showItems:1,mousePause:true,height:0,animate:true,margin:0,padding:0,startPaused:false};
var a={moveUp:function(e,f){a.animate(e,f,"up")
},moveDown:function(e,f){a.animate(e,f,"down")
},animate:function(g,f,i){var m=g.itemHeight;
var n=g.options;
var h=g.element;
var k=h.children("ul");
var j=(i==="up")?"li:first":"li:last";
h.trigger("vticker.beforeTick");
var l=k.children(j).clone(true);
if(n.height>0){m=k.children("li:first").height()
}m+=(n.margin)+(n.padding*2);
if(i==="down"){k.css("top","-"+m+"px").prepend(l)
}if(f&&f.animate){if(g.animating){return
}g.animating=true;
var e=(i==="up")?{top:"-="+m+"px"}:{top:0};
k.animate(e,n.speed,function(){c(k).children(j).remove();
c(k).css("top","0px");
g.animating=false;
h.trigger("vticker.afterTick")
})
}else{k.children(j).remove();
k.css("top","0px");
h.trigger("vticker.afterTick")
}if(i==="up"){l.appendTo(k)
}},nextUsePause:function(){var f=c(this).data("state");
var e=f.options;
if(f.isPaused||f.itemCount<2){return
}b.next.call(this,{animate:e.animate})
},startInterval:function(){var g=c(this).data("state");
var e=g.options;
var f=this;
g.intervalId=setInterval(function(){a.nextUsePause.call(f)
},e.pause)
},stopInterval:function(){var e=c(this).data("state");
if(!e){return
}if(e.intervalId){clearInterval(e.intervalId)
}e.intervalId=undefined
},restartInterval:function(){a.stopInterval.call(this);
a.startInterval.call(this)
}};
var b={init:function(f){b.stop.call(this);
var e=jQuery.extend({},d);
var f=c.extend(e,f);
var h=c(this);
var j={itemCount:h.children("ul").children("li").length,itemHeight:0,itemMargin:0,element:h,animating:false,options:f,isPaused:(f.startPaused)?true:false,pausedByCode:false};
c(this).data("state",j);
h.css({overflow:"hidden",position:"relative"}).children("ul").css({position:"absolute",margin:0,padding:0}).children("li").css({margin:f.margin,padding:f.padding});
if(isNaN(f.height)||f.height===0){h.children("ul").children("li").each(function(){var k=c(this);
if(k.height()>j.itemHeight){j.itemHeight=k.height()
}});
h.children("ul").children("li").each(function(){var k=c(this);
k.height(j.itemHeight)
});
var i=(f.margin)+(f.padding*2);
h.height(((j.itemHeight+i)*f.showItems)+f.margin)
}else{h.height(f.height)
}var g=this;
if(!f.startPaused){a.startInterval.call(g)
}if(f.mousePause){h.bind("mouseenter",function(){if(j.isPaused===true){return
}j.pausedByCode=true;
a.stopInterval.call(g);
b.pause.call(g,true)
}).bind("mouseleave",function(){if(j.isPaused===true&&!j.pausedByCode){return
}j.pausedByCode=false;
b.pause.call(g,false);
a.startInterval.call(g)
})
}},pause:function(g){var f=c(this).data("state");
if(!f){return undefined
}if(f.itemCount<2){return false
}f.isPaused=g;
var e=f.element;
if(g){c(this).addClass("paused");
e.trigger("vticker.pause")
}else{c(this).removeClass("paused");
e.trigger("vticker.resume")
}},next:function(f){var e=c(this).data("state");
if(!e){return undefined
}if(e.animating||e.itemCount<2){return false
}a.restartInterval.call(this);
a.moveUp(e,f)
},prev:function(f){var e=c(this).data("state");
if(!e){return undefined
}if(e.animating||e.itemCount<2){return false
}a.restartInterval.call(this);
a.moveDown(e,f)
},stop:function(){var e=c(this).data("state");
if(!e){return undefined
}a.stopInterval.call(this)
},remove:function(){var f=c(this).data("state");
if(!f){return undefined
}a.stopInterval.call(this);
var e=f.element;
e.unbind();
e.remove()
}};
c.fn.vTicker=function(e){if(b[e]){return b[e].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof e==="object"||!e){return b.init.apply(this,arguments)
}else{c.error("Method "+e+" does not exist on jQuery.vTicker")
}}}
})(jQuery);
function textScrollerMagic(){$(".ss-text-inner").each(function(d){var e=$(this).attr("data-speed"),a=$(this).attr("data-delay"),g=$(this).attr("data-direction"),c=$(this).attr("data-no-of-items"),b=+($(this).attr("data-height")),f=$(this).attr("data-mouse-pause");
$(this).vTicker({speed:e,pause:a,height:b,showItems:c,animation:"fade",mousePause:f,direction:g})
})
}$(document).ready(function(){if($(".ss-text").length){textScrollerMagic()
}});
$(document).ready(function(){$(".sibling-dd-nav .nav-item").hoverIntent({interval:150,over:drops_show,timeout:500,out:drops_hide});
$(".sibling-dd-nav .nav-item .popupTrigger").click(function(){return false
});
$(".sibling-dd-nav .nav-item").addClass("with-js")
});
function drops_show(){$(this).addClass("show");
$(this).removeClass("with-js")
}function drops_hide(){$(this).removeClass("show");
$(this).addClass("with-js")
}$(document).ready(function(){$("#breadcrumb li:last-child a").contents().unwrap()
});
function initRichTextImage(){enquire.register("screen and (max-width: 480px)",{match:function(){$(".grid1 .introImage").each(function(){var a=$(this).html();
if($(this).hasClass("hideMob")){if(a){$(this).parent().parent().find(".grid3").prepend('<div class="introImage hideMob">'+a+"</div>");
$(this).remove()
}}else{if(a){$(this).parent().parent().find(".grid3").prepend('<div class="introImage">'+a+"</div>");
$(this).remove()
}}});
$(".grid1 .cta").each(function(){var a=$(this).html();
if($(this).hasClass("hideMob")){if($(a).length){$(this).parent().parent().find(".grid3").append('<div class="btn btn-cta cta hideMob">'+a+"</div>");
$(this).remove()
}}else{if($(a).length){$(this).parent().parent().find(".grid3").append('<div class="btn btn-cta cta">'+a+"</div>");
$(this).remove()
}}})
},unmatch:function(){$(".grid3 .introImage").each(function(){var a=$(this).html();
if($(this).hasClass("hideMob")){if($(a).length){var b=$(this).parent().parent().find(".grid1 h2");
if($(b).length){$(this).parent().parent().find(".grid1 h2").after('<div class="introImage hideMob">'+a+"</div>");
$(this).remove()
}else{$(this).parent().parent().find(".grid1").prepend('<div class="introImage hideMob">'+a+"</div>");
$(this).remove()
}}}else{var c=$(this).parent().parent().find(".grid1 h2");
if($(c).length){$(this).parent().parent().find(".grid1 h2").after('<div class="introImage">'+a+"</div>");
$(this).remove()
}else{$(this).parent().parent().find(".grid1").append('<div class="introImage">'+a+"</div>");
$(this).remove()
}}});
$(".grid3 .cta").each(function(){var a=$(this).html();
if($(this).hasClass("hideMob")){if(a){$(this).parent().parent().find(".grid1").append('<div class="btn btn-cta cta hideMob">'+a+"</div>");
$(this).remove()
}}else{if(a){$(this).parent().parent().find(".grid1").append('<div class="btn btn-cta cta">'+a+"</div>");
$(this).remove()
}}})
}})
}$(document).ready(function(){if($(".richText").length){initRichTextImage()
}});
function searchresults(){$(".adv-search-link,.adv-panel-container > div").addClass("with-js");
$(".adv-search-link a").click(function(b){b.preventDefault();
var a=$(this).parent();
if($(a).hasClass("uparrow")){$(a).removeClass("uparrow")
}else{$(a).addClass("uparrow")
}$(".adv-panel-container > div").slideToggle(200)
});
$("#clear-btn").click(function(){$("#adv-search-year, #adv-search-month").val("0");
$("#clear-btn").closest("form").submit()
});
if($("body.mobileEnabled").length>=1){enquire.register("screen and (max-width: 480px)",{match:function(){$(".searchResults .grid1").each(function(){var a=$(this).html();
if($(a).length){$(this).parent().find(".grid3").children().eq(0).after("<div class='floatR'>"+a+"</div>");
$(this).html("")
}})
},unmatch:function(){$(".searchResults .grid3 .floatR").each(function(){var a=$(this).html();
if($(a).length){$(this).parent().parent().find(".grid1").prepend(a);
$(this).remove()
}})
}})
}}$(document).ready(function(){if($(".searchResults #searchForm .adv-panel-container").length){searchresults()
}});
function newsCategorySum(){$(".storyCategoryWrapper > h2").on("click",function(){$(this).next(".storyInfo").slideToggle(400);
$(this).toggleClass("open")
})
}$(document).ready(function(){if($(".storyCategoryWrapper").length){newsCategorySum()
}});
(function(ba){function a9(e,d,f){switch(arguments.length){case 2:return null!=e?e:d;
case 3:return null!=e?e:null!=d?d:f;
default:throw new Error("Implement me")
}}function a8(d,c){return bS.call(d,c)
}function a7(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}
}function a4(b){bP.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)
}function a3(e,d){var f=!0;
return aS(function(){return f&&(a4(e),f=!1),d.apply(this,arguments)
},d)
}function a1(d,c){al[d]||(a4(c),al[d]=!0)
}function a0(d,c){return function(a){return aO(d.call(this,a),c)
}
}function aZ(d,c){return function(a){return this.localeData().ordinal(d.call(this,a),c)
}
}function aW(){}function aV(d,c){c!==!1&&bH(d),aR(this,d),this._d=new Date(+d._d)
}function aT(v){var u=aE(v),t=u.year||0,s=u.quarter||0,r=u.month||0,q=u.week||0,p=u.day||0,o=u.hour||0,n=u.minute||0,m=u.second||0,l=u.millisecond||0;
this._milliseconds=+l+1000*m+60000*n+3600000*o,this._days=+p+7*q,this._months=+r+3*s+12*t,this._data={},this._locale=bP.localeData(),this._bubble()
}function aS(e,c){for(var f in c){a8(c,f)&&(e[f]=c[f])
}return a8(c,"toString")&&(e.toString=c.toString),a8(c,"valueOf")&&(e.valueOf=c.valueOf),e
}function aR(g,f){var j,i,h;
if("undefined"!=typeof f._isAMomentObject&&(g._isAMomentObject=f._isAMomentObject),"undefined"!=typeof f._i&&(g._i=f._i),"undefined"!=typeof f._f&&(g._f=f._f),"undefined"!=typeof f._l&&(g._l=f._l),"undefined"!=typeof f._strict&&(g._strict=f._strict),"undefined"!=typeof f._tzm&&(g._tzm=f._tzm),"undefined"!=typeof f._isUTC&&(g._isUTC=f._isUTC),"undefined"!=typeof f._offset&&(g._offset=f._offset),"undefined"!=typeof f._pf&&(g._pf=f._pf),"undefined"!=typeof f._locale&&(g._locale=f._locale),bJ.length>0){for(j in bJ){i=bJ[j],h=f[i],"undefined"!=typeof h&&(g[i]=h)
}}return g
}function aP(b){return 0>b?Math.ceil(b):Math.floor(b)
}function aO(g,f,j){for(var i=""+Math.abs(g),h=g>=0;
i.length<f;
){i="0"+i
}return(h?j?"+":"":"-")+i
}function aM(e,d){var f={milliseconds:0,months:0};
return f.months=d.month()-e.month()+12*(d.year()-e.year()),e.clone().add(f.months,"M").isAfter(d)&&--f.months,f.milliseconds=+d-+e.clone().add(f.months,"M"),f
}function aL(e,d){var f;
return d=bz(d,e),e.isBefore(d)?f=aM(e,d):(f=aM(d,e),f.milliseconds=-f.milliseconds,f.months=-f.months),f
}function aK(d,c){return function(h,g){var b,a;
return null===g||isNaN(+g)||(a1(c,"moment()."+c+"(period, number) is deprecated. Please use moment()."+c+"(number, period)."),a=h,h=g,g=a),h="string"==typeof h?+h:h,b=bP.duration(h,g),aJ(this,b,d),this
}
}function aJ(i,h,n,m){var l=h._milliseconds,k=h._days,j=h._months;
m=null==m?!0:m,l&&i._d.setTime(+i._d+l*n),k&&bI(i,"Date",b0(i,"Date")+k*n),j&&ce(i,b0(i,"Month")+j*n),m&&bP.updateOffset(i,k||j)
}function aI(b){return"[object Array]"===Object.prototype.toString.call(b)
}function aH(b){return"[object Date]"===Object.prototype.toString.call(b)||b instanceof Date
}function aG(i,h,n){var m,l=Math.min(i.length,h.length),k=Math.abs(i.length-h.length),j=0;
for(m=0;
l>m;
m++){(n&&i[m]!==h[m]||!n&&bQ(i[m])!==bQ(h[m]))&&j++
}return j+k
}function aF(d){if(d){var c=d.toLowerCase().replace(/(.)s$/,"$1");
d=au[d]||ai[c]||c
}return d
}function aE(f){var c,h,g={};
for(h in f){a8(f,h)&&(c=aF(h),c&&(g[c]=f[h]))
}return g
}function aC(a){var f,e;
if(0===a.indexOf("week")){f=7,e="day"
}else{if(0!==a.indexOf("month")){return
}f=12,e="month"
}bP[a]=function(m,l){var k,d,c=bP._locale[a],b=[];
if("number"==typeof m&&(l=m,m=ba),d=function(h){var g=bP().utc().set(e,h);
return c.call(bP._locale,g,m||"")
},null!=l){return d(l)
}for(k=0;
f>k;
k++){b.push(d(k))
}return b
}
}function bQ(e){var d=+e,f=0;
return 0!==d&&isFinite(d)&&(f=d>=0?Math.floor(d):Math.ceil(d)),f
}function bO(d,c){return new Date(Date.UTC(d,c+1,0)).getUTCDate()
}function bN(e,d,f){return bA(bP([e,11,31+d-f]),d,f).week
}function bM(b){return bK(b)?366:365
}function bK(b){return b%4===0&&b%100!==0||b%400===0
}function bH(d){var c;
d._a&&-2===d._pf.overflow&&(c=d._a[bY]<0||d._a[bY]>11?bY:d._a[bB]<1||d._a[bB]>bO(d._a[ca],d._a[bY])?bB:d._a[aY]<0||d._a[aY]>23?aY:d._a[aw]<0||d._a[aw]>59?aw:d._a[ak]<0||d._a[ak]>59?ak:d._a[cf]<0||d._a[cf]>999?cf:-1,d._pf._overflowDayOfYear&&(ca>c||c>bB)&&(c=bB),d._pf.overflow=c)
}function bG(b){return null==b._isValid&&(b._isValid=!isNaN(b._d.getTime())&&b._pf.overflow<0&&!b._pf.empty&&!b._pf.invalidMonth&&!b._pf.nullInput&&!b._pf.invalidFormat&&!b._pf.userInvalidated,b._strict&&(b._isValid=b._isValid&&0===b._pf.charsLeftOver&&0===b._pf.unusedTokens.length)),b._isValid
}function bE(b){return b?b.toLowerCase().replace("_","-"):b
}function bD(h){for(var g,l,k,j,i=0;
i<h.length;
){for(j=bE(h[i]).split("-"),g=j.length,l=bE(h[i+1]),l=l?l.split("-"):null;
g>0;
){if(k=bC(j.slice(0,g).join("-"))){return k
}if(l&&l.length>=g&&aG(j,l,!0)>=g-1){break
}g--
}i++
}return null
}function bC(e){var d=null;
if(!b1[e]&&a6){try{d=bP.locale(),require("./locale/"+e),bP.locale(d)
}catch(f){}}return b1[e]
}function bz(d,c){return c._isUTC?bP(d).zone(c._offset||0):bP(d).local()
}function by(b){return b.match(/\[[\s\S]/)?b.replace(/^\[|\]$/g,""):b.replace(/\\/g,"")
}function bw(f){var e,h,g=f.match(b4);
for(e=0,h=g.length;
h>e;
e++){g[e]=ax[g[e]]?ax[g[e]]:by(g[e])
}return function(b){var a="";
for(e=0;
h>e;
e++){a+=g[e] instanceof Function?g[e].call(b,f):g[e]
}return a
}
}function bv(d,c){return d.isValid()?(c=bu(c,d.localeData()),cd[c]||(cd[c]=bw(c)),cd[c](d)):d.localeData().invalidDate()
}function bu(f,e){function h(b){return e.longDateFormat(b)||b
}var g=5;
for(bR.lastIndex=0;
g>=0&&bR.test(f);
){f=f.replace(bR,h),bR.lastIndex=0,g-=1
}return f
}function bt(f,e){var h,g=e._strict;
switch(f){case"Q":return b7;
case"DDDD":return af;
case"YYYY":case"GGGG":case"gggg":return g?bU:ap;
case"Y":case"G":case"g":return aN;
case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return g?bq:ad;
case"S":if(g){return b7
}case"SS":if(g){return bL
}case"SSS":if(g){return af
}case"DDD":return aB;
case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return bT;
case"a":case"A":return e._locale._meridiemParse;
case"X":return aq;
case"Z":case"ZZ":return bg;
case"T":return aD;
case"SSSS":return b6;
case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return g?bL:be;
case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return be;
case"Do":return ae;
default:return h=new RegExp(bi(bj(f.replace("\\","")),"i"))
}}function br(g){g=g||"";
var f=g.match(bg)||[],j=f[f.length-1]||[],i=(j+"").match(bx)||["-",0,0],h=+(60*i[1])+bQ(i[2]);
return"+"===i[0]?-h:h
}function bp(g,f,j){var i,h=j._a;
switch(g){case"Q":null!=f&&(h[bY]=3*(bQ(f)-1));
break;
case"M":case"MM":null!=f&&(h[bY]=bQ(f)-1);
break;
case"MMM":case"MMMM":i=j._locale.monthsParse(f),null!=i?h[bY]=i:j._pf.invalidMonth=f;
break;
case"D":case"DD":null!=f&&(h[bB]=bQ(f));
break;
case"Do":null!=f&&(h[bB]=bQ(parseInt(f,10)));
break;
case"DDD":case"DDDD":null!=f&&(j._dayOfYear=bQ(f));
break;
case"YY":h[ca]=bP.parseTwoDigitYear(f);
break;
case"YYYY":case"YYYYY":case"YYYYYY":h[ca]=bQ(f);
break;
case"a":case"A":j._isPm=j._locale.isPM(f);
break;
case"H":case"HH":case"h":case"hh":h[aY]=bQ(f);
break;
case"m":case"mm":h[aw]=bQ(f);
break;
case"s":case"ss":h[ak]=bQ(f);
break;
case"S":case"SS":case"SSS":case"SSSS":h[cf]=bQ(1000*("0."+f));
break;
case"X":j._d=new Date(1000*parseFloat(f));
break;
case"Z":case"ZZ":j._useUTC=!0,j._tzm=br(f);
break;
case"dd":case"ddd":case"dddd":i=j._locale.weekdaysParse(f),null!=i?(j._w=j._w||{},j._w.d=i):j._pf.invalidWeekday=f;
break;
case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":g=g.substr(0,1);
case"gggg":case"GGGG":case"GGGGG":g=g.substr(0,2),f&&(j._w=j._w||{},j._w[g]=bQ(f));
break;
case"gg":case"GG":j._w=j._w||{},j._w[g]=bP.parseTwoDigitYear(f)
}}function bo(b){var p,o,n,m,l,k,j;
p=b._w,null!=p.GG||null!=p.W||null!=p.E?(l=1,k=4,o=a9(p.GG,b._a[ca],bA(bP(),1,4).year),n=a9(p.W,1),m=a9(p.E,1)):(l=b._locale._week.dow,k=b._locale._week.doy,o=a9(p.gg,b._a[ca],bA(bP(),l,k).year),n=a9(p.w,1),null!=p.d?(m=p.d,l>m&&++n):m=null!=p.e?p.e+l:l),j=aX(o,n,m,k,l),b._a[ca]=j.year,b._dayOfYear=j.dayOfYear
}function bn(b){var l,k,j,i,h=[];
if(!b._d){for(j=bl(b),b._w&&null==b._a[bB]&&null==b._a[bY]&&bo(b),b._dayOfYear&&(i=a9(b._a[ca],j[ca]),b._dayOfYear>bM(i)&&(b._pf._overflowDayOfYear=!0),k=at(i,0,b._dayOfYear),b._a[bY]=k.getUTCMonth(),b._a[bB]=k.getUTCDate()),l=0;
3>l&&null==b._a[l];
++l){b._a[l]=h[l]=j[l]
}for(;
7>l;
l++){b._a[l]=h[l]=null==b._a[l]?2===l?1:0:b._a[l]
}b._d=(b._useUTC?at:aQ).apply(null,h),null!=b._tzm&&b._d.setUTCMinutes(b._d.getUTCMinutes()+b._tzm)
}}function bm(d){var c;
d._d||(c=aE(d._i),d._a=[c.year,c.month,c.day,c.hour,c.minute,c.second,c.millisecond],bn(d))
}function bl(d){var c=new Date;
return d._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]
}function bk(r){if(r._f===bP.ISO_8601){return void b2(r)
}r._a=[],r._pf.empty=!0;
var q,p,o,n,m,l=""+r._i,k=l.length,j=0;
for(o=bu(r._f,r._locale).match(b4)||[],q=0;
q<o.length;
q++){n=o[q],p=(l.match(bt(n,r))||[])[0],p&&(m=l.substr(0,l.indexOf(p)),m.length>0&&r._pf.unusedInput.push(m),l=l.slice(l.indexOf(p)+p.length),j+=p.length),ax[n]?(p?r._pf.empty=!1:r._pf.unusedTokens.push(n),bp(n,p,r)):r._strict&&!p&&r._pf.unusedTokens.push(n)
}r._pf.charsLeftOver=k-j,l.length>0&&r._pf.unusedInput.push(l),r._isPm&&r._a[aY]<12&&(r._a[aY]+=12),r._isPm===!1&&12===r._a[aY]&&(r._a[aY]=0),bn(r),bH(r)
}function bj(b){return b.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(g,f,j,i,h){return f||j||i||h
})
}function bi(b){return b.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")
}function bh(h){var d,l,k,j,i;
if(0===h._f.length){return h._pf.invalidFormat=!0,void (h._d=new Date(0/0))
}for(j=0;
j<h._f.length;
j++){i=0,d=aR({},h),null!=h._useUTC&&(d._useUTC=h._useUTC),d._pf=a7(),d._f=h._f[j],bk(d),bG(d)&&(i+=d._pf.charsLeftOver,i+=10*d._pf.unusedTokens.length,d._pf.score=i,(null==k||k>i)&&(k=i,l=d))
}aS(h,l||d)
}function b2(g){var f,j,i=g._i,h=ar.exec(i);
if(h){for(g._pf.iso=!0,f=0,j=b8.length;
j>f;
f++){if(b8[f][1].exec(i)){g._f=b8[f][0]+(h[6]||" ");
break
}}for(f=0,j=bW.length;
j>f;
f++){if(bW[f][1].exec(i)){g._f+=bW[f][0];
break
}}i.match(bg)&&(g._f+="Z"),bk(g)
}else{g._isValid=!1
}}function bf(b){b2(b),b._isValid===!1&&(delete b._isValid,bP.createFromInputFallback(b))
}function bV(f,e){var h,g=[];
for(h=0;
h<f.length;
++h){g.push(e(f[h],h))
}return g
}function bs(a){var f,e=a._i;
e===ba?a._d=new Date:aH(e)?a._d=new Date(+e):null!==(f=az.exec(e))?a._d=new Date(+f[1]):"string"==typeof e?bf(a):aI(e)?(a._a=bV(e.slice(0),function(b){return parseInt(b,10)
}),bn(a)):"object"==typeof e?bm(a):"number"==typeof e?a._d=new Date(e):bP.createFromInputFallback(a)
}function aQ(j,i,p,o,n,m,l){var k=new Date(j,i,p,o,n,m,l);
return 1970>j&&k.setFullYear(j),k
}function at(d){var c=new Date(Date.UTC.apply(null,arguments));
return 1970>d&&c.setUTCFullYear(d),c
}function ah(d,c){if("string"==typeof d){if(isNaN(d)){if(d=c.weekdaysParse(d),"number"!=typeof d){return null
}}else{d=parseInt(d,10)
}}return d
}function b9(g,f,j,i,h){return h.relativeTime(f||1,!!j,g,i)
}function bX(v,u,t){var s=bP.duration(v).abs(),r=b5(s.as("s")),q=b5(s.as("m")),p=b5(s.as("h")),o=b5(s.as("d")),n=b5(s.as("M")),m=b5(s.as("y")),l=r<bZ.s&&["s",r]||1===q&&["m"]||q<bZ.m&&["mm",q]||1===p&&["h"]||p<bZ.h&&["hh",p]||1===o&&["d"]||o<bZ.d&&["dd",o]||1===n&&["M"]||n<bZ.M&&["MM",n]||1===m&&["y"]||["yy",m];
return l[2]=u,l[3]=+v>0,l[4]=t,b9.apply({},l)
}function bA(h,g,l){var k,j=l-g,i=l-h.day();
return i>j&&(i-=7),j-7>i&&(i+=7),k=bP(h).add(i,"d"),{week:Math.ceil(k.dayOfYear()/7),year:k.year()}
}function aX(j,i,p,o,n){var m,l,k=at(j,0,1).getUTCDay();
return k=0===k?7:k,p=null!=p?p:n,m=n-k+(k>o?7:0)-(n>k?7:0),l=7*(i-1)+(p-n)+m+1,{year:l>0?j:j-1,dayOfYear:l>0?l:bM(j-1)+l}
}function av(a){var f=a._i,e=a._f;
return a._locale=a._locale||bP.localeData(a._l),null===f||e===ba&&""===f?bP.invalid({nullInput:!0}):("string"==typeof f&&(a._i=f=a._locale.preparse(f)),bP.isMoment(f)?new aV(f,!0):(e?aI(e)?bh(a):bk(a):bs(a),new aV(a)))
}function aj(f,e){var h,g;
if(1===e.length&&aI(e[0])&&(e=e[0]),!e.length){return bP()
}for(h=e[0],g=1;
g<e.length;
++g){e[g][f](h)&&(h=e[g])
}return h
}function ce(e,d){var f;
return"string"==typeof d&&(d=e.localeData().monthsParse(d),"number"!=typeof d)?e:(f=Math.min(e.date(),bO(e.year(),d)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](d,f),e)
}function b0(d,c){return d._d["get"+(d._isUTC?"UTC":"")+c]()
}function bI(e,d,f){return"Month"===d?ce(e,f):e._d["set"+(e._isUTC?"UTC":"")+d](f)
}function a5(d,c){return function(a){return null!=a?(bI(this,d,a),bP.updateOffset(this,c),this):b0(this,d)
}
}function ay(b){return 400*b/146097
}function am(b){return 146097*b/400
}function ch(b){bP.duration.fn[b]=function(){return this._data[b]
}
}function b3(b){"undefined"==typeof ender&&(bd=aa.moment,aa.moment=b?a3("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",bP):bP)
}for(var bP,bd,aA,ao="2.8.3",aa="undefined"!=typeof global?global:this,b5=Math.round,bS=Object.prototype.hasOwnProperty,ca=0,bY=1,bB=2,aY=3,aw=4,ak=5,cf=6,b1={},bJ=[],a6="undefined"!=typeof module&&module.exports,az=/^\/?Date\((\-?\d+)/i,an=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,ci=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,b4=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,bR=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,be=/\d\d?/,aB=/\d{1,3}/,ap=/\d{1,4}/,ad=/[+\-]?\d{1,6}/,b6=/\d+/,bT=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,bg=/Z|[\+\-]\d\d:?\d\d/gi,aD=/T/i,aq=/[\+\-]?\d+(\.\d{1,3})?/,ae=/\d{1,2}/,b7=/\d/,bL=/\d\d/,af=/\d{3}/,bU=/\d{4}/,bq=/[+-]?\d{6}/,aN=/[+-]?\d+/,ar=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ag="YYYY-MM-DDTHH:mm:ssZ",b8=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],bW=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],bx=/([\+\-]|\d\d)/gi,aU=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1000,Minutes:60000,Hours:3600000,Days:86400000,Months:2592000000,Years:31536000000}),au={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},ai={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},cd={},bZ={s:45,m:45,h:22,d:26,M:11},bF="DDD w W M D d".split(" "),a2="M D H h m s w W".split(" "),ax={M:function(){return this.month()+1
},MMM:function(b){return this.localeData().monthsShort(this,b)
},MMMM:function(b){return this.localeData().months(this,b)
},D:function(){return this.date()
},DDD:function(){return this.dayOfYear()
},d:function(){return this.day()
},dd:function(b){return this.localeData().weekdaysMin(this,b)
},ddd:function(b){return this.localeData().weekdaysShort(this,b)
},dddd:function(b){return this.localeData().weekdays(this,b)
},w:function(){return this.week()
},W:function(){return this.isoWeek()
},YY:function(){return aO(this.year()%100,2)
},YYYY:function(){return aO(this.year(),4)
},YYYYY:function(){return aO(this.year(),5)
},YYYYYY:function(){var d=this.year(),c=d>=0?"+":"-";
return c+aO(Math.abs(d),6)
},gg:function(){return aO(this.weekYear()%100,2)
},gggg:function(){return aO(this.weekYear(),4)
},ggggg:function(){return aO(this.weekYear(),5)
},GG:function(){return aO(this.isoWeekYear()%100,2)
},GGGG:function(){return aO(this.isoWeekYear(),4)
},GGGGG:function(){return aO(this.isoWeekYear(),5)
},e:function(){return this.weekday()
},E:function(){return this.isoWeekday()
},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)
},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)
},H:function(){return this.hours()
},h:function(){return this.hours()%12||12
},m:function(){return this.minutes()
},s:function(){return this.seconds()
},S:function(){return bQ(this.milliseconds()/100)
},SS:function(){return aO(bQ(this.milliseconds()/10),2)
},SSS:function(){return aO(this.milliseconds(),3)
},SSSS:function(){return aO(this.milliseconds(),3)
},Z:function(){var d=-this.zone(),c="+";
return 0>d&&(d=-d,c="-"),c+aO(bQ(d/60),2)+":"+aO(bQ(d)%60,2)
},ZZ:function(){var d=-this.zone(),c="+";
return 0>d&&(d=-d,c="-"),c+aO(bQ(d/60),2)+aO(bQ(d)%60,2)
},z:function(){return this.zoneAbbr()
},zz:function(){return this.zoneName()
},X:function(){return this.unix()
},Q:function(){return this.quarter()
}},al={},cg=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];
bF.length;
){aA=bF.pop(),ax[aA+"o"]=aZ(ax[aA],aA)
}for(;
a2.length;
){aA=a2.pop(),ax[aA+aA]=a0(ax[aA],2)
}ax.DDDD=a0(ax.DDD,3),aS(aW.prototype,{set:function(e){var d,f;
for(f in e){d=e[f],"function"==typeof d?this[f]=d:this["_"+f]=d
}},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(b){return this._months[b.month()]
},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(b){return this._monthsShort[b.month()]
},monthsParse:function(f){var e,h,g;
for(this._monthsParse||(this._monthsParse=[]),e=0;
12>e;
e++){if(this._monthsParse[e]||(h=bP.utc([2000,e]),g="^"+this.months(h,"")+"|^"+this.monthsShort(h,""),this._monthsParse[e]=new RegExp(g.replace(".",""),"i")),this._monthsParse[e].test(f)){return e
}}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(b){return this._weekdays[b.day()]
},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(b){return this._weekdaysShort[b.day()]
},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(b){return this._weekdaysMin[b.day()]
},weekdaysParse:function(f){var e,h,g;
for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;
7>e;
e++){if(this._weekdaysParse[e]||(h=bP([2000,1]).day(e),g="^"+this.weekdays(h,"")+"|^"+this.weekdaysShort(h,"")+"|^"+this.weekdaysMin(h,""),this._weekdaysParse[e]=new RegExp(g.replace(".",""),"i")),this._weekdaysParse[e].test(f)){return e
}}},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(d){var c=this._longDateFormat[d];
return !c&&this._longDateFormat[d.toUpperCase()]&&(c=this._longDateFormat[d.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(b){return b.slice(1)
}),this._longDateFormat[d]=c),c
},isPM:function(b){return"p"===(b+"").toLowerCase().charAt(0)
},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(e,d,f){return e>11?f?"pm":"PM":f?"am":"AM"
},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(e,d){var f=this._calendar[e];
return"function"==typeof f?f.apply(d):f
},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(g,f,j,i){var h=this._relativeTime[j];
return"function"==typeof h?h(g,f,j,i):h.replace(/%d/i,g)
},pastFuture:function(e,d){var f=this._relativeTime[e>0?"future":"past"];
return"function"==typeof f?f(d):f.replace(/%s/i,d)
},ordinal:function(b){return this._ordinal.replace("%d",b)
},_ordinal:"%d",preparse:function(b){return b
},postformat:function(b){return b
},week:function(b){return bA(b,this._week.dow,this._week.doy).week
},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate
}}),bP=function(a,j,i,h){var d;
return"boolean"==typeof i&&(h=i,i=ba),d={},d._isAMomentObject=!0,d._i=a,d._f=j,d._l=i,d._strict=h,d._isUTC=!1,d._pf=a7(),av(d)
},bP.suppressDeprecationWarnings=!1,bP.createFromInputFallback=a3("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(b){b._d=new Date(b._i)
}),bP.min=function(){var b=[].slice.call(arguments,0);
return aj("isBefore",b)
},bP.max=function(){var b=[].slice.call(arguments,0);
return aj("isAfter",b)
},bP.utc=function(a,j,i,h){var d;
return"boolean"==typeof i&&(h=i,i=ba),d={},d._isAMomentObject=!0,d._useUTC=!0,d._isUTC=!0,d._l=i,d._i=a,d._f=j,d._strict=h,d._pf=a7(),av(d).utc()
},bP.unix=function(b){return bP(1000*b)
},bP.duration=function(j,c){var p,o,n,m,l=j,k=null;
return bP.isDuration(j)?l={ms:j._milliseconds,d:j._days,M:j._months}:"number"==typeof j?(l={},c?l[c]=j:l.milliseconds=j):(k=an.exec(j))?(p="-"===k[1]?-1:1,l={y:0,d:bQ(k[bB])*p,h:bQ(k[aY])*p,m:bQ(k[aw])*p,s:bQ(k[ak])*p,ms:bQ(k[cf])*p}):(k=ci.exec(j))?(p="-"===k[1]?-1:1,n=function(e){var d=e&&parseFloat(e.replace(",","."));
return(isNaN(d)?0:d)*p
},l={y:n(k[2]),M:n(k[3]),d:n(k[4]),h:n(k[5]),m:n(k[6]),s:n(k[7]),w:n(k[8])}):"object"==typeof l&&("from" in l||"to" in l)&&(m=aL(bP(l.from),bP(l.to)),l={},l.ms=m.milliseconds,l.M=m.months),o=new aT(l),bP.isDuration(j)&&a8(j,"_locale")&&(o._locale=j._locale),o
},bP.version=ao,bP.defaultFormat=ag,bP.ISO_8601=function(){},bP.momentProperties=bJ,bP.updateOffset=function(){},bP.relativeTimeThreshold=function(a,d){return bZ[a]===ba?!1:d===ba?bZ[a]:(bZ[a]=d,!0)
},bP.lang=a3("moment.lang is deprecated. Use moment.locale instead.",function(d,c){return bP.locale(d,c)
}),bP.locale=function(e,d){var f;
return e&&(f="undefined"!=typeof d?bP.defineLocale(e,d):bP.localeData(e),f&&(bP.duration._locale=bP._locale=f)),bP._locale._abbr
},bP.defineLocale=function(d,c){return null!==c?(c.abbr=d,b1[d]||(b1[d]=new aW),b1[d].set(c),bP.locale(d),b1[d]):(delete b1[d],null)
},bP.langData=a3("moment.langData is deprecated. Use moment.localeData instead.",function(b){return bP.localeData(b)
}),bP.localeData=function(d){var c;
if(d&&d._locale&&d._locale._abbr&&(d=d._locale._abbr),!d){return bP._locale
}if(!aI(d)){if(c=bC(d)){return c
}d=[d]
}return bD(d)
},bP.isMoment=function(b){return b instanceof aV||null!=b&&a8(b,"_isAMomentObject")
},bP.isDuration=function(b){return b instanceof aT
};
for(aA=cg.length-1;
aA>=0;
--aA){aC(cg[aA])
}bP.normalizeUnits=function(b){return aF(b)
},bP.invalid=function(d){var c=bP.utc(0/0);
return null!=d?aS(c._pf,d):c._pf.userInvalidated=!0,c
},bP.parseZone=function(){return bP.apply(null,arguments).parseZone()
},bP.parseTwoDigitYear=function(b){return bQ(b)+(bQ(b)>68?1900:2000)
},aS(bP.fn=aV.prototype,{clone:function(){return bP(this)
},valueOf:function(){return +this._d+60000*(this._offset||0)
},unix:function(){return Math.floor(+this/1000)
},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
},toDate:function(){return this._offset?new Date(+this):this._d
},toISOString:function(){var b=bP(this).utc();
return 0<b.year()&&b.year()<=9999?bv(b,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):bv(b,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
},toArray:function(){var b=this;
return[b.year(),b.month(),b.date(),b.hours(),b.minutes(),b.seconds(),b.milliseconds()]
},isValid:function(){return bG(this)
},isDSTShifted:function(){return this._a?this.isValid()&&aG(this._a,(this._isUTC?bP.utc(this._a):bP(this._a)).toArray())>0:!1
},parsingFlags:function(){return aS({},this._pf)
},invalidAt:function(){return this._pf.overflow
},utc:function(b){return this.zone(0,b)
},local:function(b){return this._isUTC&&(this.zone(0,b),this._isUTC=!1,b&&this.add(this._dateTzOffset(),"m")),this
},format:function(d){var c=bv(this,d||bP.defaultFormat);
return this.localeData().postformat(c)
},add:aK(1,"add"),subtract:aK(-1,"subtract"),diff:function(j,i,p){var o,n,m,l=bz(j,this),k=60000*(this.zone()-l.zone());
return i=aF(i),"year"===i||"month"===i?(o=43200000*(this.daysInMonth()+l.daysInMonth()),n=12*(this.year()-l.year())+(this.month()-l.month()),m=this-bP(this).startOf("month")-(l-bP(l).startOf("month")),m-=60000*(this.zone()-bP(this).startOf("month").zone()-(l.zone()-bP(l).startOf("month").zone())),n+=m/o,"year"===i&&(n/=12)):(o=this-l,n="second"===i?o/1000:"minute"===i?o/60000:"hour"===i?o/3600000:"day"===i?(o-k)/86400000:"week"===i?(o-k)/604800000:o),p?n:aP(n)
},from:function(d,c){return bP.duration({to:this,from:d}).locale(this.locale()).humanize(!c)
},fromNow:function(b){return this.from(bP(),b)
},calendar:function(g){var f=g||bP(),j=bz(f,this).startOf("day"),i=this.diff(j,"days",!0),h=-6>i?"sameElse":-1>i?"lastWeek":0>i?"lastDay":1>i?"sameDay":2>i?"nextDay":7>i?"nextWeek":"sameElse";
return this.format(this.localeData().calendar(h,this))
},isLeapYear:function(){return bK(this.year())
},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()
},day:function(d){var c=this._isUTC?this._d.getUTCDay():this._d.getDay();
return null!=d?(d=ah(d,this.localeData()),this.add(d-c,"d")):c
},month:a5("Month",!0),startOf:function(b){switch(b=aF(b)){case"year":this.month(0);
case"quarter":case"month":this.date(1);
case"week":case"isoWeek":case"day":this.hours(0);
case"hour":this.minutes(0);
case"minute":this.seconds(0);
case"second":this.milliseconds(0)
}return"week"===b?this.weekday(0):"isoWeek"===b&&this.isoWeekday(1),"quarter"===b&&this.month(3*Math.floor(this.month()/3)),this
},endOf:function(b){return b=aF(b),this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms")
},isAfter:function(d,c){return c=aF("undefined"!=typeof c?c:"millisecond"),"millisecond"===c?(d=bP.isMoment(d)?d:bP(d),+this>+d):+this.clone().startOf(c)>+bP(d).startOf(c)
},isBefore:function(d,c){return c=aF("undefined"!=typeof c?c:"millisecond"),"millisecond"===c?(d=bP.isMoment(d)?d:bP(d),+d>+this):+this.clone().startOf(c)<+bP(d).startOf(c)
},isSame:function(d,c){return c=aF(c||"millisecond"),"millisecond"===c?(d=bP.isMoment(d)?d:bP(d),+this===+d):+this.clone().startOf(c)===+bz(d,this).startOf(c)
},min:a3("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(b){return b=bP.apply(null,arguments),this>b?this:b
}),max:a3("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(b){return b=bP.apply(null,arguments),b>this?this:b
}),zone:function(f,e){var h,g=this._offset||0;
return null==f?this._isUTC?g:this._dateTzOffset():("string"==typeof f&&(f=br(f)),Math.abs(f)<16&&(f=60*f),!this._isUTC&&e&&(h=this._dateTzOffset()),this._offset=f,this._isUTC=!0,null!=h&&this.subtract(h,"m"),g!==f&&(!e||this._changeInProgress?aJ(this,bP.duration(g-f,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,bP.updateOffset(this,!0),this._changeInProgress=null)),this)
},zoneAbbr:function(){return this._isUTC?"UTC":""
},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""
},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this
},hasAlignedHourOffset:function(b){return b=b?bP(b).zone():0,(this.zone()-b)%60===0
},daysInMonth:function(){return bO(this.year(),this.month())
},dayOfYear:function(d){var c=b5((bP(this).startOf("day")-bP(this).startOf("year"))/86400000)+1;
return null==d?c:this.add(d-c,"d")
},quarter:function(b){return null==b?Math.ceil((this.month()+1)/3):this.month(3*(b-1)+this.month()%3)
},weekYear:function(d){var c=bA(this,this.localeData()._week.dow,this.localeData()._week.doy).year;
return null==d?c:this.add(d-c,"y")
},isoWeekYear:function(d){var c=bA(this,1,4).year;
return null==d?c:this.add(d-c,"y")
},week:function(d){var c=this.localeData().week(this);
return null==d?c:this.add(7*(d-c),"d")
},isoWeek:function(d){var c=bA(this,1,4).week;
return null==d?c:this.add(7*(d-c),"d")
},weekday:function(d){var c=(this.day()+7-this.localeData()._week.dow)%7;
return null==d?c:this.add(d-c,"d")
},isoWeekday:function(b){return null==b?this.day()||7:this.day(this.day()%7?b:b-7)
},isoWeeksInYear:function(){return bN(this.year(),1,4)
},weeksInYear:function(){var b=this.localeData()._week;
return bN(this.year(),b.dow,b.doy)
},get:function(b){return b=aF(b),this[b]()
},set:function(d,c){return d=aF(d),"function"==typeof this[d]&&this[d](c),this
},locale:function(a){var d;
return a===ba?this._locale._abbr:(d=bP.localeData(a),null!=d&&(this._locale=d),this)
},lang:a3("moment().lang() is deprecated. Use moment().localeData() instead.",function(a){return a===ba?this.localeData():this.locale(a)
}),localeData:function(){return this._locale
},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)
}}),bP.fn.millisecond=bP.fn.milliseconds=a5("Milliseconds",!1),bP.fn.second=bP.fn.seconds=a5("Seconds",!1),bP.fn.minute=bP.fn.minutes=a5("Minutes",!1),bP.fn.hour=bP.fn.hours=a5("Hours",!0),bP.fn.date=a5("Date",!0),bP.fn.dates=a3("dates accessor is deprecated. Use date instead.",a5("Date",!0)),bP.fn.year=a5("FullYear",!0),bP.fn.years=a3("years accessor is deprecated. Use year instead.",a5("FullYear",!0)),bP.fn.days=bP.fn.day,bP.fn.months=bP.fn.month,bP.fn.weeks=bP.fn.week,bP.fn.isoWeeks=bP.fn.isoWeek,bP.fn.quarters=bP.fn.quarter,bP.fn.toJSON=bP.fn.toISOString,aS(bP.duration.fn=aT.prototype,{_bubble:function(){var j,i,p,o=this._milliseconds,n=this._days,m=this._months,l=this._data,k=0;
l.milliseconds=o%1000,j=aP(o/1000),l.seconds=j%60,i=aP(j/60),l.minutes=i%60,p=aP(i/60),l.hours=p%24,n+=aP(p/24),k=aP(ay(n)),n-=aP(am(k)),m+=aP(n/30),n%=30,k+=aP(m/12),m%=12,l.days=n,l.months=m,l.years=k
},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this
},weeks:function(){return aP(this.days()/7)
},valueOf:function(){return this._milliseconds+86400000*this._days+this._months%12*2592000000+31536000000*bQ(this._months/12)
},humanize:function(d){var c=bX(this,!d,this.localeData());
return d&&(c=this.localeData().pastFuture(+this,c)),this.localeData().postformat(c)
},add:function(e,d){var f=bP.duration(e,d);
return this._milliseconds+=f._milliseconds,this._days+=f._days,this._months+=f._months,this._bubble(),this
},subtract:function(e,d){var f=bP.duration(e,d);
return this._milliseconds-=f._milliseconds,this._days-=f._days,this._months-=f._months,this._bubble(),this
},get:function(b){return b=aF(b),this[b.toLowerCase()+"s"]()
},as:function(e){var d,f;
if(e=aF(e),"month"===e||"year"===e){return d=this._days+this._milliseconds/86400000,f=this._months+12*ay(d),"month"===e?f:f/12
}switch(d=this._days+am(this._months/12),e){case"week":return d/7+this._milliseconds/604800000;
case"day":return d+this._milliseconds/86400000;
case"hour":return 24*d+this._milliseconds/3600000;
case"minute":return 24*d*60+this._milliseconds/60000;
case"second":return 24*d*60*60+this._milliseconds/1000;
case"millisecond":return Math.floor(24*d*60*60*1000)+this._milliseconds;
default:throw new Error("Unknown unit "+e)
}},lang:bP.fn.lang,locale:bP.fn.locale,toIsoString:a3("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()
}),toISOString:function(){var h=Math.abs(this.years()),g=Math.abs(this.months()),l=Math.abs(this.days()),k=Math.abs(this.hours()),j=Math.abs(this.minutes()),i=Math.abs(this.seconds()+this.milliseconds()/1000);
return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(h?h+"Y":"")+(g?g+"M":"")+(l?l+"D":"")+(k||j||i?"T":"")+(k?k+"H":"")+(j?j+"M":"")+(i?i+"S":""):"P0D"
},localeData:function(){return this._locale
}}),bP.duration.fn.toString=bP.duration.fn.toISOString;
for(aA in aU){a8(aU,aA)&&ch(aA.toLowerCase())
}bP.duration.fn.asMilliseconds=function(){return this.as("ms")
},bP.duration.fn.asSeconds=function(){return this.as("s")
},bP.duration.fn.asMinutes=function(){return this.as("m")
},bP.duration.fn.asHours=function(){return this.as("h")
},bP.duration.fn.asDays=function(){return this.as("d")
},bP.duration.fn.asWeeks=function(){return this.as("weeks")
},bP.duration.fn.asMonths=function(){return this.as("M")
},bP.duration.fn.asYears=function(){return this.as("y")
},bP.locale("en",{ordinal:function(e){var d=e%10,f=1===bQ(e%100/10)?"th":1===d?"st":2===d?"nd":3===d?"rd":"th";
return e+f
}}),a6?module.exports=bP:"function"==typeof define&&define.amd?(define("moment",function(e,d,f){return f.config&&f.config()&&f.config().noGlobal===!0&&(aa.moment=bd),bP
}),b3(!0)):b3()
}).call(this);
var dp={init:function(){$(".datePickContainer input[type='hidden']").each(function(){var d=$(this).attr("min");
var a=$(this).attr("max");
var b=dp.minmax(d);
dp.output("Min value is now: "+b);
var c=dp.minmax(a);
dp.output("Max value is now: "+c);
$(this).attr({max:c,min:b})
});
dp.listener()
},listener:function(){$(".datePickContainer select").on("change",function(){var a=0;
$(this).parent().find("select").each(function(){if(($(this).val()!="day")&&($(this).val()!="month")&&($(this).val()!="year")){a++;
if(a===3){var c=$(this).parent().find(".day").val();
var f=$(this).parent().find(".month").val();
var e=$(this).parent().find(".year").val();
var d=$(this).parent().find(".hidden").attr("min");
var b=$(this).parent().find(".hidden").attr("max");
var g=e+"-"+f+"-"+c;
dp.output(g+" "+d+" "+b)
}}})
})
},defaults:{dateIsNotBefore:"The date entered is not before the required date <br>",dateIsNotBefore:"The date entered is not after the required date <br>"},output:function(a){$(".outputPanel").append(a+"<br>")
},isValid:function(a){if(moment(a,"YYYY-MM-DD",true).isValid()){return true
}else{return false
}},isAfter:function(b,a){if(moment(b).isAfter(a)){dp.output();
return
}},isBefore:function(b,a){if(moment(b).isBefore(a)){dp.output();
return
}},minmax:function(b){if(b===""){dp.output("The date has no value so we return nothing");
return""
}var h=dp.isValid(b);
if(h){dp.output(b+": has passed validation");
return b
}else{dp.output("We have modified "+b+" because it is wonky");
var a;
var g;
var j=b.substring(0,5);
var c=b.substring(5,7);
var i=b.substring(b.lastIndexOf("-")+1);
c.indexOf("-")>-1?a="0"+c:a=c+"-";
var f=i.length;
f<2?g="0"+i:g=i;
var e=j+a+g;
return e
}}};
function tooltipInit(){$(".content-panel").on("click",".info-layer",function(a){a.preventDefault();
if(!Modernizr.csstransitions){$(this).toggleClass("open").next(".info-layer-container").slideToggle(300,function(){$(this).toggleClass("open")
})
}else{$(this).next(".info-layer-container").toggleClass("open");
$(this).toggleClass("open")
}})
}$(document).ready(function(){if($(".info-layer").length){tooltipInit()
}});
/*!
* jQuery Cycle2; version: 2.1.2 build: 20140216
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/
(function(c){function b(d){return(d||"").toLowerCase()
}var a="2.1.2";
c.fn.cycle=function(d){var e;
return 0!==this.length||c.isReady?this.each(function(){var m,h,j,k,g=c(this),i=c.fn.cycle.log;
if(!g.data("cycle.opts")){(g.data("cycle-log")===!1||d&&d.log===!1||h&&h.log===!1)&&(i=c.noop),i("--c2 init--"),m=g.data();
for(var f in m){m.hasOwnProperty(f)&&/^cycle[A-Z]+/.test(f)&&(k=m[f],j=f.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b),i(j+":",k,"("+typeof k+")"),m[j]=k)
}h=c.extend({},c.fn.cycle.defaults,m,d||{}),h.timeoutId=0,h.paused=h.paused||!1,h.container=g,h._maxZ=h.maxZ,h.API=c.extend({_container:g},c.fn.cycle.API),h.API.log=i,h.API.trigger=function(n,l){return h.container.trigger(n,l),h.API
},g.data("cycle.opts",h),g.data("cycle.API",h.API),h.API.trigger("cycle-bootstrap",[h,h.API]),h.API.addInitialSlides(),h.API.preInitSlideshow(),h.slides.length&&h.API.initSlideshow()
}}):(e={s:this.selector,c:this.context},c.fn.cycle.log("requeuing slideshow (dom not ready)"),c(function(){c(e.s,e.c).cycle(d)
}),this)
},c.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")
},addInitialSlides:function(){var e=this.opts(),d=e.slides;
e.slideCount=0,e.slides=c(),d=d.jquery?d:e.container.find(d),e.random&&d.sort(function(){return Math.random()-0.5
}),e.API.add(d)
},preInitSlideshow:function(){var e=this.opts();
e.API.trigger("cycle-pre-initialize",[e]);
var d=c.fn.cycle.transitions[e.fx];
d&&c.isFunction(d.preInit)&&d.preInit(e),e._preInitialized=!0
},postInitSlideshow:function(){var e=this.opts();
e.API.trigger("cycle-post-initialize",[e]);
var d=c.fn.cycle.transitions[e.fx];
d&&c.isFunction(d.postInit)&&d.postInit(e)
},initSlideshow:function(){var e,d=this.opts(),f=d.container;
d.API.calcFirstSlide(),"static"==d.container.css("position")&&d.container.css("position","relative"),c(d.slides[d.currSlide]).css({opacity:1,display:"block",visibility:"visible"}),d.API.stackSlides(d.slides[d.currSlide],d.slides[d.nextSlide],!d.reverse),d.pauseOnHover&&(d.pauseOnHover!==!0&&(f=c(d.pauseOnHover)),f.hover(function(){d.API.pause(!0)
},function(){d.API.resume(!0)
})),d.timeout&&(e=d.API.getSlideOpts(d.currSlide),d.API.queueTransition(e,e.timeout+d.delay)),d._initialized=!0,d.API.updateView(!0),d.API.trigger("cycle-initialized",[d]),d.API.postInitSlideshow()
},pause:function(e){var d=this.opts(),g=d.API.getSlideOpts(),f=d.hoverPaused||d.paused;
e?d.hoverPaused=!0:d.paused=!0,f||(d.container.addClass("cycle-paused"),d.API.trigger("cycle-paused",[d]).log("cycle-paused"),g.timeout&&(clearTimeout(d.timeoutId),d.timeoutId=0,d._remainingTimeout-=c.now()-d._lastQueue,(0>d._remainingTimeout||isNaN(d._remainingTimeout))&&(d._remainingTimeout=void 0)))
},resume:function(g){var f=this.opts(),d=!f.hoverPaused&&!f.paused;
g?f.hoverPaused=!1:f.paused=!1,d||(f.container.removeClass("cycle-paused"),0===f.slides.filter(":animated").length&&f.API.queueTransition(f.API.getSlideOpts(),f._remainingTimeout),f.API.trigger("cycle-resumed",[f,f._remainingTimeout]).log("cycle-resumed"))
},add:function(e,d){var j,f=this.opts(),g=f.slideCount,h=!1;
"string"==c.type(e)&&(e=c.trim(e)),c(e).each(function(){var i,k=c(this);
d?f.container.prepend(k):f.container.append(k),f.slideCount++,i=f.API.buildSlideOpts(k),f.slides=d?c(k).add(f.slides):f.slides.add(k),f.API.initSlide(i,k,--f._maxZ),k.data("cycle.opts",i),f.API.trigger("cycle-slide-added",[f,i,k])
}),f.API.updateView(!0),h=f._preInitialized&&2>g&&f.slideCount>=1,h&&(f._initialized?f.timeout&&(j=f.slides.length,f.nextSlide=f.reverse?j-1:1,f.timeoutId||f.API.queueTransition(f)):f.API.initSlideshow())
},calcFirstSlide:function(){var f,d=this.opts();
f=parseInt(d.startingSlide||0,10),(f>=d.slides.length||0>f)&&(f=0),d.currSlide=f,d.reverse?(d.nextSlide=f-1,0>d.nextSlide&&(d.nextSlide=d.slides.length-1)):(d.nextSlide=f+1,d.nextSlide==d.slides.length&&(d.nextSlide=0))
},calcNextSlide:function(){var f,d=this.opts();
d.reverse?(f=0>d.nextSlide-1,d.nextSlide=f?d.slideCount-1:d.nextSlide-1,d.currSlide=f?0:d.nextSlide+1):(f=d.nextSlide+1==d.slides.length,d.nextSlide=f?0:d.nextSlide+1,d.currSlide=f?d.slides.length-1:d.nextSlide-1)
},calcTx:function(e,d){var g,f=e;
return d&&f.manualFx&&(g=c.fn.cycle.transitions[f.manualFx]),g||(g=c.fn.cycle.transitions[f.fx]),g||(g=c.fn.cycle.transitions.fade,f.API.log('Transition "'+f.fx+'" not found.  Using fade.')),g
},prepareTx:function(j,g){var f,p,h,k,m,d=this.opts();
return 2>d.slideCount?(d.timeoutId=0,void 0):(!j||d.busy&&!d.manualTrump||(d.API.stopTransition(),d.busy=!1,clearTimeout(d.timeoutId),d.timeoutId=0),d.busy||(0!==d.timeoutId||j)&&(p=d.slides[d.currSlide],h=d.slides[d.nextSlide],k=d.API.getSlideOpts(d.nextSlide),m=d.API.calcTx(k,j),d._tx=m,j&&void 0!==k.manualSpeed&&(k.speed=k.manualSpeed),d.nextSlide!=d.currSlide&&(j||!d.paused&&!d.hoverPaused&&d.timeout)?(d.API.trigger("cycle-before",[k,p,h,g]),m.before&&m.before(k,p,h,g),f=function(){d.busy=!1,d.container.data("cycle.opts")&&(m.after&&m.after(k,p,h,g),d.API.trigger("cycle-after",[k,p,h,g]),d.API.queueTransition(k),d.API.updateView(!0))
},d.busy=!0,m.transition?m.transition(k,p,h,g,f):d.API.doTransition(k,p,h,g,f),d.API.calcNextSlide(),d.API.updateView()):d.API.queueTransition(k)),void 0)
},doTransition:function(m,h,f,p,e){var j=m,g=c(h),d=c(f),k=function(){d.animate(j.animIn||{opacity:1},j.speed,j.easeIn||j.easing,e)
};
d.css(j.cssBefore||{}),g.animate(j.animOut||{},j.speed,j.easeOut||j.easing,function(){g.css(j.cssAfter||{}),j.sync||k()
}),j.sync&&k()
},queueTransition:function(e,d){var g=this.opts(),f=void 0!==d?d:e.timeout;
return 0===g.nextSlide&&0===--g.loop?(g.API.log("terminating; loop=0"),g.timeout=0,f?setTimeout(function(){g.API.trigger("cycle-finished",[g])
},f):g.API.trigger("cycle-finished",[g]),g.nextSlide=g.currSlide,void 0):void 0!==g.continueAuto&&(g.continueAuto===!1||c.isFunction(g.continueAuto)&&g.continueAuto()===!1)?(g.API.log("terminating automatic transitions"),g.timeout=0,g.timeoutId&&clearTimeout(g.timeoutId),void 0):(f&&(g._lastQueue=c.now(),void 0===d&&(g._remainingTimeout=e.timeout),g.paused||g.hoverPaused||(g.timeoutId=setTimeout(function(){g.API.prepareTx(!1,!g.reverse)
},f))),void 0)
},stopTransition:function(){var d=this.opts();
d.slides.filter(":animated").length&&(d.slides.stop(!1,!0),d.API.trigger("cycle-transition-stopped",[d])),d._tx&&d._tx.stopTransition&&d._tx.stopTransition(d)
},advanceSlide:function(f){var d=this.opts();
return clearTimeout(d.timeoutId),d.timeoutId=0,d.nextSlide=d.currSlide+f,0>d.nextSlide?d.nextSlide=d.slides.length-1:d.nextSlide>=d.slides.length&&(d.nextSlide=0),d.API.prepareTx(!0,f>=0),!1
},buildSlideOpts:function(e){var k,f,h=this.opts(),j=e.data()||{};
for(var d in j){j.hasOwnProperty(d)&&/^cycle[A-Z]+/.test(d)&&(k=j[d],f=d.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b),h.API.log("["+(h.slideCount-1)+"]",f+":",k,"("+typeof k+")"),j[f]=k)
}j=c.extend({},c.fn.cycle.defaults,h,j),j.slideNum=h.slideCount;
try{delete j.API,delete j.slideCount,delete j.currSlide,delete j.nextSlide,delete j.slides
}catch(g){}return j
},getSlideOpts:function(e){var d=this.opts();
void 0===e&&(e=d.currSlide);
var g=d.slides[e],f=c(g).data("cycle.opts");
return c.extend({},d,f)
},initSlide:function(e,d,g){var f=this.opts();
d.css(e.slideCss||{}),g>0&&d.css("zIndex",g),isNaN(e.speed)&&(e.speed=c.fx.speeds[e.speed]||c.fx.speeds._default),e.sync||(e.speed=e.speed/2),d.addClass(f.slideClass)
},updateView:function(h,f){var d=this.opts();
if(d._initialized){var j=d.API.getSlideOpts(),g=d.slides[d.currSlide];
!h&&f!==!0&&(d.API.trigger("cycle-update-view-before",[d,j,g]),0>d.updateView)||(d.slideActiveClass&&d.slides.removeClass(d.slideActiveClass).eq(d.currSlide).addClass(d.slideActiveClass),h&&d.hideNonActive&&d.slides.filter(":not(."+d.slideActiveClass+")").css("visibility","hidden"),0===d.updateView&&setTimeout(function(){d.API.trigger("cycle-update-view",[d,j,g,h])
},j.speed/(d.sync?2:1)),0!==d.updateView&&d.API.trigger("cycle-update-view",[d,j,g,h]),h&&d.API.trigger("cycle-update-view-after",[d,j,g]))
}},getComponent:function(e){var d=this.opts(),f=d[e];
return"string"==typeof f?/^\s*[\>|\+|~]/.test(f)?d.container.find(f):c(f):f.jquery?f:c(f)
},stackSlides:function(f,e,k){var g=this.opts();
f||(f=g.slides[g.currSlide],e=g.slides[g.nextSlide],k=!g.reverse),c(f).css("zIndex",g.maxZ);
var h,j=g.maxZ-2,d=g.slideCount;
if(k){for(h=g.currSlide+1;
d>h;
h++){c(g.slides[h]).css("zIndex",j--)
}for(h=0;
g.currSlide>h;
h++){c(g.slides[h]).css("zIndex",j--)
}}else{for(h=g.currSlide-1;
h>=0;
h--){c(g.slides[h]).css("zIndex",j--)
}for(h=d-1;
h>g.currSlide;
h--){c(g.slides[h]).css("zIndex",j--)
}}c(e).css("zIndex",g.maxZ-1)
},getSlideIndex:function(d){return this.opts().slides.index(d)
}},c.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))
},c.fn.cycle.version=function(){return"Cycle2: "+a
},c.fn.cycle.transitions={custom:{},none:{before:function(g,f,d,h){g.API.stackSlides(d,f,h),g.cssBefore={opacity:1,visibility:"visible",display:"block"}
}},fade:{before:function(e,d,h,f){var g=e.API.getSlideOpts(e.nextSlide).slideCss||{};
e.API.stackSlides(d,h,f),e.cssBefore=c.extend(g,{opacity:0,visibility:"visible",display:"block"}),e.animIn={opacity:1},e.animOut={opacity:0}
}},fadeout:{before:function(e,d,h,f){var g=e.API.getSlideOpts(e.nextSlide).slideCss||{};
e.API.stackSlides(d,h,f),e.cssBefore=c.extend(g,{opacity:1,visibility:"visible",display:"block"}),e.animOut={opacity:0}
}},scrollHorz:{before:function(h,f,d,j){h.API.stackSlides(f,d,j);
var g=h.container.css("overflow","hidden").width();
h.cssBefore={left:j?g:-g,top:0,opacity:1,visibility:"visible",display:"block"},h.cssAfter={zIndex:h._maxZ-2,left:0},h.animIn={left:0},h.animOut={left:j?-g:g}
}}},c.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4000,updateView:0},c(document).ready(function(){c(c.fn.cycle.defaults.autoSelector).cycle()
})
})(jQuery),
/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
function(d){function b(g,k){var h,i,j,e=k.autoHeight;
if("container"==e){i=d(k.slides[k.currSlide]).outerHeight(),k.container.height(i)
}else{if(k._autoHeightRatio){k.container.height(k.container.width()/k._autoHeightRatio)
}else{if("calc"===e||"number"==d.type(e)&&e>=0){if(j="calc"===e?a(g,k):e>=k.slides.length?0:e,j==k._sentinelIndex){return
}k._sentinelIndex=j,k._sentinel&&k._sentinel.remove(),h=d(k.slides[j].cloneNode(!0)),h.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),h.css({position:"static",visibility:"hidden",display:"block"}).prependTo(k.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),h.find("*").css("visibility","hidden"),k._sentinel=h
}}}}function a(g,e){var j=0,h=-1;
return e.slides.each(function(l){var k=d(this).height();
k>h&&(h=k,j=l)
}),j
}function f(g,e,k,h){var j=d(h).outerHeight();
e.container.animate({height:j},e.autoHeightSpeed,e.autoHeightEasing)
}function c(e,g){g._autoHeightOnResize&&(d(window).off("resize orientationchange",g._autoHeightOnResize),g._autoHeightOnResize=null),g.container.off("cycle-slide-added cycle-slide-removed",b),g.container.off("cycle-destroyed",c),g.container.off("cycle-before",f),g._sentinel&&(g._sentinel.remove(),g._sentinel=null)
}d.extend(d.fn.cycle.defaults,{autoHeight:0,autoHeightSpeed:250,autoHeightEasing:null}),d(document).on("cycle-initialized",function(h,m){function n(){b(h,m)
}var g,j=m.autoHeight,e=d.type(j),k=null;
("string"===e||"number"===e)&&(m.container.on("cycle-slide-added cycle-slide-removed",b),m.container.on("cycle-destroyed",c),"container"==j?m.container.on("cycle-before",f):"string"===e&&/\d+\:\d+/.test(j)&&(g=j.match(/(\d+)\:(\d+)/),g=g[1]/g[2],m._autoHeightRatio=g),"number"!==e&&(m._autoHeightOnResize=function(){clearTimeout(k),k=setTimeout(n,50)
},d(window).on("resize orientationchange",m._autoHeightOnResize)),setTimeout(n,30))
})
}(jQuery),
/*! caption plugin for Cycle2;  version: 20130306 */
function(a){a.extend(a.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),a(document).on("cycle-update-view",function(c,b,e,d){"caption"===b.captionModule&&a.each(["caption","overlay"],function(){var g=this,f=e[g+"Template"],h=b.API.getComponent(g);
h.length&&f?(h.html(b.API.tmpl(f,e,b,d)),h.show()):h.hide()
})
}),a(document).on("cycle-destroyed",function(c,b){var d;
a.each(["caption","overlay"],function(){var g=this,f=b[g+"Template"];
b[g]&&f&&(d=b.API.getComponent("caption"),d.empty())
})
})
}(jQuery),
/*! command plugin for Cycle2;  version: 20130707 */
function(b){var a=b.fn.cycle;
b.fn.cycle=function(d){var h,e,f,g=b.makeArray(arguments);
return"number"==b.type(d)?this.cycle("goto",d):"string"==b.type(d)?this.each(function(){var c;
return h=d,f=b(this).data("cycle.opts"),void 0===f?(a.log('slideshow must be initialized before sending commands; "'+h+'" ignored'),void 0):(h="goto"==h?"jump":h,e=f.API[h],b.isFunction(e)?(c=b.makeArray(g),c.shift(),e.apply(f.API,c)):(a.log("unknown command: ",h),void 0))
}):a.apply(this,arguments)
},b.extend(b.fn.cycle,a),b.extend(a.API,{next:function(){var d=this.opts();
if(!d.busy||d.manualTrump){var c=d.reverse?-1:1;
d.allowWrap===!1&&d.currSlide+c>=d.slideCount||(d.API.advanceSlide(c),d.API.trigger("cycle-next",[d]).log("cycle-next"))
}},prev:function(){var d=this.opts();
if(!d.busy||d.manualTrump){var c=d.reverse?1:-1;
d.allowWrap===!1&&0>d.currSlide+c||(d.API.advanceSlide(c),d.API.trigger("cycle-prev",[d]).log("cycle-prev"))
}},destroy:function(){this.stop();
var d=this.opts(),c=b.isFunction(b._data)?b._data:b.noop;
clearTimeout(d.timeoutId),d.timeoutId=0,d.API.stop(),d.API.trigger("cycle-destroyed",[d]).log("cycle-destroyed"),d.container.removeData(),c(d.container[0],"parsedAttrs",!1),d.retainStylesOnDestroy||(d.container.removeAttr("style"),d.slides.removeAttr("style"),d.slides.removeClass(d.slideActiveClass)),d.slides.each(function(){b(this).removeData(),c(this,"parsedAttrs",!1)
})
},jump:function(f){var d,c=this.opts();
if(!c.busy||c.manualTrump){var g=parseInt(f,10);
if(isNaN(g)||0>g||g>=c.slides.length){return c.API.log("goto: invalid slide index: "+g),void 0
}if(g==c.currSlide){return c.API.log("goto: skipping, already on slide",g),void 0
}c.nextSlide=g,clearTimeout(c.timeoutId),c.timeoutId=0,c.API.log("goto: ",g," (zero-index)"),d=c.currSlide<c.nextSlide,c.API.prepareTx(!0,d)
}},stop:function(){var d=this.opts(),c=d.container;
clearTimeout(d.timeoutId),d.timeoutId=0,d.API.stopTransition(),d.pauseOnHover&&(d.pauseOnHover!==!0&&(c=b(d.pauseOnHover)),c.off("mouseenter mouseleave")),d.API.trigger("cycle-stopped",[d]).log("cycle-stopped")
},reinit:function(){var c=this.opts();
c.API.destroy(),c.container.cycle()
},remove:function(f){for(var e,k,g=this.opts(),h=[],j=1,d=0;
g.slides.length>d;
d++){e=g.slides[d],d==f?k=e:(h.push(e),b(e).data("cycle.opts").slideNum=j,j++)
}k&&(g.slides=b(h),g.slideCount--,b(k).remove(),f==g.currSlide?g.API.advanceSlide(1):g.currSlide>f?g.currSlide--:g.currSlide++,g.API.trigger("cycle-slide-removed",[g,f,k]).log("cycle-slide-removed"),g.API.updateView())
}}),b(document).on("click.cycle","[data-cycle-cmd]",function(d){d.preventDefault();
var c=b(this),f=c.data("cycle-cmd"),e=c.data("cycle-context")||".cycle-slideshow";
b(e).cycle(f,c.data("cycle-arg"))
})
}(jQuery),
/*! hash plugin for Cycle2;  version: 20130905 */
function(b){function a(d,c){var e;
return d._hashFence?(d._hashFence=!1,void 0):(e=window.location.hash.substring(1),d.slides.each(function(f){if(b(this).data("cycle-hash")==e){if(c===!0){d.startingSlide=f
}else{var g=f>d.currSlide;
d.nextSlide=f,d.API.prepareTx(!0,g)
}return !1
}}),void 0)
}b(document).on("cycle-pre-initialize",function(c,d){a(d,!0),d._onHashChange=function(){a(d,!1)
},b(window).on("hashchange",d._onHashChange)
}),b(document).on("cycle-update-view",function(f,d,c){c.hash&&"#"+c.hash!=window.location.hash&&(d._hashFence=!0,window.location.hash=c.hash)
}),b(document).on("cycle-destroyed",function(d,c){c._onHashChange&&b(window).off("hashchange",c._onHashChange)
})
}(jQuery),
/*! loader plugin for Cycle2;  version: 20131121 */
function(a){a.extend(a.fn.cycle.defaults,{loader:!1}),a(document).on("cycle-bootstrap",function(c,b){function e(h,m){function j(l){var n;
"wait"==b.loader?(g.push(l),0===f&&(g.sort(k),d.apply(b.API,[g,m]),b.container.removeClass("cycle-loading"))):(n=a(b.slides[b.currSlide]),d.apply(b.API,[l,m]),n.show(),b.container.removeClass("cycle-loading"))
}function k(n,l){return n.data("index")-l.data("index")
}var g=[];
if("string"==a.type(h)){h=a.trim(h)
}else{if("array"===a.type(h)){for(var i=0;
h.length>i;
i++){h[i]=a(h[i])[0]
}}}h=a(h);
var f=h.length;
f&&(h.css("visibility","hidden").appendTo("body").each(function(n){function q(){0===--o&&(--f,j(p))
}var o=0,p=a(this),l=p.is("img")?p:p.find("img");
return p.data("index",n),l=l.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'),l.length?(o=l.length,l.each(function(){this.complete?q():a(this).load(function(){q()
}).on("error",function(){0===--o&&(b.API.log("slide skipped; img not loaded:",this.src),0===--f&&"wait"==b.loader&&d.apply(b.API,[g,m]))
})
}),void 0):(--f,g.push(p),void 0)
}),f&&b.container.addClass("cycle-loading"))
}var d;
b.loader&&(d=b.API.add,b.API.add=e)
})
}(jQuery),
/*! pager plugin for Cycle2;  version: 20130525 */
function(c){function b(e,d,h){var f,g=e.API.getComponent("pager");
g.each(function(){var i=c(this);
if(d.pagerTemplate){var j=e.API.tmpl(d.pagerTemplate,d,e,h[0]);
f=c(j).appendTo(i)
}else{f=i.children().eq(e.slideCount-1)
}f.on(e.pagerEvent,function(k){k.preventDefault(),e.API.page(i,k.currentTarget)
})
})
}function a(h,f){var d=this.opts();
if(!d.busy||d.manualTrump){var k=h.children().index(f),g=k,j=g>d.currSlide;
d.currSlide!=g&&(d.nextSlide=g,d.API.prepareTx(!0,j),d.API.trigger("cycle-pager-activated",[d,h,f]))
}}c.extend(c.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerTemplate:"<span>&bull;</span>"}),c(document).on("cycle-bootstrap",function(f,d,g){g.buildPagerLink=b
}),c(document).on("cycle-slide-added",function(g,d,h,f){d.pager&&(d.API.buildPagerLink(d,h,f),d.API.page=a)
}),c(document).on("cycle-slide-removed",function(e,d,g){if(d.pager){var f=d.API.getComponent("pager");
f.each(function(){var h=c(this);
c(h.children()[g]).remove()
})
}}),c(document).on("cycle-update-view",function(e,d){var f;
d.pager&&(f=d.API.getComponent("pager"),f.each(function(){c(this).children().removeClass(d.pagerActiveClass).eq(d.currSlide).addClass(d.pagerActiveClass)
}))
}),c(document).on("cycle-destroyed",function(g,f){var d=f.API.getComponent("pager");
d&&(d.children().off(f.pagerEvent),f.pagerTemplate&&d.empty())
})
}(jQuery),
/*! prevnext plugin for Cycle2;  version: 20130709 */
function(a){a.extend(a.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),a(document).on("cycle-initialized",function(d,c){if(c.API.getComponent("next").on(c.nextEvent,function(g){g.preventDefault(),c.API.next()
}),c.API.getComponent("prev").on(c.prevEvent,function(g){g.preventDefault(),c.API.prev()
}),c.swipe){var b=c.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",f=c.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";
c.container.on(b,function(){c.API.next()
}),c.container.on(f,function(){c.API.prev()
})
}}),a(document).on("cycle-update-view",function(g,d){if(!d.allowWrap){var b=d.disabledClass,k=d.API.getComponent("next"),f=d.API.getComponent("prev"),h=d._prevBoundry||0,j=void 0!==d._nextBoundry?d._nextBoundry:d.slideCount-1;
d.currSlide==j?k.addClass(b).prop("disabled",!0):k.removeClass(b).prop("disabled",!1),d.currSlide===h?f.addClass(b).prop("disabled",!0):f.removeClass(b).prop("disabled",!1)
}}),a(document).on("cycle-destroyed",function(c,b){b.API.getComponent("prev").off(b.nextEvent),b.API.getComponent("next").off(b.prevEvent),b.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
})
}(jQuery),
/*! progressive loader plugin for Cycle2;  version: 20130315 */
function(a){a.extend(a.fn.cycle.defaults,{progressive:!1}),a(document).on("cycle-pre-initialize",function(p,h){if(h.progressive){var f,q,e=h.API,k=e.next,g=e.prev,b=e.prepareTx,m=a.type(h.progressive);
if("array"==m){f=h.progressive
}else{if(a.isFunction(h.progressive)){f=h.progressive(h)
}else{if("string"==m){if(q=a(h.progressive),f=a.trim(q.html()),!f){return
}if(/^(\[)/.test(f)){try{f=a.parseJSON(f)
}catch(j){return e.log("error parsing progressive slides",j),void 0
}}else{f=f.split(RegExp(q.data("cycle-split")||"\n")),f[f.length-1]||f.pop()
}}}}b&&(e.prepareTx=function(i,c){var d,l;
return i||0===f.length?(b.apply(h.API,[i,c]),void 0):(c&&h.currSlide==h.slideCount-1?(l=f[0],f=f.slice(1),h.container.one("cycle-slide-added",function(o,n){setTimeout(function(){n.API.advanceSlide(1)
},50)
}),h.API.add(l)):c||0!==h.currSlide?b.apply(h.API,[i,c]):(d=f.length-1,l=f[d],f=f.slice(0,d),h.container.one("cycle-slide-added",function(o,n){setTimeout(function(){n.currSlide=1,n.API.advanceSlide(-1)
},50)
}),h.API.add(l,!0)),void 0)
}),k&&(e.next=function(){var d=this.opts();
if(f.length&&d.currSlide==d.slideCount-1){var c=f[0];
f=f.slice(1),d.container.one("cycle-slide-added",function(l,i){k.apply(i.API),i.container.removeClass("cycle-loading")
}),d.container.addClass("cycle-loading"),d.API.add(c)
}else{k.apply(d.API)
}}),g&&(e.prev=function(){var l=this.opts();
if(f.length&&0===l.currSlide){var d=f.length-1,c=f[d];
f=f.slice(0,d),l.container.one("cycle-slide-added",function(n,i){i.currSlide=1,i.API.advanceSlide(-1),i.container.removeClass("cycle-loading")
}),l.container.addClass("cycle-loading"),l.API.add(c,!0)
}else{g.apply(l.API)
}})
}})
}(jQuery),
/*! tmpl plugin for Cycle2;  version: 20121227 */
function(a){a.extend(a.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),a.extend(a.fn.cycle.API,{tmpl:function(c,b){var e=RegExp(b.tmplRegex||a.fn.cycle.defaults.tmplRegex,"g"),d=a.makeArray(arguments);
return d.shift(),c.replace(e,function(h,g){var p,k,m,f,j=g.split(".");
for(p=0;
d.length>p;
p++){if(m=d[p]){if(j.length>1){for(f=m,k=0;
j.length>k;
k++){m=f,f=f[j[k]]||g
}}else{f=m[g]
}if(a.isFunction(f)){return f.apply(m,d)
}if(void 0!==f&&null!==f&&f!=g){return f
}}}return g
})
}})
}(jQuery);
function initSnippetLinks(){if($("body.mobileEnabled").length>=1){$(".lightbox").each(function(){if(this.href.indexOf("/org_charts")>=0){var c=$.get("/etc/designs/common_foundation/orgchart/assets/js/orgchartInline.js",function(){});
enquire.register("screen and (max-width: 785px)",{setup:function(){},match:function(){$.colorbox.close();
c.always(function(){$(".lightbox[href*='/org_charts']").each(function(){$(this).attr("class","lightbox orgchartInline").after("<span class='orgchartmobileimport'></span>");
$(this).hide();
var d=$(this).attr("href");
var e=$.get(d,function(f){$(".orgchartmobileimport").html($(f).find(".chart-title"))
});
e.always(function(){orgchartInline()
})
})
})
},unmatch:function(){$(".lightbox[href*='/org_charts']").each(function(){$(".orgchartmobileimport").remove();
$(this).attr("class","lightbox  cboxElement");
$(this).show()
})
}})
}})
}var a;
function b(){var c=jQuery(window).width();
if(a){clearTimeout(a)
}a=setTimeout(function(){if($("#cboxLoadedContent").is(":visible")){$.colorbox.load(true);
clearTimeout(a)
}},300)
}jQuery(window).resize(b);
$('a.lightbox, a[href$="#lightbox"]:not([href$=".snippet.html#lightbox"])').each(function(){if(this.href.indexOf("/dam/")>=0){this.href=this.href.replace(/.snippet.html/,"")
}else{this.href=this.href.replace(/\.html/,".snippet.html")
}if(this.href){$(this).colorbox({innerWidth:"90%",scrolling:false,initialHeight:300,initialWidth:400,maxWidth:850,rel:"nofollow",current:"",opacity:0.7,onLoad:function(){},onComplete:function(){$("#RelPos").addClass("blur");
if($("video").length){resizeVidFunc();
$(".video").parentsUntil(".padding").parent().addClass("nopadding")
}var d=($(".org-chart").length>0);
if(d){$("#cboxLoadedContent").addClass("orgbg");
$.colorbox.resize({innerWidth:"90%",innerHeight:"80%"});
var c=$("#cboxLoadedContent").height();
$("#cboxLoadedContent #org-chart-container").css({height:c});
var e=$.get("/etc/designs/common_foundation/orgchart/js/orgchart.js",function(){});
e.always(function(){orgchartMagic()
})
}expandable();
$.colorbox.resize();
$("table.striped tr:nth-child(even)").addClass("zebra")
},onCleanup:function(){$("#RelPos").removeClass("blur")
}})
}})
}$(document).ready(function(){if($(".lightbox, a[href$='#lightbox']").length){initSnippetLinks()
}});
function ModalOrSlideMode(){init_as_Toggle();
togglemoredetails();
contact_set_resize();
var a=jQuery(window).width();
if(a>=785){init_as_modal()
}else{init_as_Toggle()
}}function togglemoredetails(){$(".contact-inner").on("click",".toggle.view-more-info",function(a){a.preventDefault();
var b=$(this).parent().next();
if(b.is(":hidden")){b.slideDown("fast")
}else{if(b.is(":visible")){b.slideUp("fast")
}}})
}function init_as_Toggle(){if($("body.mobileEnabled").length>=1){$(".view-more-info").addClass("toggle").removeClass("modal cboxElement")
}}function init_as_modal(){$(".view-more-info").each(function(a){$(this).addClass("CSlightbox")
});
$(".view-more-info").addClass("modal cboxElement").removeClass("toggle");
$("a.CSlightbox").colorbox({innerWidth:"90%",scrolling:false,initialHeight:200,initialWidth:300,maxWidth:850,opacity:0.7,rel:"nofollow",inline:true,current:"",href:function(){var a=$(this).parent().parent().html();
return"<div class='cnt-more-info-preview'> "+a+"</div>"
},onLoad:function(){$("#cboxLoadingGraphic").show()
},onComplete:function(){$("#cboxLoadingGraphic").hide();
$("#RelPos").addClass("blur");
$.colorbox.resize()
},onCleanup:function(){$("#RelPos").removeClass("blur")
}})
}function contact_set_resize(){function a(){var b=jQuery(window).width();
if(b<=785){if($(".cnt-more-info-preview").length>="1"){$.colorbox.close()
}init_as_Toggle()
}else{if(b>=785){if($(".cnt-more-info-preview").length>="1"){$.colorbox.load(true);
$.colorbox.resize()
}init_as_modal()
}}if($("#cboxLoadedContent").is(":visible")){$.colorbox.load(true);
$("#cboxLoadingGraphic").hide()
}}jQuery(window).resize(a)
}$(document).ready(function(){if($(".contact-set,.contact-set-edit").length){ModalOrSlideMode()
}});
function SetPaginationW(){var c=$(".paginationList li").length;
var a=$(".paginationList li").outerWidth()+2;
var b=c*a;
$(".paginationList").css("width",b)
}function initPagination(){$(".paginationList li.disabled a, .paginationList li.currentPage a").click(function(){return false
});
enquire.register("screen and (max-width: 785px)",{setup:function(){SetPaginationW()
},match:function(){SetPaginationW()
},unmatch:function(){SetPaginationW()
}})
}$(document).ready(function(){if($(".searchPagination").length){initPagination()
}});
function img_gallery(){e();
$(".imagegallery li a").addClass("Galllightbox");
$(".imagegallery img").each(function(){var f=$(this).width();
var g=$(this).height();
if(g>f){$(this).addClass("portrait")
}});
$(".imagegallery li").each(function(f){if(f%2){$(this).addClass("even")
}else{$(this).addClass("odd")
}});
function a(f){$(".imagegallery li").each(function(k){var h=jQuery(window).width();
if(f>="matchH"){var g=$(".caption",this).height();
var j=$(this).next().find(".caption").height();
if((g>j)&&($(this).hasClass("odd"))){$(this).next().find(".caption").height(g)
}else{if((g<j)&&($(this).hasClass("odd"))){$(".caption",this).height(j)
}}}else{$(".caption").height("auto")
}var l=($(".caption",this).outerHeight()+2)+"px";
$(".caption",this).css({top:"-"+l});
$(this).css({"margin-top":l})
});
clearTimeout(c)
}function d(f){W=($(".imagegallery li:eq(0)").outerWidth())*f;
$(".imagegallery li").each(function(){$(this).css("height",W+"px")
})
}function b(f){$(".imagegallery li a").each(function(){var g=$(this).parent().find("span[data-maxwidth='"+f+"']").attr("data-src");
$(this).attr("href",g)
})
}$("a.Galllightbox").colorbox({innerWidth:"90%",scrolling:false,initialHeight:200,initialWidth:300,maxWidth:850,opacity:0.7,current:"{current} of {total}",onLoad:function(){$("#cboxLoadingGraphic").show()
},onComplete:function(){$("#cboxLoadingGraphic").hide();
$("#RelPos").addClass("blur");
$.colorbox.resize()
},onCleanup:function(){$("#RelPos").removeClass("blur")
}});
var c;
function e(){var f=jQuery(window).width();
if(c){clearTimeout(c)
}c=setTimeout(function(){if((f>=148)&&(f<=319)){b("319")
}if((f>=319)&&(f<=476)){b("476")
}if((f>=476)&&(f<=640)){b("640")
}if((f>=640)&&(f<=840)){b("840")
}if(f>=840){b("968")
}if(f<=243){d("0.75");
$(".caption").height("auto");
a("dontmatchH");
$(".imagegallery li .caption").show();
$(".imagegallery li a").removeClass("lightbox cboxElement");
$(".imagegallery li").mouseover(function(){$(".caption",this).show()
});
$(".imagegallery li").mouseout(function(){$(".caption",this).show()
})
}else{if((f>=243)&&(f<=383)){d("0.75");
$(".caption").height("auto");
a("matchH");
$(".imagegallery li .caption").show();
$(".imagegallery li a").removeClass("lightbox cboxElement");
$(".imagegallery li").mouseover(function(){$(".caption",this).show()
});
$(".imagegallery li").mouseout(function(){$(".caption",this).show()
})
}else{if(f>=383){d("0.75");
$(".caption").height("auto");
a("dontmatchH");
$(".imagegallery li .caption").hide();
$(".imagegallery li a").addClass("lightbox cboxElement");
$(".imagegallery li").css({"margin-top":"0"});
$(".imagegallery li").mouseover(function(){$(".caption",this).show()
});
$(".imagegallery li").mouseout(function(){$(".caption",this).hide()
})
}}}if($("#cboxLoadedContent").is(":visible")){$.colorbox.load(true);
clearTimeout(c)
}},300)
}jQuery(window).resize(e)
}$(document).ready(function(){if($(".imagegallery").length){img_gallery()
}});
function orgchartMagic(){var Log=$("#log");
var Level=0;
var jqxhr=$.get("/etc/designs/common_foundation/orgchart/assets/js/jit.js",function(){});
jqxhr.always(function(){stinit()
});
function stinit(){var json_data=$(".chart-title").attr("data-ts-json");
var json=eval("("+json_data+")");
var levels_data=$("#org-chart-container").attr("data-ts-levels");
var levels=eval("("+levels_data+")");
var constrained_data=$("#org-chart-container").attr("data-ts-constrained");
var constrained=eval("("+constrained_data+")");
$jit.ST.Plot.NodeTypes.implement({"stroke-rect":{render:function(node,canvas){var width=node.getData("width"),height=node.getData("height"),pos=this.getAlignedPos(node.pos.getc(true),width,height),posX=pos.x+width/2,posY=pos.y+height/2;
this.nodeHelper.rectangle.render("fill",{x:posX,y:posY},width,height,canvas);
this.nodeHelper.rectangle.render("stroke",{x:posX,y:posY},width,height,canvas)
}}});
var st=new $jit.ST({injectInto:"org-chart-container",levelDistance:50,constrained:constrained,levelsToShow:levels,orientation:"top",align:"center",siblingOffset:14,Navigation:{enable:true,panning:true,zooming:false},Node:{overridable:true,type:"stroke-rect",height:50,width:170,CanvasStyles:{fillStyle:"#ededed",strokeStyle:"#cccccc",lineWidth:1}},Edge:{type:"bezier",overridable:true,color:"#c3c3c3",lineWidth:1},Label:{type:"HTML"},onBeforeCompute:function(node){$(Log).html("<span class='loading'></span>loading "+node.data.name);
Level=node._depth+1
},onAfterCompute:function(node){$(Log).html("");
$(".level").html("Level:"+Level)
},onCreateLabel:function(label,node){label.className="member";
label.id=node.id;
label.innerHTML="<p class='name'>"+node.data.name+"</p><p class='title'>"+node.data.jobTitle+"</p>";
if(!node.anySubnode("exist")){var count=0;
node.eachSubnode(function(n){count++
});
$("<span class='more'>["+count+"]</span>").appendTo(label);
if(count>0){$(label).addClass("more")
}}label.onclick=function(){st.onClick(node.id)
}
},onPlaceLabel:function(label,node){},onBeforePlotNode:function(node){if(node.selected){$("#"+node.id).addClass("selected");
var dataname=node.data.name;
var dataphoto=node.data.image.fileReference;
var datajobtitle=node.data.jobTitle;
var dataphone=node.data.phone;
var datamobile=node.data.mobile;
var datafax=node.data.fax;
var dataemail=node.data.email;
if(typeof(dataphoto)!=="undefined"){dataphoto=dataphoto.replace(new RegExp(" ","gi"),"%20");
$(".biz-card .photo").html("<img alt="+dataname+" src="+dataphoto+">")
}else{$(".biz-card .photo").html("<img width='85' height='98' alt='name of employee' src='assets/images/dummy/contact-photo.jpg'>")
}$(".biz-card .name").html(node.data.name);
if(typeof(datajobtitle)!=="undefined"){$(".biz-card .title").html(datajobtitle)
}if(typeof(dataipt)!=="undefined"){$(".biz-card .ipt").html("<strong>"+node.data.ipt+"</strong>")
}if(typeof(dataphone)!=="undefined"){$(".biz-card .tel").html("<strong>Phone:</strong> "+dataphone)
}if(typeof(datamobile)!=="undefined"){$(".biz-card .mob").html("<strong>Mobile:</strong> "+datamobile)
}if(typeof(datafax)!=="undefined"){$(".biz-card .fax").html("<strong>Fax:</strong> "+datafax)
}if(typeof(dataemail)!=="undefined"){$(".biz-card .email").html("<a href='mailto:"+dataemail+"'>"+dataemail+"</a>")
}}else{$("#"+node.id).removeClass("selected")
}},onBeforePlotLine:function(adj){if(adj.nodeFrom.selected&&adj.nodeTo.selected){adj.data.$color="#003781";
adj.data.$lineWidth=2
}else{delete adj.data.$color;
delete adj.data.$lineWidth
}},onComplete:function(){$("#org-chart-container-canvaswidget").css("left","-7px");
if($(".biz-card").not().hasClass("ranonce")){}else{var cardwidth=$(".biz-card").width();
$(".biz-card").animate({right:"10"},1000,function(){$(this).addClass("open");
$(this).addClass("ranonce")
})
}}});
st.loadJSON(json);
st.compute();
st.onClick(st.root)
}$(".hide-btn").click(function(){var cardwidth=$(".biz-card").width()+4;
if($(".biz-card").hasClass("open")){$(".biz-card").animate({right:-cardwidth},1000,function(){$(this).toggleClass("open")
})
}else{$(".biz-card").animate({right:"10"},1000,function(){$(this).toggleClass("open")
})
}$(this).toggleClass("active");
return false
})
}(function(){window.$jit=function(a){a=a||window;
for(var b in $jit){if($jit[b].$extend){a[b]=$jit[b]
}}};
$jit.version="2.0.1";
var P=function(a){return document.getElementById(a)
};
P.empty=function(){};
P.extend=function(c,b){for(var a in (b||{})){c[a]=b[a]
}return c
};
P.lambda=function(a){return(typeof a=="function")?a:function(){return a
}
};
P.time=Date.now||function(){return +new Date
};
P.splat=function(a){var b=P.type(a);
return b?((b!="array")?[a]:a):[]
};
P.type=function(a){var b=P.type.s.call(a).match(/^\[object\s(.*)\]$/)[1].toLowerCase();
if(b!="object"){return b
}if(a&&a.$$family){return a.$$family
}return(a&&a.nodeName&&a.nodeType==1)?"element":b
};
P.type.s=Object.prototype.toString;
P.each=function(f,b){var d=P.type(f);
if(d=="object"){for(var e in f){b(f[e],e)
}}else{for(var a=0,c=f.length;
a<c;
a++){b(f[a],a)
}}};
P.indexOf=function(c,d){if(Array.indexOf){return c.indexOf(d)
}for(var a=0,b=c.length;
a<b;
a++){if(c[a]===d){return a
}}return -1
};
P.map=function(c,a){var b=[];
P.each(c,function(d,e){b.push(a(d,e))
});
return b
};
P.reduce=function(b,e,a){var c=b.length;
if(c==0){return a
}var d=arguments.length==3?a:b[--c];
while(c--){d=e(d,b[c])
}return d
};
P.merge=function(){var b={};
for(var e=0,c=arguments.length;
e<c;
e++){var a=arguments[e];
if(P.type(a)!="object"){continue
}for(var g in a){var d=a[g],f=b[g];
b[g]=(f&&P.type(d)=="object"&&P.type(f)=="object")?P.merge(f,d):P.unlink(d)
}}return b
};
P.unlink=function(e){var b;
switch(P.type(e)){case"object":b={};
for(var a in e){b[a]=P.unlink(e[a])
}break;
case"array":b=[];
for(var d=0,c=e.length;
d<c;
d++){b[d]=P.unlink(e[d])
}break;
default:return e
}return b
};
P.zip=function(){if(arguments.length===0){return[]
}for(var f=0,b=[],c=arguments.length,e=arguments[0].length;
f<e;
f++){for(var d=0,a=[];
d<c;
d++){a.push(arguments[d][f])
}b.push(a)
}return b
};
P.rgbToHex=function(b,d){if(b.length<3){return null
}if(b.length==4&&b[3]==0&&!d){return"transparent"
}var a=[];
for(var c=0;
c<3;
c++){var e=(b[c]-0).toString(16);
a.push(e.length==1?"0"+e:e)
}return d?a:"#"+a.join("")
};
P.hexToRgb=function(d){if(d.length!=7){d=d.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
d.shift();
if(d.length!=3){return null
}var b=[];
for(var a=0;
a<3;
a++){var c=d[a];
if(c.length==1){c+=c
}b.push(parseInt(c,16))
}return b
}else{d=parseInt(d.slice(1),16);
return[d>>16,d>>8&255,d&255]
}};
P.destroy=function(a){P.clean(a);
if(a.parentNode){a.parentNode.removeChild(a)
}if(a.clearAttributes){a.clearAttributes()
}};
P.clean=function(c){for(var d=c.childNodes,a=0,b=d.length;
a<b;
a++){P.destroy(d[a])
}};
P.addEvent=function(c,a,b){if(c.addEventListener){c.addEventListener(a,b,false)
}else{c.attachEvent("on"+a,b)
}};
P.addEvents=function(a,c){for(var b in c){P.addEvent(a,b,c[b])
}};
P.hasClass=function(a,b){return(" "+a.className+" ").indexOf(" "+b+" ")>-1
};
P.addClass=function(a,b){if(!P.hasClass(a,b)){a.className=(a.className+" "+b)
}};
P.removeClass=function(a,b){a.className=a.className.replace(new RegExp("(^|\\s)"+b+"(?:\\s|$)"),"$1")
};
P.getPos=function(f){var e=b(f);
var c=d(f);
return{x:e.x-c.x,y:e.y-c.y};
function b(g){var h={x:0,y:0};
while(g&&!a(g)){h.x+=g.offsetLeft;
h.y+=g.offsetTop;
g=g.offsetParent
}return h
}function d(g){var h={x:0,y:0};
while(g&&!a(g)){h.x+=g.scrollLeft;
h.y+=g.scrollTop;
g=g.parentNode
}return h
}function a(g){return(/^(?:body|html)$/i).test(g.tagName)
}};
P.event={get:function(a,b){b=b||window;
return a||b.event
},getWheel:function(a){return a.wheelDelta?a.wheelDelta/120:-(a.detail||0)/3
},isRightClick:function(a){return(a.which==3||a.button==2)
},getPos:function(c,d){d=d||window;
c=c||d.event;
var a=d.document;
a=a.documentElement||a.body;
if(c.touches&&c.touches.length){c=c.touches[0]
}var b={x:c.pageX||(c.clientX+a.scrollLeft),y:c.pageY||(c.clientY+a.scrollTop)};
return b
},stop:function(a){if(a.stopPropagation){a.stopPropagation()
}a.cancelBubble=true;
if(a.preventDefault){a.preventDefault()
}else{a.returnValue=false
}}};
$jit.util=$jit.id=P;
var B=function(a){a=a||{};
var b=function(){for(var d in this){if(typeof this[d]!="function"){this[d]=P.unlink(this[d])
}}this.constructor=b;
if(B.prototyping){return this
}var e=this.initialize?this.initialize.apply(this,arguments):this;
this.$$family="class";
return e
};
for(var c in B.Mutators){if(!a[c]){continue
}a=B.Mutators[c](a,a[c]);
delete a[c]
}P.extend(b,this);
b.constructor=B;
b.prototype=a;
return b
};
B.Mutators={Implements:function(b,a){P.each(P.splat(a),function(d){B.prototyping=d;
var e=(typeof d=="function")?new d:d;
for(var c in e){if(!(c in b)){b[c]=e[c]
}}delete B.prototyping
});
return b
}};
P.extend(B,{inherit:function(c,d){for(var f in d){var b=d[f];
var e=c[f];
var a=P.type(b);
if(e&&a=="function"){if(b!=e){B.override(c,f,b)
}}else{if(a=="object"){c[f]=P.merge(e,b)
}else{c[f]=b
}}}return c
},override:function(b,c,a){var d=B.prototyping;
if(d&&b[c]!=d[c]){d=null
}var e=function(){var g=this.parent;
this.parent=d?d[c]:b[c];
var f=a.apply(this,arguments);
this.parent=g;
return f
};
b[c]=e
}});
B.prototype.implement=function(){var a=this.prototype;
P.each(Array.prototype.slice.call(arguments||[]),function(b){B.inherit(a,b)
});
return this
};
$jit.Class=B;
$jit.json={prune:function(a,b){this.each(a,function(c,d){if(d==b&&c.children){delete c.children;
c.children=[]
}})
},getParent:function(c,b){if(c.id==b){return false
}var d=c.children;
if(d&&d.length>0){for(var e=0;
e<d.length;
e++){if(d[e].id==b){return c
}else{var a=this.getParent(d[e],b);
if(a){return a
}}}}return false
},getSubtree:function(c,b){if(c.id==b){return c
}for(var e=0,d=c.children;
d&&e<d.length;
e++){var a=this.getSubtree(d[e],b);
if(a!=null){return a
}}return null
},eachLevel:function(c,f,e,b){if(f<=e){b(c,f);
if(!c.children){return
}for(var a=0,d=c.children;
a<d.length;
a++){this.eachLevel(d[a],f+1,e,b)
}}},each:function(b,a){this.eachLevel(b,0,Number.MAX_VALUE,a)
}};
$jit.Trans={$extend:true,linear:function(a){return a
}};
var J=$jit.Trans;
(function(){var b=function(c,d){d=P.splat(d);
return P.extend(c,{easeIn:function(e){return c(e,d)
},easeOut:function(e){return 1-c(1-e,d)
},easeInOut:function(e){return(e<=0.5)?c(2*e,d)/2:(2-c(2*(1-e),d))/2
}})
};
var a={Pow:function(c,d){return Math.pow(c,d[0]||6)
},Expo:function(c){return Math.pow(2,8*(c-1))
},Circ:function(c){return 1-Math.sin(Math.acos(c))
},Sine:function(c){return 1-Math.sin((1-c)*Math.PI/2)
},Back:function(c,d){d=d[0]||1.618;
return Math.pow(c,2)*((d+1)*c-d)
},Bounce:function(f){var c;
for(var d=0,e=1;
1;
d+=e,e/=2){if(f>=(7-4*d)/11){c=e*e-Math.pow((11-6*d-11*f)/4,2);
break
}}return c
},Elastic:function(c,d){return Math.pow(2,10*--c)*Math.cos(20*c*Math.PI*(d[0]||1)/3)
}};
P.each(a,function(c,d){J[d]=b(c)
});
P.each(["Quad","Cubic","Quart","Quint"],function(c,d){J[c]=b(function(e){return Math.pow(e,[d+2])
})
})
})();
var x=new B({initialize:function(a){this.setOptions(a)
},setOptions:function(b){var a={duration:2500,fps:40,transition:J.Quart.easeInOut,compute:P.empty,complete:P.empty,link:"ignore"};
this.opt=P.merge(a,b||{});
return this
},step:function(){var a=P.time(),b=this.opt;
if(a<this.time+b.duration){var c=b.transition((a-this.time)/b.duration);
b.compute(c)
}else{this.timer=clearInterval(this.timer);
b.compute(1);
b.complete()
}},start:function(){if(!this.check()){return this
}this.time=0;
this.startTimer();
return this
},startTimer:function(){var b=this,a=this.opt.fps;
if(this.timer){return false
}this.time=P.time()-this.time;
this.timer=setInterval((function(){b.step()
}),Math.round(1000/a));
return true
},pause:function(){this.stopTimer();
return this
},resume:function(){this.startTimer();
return this
},stopTimer:function(){if(!this.timer){return false
}this.time=P.time()-this.time;
this.timer=clearInterval(this.timer);
return true
},check:function(){if(!this.timer){return true
}if(this.opt.link=="cancel"){this.stopTimer();
return true
}return false
}});
var E=function(){var e=arguments;
for(var b=0,c=e.length,a={};
b<c;
b++){var d=E[e[b]];
if(d.$extend){P.extend(a,d)
}else{a[e[b]]=d
}}return a
};
E.AreaChart={$extend:true,animate:true,labelOffset:3,type:"stacked",Tips:{enable:false,onShow:P.empty,onHide:P.empty},Events:{enable:false,onClick:P.empty},selectOnHover:true,showAggregates:true,showLabels:true,filterOnClick:false,restoreOnRightClick:false};
E.Margin={$extend:false,top:0,left:0,right:0,bottom:0};
E.Canvas={$extend:true,injectInto:"id",type:"2D",width:false,height:false,useCanvas:false,withLabels:true,background:false,Scene:{Lighting:{enable:false,ambient:[1,1,1],directional:{direction:{x:-100,y:-100,z:-100},color:[0.5,0.3,0.1]}}}};
E.Tree={$extend:true,orientation:"left",subtreeOffset:8,siblingOffset:5,indent:10,multitree:false,align:"center"};
E.Node={$extend:false,overridable:false,type:"circle",color:"#ccb",alpha:1,dim:3,height:20,width:90,autoHeight:false,autoWidth:false,lineWidth:1,transform:true,align:"center",angularWidth:1,span:1,CanvasStyles:{}};
E.Edge={$extend:false,overridable:false,type:"line",color:"#ccb",lineWidth:1,dim:15,alpha:1,epsilon:7,CanvasStyles:{}};
E.Fx={$extend:true,fps:40,duration:2500,transition:$jit.Trans.Quart.easeInOut,clearCanvas:true};
E.Label={$extend:false,overridable:false,type:"HTML",style:" ",size:10,family:"sans-serif",textAlign:"center",textBaseline:"alphabetic",color:"#fff"};
E.Tips={$extend:false,enable:false,type:"auto",offsetX:20,offsetY:20,force:false,onShow:P.empty,onHide:P.empty};
E.NodeStyles={$extend:false,enable:false,type:"auto",stylesHover:false,stylesClick:false};
E.Events={$extend:false,enable:false,enableForEdges:false,type:"auto",onClick:P.empty,onRightClick:P.empty,onMouseMove:P.empty,onMouseEnter:P.empty,onMouseLeave:P.empty,onDragStart:P.empty,onDragMove:P.empty,onDragCancel:P.empty,onDragEnd:P.empty,onTouchStart:P.empty,onTouchMove:P.empty,onTouchEnd:P.empty,onMouseWheel:P.empty};
E.Navigation={$extend:false,enable:false,type:"auto",panning:false,zooming:false};
E.Controller={$extend:true,onBeforeCompute:P.empty,onAfterCompute:P.empty,onCreateLabel:P.empty,onPlaceLabel:P.empty,onComplete:P.empty,onBeforePlotLine:P.empty,onAfterPlotLine:P.empty,onBeforePlotNode:P.empty,onAfterPlotNode:P.empty,request:false};
var y={initialize:function(c,b){this.viz=b;
this.canvas=b.canvas;
this.config=b.config[c];
this.nodeTypes=b.fx.nodeTypes;
var a=this.config.type;
this.dom=a=="auto"?(b.config.Label.type!="Native"):(a!="Native");
this.labelContainer=this.dom&&b.labels.getLabelContainer();
this.isEnabled()&&this.initializePost()
},initializePost:P.empty,setAsProperty:P.lambda(false),isEnabled:function(){return this.config.enable
},isLabel:function(f,b,d){f=P.event.get(f,b);
var c=this.labelContainer,e=f.target||f.srcElement,a=f.relatedTarget;
if(d){return a&&a==this.viz.canvas.getCtx().canvas&&!!e&&this.isDescendantOf(e,c)
}else{return this.isDescendantOf(e,c)
}},isDescendantOf:function(a,b){while(a&&a.parentNode){if(a.parentNode==b){return a
}a=a.parentNode
}return false
}};
var K={onMouseUp:P.empty,onMouseDown:P.empty,onMouseMove:P.empty,onMouseOver:P.empty,onMouseOut:P.empty,onMouseWheel:P.empty,onTouchStart:P.empty,onTouchMove:P.empty,onTouchEnd:P.empty,onTouchCancel:P.empty};
var z=new B({initialize:function(a){this.viz=a;
this.canvas=a.canvas;
this.node=false;
this.edge=false;
this.registeredObjects=[];
this.attachEvents()
},attachEvents:function(){var c=this.canvas.getElement(),a=this;
c.oncontextmenu=P.lambda(false);
P.addEvents(c,{mouseup:function(f,d){var e=P.event.get(f,d);
a.handleEvent("MouseUp",f,d,a.makeEventObject(f,d),P.event.isRightClick(e))
},mousedown:function(f,d){var e=P.event.get(f,d);
a.handleEvent("MouseDown",f,d,a.makeEventObject(f,d),P.event.isRightClick(e))
},mousemove:function(d,e){a.handleEvent("MouseMove",d,e,a.makeEventObject(d,e))
},mouseover:function(d,e){a.handleEvent("MouseOver",d,e,a.makeEventObject(d,e))
},mouseout:function(d,e){a.handleEvent("MouseOut",d,e,a.makeEventObject(d,e))
},touchstart:function(d,e){a.handleEvent("TouchStart",d,e,a.makeEventObject(d,e))
},touchmove:function(d,e){a.handleEvent("TouchMove",d,e,a.makeEventObject(d,e))
},touchend:function(d,e){a.handleEvent("TouchEnd",d,e,a.makeEventObject(d,e))
}});
var b=function(f,g){var d=P.event.get(f,g);
var e=P.event.getWheel(d);
a.handleEvent("MouseWheel",f,g,e)
};
if(!document.getBoxObjectFor&&window.mozInnerScreenX==null){P.addEvent(c,"mousewheel",b)
}else{c.addEventListener("DOMMouseScroll",b,false)
}},register:function(a){this.registeredObjects.push(a)
},handleEvent:function(){var b=Array.prototype.slice.call(arguments),a=b.shift();
for(var d=0,e=this.registeredObjects,c=e.length;
d<c;
d++){e[d]["on"+a].apply(e[d],b)
}},makeEventObject:function(e,g){var d=this,b=this.viz.graph,f=this.viz.fx,a=f.nodeTypes,c=f.edgeTypes;
return{pos:false,node:false,edge:false,contains:false,getNodeCalled:false,getEdgeCalled:false,getPos:function(){var m=d.viz.canvas,l=m.getSize(),k=m.getPos(),n=m.translateOffsetX,o=m.translateOffsetY,h=m.scaleOffsetX,j=m.scaleOffsetY,i=P.event.getPos(e,g);
this.pos={x:(i.x-k.x-l.width/2-n)*1/h,y:(i.y-k.y-l.height/2-o)*1/j};
return this.pos
},getNode:function(){if(this.getNodeCalled){return this.node
}this.getNodeCalled=true;
for(var h in b.nodes){var i=b.nodes[h],j=i&&a[i.getData("type")],k=j&&j.contains&&j.contains.call(f,i,this.getPos());
if(k){this.contains=k;
return d.node=this.node=i
}}return d.node=this.node=false
},getEdge:function(){if(this.getEdgeCalled){return this.edge
}this.getEdgeCalled=true;
var l={};
for(var h in b.edges){var j=b.edges[h];
l[h]=true;
for(var i in j){if(i in l){continue
}var k=j[i],m=k&&c[k.getData("type")],n=m&&m.contains&&m.contains.call(f,k,this.getPos());
if(n){this.contains=n;
return d.edge=this.edge=k
}}}return d.edge=this.edge=false
},getContains:function(){if(this.getNodeCalled){return this.contains
}this.getNode();
return this.contains
}}
}});
var D={initializeExtras:function(){var a=new z(this),b=this;
P.each(["NodeStyles","Tips","Navigation","Events"],function(d){var c=new D.Classes[d](d,b);
if(c.isEnabled()){a.register(c)
}if(c.setAsProperty()){b[d.toLowerCase()]=c
}})
}};
D.Classes={};
D.Classes.Events=new B({Implements:[y,K],initializePost:function(){this.fx=this.viz.fx;
this.ntypes=this.viz.fx.nodeTypes;
this.etypes=this.viz.fx.edgeTypes;
this.hovered=false;
this.pressed=false;
this.touched=false;
this.touchMoved=false;
this.moved=false
},setAsProperty:P.lambda(true),onMouseUp:function(b,d,a,e){var c=P.event.get(b,d);
if(!this.moved){if(e){this.config.onRightClick(this.hovered,a,c)
}else{this.config.onClick(this.pressed,a,c)
}}if(this.pressed){if(this.moved){this.config.onDragEnd(this.pressed,a,c)
}else{this.config.onDragCancel(this.pressed,a,c)
}this.pressed=this.moved=false
}},onMouseOut:function(g,b,e){var a=P.event.get(g,b),f;
if(this.dom&&(f=this.isLabel(g,b,true))){this.config.onMouseLeave(this.viz.graph.getNode(f.id),e,a);
this.hovered=false;
return
}var c=a.relatedTarget,d=this.canvas.getElement();
while(c&&c.parentNode){if(d==c.parentNode){return
}c=c.parentNode
}if(this.hovered){this.config.onMouseLeave(this.hovered,e,a);
this.hovered=false
}},onMouseOver:function(b,d,e){var c=P.event.get(b,d),a;
if(this.dom&&(a=this.isLabel(b,d,true))){this.hovered=this.viz.graph.getNode(a.id);
this.config.onMouseEnter(this.hovered,e,c)
}},onMouseMove:function(f,h,b){var a,c=P.event.get(f,h);
if(this.pressed){this.moved=true;
this.config.onDragMove(this.pressed,b,c);
return
}if(this.dom){this.config.onMouseMove(this.hovered,b,c)
}else{if(this.hovered){var d=this.hovered;
var e=d.nodeFrom?this.etypes[d.getData("type")]:this.ntypes[d.getData("type")];
var g=e&&e.contains&&e.contains.call(this.fx,d,b.getPos());
if(g){this.config.onMouseMove(d,b,c);
return
}else{this.config.onMouseLeave(d,b,c);
this.hovered=false
}}if(this.hovered=(b.getNode()||(this.config.enableForEdges&&b.getEdge()))){this.config.onMouseEnter(this.hovered,b,c)
}else{this.config.onMouseMove(false,b,c)
}}},onMouseWheel:function(a,b,c){this.config.onMouseWheel(c,P.event.get(a,b))
},onMouseDown:function(b,d,e){var c=P.event.get(b,d),a;
if(this.dom){if(a=this.isLabel(b,d)){this.pressed=this.viz.graph.getNode(a.id)
}}else{this.pressed=e.getNode()||(this.config.enableForEdges&&e.getEdge())
}this.pressed&&this.config.onDragStart(this.pressed,e,c)
},onTouchStart:function(b,d,e){var c=P.event.get(b,d),a;
if(this.dom&&(a=this.isLabel(b,d))){this.touched=this.viz.graph.getNode(a.id)
}else{this.touched=e.getNode()||(this.config.enableForEdges&&e.getEdge())
}this.touched&&this.config.onTouchStart(this.touched,e,c)
},onTouchMove:function(c,d,a){var b=P.event.get(c,d);
if(this.touched){this.touchMoved=true;
this.config.onTouchMove(this.touched,a,b)
}},onTouchEnd:function(c,d,a){var b=P.event.get(c,d);
if(this.touched){if(this.touchMoved){this.config.onTouchEnd(this.touched,a,b)
}else{this.config.onTouchCancel(this.touched,a,b)
}this.touched=this.touchMoved=false
}}});
D.Classes.Tips=new B({Implements:[y,K],initializePost:function(){if(document.body){var a=P("_tooltip")||document.createElement("div");
a.id="_tooltip";
a.className="tip";
P.extend(a.style,{position:"absolute",display:"none",zIndex:13000});
document.body.appendChild(a);
this.tip=a;
this.node=false
}},setAsProperty:P.lambda(true),onMouseOut:function(d,e){var b=P.event.get(d,e);
if(this.dom&&this.isLabel(d,e,true)){this.hide(true);
return
}var c=d.relatedTarget,a=this.canvas.getElement();
while(c&&c.parentNode){if(a==c.parentNode){return
}c=c.parentNode
}this.hide(false)
},onMouseOver:function(c,a){var b;
if(this.dom&&(b=this.isLabel(c,a,false))){this.node=this.viz.graph.getNode(b.id);
this.config.onShow(this.tip,this.node,b)
}},onMouseMove:function(c,d,b){if(this.dom&&this.isLabel(c,d)){this.setTooltipPosition(P.event.getPos(c,d))
}if(!this.dom){var a=b.getNode();
if(!a){this.hide(true);
return
}if(this.config.force||!this.node||this.node.id!=a.id){this.node=a;
this.config.onShow(this.tip,a,b.getContains())
}this.setTooltipPosition(P.event.getPos(c,d))
}},setTooltipPosition:function(c){var h=this.tip,a=h.style,g=this.config;
a.display="";
var e={height:document.body.clientHeight,width:document.body.clientWidth};
var f={width:h.offsetWidth,height:h.offsetHeight};
var b=g.offsetX,d=g.offsetY;
a.top=((c.y+d+f.height>e.height)?(c.y-f.height-d):c.y+d)+"px";
a.left=((c.x+f.width+b>e.width)?(c.x-f.width-b):c.x+b)+"px"
},hide:function(a){this.tip.style.display="none";
a&&this.config.onHide()
}});
D.Classes.NodeStyles=new B({Implements:[y,K],initializePost:function(){this.fx=this.viz.fx;
this.types=this.viz.fx.nodeTypes;
this.nStyles=this.config;
this.nodeStylesOnHover=this.nStyles.stylesHover;
this.nodeStylesOnClick=this.nStyles.stylesClick;
this.hoveredNode=false;
this.fx.nodeFxAnimation=new x();
this.down=false;
this.move=false
},onMouseOut:function(d,a){this.down=this.move=false;
if(!this.hoveredNode){return
}if(this.dom&&this.isLabel(d,a,true)){this.toggleStylesOnHover(this.hoveredNode,false)
}var b=d.relatedTarget,c=this.canvas.getElement();
while(b&&b.parentNode){if(c==b.parentNode){return
}b=b.parentNode
}this.toggleStylesOnHover(this.hoveredNode,false);
this.hoveredNode=false
},onMouseOver:function(c,d){var b;
if(this.dom&&(b=this.isLabel(c,d,true))){var a=this.viz.graph.getNode(b.id);
if(a.selected){return
}this.hoveredNode=a;
this.toggleStylesOnHover(this.hoveredNode,true)
}},onMouseDown:function(b,d,a,e){if(e){return
}var c;
if(this.dom&&(c=this.isLabel(b,d))){this.down=this.viz.graph.getNode(c.id)
}else{if(!this.dom){this.down=a.getNode()
}}this.move=false
},onMouseUp:function(c,d,b,a){if(a){return
}if(!this.move){this.onClick(b.getNode())
}this.down=this.move=false
},getRestoredStyles:function(b,c){var d={},e=this["nodeStylesOn"+c];
for(var a in e){d[a]=b.styles["$"+a]
}return d
},toggleStylesOnHover:function(b,a){if(this.nodeStylesOnHover){this.toggleStylesOn("Hover",b,a)
}},toggleStylesOnClick:function(b,a){if(this.nodeStylesOnClick){this.toggleStylesOn("Click",b,a)
}},toggleStylesOn:function(d,h,b){var a=this.viz;
var c=this.nStyles;
if(b){var e=this;
if(!h.styles){h.styles=P.merge(h.data,{})
}for(var i in this["nodeStylesOn"+d]){var g="$"+i;
if(!(g in h.styles)){h.styles[g]=h.getData(i)
}}a.fx.nodeFx(P.extend({elements:{id:h.id,properties:e["nodeStylesOn"+d]},transition:J.Quart.easeOut,duration:300,fps:40},this.config))
}else{var f=this.getRestoredStyles(h,d);
a.fx.nodeFx(P.extend({elements:{id:h.id,properties:f},transition:J.Quart.easeOut,duration:300,fps:40},this.config))
}},onClick:function(b){if(!b){return
}var a=this.nodeStylesOnClick;
if(!a){return
}if(b.selected){this.toggleStylesOnClick(b,false);
delete b.selected
}else{this.viz.graph.eachNode(function(c){if(c.selected){for(var d in a){c.setData(d,c.styles["$"+d],"end")
}delete c.selected
}});
this.toggleStylesOnClick(b,true);
b.selected=true;
delete b.hovered;
this.hoveredNode=false
}},onMouseMove:function(e,g,d){if(this.down){this.move=true
}if(this.dom&&this.isLabel(e,g)){return
}var b=this.nodeStylesOnHover;
if(!b){return
}if(!this.dom){if(this.hoveredNode){var a=this.types[this.hoveredNode.getData("type")];
var c=a&&a.contains&&a.contains.call(this.fx,this.hoveredNode,d.getPos());
if(c){return
}}var f=d.getNode();
if(!this.hoveredNode&&!f){return
}if(f.hovered){return
}if(f&&!f.selected){this.fx.nodeFxAnimation.stopTimer();
this.viz.graph.eachNode(function(h){if(h.hovered&&!h.selected){for(var i in b){h.setData(i,h.styles["$"+i],"end")
}delete h.hovered
}});
f.hovered=true;
this.hoveredNode=f;
this.toggleStylesOnHover(f,true)
}else{if(this.hoveredNode&&!this.hoveredNode.selected){this.fx.nodeFxAnimation.stopTimer();
this.toggleStylesOnHover(this.hoveredNode,false);
delete this.hoveredNode.hovered;
this.hoveredNode=false
}}}}});
D.Classes.Navigation=new B({Implements:[y,K],initializePost:function(){this.pos=false;
this.pressed=false
},onMouseWheel:function(d,e,c){if(!this.config.zooming){return
}P.event.stop(P.event.get(d,e));
var b=this.config.zooming/1000,a=1+c*b;
this.canvas.scale(a,a)
},onMouseDown:function(h,b,f){if(!this.config.panning){return
}if(this.config.panning=="avoid nodes"&&(this.dom?this.isLabel(h,b):f.getNode())){return
}this.pressed=true;
this.pos=f.getPos();
var g=this.canvas,a=g.translateOffsetX,c=g.translateOffsetY,d=g.scaleOffsetX,e=g.scaleOffsetY;
this.pos.x*=d;
this.pos.x+=a;
this.pos.y*=e;
this.pos.y+=c
},onMouseMove:function(a,b,k){if(!this.config.panning){return
}if(!this.pressed){return
}if(this.config.panning=="avoid nodes"&&(this.dom?this.isLabel(a,b):k.getNode())){return
}var c=this.pos,l=k.getPos(),e=this.canvas,d=e.translateOffsetX,h=e.translateOffsetY,f=e.scaleOffsetX,i=e.scaleOffsetY;
l.x*=f;
l.y*=i;
l.x+=d;
l.y+=h;
var g=l.x-c.x,j=l.y-c.y;
this.pos=l;
this.canvas.translate(g*1/f,j*1/i)
},onMouseUp:function(c,d,a,b){if(!this.config.panning){return
}this.pressed=false
}});
var G;
(function(){var b=typeof HTMLCanvasElement,c=(b=="object"||b=="function");
function a(f,d){var g=document.createElement(f);
for(var e in d){if(typeof d[e]=="object"){P.extend(g[e],d[e])
}else{g[e]=d[e]
}}if(f=="canvas"&&!c&&G_vmlCanvasManager){g=G_vmlCanvasManager.initElement(document.body.appendChild(g))
}return g
}$jit.Canvas=G=new B({canvases:[],pos:false,element:false,labelContainer:false,translateOffsetX:0,translateOffsetY:0,scaleOffsetX:1,scaleOffsetY:1,initialize:function(j,q){this.viz=j;
this.opt=this.config=q;
var f=P.type(q.injectInto)=="string"?q.injectInto:q.injectInto.id,k=q.type,e=f+"-label",i=P(f),d=q.width||i.offsetWidth,h=q.height||i.offsetHeight;
this.id=f;
var p={injectInto:f,width:d,height:h};
this.element=a("div",{id:f+"-canvaswidget",style:{position:"relative",width:d+"px",height:h+"px"}});
this.labelContainer=this.createLabelContainer(q.Label.type,e,p);
this.canvases.push(new G.Base[k]({config:P.extend({idSuffix:"-canvas"},p),plot:function(r){j.fx.plot()
},resize:function(){j.refresh()
}}));
var o=q.background;
if(o){var l=new G.Background[o.type](j,P.extend(o,p));
this.canvases.push(new G.Base[k](l))
}var m=this.canvases.length;
while(m--){this.element.appendChild(this.canvases[m].canvas);
if(m>0){this.canvases[m].plot()
}}this.element.appendChild(this.labelContainer);
i.appendChild(this.element);
var g=null,n=this;
P.addEvent(window,"scroll",function(){clearTimeout(g);
g=setTimeout(function(){n.getPos(true)
},500)
})
},getCtx:function(d){return this.canvases[d||0].getCtx()
},getConfig:function(){return this.opt
},getElement:function(){return this.element
},getSize:function(d){return this.canvases[d||0].getSize()
},resize:function(e,g){this.getPos(true);
this.translateOffsetX=this.translateOffsetY=0;
this.scaleOffsetX=this.scaleOffsetY=1;
for(var h=0,d=this.canvases.length;
h<d;
h++){this.canvases[h].resize(e,g)
}var f=this.element.style;
f.width=e+"px";
f.height=g+"px";
if(this.labelContainer){this.labelContainer.style.width=e+"px"
}},translate:function(g,e,f){this.translateOffsetX+=g*this.scaleOffsetX;
this.translateOffsetY+=e*this.scaleOffsetY;
for(var h=0,d=this.canvases.length;
h<d;
h++){this.canvases[h].translate(g,e,f)
}},scale:function(l,f,e){var k=this.scaleOffsetX*l,d=this.scaleOffsetY*f;
var i=this.translateOffsetX*(l-1)/k,j=this.translateOffsetY*(f-1)/d;
this.scaleOffsetX=k;
this.scaleOffsetY=d;
for(var g=0,h=this.canvases.length;
g<h;
g++){this.canvases[g].scale(l,f,true)
}this.translate(i,j,false)
},getPos:function(d){if(d||!this.pos){return this.pos=P.getPos(this.getElement())
}return this.pos
},clear:function(d){this.canvases[d||0].clear()
},path:function(d,f){var e=this.canvases[0].getCtx();
e.beginPath();
f(e);
e[d]();
e.closePath()
},createLabelContainer:function(j,e,f){var g="http://www.w3.org/2000/svg";
if(j=="HTML"||j=="Native"){return a("div",{id:e,style:{overflow:"visible",position:"absolute",top:0,left:0,width:f.width+"px",height:0}})
}else{if(j=="SVG"){var i=document.createElementNS(g,"svg:svg");
i.setAttribute("width",f.width);
i.setAttribute("height",f.height);
var d=i.style;
d.position="absolute";
d.left=d.top="0px";
var h=document.createElementNS(g,"svg:g");
h.setAttribute("width",f.width);
h.setAttribute("height",f.height);
h.setAttribute("x",0);
h.setAttribute("y",0);
h.setAttribute("id",e);
i.appendChild(h);
return i
}}}});
G.Base={};
G.Base["2D"]=new B({translateOffsetX:0,translateOffsetY:0,scaleOffsetX:1,scaleOffsetY:1,initialize:function(d){this.viz=d;
this.opt=d.config;
this.size=false;
this.createCanvas();
this.translateToCenter()
},createCanvas:function(){var d=this.opt,f=d.width,e=d.height;
this.canvas=a("canvas",{id:d.injectInto+d.idSuffix,width:f,height:e,style:{position:"absolute",top:0,left:0,width:f+"px",height:e+"px"}})
},getCtx:function(){if(!this.ctx){return this.ctx=this.canvas.getContext("2d")
}return this.ctx
},getSize:function(){if(this.size){return this.size
}var d=this.canvas;
return this.size={width:d.width,height:d.height}
},translateToCenter:function(f){var d=this.getSize(),g=f?(d.width-f.width-this.translateOffsetX*2):d.width;
height=f?(d.height-f.height-this.translateOffsetY*2):d.height;
var e=this.getCtx();
f&&e.scale(1/this.scaleOffsetX,1/this.scaleOffsetY);
e.translate(g/2,height/2)
},resize:function(g,f){var h=this.getSize(),d=this.canvas,e=d.style;
this.size=false;
d.width=g;
d.height=f;
e.width=g+"px";
e.height=f+"px";
if(!c){this.translateToCenter(h)
}else{this.translateToCenter()
}this.translateOffsetX=this.translateOffsetY=0;
this.scaleOffsetX=this.scaleOffsetY=1;
this.clear();
this.viz.resize(g,f,this)
},translate:function(g,e,d){var f=this.scaleOffsetX,h=this.scaleOffsetY;
this.translateOffsetX+=g*f;
this.translateOffsetY+=e*h;
this.getCtx().translate(g,e);
!d&&this.plot()
},scale:function(e,f,d){this.scaleOffsetX*=e;
this.scaleOffsetY*=f;
this.getCtx().scale(e,f);
!d&&this.plot()
},clear:function(){var h=this.getSize(),d=this.translateOffsetX,g=this.translateOffsetY,e=this.scaleOffsetX,f=this.scaleOffsetY;
this.getCtx().clearRect((-h.width/2-d)*1/e,(-h.height/2-g)*1/f,h.width*1/e,h.height*1/f)
},plot:function(){this.clear();
this.viz.plot(this)
}});
G.Background={};
G.Background.Circles=new B({initialize:function(e,d){this.viz=e;
this.config=P.merge({idSuffix:"-bkcanvas",levelDistance:100,numberOfCircles:6,CanvasStyles:{},offset:0},d)
},resize:function(d,e,f){this.plot(f)
},plot:function(h){var g=h.canvas,j=h.getCtx(),d=this.config,k=d.CanvasStyles;
for(var i in k){j[i]=k[i]
}var f=d.numberOfCircles,l=d.levelDistance;
for(var e=1;
e<=f;
e++){j.beginPath();
j.arc(0,0,l*e,0,2*Math.PI,false);
j.stroke();
j.closePath()
}}})
})();
var Q=function(a,b){this.theta=a||0;
this.rho=b||0
};
$jit.Polar=Q;
Q.prototype={getc:function(a){return this.toComplex(a)
},getp:function(){return this
},set:function(a){a=a.getp();
this.theta=a.theta;
this.rho=a.rho
},setc:function(a,b){this.rho=Math.sqrt(a*a+b*b);
this.theta=Math.atan2(b,a);
if(this.theta<0){this.theta+=Math.PI*2
}},setp:function(a,b){this.theta=a;
this.rho=b
},clone:function(){return new Q(this.theta,this.rho)
},toComplex:function(a){var b=Math.cos(this.theta)*this.rho;
var c=Math.sin(this.theta)*this.rho;
if(a){return{x:b,y:c}
}return new C(b,c)
},add:function(a){return new Q(this.theta+a.theta,this.rho+a.rho)
},scale:function(a){return new Q(this.theta,this.rho*a)
},equals:function(a){return this.theta==a.theta&&this.rho==a.rho
},$add:function(a){this.theta=this.theta+a.theta;
this.rho+=a.rho;
return this
},$madd:function(a){this.theta=(this.theta+a.theta)%(Math.PI*2);
this.rho+=a.rho;
return this
},$scale:function(a){this.rho*=a;
return this
},isZero:function(){var a=0.0001,b=Math.abs;
return b(this.theta)<a&&b(this.rho)<a
},interpolate:function(f,i){var e=Math.PI,b=e*2;
var g=function(k){var l=(k<0)?(k%b)+b:k%b;
return l
};
var c=this.theta,j=f.theta;
var d,a=Math.abs(c-j);
if(a==e){if(c>j){d=g((j+((c-b)-j)*i))
}else{d=g((j-b+(c-(j))*i))
}}else{if(a>=e){if(c>j){d=g((j+((c-b)-j)*i))
}else{d=g((j-b+(c-(j-b))*i))
}}else{d=g((j+(c-j)*i))
}}var h=(this.rho-f.rho)*i+f.rho;
return{theta:d,rho:h}
}};
var H=function(a,b){return new Q(a,b)
};
Q.KER=H(0,0);
var C=function(a,b){this.x=a||0;
this.y=b||0
};
$jit.Complex=C;
C.prototype={getc:function(){return this
},getp:function(a){return this.toPolar(a)
},set:function(a){a=a.getc(true);
this.x=a.x;
this.y=a.y
},setc:function(a,b){this.x=a;
this.y=b
},setp:function(a,b){this.x=Math.cos(a)*b;
this.y=Math.sin(a)*b
},clone:function(){return new C(this.x,this.y)
},toPolar:function(c){var b=this.norm();
var a=Math.atan2(this.y,this.x);
if(a<0){a+=Math.PI*2
}if(c){return{theta:a,rho:b}
}return new Q(a,b)
},norm:function(){return Math.sqrt(this.squaredNorm())
},squaredNorm:function(){return this.x*this.x+this.y*this.y
},add:function(a){return new C(this.x+a.x,this.y+a.y)
},prod:function(a){return new C(this.x*a.x-this.y*a.y,this.y*a.x+this.x*a.y)
},conjugate:function(){return new C(this.x,-this.y)
},scale:function(a){return new C(this.x*a,this.y*a)
},equals:function(a){return this.x==a.x&&this.y==a.y
},$add:function(a){this.x+=a.x;
this.y+=a.y;
return this
},$prod:function(a){var b=this.x,c=this.y;
this.x=b*a.x-c*a.y;
this.y=c*a.x+b*a.y;
return this
},$conjugate:function(){this.y=-this.y;
return this
},$scale:function(a){this.x*=a;
this.y*=a;
return this
},$div:function(d){var b=this.x,a=this.y;
var c=d.squaredNorm();
this.x=b*d.x+a*d.y;
this.y=a*d.x-b*d.y;
return this.$scale(1/c)
},isZero:function(){var a=0.0001,b=Math.abs;
return b(this.x)<a&&b(this.y)<a
}};
var A=function(a,b){return new C(a,b)
};
C.KER=A(0,0);
$jit.Graph=new B({initialize:function(g,b,c,e){var a={klass:C,Node:{}};
this.Node=b;
this.Edge=c;
this.Label=e;
this.opt=P.merge(a,g||{});
this.nodes={};
this.edges={};
var d=this;
this.nodeList={};
for(var f in I){d.nodeList[f]=(function(h){return function(){var i=Array.prototype.slice.call(arguments);
d.eachNode(function(j){j[h].apply(j,i)
})
}
})(f)
}},getNode:function(a){if(this.hasNode(a)){return this.nodes[a]
}return false
},get:function(a){return this.getNode(a)
},getByName:function(b){for(var c in this.nodes){var a=this.nodes[c];
if(a.name==b){return a
}}return false
},getAdjacence:function(a,b){if(a in this.edges){return this.edges[a][b]
}return false
},addNode:function(a){if(!this.nodes[a.id]){var b=this.edges[a.id]={};
this.nodes[a.id]=new N.Node(P.extend({id:a.id,name:a.name,data:P.merge(a.data||{},{}),adjacencies:b},this.opt.Node),this.opt.klass,this.Node,this.Edge,this.Label)
}return this.nodes[a.id]
},addAdjacence:function(d,e,b){if(!this.hasNode(d.id)){this.addNode(d)
}if(!this.hasNode(e.id)){this.addNode(e)
}d=this.nodes[d.id];
e=this.nodes[e.id];
if(!d.adjacentTo(e)){var a=this.edges[d.id]=this.edges[d.id]||{};
var c=this.edges[e.id]=this.edges[e.id]||{};
a[e.id]=c[d.id]=new N.Adjacence(d,e,b,this.Edge,this.Label);
return a[e.id]
}return this.edges[d.id][e.id]
},removeNode:function(c){if(this.hasNode(c)){delete this.nodes[c];
var a=this.edges[c];
for(var b in a){delete this.edges[b][c]
}delete this.edges[c]
}},removeAdjacence:function(a,b){delete this.edges[a][b];
delete this.edges[b][a]
},hasNode:function(a){return a in this.nodes
},empty:function(){this.nodes={};
this.edges={}
}});
var N=$jit.Graph;
var I;
(function(){var b=function(g,e,d,i,f){var j;
d=d||"current";
g="$"+(g?g+"-":"");
if(d=="current"){j=this.data
}else{if(d=="start"){j=this.startData
}else{if(d=="end"){j=this.endData
}}}var h=g+e;
if(i){return j[h]
}if(!this.Config.overridable){return f[e]||0
}return(h in j)?j[h]:((h in this.data)?this.data[h]:(f[e]||0))
};
var c=function(g,e,h,f){f=f||"current";
g="$"+(g?g+"-":"");
var d;
if(f=="current"){d=this.data
}else{if(f=="start"){d=this.startData
}else{if(f=="end"){d=this.endData
}}}d[g+e]=h
};
var a=function(f,e){f="$"+(f?f+"-":"");
var d=this;
P.each(e,function(g){var h=f+g;
delete d.data[h];
delete d.endData[h];
delete d.startData[h]
})
};
I={getData:function(f,e,d){return b.call(this,"",f,e,d,this.Config)
},setData:function(f,d,e){c.call(this,"",f,d,e)
},setDataset:function(h,f){h=P.splat(h);
for(var g in f){for(var i=0,e=P.splat(f[g]),d=h.length;
i<d;
i++){this.setData(g,e[i],h[i])
}}},removeData:function(){a.call(this,"",Array.prototype.slice.call(arguments))
},getCanvasStyle:function(f,e,d){return b.call(this,"canvas",f,e,d,this.Config.CanvasStyles)
},setCanvasStyle:function(f,d,e){c.call(this,"canvas",f,d,e)
},setCanvasStyles:function(h,f){h=P.splat(h);
for(var g in f){for(var i=0,e=P.splat(f[g]),d=h.length;
i<d;
i++){this.setCanvasStyle(g,e[i],h[i])
}}},removeCanvasStyle:function(){a.call(this,"canvas",Array.prototype.slice.call(arguments))
},getLabelData:function(f,e,d){return b.call(this,"label",f,e,d,this.Label)
},setLabelData:function(f,d,e){c.call(this,"label",f,d,e)
},setLabelDataset:function(h,f){h=P.splat(h);
for(var g in f){for(var i=0,e=P.splat(f[g]),d=h.length;
i<d;
i++){this.setLabelData(g,e[i],h[i])
}}},removeLabelData:function(){a.call(this,"label",Array.prototype.slice.call(arguments))
}}
})();
N.Node=new B({initialize:function(d,c,f,b,e){var a={id:"",name:"",data:{},startData:{},endData:{},adjacencies:{},selected:false,drawn:false,exist:false,angleSpan:{begin:0,end:0},pos:new c,startPos:new c,endPos:new c};
P.extend(this,P.extend(a,d));
this.Config=this.Node=f;
this.Edge=b;
this.Label=e
},adjacentTo:function(a){return a.id in this.adjacencies
},getAdjacency:function(a){return this.adjacencies[a]
},getPos:function(a){a=a||"current";
if(a=="current"){return this.pos
}else{if(a=="end"){return this.endPos
}else{if(a=="start"){return this.startPos
}}}},setPos:function(a,b){b=b||"current";
var c;
if(b=="current"){c=this.pos
}else{if(b=="end"){c=this.endPos
}else{if(b=="start"){c=this.startPos
}}}c.set(a)
}});
N.Node.implement(I);
N.Adjacence=new B({initialize:function(b,a,e,c,d){this.nodeFrom=b;
this.nodeTo=a;
this.data=e||{};
this.startData={};
this.endData={};
this.Config=this.Edge=c;
this.Label=d
}});
N.Adjacence.implement(I);
N.Util={filter:function(a){if(!a||!(P.type(a)=="string")){return function(){return true
}
}var b=a.split(" ");
return function(c){for(var d=0;
d<b.length;
d++){if(c[b[d]]){return false
}}return true
}
},getNode:function(b,a){return b.nodes[a]
},eachNode:function(b,d,c){var e=this.filter(c);
for(var a in b.nodes){if(e(b.nodes[a])){d(b.nodes[a])
}}},each:function(c,a,b){this.eachNode(c,a,b)
},eachAdjacency:function(h,f,b){var g=h.adjacencies,a=this.filter(b);
for(var d in g){var c=g[d];
if(a(c)){if(c.nodeFrom!=h){var e=c.nodeFrom;
c.nodeFrom=c.nodeTo;
c.nodeTo=e
}f(c,d)
}}},computeLevels:function(f,d,e,h){e=e||0;
var b=this.filter(h);
this.eachNode(f,function(i){i._flag=false;
i._depth=-1
},h);
var a=f.getNode(d);
a._depth=e;
var c=[a];
while(c.length!=0){var g=c.pop();
g._flag=true;
this.eachAdjacency(g,function(j){var i=j.nodeTo;
if(i._flag==false&&b(i)){if(i._depth<0){i._depth=g._depth+1+e
}c.unshift(i)
}},h)
}},eachBFS:function(g,e,b,a){var f=this.filter(a);
this.clean(g);
var c=[g.getNode(e)];
while(c.length!=0){var d=c.pop();
d._flag=true;
b(d,d._depth);
this.eachAdjacency(d,function(i){var h=i.nodeTo;
if(h._flag==false&&f(h)){h._flag=true;
c.unshift(h)
}},a)
}},eachLevel:function(d,i,g,c,e){var a=d._depth,h=this.filter(e),b=this;
g=g===false?Number.MAX_VALUE-a:g;
(function f(k,m,l){var j=k._depth;
if(j>=m&&j<=l&&h(k)){c(k,j)
}if(j<l){b.eachAdjacency(k,function(o){var n=o.nodeTo;
if(n._depth>j){f(n,m,l)
}})
}})(d,i+a,g+a)
},eachSubgraph:function(a,c,b){this.eachLevel(a,0,false,c,b)
},eachSubnode:function(a,c,b){this.eachLevel(a,1,1,c,b)
},anySubnode:function(d,e,b){var c=false;
e=e||P.lambda(true);
var a=P.type(e)=="string"?function(f){return f[e]
}:e;
this.eachSubnode(d,function(f){if(a(f)){c=true
}},b);
return c
},getSubnodes:function(g,e,c){var f=[],b=this;
e=e||0;
var d,a;
if(P.type(e)=="array"){d=e[0];
a=e[1]
}else{d=e;
a=Number.MAX_VALUE-g._depth
}this.eachLevel(g,d,a,function(h){f.push(h)
},c);
return f
},getParents:function(a){var b=[];
this.eachAdjacency(a,function(d){var c=d.nodeTo;
if(c._depth<a._depth){b.push(c)
}});
return b
},isDescendantOf:function(d,b){if(d.id==b){return true
}var e=this.getParents(d),c=false;
for(var a=0;
!c&&a<e.length;
a++){c=c||this.isDescendantOf(e[a],b)
}return c
},clean:function(a){this.eachNode(a,function(b){b._flag=false
})
},getClosestNodeToOrigin:function(a,c,b){return this.getClosestNodeToPos(a,Q.KER,c,b)
},getClosestNodeToPos:function(f,e,b,c){var a=null;
b=b||"current";
e=e&&e.getc(true)||C.KER;
var d=function(i,j){var g=i.x-j.x,h=i.y-j.y;
return g*g+h*h
};
this.eachNode(f,function(g){a=(a==null||d(g.getPos(b).getc(true),e)<d(a.getPos(b).getc(true),e))?g:a
},c);
return a
}};
P.each(["get","getNode","each","eachNode","computeLevels","eachBFS","clean","getClosestNodeToPos","getClosestNodeToOrigin"],function(a){N.prototype[a]=function(){return N.Util[a].apply(N.Util,[this].concat(Array.prototype.slice.call(arguments)))
}
});
P.each(["eachAdjacency","eachLevel","eachSubgraph","eachSubnode","anySubnode","getSubnodes","getParents","isDescendantOf"],function(a){N.Node.prototype[a]=function(){return N.Util[a].apply(N.Util,[this].concat(Array.prototype.slice.call(arguments)))
}
});
N.Op={options:{type:"nothing",duration:2000,hideLabels:true,fps:30},initialize:function(a){this.viz=a
},removeNode:function(h,f){var c=this.viz;
var b=P.merge(this.options,c.controller,f);
var d=P.splat(h);
var g,a,e;
switch(b.type){case"nothing":for(g=0;
g<d.length;
g++){c.graph.removeNode(d[g])
}break;
case"replot":this.removeNode(d,{type:"nothing"});
c.labels.clearLabels();
c.refresh(true);
break;
case"fade:seq":case"fade":a=this;
for(g=0;
g<d.length;
g++){e=c.graph.getNode(d[g]);
e.setData("alpha",0,"end")
}c.fx.animate(P.merge(b,{modes:["node-property:alpha"],onComplete:function(){a.removeNode(d,{type:"nothing"});
c.labels.clearLabels();
c.reposition();
c.fx.animate(P.merge(b,{modes:["linear"]}))
}}));
break;
case"fade:con":a=this;
for(g=0;
g<d.length;
g++){e=c.graph.getNode(d[g]);
e.setData("alpha",0,"end");
e.ignore=true
}c.reposition();
c.fx.animate(P.merge(b,{modes:["node-property:alpha","linear"],onComplete:function(){a.removeNode(d,{type:"nothing"});
b.onComplete&&b.onComplete()
}}));
break;
case"iter":a=this;
c.fx.sequence({condition:function(){return d.length!=0
},step:function(){a.removeNode(d.shift(),{type:"nothing"});
c.labels.clearLabels()
},onComplete:function(){b.onComplete&&b.onComplete()
},duration:Math.ceil(b.duration/d.length)});
break;
default:this.doError()
}},removeEdge:function(d,h){var c=this.viz;
var f=P.merge(this.options,c.controller,h);
var g=(P.type(d[0])=="string")?[d]:d;
var b,e,a;
switch(f.type){case"nothing":for(b=0;
b<g.length;
b++){c.graph.removeAdjacence(g[b][0],g[b][1])
}break;
case"replot":this.removeEdge(g,{type:"nothing"});
c.refresh(true);
break;
case"fade:seq":case"fade":e=this;
for(b=0;
b<g.length;
b++){a=c.graph.getAdjacence(g[b][0],g[b][1]);
if(a){a.setData("alpha",0,"end")
}}c.fx.animate(P.merge(f,{modes:["edge-property:alpha"],onComplete:function(){e.removeEdge(g,{type:"nothing"});
c.reposition();
c.fx.animate(P.merge(f,{modes:["linear"]}))
}}));
break;
case"fade:con":e=this;
for(b=0;
b<g.length;
b++){a=c.graph.getAdjacence(g[b][0],g[b][1]);
if(a){a.setData("alpha",0,"end");
a.ignore=true
}}c.reposition();
c.fx.animate(P.merge(f,{modes:["edge-property:alpha","linear"],onComplete:function(){e.removeEdge(g,{type:"nothing"});
f.onComplete&&f.onComplete()
}}));
break;
case"iter":e=this;
c.fx.sequence({condition:function(){return g.length!=0
},step:function(){e.removeEdge(g.shift(),{type:"nothing"});
c.labels.clearLabels()
},onComplete:function(){f.onComplete()
},duration:Math.ceil(f.duration/g.length)});
break;
default:this.doError()
}},sum:function(b,f){var c=this.viz;
var h=P.merge(this.options,c.controller,f),a=c.root;
var e;
c.root=f.id||c.root;
switch(h.type){case"nothing":e=c.construct(b);
e.eachNode(function(i){i.eachAdjacency(function(j){c.graph.addAdjacence(j.nodeFrom,j.nodeTo,j.data)
})
});
break;
case"replot":c.refresh(true);
this.sum(b,{type:"nothing"});
c.refresh(true);
break;
case"fade:seq":case"fade":case"fade:con":that=this;
e=c.construct(b);
var d=this.preprocessSum(e);
var g=!d?["node-property:alpha"]:["node-property:alpha","edge-property:alpha"];
c.reposition();
if(h.type!="fade:con"){c.fx.animate(P.merge(h,{modes:["linear"],onComplete:function(){c.fx.animate(P.merge(h,{modes:g,onComplete:function(){h.onComplete()
}}))
}}))
}else{c.graph.eachNode(function(i){if(i.id!=a&&i.pos.isZero()){i.pos.set(i.endPos);
i.startPos.set(i.endPos)
}});
c.fx.animate(P.merge(h,{modes:["linear"].concat(g)}))
}break;
default:this.doError()
}},morph:function(j,g,e){e=e||{};
var c=this.viz;
var i=P.merge(this.options,c.controller,g),d=c.root;
var b;
c.root=g.id||c.root;
switch(i.type){case"nothing":b=c.construct(j);
b.eachNode(function(l){var m=c.graph.hasNode(l.id);
l.eachAdjacency(function(r){var o=!!c.graph.getAdjacence(r.nodeFrom.id,r.nodeTo.id);
c.graph.addAdjacence(r.nodeFrom,r.nodeTo,r.data);
if(o){var p=c.graph.getAdjacence(r.nodeFrom.id,r.nodeTo.id);
for(var q in (r.data||{})){p.data[q]=r.data[q]
}}});
if(m){var n=c.graph.getNode(l.id);
for(var k in (l.data||{})){n.data[k]=l.data[k]
}}});
c.graph.eachNode(function(k){k.eachAdjacency(function(l){if(!b.getAdjacence(l.nodeFrom.id,l.nodeTo.id)){c.graph.removeAdjacence(l.nodeFrom.id,l.nodeTo.id)
}});
if(!b.hasNode(k.id)){c.graph.removeNode(k.id)
}});
break;
case"replot":c.labels.clearLabels(true);
this.morph(j,{type:"nothing"});
c.refresh(true);
c.refresh(true);
break;
case"fade:seq":case"fade":case"fade:con":that=this;
b=c.construct(j);
var a=("node-property" in e)&&P.map(P.splat(e["node-property"]),function(k){return"$"+k
});
c.graph.eachNode(function(m){var l=b.getNode(m.id);
if(!l){m.setData("alpha",1);
m.setData("alpha",1,"start");
m.setData("alpha",0,"end");
m.ignore=true
}else{var n=l.data;
for(var k in n){if(a&&(P.indexOf(a,k)>-1)){m.endData[k]=n[k]
}else{m.data[k]=n[k]
}}}});
c.graph.eachNode(function(k){if(k.ignore){return
}k.eachAdjacency(function(n){if(n.nodeFrom.ignore||n.nodeTo.ignore){return
}var m=b.getNode(n.nodeFrom.id);
var l=b.getNode(n.nodeTo.id);
if(!m.adjacentTo(l)){var n=c.graph.getAdjacence(m.id,l.id);
h=true;
n.setData("alpha",1);
n.setData("alpha",1,"start");
n.setData("alpha",0,"end")
}})
});
var h=this.preprocessSum(b);
var f=!h?["node-property:alpha"]:["node-property:alpha","edge-property:alpha"];
f[0]=f[0]+(("node-property" in e)?(":"+P.splat(e["node-property"]).join(":")):"");
f[1]=(f[1]||"edge-property:alpha")+(("edge-property" in e)?(":"+P.splat(e["edge-property"]).join(":")):"");
if("label-property" in e){f.push("label-property:"+P.splat(e["label-property"]).join(":"))
}if(c.reposition){c.reposition()
}else{c.compute("end")
}c.graph.eachNode(function(k){if(k.id!=d&&k.pos.getp().equals(Q.KER)){k.pos.set(k.endPos);
k.startPos.set(k.endPos)
}});
c.fx.animate(P.merge(i,{modes:[e.position||"polar"].concat(f),onComplete:function(){c.graph.eachNode(function(k){if(k.ignore){c.graph.removeNode(k.id)
}});
c.graph.eachNode(function(k){k.eachAdjacency(function(l){if(l.ignore){c.graph.removeAdjacence(l.nodeFrom.id,l.nodeTo.id)
}})
});
i.onComplete()
}}));
break;
default:}},contract:function(d,a){var b=this.viz;
if(d.collapsed||!d.anySubnode(P.lambda(true))){return
}a=P.merge(this.options,b.config,a||{},{modes:["node-property:alpha:span","linear"]});
d.collapsed=true;
(function c(e){e.eachSubnode(function(f){f.ignore=true;
f.setData("alpha",0,a.type=="animate"?"end":"current");
c(f)
})
})(d);
if(a.type=="animate"){b.compute("end");
if(b.rotated){b.rotate(b.rotated,"none",{property:"end"})
}(function c(e){e.eachSubnode(function(f){f.setPos(d.getPos("end"),"end");
c(f)
})
})(d);
b.fx.animate(a)
}else{if(a.type=="replot"){b.refresh()
}}},expand:function(d,a){if(!("collapsed" in d)){return
}var b=this.viz;
a=P.merge(this.options,b.config,a||{},{modes:["node-property:alpha:span","linear"]});
delete d.collapsed;
(function c(e){e.eachSubnode(function(f){delete f.ignore;
f.setData("alpha",1,a.type=="animate"?"end":"current");
c(f)
})
})(d);
if(a.type=="animate"){b.compute("end");
if(b.rotated){b.rotate(b.rotated,"none",{property:"end"})
}b.fx.animate(a)
}else{if(a.type=="replot"){b.refresh()
}}},preprocessSum:function(a){var b=this.viz;
a.eachNode(function(e){if(!b.graph.hasNode(e.id)){b.graph.addNode(e);
var d=b.graph.getNode(e.id);
d.setData("alpha",0);
d.setData("alpha",0,"start");
d.setData("alpha",1,"end")
}});
var c=false;
a.eachNode(function(d){d.eachAdjacency(function(e){var g=b.graph.getNode(e.nodeFrom.id);
var f=b.graph.getNode(e.nodeTo.id);
if(!g.adjacentTo(f)){var e=b.graph.addAdjacence(g,f,e.data);
if(g.startAlpha==g.endAlpha&&f.startAlpha==f.endAlpha){c=true;
e.setData("alpha",0);
e.setData("alpha",0,"start");
e.setData("alpha",1,"end")
}}})
});
return c
}};
var R={none:{render:P.empty,contains:P.lambda(false)},circle:{render:function(d,b,c,e){var a=e.getCtx();
a.beginPath();
a.arc(b.x,b.y,c,0,Math.PI*2,true);
a.closePath();
a[d]()
},contains:function(f,b,c){var e=f.x-b.x,a=f.y-b.y,d=e*e+a*a;
return d<=c*c
}},ellipse:{render:function(b,k,h,j,g){var i=g.getCtx(),e=1,f=1,a=1,c=1,d=0;
if(h>j){d=h/2;
f=j/h;
c=h/j
}else{d=j/2;
e=h/j;
a=j/h
}i.save();
i.scale(e,f);
i.beginPath();
i.arc(k.x*a,k.y*c,d,0,Math.PI*2,true);
i.closePath();
i[b]();
i.restore()
},contains:function(h,a,g,i){var b=0,c=1,d=1,e=0,f=0,j=0;
if(g>i){b=g/2;
d=i/g
}else{b=i/2;
c=g/i
}e=(h.x-a.x)*(1/c);
f=(h.y-a.y)*(1/d);
j=e*e+f*f;
return j<=b*b
}},square:{render:function(a,c,d,b){b.getCtx()[a+"Rect"](c.x-d,c.y-d,2*d,2*d)
},contains:function(c,a,b){return Math.abs(a.x-c.x)<=b&&Math.abs(a.y-c.y)<=b
}},rectangle:{render:function(d,b,e,c,a){a.getCtx()[d+"Rect"](b.x-e/2,b.y-c/2,e,c)
},contains:function(c,d,a,b){return Math.abs(d.x-c.x)<=a/2&&Math.abs(d.y-c.y)<=b/2
}},triangle:{render:function(b,a,e,h){var i=h.getCtx(),f=a.x,g=a.y-e,j=f-e,k=a.y+e,c=f+e,d=k;
i.beginPath();
i.moveTo(f,g);
i.lineTo(j,k);
i.lineTo(c,d);
i.closePath();
i[b]()
},contains:function(c,a,b){return R.circle.contains(c,a,b)
}},star:{render:function(b,e,g,a){var c=a.getCtx(),d=Math.PI/5;
c.save();
c.translate(e.x,e.y);
c.beginPath();
c.moveTo(g,0);
for(var f=0;
f<9;
f++){c.rotate(d);
if(f%2==0){c.lineTo((g/0.525731)*0.200811,0)
}else{c.lineTo(g,0)
}}c.closePath();
c[b]();
c.restore()
},contains:function(c,a,b){return R.circle.contains(c,a,b)
}}};
var F={line:{render:function(c,d,a){var b=a.getCtx();
b.beginPath();
b.moveTo(c.x,c.y);
b.lineTo(d.x,d.y);
b.stroke()
},contains:function(i,f,c,k){var e=Math.min,b=Math.max,g=e(i.x,f.x),j=b(i.x,f.x),h=e(i.y,f.y),a=b(i.y,f.y);
if(c.x>=g&&c.x<=j&&c.y>=h&&c.y<=a){if(Math.abs(f.x-i.x)<=k){return true
}var d=(f.y-i.y)/(f.x-i.x)*(c.x-i.x)+i.y;
return Math.abs(d-c.y)<=k
}return false
}},arrow:{render:function(k,j,e,g,h){var i=h.getCtx();
if(g){var f=k;
k=j;
j=f
}var b=new C(j.x-k.x,j.y-k.y);
b.$scale(e/b.norm());
var d=new C(j.x-b.x,j.y-b.y),c=new C(-b.y/2,b.x/2),l=d.add(c),a=d.$add(c.$scale(-1));
i.beginPath();
i.moveTo(k.x,k.y);
i.lineTo(j.x,j.y);
i.stroke();
i.beginPath();
i.moveTo(l.x,l.y);
i.lineTo(a.x,a.y);
i.lineTo(j.x,j.y);
i.closePath();
i.fill()
},contains:function(a,b,c,d){return F.line.contains(a,b,c,d)
}},hyperline:{render:function(a,j,h,f){var i=f.getCtx();
var e=d(a,j);
if(e.a>1000||e.b>1000||e.ratio<0){i.beginPath();
i.moveTo(a.x*h,a.y*h);
i.lineTo(j.x*h,j.y*h);
i.stroke()
}else{var b=Math.atan2(j.y-e.y,j.x-e.x);
var c=Math.atan2(a.y-e.y,a.x-e.x);
var g=g(b,c);
i.beginPath();
i.arc(e.x*h,e.y*h,e.ratio*h,b,c,g);
i.stroke()
}function d(k,l){var s=(k.x*l.y-k.y*l.x),T=s;
var t=k.squaredNorm(),u=l.squaredNorm();
if(s==0){return{x:0,y:0,ratio:-1}
}var m=(k.y*u-l.y*t+k.y-l.y)/s;
var o=(l.x*t-k.x*u+l.x-k.x)/T;
var n=-m/2;
var p=-o/2;
var q=(m*m+o*o)/4-1;
if(q<0){return{x:0,y:0,ratio:-1}
}var r=Math.sqrt(q);
var v={x:n,y:p,ratio:r>1000?-1:r,a:m,b:o};
return v
}function g(l,k){return(l<k)?((l+Math.PI>k)?false:true):((k+Math.PI>l)?true:false)
}},contains:P.lambda(false)}};
N.Plot={initialize:function(a,b){this.viz=a;
this.config=a.config;
this.node=a.config.Node;
this.edge=a.config.Edge;
this.animation=new x;
this.nodeTypes=new b.Plot.NodeTypes;
this.edgeTypes=new b.Plot.EdgeTypes;
this.labels=a.labels
},nodeHelper:R,edgeHelper:F,Interpolator:{map:{border:"color",color:"color",width:"number",height:"number",dim:"number",alpha:"number",lineWidth:"number",angularWidth:"number",span:"number",valueArray:"array-number",dimArray:"array-number"},canvas:{globalAlpha:"number",fillStyle:"color",strokeStyle:"color",lineWidth:"number",shadowBlur:"number",shadowColor:"color",shadowOffsetX:"number",shadowOffsetY:"number",miterLimit:"number"},label:{size:"number",color:"color"},compute:function(c,a,b){return c+(a-c)*b
},moebius:function(e,g,c,f){var h=f.scale(-c);
if(h.norm()<1){var b=h.x,d=h.y;
var a=e.startPos.getc().moebiusTransformation(h);
e.pos.setc(a.x,a.y);
h.x=b;
h.y=d
}},linear:function(b,c,a){var d=b.startPos.getc(true);
var e=b.endPos.getc(true);
b.pos.setc(this.compute(d.x,e.x,a),this.compute(d.y,e.y,a))
},polar:function(f,b,e){var a=f.startPos.getp(true);
var d=f.endPos.getp();
var c=d.interpolate(a,e);
f.pos.setp(c.theta,c.rho)
},number:function(b,e,g,c,a){var d=b[c](e,"start");
var f=b[c](e,"end");
b[a](e,this.compute(d,f,g))
},color:function(f,h,i,c,e){var b=P.hexToRgb(f[c](h,"start"));
var a=P.hexToRgb(f[c](h,"end"));
var d=this.compute;
var g=P.rgbToHex([parseInt(d(b[0],a[0],i)),parseInt(d(b[1],a[1],i)),parseInt(d(b[2],a[2],i))]);
f[e](h,g)
},"array-number":function(e,f,i,m,c){var l=e[m](f,"start"),k=e[m](f,"end"),g=[];
for(var o=0,d=l.length;
o<d;
o++){var h=l[o],j=k[o];
if(h.length){for(var a=0,n=h.length,b=[];
a<n;
a++){b.push(this.compute(h[a],j[a],i))
}g.push(b)
}else{g.push(this.compute(h,j,i))
}}e[c](f,g)
},node:function(g,b,i,h,a,f){h=this[h];
if(b){var c=b.length;
for(var e=0;
e<c;
e++){var d=b[e];
this[h[d]](g,d,i,a,f)
}}else{for(var d in h){this[h[d]](g,d,i,a,f)
}}},edge:function(h,b,d,f,c,e){var g=h.adjacencies;
for(var a in g){this["node"](g[a],b,d,f,c,e)
}},"node-property":function(a,b,c){this["node"](a,b,c,"map","getData","setData")
},"edge-property":function(a,b,c){this["edge"](a,b,c,"map","getData","setData")
},"label-property":function(a,b,c){this["node"](a,b,c,"label","getLabelData","setLabelData")
},"node-style":function(a,b,c){this["node"](a,b,c,"canvas","getCanvasStyle","setCanvasStyle")
},"edge-style":function(a,b,c){this["edge"](a,b,c,"canvas","getCanvasStyle","setCanvasStyle")
}},sequence:function(a){var c=this;
a=P.merge({condition:P.lambda(false),step:P.empty,onComplete:P.empty,duration:200},a||{});
var b=setInterval(function(){if(a.condition()){a.step()
}else{clearInterval(b);
a.onComplete()
}c.viz.refresh(true)
},a.duration)
},prepare:function(f){var h=this.viz.graph,e={"node-property":{getter:"getData",setter:"setData"},"edge-property":{getter:"getData",setter:"setData"},"node-style":{getter:"getCanvasStyle",setter:"setCanvasStyle"},"edge-style":{getter:"getCanvasStyle",setter:"setCanvasStyle"}};
var b={};
if(P.type(f)=="array"){for(var a=0,c=f.length;
a<c;
a++){var g=f[a].split(":");
b[g.shift()]=g
}}else{for(var d in f){if(d=="position"){b[f.position]=[]
}else{b[d]=P.splat(f[d])
}}}h.eachNode(function(i){i.startPos.set(i.pos);
P.each(["node-property","node-style"],function(k){if(k in b){var j=b[k];
for(var l=0,m=j.length;
l<m;
l++){i[e[k].setter](j[l],i[e[k].getter](j[l]),"start")
}}});
P.each(["edge-property","edge-style"],function(k){if(k in b){var j=b[k];
i.eachAdjacency(function(m){for(var l=0,n=j.length;
l<n;
l++){m[e[k].setter](j[l],m[e[k].getter](j[l]),"start")
}})
}})
});
return b
},animate:function(f,h){f=P.merge(this.viz.config,f||{});
var b=this,a=this.viz,e=a.graph,d=this.Interpolator,g=f.type==="nodefx"?this.nodeFxAnimation:this.animation;
var c=this.prepare(f.modes);
if(f.hideLabels){this.labels.hideLabels(true)
}g.setOptions(P.extend(f,{$animating:false,compute:function(i){e.eachNode(function(k){for(var j in c){d[j](k,c[j],i,h)
}});
b.plot(f,this.$animating,i);
this.$animating=true
},complete:function(){if(f.hideLabels){b.labels.hideLabels(false)
}b.plot(f);
f.onComplete()
}})).start()
},nodeFx:function(f){var a=this.viz,j=a.graph,c=this.nodeFxAnimation,i=P.merge(this.viz.config,{elements:{id:false,properties:{}},reposition:false});
f=P.merge(i,f||{},{onBeforeCompute:P.empty,onAfterCompute:P.empty});
c.stopTimer();
var b=f.elements.properties;
if(!f.elements.id){j.eachNode(function(k){for(var l in b){k.setData(l,b[l],"end")
}})
}else{var h=P.splat(f.elements.id);
P.each(h,function(k){var l=j.getNode(k);
if(l){for(var m in b){l.setData(m,b[m],"end")
}}})
}var d=[];
for(var g in b){d.push(g)
}var e=["node-property:"+d.join(":")];
if(f.reposition){e.push("linear");
a.compute("end")
}this.animate(P.merge(f,{modes:e,type:"nodefx"}))
},plot:function(g,i){var k=this.viz,c=k.graph,f=k.canvas,h=k.root,b=this,j=f.getCtx(),d=Math.min,g=g||this.viz.controller;
g.clearCanvas&&f.clear();
var a=c.getNode(h);
if(!a){return
}var e=!!a.visited;
c.eachNode(function(l){var m=l.getData("alpha");
l.eachAdjacency(function(o){var n=o.nodeTo;
if(!!n.visited===e&&l.drawn&&n.drawn){!i&&g.onBeforePlotLine(o);
b.plotLine(o,f,i);
!i&&g.onAfterPlotLine(o)
}});
if(l.drawn){!i&&g.onBeforePlotNode(l);
b.plotNode(l,f,i);
!i&&g.onAfterPlotNode(l)
}if(!b.labelsHidden&&g.withLabels){if(l.drawn&&m>=0.95){b.labels.plotLabel(f,l,g)
}else{b.labels.hideLabel(l,false)
}}l.visited=!e
})
},plotTree:function(d,g,i){var c=this,b=this.viz,f=b.canvas,e=this.config,a=f.getCtx();
var h=d.getData("alpha");
d.eachSubnode(function(j){if(g.plotSubtree(d,j)&&j.exist&&j.drawn){var k=d.getAdjacency(j.id);
!i&&g.onBeforePlotLine(k);
c.plotLine(k,f,i);
!i&&g.onAfterPlotLine(k);
c.plotTree(j,g,i)
}});
if(d.drawn){!i&&g.onBeforePlotNode(d);
this.plotNode(d,f,i);
!i&&g.onAfterPlotNode(d);
if(!g.hideLabels&&g.withLabels&&h>=0.95){this.labels.plotLabel(f,d,g)
}else{this.labels.hideLabel(d,false)
}}else{this.labels.hideLabel(d,true)
}},plotNode:function(f,g,i){var b=f.getData("type"),c=this.node.CanvasStyles;
if(b!="none"){var h=f.getData("lineWidth"),d=f.getData("color"),e=f.getData("alpha"),a=g.getCtx();
a.save();
a.lineWidth=h;
a.fillStyle=a.strokeStyle=d;
a.globalAlpha=e;
for(var j in c){a[j]=f.getCanvasStyle(j)
}this.nodeTypes[b].render.call(this,f,g,i);
a.restore()
}},plotLine:function(b,g,i){var c=b.getData("type"),e=this.edge.CanvasStyles;
if(c!="none"){var h=b.getData("lineWidth"),f=b.getData("color"),k=g.getCtx(),d=b.nodeFrom,a=b.nodeTo;
k.save();
k.lineWidth=h;
k.fillStyle=k.strokeStyle=f;
k.globalAlpha=Math.min(d.getData("alpha"),a.getData("alpha"),b.getData("alpha"));
for(var j in e){k[j]=b.getCanvasStyle(j)
}this.edgeTypes[c].render.call(this,b,g,i);
k.restore()
}}};
N.Plot3D=P.merge(N.Plot,{Interpolator:{linear:function(b,c,a){var d=b.startPos.getc(true);
var e=b.endPos.getc(true);
b.pos.setc(this.compute(d.x,e.x,a),this.compute(d.y,e.y,a),this.compute(d.z,e.z,a))
}},plotNode:function(a,b){if(a.getData("type")=="none"){return
}this.plotElement(a,b,{getAlpha:function(){return a.getData("alpha")
}})
},plotLine:function(b,a){if(b.getData("type")=="none"){return
}this.plotElement(b,a,{getAlpha:function(){return Math.min(b.nodeFrom.getData("alpha"),b.nodeTo.getData("alpha"),b.getData("alpha"))
}})
},plotElement:function(b,ad,q){var e=ad.getCtx(),ac=new Matrix4,u=ad.config.Scene.Lighting,a=ad.canvases[0],p=a.program,c=a.camera;
if(!b.geometry){b.geometry=new O3D[b.getData("type")]
}b.geometry.update(b);
if(!b.webGLVertexBuffer){var s=[],ag=[],k=[],m=0,h=b.geometry;
for(var d=0,f=h.vertices,aa=h.faces,ab=aa.length;
d<ab;
d++){var n=aa[d],ae=f[n.a],af=f[n.b],ah=f[n.c],r=n.d?f[n.d]:false,i=n.normal;
s.push(ae.x,ae.y,ae.z);
s.push(af.x,af.y,af.z);
s.push(ah.x,ah.y,ah.z);
if(r){s.push(r.x,r.y,r.z)
}k.push(i.x,i.y,i.z);
k.push(i.x,i.y,i.z);
k.push(i.x,i.y,i.z);
if(r){k.push(i.x,i.y,i.z)
}ag.push(m,m+1,m+2);
if(r){ag.push(m,m+2,m+3);
m+=4
}else{m+=3
}}b.webGLVertexBuffer=e.createBuffer();
e.bindBuffer(e.ARRAY_BUFFER,b.webGLVertexBuffer);
e.bufferData(e.ARRAY_BUFFER,new Float32Array(s),e.STATIC_DRAW);
b.webGLFaceBuffer=e.createBuffer();
e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,b.webGLFaceBuffer);
e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(ag),e.STATIC_DRAW);
b.webGLFaceCount=ag.length;
b.webGLNormalBuffer=e.createBuffer();
e.bindBuffer(e.ARRAY_BUFFER,b.webGLNormalBuffer);
e.bufferData(e.ARRAY_BUFFER,new Float32Array(k),e.STATIC_DRAW)
}ac.multiply(c.matrix,b.geometry.matrix);
e.uniformMatrix4fv(p.viewMatrix,false,ac.flatten());
e.uniformMatrix4fv(p.projectionMatrix,false,c.projectionMatrix.flatten());
var o=Matrix4.makeInvert(ac);
o.$transpose();
e.uniformMatrix4fv(p.normalMatrix,false,o.flatten());
var g=P.hexToRgb(b.getData("color"));
g.push(q.getAlpha());
e.uniform4f(p.color,g[0]/255,g[1]/255,g[2]/255,g[3]);
e.uniform1i(p.enableLighting,u.enable);
if(u.enable){if(u.ambient){var l=u.ambient;
e.uniform3f(p.ambientColor,l[0],l[1],l[2])
}if(u.directional){var j=u.directional,g=j.color,t=j.direction,v=new Vector3(t.x,t.y,t.z).normalize().$scale(-1);
e.uniform3f(p.lightingDirection,v.x,v.y,v.z);
e.uniform3f(p.directionalColor,g[0],g[1],g[2])
}}e.bindBuffer(e.ARRAY_BUFFER,b.webGLVertexBuffer);
e.vertexAttribPointer(p.position,3,e.FLOAT,false,0,0);
e.bindBuffer(e.ARRAY_BUFFER,b.webGLNormalBuffer);
e.vertexAttribPointer(p.normal,3,e.FLOAT,false,0,0);
e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,b.webGLFaceBuffer);
e.drawElements(e.TRIANGLES,b.webGLFaceCount,e.UNSIGNED_SHORT,0)
}});
N.Label={};
N.Label.Native=new B({initialize:function(a){this.viz=a
},plotLabel:function(e,d,b){var c=e.getCtx();
var a=d.pos.getc(true);
c.font=d.getLabelData("style")+" "+d.getLabelData("size")+"px "+d.getLabelData("family");
c.textAlign=d.getLabelData("textAlign");
c.fillStyle=c.strokeStyle=d.getLabelData("color");
c.textBaseline=d.getLabelData("textBaseline");
this.renderLabel(e,d,b)
},renderLabel:function(e,d,b){var c=e.getCtx();
var a=d.pos.getc(true);
c.fillText(d.name,a.x,a.y+d.getData("height")/2)
},hideLabel:P.empty,hideLabels:P.empty});
N.Label.DOM=new B({labelsHidden:false,labelContainer:false,labels:{},getLabelContainer:function(){return this.labelContainer?this.labelContainer:this.labelContainer=document.getElementById(this.viz.config.labelContainer)
},getLabel:function(a){return(a in this.labels&&this.labels[a]!=null)?this.labels[a]:this.labels[a]=document.getElementById(a)
},hideLabels:function(a){var b=this.getLabelContainer();
if(a){b.style.display="none"
}else{b.style.display=""
}this.labelsHidden=a
},clearLabels:function(b){for(var a in this.labels){if(b||!this.viz.graph.hasNode(a)){this.disposeLabel(a);
delete this.labels[a]
}}},disposeLabel:function(a){var b=this.getLabel(a);
if(b&&b.parentNode){b.parentNode.removeChild(b)
}},hideLabel:function(b,c){b=P.splat(b);
var a=c?"":"none",e,d=this;
P.each(b,function(f){var g=d.getLabel(f.id);
if(g){g.style.display=a
}})
},fitsInCanvas:function(c,b){var a=b.getSize();
if(c.x>=a.width||c.x<0||c.y>=a.height||c.y<0){return false
}return true
}});
N.Label.HTML=new B({Implements:N.Label.DOM,plotLabel:function(d,b,f){var e=b.id,c=this.getLabel(e);
if(!c&&!(c=document.getElementById(e))){c=document.createElement("div");
var a=this.getLabelContainer();
c.id=e;
c.className="node";
c.style.position="absolute";
f.onCreateLabel(c,b);
a.appendChild(c);
this.labels[b.id]=c
}this.placeLabel(c,b,f)
}});
N.Label.SVG=new B({Implements:N.Label.DOM,plotLabel:function(f,h,g){var d=h.id,c=this.getLabel(d);
if(!c&&!(c=document.getElementById(d))){var b="http://www.w3.org/2000/svg";
c=document.createElementNS(b,"svg:text");
var e=document.createElementNS(b,"svg:tspan");
c.appendChild(e);
var a=this.getLabelContainer();
c.setAttribute("id",d);
c.setAttribute("class","node");
a.appendChild(c);
g.onCreateLabel(c,h);
this.labels[h.id]=c
}this.placeLabel(c,h,g)
}});
N.Geom=new B({initialize:function(a){this.viz=a;
this.config=a.config;
this.node=a.config.Node;
this.edge=a.config.Edge
},translate:function(a,b){b=P.splat(b);
this.viz.graph.eachNode(function(c){P.each(b,function(d){c.getPos(d).$add(a)
})
})
},setRightLevelToShow:function(d,c,f){var b=this.getRightLevelToShow(d,c),e=this.viz.labels,a=P.merge({execShow:true,execHide:true,onHide:P.empty,onShow:P.empty},f||{});
d.eachLevel(0,this.config.levelsToShow,function(g){var h=g._depth-d._depth;
if(h>b){a.onHide(g);
if(a.execHide){g.drawn=false;
g.exist=false;
e.hideLabel(g,false)
}}else{a.onShow(g);
if(a.execShow){g.exist=true
}}});
d.drawn=true
},getRightLevelToShow:function(d,b){var c=this.config;
var a=c.levelsToShow;
var e=c.constrained;
if(!e){return a
}while(!this.treeFitsInCanvas(d,b,a)&&a>1){a--
}return a
}});
var O={construct:function(a){var c=(P.type(a)=="array");
var b=new N(this.graphOptions,this.config.Node,this.config.Edge,this.config.Label);
if(!c){(function(f,g){f.addNode(g);
if(g.children){for(var d=0,e=g.children;
d<e.length;
d++){f.addAdjacence(g,e[d]);
arguments.callee(f,e[d])
}}})(b,a)
}else{(function(j,i){var g=function(q){for(var n=0,p=i.length;
n<p;
n++){if(i[n].id==q){return i[n]
}}var o={id:q,name:q};
return j.addNode(o)
};
for(var m=0,f=i.length;
m<f;
m++){j.addNode(i[m]);
var l=i[m].adjacencies;
if(l){for(var e=0,k=l.length;
e<k;
e++){var h=l[e],d={};
if(typeof l[e]!="string"){d=P.merge(h.data,{});
h=h.nodeTo
}j.addAdjacence(i[m],g(h),d)
}}}})(b,a)
}return b
},loadJSON:function(a,b){this.json=a;
if(this.labels&&this.labels.clearLabels){this.labels.clearLabels(true)
}this.graph=this.construct(a);
if(P.type(a)!="array"){this.root=a.id
}else{this.root=a[b?b:0].id
}},toJSON:function(b){b=b||"tree";
if(b=="tree"){var e={};
var a=this.graph.getNode(this.root);
var e=(function c(f){var h={};
h.id=f.id;
h.name=f.name;
h.data=f.data;
var g=[];
f.eachSubnode(function(i){g.push(c(i))
});
h.children=g;
return h
})(a);
return e
}else{var e=[];
var d=!!this.graph.getNode(this.root).visited;
this.graph.eachNode(function(g){var h={};
h.id=g.id;
h.name=g.name;
h.data=g.data;
var f=[];
g.eachAdjacency(function(k){var i=k.nodeTo;
if(!!i.visited===d){var j={};
j.nodeTo=i.id;
j.data=k.data;
f.push(j)
}});
h.adjacencies=f;
e.push(h);
g.visited=!d
});
return e
}}};
var L=$jit.Layouts={};
var M={label:null,compute:function(d,b,a){this.initializeLabel(a);
var c=this.label,e=c.style;
d.eachNode(function(f){var k=f.getData("autoWidth"),j=f.getData("autoHeight");
if(k||j){delete f.data.$width;
delete f.data.$height;
delete f.data.$dim;
var h=f.getData("width"),i=f.getData("height");
e.width=k?"auto":h+"px";
e.height=j?"auto":i+"px";
c.innerHTML=f.name;
var m=c.offsetWidth,g=c.offsetHeight;
var l=f.getData("type");
if(P.indexOf(["circle","square","triangle","star"],l)===-1){f.setData("width",m);
f.setData("height",g)
}else{var n=m>g?m:g;
f.setData("width",n);
f.setData("height",n);
f.setData("dim",n)
}}})
},initializeLabel:function(a){if(!this.label){this.label=document.createElement("div");
document.body.appendChild(this.label)
}this.setLabelStyles(a)
},setLabelStyles:function(a){P.extend(this.label.style,{visibility:"hidden",position:"absolute",width:"auto",height:"auto"});
this.label.className="jit-autoadjust-label"
}};
L.Tree=(function(){var j=Array.prototype.slice;
function a(l,q,t,n,s){var o=q.Node;
var r=q.multitree;
if(o.overridable){var m=-1,p=-1;
l.eachNode(function(u){if(u._depth==t&&(!r||("$orn" in u.data)&&u.data.$orn==n)){var T=u.getData("width",s);
var v=u.getData("height",s);
m=(m<T)?T:m;
p=(p<v)?v:p
}});
return{width:m<0?o.width:m,height:p<0?o.height:p}
}else{return o
}}function i(o,l,m,p){var n=(p=="left"||p=="right")?"y":"x";
o.getPos(l)[n]+=m
}function c(m,l){var n=[];
P.each(m,function(o){o=j.call(o);
o[0]+=l;
o[1]+=l;
n.push(o)
});
return n
}function k(l,o){if(l.length==0){return o
}if(o.length==0){return l
}var m=l.shift(),n=o.shift();
return[[m[0],n[1]]].concat(k(l,o))
}function e(n,m){m=m||[];
if(n.length==0){return m
}var l=n.pop();
return e(n,k(l,m))
}function b(m,o,l,p,n){if(m.length<=n||o.length<=n){return 0
}var q=m[n][1],r=o[n][0];
return Math.max(b(m,o,l,p,++n)+l,q-r+p)
}function d(l,n,o){function m(s,q,t){if(q.length<=t){return[]
}var r=q[t],p=b(s,r,n,o,0);
return[p].concat(m(k(s,c(r,p)),q,++t))
}return m([],l,0)
}function g(l,m,n){function p(s,q,t){if(q.length<=t){return[]
}var r=q[t],u=-b(r,s,m,n,0);
return[u].concat(p(k(c(r,u),s),q,++t))
}l=j.call(l);
var o=p([],l.reverse(),0);
return o.reverse()
}function h(r,l,o,q){var n=d(r,l,o),s=g(r,l,o);
if(q=="left"){s=n
}else{if(q=="right"){n=s
}}for(var m=0,p=[];
m<n.length;
m++){p[m]=(n[m]+s[m])/2
}return p
}function f(af,s,ae,l,n){var ac=l.multitree;
var t=["x","y"],Z=["width","height"];
var ad=+(n=="left"||n=="right");
var v=t[ad],m=t[1-ad];
var q=l.Node;
var aa=Z[ad],o=Z[1-ad];
var ab=l.siblingOffset;
var p=l.subtreeOffset;
var r=l.align;
function u(aq,am,Y){var S=aq.getData(aa,ae);
var aj=am||(aq.getData(o,ae));
var U=[],X=[],al=false;
var T=aj+l.levelDistance;
aq.eachSubnode(function(ag){if(ag.exist&&(!ac||("$orn" in ag.data)&&ag.data.$orn==n)){if(!al){al=a(af,l,ag._depth,n,ae)
}var ah=u(ag,al[o],Y+T);
U.push(ah.tree);
X.push(ah.extent)
}});
var an=h(X,p,ab,r);
for(var ao=0,ap=[],ak=[];
ao<U.length;
ao++){i(U[ao],ae,an[ao],n);
ak.push(c(X[ao],an[ao]))
}var V=[[-S/2,S/2]].concat(e(ak));
aq.getPos(ae)[v]=0;
if(n=="top"||n=="left"){aq.getPos(ae)[m]=Y
}else{aq.getPos(ae)[m]=-Y
}return{tree:aq,extent:V}
}u(s,false,0)
}return new B({compute:function(m,n){var l=m||"start";
var o=this.graph.getNode(this.root);
P.extend(o,{drawn:true,exist:true,selected:true});
M.compute(this.graph,l,this.config);
if(!!n||!("_depth" in o)){this.graph.computeLevels(this.root,0,"ignore")
}this.computePositions(o,l)
},computePositions:function(p,t){var r=this.config;
var s=r.multitree;
var m=r.align;
var q=m!=="center"&&r.indent;
var l=r.orientation;
var n=s?["top","right","bottom","left"]:[l];
var o=this;
P.each(n,function(T){f(o.graph,p,t,o.config,T,t);
var v=["x","y"][+(T=="left"||T=="right")];
(function u(S){S.eachSubnode(function(V){if(V.exist&&(!s||("$orn" in V.data)&&V.data.$orn==T)){V.getPos(t)[v]+=S.getPos(t)[v];
if(q){V.getPos(t)[v]+=m=="left"?q:-q
}u(V)
}})
})(p)
})
}})
})();
$jit.ST=(function(){var a=[];
function c(d){d=d||this.clickedNode;
if(!this.config.constrained){return[]
}var g=this.geom;
var i=this.graph;
var f=this.canvas;
var h=d._depth,l=[];
i.eachNode(function(m){if(m.exist&&!m.selected){if(m.isDescendantOf(d.id)){if(m._depth<=h){l.push(m)
}}else{l.push(m)
}}});
var k=g.getRightLevelToShow(d,f);
d.eachLevel(k,k,function(m){if(m.exist&&!m.selected){l.push(m)
}});
for(var j=0;
j<a.length;
j++){var e=this.graph.getNode(a[j]);
if(!e.isDescendantOf(d.id)){l.push(e)
}}return l
}function b(f){var d=[],e=this.config;
f=f||this.clickedNode;
this.clickedNode.eachLevel(0,e.levelsToShow,function(g){if(e.multitree&&!("$orn" in g.data)&&g.anySubnode(function(h){return h.exist&&!h.drawn
})){d.push(g)
}else{if(g.drawn&&!g.anySubnode("drawn")){d.push(g)
}}});
return d
}return new B({Implements:[O,D,L.Tree],initialize:function(f){var g=$jit.ST;
var d={levelsToShow:2,levelDistance:30,constrained:true,Node:{type:"rectangle"},duration:700,offsetX:0,offsetY:0};
this.controller=this.config=P.merge(E("Canvas","Fx","Tree","Node","Edge","Controller","Tips","NodeStyles","Events","Navigation","Label"),d,f);
var e=this.config;
if(e.useCanvas){this.canvas=e.useCanvas;
this.config.labelContainer=this.canvas.id+"-label"
}else{if(e.background){e.background=P.merge({type:"Circles"},e.background)
}this.canvas=new G(this,e);
this.config.labelContainer=(typeof e.injectInto=="string"?e.injectInto:e.injectInto.id)+"-label"
}this.graphOptions={klass:C};
this.graph=new N(this.graphOptions,this.config.Node,this.config.Edge);
this.labels=new g.Label[e.Label.type](this);
this.fx=new g.Plot(this,g);
this.op=new g.Op(this);
this.group=new g.Group(this);
this.geom=new g.Geom(this);
this.clickedNode=null;
this.initializeExtras()
},plot:function(){this.fx.plot(this.controller)
},switchPosition:function(e,f,h){var g=this.geom,d=this.fx,i=this;
if(!d.busy){d.busy=true;
this.contract({onComplete:function(){g.switchOrientation(e);
i.compute("end",false);
d.busy=false;
if(f=="animate"){i.onClick(i.clickedNode.id,h)
}else{if(f=="replot"){i.select(i.clickedNode.id,h)
}}}},e)
}},switchAlignment:function(f,d,e){this.config.align=f;
if(d=="animate"){this.select(this.clickedNode.id,e)
}else{if(d=="replot"){this.onClick(this.clickedNode.id,e)
}}},addNodeInPath:function(d){a.push(d);
this.select((this.clickedNode&&this.clickedNode.id)||this.root)
},clearNodesInPath:function(d){a.length=0;
this.select((this.clickedNode&&this.clickedNode.id)||this.root)
},refresh:function(){this.reposition();
this.select((this.clickedNode&&this.clickedNode.id)||this.root)
},reposition:function(){this.graph.computeLevels(this.root,0,"ignore");
this.geom.setRightLevelToShow(this.clickedNode,this.canvas);
this.graph.eachNode(function(d){if(d.exist){d.drawn=true
}});
this.compute("end")
},requestNodes:function(i,h){var d=P.merge(this.controller,h),g=this.config.levelsToShow;
if(d.request){var e=[],f=i._depth;
i.eachLevel(0,g,function(j){if(j.drawn&&!j.anySubnode()){e.push(j);
j._level=g-(j._depth-f)
}});
this.group.requestNodes(e,d)
}else{d.onComplete()
}},contract:function(f,e){var h=this.config.orientation;
var g=this.geom,i=this.group;
if(e){g.switchOrientation(e)
}var d=c.call(this);
if(e){g.switchOrientation(h)
}i.contract(d,P.merge(this.controller,f))
},move:function(d,g){this.compute("end",false);
var f=g.Move,e={x:f.offsetX,y:f.offsetY};
if(f.enable){this.geom.translate(d.endPos.add(e).$scale(-1),"end")
}this.fx.animate(P.merge(this.controller,{modes:["linear"]},g))
},expand:function(d,f){var e=b.call(this,d);
this.group.expand(e,P.merge(this.controller,f))
},selectPath:function(g){var h=this;
this.graph.eachNode(function(i){i.selected=false
});
function e(i){if(i==null||i.selected){return
}i.selected=true;
P.each(h.group.getSiblings([i])[i.id],function(k){k.exist=true;
k.drawn=true
});
var j=i.getParents();
j=(j.length>0)?j[0]:null;
e(j)
}for(var f=0,d=[g.id].concat(a);
f<d.length;
f++){e(this.graph.getNode(d[f]))
}},setRoot:function(e,f,g){if(this.busy){return
}this.busy=true;
var h=this,k=this.canvas;
var j=this.graph.getNode(this.root);
var d=this.graph.getNode(e);
function i(){if(this.config.multitree&&d.data.$orn){var m=d.data.$orn;
var l={left:"right",right:"left",top:"bottom",bottom:"top"}[m];
j.data.$orn=l;
(function n(o){o.eachSubnode(function(p){if(p.id!=e){p.data.$orn=l;
n(p)
}})
})(j);
delete d.data.$orn
}this.root=e;
this.clickedNode=d;
this.graph.computeLevels(this.root,0,"ignore");
this.geom.setRightLevelToShow(d,k,{execHide:false,onShow:function(o){if(!o.drawn){o.drawn=true;
o.setData("alpha",1,"end");
o.setData("alpha",0);
o.pos.setc(d.pos.x,d.pos.y)
}}});
this.compute("end");
this.busy=true;
this.fx.animate({modes:["linear","node-property:alpha"],onComplete:function(){h.busy=false;
h.onClick(e,{onComplete:function(){g&&g.onComplete()
}})
}})
}delete j.data.$orns;
if(f=="animate"){i.call(this);
h.selectPath(d)
}else{if(f=="replot"){i.call(this);
this.select(this.root)
}}},addSubtree:function(e,f,d){if(f=="replot"){this.op.sum(e,P.extend({type:"replot"},d||{}))
}else{if(f=="animate"){this.op.sum(e,P.extend({type:"fade:seq"},d||{}))
}}},removeSubtree:function(e,d,f,h){var i=this.graph.getNode(e),g=[];
i.eachLevel(+!d,false,function(j){g.push(j.id)
});
if(f=="replot"){this.op.removeNode(g,P.extend({type:"replot"},h||{}))
}else{if(f=="animate"){this.op.removeNode(g,P.extend({type:"fade:seq"},h||{}))
}}},select:function(h,e){var i=this.group,k=this.geom;
var d=this.graph.getNode(h),f=this.canvas;
var j=this.graph.getNode(this.root);
var g=P.merge(this.controller,e);
var l=this;
g.onBeforeCompute(d);
this.selectPath(d);
this.clickedNode=d;
this.requestNodes(d,{onComplete:function(){i.hide(i.prepare(c.call(l)),g);
k.setRightLevelToShow(d,f);
l.compute("current");
l.graph.eachNode(function(n){var o=n.pos.getc(true);
n.startPos.setc(o.x,o.y);
n.endPos.setc(o.x,o.y);
n.visited=false
});
var m={x:g.offsetX,y:g.offsetY};
l.geom.translate(d.endPos.add(m).$scale(-1),["start","current","end"]);
i.show(b.call(l));
l.plot();
g.onAfterCompute(l.clickedNode);
g.onComplete()
}})
},onClick:function(g,i){var e=this.canvas,j=this,h=this.geom,d=this.config;
var k={Move:{enable:true,offsetX:d.offsetX||0,offsetY:d.offsetY||0},setRightLevelToShowConfig:false,onBeforeRequest:P.empty,onBeforeContract:P.empty,onBeforeMove:P.empty,onBeforeExpand:P.empty};
var f=P.merge(this.controller,k,i);
if(!this.busy){this.busy=true;
var l=this.graph.getNode(g);
this.selectPath(l,this.clickedNode);
this.clickedNode=l;
f.onBeforeCompute(l);
f.onBeforeRequest(l);
this.requestNodes(l,{onComplete:function(){f.onBeforeContract(l);
j.contract({onComplete:function(){h.setRightLevelToShow(l,e,f.setRightLevelToShowConfig);
f.onBeforeMove(l);
j.move(l,{Move:f.Move,onComplete:function(){f.onBeforeExpand(l);
j.expand(l,{onComplete:function(){j.busy=false;
f.onAfterCompute(g);
f.onComplete()
}})
}})
}})
}})
}}})
})();
$jit.ST.$extend=true;
$jit.ST.Op=new B({Implements:N.Op});
$jit.ST.Group=new B({initialize:function(a){this.viz=a;
this.canvas=a.canvas;
this.config=a.config;
this.animation=new x;
this.nodes=null
},requestNodes:function(h,b){var f=0,a=h.length,d={};
var g=function(){b.onComplete()
};
var c=this.viz;
if(a==0){g()
}for(var e=0;
e<a;
e++){d[h[e].id]=h[e];
b.request(h[e].id,h[e]._level,{onComplete:function(i,j){if(j&&j.children){j.id=i;
c.op.sum(j,{type:"nothing"})
}if(++f==a){c.graph.computeLevels(c.root,0);
g()
}}})
}},contract:function(d,a){var b=this.viz;
var c=this;
d=this.prepare(d);
this.animation.setOptions(P.merge(a,{$animating:false,compute:function(e){if(e==1){e=0.99
}c.plotStep(1-e,a,this.$animating);
this.$animating="contract"
},complete:function(){c.hide(d,a)
}})).start()
},hide:function(e,b){var c=this.viz;
for(var d=0;
d<e.length;
d++){if(true||!b||!b.request){e[d].eachLevel(1,false,function(f){if(f.exist){P.extend(f,{drawn:false,exist:false})
}})
}else{var a=[];
e[d].eachLevel(1,false,function(f){a.push(f.id)
});
c.op.removeNode(a,{type:"nothing"});
c.labels.clearLabels()
}}b.onComplete()
},expand:function(a,b){var c=this;
this.show(a);
this.animation.setOptions(P.merge(b,{$animating:false,compute:function(d){c.plotStep(d,b,this.$animating);
this.$animating="expand"
},complete:function(){c.plotStep(undefined,b,false);
b.onComplete()
}})).start()
},show:function(b){var a=this.config;
this.prepare(b);
P.each(b,function(c){if(a.multitree&&!("$orn" in c.data)){delete c.data.$orns;
var d=" ";
c.eachSubnode(function(e){if(("$orn" in e.data)&&d.indexOf(e.data.$orn)<0&&e.exist&&!e.drawn){d+=e.data.$orn+" "
}});
c.data.$orns=d
}c.eachLevel(0,a.levelsToShow,function(e){if(e.exist){e.drawn=true
}})
})
},prepare:function(a){this.nodes=this.getNodesWithChildren(a);
return this.nodes
},getNodesWithChildren:function(g){var b=[],a=this.config,c=this.viz.root;
g.sort(function(h,i){return(h._depth<=i._depth)-(h._depth>=i._depth)
});
for(var f=0;
f<g.length;
f++){if(g[f].anySubnode("exist")){for(var e=f+1,d=false;
!d&&e<g.length;
e++){if(!a.multitree||"$orn" in g[e].data){d=d||g[f].isDescendantOf(g[e].id)
}}if(!d){b.push(g[f])
}}}return b
},plotStep:function(k,b,h){var l=this.viz,e=this.config,f=l.canvas,j=f.getCtx(),i=this.nodes;
var c,d;
var g={};
for(c=0;
c<i.length;
c++){d=i[c];
g[d.id]=[];
var m=e.multitree&&!("$orn" in d.data);
var a=m&&d.data.$orns;
d.eachSubgraph(function(n){if(m&&a&&a.indexOf(n.data.$orn)>0&&n.drawn){n.drawn=false;
g[d.id].push(n)
}else{if((!m||!a)&&n.drawn){n.drawn=false;
g[d.id].push(n)
}}});
d.drawn=true
}if(i.length>0){l.fx.plot()
}for(c in g){P.each(g[c],function(n){n.drawn=true
})
}for(c=0;
c<i.length;
c++){d=i[c];
j.save();
l.fx.plotSubtree(d,b,k,h);
j.restore()
}},getSiblings:function(b){var a={};
P.each(b,function(c){var d=c.getParents();
if(d.length==0){a[c.id]=[c]
}else{var e=[];
d[0].eachSubnode(function(f){e.push(f)
});
a[c.id]=e
}});
return a
}});
$jit.ST.Geom=new B({Implements:N.Geom,switchOrientation:function(a){this.config.orientation=a
},dispatch:function(){var a=Array.prototype.slice.call(arguments);
var d=a.shift(),b=a.length;
var c=function(e){return typeof e=="function"?e():e
};
if(b==2){return(d=="top"||d=="bottom")?c(a[0]):c(a[1])
}else{if(b==4){switch(d){case"top":return c(a[0]);
case"right":return c(a[1]);
case"bottom":return c(a[2]);
case"left":return c(a[3])
}}}return undefined
},getSize:function(c,d){var f=c.data,e=this.config;
var h=e.siblingOffset;
var g=(e.multitree&&("$orn" in f)&&f.$orn)||e.orientation;
var b=c.getData("width")+h;
var a=c.getData("height")+h;
if(!d){return this.dispatch(g,a,b)
}else{return this.dispatch(g,b,a)
}},getTreeBaseSize:function(b,f,a){var e=this.getSize(b,true),c=0,d=this;
if(a(f,b)){return e
}if(f===0){return 0
}b.eachSubnode(function(g){c+=d.getTreeBaseSize(g,f-1,a)
});
return(e>c?e:c)+this.config.subtreeOffset
},getEdge:function(e,g,b){var f=function(i,h){return function(){return e.pos.add(new C(i,h))
}
};
var c=this.node;
var a=e.getData("width");
var d=e.getData("height");
if(g=="begin"){if(c.align=="center"){return this.dispatch(b,f(0,d/2),f(-a/2,0),f(0,-d/2),f(a/2,0))
}else{if(c.align=="left"){return this.dispatch(b,f(0,d),f(0,0),f(0,0),f(a,0))
}else{if(c.align=="right"){return this.dispatch(b,f(0,0),f(-a,0),f(0,-d),f(0,0))
}else{throw"align: not implemented"
}}}}else{if(g=="end"){if(c.align=="center"){return this.dispatch(b,f(0,-d/2),f(a/2,0),f(0,d/2),f(-a/2,0))
}else{if(c.align=="left"){return this.dispatch(b,f(0,0),f(a,0),f(0,d),f(0,0))
}else{if(c.align=="right"){return this.dispatch(b,f(0,-d),f(0,0),f(0,0),f(-a,0))
}else{throw"align: not implemented"
}}}}}},getScaledTreePosition:function(g,c){var e=this.node;
var b=g.getData("width");
var a=g.getData("height");
var d=(this.config.multitree&&("$orn" in g.data)&&g.data.$orn)||this.config.orientation;
var f=function(i,h){return function(){return g.pos.add(new C(i,h)).$scale(1-c)
}
};
if(e.align=="left"){return this.dispatch(d,f(0,a),f(0,0),f(0,0),f(b,0))
}else{if(e.align=="center"){return this.dispatch(d,f(0,a/2),f(-b/2,0),f(0,-a/2),f(b/2,0))
}else{if(e.align=="right"){return this.dispatch(d,f(0,0),f(-b,0),f(0,-a),f(0,0))
}else{throw"align: not implemented"
}}}},treeFitsInCanvas:function(g,c,e){var f=c.getSize();
var d=(this.config.multitree&&("$orn" in g.data)&&g.data.$orn)||this.config.orientation;
var b=this.dispatch(d,f.width,f.height);
var a=this.getTreeBaseSize(g,e,function(h,i){return h===0||!i.anySubnode()
});
return(a<b)
}});
$jit.ST.Plot=new B({Implements:N.Plot,plotSubtree:function(e,h,d,i){var b=this.viz,g=b.canvas,f=b.config;
d=Math.min(Math.max(0.001,d),1);
if(d>=0){e.drawn=false;
var a=g.getCtx();
var c=b.geom.getScaledTreePosition(e,d);
a.translate(c.x,c.y);
a.scale(d,d)
}this.plotTree(e,P.merge(h,{withLabels:true,hideLabels:!!d,plotSubtree:function(j,l){var m=f.multitree&&!("$orn" in e.data);
var k=m&&e.getData("orns");
return !m||k.indexOf(e.getData("orn"))>-1
}}),i);
if(d>=0){e.drawn=true
}},getAlignedPos:function(f,d,c){var e=this.node;
var b,a;
if(e.align=="center"){b={x:f.x-d/2,y:f.y-c/2}
}else{if(e.align=="left"){a=this.config.orientation;
if(a=="bottom"||a=="top"){b={x:f.x-d/2,y:f.y}
}else{b={x:f.x,y:f.y-c/2}
}}else{if(e.align=="right"){a=this.config.orientation;
if(a=="bottom"||a=="top"){b={x:f.x-d/2,y:f.y-c}
}else{b={x:f.x-d,y:f.y-c/2}
}}else{throw"align: not implemented"
}}}return b
},getOrientation:function(c){var e=this.config;
var b=e.orientation;
if(e.multitree){var d=c.nodeFrom;
var a=c.nodeTo;
b=(("$orn" in d.data)&&d.data.$orn)||(("$orn" in a.data)&&a.data.$orn)
}return b
}});
$jit.ST.Label={};
$jit.ST.Label.Native=new B({Implements:N.Label.Native,renderLabel:function(f,h,g){var b=f.getCtx(),d=h.pos.getc(true),a=h.getData("width"),c=h.getData("height"),e=this.viz.fx.getAlignedPos(d,a,c);
b.fillText(h.name,e.x+a/2,e.y+c/2)
}});
$jit.ST.Label.DOM=new B({Implements:N.Label.DOM,placeLabel:function(a,h,n){var r=h.pos.getc(true),b=this.viz.config,f=b.Node,k=this.viz.canvas,q=h.getData("width"),d=h.getData("height"),i=k.getSize(),m,c;
var s=k.translateOffsetX,g=k.translateOffsetY,o=k.scaleOffsetX,p=k.scaleOffsetY,j=r.x*o+s,l=r.y*p+g;
if(f.align=="center"){m={x:Math.round(j-q/2+i.width/2),y:Math.round(l-d/2+i.height/2)}
}else{if(f.align=="left"){c=b.orientation;
if(c=="bottom"||c=="top"){m={x:Math.round(j-q/2+i.width/2),y:Math.round(l+i.height/2)}
}else{m={x:Math.round(j+i.width/2),y:Math.round(l-d/2+i.height/2)}
}}else{if(f.align=="right"){c=b.orientation;
if(c=="bottom"||c=="top"){m={x:Math.round(j-q/2+i.width/2),y:Math.round(l-d+i.height/2)}
}else{m={x:Math.round(j-q+i.width/2),y:Math.round(l-d/2+i.height/2)}
}}else{throw"align: not implemented"
}}}var e=a.style;
e.left=m.x+"px";
e.top=m.y+"px";
e.display=this.fitsInCanvas(m,k)?"":"none";
n.onPlaceLabel(a,h)
}});
$jit.ST.Label.SVG=new B({Implements:[$jit.ST.Label.DOM,N.Label.SVG],initialize:function(a){this.viz=a
}});
$jit.ST.Label.HTML=new B({Implements:[$jit.ST.Label.DOM,N.Label.HTML],initialize:function(a){this.viz=a
}});
$jit.ST.Plot.NodeTypes=new B({none:{render:P.empty,contains:P.lambda(false)},circle:{render:function(b,c){var d=b.getData("dim"),a=this.getAlignedPos(b.pos.getc(true),d,d),e=d/2;
this.nodeHelper.circle.render("fill",{x:a.x+e,y:a.y+e},e,c)
},contains:function(c,b){var e=c.getData("dim"),d=this.getAlignedPos(c.pos.getc(true),e,e),a=e/2;
this.nodeHelper.circle.contains({x:d.x+a,y:d.y+a},b,a)
}},square:{render:function(b,c){var d=b.getData("dim"),e=d/2,a=this.getAlignedPos(b.pos.getc(true),d,d);
this.nodeHelper.square.render("fill",{x:a.x+e,y:a.y+e},e,c)
},contains:function(c,b){var e=c.getData("dim"),d=this.getAlignedPos(c.pos.getc(true),e,e),a=e/2;
this.nodeHelper.square.contains({x:d.x+a,y:d.y+a},b,a)
}},ellipse:{render:function(d,b){var e=d.getData("width"),c=d.getData("height"),a=this.getAlignedPos(d.pos.getc(true),e,c);
this.nodeHelper.ellipse.render("fill",{x:a.x+e/2,y:a.y+c/2},e,c,b)
},contains:function(e,b){var a=e.getData("width"),c=e.getData("height"),d=this.getAlignedPos(e.pos.getc(true),a,c);
this.nodeHelper.ellipse.contains({x:d.x+a/2,y:d.y+c/2},b,a,c)
}},rectangle:{render:function(d,b){var e=d.getData("width"),c=d.getData("height"),a=this.getAlignedPos(d.pos.getc(true),e,c);
this.nodeHelper.rectangle.render("fill",{x:a.x+e/2,y:a.y+c/2},e,c,b)
},contains:function(e,b){var a=e.getData("width"),c=e.getData("height"),d=this.getAlignedPos(e.pos.getc(true),a,c);
this.nodeHelper.rectangle.contains({x:d.x+a/2,y:d.y+c/2},b,a,c)
}}});
$jit.ST.Plot.EdgeTypes=new B({none:P.empty,line:{render:function(b,f){var h=this.getOrientation(b),a=b.nodeFrom,g=b.nodeTo,c=a._depth<g._depth,d=this.viz.geom.getEdge(c?a:g,"begin",h),e=this.viz.geom.getEdge(c?g:a,"end",h);
this.edgeHelper.line.render(d,e,f)
},contains:function(b,d){var h=this.getOrientation(b),f=b.nodeFrom,a=b.nodeTo,c=f._depth<a._depth,e=this.viz.geom.getEdge(c?f:a,"begin",h),g=this.viz.geom.getEdge(c?a:f,"end",h);
return this.edgeHelper.line.contains(e,g,d,this.edge.epsilon)
}},arrow:{render:function(b,g){var c=this.getOrientation(b),f=b.nodeFrom,h=b.nodeTo,d=b.getData("dim"),j=this.viz.geom.getEdge(f,"begin",c),i=this.viz.geom.getEdge(h,"end",c),a=b.data.$direction,e=(a&&a.length>1&&a[0]!=f.id);
this.edgeHelper.arrow.render(j,i,d,e,g)
},contains:function(b,d){var h=this.getOrientation(b),f=b.nodeFrom,a=b.nodeTo,c=f._depth<a._depth,e=this.viz.geom.getEdge(c?f:a,"begin",h),g=this.viz.geom.getEdge(c?a:f,"end",h);
return this.edgeHelper.arrow.contains(e,g,d,this.edge.epsilon)
}},"quadratic:begin":{render:function(b,h){var c=this.getOrientation(b);
var d=b.nodeFrom,a=b.nodeTo,i=d._depth<a._depth,g=this.viz.geom.getEdge(i?d:a,"begin",c),f=this.viz.geom.getEdge(i?a:d,"end",c),e=b.getData("dim"),j=h.getCtx();
j.beginPath();
j.moveTo(g.x,g.y);
switch(c){case"left":j.quadraticCurveTo(g.x+e,g.y,f.x,f.y);
break;
case"right":j.quadraticCurveTo(g.x-e,g.y,f.x,f.y);
break;
case"top":j.quadraticCurveTo(g.x,g.y+e,f.x,f.y);
break;
case"bottom":j.quadraticCurveTo(g.x,g.y-e,f.x,f.y);
break
}j.stroke()
}},"quadratic:end":{render:function(b,h){var c=this.getOrientation(b);
var d=b.nodeFrom,a=b.nodeTo,i=d._depth<a._depth,g=this.viz.geom.getEdge(i?d:a,"begin",c),f=this.viz.geom.getEdge(i?a:d,"end",c),e=b.getData("dim"),j=h.getCtx();
j.beginPath();
j.moveTo(g.x,g.y);
switch(c){case"left":j.quadraticCurveTo(f.x-e,f.y,f.x,f.y);
break;
case"right":j.quadraticCurveTo(f.x+e,f.y,f.x,f.y);
break;
case"top":j.quadraticCurveTo(f.x,f.y-e,f.x,f.y);
break;
case"bottom":j.quadraticCurveTo(f.x,f.y+e,f.x,f.y);
break
}j.stroke()
}},bezier:{render:function(b,h){var c=this.getOrientation(b),d=b.nodeFrom,a=b.nodeTo,i=d._depth<a._depth,g=this.viz.geom.getEdge(i?d:a,"begin",c),f=this.viz.geom.getEdge(i?a:d,"end",c),e=b.getData("dim"),j=h.getCtx();
j.beginPath();
j.moveTo(g.x,g.y);
switch(c){case"left":j.bezierCurveTo(g.x+e,g.y,f.x-e,f.y,f.x,f.y);
break;
case"right":j.bezierCurveTo(g.x-e,g.y,f.x+e,f.y,f.x,f.y);
break;
case"top":j.bezierCurveTo(g.x,g.y+e,f.x,f.y-e,f.x,f.y);
break;
case"bottom":j.bezierCurveTo(g.x,g.y-e,f.x,f.y+e,f.x,f.y);
break
}j.stroke()
}}});
$jit.ST.Plot.NodeTypes.implement({"areachart-stacked":{render:function(d,am){var f=d.pos.getc(true),aw=d.getData("width"),at=d.getData("height"),v=this.getAlignedPos(f,aw,at),ar=v.x,au=v.y,o=d.getData("stringArray"),ai=d.getData("dimArray"),aq=d.getData("valueArray"),an=P.reduce(aq,function(T,S){return T+S[0]
},0),ap=P.reduce(aq,function(T,S){return T+S[1]
},0),r=d.getData("colorArray"),ao=r.length,b=d.getData("config"),q=d.getData("gradient"),s=b.showLabels,m=b.showAggregates,al=b.Label,g=d.getData("prev");
var n=am.getCtx(),t=d.getData("border");
if(r&&ai&&o){for(var u=0,aj=ai.length,p=0,ak=0,c=0;
u<aj;
u++){n.fillStyle=n.strokeStyle=r[u%ao];
n.save();
if(q&&(ai[u][0]>0||ai[u][1]>0)){var i=p+ai[u][0],k=ak+ai[u][1],ah=Math.atan((k-i)/aw),a=55;
var e=n.createLinearGradient(ar+aw/2,au-(i+k)/2,ar+aw/2+a*Math.sin(ah),au-(i+k)/2+a*Math.cos(ah));
var j=P.rgbToHex(P.map(P.hexToRgb(r[u%ao].slice(1)),function(S){return(S*0.85)>>0
}));
e.addColorStop(0,r[u%ao]);
e.addColorStop(1,j);
n.fillStyle=e
}n.beginPath();
n.moveTo(ar,au-p);
n.lineTo(ar+aw,au-ak);
n.lineTo(ar+aw,au-ak-ai[u][1]);
n.lineTo(ar,au-p-ai[u][0]);
n.lineTo(ar,au-p);
n.fill();
n.restore();
if(t){var h=t.name==o[u];
var av=h?0.7:0.8;
var j=P.rgbToHex(P.map(P.hexToRgb(r[u%ao].slice(1)),function(S){return(S*av)>>0
}));
n.strokeStyle=j;
n.lineWidth=h?4:1;
n.save();
n.beginPath();
if(t.index===0){n.moveTo(ar,au-p);
n.lineTo(ar,au-p-ai[u][0])
}else{n.moveTo(ar+aw,au-ak);
n.lineTo(ar+aw,au-ak-ai[u][1])
}n.stroke();
n.restore()
}p+=(ai[u][0]||0);
ak+=(ai[u][1]||0);
if(ai[u][0]>0){c+=(aq[u][0]||0)
}}if(g&&al.type=="Native"){n.save();
n.beginPath();
n.fillStyle=n.strokeStyle=al.color;
n.font=al.style+" "+al.size+"px "+al.family;
n.textAlign="center";
n.textBaseline="middle";
var l=m(d.name,an,ap,d,c);
if(l!==false){n.fillText(l!==true?l:c,ar,au-p-b.labelOffset-al.size/2,aw)
}if(s(d.name,an,ap,d)){n.fillText(d.name,ar,au+al.size/2+b.labelOffset)
}n.restore()
}}},contains:function(b,q){var k=b.pos.getc(true),h=b.getData("width"),f=b.getData("height"),g=this.getAlignedPos(k,h,f),i=g.x,j=g.y,e=b.getData("dimArray"),m=q.x-i;
if(q.x<i||q.x>i+h||q.y>j||q.y<j-f){return false
}for(var p=0,a=e.length,l=j,d=j;
p<a;
p++){var c=e[p];
l-=c[0];
d-=c[1];
var o=l+(d-l)*m/h;
if(q.y>=o){var n=+(m>h/2);
return{name:b.getData("stringArray")[p],color:b.getData("colorArray")[p],value:b.getData("valueArray")[p][n],index:n}
}}return false
}}});
$jit.AreaChart=new B({st:null,colors:["#416D9C","#70A35E","#EBB056","#C74243","#83548B","#909291","#557EAA"],selected:{},busy:false,initialize:function(e){this.controller=this.config=P.merge(E("Canvas","Margin","Label","AreaChart"),{Label:{type:"Native"}},e);
var d=this.config.showLabels,b=P.type(d),a=this.config.showAggregates,c=P.type(a);
this.config.showLabels=b=="function"?d:P.lambda(d);
this.config.showAggregates=c=="function"?a:P.lambda(a);
this.initializeViz()
},initializeViz:function(){var b=this.config,g=this,c=b.type.split(":")[0],a={};
var e=new $jit.ST({injectInto:b.injectInto,width:b.width,height:b.height,orientation:"bottom",levelDistance:0,siblingOffset:0,subtreeOffset:0,withLabels:b.Label.type!="Native",useCanvas:b.useCanvas,Label:{type:b.Label.type},Node:{overridable:true,type:"areachart-"+c,align:"left",width:1,height:1},Edge:{type:"none"},Tips:{enable:b.Tips.enable,type:"Native",force:true,onShow:function(h,i,k){var j=k;
b.Tips.onShow(h,j,i)
}},Events:{enable:true,type:"Native",onClick:function(i,h,k){if(!b.filterOnClick&&!b.Events.enable){return
}var j=h.getContains();
if(j){b.filterOnClick&&g.filter(j.name)
}b.Events.enable&&b.Events.onClick(j,h,k)
},onRightClick:function(i,h,j){if(!b.restoreOnRightClick){return
}g.restore()
},onMouseMove:function(i,h,k){if(!b.selectOnHover){return
}if(i){var j=h.getContains();
g.select(i.id,j.name,j.index)
}else{g.select(false,false,false)
}}},onCreateLabel:function(o,r){var i=b.Label,j=r.getData("valueArray"),q=P.reduce(j,function(v,u){return v+u[0]
},0),l=P.reduce(j,function(v,u){return v+u[1]
},0);
if(r.getData("prev")){var m={wrapper:document.createElement("div"),aggregate:document.createElement("div"),label:document.createElement("div")};
var h=m.wrapper,k=m.label,t=m.aggregate,s=h.style,n=k.style,p=t.style;
a[r.id]=m;
h.appendChild(k);
h.appendChild(t);
if(!b.showLabels(r.name,q,l,r)){k.style.display="none"
}if(!b.showAggregates(r.name,q,l,r)){t.style.display="none"
}s.position="relative";
s.overflow="visible";
s.fontSize=i.size+"px";
s.fontFamily=i.family;
s.color=i.color;
s.textAlign="center";
p.position=n.position="absolute";
o.style.width=r.getData("width")+"px";
o.style.height=r.getData("height")+"px";
k.innerHTML=r.name;
o.appendChild(h)
}},onPlaceLabel:function(h,n){if(!n.getData("prev")){return
}var j=a[n.id],Z=j.wrapper.style,aa=j.label.style,o=j.aggregate.style,q=n.getData("width"),s=n.getData("height"),t=n.getData("dimArray"),X=n.getData("valueArray"),r=P.reduce(X,function(S,T){return S+T[0]
},0),v=P.reduce(X,function(S,T){return S+T[1]
},0),u=parseInt(Z.fontSize,10),p=h.style;
if(t&&X){if(b.showLabels(n.name,r,v,n)){aa.display=""
}else{aa.display="none"
}var Y=b.showAggregates(n.name,r,v,n);
if(Y!==false){o.display=""
}else{o.display="none"
}Z.width=o.width=aa.width=h.style.width=q+"px";
o.left=aa.left=-q/2+"px";
for(var k=0,m=X.length,l=0,i=0;
k<m;
k++){if(t[k][0]>0){l+=X[k][0];
i+=t[k][0]
}}o.top=(-u-b.labelOffset)+"px";
aa.top=(b.labelOffset+i)+"px";
h.style.top=parseInt(h.style.top,10)-i+"px";
h.style.height=Z.height=i+"px";
j.aggregate.innerHTML=Y!==true?Y:l
}}});
var f=e.canvas.getSize(),d=b.Margin;
e.config.offsetY=-f.height/2+d.bottom+(b.showLabels&&(b.labelOffset+b.Label.size));
e.config.offsetX=(d.right-d.left)/2;
this.delegate=e;
this.canvas=this.delegate.canvas
},loadJSON:function(d){var i=P.time(),t=[],e=this.delegate,a=P.splat(d.label),k=P.splat(d.color||this.colors),c=this.config,l=!!c.type.split(":")[1],h=c.animate;
for(var g=0,j=d.values,m=j.length;
g<m-1;
g++){var b=j[g],q=j[g-1],p=j[g+1];
var f=P.splat(j[g].values),n=P.splat(j[g+1].values);
var u=P.zip(f,n);
var r=0,s=0;
t.push({id:i+b.label,name:b.label,data:{value:u,"$valueArray":u,"$colorArray":k,"$stringArray":a,"$next":p.label,"$prev":q?q.label:false,"$config":c,"$gradient":l},children:[]})
}var o={id:i+"$root",name:"",data:{"$type":"none","$width":1,"$height":1},children:t};
e.loadJSON(o);
this.normalizeDims();
e.compute();
e.select(e.root);
if(h){e.fx.animate({modes:["node-property:height:dimArray"],duration:1500})
}},updateJSON:function(i,g){if(this.busy){return
}this.busy=true;
var a=this.delegate,j=a.graph,d=i.label&&P.splat(i.label),k=i.values,h=this.config.animate,b=this,c={};
for(var e=0,f=k.length;
e<f;
e++){c[k[e].label]=k[e]
}j.eachNode(function(l){var p=c[l.name],o=l.getData("stringArray"),m=l.getData("valueArray"),n=l.getData("next");
if(p){p.values=P.splat(p.values);
P.each(m,function(r,q){r[0]=p.values[q];
if(d){o[q]=d[q]
}});
l.setData("valueArray",m)
}if(n){p=c[n];
if(p){P.each(m,function(r,q){r[1]=p.values[q]
})
}}});
this.normalizeDims();
a.compute();
a.select(a.root);
if(h){a.fx.animate({modes:["node-property:height:dimArray"],duration:1500,onComplete:function(){b.busy=false;
g&&g.onComplete()
}})
}},filter:function(d,b){if(this.busy){return
}this.busy=true;
if(this.config.Tips.enable){this.delegate.tips.hide()
}this.select(false,false,false);
var a=P.splat(d);
var c=this.delegate.graph.getNode(this.delegate.root);
var e=this;
this.normalizeDims();
c.eachAdjacency(function(i){var f=i.nodeTo,g=f.getData("dimArray","end"),h=f.getData("stringArray");
f.setData("dimArray",P.map(g,function(j,k){return(P.indexOf(a,h[k])>-1)?j:[0,0]
}),"end")
});
this.delegate.fx.animate({modes:["node-property:dimArray"],duration:1500,onComplete:function(){e.busy=false;
b&&b.onComplete()
}})
},restore:function(a){if(this.busy){return
}this.busy=true;
if(this.config.Tips.enable){this.delegate.tips.hide()
}this.select(false,false,false);
this.normalizeDims();
var b=this;
this.delegate.fx.animate({modes:["node-property:height:dimArray"],duration:1500,onComplete:function(){b.busy=false;
a&&a.onComplete()
}})
},select:function(f,b,c){if(!this.config.selectOnHover){return
}var e=this.selected;
if(e.id!=f||e.name!=b||e.index!=c){e.id=f;
e.name=b;
e.index=c;
this.delegate.graph.eachNode(function(g){g.setData("border",false)
});
if(f){var a=this.delegate.graph.getNode(f);
a.setData("border",e);
var d=c===0?"prev":"next";
d=a.getData(d);
if(d){a=this.delegate.graph.getByName(d);
if(a){a.setData("border",{name:b,index:1-c})
}}}this.delegate.plot()
}},getLegend:function(){var d={};
var c;
this.delegate.graph.getNode(this.delegate.root).eachAdjacency(function(e){c=e.nodeTo
});
var a=c.getData("colorArray"),b=a.length;
P.each(c.getData("stringArray"),function(f,e){d[f]=a[e%b]
});
return d
},getMaxValue:function(){var a=0;
this.delegate.graph.eachNode(function(f){var e=f.getData("valueArray"),c=0,b=0;
P.each(e,function(g){c+=+g[0];
b+=+g[1]
});
var d=b>c?b:c;
a=a>d?a:d
});
return a
},normalizeDims:function(){var b=this.delegate.graph.getNode(this.delegate.root),e=0;
b.eachAdjacency(function(){e++
});
var c=this.getMaxValue()||1,i=this.delegate.canvas.getSize(),f=this.config,d=f.Margin,a=f.labelOffset+f.Label.size,h=(i.width-(d.left+d.right))/e,g=f.animate,j=i.height-(d.top+d.bottom)-(f.showAggregates&&a)-(f.showLabels&&a);
this.delegate.graph.eachNode(function(k){var n=0,l=0,p=[];
P.each(k.getData("valueArray"),function(q){n+=+q[0];
l+=+q[1];
p.push([0,0])
});
var m=l>n?l:n;
k.setData("width",h);
if(g){k.setData("height",m*j/c,"end");
k.setData("dimArray",P.map(k.getData("valueArray"),function(q){return[q[0]*j/c,q[1]*j/c]
}),"end");
var o=k.getData("dimArray");
if(!o){k.setData("dimArray",p)
}}else{k.setData("height",m*j/c);
k.setData("dimArray",P.map(k.getData("valueArray"),function(q){return[q[0]*j/c,q[1]*j/c]
}))
}})
}});
E.BarChart={$extend:true,animate:true,type:"stacked",labelOffset:3,barsOffset:0,hoveredColor:"#9fd4ff",orientation:"horizontal",showAggregates:true,showLabels:true,Tips:{enable:false,onShow:P.empty,onHide:P.empty},Events:{enable:false,onClick:P.empty}};
$jit.ST.Plot.NodeTypes.implement({"barchart-stacked":{render:function(i,ae){var t=i.pos.getc(true),j=i.getData("width"),l=i.getData("height"),n=this.getAlignedPos(t,j,l),o=n.x,p=n.y,m=i.getData("dimArray"),ab=i.getData("valueArray"),ac=i.getData("colorArray"),af=ac.length,b=i.getData("stringArray");
var g=ae.getCtx(),u={},f=i.getData("border"),q=i.getData("gradient"),ah=i.getData("config"),ag=ah.orientation=="horizontal",ad=ah.showAggregates,k=ah.showLabels,r=ah.Label;
if(ac&&m&&b){for(var c=0,h=m.length,d=0,v=0;
c<h;
c++){g.fillStyle=g.strokeStyle=ac[c%af];
if(q){var a;
if(ag){a=g.createLinearGradient(o+d+m[c]/2,p,o+d+m[c]/2,p+l)
}else{a=g.createLinearGradient(o,p-d-m[c]/2,o+j,p-d-m[c]/2)
}var e=P.rgbToHex(P.map(P.hexToRgb(ac[c%af].slice(1)),function(S){return(S*0.5)>>0
}));
a.addColorStop(0,e);
a.addColorStop(0.5,ac[c%af]);
a.addColorStop(1,e);
g.fillStyle=a
}if(ag){g.fillRect(o+d,p,m[c],l)
}else{g.fillRect(o,p-d-m[c],j,m[c])
}if(f&&f.name==b[c]){u.acum=d;
u.dimValue=m[c]
}d+=(m[c]||0);
v+=(ab[c]||0)
}if(f){g.save();
g.lineWidth=2;
g.strokeStyle=f.color;
if(ag){g.strokeRect(o+u.acum+1,p+1,u.dimValue-2,l-2)
}else{g.strokeRect(o+1,p-u.acum-u.dimValue+1,j-2,u.dimValue-2)
}g.restore()
}if(r.type=="Native"){g.save();
g.fillStyle=g.strokeStyle=r.color;
g.font=r.style+" "+r.size+"px "+r.family;
g.textBaseline="middle";
var s=ad(i.name,v,i);
if(s!==false){s=s!==true?s:v;
if(ag){g.textAlign="right";
g.fillText(s,o+d-ah.labelOffset,p+l/2)
}else{g.textAlign="center";
g.fillText(s,o+j/2,p-l-r.size/2-ah.labelOffset)
}}if(k(i.name,v,i)){if(ag){g.textAlign="center";
g.translate(o-ah.labelOffset-r.size/2,p+l/2);
g.rotate(Math.PI/2);
g.fillText(i.name,0,0)
}else{g.textAlign="center";
g.fillText(i.name,o+j/2,p+r.size/2+ah.labelOffset)
}}g.restore()
}}},contains:function(a,p){var m=a.pos.getc(true),d=a.getData("width"),f=a.getData("height"),g=this.getAlignedPos(m,d,f),i=g.x,k=g.y,e=a.getData("dimArray"),c=a.getData("config"),h=p.x-i,l=c.orientation=="horizontal";
if(l){if(p.x<i||p.x>i+d||p.y>k+f||p.y<k){return false
}}else{if(p.x<i||p.x>i+d||p.y>k||p.y<k-f){return false
}}for(var o=0,q=e.length,j=(l?i:k);
o<q;
o++){var b=e[o];
if(l){j+=b;
var n=j;
if(p.x<=n){return{name:a.getData("stringArray")[o],color:a.getData("colorArray")[o],value:a.getData("valueArray")[o],label:a.name}
}}else{j-=b;
var n=j;
if(p.y>=n){return{name:a.getData("stringArray")[o],color:a.getData("colorArray")[o],value:a.getData("valueArray")[o],label:a.name}
}}}return false
}},"barchart-grouped":{render:function(h,ag){var s=h.pos.getc(true),i=h.getData("width"),k=h.getData("height"),m=this.getAlignedPos(s,i,k),n=m.x,o=m.y,l=h.getData("dimArray"),v=h.getData("valueArray"),b=v.length,ad=h.getData("colorArray"),ah=ad.length,al=h.getData("stringArray");
var f=ag.getCtx(),u={},e=h.getData("border"),q=h.getData("gradient"),aj=h.getData("config"),ai=aj.orientation=="horizontal",ae=aj.showAggregates,j=aj.showLabels,p=aj.Label,af=(ai?k:i)/b;
if(ad&&l&&al){for(var a=0,g=b,c=0,t=0;
a<g;
a++){f.fillStyle=f.strokeStyle=ad[a%ah];
if(q){var ak;
if(ai){ak=f.createLinearGradient(n+l[a]/2,o+af*a,n+l[a]/2,o+af*(a+1))
}else{ak=f.createLinearGradient(n+af*a,o-l[a]/2,n+af*(a+1),o-l[a]/2)
}var d=P.rgbToHex(P.map(P.hexToRgb(ad[a%ah].slice(1)),function(S){return(S*0.5)>>0
}));
ak.addColorStop(0,d);
ak.addColorStop(0.5,ad[a%ah]);
ak.addColorStop(1,d);
f.fillStyle=ak
}if(ai){f.fillRect(n,o+af*a,l[a],af)
}else{f.fillRect(n+af*a,o-l[a],af,l[a])
}if(e&&e.name==al[a]){u.acum=af*a;
u.dimValue=l[a]
}c+=(l[a]||0);
t+=(v[a]||0)
}if(e){f.save();
f.lineWidth=2;
f.strokeStyle=e.color;
if(ai){f.strokeRect(n+1,o+u.acum+1,u.dimValue-2,af-2)
}else{f.strokeRect(n+u.acum+1,o-u.dimValue+1,af-2,u.dimValue-2)
}f.restore()
}if(p.type=="Native"){f.save();
f.fillStyle=f.strokeStyle=p.color;
f.font=p.style+" "+p.size+"px "+p.family;
f.textBaseline="middle";
var r=ae(h.name,t,h);
if(r!==false){r=r!==true?r:t;
if(ai){f.textAlign="right";
f.fillText(r,n+Math.max.apply(null,l)-aj.labelOffset,o+k/2)
}else{f.textAlign="center";
f.fillText(r,n+i/2,o-Math.max.apply(null,l)-p.size/2-aj.labelOffset)
}}if(j(h.name,t,h)){if(ai){f.textAlign="center";
f.translate(n-aj.labelOffset-p.size/2,o+k/2);
f.rotate(Math.PI/2);
f.fillText(h.name,0,0)
}else{f.textAlign="center";
f.fillText(h.name,n+i/2,o+p.size/2+aj.labelOffset)
}}f.restore()
}}},contains:function(h,m){var q=h.pos.getc(true),i=h.getData("width"),j=h.getData("height"),n=this.getAlignedPos(q,i,j),o=n.x,p=n.y,l=h.getData("dimArray"),d=l.length,a=h.getData("config"),r=m.x-o,k=a.orientation=="horizontal",g=(k?j:i)/d;
if(k){if(m.x<o||m.x>o+i||m.y>p+j||m.y<p){return false
}}else{if(m.x<o||m.x>o+i||m.y>p||m.y<p-j){return false
}}for(var e=0,f=l.length;
e<f;
e++){var b=l[e];
if(k){var c=p+g*e;
if(m.x<=o+b&&m.y>=c&&m.y<=c+g){return{name:h.getData("stringArray")[e],color:h.getData("colorArray")[e],value:h.getData("valueArray")[e],label:h.name}
}}else{var c=o+g*e;
if(m.x>=c&&m.x<=c+g&&m.y>=p-b){return{name:h.getData("stringArray")[e],color:h.getData("colorArray")[e],value:h.getData("valueArray")[e],label:h.name}
}}}return false
}}});
$jit.BarChart=new B({st:null,colors:["#416D9C","#70A35E","#EBB056","#C74243","#83548B","#909291","#557EAA"],selected:{},busy:false,initialize:function(e){this.controller=this.config=P.merge(E("Canvas","Margin","Label","BarChart"),{Label:{type:"Native"}},e);
var d=this.config.showLabels,b=P.type(d),a=this.config.showAggregates,c=P.type(a);
this.config.showLabels=b=="function"?d:P.lambda(d);
this.config.showAggregates=c=="function"?a:P.lambda(a);
this.initializeViz()
},initializeViz:function(){var b=this.config,h=this;
var c=b.type.split(":")[0],d=b.orientation=="horizontal",a={};
var f=new $jit.ST({injectInto:b.injectInto,width:b.width,height:b.height,orientation:d?"left":"bottom",levelDistance:0,siblingOffset:b.barsOffset,subtreeOffset:0,withLabels:b.Label.type!="Native",useCanvas:b.useCanvas,Label:{type:b.Label.type},Node:{overridable:true,type:"barchart-"+c,align:"left",width:1,height:1},Edge:{type:"none"},Tips:{enable:b.Tips.enable,type:"Native",force:true,onShow:function(i,j,l){var k=l;
b.Tips.onShow(i,k,j)
}},Events:{enable:true,type:"Native",onClick:function(j,i,l){if(!b.Events.enable){return
}var k=i.getContains();
b.Events.onClick(k,i,l)
},onMouseMove:function(j,i,l){if(!b.hoveredColor){return
}if(j){var k=i.getContains();
h.select(j.id,k.name,k.index)
}else{h.select(false,false,false)
}}},onCreateLabel:function(o,q){var i=b.Label,k=q.getData("valueArray"),l=P.reduce(k,function(v,u){return v+u
},0);
var m={wrapper:document.createElement("div"),aggregate:document.createElement("div"),label:document.createElement("div")};
var t=m.wrapper,j=m.label,s=m.aggregate,r=t.style,n=j.style,p=s.style;
a[q.id]=m;
t.appendChild(j);
t.appendChild(s);
if(!b.showLabels(q.name,l,q)){n.display="none"
}if(!b.showAggregates(q.name,l,q)){p.display="none"
}r.position="relative";
r.overflow="visible";
r.fontSize=i.size+"px";
r.fontFamily=i.family;
r.color=i.color;
r.textAlign="center";
p.position=n.position="absolute";
o.style.width=q.getData("width")+"px";
o.style.height=q.getData("height")+"px";
p.left=n.left="0px";
j.innerHTML=q.name;
o.appendChild(t)
},onPlaceLabel:function(j,o){if(!a[o.id]){return
}var k=a[o.id],Y=k.wrapper.style,aa=k.label.style,p=k.aggregate.style,i=b.type.split(":")[0]=="grouped",Z=b.orientation=="horizontal",t=o.getData("dimArray"),v=o.getData("valueArray"),r=(i&&Z)?Math.max.apply(null,t):o.getData("width"),s=(i&&!Z)?Math.max.apply(null,t):o.getData("height"),u=parseInt(Y.fontSize,10),q=j.style;
if(t&&v){Y.width=p.width=aa.width=j.style.width=r+"px";
for(var l=0,n=v.length,m=0;
l<n;
l++){if(t[l]>0){m+=v[l]
}}if(b.showLabels(o.name,m,o)){aa.display=""
}else{aa.display="none"
}var X=b.showAggregates(o.name,m,o);
if(X!==false){p.display=""
}else{p.display="none"
}if(b.orientation=="horizontal"){p.textAlign="right";
aa.textAlign="left";
aa.textIndex=p.textIndent=b.labelOffset+"px";
p.top=aa.top=(s-u)/2+"px";
j.style.height=Y.height=s+"px"
}else{p.top=(-u-b.labelOffset)+"px";
aa.top=(b.labelOffset+s)+"px";
j.style.top=parseInt(j.style.top,10)-s+"px";
j.style.height=Y.height=s+"px"
}k.aggregate.innerHTML=X!==true?X:m
}}});
var g=f.canvas.getSize(),e=b.Margin;
if(d){f.config.offsetX=g.width/2-e.left-(b.showLabels&&(b.labelOffset+b.Label.size));
f.config.offsetY=(e.bottom-e.top)/2
}else{f.config.offsetY=-g.height/2+e.bottom+(b.showLabels&&(b.labelOffset+b.Label.size));
f.config.offsetX=(e.right-e.left)/2
}this.delegate=f;
this.canvas=this.delegate.canvas
},loadJSON:function(d){if(this.busy){return
}this.busy=true;
var j=P.time(),p=[],f=this.delegate,a=P.splat(d.label),l=P.splat(d.color||this.colors),c=this.config,k=!!c.type.split(":")[1],e=c.animate,g=c.orientation=="horizontal",r=this;
for(var h=0,i=d.values,n=i.length;
h<n;
h++){var b=i[h];
var q=P.splat(i[h].values);
var m=0;
p.push({id:j+b.label,name:b.label,data:{value:q,"$valueArray":q,"$colorArray":l,"$stringArray":a,"$gradient":k,"$config":c},children:[]})
}var o={id:j+"$root",name:"",data:{"$type":"none","$width":1,"$height":1},children:p};
f.loadJSON(o);
this.normalizeDims();
f.compute();
f.select(f.root);
if(e){if(g){f.fx.animate({modes:["node-property:width:dimArray"],duration:1500,onComplete:function(){r.busy=false
}})
}else{f.fx.animate({modes:["node-property:height:dimArray"],duration:1500,onComplete:function(){r.busy=false
}})
}}else{this.busy=false
}},updateJSON:function(h,f){if(this.busy){return
}this.busy=true;
this.select(false,false,false);
var e=this.delegate;
var g=e.graph;
var b=h.values;
var c=this.config.animate;
var a=this;
var d=this.config.orientation=="horizontal";
P.each(b,function(j){var i=g.getByName(j.label);
if(i){i.setData("valueArray",P.splat(j.values));
if(h.label){i.setData("stringArray",P.splat(h.label))
}}});
this.normalizeDims();
e.compute();
e.select(e.root);
if(c){if(d){e.fx.animate({modes:["node-property:width:dimArray"],duration:1500,onComplete:function(){a.busy=false;
f&&f.onComplete()
}})
}else{e.fx.animate({modes:["node-property:height:dimArray"],duration:1500,onComplete:function(){a.busy=false;
f&&f.onComplete()
}})
}}},select:function(c,b){if(!this.config.hoveredColor){return
}var a=this.selected;
if(a.id!=c||a.name!=b){a.id=c;
a.name=b;
a.color=this.config.hoveredColor;
this.delegate.graph.eachNode(function(d){if(c==d.id){d.setData("border",a)
}else{d.setData("border",false)
}});
this.delegate.plot()
}},getLegend:function(){var d={};
var c;
this.delegate.graph.getNode(this.delegate.root).eachAdjacency(function(e){c=e.nodeTo
});
var a=c.getData("colorArray"),b=a.length;
P.each(c.getData("stringArray"),function(f,e){d[f]=a[e%b]
});
return d
},getMaxValue:function(){var a=0,b=this.config.type.split(":")[0]=="stacked";
this.delegate.graph.eachNode(function(c){var e=c.getData("valueArray"),d=0;
if(!e){return
}if(b){P.each(e,function(f){d+=+f
})
}else{d=Math.max.apply(null,e)
}a=a>d?a:d
});
return a
},setBarType:function(a){this.config.type=a;
this.delegate.config.Node.type="barchart-"+a.split(":")[0]
},normalizeDims:function(){var l=this.delegate.graph.getNode(this.delegate.root),c=0;
l.eachAdjacency(function(){c++
});
var a=this.getMaxValue()||1,h=this.delegate.canvas.getSize(),e=this.config,b=e.Margin,k=b.left+b.right,d=b.top+b.bottom,g=e.orientation=="horizontal",j=(h[g?"height":"width"]-(g?d:k)-(c-1)*e.barsOffset)/c,f=e.animate,i=h[g?"width":"height"]-(g?k:d)-(!g&&e.showAggregates&&(e.Label.size+e.labelOffset))-(e.showLabels&&(e.Label.size+e.labelOffset)),m=g?"height":"width",n=g?"width":"height";
this.delegate.graph.eachNode(function(q){var r=0,p=[];
P.each(q.getData("valueArray"),function(s){r+=+s;
p.push(0)
});
q.setData(m,j);
if(f){q.setData(n,r*i/a,"end");
q.setData("dimArray",P.map(q.getData("valueArray"),function(s){return s*i/a
}),"end");
var o=q.getData("dimArray");
if(!o){q.setData("dimArray",p)
}}else{q.setData(n,r*i/a);
q.setData("dimArray",P.map(q.getData("valueArray"),function(s){return s*i/a
}))
}})
}});
E.PieChart={$extend:true,animate:true,offset:25,sliceOffset:0,labelOffset:3,type:"stacked",hoveredColor:"#9fd4ff",Events:{enable:false,onClick:P.empty},Tips:{enable:false,onShow:P.empty,onHide:P.empty},showLabels:true,resizeLabels:false,updateHeights:false};
L.Radial=new B({compute:function(a){var c=P.splat(a||["current","start","end"]);
M.compute(this.graph,c,this.config);
this.graph.computeLevels(this.root,0,"ignore");
var b=this.createLevelDistanceFunc();
this.computeAngularWidths(c);
this.computePositions(c,b)
},computePositions:function(a,d){var i=a;
var j=this.graph;
var c=j.getNode(this.root);
var b=this.parent;
var h=this.config;
for(var f=0,g=i.length;
f<g;
f++){var e=i[f];
c.setPos(H(0,0),e);
c.setData("span",Math.PI*2,e)
}c.angleSpan={begin:0,end:2*Math.PI};
j.eachBFS(this.root,function(u){var o=u.angleSpan.end-u.angleSpan.begin;
var m=u.angleSpan.begin;
var n=d(u);
var l=0,Y=[],v={};
u.eachSubnode(function(S){l+=S._treeAngularWidth;
for(var ab=0,T=i.length;
ab<T;
ab++){var U=i[ab],aa=S.getData("dim",U);
v[U]=(U in v)?(aa>v[U]?aa:v[U]):aa
}Y.push(S)
},"ignore");
if(b&&b.id==u.id&&Y.length>0&&Y[0].dist){Y.sort(function(S,T){return(S.dist>=T.dist)-(S.dist<=T.dist)
})
}for(var s=0,q=Y.length;
s<q;
s++){var V=Y[s];
if(!V._flag){var k=V._treeAngularWidth/l*o;
var X=m+k/2;
for(var r=0,t=i.length;
r<t;
r++){var p=i[r];
V.setPos(H(X,n),p);
V.setData("span",k,p);
V.setData("dim-quotient",V.getData("dim",p)/v[p],p)
}V.angleSpan={begin:m,end:m+k};
m+=k
}}},"ignore")
},setAngularWidthForNodes:function(a){this.graph.eachBFS(this.root,function(c,b){var d=c.getData("angularWidth",a[0])||5;
c._angularWidth=d/b
},"ignore")
},setSubtreesAngularWidth:function(){var a=this;
this.graph.eachNode(function(b){a.setSubtreeAngularWidth(b)
},"ignore")
},setSubtreeAngularWidth:function(c){var d=this,a=c._angularWidth,b=0;
c.eachSubnode(function(e){d.setSubtreeAngularWidth(e);
b+=e._treeAngularWidth
},"ignore");
c._treeAngularWidth=Math.max(a,b)
},computeAngularWidths:function(a){this.setAngularWidthForNodes(a);
this.setSubtreesAngularWidth()
}});
$jit.Sunburst=new B({Implements:[O,D,L.Radial],initialize:function(b){var d=$jit.Sunburst;
var a={interpolation:"linear",levelDistance:100,Node:{type:"multipie",height:0},Edge:{type:"none"},Label:{textAlign:"start",textBaseline:"middle"}};
this.controller=this.config=P.merge(E("Canvas","Node","Edge","Fx","Tips","NodeStyles","Events","Navigation","Controller","Label"),a,b);
var c=this.config;
if(c.useCanvas){this.canvas=c.useCanvas;
this.config.labelContainer=this.canvas.id+"-label"
}else{if(c.background){c.background=P.merge({type:"Circles"},c.background)
}this.canvas=new G(this,c);
this.config.labelContainer=(typeof c.injectInto=="string"?c.injectInto:c.injectInto.id)+"-label"
}this.graphOptions={klass:Q,Node:{selected:false,exist:true,drawn:true}};
this.graph=new N(this.graphOptions,this.config.Node,this.config.Edge);
this.labels=new d.Label[c.Label.type](this);
this.fx=new d.Plot(this,d);
this.op=new d.Op(this);
this.json=null;
this.root=null;
this.rotated=null;
this.busy=false;
this.initializeExtras()
},createLevelDistanceFunc:function(){var a=this.config.levelDistance;
return function(b){return(b._depth+1)*a
}
},refresh:function(){this.compute();
this.plot()
},reposition:function(){this.compute("end")
},rotate:function(d,c,a){var b=d.getPos(a.property||"current").getp(true).theta;
this.rotated=d;
this.rotateAngle(-b,c,a)
},rotateAngle:function(f,e,b){var d=this;
var c=P.merge(this.config,b||{},{modes:["polar"]});
var a=b.property||(e==="animate"?"end":"current");
if(e==="animate"){this.fx.animation.pause()
}this.graph.eachNode(function(g){var h=g.getPos(a);
h.theta+=f;
if(h.theta<0){h.theta+=Math.PI*2
}});
if(e=="animate"){this.fx.animate(c)
}else{if(e=="replot"){this.fx.plot();
this.busy=false
}}},plot:function(){this.fx.plot()
}});
$jit.Sunburst.$extend=true;
(function(a){a.Op=new B({Implements:N.Op});
a.Plot=new B({Implements:N.Plot});
a.Label={};
a.Label.Native=new B({Implements:N.Label.Native,initialize:function(b){this.viz=b;
this.label=b.config.Label;
this.config=b.config
},renderLabel:function(c,q,o){var g=q.getData("span");
if(g<Math.PI/2&&Math.tan(g)*this.config.levelDistance*q._depth<10){return
}var f=c.getCtx();
var e=f.measureText(q.name);
if(q.id==this.viz.root){var h=-e.width/2,k=0,j=0;
var i=0
}else{var b=5;
var i=o.levelDistance-b;
var l=q.pos.clone();
l.rho+=b;
var d=l.getp(true);
var n=l.getc(true);
var h=n.x,k=n.y;
var p=Math.PI;
var m=(d.theta>p/2&&d.theta<3*p/2);
var j=m?d.theta+p:d.theta;
if(m){h-=Math.abs(Math.cos(d.theta)*e.width);
k+=Math.sin(d.theta)*e.width
}else{if(q.id==this.viz.root){h-=e.width/2
}}}f.save();
f.translate(h,k);
f.rotate(j);
f.fillText(q.name,0,0);
f.restore()
}});
a.Label.SVG=new B({Implements:N.Label.SVG,initialize:function(b){this.viz=b
},placeLabel:function(f,c,p){var k=c.pos.getc(true),g=this.viz,e=this.viz.canvas;
var o=e.getSize();
var d={x:Math.round(k.x+o.width/2),y:Math.round(k.y+o.height/2)};
f.setAttribute("x",d.x);
f.setAttribute("y",d.y);
var n=f.getBBox();
if(n){var i=f.getAttribute("x");
var l=f.getAttribute("y");
var h=c.pos.getp(true);
var b=Math.PI;
var m=(h.theta>b/2&&h.theta<3*b/2);
if(m){f.setAttribute("x",i-n.width);
f.setAttribute("y",l-n.height)
}else{if(c.id==g.root){f.setAttribute("x",i-n.width/2)
}}var j=m?h.theta+b:h.theta;
if(c._depth){f.setAttribute("transform","rotate("+j*360/(2*b)+" "+i+" "+l+")")
}}p.onPlaceLabel(f,c)
}});
a.Label.HTML=new B({Implements:N.Label.HTML,initialize:function(b){this.viz=b
},placeLabel:function(i,e,c){var k=e.pos.clone(),g=this.viz.canvas,j=e.getData("height"),d=((j||e._depth==0)?j:this.viz.config.levelDistance)/2,b=g.getSize();
k.rho+=d;
k=k.getc(true);
var f={x:Math.round(k.x+b.width/2),y:Math.round(k.y+b.height/2)};
var h=i.style;
h.left=f.x+"px";
h.top=f.y+"px";
h.display=this.fitsInCanvas(f,g)?"":"none";
c.onPlaceLabel(i,e)
}});
a.Plot.NodeTypes=new B({none:{render:P.empty,contains:P.lambda(false),anglecontains:function(h,d){var c=h.getData("span")/2,g=h.pos.theta;
var f=g-c,b=g+c;
if(f<0){f+=Math.PI*2
}var e=Math.atan2(d.y,d.x);
if(e<0){e+=Math.PI*2
}if(f>b){return(e>f&&e<=Math.PI*2)||e<b
}else{return e>f&&e<b
}}},pie:{render:function(c,e){var j=c.getData("span")/2,f=c.pos.theta;
var d=f-j,b=f+j;
var k=c.pos.getp(true);
var h=new Q(k.rho,d);
var g=h.getc(true);
h.theta=b;
var l=h.getc(true);
var i=e.getCtx();
i.beginPath();
i.moveTo(0,0);
i.lineTo(g.x,g.y);
i.moveTo(0,0);
i.lineTo(l.x,l.y);
i.moveTo(0,0);
i.arc(0,0,k.rho*c.getData("dim-quotient"),d,b,false);
i.fill()
},contains:function(d,f){if(this.nodeTypes.none.anglecontains.call(this,d,f)){var c=Math.sqrt(f.x*f.x+f.y*f.y);
var e=this.config.levelDistance,b=d._depth;
return(c<=e*b)
}return false
}},multipie:{render:function(b,d){var i=b.getData("height");
var p=i?i:this.config.levelDistance;
var k=b.getData("span")/2,e=b.pos.theta;
var c=e-k,n=e+k;
var l=b.pos.getp(true);
var h=new Q(l.rho,c);
var g=h.getc(true);
h.theta=n;
var m=h.getc(true);
h.rho+=p;
var j=h.getc(true);
h.theta=c;
var o=h.getc(true);
var f=d.getCtx();
f.moveTo(0,0);
f.beginPath();
f.arc(0,0,l.rho,c,n,false);
f.arc(0,0,l.rho+p,n,c,true);
f.moveTo(g.x,g.y);
f.lineTo(o.x,o.y);
f.moveTo(m.x,m.y);
f.lineTo(j.x,j.y);
f.fill();
if(b.collapsed){f.save();
f.lineWidth=2;
f.moveTo(0,0);
f.beginPath();
f.arc(0,0,l.rho+p+5,n-0.01,c+0.01,true);
f.stroke();
f.restore()
}},contains:function(c,d){if(this.nodeTypes.none.anglecontains.call(this,c,d)){var h=Math.sqrt(d.x*d.x+d.y*d.y);
var b=c.getData("height");
var g=b?b:this.config.levelDistance;
var f=this.config.levelDistance,e=c._depth;
return(h>=f*e)&&(h<=(f*e+g))
}return false
}},"gradient-multipie":{render:function(e,h){var i=h.getCtx();
var j=e.getData("height");
var d=j?j:this.config.levelDistance;
var g=i.createRadialGradient(0,0,e.getPos().rho,0,0,e.getPos().rho+d);
var b=P.hexToRgb(e.getData("color")),c=[];
P.each(b,function(k){c.push(parseInt(k*0.5,10))
});
var f=P.rgbToHex(c);
g.addColorStop(0,f);
g.addColorStop(1,e.getData("color"));
i.fillStyle=g;
this.nodeTypes.multipie.render.call(this,e,h)
},contains:function(b,c){return this.nodeTypes.multipie.contains.call(this,b,c)
}},"gradient-pie":{render:function(f,e){var c=e.getCtx();
var d=c.createRadialGradient(0,0,0,0,0,f.getPos().rho);
var h=P.hexToRgb(f.getData("color")),g=[];
P.each(h,function(i){g.push(parseInt(i*0.5,10))
});
var b=P.rgbToHex(g);
d.addColorStop(1,b);
d.addColorStop(0,f.getData("color"));
c.fillStyle=d;
this.nodeTypes.pie.render.call(this,f,e)
},contains:function(b,c){return this.nodeTypes.pie.contains.call(this,b,c)
}}});
a.Plot.EdgeTypes=new B({none:P.empty,line:{render:function(c,e){var b=c.nodeFrom.pos.getc(true),d=c.nodeTo.pos.getc(true);
this.edgeHelper.line.render(b,d,e)
},contains:function(c,b){var d=c.nodeFrom.pos.getc(true),e=c.nodeTo.pos.getc(true);
return this.edgeHelper.line.contains(d,e,b,this.edge.epsilon)
}},arrow:{render:function(h,f){var d=h.nodeFrom.pos.getc(true),e=h.nodeTo.pos.getc(true),g=h.getData("dim"),c=h.data.$direction,b=(c&&c.length>1&&c[0]!=h.nodeFrom.id);
this.edgeHelper.arrow.render(d,e,g,b,f)
},contains:function(c,b){var d=c.nodeFrom.pos.getc(true),e=c.nodeTo.pos.getc(true);
return this.edgeHelper.arrow.contains(d,e,b,this.edge.epsilon)
}},hyperline:{render:function(c,f){var e=c.nodeFrom.pos.getc(),b=c.nodeTo.pos.getc(),d=Math.max(e.norm(),b.norm());
this.edgeHelper.hyperline.render(e.$scale(1/d),b.$scale(1/d),d,f)
},contains:P.lambda(false)}})
})($jit.Sunburst);
$jit.Sunburst.Plot.NodeTypes.implement({"piechart-stacked":{render:function(f,aw){var g=f.pos.getp(true),ar=f.getData("dimArray"),h=f.getData("valueArray"),aj=f.getData("colorArray"),ay=aj.length,n=f.getData("stringArray"),k=f.getData("span")/2,p=f.pos.theta,al=p-k,r=p+k,i=new Q;
var m=aw.getCtx(),o={},t=f.getData("gradient"),ap=f.getData("border"),a=f.getData("config"),v=a.showLabels,b=a.resizeLabels,av=a.Label;
var ao=a.sliceOffset*Math.cos((al+r)/2);
var an=a.sliceOffset*Math.sin((al+r)/2);
if(aj&&ar&&n){for(var am=0,at=ar.length,aB=0,c=0;
am<at;
am++){var au=ar[am],ak=aj[am%ay];
if(au<=0){continue
}m.fillStyle=m.strokeStyle=ak;
if(t&&au){var aq=m.createRadialGradient(ao,an,aB+a.sliceOffset,ao,an,aB+au+a.sliceOffset);
var aA=P.hexToRgb(ak),d=P.map(aA,function(S){return(S*0.8)>>0
}),az=P.rgbToHex(d);
aq.addColorStop(0,ak);
aq.addColorStop(0.5,ak);
aq.addColorStop(1,az);
m.fillStyle=aq
}i.rho=aB+a.sliceOffset;
i.theta=al;
var ai=i.getc(true);
i.theta=r;
var l=i.getc(true);
i.rho+=au;
var s=i.getc(true);
i.theta=al;
var j=i.getc(true);
m.beginPath();
m.arc(ao,an,aB+0.01,al,r,false);
m.arc(ao,an,aB+au+0.01,r,al,true);
m.fill();
if(ap&&ap.name==n[am]){o.acum=aB;
o.dimValue=ar[am];
o.begin=al;
o.end=r
}aB+=(au||0);
c+=(h[am]||0)
}if(ap){m.save();
m.globalCompositeOperation="source-over";
m.lineWidth=2;
m.strokeStyle=ap.color;
var ax=al<r?1:-1;
m.beginPath();
m.arc(ao,an,o.acum+0.01+1,o.begin,o.end,false);
m.arc(ao,an,o.acum+o.dimValue+0.01-1,o.end,o.begin,true);
m.closePath();
m.stroke();
m.restore()
}if(v&&av.type=="Native"){m.save();
m.fillStyle=m.strokeStyle=av.color;
var e=b?f.getData("normalizedDim"):1,u=(av.size*e)>>0;
u=u<+b?+b:u;
m.font=av.style+" "+u+"px "+av.family;
m.textBaseline="middle";
m.textAlign="center";
i.rho=aB+a.labelOffset+a.sliceOffset;
i.theta=f.pos.theta;
var q=i.getc(true);
m.fillText(f.name,q.x,q.y);
m.restore()
}}},contains:function(e,a){if(this.nodeTypes.none.anglecontains.call(this,e,a)){var j=Math.sqrt(a.x*a.x+a.y*a.y);
var h=this.config.levelDistance,b=e._depth;
var g=e.getData("config");
if(j<=h*b+g.sliceOffset){var i=e.getData("dimArray");
for(var c=0,d=i.length,k=g.sliceOffset;
c<d;
c++){var f=i[c];
if(j>=k&&j<=k+f){return{name:e.getData("stringArray")[c],color:e.getData("colorArray")[c],value:e.getData("valueArray")[c],label:e.name}
}k+=f
}}return false
}return false
}}});
$jit.PieChart=new B({sb:null,colors:["#416D9C","#70A35E","#EBB056","#C74243","#83548B","#909291","#557EAA"],selected:{},busy:false,initialize:function(a){this.controller=this.config=P.merge(E("Canvas","PieChart","Label"),{Label:{type:"Native"}},a);
this.initializeViz()
},initializeViz:function(){var b=this.config,f=this;
var c=b.type.split(":")[0];
var a=new $jit.Sunburst({injectInto:b.injectInto,width:b.width,height:b.height,useCanvas:b.useCanvas,withLabels:b.Label.type!="Native",Label:{type:b.Label.type},Node:{overridable:true,type:"piechart-"+c,width:1,height:1},Edge:{type:"none"},Tips:{enable:b.Tips.enable,type:"Native",force:true,onShow:function(g,h,j){var i=j;
b.Tips.onShow(g,i,h)
}},Events:{enable:true,type:"Native",onClick:function(h,g,j){if(!b.Events.enable){return
}var i=g.getContains();
b.Events.onClick(i,g,j)
},onMouseMove:function(h,g,j){if(!b.hoveredColor){return
}if(h){var i=g.getContains();
f.select(h.id,i.name,i.index)
}else{f.select(false,false,false)
}}},onCreateLabel:function(g,h){var j=b.Label;
if(b.showLabels){var i=g.style;
i.fontSize=j.size+"px";
i.fontFamily=j.family;
i.color=j.color;
i.textAlign="center";
g.innerHTML=h.name
}},onPlaceLabel:function(i,o){if(!b.showLabels){return
}var u=o.pos.getp(true),r=o.getData("dimArray"),l=o.getData("span")/2,t=o.pos.theta,j=t-l,X=t+l,g=new Q;
var p=b.showLabels,v=b.resizeLabels,s=b.Label;
if(r){for(var k=0,n=r.length,m=0;
k<n;
k++){m+=r[k]
}var h=v?o.getData("normalizedDim"):1,Y=(s.size*h)>>0;
Y=Y<+v?+v:Y;
i.style.fontSize=Y+"px";
g.rho=m+b.labelOffset+b.sliceOffset;
g.theta=(j+X)/2;
var u=g.getc(true);
var V=f.canvas.getSize();
var q={x:Math.round(u.x+V.width/2),y:Math.round(u.y+V.height/2)};
i.style.left=q.x+"px";
i.style.top=q.y+"px"
}}});
var d=a.canvas.getSize(),e=Math.min;
a.config.levelDistance=e(d.width,d.height)/2-b.offset-b.sliceOffset;
this.delegate=a;
this.canvas=this.delegate.canvas;
this.canvas.getCtx().globalCompositeOperation="lighter"
},loadJSON:function(d){var j=P.time(),q=[],f=this.delegate,a=P.splat(d.label),o=a.length,l=P.splat(d.color||this.colors),g=l.length,c=this.config,k=!!c.type.split(":")[1],e=c.animate,m=o==1;
for(var h=0,i=d.values,n=i.length;
h<n;
h++){var b=i[h];
var r=P.splat(b.values);
q.push({id:j+b.label,name:b.label,data:{value:r,"$valueArray":r,"$colorArray":m?P.splat(l[h%g]):l,"$stringArray":a,"$gradient":k,"$config":c,"$angularWidth":P.reduce(r,function(t,s){return t+s
})},children:[]})
}var p={id:j+"$root",name:"",data:{"$type":"none","$width":1,"$height":1},children:q};
f.loadJSON(p);
this.normalizeDims();
f.refresh();
if(e){f.fx.animate({modes:["node-property:dimArray"],duration:1500})
}},updateJSON:function(g,e){if(this.busy){return
}this.busy=true;
var d=this.delegate;
var f=d.graph;
var b=g.values;
var c=this.config.animate;
var a=this;
P.each(b,function(j){var h=f.getByName(j.label),i=P.splat(j.values);
if(h){h.setData("valueArray",i);
h.setData("angularWidth",P.reduce(i,function(l,k){return l+k
}));
if(g.label){h.setData("stringArray",P.splat(g.label))
}}});
this.normalizeDims();
if(c){d.compute("end");
d.fx.animate({modes:["node-property:dimArray:span","linear"],duration:1500,onComplete:function(){a.busy=false;
e&&e.onComplete()
}})
}else{d.refresh()
}},select:function(c,b){if(!this.config.hoveredColor){return
}var a=this.selected;
if(a.id!=c||a.name!=b){a.id=c;
a.name=b;
a.color=this.config.hoveredColor;
this.delegate.graph.eachNode(function(d){if(c==d.id){d.setData("border",a)
}else{d.setData("border",false)
}});
this.delegate.plot()
}},getLegend:function(){var d={};
var c;
this.delegate.graph.getNode(this.delegate.root).eachAdjacency(function(e){c=e.nodeTo
});
var a=c.getData("colorArray"),b=a.length;
P.each(c.getData("stringArray"),function(f,e){d[f]=a[e%b]
});
return d
},getMaxValue:function(){var a=0;
this.delegate.graph.eachNode(function(c){var b=c.getData("valueArray"),d=0;
P.each(b,function(e){d+=+e
});
a=a>d?a:d
});
return a
},normalizeDims:function(){var b=this.delegate.graph.getNode(this.delegate.root),c=0;
b.eachAdjacency(function(){c++
});
var f=this.getMaxValue()||1,a=this.config,e=a.animate,d=this.delegate.config.levelDistance;
this.delegate.graph.eachNode(function(g){var h=0,k=[];
P.each(g.getData("valueArray"),function(l){h+=+l;
k.push(1)
});
var i=(k.length==1)&&!a.updateHeights;
if(e){g.setData("dimArray",P.map(g.getData("valueArray"),function(l){return i?d:(l*d/f)
}),"end");
var j=g.getData("dimArray");
if(!j){g.setData("dimArray",k)
}}else{g.setData("dimArray",P.map(g.getData("valueArray"),function(l){return i?d:(l*d/f)
}))
}g.setData("normalizedDim",h/f)
})
}});
L.TM={};
L.TM.SliceAndDice=new B({compute:function(f){var b=this.graph.getNode(this.clickedNode&&this.clickedNode.id||this.root);
this.controller.onBeforeCompute(b);
var d=this.canvas.getSize(),e=this.config,a=d.width,c=d.height;
this.graph.computeLevels(this.root,0,"ignore");
b.getPos(f).setc(-a/2,-c/2);
b.setData("width",a,f);
b.setData("height",c+e.titleHeight,f);
this.computePositions(b,b,this.layout.orientation,f);
this.controller.onAfterCompute(b)
},computePositions:function(p,r,b,j){var e=0;
p.eachSubnode(function(v){e+=v.getData("area",j)
});
var a=this.config,d=a.offset,i=p.getData("width",j),n=Math.max(p.getData("height",j)-a.titleHeight,0),l=p==r?1:(r.getData("area",j)/e);
var k,o,f,t,u,q,s;
var c=(b=="h");
if(c){b="v";
k=n;
o=i*l;
f="height";
t="y";
u="x";
q=a.titleHeight;
s=0
}else{b="h";
k=n*l;
o=i;
f="width";
t="x";
u="y";
q=0;
s=a.titleHeight
}var m=r.getPos(j);
r.setData("width",o,j);
r.setData("height",k,j);
var h=0,g=this;
r.eachSubnode(function(v){var T=v.getPos(j);
T[t]=h+m[t]+q;
T[u]=m[u]+s;
g.computePositions(r,v,b,j);
h+=v.getData(f,j)
})
}});
L.TM.Area={compute:function(h){h=h||"current";
var b=this.graph.getNode(this.clickedNode&&this.clickedNode.id||this.root);
this.controller.onBeforeCompute(b);
var f=this.config,i=this.canvas.getSize(),g=i.width,j=i.height,a=f.offset,e=g-a,c=j-a;
this.graph.computeLevels(this.root,0,"ignore");
b.getPos(h).setc(-g/2,-j/2);
b.setData("width",g,h);
b.setData("height",j,h);
var d={top:-j/2+f.titleHeight,left:-g/2,width:e,height:c-f.titleHeight};
this.computePositions(b,d,h);
this.controller.onAfterCompute(b)
},computeDim:function(c,b,i,d,e,g){if(c.length+b.length==1){var f=(c.length==1)?c:b;
this.layoutLast(f,i,d,g);
return
}if(c.length>=2&&b.length==0){b=[c.shift()]
}if(c.length==0){if(b.length>0){this.layoutRow(b,i,d,g)
}return
}var a=c[0];
if(e(b,i)>=e([a].concat(b),i)){this.computeDim(c.slice(1),b.concat([a]),i,d,e,g)
}else{var h=this.layoutRow(b,i,d,g);
this.computeDim(c,[],h.dim,h,e,g)
}},worstAspectRatio:function(g,i){if(!g||g.length==0){return Number.MAX_VALUE
}var f=0,h=0,c=Number.MAX_VALUE;
for(var a=0,b=g.length;
a<b;
a++){var e=g[a]._area;
f+=e;
c=c<e?c:e;
h=h>e?h:e
}var j=i*i,d=f*f;
return Math.max(j*h/d,d/(j*c))
},avgAspectRatio:function(g,f){if(!g||g.length==0){return Number.MAX_VALUE
}var c=0;
for(var e=0,b=g.length;
e<b;
e++){var d=g[e]._area;
var a=d/f;
c+=f>a?f/a:a/f
}return c/b
},layoutLast:function(e,b,d,a){var c=e[0];
c.getPos(a).setc(d.left,d.top);
c.setData("width",d.width,a);
c.setData("height",d.height,a)
}};
L.TM.Squarified=new B({Implements:L.TM.Area,computePositions:function(d,a,g){var e=this.config,l=Math.max;
if(a.width>=a.height){this.layout.orientation="h"
}else{this.layout.orientation="v"
}var i=d.getSubnodes([1,1],"ignore");
if(i.length>0){this.processChildrenLayout(d,i,a,g);
for(var b=0,c=i.length;
b<c;
b++){var k=i[b],j=e.offset,h=l(k.getData("height",g)-j-e.titleHeight,0),f=l(k.getData("width",g)-j,0),m=k.getPos(g);
a={width:f,height:h,top:m.y+e.titleHeight,left:m.x};
this.computePositions(k,a,g)
}}},processChildrenLayout:function(j,h,b,g){var d=b.width*b.height;
var c,f=h.length,a=0,i=[];
for(c=0;
c<f;
c++){i[c]=parseFloat(h[c].getData("area",g));
a+=i[c]
}for(c=0;
c<f;
c++){h[c]._area=d*i[c]/a
}var e=this.layout.horizontal()?b.height:b.width;
h.sort(function(n,o){var m=o._area-n._area;
return m?m:(o.id==n.id?0:(o.id<n.id?1:-1))
});
var k=[h[0]];
var l=h.slice(1);
this.squarify(l,k,e,b,g)
},squarify:function(e,d,b,a,c){this.computeDim(e,d,b,a,this.worstAspectRatio,c)
},layoutRow:function(d,b,a,c){if(this.layout.horizontal()){return this.layoutV(d,b,a,c)
}else{return this.layoutH(d,b,a,c)
}},layoutV:function(h,i,m,f){var g=0,d=function(n){return n
};
P.each(h,function(n){g+=n._area
});
var e=d(g/i),l=0;
for(var b=0,c=h.length;
b<c;
b++){var a=d(h[b]._area/e);
var k=h[b];
k.getPos(f).setc(m.left,m.top+l);
k.setData("width",e,f);
k.setData("height",a,f);
l+=a
}var j={height:m.height,width:m.width-e,top:m.top,left:m.left+e};
j.dim=Math.min(j.width,j.height);
if(j.dim!=j.height){this.layout.change()
}return j
},layoutH:function(g,j,b,f){var h=0;
P.each(g,function(m){h+=m._area
});
var i=h/j,a=b.top,e=0;
for(var c=0,d=g.length;
c<d;
c++){var l=g[c];
var j=l._area/i;
l.getPos(f).setc(b.left+e,a);
l.setData("width",j,f);
l.setData("height",i,f);
e+=j
}var k={height:b.height-i,width:b.width,top:b.top+i,left:b.left};
k.dim=Math.min(k.width,k.height);
if(k.dim!=k.width){this.layout.change()
}return k
}});
L.TM.Strip=new B({Implements:L.TM.Area,computePositions:function(d,a,g){var i=d.getSubnodes([1,1],"ignore"),e=this.config,l=Math.max;
if(i.length>0){this.processChildrenLayout(d,i,a,g);
for(var b=0,c=i.length;
b<c;
b++){var k=i[b];
var j=e.offset,h=l(k.getData("height",g)-j-e.titleHeight,0),f=l(k.getData("width",g)-j,0);
var m=k.getPos(g);
a={width:f,height:h,top:m.y+e.titleHeight,left:m.x};
this.computePositions(k,a,g)
}}},processChildrenLayout:function(j,h,c,g){var e=c.width*c.height;
var d,f=h.length,b=0,i=[];
for(d=0;
d<f;
d++){i[d]=+h[d].getData("area",g);
b+=i[d]
}for(d=0;
d<f;
d++){h[d]._area=e*i[d]/b
}var k=this.layout.horizontal()?c.width:c.height;
var l=[h[0]];
var a=h.slice(1);
this.stripify(a,l,k,c,g)
},stripify:function(e,d,b,a,c){this.computeDim(e,d,b,a,this.avgAspectRatio,c)
},layoutRow:function(d,b,a,c){if(this.layout.horizontal()){return this.layoutH(d,b,a,c)
}else{return this.layoutV(d,b,a,c)
}},layoutV:function(g,i,a,f){var h=0;
P.each(g,function(l){h+=l._area
});
var e=h/i,k=0;
for(var c=0,d=g.length;
c<d;
c++){var j=g[c];
var b=j._area/e;
j.getPos(f).setc(a.left,a.top+(i-b-k));
j.setData("width",e,f);
j.setData("height",b,f);
k+=b
}return{height:a.height,width:a.width-e,top:a.top,left:a.left+e,dim:i}
},layoutH:function(g,k,b,f){var i=0;
P.each(g,function(m){i+=m._area
});
var j=i/k,a=b.height-j,e=0;
for(var c=0,d=g.length;
c<d;
c++){var l=g[c];
var h=l._area/j;
l.getPos(f).setc(b.left+e,b.top+a);
l.setData("width",h,f);
l.setData("height",j,f);
e+=h
}return{height:b.height-j,width:b.width,top:b.top,left:b.left,dim:k}
}});
L.Icicle=new B({compute:function(l){l=l||"current";
var a=this.graph.getNode(this.root),e=this.config,i=this.canvas.getSize(),h=i.width,j=i.height,d=e.offset,b=e.constrained?e.levelsToShow:Number.MAX_VALUE;
this.controller.onBeforeCompute(a);
N.Util.computeLevels(this.graph,a.id,0,"ignore");
var k=0;
N.Util.eachLevel(a,0,false,function(m,n){if(n>k){k=n
}});
var f=this.graph.getNode(this.clickedNode&&this.clickedNode.id||a.id);
var g=Math.min(k,b-1);
var c=f._depth;
if(this.layout.horizontal()){this.computeSubtree(f,-h/2,-j/2,h/(g+1),j,c,g,l)
}else{this.computeSubtree(f,-h/2,-j/2,h,j/(g+1),c,g,l)
}},computeSubtree:function(l,i,m,j,f,n,d,k){l.getPos(k).setc(i,m);
l.setData("width",j,k);
l.setData("height",f,k);
var b,g=0,h=0;
var e=N.Util.getSubnodes(l,[1,1],"ignore");
if(!e.length){return
}P.each(e,function(o){h+=o.getData("dim")
});
for(var a=0,c=e.length;
a<c;
a++){if(this.layout.horizontal()){b=f*e[a].getData("dim")/h;
this.computeSubtree(e[a],i+j,m,j,b,n,d,k);
m+=b
}else{b=j*e[a].getData("dim")/h;
this.computeSubtree(e[a],i,m+f,b,f,n,d,k);
i+=b
}}}});
$jit.Icicle=new B({Implements:[O,D,L.Icicle],layout:{orientation:"h",vertical:function(){return this.orientation=="v"
},horizontal:function(){return this.orientation=="h"
},change:function(){this.orientation=this.vertical()?"h":"v"
}},initialize:function(b){var a={animate:false,orientation:"h",offset:2,levelsToShow:Number.MAX_VALUE,constrained:false,Node:{type:"rectangle",overridable:true},Edge:{type:"none"},Label:{type:"Native"},duration:700,fps:45};
var c=E("Canvas","Node","Edge","Fx","Tips","NodeStyles","Events","Navigation","Controller","Label");
this.controller=this.config=P.merge(c,a,b);
this.layout.orientation=this.config.orientation;
var d=this.config;
if(d.useCanvas){this.canvas=d.useCanvas;
this.config.labelContainer=this.canvas.id+"-label"
}else{this.canvas=new G(this,d);
this.config.labelContainer=(typeof d.injectInto=="string"?d.injectInto:d.injectInto.id)+"-label"
}this.graphOptions={klass:C,Node:{selected:false,exist:true,drawn:true}};
this.graph=new N(this.graphOptions,this.config.Node,this.config.Edge,this.config.Label);
this.labels=new $jit.Icicle.Label[this.config.Label.type](this);
this.fx=new $jit.Icicle.Plot(this,$jit.Icicle);
this.op=new $jit.Icicle.Op(this);
this.group=new $jit.Icicle.Group(this);
this.clickedNode=null;
this.initializeExtras()
},refresh:function(){var b=this.config.Label.type;
if(b!="Native"){var a=this;
this.graph.eachNode(function(c){a.labels.hideLabel(c,false)
})
}this.compute();
this.plot()
},plot:function(){this.fx.plot(this.config)
},enter:function(d){if(this.busy){return
}this.busy=true;
var a=this,b=this.config;
var c={onComplete:function(){if(b.request){a.compute()
}if(b.animate){a.graph.nodeList.setDataset(["current","end"],{alpha:[1,0]});
N.Util.eachSubgraph(d,function(e){e.setData("alpha",1,"end")
},"ignore");
a.fx.animate({duration:500,modes:["node-property:alpha"],onComplete:function(){a.clickedNode=d;
a.compute("end");
a.fx.animate({modes:["linear","node-property:width:height"],duration:1000,onComplete:function(){a.busy=false;
a.clickedNode=d
}})
}})
}else{a.clickedNode=d;
a.busy=false;
a.refresh()
}}};
if(b.request){this.requestNodes(clickedNode,c)
}else{c.onComplete()
}},out:function(){if(this.busy){return
}var h=this,b=N.Util,g=this.config,d=this.graph,a=b.getParents(d.getNode(this.clickedNode&&this.clickedNode.id||this.root)),f=a[0],c=f,e=this.clickedNode;
this.busy=true;
this.events.hoveredNode=false;
if(!f){this.busy=false;
return
}callback={onComplete:function(){h.clickedNode=f;
if(g.request){h.requestNodes(f,{onComplete:function(){h.compute();
h.plot();
h.busy=false
}})
}else{h.compute();
h.plot();
h.busy=false
}}};
if(g.animate){this.clickedNode=c;
this.compute("end");
this.clickedNode=e;
this.fx.animate({modes:["linear","node-property:width:height"],duration:1000,onComplete:function(){h.clickedNode=c;
d.nodeList.setDataset(["current","end"],{alpha:[0,1]});
b.eachSubgraph(e,function(i){i.setData("alpha",1)
},"ignore");
h.fx.animate({duration:500,modes:["node-property:alpha"],onComplete:function(){callback.onComplete()
}})
}})
}else{callback.onComplete()
}},requestNodes:function(f,d){var b=P.merge(this.controller,d),c=this.config.constrained?this.config.levelsToShow:Number.MAX_VALUE;
if(b.request){var e=[],a=f._depth;
N.Util.eachLevel(f,0,c,function(g){if(g.drawn&&!N.Util.anySubnode(g)){e.push(g);
g._level=g._depth-a;
if(this.config.constrained){g._level=c-g._level
}}});
this.group.requestNodes(e,b)
}else{b.onComplete()
}}});
$jit.Icicle.Op=new B({Implements:N.Op});
$jit.Icicle.Group=new B({initialize:function(a){this.viz=a;
this.canvas=a.canvas;
this.config=a.config
},requestNodes:function(h,b){var f=0,a=h.length,d={};
var g=function(){b.onComplete()
};
var c=this.viz;
if(a==0){g()
}for(var e=0;
e<a;
e++){d[h[e].id]=h[e];
b.request(h[e].id,h[e]._level,{onComplete:function(i,j){if(j&&j.children){j.id=i;
c.op.sum(j,{type:"nothing"})
}if(++f==a){N.Util.computeLevels(c.graph,c.root,0);
g()
}}})
}}});
$jit.Icicle.Plot=new B({Implements:N.Plot,plot:function(b,f){b=b||this.viz.controller;
var c=this.viz,e=c.graph,a=e.getNode(c.clickedNode&&c.clickedNode.id||c.root),d=a._depth;
c.canvas.clear();
this.plotTree(a,P.merge(b,{withLabels:true,hideLabels:false,plotSubtree:function(h,g){return !c.config.constrained||(g._depth-d<c.config.levelsToShow)
}}),f)
}});
$jit.Icicle.Label={};
$jit.Icicle.Label.Native=new B({Implements:N.Label.Native,renderLabel:function(g,f,d){var a=g.getCtx(),h=f.getData("width"),b=f.getData("height"),i=f.getLabelData("size"),e=a.measureText(f.name);
if(b<(i*1.5)||h<e.width){return
}var c=f.pos.getc(true);
a.fillText(f.name,c.x+h/2,c.y+b/2)
}});
$jit.Icicle.Label.SVG=new B({Implements:N.Label.SVG,initialize:function(a){this.viz=a
},placeLabel:function(b,a,g){var e=a.pos.getc(true),d=this.viz.canvas;
var c=d.getSize();
var f={x:Math.round(e.x+c.width/2),y:Math.round(e.y+c.height/2)};
b.setAttribute("x",f.x);
b.setAttribute("y",f.y);
g.onPlaceLabel(b,a)
}});
$jit.Icicle.Label.HTML=new B({Implements:N.Label.HTML,initialize:function(a){this.viz=a
},placeLabel:function(b,h,g){var d=h.pos.getc(true),f=this.viz.canvas;
var c=f.getSize();
var e={x:Math.round(d.x+c.width/2),y:Math.round(d.y+c.height/2)};
var a=b.style;
a.left=e.x+"px";
a.top=e.y+"px";
a.display="";
g.onPlaceLabel(b,h)
}});
$jit.Icicle.Plot.NodeTypes=new B({none:{render:P.empty},rectangle:{render:function(e,i,g){var f=this.viz.config;
var b=f.offset;
var k=e.getData("width");
var l=e.getData("height");
var c=e.getData("border");
var m=e.pos.getc(true);
var n=m.x+b/2,a=m.y+b/2;
var h=i.getCtx();
if(k-b<2||l-b<2){return
}if(f.cushion){var d=e.getData("color");
var j=h.createRadialGradient(n+(k-b)/2,a+(l-b)/2,1,n+(k-b)/2,a+(l-b)/2,k<l?l:k);
var o=P.rgbToHex(P.map(P.hexToRgb(d),function(p){return p*0.3>>0
}));
j.addColorStop(0,d);
j.addColorStop(1,o);
h.fillStyle=j
}if(c){h.strokeStyle=c;
h.lineWidth=3
}h.fillRect(n,a,Math.max(0,k-b),Math.max(0,l-b));
c&&h.strokeRect(m.x,m.y,k,l)
},contains:function(e,b){if(this.viz.clickedNode&&!$jit.Graph.Util.isDescendantOf(e,this.viz.clickedNode.id)){return false
}var d=e.pos.getc(true),a=e.getData("width"),c=e.getData("height");
return this.nodeHelper.rectangle.contains({x:d.x+a/2,y:d.y+c/2},b,a,c)
}}});
$jit.Icicle.Plot.EdgeTypes=new B({none:P.empty});
L.ForceDirected=new B({getOptions:function(d){var h=this.canvas.getSize();
var g=h.width,b=h.height;
var f=0;
this.graph.eachNode(function(i){f++
});
var c=g*b/f,e=Math.sqrt(c);
var a=this.config.levelDistance;
return{width:g,height:b,tstart:g*0.1,nodef:function(i){return c/(i||1)
},edgef:function(i){return e*(i-a)
}}
},compute:function(a,d){var c=P.splat(a||["current","start","end"]);
var b=this.getOptions();
M.compute(this.graph,c,this.config);
this.graph.computeLevels(this.root,0,"ignore");
this.graph.eachNode(function(e){P.each(c,function(g){var f=e.getPos(g);
if(f.equals(C.KER)){f.x=b.width/5*(Math.random()-0.5);
f.y=b.height/5*(Math.random()-0.5)
}e.disp={};
P.each(c,function(h){e.disp[h]=A(0,0)
})
})
});
this.computePositions(c,b,d)
},computePositions:function(b,g,f){var e=this.config.iterations,a=0,d=this;
if(f){(function c(){for(var h=f.iter,i=0;
i<h;
i++){g.t=g.tstart;
if(e){g.t*=(1-a++/(e-1))
}d.computePositionStep(b,g);
if(e&&a>=e){f.onComplete();
return
}}f.onStep(Math.round(a/(e-1)*100));
setTimeout(c,1)
})()
}else{for(;
a<e;
a++){g.t=g.tstart*(1-a/(e-1));
this.computePositionStep(b,g)
}}},computePositionStep:function(a,h){var j=this.graph;
var f=Math.min,b=Math.max;
var c=A(0,0);
j.eachNode(function(k){P.each(a,function(l){k.disp[l].x=0;
k.disp[l].y=0
});
j.eachNode(function(l){if(l.id!=k.id){P.each(a,function(m){var o=k.getPos(m),p=l.getPos(m);
c.x=o.x-p.x;
c.y=o.y-p.y;
var n=c.norm()||1;
k.disp[m].$add(c.$scale(h.nodef(n)/n))
})
}})
});
var g=!!j.getNode(this.root).visited;
j.eachNode(function(k){k.eachAdjacency(function(m){var l=m.nodeTo;
if(!!l.visited===g){P.each(a,function(q){var o=k.getPos(q),p=l.getPos(q);
c.x=o.x-p.x;
c.y=o.y-p.y;
var n=c.norm()||1;
k.disp[q].$add(c.$scale(-h.edgef(n)/n));
l.disp[q].$add(c.$scale(-1))
})
}});
k.visited=!g
});
var i=h.t,e=h.width/2,d=h.height/2;
j.eachNode(function(k){P.each(a,function(l){var n=k.disp[l];
var m=n.norm()||1;
var l=k.getPos(l);
l.$add(A(n.x*f(Math.abs(n.x),i)/m,n.y*f(Math.abs(n.y),i)/m));
l.x=f(e,b(-e,l.x));
l.y=f(d,b(-d,l.y))
})
})
}});
$jit.ForceDirected=new B({Implements:[O,D,L.ForceDirected],initialize:function(a){var b=$jit.ForceDirected;
var d={iterations:50,levelDistance:50};
this.controller=this.config=P.merge(E("Canvas","Node","Edge","Fx","Tips","NodeStyles","Events","Navigation","Controller","Label"),d,a);
var c=this.config;
if(c.useCanvas){this.canvas=c.useCanvas;
this.config.labelContainer=this.canvas.id+"-label"
}else{if(c.background){c.background=P.merge({type:"Circles"},c.background)
}this.canvas=new G(this,c);
this.config.labelContainer=(typeof c.injectInto=="string"?c.injectInto:c.injectInto.id)+"-label"
}this.graphOptions={klass:C,Node:{selected:false,exist:true,drawn:true}};
this.graph=new N(this.graphOptions,this.config.Node,this.config.Edge);
this.labels=new b.Label[c.Label.type](this);
this.fx=new b.Plot(this,b);
this.op=new b.Op(this);
this.json=null;
this.busy=false;
this.initializeExtras()
},refresh:function(){this.compute();
this.plot()
},reposition:function(){this.compute("end")
},computeIncremental:function(a){a=P.merge({iter:20,property:"end",onStep:P.empty,onComplete:P.empty},a||{});
this.config.onBeforeCompute(this.graph.getNode(this.root));
this.compute(a.property,a)
},plot:function(){this.fx.plot()
},animate:function(a){this.fx.animate(P.merge({modes:["linear"]},a||{}))
}});
$jit.ForceDirected.$extend=true;
(function(a){a.Op=new B({Implements:N.Op});
a.Plot=new B({Implements:N.Plot});
a.Label={};
a.Label.Native=new B({Implements:N.Label.Native});
a.Label.SVG=new B({Implements:N.Label.SVG,initialize:function(b){this.viz=b
},placeLabel:function(i,d,c){var k=d.pos.getc(true),g=this.viz.canvas,f=g.translateOffsetX,h=g.translateOffsetY,j=g.scaleOffsetX,l=g.scaleOffsetY,b=g.getSize();
var e={x:Math.round(k.x*j+f+b.width/2),y:Math.round(k.y*l+h+b.height/2)};
i.setAttribute("x",e.x);
i.setAttribute("y",e.y);
c.onPlaceLabel(i,d)
}});
a.Label.HTML=new B({Implements:N.Label.HTML,initialize:function(b){this.viz=b
},placeLabel:function(i,c,b){var k=c.pos.getc(true),f=this.viz.canvas,e=f.translateOffsetX,g=f.translateOffsetY,j=f.scaleOffsetX,l=f.scaleOffsetY,m=f.getSize();
var d={x:Math.round(k.x*j+e+m.width/2),y:Math.round(k.y*l+g+m.height/2)};
var h=i.style;
h.left=d.x+"px";
h.top=d.y+"px";
h.display=this.fitsInCanvas(d,f)?"":"none";
b.onPlaceLabel(i,c)
}});
a.Plot.NodeTypes=new B({none:{render:P.empty,contains:P.lambda(false)},circle:{render:function(e,c){var b=e.pos.getc(true),d=e.getData("dim");
this.nodeHelper.circle.render("fill",b,d,c)
},contains:function(c,b){var d=c.pos.getc(true),e=c.getData("dim");
return this.nodeHelper.circle.contains(d,b,e)
}},ellipse:{render:function(c,f){var e=c.pos.getc(true),d=c.getData("width"),b=c.getData("height");
this.nodeHelper.ellipse.render("fill",e,d,b,f)
},contains:function(d,f){var c=d.pos.getc(true),e=d.getData("width"),b=d.getData("height");
return this.nodeHelper.ellipse.contains(c,f,e,b)
}},square:{render:function(e,c){var b=e.pos.getc(true),d=e.getData("dim");
this.nodeHelper.square.render("fill",b,d,c)
},contains:function(c,b){var d=c.pos.getc(true),e=c.getData("dim");
return this.nodeHelper.square.contains(d,b,e)
}},rectangle:{render:function(c,f){var e=c.pos.getc(true),d=c.getData("width"),b=c.getData("height");
this.nodeHelper.rectangle.render("fill",e,d,b,f)
},contains:function(d,f){var c=d.pos.getc(true),e=d.getData("width"),b=d.getData("height");
return this.nodeHelper.rectangle.contains(c,f,e,b)
}},triangle:{render:function(e,c){var b=e.pos.getc(true),d=e.getData("dim");
this.nodeHelper.triangle.render("fill",b,d,c)
},contains:function(c,b){var d=c.pos.getc(true),e=c.getData("dim");
return this.nodeHelper.triangle.contains(d,b,e)
}},star:{render:function(e,c){var b=e.pos.getc(true),d=e.getData("dim");
this.nodeHelper.star.render("fill",b,d,c)
},contains:function(c,b){var d=c.pos.getc(true),e=c.getData("dim");
return this.nodeHelper.star.contains(d,b,e)
}}});
a.Plot.EdgeTypes=new B({none:P.empty,line:{render:function(c,e){var b=c.nodeFrom.pos.getc(true),d=c.nodeTo.pos.getc(true);
this.edgeHelper.line.render(b,d,e)
},contains:function(c,b){var d=c.nodeFrom.pos.getc(true),e=c.nodeTo.pos.getc(true);
return this.edgeHelper.line.contains(d,e,b,this.edge.epsilon)
}},arrow:{render:function(h,f){var d=h.nodeFrom.pos.getc(true),e=h.nodeTo.pos.getc(true),g=h.getData("dim"),c=h.data.$direction,b=(c&&c.length>1&&c[0]!=h.nodeFrom.id);
this.edgeHelper.arrow.render(d,e,g,b,f)
},contains:function(c,b){var d=c.nodeFrom.pos.getc(true),e=c.nodeTo.pos.getc(true);
return this.edgeHelper.arrow.contains(d,e,b,this.edge.epsilon)
}}})
})($jit.ForceDirected);
$jit.TM={};
var w=$jit.TM;
$jit.TM.$extend=true;
w.Base={layout:{orientation:"h",vertical:function(){return this.orientation=="v"
},horizontal:function(){return this.orientation=="h"
},change:function(){this.orientation=this.vertical()?"h":"v"
}},initialize:function(b){var a={orientation:"h",titleHeight:13,offset:2,levelsToShow:0,constrained:false,animate:false,Node:{type:"rectangle",overridable:true,width:3,height:3,color:"#444"},Label:{textAlign:"center",textBaseline:"top"},Edge:{type:"none"},duration:700,fps:45};
this.controller=this.config=P.merge(E("Canvas","Node","Edge","Fx","Controller","Tips","NodeStyles","Events","Navigation","Label"),a,b);
this.layout.orientation=this.config.orientation;
var c=this.config;
if(c.useCanvas){this.canvas=c.useCanvas;
this.config.labelContainer=this.canvas.id+"-label"
}else{if(c.background){c.background=P.merge({type:"Circles"},c.background)
}this.canvas=new G(this,c);
this.config.labelContainer=(typeof c.injectInto=="string"?c.injectInto:c.injectInto.id)+"-label"
}this.graphOptions={klass:C,Node:{selected:false,exist:true,drawn:true}};
this.graph=new N(this.graphOptions,this.config.Node,this.config.Edge);
this.labels=new w.Label[c.Label.type](this);
this.fx=new w.Plot(this);
this.op=new w.Op(this);
this.group=new w.Group(this);
this.geom=new w.Geom(this);
this.clickedNode=null;
this.busy=false;
this.initializeExtras()
},refresh:function(){if(this.busy){return
}this.busy=true;
var a=this;
if(this.config.animate){this.compute("end");
this.config.levelsToShow>0&&this.geom.setRightLevelToShow(this.graph.getNode(this.clickedNode&&this.clickedNode.id||this.root));
this.fx.animate(P.merge(this.config,{modes:["linear","node-property:width:height"],onComplete:function(){a.busy=false
}}))
}else{var b=this.config.Label.type;
if(b!="Native"){var a=this;
this.graph.eachNode(function(c){a.labels.hideLabel(c,false)
})
}this.busy=false;
this.compute();
this.config.levelsToShow>0&&this.geom.setRightLevelToShow(this.graph.getNode(this.clickedNode&&this.clickedNode.id||this.root));
this.plot()
}},plot:function(){this.fx.plot()
},leaf:function(a){return a.getSubnodes([1,1],"ignore").length==0
},enter:function(e){if(this.busy){return
}this.busy=true;
var g=this,b=this.config,a=this.graph,c=e,d=this.clickedNode;
var f={onComplete:function(){if(b.levelsToShow>0){g.geom.setRightLevelToShow(e)
}if(b.levelsToShow>0||b.request){g.compute()
}if(b.animate){a.nodeList.setData("alpha",0,"end");
e.eachSubgraph(function(h){h.setData("alpha",1,"end")
},"ignore");
g.fx.animate({duration:500,modes:["node-property:alpha"],onComplete:function(){g.clickedNode=c;
g.compute("end");
g.clickedNode=d;
g.fx.animate({modes:["linear","node-property:width:height"],duration:1000,onComplete:function(){g.busy=false;
g.clickedNode=c
}})
}})
}else{g.busy=false;
g.clickedNode=e;
g.refresh()
}}};
if(b.request){this.requestNodes(c,f)
}else{f.onComplete()
}},out:function(){if(this.busy){return
}this.busy=true;
this.events.hoveredNode=false;
var b=this,g=this.config,e=this.graph,a=e.getNode(this.clickedNode&&this.clickedNode.id||this.root).getParents(),d=a[0],c=d,f=this.clickedNode;
if(!d){this.busy=false;
return
}callback={onComplete:function(){b.clickedNode=d;
if(g.request){b.requestNodes(d,{onComplete:function(){b.compute();
b.plot();
b.busy=false
}})
}else{b.compute();
b.plot();
b.busy=false
}}};
if(g.levelsToShow>0){this.geom.setRightLevelToShow(d)
}if(g.animate){this.clickedNode=c;
this.compute("end");
this.clickedNode=f;
this.fx.animate({modes:["linear","node-property:width:height"],duration:1000,onComplete:function(){b.clickedNode=c;
e.eachNode(function(h){h.setDataset(["current","end"],{alpha:[0,1]})
},"ignore");
f.eachSubgraph(function(h){h.setData("alpha",1)
},"ignore");
b.fx.animate({duration:500,modes:["node-property:alpha"],onComplete:function(){callback.onComplete()
}})
}})
}else{callback.onComplete()
}},requestNodes:function(f,d){var b=P.merge(this.controller,d),c=this.config.levelsToShow;
if(b.request){var e=[],a=f._depth;
f.eachLevel(0,c,function(g){var h=c-(g._depth-a);
if(g.drawn&&!g.anySubnode()&&h>0){e.push(g);
g._level=h
}});
this.group.requestNodes(e,b)
}else{b.onComplete()
}},reposition:function(){this.compute("end")
}};
w.Op=new B({Implements:N.Op,initialize:function(a){this.viz=a
}});
w.Geom=new B({Implements:N.Geom,getRightLevelToShow:function(){return this.viz.config.levelsToShow
},setRightLevelToShow:function(a){var c=this.getRightLevelToShow(),b=this.viz.labels;
a.eachLevel(0,c+1,function(d){var e=d._depth-a._depth;
if(e>c){d.drawn=false;
d.exist=false;
d.ignore=true;
b.hideLabel(d,false)
}else{d.drawn=true;
d.exist=true;
delete d.ignore
}});
a.drawn=true;
delete a.ignore
}});
w.Group=new B({initialize:function(a){this.viz=a;
this.canvas=a.canvas;
this.config=a.config
},requestNodes:function(h,b){var f=0,a=h.length,d={};
var g=function(){b.onComplete()
};
var c=this.viz;
if(a==0){g()
}for(var e=0;
e<a;
e++){d[h[e].id]=h[e];
b.request(h[e].id,h[e]._level,{onComplete:function(i,j){if(j&&j.children){j.id=i;
c.op.sum(j,{type:"nothing"})
}if(++f==a){c.graph.computeLevels(c.root,0);
g()
}}})
}}});
w.Plot=new B({Implements:N.Plot,initialize:function(a){this.viz=a;
this.config=a.config;
this.node=this.config.Node;
this.edge=this.config.Edge;
this.animation=new x;
this.nodeTypes=new w.Plot.NodeTypes;
this.edgeTypes=new w.Plot.EdgeTypes;
this.labels=a.labels
},plot:function(d,a){var b=this.viz,c=b.graph;
b.canvas.clear();
this.plotTree(c.getNode(b.clickedNode&&b.clickedNode.id||b.root),P.merge(b.config,d||{},{withLabels:true,hideLabels:false,plotSubtree:function(f,e){return f.anySubnode("exist")
}}),a)
}});
w.Label={};
w.Label.Native=new B({Implements:N.Label.Native,initialize:function(a){this.config=a.config;
this.leaf=a.leaf
},renderLabel:function(e,d,c){if(!this.leaf(d)&&!this.config.titleHeight){return
}var a=d.pos.getc(true),g=e.getCtx(),f=d.getData("width"),h=d.getData("height"),i=a.x+f/2,b=a.y;
g.fillText(d.name,i,b,f)
}});
w.Label.SVG=new B({Implements:N.Label.SVG,initialize:function(a){this.viz=a;
this.leaf=a.leaf;
this.config=a.config
},placeLabel:function(i,d,c){var k=d.pos.getc(true),g=this.viz.canvas,f=g.translateOffsetX,h=g.translateOffsetY,j=g.scaleOffsetX,a=g.scaleOffsetY,b=g.getSize();
var e={x:Math.round(k.x*j+f+b.width/2),y:Math.round(k.y*a+h+b.height/2)};
i.setAttribute("x",e.x);
i.setAttribute("y",e.y);
if(!this.leaf(d)&&!this.config.titleHeight){i.style.display="none"
}c.onPlaceLabel(i,d)
}});
w.Label.HTML=new B({Implements:N.Label.HTML,initialize:function(a){this.viz=a;
this.leaf=a.leaf;
this.config=a.config
},placeLabel:function(i,c,b){var k=c.pos.getc(true),f=this.viz.canvas,e=f.translateOffsetX,g=f.translateOffsetY,j=f.scaleOffsetX,l=f.scaleOffsetY,a=f.getSize();
var d={x:Math.round(k.x*j+e+a.width/2),y:Math.round(k.y*l+g+a.height/2)};
var h=i.style;
h.left=d.x+"px";
h.top=d.y+"px";
h.width=c.getData("width")*j+"px";
h.height=c.getData("height")*l+"px";
h.zIndex=c._depth*100;
h.display="";
if(!this.leaf(c)&&!this.config.titleHeight){i.style.display="none"
}b.onPlaceLabel(i,c)
}});
w.Plot.NodeTypes=new B({none:{render:P.empty},rectangle:{render:function(g,k,e){var a=this.viz.leaf(g),i=this.config,m=i.offset,b=i.titleHeight,n=g.pos.getc(true),l=g.getData("width"),j=g.getData("height"),c=g.getData("border"),f=k.getCtx(),o=n.x+m/2,q=n.y+m/2;
if(l<=m||j<=m){return
}if(a){if(i.cushion){var h=f.createRadialGradient(o+(l-m)/2,q+(j-m)/2,1,o+(l-m)/2,q+(j-m)/2,l<j?j:l);
var d=g.getData("color");
var p=P.rgbToHex(P.map(P.hexToRgb(d),function(r){return r*0.2>>0
}));
h.addColorStop(0,d);
h.addColorStop(1,p);
f.fillStyle=h
}f.fillRect(o,q,l-m,j-m);
if(c){f.save();
f.strokeStyle=c;
f.strokeRect(o,q,l-m,j-m);
f.restore()
}}else{if(b>0){f.fillRect(n.x+m/2,n.y+m/2,l-m,b-m);
if(c){f.save();
f.strokeStyle=c;
f.strokeRect(n.x+m/2,n.y+m/2,l-m,j-m);
f.restore()
}}}},contains:function(d,f){if(this.viz.clickedNode&&!d.isDescendantOf(this.viz.clickedNode.id)||d.ignore){return false
}var b=d.pos.getc(true),e=d.getData("width"),a=this.viz.leaf(d),c=a?d.getData("height"):this.config.titleHeight;
return this.nodeHelper.rectangle.contains({x:b.x+e/2,y:b.y+c/2},f,e,c)
}}});
w.Plot.EdgeTypes=new B({none:P.empty});
w.SliceAndDice=new B({Implements:[O,D,w.Base,L.TM.SliceAndDice]});
w.Squarified=new B({Implements:[O,D,w.Base,L.TM.Squarified]});
w.Strip=new B({Implements:[O,D,w.Base,L.TM.Strip]});
$jit.RGraph=new B({Implements:[O,D,L.Radial],initialize:function(b){var a=$jit.RGraph;
var d={interpolation:"linear",levelDistance:100};
this.controller=this.config=P.merge(E("Canvas","Node","Edge","Fx","Controller","Tips","NodeStyles","Events","Navigation","Label"),d,b);
var c=this.config;
if(c.useCanvas){this.canvas=c.useCanvas;
this.config.labelContainer=this.canvas.id+"-label"
}else{if(c.background){c.background=P.merge({type:"Circles"},c.background)
}this.canvas=new G(this,c);
this.config.labelContainer=(typeof c.injectInto=="string"?c.injectInto:c.injectInto.id)+"-label"
}this.graphOptions={klass:Q,Node:{selected:false,exist:true,drawn:true}};
this.graph=new N(this.graphOptions,this.config.Node,this.config.Edge);
this.labels=new a.Label[c.Label.type](this);
this.fx=new a.Plot(this,a);
this.op=new a.Op(this);
this.json=null;
this.root=null;
this.busy=false;
this.parent=false;
this.initializeExtras()
},createLevelDistanceFunc:function(){var a=this.config.levelDistance;
return function(b){return(b._depth+1)*a
}
},refresh:function(){this.compute();
this.plot()
},reposition:function(){this.compute("end")
},plot:function(){this.fx.plot()
},getNodeAndParentAngle:function(d){var h=false;
var f=this.graph.getNode(d);
var b=f.getParents();
var e=(b.length>0)?b[0]:false;
if(e){var c=e.pos.getc(),g=f.pos.getc();
var a=c.add(g.scale(-1));
h=Math.atan2(a.y,a.x);
if(h<0){h+=2*Math.PI
}}return{parent:e,theta:h}
},tagChildren:function(b,e){if(b.angleSpan){var g=[];
b.eachAdjacency(function(h){g.push(h.nodeTo)
},"ignore");
var c=g.length;
for(var d=0;
d<c&&e!=g[d].id;
d++){}for(var f=(d+1)%c,a=0;
e!=g[f].id;
f=(f+1)%c){g[f].dist=a++
}}},onClick:function(f,b){if(this.root!=f&&!this.busy){this.busy=true;
this.root=f;
var e=this;
this.controller.onBeforeCompute(this.graph.getNode(f));
var d=this.getNodeAndParentAngle(f);
this.tagChildren(d.parent,f);
this.parent=d.parent;
this.compute("end");
var c=d.theta-d.parent.endPos.theta;
this.graph.eachNode(function(g){g.endPos.set(g.endPos.getp().add(H(c,0)))
});
var a=this.config.interpolation;
b=P.merge({onComplete:P.empty},b||{});
this.fx.animate(P.merge({hideLabels:true,modes:[a]},b,{onComplete:function(){e.busy=false;
b.onComplete()
}}))
}}});
$jit.RGraph.$extend=true;
(function(a){a.Op=new B({Implements:N.Op});
a.Plot=new B({Implements:N.Plot});
a.Label={};
a.Label.Native=new B({Implements:N.Label.Native});
a.Label.SVG=new B({Implements:N.Label.SVG,initialize:function(b){this.viz=b
},placeLabel:function(i,d,c){var k=d.pos.getc(true),g=this.viz.canvas,f=g.translateOffsetX,h=g.translateOffsetY,j=g.scaleOffsetX,l=g.scaleOffsetY,b=g.getSize();
var e={x:Math.round(k.x*j+f+b.width/2),y:Math.round(k.y*l+h+b.height/2)};
i.setAttribute("x",e.x);
i.setAttribute("y",e.y);
c.onPlaceLabel(i,d)
}});
a.Label.HTML=new B({Implements:N.Label.HTML,initialize:function(b){this.viz=b
},placeLabel:function(i,c,b){var k=c.pos.getc(true),f=this.viz.canvas,e=f.translateOffsetX,g=f.translateOffsetY,j=f.scaleOffsetX,l=f.scaleOffsetY,m=f.getSize();
var d={x:Math.round(k.x*j+e+m.width/2),y:Math.round(k.y*l+g+m.height/2)};
var h=i.style;
h.left=d.x+"px";
h.top=d.y+"px";
h.display=this.fitsInCanvas(d,f)?"":"none";
b.onPlaceLabel(i,c)
}});
a.Plot.NodeTypes=new B({none:{render:P.empty,contains:P.lambda(false)},circle:{render:function(e,c){var b=e.pos.getc(true),d=e.getData("dim");
this.nodeHelper.circle.render("fill",b,d,c)
},contains:function(c,b){var d=c.pos.getc(true),e=c.getData("dim");
return this.nodeHelper.circle.contains(d,b,e)
}},ellipse:{render:function(c,f){var e=c.pos.getc(true),d=c.getData("width"),b=c.getData("height");
this.nodeHelper.ellipse.render("fill",e,d,b,f)
},contains:function(d,f){var c=d.pos.getc(true),e=d.getData("width"),b=d.getData("height");
return this.nodeHelper.ellipse.contains(c,f,e,b)
}},square:{render:function(e,c){var b=e.pos.getc(true),d=e.getData("dim");
this.nodeHelper.square.render("fill",b,d,c)
},contains:function(c,b){var d=c.pos.getc(true),e=c.getData("dim");
return this.nodeHelper.square.contains(d,b,e)
}},rectangle:{render:function(c,f){var e=c.pos.getc(true),d=c.getData("width"),b=c.getData("height");
this.nodeHelper.rectangle.render("fill",e,d,b,f)
},contains:function(d,f){var c=d.pos.getc(true),e=d.getData("width"),b=d.getData("height");
return this.nodeHelper.rectangle.contains(c,f,e,b)
}},triangle:{render:function(e,c){var b=e.pos.getc(true),d=e.getData("dim");
this.nodeHelper.triangle.render("fill",b,d,c)
},contains:function(c,b){var d=c.pos.getc(true),e=c.getData("dim");
return this.nodeHelper.triangle.contains(d,b,e)
}},star:{render:function(e,c){var b=e.pos.getc(true),d=e.getData("dim");
this.nodeHelper.star.render("fill",b,d,c)
},contains:function(c,b){var d=c.pos.getc(true),e=c.getData("dim");
return this.nodeHelper.star.contains(d,b,e)
}}});
a.Plot.EdgeTypes=new B({none:P.empty,line:{render:function(c,e){var b=c.nodeFrom.pos.getc(true),d=c.nodeTo.pos.getc(true);
this.edgeHelper.line.render(b,d,e)
},contains:function(c,b){var d=c.nodeFrom.pos.getc(true),e=c.nodeTo.pos.getc(true);
return this.edgeHelper.line.contains(d,e,b,this.edge.epsilon)
}},arrow:{render:function(h,f){var d=h.nodeFrom.pos.getc(true),e=h.nodeTo.pos.getc(true),g=h.getData("dim"),c=h.data.$direction,b=(c&&c.length>1&&c[0]!=h.nodeFrom.id);
this.edgeHelper.arrow.render(d,e,g,b,f)
},contains:function(c,b){var d=c.nodeFrom.pos.getc(true),e=c.nodeTo.pos.getc(true);
return this.edgeHelper.arrow.contains(d,e,b,this.edge.epsilon)
}}})
})($jit.RGraph);
C.prototype.moebiusTransformation=function(c){var b=this.add(c);
var a=c.$conjugate().$prod(this);
a.x++;
return b.$div(a)
};
N.Util.moebiusTransformation=function(e,b,d,a,c){this.eachNode(e,function(h){for(var i=0;
i<d.length;
i++){var f=b[i].scale(-1),g=a?a:d[i];
h.getPos(d[i]).set(h.getPos(g).getc().moebiusTransformation(f))
}},c)
};
$jit.Hypertree=new B({Implements:[O,D,L.Radial],initialize:function(b){var c=$jit.Hypertree;
var a={radius:"auto",offset:0,Edge:{type:"hyperline"},duration:1500,fps:35};
this.controller=this.config=P.merge(E("Canvas","Node","Edge","Fx","Tips","NodeStyles","Events","Navigation","Controller","Label"),a,b);
var d=this.config;
if(d.useCanvas){this.canvas=d.useCanvas;
this.config.labelContainer=this.canvas.id+"-label"
}else{if(d.background){d.background=P.merge({type:"Circles"},d.background)
}this.canvas=new G(this,d);
this.config.labelContainer=(typeof d.injectInto=="string"?d.injectInto:d.injectInto.id)+"-label"
}this.graphOptions={klass:Q,Node:{selected:false,exist:true,drawn:true}};
this.graph=new N(this.graphOptions,this.config.Node,this.config.Edge);
this.labels=new c.Label[d.Label.type](this);
this.fx=new c.Plot(this,c);
this.op=new c.Op(this);
this.json=null;
this.root=null;
this.busy=false;
this.initializeExtras()
},createLevelDistanceFunc:function(){var b=this.getRadius();
var e=0,c=Math.max,a=this.config;
this.graph.eachNode(function(h){e=c(h._depth,e)
},"ignore");
e++;
var g=function(h){return function(k){k.scale=b;
var i=k._depth+1;
var j=0,l=Math.pow;
while(i){j+=l(h,i--)
}return j-a.offset
}
};
for(var d=0.51;
d<=1;
d+=0.01){var f=(1-Math.pow(d,e))/(1-d);
if(f>=2){return g(d-0.01)
}}return g(0.75)
},getRadius:function(){var b=this.config.radius;
if(b!=="auto"){return b
}var a=this.canvas.getSize();
return Math.min(a.width,a.height)/2
},refresh:function(a){if(a){this.reposition();
this.graph.eachNode(function(b){b.startPos.rho=b.pos.rho=b.endPos.rho;
b.startPos.theta=b.pos.theta=b.endPos.theta
})
}else{this.compute()
}this.plot()
},reposition:function(){this.compute("end");
var a=this.graph.getNode(this.root).pos.getc().scale(-1);
N.Util.moebiusTransformation(this.graph,[a],["end"],"end","ignore");
this.graph.eachNode(function(b){if(b.ignore){b.endPos.rho=b.pos.rho;
b.endPos.theta=b.pos.theta
}})
},plot:function(){this.fx.plot()
},onClick:function(c,b){var a=this.graph.getNode(c).pos.getc(true);
this.move(a,b)
},move:function(b,e){var a=A(b.x,b.y);
if(this.busy===false&&a.norm()<1){this.busy=true;
var c=this.graph.getClosestNodeToPos(a),d=this;
this.graph.computeLevels(c.id,0);
this.controller.onBeforeCompute(c);
e=P.merge({onComplete:P.empty},e||{});
this.fx.animate(P.merge({modes:["moebius"],hideLabels:true},e,{onComplete:function(){d.busy=false;
e.onComplete()
}}),a)
}}});
$jit.Hypertree.$extend=true;
(function(a){a.Op=new B({Implements:N.Op});
a.Plot=new B({Implements:N.Plot});
a.Label={};
a.Label.Native=new B({Implements:N.Label.Native,initialize:function(b){this.viz=b
},renderLabel:function(e,g,f){var c=e.getCtx();
var d=g.pos.getc(true);
var b=this.viz.getRadius();
c.fillText(g.name,d.x*b,d.y*b)
}});
a.Label.SVG=new B({Implements:N.Label.SVG,initialize:function(b){this.viz=b
},placeLabel:function(i,c,b){var k=c.pos.getc(true),f=this.viz.canvas,e=f.translateOffsetX,g=f.translateOffsetY,j=f.scaleOffsetX,l=f.scaleOffsetY,m=f.getSize(),h=this.viz.getRadius();
var d={x:Math.round((k.x*j)*h+e+m.width/2),y:Math.round((k.y*l)*h+g+m.height/2)};
i.setAttribute("x",d.x);
i.setAttribute("y",d.y);
b.onPlaceLabel(i,c)
}});
a.Label.HTML=new B({Implements:N.Label.HTML,initialize:function(b){this.viz=b
},placeLabel:function(i,b,n){var k=b.pos.getc(true),e=this.viz.canvas,d=e.translateOffsetX,f=e.translateOffsetY,j=e.scaleOffsetX,l=e.scaleOffsetY,m=e.getSize(),h=this.viz.getRadius();
var c={x:Math.round((k.x*j)*h+d+m.width/2),y:Math.round((k.y*l)*h+f+m.height/2)};
var g=i.style;
g.left=c.x+"px";
g.top=c.y+"px";
g.display=this.fitsInCanvas(c,e)?"":"none";
n.onPlaceLabel(i,b)
}});
a.Plot.NodeTypes=new B({none:{render:P.empty,contains:P.lambda(false)},circle:{render:function(d,c){var f=this.node,e=d.getData("dim"),b=d.pos.getc();
e=f.transform?e*(1-b.squaredNorm()):e;
b.$scale(d.scale);
if(e>0.2){this.nodeHelper.circle.render("fill",b,e,c)
}},contains:function(c,b){var e=c.getData("dim"),d=c.pos.getc().$scale(c.scale);
return this.nodeHelper.circle.contains(d,b,e)
}},ellipse:{render:function(c,f){var e=c.pos.getc().$scale(c.scale),d=c.getData("width"),b=c.getData("height");
this.nodeHelper.ellipse.render("fill",e,d,b,f)
},contains:function(d,f){var e=d.getData("width"),c=d.getData("height"),b=d.pos.getc().$scale(d.scale);
return this.nodeHelper.circle.contains(b,f,e,c)
}},square:{render:function(d,c){var f=this.node,e=d.getData("dim"),b=d.pos.getc();
e=f.transform?e*(1-b.squaredNorm()):e;
b.$scale(d.scale);
if(e>0.2){this.nodeHelper.square.render("fill",b,e,c)
}},contains:function(c,b){var e=c.getData("dim"),d=c.pos.getc().$scale(c.scale);
return this.nodeHelper.square.contains(d,b,e)
}},rectangle:{render:function(g,f){var c=this.node,e=g.getData("width"),b=g.getData("height"),d=g.pos.getc();
e=c.transform?e*(1-d.squaredNorm()):e;
b=c.transform?b*(1-d.squaredNorm()):b;
d.$scale(g.scale);
if(e>0.2&&b>0.2){this.nodeHelper.rectangle.render("fill",d,e,b,f)
}},contains:function(d,f){var e=d.getData("width"),c=d.getData("height"),b=d.pos.getc().$scale(d.scale);
return this.nodeHelper.rectangle.contains(b,f,e,c)
}},triangle:{render:function(d,c){var f=this.node,e=d.getData("dim"),b=d.pos.getc();
e=f.transform?e*(1-b.squaredNorm()):e;
b.$scale(d.scale);
if(e>0.2){this.nodeHelper.triangle.render("fill",b,e,c)
}},contains:function(c,b){var e=c.getData("dim"),d=c.pos.getc().$scale(c.scale);
return this.nodeHelper.triangle.contains(d,b,e)
}},star:{render:function(d,c){var f=this.node,e=d.getData("dim"),b=d.pos.getc();
e=f.transform?e*(1-b.squaredNorm()):e;
b.$scale(d.scale);
if(e>0.2){this.nodeHelper.star.render("fill",b,e,c)
}},contains:function(c,b){var e=c.getData("dim"),d=c.pos.getc().$scale(c.scale);
return this.nodeHelper.star.contains(d,b,e)
}}});
a.Plot.EdgeTypes=new B({none:P.empty,line:{render:function(c,f){var e=c.nodeFrom.pos.getc(true),b=c.nodeTo.pos.getc(true),d=c.nodeFrom.scale;
this.edgeHelper.line.render({x:e.x*d,y:e.y*d},{x:b.x*d,y:b.y*d},f)
},contains:function(c,f){var b=c.nodeFrom.pos.getc(true),d=c.nodeTo.pos.getc(true),e=c.nodeFrom.scale;
this.edgeHelper.line.contains({x:b.x*e,y:b.y*e},{x:d.x*e,y:d.y*e},f,this.edge.epsilon)
}},arrow:{render:function(i,g){var d=i.nodeFrom.pos.getc(true),e=i.nodeTo.pos.getc(true),c=i.nodeFrom.scale,f=i.getData("dim"),h=i.data.$direction,b=(h&&h.length>1&&h[0]!=i.nodeFrom.id);
this.edgeHelper.arrow.render({x:d.x*c,y:d.y*c},{x:e.x*c,y:e.y*c},f,b,g)
},contains:function(c,f){var b=c.nodeFrom.pos.getc(true),d=c.nodeTo.pos.getc(true),e=c.nodeFrom.scale;
this.edgeHelper.arrow.contains({x:b.x*e,y:b.y*e},{x:d.x*e,y:d.y*e},f,this.edge.epsilon)
}},hyperline:{render:function(c,f){var e=c.nodeFrom.pos.getc(),b=c.nodeTo.pos.getc(),d=this.viz.getRadius();
this.edgeHelper.hyperline.render(e,b,d,f)
},contains:P.lambda(false)}})
})($jit.Hypertree)
})();
function orgchartInline(){json_data=$(".chart-title").attr("data-ts-json");
json=eval("("+json_data+")");
getAllGroups(json,"<ul>");
ul=$("<ul>");
if(!json.data.image.fileReference){json.data.image.fileReference="/assets/images/dummy/contact.jpg"
}if(!json.data.jobTitle){json.data.jobTitle="n/a"
}if(!json.data.mobile){json.data.mobile="n/a"
}if(!json.data.ipt){json.data.ipt="n/a"
}if(!json.data.direct){json.data.direct="n/a"
}if(!json.data.email){json.data.email="n/a"
}$(".orgchartmobileimport ul:first").before("<ul class='topdog minion'><li><div class='contact biz-card'><div class='photo'><img src='"+json.data.image.fileReference+"'> </div><div class='contact-details'><h3 class='name'>"+json.data.name+" </h3><p class='title'><em>Job Title:</em>  "+json.data.jobTitle+"</p><ul><li class='mob'><em>Mobile:</em>  "+json.data.mobile+"</li><li class='tel'><em>IPT:</em>  "+json.data.ipt+"</li><li class='direct'><em>Direct:</em>  "+json.data.direct+"</li><li class='email'><em>Email:</em> <a data_name='"+json.data.name+"' data_email='"+json.data.email+"' href=mailto:"+json.data.email+"></a></li></ul></div></div><li><ul>");
function getAllGroups(jsonObject,ul){if(!jsonObject.data.image.fileReference){jsonObject.data.image.fileReference="/assets/images/dummy/contact.jpg"
}if(!jsonObject.data.jobTitle){jsonObject.data.jobTitle="n/a"
}if(!jsonObject.data.mobile){jsonObject.data.mobile="n/a"
}if(!jsonObject.data.ipt){jsonObject.data.ipt="n/a"
}if(!jsonObject.data.direct){jsonObject.data.direct="n/a"
}if(!jsonObject.data.email){jsonObject.data.email="n/a"
}template="<div class='contact biz-card'><div class='photo'><img src='"+jsonObject.data.image.fileReference+"'></div><div class='contact-details'><h3 class='name'>"+jsonObject.data.name+" </h3><p class='title'><em>Job Title:</em> "+jsonObject.data.jobTitle+"</p><ul><li class='mob'><em>Mobile:</em> "+jsonObject.data.mobile+"</li><li class='tel'><em>IPT:</em> "+jsonObject.data.ipt+"</li><li class='direct'><em>Direct:</em> "+jsonObject.data.direct+"</li><li class='email'><em>Email:</em> <a data_name='"+jsonObject.data.name+"' data_email='"+jsonObject.data.email+"' href=mailto:"+jsonObject.data.email+"></a></li></ul></div></div>";
if(jsonObject.hasOwnProperty("children")){$("<li>").html(template).appendTo(ul);
if(jsonObject.children.length>0){var ul2=$("<ul>").addClass("minion").appendTo($("<li>").appendTo(ul));
$(jsonObject.children).each(function(i,val){getAllGroups(val,ul2);
$(ul).appendTo(".orgchartmobileimport")
})
}else{}}else{}}}$(document).ready(function(){$(".function-bar-top").on("click",function(a){a.preventDefault();
$("html, body").animate({scrollTop:0},500)
});
$(".function-bar-print").on("click",function(a){a.preventDefault();
window.print()
});
$(".function-bar-forward").on("click",function(b){b.preventDefault();
var a=window.location;
var c="mailto:?subject=I thought you might like to read this page&body="+a;
document.location.href=c
})
});
function downloadstable(){enquire.register("screen and (min-width: 860px)",{setup:function(){$(".dloadTable").addClass("desktop")
},match:function(){$(".dloadTable").addClass("desktop");
$(".dloadTable .nav-item .drops").hide().prev().removeClass("open")
},unmatch:function(){$(".dloadTable").removeClass("desktop");
$(".dloadTable .nav-item .drops").show()
}});
$(".downloadTable .nav-item a.popupTrigger").on("click",function(){$(this).next(".drops").toggle().prev().toggleClass("open");
$(this).parentsUntil("tr").parent().siblings().find(".popupTrigger").removeClass("open").next().hide()
})
}$(document).ready(function(){if($(".downloadTable").length){downloadstable()
}});
(function(a){if(!a.omr){a.omr=new Object()
}a.omr.totemticker=function(c,b){var d=this;
d.el=c;
d.$el=a(c);
d.$el.data("omr.totemticker",d);
d.init=function(){d.options=a.extend({},a.omr.totemticker.defaultOptions,b);
d.ticker;
d.format_ticker();
d.setup_nav();
d.start_interval()
};
d.start_interval=function(){clearInterval(d.ticker);
if(d.options.direction=="up"){d.ticker=setInterval(function(){d.$el.find("li:last").detach().prependTo(d.$el).css("marginTop","-"+d.options.row_height);
d.$el.find("li:first").animate({marginTop:"0px"},d.options.speed,function(){})
},d.options.interval)
}else{d.ticker=setInterval(function(){d.$el.find("li:first").animate({marginTop:"-"+d.options.row_height},d.options.speed,function(){a(this).detach().css("marginTop","0").appendTo(d.$el)
})
},d.options.interval)
}};
d.reset_interval=function(){clearInterval(d.ticker);
d.start_interval()
};
d.stop_interval=function(){clearInterval(d.ticker)
};
d.format_ticker=function(){if(typeof(d.options.max_items)!="undefined"&&d.options.max_items!=null){var f=d.options.row_height.replace(/px/i,"");
var e=f*d.options.max_items;
d.$el.css({height:e+"px",overflow:"hidden"})
}else{d.$el.css({overflow:"hidden"})
}};
d.setup_nav=function(){if(typeof(d.options.stop)!="undefined"&&d.options.stop!=null){a(d.options.stop).click(function(){d.stop_interval();
return false
})
}if(typeof(d.options.start)!="undefined"&&d.options.start!=null){a(d.options.start).click(function(){d.start_interval();
return false
})
}if(typeof(d.options.previous)!="undefined"&&d.options.previous!=null){a(d.options.previous).click(function(){d.$el.find("li:last").detach().prependTo(d.$el).css("marginTop","-"+d.options.row_height);
d.$el.find("li:first").animate({marginTop:"0px"},d.options.speed,function(){d.reset_interval()
});
return false
})
}if(typeof(d.options.next)!="undefined"&&d.options.next!=null){a(d.options.next).click(function(){d.$el.find("li:first").animate({marginTop:"-"+d.options.row_height},d.options.speed,function(){a(this).detach().css("marginTop","0px").appendTo(d.$el);
d.reset_interval()
});
return false
})
}if(typeof(d.options.mousestop)!="undefined"&&d.options.mousestop===true){d.$el.mouseenter(function(){d.stop_interval()
}).mouseleave(function(){d.start_interval()
})
}};
d.debug_info=function(){console.log(d.options)
};
d.init()
};
a.omr.totemticker.defaultOptions={message:"Ticker Loaded",next:null,previous:null,stop:null,start:null,row_height:"100px",speed:800,interval:4000,max_items:null,mousestop:false,direction:"down"};
a.fn.totemticker=function(b){return this.each(function(){(new a.omr.totemticker(this,b))
})
}
})(jQuery);
function latestNewsScrollerMagic(){var varMousestop=false;
if($(".scroller-totem").attr("data-ts-scrolling")=="true"){varMousestop=true
}else{varMousestop=false
}var varSpeed=eval($(".scroller-totem").attr("data-ts-speed"));
var varInterval=eval($(".scroller-totem").attr("data-ts-interval"));
var varMax_items=$(".scroller-totem").attr("data-ts-maxItems");
var varDirection=$(".scroller-totem").attr("data-ts-direction");
$(".scroller-totem ul").totemticker({next:".next-story",previous:".prev-story",stop:".stop-story",start:".start-story",row_height:"60px",speed:varSpeed,interval:varInterval,max_items:varMax_items,mousestop:varMousestop,direction:varDirection});
$(".scroller li h3").each(function(){var maxwidth=85;
var $str=$(this);
if($str.text().length>maxwidth){$str.text($str.text().slice(0,maxwidth));
$str.html($(this).html()+"...")
}});
$(".scroller-btns a.start-story").addClass("active");
var stopbtn=$(".scroller-btns a.stop-story");
var startbtn=$(".scroller-btns a.start-story");
$(stopbtn).click(function(){$(this).addClass("active");
if($(startbtn).hasClass("active")){$(startbtn).removeClass("active")
}});
$(".scroller-btns a.start-story, .scroller-btns a.prev-story, .scroller-btns a.next-story").click(function(){if($(stopbtn).hasClass("active")){$(stopbtn).removeClass("active");
$(startbtn).addClass("active")
}})
}$(function(){latestNewsScrollerMagic()
});