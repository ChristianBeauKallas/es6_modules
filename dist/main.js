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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n    constructor (id, make, model, year){\n    this.id = id\n    this.make = make\n    this.model = model\n    this. year = year\n    }\n}\n// module.exports = Car;\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\n\nconsole.log(_wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n\nlet form = document.querySelector(\"#submitForm\");\nlet carMakeInput = document.querySelector(\"#makeInput\");\nlet carModelInput = document.querySelector(\"#modelInput\");\nlet carYearInput = document.querySelector(\"#yearInput\");\nlet carMakeP = document.querySelector(\"#car-make\")\nlet carModelP = document.querySelector(\"#car-model\");\nlet carYearP = document.querySelector(\"#car-year\");\nlet removeButton = document.querySelector(\".removeBtn\");\nlet wishlistUnordered = document.querySelector(\"#wishListUL\");\nlet wishList = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nfunction showCarDetails (car){\n    carMakeP.textContent = car.make;\n    carModelP.textContent = car.model;\n    carYearP.textContent = car.year;\n    \n    removeButton.disabled = false;\n    removeButton.setAttribute('data-carID', car.id);\n}\n\nfunction updateDOMList(){\n    wishlistUnordered.innerHTML = '';\n\n    wishList.list.forEach((car) => {\n        const carLi = document.createElement('li');\n        carLi.textContent = `${car.make} ${car.model}`;\n        carLi.addEventListener('click', () => {\n            showCarDetails(car);\n        });\n        wishlistUnordered.appendChild(carLi);\n    });\n}\n\nfunction addCar(event){\n    event.preventDefault();\n\n    const make = carMakeInput.value\n    const model = carModelInput.value\n    const year = carYearInput.value\n    \n    wishList.add(make, model,year);\n    updateDOMList();\n}\nform.addEventListener('submit', addCar);\n\n\nfunction removeCar(){\n    const carId = Number(removeButton.getAttribute(\"data-carId\"));\n    wishList.remove(carId);\n    updateDOMList();\n    carMakeP.textContent = \"\";\n    carModelP.textContent = \"\";\n    carYearP.textContent = \"\";\n    removeButton.disabled = true;\n}\nremoveButton.addEventListener('click', removeCar);\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WishList)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\n\nclass WishList {\n    constructor(){\n    this.list = [];\n    this.nextId = 0;\n}\n\n    add(make, model, year){\n        let car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year);\n        this.list.push(car);\n    }   \n    remove(carId){\n        this.list = this.list.filter(car => car.id !== carId);\n    }\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;