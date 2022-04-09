(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/services/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/services/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datatable_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datatable/index */ "./resources/js/src/views/dashboard/datatable/index.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    tableData: _datatable_index__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BPagination"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormInput"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormSelect"],
    // Prism,
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BDropdownItem"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BDropdown"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCol"]
  },
  data: function data() {
    return {
      url: '/services',
      searchTerm: '',
      title: 'Services',
      columns: [{
        label: 'Name',
        field: 'name',
        filterable: true,
        sortable: true
      }, {
        label: 'Department Name',
        field: 'department_name',
        filterable: true
      }, {
        label: 'Status',
        field: 'status',
        filterable: true
      }, {
        label: 'Description',
        field: 'desc',
        filterable: true
      }, {
        label: 'Created At',
        field: 'created_at',
        filterable: true
      }, {
        label: 'Action',
        field: 'action',
        sortable: false
      }]
    };
  },
  computed: {},
  methods: {},
  created: function created() {} // setup () {
  //     const state = reactive({
  //         count: 0,
  //     })
  //     return {
  //         ...toRefs(state),
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/services/index.vue?vue&type=template&id=9cbdec74&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/services/index.vue?vue&type=template&id=9cbdec74&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/loaders/templateLoader.js):\nSyntaxError: Unexpected token (1:885)\n    at Parser.pp$4.raise (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2757:13)\n    at Parser.pp.unexpected (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:647:8)\n    at Parser.pp$3.parseParenAndDistinguishExpression (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2252:49)\n    at Parser.pp$3.parseExprAtom (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2163:41)\n    at Parser.<anonymous> (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseMaybeUnary (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2015:26)\n    at Parser.pp$3.parseExprOps (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parseExpression (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:1896:19)\n    at Parser.pp$1.parseReturnStatement (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:946:31)\n    at Parser.pp$1.parseStatement (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:781:35)\n    at Parser.parseStatement (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:6116:31)\n    at Parser.pp$1.parseBlock (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:1112:23)\n    at Parser.pp$3.parseFunctionBody (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2600:22)\n    at Parser.pp$1.parseFunction (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:1219:8)\n    at Parser.pp$3.parseExprAtom (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2184:17)\n    at Parser.<anonymous> (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parsePropertyValue (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2443:87)\n    at Parser.pp$3.parseProperty (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2434:8)\n    at Parser.pp$3.parseObj (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2380:23)\n    at Parser.pp$3.parseExprAtom (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2179:17)\n    at Parser.<anonymous> (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (G:\\Desktop\\bot\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)");

/***/ }),

/***/ "./resources/js/src/views/dashboard/services/index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/dashboard/services/index.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9cbdec74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9cbdec74&scoped=true& */ "./resources/js/src/views/dashboard/services/index.vue?vue&type=template&id=9cbdec74&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/services/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_9cbdec74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9cbdec74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9cbdec74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/services/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/services/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/services/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/services/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/services/index.vue?vue&type=template&id=9cbdec74&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/services/index.vue?vue&type=template&id=9cbdec74&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9cbdec74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=9cbdec74&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/services/index.vue?vue&type=template&id=9cbdec74&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9cbdec74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9cbdec74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);