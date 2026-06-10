/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/images/espetada.jpg"
/*!****************************************!*\
  !*** ./src/assets/images/espetada.jpg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3dfe94ddfe6a6922b489.jpg";

/***/ },

/***/ "./src/assets/images/home-img-mid.jpg"
/*!********************************************!*\
  !*** ./src/assets/images/home-img-mid.jpg ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4b1a913e78e7eaedc5b2.jpg";

/***/ },

/***/ "./src/assets/images/milho-frito.jpg"
/*!*******************************************!*\
  !*** ./src/assets/images/milho-frito.jpg ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "11a24676290eba9c02e2.jpg";

/***/ },

/***/ "./src/assets/images/peixe-espada-a-madeirense.jpg"
/*!*********************************************************!*\
  !*** ./src/assets/images/peixe-espada-a-madeirense.jpg ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f3fa7e8cd416ada7067a.jpg";

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabs_home_tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/home-tab.js */ \"./src/tabs/home-tab.js\");\n/* harmony import */ var _tabs_menu_tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/menu-tab.js */ \"./src/tabs/menu-tab.js\");\n/* harmony import */ var _tabs_contact_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/contact-tab.js */ \"./src/tabs/contact-tab.js\");\n\n\n\n\nconsole.log(\"hi world\");\nconsole.log(\"bye\")\n\n;(0,_tabs_home_tab_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\nconst homeBtn = document.querySelector(\"#home\")\nconst menuBtn = document.querySelector(\"#menu\")\nconst aboutBtn = document.querySelector(\"#about\")\n\nconst addTabSwitchEvent = (btn, tabContent) => {\n    const contentDiv = document.querySelector(\"#content\")\n   btn.addEventListener(\"click\", ()=> {\n    contentDiv.textContent = \"\";\n\n    tabContent();\n    console.log(\"123\")\n  })\n}\n\n  addTabSwitchEvent(homeBtn, _tabs_home_tab_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  addTabSwitchEvent(menuBtn, _tabs_menu_tab_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n  addTabSwitchEvent(aboutBtn, _tabs_contact_tab_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE0QztBQUNDO0FBQ0k7O0FBRWpEO0FBQ0E7O0FBRUEsOERBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsNkJBQTZCLHlEQUFXO0FBQ3hDLDZCQUE2Qix5REFBVztBQUN4Qyw4QkFBOEIsNERBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzPzY4ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhvbWVDb250ZW50IGZyb20gXCIuL3RhYnMvaG9tZS10YWIuanNcIlxuaW1wb3J0IG1lbnVDb250ZW50IGZyb20gXCIuL3RhYnMvbWVudS10YWIuanNcIjtcbmltcG9ydCBhYm91dENvbnRlbnQgZnJvbSBcIi4vdGFicy9jb250YWN0LXRhYi5qc1wiO1xuXG5jb25zb2xlLmxvZyhcImhpIHdvcmxkXCIpO1xuY29uc29sZS5sb2coXCJieWVcIilcblxuaG9tZUNvbnRlbnQoKVxuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpXG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRcIilcblxuY29uc3QgYWRkVGFiU3dpdGNoRXZlbnQgPSAoYnRuLCB0YWJDb250ZW50KSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIHRhYkNvbnRlbnQoKTtcbiAgICBjb25zb2xlLmxvZyhcIjEyM1wiKVxuICB9KVxufVxuXG4gIGFkZFRhYlN3aXRjaEV2ZW50KGhvbWVCdG4sIGhvbWVDb250ZW50KVxuICBhZGRUYWJTd2l0Y2hFdmVudChtZW51QnRuLCBtZW51Q29udGVudClcbiAgYWRkVGFiU3dpdGNoRXZlbnQoYWJvdXRCdG4sIGFib3V0Q29udGVudClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/tabs/contact-tab.js"
/*!*********************************!*\
  !*** ./src/tabs/contact-tab.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mainContent = ()=> {\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Contacts\";\n\n  const description = document.createElement(\"p\")\n  description.textContent = \"Sorry, but currently we still don't have any contacts.\"\n\n  const contentDiv = document.querySelector(\"#content\")\n  contentDiv.append(title, description)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainContent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFicy9jb250YWN0LXRhYi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvdGFicy9jb250YWN0LXRhYi5qcz8yNmNkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1haW5Db250ZW50ID0gKCk9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdHNcIjtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJTb3JyeSwgYnV0IGN1cnJlbnRseSB3ZSBzdGlsbCBkb24ndCBoYXZlIGFueSBjb250YWN0cy5cIlxuXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcbiAgY29udGVudERpdi5hcHBlbmQodGl0bGUsIGRlc2NyaXB0aW9uKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWluQ29udGVudDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tabs/contact-tab.js\n\n}");

/***/ },

