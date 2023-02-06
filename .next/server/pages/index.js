"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function ProductItem({ product , addToCartHandler  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: `/product/${product.slug}`,
                legacyBehavior: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: product.image,
                        alt: product.name,
                        className: "rounded shadow"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center justify-center p-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/product/${product.slug}`,
                        legacyBehavior: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-lg",
                                children: product.name
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-2",
                        children: product.brand
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "$",
                            product.price
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "primary-button",
                        type: "button",
                        onClick: ()=>addToCartHandler(product),
                        children: "Add to cart"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3412);
/* harmony import */ var _components_productItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5536);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1877);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(493);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(817);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2148);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_6__, _utils_Store__WEBPACK_IMPORTED_MODULE_7__, react_toastify__WEBPACK_IMPORTED_MODULE_9__]);
([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_6__, _utils_Store__WEBPACK_IMPORTED_MODULE_7__, react_toastify__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Home({ products  }) {
    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .y);
    const { cart  } = state;
    const addToCartHandler = async (product)=>{
        const existItem = cart.cartItems.find((item)=>item.slug === product.slug);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
            react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error("Sorry, Product is out of stock");
            return;
        }
        dispatch({
            type: "CART_ADD_ITEM",
            payload: {
                ...product,
                quantity
            }
        });
        react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success("Product added to the cart");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "Home Page",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4",
            children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_productItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    product: product,
                    addToCartHandler: addToCartHandler
                }, product.slug))
        })
    });
}
async function getServerSideProps() {
    await _utils_db__WEBPACK_IMPORTED_MODULE_5__/* ["default"].connect */ .Z.connect();
    const products = await _models_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"].find */ .Z.find().lean();
    return {
        props: {
            products: products.map(_utils_db__WEBPACK_IMPORTED_MODULE_5__/* ["default"].convertDocToObj */ .Z.convertDocToObj)
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 493:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

;// CONCATENATED MODULE: external "bcryptjs"
const external_bcryptjs_namespaceObject = require("bcryptjs");
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_namespaceObject);
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
/* harmony default export */ const utils_data = ((/* unused pure expression or super */ null && (data)));


/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9275:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,848,148,412,521], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();