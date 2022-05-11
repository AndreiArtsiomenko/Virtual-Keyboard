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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/styles/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app */ \"./src/modules/app.js\");\n\r\n\r\n\r\nconst app = new _modules_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\nwindow.onload = () => {\r\n  app.build();\r\n};\r\n\r\n//alert('Уважаемый проверяющий, большая просьба, проверить пожалуйста мою работу завтра или оставь свой discord для связи. Заранее благодарю.')\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _createElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements.js */ \"./src/modules/createElements.js\");\n/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.js */ \"./src/modules/keyboard.js\");\n\r\n\r\n\r\nclass App {\r\n  constructor() {\r\n    this.create = new _createElements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.lng = 'EN';\r\n    this.register = 'down'\r\n  }\r\n\r\n  build() {\r\n    const header = document.body.insertAdjacentElement('afterbegin', this.create.createTag('div', 'header'));\r\n    const containerHeader = header.insertAdjacentElement('afterbegin', this.create.createTag('div', 'container'));\r\n    containerHeader.insertAdjacentElement('afterbegin', this.create.createTag('h1', 'header__title', 'RSS Виртуальная клавиатура'));\r\n    const main = document.body.insertAdjacentElement('beforeend', this.create.createTag('div', 'main'));\r\n    const containerMain = main.insertAdjacentElement('afterbegin', this.create.createTag('div', 'container'));\r\n    const mainWrapper = containerMain.insertAdjacentElement('beforeend', this.create.createTag('div', 'main__wrapper'));\r\n    mainWrapper.insertAdjacentElement('afterbegin', this.create.createTag('textarea', 'main__textarea'));\r\n    const keyboard = mainWrapper.insertAdjacentElement('beforeend', this.create.createTag('div', 'main__keyboard keyboard-body'));\r\n    containerMain.insertAdjacentElement('beforeend', this.create.createTag('p', 'main__text', 'Клавиатура создана в операционной системе Windows'));\r\n    containerMain.insertAdjacentElement('beforeend', this.create.createTag('p', 'main__text', 'Для переключения языка комбинация: левыe ctrl + alt'));\r\n\r\n    const row1 = keyboard.insertAdjacentElement('afterbegin', this.create.createTag('div', 'keyboard-body__row'));\r\n    Object.keys(_keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow1).forEach((element) => {\r\n      let content;\r\n      if (_keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow1[element]['name']) {\r\n        content = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow1[element]['name'];\r\n        row1.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key func', `${element}`, `${content}`))\r\n      } else {\r\n        content = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow1[element][this.lng][this.register];\r\n        row1.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key', `${element}`, `${content}`))\r\n      }\r\n    });\r\n\r\n    const row2 = keyboard.insertAdjacentElement('beforeend', this.create.createTag('div', 'keyboard-body__row'));\r\n    Object.keys(_keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow2).forEach((element) => {\r\n      let content;\r\n      if (_keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow2[element]['name']) {\r\n        content = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow2[element]['name'];\r\n        row2.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key func', `${element}`, `${content}`))\r\n      } else {\r\n        content = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow2[element][this.lng][this.register];\r\n        row2.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key', `${element}`, `${content}`))\r\n      }\r\n    });\r\n\r\n    const row3 = keyboard.insertAdjacentElement('beforeend', this.create.createTag('div', 'keyboard-body__row'));\r\n    Object.keys(_keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow3).forEach((element) => {\r\n      let content;\r\n      if (_keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow3[element]['name']) {\r\n        content = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow3[element]['name'];\r\n        row3.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key func', `${element}`, `${content}`))\r\n      } else {\r\n        content = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow3[element][this.lng][this.register];\r\n        row3.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key', `${element}`, `${content}`))\r\n      }\r\n    });\r\n\r\n    const row4 = keyboard.insertAdjacentElement('beforeend', this.create.createTag('div', 'keyboard-body__row'));\r\n    Object.keys(_keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow4).forEach((element) => {\r\n      let content;\r\n      if (_keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow4[element]['name']) {\r\n        content = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow4[element]['name'];\r\n        row4.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key func', `${element}`, `${content}`))\r\n      } else {\r\n        content = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow4[element][this.lng][this.register];\r\n        row4.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key', `${element}`, `${content}`))\r\n      }\r\n    });\r\n\r\n    const row5 = keyboard.insertAdjacentElement('beforeend', this.create.createTag('div', 'keyboard-body__row'));\r\n    Object.keys(_keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow5).forEach((element) => {\r\n      let content;\r\n      if (_keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow5[element]['name']) {\r\n        content = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow5[element]['name'];\r\n        row5.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key func', `${element}`, `${content}`))\r\n      } else {\r\n        content = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboardRow5[element][this.lng][this.register];\r\n        row5.insertAdjacentElement('beforeend', this.create.createKey('button', 'btn-key', `${element}`, `${content}`))\r\n      }\r\n    });\r\n\r\n  }\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/createElements.js":
/*!***************************************!*\
  !*** ./src/modules/createElements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CreateElements {\r\n  constructor() {\r\n    this.createTag = (nameTag, nameClass, content) => {\r\n      const tag = document.createElement(nameTag);\r\n      tag.className = nameClass;\r\n      if (content) {\r\n        tag.innerHTML = content;\r\n      }\r\n\r\n      return tag;\r\n    }\r\n\r\n    this.createKey = (nameTag, nameClass, nameId, content) => {\r\n      const key = document.createElement(nameTag);\r\n      key.className = nameClass;\r\n      key.id = nameId;\r\n      key.innerHTML = content;\r\n\r\n      return key;\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateElements);\n\n//# sourceURL=webpack://virtual-keyboard/./src/modules/createElements.js?");

/***/ }),

