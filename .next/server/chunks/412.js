"use strict";
exports.id = 412;
exports.ids = [412];
exports.modules = {

/***/ 5763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DropdownLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function DropdownLink(props) {
    let { href , children , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        legacyBehavior: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            ...rest,
            children: children
        })
    });
}


/***/ }),

/***/ 3412:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9275);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2148);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _DropdownLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5763);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _headlessui_react__WEBPACK_IMPORTED_MODULE_4__, _utils_Store__WEBPACK_IMPORTED_MODULE_7__, js_cookie__WEBPACK_IMPORTED_MODULE_10__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _headlessui_react__WEBPACK_IMPORTED_MODULE_4__, _utils_Store__WEBPACK_IMPORTED_MODULE_7__, js_cookie__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Layout({ title , children  }) {
    const { status , data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession)();
    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .y);
    const { cart: { cartItems  }  } = state;
    const [cartItemsCount, setCartItemsCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCartItemsCount(cartItems.reduce((a, c)=>a + c.quantity, 0));
    }, [
        cartItems
    ]);
    const logoutClickHandler = ()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].remove("cart");
        dispatch("CART_RESET");
        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.signOut)({
            callbackUrl: "/login"
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title ? `${title} - EVSHOP` : "EVSHOP"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {
                position: "bottom-center",
                limit: 1
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex min-h-screen flex-col justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                            className: "flex h-12 items-center px-4 justify-between shadow-md",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    href: "/",
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "text-lg font-bold",
                                        children: "EVSHOP"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: "/cart",
                                            legacyBehavior: true,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "p-2",
                                                children: [
                                                    "Cart",
                                                    cartItemsCount > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white",
                                                        children: cartItemsCount
                                                    })
                                                ]
                                            })
                                        }),
                                        status === "loading" ? "Loading" : session?.user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {
                                            as: "div",
                                            className: "relative inline-block",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Button, {
                                                    className: "text-blue-600",
                                                    children: session.user.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Items, {
                                                    className: "absolute right-0 w-56 origin-top-right bg-white shadow-lg",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropdownLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                className: "dropdown-link",
                                                                href: "/profile",
                                                                children: "Profile"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropdownLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                className: "dropdown-link",
                                                                href: "/order-history",
                                                                children: "Order History"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "dropdown-link",
                                                                href: "#",
                                                                onClick: logoutClickHandler,
                                                                children: "Logout"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: "/login",
                                            legacyBehavior: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "p-2",
                                                children: "Login"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        className: "container m-auto mt-4 px-4",
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                        className: "flex h-10 justify-center items-center shadow-inner",
                        children: "Copyright \xa92023 EVSHOP"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;