webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, DATA_URL, fetcher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_URL", function() { return DATA_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetcher", function() { return fetcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _utils_country__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/country */ "./utils/country.js");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/boss/workspace/covid-19-explorer/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import Plot from 'react-plotly.js';



 // import Plotly from 'plotly.js-dist'

var __N_SSG = true;
var DATA_URL = "https://pomber.github.io/covid19/timeseries.json";
function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
}
function Index(props) {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      mounted = _useState[0],
      setMounted = _useState[1];

  var dataset = props.dataset; // const [dataset, setDataset] = useState({})

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      query = _useRouter.query; // const { data, error } = useSWR(
  //     `https://pomber.github.io/covid19/timeseries.json`,
  //     fetcher,
  //     {
  //         onError: (err, key, config) => {
  //             console.log('err', err)
  //             console.log('key', key)
  //             console.log('config', config)
  //         },
  //         onSuccess: (data, key, config) => {
  //             const newData = {}
  //             Object.keys(data).forEach((name) => {
  //                 const country = data[name]
  //                 newData[name] = country.map((entry) => addExtraSeriesData(entry, name))
  //             })
  //             setDataset(newData)
  //         },
  //         initialData: {}
  //     }
  // );


  var countryNames = Object.keys(dataset);
  var chartData = Object(_utils_country__WEBPACK_IMPORTED_MODULE_7__["getChartData"])(dataset); // console.log('chartData', chartData)

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Home page"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(react_no_ssr__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["ResponsiveContainer"], {
    width: "100%",
    height: 400,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["BarChart"], {
    data: chartData,
    onClick: function onClick(e) {
      if (!e) {
        return;
      }

      var nextUrl = "/countries/".concat(e.activeLabel);
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(nextUrl);
      console.log("Clicked label: ".concat(nextUrl));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["XAxis"], {
    dataKey: "countryName",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["YAxis"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Legend"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Bar"], {
    dataKey: "confirmed",
    fill: "#8884d8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Bar"], {
    dataKey: "recovered",
    fill: "#82ca9d",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Bar"], {
    dataKey: "deaths",
    fill: "#aa0000",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }))))), __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, "Country"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, "Date"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, "Confirmed"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }, "Deaths"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "Recovered"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, "Suffering"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, "Mortality Rate"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, countryNames.map(function (name) {
    var countrySeries = dataset[name];
    var lastEntryIndex = countrySeries.length - 1;
    var _countrySeries$lastEn = countrySeries[lastEntryIndex],
        date = _countrySeries$lastEn.date,
        confirmed = _countrySeries$lastEn.confirmed,
        deaths = _countrySeries$lastEn.deaths,
        recovered = _countrySeries$lastEn.recovered,
        suffering = _countrySeries$lastEn.suffering,
        mortalityRate = _countrySeries$lastEn.mortalityRate;
    return __jsx("tr", {
      key: name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 33
      }
    }, __jsx("td", {
      title: "country",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/countries/".concat(name),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 33
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 37
      }
    }, name))), __jsx("td", {
      title: "date",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }
    }, date), __jsx("td", {
      title: "confirmed",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 29
      }
    }, confirmed), __jsx("td", {
      title: "deaths",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 29
      }
    }, deaths), __jsx("td", {
      title: "recovered",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 29
      }
    }, recovered), __jsx("td", {
      title: "sufferers (approx)",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 29
      }
    }, suffering), __jsx("td", {
      title: "mortality rate",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 29
      }
    }, (mortalityRate * 100).toFixed(2), "%"));
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.571f65789586a56b82fd.hot-update.js.map