/***/ "./src/modules/keyboard.js":
/*!*********************************!*\
  !*** ./src/modules/keyboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyboardRow1\": () => (/* binding */ keyboardRow1),\n/* harmony export */   \"keyboardRow2\": () => (/* binding */ keyboardRow2),\n/* harmony export */   \"keyboardRow3\": () => (/* binding */ keyboardRow3),\n/* harmony export */   \"keyboardRow4\": () => (/* binding */ keyboardRow4),\n/* harmony export */   \"keyboardRow5\": () => (/* binding */ keyboardRow5)\n/* harmony export */ });\n\r\n\r\nconst keyboardRow1 = {\r\n  Backquote: {\r\n    EN: {\r\n      up: '`',\r\n      down: '~',\r\n    },\r\n    RU: {\r\n      up: 'Ё',\r\n      down: 'ё',\r\n    },\r\n  },\r\n  Digit1: {\r\n    EN: {\r\n      up: '!',\r\n      down: '1',\r\n    },\r\n    RU: {\r\n      up: '!',\r\n      down: '1',\r\n    },\r\n  },\r\n  Digit2: {\r\n    EN: {\r\n      up: '@',\r\n      down: '2',\r\n    },\r\n    RU: {\r\n      up: '\"',\r\n      down: '2',\r\n    },\r\n  },\r\n  Digit3: {\r\n    EN: {\r\n      up: '#',\r\n      down: '3',\r\n    },\r\n    RU: {\r\n      up: '№',\r\n      down: '3',\r\n    },\r\n  },\r\n  Digit4: {\r\n    EN: {\r\n      up: '$',\r\n      down: '4',\r\n    },\r\n    RU: {\r\n      up: ';',\r\n      down: '4',\r\n    },\r\n  },\r\n  Digit5: {\r\n    EN: {\r\n      up: '%',\r\n      down: '5',\r\n    },\r\n    RU: {\r\n      up: '%',\r\n      down: '5',\r\n    },\r\n  },\r\n  Digit6: {\r\n    EN: {\r\n      up: '^',\r\n      down: '6',\r\n    },\r\n    RU: {\r\n      up: ':',\r\n      down: '6',\r\n    },\r\n  },\r\n  Digit7: {\r\n    EN: {\r\n      up: '&',\r\n      down: '7',\r\n    },\r\n    RU: {\r\n      up: '?',\r\n      down: '7',\r\n    },\r\n  },\r\n  Digit8: {\r\n    EN: {\r\n      up: '*',\r\n      down: '8',\r\n    },\r\n    RU: {\r\n      up: '*',\r\n      down: '8',\r\n    },\r\n  },\r\n  Digit9: {\r\n    EN: {\r\n      up: '(',\r\n      down: '9',\r\n    },\r\n    RU: {\r\n      up: '(',\r\n      down: '9',\r\n    },\r\n  },\r\n  Digit0: {\r\n    EN: {\r\n      up: ')',\r\n      down: '0',\r\n    },\r\n    RU: {\r\n      up: ')',\r\n      down: '0',\r\n    },\r\n  },\r\n  Minus: {\r\n    EN: {\r\n      up: '_',\r\n      down: '-',\r\n    },\r\n    RU: {\r\n      up: '_',\r\n      down: '-',\r\n    },\r\n  },\r\n  Equal: {\r\n    EN: {\r\n      up: '+',\r\n      down: '=',\r\n    },\r\n    RU: {\r\n      up: '+',\r\n      down: '=',\r\n    },\r\n  },\r\n  Backspace: {\r\n    name: '&larr;',\r\n  }\r\n};\r\n\r\nconst keyboardRow2 = {\r\n  Tab: {\r\n    name: 'Tab',\r\n  },\r\n  KeyQ: {\r\n    EN: {\r\n      up: 'Q',\r\n      down: 'q',\r\n    },\r\n    RU: {\r\n      up: 'Й',\r\n      down: 'й',\r\n    },\r\n  },\r\n  KeyW: {\r\n    EN: {\r\n      up: 'W',\r\n      down: 'w',\r\n    },\r\n    RU: {\r\n      up: 'Ц',\r\n      down: 'ц',\r\n    },\r\n  },\r\n  KeyE: {\r\n    EN: {\r\n      up: 'E',\r\n      down: 'e',\r\n    },\r\n    RU: {\r\n      up: 'У',\r\n      down: 'у',\r\n    },\r\n  },\r\n  KeyR: {\r\n    EN: {\r\n      up: 'R',\r\n      down: 'r',\r\n    },\r\n    RU: {\r\n      up: 'К',\r\n      down: 'к',\r\n    },\r\n  },\r\n  KeyT: {\r\n    EN: {\r\n      up: 'T',\r\n      down: 't',\r\n    },\r\n    RU: {\r\n      up: 'Е',\r\n      down: 'е',\r\n    },\r\n  },\r\n  KeyY: {\r\n    EN: {\r\n      up: 'Y',\r\n      down: 'y',\r\n    },\r\n    RU: {\r\n      up: 'Н',\r\n      down: 'н',\r\n    },\r\n  },\r\n  KeyU: {\r\n    EN: {\r\n      up: 'U',\r\n      down: 'u',\r\n    },\r\n    RU: {\r\n      up: 'Г',\r\n      down: 'г',\r\n    },\r\n  },\r\n  KeyI: {\r\n    EN: {\r\n      up: 'I',\r\n      down: 'i',\r\n    },\r\n    RU: {\r\n      up: 'Ш',\r\n      down: 'ш',\r\n    },\r\n  },\r\n  KeyO: {\r\n    EN: {\r\n      up: 'O',\r\n      down: 'o',\r\n    },\r\n    RU: {\r\n      up: 'Щ',\r\n      down: 'щ',\r\n    },\r\n  },\r\n  KeyP: {\r\n    EN: {\r\n      up: 'P',\r\n      down: 'p',\r\n    },\r\n    RU: {\r\n      up: 'З',\r\n      down: 'з',\r\n    },\r\n  },\r\n  BracketLeft: {\r\n    EN: {\r\n      up: '{',\r\n      down: '[',\r\n    },\r\n    RU: {\r\n      up: 'Х',\r\n      down: 'х',\r\n    },\r\n  },\r\n  BracketRight: {\r\n    EN: {\r\n      up: '}',\r\n      down: ']',\r\n    },\r\n    RU: {\r\n      up: 'Ъ',\r\n      down: 'ъ',\r\n    },\r\n  },\r\n  Backslash: {\r\n    EN: {\r\n      up: '|',\r\n      down: '\\\\'\r\n    },\r\n    RU: {\r\n      up: '/',\r\n      down: '\\\\',\r\n    },\r\n  },\r\n};\r\n\r\nconst keyboardRow3 = {\r\n  CapsLock: {\r\n    name: 'CapsLock',\r\n  },\r\n  KeyA: {\r\n    EN: {\r\n      up: 'A',\r\n      down: 'a'\r\n    },\r\n    RU: {\r\n      up: 'Ф',\r\n      down: 'ф',\r\n    },\r\n  },\r\n  KeyS: {\r\n    EN: {\r\n      up: 'S',\r\n      down: 's'\r\n    },\r\n    RU: {\r\n      up: 'Ы',\r\n      down: 'ы',\r\n    },\r\n  },\r\n  KeyD: {\r\n    EN: {\r\n      up: 'D',\r\n      down: 'd'\r\n    },\r\n    RU: {\r\n      up: 'В',\r\n      down: 'в',\r\n    },\r\n  },\r\n  KeyF: {\r\n    EN: {\r\n      up: 'F',\r\n      down: 'f'\r\n    },\r\n    RU: {\r\n      up: 'А',\r\n      down: 'а',\r\n    },\r\n  },\r\n  KeyG: {\r\n    EN: {\r\n      up: 'G',\r\n      down: 'g'\r\n    },\r\n    RU: {\r\n      up: 'П',\r\n      down: 'п',\r\n    },\r\n  },\r\n  KeyH: {\r\n    EN: {\r\n      up: 'H',\r\n      down: 'h'\r\n    },\r\n    RU: {\r\n      up: 'Р',\r\n      down: 'р',\r\n    },\r\n  },\r\n  KeyJ: {\r\n    EN: {\r\n      up: 'J',\r\n      down: 'j'\r\n    },\r\n    RU: {\r\n      up: 'О',\r\n      down: 'о',\r\n    },\r\n  },\r\n  KeyK: {\r\n    EN: {\r\n      up: 'K',\r\n      down: 'k'\r\n    },\r\n    RU: {\r\n      up: 'Л',\r\n      down: 'л',\r\n    },\r\n  },\r\n  KeyL: {\r\n    EN: {\r\n      up: 'L',\r\n      down: 'l'\r\n    },\r\n    RU: {\r\n      up: 'Д',\r\n      down: 'д',\r\n    },\r\n  },\r\n  Semicolon: {\r\n    EN: {\r\n      up: ':',\r\n      down: ';'\r\n    },\r\n    RU: {\r\n      up: 'Ж',\r\n      down: 'ж',\r\n    },\r\n  },\r\n  Quote: {\r\n    EN: {\r\n      up: '\"',\r\n      down: '\\''\r\n    },\r\n    RU: {\r\n      up: 'Э',\r\n      down: 'э',\r\n    },\r\n  },\r\n  Enter: {\r\n    name: 'Enter',\r\n  },\r\n};\r\n\r\nconst keyboardRow4 = {\r\n  ShiftLeft: {\r\n    name: 'ShiftLeft',\r\n  },\r\n  KeyZ: {\r\n    EN: {\r\n      up: 'Z',\r\n      down: 'z'\r\n    },\r\n    RU: {\r\n      up: 'Я',\r\n      down: 'я',\r\n    },\r\n  },\r\n  KeyX: {\r\n    EN: {\r\n      up: 'X',\r\n      down: 'x'\r\n    },\r\n    RU: {\r\n      up: 'Ч',\r\n      down: 'ч',\r\n    },\r\n  },\r\n  KeyC: {\r\n    EN: {\r\n      up: 'C',\r\n      down: 'c'\r\n    },\r\n    RU: {\r\n      up: 'С',\r\n      down: 'с',\r\n    },\r\n  },\r\n  KeyV: {\r\n    EN: {\r\n      up: 'V',\r\n      down: 'v'\r\n    },\r\n    RU: {\r\n      up: 'М',\r\n      down: 'м',\r\n    },\r\n  },\r\n  KeyB: {\r\n    EN: {\r\n      up: 'B',\r\n      down: 'b'\r\n    },\r\n    RU: {\r\n      up: 'И',\r\n      down: 'и',\r\n    },\r\n  },\r\n  KeyN: {\r\n    EN: {\r\n      up: 'N',\r\n      down: 'n'\r\n    },\r\n    RU: {\r\n      up: 'Т',\r\n      down: 'т',\r\n    },\r\n  },\r\n  KeyM: {\r\n    EN: {\r\n      up: 'M',\r\n      down: 'm'\r\n    },\r\n    RU: {\r\n      up: 'Ь',\r\n      down: 'ь',\r\n    },\r\n  },\r\n  Comma: {\r\n    EN: {\r\n      up: '<',\r\n      down: ','\r\n    },\r\n    RU: {\r\n      up: 'Б',\r\n      down: 'б',\r\n    },\r\n  },\r\n  Period: {\r\n    EN: {\r\n      up: '>',\r\n      down: '.'\r\n    },\r\n    RU: {\r\n      up: 'Ю',\r\n      down: 'ю',\r\n    },\r\n  },\r\n  Slash: {\r\n    EN: {\r\n      up: '?',\r\n      down: '/'\r\n    },\r\n    RU: {\r\n      up: ',',\r\n      down: '.',\r\n    },\r\n  },\r\n  ShiftRight: {\r\n    name: 'ShiftRight',\r\n  },\r\n  ArrowUp: {\r\n    name: '&and;',\r\n  },\r\n  Delete: {\r\n    name: 'Del',\r\n  },\r\n\r\n};\r\n\r\nconst keyboardRow5 = {\r\n  ControlLeft: {\r\n    name: 'Ctrl',\r\n  },\r\n  AltLeft: {\r\n    name: 'Alt',\r\n  },\r\n  Space: {\r\n    name: 'Space',\r\n  },\r\n  AltRight: {\r\n    name: 'Alt',\r\n  },\r\n  ControlRight: {\r\n    name: 'Ctrl',\r\n  },\r\n  ArrowLeft: {\r\n    name: '<',\r\n  },\r\n  ArrowDown: {\r\n    name: '&or;',\r\n  },\r\n  ArrowRight: {\r\n    name: '>',\r\n  },\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/modules/keyboard.js?");

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