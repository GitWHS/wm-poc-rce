(function(){
  document.title='P122TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P122CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P122TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P122TB-NOMGR:'+location.host;return}
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['OP','CommonPlugin','OpenNewPage',{
      scheme:'wemeet://page/operating_activities/main_process_webview',
      router_params:{url:official, from_webView:true}
    }],
    ['CX','CommonPlugin','GetWebPageRunningContext',{}],
    ['LT','CommonPlugin','LoadTemplateWebView',{
      url:official,
      template_url:official,
      template_id:'p122',
      process_pattern:0,
      from_webView:true
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P122TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P122-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
