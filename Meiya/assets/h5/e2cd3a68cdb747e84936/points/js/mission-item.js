/* Meiya 2016-05-26 10:47 */!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";var d=(MY.appBridge,MY.xhr),e={};e.user={id:0,data:null,getID:function(){var a=this,b=$.Deferred();return MY.appBridge.callHandler("get_user_id",function(c){a.id=c.user_id?+c.user_id:0,b.resolve(a.id)}),b.promise()},getData:function(a,b){var c=this;a=a||this.id;var e={url:"/v1/users/"+a,type:"get",success:function(a){c.data=a.data}};return"object"==typeof b&&(e.data=b),d.api(e)}},e.mission={data:null,getData:function(a,b){var c=this;return b=b||1,d.api({url:"/v1/mission",type:"get",data:{user_id:a,type:b},success:function(a){c.data=a.data}})}},b.exports=e},{}],2:[function(a,b,c){"use strict";var d=a("./common/common"),e=MY.appBridge,f=MY.xhr;$("#J_Webview").on("tap",function(){var a=this.dataset.page;a&&e.callHandler("navi_webview_action",a)});var g=/ids\[\]=(\d+)/g,h={};h.user=d.user,h.mission={ids:"",getData:function(a){return f.api({url:"/v1/mission/"+a,type:"get",data:{user_id:h.user.id}})},init:function(){var a=this;e.callHandler("get_query_string",function(b){for(var c=decodeURI(b.query_string).match(g),d=a.ids=[],e=c.length;e--;)d.push(c[e].split("=")[1]);d.forEach(function(b){a.getData(b).done(function(a){var c=a.metadata;$("#J_Point_"+b).text(c.point),$("#J_Count_"+b).text(c.count+" / "+c.day_limit)})})})}},h.init=function(){var a=this;this.user.getID().done(function(b){a.mission.init()}.bind(this))},h.init(),b.exports=h},{"./common/common":1}]},{},[2]);