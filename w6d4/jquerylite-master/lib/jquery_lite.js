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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = function(selector) {
  let arr = [];
  // let createEl = selector.includes("<");

  if ((typeof selector === "string")) {
    let elementList = document.querySelectorAll(selector);
    arr = Array.from(elementList);
  }
  if (selector instanceof HTMLElement) {
    arr.push(selector);
  }
  // if ((typeof selector === "string") && (createEl)) {
  //   let name = selector.slice(1, selector.length - 1);
  //   arr.push(document.createElement(name));
  // }
  return new DOMNodeCollection(arr);
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }

  html(string) {
    if (string) {
      this.hmtlElements.forEach(el => {
        el.innerHTML = string;
      });
    } else {
      return this.htmlElements[0].innerHTML;
    }
  }

  empty() {
    this.htmlElements.forEach(el => {
      el.innerHTML = "";
    });
  }

  append(object) {
    if (typeof object === "string") {
      this.htmlElements.forEach(el => {
        el.append(object);
      });
    } else if (object instanceof HTMLElement) {
      this.htmlElements.forEach(el => {
        el.append(object);
        // was appending outerHTML but caused problems
      });
    } else if (object instanceof DOMNodeCollection) {
      this.htmlElements.forEach(el => {
        object.htmlElements.forEach(objEl => {
          console.log(el);
          console.log(objEl);
          el.append(objEl);
        });
      });
    }
  }


  attr(attributeName, value = null) {
    if (value) {
      this.htmlElements.forEach(el => {
        el.setAttribute(attributeName, value);
      });
    } else {
      let attrs = [];
      this.htmlElements.forEach(el => {
        attrs.push(el.getAttribute(attributeName));
      });
      return attrs;
    }
  }

  addClass() {

  }

  removeClass() {

  }





  find() {

  }

  remove() {

  }

  children() {

  }

  parent() {

  }
}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);