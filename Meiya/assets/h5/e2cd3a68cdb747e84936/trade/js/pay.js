/* Meiya 2016-05-26 10:47 */!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(c,d){(function(){"use strict";function e(a){return"function"==typeof a||"object"==typeof a&&null!==a}function f(a){return"function"==typeof a}function g(a){T=a}function h(a){X=a}function i(){return function(){c.nextTick(n)}}function j(){return function(){S(n)}}function k(){var a=0,b=new $(n),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function l(){var a=new MessageChannel;return a.port1.onmessage=n,function(){a.port2.postMessage(0)}}function m(){return function(){setTimeout(n,1)}}function n(){for(var a=0;W>a;a+=2){var b=ba[a],c=ba[a+1];b(c),ba[a]=void 0,ba[a+1]=void 0}W=0}function o(){try{var b=a,c=b("vertx");return S=c.runOnLoop||c.runOnContext,j()}catch(d){return m()}}function p(a,b){var c=this,d=c._state;if(d===fa&&!a||d===ga&&!b)return this;var e=new this.constructor(r),f=c._result;if(d){var g=arguments[d-1];X(function(){H(d,e,g,f)})}else D(c,e,a,b);return e}function q(a){var b=this;if(a&&"object"==typeof a&&a.constructor===b)return a;var c=new b(r);return z(c,a),c}function r(){}function s(){return new TypeError("You cannot resolve a promise with itself")}function t(){return new TypeError("A promises callback cannot return that same promise.")}function u(a){try{return a.then}catch(b){return ha.error=b,ha}}function v(a,b,c,d){try{a.call(b,c,d)}catch(e){return e}}function w(a,b,c){X(function(a){var d=!1,e=v(c,b,function(c){d||(d=!0,b!==c?z(a,c):B(a,c))},function(b){d||(d=!0,C(a,b))},"Settle: "+(a._label||" unknown promise"));!d&&e&&(d=!0,C(a,e))},a)}function x(a,b){b._state===fa?B(a,b._result):b._state===ga?C(a,b._result):D(b,void 0,function(b){z(a,b)},function(b){C(a,b)})}function y(a,b,c){b.constructor===a.constructor&&c===ca&&constructor.resolve===da?x(a,b):c===ha?C(a,ha.error):void 0===c?B(a,b):f(c)?w(a,b,c):B(a,b)}function z(a,b){a===b?C(a,s()):e(b)?y(a,b,u(b)):B(a,b)}function A(a){a._onerror&&a._onerror(a._result),E(a)}function B(a,b){a._state===ea&&(a._result=b,a._state=fa,0!==a._subscribers.length&&X(E,a))}function C(a,b){a._state===ea&&(a._state=ga,a._result=b,X(A,a))}function D(a,b,c,d){var e=a._subscribers,f=e.length;a._onerror=null,e[f]=b,e[f+fa]=c,e[f+ga]=d,0===f&&a._state&&X(E,a)}function E(a){var b=a._subscribers,c=a._state;if(0!==b.length){for(var d,e,f=a._result,g=0;g<b.length;g+=3)d=b[g],e=b[g+c],d?H(c,d,e,f):e(f);a._subscribers.length=0}}function F(){this.error=null}function G(a,b){try{return a(b)}catch(c){return ia.error=c,ia}}function H(a,b,c,d){var e,g,h,i,j=f(c);if(j){if(e=G(c,d),e===ia?(i=!0,g=e.error,e=null):h=!0,b===e)return void C(b,t())}else e=d,h=!0;b._state!==ea||(j&&h?z(b,e):i?C(b,g):a===fa?B(b,e):a===ga&&C(b,e))}function I(a,b){try{b(function(b){z(a,b)},function(b){C(a,b)})}catch(c){C(a,c)}}function J(a){return new oa(this,a).promise}function K(a){function b(a){z(e,a)}function c(a){C(e,a)}var d=this,e=new d(r);if(!V(a))return C(e,new TypeError("You must pass an array to race.")),e;for(var f=a.length,g=0;e._state===ea&&f>g;g++)D(d.resolve(a[g]),void 0,b,c);return e}function L(a){var b=this,c=new b(r);return C(c,a),c}function M(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function O(a){this._id=ma++,this._state=void 0,this._result=void 0,this._subscribers=[],r!==a&&("function"!=typeof a&&M(),this instanceof O?I(this,a):N())}function P(a,b){this._instanceConstructor=a,this.promise=new a(r),Array.isArray(b)?(this._input=b,this.length=b.length,this._remaining=b.length,this._result=new Array(this.length),0===this.length?B(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&B(this.promise,this._result))):C(this.promise,this._validationError())}function Q(){var a;if("undefined"!=typeof d)a=d;else if("undefined"!=typeof self)a=self;else try{a=Function("return this")()}catch(b){throw new Error("polyfill failed because global object is unavailable in this environment")}var c=a.Promise;(!c||"[object Promise]"!==Object.prototype.toString.call(c.resolve())||c.cast)&&(a.Promise=na)}var R;R=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)};var S,T,U,V=R,W=0,X=function(a,b){ba[W]=a,ba[W+1]=b,W+=2,2===W&&(T?T(n):U())},Y="undefined"!=typeof window?window:void 0,Z=Y||{},$=Z.MutationObserver||Z.WebKitMutationObserver,_="undefined"!=typeof c&&"[object process]"==={}.toString.call(c),aa="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ba=new Array(1e3);U=_?i():$?k():aa?l():void 0===Y&&"function"==typeof a?o():m();var ca=p,da=q,ea=void 0,fa=1,ga=2,ha=new F,ia=new F,ja=J,ka=K,la=L,ma=0,na=O;O.all=ja,O.race=ka,O.resolve=da,O.reject=la,O._setScheduler=g,O._setAsap=h,O._asap=X,O.prototype={constructor:O,then:ca,"catch":function(a){return this.then(null,a)}};var oa=P;P.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},P.prototype._enumerate=function(){for(var a=this.length,b=this._input,c=0;this._state===ea&&a>c;c++)this._eachEntry(b[c],c)},P.prototype._eachEntry=function(a,b){var c=this._instanceConstructor,d=c.resolve;if(d===da){var e=u(a);if(e===ca&&a._state!==ea)this._settledAt(a._state,b,a._result);else if("function"!=typeof e)this._remaining--,this._result[b]=a;else if(c===na){var f=new c(r);y(f,a,e),this._willSettleAt(f,b)}else this._willSettleAt(new c(function(b){b(a)}),b)}else this._willSettleAt(d(a),b)},P.prototype._settledAt=function(a,b,c){var d=this.promise;d._state===ea&&(this._remaining--,a===ga?C(d,c):this._result[b]=c),0===this._remaining&&B(d,this._result)},P.prototype._willSettleAt=function(a,b){var c=this;D(a,void 0,function(a){c._settledAt(fa,b,a)},function(a){c._settledAt(ga,b,a)})};var pa=Q,qa={Promise:na,polyfill:pa};"function"==typeof define&&define.amd?define(function(){return qa}):"undefined"!=typeof b&&b.exports?b.exports=qa:"undefined"!=typeof this&&(this.ES6Promise=qa),pa()}).call(this)}).call(this,a("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:2}],2:[function(a,b,c){function d(){k=!1,h.length?j=h.concat(j):l=-1,j.length&&e()}function e(){if(!k){var a=setTimeout(d);k=!0;for(var b=j.length;b;){for(h=j,j=[];++l<b;)h[l].run();l=-1,b=j.length}h=null,k=!1,clearTimeout(a)}}function f(a,b){this.fun=a,this.array=b}function g(){}var h,i=b.exports={},j=[],k=!1,l=-1;i.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];j.push(new f(a,b)),1!==j.length||k||setTimeout(e,0)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.binding=function(a){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(a){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],3:[function(a,b,c){"use strict";function d(a){window.WebViewJavascriptBridge?a(WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",function(){a(WebViewJavascriptBridge)},!1)}function e(a,b,c){switch(a){case"share_channel_action":if(f.system.iPhone&&g.Version(f.app.ver,"2.3.0")<=0){var d=b.weibo;"object"==typeof d&&(d.title=d.title+d.url,d.content=d.content+d.url)}break;case"get_query_string":if("function"==typeof c){var e=location.search.replace(/^\?/,""),h=location.hash.replace(/^\#/,""),i=e+(e?"#":"")+h;f.system.iPhone&&-1===g.Version(f.app.ver,"2.7.0")?c({query_string:i}):f.system.Android&&-1===g.Version(f.app.ver,"2.3.0")&&c({query_string:i})}}}var f=a("./ua"),g=window.MY=window.MY||{},h={defaultHandler:function(a,b){b("got")},send:function(a,b){d(function(c){c.send(a,function(a){"function"==typeof b&&b(a)})})},callHandler:function(a,b,c){"function"==typeof b&&(c=b,b=null),e.call(null,a,b,c),d(function(d){d.callHandler(a,b,function(a){"function"==typeof c&&c(a)})})},registerHandler:function(a,b){d(function(c){c.registerHandler(a,function(a){"function"==typeof b&&b(a)})})}};d(function(a){a.init&&a.init&&a.init(h.defaultHandler)}),h.connectWebViewJavascriptBridge=d,g.appBridge=h,b.exports=h},{"./ua":5}],4:[function(a,b,c){"use strict";var d=a("./app-bridge"),e=function(){return this};e.prototype={constructor:e,onerror:function(a){var b=a.target.src;this.dataset.ip||e.queryIP(b).done(function(a,b){this.dataset.ip=a,this.src=this.src.replace(b,a)}.bind(this))}},e.queryIP=function(a){var b=$.Deferred(),c=/^https?:\/\/([^:\/\?#]+)/,e=a.match(c);if(e&&e.length){var f=e[1];d.callHandler("query_ip",{host:f},function(a){b.resolve(a.ip,f)})}return b.promise()},b.exports=new e},{"./app-bridge":3}],5:[function(a,b,c){"use strict";var d={ie:0,gecko:0,webkit:0,khtml:0,opera:0,ver:""},e={ie:0,firefox:0,safari:0,konq:0,opera:0,chrome:0,ver:""},f={win:!1,mac:!1,x11:!1,iPhone:!1,iPad:!1,iOS:!1,Android:!1,winPhone:!1},g=!1,h=navigator.userAgent,i=navigator.platform;if(/(Meiya(?:-dev)?)/.test(h)){var j=RegExp.$1;g={name:j,ver:/Meiya(?:-dev)?\/(\d+\.\d+\.\d+(?:\.\d+)?)\D/.exec(h)[1],isDev:/Meiya-dev/.test(j)}}if(f.win=0==i.indexOf("Win"),f.mac=0==i.indexOf("Mac"),f.x11=0==i.indexOf("X11")||0==i.indexOf("Linux"),f.win&&/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(h))if("NT"==RegExp.$1)switch(RegExp.$2){case"5.0":f.win="2000";break;case"5.1":f.win="XP";break;case"6.0":f.win="Vista";break;case"6.1":f.win="7";break;default:f.win="NT"}else"9x"==RegExp.$1?f.win="ME":f.win=RegExp.$1;if(f.iPhone=h.indexOf("iPhone")>-1,f.iPad=h.indexOf("iPad")>-1,f.mac&&h.indexOf("Mobile")>-1&&(/CPU (?:iPhone )?OS (\d+_\d+)/.test(h)?f.iOS=parseFloat(RegExp.$1.replace("_",".")):f.iOS=2),/Android (\d+\.\d+)/.test(h)&&(f.Android=parseFloat(RegExp.$1)),"CE"==f.win?f.winPhone=f.win:"Ph"==f.win&&/Windows Phone OS (\d+\.\d+)/.test(h)&&(f.win="Phone",f.winPhone=parseFloat(RegExp.$1)),window.opera)d.ver=e.ver=window.opera.version(),d.opera=e.opera=parseFloat(d.ver);else if(/AppleWebKit\/(\S+)/.test(h))if(d.ver=RegExp.$1,d.webkit=parseFloat(d.ver),/Chrome\/(\S+)/.test(h))e.ver=RegExp.$1,e.chrome=parseFloat(e.ver);else if(/Version\/(\S+)/.test(h))e.ver=RegExp.$1,e.safari=parseFloat(e.ver);else{var k=1;k=d.webkit<100?1:d.webkit<312?1.2:d.webkit<412?1.3:2,e.safari=e.ver=k}else/KHTML\/(\S+)/.test(h)||/Konqueror\/([^;]+)/.test(h)?(d.ver=e.ver=RegExp.$1,d.khtml=e.konq=parseFloat(d.ver)):/rv:([^\)]+)\) Gecko\/\d{8}/.test(h)?(d.ver=RegExp.$1,d.gecko=parseFloat(d.ver),/Firefox\/(\S+)/.test(h)&&(e.ver=RegExp.$1,e.firefox=parseFloat(e.ver))):/MISE ([^;]+)/.test(h)&&(d.ver=e.ver=RegExp.$1,d.ie=e.ie=parseFloat(d.ver));b.exports={engine:d,browser:e,system:f,app:g}},{}],6:[function(a,b,c){"use strict";var d=(a("./app-bridge"),a("./images")),e=$(window),f={elements:null,threshold:0,failure_limit:0,event:"scroll",effect:"show",container:window,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"},g=function(a,b){var c=this;"object"==typeof a&&(b=a,a=b.elements);var g=this.$elements=$(a);b=$.extend(f,b),b.elements||(b.elements=a),this.options=b;var h=this.$container=void 0===b.container||b.container===window?e:$(b.container);return 0===b.event.indexOf("scroll")&&h.on(b.event,function(){c.update()}),g.each(function(){var a=this,e=$(a);a.loaded=!1,(void 0===e.attr("src")||e.attr("src")===!1)&&e.is("img")&&e.attr("src",b.placeholder),e.one("appear",function(){if(!this.loaded){if(b.appear){var f=g.length;b.appear.call(a,f,b)}$("<img />").on("error",d.onerror).on("load",function(){var d=e.attr("data-"+b.data_attribute);e.hide(),e.is("img")?e.attr("src",d):e.css("background-image","url('"+d+"')"),e[b.effect](b.effect_speed),a.loaded=!0;var f=$.grep(g,function(a){return!a.loaded});if(g=c.$element=$(f),b.load){var h=g.length;b.load.call(a,h,b)}}).attr("src",e.attr("data-"+b.data_attribute))}}),0!==b.event.indexOf("scroll")&&e.on(b.event,function(){a.loaded||e.trigger("appear")})}),e.on("resize",function(){c.update()}),$(document).ready(function(){c.update()}),this};g.prototype={constructor:g,visible:function(a){return a=$(a),!(!a.width()&&!a.height())&&"none"!==a.css("display")},update:function(){var a=this,b=0,c=this.$elements,d=this.options;c.each(function(){var c=$(this);if(!d.skip_invisible||a.visible(this))if(a.abovethetop(this,d)||a.leftofbegin(this,d));else if(a.belowthefold(this,d)||a.rightoffold(this,d)){if(++b>d.failure_limit)return!1}else c.trigger("appear"),b=0})},abovethetop:function(a,b){var c;return c=void 0===b.container||b.container===window?e.scrollTop():$(b.container).offset().top,c>=$(a).offset().top+b.threshold+$(a).height()},leftofbegin:function(a,b){var c;return c=void 0===b.container||b.container===window?e.scrollLeft():$(b.container).offset().left,c>=$(a).offset().left+b.threshold+$(a).width()},belowthefold:function(a,b){var c;return c=void 0===b.container||b.container===window?(window.innerHeight?window.innerHeight:e.height())+e.scrollTop():$(b.container).offset().top+$(b.container).height(),c<=$(a).offset().top-b.threshold},rightoffold:function(a,b){var c;return c=void 0===b.container||b.container===window?e.width()+e.scrollLeft():$(b.container).offset().left+$(b.container).width(),c<=$(a).offset().left-b.threshold}},b.exports=g},{"./app-bridge":3,"./images":4}],7:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(b,c){d(this,a),this.type=b.type||"success";var e='<i class="icon icon-close"></i>',f='<div class="title">'+b.title+"</div>",g='<div class="sub_title">'+b.sub_title+"</div>",h=function(){if(b.buttons){var a=$('<ul class="buttons"></ul>');return"string"==typeof b.buttons&&(b.buttons=[b.buttons]),b.buttons.map(function(b){a.append('<li><a class="btn">'+b+"</a></li>")}),a.prop("outerHTML")}}(),i=this.$alert=$('\n            <div class="alert">\n                <div class="box '+this.type+'">\n                    '+(b.close?e:"")+'\n                    <div class="icons">\n                        <i class="icon icon-'+this.type+'"></i>\n                    </div>\n                    '+(b.title?f:"")+"\n                    "+(b.sub_title?g:"")+"\n                    "+(b.buttons?h:"")+"\n                </div>\n            </div>");"function"==typeof c&&c(),$("body").append(i),this.event(c)}return e(a,[{key:"event",value:function(a){var b=this;this.$alert.delegate(".btn","tap",function(){var b=$(this),c=b.text();"function"==typeof a&&a(c)}),this.$alert.delegate(".icon-close","tap",function(){b.$alert.remove(),"function"==typeof a&&a("close")})}},{key:"remove",value:function(){this.$alert.remove()}},{key:"show",value:function(){this.$alert.show()}},{key:"hide",value:function(){this.$alert.hide()}}]),a}();b.exports=f},{}],8:[function(a,b,c){"use strict";var d=function e(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];e.debug&&b.map(function(a){"console"==e.type&&console.log(a),"alert"==e.type&&alert(a),"append"==e.type&&$("body").append("<p>"+a+"</p>")})};d.debug=!1,d.type="console",b.exports=d},{}],9:[function(a,b,c){"use strict";var d=MY.appBridge;b.exports=function(a,b,c){a&&("function"==typeof b&&(c=b,b=1),b=+b||1,("number"!=typeof b||isNaN(b))&&(b=1),d.callHandler("my_toast",{delay:b,content:a},function(){c&&c(res)}))}},{}],10:[function(a,b,c){"use strict";var d=function(a,b,c,d){if(void 0===b&&(b=2),isNaN(a)||null==a)return"";a=a.toFixed(~~b),d="string"==typeof d?d:",";var e=a.split("."),f=e[0],g=e[1]?(c||".")+e[1]:"";return f.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+d)+g};b.exports=d},{}],11:[function(a,b,c){"use strict";var d=a("es6-promise"),e=d.Promise,f=MY.appBridge,g={token:"",id:0,getLoginToken:function(){var a=this,b=new e(function(b,c){f.callHandler("get_login_token",function(c){a.token=c.token?c.token:"",b(a.token)})});return b},getUserID:function(){var a=this,b=new e(function(b,c){f.callHandler("get_user_id",function(c){a.id=c.user_id?+c.user_id:0,b(a.id)})});return b},login:function(){var a=this,b=new e(function(b,c){f.callHandler("request_login");var d=setInterval(function(){a.getUserID().then(function(c){0!=c&&(clearInterval(d),b(a.id))})},500)});return b}};b.exports=g},{"es6-promise":1}],12:[function(a,b,c){"use strict";var d=(a("./tpl/template"),a("./tpl/pay/address")),e=a("./tpl/pay/info"),f=a("./tpl/pay/order"),g=(a("../../public/src/utils/zepto.lazyload"),a("es6-promise")),h=g.Promise,i=a("./common/AlertBox"),j=a("./common/notice"),k=a("./common/numberFormat"),l=a("./common/user"),m=a("./common/log"),n=($(".container"),$("#J_Address")),o=$("#J_GoodInfo"),p=$("#J_GoodOrder"),q=$("#J_Payment"),r=$("#J_BtnPay"),s=$("#J_Price"),t=$("#J_Coupon"),u=MY.appBridge,v="http://api.trade.meiyaapp."+(MY.isApp?MY.isDevApp?"cn":"com":"cn"),w={};w.notice=j,w.user=l,w.log=m,w.log.debug=!0;var x=new i({type:"loading"});w.address={data:null,abroad:!1,load:function(){var a=this,b=new h(function(b,c){u.callHandler("get_recipients",function(c){a.status=c.status,a.data=c.addresses.length?c.addresses[c.addresses.length-1]:null,b(a.data)})});return b},init:function(){var a=this;this.load().then(function(){a.render()})},render:function(){this.data&&(this.abroad=/(台湾|香港|澳门|海外|其他)/.test(this.data.province)?!0:!1);var a=d({data:this.data,abroad:this.abroad});n.html(a)},event:function(){var a=this;n.delegate(".btn-address","tap",function(){u.callHandler("navi_page_action","meiya://recipients",function(b){b.status&&a.init()})})}},w.goods={load:function(){var a=this,b=new h(function(b,c){MY.xhr.api({url:v+"/v1/items/"+w.item_id,type:"get",success:function(c){a.data=c.data,b(a.data)},error:function(a){c(a)}})});return b},init:function(){var a=this;this.load().then(function(){a.render(),w.coupon.init()},function(){w.notice("商品信息获取失败\n请返回后再继续操作",3)})},render:function(){var a=this.data,b={};a.specifications.map(function(a){a.id==w.specification_id&&(b=a)});var c=0==a.limit.type?9999:a.limit.limit;this.price=b.price,this.ship=a.ship.price,this.limit=c<b.stock_quantity?c:b.stock_quantity,this.limit<=0&&(this.limit=0);var d=e({data:a,price:this.price,quantitys:this.limit});return o.html(d),x.hide(),this.limit<=0?new i({type:"empty",title:"很遗憾，商品已售罄",sub_title:"看看其他宝贝吧",buttons:["返回"]},function(a){"返回"==a&&u.callHandler("close_webview_action")}):(this.order(),void this.event())},order:function(){var a=this,b=k(function(){var b=0;return w.coupon_deductible_amount||w.coupon_discount,0==w.coupon_type?b=a.price-a.price*w.coupon_discount/10:1==w.coupon_type?b=a.price>w.coupon_deductible_amount?w.coupon_deductible_amount:a.price:2==w.coupon_type&&(b=a.price),b}(),2),c=k(this.ship,2),d=k(this.price*w.quantity,2),e=this.price*w.quantity-b,g=k((e>0?e:0)+this.ship,2),h=f({ship:c,all:d,discount:b,price:g});s.html("￥"+g),p.html(h)},event:function(){var a=this,b=$("#J_Amount"),c=$("#J_IptAmount"),d=(b.find("btn-increase"),b.find("btn-reduce"),o.find(".tip"));b.delegate("a","tap",function(){var b=$(this),e=b.data("type"),f=c.val();b.hasClass("disabled")||(f||(f=0),f=+/\d+/.exec(f)[0],"reduce"==e&&(f-=1,$(".btn-increase").removeClass("disabled"),1>=f&&(f=1,b.addClass("disabled"))),"increase"==e&&(f+=1,$(".btn-reduce").removeClass("disabled"),f>=a.limit&&(f=a.limit,b.addClass("disabled"),d.show())),w.quantity=f,a.order(),c.val(f))}),c.on("input",function(){var b=$(this),e=c.val();e&&(e=/\d+/.test(e)?+/\d+/.exec(e)[0]:1,"number"==typeof e&&(1>=e?(e=1,$(".btn-reduce").addClass("disabled"),$(".btn-increase").removeClass("disabled")):$(".btn-reduce").removeClass("disabled"),e>=a.limit?(e=a.limit,$(".btn-reduce").removeClass("disabled"),$(".btn-increase").addClass("disabled"),d.show()):$(".btn-increase").removeClass("disabled"),w.quantity=e,a.order()),b.val(w.quantity))})}},w.coupon={load:function(){var a=this,b=new h(function(b,c){MY.xhr.api({url:v+"/v1/coupon-logs",type:"get",data:{user_id:w.user.id},success:function(c){var d=c.data;a.timestamp=c.timestamp,a.length=c.data?c.data.length:0,d.map(function(b,c){if(b.coupon){if(b.coupon.end_time=new Date(b.coupon.end_time).getTime(),b.coupon.start_time=new Date(b.coupon.start_time).getTime(),b.show_content=JSON.parse(b.coupon.show_content),0==b.status?b.coupon.end_time<a.timestamp?b.type="已过期":b.coupon.start_time>a.timestamp?b.type="不可使用":b.type="可使用":b.type="不可使用",b.coupon.item_ids&&"可使用"==b.type){var e=b.coupon.item_ids.split(",");b.type="不可使用",e.map(function(a){a==w.item_id&&(b.type="可使用")})}"可使用"!=b.type&&delete d[c]}else delete d[c]}),d.sort(function(a,b){return 1!=a.coupon.type?-1:1!=b.coupon.type?1:a.id-b.id}),a.data=d,b(d)},error:function(a){c(a)}})});return b},init:function(){var a=this;this.load().then(function(b){if(w.log(a.data),0==a.length)return t.remove(),window.localStorage.removeItem("coupon");if(b&&b.length){var c=b[0],d=t.find(".content"),e={id:c.id,type:c.coupon.type,discount:c.coupon.discount,deductible_amount:c.coupon.deductible_amount,name:(c.show_content.symbol+c.show_content.number+c.show_content.text).trim(),user_id:w.user.id,item_id:w.item_id};w.log(e),window.localStorage.setItem("coupon",JSON.stringify(e)),w.coupon_log_id=e.id,w.coupon_type=e.type,w.coupon_discount=e.discount,w.coupon_deductible_amount=e.deductible_amount,d.html(e.name),t.data("id",e.id),w.goods.order()}else window.localStorage.removeItem("coupon")})},event:function(){var a=t.find(".content");t.on("tap",function(){var a="trade/pay-coupon.html?disable_share=1&item="+w.item_id,b=t.data("id");b&&(a+="&coupon="+b),u.callHandler("navi_webview_action",a)}),u.registerHandler("webview_will_appear",function(){var b=window.localStorage.getItem("coupon");if(b){b=JSON.parse(b),w.log(b);var c=b,d=c.id,e=c.discount,f=c.deductible_amount,g=c.name,h=c.type,i=c.user_id,j=c.item_id;if(i!=w.user.id)return window.localStorage.removeItem("coupon");if(j!=w.item_id)return window.localStorage.removeItem("coupon");w.coupon_log_id=d,w.coupon_type=h,w.coupon_discount=e,w.coupon_deductible_amount=f,a.html(g),t.data("id",d)}else a.html(""),t.data("id",""),w.coupon_log_id=null,w.coupon_discount=0,w.coupon_type=null,w.coupon_deductible_amount=0,window.localStorage.removeItem("coupon");w.goods.order()}),u.registerHandler("webview_will_close",function(){window.localStorage.removeItem("coupon")})}},w.payment={init:function(){},event:function(){var a=this;q.delegate("input","change",function(){var b=$(this),c=b.data("value");a.pay_type=c}),r.on("tap",function(){return MY.Version(MY.version,3.3)<0?(w.notice("版本太低啦",1.5),void setTimeout(function(){u.callHandler("navi_webview_action","pages/404.html?disable_share=1")},1e3)):void a.pay()})},pay:function(){var a=this;if(!w.address.data)return w.notice("未填写收货地址",2);if(w.address.abroad)return w.notice("港澳台、海外地区暂不支持配送\n请重新修改地址吧",2);if(!this.pay_type)return w.notice("请选择付款方式",2);var b={user_id:w.user.id,token:w.user.token,pay_type:this.pay_type,recipient:w.address.data,item_id:w.item_id,specification_id:w.specification_id,quantity:w.quantity};w.coupon_log_id&&(b.coupon_log_id=w.coupon_log_id),x.show(),MY.xhr.api({url:v+"/v1/orders",data:b,type:"post",dataType:"json",success:function(b){var c=b.data,d="trade/order-detail.html?enable_custom_service=1&id="+c.order_id;d+=c.pay_amount||0==c.pay_amount?c.pay_amount?"&pay_type="+a.pay_type:"&pay_type=0":"&pay_type="+a.pay_type,x.remove(),window.localStorage.removeItem("coupon"),w.log(c),u.callHandler("navi_webview_action",d,function(){u.callHandler("close_webview_action")})},error:function(a){a=JSON.parse(a.responseText),x.remove();var b={},c=b.message,d=b.sub_title,e=b.buttons;return/库存不足/.test(a.message)&&(c="很遗憾，商品已售罄",d="看看其他宝贝吧",e=["返回"]),/限购/.test(a.message)&&(c=""+a.message,d="去我的订单看看吧",e=["我的订单"]),c?new i({type:"empty",title:c,sub_title:d,buttons:e},function(a){"返回"==a&&u.callHandler("close_webview_action"),"我的订单"==a&&u.callHandler("navi_webview_action","trade/order-list.html?disable_share=1",function(){u.callHandler("close_webview_action")})}):u.callHandler("my_dialog",{message:a.message||"网络出错啦~",buttons:["好"]})}})}},w.init=function(){u.callHandler("get_query_string",function(a){var b=a.query_string;b.match(/item=(\d+)/),w.item_id=RegExp.$1,b.match(/specification=(\d+)/),w.specification_id=RegExp.$1,w.quantity=1,w.item_id?w.specification_id?(w.user.getUserID(),w.user.getLoginToken().then(function(){w.address.init(),w.address.event(),w.goods.init(),w.payment.event(),w.coupon.event()})):w.notice("商品规格获取失败\n请返回后再继续操作",2):w.notice("商品信息获取失败\n请返回后再继续操作",2)})},w.init()},{"../../public/src/utils/zepto.lazyload":6,"./common/AlertBox":7,"./common/log":8,"./common/notice":9,"./common/numberFormat":10,"./common/user":11,"./tpl/pay/address":13,"./tpl/pay/info":14,"./tpl/pay/order":15,"./tpl/template":16,"es6-promise":1}],13:[function(a,b,c){"use strict";var d=a("../template");b.exports=d("pay/address",function(a){var b=this,c=(b.$helpers,a.data),d=b.$string,e=a.abroad,f="";return f+='<div class="content',c||(f+=" none"),f+='"> ',c?(f+=' <div class="title">收货地址</div> <p> <span class="name">',f+=d(c.name),f+='</span><span class="phone">',f+=d(c.phone),f+="</span> </p> <p> ",f+=d(c.province),f+=" ",f+=d(c.city),f+=" ",f+=d(c.district),f+=" ",f+=d(c.street),f+=" </p> ",e&&(f+=' <p class="error"><i class="icon icon-warn"></i>港澳台、海外地区暂不支持配送</p> '),f+=' <a class="btn btn-address">修改地址</a> '):f+=' <a class="btn btn-address"> <p><i class="icon icon-location"></i>未填写收货信息</p> <p class="pink">点击填写</p> </a> ',f+=" </div>",new String(f)})},{"../template":16}],14:[function(a,b,c){"use strict";var d=a("../template");b.exports=d("pay/info",function(a){var b=this,c=(b.$helpers,a.data),d=b.$string,e=a.price,f=a.quantitys,g="";return g+='<div class="pic"> ',c.images&&c.images.length?(g+=' <img src="',g+=d(c.images[0].url),g+='?imageView2/1/w/120"> '):g+=' <img src=""> ',g+=' </div> <div class="content"> <div class="title">',g+=d(c.title),g+='</div> <div class="price">￥',g+=d(e),g+='</div> <div class="amount" id=\'J_Amount\'> <a class="btn-reduce disabled" data-type=\'reduce\'>－</a> <div class="text"> <input type="tel" value="1"',1==c.limit.type&&(g+=' maxlength="',g+=d(c.limit.limit.length),g+='"'),g+=" id='J_IptAmount'> </div> <a class=\"btn-increase\" data-type='increase'>＋</a> </div> <div class=\"tip\">限购",g+=d(f),g+="件</div> </div>",new String(g)})},{"../template":16}],15:[function(a,b,c){"use strict";var d=a("../template");b.exports=d("pay/order",function(a){var b=this,c=(b.$helpers,b.$string),d=a.all,e=a.discount,f=a.ship,g=a.price,h="";return h+='<div class="title">订单信息</div> <div class="content"> <ul> <li>合计: <span class="right">￥',h+=c(d),h+='</span></li> <li>优惠抵用: <span class="right">-￥',h+=c(e),h+='</span></li> <li>邮费: <span class="right">￥',h+=c(f),h+='</span></li> <li>实付款: <span class="right pink">￥',h+=c(g),h+="</span></li> </ul> </div>",new String(h)})},{"../template":16}],16:[function(a,b,c){"use strict";!function(){function a(a,b){return(/string|function/.test(typeof b)?i:h)(a,b)}function c(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?c(a.call(a)):""),a}function d(a){return m[a]}function e(a){return c(a).replace(/&(?![\w#]+;)|[<>"']/g,d)}function f(a,b){if(n(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function g(a,b){var c=/(\/)[^\/]+\1\.\.\1/,d=("./"+a).replace(/[^\/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function h(b,c){var d=a.get(b)||j({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function i(a,b){if("string"==typeof b){var c=b;b=function(){return new l(c)}}var d=k[a]=function(c){try{return new b(c,a)+""}catch(d){return j(d)()}};return d.prototype=b.prototype=o,d.toString=function(){return b+""},d}function j(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var k=a.cache={},l=window.String,m={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},n=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},o=a.utils={$helpers:{},$include:function(a,b,c){return a=g(c,a),h(a,b)},$string:c,$escape:e,$each:f},p=a.helpers=o.$helpers;a.get=function(a){return k[a.replace(/^\.\//,"")]},a.helper=function(a,b){p[a]=b},b.exports=a}()},{}]},{},[12]);