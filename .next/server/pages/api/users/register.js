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
exports.id = "pages/api/users/register";
exports.ids = ["pages/api/users/register"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isAdmin: {\n        type: Boolean,\n        required: true,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsS0FBSyxDQUFDQyxVQUFVLEdBQUcsR0FBRyxDQUFDRCx3REFBZSxDQUNwQyxDQUFDO0lBQ0NHLElBQUksRUFBRSxDQUFDO1FBQUNDLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtJQUFDLENBQUM7SUFDdENDLEtBQUssRUFBRSxDQUFDO1FBQUNILElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFRSxNQUFNLEVBQUUsSUFBSTtJQUFDLENBQUM7SUFDckRDLFFBQVEsRUFBRSxDQUFDO1FBQUNMLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtJQUFDLENBQUM7SUFDMUNJLE9BQU8sRUFBRSxDQUFDO1FBQUNOLElBQUksRUFBRU8sT0FBTztRQUFFTCxRQUFRLEVBQUUsSUFBSTtRQUFFTSxPQUFPLEVBQUUsS0FBSztJQUFDLENBQUM7QUFDNUQsQ0FBQyxFQUNELENBQUM7SUFDQ0MsVUFBVSxFQUFFLElBQUk7QUFDbEIsQ0FBQztBQUdILEtBQUssQ0FBQ0MsSUFBSSxHQUFHZCw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxDQUFNLE9BQUVDLFVBQVU7QUFDdEUsaUVBQWVhLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlci1zaGUteS8uL21vZGVscy9Vc2VyLmpzPzczNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBpc0FkbWluOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiaXNBZG1pbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/User.js\n");

/***/ }),

