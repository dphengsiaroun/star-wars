/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/assets/stylesheets/responsive.scss":
/*!****************************************************!*\
  !*** ./app/src/assets/stylesheets/responsive.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./app/src/assets/stylesheets/responsive.scss?");

/***/ }),

/***/ "./app/src/assets/stylesheets/styles.scss":
/*!************************************************!*\
  !*** ./app/src/assets/stylesheets/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./app/src/assets/stylesheets/styles.scss?");

/***/ }),

/***/ "./app/src/index.js":
/*!**************************!*\
  !*** ./app/src/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./assets/stylesheets/styles.scss */ \"./app/src/assets/stylesheets/styles.scss\");\n__webpack_require__(/*! ./assets/stylesheets/responsive.scss */ \"./app/src/assets/stylesheets/responsive.scss\");\n\n(function ($) {\n    $(document).ready(function () {\n        var offset = $('nav.desktop').offset().top;\n        $(document).scroll(function (e) {\n            var scrollTop = $(document).scrollTop();\n            console.log('scrollTop', scrollTop);\n            if (scrollTop > offset) {\n                $('nav.desktop').addClass('sticky');\n            } else {\n                $('nav.desktop').removeClass('sticky');\n            }\n            if (scrollTop > 711 && scrollTop < 1300) {\n                //si on a défini de plus de 187 px du haut vers le bas\n                $('.content1-right img').addClass('fixRight'); //on ajoute la classe 'fixgauche' à <div id='gauche'>\n            } else {\n                $('.content1-right img').removeClass('fixRight');\n            }\n            parallax('.bg');\n            parallax('.banner');\n        });\n        $('.icon-nav-mobile').click(function (e) {\n            $('.mobile').css('display', 'inline-block');\n        });\n        $('.icon-close').click(function (e) {\n            $('.mobile').css('display', 'none');\n        });\n    });\n})(jQuery);\n\nfunction parallax(className) {\n    const scrolled = $(window).scrollTop();\n    $(className).css('background-position-y', -(scrolled * 0.2) + 'px');\n}\n\n//# sourceURL=webpack:///./app/src/index.js?");

/***/ })

/******/ });