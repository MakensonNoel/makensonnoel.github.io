"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TicTacToe.jsx":
/*!**********************************!*\
  !*** ./components/TicTacToe.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar initialBoard = Array(9).fill(\"\");\nvar TicTacToe = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialBoard), board = ref[0], setBoard = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"X\"), currentPlayer = ref1[0], setCurrentPlayer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), winner = ref2[0], setWinner = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (currentPlayer === \"O\" && !winner) {\n            makeComputerMove();\n        }\n    }, [\n        currentPlayer,\n        winner\n    ]);\n    var handleCellClick = function(index) {\n        if (board[index] === \"\" && !winner && currentPlayer === \"X\") {\n            var newBoard = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(board);\n            newBoard[index] = currentPlayer;\n            setBoard(newBoard);\n            checkWinner(newBoard);\n            setCurrentPlayer(\"O\");\n        }\n    };\n    var makeComputerMove = function() {\n        var availableCells = board.reduce(function(acc, cell, index) {\n            return cell === \"\" ? (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(acc).concat([\n                index\n            ]) : acc;\n        }, []);\n        var randomIndex = Math.floor(Math.random() * availableCells.length);\n        var computerMove = availableCells[randomIndex];\n        var newBoard = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(board);\n        newBoard[computerMove] = currentPlayer;\n        setBoard(newBoard);\n        checkWinner(newBoard);\n        setCurrentPlayer(\"X\");\n    };\n    var checkWinner = function(board) {\n        var winningCombinations = [\n            [\n                0,\n                1,\n                2\n            ],\n            [\n                3,\n                4,\n                5\n            ],\n            [\n                6,\n                7,\n                8\n            ],\n            [\n                0,\n                3,\n                6\n            ],\n            [\n                1,\n                4,\n                7\n            ],\n            [\n                2,\n                5,\n                8\n            ],\n            [\n                0,\n                4,\n                8\n            ],\n            [\n                2,\n                4,\n                6\n            ], \n        ];\n        for(var i = 0; i < winningCombinations.length; i++){\n            var _i = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(winningCombinations[i], 3), a = _i[0], b = _i[1], c = _i[2];\n            if (board[a] && board[a] === board[b] && board[a] === board[c]) {\n                setWinner(board[a]);\n                return;\n            }\n        }\n        if (!board.includes(\"\")) {\n            setWinner(\"draw\");\n        }\n    };\n    var resetGame = function() {\n        setBoard(initialBoard);\n        setCurrentPlayer(\"X\");\n        setWinner(null);\n    };\n    var renderCell = function(index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cell bg-gray-200 border border-gray-300 text-4xl text-center cursor-pointer flex items-center justify-center\",\n            onClick: function() {\n                return handleCellClick(index);\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"block w-16 h-16\",\n                children: board[index]\n            }, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/components/TicTacToe.jsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, _this)\n        }, index, false, {\n            fileName: \"/workspaces/makensonn.github.io/components/TicTacToe.jsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"tic-tac-toe\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"TicTac\"\n            }, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/components/TicTacToe.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"board grid grid-cols-3 gap-4 w-64 mx-auto mt-8\",\n                children: board.map(function(cell, index) {\n                    return renderCell(index);\n                })\n            }, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/components/TicTacToe.jsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this),\n            winner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"winner text-center text-xl font-bold mt-4\",\n                children: winner === \"draw\" ? \"It's a draw!\" : \"Player \".concat(winner, \" wins!\")\n            }, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/components/TicTacToe.jsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"reset-button block mx-auto mt-4 px-4 py-2 rounded bg-blue-500 text-white\",\n                onClick: resetGame,\n                children: \"Reset Game\"\n            }, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/components/TicTacToe.jsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/components/TicTacToe.jsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/components/TicTacToe.jsx\",\n                lineNumber: 102,\n                columnNumber: 16\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/components/TicTacToe.jsx\",\n                lineNumber: 102,\n                columnNumber: 25\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/makensonn.github.io/components/TicTacToe.jsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, _this);\n};\n_s(TicTacToe, \"G6roYEXj0ZjI0wQ/JBIafUHM6rs=\");\n_c = TicTacToe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TicTacToe);\nvar _c;\n$RefreshReg$(_c, \"TicTacToe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEIsZUFBZSxDQUFDQyxLQUFLLENBQUM7YUFBQTtzQkFFckMsNEVBQUN3QixNQUFJO2dCQUFDRixTQUFTLEVBQUMsaUJBQWlCOzBCQUFFOUIsS0FBSyxDQUFDUSxLQUFLLENBQUM7Ozs7O3FCQUFRO1dBSmxEQSxLQUFLOzs7O2lCQUtOLENBQ047S0FDSDtJQUVELHFCQUNFLDhEQUFDcUIsS0FBRztRQUFDQyxTQUFTLEVBQUMsYUFBYTs7MEJBQzFCLDhEQUFDRyxJQUFFOzBCQUFDLFFBQU07Ozs7O3FCQUFLOzBCQUNmLDhEQUFDSixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZ0RBQWdEOzBCQUM1RDlCLEtBQUssQ0FBQ2tDLEdBQUcsQ0FBQyxTQUFDcEIsSUFBSSxFQUFFTixLQUFLOzJCQUFLb0IsVUFBVSxDQUFDcEIsS0FBSyxDQUFDO2lCQUFBLENBQUM7Ozs7O3FCQUMxQztZQUNMSixNQUFNLGtCQUNMLDhEQUFDeUIsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDJDQUEyQzswQkFDdkQxQixNQUFNLEtBQUssTUFBTSxHQUFHLGNBQWMsR0FBRyxTQUFRLENBQVMsTUFBTSxDQUFiQSxNQUFNLEVBQUMsUUFBTSxDQUFDOzs7OztxQkFDMUQ7MEJBRVIsOERBQUMrQixRQUFNO2dCQUNMTCxTQUFTLEVBQUMsMEVBQTBFO2dCQUNwRkMsT0FBTyxFQUFFSixTQUFTOzBCQUNuQixZQUVEOzs7OztxQkFBUzswQkFDVCw4REFBQ1MsSUFBRTs7OztxQkFBTTswQkFBQSw4REFBQ0EsSUFBRTs7OztxQkFBTTswQkFBQSw4REFBQ0EsSUFBRTs7OztxQkFBTTs7Ozs7O2FBQ3ZCLENBQ047Q0FDSDtHQXBHS3JDLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQXNHZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGljVGFjVG9lLmpzeD81NjhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBpbml0aWFsQm9hcmQgPSBBcnJheSg5KS5maWxsKCcnKTtcblxuY29uc3QgVGljVGFjVG9lID0gKCkgPT4ge1xuICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKGluaXRpYWxCb2FyZCk7XG4gIGNvbnN0IFtjdXJyZW50UGxheWVyLCBzZXRDdXJyZW50UGxheWVyXSA9IHVzZVN0YXRlKCdYJyk7XG4gIGNvbnN0IFt3aW5uZXIsIHNldFdpbm5lcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjdXJyZW50UGxheWVyID09PSAnTycgJiYgIXdpbm5lcikge1xuICAgICAgbWFrZUNvbXB1dGVyTW92ZSgpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRQbGF5ZXIsIHdpbm5lcl0pO1xuXG4gIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChpbmRleCkgPT4ge1xuICAgIGlmIChib2FyZFtpbmRleF0gPT09ICcnICYmICF3aW5uZXIgJiYgY3VycmVudFBsYXllciA9PT0gJ1gnKSB7XG4gICAgICBjb25zdCBuZXdCb2FyZCA9IFsuLi5ib2FyZF07XG4gICAgICBuZXdCb2FyZFtpbmRleF0gPSBjdXJyZW50UGxheWVyO1xuICAgICAgc2V0Qm9hcmQobmV3Qm9hcmQpO1xuICAgICAgY2hlY2tXaW5uZXIobmV3Qm9hcmQpO1xuICAgICAgc2V0Q3VycmVudFBsYXllcignTycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtYWtlQ29tcHV0ZXJNb3ZlID0gKCkgPT4ge1xuICAgIGNvbnN0IGF2YWlsYWJsZUNlbGxzID0gYm9hcmQucmVkdWNlKFxuICAgICAgKGFjYywgY2VsbCwgaW5kZXgpID0+IChjZWxsID09PSAnJyA/IFsuLi5hY2MsIGluZGV4XSA6IGFjYyksXG4gICAgICBbXVxuICAgICk7XG5cbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUNlbGxzLmxlbmd0aCk7XG4gICAgY29uc3QgY29tcHV0ZXJNb3ZlID0gYXZhaWxhYmxlQ2VsbHNbcmFuZG9tSW5kZXhdO1xuXG4gICAgY29uc3QgbmV3Qm9hcmQgPSBbLi4uYm9hcmRdO1xuICAgIG5ld0JvYXJkW2NvbXB1dGVyTW92ZV0gPSBjdXJyZW50UGxheWVyO1xuICAgIHNldEJvYXJkKG5ld0JvYXJkKTtcbiAgICBjaGVja1dpbm5lcihuZXdCb2FyZCk7XG4gICAgc2V0Q3VycmVudFBsYXllcignWCcpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrV2lubmVyID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3Qgd2lubmluZ0NvbWJpbmF0aW9ucyA9IFtcbiAgICAgIFswLCAxLCAyXSxcbiAgICAgIFszLCA0LCA1XSxcbiAgICAgIFs2LCA3LCA4XSxcbiAgICAgIFswLCAzLCA2XSxcbiAgICAgIFsxLCA0LCA3XSxcbiAgICAgIFsyLCA1LCA4XSxcbiAgICAgIFswLCA0LCA4XSxcbiAgICAgIFsyLCA0LCA2XSxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5uaW5nQ29tYmluYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBbYSwgYiwgY10gPSB3aW5uaW5nQ29tYmluYXRpb25zW2ldO1xuICAgICAgaWYgKGJvYXJkW2FdICYmIGJvYXJkW2FdID09PSBib2FyZFtiXSAmJiBib2FyZFthXSA9PT0gYm9hcmRbY10pIHtcbiAgICAgICAgc2V0V2lubmVyKGJvYXJkW2FdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYm9hcmQuaW5jbHVkZXMoJycpKSB7XG4gICAgICBzZXRXaW5uZXIoJ2RyYXcnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIHNldEJvYXJkKGluaXRpYWxCb2FyZCk7XG4gICAgc2V0Q3VycmVudFBsYXllcignWCcpO1xuICAgIHNldFdpbm5lcihudWxsKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJDZWxsID0gKGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgY2xhc3NOYW1lPVwiY2VsbCBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtNHhsIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2VsbENsaWNrKGluZGV4KX1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdy0xNiBoLTE2XCI+e2JvYXJkW2luZGV4XX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aWMtdGFjLXRvZVwiPlxuICAgICAgPGgxPlRpY1RhYzwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkIGdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTQgdy02NCBteC1hdXRvIG10LThcIj5cbiAgICAgICAge2JvYXJkLm1hcCgoY2VsbCwgaW5kZXgpID0+IHJlbmRlckNlbGwoaW5kZXgpKX1cbiAgICAgIDwvZGl2PlxuICAgICAge3dpbm5lciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lubmVyIHRleHQtY2VudGVyIHRleHQteGwgZm9udC1ib2xkIG10LTRcIj5cbiAgICAgICAgICB7d2lubmVyID09PSAnZHJhdycgPyBcIkl0J3MgYSBkcmF3IVwiIDogYFBsYXllciAke3dpbm5lcn0gd2lucyFgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cInJlc2V0LWJ1dHRvbiBibG9jayBteC1hdXRvIG10LTQgcHgtNCBweS0yIHJvdW5kZWQgYmctYmx1ZS01MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgIG9uQ2xpY2s9e3Jlc2V0R2FtZX1cbiAgICAgID5cbiAgICAgICAgUmVzZXQgR2FtZVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnI+PC9icj48YnI+PC9icj48YnI+PC9icj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpY1RhY1RvZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluaXRpYWxCb2FyZCIsIkFycmF5IiwiZmlsbCIsIlRpY1RhY1RvZSIsImJvYXJkIiwic2V0Qm9hcmQiLCJjdXJyZW50UGxheWVyIiwic2V0Q3VycmVudFBsYXllciIsIndpbm5lciIsInNldFdpbm5lciIsIm1ha2VDb21wdXRlck1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJpbmRleCIsIm5ld0JvYXJkIiwiY2hlY2tXaW5uZXIiLCJhdmFpbGFibGVDZWxscyIsInJlZHVjZSIsImFjYyIsImNlbGwiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNvbXB1dGVyTW92ZSIsIndpbm5pbmdDb21iaW5hdGlvbnMiLCJpIiwiYSIsImIiLCJjIiwiaW5jbHVkZXMiLCJyZXNldEdhbWUiLCJyZW5kZXJDZWxsIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNwYW4iLCJoMSIsIm1hcCIsImJ1dHRvbiIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TicTacToe.jsx\n"));

/***/ })

});