/***/ "./pages/api/users/register.js":
/*!*************************************!*\
  !*** ./pages/api/users/register.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User */ \"./models/User.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/db */ \"./utils/db.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/auth */ \"./utils/auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nhandler.post(async (req, res)=>{\n    await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect();\n    const newUser = new _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        name: req.body.name,\n        email: req.body.email,\n        password: bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hashSync(req.body.password),\n        isAdmin: false\n    });\n    const user = await newUser.save();\n    await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].disconnect();\n    const token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_4__.signToken)(user);\n    res.send({\n        token,\n        _id: user._id,\n        name: user.name,\n        email: user.email,\n        isAdmin: user.isAdmin\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlcnMvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNBO0FBQ1U7QUFDTDtBQUNhO0FBRS9DLEtBQUssQ0FBQ0ssT0FBTyxHQUFHTCx3REFBRTtBQUVsQkssT0FBTyxDQUFDQyxJQUFJLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDaEMsS0FBSyxDQUFDTCx5REFBVTtJQUNoQixLQUFLLENBQUNPLE9BQU8sR0FBRyxHQUFHLENBQUNSLG9EQUFJLENBQUMsQ0FBQztRQUN4QlMsSUFBSSxFQUFFSixHQUFHLENBQUNLLElBQUksQ0FBQ0QsSUFBSTtRQUNuQkUsS0FBSyxFQUFFTixHQUFHLENBQUNLLElBQUksQ0FBQ0MsS0FBSztRQUNyQkMsUUFBUSxFQUFFYix3REFBZSxDQUFDTSxHQUFHLENBQUNLLElBQUksQ0FBQ0UsUUFBUTtRQUMzQ0UsT0FBTyxFQUFFLEtBQUs7SUFDaEIsQ0FBQztJQUNELEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ1AsT0FBTyxDQUFDUSxJQUFJO0lBQy9CLEtBQUssQ0FBQ2YsNERBQWE7SUFFbkIsS0FBSyxDQUFDaUIsS0FBSyxHQUFHaEIsc0RBQVMsQ0FBQ2EsSUFBSTtJQUM1QlQsR0FBRyxDQUFDYSxJQUFJLENBQUMsQ0FBQztRQUNSRCxLQUFLO1FBQ0xFLEdBQUcsRUFBRUwsSUFBSSxDQUFDSyxHQUFHO1FBQ2JYLElBQUksRUFBRU0sSUFBSSxDQUFDTixJQUFJO1FBQ2ZFLEtBQUssRUFBRUksSUFBSSxDQUFDSixLQUFLO1FBQ2pCRyxPQUFPLEVBQUVDLElBQUksQ0FBQ0QsT0FBTztJQUN2QixDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlWCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZXItc2hlLXkvLi9wYWdlcy9hcGkvdXNlcnMvcmVnaXN0ZXIuanM/NTA3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uL21vZGVscy9Vc2VyJztcclxuaW1wb3J0IGRiIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RiJztcclxuaW1wb3J0IHsgc2lnblRva2VuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXV0aCc7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcclxuXHJcbmhhbmRsZXIucG9zdChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBhd2FpdCBkYi5jb25uZWN0KCk7XHJcbiAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHtcclxuICAgIG5hbWU6IHJlcS5ib2R5Lm5hbWUsXHJcbiAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXHJcbiAgICBwYXNzd29yZDogYmNyeXB0Lmhhc2hTeW5jKHJlcS5ib2R5LnBhc3N3b3JkKSxcclxuICAgIGlzQWRtaW46IGZhbHNlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcclxuICBhd2FpdCBkYi5kaXNjb25uZWN0KCk7XHJcblxyXG4gIGNvbnN0IHRva2VuID0gc2lnblRva2VuKHVzZXIpO1xyXG4gIHJlcy5zZW5kKHtcclxuICAgIHRva2VuLFxyXG4gICAgX2lkOiB1c2VyLl9pZCxcclxuICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgaXNBZG1pbjogdXNlci5pc0FkbWluLFxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJuYyIsImJjcnlwdCIsIlVzZXIiLCJkYiIsInNpZ25Ub2tlbiIsImhhbmRsZXIiLCJwb3N0IiwicmVxIiwicmVzIiwiY29ubmVjdCIsIm5ld1VzZXIiLCJuYW1lIiwiYm9keSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYXNoU3luYyIsImlzQWRtaW4iLCJ1c2VyIiwic2F2ZSIsImRpc2Nvbm5lY3QiLCJ0b2tlbiIsInNlbmQiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/users/register.js\n");

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signToken\": () => (/* binding */ signToken),\n/* harmony export */   \"isAuth\": () => (/* binding */ isAuth),\n/* harmony export */   \"isAdmin\": () => (/* binding */ isAdmin)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst signToken = (user)=>{\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n        _id: user._id,\n        name: user.name,\n        email: user.email,\n        isAdmin: user.isAdmin\n    }, process.env.JWT_SECRET, {\n        expiresIn: '30d'\n    });\n};\nconst isAuth = async (req, res, next)=>{\n    const { authorization  } = req.headers;\n    if (authorization) {\n        // Bearer xxx => xxx\n        const token = authorization.slice(7, authorization.length);\n        jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET, (err, decode)=>{\n            if (err) {\n                res.status(401).send({\n                    message: 'Token is not valid'\n                });\n            } else {\n                req.user = decode;\n                next();\n            }\n        });\n    } else {\n        res.status(401).send({\n            message: 'Token is not suppiled'\n        });\n    }\n};\nconst isAdmin = async (req, res, next)=>{\n    if (req.user.isAdmin) {\n        next();\n    } else {\n        res.status(401).send({\n            message: 'User is not admin'\n        });\n    }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThCO0FBQzlCLEtBQUssQ0FBQ0MsU0FBUyxJQUFJQyxJQUFJLEdBQUssQ0FBQztJQUMzQixNQUFNLENBQUNGLHdEQUFRLENBQ2IsQ0FBQztRQUNDSSxHQUFHLEVBQUVGLElBQUksQ0FBQ0UsR0FBRztRQUNiQyxJQUFJLEVBQUVILElBQUksQ0FBQ0csSUFBSTtRQUNmQyxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBSztRQUNqQkMsT0FBTyxFQUFFTCxJQUFJLENBQUNLLE9BQU87SUFDdkIsQ0FBQyxFQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxFQUN0QixDQUFDO1FBQ0NDLFNBQVMsRUFBRSxDQUFLO0lBQ2xCLENBQUM7QUFFTCxDQUFDO0FBQ0QsS0FBSyxDQUFDQyxNQUFNLFVBQVVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEdBQUssQ0FBQztJQUN4QyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxhQUFhLEVBQUMsQ0FBQyxHQUFHSCxHQUFHLENBQUNJLE9BQU87SUFDckMsRUFBRSxFQUFFRCxhQUFhLEVBQUUsQ0FBQztRQUNsQixFQUFvQjtRQUNwQixLQUFLLENBQUNFLEtBQUssR0FBR0YsYUFBYSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxFQUFFSCxhQUFhLENBQUNJLE1BQU07UUFDekRwQiwwREFBVSxDQUFDa0IsS0FBSyxFQUFFVixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHWSxHQUFHLEVBQUVDLE1BQU0sR0FBSyxDQUFDO1lBQzFELEVBQUUsRUFBRUQsR0FBRyxFQUFFLENBQUM7Z0JBQ1JSLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7b0JBQUNDLE9BQU8sRUFBRSxDQUFvQjtnQkFBQyxDQUFDO1lBQ3hELENBQUMsTUFBTSxDQUFDO2dCQUNOYixHQUFHLENBQUNYLElBQUksR0FBR3FCLE1BQU07Z0JBQ2pCUixJQUFJO1lBQ04sQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLE1BQU0sQ0FBQztRQUNORCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUF1QjtRQUFDLENBQUM7SUFDM0QsQ0FBQztBQUNILENBQUM7QUFDRCxLQUFLLENBQUNuQixPQUFPLFVBQVVNLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEdBQUssQ0FBQztJQUN6QyxFQUFFLEVBQUVGLEdBQUcsQ0FBQ1gsSUFBSSxDQUFDSyxPQUFPLEVBQUUsQ0FBQztRQUNyQlEsSUFBSTtJQUNOLENBQUMsTUFBTSxDQUFDO1FBQ05ELEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQW1CO1FBQUMsQ0FBQztJQUN2RCxDQUFDO0FBQ0gsQ0FBQztBQUVxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlci1zaGUteS8uL3V0aWxzL2F1dGguanM/ZWI2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmNvbnN0IHNpZ25Ub2tlbiA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKFxyXG4gICAge1xyXG4gICAgICBfaWQ6IHVzZXIuX2lkLFxyXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBpc0FkbWluOiB1c2VyLmlzQWRtaW4sXHJcbiAgICB9LFxyXG4gICAgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcclxuICAgIHtcclxuICAgICAgZXhwaXJlc0luOiAnMzBkJyxcclxuICAgIH1cclxuICApO1xyXG59O1xyXG5jb25zdCBpc0F1dGggPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IHJlcS5oZWFkZXJzO1xyXG4gIGlmIChhdXRob3JpemF0aW9uKSB7XHJcbiAgICAvLyBCZWFyZXIgeHh4ID0+IHh4eFxyXG4gICAgY29uc3QgdG9rZW4gPSBhdXRob3JpemF0aW9uLnNsaWNlKDcsIGF1dGhvcml6YXRpb24ubGVuZ3RoKTtcclxuICAgIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIChlcnIsIGRlY29kZSkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVG9rZW4gaXMgbm90IHZhbGlkJyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXEudXNlciA9IGRlY29kZTtcclxuICAgICAgICBuZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdUb2tlbiBpcyBub3Qgc3VwcGlsZWQnIH0pO1xyXG4gIH1cclxufTtcclxuY29uc3QgaXNBZG1pbiA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGlmIChyZXEudXNlci5pc0FkbWluKSB7XHJcbiAgICBuZXh0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ1VzZXIgaXMgbm90IGFkbWluJyB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBzaWduVG9rZW4sIGlzQXV0aCwgaXNBZG1pbiB9O1xyXG4iXSwibmFtZXMiOlsiand0Iiwic2lnblRva2VuIiwidXNlciIsInNpZ24iLCJfaWQiLCJuYW1lIiwiZW1haWwiLCJpc0FkbWluIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJpc0F1dGgiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXV0aG9yaXphdGlvbiIsImhlYWRlcnMiLCJ0b2tlbiIsInNsaWNlIiwibGVuZ3RoIiwidmVyaWZ5IiwiZXJyIiwiZGVjb2RlIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/auth.js\n");

