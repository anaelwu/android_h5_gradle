/* Meiya 2016-05-31 16:19 */!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";var d=a("../../public/src/utils/zepto.lazyload"),e=a("./tpl/template.js"),f=a("./tpl/list"),g=a("./tpl/display.js"),h=a("es6-promise"),i=h.Promise,j=MY.appBridge,k=$(".container"),l=$("#J_LiveRooms"),m=$("#J_Display"),n=MY.isApp?MY.isDevApp:!0;e.helper("qiniu",function(a){return/http:\//.test(a)||(a=(n?"http://meiya-dev.qiniudn.com/":"http://st-qn.meiyaapp.com/")+a),a});var o={};o.user={id:0,load:function(){var a=this,b=new i(function(b,c){MY.appBridge.callHandler("get_user_id",function(c){a.id=c.user_id?+c.user_id:0,b(a.id)})});return b},init:function(){this.load()}},o.list={page:1,isLoading:!1,load:function(){var a=this,b=new i(function(b,c){MY.xhr.api({url:"/v1/live-rooms",type:"get",data:{page:a.page,per_page:20},success:function(c){a.data=c.data,b(c.data)},error:function(a){c(a)}})});return b},init:function(){var a=this;k.append($('<div class="J_Loading loading"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>')),this.load().then(function(){a.render()})},render:function(){if(1==this.page&&this.data.length){var a=this.data[0];a.priority&&(this.data.splice(0,1),m.html(g({item:a})))}var b=f({data:this.data,id:o.user.id});k.find(".J_Loading").remove(),this.data.length?this.isLoading=!1:k.append($('<div class="end">没有更多内容啦</div>')),1==this.page?l.html(b):l.append(b),setTimeout(function(){new d(".J_LazyPic",{failure_limit:10})},1e3)},event:function(){var a=this;k.delegate(".J_Webview","tap",function(){var a=$(this),b=a.data("page");o.gotopage(b)}),$(window).scroll(function(b){var c=$("body"),d=c.scrollTop(),e=c.height(),f=$(window).height();100>e-d-f&&(a.isLoading||(a.isLoading=!0,a.page+=1,a.init()))})}},o.gotopage=function(a){if(a){var b=/meiya:\/\//.test(a)?"navi_page_action":"navi_webview_action";j.callHandler(b,a)}},o.init=function(){o.user.init(),o.list.init(),o.list.event()},o.init()},{"../../public/src/utils/zepto.lazyload":10,"./tpl/display.js":2,"./tpl/list":3,"./tpl/template.js":4,"es6-promise":5}],2:[function(a,b,c){"use strict";var d=a("./template");b.exports=d("display",function(a){var b=this,c=b.$helpers,d=a.item,e=b.$string,f="";return f+='<a class="J_Webview" ',1==d.status?(f+=" data-page='meiya://live/",f+=e(d.id),f+="' "):3==d.status&&(f+=" data-page='meiya://live-replay/",f+=e(d.id),f+="' "),f+='> <div class="cover"> <img class="J_LazyPic" src="./img/lazy-bg-small.png" ',d.cover_image_url&&(f+='data-original="',f+=e(c.qiniu(d.cover_image_url)),f+='?imageView2/1/w/640"'),f+="> ",1==d.status?f+=' <span class="label"><i class="icon icon-live-big"></i></span> ':3==d.status&&(f+=' <span class="label"><i class="icon icon-replay-big"></i></span> '),f+=' </div> <div class="infos"> <div class="user J_Webview" data-page=\'meiya://users/',f+=e(d.user.id),f+="'> <div class=\"avatar\"> <img src='",d.user.avatar_url?(f+=e(d.user.avatar_url),f+="?imageView2/1/w/140"):f+="../public/img/default-avatar.png",f+="'> ",d.user.m_idol?f+=' <span class="m-idol icon-m-big"></span> ':3==d.user.type&&(f+=' <span class="talent icon-v-big"></span> '),f+=' </div> <span class="username">',f+=e(d.user.username),f+='</span> </div> <span class="view">',f+=e(d.view_count),f+="人在看</span> ",d.title&&(f+='<h3 class="title">',f+=e(d.title),f+="</h3>"),f+=" </div> </a>",new String(f)})},{"./template":4}],3:[function(a,b,c){"use strict";var d=a("./template");b.exports=d("list",function(a){var b=this,c=b.$helpers,d=b.$each,e=a.data,f=(a.item,a.i,b.$string),g="";return d(e,function(a){g+=' <li class="item"> <a class="J_Webview" ',1==a.status?(g+=" data-page='meiya://live/",g+=f(a.id),g+="' "):3==a.status&&(g+=" data-page='meiya://live-replay/",g+=f(a.id),g+="' "),g+='> <div class="cover"> <img class="J_LazyPic" src="./img/lazy-bg-small.png" ',a.cover_image_url&&(g+='data-original="',g+=f(c.qiniu(a.cover_image_url)),g+='?imageView2/2/w/320"'),g+="> ",1==a.status?g+=' <span class="label"><i class="icon icon-live-small"></i></span> ':3==a.status&&(g+=' <span class="label"><i class="icon icon-replay-small"></i></span> '),g+=' <span class="view icon icon-view">',g+=f(a.view_count),g+='</span> </div> <div class="infos"> <div class="user J_Webview" data-page=\'meiya://users/',g+=f(a.user.id),g+="'> <div class=\"avatar\"> <img src='",a.user.avatar_url?(g+=f(a.user.avatar_url),g+="?imageView2/1/w/140"):g+="../public/img/default-avatar.png",g+="'> ",a.user.m_idol?g+=' <span class="m-idol icon-m"></span> ':3==a.user.type&&(g+=' <span class="talent icon-v"></span> '),g+=' </div> <span class="username">',g+=f(a.user.username),g+="</span> </div> ",a.title&&(g+='<h3 class="title">',g+=f(a.title),g+="</h3>"),g+=" </div> </a> </li> "}),new String(g)})},{"./template":4}],4:[function(a,b,c){"use strict";!function(){function a(a,b){return(/string|function/.test(typeof b)?i:h)(a,b)}function c(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?c(a.call(a)):""),a}function d(a){return m[a]}function e(a){return c(a).replace(/&(?![\w#]+;)|[<>"']/g,d)}function f(a,b){if(n(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function g(a,b){var c=/(\/)[^\/]+\1\.\.\1/,d=("./"+a).replace(/[^\/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function h(b,c){var d=a.get(b)||j({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function i(a,b){if("string"==typeof b){var c=b;b=function(){return new l(c)}}var d=k[a]=function(c){try{return new b(c,a)+""}catch(d){return j(d)()}};return d.prototype=b.prototype=o,d.toString=function(){return b+""},d}function j(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var k=a.cache={},l=window.String,m={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},n=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},o=a.utils={$helpers:{},$include:function(a,b,c){return a=g(c,a),h(a,b)},$string:c,$escape:e,$each:f},p=a.helpers=o.$helpers;a.get=function(a){return k[a.replace(/^\.\//,"")]},a.helper=function(a,b){p[a]=b},b.exports=a}()},{}],5:[function(a,b,c){(function(c,d){(function(){"use strict";function e(a){return"function"==typeof a||"object"==typeof a&&null!==a}function f(a){return"function"==typeof a}function g(a){T=a}function h(a){X=a}function i(){return function(){c.nextTick(n)}}function j(){return function(){S(n)}}function k(){var a=0,b=new $(n),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function l(){var a=new MessageChannel;return a.port1.onmessage=n,function(){a.port2.postMessage(0)}}function m(){return function(){setTimeout(n,1)}}function n(){for(var a=0;W>a;a+=2){var b=ba[a],c=ba[a+1];b(c),ba[a]=void 0,ba[a+1]=void 0}W=0}function o(){try{var b=a,c=b("vertx");return S=c.runOnLoop||c.runOnContext,j()}catch(d){return m()}}function p(a,b){var c=this,d=c._state;if(d===fa&&!a||d===ga&&!b)return this;var e=new this.constructor(r),f=c._result;if(d){var g=arguments[d-1];X(function(){H(d,e,g,f)})}else D(c,e,a,b);return e}function q(a){var b=this;if(a&&"object"==typeof a&&a.constructor===b)return a;var c=new b(r);return z(c,a),c}function r(){}function s(){return new TypeError("You cannot resolve a promise with itself")}function t(){return new TypeError("A promises callback cannot return that same promise.")}function u(a){try{return a.then}catch(b){return ha.error=b,ha}}function v(a,b,c,d){try{a.call(b,c,d)}catch(e){return e}}function w(a,b,c){X(function(a){var d=!1,e=v(c,b,function(c){d||(d=!0,b!==c?z(a,c):B(a,c))},function(b){d||(d=!0,C(a,b))},"Settle: "+(a._label||" unknown promise"));!d&&e&&(d=!0,C(a,e))},a)}function x(a,b){b._state===fa?B(a,b._result):b._state===ga?C(a,b._result):D(b,void 0,function(b){z(a,b)},function(b){C(a,b)})}function y(a,b,c){b.constructor===a.constructor&&c===ca&&constructor.resolve===da?x(a,b):c===ha?C(a,ha.error):void 0===c?B(a,b):f(c)?w(a,b,c):B(a,b)}function z(a,b){a===b?C(a,s()):e(b)?y(a,b,u(b)):B(a,b)}function A(a){a._onerror&&a._onerror(a._result),E(a)}function B(a,b){a._state===ea&&(a._result=b,a._state=fa,0!==a._subscribers.length&&X(E,a))}function C(a,b){a._state===ea&&(a._state=ga,a._result=b,X(A,a))}function D(a,b,c,d){var e=a._subscribers,f=e.length;a._onerror=null,e[f]=b,e[f+fa]=c,e[f+ga]=d,0===f&&a._state&&X(E,a)}function E(a){var b=a._subscribers,c=a._state;if(0!==b.length){for(var d,e,f=a._result,g=0;g<b.length;g+=3)d=b[g],e=b[g+c],d?H(c,d,e,f):e(f);a._subscribers.length=0}}function F(){this.error=null}function G(a,b){try{return a(b)}catch(c){return ia.error=c,ia}}function H(a,b,c,d){var e,g,h,i,j=f(c);if(j){if(e=G(c,d),e===ia?(i=!0,g=e.error,e=null):h=!0,b===e)return void C(b,t())}else e=d,h=!0;b._state!==ea||(j&&h?z(b,e):i?C(b,g):a===fa?B(b,e):a===ga&&C(b,e))}function I(a,b){try{b(function(b){z(a,b)},function(b){C(a,b)})}catch(c){C(a,c)}}function J(a){return new oa(this,a).promise}function K(a){function b(a){z(e,a)}function c(a){C(e,a)}var d=this,e=new d(r);if(!V(a))return C(e,new TypeError("You must pass an array to race.")),e;for(var f=a.length,g=0;e._state===ea&&f>g;g++)D(d.resolve(a[g]),void 0,b,c);return e}function L(a){var b=this,c=new b(r);return C(c,a),c}function M(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function O(a){this._id=ma++,this._state=void 0,this._result=void 0,this._subscribers=[],r!==a&&("function"!=typeof a&&M(),this instanceof O?I(this,a):N())}function P(a,b){this._instanceConstructor=a,this.promise=new a(r),Array.isArray(b)?(this._input=b,this.length=b.length,this._remaining=b.length,this._result=new Array(this.length),0===this.length?B(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&B(this.promise,this._result))):C(this.promise,this._validationError())}function Q(){var a;if("undefined"!=typeof d)a=d;else if("undefined"!=typeof self)a=self;else try{a=Function("return this")()}catch(b){throw new Error("polyfill failed because global object is unavailable in this environment")}var c=a.Promise;(!c||"[object Promise]"!==Object.prototype.toString.call(c.resolve())||c.cast)&&(a.Promise=na)}var R;R=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)};var S,T,U,V=R,W=0,X=function(a,b){ba[W]=a,ba[W+1]=b,W+=2,2===W&&(T?T(n):U())},Y="undefined"!=typeof window?window:void 0,Z=Y||{},$=Z.MutationObserver||Z.WebKitMutationObserver,_="undefined"!=typeof c&&"[object process]"==={}.toString.call(c),aa="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ba=new Array(1e3);U=_?i():$?k():aa?l():void 0===Y&&"function"==typeof a?o():m();var ca=p,da=q,ea=void 0,fa=1,ga=2,ha=new F,ia=new F,ja=J,ka=K,la=L,ma=0,na=O;O.all=ja,O.race=ka,O.resolve=da,O.reject=la,O._setScheduler=g,O._setAsap=h,O._asap=X,O.prototype={constructor:O,then:ca,"catch":function(a){return this.then(null,a)}};var oa=P;P.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},P.prototype._enumerate=function(){for(var a=this.length,b=this._input,c=0;this._state===ea&&a>c;c++)this._eachEntry(b[c],c)},P.prototype._eachEntry=function(a,b){var c=this._instanceConstructor,d=c.resolve;if(d===da){var e=u(a);if(e===ca&&a._state!==ea)this._settledAt(a._state,b,a._result);else if("function"!=typeof e)this._remaining--,this._result[b]=a;else if(c===na){var f=new c(r);y(f,a,e),this._willSettleAt(f,b)}else this._willSettleAt(new c(function(b){b(a)}),b)}else this._willSettleAt(d(a),b)},P.prototype._settledAt=function(a,b,c){var d=this.promise;d._state===ea&&(this._remaining--,a===ga?C(d,c):this._result[b]=c),0===this._remaining&&B(d,this._result)},P.prototype._willSettleAt=function(a,b){var c=this;D(a,void 0,function(a){c._settledAt(fa,b,a)},function(a){c._settledAt(ga,b,a)})};var pa=Q,qa={Promise:na,polyfill:pa};"function"==typeof define&&define.amd?define(function(){return qa}):"undefined"!=typeof b&&b.exports?b.exports=qa:"undefined"!=typeof this&&(this.ES6Promise=qa),pa()}).call(this)}).call(this,a("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:6}],6:[function(a,b,c){function d(){k=!1,h.length?j=h.concat(j):l=-1,j.length&&e()}function e(){if(!k){var a=setTimeout(d);k=!0;for(var b=j.length;b;){for(h=j,j=[];++l<b;)h[l].run();l=-1,b=j.length}h=null,k=!1,clearTimeout(a)}}function f(a,b){this.fun=a,this.array=b}function g(){}var h,i=b.exports={},j=[],k=!1,l=-1;i.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];j.push(new f(a,b)),1!==j.length||k||setTimeout(e,0)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.binding=function(a){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(a){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],7:[function(a,b,c){"use strict";function d(a){window.WebViewJavascriptBridge?a(WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",function(){a(WebViewJavascriptBridge)},!1)}function e(a,b,c){switch(a){case"share_channel_action":if(f.system.iPhone&&g.Version(f.app.ver,"2.3.0")<=0){var d=b.weibo;"object"==typeof d&&(d.title=d.title+d.url,d.content=d.content+d.url)}break;case"get_query_string":if("function"==typeof c){var e=location.search.replace(/^\?/,""),h=location.hash.replace(/^\#/,""),i=e+(e?"#":"")+h;f.system.iPhone&&-1===g.Version(f.app.ver,"2.7.0")?c({query_string:i}):f.system.Android&&-1===g.Version(f.app.ver,"2.3.0")&&c({query_string:i})}}}var f=a("./ua"),g=window.MY=window.MY||{},h={defaultHandler:function(a,b){b("got")},send:function(a,b){d(function(c){c.send(a,function(a){"function"==typeof b&&b(a)})})},callHandler:function(a,b,c){"function"==typeof b&&(c=b,b=null),e.call(null,a,b,c),d(function(d){d.callHandler(a,b,function(a){"function"==typeof c&&c(a)})})},registerHandler:function(a,b){d(function(c){c.registerHandler(a,function(a){"function"==typeof b&&b(a)})})}};d(function(a){a.init&&a.init&&a.init(h.defaultHandler)}),h.connectWebViewJavascriptBridge=d,g.appBridge=h,b.exports=h},{"./ua":9}],8:[function(a,b,c){"use strict";var d=a("./app-bridge"),e=function(){return this};e.prototype={constructor:e,onerror:function(a){var b=a.target.src;this.dataset.ip||e.queryIP(b).done(function(a,b){this.dataset.ip=a,this.src=this.src.replace(b,a)}.bind(this))}},e.queryIP=function(a){var b=$.Deferred(),c=/^https?:\/\/([^:\/\?#]+)/,e=a.match(c);if(e&&e.length){var f=e[1];d.callHandler("query_ip",{host:f},function(a){b.resolve(a.ip,f)})}return b.promise()},b.exports=new e},{"./app-bridge":7}],9:[function(a,b,c){"use strict";var d={ie:0,gecko:0,webkit:0,khtml:0,opera:0,ver:""},e={ie:0,firefox:0,safari:0,konq:0,opera:0,chrome:0,ver:""},f={win:!1,mac:!1,x11:!1,iPhone:!1,iPad:!1,iOS:!1,Android:!1,winPhone:!1},g=!1,h=navigator.userAgent,i=navigator.platform;if(/(Meiya(?:-dev)?)/.test(h)){var j=RegExp.$1;g={name:j,ver:/Meiya(?:-dev)?\/(\d+\.\d+\.\d+(?:\.\d+)?)\D/.exec(h)[1],isDev:/Meiya-dev/.test(j)}}if(f.win=0==i.indexOf("Win"),f.mac=0==i.indexOf("Mac"),f.x11=0==i.indexOf("X11")||0==i.indexOf("Linux"),f.win&&/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(h))if("NT"==RegExp.$1)switch(RegExp.$2){case"5.0":f.win="2000";break;case"5.1":f.win="XP";break;case"6.0":f.win="Vista";break;case"6.1":f.win="7";break;default:f.win="NT"}else"9x"==RegExp.$1?f.win="ME":f.win=RegExp.$1;if(f.iPhone=h.indexOf("iPhone")>-1,f.iPad=h.indexOf("iPad")>-1,f.mac&&h.indexOf("Mobile")>-1&&(/CPU (?:iPhone )?OS (\d+_\d+)/.test(h)?f.iOS=parseFloat(RegExp.$1.replace("_",".")):f.iOS=2),/Android (\d+\.\d+)/.test(h)&&(f.Android=parseFloat(RegExp.$1)),"CE"==f.win?f.winPhone=f.win:"Ph"==f.win&&/Windows Phone OS (\d+\.\d+)/.test(h)&&(f.win="Phone",f.winPhone=parseFloat(RegExp.$1)),window.opera)d.ver=e.ver=window.opera.version(),d.opera=e.opera=parseFloat(d.ver);else if(/AppleWebKit\/(\S+)/.test(h))if(d.ver=RegExp.$1,d.webkit=parseFloat(d.ver),/Chrome\/(\S+)/.test(h))e.ver=RegExp.$1,e.chrome=parseFloat(e.ver);else if(/Version\/(\S+)/.test(h))e.ver=RegExp.$1,e.safari=parseFloat(e.ver);else{var k=1;k=d.webkit<100?1:d.webkit<312?1.2:d.webkit<412?1.3:2,e.safari=e.ver=k}else/KHTML\/(\S+)/.test(h)||/Konqueror\/([^;]+)/.test(h)?(d.ver=e.ver=RegExp.$1,d.khtml=e.konq=parseFloat(d.ver)):/rv:([^\)]+)\) Gecko\/\d{8}/.test(h)?(d.ver=RegExp.$1,d.gecko=parseFloat(d.ver),/Firefox\/(\S+)/.test(h)&&(e.ver=RegExp.$1,e.firefox=parseFloat(e.ver))):/MISE ([^;]+)/.test(h)&&(d.ver=e.ver=RegExp.$1,d.ie=e.ie=parseFloat(d.ver));b.exports={engine:d,browser:e,system:f,app:g}},{}],10:[function(a,b,c){"use strict";var d=(a("./app-bridge"),a("./images")),e=$(window),f={elements:null,threshold:0,failure_limit:0,event:"scroll",effect:"show",container:window,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"},g=function(a,b){var c=this;"object"==typeof a&&(b=a,a=b.elements);var g=this.$elements=$(a);b=$.extend(f,b),b.elements||(b.elements=a),this.options=b;var h=this.$container=void 0===b.container||b.container===window?e:$(b.container);return 0===b.event.indexOf("scroll")&&h.on(b.event,function(){c.update()}),g.each(function(){var a=this,e=$(a);a.loaded=!1,(void 0===e.attr("src")||e.attr("src")===!1)&&e.is("img")&&e.attr("src",b.placeholder),e.one("appear",function(){if(!this.loaded){if(b.appear){var f=g.length;b.appear.call(a,f,b)}$("<img />").on("error",d.onerror).on("load",function(){var d=e.attr("data-"+b.data_attribute);e.hide(),e.is("img")?e.attr("src",d):e.css("background-image","url('"+d+"')"),e[b.effect](b.effect_speed),a.loaded=!0;var f=$.grep(g,function(a){return!a.loaded});if(g=c.$element=$(f),b.load){var h=g.length;b.load.call(a,h,b)}}).attr("src",e.attr("data-"+b.data_attribute))}}),0!==b.event.indexOf("scroll")&&e.on(b.event,function(){a.loaded||e.trigger("appear")})}),e.on("resize",function(){c.update()}),$(document).ready(function(){c.update()}),this};g.prototype={constructor:g,visible:function(a){return a=$(a),!(!a.width()&&!a.height())&&"none"!==a.css("display")},update:function(){var a=this,b=0,c=this.$elements,d=this.options;c.each(function(){var c=$(this);if(!d.skip_invisible||a.visible(this))if(a.abovethetop(this,d)||a.leftofbegin(this,d));else if(a.belowthefold(this,d)||a.rightoffold(this,d)){if(++b>d.failure_limit)return!1}else c.trigger("appear"),b=0})},abovethetop:function(a,b){var c;return c=void 0===b.container||b.container===window?e.scrollTop():$(b.container).offset().top,c>=$(a).offset().top+b.threshold+$(a).height()},leftofbegin:function(a,b){var c;return c=void 0===b.container||b.container===window?e.scrollLeft():$(b.container).offset().left,c>=$(a).offset().left+b.threshold+$(a).width()},belowthefold:function(a,b){var c;return c=void 0===b.container||b.container===window?(window.innerHeight?window.innerHeight:e.height())+e.scrollTop():$(b.container).offset().top+$(b.container).height(),c<=$(a).offset().top-b.threshold},rightoffold:function(a,b){var c;return c=void 0===b.container||b.container===window?e.width()+e.scrollLeft():$(b.container).offset().left+$(b.container).width(),c<=$(a).offset().left-b.threshold}},b.exports=g},{"./app-bridge":7,"./images":8}]},{},[1]);