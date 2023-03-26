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
exports.id = "pages/customers/create";
exports.ids = ["pages/customers/create"];
exports.modules = {

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.noSSR = noSSR;\nexports[\"default\"] = dynamic;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ \"./loadable\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst isServerSide = \"undefined\" === 'undefined';\nfunction noSSR(LoadableInitializer, loadableOptions) {\n    // Removing webpack and modules means react-loadable won't try preloading\n    delete loadableOptions.webpack;\n    delete loadableOptions.modules;\n    // This check is necessary to prevent react-loadable from initializing on the server\n    if (!isServerSide) {\n        return LoadableInitializer(loadableOptions);\n    }\n    const Loading = loadableOptions.loading;\n    // This will only be rendered on the server side\n    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {\n            error: null,\n            isLoading: true,\n            pastDelay: false,\n            timedOut: false\n        })\n    ;\n}\nfunction dynamic(dynamicOptions, options) {\n    let loadableFn = _loadable.default;\n    let loadableOptions = {\n        // A loading component is not required, so we default it\n        loading: ({ error , isLoading , pastDelay  })=>{\n            if (!pastDelay) return null;\n            if (true) {\n                if (isLoading) {\n                    return null;\n                }\n                if (error) {\n                    return(/*#__PURE__*/ _react.default.createElement(\"p\", null, error.message, /*#__PURE__*/ _react.default.createElement(\"br\", null), error.stack));\n                }\n            }\n            return null;\n        }\n    };\n    // Support for direct import(), eg: dynamic(import('../hello-world'))\n    // Note that this is only kept for the edge case where someone is passing in a promise as first argument\n    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))\n    // To make sure we don't execute the import without rendering first\n    if (dynamicOptions instanceof Promise) {\n        loadableOptions.loader = ()=>dynamicOptions\n        ;\n    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))\n    } else if (typeof dynamicOptions === 'function') {\n        loadableOptions.loader = dynamicOptions;\n    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})\n    } else if (typeof dynamicOptions === 'object') {\n        loadableOptions = {\n            ...loadableOptions,\n            ...dynamicOptions\n        };\n    }\n    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})\n    loadableOptions = {\n        ...loadableOptions,\n        ...options\n    };\n    const suspenseOptions = loadableOptions;\n    if (true) {\n        // Error if react root is not enabled and `suspense` option is set to true\n        if ( true && suspenseOptions.suspense) {\n            // TODO: add error doc when this feature is stable\n            throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);\n        }\n    }\n    if (suspenseOptions.suspense) {\n        return loadableFn(suspenseOptions);\n    }\n    // coming from build/babel/plugins/react-loadable-plugin.js\n    if (loadableOptions.loadableGenerated) {\n        loadableOptions = {\n            ...loadableOptions,\n            ...loadableOptions.loadableGenerated\n        };\n        delete loadableOptions.loadableGenerated;\n    }\n    // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})\n    if (typeof loadableOptions.ssr === 'boolean') {\n        if (!loadableOptions.ssr) {\n            delete loadableOptions.ssr;\n            return noSSR(loadableFn, loadableOptions);\n        }\n        delete loadableOptions.ssr;\n    }\n    return loadableFn(loadableOptions);\n} //# sourceMappingURL=dynamic.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTtBQUNaQSw4Q0FBNkMsQ0FBQztJQUMxQ0csS0FBSyxFQUFFLElBQUk7QUFDZixDQUFDLEVBQUM7QUFDRkQsYUFBYSxHQUFHRSxLQUFLO0FBQ3JCRixrQkFBZSxHQUFHSSxPQUFPO0FBQ3pCLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTztBQUNuRCxHQUFHLENBQUNDLFNBQVMsR0FBR0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsOEJBQVk7U0FDbERELHNCQUFzQixDQUFDRyxHQUFHLEVBQUUsQ0FBQztJQUNsQyxNQUFNLENBQUNBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFVLEdBQUdELEdBQUcsR0FBRyxDQUFDO1FBQ2xDTixPQUFPLEVBQUVNLEdBQUc7SUFDaEIsQ0FBQztBQUNMLENBQUM7QUFDRCxLQUFLLENBQUNFLFlBQVksR0FBRyxDQUFhLGVBQUssQ0FBVztTQUN6Q1QsS0FBSyxDQUFDVSxtQkFBbUIsRUFBRUMsZUFBZSxFQUFFLENBQUM7SUFDbEQsRUFBeUU7SUFDekUsTUFBTSxDQUFDQSxlQUFlLENBQUNDLE9BQU87SUFDOUIsTUFBTSxDQUFDRCxlQUFlLENBQUNFLE9BQU87SUFDOUIsRUFBb0Y7SUFDcEYsRUFBRSxHQUFHSixZQUFZLEVBQUUsQ0FBQztRQUNoQixNQUFNLENBQUNDLG1CQUFtQixDQUFDQyxlQUFlO0lBQzlDLENBQUM7SUFDRCxLQUFLLENBQUNHLE9BQU8sR0FBR0gsZUFBZSxDQUFDSSxPQUFPO0lBQ3ZDLEVBQWdEO0lBQ2hELE1BQU0sS0FBSyxFQUFhLFlBQUNaLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDZSxhQUFhLENBQUNGLE9BQU8sRUFBRSxDQUFDO1lBQ3hERyxLQUFLLEVBQUUsSUFBSTtZQUNYQyxTQUFTLEVBQUUsSUFBSTtZQUNmQyxTQUFTLEVBQUUsS0FBSztZ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LENBQUNBLGVBQWUsQ0FBQ3lCLEdBQUc7SUFDOUIsQ0FBQztJQUNELE1BQU0sQ0FBQ2IsVUFBVSxDQUFDWixlQUFlO0FBQ3JDLENBQUMsQ0FFa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbWFydmVsL2FkbWluLXJlc3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcz9lMjVkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ub1NTUiA9IG5vU1NSO1xuZXhwb3J0cy5kZWZhdWx0ID0gZHluYW1pYztcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2xvYWRhYmxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkYWJsZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIG5vU1NSKExvYWRhYmxlSW5pdGlhbGl6ZXIsIGxvYWRhYmxlT3B0aW9ucykge1xuICAgIC8vIFJlbW92aW5nIHdlYnBhY2sgYW5kIG1vZHVsZXMgbWVhbnMgcmVhY3QtbG9hZGFibGUgd29uJ3QgdHJ5IHByZWxvYWRpbmdcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2s7XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzO1xuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgcmVhY3QtbG9hZGFibGUgZnJvbSBpbml0aWFsaXppbmcgb24gdGhlIHNlcnZlclxuICAgIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgICAgIHJldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0IExvYWRpbmcgPSBsb2FkYWJsZU9wdGlvbnMubG9hZGluZztcbiAgICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgICByZXR1cm4gKCk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nLCB7XG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICAgICAgICB0aW1lZE91dDogZmFsc2VcbiAgICAgICAgfSlcbiAgICA7XG59XG5mdW5jdGlvbiBkeW5hbWljKGR5bmFtaWNPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgbGV0IGxvYWRhYmxlRm4gPSBfbG9hZGFibGUuZGVmYXVsdDtcbiAgICBsZXQgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxuICAgICAgICBsb2FkaW5nOiAoeyBlcnJvciAsIGlzTG9hZGluZyAsIHBhc3REZWxheSAgfSk9PntcbiAgICAgICAgICAgIGlmICghcGFzdERlbGF5KSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBlcnJvci5tZXNzYWdlLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgZXJyb3Iuc3RhY2spKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbiAgICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XG4gICAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gKCk9PmR5bmFtaWNPcHRpb25zXG4gICAgICAgIDtcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgaW1wb3J0IGFzIGEgZnVuY3Rpb24sIGVnOiBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gZHluYW1pY09wdGlvbnM7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmR5bmFtaWNPcHRpb25zXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIHBhc3Npbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7bG9hZGluZzogKCkgPT4gPHA+TG9hZGluZyBzb21ldGhpbmc8L3A+fSlcbiAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG4gICAgY29uc3Qgc3VzcGVuc2VPcHRpb25zID0gbG9hZGFibGVPcHRpb25zO1xuICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX0NPTkNVUlJFTlRfRkVBVFVSRVMpIHtcbiAgICAgICAgLy8gRXJyb3IgaWYgcmVhY3Qgcm9vdCBpcyBub3QgZW5hYmxlZCBhbmQgYHN1c3BlbnNlYCBvcHRpb24gaXMgc2V0IHRvIHRydWVcbiAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfUkVBQ1RfUk9PVCAmJiBzdXNwZW5zZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGFkZCBlcnJvciBkb2Mgd2hlbiB0aGlzIGZlYXR1cmUgaXMgc3RhYmxlXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3VzcGVuc2Ugb3B0aW9uIHVzYWdlIGluIG5leHQvZHluYW1pYy4gUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLWR5bmFtaWMtc3VzcGVuc2VgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3VzcGVuc2VPcHRpb25zLnN1c3BlbnNlKSB7XG4gICAgICAgIHJldHVybiBsb2FkYWJsZUZuKHN1c3BlbnNlT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXG4gICAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWRcbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZDtcbiAgICB9XG4gICAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pXG4gICAgaWYgKHR5cGVvZiBsb2FkYWJsZU9wdGlvbnMuc3NyID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKCFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICAgICAgICAgIHJldHVybiBub1NTUihsb2FkYWJsZUZuLCBsb2FkYWJsZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgIH1cbiAgICByZXR1cm4gbG9hZGFibGVGbihsb2FkYWJsZU9wdGlvbnMpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm5vU1NSIiwiZGVmYXVsdCIsImR5bmFtaWMiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9sb2FkYWJsZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJpc1NlcnZlclNpZGUiLCJMb2FkYWJsZUluaXRpYWxpemVyIiwibG9hZGFibGVPcHRpb25zIiwid2VicGFjayIsIm1vZHVsZXMiLCJMb2FkaW5nIiwibG9hZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiZHluYW1pY09wdGlvbnMiLCJvcHRpb25zIiwibG9hZGFibGVGbiIsIm1lc3NhZ2UiLCJzdGFjayIsIlByb21pc2UiLCJsb2FkZXIiLCJzdXNwZW5zZU9wdGlvbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0NPTkNVUlJFTlRfRkVBVFVSRVMiLCJfX05FWFRfUkVBQ1RfUk9PVCIsInN1c3BlbnNlIiwiRXJyb3IiLCJsb2FkYWJsZUdlbmVyYXRlZCIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/dynamic.js\n");

/***/ }),

