webpackJsonp([0],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(152)
/* template */
var __vue_template__ = __webpack_require__(156)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/mobile/views/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e70649f", Component.options)
  } else {
    hotAPI.reload("data-v-5e70649f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_x_tabbar__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_x_tabbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_x_tabbar__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'login',
  components: { XTabbar: __WEBPACK_IMPORTED_MODULE_0__components_x_tabbar___default.a },
  data: function data() {
    return {};
  },
  methods: {
    showDialog: function showDialog() {
      this.$createDialog({
        type: 'alert',
        title: 'Alert',
        content: 'dialog content'
      }).show();
    }
  }
});

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(154)
/* template */
var __vue_template__ = __webpack_require__(155)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/mobile/components/x-tabbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67b2c143", Component.options)
  } else {
    hotAPI.reload("data-v-67b2c143", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(18);
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'x-tabbar',
  props: {
    communityIndex: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      selectedLabelDefault: 0,
      name: '',
      showIndex: -1,
      isEdit: true,
      hasStore: true,
      tabs: [{
        label: '首页',
        name: 'indexView',
        icon: '&#xe6c5;',
        query: {}
      }, {
        label: '分类',
        icon: '&#xe778;',
        name: 'catView',
        query: {}
      }, {
        label: '购物车',
        icon: '&#xe678;',
        name: 'cartView',
        query: {}
      }, {
        label: '我的',
        icon: '&#xe600;',
        name: 'userView',
        query: {}
      }]
    };
  },
  created: function created() {
    this.init();
  },

  methods: {
    clickHandler: function clickHandler(index) {
      var _tabs$index = this.tabs[index],
          name = _tabs$index.name,
          query = _tabs$index.query;

      this.$router.push({ name: name, query: query });
      this.selectedLabelDefault = index;
    },
    changeHandler: function changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
    },

    init: function init() {
      var _this = this;

      var vm = this;
      this.name = this.$route.name;
      this.tabs.forEach(function (item, index) {
        if (item.name == _this.name) {
          vm.selectedLabelDefault = index;
        }
      });
    }
  }
});

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cube-tab-bar",
    {
      staticClass: "width-100 bg-white font-normal border-1px-t",
      on: { click: _vm.clickHandler, change: _vm.changeHandler },
      model: {
        value: _vm.selectedLabelDefault,
        callback: function($$v) {
          _vm.selectedLabelDefault = $$v
        },
        expression: "selectedLabelDefault"
      }
    },
    _vm._l(_vm.tabs, function(item, index) {
      return _c(
        "cube-tab",
        {
          key: item.name,
          staticClass: "flex-col-center",
          attrs: { label: index }
        },
        [
          _c("span", {
            staticClass: "iconfont padding-b-10 font-2x",
            attrs: { slot: "icon" },
            domProps: { innerHTML: _vm._s(item.icon) },
            slot: "icon"
          }),
          _vm._v(" "),
          _c("span", { staticClass: "font-mini" }, [_vm._v(_vm._s(item.label))])
        ]
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-67b2c143", module.exports)
  }
}

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "login flex-col-space-between" },
    [
      _c("cube-button", { on: { click: _vm.showDialog } }, [
        _vm._v("show dialog")
      ]),
      _vm._v(" "),
      _c("XTabbar")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e70649f", module.exports)
  }
}

/***/ })

});