/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_linkAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/linkAnimation */ \"./modules/linkAnimation.js\");\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_linkAnimation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate({ timing, draw, duration }) {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/linkAnimation.js":
/*!**********************************!*\
  !*** ./modules/linkAnimation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst linkAnim = () => {\r\n\r\n    const scrollAnim = document.querySelector('html')\r\n    console.dir(scrollAnim);\r\n    scrollAnim.style.scrollBehavior = 'smooth'\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkAnim);\n\n//# sourceURL=webpack:///./modules/linkAnimation.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n    const buttons = document.getElementById('callback-btn')\r\n    const modal = document.querySelector('.modal-callback')\r\n    const modalOverlay = document.querySelector('.modal-overlay')\r\n    const modalClose = document.querySelector('.modal-close')\r\n    const modalFormName = document.querySelector('#fio')\r\n    const modalFormPhone = document.querySelector('#tel')\r\n    const body = document.body\r\n\r\n    console.log(body);\r\n\r\n\r\n    modalFormName.addEventListener('blur', (e) => {\r\n        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '').replace(/\\ \\ +/gi, ' ').replace(/\\-\\-+/gi, '-').replace(/^\\s/g, '').replace(/\\s$/g, '').toLowerCase().replace(/([^а-я]|^)([а-я])(?=[а-я]{2})/g, function (_, g1, g2) {\r\n            return g1 + g2.toUpperCase();\r\n        })\r\n    })\r\n\r\n    modalFormPhone.addEventListener('blur', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\d()+]/gi, '').replace(/\\ \\ +/gi, ' ').replace(/\\-\\-+/gi, '-').replace(/^\\s/g, '').replace(/\\s$/g, '');\r\n    })\r\n\r\n    buttons.addEventListener('click', () => {\r\n        if (document.documentElement.clientWidth > 768) {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 100,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    modal.style.display = 'block'\r\n                    modal.style.opacity = '0'\r\n                    setTimeout(() => {\r\n                        modal.style.transition = 'all 1s ease'\r\n                        modal.style.opacity = '1'\r\n                    })\r\n                }\r\n            });\r\n        }\r\n        body.classList.add('disable-scroll')\r\n        modalOverlay.style.display = 'block'\r\n        modal.style.display = 'block'\r\n    })\r\n\r\n    modalClose.addEventListener('click', (e) => {\r\n        body.classList.remove('disable-scroll')\r\n        modal.style.display = 'none'\r\n        modalOverlay.style.display = 'none'\r\n        modal.style.opacity = '0'\r\n    })\r\n\r\n    modalOverlay.addEventListener('click', (e) => {\r\n        body.classList.remove('disable-scroll')\r\n        modal.style.display = 'none'\r\n        modalOverlay.style.display = 'none'\r\n        modal.style.opacity = '0'\r\n    })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;