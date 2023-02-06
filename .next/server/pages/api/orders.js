"use strict";
(() => {
var exports = {};
exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 9409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8989);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);



const handler = async (req, res)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)({
        req
    });
    if (!session) {
        return res.status(401).send("signin required");
    }
    const { user  } = session;
    console.log(user);
    await _utils_db__WEBPACK_IMPORTED_MODULE_1__/* ["default"].connect */ .Z.connect();
    const newOrder = new _models_Order__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z({
        ...req.body,
        user: user._id
    });
    const order = await newOrder.save();
    res.status(201).send(order);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [989,53], () => (__webpack_exec__(9409)));
module.exports = __webpack_exports__;

})();