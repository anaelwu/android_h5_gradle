/* Meiya 2016-05-26 10:47 */!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(c,d){(function(){"use strict";function e(a){return"function"==typeof a||"object"==typeof a&&null!==a}function f(a){return"function"==typeof a}function g(a){T=a}function h(a){X=a}function i(){return function(){c.nextTick(n)}}function j(){return function(){S(n)}}function k(){var a=0,b=new $(n),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function l(){var a=new MessageChannel;return a.port1.onmessage=n,function(){a.port2.postMessage(0)}}function m(){return function(){setTimeout(n,1)}}function n(){for(var a=0;W>a;a+=2){var b=ba[a],c=ba[a+1];b(c),ba[a]=void 0,ba[a+1]=void 0}W=0}function o(){try{var b=a,c=b("vertx");return S=c.runOnLoop||c.runOnContext,j()}catch(d){return m()}}function p(a,b){var c=this,d=c._state;if(d===fa&&!a||d===ga&&!b)return this;var e=new this.constructor(r),f=c._result;if(d){var g=arguments[d-1];X(function(){H(d,e,g,f)})}else D(c,e,a,b);return e}function q(a){var b=this;if(a&&"object"==typeof a&&a.constructor===b)return a;var c=new b(r);return z(c,a),c}function r(){}function s(){return new TypeError("You cannot resolve a promise with itself")}function t(){return new TypeError("A promises callback cannot return that same promise.")}function u(a){try{return a.then}catch(b){return ha.error=b,ha}}function v(a,b,c,d){try{a.call(b,c,d)}catch(e){return e}}function w(a,b,c){X(function(a){var d=!1,e=v(c,b,function(c){d||(d=!0,b!==c?z(a,c):B(a,c))},function(b){d||(d=!0,C(a,b))},"Settle: "+(a._label||" unknown promise"));!d&&e&&(d=!0,C(a,e))},a)}function x(a,b){b._state===fa?B(a,b._result):b._state===ga?C(a,b._result):D(b,void 0,function(b){z(a,b)},function(b){C(a,b)})}function y(a,b,c){b.constructor===a.constructor&&c===ca&&constructor.resolve===da?x(a,b):c===ha?C(a,ha.error):void 0===c?B(a,b):f(c)?w(a,b,c):B(a,b)}function z(a,b){a===b?C(a,s()):e(b)?y(a,b,u(b)):B(a,b)}function A(a){a._onerror&&a._onerror(a._result),E(a)}function B(a,b){a._state===ea&&(a._result=b,a._state=fa,0!==a._subscribers.length&&X(E,a))}function C(a,b){a._state===ea&&(a._state=ga,a._result=b,X(A,a))}function D(a,b,c,d){var e=a._subscribers,f=e.length;a._onerror=null,e[f]=b,e[f+fa]=c,e[f+ga]=d,0===f&&a._state&&X(E,a)}function E(a){var b=a._subscribers,c=a._state;if(0!==b.length){for(var d,e,f=a._result,g=0;g<b.length;g+=3)d=b[g],e=b[g+c],d?H(c,d,e,f):e(f);a._subscribers.length=0}}function F(){this.error=null}function G(a,b){try{return a(b)}catch(c){return ia.error=c,ia}}function H(a,b,c,d){var e,g,h,i,j=f(c);if(j){if(e=G(c,d),e===ia?(i=!0,g=e.error,e=null):h=!0,b===e)return void C(b,t())}else e=d,h=!0;b._state!==ea||(j&&h?z(b,e):i?C(b,g):a===fa?B(b,e):a===ga&&C(b,e))}function I(a,b){try{b(function(b){z(a,b)},function(b){C(a,b)})}catch(c){C(a,c)}}function J(a){return new oa(this,a).promise}function K(a){function b(a){z(e,a)}function c(a){C(e,a)}var d=this,e=new d(r);if(!V(a))return C(e,new TypeError("You must pass an array to race.")),e;for(var f=a.length,g=0;e._state===ea&&f>g;g++)D(d.resolve(a[g]),void 0,b,c);return e}function L(a){var b=this,c=new b(r);return C(c,a),c}function M(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function O(a){this._id=ma++,this._state=void 0,this._result=void 0,this._subscribers=[],r!==a&&("function"!=typeof a&&M(),this instanceof O?I(this,a):N())}function P(a,b){this._instanceConstructor=a,this.promise=new a(r),Array.isArray(b)?(this._input=b,this.length=b.length,this._remaining=b.length,this._result=new Array(this.length),0===this.length?B(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&B(this.promise,this._result))):C(this.promise,this._validationError())}function Q(){var a;if("undefined"!=typeof d)a=d;else if("undefined"!=typeof self)a=self;else try{a=Function("return this")()}catch(b){throw new Error("polyfill failed because global object is unavailable in this environment")}var c=a.Promise;(!c||"[object Promise]"!==Object.prototype.toString.call(c.resolve())||c.cast)&&(a.Promise=na)}var R;R=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)};var S,T,U,V=R,W=0,X=function(a,b){ba[W]=a,ba[W+1]=b,W+=2,2===W&&(T?T(n):U())},Y="undefined"!=typeof window?window:void 0,Z=Y||{},$=Z.MutationObserver||Z.WebKitMutationObserver,_="undefined"!=typeof c&&"[object process]"==={}.toString.call(c),aa="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ba=new Array(1e3);U=_?i():$?k():aa?l():void 0===Y&&"function"==typeof a?o():m();var ca=p,da=q,ea=void 0,fa=1,ga=2,ha=new F,ia=new F,ja=J,ka=K,la=L,ma=0,na=O;O.all=ja,O.race=ka,O.resolve=da,O.reject=la,O._setScheduler=g,O._setAsap=h,O._asap=X,O.prototype={constructor:O,then:ca,"catch":function(a){return this.then(null,a)}};var oa=P;P.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},P.prototype._enumerate=function(){for(var a=this.length,b=this._input,c=0;this._state===ea&&a>c;c++)this._eachEntry(b[c],c)},P.prototype._eachEntry=function(a,b){var c=this._instanceConstructor,d=c.resolve;if(d===da){var e=u(a);if(e===ca&&a._state!==ea)this._settledAt(a._state,b,a._result);else if("function"!=typeof e)this._remaining--,this._result[b]=a;else if(c===na){var f=new c(r);y(f,a,e),this._willSettleAt(f,b)}else this._willSettleAt(new c(function(b){b(a)}),b)}else this._willSettleAt(d(a),b)},P.prototype._settledAt=function(a,b,c){var d=this.promise;d._state===ea&&(this._remaining--,a===ga?C(d,c):this._result[b]=c),0===this._remaining&&B(d,this._result)},P.prototype._willSettleAt=function(a,b){var c=this;D(a,void 0,function(a){c._settledAt(fa,b,a)},function(a){c._settledAt(ga,b,a)})};var pa=Q,qa={Promise:na,polyfill:pa};"function"==typeof define&&define.amd?define(function(){return qa}):"undefined"!=typeof b&&b.exports?b.exports=qa:"undefined"!=typeof this&&(this.ES6Promise=qa),pa()}).call(this)}).call(this,a("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:2}],2:[function(a,b,c){function d(){k=!1,h.length?j=h.concat(j):l=-1,j.length&&e()}function e(){if(!k){var a=setTimeout(d);k=!0;for(var b=j.length;b;){for(h=j,j=[];++l<b;)h[l].run();l=-1,b=j.length}h=null,k=!1,clearTimeout(a)}}function f(a,b){this.fun=a,this.array=b}function g(){}var h,i=b.exports={},j=[],k=!1,l=-1;i.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];j.push(new f(a,b)),1!==j.length||k||setTimeout(e,0)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.binding=function(a){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(a){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],3:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(b){d(this,a);var c=this,e=this.$payBox=$('\n            <div class="pay-box">\n                <ul>\n                    <li class="top">选择支付方式</li>\n                    <li><a data-type=\'1\'><span><i class="icon icon-alipay"></i>支付宝支付</a></span></li>\n                    <li><a data-type=\'2\'><span><i class="icon icon-wechat-fill"></i>微信支付</a></span></li>\n                    <li><a data-type=\'0\' class="close">关闭</a></li>\n                </ul>\n            </div>\n        ');"function"==typeof b&&b(),$("body").append(e),setTimeout(function(){c.show()},100),this.event(b)}return e(a,[{key:"event",value:function(a){var b=this;this.$payBox.delegate("a","tap",function(){var c=$(this),d=c.data("type");a(d),b.remove()})}},{key:"remove",value:function(){var a=this;this.hide(),setTimeout(function(){a.$payBox.remove()},500)}},{key:"show",value:function(){this.$payBox.addClass("show")}},{key:"hide",value:function(){this.$payBox.removeClass("show")}}]),a}();b.exports=f},{}],4:[function(a,b,c){"use strict";var d=function e(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];e.debug&&b.map(function(a){"console"==e.type&&console.log(a),"alert"==e.type&&alert(a),"append"==e.type&&$("body").append("<p>"+a+"</p>")})};d.debug=!1,d.type="console",b.exports=d},{}],5:[function(a,b,c){"use strict";var d=a("es6-promise"),e=d.Promise,f=MY.appBridge,g={token:"",id:0,getLoginToken:function(){var a=this,b=new e(function(b,c){f.callHandler("get_login_token",function(c){a.token=c.token?c.token:"",b(a.token)})});return b},getUserID:function(){var a=this,b=new e(function(b,c){f.callHandler("get_user_id",function(c){a.id=c.user_id?+c.user_id:0,b(a.id)})});return b},login:function(){var a=this,b=new e(function(b,c){f.callHandler("request_login");var d=setInterval(function(){a.getUserID().then(function(c){0!=c&&(clearInterval(d),b(a.id))})},500)});return b}};b.exports=g},{"es6-promise":1}],6:[function(a,b,c){"use strict";var d=a("./tpl/template"),e=a("./tpl/order-list/lists.js"),f=a("es6-promise"),g=f.Promise,h=a("./common/user"),i=a("./common/PayBox"),j=a("./common/log"),k=($(".container"),$("#J_OrderList")),l=MY.appBridge,m="http://api.trade.meiyaapp."+(MY.isApp?MY.isDevApp?"cn":"com":"cn"),n={};n.user=h,n.log=j,n.log.debug=!0,d.helper("dateFormat",function(a){var b=arguments.length<=1||void 0===arguments[1]?"yyyy-MM-dd hh:mm":arguments[1];return a=new Date(a),MY.dateFormat(a,b)}),d.helper("snapshot",function(a,b){var c=JSON.parse(a.snapshot);return b='\n        <div class="pic">\n            <img src="'+c.image_url+'?imageView2/1/w/148"/>\n        </div>\n        <div class="content">\n            <div>'+c.title+'</div>\n            <div class="sub_title">'+(1!=a.item_id?"#"+a.specification.specification_title:"")+'</div>\n            <span class="price">￥'+c.price+'</span>\n            <span class="quantity">×'+c.quantity+"</span>\n        </div>"}),d.helper("orderButton",function(a,b){return b=function(b){var c="";if(0==b){var d=new Date(a.created_at).getTime(),e=d+6e5,f=n.list.timestamp,g=e-f>0?parseInt((e-f)/1e3):0;c=g>0?'<div class="countdown">\n                        还剩 <p class=\'J_Countdown\' data-countdown_time="'+g+'">00分00秒</p>\n                    </div><a class="btn btn-pay" data-id="'+a.id+'">支付</a>':'<div class="tip">交易超时</div><a class="btn btn-pay disabled">支付</a>'}else(2==b||3==b)&&(c='<a class="btn btn-express J_Webview" data-page=\'trade/order-express.html?disable_share=1&id='+a.id+"'>查看物流</a>");return c}(a.status)}),n.list={load:function(){var a=this,b=new g(function(b,c){MY.xhr.api({url:m+"/v1/orders",type:"get",data:{user_id:n.user.id,page_size:50},success:function(c){a.data=c.data,a.timestamp=c.timestamp,b(a.data)},error:function(a){c(a)}})});return b},init:function(){var a=this;this.load().then(function(){a.render()})},render:function(){var a=e({data:this.data});k.html(a),this.countdown()},event:function(){k.delegate(".btn-pay","tap",function(a){var b=$(this),c=b.data("id");if(!b.hasClass("disabled"))var d=new i(function(a){if(a){var b="trade/order-detail.html?enable_custom_service=1&id="+c+"&pay_type="+a;l.callHandler("navi_webview_action",b,function(){d.remove()})}})}),k.delegate("li","tap",function(a){if(n.log(a.target),!a.target||!$(a.target).hasClass("btn")){var b=$(this),c=b.data("page");l.callHandler("navi_webview_action",c)}}),k.delegate(".J_Webview","tap",function(a){var b=$(this),c=b.data("page");l.callHandler("navi_webview_action",c)})},timeFormat:function(a,b){var c=function(a){return a>0?(9>=a&&(a="0"+a),String(a)):"00"},d={s:"00",m:"00",h:"00",d:"00",M:"00",y:"0"};return a>0&&(d.s=c(a%60),d.m=Math.floor(a/60)>0?c(Math.floor(a/60)%60):"00",d.h=Math.floor(a/3600)>0?c(Math.floor(a/3600)%24):"00",d.d=Math.floor(a/86400)>0?c(Math.floor(a/86400)%30):"00"),b='<i class="t">'+d.m+'</i>分<i class="t">'+d.s+"</i>秒"},countdown:function(){var a=this;$(".J_Countdown").map(function(b,c){var d=$(c),e=Number(d.data("countdown_time")),f=d.data("countdown_handler");f||(f=setInterval(function(){0>=e&&(clearInterval(f),a.updateStatus(c)),d.data("countdown_time",--e),d.html(a.timeFormat(d.data("countdown_time")))},1e3))})},updateStatus:function(a){var b=$(a),c=b.parents("li");c.find(".btn-pay").addClass("disabled"),c.find(".countdown").addClass("timeout"),c.find(".countdown").html("交易超时"),c.find(".status").html("交易关闭")}},n.init=function(){n.user.getUserID().then(function(a){return a?(l.registerHandler("webview_will_appear",function(){n.list.init()}),n.list.init(),void n.list.event()):n.user.login().then(function(){n.list.init(),n.list.event()})})},n.init()},{"./common/PayBox":3,"./common/log":4,"./common/user":5,"./tpl/order-list/lists.js":7,"./tpl/template":8,"es6-promise":1}],7:[function(a,b,c){"use strict";var d=a("../template");b.exports=d("order-list/lists",function(a){var b=this,c=b.$helpers,d=b.$each,e=a.data,f=(a.order,a.$index,b.$string),g=(a.item,"");return d(e,function(a){g+=" <li data-page='trade/order-detail.html?enable_custom_service=1&id=",g+=f(a.id),g+='&pay_type=0\'> <div class="title"> <div class="time">下单时间 ',g+=f(c.dateFormat(a.created_at,"yyyy-MM-dd hh:mm:ss")),g+='</div> <div class="status">',g+=0==a.status?"等待付款":1==a.status?"等待发货":3==a.status?"已收货":4==a.status?"已申请退款":5==a.status?"已退款":6==a.status?"交易关闭":7==a.status?"退款成功":"已发货",g+="</div> </div> ",d(a.orderItems,function(a){g+=' <div class="good">',g+=f(c.snapshot(a)),g+="</div> "}),g+=' <div class="pay"> <div class="amount">实付款: <span class="price">￥',g+=f(a.pay_amount),g+='</span></div> <div class="button">',g+=f(c.orderButton(a)),g+="</div> </div> </li> "}),new String(g)})},{"../template":8}],8:[function(a,b,c){"use strict";!function(){function a(a,b){return(/string|function/.test(typeof b)?i:h)(a,b)}function c(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?c(a.call(a)):""),a}function d(a){return m[a]}function e(a){return c(a).replace(/&(?![\w#]+;)|[<>"']/g,d)}function f(a,b){if(n(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function g(a,b){var c=/(\/)[^\/]+\1\.\.\1/,d=("./"+a).replace(/[^\/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function h(b,c){var d=a.get(b)||j({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function i(a,b){if("string"==typeof b){var c=b;b=function(){return new l(c)}}var d=k[a]=function(c){try{return new b(c,a)+""}catch(d){return j(d)()}};return d.prototype=b.prototype=o,d.toString=function(){return b+""},d}function j(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var k=a.cache={},l=window.String,m={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},n=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},o=a.utils={$helpers:{},$include:function(a,b,c){return a=g(c,a),h(a,b)},$string:c,$escape:e,$each:f},p=a.helpers=o.$helpers;a.get=function(a){return k[a.replace(/^\.\//,"")]},a.helper=function(a,b){p[a]=b},b.exports=a}()},{}]},{},[6]);