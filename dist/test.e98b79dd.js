// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\nbody {\n    background: #fff400;\n\n  }\n  .box {\n    position: relative;\n    height: 600px;\n    width: 600px;\n    margin: 0 auto;\n    margin-top: 5%;\n\n  }\n  .eye-left {\n    position: absolute;\n    height: 30%;\n    width: 30%;\n    top: 18%;\n    left: 20%;\n    background: white;\n    border-radius: 50%;\n    border: 5px solid black;\n  }\n  .eyelashes-left-1 {\n    position: absolute;\n    top: 14.5%;\n    left: 28%;\n    height: 5%;\n    width: 1.5%;\n    background: black;\n    transform: rotate(-12deg);\n  }\n  .eyelashes-left-2 {\n    position: absolute;\n    top: 13.6%;\n    left: 35%;\n    height: 5%;\n    width: 1.5%;\n    background: black;\n  }\n  .eyelashes-left-3 {\n    position: absolute;\n    top: 15%;\n    left: 42%;\n    height: 5%;\n    width: 1.5%;\n    background: black;\n    transform: rotate(12deg);\n  }\n  \n  .eye-right {\n    position: absolute;\n    height: 30%;\n    width: 30%;\n    top: 18%;\n    right: 18%;\n    background: white;\n    border-radius: 50%;\n    border: 5px solid black;\n  }\n  \n  .eyelashes-right-1 {\n    position: absolute;\n    top: 14.5%;\n    right: 28%;\n    height: 5%;\n    width: 1.5%;\n    background: black;\n    transform: rotate(12deg);\n  }\n  \n  .eyelashes-right-2 {\n    position: absolute;\n    top: 13.6%;\n    right: 35%;\n    height: 5%;\n    width: 1.5%;\n    background: black;\n  }\n  .eyelashes-right-3 {\n    position: absolute;\n    top: 15.7%;\n    right: 42%;\n    height: 5%;\n    width: 1.5%;\n    background: black;\n    transform: rotate(-12deg);\n  }\n  \n  .pupil-left {\n    position: absolute;\n    height: 30%;\n    width: 30%;\n    top: 40%;\n    left: 47%;\n    background: #0093dc;\n    border-radius: 50%;\n    border: 2px solid black;\n  }\n  .iris-left {\n    position: absolute;\n    height: 50%;\n    width: 50%;\n    top: 25%;\n    left: 25%;\n    background: black;\n    border-radius: 50%;\n  }\n  .pupil-right {\n    position: absolute;\n    height: 30%;\n    width: 30%;\n    top: 40%;\n    right: 47%;\n    background: #0093dc;\n    border-radius: 50%;\n    border: 2px solid black;\n  }\n  \n  .iris-right {\n    position: absolute;\n    height: 50%;\n    width: 50%;\n    top: 25%;\n    left: 25%;\n    background: black;\n    border-radius: 50%;\n  }\n  \n  .nose {\n    position: absolute;\n    height: 18%;\n    width: 6%;\n    top: 30%;\n    left: 47%;\n    background: #fff400;\n    border: 1px solid transparent;\n    border-top: 5px solid black;\n    border-left: 5px solid black;\n    border-right: 5px solid black;\n    border-radius: 50%;\n  }\n  .cheek-left {\n    position: absolute;\n    height: 8%;\n    width: 13%;\n    top: 42%;\n    left: 14%;\n    border-radius: 50%;\n    background: #fff400;\n    border: 2px solid transparent;\n    border-top: 5px solid #d9241c;\n    border-left: 4px solid #d9241c;\n    border-right: 4px solid #d9241c;\n    transform: rotate(-12deg);\n  }\n  .cheek-right {\n    position: absolute;\n    height: 8%;\n    width: 13%;\n    top: 42%;\n    right: 14%;\n    background: #fff400;\n    border: 2px solid transparent;\n    border-top: 5px solid #d9241c;\n    border-right: 4px solid #d9241c;\n    border-left: 4px solid #d9241c;\n    border-radius: 50%;\n    transform: rotate(12deg);\n  }\n  \n  .dimples-left-1 {\n    position: absolute;\n    height: 12%;\n    width: 7%;\n    background: #d9241c;\n    border-radius: 50%;\n    top: 30%;\n    left: 25%;\n  }\n  \n  .dimples-left-2 {\n    position: absolute;\n    height: 12%;\n    width: 7%;\n    background: #d9241c;\n    border-radius: 50%;\n    top: 30%;\n    left: 55%;\n  }\n  \n  .dimples-left-3 {\n    position: absolute;\n    height: 12%;\n    width: 7%;\n    background: #d9241c;\n    border-radius: 50%;\n    top: 60%;\n    left: 40%;\n  }\n  \n  .dimples-right-1 {\n    position: absolute;\n    height: 12%;\n    width: 7%;\n    background: #d9241c;\n    border-radius: 50%;\n    top: 30%;\n    right: 30%;\n  }\n  .dimples-right-2 {\n    position: absolute;\n    height: 12%;\n    width: 7%;\n    background: #d9241c;\n    border-radius: 50%;\n    top: 30%;\n    right: 55%;\n  }\n  \n  .dimples-right-3 {\n    position: absolute;\n    height: 12%;\n    width: 7%;\n    background: #d9241c;\n    border-radius: 50%;\n    top: 60%;\n    right: 42%;\n  }\n  \n  .mouth {\n    position: absolute;\n    height: 50%;\n    width: 70%;\n    top: 13%;\n    left: 14%;\n    border: 2px solid transparent;\n    border-bottom: 5px solid black;\n    border-radius: 50%;\n    z-index: 2;\n  }\n  .mouth-crease-left {\n    position: absolute;\n    height: 10%;\n    width: 10%;\n    border: 1px solid transparent;\n    border-top: 5px solid black;\n    border-radius: 50%;\n    top: 50%;\n    transform: rotate(-25deg);\n    left: 17%;\n  }\n  .mouth-crease-right {\n    position: absolute;\n    height: 10%;\n    width: 10%;\n    border: 1px solid transparent;\n    border-top: 5px solid black;\n    border-radius: 50%;\n    top: 50%;\n    transform: rotate(25deg);\n    right: 18%;\n  }\n  \n  .tooth-1 {\n    position: absolute;\n    height: 11%;\n    width: 6%;\n    background: white;\n    border: 5px solid black;\n    top: 99.6%;\n    left: 41.5%;\n    z-index: 1;\n    transform: rotate(5deg);\n  }\n  \n  .tooth-2 {\n    position: absolute;\n    height: 11%;\n    width: 6%;\n    background: white;\n    border: 5px solid black;\n    top: 99.6%;\n    left: 51%;\n    z-index: 1;\n    transform: rotate(-5deg);\n  }\n  \n  .chin:before {\n    position: absolute;\n    height: 15%;\n    width: 15%;\n    content: \"\";\n    border: 2px solid transparent;\n    border-bottom: 8px solid #d9241c;\n    border-radius: 50%;\n    top: 62%;\n    left: 38%;\n    transform: rotate(10deg);\n  }\n  .chin::after {\n    position: absolute;\n    height: 15%;\n    width: 15%;\n    content: \"\";\n    border: 2px solid transparent;\n    border-bottom: 8px solid #d9241c;\n    border-radius: 50%;\n    top: 62%;\n    left: 50%;\n    transform: rotate(-10deg);\n  }\n  \n  .hole-1 {\n    position: absolute;\n    height: 8%;\n    width: 8%;\n    background: #d2c741;\n    border-radius: 50%;\n    top: 12%;\n  }\n  .hole-2 {\n    position: absolute;\n    height: 10%;\n    width: 10%;\n    background: #d2c741;\n    border-radius: 50%;\n    top: 5%;\n    right: 5%;\n  }\n  .hole-3 {\n    position: absolute;\n    height: 7%;\n    width: 7%;\n    background: #d2c741;\n    border-radius: 50%;\n    top: 38%;\n    right: 3%;\n  }\n  \n  .hole-4 {\n    position: absolute;\n    height: 8%;\n    width: 8%;\n    background: #d2c741;\n    border-radius: 50%;\n    top: 58%;\n    right: 10%;\n  }\n  .hole-5 {\n    position: absolute;\n    height: 6%;\n    width: 6%;\n    background: #d2c741;\n    border-radius: 50%;\n    top: 58%;\n    left: 10%;\n  }\n  .hole-6 {\n    position: absolute;\n    height: 8%;\n    width: 8%;\n    background: #d2c741;\n    border-radius: 50%;\n    top: 78%;\n    left: 24%;\n  }\n  .hole-7 {\n    position: absolute;\n    height: 3%;\n    width: 3%;\n    background: #d2c741;\n    border-radius: 50%;\n    top: 80%;\n    right: 25%;\n  }\n  \n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55230" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map