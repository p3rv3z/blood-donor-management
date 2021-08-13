"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["DonersIndex"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Doners/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Doners/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: false,
      dialogDelete: false,
      headers: [{
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'name'
      }, {
        text: 'Phone',
        value: 'phone'
      }, {
        text: 'Upazila',
        value: 'upazila'
      }, {
        text: 'Status',
        value: 'status'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        phone: 0,
        upazila: 0,
        status: 0
      },
      defaultItem: {
        name: '',
        phone: 0,
        upazila: 0,
        status: 0
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Add New Doner' : 'Edit Information';
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      this.desserts = [{
        name: 'Jhon Doe',
        phone: '01834266336',
        upazila: 'Raozan',
        status: 'Available'
      }, {
        name: 'Jane Doe',
        phone: '01834266336',
        upazila: 'Hathazari',
        status: 'Not Available'
      }];
    },
    editItem: function editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close: function close() {
      var _this = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this.editedItem = Object.assign({}, _this.defaultItem);
        _this.editedIndex = -1;
      });
    },
    closeDelete: function closeDelete() {
      var _this2 = this;

      this.dialogDelete = false;
      this.$nextTick(function () {
        _this2.editedItem = Object.assign({}, _this2.defaultItem);
        _this2.editedIndex = -1;
      });
    },
    save: function save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }

      this.close();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Doners/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Doners/Index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_158ba9d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=158ba9d1&scoped=true& */ "./resources/js/components/Doners/Index.vue?vue&type=template&id=158ba9d1&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Doners/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_158ba9d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_158ba9d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "158ba9d1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Doners/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Doners/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Doners/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Doners/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Doners/Index.vue?vue&type=template&id=158ba9d1&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Doners/Index.vue?vue&type=template&id=158ba9d1&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_158ba9d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_158ba9d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_158ba9d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=158ba9d1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Doners/Index.vue?vue&type=template&id=158ba9d1&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Doners/Index.vue?vue&type=template&id=158ba9d1&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Doners/Index.vue?vue&type=template&id=158ba9d1&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-container",
        { attrs: { "grid-list-xs": "" } },
        [
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: { headers: _vm.headers, items: _vm.desserts },
            scopedSlots: _vm._u(
              [
                {
                  key: "top",
                  fn: function() {
                    return [
                      _c(
                        "v-toolbar",
                        { attrs: { flat: "" } },
                        [
                          _c("v-toolbar-title", [_vm._v("Doners List")]),
                          _vm._v(" "),
                          _c("v-divider", {
                            staticClass: "mx-4",
                            attrs: { inset: "", vertical: "" }
                          }),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: { "max-width": "500px" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              staticClass: "mb-2",
                                              attrs: {
                                                color: "primary",
                                                dark: ""
                                              }
                                            },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "mr-1",
                                              attrs: { dark: "" }
                                            },
                                            [_vm._v(" mdi-plus ")]
                                          ),
                                          _vm._v(" New Doner\n              ")
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.dialog,
                                callback: function($$v) {
                                  _vm.dialog = $$v
                                },
                                expression: "dialog"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", [
                                    _c("span", { staticClass: "text-h5" }, [
                                      _vm._v(_vm._s(_vm.formTitle))
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-container",
                                        [
                                          _c(
                                            "v-row",
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: { label: "Name" },
                                                    model: {
                                                      value:
                                                        _vm.editedItem.name,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "name",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.name"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: { label: "Phone" },
                                                    model: {
                                                      value:
                                                        _vm.editedItem.phone,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "phone",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.phone"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: { label: "Upazila" },
                                                    model: {
                                                      value:
                                                        _vm.editedItem.upazila,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "upazila",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.upazila"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: { label: "Status" },
                                                    model: {
                                                      value:
                                                        _vm.editedItem.status,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "status",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.status"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: { click: _vm.close }
                                        },
                                        [
                                          _vm._v(
                                            "\n                  Cancel\n                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: { click: _vm.save }
                                        },
                                        [_vm._v(" Save ")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: { "max-width": "500px" },
                              model: {
                                value: _vm.dialogDelete,
                                callback: function($$v) {
                                  _vm.dialogDelete = $$v
                                },
                                expression: "dialogDelete"
                              }
                            },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    { staticClass: "text-h5" },
                                    [
                                      _vm._v(
                                        "Are you sure you want to delete this doner?"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: { click: _vm.closeDelete }
                                        },
                                        [_vm._v("Cancel")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: { click: _vm.deleteItemConfirm }
                                        },
                                        [_vm._v("OK")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer")
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "item.actions",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              return _vm.editItem(item)
                            }
                          }
                        },
                        [_vm._v("\n          mdi-pencil\n        ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              return _vm.deleteItem(item)
                            }
                          }
                        },
                        [_vm._v(" mdi-delete ")]
                      )
                    ]
                  }
                },
                {
                  key: "no-data",
                  fn: function() {
                    return [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: { click: _vm.initialize }
                        },
                        [_vm._v(" Reset ")]
                      )
                    ]
                  },
                  proxy: true
                }
              ],
              null,
              true
            )
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);