"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/keys/paypal";
exports.ids = ["pages/api/keys/paypal"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "./pages/api/keys/paypal.js":
/*!**********************************!*\
  !*** ./pages/api/keys/paypal.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/auth */ \"./utils/auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nhandler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__.isAuth);\nhandler.get(async (req, res)=>{\n    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkva2V5cy9wYXlwYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZCO0FBQ2U7QUFFNUMsS0FBSyxDQUFDRSxPQUFPLEdBQUdGLHdEQUFFO0FBQ2xCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsK0NBQU07QUFDbEJDLE9BQU8sQ0FBQ0UsR0FBRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQy9CQSxHQUFHLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQixJQUFJLENBQUk7QUFDL0MsQ0FBQztBQUVELGlFQUFlUixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZXItc2hlLXkvLi9wYWdlcy9hcGkva2V5cy9wYXlwYWwuanM/M2U4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuaW1wb3J0IHsgaXNBdXRoIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcclxuaGFuZGxlci51c2UoaXNBdXRoKTtcclxuaGFuZGxlci5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLnNlbmQocHJvY2Vzcy5lbnYuUEFZUEFMX0NMSUVOVF9JRCB8fCAnc2InKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsibmMiLCJpc0F1dGgiLCJoYW5kbGVyIiwidXNlIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsInByb2Nlc3MiLCJlbnYiLCJQQVlQQUxfQ0xJRU5UX0lEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/keys/paypal.js\n");

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signToken\": () => (/* binding */ signToken),\n/* harmony export */   \"isAuth\": () => (/* binding */ isAuth),\n/* harmony export */   \"isAdmin\": () => (/* binding */ isAdmin)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst signToken = (user)=>{\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n        _id: user._id,\n        name: user.name,\n        email: user.email,\n        isAdmin: user.isAdmin\n    }, process.env.JWT_SECRET, {\n        expiresIn: '30d'\n    });\n};\nconst isAuth = async (req, res, next)=>{\n    const { authorization  } = req.headers;\n    if (authorization) {\n        // Bearer xxx => xxx\n        const token = authorization.slice(7, authorization.length);\n        jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET, (err, decode)=>{\n            if (err) {\n                res.status(401).send({\n                    message: 'Token is not valid'\n                });\n            } else {\n                req.user = decode;\n                next();\n            }\n        });\n    } else {\n        res.status(401).send({\n            message: 'Token is not suppiled'\n        });\n    }\n};\nconst isAdmin = async (req, res, next)=>{\n    if (req.user.isAdmin) {\n        next();\n    } else {\n        res.status(401).send({\n            message: 'User is not admin'\n        });\n    }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThCO0FBQzlCLEtBQUssQ0FBQ0MsU0FBUyxJQUFJQyxJQUFJLEdBQUssQ0FBQztJQUMzQixNQUFNLENBQUNGLHdEQUFRLENBQ2IsQ0FBQztRQUNDSSxHQUFHLEVBQUVGLElBQUksQ0FBQ0UsR0FBRztRQUNiQyxJQUFJLEVBQUVILElBQUksQ0FBQ0csSUFBSTtRQUNmQyxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBSztRQUNqQkMsT0FBTyxFQUFFTCxJQUFJLENBQUNLLE9BQU87SUFDdkIsQ0FBQyxFQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxFQUN0QixDQUFDO1FBQ0NDLFNBQVMsRUFBRSxDQUFLO0lBQ2xCLENBQUM7QUFFTCxDQUFDO0FBQ0QsS0FBSyxDQUFDQyxNQUFNLFVBQVVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEdBQUssQ0FBQztJQUN4QyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxhQUFhLEVBQUMsQ0FBQyxHQUFHSCxHQUFHLENBQUNJLE9BQU87SUFDckMsRUFBRSxFQUFFRCxhQUFhLEVBQUUsQ0FBQztRQUNsQixFQUFvQjtRQUNwQixLQUFLLENBQUNFLEtBQUssR0FBR0YsYUFBYSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxFQUFFSCxhQUFhLENBQUNJLE1BQU07UUFDekRwQiwwREFBVSxDQUFDa0IsS0FBSyxFQUFFVixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHWSxHQUFHLEVBQUVDLE1BQU0sR0FBSyxDQUFDO1lBQzFELEVBQUUsRUFBRUQsR0FBRyxFQUFFLENBQUM7Z0JBQ1JSLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7b0JBQUNDLE9BQU8sRUFBRSxDQUFvQjtnQkFBQyxDQUFDO1lBQ3hELENBQUMsTUFBTSxDQUFDO2dCQUNOYixHQUFHLENBQUNYLElBQUksR0FBR3FCLE1BQU07Z0JBQ2pCUixJQUFJO1lBQ04sQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLE1BQU0sQ0FBQztRQUNORCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUF1QjtRQUFDLENBQUM7SUFDM0QsQ0FBQztBQUNILENBQUM7QUFDRCxLQUFLLENBQUNuQixPQUFPLFVBQVVNLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEdBQUssQ0FBQztJQUN6QyxFQUFFLEVBQUVGLEdBQUcsQ0FBQ1gsSUFBSSxDQUFDSyxPQUFPLEVBQUUsQ0FBQztRQUNyQlEsSUFBSTtJQUNOLENBQUMsTUFBTSxDQUFDO1FBQ05ELEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQW1CO1FBQUMsQ0FBQztJQUN2RCxDQUFDO0FBQ0gsQ0FBQztBQUVxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlci1zaGUteS8uL3V0aWxzL2F1dGguanM/ZWI2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmNvbnN0IHNpZ25Ub2tlbiA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKFxyXG4gICAge1xyXG4gICAgICBfaWQ6IHVzZXIuX2lkLFxyXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBpc0FkbWluOiB1c2VyLmlzQWRtaW4sXHJcbiAgICB9LFxyXG4gICAgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcclxuICAgIHtcclxuICAgICAgZXhwaXJlc0luOiAnMzBkJyxcclxuICAgIH1cclxuICApO1xyXG59O1xyXG5jb25zdCBpc0F1dGggPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IHJlcS5oZWFkZXJzO1xyXG4gIGlmIChhdXRob3JpemF0aW9uKSB7XHJcbiAgICAvLyBCZWFyZXIgeHh4ID0+IHh4eFxyXG4gICAgY29uc3QgdG9rZW4gPSBhdXRob3JpemF0aW9uLnNsaWNlKDcsIGF1dGhvcml6YXRpb24ubGVuZ3RoKTtcclxuICAgIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIChlcnIsIGRlY29kZSkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVG9rZW4gaXMgbm90IHZhbGlkJyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXEudXNlciA9IGRlY29kZTtcclxuICAgICAgICBuZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdUb2tlbiBpcyBub3Qgc3VwcGlsZWQnIH0pO1xyXG4gIH1cclxufTtcclxuY29uc3QgaXNBZG1pbiA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGlmIChyZXEudXNlci5pc0FkbWluKSB7XHJcbiAgICBuZXh0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ1VzZXIgaXMgbm90IGFkbWluJyB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBzaWduVG9rZW4sIGlzQXV0aCwgaXNBZG1pbiB9O1xyXG4iXSwibmFtZXMiOlsiand0Iiwic2lnblRva2VuIiwidXNlciIsInNpZ24iLCJfaWQiLCJuYW1lIiwiZW1haWwiLCJpc0FkbWluIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJpc0F1dGgiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXV0aG9yaXphdGlvbiIsImhlYWRlcnMiLCJ0b2tlbiIsInNsaWNlIiwibGVuZ3RoIiwidmVyaWZ5IiwiZXJyIiwiZGVjb2RlIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/auth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/keys/paypal.js"));
module.exports = __webpack_exports__;

})();