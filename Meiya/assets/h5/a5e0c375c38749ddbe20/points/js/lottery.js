/* Meiya 2016-05-30 16:26 */!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(c,d){(function(){"use strict";function e(a){return"function"==typeof a||"object"==typeof a&&null!==a}function f(a){return"function"==typeof a}function g(a){T=a}function h(a){X=a}function i(){return function(){c.nextTick(n)}}function j(){return function(){S(n)}}function k(){var a=0,b=new $(n),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function l(){var a=new MessageChannel;return a.port1.onmessage=n,function(){a.port2.postMessage(0)}}function m(){return function(){setTimeout(n,1)}}function n(){for(var a=0;W>a;a+=2){var b=ba[a],c=ba[a+1];b(c),ba[a]=void 0,ba[a+1]=void 0}W=0}function o(){try{var b=a,c=b("vertx");return S=c.runOnLoop||c.runOnContext,j()}catch(d){return m()}}function p(a,b){var c=this,d=c._state;if(d===fa&&!a||d===ga&&!b)return this;var e=new this.constructor(r),f=c._result;if(d){var g=arguments[d-1];X(function(){H(d,e,g,f)})}else D(c,e,a,b);return e}function q(a){var b=this;if(a&&"object"==typeof a&&a.constructor===b)return a;var c=new b(r);return z(c,a),c}function r(){}function s(){return new TypeError("You cannot resolve a promise with itself")}function t(){return new TypeError("A promises callback cannot return that same promise.")}function u(a){try{return a.then}catch(b){return ha.error=b,ha}}function v(a,b,c,d){try{a.call(b,c,d)}catch(e){return e}}function w(a,b,c){X(function(a){var d=!1,e=v(c,b,function(c){d||(d=!0,b!==c?z(a,c):B(a,c))},function(b){d||(d=!0,C(a,b))},"Settle: "+(a._label||" unknown promise"));!d&&e&&(d=!0,C(a,e))},a)}function x(a,b){b._state===fa?B(a,b._result):b._state===ga?C(a,b._result):D(b,void 0,function(b){z(a,b)},function(b){C(a,b)})}function y(a,b,c){b.constructor===a.constructor&&c===ca&&constructor.resolve===da?x(a,b):c===ha?C(a,ha.error):void 0===c?B(a,b):f(c)?w(a,b,c):B(a,b)}function z(a,b){a===b?C(a,s()):e(b)?y(a,b,u(b)):B(a,b)}function A(a){a._onerror&&a._onerror(a._result),E(a)}function B(a,b){a._state===ea&&(a._result=b,a._state=fa,0!==a._subscribers.length&&X(E,a))}function C(a,b){a._state===ea&&(a._state=ga,a._result=b,X(A,a))}function D(a,b,c,d){var e=a._subscribers,f=e.length;a._onerror=null,e[f]=b,e[f+fa]=c,e[f+ga]=d,0===f&&a._state&&X(E,a)}function E(a){var b=a._subscribers,c=a._state;if(0!==b.length){for(var d,e,f=a._result,g=0;g<b.length;g+=3)d=b[g],e=b[g+c],d?H(c,d,e,f):e(f);a._subscribers.length=0}}function F(){this.error=null}function G(a,b){try{return a(b)}catch(c){return ia.error=c,ia}}function H(a,b,c,d){var e,g,h,i,j=f(c);if(j){if(e=G(c,d),e===ia?(i=!0,g=e.error,e=null):h=!0,b===e)return void C(b,t())}else e=d,h=!0;b._state!==ea||(j&&h?z(b,e):i?C(b,g):a===fa?B(b,e):a===ga&&C(b,e))}function I(a,b){try{b(function(b){z(a,b)},function(b){C(a,b)})}catch(c){C(a,c)}}function J(a){return new oa(this,a).promise}function K(a){function b(a){z(e,a)}function c(a){C(e,a)}var d=this,e=new d(r);if(!V(a))return C(e,new TypeError("You must pass an array to race.")),e;for(var f=a.length,g=0;e._state===ea&&f>g;g++)D(d.resolve(a[g]),void 0,b,c);return e}function L(a){var b=this,c=new b(r);return C(c,a),c}function M(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function O(a){this._id=ma++,this._state=void 0,this._result=void 0,this._subscribers=[],r!==a&&("function"!=typeof a&&M(),this instanceof O?I(this,a):N())}function P(a,b){this._instanceConstructor=a,this.promise=new a(r),Array.isArray(b)?(this._input=b,this.length=b.length,this._remaining=b.length,this._result=new Array(this.length),0===this.length?B(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&B(this.promise,this._result))):C(this.promise,this._validationError())}function Q(){var a;if("undefined"!=typeof d)a=d;else if("undefined"!=typeof self)a=self;else try{a=Function("return this")()}catch(b){throw new Error("polyfill failed because global object is unavailable in this environment")}var c=a.Promise;(!c||"[object Promise]"!==Object.prototype.toString.call(c.resolve())||c.cast)&&(a.Promise=na)}var R;R=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)};var S,T,U,V=R,W=0,X=function(a,b){ba[W]=a,ba[W+1]=b,W+=2,2===W&&(T?T(n):U())},Y="undefined"!=typeof window?window:void 0,Z=Y||{},$=Z.MutationObserver||Z.WebKitMutationObserver,_="undefined"!=typeof c&&"[object process]"==={}.toString.call(c),aa="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ba=new Array(1e3);U=_?i():$?k():aa?l():void 0===Y&&"function"==typeof a?o():m();var ca=p,da=q,ea=void 0,fa=1,ga=2,ha=new F,ia=new F,ja=J,ka=K,la=L,ma=0,na=O;O.all=ja,O.race=ka,O.resolve=da,O.reject=la,O._setScheduler=g,O._setAsap=h,O._asap=X,O.prototype={constructor:O,then:ca,"catch":function(a){return this.then(null,a)}};var oa=P;P.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},P.prototype._enumerate=function(){for(var a=this.length,b=this._input,c=0;this._state===ea&&a>c;c++)this._eachEntry(b[c],c)},P.prototype._eachEntry=function(a,b){var c=this._instanceConstructor,d=c.resolve;if(d===da){var e=u(a);if(e===ca&&a._state!==ea)this._settledAt(a._state,b,a._result);else if("function"!=typeof e)this._remaining--,this._result[b]=a;else if(c===na){var f=new c(r);y(f,a,e),this._willSettleAt(f,b)}else this._willSettleAt(new c(function(b){b(a)}),b)}else this._willSettleAt(d(a),b)},P.prototype._settledAt=function(a,b,c){var d=this.promise;d._state===ea&&(this._remaining--,a===ga?C(d,c):this._result[b]=c),0===this._remaining&&B(d,this._result)},P.prototype._willSettleAt=function(a,b){var c=this;D(a,void 0,function(a){c._settledAt(fa,b,a)},function(a){c._settledAt(ga,b,a)})};var pa=Q,qa={Promise:na,polyfill:pa};"function"==typeof define&&define.amd?define(function(){return qa}):"undefined"!=typeof b&&b.exports?b.exports=qa:"undefined"!=typeof this&&(this.ES6Promise=qa),pa()}).call(this)}).call(this,a("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:2}],2:[function(a,b,c){function d(){k=!1,h.length?j=h.concat(j):l=-1,j.length&&e()}function e(){if(!k){var a=setTimeout(d);k=!0;for(var b=j.length;b;){for(h=j,j=[];++l<b;)h[l].run();l=-1,b=j.length}h=null,k=!1,clearTimeout(a)}}function f(a,b){this.fun=a,this.array=b}function g(){}var h,i=b.exports={},j=[],k=!1,l=-1;i.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];j.push(new f(a,b)),1!==j.length||k||setTimeout(e,0)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.binding=function(a){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(a){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],3:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(b,c){var e=arguments.length<=2||void 0===arguments[2]?"active":arguments[2];d(this,a);var f=this;this.prizes=c,this.selector=b,this.active=e,this.li=[],$(b).find("li[data-index]").each(function(){var a=$(this),b=a.data("index")-1;f.li[b]=a})}return e(a,[{key:"play",value:function(a){function b(){"playing"==e.type&&setTimeout(c,d)}function c(){if("playing"==e.type){var c=e.li[f%h];i.removeClass(e.active),c.addClass(e.active),f++,g-f>=0?b():(e.type="timeout",a({id:c.data("id"),name:c.find(".name").text(),content:c.find(".content").text()}))}}var d=arguments.length<=1||void 0===arguments[1]?50:arguments[1],e=this,f=parseInt($(this.selector).find(".active").data("index")-1||0),g=64,h=this.li.length,i=$(this.selector).find("li[data-index]");e.type="playing",b()}},{key:"run",value:function(a,b){function c(){setTimeout(d,e)}function d(){var a=f.li[g%i];h.removeClass(f.active),a.addClass(f.active),g++,20>j-g&&(e+=4*(20-(j-g))),j-g>=0?c():b({id:a.data("id"),name:a.find(".name").text(),content:a.find(".content").text(),prize_url:a.find(".prize_url").text(),button_content:a.find(".button_content").text()})}var e=arguments.length<=2||void 0===arguments[2]?50:arguments[2],f=this,g=parseInt($(this.selector).find(".active").data("index")-1||0),h=$(this.selector).find("li[data-index]"),i=this.li.length,j=this.prizes.indexOf(a)+(parseInt(5*Math.random())+3)*i;"timeout"==f.type,f.type="running",c()}},{key:"end",value:function(){this.type="timeout";var a=$(this.selector).find("li[data-index]");a.removeClass(this.active)}}]),a}();b.exports=f},{}],4:[function(a,b,c){"use strict";var d=MY.appBridge;b.exports=function(a,b,c){a&&("function"==typeof b&&(c=b,b=1),b=+b||1,("number"!=typeof b||isNaN(b))&&(b=1),d.callHandler("my_toast",{delay:b,content:a},function(){c&&c(res)}))}},{}],5:[function(a,b,c){"use strict";var d=a("es6-promise"),e=d.Promise,f=a("./common/lottery.js"),g=a("./common/notice.js"),h=a("./tpl/template.js"),i=a("./tpl/lottery/turntable.js"),j=a("./tpl/lottery/logs.js"),k=$(".container"),l=$("#J_Turntable"),m=$("#J_LotteryLogs"),n=MY.appBridge,o={notice:g};h.helper("dateFormat",function(a,b){return a?MY.dateFormat(a,b):""}),h.helper("nameHide",function(a,b){return b=a.replace(a.substr(1),b+a.substr(-1))}),o.user={id:0,data:{},getUserID:function(){var a=this,b=new e(function(b,c){return a.id?b(a.id):void MY.appBridge.callHandler("get_user_id",function(c){a.id=c.user_id?+c.user_id:0,b(a.id)})});return b},load:function(){var a=this,b=new e(function(b,c){MY.xhr.api({url:"/v1/users/"+a.id,success:function(c){a.data=c.data,b(a.data)}})});return b},init:function(){var a=this;this.getUserID().then(function(){return 0==a.id?void o.login():void a.load().then(function(){a.render(),o.lottery.init()})})},render:function(a){a=a||this.data.point;var b=$("#J_Points"),c='<div class="point">当前积分: '+a+'</div><p class="text">每抽一次消耗9积分</p>';b.html(c)}},o.lottery={ids:[1,2,3,8,4,7,6,5],buttons:["如何赚取积分?","去完善","立即领取","去查看我的积分","本宫知道了","本宫知道了"],load:function(){var a=this,b=new e(function(b,c){MY.xhr.api({url:"/v2/lotterys",success:function(c){a.data=c.data,b(a.data)},error:function(a){c(a)}})});return b},init:function(){var a=this;this.load().then(function(){a.render()})},render:function(){var a=i({data:this.data,ids:this.ids});l.html(a),this.event()},event:function(){var a=this,b=new f("#J_Turntable",[1,2,3,4,5,6,7,8]);$("#J_BtnStart").on("click",function(){if(!a.disabled){if(a.disabled=!0,o.user.data.point-9<0)return a.disabled=!1,a.alert("美妞至少要9积分才可以抽奖哦",["取消","去赚积分"],function(a){"去赚积分"===a&&n.callHandler("navi_webview_action","points/rules.html?disable_share=1")});b.play(function(){b.run(a.ids[0],function(b){a.alert(b.content||"你的网络开小差啦~\n请检测网络是否异常！",function(b){a.disabled=!1})},50)}),a.prize().then(function(c){var d=c.id,e=c.type,f=c.message;return f?a.alert(f,function(b){a.disabled=!1}):(e=e||5,o.user.data.point-=9,o.user.render(o.user.data.point),void b.run(a.ids[d-1],function(b){var c=b.button_content,d=b.prize_url,f=c||a.buttons[e];o.user.init(),a.alert(b.content,f,function(b){/赚取积分/.test(b)?n.callHandler("navi_webview_action","points/rules.html?disable_share=1"):/去完善/.test(b)?n.callHandler("navi_page_action","meiya://recipients",function(){o.init()}):/立即领取/.test(b)?(/disable_share/.test(d)||(d+=(/\?/.test(d)?"&":"?")+"disable_share=1"),n.callHandler("navi_webview_action",d)):/查看我的积分/.test(b)&&n.callHandler("navi_webview_action","points/detail.html?enable_refresh=1&disable_share=1"),a.disabled=!1})},50))},function(c){b.end(),a.alert("你的网络开小差啦~\n请检测网络是否异常！",function(b){a.disabled=!1})})}})},prize:function(){var a=new e(function(a,b){MY.xhr.api({url:"/v2/lotterys",type:"post",success:function(c){c.code&&b(c),a(c.data)},error:function(a){b(a)}})});return a},alert:function(a,b,c){var d=[];"function"==typeof b?(c=b,d="本宫知道了"):d="string"==typeof b?[b]:"object"==typeof b&&b.length?b:"本宫知道了",n.callHandler("my_dialog",{message:a,buttons:d},function(a){c(a)})}},o.logs={data:[],load:function(){var a=this,b=new e(function(b,c){MY.xhr.api({url:"/v2/lottery-logs",data:{page:1,per_page:10},success:function(c){a.data=c.data,b(a.data)},error:function(a){c(a)}})});return b},init:function(){var a=this;this.load().then(function(){a.render()})},render:function(){m.html(j({data:this.data}));var a=this,b=m.find(".scroll"),c=b.find("p").height(),d=this.data.length,e=function f(){b.css({"-webkit-transition":"all 0.3s ease-in-out",transition:"all 0.3s ease-in-out"}),a.data.map(function(a,e){var g="translateY(-"+(e+1)*c+"px)";setTimeout(function(){b.css({"-webkit-transform":g,transform:g}),1>=d-e&&(setTimeout(function(){b.css({"-webkit-transition":"none",transition:"none"}),b.css({"-webkit-transform":"translateY(0)",transform:"translateY(0)"})},500),setTimeout(function(){f()},2e3))},2e3*e)})};e()}},o.login=function(){var a=o.user.id;if(0==a||"number"!=typeof a){var b=function(){n.callHandler("request_login");var a=setInterval(function(){MY.appBridge.callHandler("get_user_id",function(b){"0"!=b.user_id&&(o.init(),clearInterval(a))})},500);return{v:void 0}}();if("object"==typeof b)return b.v}},o.init=function(){o.user.init(),o.logs.init(),k.delegate(".J_Webview","tap",function(){var a=$(this),b=a.data("page");b&&n.callHandler("navi_webview_action",b)})},o.init()},{"./common/lottery.js":3,"./common/notice.js":4,"./tpl/lottery/logs.js":6,"./tpl/lottery/turntable.js":7,"./tpl/template.js":8,"es6-promise":1}],6:[function(a,b,c){"use strict";var d=a("../template");b.exports=d("lottery/logs",function(a){var b=this,c=b.$helpers,d=b.$each,e=a.data,f=(a.item,a.$index,b.$string),g="";return g+='<div class="scroll"> ',d(e,function(a){g+=" <p>",g+=f(c.nameHide(a.user.username,"XXX")),g+=" 抽中",g+=f(a.lottery_name),g+=" ",g+=f(c.dateFormat(1e3*a.lottery.created_time,"yyyy/MM/dd hh:mm")),g+="</p> "}),g+=" <p>",g+=f(c.nameHide(e[0].user.username,"XXX")),g+=" 抽中",g+=f(e[0].lottery_name),g+=" ",g+=f(c.dateFormat(1e3*e[0].lottery.created_time,"yyyy/MM/dd hh:mm")),g+="</p> </div>",new String(g)})},{"../template":8}],7:[function(a,b,c){"use strict";var d=a("../template");b.exports=d("lottery/turntable",function(a){var b=this,c=(b.$helpers,b.$each),d=a.data,e=(a.item,a.i,b.$string),f=a.ids,g="";return g+="<ul> ",c(d,function(a,b){g+=" ",4==b&&(g+=' <li> <div class="box start"><a class="btn btn-start" id=\'J_BtnStart\'></a></div> </li> '),g+=" <li data-index='",g+=e(f[a.id-1]),g+="' data-id='",g+=e(a.id),g+="'> <div class=\"box\"> <img src='",g+=e(a.image_url),g+='\'> <div class="name">',g+=e(a.name),g+='</div> <div class="content">',g+=e(a.content),g+='</div> <div class="prize_url">',g+=e(a.prize_url),g+='</div> <div class="button_content">',g+=e(a.button_content),g+="</div> </div> </li> "}),g+=" </ul>",new String(g)})},{"../template":8}],8:[function(a,b,c){"use strict";!function(){function a(a,b){return(/string|function/.test(typeof b)?i:h)(a,b)}function c(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?c(a.call(a)):""),a}function d(a){return m[a]}function e(a){return c(a).replace(/&(?![\w#]+;)|[<>"']/g,d)}function f(a,b){if(n(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function g(a,b){var c=/(\/)[^\/]+\1\.\.\1/,d=("./"+a).replace(/[^\/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function h(b,c){var d=a.get(b)||j({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function i(a,b){if("string"==typeof b){var c=b;b=function(){return new l(c)}}var d=k[a]=function(c){try{return new b(c,a)+""}catch(d){return j(d)()}};return d.prototype=b.prototype=o,d.toString=function(){return b+""},d}function j(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var k=a.cache={},l=window.String,m={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},n=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},o=a.utils={$helpers:{},$include:function(a,b,c){return a=g(c,a),h(a,b)},$string:c,$escape:e,$each:f},p=a.helpers=o.$helpers;a.get=function(a){return k[a.replace(/^\.\//,"")]},a.helper=function(a,b){p[a]=b},b.exports=a}()},{}]},{},[5]);