webpackHotUpdate("static\\development\\pages\\outreach.js",{

/***/ "./pages/outreach.js":
/*!***************************!*\
  !*** ./pages/outreach.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Head_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Head.js */ "./components/Head.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _components_Animate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Animate.js */ "./components/Animate.js");
/* harmony import */ var _style_outreach_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/outreach.sass */ "./style/outreach.sass");
/* harmony import */ var _style_outreach_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_outreach_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_data_config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/data.config.js */ "./config/data.config.js");
/* harmony import */ var _config_data_config_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_data_config_js__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\alexa\\Documents\\github\\1859\\pages\\outreach.js";








/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "outreach",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Head_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Outreach",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), _config_data_config_js__WEBPACK_IMPORTED_MODULE_7___default.a.outreach.map(function (action, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Animate_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: i,
      enter: {
        delay: function delay(el, j) {
          return 300 * j;
        },
        duration: 300,
        translateX: function translateX(el, j) {
          return [i % 2 ? 100 : -100, 0];
        },
        opacity: [0, 1]
      },
      scroll: true,
      scrollTarget: "#outreach-" + i,
      timeout: 0,
      offset: 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "outreach-item",
      id: "outreach-" + i,
      style: {
        opacity: 0,
        transform: "translateX(" + (i % 2 ? 100 : -100) + "px)"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "txt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, action.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, action.desc)), action.img && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: action.img,
      alt: action.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/outreach")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=outreach.js.0befff4fbde38b8e1604.hot-update.js.map