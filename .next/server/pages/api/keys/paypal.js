"use strict";
(() => {
var exports = {};
exports.id = 159;
exports.ids = [159];
exports.modules = {

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 6329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const { getSession  } = __webpack_require__(1649);
const handler = async (req, res)=>{
    const session = await getSession({
        req
    });
    if (!session) {
        return res.status(401).send("signin required");
    }
    res.send(process.env.PAYPAL_CLIENT_ID || "sb");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6329));
module.exports = __webpack_exports__;

})();