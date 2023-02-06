"use strict";
(() => {
var exports = {};
exports.id = 890;
exports.ids = [890];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Product", productSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);


/***/ }),

/***/ 6274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ 7492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ seed)
});

// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(8432);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);
;// CONCATENATED MODULE: ./utils/data.js

const data = {
    users: [
        {
            name: "John",
            email: "admin@example.com",
            password: external_bcryptjs_default().hashSync("123456"),
            isAdmin: true
        },
        {
            name: "Jane",
            email: "user@example.com",
            password: external_bcryptjs_default().hashSync("123456"),
            isAdmin: false
        }
    ],
    products: [
        {
            name: "Free Shirt",
            slug: "free-shirt",
            category: "Shirts",
            image: "/images/shirt1.jpg",
            price: 70,
            brand: "Nike",
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: "A popular shirt"
        },
        {
            name: "Fit Shirt",
            slug: "fit-shirt",
            category: "Shirts",
            image: "/images/shirt2.jpg",
            price: 80,
            brand: "Adiddas",
            rating: 3.2,
            numReviews: 10,
            countInStock: 20,
            description: "A popular shirt"
        },
        {
            name: "Slim Shirt",
            slug: "slim-shirt",
            category: "Shirts",
            image: "/images/shirt3.jpg",
            price: 90,
            brand: "Raymond",
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: "A popular shirt"
        },
        {
            name: "Golf Pants",
            slug: "golf-pants",
            category: "Pants",
            image: "/images/pants1.jpg",
            price: 90,
            brand: "Oliver",
            rating: 2.9,
            numReviews: 13,
            countInStock: 20,
            description: "Smart looking pants"
        },
        {
            name: "Fit Pants",
            slug: "fit-pants",
            category: "Pants",
            image: "/images/pants2.jpg",
            price: 95,
            brand: "Zara",
            rating: 3.5,
            numReviews: 7,
            countInStock: 20,
            description: "A popular pants"
        },
        {
            name: "Classic Pants",
            slug: "classic-pants",
            category: "Pants",
            image: "/images/pants3.jpg",
            price: 75,
            brand: "Casely",
            rating: 2.4,
            numReviews: 14,
            countInStock: 20,
            description: "A popular pants"
        }
    ]
};
/* harmony default export */ const utils_data = (data);

// EXTERNAL MODULE: ./utils/db.js
var db = __webpack_require__(8989);
// EXTERNAL MODULE: ./models/User.js
var User = __webpack_require__(6274);
// EXTERNAL MODULE: ./models/Product.js
var Product = __webpack_require__(9442);
;// CONCATENATED MODULE: ./pages/api/seed.js




const handler = async (req, res)=>{
    await db/* default.connect */.Z.connect();
    await User/* default.deleteMany */.Z.deleteMany();
    await User/* default.insertMany */.Z.insertMany(utils_data.users);
    await Product/* default.deleteMany */.Z.deleteMany();
    await Product/* default.insertMany */.Z.insertMany(utils_data.products);
    await db/* default.disconnect */.Z.disconnect();
    res.send({
        message: "seeded successfully"
    });
};
/* harmony default export */ const seed = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [989], () => (__webpack_exec__(7492)));
module.exports = __webpack_exports__;

})();