/***/ "./src/components/layouts/app.tsx":
/*!****************************************!*\
  !*** ./src/components/layouts/app.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constants */ \"./src/utils/constants.ts\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AdminLayout = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"src_components_layouts_admin_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/layouts/admin */ \"./src/components/layouts/admin/index.tsx\"))\n, {\n    loadableGenerated: {\n        modules: [\n            \"../components/layouts/app.tsx -> \" + \"@/components/layouts/admin\"\n        ]\n    }\n});\nconst OwnerLayout = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"src_components_layouts_owner_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/layouts/owner */ \"./src/components/layouts/owner/index.tsx\"))\n, {\n    loadableGenerated: {\n        modules: [\n            \"../components/layouts/app.tsx -> \" + \"@/components/layouts/owner\"\n        ]\n    }\n});\nfunction AppLayout({ userPermissions , ...props }) {\n    if (userPermissions === null || userPermissions === void 0 ? void 0 : userPermissions.includes(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.ADMIN)) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AdminLayout, {\n            ...props\n        }, void 0, false, {\n            fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/layouts/app.tsx\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, this));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OwnerLayout, {\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/components/layouts/app.tsx\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUNQO0FBRWxDLEtBQUssQ0FBQ0UsV0FBVyxHQUFHRCxtREFBTyxLQUFPLGlOQUFtQzs7Ozs7Ozs7QUFDckUsS0FBSyxDQUFDRSxXQUFXLEdBQUdGLG1EQUFPLEtBQU8saU5BQW1DOzs7Ozs7OztBQUV0RCxRQUFRLENBQUNHLFNBQVMsQ0FBQyxDQUFDLENBQ2pDQyxlQUFlLE1BQ1pDLEtBQUssQ0FHVixDQUFDLEVBQUUsQ0FBQztJQUNGLEVBQUUsRUFBRUQsZUFBZSxhQUFmQSxlQUFlLEtBQWZBLElBQUksQ0FBSkEsQ0FBeUIsR0FBekJBLElBQUksQ0FBSkEsQ0FBeUIsR0FBekJBLGVBQWUsQ0FBRUUsUUFBUSxDQUFDUCxtREFBSyxHQUFHLENBQUM7UUFDckMsTUFBTSw2RUFBRUUsV0FBVztlQUFLSSxLQUFLOzs7Ozs7SUFDL0IsQ0FBQztJQUNELE1BQU0sNkVBQUVILFdBQVc7V0FBS0csS0FBSzs7Ozs7O0FBQy9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbWFydmVsL2FkbWluLXJlc3QvLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL2FwcC50c3g/ZGJjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBRE1JTiB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5cbmNvbnN0IEFkbWluTGF5b3V0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0AvY29tcG9uZW50cy9sYXlvdXRzL2FkbWluJykpO1xuY29uc3QgT3duZXJMYXlvdXQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnQC9jb21wb25lbnRzL2xheW91dHMvb3duZXInKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcExheW91dCh7XG4gIHVzZXJQZXJtaXNzaW9ucyxcbiAgLi4ucHJvcHNcbn06IHtcbiAgdXNlclBlcm1pc3Npb25zOiBzdHJpbmdbXTtcbn0pIHtcbiAgaWYgKHVzZXJQZXJtaXNzaW9ucz8uaW5jbHVkZXMoQURNSU4pKSB7XG4gICAgcmV0dXJuIDxBZG1pbkxheW91dCB7Li4ucHJvcHN9IC8+O1xuICB9XG4gIHJldHVybiA8T3duZXJMYXlvdXQgey4uLnByb3BzfSAvPjtcbn1cbiJdLCJuYW1lcyI6WyJBRE1JTiIsImR5bmFtaWMiLCJBZG1pbkxheW91dCIsIk93bmVyTGF5b3V0IiwiQXBwTGF5b3V0IiwidXNlclBlcm1pc3Npb25zIiwicHJvcHMiLCJpbmNsdWRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layouts/app.tsx\n");

