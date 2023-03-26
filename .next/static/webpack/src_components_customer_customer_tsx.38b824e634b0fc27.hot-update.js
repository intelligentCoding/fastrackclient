"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_customer_customer_tsx",{

/***/ "./src/components/customer/customer-list.tsx":
/*!***************************************************!*\
  !*** ./src/components/customer/customer-list.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/table */ \"./src/components/ui/table.tsx\");\n/* harmony import */ var _components_common_action_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/common/action-buttons */ \"./src/components/common/action-buttons.tsx\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/types */ \"./src/types/index.ts\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n// import { Order, MappedPaginatorInfo } from '@/types';\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar CustomersList = function(param) {\n    var customers = param.customers;\n    var _this1 = _this;\n    _s();\n    // const { data, paginatorInfo } = orders! ?? {};\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)().t;\n    var rowExpandable = function(record) {\n        var ref;\n        return (ref = record.children) === null || ref === void 0 ? void 0 : ref.length;\n    };\n    var alignLeft = useIsRTL().alignLeft;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        sort: _types__WEBPACK_IMPORTED_MODULE_3__.SortOrder.Desc,\n        column: null\n    }), sortingObj = ref1[0], setSortingObj = ref1[1];\n    // const onHeaderClick = (column: string | null) => ({\n    //   onClick: () => {\n    //     onSort((currentSortDirection: SortOrder) =>\n    //       currentSortDirection === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc\n    //     );\n    //     onOrder(column!);\n    //     setSortingObj({\n    //       sort:\n    //         sortingObj.sort === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc,\n    //       column: column,\n    //     });\n    //   },\n    // });\n    var columns = [\n        {\n            title: \"name\",\n            dataIndex: 'name',\n            key: 'name',\n            align: 'center',\n            render: function(name, customers) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-max\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, _this1));\n            }\n        },\n        {\n            title: \"email\",\n            dataIndex: 'email',\n            key: 'email',\n            align: 'center',\n            render: function(email, customers) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-max\",\n                    children: email\n                }, void 0, false, {\n                    fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, _this1));\n            }\n        },\n        {\n            title: \"clearanceFee\",\n            dataIndex: 'clearanceFee',\n            key: 'clearanceFee',\n            align: 'center'\n        },\n        {\n            title: \"airlineFee\",\n            dataIndex: 'airlineFee',\n            key: 'airlineFee',\n            align: 'center'\n        },\n        {\n            title: \"airwayBillPerPcs\",\n            dataIndex: 'airwayBillPerPcs',\n            key: 'airwayBillPerPcs',\n            align: 'center'\n        },\n        {\n            title: \"fteHandlingFee\",\n            dataIndex: 'fteHandlingFee',\n            key: 'fteHandlingFee',\n            align: 'center'\n        },\n        {\n            title: \"cfsRecoveryCharges\",\n            dataIndex: 'cfsRecoveryCharges',\n            key: 'cfsRecoveryCharges',\n            align: 'center'\n        },\n        {\n            title: \"fteMinWeight\",\n            dataIndex: 'fteMinWeight',\n            key: 'fteMinWeight',\n            align: 'center'\n        },\n        {\n            title: \"fteMinCharge\",\n            dataIndex: 'fteMinCharge',\n            key: 'fteMinCharge',\n            align: 'center'\n        },\n        {\n            title: \"cfsMinWeight\",\n            dataIndex: 'cfsMinWeight',\n            key: 'cfsMinWeight',\n            align: 'center'\n        },\n        {\n            title: \"cfsMinCharge\",\n            dataIndex: 'cfsMinCharge',\n            key: 'cfsMinCharge',\n            align: 'center'\n        },\n        {\n            title: \"Service\",\n            dataIndex: 'service',\n            key: 'service',\n            align: 'center',\n            render: function(service, customers) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-max\",\n                    children: service.code\n                }, void 0, false, {\n                    fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                    lineNumber: 150,\n                    columnNumber: 11\n                }, _this1));\n            }\n        },\n        {\n            title: \"Actions\",\n            dataIndex: 'id',\n            key: 'actions',\n            align: 'center',\n            width: 150,\n            render: function(id, services) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_action_buttons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: id,\n                    editUrl: \"\".concat(router.asPath, \"/\").concat(id),\n                    deleteModalView: \"DELETE_CUSTOMER\"\n                }, void 0, false, {\n                    fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                    lineNumber: 165,\n                    columnNumber: 11\n                }, _this1));\n            }\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mb-6 overflow-hidden rounded shadow\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.Table, {\n                //@ts-ignore\n                columns: columns,\n                emptyText: \"No customers available\",\n                data: customers,\n                rowKey: \"id\",\n                scroll: {\n                    x: 1000\n                },\n                expandable: {\n                    expandedRowRender: function() {\n                        return '';\n                    },\n                    rowExpandable: rowExpandable\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                lineNumber: 178,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n            lineNumber: 177,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(CustomersList, \"dEZa+CdUYCD3mnN6dp5SwaS5evE=\", true, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation\n    ];\n});\n_c = CustomersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomersList);\nvar _c;\n$RefreshReg$(_c, \"CustomersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lci1saXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNkM7QUFDaUI7QUFNUDtBQUNWO0FBQ2I7QUFFaEMsRUFBd0Q7QUFDakI7OztBQVl2QyxHQUFLLENBQUNNLGFBQWEsR0FBRyxRQUNqQixRQUtTLENBQUM7UUFMYkMsU0FBUyxTQUFUQSxTQUFTOzs7SUFNVCxFQUFpRDtJQUNqRCxHQUFLLENBQUNDLE1BQU0sR0FBR0gsc0RBQVM7SUFDeEIsR0FBSyxDQUFHSSxDQUFDLEdBQUtOLDREQUFjLEdBQXBCTSxDQUFDO0lBQ1QsR0FBSyxDQUFDQyxhQUFhLEdBQUcsUUFBUSxDQUFQQyxNQUFXO1lBQUtBLEdBQWU7UUFBZkEsTUFBTSxFQUFOQSxHQUFlLEdBQWZBLE1BQU0sQ0FBQ0MsUUFBUSxjQUFmRCxHQUFlLEtBQWZBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLEdBQWUsQ0FBRUUsTUFBTTs7SUFDOUQsR0FBSyxDQUFHQyxTQUFTLEdBQUtDLFFBQVEsR0FBdEJELFNBQVM7SUFFakIsR0FBSyxDQUErQlYsSUFNbEMsR0FOa0NBLCtDQUFRLENBR3pDLENBQUM7UUFDRlksSUFBSSxFQUFFZCxrREFBYztRQUNwQmdCLE1BQU0sRUFBRSxJQUFJO0lBQ2QsQ0FBQyxHQU5NQyxVQUFVLEdBQW1CZixJQU1sQyxLQU5pQmdCLGFBQWEsR0FBSWhCLElBTWxDO0lBRUYsRUFBc0Q7SUFDdEQsRUFBcUI7SUFDckIsRUFBa0Q7SUFDbEQsRUFBaUY7SUFDakYsRUFBUztJQUNULEVBQXdCO0lBRXhCLEVBQXNCO0lBQ3RCLEVBQWM7SUFDZCxFQUErRTtJQUMvRSxFQUF3QjtJQUN4QixFQUFVO0lBQ1YsRUFBTztJQUNQLEVBQU07SUFFTixHQUFLLENBQUNpQixPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7WUFDQ0MsS0FBSyxFQUFFLENBQU07WUFDYkMsU0FBUyxFQUFF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LEVBQUVDLFFBQWtCLEVBQUssQ0FBQztnQkFDM0MsTUFBTSw2RUFDSGxDLHlFQUFhO29CQUNaaUMsRUFBRSxFQUFFQSxFQUFFO29CQUNORSxPQUFPLEVBQUcsR0FBbUJGLE1BQUUsQ0FBbkIxQixNQUFNLENBQUM2QixNQUFNLEVBQUMsQ0FBQyxJQUFLLE9BQUhILEVBQUU7b0JBQy9CSSxlQUFlLEVBQUMsQ0FBaUI7Ozs7OztZQUd2QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNOzhGQUVEVixDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFxQztrR0FDakQ3Qix1REFBSztnQkFDSixFQUFZO2dCQUNacUIsT0FBTyxFQUFFQSxPQUFPO2dCQUNoQmtCLFNBQVMsRUFBQyxDQUF3QjtnQkFDbENDLElBQUksRUFBRWpDLFNBQVM7Z0JBQ2ZrQyxNQUFNLEVBQUMsQ0FBSTtnQkFDWEMsTUFBTSxFQUFFLENBQUM7b0JBQUNDLENBQUMsRUFBRSxJQUFJO2dCQUFDLENBQUM7Z0JBQ25CQyxVQUFVLEVBQUUsQ0FBQztvQkFDWEMsaUJBQWlCLEVBQUUsUUFBUTt3QkFBRixNQUNuQyxDQURtQyxDQUFFOztvQkFDM0JuQyxhQUFhLEVBQUVBLGFBQWE7Z0JBQzlCLENBQUM7Ozs7Ozs7Ozs7OztBQWdCWCxDQUFDO0dBbExLSixhQUFhOztRQVFGRCxrREFBUztRQUNWRix3REFBYzs7O0tBVHhCRyxhQUFhO0FBb0xuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2N1c3RvbWVyL2N1c3RvbWVyLWxpc3QudHN4P2M2NmUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS90YWJsZSc7XG5pbXBvcnQgQWN0aW9uQnV0dG9ucyBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL2FjdGlvbi1idXR0b25zJztcbmltcG9ydCB1c2VQcmljZSBmcm9tICdAL3V0aWxzL3VzZS1wcmljZSc7XG5pbXBvcnQgeyBmb3JtYXRBZGRyZXNzIH0gZnJvbSAnQC91dGlscy9mb3JtYXQtYWRkcmVzcyc7XG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gJ2RheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWUnO1xuaW1wb3J0IHV0YyBmcm9tICdkYXlqcy9wbHVnaW4vdXRjJztcbmltcG9ydCB0aW1lem9uZSBmcm9tICdkYXlqcy9wbHVnaW4vdGltZXpvbmUnO1xuaW1wb3J0IHsgQ3VzdG9tZXIsIFNlcnZpY2VzLCBTb3J0T3JkZXIgfSBmcm9tICdAL3R5cGVzJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpdGxlV2l0aFNvcnQgZnJvbSAnQC9jb21wb25lbnRzL3VpL3RpdGxlLXdpdGgtc29ydCc7XG4vLyBpbXBvcnQgeyBPcmRlciwgTWFwcGVkUGFnaW5hdG9ySW5mbyB9IGZyb20gJ0AvdHlwZXMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuLy8gaW1wb3J0IFN0YXR1c0NvbG9yIGZyb20gJ0AvY29tcG9uZW50cy9vcmRlci9zdGF0dXMtY29sb3InO1xuaW1wb3J0IEJhZGdlIGZyb20gJ0AvY29tcG9uZW50cy91aS9iYWRnZS9iYWRnZSc7XG5cbnR5cGUgSVByb3BzID0ge1xuICBjdXN0b21lcnM6IEN1c3RvbWVyW10gfCB1bmRlZmluZWQ7XG4gIC8vIHBhZ2luYXRvckluZm86IE1hcHBlZFBhZ2luYXRvckluZm8gfCBudWxsO1xuICAvLyBvblBhZ2luYXRpb246IChjdXJyZW50OiBudW1iZXIpID0+IHZvaWQ7XG4gIC8vIG9uU29ydDogKGN1cnJlbnQ6IGFueSkgPT4gdm9pZDtcbiAgLy8gb25PcmRlcjogKGN1cnJlbnQ6IHN0cmluZykgPT4gdm9pZDtcbn07XG5cbmNvbnN0IEN1c3RvbWVyc0xpc3QgPSAoe1xuICBjdXN0b21lcnMsXG4gIC8vIHBhZ2luYXRvckluZm8sXG4gIC8vIG9uUGFnaW5hdGlvbixcbiAgLy8gb25Tb3J0LFxuICAvLyBvbk9yZGVyLFxufTogSVByb3BzKSA9PiB7XG4gIC8vIGNvbnN0IHsgZGF0YSwgcGFnaW5hdG9ySW5mbyB9ID0gb3JkZXJzISA/PyB7fTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3Qgcm93RXhwYW5kYWJsZSA9IChyZWNvcmQ6IGFueSkgPT4gcmVjb3JkLmNoaWxkcmVuPy5sZW5ndGg7XG4gIGNvbnN0IHsgYWxpZ25MZWZ0IH0gPSB1c2VJc1JUTCgpO1xuXG4gIGNvbnN0IFtzb3J0aW5nT2JqLCBzZXRTb3J0aW5nT2JqXSA9IHVzZVN0YXRlPHtcbiAgICBzb3J0OiBTb3J0T3JkZXI7XG4gICAgY29sdW1uOiBzdHJpbmcgfCBudWxsO1xuICB9Pih7XG4gICAgc29ydDogU29ydE9yZGVyLkRlc2MsXG4gICAgY29sdW1uOiBudWxsLFxuICB9KTtcblxuICAvLyBjb25zdCBvbkhlYWRlckNsaWNrID0gKGNvbHVtbjogc3RyaW5nIHwgbnVsbCkgPT4gKHtcbiAgLy8gICBvbkNsaWNrOiAoKSA9PiB7XG4gIC8vICAgICBvblNvcnQoKGN1cnJlbnRTb3J0RGlyZWN0aW9uOiBTb3J0T3JkZXIpID0+XG4gIC8vICAgICAgIGN1cnJlbnRTb3J0RGlyZWN0aW9uID09PSBTb3J0T3JkZXIuRGVzYyA/IFNvcnRPcmRlci5Bc2MgOiBTb3J0T3JkZXIuRGVzY1xuICAvLyAgICAgKTtcbiAgLy8gICAgIG9uT3JkZXIoY29sdW1uISk7XG5cbiAgLy8gICAgIHNldFNvcnRpbmdPYmooe1xuICAvLyAgICAgICBzb3J0OlxuICAvLyAgICAgICAgIHNvcnRpbmdPYmouc29ydCA9PT0gU29ydE9yZGVyLkRlc2MgPyBTb3J0T3JkZXIuQXNjIDogU29ydE9yZGVyLkRlc2MsXG4gIC8vICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAvLyAgICAgfSk7XG4gIC8vICAgfSxcbiAgLy8gfSk7XG5cbiAgY29uc3QgY29sdW1ucyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJuYW1lXCIsXG4gICAgICBkYXRhSW5kZXg6ICduYW1lJyxcbiAgICAgIGtleTogJ25hbWUnLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgcmVuZGVyOiAobmFtZTogYW55LCBjdXN0b21lcnM6IEN1c3RvbWVyKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LW1heFwiPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcImVtYWlsXCIsXG4gICAgICBkYXRhSW5kZXg6ICdlbWFpbCcsXG4gICAgICBrZXk6ICdlbWFpbCcsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICByZW5kZXI6IChlbWFpbDogYW55LCBjdXN0b21lcnM6IEN1c3RvbWVyKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LW1heFwiPlxuICAgICAgICAgICAge2VtYWlsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJjbGVhcmFuY2VGZWVcIixcbiAgICAgIGRhdGFJbmRleDogJ2NsZWFyYW5jZUZlZScsXG4gICAgICBrZXk6ICdjbGVhcmFuY2VGZWUnLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiYWlybGluZUZlZVwiLFxuICAgICAgZGF0YUluZGV4OiAnYWlybGluZUZlZScsXG4gICAgICBrZXk6ICdhaXJsaW5lRmVlJyxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcImFpcndheUJpbGxQZXJQY3NcIixcbiAgICAgIGRhdGFJbmRleDogJ2FpcndheUJpbGxQZXJQY3MnLFxuICAgICAga2V5OiAnYWlyd2F5QmlsbFBlclBjcycsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJmdGVIYW5kbGluZ0ZlZVwiLFxuICAgICAgZGF0YUluZGV4OiAnZnRlSGFuZGxpbmdGZWUnLFxuICAgICAga2V5OiAnZnRlSGFuZGxpbmdGZWUnLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiY2ZzUmVjb3ZlcnlDaGFyZ2VzXCIsXG4gICAgICBkYXRhSW5kZXg6ICdjZnNSZWNvdmVyeUNoYXJnZXMnLFxuICAgICAga2V5OiAnY2ZzUmVjb3ZlcnlDaGFyZ2VzJyxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcImZ0ZU1pbldlaWdodFwiLFxuICAgICAgZGF0YUluZGV4OiAnZnRlTWluV2VpZ2h0JyxcbiAgICAgIGtleTogJ2Z0ZU1pbldlaWdodCcsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJmdGVNaW5DaGFyZ2VcIixcbiAgICAgIGRhdGFJbmRleDogJ2Z0ZU1pbkNoYXJnZScsXG4gICAgICBrZXk6ICdmdGVNaW5DaGFyZ2UnLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiY2ZzTWluV2VpZ2h0XCIsXG4gICAgICBkYXRhSW5kZXg6ICdjZnNNaW5XZWlnaHQnLFxuICAgICAga2V5OiAnY2ZzTWluV2VpZ2h0JyxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcImNmc01pbkNoYXJnZVwiLFxuICAgICAgZGF0YUluZGV4OiAnY2ZzTWluQ2hhcmdlJyxcbiAgICAgIGtleTogJ2Nmc01pbkNoYXJnZScsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJTZXJ2aWNlXCIsXG4gICAgICBkYXRhSW5kZXg6ICdzZXJ2aWNlJyxcbiAgICAgIGtleTogJ3NlcnZpY2UnLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgcmVuZGVyOiAoc2VydmljZTogYW55LCBjdXN0b21lcnM6IEN1c3RvbWVyKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LW1heFwiPlxuICAgICAgICAgICAge3NlcnZpY2UuY29kZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB7XG4gICAgICB0aXRsZTogXCJBY3Rpb25zXCIsXG4gICAgICBkYXRhSW5kZXg6ICdpZCcsXG4gICAgICBrZXk6ICdhY3Rpb25zJyxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAxNTAsXG4gICAgICByZW5kZXI6IChpZDogc3RyaW5nLCBzZXJ2aWNlczogU2VydmljZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8QWN0aW9uQnV0dG9uc1xuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgZWRpdFVybD17YCR7cm91dGVyLmFzUGF0aH0vJHtpZH1gfVxuICAgICAgICAgICAgZGVsZXRlTW9kYWxWaWV3PVwiREVMRVRFX0NVU1RPTUVSXCJcbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZCBzaGFkb3dcIj5cbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICBlbXB0eVRleHQ9XCJObyBjdXN0b21lcnMgYXZhaWxhYmxlXCJcbiAgICAgICAgICBkYXRhPXtjdXN0b21lcnN9XG4gICAgICAgICAgcm93S2V5PVwiaWRcIlxuICAgICAgICAgIHNjcm9sbD17eyB4OiAxMDAwIH19XG4gICAgICAgICAgZXhwYW5kYWJsZT17e1xuICAgICAgICAgICAgZXhwYW5kZWRSb3dSZW5kZXI6ICgpID0+ICcnLFxuICAgICAgICAgICAgcm93RXhwYW5kYWJsZTogcm93RXhwYW5kYWJsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG57LyogXG4gICAgICB7ISFwYWdpbmF0b3JJbmZvPy50b3RhbCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgdG90YWw9e3BhZ2luYXRvckluZm8/LnRvdGFsfVxuICAgICAgICAgICAgY3VycmVudD17cGFnaW5hdG9ySW5mbz8uY3VycmVudFBhZ2V9XG4gICAgICAgICAgICBwYWdlU2l6ZT17cGFnaW5hdG9ySW5mbz8ucGVyUGFnZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblBhZ2luYXRpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfSAqL31cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyc0xpc3Q7XG4iXSwibmFtZXMiOlsiVGFibGUiLCJBY3Rpb25CdXR0b25zIiwiU29ydE9yZGVyIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkN1c3RvbWVyc0xpc3QiLCJjdXN0b21lcnMiLCJyb3V0ZXIiLCJ0Iiwicm93RXhwYW5kYWJsZSIsInJlY29yZCIsImNoaWxkcmVuIiwibGVuZ3RoIiwiYWxpZ25MZWZ0IiwidXNlSXNSVEwiLCJzb3J0IiwiRGVzYyIsImNvbHVtbiIsInNvcnRpbmdPYmoiLCJzZXRTb3J0aW5nT2JqIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwia2V5IiwiYWxpZ24iLCJyZW5kZXIiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiZW1haWwiLCJzZXJ2aWNlIiwiY29kZSIsIndpZHRoIiwiaWQiLCJzZXJ2aWNlcyIsImVkaXRVcmwiLCJhc1BhdGgiLCJkZWxldGVNb2RhbFZpZXciLCJlbXB0eVRleHQiLCJkYXRhIiwicm93S2V5Iiwic2Nyb2xsIiwieCIsImV4cGFuZGFibGUiLCJleHBhbmRlZFJvd1JlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/customer/customer-list.tsx\n");

/***/ })

});