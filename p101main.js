(function(){
  document.title='P101MAIN:'+location.host+':'+location.protocol;
  window.__m=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P101MCB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__m',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P101MAIN-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P101MAIN-NOMGR:'+location.host;return}
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['CX','CommonPlugin','GetWebPageRunningContext',{}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P101MAIN-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P101MAIN-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 3000);
  }
  setTimeout(n, 800);
})();
