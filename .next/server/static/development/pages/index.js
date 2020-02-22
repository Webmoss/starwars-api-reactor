module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_sass_style_global_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/sass/style.global.sass */ "./public/sass/style.global.sass");
/* harmony import */ var _public_sass_style_global_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_sass_style_global_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/Header */ "./components/header/Header.js");
/* harmony import */ var _slider_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider/Slider */ "./components/slider/Slider.js");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/Footer */ "./components/footer/Footer.js");






const Layout = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "main-container"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/footer/Footer.js":
/*!*************************************!*\
  !*** ./components/footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.sass */ "./components/footer/styles.sass");
/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_sass__WEBPACK_IMPORTED_MODULE_1__);



const Footer = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "footer"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Do. Or do not. There is no try! - Yoda"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/footer/styles.sass":
/*!***************************************!*\
  !*** ./components/footer/styles.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/header/Header.js":
/*!*************************************!*\
  !*** ./components/header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.sass */ "./components/header/styles.sass");
/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_sass__WEBPACK_IMPORTED_MODULE_2__);




const Header = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "header"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "logo"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: {
    pathname: '/'
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  title: "Home"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: "/images/star-wars-logo.png",
  alt: "Star Wars Logo"
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "navigation"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: {
    pathname: '/'
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  title: "Home"
}, "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: {
    pathname: '/films',
    query: {
      id: undefined
    }
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  title: "Films Page"
}, "Films"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: {
    pathname: '/people',
    query: {
      id: undefined
    }
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  title: "People Page"
}, "People"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: {
    pathname: '/films',
    query: {
      id: undefined
    }
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  title: "Films Page"
}, "Films"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: {
    pathname: '/species',
    query: {
      id: undefined
    }
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  title: "Species Page"
}, "Species"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: {
    pathname: '/starships',
    query: {
      id: undefined
    }
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  title: "Starships Page"
}, "Starships"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: {
    pathname: '/vehicles',
    query: {
      id: undefined
    }
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  title: "Vehicles Page"
}, "Vehicles"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: {
    pathname: '/planets',
    query: {
      id: undefined
    }
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  title: "Planets Page"
}, "Planets"))))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/header/styles.sass":
/*!***************************************!*\
  !*** ./components/header/styles.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/slider/Slider.js":
/*!*************************************!*\
  !*** ./components/slider/Slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.sass */ "./components/slider/styles.sass");
/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_star_wars_banner_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/star-wars-banner.jpg */ "./public/images/star-wars-banner.jpg");




const Slider = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "slider"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This is Slider content"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
  jsx: "true"
}, `
      .slider {
        background: url('public/images/star-wars-banner.jpg') no-repeat;
        background-position: center;
        background-size: cover;
      }
    `));

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./components/slider/styles.sass":
/*!***************************************!*\
  !*** ./components/slider/styles.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./graphql/films.query.js":
/*!********************************!*\
  !*** ./graphql/films.query.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const FILMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query Films {
    films {
      id
      episodeId
      title
      director
      producers
      releaseDate
      openingCrawl
      characters {
        name
        gender
      }
      planets { 
        name
      }
      species{
        name
      }
      starships{
        name
      }
      vehicles{
        name
      }
    }
  }
`; // console.log("FILMS_QUERY", FILMS_QUERY);

/* harmony default export */ __webpack_exports__["default"] = (FILMS_QUERY);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphql_films_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/films.query */ "./graphql/films.query.js");
/* harmony import */ var _public_sass_style_global_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/sass/style.global.sass */ "./public/sass/style.global.sass");
/* harmony import */ var _public_sass_style_global_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_sass_style_global_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _public_images_twinkle_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/images/twinkle.gif */ "./public/images/twinkle.gif");








const styling = {
  backgroundImage: `url('${_public_images_twinkle_gif__WEBPACK_IMPORTED_MODULE_7__["default"]}')`,
  backgroundRepeat: "repeat",
  height: "100%"
};

