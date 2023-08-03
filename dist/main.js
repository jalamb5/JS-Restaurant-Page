/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clear);

function clear() {
  let content = document.getElementById("content");
 // content.remove();
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  };
};


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);

function renderContact() {
  const content = document.getElementById('content');

  const title = document.createElement('h1');
  title.textContent = "Contact Us";

  const email = document.createElement('p');
  email.textContent = "Email: oldtom@countrylife.email";
  
  const phone = document.createElement('p');
  phone.textContent = "Phone: 44 444 444 444";

  content.appendChild(title);
  content.appendChild(email);
  content.appendChild(phone);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);

function renderHome() {
  const body = document.querySelector('body');

  const content = document.createElement('div');
  content.id = 'content';

  const title = document.createElement('h1');
  title.textContent = "Old Tom's Country Life Pub";
  
  const image = new Image(250);
  image.src = "assets/IMG_2392.jpeg";

  const tagLine = document.createElement('p');
  tagLine.textContent = "At Old Tom's Country Life Pub, we have all the great ales, traditional English fare, and the world's best catnip";

  content.appendChild(title);
  content.appendChild(image);
  content.appendChild(tagLine);

  body.appendChild(content);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);

function renderMenu() {
  const content = document.getElementById('content');

  const title = document.createElement('h1');
  title.textContent = "Our Menu";

  const food = document.createElement('h2');
  food.textContent = "Food";

  const foodList = document.createElement('ul');
  const foodItems = ["Steak and Kidney Pie", "Fish and Chips", "Shepherd's Pie"];
  for (const element of foodItems) {
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(element));
    foodList.appendChild(entry);
  };
  
  const beer = document.createElement('h2');
  beer.textContent = "Beers";

  const beerList = document.createElement('ul');
  const beerItems = ["Old Tom's Classic Bitter", "Queen's Lager", "Country Ale"];
  for (const element of beerItems) {
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(element));
    beerList.appendChild(entry);
  };


  content.appendChild(title);
  content.appendChild(food);
  content.appendChild(foodList);
  content.appendChild(beer);
  content.appendChild(beerList);
}


/***/ }),

/***/ "./src/tabBar.js":
/*!***********************!*\
  !*** ./src/tabBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTabBar);

function renderTabBar() {
  const body = document.querySelector('body');
  let tabBar = document.createElement('div');

  const home = document.createElement('button');
  home.innerHTML = 'Home';
  home.id = 'home';
 
  const menu = document.createElement('button');
  menu.innerHTML = 'Menu';
  menu.id = 'menu';
  
  const contact = document.createElement('button');
  contact.innerHTML = 'Contact';
  contact.id = 'contact';

  tabBar.appendChild(home);
  tabBar.appendChild(menu);
  tabBar.appendChild(contact);

  body.appendChild(tabBar);
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _tabBar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabBar.js */ "./src/tabBar.js");
/* harmony import */ var _clear_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clear.js */ "./src/clear.js");