/***/ }),

/***/ "./src/config/routes.ts":
/*!******************************!*\
  !*** ./src/config/routes.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Routes\": () => (/* binding */ Routes)\n/* harmony export */ });\nconst Routes = {\n    dashboard: '/',\n    login: '/login',\n    logout: '/logout',\n    settings: '/settings',\n    services: '/services',\n    customers: '/customers'\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3JvdXRlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sS0FBSyxDQUFDQSxNQUFNLEdBQUcsQ0FBQztJQUNyQkMsU0FBUyxFQUFFLENBQUc7SUFDZEMsS0FBSyxFQUFFLENBQVE7SUFDZkMsTUFBTSxFQUFFLENBQVM7SUFDakJDLFFBQVEsRUFBRSxDQUFXO0lBQ3JCQyxRQUFRLEVBQUUsQ0FBVztJQUNyQkMsU0FBUyxFQUFFLENBQVk7QUFDekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BtYXJ2ZWwvYWRtaW4tcmVzdC8uL3NyYy9jb25maWcvcm91dGVzLnRzP2YzYzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFJvdXRlcyA9IHtcbiAgZGFzaGJvYXJkOiAnLycsXG4gIGxvZ2luOiAnL2xvZ2luJyxcbiAgbG9nb3V0OiAnL2xvZ291dCcsXG4gIHNldHRpbmdzOiAnL3NldHRpbmdzJyxcbiAgc2VydmljZXM6ICcvc2VydmljZXMnLFxuICBjdXN0b21lcnM6ICcvY3VzdG9tZXJzJyxcbn1cbiJdLCJuYW1lcyI6WyJSb3V0ZXMiLCJkYXNoYm9hcmQiLCJsb2dpbiIsImxvZ291dCIsInNldHRpbmdzIiwic2VydmljZXMiLCJjdXN0b21lcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/routes.ts\n");

/***/ }),