/***/ "./src/tabs/home-tab.js"
/*!******************************!*\
  !*** ./src/tabs/home-tab.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_home_img_mid_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/home-img-mid.jpg */ \"./src/assets/images/home-img-mid.jpg\");\n \n\nconst mainContent = () =>{\n  const contentDiv = document.querySelector(\"#content\")\n\n  const title = document.createElement(\"h1\")\n  title.textContent  = \"Madeira's Restaurant\"\n\n  const img = document.createElement(\"img\")\n  img.src = _assets_images_home_img_mid_jpg__WEBPACK_IMPORTED_MODULE_0__\n  img.alt = \"Madeira's Restaurant\"\n\n  const p = document.createElement(\"p\")\n  p.textContent = \"Tucked away from the bustle of the city, Madeira's Restaurant is a warm retreat where every detail invites you to slow down and stay a while. Soft amber lighting glows over mismatched wooden tables, worn smooth by years of good company, while the scent of slow-cooked sauces and fresh bread drifts from an open kitchen. Our menu changes with the seasons, drawing on local farms and time-honored recipes to bring honest, soul-warming food to your table. Whether you're settling in for a quiet dinner for two or gathering with old friends on a rainy evening, we believe every meal should feel like coming home.\"\n\n  contentDiv.append(title, img, p)\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainContent);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFicy9ob21lLXRhYi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1RDs7QUFFdkQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSw0REFBTztBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy90YWJzL2hvbWUtdGFiLmpzPzg2ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhvbWVJbWcgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1pbWctbWlkLmpwZ1wiIFxuXG5jb25zdCBtYWluQ29udGVudCA9ICgpID0+e1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgdGl0bGUudGV4dENvbnRlbnQgID0gXCJNYWRlaXJhJ3MgUmVzdGF1cmFudFwiXG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBpbWcuc3JjID0gaG9tZUltZ1xuICBpbWcuYWx0ID0gXCJNYWRlaXJhJ3MgUmVzdGF1cmFudFwiXG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gIHAudGV4dENvbnRlbnQgPSBcIlR1Y2tlZCBhd2F5IGZyb20gdGhlIGJ1c3RsZSBvZiB0aGUgY2l0eSwgTWFkZWlyYSdzIFJlc3RhdXJhbnQgaXMgYSB3YXJtIHJldHJlYXQgd2hlcmUgZXZlcnkgZGV0YWlsIGludml0ZXMgeW91IHRvIHNsb3cgZG93biBhbmQgc3RheSBhIHdoaWxlLiBTb2Z0IGFtYmVyIGxpZ2h0aW5nIGdsb3dzIG92ZXIgbWlzbWF0Y2hlZCB3b29kZW4gdGFibGVzLCB3b3JuIHNtb290aCBieSB5ZWFycyBvZiBnb29kIGNvbXBhbnksIHdoaWxlIHRoZSBzY2VudCBvZiBzbG93LWNvb2tlZCBzYXVjZXMgYW5kIGZyZXNoIGJyZWFkIGRyaWZ0cyBmcm9tIGFuIG9wZW4ga2l0Y2hlbi4gT3VyIG1lbnUgY2hhbmdlcyB3aXRoIHRoZSBzZWFzb25zLCBkcmF3aW5nIG9uIGxvY2FsIGZhcm1zIGFuZCB0aW1lLWhvbm9yZWQgcmVjaXBlcyB0byBicmluZyBob25lc3QsIHNvdWwtd2FybWluZyBmb29kIHRvIHlvdXIgdGFibGUuIFdoZXRoZXIgeW91J3JlIHNldHRsaW5nIGluIGZvciBhIHF1aWV0IGRpbm5lciBmb3IgdHdvIG9yIGdhdGhlcmluZyB3aXRoIG9sZCBmcmllbmRzIG9uIGEgcmFpbnkgZXZlbmluZywgd2UgYmVsaWV2ZSBldmVyeSBtZWFsIHNob3VsZCBmZWVsIGxpa2UgY29taW5nIGhvbWUuXCJcblxuICBjb250ZW50RGl2LmFwcGVuZCh0aXRsZSwgaW1nLCBwKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpbkNvbnRlbnQ7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tabs/home-tab.js\n\n}");

