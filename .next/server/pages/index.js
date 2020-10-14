module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/health-article/health-article.tsx":
/*!***********************************************!*\
  !*** ./src/health-article/health-article.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HealthArticle; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ \"marked\");\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-system */ \"react-grid-system\");\n/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/machd/Documents/protalk-nextjs-app/src/health-article/health-article.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction HealthArticle({\n  blog_content\n}) {\n  const renderer = new marked__WEBPACK_IMPORTED_MODULE_1___default.a.Renderer();\n  const heading = `#  Health Article`;\n  const content = ` \n<u></u>  \n\n<div class=\"banner-image\"> \n\n![banner](https://i.ibb.co/t4yYFr6/image-28.png)\n</div>\n\n> #  If You Really Want to Optimize Your Diet, Focus on Fiber\n<div class=\"profile-img\">![banner](https://i.ibb.co/b5JPXV4/Image-216.png)</div> | <div class=\"profile-name\">Arjun Sharma</div><div class=\"profile-role\">Diet Expert</div> |\n---| ---|\n|   |\n  \n<u></u>\n \t\t<div class=\"content-text\">There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn’s disease,” Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet and health data collected from roughly 170,000 women over a period of more than 26 years. It found that those women who landed in the top fifth of the population in terms of fiber intakes were 40% less likely to have been diagnosed with Crohn’s disease than women who landed in the bottom fifth.\n</div>\n`;\n\n  const Previewer = props => {\n    return __jsx(\"div\", {\n      id: \"previewer\",\n      dangerouslySetInnerHTML: {\n        __html: marked__WEBPACK_IMPORTED_MODULE_1___default()(props.markdown, {\n          renderer: renderer\n        })\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 4\n      }\n    });\n  };\n\n  const PreviewerHead = props => {\n    return __jsx(\"div\", {\n      id: \"previewer\",\n      dangerouslySetInnerHTML: {\n        __html: marked__WEBPACK_IMPORTED_MODULE_1___default()(props.markdown, {\n          renderer: renderer\n        })\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 4\n      }\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 3\n    }\n  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 4\n    }\n  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    sm: 12,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(\"section\", {\n    className: \"section-box\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 6\n    }\n  }, __jsx(\"div\", {\n    className: \"section-header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"heading-box\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 8\n    }\n  }, __jsx(\"svg\", {\n    width: \"24\",\n    height: \"25\",\n    viewBox: \"0 0 24 25\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, __jsx(\"path\", {\n    d: \"M19 12.9922H5\",\n    stroke: \"black\",\n    \"stroke-opacity\": \"0.85\",\n    \"stroke-width\": \"2\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 10\n    }\n  }), __jsx(\"path\", {\n    d: \"M12 19.9922L5 12.9922L12 5.99219\",\n    stroke: \"black\",\n    \"stroke-opacity\": \"0.85\",\n    \"stroke-width\": \"2\",\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 10\n    }\n  })), __jsx(PreviewerHead, {\n    markdown: heading,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"header-action\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 8\n    }\n  }, __jsx(\"svg\", {\n    width: \"12\",\n    height: \"25\",\n    viewBox: \"0 0 12 25\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(\"path\", {\n    \"fill-rule\": \"evenodd\",\n    \"clip-rule\": \"evenodd\",\n    d: \"M6 8.99219C7.1 8.99219 8 8.09219 8 6.99219C8 5.89219 7.1 4.99219 6 4.99219C4.9 4.99219 4 5.89219 4 6.99219C4 8.09219 4.9 8.99219 6 8.99219ZM6 10.9922C4.9 10.9922 4 11.8922 4 12.9922C4 14.0922 4.9 14.9922 6 14.9922C7.1 14.9922 8 14.0922 8 12.9922C8 11.8922 7.1 10.9922 6 10.9922ZM6 16.9922C4.9 16.9922 4 17.8922 4 18.9922C4 20.0922 4.9 20.9922 6 20.9922C7.1 20.9922 8 20.0922 8 18.9922C8 17.8922 7.1 16.9922 6 16.9922Z\",\n    fill: \"black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 10\n    }\n  })))), __jsx(Previewer, {\n    markdown: blog_content,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  })))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVhbHRoLWFydGljbGUvaGVhbHRoLWFydGljbGUudHN4PzU1MjEiXSwibmFtZXMiOlsiSGVhbHRoQXJ0aWNsZSIsImJsb2dfY29udGVudCIsInJlbmRlcmVyIiwibWFya2VkIiwiUmVuZGVyZXIiLCJoZWFkaW5nIiwiY29udGVudCIsIlByZXZpZXdlciIsInByb3BzIiwiX19odG1sIiwibWFya2Rvd24iLCJQcmV2aWV3ZXJIZWFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxDQUF1QjtBQUFFQztBQUFGLENBQXZCLEVBQXlDO0FBQ3ZELFFBQU1DLFFBQVEsR0FBRyxJQUFJQyw2Q0FBTSxDQUFDQyxRQUFYLEVBQWpCO0FBQ0EsUUFBTUMsT0FBTyxHQUFJLG1CQUFqQjtBQUNBLFFBQU1DLE9BQU8sR0FBSTs7Ozs7Ozs7Ozs7Ozs7OztDQUFqQjs7QUFpQkEsUUFBTUMsU0FBUyxHQUFHQyxLQUFLLElBQUk7QUFDMUIsV0FDQztBQUNDLFFBQUUsRUFBQyxXQURKO0FBRUMsNkJBQXVCLEVBQUU7QUFDeEJDLGNBQU0sRUFBRU4sNkNBQU0sQ0FBQ0ssS0FBSyxDQUFDRSxRQUFQLEVBQWlCO0FBQUVSLGtCQUFRLEVBQUVBO0FBQVosU0FBakI7QUFEVSxPQUYxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQ7QUFRQSxHQVREOztBQVVBLFFBQU1TLGFBQWEsR0FBR0gsS0FBSyxJQUFJO0FBQzlCLFdBQ0M7QUFDQyxRQUFFLEVBQUMsV0FESjtBQUVDLDZCQUF1QixFQUFFO0FBQ3hCQyxjQUFNLEVBQUVOLDZDQUFNLENBQUNLLEtBQUssQ0FBQ0UsUUFBUCxFQUFpQjtBQUFFUixrQkFBUSxFQUFFQTtBQUFaLFNBQWpCO0FBRFUsT0FGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUREO0FBUUEsR0FURDs7QUFVQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFEQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQVMsYUFBUyxFQUFDLGFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxTQUFLLEVBQUMsSUFEUDtBQUVDLFVBQU0sRUFBQyxJQUZSO0FBR0MsV0FBTyxFQUFDLFdBSFQ7QUFJQyxRQUFJLEVBQUMsTUFKTjtBQUtDLFNBQUssRUFBQyw0QkFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0M7QUFDQyxLQUFDLEVBQUMsZUFESDtBQUVDLFVBQU0sRUFBQyxPQUZSO0FBR0Msc0JBQWUsTUFIaEI7QUFJQyxvQkFBYSxHQUpkO0FBS0Msc0JBQWUsT0FMaEI7QUFNQyx1QkFBZ0IsT0FOakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBELEVBZUM7QUFDQyxLQUFDLEVBQUMsa0NBREg7QUFFQyxVQUFNLEVBQUMsT0FGUjtBQUdDLHNCQUFlLE1BSGhCO0FBSUMsb0JBQWEsR0FKZDtBQUtDLHNCQUFlLE9BTGhCO0FBTUMsdUJBQWdCLE9BTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRCxDQURELEVBeUJDLE1BQUMsYUFBRDtBQUFlLFlBQVEsRUFBRUcsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpCRCxDQURELEVBNEJDO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsU0FBSyxFQUFDLElBRFA7QUFFQyxVQUFNLEVBQUMsSUFGUjtBQUdDLFdBQU8sRUFBQyxXQUhUO0FBSUMsUUFBSSxFQUFDLE1BSk47QUFLQyxTQUFLLEVBQUMsNEJBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9DO0FBQ0MsaUJBQVUsU0FEWDtBQUVDLGlCQUFVLFNBRlg7QUFHQyxLQUFDLEVBQUMsbWFBSEg7QUFJQyxRQUFJLEVBQUMsT0FKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEQsQ0FERCxDQTVCRCxDQURELEVBK0NDLE1BQUMsU0FBRDtBQUFXLFlBQVEsRUFBRUosWUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9DRCxDQURELENBREQsQ0FERCxDQUREO0FBeURBIiwiZmlsZSI6Ii4vc3JjL2hlYWx0aC1hcnRpY2xlL2hlYWx0aC1hcnRpY2xlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBtYXJrZWQgZnJvbSBcIm1hcmtlZFwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtZ3JpZC1zeXN0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhbHRoQXJ0aWNsZSh7IGJsb2dfY29udGVudCB9KSB7XG5cdGNvbnN0IHJlbmRlcmVyID0gbmV3IG1hcmtlZC5SZW5kZXJlcigpO1xuXHRjb25zdCBoZWFkaW5nID0gYCMgIEhlYWx0aCBBcnRpY2xlYDtcblx0Y29uc3QgY29udGVudCA9IGAgXG48dT48L3U+ICBcblxuPGRpdiBjbGFzcz1cImJhbm5lci1pbWFnZVwiPiBcblxuIVtiYW5uZXJdKGh0dHBzOi8vaS5pYmIuY28vdDR5WUZyNi9pbWFnZS0yOC5wbmcpXG48L2Rpdj5cblxuPiAjICBJZiBZb3UgUmVhbGx5IFdhbnQgdG8gT3B0aW1pemUgWW91ciBEaWV0LCBGb2N1cyBvbiBGaWJlclxuPGRpdiBjbGFzcz1cInByb2ZpbGUtaW1nXCI+IVtiYW5uZXJdKGh0dHBzOi8vaS5pYmIuY28vYjVKUFhWNC9JbWFnZS0yMTYucG5nKTwvZGl2PiB8IDxkaXYgY2xhc3M9XCJwcm9maWxlLW5hbWVcIj5Bcmp1biBTaGFybWE8L2Rpdj48ZGl2IGNsYXNzPVwicHJvZmlsZS1yb2xlXCI+RGlldCBFeHBlcnQ8L2Rpdj4gfFxuLS0tfCAtLS18XG58ICAgfFxuICBcbjx1PjwvdT5cbiBcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtdGV4dFwiPlRoZXJlIGFyZSBtYW55IGNvaG9ydCBzdHVkaWVzIHRoYXQgaGF2ZSBzaG93biBwZW9wbGUgd2hvIGVhdCBsZXNzIGZpYmVyIGFyZSBhdCBoaWdoIHJpc2sgZm9yIGRldmVsb3BpbmcgQ3JvaG7igJlzIGRpc2Vhc2Us4oCdIEthcGxhbiBzYXlzLiBPbmUgb2YgdGhlIG1vc3Qgcm9idXN0IG9mIHRoZXNlIHN0dWRpZXMgd2FzIGEgMjAxMyByZXBvcnQgZnJvbSByZXNlYXJjaGVycyBhdCBIYXJ2YXJkIE1lZGljYWwgU2Nob29sIHRoYXQgbG9va2VkIGF0IGRpZXQgYW5kIGhlYWx0aCBkYXRhIGNvbGxlY3RlZCBmcm9tIHJvdWdobHkgMTcwLDAwMCB3b21lbiBvdmVyIGEgcGVyaW9kIG9mIG1vcmUgdGhhbiAyNiB5ZWFycy4gSXQgZm91bmQgdGhhdCB0aG9zZSB3b21lbiB3aG8gbGFuZGVkIGluIHRoZSB0b3AgZmlmdGggb2YgdGhlIHBvcHVsYXRpb24gaW4gdGVybXMgb2YgZmliZXIgaW50YWtlcyB3ZXJlIDQwJSBsZXNzIGxpa2VseSB0byBoYXZlIGJlZW4gZGlhZ25vc2VkIHdpdGggQ3JvaG7igJlzIGRpc2Vhc2UgdGhhbiB3b21lbiB3aG8gbGFuZGVkIGluIHRoZSBib3R0b20gZmlmdGguXG48L2Rpdj5cbmA7XG5cdGNvbnN0IFByZXZpZXdlciA9IHByb3BzID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRpZD1cInByZXZpZXdlclwiXG5cdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG5cdFx0XHRcdFx0X19odG1sOiBtYXJrZWQocHJvcHMubWFya2Rvd24sIHsgcmVuZGVyZXI6IHJlbmRlcmVyIH0pXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH07XG5cdGNvbnN0IFByZXZpZXdlckhlYWQgPSBwcm9wcyA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdFx0aWQ9XCJwcmV2aWV3ZXJcIlxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuXHRcdFx0XHRcdF9faHRtbDogbWFya2VkKHByb3BzLm1hcmtkb3duLCB7IHJlbmRlcmVyOiByZW5kZXJlciB9KVxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHQpO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8Um93PlxuXHRcdFx0XHQ8Q29sIHNtPXsxMn0+XG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1ib3hcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLWJveFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiMjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMjVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAyNCAyNVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTE5IDEyLjk5MjJINVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZT1cImJsYWNrXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlLW9wYWNpdHk9XCIwLjg1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlLXdpZHRoPVwiMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0xMiAxOS45OTIyTDUgMTIuOTkyMkwxMiA1Ljk5MjE5XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlPVwiYmxhY2tcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2Utb3BhY2l0eT1cIjAuODVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2Utd2lkdGg9XCIyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0PFByZXZpZXdlckhlYWQgbWFya2Rvd249e2hlYWRpbmd9IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1hY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjEyXCJcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjI1XCJcblx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMTIgMjVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTYgOC45OTIxOUM3LjEgOC45OTIxOSA4IDguMDkyMTkgOCA2Ljk5MjE5QzggNS44OTIxOSA3LjEgNC45OTIxOSA2IDQuOTkyMTlDNC45IDQuOTkyMTkgNCA1Ljg5MjE5IDQgNi45OTIxOUM0IDguMDkyMTkgNC45IDguOTkyMTkgNiA4Ljk5MjE5Wk02IDEwLjk5MjJDNC45IDEwLjk5MjIgNCAxMS44OTIyIDQgMTIuOTkyMkM0IDE0LjA5MjIgNC45IDE0Ljk5MjIgNiAxNC45OTIyQzcuMSAxNC45OTIyIDggMTQuMDkyMiA4IDEyLjk5MjJDOCAxMS44OTIyIDcuMSAxMC45OTIyIDYgMTAuOTkyMlpNNiAxNi45OTIyQzQuOSAxNi45OTIyIDQgMTcuODkyMiA0IDE4Ljk5MjJDNCAyMC4wOTIyIDQuOSAyMC45OTIyIDYgMjAuOTkyMkM3LjEgMjAuOTkyMiA4IDIwLjA5MjIgOCAxOC45OTIyQzggMTcuODkyMiA3LjEgMTYuOTkyMiA2IDE2Ljk5MjJaXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cImJsYWNrXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxQcmV2aWV3ZXIgbWFya2Rvd249e2Jsb2dfY29udGVudH0gLz5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDwvQ29sPlxuXHRcdFx0PC9Sb3c+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/health-article/health-article.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _health_article_health_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../health-article/health-article */ \"./src/health-article/health-article.tsx\");\nvar _jsxFileName = \"/Users/machd/Documents/protalk-nextjs-app/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Index(props) {\n  return __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 4\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, \"Protalk App\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }), __jsx(\"meta\", {\n    httpEquiv: \"Content-Type\",\n    content: \"text/html;charset=ut-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"ProTalk experts are standing by to talk with you about healthy tips\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }\n  }, __jsx(_health_article_health_article__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    blog_content: props.content,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  })));\n}\nconst getServerSideProps = async () => {\n  const res = await fetch(\"https://run.mocky.io/v3/43f83c21-8678-4e6e-8e95-2725d9a51d03\");\n  const data = await res.text();\n  return {\n    props: {\n      content: data\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImNvbnRlbnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3BDLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsRUFFQztBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsRUFHQztBQUNDLGFBQVMsRUFBQyxjQURYO0FBRUMsV0FBTyxFQUFDLHdCQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxFQU9DO0FBQ0MsUUFBSSxFQUFDLGFBRE47QUFFQyxXQUFPLEVBQUMscUVBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBELEVBV0M7QUFDQyxRQUFJLEVBQUMsVUFETjtBQUVDLFdBQU8sRUFBQyx1Q0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEQsQ0FERCxFQWlCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxzRUFBRDtBQUFlLGdCQUFZLEVBQUVBLEtBQUssQ0FBQ0MsT0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBakJELENBREQ7QUF1QkE7QUFDTSxNQUFNQyxrQkFBa0IsR0FBRyxZQUFZO0FBQzdDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQ3RCLDhEQURzQixDQUF2QjtBQUdBLFFBQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBbkI7QUFDQSxTQUFPO0FBQ05OLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUVJO0FBQVg7QUFERCxHQUFQO0FBR0EsQ0FSTSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSGVhbHRoQXJ0aWNsZSBmcm9tIFwiLi4vaGVhbHRoLWFydGljbGUvaGVhbHRoLWFydGljbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8bWFpbj5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+UHJvdGFsayBBcHA8L3RpdGxlPlxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0aHR0cEVxdWl2PVwiQ29udGVudC1UeXBlXCJcblx0XHRcdFx0XHRjb250ZW50PVwidGV4dC9odG1sO2NoYXJzZXQ9dXQtOFwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0bmFtZT1cImRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRjb250ZW50PVwiUHJvVGFsayBleHBlcnRzIGFyZSBzdGFuZGluZyBieSB0byB0YWxrIHdpdGggeW91IGFib3V0IGhlYWx0aHkgdGlwc1wiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0bmFtZT1cInZpZXdwb3J0XCJcblx0XHRcdFx0XHRjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVhbHRoQXJ0aWNsZSBibG9nX2NvbnRlbnQ9e3Byb3BzLmNvbnRlbnR9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21haW4+XG5cdCk7XG59XG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcblx0XHRcImh0dHBzOi8vcnVuLm1vY2t5LmlvL3YzLzQzZjgzYzIxLTg2NzgtNGU2ZS04ZTk1LTI3MjVkOWE1MWQwM1wiXG5cdCk7XG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMudGV4dCgpO1xuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7IGNvbnRlbnQ6IGRhdGEgfVxuXHR9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"marked\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIj8yNWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1hcmtlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///marked\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-grid-system":
/*!************************************!*\
  !*** external "react-grid-system" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-grid-system\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ncmlkLXN5c3RlbVwiPzA2NWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtZ3JpZC1zeXN0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ncmlkLXN5c3RlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-grid-system\n");

/***/ })

/******/ });