(function(){
  document.title='P77TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        module:'CommonPlugin',method:'PrintLog',
        param:{log:JSON.stringify(r)},callId:'LOG'
      }));
    }catch(e){}
    document.title='P77CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,48);
  };
  function c(id,mod,m,p){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p',module:mod,method:m,param:p,callId:id
    }));
  }
  var js='document.title="P77EVAL:"+location.host';
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var q=[
    ['E1','CommonPlugin','evaluateJavascript',{script:js,js:js,javascript:js}],
    ['E2','CommonPlugin','EvaluateJavascript',{script:js,js:js}],
    ['E3','TmWebPlugin','evaluateJavascript',{script:js,js:js}],
    ['W1','CommonPlugin','createWebview',{url:official,script:js}],
    ['W2','CommonPlugin','CreateWebview',{url:official}],
    ['W3','WebViewPreloadService','InvokeCreateWebview',{url:official}],
    ['S1','CommonPlugin','setWebEvent',{event:'P77',data:js}],
    ['H2','CommonPlugin','GetPerformance',{}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P77TB-DONE:'+location.host;return}
    var x=q[i++];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n,2500);
  }
  setTimeout(n, 1500);
})();