/***/ },

/***/ "./src/tabs/menu-tab.js"
/*!******************************!*\
  !*** ./src/tabs/menu-tab.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_espetada_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/espetada.jpg */ \"./src/assets/images/espetada.jpg\");\n/* harmony import */ var _assets_images_peixe_espada_a_madeirense_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/peixe-espada-a-madeirense.jpg */ \"./src/assets/images/peixe-espada-a-madeirense.jpg\");\n/* harmony import */ var _assets_images_milho_frito_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/milho-frito.jpg */ \"./src/assets/images/milho-frito.jpg\");\n\n\n\n\nconst mainContent = () =>{\n  const dishElement = (name, img) => {\n    const div = document.createElement(\"div\")\n\n    const h2 = document.createElement(\"h2\")\n    h2.textContent = name;\n\n    const dishImg = document.createElement(\"img\")\n    dishImg.src = img\n\n    div.append(h2,dishImg)\n    return div\n  }\n\n  const title = document.createElement(\"h1\")\n  title.textContent  = \"Menu\"\n\n  const dishGrid = document.createElement(\"div\")\n  dishGrid.classList.add(\"dish-grid\")\n  dishGrid.append(\n    dishElement(\"Espetada\", _assets_images_espetada_jpg__WEBPACK_IMPORTED_MODULE_0__),\n    dishElement(\"Peixe Espada Preto\", _assets_images_peixe_espada_a_madeirense_jpg__WEBPACK_IMPORTED_MODULE_1__),\n    dishElement(\"Milho Frito\", _assets_images_milho_frito_jpg__WEBPACK_IMPORTED_MODULE_2__)\n  )\n\n  const contentDiv = document.querySelector(\"#content\")\n\n  contentDiv.append(title, dishGrid)\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainContent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFicy9tZW51LXRhYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVEO0FBQ2M7QUFDZDs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQVc7QUFDdkMsc0NBQXNDLHlFQUFRO0FBQzlDLCtCQUErQiwyREFBUTtBQUN2Qzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvdGFicy9tZW51LXRhYi5qcz9kMDhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlc3BldGFkYUltZyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9lc3BldGFkYS5qcGdcIlxuaW1wb3J0IHBlaXhlSW1nIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3BlaXhlLWVzcGFkYS1hLW1hZGVpcmVuc2UuanBnXCJcbmltcG9ydCBtaWxob0ltZyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9taWxoby1mcml0by5qcGdcIlxuXG5jb25zdCBtYWluQ29udGVudCA9ICgpID0+e1xuICBjb25zdCBkaXNoRWxlbWVudCA9IChuYW1lLCBpbWcpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxuICAgIGgyLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IGRpc2hJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgZGlzaEltZy5zcmMgPSBpbWdcblxuICAgIGRpdi5hcHBlbmQoaDIsZGlzaEltZylcbiAgICByZXR1cm4gZGl2XG4gIH1cblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICB0aXRsZS50ZXh0Q29udGVudCAgPSBcIk1lbnVcIlxuXG4gIGNvbnN0IGRpc2hHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBkaXNoR3JpZC5jbGFzc0xpc3QuYWRkKFwiZGlzaC1ncmlkXCIpXG4gIGRpc2hHcmlkLmFwcGVuZChcbiAgICBkaXNoRWxlbWVudChcIkVzcGV0YWRhXCIsIGVzcGV0YWRhSW1nKSxcbiAgICBkaXNoRWxlbWVudChcIlBlaXhlIEVzcGFkYSBQcmV0b1wiLCBwZWl4ZUltZyksXG4gICAgZGlzaEVsZW1lbnQoXCJNaWxobyBGcml0b1wiLCBtaWxob0ltZylcbiAgKVxuXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcblxuICBjb250ZW50RGl2LmFwcGVuZCh0aXRsZSwgZGlzaEdyaWQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluQ29udGVudDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tabs/menu-tab.js\n\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;