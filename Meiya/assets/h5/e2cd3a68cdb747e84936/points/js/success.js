/* Meiya 2016-05-26 10:47 */!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";var d=(MY.appBridge,MY.xhr),e={};e.user={id:0,data:null,getID:function(){var a=this,b=$.Deferred();return MY.appBridge.callHandler("get_user_id",function(c){a.id=c.user_id?+c.user_id:0,b.resolve(a.id)}),b.promise()},getData:function(a,b){var c=this;a=a||this.id;var e={url:"/v1/users/"+a,type:"get",success:function(a){c.data=a.data}};return"object"==typeof b&&(e.data=b),d.api(e)}},e.mission={data:null,getData:function(a,b){var c=this;return b=b||1,d.api({url:"/v1/mission",type:"get",data:{user_id:a,type:b},success:function(a){c.data=a.data}})}},b.exports=e},{}],2:[function(a,b,c){"use strict";var d=MY,e=d.appBridge,f=d.xhr,g=a("./tpl/template"),h=a("./tpl/success/content.js"),i=a("./common/common"),j=a("../../public/src/ui/zepto.loading"),k=new j,l={};g.helper("dateFormat",MY.dateFormat),l.user=i.user,l.user.local=function(a){var b=this,c=$.Deferred();return localStorage.getItem("points_user")&&"undefined"!=localStorage.getItem("points_user")?(this.data=JSON.parse(localStorage.getItem("points_user")),c.resolve(this.data)):this.getData().done(function(a){localStorage.setItem("points_user",JSON.stringify(b.data)),c.resolve(b.data)}),c.promise()},l.success={res:null,id:"",init:function(){this.render(),k.hide().destory()},getData:function(a){a=a||this.id;var b=$.Deferred(),c=this;return this.res?b.resolve(this.res):f.api({url:"/v1/prize-logs/"+a,type:"get",success:function(a){c.res=a,b.resolve(c.res)}}),b.promise()},getRecipients:function(){var a=this,b=$.Deferred();return e.callHandler("get_recipients",function(c){a.status=c.status,a.address=c.addresses[0],b.resolve(a.address,a.status)}),b.resolve(),b.promise()},render:function(){var a=$("#J_Container");this.res.data;a.html(h({data:this.res.data,address:this.address,status:this.status})),this.event()},event:function(){var a=$("#J_BaiduSearch"),b=$(".J_ModifyAddr");a.on("tap",function(){var a=$(this),b=encodeURI(a.data("remark")),c="http://m.baidu.com/s?word="+b+"&pu=sz%401320_480&wpo=btmbase&disable_share=1";e.callHandler("navi_webview_action",c)}),b.on("tap",function(){e.callHandler("navi_page_action","meiya://recipients",function(a){a.status&&self.render()})})}},l.init=function(){var a=this;e.callHandler("get_query_string",function(b){var c=b.query_string;c.match(/id=(\d+)/);a.success.id=RegExp.$1;a.user.getID().done(function(b){if("0"!=a.user.id)$.when(a.user.local(),a.success.getData(),a.success.getRecipients()).done(function(){a.success.init()});else{e.callHandler("request_login");var c=setInterval(function(){MY.appBridge.callHandler("get_user_id",function(a){"0"!=a.user_id&&(l.init(),clearInterval(c))})},500)}})})},l.init(),b.exports=l},{"../../public/src/ui/zepto.loading":5,"./common/common":1,"./tpl/success/content.js":3,"./tpl/template":4}],3:[function(a,b,c){"use strict";var d=a("../template");b.exports=d("success/content",function(a){var b=this,c=b.$helpers,d=a.data,e=b.$string,f=a.status,g=a.address,h="";return h+='<header class="header"> <div class="pic" ',d.prize.images&&d.prize.images.length?(h+=' style="background-image: url(',h+=e(d.prize.images[0].url),h+='?imageView2/1/w/150)" '):h+=' style="background-image: url(./img/default.png)" ',h+=' > </div> <div class="prize"> <h1 class="title">',h+=e(d.prize.title),h+='</h1> <p class="point">',h+=e(d.prize.point),h+='积分</p> <p class="time">兑换时间: ',h+=e(c.dateFormat(1e3*d.created_time,"yyyy-MM-dd hh:mm")),h+='</p> </div> </header> <section class="recipient"> <div class="item"> <ul> ',f?(h+=' <li class="username"> <span class="name">',h+=e(g.name),h+='</span><span class="phone">',h+=e(g.phone),h+='</span> </li> <li class="address"> ',h+=e(g.province),h+=" ",h+=e(g.city),h+=" ",h+=e(g.district),h+=" ",h+=e(g.street),h+=" </li> ",d.status||(h+=' <li class="button"> <a class="btn update J_ModifyAddr">修改收货信息</a> </li> '),h+=" "):h+=' <li class="warn"> <span>未填写收货信息</span><a class="btn update J_ModifyAddr">填写收货信息</a> </li> ',h+=' </ul> </div> </section> <section class="message"> ',f?(h+=" ",0==d.status?h+=' <div class="success"> <i class="icon success"></i> <p class="title">抢购成功，等待发货</p> <p>请核对收货信息，我们会尽快发货哦</p> </div> ':1==d.status?(h+=' <div class="success"> <i class="icon ship"></i> <p class="title">已发货</p> <p>',h+=e(d.remark),h+=' <a class="btn search" id="J_BaiduSearch" data-remark=\'',h+=e(d.remark),h+="'>查询</a></p> </div> "):2==d.status&&(h+=' <div class="error"> <i class="icon error"></i> <p class="title">取消订单</p> <p>',h+=e(d.remark),h+="</p> </div> "),h+=" "):h+=' <div class="success"> <i class="icon success"></i> <p class="title">抢购成功</p> <p>请及时填写收货信息</p> </div> ',h+=" </section>",new String(h)})},{"../template":4}],4:[function(a,b,c){"use strict";!function(){function a(a,b){return(/string|function/.test(typeof b)?i:h)(a,b)}function c(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?c(a.call(a)):""),a}function d(a){return m[a]}function e(a){return c(a).replace(/&(?![\w#]+;)|[<>"']/g,d)}function f(a,b){if(n(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function g(a,b){var c=/(\/)[^\/]+\1\.\.\1/,d=("./"+a).replace(/[^\/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function h(b,c){var d=a.get(b)||j({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function i(a,b){if("string"==typeof b){var c=b;b=function(){return new l(c)}}var d=k[a]=function(c){try{return new b(c,a)+""}catch(d){return j(d)()}};return d.prototype=b.prototype=o,d.toString=function(){return b+""},d}function j(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var k=a.cache={},l=window.String,m={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},n=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},o=a.utils={$helpers:{},$include:function(a,b,c){return a=g(c,a),h(a,b)},$string:c,$escape:e,$each:f},p=a.helpers=o.$helpers;a.get=function(a){return k[a.replace(/^\.\//,"")]},a.helper=function(a,b){p[a]=b},b.exports=a}()},{}],5:[function(a,b,c){"use strict";var d={elem:".J_Loading",onshow:function(){},onhide:function(){}},e='<div class="J_Loading loading"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>',f=function(a){var b=null;a=$.extend(d,a||{}),$.extend(this,a),b=$(a.elem),0===b.length&&(b=$(e),document.body.appendChild(b[0])),this.$elem=b},g=f.prototype={constructor:f};$.extend(g,{show:function(){return this.$elem.show(),this.__dispatchEvent("show"),this},hide:function(){return this.$elem.hide(),this.__dispatchEvent("hide"),this},__dispatchEvent:function(a,b){this["on"+a]&&this["on"+a](b)},destory:function(){this.$elem.remove();for(var a in this)delete this[a];return this}}),b.exports=f},{}]},{},[2]);