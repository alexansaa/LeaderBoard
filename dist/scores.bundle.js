"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["scores"],{

/***/ "./src/Score.js":
/*!**********************!*\
  !*** ./src/Score.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Score)\n/* harmony export */ });\nclass Score {\r\n  static scores = [];\r\n\r\n  static defaultData = [\r\n    {\r\n      name: 'Alex',\r\n      score: 150,\r\n      index: 1,\r\n    },\r\n    {\r\n      name: 'Juan',\r\n      score: 120,\r\n      index: 2,\r\n    },\r\n  ];\r\n\r\n  constructor(name, score, index = null) {\r\n    let newIndex = 0;\r\n    if (index === null) {\r\n      if (Score.scores.length === 0) {\r\n        newIndex = 1;\r\n      } else {\r\n        newIndex = Score.scores[Score.scores.length - 1].index + 1;\r\n      }\r\n    } else {\r\n      newIndex = index;\r\n    }\r\n\r\n    this.name = name;\r\n    this.score = score;\r\n    this.index = newIndex;\r\n  }\r\n\r\n  static updateData() {\r\n    localStorage.setItem('scores', JSON.stringify(Score.scores));\r\n  }\r\n\r\n  static loadData() {\r\n    Score.scores = JSON.parse(localStorage.getItem('scores'));\r\n    if (Score.scores === null || Score.scores.length === 0) {\r\n      Score.scores = this.defaultData;\r\n    }\r\n    Score.updateData();\r\n  }\r\n}\n\n//# sourceURL=webpack://leaderboard/./src/Score.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Score.js"));
/******/ }
]);