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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/table */ \"./src/components/ui/table.tsx\");\n/* harmony import */ var _components_common_action_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/common/action-buttons */ \"./src/components/common/action-buttons.tsx\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/types */ \"./src/types/index.ts\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar CustomersList = function(param) {\n    var customers = param.customers;\n    var _this1 = _this;\n    _s();\n    // const { data, paginatorInfo } = orders! ?? {};\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)().t;\n    var rowExpandable = function(record) {\n        var ref;\n        return (ref = record.children) === null || ref === void 0 ? void 0 : ref.length;\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        sort: _types__WEBPACK_IMPORTED_MODULE_3__.SortOrder.Desc,\n        column: null\n    }), sortingObj = ref1[0], setSortingObj = ref1[1];\n    // const onHeaderClick = (column: string | null) => ({\n    //   onClick: () => {\n    //     onSort((currentSortDirection: SortOrder) =>\n    //       currentSortDirection === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc\n    //     );\n    //     onOrder(column!);\n    //     setSortingObj({\n    //       sort:\n    //         sortingObj.sort === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc,\n    //       column: column,\n    //     });\n    //   },\n    // });\n    var columns = [\n        {\n            title: \"name\",\n            dataIndex: 'name',\n            key: 'name',\n            align: 'center',\n            render: function(name, customers) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-max\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, _this1));\n            }\n        },\n        {\n            title: \"email\",\n            dataIndex: 'email',\n            key: 'email',\n            align: 'center',\n            render: function(email, customers) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-max\",\n                    children: email\n                }, void 0, false, {\n                    fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, _this1));\n            }\n        },\n        {\n            title: \"clearanceFee\",\n            dataIndex: 'clearanceFee',\n            key: 'clearanceFee',\n            align: 'center'\n        },\n        {\n            title: \"airlineFee\",\n            dataIndex: 'airlineFee',\n            key: 'airlineFee',\n            align: 'center'\n        },\n        {\n            title: \"airwayBillPerPcs\",\n            dataIndex: 'airwayBillPerPcs',\n            key: 'airwayBillPerPcs',\n            align: 'center'\n        },\n        {\n            title: \"fteHandlingFee\",\n            dataIndex: 'fteHandlingFee',\n            key: 'fteHandlingFee',\n            align: 'center'\n        },\n        {\n            title: \"cfsRecoveryCharges\",\n            dataIndex: 'cfsRecoveryCharges',\n            key: 'cfsRecoveryCharges',\n            align: 'center'\n        },\n        {\n            title: \"fteMinWeight\",\n            dataIndex: 'fteMinWeight',\n            key: 'fteMinWeight',\n            align: 'center'\n        },\n        {\n            title: \"fteMinCharge\",\n            dataIndex: 'fteMinCharge',\n            key: 'fteMinCharge',\n            align: 'center'\n        },\n        {\n            title: \"cfsMinWeight\",\n            dataIndex: 'cfsMinWeight',\n            key: 'cfsMinWeight',\n            align: 'center'\n        },\n        {\n            title: \"cfsMinCharge\",\n            dataIndex: 'cfsMinCharge',\n            key: 'cfsMinCharge',\n            align: 'center'\n        },\n        {\n            title: \"Service\",\n            dataIndex: 'service',\n            key: 'service',\n            align: 'center',\n            render: function(service, customers) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-max\",\n                    children: service.code\n                }, void 0, false, {\n                    fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                    lineNumber: 140,\n                    columnNumber: 11\n                }, _this1));\n            }\n        },\n        {\n            title: \"Actions\",\n            dataIndex: 'id',\n            key: 'actions',\n            align: 'center',\n            width: 150,\n            render: function(id, services) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_action_buttons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: id,\n                    editUrl: \"\".concat(router.asPath, \"/\").concat(id),\n                    deleteModalView: \"DELETE_CUSTOMER\"\n                }, void 0, false, {\n                    fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                    lineNumber: 155,\n                    columnNumber: 11\n                }, _this1));\n            }\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mb-6 overflow-hidden rounded shadow\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.Table, {\n                //@ts-ignore\n                columns: columns,\n                emptyText: \"No customers available\",\n                data: customers,\n                rowKey: \"id\",\n                scroll: {\n                    x: 1000\n                },\n                expandable: {\n                    expandedRowRender: function() {\n                        return '';\n                    },\n                    rowExpandable: rowExpandable\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                lineNumber: 168,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n            lineNumber: 167,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(CustomersList, \"HE2CKScX3c7onZxJFLFWwbNHXAs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation\n    ];\n});\n_c = CustomersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomersList);\nvar _c;\n$RefreshReg$(_c, \"CustomersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lci1saXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNkM7QUFDaUI7QUFDUDtBQUNWO0FBQ2I7QUFDTzs7O0FBVXZDLEdBQUssQ0FBQ00sYUFBYSxHQUFHLFFBQ2pCLFFBS1MsQ0FBQztRQUxiQyxTQUFTLFNBQVRBLFNBQVM7OztJQU1ULEVBQWlEO0lBQ2pELEdBQUssQ0FBQ0MsTUFBTSxHQUFHSCxzREFBUztJQUN4QixHQUFLLENBQUdJLENBQUMsR0FBS04sNERBQWMsR0FBcEJNLENBQUM7SUFDVCxHQUFLLENBQUNDLGFBQWEsR0FBRyxRQUFRLENBQVBDLE1BQVc7WUFBS0EsR0FBZTtRQUFmQSxNQUFNLEVBQU5BLEdBQWUsR0FBZkEsTUFBTSxDQUFDQyxRQUFRLGNBQWZELEdBQWUsS0FBZkEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsR0FBZSxDQUFFRSxNQUFNOztJQUU5RCxHQUFLLENBQStCVCxJQU1sQyxHQU5rQ0EsK0NBQVEsQ0FHekMsQ0FBQztRQUNGVSxJQUFJLEVBQUVaLGtEQUFjO1FBQ3BCYyxNQUFNLEVBQUUsSUFBSTtJQUNkLENBQUMsR0FOTUMsVUFBVSxHQUFtQmIsSUFNbEMsS0FOaUJjLGFBQWEsR0FBSWQsSUFNbEM7SUFFRixFQUFzRDtJQUN0RCxFQUFxQjtJQUNyQixFQUFrRDtJQUNsRCxFQUFpRjtJQUNqRixFQUFTO0lBQ1QsRUFBd0I7SUFFeEIsRUFBc0I7SUFDdEIsRUFBYztJQUNkLEVBQStFO0lBQy9FLEVBQXdCO0lBQ3hCLEVBQVU7SUFDVixFQUFPO0lBQ1AsRUFBTTtJQUVOLEdBQUssQ0FBQ2UsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO1lBQ0NDLEtBQUssRUFBRSxDQUFNO1lBQ2JDLFNBQVMsRUFBRSxDQUFNO1lBQ2pCQyxHQUFHLEVBQUUsQ0FBTTtZQUNYQyxLQUFLLEVBQUUsQ0FBUTtZQUNmQyxNQUFNLEVB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RUFBRUEsRUFBRTtvQkFDTkUsT0FBTyxFQUFHLEdBQW1CRixNQUFFLENBQW5CeEIsTUFBTSxDQUFDMkIsTUFBTSxFQUFDLENBQUMsSUFBSyxPQUFISCxFQUFFO29CQUMvQkksZUFBZSxFQUFDLENBQWlCOzs7Ozs7WUFHdkMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTTs4RkFFRFYsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBcUM7a0dBQ2pEM0IsdURBQUs7Z0JBQ0osRUFBWTtnQkFDWm1CLE9BQU8sRUFBRUEsT0FBTztnQkFDaEJrQixTQUFTLEVBQUMsQ0FBd0I7Z0JBQ2xDQyxJQUFJLEVBQUUvQixTQUFTO2dCQUNmZ0MsTUFBTSxFQUFDLENBQUk7Z0JBQ1hDLE1BQU0sRUFBRSxDQUFDO29CQUFDQyxDQUFDLEVBQUUsSUFBSTtnQkFBQyxDQUFDO2dCQUNuQkMsVUFBVSxFQUFFLENBQUM7b0JBQ1hDLGlCQUFpQixFQUFFLFFBQVE7d0JBQUYsTUFDbkMsQ0FEbUMsQ0FBRTs7b0JBQzNCakMsYUFBYSxFQUFFQSxhQUFhO2dCQUM5QixDQUFDOzs7Ozs7Ozs7Ozs7QUFnQlgsQ0FBQztHQWpMS0osYUFBYTs7UUFRRkQsa0RBQVM7UUFDVkYsd0RBQWM7OztLQVR4QkcsYUFBYTtBQW1MbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lci1saXN0LnRzeD9jNjZlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvdGFibGUnO1xuaW1wb3J0IEFjdGlvbkJ1dHRvbnMgZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9hY3Rpb24tYnV0dG9ucyc7XG5pbXBvcnQgeyBDdXN0b21lciwgU2VydmljZXMsIFNvcnRPcmRlciB9IGZyb20gJ0AvdHlwZXMnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICduZXh0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbnR5cGUgSVByb3BzID0ge1xuICBjdXN0b21lcnM6IEN1c3RvbWVyW10gfCB1bmRlZmluZWQ7XG4gIC8vIHBhZ2luYXRvckluZm86IE1hcHBlZFBhZ2luYXRvckluZm8gfCBudWxsO1xuICAvLyBvblBhZ2luYXRpb246IChjdXJyZW50OiBudW1iZXIpID0+IHZvaWQ7XG4gIC8vIG9uU29ydDogKGN1cnJlbnQ6IGFueSkgPT4gdm9pZDtcbiAgLy8gb25PcmRlcjogKGN1cnJlbnQ6IHN0cmluZykgPT4gdm9pZDtcbn07XG5cbmNvbnN0IEN1c3RvbWVyc0xpc3QgPSAoe1xuICBjdXN0b21lcnMsXG4gIC8vIHBhZ2luYXRvckluZm8sXG4gIC8vIG9uUGFnaW5hdGlvbixcbiAgLy8gb25Tb3J0LFxuICAvLyBvbk9yZGVyLFxufTogSVByb3BzKSA9PiB7XG4gIC8vIGNvbnN0IHsgZGF0YSwgcGFnaW5hdG9ySW5mbyB9ID0gb3JkZXJzISA/PyB7fTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3Qgcm93RXhwYW5kYWJsZSA9IChyZWNvcmQ6IGFueSkgPT4gcmVjb3JkLmNoaWxkcmVuPy5sZW5ndGg7XG5cbiAgY29uc3QgW3NvcnRpbmdPYmosIHNldFNvcnRpbmdPYmpdID0gdXNlU3RhdGU8e1xuICAgIHNvcnQ6IFNvcnRPcmRlcjtcbiAgICBjb2x1bW46IHN0cmluZyB8IG51bGw7XG4gIH0+KHtcbiAgICBzb3J0OiBTb3J0T3JkZXIuRGVzYyxcbiAgICBjb2x1bW46IG51bGwsXG4gIH0pO1xuXG4gIC8vIGNvbnN0IG9uSGVhZGVyQ2xpY2sgPSAoY29sdW1uOiBzdHJpbmcgfCBudWxsKSA9PiAoe1xuICAvLyAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgLy8gICAgIG9uU29ydCgoY3VycmVudFNvcnREaXJlY3Rpb246IFNvcnRPcmRlcikgPT5cbiAgLy8gICAgICAgY3VycmVudFNvcnREaXJlY3Rpb24gPT09IFNvcnRPcmRlci5EZXNjID8gU29ydE9yZGVyLkFzYyA6IFNvcnRPcmRlci5EZXNjXG4gIC8vICAgICApO1xuICAvLyAgICAgb25PcmRlcihjb2x1bW4hKTtcblxuICAvLyAgICAgc2V0U29ydGluZ09iaih7XG4gIC8vICAgICAgIHNvcnQ6XG4gIC8vICAgICAgICAgc29ydGluZ09iai5zb3J0ID09PSBTb3J0T3JkZXIuRGVzYyA/IFNvcnRPcmRlci5Bc2MgOiBTb3J0T3JkZXIuRGVzYyxcbiAgLy8gICAgICAgY29sdW1uOiBjb2x1bW4sXG4gIC8vICAgICB9KTtcbiAgLy8gICB9LFxuICAvLyB9KTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIm5hbWVcIixcbiAgICAgIGRhdGFJbmRleDogJ25hbWUnLFxuICAgICAga2V5OiAnbmFtZScsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICByZW5kZXI6IChuYW1lOiBhbnksIGN1c3RvbWVyczogQ3VzdG9tZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctbWF4XCI+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiZW1haWxcIixcbiAgICAgIGRhdGFJbmRleDogJ2VtYWlsJyxcbiAgICAgIGtleTogJ2VtYWlsJyxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgIHJlbmRlcjogKGVtYWlsOiBhbnksIGN1c3RvbWVyczogQ3VzdG9tZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctbWF4XCI+XG4gICAgICAgICAgICB7ZW1haWx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcImNsZWFyYW5jZUZlZVwiLFxuICAgICAgZGF0YUluZGV4OiAnY2xlYXJhbmNlRmVlJyxcbiAgICAgIGtleTogJ2NsZWFyYW5jZUZlZScsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJhaXJsaW5lRmVlXCIsXG4gICAgICBkYXRhSW5kZXg6ICdhaXJsaW5lRmVlJyxcbiAgICAgIGtleTogJ2FpcmxpbmVGZWUnLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiYWlyd2F5QmlsbFBlclBjc1wiLFxuICAgICAgZGF0YUluZGV4OiAnYWlyd2F5QmlsbFBlclBjcycsXG4gICAgICBrZXk6ICdhaXJ3YXlCaWxsUGVyUGNzJyxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcImZ0ZUhhbmRsaW5nRmVlXCIsXG4gICAgICBkYXRhSW5kZXg6ICdmdGVIYW5kbGluZ0ZlZScsXG4gICAgICBrZXk6ICdmdGVIYW5kbGluZ0ZlZScsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJjZnNSZWNvdmVyeUNoYXJnZXNcIixcbiAgICAgIGRhdGFJbmRleDogJ2Nmc1JlY292ZXJ5Q2hhcmdlcycsXG4gICAgICBrZXk6ICdjZnNSZWNvdmVyeUNoYXJnZXMnLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiZnRlTWluV2VpZ2h0XCIsXG4gICAgICBkYXRhSW5kZXg6ICdmdGVNaW5XZWlnaHQnLFxuICAgICAga2V5OiAnZnRlTWluV2VpZ2h0JyxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcImZ0ZU1pbkNoYXJnZVwiLFxuICAgICAgZGF0YUluZGV4OiAnZnRlTWluQ2hhcmdlJyxcbiAgICAgIGtleTogJ2Z0ZU1pbkNoYXJnZScsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJjZnNNaW5XZWlnaHRcIixcbiAgICAgIGRhdGFJbmRleDogJ2Nmc01pbldlaWdodCcsXG4gICAgICBrZXk6ICdjZnNNaW5XZWlnaHQnLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiY2ZzTWluQ2hhcmdlXCIsXG4gICAgICBkYXRhSW5kZXg6ICdjZnNNaW5DaGFyZ2UnLFxuICAgICAga2V5OiAnY2ZzTWluQ2hhcmdlJyxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlNlcnZpY2VcIixcbiAgICAgIGRhdGFJbmRleDogJ3NlcnZpY2UnLFxuICAgICAga2V5OiAnc2VydmljZScsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICByZW5kZXI6IChzZXJ2aWNlOiBhbnksIGN1c3RvbWVyczogQ3VzdG9tZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctbWF4XCI+XG4gICAgICAgICAgICB7c2VydmljZS5jb2RlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkFjdGlvbnNcIixcbiAgICAgIGRhdGFJbmRleDogJ2lkJyxcbiAgICAgIGtleTogJ2FjdGlvbnMnLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgd2lkdGg6IDE1MCxcbiAgICAgIHJlbmRlcjogKGlkOiBzdHJpbmcsIHNlcnZpY2VzOiBTZXJ2aWNlcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxBY3Rpb25CdXR0b25zXG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICBlZGl0VXJsPXtgJHtyb3V0ZXIuYXNQYXRofS8ke2lkfWB9XG4gICAgICAgICAgICBkZWxldGVNb2RhbFZpZXc9XCJERUxFVEVfQ1VTVE9NRVJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkIHNoYWRvd1wiPlxuICAgICAgICA8VGFibGVcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgIGVtcHR5VGV4dD1cIk5vIGN1c3RvbWVycyBhdmFpbGFibGVcIlxuICAgICAgICAgIGRhdGE9e2N1c3RvbWVyc31cbiAgICAgICAgICByb3dLZXk9XCJpZFwiXG4gICAgICAgICAgc2Nyb2xsPXt7IHg6IDEwMDAgfX1cbiAgICAgICAgICBleHBhbmRhYmxlPXt7XG4gICAgICAgICAgICBleHBhbmRlZFJvd1JlbmRlcjogKCkgPT4gJycsXG4gICAgICAgICAgICByb3dFeHBhbmRhYmxlOiByb3dFeHBhbmRhYmxlLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbnsvKiBcbiAgICAgIHshIXBhZ2luYXRvckluZm8/LnRvdGFsICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICB0b3RhbD17cGFnaW5hdG9ySW5mbz8udG90YWx9XG4gICAgICAgICAgICBjdXJyZW50PXtwYWdpbmF0b3JJbmZvPy5jdXJyZW50UGFnZX1cbiAgICAgICAgICAgIHBhZ2VTaXplPXtwYWdpbmF0b3JJbmZvPy5wZXJQYWdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uUGFnaW5hdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9ICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJzTGlzdDtcbiJdLCJuYW1lcyI6WyJUYWJsZSIsIkFjdGlvbkJ1dHRvbnMiLCJTb3J0T3JkZXIiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ3VzdG9tZXJzTGlzdCIsImN1c3RvbWVycyIsInJvdXRlciIsInQiLCJyb3dFeHBhbmRhYmxlIiwicmVjb3JkIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJzb3J0IiwiRGVzYyIsImNvbHVtbiIsInNvcnRpbmdPYmoiLCJzZXRTb3J0aW5nT2JqIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwia2V5IiwiYWxpZ24iLCJyZW5kZXIiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiZW1haWwiLCJzZXJ2aWNlIiwiY29kZSIsIndpZHRoIiwiaWQiLCJzZXJ2aWNlcyIsImVkaXRVcmwiLCJhc1BhdGgiLCJkZWxldGVNb2RhbFZpZXciLCJlbXB0eVRleHQiLCJkYXRhIiwicm93S2V5Iiwic2Nyb2xsIiwieCIsImV4cGFuZGFibGUiLCJleHBhbmRlZFJvd1JlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/customer/customer-list.tsx\n");

/***/ })

});