(0,_tabBar_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

let homeButton = document.getElementById('home');
homeButton.onclick = () => {
  (0,_clear_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

let menuButton = document.getElementById('menu');
menuButton.onclick = () => {
  (0,_clear_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

let contactButton = document.getElementById('contact');
contactButton.onclick = () => {
  (0,_clear_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLEtBQUssRUFBQzs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1JBLGlFQUFlLGFBQWEsRUFBQzs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSxpRUFBZSxVQUFVLEVBQUM7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZSxVQUFVLEVBQUM7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQSxpRUFBZSxZQUFZLEVBQUM7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDdkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ0E7QUFDTTtBQUNGO0FBQ1I7O0FBRS9CLHNEQUFZO0FBQ1osb0RBQVU7O0FBRVY7QUFDQTtBQUNBLEVBQUUscURBQUs7QUFDUCxFQUFFLG9EQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLEVBQUUscURBQUs7QUFDUCxFQUFFLG9EQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLEVBQUUscURBQUs7QUFDUCxFQUFFLHVEQUFhO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY2xlYXIuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYkJhci5qcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xlYXI7XG5cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAvLyBjb250ZW50LnJlbW92ZSgpO1xuICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IHJlbmRlckNvbnRhY3Q7XG5cbmZ1bmN0aW9uIHJlbmRlckNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZW1haWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOiBvbGR0b21AY291bnRyeWxpZmUuZW1haWxcIjtcbiAgXG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwaG9uZS50ZXh0Q29udGVudCA9IFwiUGhvbmU6IDQ0IDQ0NCA0NDQgNDQ0XCI7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHBob25lKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHJlbmRlckhvbWU7XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk9sZCBUb20ncyBDb3VudHJ5IExpZmUgUHViXCI7XG4gIFxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgyNTApO1xuICBpbWFnZS5zcmMgPSBcImFzc2V0cy9JTUdfMjM5Mi5qcGVnXCI7XG5cbiAgY29uc3QgdGFnTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGFnTGluZS50ZXh0Q29udGVudCA9IFwiQXQgT2xkIFRvbSdzIENvdW50cnkgTGlmZSBQdWIsIHdlIGhhdmUgYWxsIHRoZSBncmVhdCBhbGVzLCB0cmFkaXRpb25hbCBFbmdsaXNoIGZhcmUsIGFuZCB0aGUgd29ybGQncyBiZXN0IGNhdG5pcFwiO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0YWdMaW5lKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgcmVuZGVyTWVudTtcblxuZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcblxuICBjb25zdCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgZm9vZC50ZXh0Q29udGVudCA9IFwiRm9vZFwiO1xuXG4gIGNvbnN0IGZvb2RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgZm9vZEl0ZW1zID0gW1wiU3RlYWsgYW5kIEtpZG5leSBQaWVcIiwgXCJGaXNoIGFuZCBDaGlwc1wiLCBcIlNoZXBoZXJkJ3MgUGllXCJdO1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZm9vZEl0ZW1zKSB7XG4gICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50KSk7XG4gICAgZm9vZExpc3QuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICB9O1xuICBcbiAgY29uc3QgYmVlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGJlZXIudGV4dENvbnRlbnQgPSBcIkJlZXJzXCI7XG5cbiAgY29uc3QgYmVlckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBiZWVySXRlbXMgPSBbXCJPbGQgVG9tJ3MgQ2xhc3NpYyBCaXR0ZXJcIiwgXCJRdWVlbidzIExhZ2VyXCIsIFwiQ291bnRyeSBBbGVcIl07XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBiZWVySXRlbXMpIHtcbiAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGVudHJ5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsZW1lbnQpKTtcbiAgICBiZWVyTGlzdC5hcHBlbmRDaGlsZChlbnRyeSk7XG4gIH07XG5cblxuICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb29kKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb29kTGlzdCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmVlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmVlckxpc3QpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgcmVuZGVyVGFiQmFyO1xuXG5mdW5jdGlvbiByZW5kZXJUYWJCYXIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGxldCB0YWJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGhvbWUuaW5uZXJIVE1MID0gJ0hvbWUnO1xuICBob21lLmlkID0gJ2hvbWUnO1xuIFxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lbnUuaW5uZXJIVE1MID0gJ01lbnUnO1xuICBtZW51LmlkID0gJ21lbnUnO1xuICBcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0JztcbiAgY29udGFjdC5pZCA9ICdjb250YWN0JztcblxuICB0YWJCYXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gIHRhYkJhci5hcHBlbmRDaGlsZChtZW51KTtcbiAgdGFiQmFyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQodGFiQmFyKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJlbmRlckhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCByZW5kZXJNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0IHJlbmRlclRhYkJhciBmcm9tICcuL3RhYkJhci5qcyc7XG5pbXBvcnQgY2xlYXIgZnJvbSAnLi9jbGVhci5qcyc7XG5cbnJlbmRlclRhYkJhcigpO1xucmVuZGVySG9tZSgpO1xuXG5sZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG5ob21lQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGNsZWFyKCk7XG4gIHJlbmRlckhvbWUoKTtcbn07XG5cbmxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbm1lbnVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgY2xlYXIoKTtcbiAgcmVuZGVyTWVudSgpO1xufTtcblxubGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuY29udGFjdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICBjbGVhcigpO1xuICByZW5kZXJDb250YWN0KCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9