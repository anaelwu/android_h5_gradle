/* Meiya 2016-05-26 10:47 */!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(c,d){(function(){"use strict";function e(a){return"function"==typeof a||"object"==typeof a&&null!==a}function f(a){return"function"==typeof a}function g(a){T=a}function h(a){X=a}function i(){return function(){c.nextTick(n)}}function j(){return function(){S(n)}}function k(){var a=0,b=new $(n),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function l(){var a=new MessageChannel;return a.port1.onmessage=n,function(){a.port2.postMessage(0)}}function m(){return function(){setTimeout(n,1)}}function n(){for(var a=0;W>a;a+=2){var b=ba[a],c=ba[a+1];b(c),ba[a]=void 0,ba[a+1]=void 0}W=0}function o(){try{var b=a,c=b("vertx");return S=c.runOnLoop||c.runOnContext,j()}catch(d){return m()}}function p(a,b){var c=this,d=c._state;if(d===fa&&!a||d===ga&&!b)return this;var e=new this.constructor(r),f=c._result;if(d){var g=arguments[d-1];X(function(){H(d,e,g,f)})}else D(c,e,a,b);return e}function q(a){var b=this;if(a&&"object"==typeof a&&a.constructor===b)return a;var c=new b(r);return z(c,a),c}function r(){}function s(){return new TypeError("You cannot resolve a promise with itself")}function t(){return new TypeError("A promises callback cannot return that same promise.")}function u(a){try{return a.then}catch(b){return ha.error=b,ha}}function v(a,b,c,d){try{a.call(b,c,d)}catch(e){return e}}function w(a,b,c){X(function(a){var d=!1,e=v(c,b,function(c){d||(d=!0,b!==c?z(a,c):B(a,c))},function(b){d||(d=!0,C(a,b))},"Settle: "+(a._label||" unknown promise"));!d&&e&&(d=!0,C(a,e))},a)}function x(a,b){b._state===fa?B(a,b._result):b._state===ga?C(a,b._result):D(b,void 0,function(b){z(a,b)},function(b){C(a,b)})}function y(a,b,c){b.constructor===a.constructor&&c===ca&&constructor.resolve===da?x(a,b):c===ha?C(a,ha.error):void 0===c?B(a,b):f(c)?w(a,b,c):B(a,b)}function z(a,b){a===b?C(a,s()):e(b)?y(a,b,u(b)):B(a,b)}function A(a){a._onerror&&a._onerror(a._result),E(a)}function B(a,b){a._state===ea&&(a._result=b,a._state=fa,0!==a._subscribers.length&&X(E,a))}function C(a,b){a._state===ea&&(a._state=ga,a._result=b,X(A,a))}function D(a,b,c,d){var e=a._subscribers,f=e.length;a._onerror=null,e[f]=b,e[f+fa]=c,e[f+ga]=d,0===f&&a._state&&X(E,a)}function E(a){var b=a._subscribers,c=a._state;if(0!==b.length){for(var d,e,f=a._result,g=0;g<b.length;g+=3)d=b[g],e=b[g+c],d?H(c,d,e,f):e(f);a._subscribers.length=0}}function F(){this.error=null}function G(a,b){try{return a(b)}catch(c){return ia.error=c,ia}}function H(a,b,c,d){var e,g,h,i,j=f(c);if(j){if(e=G(c,d),e===ia?(i=!0,g=e.error,e=null):h=!0,b===e)return void C(b,t())}else e=d,h=!0;b._state!==ea||(j&&h?z(b,e):i?C(b,g):a===fa?B(b,e):a===ga&&C(b,e))}function I(a,b){try{b(function(b){z(a,b)},function(b){C(a,b)})}catch(c){C(a,c)}}function J(a){return new oa(this,a).promise}function K(a){function b(a){z(e,a)}function c(a){C(e,a)}var d=this,e=new d(r);if(!V(a))return C(e,new TypeError("You must pass an array to race.")),e;for(var f=a.length,g=0;e._state===ea&&f>g;g++)D(d.resolve(a[g]),void 0,b,c);return e}function L(a){var b=this,c=new b(r);return C(c,a),c}function M(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function O(a){this._id=ma++,this._state=void 0,this._result=void 0,this._subscribers=[],r!==a&&("function"!=typeof a&&M(),this instanceof O?I(this,a):N())}function P(a,b){this._instanceConstructor=a,this.promise=new a(r),Array.isArray(b)?(this._input=b,this.length=b.length,this._remaining=b.length,this._result=new Array(this.length),0===this.length?B(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&B(this.promise,this._result))):C(this.promise,this._validationError())}function Q(){var a;if("undefined"!=typeof d)a=d;else if("undefined"!=typeof self)a=self;else try{a=Function("return this")()}catch(b){throw new Error("polyfill failed because global object is unavailable in this environment")}var c=a.Promise;(!c||"[object Promise]"!==Object.prototype.toString.call(c.resolve())||c.cast)&&(a.Promise=na)}var R;R=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)};var S,T,U,V=R,W=0,X=function(a,b){ba[W]=a,ba[W+1]=b,W+=2,2===W&&(T?T(n):U())},Y="undefined"!=typeof window?window:void 0,Z=Y||{},$=Z.MutationObserver||Z.WebKitMutationObserver,_="undefined"!=typeof c&&"[object process]"==={}.toString.call(c),aa="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ba=new Array(1e3);U=_?i():$?k():aa?l():void 0===Y&&"function"==typeof a?o():m();var ca=p,da=q,ea=void 0,fa=1,ga=2,ha=new F,ia=new F,ja=J,ka=K,la=L,ma=0,na=O;O.all=ja,O.race=ka,O.resolve=da,O.reject=la,O._setScheduler=g,O._setAsap=h,O._asap=X,O.prototype={constructor:O,then:ca,"catch":function(a){return this.then(null,a)}};var oa=P;P.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},P.prototype._enumerate=function(){for(var a=this.length,b=this._input,c=0;this._state===ea&&a>c;c++)this._eachEntry(b[c],c)},P.prototype._eachEntry=function(a,b){var c=this._instanceConstructor,d=c.resolve;if(d===da){var e=u(a);if(e===ca&&a._state!==ea)this._settledAt(a._state,b,a._result);else if("function"!=typeof e)this._remaining--,this._result[b]=a;else if(c===na){var f=new c(r);y(f,a,e),this._willSettleAt(f,b)}else this._willSettleAt(new c(function(b){b(a)}),b)}else this._willSettleAt(d(a),b)},P.prototype._settledAt=function(a,b,c){var d=this.promise;d._state===ea&&(this._remaining--,a===ga?C(d,c):this._result[b]=c),0===this._remaining&&B(d,this._result)},P.prototype._willSettleAt=function(a,b){var c=this;D(a,void 0,function(a){c._settledAt(fa,b,a)},function(a){c._settledAt(ga,b,a)})};var pa=Q,qa={Promise:na,polyfill:pa};"function"==typeof define&&define.amd?define(function(){return qa}):"undefined"!=typeof b&&b.exports?b.exports=qa:"undefined"!=typeof this&&(this.ES6Promise=qa),pa()}).call(this)}).call(this,a("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:2}],2:[function(a,b,c){function d(){k=!1,h.length?j=h.concat(j):l=-1,j.length&&e()}function e(){if(!k){var a=setTimeout(d);k=!0;for(var b=j.length;b;){for(h=j,j=[];++l<b;)h[l].run();l=-1,b=j.length}h=null,k=!1,clearTimeout(a)}}function f(a,b){this.fun=a,this.array=b}function g(){}var h,i=b.exports={},j=[],k=!1,l=-1;i.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];j.push(new f(a,b)),1!==j.length||k||setTimeout(e,0)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.binding=function(a){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(a){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],3:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(b,c){d(this,a),this.type=b.type||"success";var e='<i class="icon icon-close"></i>',f='<div class="title">'+b.title+"</div>",g='<div class="sub_title">'+b.sub_title+"</div>",h=function(){if(b.buttons){var a=$('<ul class="buttons"></ul>');return"string"==typeof b.buttons&&(b.buttons=[b.buttons]),b.buttons.map(function(b){a.append('<li><a class="btn">'+b+"</a></li>")}),a.prop("outerHTML")}}(),i=this.$alert=$('\n            <div class="alert">\n                <div class="box '+this.type+'">\n                    '+(b.close?e:"")+'\n                    <div class="icons">\n                        <i class="icon icon-'+this.type+'"></i>\n                    </div>\n                    '+(b.title?f:"")+"\n                    "+(b.sub_title?g:"")+"\n                    "+(b.buttons?h:"")+"\n                </div>\n            </div>");"function"==typeof c&&c(),$("body").append(i),this.event(c)}return e(a,[{key:"event",value:function(a){var b=this;this.$alert.delegate(".btn","tap",function(){var b=$(this),c=b.text();"function"==typeof a&&a(c)}),this.$alert.delegate(".icon-close","tap",function(){b.$alert.remove(),"function"==typeof a&&a("close")})}},{key:"remove",value:function(){this.$alert.remove()}},{key:"show",value:function(){this.$alert.show()}},{key:"hide",value:function(){this.$alert.hide()}}]),a}();b.exports=f},{}],4:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(b){d(this,a);var c=this,e=this.$payBox=$('\n            <div class="pay-box">\n                <ul>\n                    <li class="top">选择支付方式</li>\n                    <li><a data-type=\'1\'><span><i class="icon icon-alipay"></i>支付宝支付</a></span></li>\n                    <li><a data-type=\'2\'><span><i class="icon icon-wechat-fill"></i>微信支付</a></span></li>\n                    <li><a data-type=\'0\' class="close">关闭</a></li>\n                </ul>\n            </div>\n        ');"function"==typeof b&&b(),$("body").append(e),setTimeout(function(){c.show()},100),this.event(b)}return e(a,[{key:"event",value:function(a){var b=this;this.$payBox.delegate("a","tap",function(){var c=$(this),d=c.data("type");a(d),b.remove()})}},{key:"remove",value:function(){var a=this;this.hide(),setTimeout(function(){a.$payBox.remove()},500)}},{key:"show",value:function(){this.$payBox.addClass("show")}},{key:"hide",value:function(){this.$payBox.removeClass("show")}}]),a}();b.exports=f},{}],5:[function(a,b,c){"use strict";var d=function(){},e=function(a,b){if(a){var c=this;if("object"==typeof b)for(var d in b)this[d]=b[d];var e=a.dataset,f=e.countdown_format;e.countdown_handler||(e.countdown_handler=setInterval(function(){var b=Number(e.countdown_time),d=Number(e.countdown_limit);if(isNaN(b)||0>=b)return clearInterval(e.countdown_handler),delete e.countdown_handler,void(0>=b&&c.onEnd(a));if(e.countdown_time=--b,d){if(b>=d)return;c.onLimit(a),delete e.countdown_limit}a.innerHTML=c.timeFormat(e.countdown_time,f),c.onTimer(e.countdown_time,a)},1e3))}};e.prototype={constructor:e,onLimit:d,onEnd:d,onTimer:d,timeFormat:function(a,b){b=b||"";var c=function(a){return a>0?(9>=a&&(a="0"+a),String(a)):"00"},d={s:"00",m:"00",h:"00",d:"00",M:"00",y:"0"};return a>0&&(d.s=c(a%60),d.m=Math.floor(a/60)>0?c(Math.floor(a/60)%60):"00",d.h=Math.floor(a/3600)>0?c(Math.floor(a/3600)%24):"00",d.d=Math.floor(a/86400)>0?c(Math.floor(a/86400)%30):"00"),b='<i class="t">'+d.m+'</i><i class="w">:</i><i class="t">'+d.s+'</i><i class="w"></i>'}},b.exports=e},{}],6:[function(a,b,c){"use strict";var d=function e(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];e.debug&&b.map(function(a){"console"==e.type&&console.log(a),"alert"==e.type&&alert(a),"append"==e.type&&$("body").append("<p>"+a+"</p>")})};d.debug=!1,d.type="console",b.exports=d},{}],7:[function(a,b,c){"use strict";var d=MY.appBridge;b.exports=function(a,b,c){a&&("function"==typeof b&&(c=b,b=1),b=+b||1,("number"!=typeof b||isNaN(b))&&(b=1),d.callHandler("my_toast",{delay:b,content:a},function(){c&&c(res)}))}},{}],8:[function(a,b,c){"use strict";var d=function(a,b,c,d){if(void 0===b&&(b=2),isNaN(a)||null==a)return"";a=a.toFixed(~~b),d="string"==typeof d?d:",";var e=a.split("."),f=e[0],g=e[1]?(c||".")+e[1]:"";return f.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+d)+g};b.exports=d},{}],9:[function(a,b,c){"use strict";var d=a("es6-promise"),e=d.Promise,f=MY.appBridge,g={token:"",id:0,getLoginToken:function(){var a=this,b=new e(function(b,c){f.callHandler("get_login_token",function(c){a.token=c.token?c.token:"",b(a.token)})});return b},getUserID:function(){var a=this,b=new e(function(b,c){f.callHandler("get_user_id",function(c){a.id=c.user_id?+c.user_id:0,b(a.id)})});return b},login:function(){var a=this,b=new e(function(b,c){f.callHandler("request_login");var d=setInterval(function(){a.getUserID().then(function(c){0!=c&&(clearInterval(d),b(a.id))})},500)});return b}};b.exports=g},{"es6-promise":1}],10:[function(a,b,c){"use strict";var d=a("./tpl/template"),e=a("./tpl/order-detail/address"),f=a("./tpl/order-detail/order"),g=a("./tpl/order-detail/status"),h=a("./tpl/order-detail/fixed"),i=a("./tpl/order-detail/express"),j=a("es6-promise"),k=j.Promise,l=a("./common/AlertBox"),m=a("./common/notice"),n=a("./common/numberFormat"),o=a("./common/user"),p=a("./common/countdown"),q=a("./common/PayBox"),r=a("./common/log"),s=$(".container"),t=$("#J_Address"),u=$("#J_Order"),v=$("#J_Status"),w=$("#J_Fixed"),x=$("#J_Express"),y=MY.appBridge,z="http://api.trade.meiyaapp."+(MY.isApp?MY.isDevApp?"cn":"com":"cn"),A={};d.helper("dateFormat",function(a){var b=arguments.length<=1||void 0===arguments[1]?"yyyy-MM-dd hh:mm":arguments[1];return a=new Date(a),MY.dateFormat(a,b)}),d.helper("express",function(a){var b={yuantong:"圆通速递",ems:"EMS",shunfeng:"顺丰",huitongkuaidi:"百世汇通",zhongtong:"中通速递",shentong:"申通",yunda:"韵达快运",zhaijisong:"宅急送"};return b[a]||a}),A.notice=m,A.user=o,A.log=r,A.log.debug=!0,A.address={data:null,render:function(){var a=e({data:this.data});t.html(a)}},A.order={goods:[],good:{},load:function(){var a=this,b=new k(function(b,c){MY.xhr.api({url:z+"/v1/orders/"+A.id,type:"get",data:{token:A.user.token,user_id:A.user.id},success:function(c){a.data=c.data,a.timestamp=c.timestamp,b(a.data)},error:function(a){c(a)}})});return b},init:function(){var a=this,b=this;this.load().then(function(c){b.goods=[],c.status<8?((c.express||c.express_company||c.express_code)&&(A.express.express_company=c.express_company,A.express.express_code=c.express_code,A.express.data=c.express,A.express.render(!0)),A.address.data=JSON.parse(c.recipient),c.orderItems.map(function(a){a.snapshot&&b.goods.push(JSON.parse(a.snapshot)),c.item_id=a.item_id,c.specification_title=a.specification.specification_title}),c.created_at=new Date(c.created_at).getTime(),c.ended_at=c.created_at+6e5,b.countdown=a.data.ended_at-a.timestamp>0?parseInt((a.data.ended_at-a.timestamp)/1e3):0,A.address.render(),b.render()):((c.express||c.express_company||c.express_code)&&(A.express.express_company=c.express_company,A.express.express_code=c.express_code,A.express.data=c.express,A.express.render()),b.renderStatus(),A.loading.remove())})},render:function(){var a=this,b=this.data,c=this.goods,d=0,e=n(b.benefit_amount,2),g=n(b.postage,2);c.map(function(b){a.good=b,d=b.price*b.quantity});var h=n(d,2),i=n(b.pay_amount,2);A.log(b);var j=f({data:b,good:this.good,all:h,discount:e,ship:g,price:i});u.html(j),this.renderStatus(),A.log("data.status: ",b.status),A.pay_type||A.loading.remove(),A.log(b),0==b.status&&this.countdown>0&&i?(A.fixed.render(i),this.pay()):1==b.status&&A.repay&&!function(){A.fixed.remove();var a=new l({type:"success",title:"支付成功"},function(){setTimeout(function(){a.remove()},2e3)})}()},renderStatus:function(){var a=g({data:this.data,good:this.good,timestamp:this.countdown,express_company:A.express.express_company,express_code:A.express.express_code});this.data.status>=4&&v.addClass("grey"),v.html(a),new p(document.getElementById("J_Countdown"),{onTimer:function(a,b){a&&A.fixed.renderTime(a)},onEnd:function(a){A.payed||(A.order.init(),A.fixed.remove(),A.loading.remove())}})},pay:function(){var a=this,b=this.data;A.pay_type&&(A.payed||(A.payed=!0,A.repay=!1,MY.xhr.api({url:z+"/v1/order-charges",data:{user_id:A.user.id,pay_type:A.pay_type,order_id:b.id,title:a.good.title,token:A.user.token},type:"post",dataType:"json",success:function(a){var b=a.data;A.repay||y.callHandler("create_payment",{charge:b},function(a){A.log(a),A.loading.remove(),1==a.code?!function(){var a=new l({type:"success",title:"支付成功"},function(){A.fixed.remove(),setTimeout(function(){a.remove(),A.order.init()},2e3)})}():A.notice("支付失败",2)})},error:function(a){return a=a.responseJSON,A.loading.remove(),y.callHandler("my_dialog",{message:a.message||"网络出错啦~",buttons:["好"]})}})))}},A.fixed={render:function(a){var b=h({price:a});w.html(b)},event:function(){w.delegate(".btn-pay","tap",function(){new q(function(a){a&&(A.loading=new l({close:!0,type:"loading",title:"正在支付",sub_title:"如遇支付问题，请重新支付",buttons:["刷新支付结果","重新支付"]},function(a){"刷新支付结果"==a&&(A.loading.remove(),A.order.init(),A.repay=!0),"重新支付"==a&&(A.order.init(),A.payed=!1,A.repay=!0),A.log("loading-buttom: ",a)}),A.log("paybox: ",a),A.pay_type=a,A.payed=!1,A.order.pay())})})},remove:function(){w.hide()},renderTime:function(a){var b=a%60,c=parseInt(a/60);10>b&&(b="0"+b),w.find(".time").html("还剩 "+c+":"+b)}},A.event=function(){s.delegate(".J_Webview","tap",function(){var a=$(this),b=a.data("page");b&&y.callHandler("navi_webview_action",b)})},A.express={load:function(){},init:function(){var a=this;this.load().then(function(){a.render()})},render:function(){var a=arguments.length<=0||void 0===arguments[0]?!1:arguments[0];if(this.data){var b=i({data:this.data,simple:a,express_company:this.express_company,express_code:this.express_code,id:A.id,ship_time:A.order.data.ship_time});x.html(b),this.event()}},event:function(){var a=$(".J_ExpressCode");a.on("tap",function(){var a=$(this);console.log(a),a.select()})}},A.init=function(){y.callHandler("get_query_string",function(a){var b=a.query_string;b.match(/id=(\d+)/),A.id=+RegExp.$1||0,b.match(/pay_type=(\d+)/),A.pay_type=+RegExp.$1||0,A.pay_type?A.loading=new l({close:!0,type:"loading",title:"正在支付",sub_title:"如遇支付问题，请重新支付",buttons:["刷新支付结果","重新支付"]},function(a){"刷新支付结果"==a&&(A.loading.remove(),A.order.init(),A.repay=!0),"重新支付"==a&&(A.order.init(),A.payed=!1,A.repay=!0),A.log("loading-buttom: ",a)}):A.loading=new l({type:"loading"}),A.id?(A.user.getUserID(),A.user.getLoginToken().then(function(){A.order.init(),A.fixed.event(),A.event()})):A.notice("订单信息获取失败\n请返回后再继续操作",2)})},A.init()},{"./common/AlertBox":3,"./common/PayBox":4,"./common/countdown":5,"./common/log":6,"./common/notice":7,"./common/numberFormat":8,"./common/user":9,"./tpl/order-detail/address":11,"./tpl/order-detail/express":12,"./tpl/order-detail/fixed":13,"./tpl/order-detail/order":14,"./tpl/order-detail/status":15,"./tpl/template":16,"es6-promise":1}],11:[function(a,b,c){"use strict";var d=a("../template");b.exports=d("order-detail/address",function(a){var b=this,c=(b.$helpers,b.$string),d=a.data,e="";return e+='<div class="content"> <div class="title">收货地址</div> <p> <span class="name">',e+=c(d.name),e+='</span><span class="phone">',e+=c(d.phone),e+="</span> </p> <p> ",e+=c(d.province),e+=" ",e+=c(d.city),e+=" ",e+=c(d.district),e+=" ",e+=c(d.street),e+=" </p> </div>",new String(e)})},{"../template":16}],12:[function(a,b,c){"use strict";var d=a("../template");b.exports=d("order-detail/express",function(a){var b=this,c=b.$helpers,d=a.simple,e=b.$string,f=a.id,g=a.data,h=a.express_company,i=a.express_code,j=b.$each,k=(a.item,a.$index,a.ship_time),l="";return l+='<div class="box',d&&(l+=" simple"),l+='"> ',d?(l+=' <div class="title">物流信息</div> <div class="content J_Webview" data-page=\'trade/order-express.html?disable_share=1&id=',l+=e(f),l+="'> <ul> ",g.length&&(l+=' <li> <div class="context">',l+=e(g[0].context),l+='</div> <div class="time">',l+=e(g[0].time),l+="</div> </li> "),l+=" </ul> </div> "):(l+=' <div class="content"> ',h&&(l+='<p class="sub_title left express-code">快递公司：',l+=e(c.express(h)),l+="</p>"),l+=" ",i&&(l+='<p class="sub_title left express-code">快递单号：<span>',l+=e(i),l+="</span></p>"),l+=" <ul> ",g.length&&(l+=" ",j(g,function(a){l+=' <li> <div class="context">',l+=e(a.context),l+='</div> <div class="time">',l+=e(a.time),l+="</div> </li> "}),l+=" "),l+=" ",k&&(l+=' <li> <div class="context">美小芽 已发货</div> <div class="time">',l+=e(c.dateFormat(k)),l+="</div> </li> "),l+=" </ul> </div> "),l+=" </div>",new String(l)})},{"../template":16}],13:[function(a,b,c){"use strict";var d=a("../template");b.exports=d("order-detail/fixed",function(a){var b=this,c=(b.$helpers,b.$string),d=a.price,e="";return e+='<div class="fixed"> <p>实付款: <span class="price" id=\'J_Price\'>￥',e+=c(d),e+='</span></p> <a class="btn btn-pay" id=\'J_BtnPay\'>立即支付</a> <span class="time"></span> </div>',new String(e)})},{"../template":16}],14:[function(a,b,c){"use strict";var d=a("../template");b.exports=d("order-detail/order",function(a){var b=this,c=b.$helpers,d=b.$string,e=a.data,f=a.good,g=a.all,h=a.discount,i=a.ship,j=a.price,k="";return k+='<div class="box info"> <div class="title">订单信息</div> <div class="content"> <ul> <li>下单日期: ',k+=d(c.dateFormat(e.created_at,"yyyy-MM-dd hh:mm:ss")),k+='</li> <li class="express-code">订单编号: ',k+=d(e.order_no),k+="</li> ",(1==e.status||2==e.status||3==e.status)&&(k+=" <li>支付方式: ",1==e.pay_type?k+="支付宝":2==e.pay_type&&(k+="微信支付"),k+="</li> "),k+=' </ul> </div> </div> <div class="box goods"> <div class="title">订单商品</div> <div class="content"> <div class="pic"> <img src="',k+=d(f.image_url),k+='?imageView2/1/w/120"> </div> <div class="good"> <div class="title">',k+=d(f.title),k+="</div> ",1!=e.item_id&&(k+=' <div class="sub_title">#',k+=d(e.specification_title),k+="</div> "),k+=' <div class="price">￥',k+=d(f.price),k+='</div> <div class="quantity">× ',k+=d(f.quantity),k+='</div> </div> </div> </div> <div class="box stats"> <div class="content"> <ul> <li>合计: <span class="right">￥',k+=d(g),k+='</span></li> <li>优惠抵用: <span class="right">-￥',k+=d(h),k+='</span></li> <li>邮费: <span class="right">￥',k+=d(i),k+='</span></li> <li>实付款: <span class="right pink">￥',k+=d(j),k+='</span></li> </ul> <p class="tip">如需退款，请联系小芽客服</p> </div> </div>',new String(k)})},{"../template":16}],15:[function(a,b,c){"use strict";var d=a("../template");b.exports=d("order-detail/status",function(a){var b=this,c=b.$helpers,d=a.data,e=a.timestamp,f=b.$string,g=a.express_company,h=a.express_code,i="";return 0==d.status?(i+=" ",e>0?(i+=' <div class="title time"><i class="icon icon-time-pink"></i>等待支付</div> <div class="sub_title time">还剩 <p id=\'J_Countdown\' data-countdown_time="',i+=f(e),i+="\" data-countdown_format='mm:ss'>00:00</p></div> "):i+=' <div class="title"><i class="icon icon-time"></i>交易超时</div> <div class="sub_title">请重新下单</div> ',i+=" "):1==d.status?(i+=' <div class="title"><i class="icon icon-time"></i>等待发货</div> ',i+=1==d.item_id?' <p class="sub_title">限量礼盒将统一在6月10日左右发货，请美妞耐心等待</p> ':' <p class="sub_title">请耐心等待，小芽会在1~2天内马上给你发货</p> ',i+=" "):3==d.status?(i+=' <div class="title left">已收货</div> ',g&&(i+='<p class="sub_title left express-code">快递公司：',i+=f(c.express(g)),i+="</p>"),i+=" ",h&&(i+='<p class="sub_title left express-code">快递单号：<span>',i+=f(h),i+="</span></p>"),i+=" "):4==d.status?i+=' <div class="title"><span>申请退款</span></div> <div class="sub_title"><a class="link J_Webview" data-page=\'trade/order-refund-time.html?enable_custom_service=1\'>查看退回时间</a></div> ':5==d.status?i+=' <div class="title"><span>已退款：款项将原路退回支付账户</span></div> <div class="sub_title"><a class="link J_Webview" data-page=\'trade/order-refund-time.html?enable_custom_service=1\'>查看退回时间</a></div> ':6==d.status?i+=' <div class="title">交易关闭</div> <div class="sub_title">请重新下单</div> ':7==d.status?i+=' <div class="title"><span>退款成功：款项已原路退回支付账户</span></div> ':(i+=' <div class="title left">已发货</div> ',g&&(i+='<p class="sub_title left express-code">快递公司：',i+=f(c.express(g)),i+="</p>"),i+=" ",h?(i+=' <p class="sub_title left express-code">快递单号：<span>',i+=f(h),i+="</span></p> "):i+=' <p class="sub_title left">暂无快递单号</p> ',i+=" "),i+=" ",new String(i)})},{"../template":16}],16:[function(a,b,c){"use strict";!function(){function a(a,b){return(/string|function/.test(typeof b)?i:h)(a,b)}function c(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?c(a.call(a)):""),a}function d(a){return m[a]}function e(a){return c(a).replace(/&(?![\w#]+;)|[<>"']/g,d)}function f(a,b){if(n(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function g(a,b){var c=/(\/)[^\/]+\1\.\.\1/,d=("./"+a).replace(/[^\/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function h(b,c){var d=a.get(b)||j({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function i(a,b){if("string"==typeof b){var c=b;b=function(){return new l(c)}}var d=k[a]=function(c){try{return new b(c,a)+""}catch(d){return j(d)()}};return d.prototype=b.prototype=o,d.toString=function(){return b+""},d}function j(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var k=a.cache={},l=window.String,m={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},n=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},o=a.utils={$helpers:{},$include:function(a,b,c){return a=g(c,a),h(a,b)},$string:c,$escape:e,$each:f},p=a.helpers=o.$helpers;a.get=function(a){return k[a.replace(/^\.\//,"")]},a.helper=function(a,b){p[a]=b},b.exports=a}()},{}]},{},[10]);