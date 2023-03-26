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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/table */ \"./src/components/ui/table.tsx\");\n/* harmony import */ var _components_common_action_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/common/action-buttons */ \"./src/components/common/action-buttons.tsx\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/types */ \"./src/types/index.ts\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar CustomersList = function(param) {\n    var customers = param.customers;\n    var _this1 = _this;\n    _s();\n    // const { data, paginatorInfo } = orders! ?? {};\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)().t;\n    var rowExpandable = function(record) {\n        var ref;\n        return (ref = record.children) === null || ref === void 0 ? void 0 : ref.length;\n    };\n    var alignLeft = useIsRTL().alignLeft;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        sort: _types__WEBPACK_IMPORTED_MODULE_3__.SortOrder.Desc,\n        column: null\n    }), sortingObj = ref1[0], setSortingObj = ref1[1];\n    // const onHeaderClick = (column: string | null) => ({\n    //   onClick: () => {\n    //     onSort((currentSortDirection: SortOrder) =>\n    //       currentSortDirection === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc\n    //     );\n    //     onOrder(column!);\n    //     setSortingObj({\n    //       sort:\n    //         sortingObj.sort === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc,\n    //       column: column,\n    //     });\n    //   },\n    // });\n    var columns = [\n        {\n            title: \"name\",\n            dataIndex: 'name',\n            key: 'name',\n            align: 'center',\n            render: function(name, customers) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-max\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, _this1));\n            }\n        },\n        {\n            title: \"email\",\n            dataIndex: 'email',\n            key: 'email',\n            align: 'center',\n            render: function(email, customers) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-max\",\n                    children: email\n                }, void 0, false, {\n                    fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, _this1));\n            }\n        },\n        {\n            title: \"clearanceFee\",\n            dataIndex: 'clearanceFee',\n            key: 'clearanceFee',\n            align: 'center'\n        },\n        {\n            title: \"airlineFee\",\n            dataIndex: 'airlineFee',\n            key: 'airlineFee',\n            align: 'center'\n        },\n        {\n            title: \"airwayBillPerPcs\",\n            dataIndex: 'airwayBillPerPcs',\n            key: 'airwayBillPerPcs',\n            align: 'center'\n        },\n        {\n            title: \"fteHandlingFee\",\n            dataIndex: 'fteHandlingFee',\n            key: 'fteHandlingFee',\n            align: 'center'\n        },\n        {\n            title: \"cfsRecoveryCharges\",\n            dataIndex: 'cfsRecoveryCharges',\n            key: 'cfsRecoveryCharges',\n            align: 'center'\n        },\n        {\n            title: \"fteMinWeight\",\n            dataIndex: 'fteMinWeight',\n            key: 'fteMinWeight',\n            align: 'center'\n        },\n        {\n            title: \"fteMinCharge\",\n            dataIndex: 'fteMinCharge',\n            key: 'fteMinCharge',\n            align: 'center'\n        },\n        {\n            title: \"cfsMinWeight\",\n            dataIndex: 'cfsMinWeight',\n            key: 'cfsMinWeight',\n            align: 'center'\n        },\n        {\n            title: \"cfsMinCharge\",\n            dataIndex: 'cfsMinCharge',\n            key: 'cfsMinCharge',\n            align: 'center'\n        },\n        {\n            title: \"Service\",\n            dataIndex: 'service',\n            key: 'service',\n            align: 'center',\n            render: function(service, customers) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-max\",\n                    children: service.code\n                }, void 0, false, {\n                    fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 11\n                }, _this1));\n            }\n        },\n        {\n            title: \"Actions\",\n            dataIndex: 'id',\n            key: 'actions',\n            align: 'center',\n            width: 150,\n            render: function(id, services) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_action_buttons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: id,\n                    editUrl: \"\".concat(router.asPath, \"/\").concat(id),\n                    deleteModalView: \"DELETE_CUSTOMER\"\n                }, void 0, false, {\n                    fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                    lineNumber: 156,\n                    columnNumber: 11\n                }, _this1));\n            }\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mb-6 overflow-hidden rounded shadow\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.Table, {\n                //@ts-ignore\n                columns: columns,\n                emptyText: \"No customers available\",\n                data: customers,\n                rowKey: \"id\",\n                scroll: {\n                    x: 1000\n                },\n                expandable: {\n                    expandedRowRender: function() {\n                        return '';\n                    },\n                    rowExpandable: rowExpandable\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n                lineNumber: 169,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/customer/customer-list.tsx\",\n            lineNumber: 168,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(CustomersList, \"dEZa+CdUYCD3mnN6dp5SwaS5evE=\", true, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation\n    ];\n});\n_c = CustomersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomersList);\nvar _c;\n$RefreshReg$(_c, \"CustomersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lci1saXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNkM7QUFDaUI7QUFDUDtBQUNWO0FBQ2I7QUFDTzs7O0FBVXZDLEdBQUssQ0FBQ00sYUFBYSxHQUFHLFFBQ2pCLFFBS1MsQ0FBQztRQUxiQyxTQUFTLFNBQVRBLFNBQVM7OztJQU1ULEVBQWlEO0lBQ2pELEdBQUssQ0FBQ0MsTUFBTSxHQUFHSCxzREFBUztJQUN4QixHQUFLLENBQUdJLENBQUMsR0FBS04sNERBQWMsR0FBcEJNLENBQUM7SUFDVCxHQUFLLENBQUNDLGFBQWEsR0FBRyxRQUFRLENBQVBDLE1BQVc7WUFBS0EsR0FBZTtRQUFmQSxNQUFNLEVBQU5BLEdBQWUsR0FBZkEsTUFBTSxDQUFDQyxRQUFRLGNBQWZELEdBQWUsS0FBZkEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsR0FBZSxDQUFFRSxNQUFNOztJQUM5RCxHQUFLLENBQUdDLFNBQVMsR0FBS0MsUUFBUSxHQUF0QkQsU0FBUztJQUVqQixHQUFLLENBQStCVixJQU1sQyxHQU5rQ0EsK0NBQVEsQ0FHekMsQ0FBQztRQUNGWSxJQUFJLEVBQUVkLGtEQUFjO1FBQ3BCZ0IsTUFBTSxFQUFFLElBQUk7SUFDZCxDQUFDLEdBTk1DLFVBQVUsR0FBbUJmLElBTWxDLEtBTmlCZ0IsYUFBYSxHQUFJaEIsSUFNbEM7SUFFRixFQUFzRDtJQUN0RCxFQUFxQjtJQUNyQixFQUFrRDtJQUNsRCxFQUFpRjtJQUNqRixFQUFTO0lBQ1QsRUFBd0I7SUFFeEIsRUFBc0I7SUFDdEIsRUFBYztJQUNkLEVBQStFO0lBQy9FLEVBQXdCO0lBQ3hCLEVBQVU7SUFDVixFQUFPO0lBQ1AsRUFBTTtJQUVOLEdBQUssQ0FBQ2lCLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztZQUNDQyxLQUFLLEVBQUUsQ0FBTTtZQUNiQyxTQUFTLEVBQUUsQ0FBTTtZQUNqQkMs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RUFBSyxDQUFDO2dCQUMzQyxNQUFNLDZFQUNIbEMseUVBQWE7b0JBQ1ppQyxFQUFFLEVBQUVBLEVBQUU7b0JBQ05FLE9BQU8sRUFBRyxHQUFtQkYsTUFBRSxDQUFuQjFCLE1BQU0sQ0FBQzZCLE1BQU0sRUFBQyxDQUFDLElBQUssT0FBSEgsRUFBRTtvQkFDL0JJLGVBQWUsRUFBQyxDQUFpQjs7Ozs7O1lBR3ZDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU07OEZBRURWLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQXFDO2tHQUNqRDdCLHVEQUFLO2dCQUNKLEVBQVk7Z0JBQ1pxQixPQUFPLEVBQUVBLE9BQU87Z0JBQ2hCa0IsU0FBUyxFQUFDLENBQXdCO2dCQUNsQ0MsSUFBSSxFQUFFakMsU0FBUztnQkFDZmtDLE1BQU0sRUFBQyxDQUFJO2dCQUNYQyxNQUFNLEVBQUUsQ0FBQztvQkFBQ0MsQ0FBQyxFQUFFLElBQUk7Z0JBQUMsQ0FBQztnQkFDbkJDLFVBQVUsRUFBRSxDQUFDO29CQUNYQyxpQkFBaUIsRUFBRSxRQUFRO3dCQUFGLE1BQ25DLENBRG1DLENBQUU7O29CQUMzQm5DLGFBQWEsRUFBRUEsYUFBYTtnQkFDOUIsQ0FBQzs7Ozs7Ozs7Ozs7O0FBZ0JYLENBQUM7R0FsTEtKLGFBQWE7O1FBUUZELGtEQUFTO1FBQ1ZGLHdEQUFjOzs7S0FUeEJHLGFBQWE7QUFvTG5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY3VzdG9tZXIvY3VzdG9tZXItbGlzdC50c3g/YzY2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3RhYmxlJztcbmltcG9ydCBBY3Rpb25CdXR0b25zIGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vYWN0aW9uLWJ1dHRvbnMnO1xuaW1wb3J0IHsgQ3VzdG9tZXIsIFNlcnZpY2VzLCBTb3J0T3JkZXIgfSBmcm9tICdAL3R5cGVzJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG50eXBlIElQcm9wcyA9IHtcbiAgY3VzdG9tZXJzOiBDdXN0b21lcltdIHwgdW5kZWZpbmVkO1xuICAvLyBwYWdpbmF0b3JJbmZvOiBNYXBwZWRQYWdpbmF0b3JJbmZvIHwgbnVsbDtcbiAgLy8gb25QYWdpbmF0aW9uOiAoY3VycmVudDogbnVtYmVyKSA9PiB2b2lkO1xuICAvLyBvblNvcnQ6IChjdXJyZW50OiBhbnkpID0+IHZvaWQ7XG4gIC8vIG9uT3JkZXI6IChjdXJyZW50OiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBDdXN0b21lcnNMaXN0ID0gKHtcbiAgY3VzdG9tZXJzLFxuICAvLyBwYWdpbmF0b3JJbmZvLFxuICAvLyBvblBhZ2luYXRpb24sXG4gIC8vIG9uU29ydCxcbiAgLy8gb25PcmRlcixcbn06IElQcm9wcykgPT4ge1xuICAvLyBjb25zdCB7IGRhdGEsIHBhZ2luYXRvckluZm8gfSA9IG9yZGVycyEgPz8ge307XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IHJvd0V4cGFuZGFibGUgPSAocmVjb3JkOiBhbnkpID0+IHJlY29yZC5jaGlsZHJlbj8ubGVuZ3RoO1xuICBjb25zdCB7IGFsaWduTGVmdCB9ID0gdXNlSXNSVEwoKTtcblxuICBjb25zdCBbc29ydGluZ09iaiwgc2V0U29ydGluZ09ial0gPSB1c2VTdGF0ZTx7XG4gICAgc29ydDogU29ydE9yZGVyO1xuICAgIGNvbHVtbjogc3RyaW5nIHwgbnVsbDtcbiAgfT4oe1xuICAgIHNvcnQ6IFNvcnRPcmRlci5EZXNjLFxuICAgIGNvbHVtbjogbnVsbCxcbiAgfSk7XG5cbiAgLy8gY29uc3Qgb25IZWFkZXJDbGljayA9IChjb2x1bW46IHN0cmluZyB8IG51bGwpID0+ICh7XG4gIC8vICAgb25DbGljazogKCkgPT4ge1xuICAvLyAgICAgb25Tb3J0KChjdXJyZW50U29ydERpcmVjdGlvbjogU29ydE9yZGVyKSA9PlxuICAvLyAgICAgICBjdXJyZW50U29ydERpcmVjdGlvbiA9PT0gU29ydE9yZGVyLkRlc2MgPyBTb3J0T3JkZXIuQXNjIDogU29ydE9yZGVyLkRlc2NcbiAgLy8gICAgICk7XG4gIC8vICAgICBvbk9yZGVyKGNvbHVtbiEpO1xuXG4gIC8vICAgICBzZXRTb3J0aW5nT2JqKHtcbiAgLy8gICAgICAgc29ydDpcbiAgLy8gICAgICAgICBzb3J0aW5nT2JqLnNvcnQgPT09IFNvcnRPcmRlci5EZXNjID8gU29ydE9yZGVyLkFzYyA6IFNvcnRPcmRlci5EZXNjLFxuICAvLyAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0sXG4gIC8vIH0pO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwibmFtZVwiLFxuICAgICAgZGF0YUluZGV4OiAnbmFtZScsXG4gICAgICBrZXk6ICduYW1lJyxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgIHJlbmRlcjogKG5hbWU6IGFueSwgY3VzdG9tZXJzOiBDdXN0b21lcikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1tYXhcIj5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJlbWFpbFwiLFxuICAgICAgZGF0YUluZGV4OiAnZW1haWwnLFxuICAgICAga2V5OiAnZW1haWwnLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgcmVuZGVyOiAoZW1haWw6IGFueSwgY3VzdG9tZXJzOiBDdXN0b21lcikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1tYXhcIj5cbiAgICAgICAgICAgIHtlbWFpbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiY2xlYXJhbmNlRmVlXCIsXG4gICAgICBkYXRhSW5kZXg6ICdjbGVhcmFuY2VGZWUnLFxuICAgICAga2V5OiAnY2xlYXJhbmNlRmVlJyxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcImFpcmxpbmVGZWVcIixcbiAgICAgIGRhdGFJbmRleDogJ2FpcmxpbmVGZWUnLFxuICAgICAga2V5OiAnYWlybGluZUZlZScsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJhaXJ3YXlCaWxsUGVyUGNzXCIsXG4gICAgICBkYXRhSW5kZXg6ICdhaXJ3YXlCaWxsUGVyUGNzJyxcbiAgICAgIGtleTogJ2FpcndheUJpbGxQZXJQY3MnLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiZnRlSGFuZGxpbmdGZWVcIixcbiAgICAgIGRhdGFJbmRleDogJ2Z0ZUhhbmRsaW5nRmVlJyxcbiAgICAgIGtleTogJ2Z0ZUhhbmRsaW5nRmVlJyxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcImNmc1JlY292ZXJ5Q2hhcmdlc1wiLFxuICAgICAgZGF0YUluZGV4OiAnY2ZzUmVjb3ZlcnlDaGFyZ2VzJyxcbiAgICAgIGtleTogJ2Nmc1JlY292ZXJ5Q2hhcmdlcycsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJmdGVNaW5XZWlnaHRcIixcbiAgICAgIGRhdGFJbmRleDogJ2Z0ZU1pbldlaWdodCcsXG4gICAgICBrZXk6ICdmdGVNaW5XZWlnaHQnLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiZnRlTWluQ2hhcmdlXCIsXG4gICAgICBkYXRhSW5kZXg6ICdmdGVNaW5DaGFyZ2UnLFxuICAgICAga2V5OiAnZnRlTWluQ2hhcmdlJyxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcImNmc01pbldlaWdodFwiLFxuICAgICAgZGF0YUluZGV4OiAnY2ZzTWluV2VpZ2h0JyxcbiAgICAgIGtleTogJ2Nmc01pbldlaWdodCcsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJjZnNNaW5DaGFyZ2VcIixcbiAgICAgIGRhdGFJbmRleDogJ2Nmc01pbkNoYXJnZScsXG4gICAgICBrZXk6ICdjZnNNaW5DaGFyZ2UnLFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU2VydmljZVwiLFxuICAgICAgZGF0YUluZGV4OiAnc2VydmljZScsXG4gICAgICBrZXk6ICdzZXJ2aWNlJyxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgIHJlbmRlcjogKHNlcnZpY2U6IGFueSwgY3VzdG9tZXJzOiBDdXN0b21lcikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1tYXhcIj5cbiAgICAgICAgICAgIHtzZXJ2aWNlLmNvZGV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAge1xuICAgICAgdGl0bGU6IFwiQWN0aW9uc1wiLFxuICAgICAgZGF0YUluZGV4OiAnaWQnLFxuICAgICAga2V5OiAnYWN0aW9ucycsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgcmVuZGVyOiAoaWQ6IHN0cmluZywgc2VydmljZXM6IFNlcnZpY2VzKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEFjdGlvbkJ1dHRvbnNcbiAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIGVkaXRVcmw9e2Ake3JvdXRlci5hc1BhdGh9LyR7aWR9YH1cbiAgICAgICAgICAgIGRlbGV0ZU1vZGFsVmlldz1cIkRFTEVURV9DVVNUT01FUlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQgc2hhZG93XCI+XG4gICAgICAgIDxUYWJsZVxuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgZW1wdHlUZXh0PVwiTm8gY3VzdG9tZXJzIGF2YWlsYWJsZVwiXG4gICAgICAgICAgZGF0YT17Y3VzdG9tZXJzfVxuICAgICAgICAgIHJvd0tleT1cImlkXCJcbiAgICAgICAgICBzY3JvbGw9e3sgeDogMTAwMCB9fVxuICAgICAgICAgIGV4cGFuZGFibGU9e3tcbiAgICAgICAgICAgIGV4cGFuZGVkUm93UmVuZGVyOiAoKSA9PiAnJyxcbiAgICAgICAgICAgIHJvd0V4cGFuZGFibGU6IHJvd0V4cGFuZGFibGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2Plxuey8qIFxuICAgICAgeyEhcGFnaW5hdG9ySW5mbz8udG90YWwgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgIHRvdGFsPXtwYWdpbmF0b3JJbmZvPy50b3RhbH1cbiAgICAgICAgICAgIGN1cnJlbnQ9e3BhZ2luYXRvckluZm8/LmN1cnJlbnRQYWdlfVxuICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2luYXRvckluZm8/LnBlclBhZ2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25QYWdpbmF0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX0gKi99XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lcnNMaXN0O1xuIl0sIm5hbWVzIjpbIlRhYmxlIiwiQWN0aW9uQnV0dG9ucyIsIlNvcnRPcmRlciIsInVzZVRyYW5zbGF0aW9uIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJDdXN0b21lcnNMaXN0IiwiY3VzdG9tZXJzIiwicm91dGVyIiwidCIsInJvd0V4cGFuZGFibGUiLCJyZWNvcmQiLCJjaGlsZHJlbiIsImxlbmd0aCIsImFsaWduTGVmdCIsInVzZUlzUlRMIiwic29ydCIsIkRlc2MiLCJjb2x1bW4iLCJzb3J0aW5nT2JqIiwic2V0U29ydGluZ09iaiIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImtleSIsImFsaWduIiwicmVuZGVyIiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImVtYWlsIiwic2VydmljZSIsImNvZGUiLCJ3aWR0aCIsImlkIiwic2VydmljZXMiLCJlZGl0VXJsIiwiYXNQYXRoIiwiZGVsZXRlTW9kYWxWaWV3IiwiZW1wdHlUZXh0IiwiZGF0YSIsInJvd0tleSIsInNjcm9sbCIsIngiLCJleHBhbmRhYmxlIiwiZXhwYW5kZWRSb3dSZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/customer/customer-list.tsx\n");

/***/ })

});