/***/ }),

/***/ "./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {\n};\nasync function connect() {\n    if (connection.isConnected) {\n        console.log('already connected');\n        return;\n    }\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {\n        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);\n        if (connection.isConnected === 1) {\n            console.log('use previous connection');\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    console.log('new connection');\n    connection.isConnected = db.connections[0].readyState;\n}\nasync function disconnect() {\n    if (connection.isConnected) {\n        if (false) {} else {\n            console.log('not disconnected');\n        }\n    }\n}\nfunction convertDocToObj(doc) {\n    doc._id = doc._id.toString();\n    doc.createdAt = doc.createdAt.toString();\n    doc.updatedAt = doc.updatedAt.toString();\n    return doc;\n}\nconst db1 = {\n    connect,\n    disconnect,\n    convertDocToObj\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsS0FBSyxDQUFDQyxVQUFVLEdBQUcsQ0FBQztBQUFBLENBQUM7ZUFFTkMsT0FBTyxHQUFHLENBQUM7SUFDeEIsRUFBRSxFQUFFRCxVQUFVLENBQUNFLFdBQVcsRUFBRSxDQUFDO1FBQzNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFtQjtRQUMvQixNQUFNO0lBQ1IsQ0FBQztJQUNELEVBQUUsRUFBRUwsb0VBQTJCLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDcENDLFVBQVUsQ0FBQ0UsV0FBVyxHQUFHSCwyRUFBa0M7UUFDM0QsRUFBRSxFQUFFQyxVQUFVLENBQUNFLFdBQVcsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBeUI7WUFDckMsTUFBTTtRQUNSLENBQUM7UUFDRCxLQUFLLENBQUNMLDBEQUFtQjtJQUMzQixDQUFDO0lBQ0QsS0FBSyxDQUFDVSxFQUFFLEdBQUcsS0FBSyxDQUFDVix1REFBZ0IsQ0FBQ1csT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsRUFBRSxDQUFDO1FBQzFEQyxlQUFlLEVBQUUsSUFBSTtRQUNyQkMsa0JBQWtCLEVBQUUsSUFBSTtJQUMxQixDQUFDO0lBQ0RYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWdCO0lBQzVCSixVQUFVLENBQUNFLFdBQVcsR0FBR08sRUFBRSxDQUFDSixXQUFXLENBQUMsQ0FBQyxFQUFFRSxVQUFVO0FBQ3ZELENBQUM7ZUFFY0MsVUFBVSxHQUFHLENBQUM7SUFDM0IsRUFBRSxFQUFFUixVQUFVLENBQUNFLFdBQVcsRUFBRSxDQUFDO1FBQzNCLEVBQUUsRUEzQk4sS0EyQjZDLEVBQUUsRUFHMUMsTUFBTSxDQUFDO1lBQ05DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWtCO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztTQUVRVyxlQUFlLENBQUNDLEdBQUcsRUFBRSxDQUFDO0lBQzdCQSxHQUFHLENBQUNDLEdBQUcsR0FBR0QsR0FBRyxDQUFDQyxHQUFHLENBQUNDLFFBQVE7SUFDMUJGLEdBQUcsQ0FBQ0csU0FBUyxHQUFHSCxHQUFHLENBQUNHLFNBQVMsQ0FBQ0QsUUFBUTtJQUN0Q0YsR0FBRyxDQUFDSSxTQUFTLEdBQUdKLEdBQUcsQ0FBQ0ksU0FBUyxDQUFDRixRQUFRO0lBQ3RDLE1BQU0sQ0FBQ0YsR0FBRztBQUNaLENBQUM7QUFFRCxLQUFLLENBQUNQLEdBQUUsR0FBRyxDQUFDO0lBQUNSLE9BQU87SUFBRU8sVUFBVTtJQUFFTyxlQUFlO0FBQUMsQ0FBQztBQUNuRCxpRUFBZU4sR0FBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVyLXNoZS15Ly4vdXRpbHMvZGIuanM/N2NiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IHt9O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgY29uc29sZS5sb2coJ2FscmVhZHkgY29ubmVjdGVkJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gbW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxuICAgIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkID09PSAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1c2UgcHJldmlvdXMgY29ubmVjdGlvbicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG4gIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKCduZXcgY29ubmVjdGlvbicpO1xyXG4gIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdub3QgZGlzY29ubmVjdGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0RG9jVG9PYmooZG9jKSB7XHJcbiAgZG9jLl9pZCA9IGRvYy5faWQudG9TdHJpbmcoKTtcclxuICBkb2MuY3JlYXRlZEF0ID0gZG9jLmNyZWF0ZWRBdC50b1N0cmluZygpO1xyXG4gIGRvYy51cGRhdGVkQXQgPSBkb2MudXBkYXRlZEF0LnRvU3RyaW5nKCk7XHJcbiAgcmV0dXJuIGRvYztcclxufVxyXG5cclxuY29uc3QgZGIgPSB7IGNvbm5lY3QsIGRpc2Nvbm5lY3QsIGNvbnZlcnREb2NUb09iaiB9O1xyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0aW9ucyIsImxlbmd0aCIsInJlYWR5U3RhdGUiLCJkaXNjb25uZWN0IiwiZGIiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb252ZXJ0RG9jVG9PYmoiLCJkb2MiLCJfaWQiLCJ0b1N0cmluZyIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/users/register.js"));
module.exports = __webpack_exports__;

})();