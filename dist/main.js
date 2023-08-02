/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _tabBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabBar.js */ "./src/tabBar.js");



(0,_tabBar_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

let homeButton = document.getElementById('home');
homeButton.onclick = () => {
  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
};
// event listener for click -> renderMenu

// event listener for click -> renderContact

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLFVBQVUsRUFBQzs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBLGlFQUFlLFlBQVksRUFBQzs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDSTs7QUFFdkMsc0RBQVk7QUFDWixvREFBVTs7QUFFVjtBQUNBO0FBQ0EsRUFBRSxvREFBVTtBQUNaO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFiQmFyLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCByZW5kZXJIb21lO1xuXG5mdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5pZCA9ICdjb250ZW50JztcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJPbGQgVG9tJ3MgQ291bnRyeSBMaWZlIFB1YlwiO1xuICBcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoMjUwKTtcbiAgaW1hZ2Uuc3JjID0gXCJhc3NldHMvSU1HXzIzOTIuanBlZ1wiO1xuXG4gIGNvbnN0IHRhZ0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRhZ0xpbmUudGV4dENvbnRlbnQgPSBcIkF0IE9sZCBUb20ncyBDb3VudHJ5IExpZmUgUHViLCB3ZSBoYXZlIGFsbCB0aGUgZ3JlYXQgYWxlcywgdHJhZGl0aW9uYWwgRW5nbGlzaCBmYXJlLCBhbmQgdGhlIHdvcmxkJ3MgYmVzdCBjYXRuaXBcIjtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFnTGluZSk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHJlbmRlclRhYkJhcjtcblxuZnVuY3Rpb24gcmVuZGVyVGFiQmFyKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBsZXQgdGFiQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBob21lLmlubmVySFRNTCA9ICdIb21lJztcbiAgaG9tZS5pZCA9ICdob21lJztcbiBcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZW51LmlubmVySFRNTCA9ICdNZW51JztcbiAgbWVudS5pZCA9ICdtZW51JztcbiAgXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29udGFjdC5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG4gIGNvbnRhY3QuaWQgPSAnY29udGFjdCc7XG5cbiAgdGFiQmFyLmFwcGVuZENoaWxkKGhvbWUpO1xuICB0YWJCYXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gIHRhYkJhci5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICBib2R5LmFwcGVuZENoaWxkKHRhYkJhcik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCByZW5kZXJIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgcmVuZGVyVGFiQmFyIGZyb20gJy4vdGFiQmFyLmpzJztcblxucmVuZGVyVGFiQmFyKCk7XG5yZW5kZXJIb21lKCk7XG5cbmxldCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmhvbWVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgcmVuZGVySG9tZSgpO1xufTtcbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBjbGljayAtPiByZW5kZXJNZW51XG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBjbGljayAtPiByZW5kZXJDb250YWN0XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=