/***/ "./src/pages/customers/create.tsx":
/*!****************************************!*\
  !*** ./src/pages/customers/create.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Service),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/auth-utils */ \"./src/utils/auth-utils.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/constants */ \"./src/utils/constants.ts\");\n/* harmony import */ var _components_layouts_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/layouts/app */ \"./src/components/layouts/app.tsx\");\n/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/routes */ \"./src/config/routes.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_auth_utils__WEBPACK_IMPORTED_MODULE_2__]);\n_utils_auth_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst CreateOrUpdateCustomers = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"src_components_customer_customer-form_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/customer/customer-form */ \"./src/components/customer/customer-form.tsx\"))\n, {\n    loadableGenerated: {\n        modules: [\n            \"customers/create.tsx -> \" + \"@/components/customer/customer-form\"\n        ]\n    }\n});\nfunction Service({ userPermissions  }) {\n    if (userPermissions === null || userPermissions === void 0 ? void 0 : userPermissions.includes(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ADMIN)) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CreateOrUpdateCustomers, {}, void 0, false, {\n            fileName: \"/Users/kashifmahmood/Documents/FastTrack/fasttrackclient/src/pages/customers/create.tsx\",\n            lineNumber: 22,\n            columnNumber: 12\n        }, this));\n    }\n};\nService.Layout = _components_layouts_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nconst getServerSideProps = async (ctx)=>{\n    // TODO: Improve it\n    const { token , permissions  } = (0,_utils_auth_utils__WEBPACK_IMPORTED_MODULE_2__.getAuthCredentials)(ctx);\n    if (!(0,_utils_auth_utils__WEBPACK_IMPORTED_MODULE_2__.isAuthenticated)({\n        token,\n        permissions\n    }) || !(0,_utils_auth_utils__WEBPACK_IMPORTED_MODULE_2__.hasAccess)(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_2__.allowedRoles, permissions)) {\n        return {\n            redirect: {\n                destination: _config_routes__WEBPACK_IMPORTED_MODULE_5__.Routes.login,\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {\n            userPermissions: permissions\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY3VzdG9tZXJzL2NyZWF0ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFPUDtBQUNjO0FBQ087QUFDUjtBQUd4QyxLQUFLLENBQUNRLHVCQUF1QixHQUFHUixtREFBTyxLQUFPLGdPQUE0Qzs7Ozs7Ozs7QUFFM0UsUUFBUSxDQUFDUyxPQUFPLENBQUMsQ0FBQyxDQUMvQkMsZUFBZSxFQUdqQixDQUFDLEVBQUUsQ0FBQztJQUNGLEVBQUUsRUFBRUEsZUFBZSxhQUFmQSxlQUFlLEtBQWZBLElBQUksQ0FBSkEsQ0FBeUIsR0FBekJBLElBQUksQ0FBSkEsQ0FBeUIsR0FBekJBLGVBQWUsQ0FBRUMsUUFBUSxDQUFDTixtREFBSyxHQUFHLENBQUM7UUFDckMsTUFBTSw2RUFBRUcsdUJBQXVCOzs7OztJQUNqQyxDQUFDO0FBQ0gsQ0FBQztBQUVEQyxPQUFPLENBQUNHLE1BQU0sR0FBR04sK0RBQVM7QUFFbkIsS0FBSyxDQUFDTyxrQkFBa0IsVUFBOEJDLEdBQUcsR0FBSyxDQUFDO0lBQ3BFLEVBQW1CO0lBQ25CLEtBQUssQ0FBQyxDQUFDLENBQUNDLEtBQUssR0FBRUMsV0FBVyxFQUFDLENBQUMsR0FBR2QscUVBQWtCLENBQUNZLEdBQUc7SUFDckQsRUFBRSxHQUNDVixrRUFBZSxDQUFDLENBQUM7UUFBQ1csS0FBSztRQUFFQyxXQUFXO0lBQUMsQ0FBQyxNQUN0Q2IsNERBQVMsQ0FBQ0YsMkRBQVksRUFBRWUsV0FBVyxHQUNwQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLENBQUM7WUFDTkMsUUFBUSxFQUFFLENBQUM7Z0JBQ1RDLFdBQVcsRUFBRVgsd0RBQVk7Z0JBQ3pCYSxTQUFTLEVBQUUsS0FBSztZQUNsQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBQztRQUNOQyxLQUFLLEVBQUUsQ0FBQztZQUNOWCxlQUFlLEVBQUVNLFdBQVc7UUFDOUIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQG1hcnZlbC9hZG1pbi1yZXN0Ly4vc3JjL3BhZ2VzL2N1c3RvbWVycy9jcmVhdGUudHN4PzQyZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB0eXBlIHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQge1xuICBhbGxvd2VkUm9sZXMsXG4gIGdldEF1dGhDcmVkZW50aWFscyxcbiAgaGFzQWNjZXNzLFxuICBpc0F1dGhlbnRpY2F0ZWQsXG59IGZyb20gJ0AvdXRpbHMvYXV0aC11dGlscyc7XG5pbXBvcnQgeyBBRE1JTiB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL2xheW91dHMvYXBwJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0AvY29uZmlnL3JvdXRlcyc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAL2NvbmZpZyc7XG5cbmNvbnN0IENyZWF0ZU9yVXBkYXRlQ3VzdG9tZXJzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0AvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lci1mb3JtJykpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlKHtcbiAgdXNlclBlcm1pc3Npb25zLFxufToge1xuICB1c2VyUGVybWlzc2lvbnM6IHN0cmluZ1tdO1xufSkge1xuICBpZiAodXNlclBlcm1pc3Npb25zPy5pbmNsdWRlcyhBRE1JTikpIHtcbiAgICByZXR1cm4gPENyZWF0ZU9yVXBkYXRlQ3VzdG9tZXJzIC8+O1xuICB9XG59XG5cblNlcnZpY2UuTGF5b3V0ID0gQXBwTGF5b3V0O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIC8vIFRPRE86IEltcHJvdmUgaXRcbiAgY29uc3QgeyB0b2tlbiwgcGVybWlzc2lvbnMgfSA9IGdldEF1dGhDcmVkZW50aWFscyhjdHgpO1xuICBpZiAoXG4gICAgIWlzQXV0aGVudGljYXRlZCh7IHRva2VuLCBwZXJtaXNzaW9ucyB9KSB8fFxuICAgICFoYXNBY2Nlc3MoYWxsb3dlZFJvbGVzLCBwZXJtaXNzaW9ucylcbiAgKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBSb3V0ZXMubG9naW4sXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdXNlclBlcm1pc3Npb25zOiBwZXJtaXNzaW9ucyxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwiYWxsb3dlZFJvbGVzIiwiZ2V0QXV0aENyZWRlbnRpYWxzIiwiaGFzQWNjZXNzIiwiaXNBdXRoZW50aWNhdGVkIiwiQURNSU4iLCJBcHBMYXlvdXQiLCJSb3V0ZXMiLCJDcmVhdGVPclVwZGF0ZUN1c3RvbWVycyIsIlNlcnZpY2UiLCJ1c2VyUGVybWlzc2lvbnMiLCJpbmNsdWRlcyIsIkxheW91dCIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsInRva2VuIiwicGVybWlzc2lvbnMiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwibG9naW4iLCJwZXJtYW5lbnQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/customers/create.tsx\n");

