webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _components_Head_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Head.js */ "./components/Head.js");
/* harmony import */ var _components_Animate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Animate.js */ "./components/Animate.js");
/* harmony import */ var _components_Icon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Icon.js */ "./components/Icon.js");
/* harmony import */ var _config_data_config_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/data.config.js */ "./config/data.config.js");
/* harmony import */ var _config_data_config_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_data_config_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_index_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/index.sass */ "./style/index.sass");
/* harmony import */ var _style_index_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_index_sass__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\alexa\\Documents\\github\\1859\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var are = ["inventors", "dreamers", "engineers", "students", "leaders", _config_data_config_js__WEBPACK_IMPORTED_MODULE_8___default.a.name];

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  _createClass(Index, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {});

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function (_) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        classname: "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Head_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "bg",
        style: {
          backgroundImage: "url(\"static/imgs/hero-1.jpeg\")"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/logo-white.svg",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "We are\xA0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Animate_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        enter: function enter(e) {
          animejs__WEBPACK_IMPORTED_MODULE_2___default()({
            targets: e,
            maxWidth: ["0", "500px"],
            easing: 'easeInOutCubic',
            duration: 500
          });
          setTimeout(function (_) {
            return _this.setState({
              in: false
            });
          }, 3000);
        },
        exit: function exit(e) {
          animejs__WEBPACK_IMPORTED_MODULE_2___default()({
            targets: e,
            maxWidth: ["500px", "0"],
            easing: 'easeInOutCubic',
            duration: 500
          });
          setTimeout(function (_) {
            return _this.setState({
              in: true,
              are: are[(are.indexOf(_this.state.are) + 1) % are.length]
            });
          }, 500);
        },
        in: _this.state.in,
        timeout: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          maxWidth: 0
        },
        className: "are",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, _this.state.are)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Animate_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        enter: function enter(e) {
          return {
            targets: e.childNodes,
            delay: function delay(el, i) {
              return 100 * i;
            },
            duration: 500,
            translateY: [-30, 0],
            opacity: [0, 1]
          };
        },
        scroll: true,
        scrollTarget: ".about .cards",
        offset: 300,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cards",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "card",
        href: "/blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Icon_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        icon: "edit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Hear our latest musings on anything and everything VEX!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "card",
        href: "/teams",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Icon_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        icon: "people",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Teams"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Meet the teams that make up this organization!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "card",
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Icon_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        icon: "public",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "About Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Learn who this organization is!"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "brief",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Who we are"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, _config_data_config_js__WEBPACK_IMPORTED_MODULE_8___default.a.orgDesc))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "sponsors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Our Sponsors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "A special thanks to the genorous supporters that make this possible. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), " We are proudly sponsored by: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Animate_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        enter: function enter(e) {
          return {
            targets: e.childNodes,
            delay: function delay(el, i) {
              return 100 * i;
            },
            duration: 500,
            scale: [0.8, 1],
            opacity: [0, 1]
          };
        },
        scroll: true,
        scrollTarget: ".sponsors .logos",
        offset: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "logos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, _config_data_config_js__WEBPACK_IMPORTED_MODULE_8___default.a.sponsors.map(function (sponsor, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: sponsor.link,
          key: i,
          style: {
            opacity: 0,
            transform: "scale(0.8)"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: sponsor.logo,
          alt: sponsor.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "We'll get back as soon as we can, we are happy to talk!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cols",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Or find us at:"), _config_data_config_js__WEBPACK_IMPORTED_MODULE_8___default.a.externalContacts.map(function (contact, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: contact.link,
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, contact.name);
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }));
    });

    _this.state = {
      are: are[Math.floor(Math.random() * are.length)],
      in: true
    };
    return _this;
  }

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.7bb331755f6677e2db6c.hot-update.js.map