const Index = () => {
  // Create a query hook
  const {
    data,
    loading,
    error
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_graphql_films_query__WEBPACK_IMPORTED_MODULE_4__["default"]);

  if (error) {
    if (typeof error === 'string') {
      return error;
    }

    if (error && error.message) {
      return error.message.replace(/GraphQL Error:/gi, '');
    } // Handle GraphQL Errors


    if (error && error.graphQLErrors && error.graphQLErrors.errors[0]) {
      return error.graphQLErrors.errors[0].message.replace(/GraphQL Error:/gi, '');
    } // Handle Request Errors


    if (error && error.networkError && error.networkError.statusCode !== 200) {
      switch (error.networkError.statusCode) {
        case 400:
          return 'Error 400 :: Not Found';

        case 500:
          return 'Error 500 : Server Error';

        case 403:
          return 'Error 403: Unauthorized';

        default:
          return `${error.networkError.statusCode} :: An error Occurred`;
      }
    }

    return "<p>Error:" + JSON.stringify(error) + "</p>";
  } // This can be handled better in UI


  if (loading) {
    return "<p>Loading...</p>";
  }

  console.log("Data:", data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Star Wars API Reactor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "main",
    style: styling
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Star Wars API Reactor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "films-intro"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, data.films.map(film => {
    let imgURL = `/images/${film.title.split(' ').join('_')}.png`;
    console.log("imgURL:", imgURL);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: `film__${film.episodeId}`,
      className: "film-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/films/[episode_id]",
      as: `/films/${film.episodeId}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      title: film.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: imgURL,
      alt: film.title,
      className: "film-img"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/films/[episode_id]",
      as: `/films/${film.episodeId}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, film.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "film-detail"
    }, "Director: ", film.director), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "film-detail"
    }, "Release Date: ", film.releaseDate), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./public/images/star-wars-banner.jpg":
/*!********************************************!*\
  !*** ./public/images/star-wars-banner.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d5be36de7a5513e6f8e2508ae0d16809.jpg");

/***/ }),