/***/ }),

/***/ "./src/utils/auth-utils.ts":
/*!*********************************!*\
  !*** ./src/utils/auth-utils.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allowedRoles\": () => (/* binding */ allowedRoles),\n/* harmony export */   \"adminOnly\": () => (/* binding */ adminOnly),\n/* harmony export */   \"setAuthCredentials\": () => (/* binding */ setAuthCredentials),\n/* harmony export */   \"getAuthCredentials\": () => (/* binding */ getAuthCredentials),\n/* harmony export */   \"parseSSRCookie\": () => (/* binding */ parseSSRCookie),\n/* harmony export */   \"hasAccess\": () => (/* binding */ hasAccess),\n/* harmony export */   \"isAuthenticated\": () => (/* binding */ isAuthenticated)\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/utils/constants.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst allowedRoles = [\n    _constants__WEBPACK_IMPORTED_MODULE_2__.OFFICE,\n    _constants__WEBPACK_IMPORTED_MODULE_2__.ADMIN,\n    _constants__WEBPACK_IMPORTED_MODULE_2__.VIEW\n];\nconst adminOnly = [\n    _constants__WEBPACK_IMPORTED_MODULE_2__.ADMIN\n];\nfunction setAuthCredentials(permissions, token) {\n    js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(_constants__WEBPACK_IMPORTED_MODULE_2__.AUTH_CRED, JSON.stringify({\n        token,\n        permissions\n    }));\n}\nfunction getAuthCredentials(context) {\n    let authCred;\n    if (context) {\n        authCred = parseSSRCookie(context)[_constants__WEBPACK_IMPORTED_MODULE_2__.AUTH_CRED];\n    } else {\n        authCred = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(_constants__WEBPACK_IMPORTED_MODULE_2__.AUTH_CRED);\n    }\n    if (authCred) {\n        return JSON.parse(authCred);\n    }\n    return {\n        permissions: null,\n        token: null\n    };\n}\nfunction parseSSRCookie(context) {\n    var _cookie;\n    return cookie__WEBPACK_IMPORTED_MODULE_1___default().parse((_cookie = context.req.headers.cookie) !== null && _cookie !== void 0 ? _cookie : '');\n}\nfunction hasAccess(_allowedRoles, _userPermissions) {\n    if (_userPermissions) {\n        return Boolean(_allowedRoles === null || _allowedRoles === void 0 ? void 0 : _allowedRoles.find((aRole)=>_userPermissions.includes(aRole)\n        ));\n    }\n    return false;\n}\nfunction isAuthenticated(_cookies) {\n    return !!_cookies[_constants__WEBPACK_IMPORTED_MODULE_2__.TOKEN] && Array.isArray(_cookies[_constants__WEBPACK_IMPORTED_MODULE_2__.PERMISSIONS]) && !!_cookies[_constants__WEBPACK_IMPORTED_MODULE_2__.PERMISSIONS].length;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXV0aC11dGlscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNBO0FBUVY7QUFFYixLQUFLLENBQUNRLFlBQVksR0FBRyxDQUFDSjtJQUFBQSw4Q0FBTTtJQUFFRiw2Q0FBSztJQUFFRyw0Q0FBSTtBQUFBLENBQUM7QUFDMUMsS0FBSyxDQUFDSSxTQUFTLEdBQUcsQ0FBQ1A7SUFBQUEsNkNBQUs7QUFBQSxDQUFDO0FBRXpCLFNBQVNRLGtCQUFrQixDQUFDQyxXQUFxQixFQUFFQyxLQUFhLEVBQUUsQ0FBQztJQUN4RVoscURBQVUsQ0FBQ0csaURBQVMsRUFBRVcsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztRQUFDSCxLQUFLO1FBQUVELFdBQVc7SUFBQyxDQUFDO0FBQzdELENBQUM7QUFFTSxTQUFTSyxrQkFBa0IsQ0FBQ0MsT0FBYSxFQUc5QyxDQUFDO0lBQ0QsR0FBRyxDQUFDQyxRQUFRO0lBQ1osRUFBRSxFQUFFRCxPQUFPLEVBQUUsQ0FBQztRQUNaQyxRQUFRLEdBQUdDLGNBQWMsQ0FBQ0YsT0FBTyxFQUFFZCxpREFBUztJQUM5QyxDQUFDLE1BQU0sQ0FBQztRQUNOZSxRQUFRLEdBQUdsQixxREFBVSxDQUFDRyxpREFBUztJQUNqQyxDQUFDO0lBQ0QsRUFBRSxFQUFFZSxRQUFRLEVBQUUsQ0FBQztRQUNiLE1BQU0sQ0FBQ0osSUFBSSxDQUFDTyxLQUFLLENBQUNILFFBQVE7SUFDNUIsQ0FBQztJQUNELE1BQU0sQ0FBQyxDQUFDO1FBQUNQLFdBQVcsRUFBRSxJQUFJO1FBQUVDLEtBQUssRUFBRSxJQUFJO0lBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRU0sU0FBU08sY0FBYyxDQUFDRixPQUFZLEVBQUUsQ0FBQztRQUNyQkEsT0FBMEI7SUFBakQsTUFBTSxDQUFDaEIsbURBQWUsRUFBQ2dCLE9BQTBCLEdBQTFCQSxPQUFPLENBQUNLLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLGNBQTFCUCxPQUEwQixjQUExQkEsT0FBMEIsR0FBSSxDQUFFO0FBQ3pELENBQUM7QUFFTSxTQUFTUSxTQUFTLENBQ3ZCQyxhQUF1QixFQUN2QkMsZ0JBQTZDLEVBQzdDLENBQUM7SUFDRCxFQUFFLEVBQUVBLGdCQUFnQixFQUFFLENBQUM7UUFDckIsTUFBTSxDQUFDQyxPQUFPLENBQ1pGLGFBQWEsYUFBYkEsYUFBYSxLQUFiQSxJQUFJLENBQUpBLENBQW1CLEdBQW5CQSxJQUFJLENBQUpBLENBQW1CLEdBQW5CQSxhQUFhLENBQUVHLElBQUksRUFBRUMsS0FBSyxHQUFLSCxnQkFBZ0IsQ0FBQ0ksUUFBUSxDQUFDRCxLQUFLOztJQUVsRSxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUs7QUFDZCxDQUFDO0FBQ00sU0FBU0UsZUFBZSxDQUFDQyxRQUFhLEVBQUUsQ0FBQztJQUM5QyxNQUFNLEdBQ0ZBLFFBQVEsQ0FBQzFCLDZDQUFLLEtBQ2hCMkIsS0FBSyxDQUFDQyxPQUFPLENBQUNGLFFBQVEsQ0FBQzNCLG1EQUFXLFFBQ2hDMkIsUUFBUSxDQUFDM0IsbURBQVcsRUFBRThCLE1BQU07QUFFbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BtYXJ2ZWwvYWRtaW4tcmVzdC8uL3NyYy91dGlscy9hdXRoLXV0aWxzLnRzPzA4NDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IFNTUkNvb2tpZSBmcm9tICdjb29raWUnO1xuaW1wb3J0IHtcbiAgQURNSU4sXG4gIEFVVEhfQ1JFRCxcbiAgT0ZGSUNFLFxuICBWSUVXLFxuICBQRVJNSVNTSU9OUyxcbiAgVE9LRU4sXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGFsbG93ZWRSb2xlcyA9IFtPRkZJQ0UsIEFETUlOLCBWSUVXXTtcbmV4cG9ydCBjb25zdCBhZG1pbk9ubHkgPSBbQURNSU5dO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXV0aENyZWRlbnRpYWxzKHBlcm1pc3Npb25zOiBzdHJpbmdbXSwgdG9rZW46IHN0cmluZykge1xuICBDb29raWUuc2V0KEFVVEhfQ1JFRCwgSlNPTi5zdHJpbmdpZnkoeyB0b2tlbiwgcGVybWlzc2lvbnMgfSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXV0aENyZWRlbnRpYWxzKGNvbnRleHQ/OiBhbnkpOiB7XG4gIHBlcm1pc3Npb25zOiBzdHJpbmdbXSB8IG51bGw7XG4gIHRva2VuOiBzdHJpbmcgfCBudWxsXG59IHtcbiAgbGV0IGF1dGhDcmVkO1xuICBpZiAoY29udGV4dCkge1xuICAgIGF1dGhDcmVkID0gcGFyc2VTU1JDb29raWUoY29udGV4dClbQVVUSF9DUkVEXTtcbiAgfSBlbHNlIHtcbiAgICBhdXRoQ3JlZCA9IENvb2tpZS5nZXQoQVVUSF9DUkVEKTtcbiAgfVxuICBpZiAoYXV0aENyZWQpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShhdXRoQ3JlZCk7XG4gIH1cbiAgcmV0dXJuIHsgcGVybWlzc2lvbnM6IG51bGwsIHRva2VuOiBudWxsIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNTUkNvb2tpZShjb250ZXh0OiBhbnkpIHtcbiAgcmV0dXJuIFNTUkNvb2tpZS5wYXJzZShjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA/PyAnJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNBY2Nlc3MoXG4gIF9hbGxvd2VkUm9sZXM6IHN0cmluZ1tdLFxuICBfdXNlclBlcm1pc3Npb25zOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB8IG51bGxcbikge1xuICBpZiAoX3VzZXJQZXJtaXNzaW9ucykge1xuICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgX2FsbG93ZWRSb2xlcz8uZmluZCgoYVJvbGUpID0+IF91c2VyUGVybWlzc2lvbnMuaW5jbHVkZXMoYVJvbGUpKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXV0aGVudGljYXRlZChfY29va2llczogYW55KSB7XG4gIHJldHVybiAoXG4gICAgISFfY29va2llc1tUT0tFTl0gJiZcbiAgICBBcnJheS5pc0FycmF5KF9jb29raWVzW1BFUk1JU1NJT05TXSkgJiZcbiAgICAhIV9jb29raWVzW1BFUk1JU1NJT05TXS5sZW5ndGhcbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDb29raWUiLCJTU1JDb29raWUiLCJBRE1JTiIsIkFVVEhfQ1JFRCIsIk9GRklDRSIsIlZJRVciLCJQRVJNSVNTSU9OUyIsIlRPS0VOIiwiYWxsb3dlZFJvbGVzIiwiYWRtaW5Pbmx5Iiwic2V0QXV0aENyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiLCJ0b2tlbiIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRBdXRoQ3JlZGVudGlhbHMiLCJjb250ZXh0IiwiYXV0aENyZWQiLCJwYXJzZVNTUkNvb2tpZSIsImdldCIsInBhcnNlIiwicmVxIiwiaGVhZGVycyIsImNvb2tpZSIsImhhc0FjY2VzcyIsIl9hbGxvd2VkUm9sZXMiLCJfdXNlclBlcm1pc3Npb25zIiwiQm9vbGVhbiIsImZpbmQiLCJhUm9sZSIsImluY2x1ZGVzIiwiaXNBdXRoZW50aWNhdGVkIiwiX2Nvb2tpZXMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/auth-utils.ts\n");

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LIMIT\": () => (/* binding */ LIMIT),\n/* harmony export */   \"ADMIN\": () => (/* binding */ ADMIN),\n/* harmony export */   \"OFFICE\": () => (/* binding */ OFFICE),\n/* harmony export */   \"VIEW\": () => (/* binding */ VIEW),\n/* harmony export */   \"TOKEN\": () => (/* binding */ TOKEN),\n/* harmony export */   \"PERMISSIONS\": () => (/* binding */ PERMISSIONS),\n/* harmony export */   \"AUTH_CRED\": () => (/* binding */ AUTH_CRED)\n/* harmony export */ });\nconst LIMIT = 10;\nconst ADMIN = 'ADMIN';\nconst OFFICE = 'OFFICE';\nconst VIEW = 'VIEW';\nconst TOKEN = 'token';\nconst PERMISSIONS = 'permissions';\nconst AUTH_CRED = 'AUTH_CRED';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY29uc3RhbnRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxLQUFLLENBQUNBLEtBQUssR0FBRyxFQUFFO0FBQ2hCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLENBQU87QUFDckIsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBUTtBQUN2QixLQUFLLENBQUNDLElBQUksR0FBRyxDQUFNO0FBQ25CLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLENBQU87QUFDckIsS0FBSyxDQUFDQyxXQUFXLEdBQUcsQ0FBYTtBQUNqQyxLQUFLLENBQUNDLFNBQVMsR0FBRyxDQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQG1hcnZlbC9hZG1pbi1yZXN0Ly4vc3JjL3V0aWxzL2NvbnN0YW50cy50cz8wNTg4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBMSU1JVCA9IDEwO1xuZXhwb3J0IGNvbnN0IEFETUlOID0gJ0FETUlOJztcbmV4cG9ydCBjb25zdCBPRkZJQ0UgPSAnT0ZGSUNFJztcbmV4cG9ydCBjb25zdCBWSUVXID0gJ1ZJRVcnO1xuZXhwb3J0IGNvbnN0IFRPS0VOID0gJ3Rva2VuJztcbmV4cG9ydCBjb25zdCBQRVJNSVNTSU9OUyA9ICdwZXJtaXNzaW9ucyc7XG5leHBvcnQgY29uc3QgQVVUSF9DUkVEID0gJ0FVVEhfQ1JFRCc7Il0sIm5hbWVzIjpbIkxJTUlUIiwiQURNSU4iLCJPRkZJQ0UiLCJWSUVXIiwiVE9LRU4iLCJQRVJNSVNTSU9OUyIsIkFVVEhfQ1JFRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/constants.ts\n");

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ \"./node_modules/next/dist/shared/lib/dynamic.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHVIQUFxRCIsInNvdXJjZXMiOlsid2VicGFjazovL0BtYXJ2ZWwvYWRtaW4tcmVzdC8uL25vZGVfbW9kdWxlcy9uZXh0L2R5bmFtaWMuanM/NzNkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dynamic.js\n");

