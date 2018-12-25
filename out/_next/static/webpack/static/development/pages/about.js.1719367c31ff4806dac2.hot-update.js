webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Head_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Head.js */ "./components/Head.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _components_Animate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Animate.js */ "./components/Animate.js");
/* harmony import */ var _style_about_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/about.sass */ "./style/about.sass");
/* harmony import */ var _style_about_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_about_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_data_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/data.config.js */ "./config/data.config.js");
/* harmony import */ var _config_data_config_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_data_config_js__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\alexa\\Documents\\github\\1859\\pages\\about.js";







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Head_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "faq",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "FAQs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Animate_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    enter: function enter(e) {
      return {
        targets: e.childNodes,
        delay: function delay(el, i) {
          return 100 * i;
        },
        duration: 300,
        translateX: function translateX(el, i) {
          return [(i % 2 ? 1 : -1) * 30, 0];
        },
        opacity: [0, 1]
      };
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cards",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, _config_data_config_js__WEBPACK_IMPORTED_MODULE_6___default.a.faq.map(function (a, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: i,
      className: "card",
      style: {
        opacity: 0,
        transform: "translateX(" + (i % 2 ? 1 : -1) + "px)"
      },
      href: a.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, a.q), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, a.a));
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "long-desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Our History"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, _config_data_config_js__WEBPACK_IMPORTED_MODULE_6___default.a.historyPara))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "coaches",
    id: "coaches",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Coaches"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "The current leaders of the 1859 Robotics organization"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Animate_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    enter: function enter(e) {
      return {
        targets: e.childNodes,
        delay: function delay(el, i) {
          return 100 * i;
        },
        duration: 300,
        translateX: function translateX(el, i) {
          return [(i % 2 ? 1 : -1) * 30, 0];
        },
        opacity: [0, 1]
      };
    },
    scroll: true,
    scrollTarget: "#coaches",
    offset: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cards",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, _config_data_config_js__WEBPACK_IMPORTED_MODULE_6___default.a.coaches.map(function (coach, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card",
      style: {
        transform: "translateX(" + (i % 2 ? 30 : -30) + "px)"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, coach.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, coach.desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: coach.pic || "static/imgs/person.png",
      alt: coach.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }));
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "join",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Joining ", _config_data_config_js__WEBPACK_IMPORTED_MODULE_6___default.a.orgName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, _config_data_config_js__WEBPACK_IMPORTED_MODULE_6___default.a.joinPara))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "mentors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Mentors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Past students, past coaches, just really cool people all here. Our greatest thanks goes out to these men and women, the program would not be where it is today without them."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Animate_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    enter: function enter(e) {
      return {
        targets: e.childNodes,
        delay: function delay(el, i) {
          return 100 * i;
        },
        duration: 300,
        translateY: [-20, 0],
        opacity: [0, 1]
      };
    },
    scroll: true,
    scrollTarget: ".about .mentors",
    offset: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mentors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, _config_data_config_js__WEBPACK_IMPORTED_MODULE_6___default.a.mentors.map(function (mentor, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mentor",
      style: {
        transform: "scale(-20)",
        opacity: 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, mentor.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, mentor.desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: mentor.pic || "static/imgs/person.png",
      alt: mentor.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }));
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "vex",
    id: "vex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "VEX"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, _config_data_config_js__WEBPACK_IMPORTED_MODULE_6___default.a.aboutVEX), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Animate_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    enter: {
      delay: 0,
      duration: 300,
      translateY: [-30, 0],
      opacity: [0, 1]
    },
    scroll: true,
    scrollTarget: "#vex a",
    offset: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.vexrobotics.com/",
    style: {
      transform: "translateY(-30px)",
      opacity: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Learn More Here!")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.1719367c31ff4806dac2.hot-update.js.map