/***/ "./public/images/twinkle.gif":
/*!***********************************!*\
  !*** ./public/images/twinkle.gif ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/gif;base64,R0lGODlhMAHqAPcAAAAAAAgAUiEhISkAezExYzkApTk5OUJ7rUoAAEoA1kohOUqcrVJajFpaWmtra2ul93N7rZxjQqWlpaXO97XW/73//87O/9bW1ue9pf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh/lhDcmVhdGVkIGJ5IFpvZSBPbmxpbmUgZm9yIFpvZSBPbmxpbmUNCkNvcHlyaWdodCBoYWxwZXJpbiAxOTk4LCAxOTk5DQpBTEwgUklHSFRTIFJFU0VSVkVEACH5BAwJAAAA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1rgnWBEQACH+WENyZWF0ZWQgYnkgWm9lIE9ubGluZSBmb3IgWm9lIE9ubGluZQ0KQ29weXJpZ2h0IGhhbHBlcmluIDE5OTgsIDE5OTkNCkFMTCBSSUdIVFMgUkVTRVJWRUQAIfkEDAkAAAAsAAAAADAB6gCHAAAACABSISEhIVqMKQB7KXuMMTFjMTlrOQClOTk5QnutSgAASgDWSiE5SoTWSpytUlqMa2tra6X3c3uthKXOhK3enGNCpaWlpc73tdb/vf//zs7/3t7e572l////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CP8AAQgcSLCgwYMIEypc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Ji7fpyMRiCwN54E35Tush4FqhhUBAQAh/lhDcmVhdGVkIGJ5IFpvZSBPbmxpbmUgZm9yIFpvZSBPbmxpbmUNCkNvcHlyaWdodCBoYWxwZXJpbiAxOTk4LCAxOTk5DQpBTEwgUklHSFRTIFJFU0VSVkVEACH5BAwJAAAALAAAAAAwAeoAhwAAAAgAUiEhISkAezExYzE5azkApTk5OTlznEJ7rUoAAEoA1kohOUqcrVJajFJ7tWul93N7rYSlzoSt3pxjQqXO97XW/73//87O/97e3ue9pf//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////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6UhwYagvjKctE2iG7eg8w2g4HlgpQBYQACH+WENyZWF0ZWQgYnkgWm9lIE9ubGluZSBmb3IgWm9lIE9ubGluZQ0KQ29weXJpZ2h0IGhhbHBlcmluIDE5OTgsIDE5OTkNCkFMTCBSSUdIVFMgUkVTRVJWRUQAIfkEDAkAAAAsAAAAADAB6gCHAAAACABSISEhKQB7MTFjMTlrOQClOTk5OXOcQnutSgAASgDWSiE5SpytUlqMUnu1a6X3c3uthKXOhK3enGNCpc73tdb/vf//zs7/3t7e572l////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////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ZHiDk6QRIlUYaEhdwYZbN8GDwEZ5F/F2i6FiWHmDdIM4dIjYftr3G4SIPW11fccHb3jYdpvSgOJnd5HIdXuIbshyJ8U1iaUoNLWjicu2EdZHSyHoU0lmEqB4EcihbdXmI2cmOHljffcHZB3xauPkaRy4Qn24i8I4JxFob0Onb5vCEgxjfslCbwjogMqjiofTjEsyZgEBACH+WENyZWF0ZWQgYnkgWm9lIE9ubGluZSBmb3IgWm9lIE9ubGluZQ0KQ29weXJpZ2h0IGhhbHBlcmluIDE5OTgsIDE5OTkNCkFMTCBSSUdIVFMgUkVTRVJWRUQAIfkEDAkAAAAsAAAAADAB6gCHAAAACABSISEhIVqMKQB7KXuMMTFjMTlrOQClOTk5QnutSgAASgDWSiE5SoTWSpytUlqMa2tra6X3c3uthKXOhK3enGNCpaWlpc73tdb/vf//zs7/3t7e572l////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CP8AAQgcSLCgwYMIEypcyLChw4cDJ0CcaPAAxYsYM2rcyLEjAIseQ24EKbLkQ5ImUzZEqbKly5cwY8qcSbOmzZIsRS642TEnz59AFTYIOtAn0ZtGbQ49ehImAqYmFxzocGAn1KsLn75MihVAAwYbGCztypGrQ4lkXX4NOzZtTa0uzbq06jajXI5w69Zs21OvX7sl+f4dTDhu4cOIE9+EoLgxw7sJ6ToeOZmnZMIGNEKuXBItZ8CIH2CUSvXy580LGVP+DIB01cEGDEz498BAgouoHeYOKiCjZ4y7QYsMTlR0RtM2f1NUTjFAYuY2kfvNzFMw4gO9dbP2ut0h9Zt5b0L/hyjALHGE43mG7351rdjGARTcPov+sHvr7I+uP3xAgvOO0rm1X35M4SfTb7kFcAAEGEBwQADZDdSAZOkJtFuFMBlI4IYqCaDggg9k8E8GEyhwwAEJRCiXRK4FyCFn570YgIIMmvifZi9SFGOOMQVn1AET7DiQi4/xaCSB8d145JLdxYjhQuVFSJiQTFapEpVW+oUlUmkp+dCTP21pk5gIkcmklDpmWdaSZoYE5poYqcZUm2r6VqdBctL05p1Y0cnnn4BeteJEeQba0Z6GJloYon0OJ5xGjNaEZQSrKboVjiYVOtdBkJ13gaWHOqpnXRqqFMEF/1xAaVEiRQpqoAsQ/0CkSp++atJufiYWqwWy2rRqRWnaOhhLxC04UYULNECABf/wOiGnwqrkarQa7dproNNClGt3s8oUq3RAWrotj5uVSpO5wFJrYXUHoFvXt5c21O1gDbTL07gQKQsBAe4utpC1816lKVT68ltXsQ/VC4EGDvaLqUfJLtssv9LV63Ba+CrMsL3a4UYqAfteTBRJACdUcFvZ5nhyVyljZPFk8CKkccPqvlxTy8KWurK6PIt3HEM264VzzyqJnJCZZA4takdGEz0gUS1S+zTRMoP1HlDj+fjSwEDdB2NaU0PNc9hhstY0l6+ePTLVE4GEL9tHK/Q23HS3XSRTStfNU95w8v85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");

/***/ }),

/***/ "./public/sass/style.global.sass":
/*!***************************************!*\
  !*** ./public/sass/style.global.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/craigmoss/Apps/starwars-api-reactor/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map