/***/ }),

/***/ "@reach/portal":
/*!********************************!*\
  !*** external "@reach/portal" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reach/portal");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "body-scroll-lock":
/*!***********************************!*\
  !*** external "body-scroll-lock" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-scroll-lock");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ "next/dist/compiled/react-is":
/*!**********************************************!*\
  !*** external "next/dist/compiled/react-is" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-is");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/detect-domain-locale":
/*!********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/detect-domain-locale.js" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../shared/lib/image-config-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/image-config-context.js" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ "../shared/lib/is-plain-object":
/*!**********************************************************!*\
  !*** external "next/dist/shared/lib/is-plain-object.js" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/get-middleware-regex":
/*!****************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-middleware-regex.js" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/resolve-rewrites":
/*!************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/resolve-rewrites.js" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "overlayscrollbars-react":
/*!******************************************!*\
  !*** external "overlayscrollbars-react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-select");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ "@headlessui/react":
/*!************************************!*\
  !*** external "@headlessui/react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ "@hookform/resolvers/yup":
/*!******************************************!*\
  !*** external "@hookform/resolvers/yup" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ "tiny-invariant":
/*!*********************************!*\
  !*** external "tiny-invariant" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("tiny-invariant");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/customers/create.tsx"));
module.exports = __webpack_exports__;

})();