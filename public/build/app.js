"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./order-management-front/src/app/app.component.ts":
/*!*********************************************************!*\
  !*** ./order-management-front/src/app/app.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ "./order-management-front/node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "./order-management-front/node_modules/@angular/core/fesm2022/core.mjs");











function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
  _classCallCheck(this, AppComponent);
});
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-root',
  template: "\n      <div class=\"main\">\n          <app-navbar></app-navbar>\n          <app-orders>\n          </app-orders>\n      </div>\n  ",
  styles: []
})], AppComponent);

/***/ }),

/***/ "./order-management-front/src/app/app.module.ts":
/*!******************************************************!*\
  !*** ./order-management-front/src/app/app.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ "./order-management-front/node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "./order-management-front/node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "./order-management-front/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./order-management-front/src/app/app.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orders/orders.component */ "./order-management-front/src/app/orders/orders.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./order-management-front/src/app/navbar/navbar.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pagination/pagination.component */ "./order-management-front/src/app/pagination/pagination.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./order-management-front/node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var _cancel_order_modal_cancel_order_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cancel-order-modal/cancel-order-modal.component */ "./order-management-front/src/app/cancel-order-modal/cancel-order-modal.component.ts");











function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var AppModule = /*#__PURE__*/_createClass(function AppModule() {
  _classCallCheck(this, AppModule);
});
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__.AppComponent, _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__.OrdersComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__.NavbarComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _cancel_order_modal_cancel_order_modal_component__WEBPACK_IMPORTED_MODULE_15__.CancelOrderModalComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule],
  providers: [],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__.AppComponent]
})], AppModule);

/***/ }),

/***/ "./order-management-front/src/app/cancel-order-modal/cancel-order-modal.component.ts":
/*!*******************************************************************************************!*\
  !*** ./order-management-front/src/app/cancel-order-modal/cancel-order-modal.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancelOrderModalComponent: () => (/* binding */ CancelOrderModalComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ "./order-management-front/node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./order-management-front/node_modules/@angular/core/fesm2022/core.mjs");











function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var CancelOrderModalComponent = /*#__PURE__*/function () {
  function CancelOrderModalComponent() {
    _classCallCheck(this, CancelOrderModalComponent);
    this.cancelConfirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.modalClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
  }
  _createClass(CancelOrderModalComponent, [{
    key: "cancelOrder",
    value: function cancelOrder() {
      this.cancelConfirmed.emit();
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.modalClosed.emit();
    }
  }]);
  return CancelOrderModalComponent;
}();
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Output)()], CancelOrderModalComponent.prototype, "cancelConfirmed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Output)()], CancelOrderModalComponent.prototype, "modalClosed", void 0);
CancelOrderModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-cancel-order-modal',
  template: "\n    <!-- cancel-order-modal.component.html -->\n    <div class=\"cancel-modal\" (click)=\"closeModal()\">\n      <div class=\"cancel-modal-content\">\n        <h2 class=\"cancel-modal-title\">Cancel Order</h2>\n        <p class=\"cancel-modal-message\">Are you sure you want to cancel this order?</p>\n        <div class=\"cancel-modal-buttons\">\n          <button class=\"cancel-modal-button cancel\" (click)=\"cancelOrder()\">Yes</button>\n          <button class=\"cancel-modal-button\" (click)=\"closeModal()\">No</button>\n        </div>\n      </div>\n    </div>\n  ",
  styles: ["\n        /* cancel-order-modal.component.css */\n        .cancel-modal {\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background-color: rgba(0, 0, 0, 0.5);\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n\n        .cancel-modal-content {\n          background-color: #fff;\n          padding: 20px;\n          border-radius: 5px;\n          max-width: 400px;\n          text-align: center;\n        }\n\n        .cancel-modal-title {\n          font-size: 24px;\n          margin-bottom: 10px;\n        }\n\n        .cancel-modal-message {\n          font-size: 16px;\n          margin-bottom: 20px;\n        }\n\n        .cancel-modal-buttons {\n          display: flex;\n          justify-content: center;\n        }\n\n        .cancel-modal-button {\n          padding: 10px 20px;\n          font-size: 16px;\n          border-radius: 5px;\n          cursor: pointer;\n          margin: 0 10px;\n        }\n\n        .cancel-modal-button.cancel {\n          background-color: #e74c3c;\n          color: #fff;\n        }\n\n        .cancel-modal-button.cancel:hover {\n          background-color: #c0392b;\n        }\n\n      "]
})], CancelOrderModalComponent);

/***/ }),

/***/ "./order-management-front/src/app/navbar/navbar.component.ts":
/*!*******************************************************************!*\
  !*** ./order-management-front/src/app/navbar/navbar.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ "./order-management-front/node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "./order-management-front/node_modules/@angular/core/fesm2022/core.mjs");











function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var NavbarComponent = /*#__PURE__*/function () {
  function NavbarComponent() {
    _classCallCheck(this, NavbarComponent);
  }
  _createClass(NavbarComponent, [{
    key: "refreshPage",
    value: function refreshPage() {
      location.reload();
    }
  }]);
  return NavbarComponent;
}();
NavbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-navbar',
  template: "\n    <nav class=\"navbar\">\n      <div class=\"logo\">\n        <span class=\"logo-text\">Order Management App</span>\n      </div>\n      <ul class=\"nav-menu\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"refreshPage()\">Home</a>\n        </li>\n      </ul>\n    </nav>\n  ",
  styles: [".navbar {\n        padding: 10px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        background-color: #dcdada;\n      }\n\n      .logo {\n        margin-right: 20px;\n      }\n\n      .logo-text {\n        font-size: 20px;\n        font-weight: bold;\n        color: #4b4d4b;\n      }\n\n      .nav-menu {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n      }\n\n      .nav-item {\n        display: inline-block;\n        margin-right: 10px;\n      }\n\n      .nav-link {\n        text-decoration: none;\n        color: #333;\n        padding: 5px 10px;\n        border-radius: 5px;\n        background-color: #ddd;\n      }\n\n      .nav-link:hover {\n        background-color: #bbb;\n        cursor: pointer;\n      }"]
})], NavbarComponent);

/***/ }),

/***/ "./order-management-front/src/app/orders/orders.component.ts":
/*!*******************************************************************!*\
  !*** ./order-management-front/src/app/orders/orders.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersComponent: () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ "./order-management-front/node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "./order-management-front/node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./order-management-front/node_modules/axios/lib/axios.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var OrdersComponent = /*#__PURE__*/function () {
  function OrdersComponent() {
    var _this = this;
    _classCallCheck(this, OrdersComponent);
    this.orders = [];
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalPages = 0;
    this.customerName = '';
    this.orderStatus = '';
    this.showCancelModal = false;
    this.orderForDelete = '';
    this.loadData = function () {
      var requestData = {
        customerName: _this.customerName,
        orderStatus: _this.orderStatus
      };
      axios__WEBPACK_IMPORTED_MODULE_13__["default"].get('/api/orders', {
        params: requestData
      }).then(function (res) {
        _this.orders = res.data.data;
        _this.calculateTotalPages();
      });
    };
  }
  _createClass(OrdersComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.loadData();
    }
  }, {
    key: "calculateTotalPages",
    value: function calculateTotalPages() {
      this.totalPages = Math.ceil(this.orders.length / this.itemsPerPage);
    }
  }, {
    key: "onPageChange",
    value: function onPageChange(page) {
      this.currentPage = page;
    }
  }, {
    key: "pagedData",
    get: function get() {
      var startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.orders.slice(startIndex, startIndex + this.itemsPerPage);
    }
  }, {
    key: "getStatus",
    value: function getStatus(status) {
      switch (status) {
        case 'pending':
          return 'Pending';
        case 'in_production':
          return 'In Production';
        case 'cancelled':
          return 'Cancelled';
        default:
          return '';
      }
    }
  }, {
    key: "generateNiceDate",
    value: function generateNiceDate(originalDate) {
      var niceDate = new Date(originalDate);
      return niceDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      });
    }
  }, {
    key: "filterData",
    value: function filterData() {
      this.loadData();
    }
  }, {
    key: "resetFilter",
    value: function resetFilter() {
      this.customerName = '';
      this.orderStatus = '';
      this.filterData();
    }
  }, {
    key: "cancelRequest",
    value: function cancelRequest(orderId) {
      this.orderForDelete = orderId;
      this.showCancelModal = true;
    }
  }, {
    key: "confirmCancelOrder",
    value: function confirmCancelOrder() {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_13__["default"].put('/api/cancel/order/' + this.orderForDelete).then(function (res) {
        if (res.status == 200) {
          _this2.closeCancelModal();
          _this2.filterData();
        } else {
          _this2.closeCancelModal();
          alert('failed to cancel order');
        }
      });
    }
  }, {
    key: "closeCancelModal",
    value: function closeCancelModal() {
      this.showCancelModal = false;
      this.orderForDelete = '';
    }
  }]);
  return OrdersComponent;
}();
OrdersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-orders',
  template: "\n    <form class=\"filter-form\" (ngSubmit)=\"filterData()\">\n      <div class=\"form-row\">\n        <div class=\"form-group\">\n          <label for=\"customerName\">Customer Name</label>\n          <input type=\"text\" name=\"customerName\" id=\"customerName\" [(ngModel)]=\"customerName\">\n\n          <label for=\"orderStatus\">Order Status</label>\n          <select id=\"orderStatus\" name=\"orderStatus\" [(ngModel)]=\"orderStatus\">\n            <option value=\"\">All</option>\n            <option value=\"pending\">Pending</option>\n            <option value=\"in_production\">In Production</option>\n            <option value=\"cancelled\" >Cancelled</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"button\">Filter</button>\n          <button type=\"button\" class=\"button\" (click)=\"resetFilter()\">Reset</button>\n        </div>\n      </div>\n    </form>\n\n    <div class=\"table-block\">\n      <table class=\"table table-striped table-bordered\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Order Date</th>\n            <th>Customer</th>\n            <th>Address</th>\n            <th>City</th>\n            <th>Postcode</th>\n            <th>Country</th>\n            <th>Amount</th>\n            <th>Status</th>\n            <th>Last Modified</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of pagedData\">\n            <td>{{ item.id }}</td>\n            <td>{{ generateNiceDate(item.orderDate.date) }}</td>\n            <td>{{ item.customer }}</td>\n            <td>{{ item.address }}</td>\n            <td>{{ item.city }}</td>\n            <td>{{ item.postcode }}</td>\n            <td>{{ item.country }}</td>\n            <td>{{ item.amount }}</td>\n            <td>\n              <span class=\"status status-{{ item.status }}\">{{ getStatus(item.status) }}</span>\n            </td>\n            <td>{{ generateNiceDate(item.orderDate.date)  }}</td>\n            <td>\n              <button class=\"cancel-order\" *ngIf=\"item.status !== 'cancelled'\" (click)=\"cancelRequest(item.id)\">Cancel Order</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <app-pagination\n          [currentPage]=\"currentPage\"\n          [totalPages]=\"totalPages\"\n          (pageChange)=\"onPageChange($event)\"\n      ></app-pagination>\n    </div>\n\n    <app-cancel-order-modal\n        *ngIf=\"showCancelModal\"\n        (cancelConfirmed)=\"confirmCancelOrder()\"\n        (modalClosed)=\"closeCancelModal()\"\n    ></app-cancel-order-modal>\n  ",
  styles: ["\n        .table {\n          width: 100%;\n          border-collapse: collapse;\n          border: 1px solid #ddd; /* Add border */\n        }\n\n        .table th,\n        .table td {\n          padding: 15px;\n          text-align: center;\n        }\n\n        .table th {\n          background-color: #f8f9fa;\n          font-weight: bold;\n          color: #333;\n          white-space: nowrap;\n        }\n\n        .table td {\n          background-color: #fff;\n          color: #555;\n        }\n\n        .table-striped tbody tr:nth-of-type(even) {\n          background-color: #ababab;\n        }\n\n        .status {\n          display: inline-block;\n          min-width: 120px;\n          color: #fff;\n          padding: 6px 10px;\n          border-radius: 20px;\n\n        }\n\n        .status-pending {\n          background-color: #ffc107;\n        }\n\n        .status-in_production {\n          background-color: #17a2b8;\n        }\n\n        .status-cancelled {\n          background-color: #dc3545;\n        }\n        \n        .cancel-order {\n          padding: 6px;\n          background-color: red;\n          color: white;\n          border-radius: 12px;\n          border: none;\n          font-weight: bold;\n          transition: 0.5s;\n          width: 120px;\n        }\n\n        .cancel-order:hover {\n          background-color: #fff;\n          color: red;\n          border: 1px solid red;\n          cursor: pointer;\n        }\n\n        .filter-form {\n          background-color: #f5f5f5;\n          padding: 20px;\n          border-radius: 8px;\n          margin-bottom: 20px;\n        }\n\n        .filter-form .form-row {\n          display: flex;\n          justify-content: space-between;\n        }\n\n        .filter-form .form-group {\n          margin-right: 10px;\n        }\n\n        .filter-form label {\n          font-weight: bold;\n          margin-right: 5px;\n        }\n        \n        .filter-form input[type=\"text\"],\n        .filter-form select {\n          padding: 5px;\n        }\n\n        .filter-form button {\n          padding: 5px 10px;\n          background-color: #007bff;\n          color: #fff;\n          border: none;\n          border-radius: 4px;\n          cursor: pointer;\n        }\n\n        .filter-form button[type=\"submit\"] {\n          background-color: #28a745;\n          width: 200px;\n          padding: 8px;\n        }\n\n        .filter-form button[type=\"button\"] {\n          background-color: #dc3545;\n          width: 200px;\n          padding: 8px;\n          margin-left: 20px;\n        }\n\n      "]
})], OrdersComponent);

/***/ }),

/***/ "./order-management-front/src/app/pagination/pagination.component.ts":
/*!***************************************************************************!*\
  !*** ./order-management-front/src/app/pagination/pagination.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationComponent: () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ "./order-management-front/node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./order-management-front/node_modules/@angular/core/fesm2022/core.mjs");











function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var PaginationComponent = /*#__PURE__*/function () {
  function PaginationComponent() {
    _classCallCheck(this, PaginationComponent);
    this.currentPage = 1;
    this.totalPages = 0;
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
  }
  _createClass(PaginationComponent, [{
    key: "pagesRange",
    get: function get() {
      var range = [];
      for (var i = 1; i <= this.totalPages; i++) {
        range.push(i);
      }
      return range;
    }
  }, {
    key: "changePage",
    value: function changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.pageChange.emit(page);
      }
    }
  }]);
  return PaginationComponent;
}();
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Input)()], PaginationComponent.prototype, "currentPage", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Input)()], PaginationComponent.prototype, "totalPages", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Output)()], PaginationComponent.prototype, "pageChange", void 0);
PaginationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-pagination',
  template: "\n    <div class=\"pagination-container\">\n      <ul class=\"pagination\">\n        <li class=\"pagination-item\" (click)=\"changePage(1)\">\n          <span class=\"pagination-link\">First</span>\n        </li>\n        <li class=\"pagination-item\" (click)=\"changePage(currentPage - 1)\" [class.disabled]=\"currentPage === 1\">\n          <span class=\"pagination-link\">Previous</span>\n        </li>\n        <li class=\"pagination-item\" *ngFor=\"let page of pagesRange\" (click)=\"changePage(page)\"\n          [class.active]=\"currentPage === page\">\n          <span class=\"pagination-link\">{{ page }}</span>\n        </li>\n        <li class=\"pagination-item\" (click)=\"changePage(currentPage + 1)\" [class.disabled]=\"currentPage === totalPages\">\n          <span class=\"pagination-link\">Next</span>\n        </li>\n        <li class=\"pagination-item\" (click)=\"changePage(totalPages)\">\n          <span class=\"pagination-link\">Last</span>\n        </li>\n      </ul>\n    </div>\n  ",
  styles: ["\n    .pagination-container {\n      display: flex;\n      justify-content: right;\n      width: 100%;\n      margin-top: 20px;\n    }\n\n    .pagination {\n      display: inline-flex;\n      list-style-type: none;\n      padding: 0;\n      margin: 0;\n    }\n\n    .pagination-item {\n      cursor: pointer;\n      padding: 8px 12px;\n      margin: 0 2px;\n      background-color: #f2f2f2;\n      border-radius: 30px;\n    }\n\n    .pagination-item:hover {\n      background-color: #ddd;\n    }\n\n    .pagination-item.disabled {\n      cursor: default;\n      background-color: #ccc;\n    }\n\n    .pagination-item.disabled:hover {\n      background-color: #ccc;\n    }\n    \n    .pagination-link {\n      color: #333;\n    }\n    \n    .pagination-item.active {\n      font-weight: bold;\n      background-color: #007bff;\n    }\n    .pagination-item.active > .pagination-link {\n      color: white;\n    }\n    "]
})], PaginationComponent);

/***/ }),

/***/ "./order-management-front/src/main.ts":
/*!********************************************!*\
  !*** ./order-management-front/src/main.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./order-management-front/node_modules/@angular/platform-browser-dynamic/fesm2022/platform-browser-dynamic.mjs");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ "./order-management-front/node_modules/zone.js/fesm2015/zone.js");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./order-management-front/src/app/app.module.ts");



(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)["catch"](function (err) {
  return console.error(err);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_slice_js-node_modules_core-js_modules_es_date_t-3fef1d"], () => (__webpack_exec__("./order-management-front/src/main.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsR0FDV0ssbUJBQW1CLENBa0IvQjs7Ozs7Ozs7Ozs7Ozs7O0FDL0YwRTtBQUMxRDtBQUM0QjtBQUc3QzBFLHlGQUFzQixFQUFFLENBQUNDLGVBQWUsQ0FBQ3hFLHNEQUFTLENBQUMsU0FDM0MsQ0FBQyxVQUFBeUUsR0FBRztFQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLENBQUM7QUFBQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vb3JkZXItbWFuYWdlbWVudC1mcm9udC9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vb3JkZXItbWFuYWdlbWVudC1mcm9udC9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vb3JkZXItbWFuYWdlbWVudC1mcm9udC9zcmMvYXBwL2NhbmNlbC1vcmRlci1tb2RhbC9jYW5jZWwtb3JkZXItbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL29yZGVyLW1hbmFnZW1lbnQtZnJvbnQvc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9vcmRlci1tYW5hZ2VtZW50LWZyb250L3NyYy9hcHAvb3JkZXJzL29yZGVycy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vb3JkZXItbWFuYWdlbWVudC1mcm9udC9zcmMvYXBwL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vb3JkZXItbWFuYWdlbWVudC1mcm9udC9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICA8YXBwLW5hdmJhcj48L2FwcC1uYXZiYXI+XG4gICAgICAgICAgPGFwcC1vcmRlcnM+XG4gICAgICAgICAgPC9hcHAtb3JkZXJzPlxuICAgICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHt9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBDYW5jZWxPcmRlck1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jYW5jZWwtb3JkZXItbW9kYWwvY2FuY2VsLW9yZGVyLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBPcmRlcnNDb21wb25lbnQsXG4gICAgTmF2YmFyQ29tcG9uZW50LFxuICAgIFBhZ2luYXRpb25Db21wb25lbnQsXG4gICAgQ2FuY2VsT3JkZXJNb2RhbENvbXBvbmVudCxcbiAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2FuY2VsLW9yZGVyLW1vZGFsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tIGNhbmNlbC1vcmRlci1tb2RhbC5jb21wb25lbnQuaHRtbCAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FuY2VsLW1vZGFsXCIgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbmNlbC1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxoMiBjbGFzcz1cImNhbmNlbC1tb2RhbC10aXRsZVwiPkNhbmNlbCBPcmRlcjwvaDI+XG4gICAgICAgIDxwIGNsYXNzPVwiY2FuY2VsLW1vZGFsLW1lc3NhZ2VcIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsIHRoaXMgb3JkZXI/PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FuY2VsLW1vZGFsLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FuY2VsLW1vZGFsLWJ1dHRvbiBjYW5jZWxcIiAoY2xpY2spPVwiY2FuY2VsT3JkZXIoKVwiPlllczwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWwtbW9kYWwtYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPk5vPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgICAgYFxuICAgICAgICAvKiBjYW5jZWwtb3JkZXItbW9kYWwuY29tcG9uZW50LmNzcyAqL1xuICAgICAgICAuY2FuY2VsLW1vZGFsIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FuY2VsLW1vZGFsLWNvbnRlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FuY2VsLW1vZGFsLXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYW5jZWwtbW9kYWwtbWVzc2FnZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FuY2VsLW1vZGFsLWJ1dHRvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FuY2VsLW1vZGFsLWJ1dHRvbiB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhbmNlbC1tb2RhbC1idXR0b24uY2FuY2VsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhbmNlbC1tb2RhbC1idXR0b24uY2FuY2VsOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiO1xuICAgICAgICB9XG5cbiAgICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlck1vZGFsQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIGNhbmNlbENvbmZpcm1lZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIG1vZGFsQ2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNhbmNlbE9yZGVyKCkge1xuICAgIHRoaXMuY2FuY2VsQ29uZmlybWVkLmVtaXQoKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5tb2RhbENsb3NlZC5lbWl0KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbmF2YmFyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmF2IGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxvZ28tdGV4dFwiPk9yZGVyIE1hbmFnZW1lbnQgQXBwPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3M9XCJuYXYtbWVudVwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiAoY2xpY2spPVwicmVmcmVzaFBhZ2UoKVwiPkhvbWU8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICAgIGAubmF2YmFyIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkYWRhO1xuICAgICAgfVxuXG4gICAgICAubG9nbyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLmxvZ28tdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjNGI0ZDRiO1xuICAgICAgfVxuXG4gICAgICAubmF2LW1lbnUge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5uYXYtbGluayB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgICB9XG5cbiAgICAgIC5uYXYtbGluazpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1gXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IHtcblxuICByZWZyZXNoUGFnZSgpIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW9yZGVycycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGZvcm0gY2xhc3M9XCJmaWx0ZXItZm9ybVwiIChuZ1N1Ym1pdCk9XCJmaWx0ZXJEYXRhKClcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJjdXN0b21lck5hbWVcIj5DdXN0b21lciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3VzdG9tZXJOYW1lXCIgaWQ9XCJjdXN0b21lck5hbWVcIiBbKG5nTW9kZWwpXT1cImN1c3RvbWVyTmFtZVwiPlxuXG4gICAgICAgICAgPGxhYmVsIGZvcj1cIm9yZGVyU3RhdHVzXCI+T3JkZXIgU3RhdHVzPC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IGlkPVwib3JkZXJTdGF0dXNcIiBuYW1lPVwib3JkZXJTdGF0dXNcIiBbKG5nTW9kZWwpXT1cIm9yZGVyU3RhdHVzXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVuZGluZ1wiPlBlbmRpbmc8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbl9wcm9kdWN0aW9uXCI+SW4gUHJvZHVjdGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNhbmNlbGxlZFwiID5DYW5jZWxsZWQ8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b25cIj5GaWx0ZXI8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvblwiIChjbGljayk9XCJyZXNldEZpbHRlcigpXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGFibGUtYmxvY2tcIj5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5JRDwvdGg+XG4gICAgICAgICAgICA8dGg+T3JkZXIgRGF0ZTwvdGg+XG4gICAgICAgICAgICA8dGg+Q3VzdG9tZXI8L3RoPlxuICAgICAgICAgICAgPHRoPkFkZHJlc3M8L3RoPlxuICAgICAgICAgICAgPHRoPkNpdHk8L3RoPlxuICAgICAgICAgICAgPHRoPlBvc3Rjb2RlPC90aD5cbiAgICAgICAgICAgIDx0aD5Db3VudHJ5PC90aD5cbiAgICAgICAgICAgIDx0aD5BbW91bnQ8L3RoPlxuICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XG4gICAgICAgICAgICA8dGg+TGFzdCBNb2RpZmllZDwvdGg+XG4gICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhZ2VkRGF0YVwiPlxuICAgICAgICAgICAgPHRkPnt7IGl0ZW0uaWQgfX08L3RkPlxuICAgICAgICAgICAgPHRkPnt7IGdlbmVyYXRlTmljZURhdGUoaXRlbS5vcmRlckRhdGUuZGF0ZSkgfX08L3RkPlxuICAgICAgICAgICAgPHRkPnt7IGl0ZW0uY3VzdG9tZXIgfX08L3RkPlxuICAgICAgICAgICAgPHRkPnt7IGl0ZW0uYWRkcmVzcyB9fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3sgaXRlbS5jaXR5IH19PC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBpdGVtLnBvc3Rjb2RlIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBpdGVtLmNvdW50cnkgfX08L3RkPlxuICAgICAgICAgICAgPHRkPnt7IGl0ZW0uYW1vdW50IH19PC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0dXMgc3RhdHVzLXt7IGl0ZW0uc3RhdHVzIH19XCI+e3sgZ2V0U3RhdHVzKGl0ZW0uc3RhdHVzKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3sgZ2VuZXJhdGVOaWNlRGF0ZShpdGVtLm9yZGVyRGF0ZS5kYXRlKSAgfX08L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FuY2VsLW9yZGVyXCIgKm5nSWY9XCJpdGVtLnN0YXR1cyAhPT0gJ2NhbmNlbGxlZCdcIiAoY2xpY2spPVwiY2FuY2VsUmVxdWVzdChpdGVtLmlkKVwiPkNhbmNlbCBPcmRlcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxhcHAtcGFnaW5hdGlvblxuICAgICAgICAgIFtjdXJyZW50UGFnZV09XCJjdXJyZW50UGFnZVwiXG4gICAgICAgICAgW3RvdGFsUGFnZXNdPVwidG90YWxQYWdlc1wiXG4gICAgICAgICAgKHBhZ2VDaGFuZ2UpPVwib25QYWdlQ2hhbmdlKCRldmVudClcIlxuICAgICAgPjwvYXBwLXBhZ2luYXRpb24+XG4gICAgPC9kaXY+XG5cbiAgICA8YXBwLWNhbmNlbC1vcmRlci1tb2RhbFxuICAgICAgICAqbmdJZj1cInNob3dDYW5jZWxNb2RhbFwiXG4gICAgICAgIChjYW5jZWxDb25maXJtZWQpPVwiY29uZmlybUNhbmNlbE9yZGVyKClcIlxuICAgICAgICAobW9kYWxDbG9zZWQpPVwiY2xvc2VDYW5jZWxNb2RhbCgpXCJcbiAgICA+PC9hcHAtY2FuY2VsLW9yZGVyLW1vZGFsPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICAgIGBcbiAgICAgICAgLnRhYmxlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IC8qIEFkZCBib3JkZXIgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZSB0aCxcbiAgICAgICAgLnRhYmxlIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZSB0aCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlIHRkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUoZXZlbikge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdHVzLXBlbmRpbmcge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdHVzLWluX3Byb2R1Y3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdHVzLWNhbmNlbGxlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmNhbmNlbC1vcmRlciB7XG4gICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FuY2VsLW9yZGVyOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXItZm9ybSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlci1mb3JtIC5mb3JtLXJvdyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsdGVyLWZvcm0gLmZvcm0tZ3JvdXAge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXItZm9ybSBsYWJlbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5maWx0ZXItZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbiAgICAgICAgLmZpbHRlci1mb3JtIHNlbGVjdCB7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlci1mb3JtIGJ1dHRvbiB7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWx0ZXItZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlci1mb3JtIGJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgYFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBvcmRlcnMgPSBbXTtcbiAgY3VycmVudFBhZ2U6IG51bWJlciA9IDE7XG4gIGl0ZW1zUGVyUGFnZTogbnVtYmVyID0gMTA7XG4gIHRvdGFsUGFnZXM6IG51bWJlciA9IDA7XG4gIGN1c3RvbWVyTmFtZTogc3RyaW5nID0gJyc7XG4gIG9yZGVyU3RhdHVzOiBzdHJpbmcgPSAnJztcbiAgc2hvd0NhbmNlbE1vZGFsID0gZmFsc2U7XG4gIG9yZGVyRm9yRGVsZXRlOnN0cmluZyA9ICcnO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZERhdGEoKTtcbiAgfVxuXG4gIGxvYWREYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xuICAgICAgY3VzdG9tZXJOYW1lOiB0aGlzLmN1c3RvbWVyTmFtZSxcbiAgICAgIG9yZGVyU3RhdHVzOiB0aGlzLm9yZGVyU3RhdHVzXG4gICAgfTtcblxuICAgIGF4aW9zLmdldCgnL2FwaS9vcmRlcnMnLCB7cGFyYW1zOiByZXF1ZXN0RGF0YX0pLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMub3JkZXJzID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgY2FsY3VsYXRlVG90YWxQYWdlcygpIHtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5vcmRlcnMubGVuZ3RoIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xuICB9XG5cbiAgb25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICB9XG5cbiAgZ2V0IHBhZ2VkRGF0YSgpOiBhbnlbXSB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9ICh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLml0ZW1zUGVyUGFnZTtcbiAgICByZXR1cm4gdGhpcy5vcmRlcnMuc2xpY2Uoc3RhcnRJbmRleCwgc3RhcnRJbmRleCArIHRoaXMuaXRlbXNQZXJQYWdlKTtcbiAgfVxuXG4gIGdldFN0YXR1cyhzdGF0dXM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgJ3BlbmRpbmcnOlxuICAgICAgICByZXR1cm4gJ1BlbmRpbmcnO1xuICAgICAgY2FzZSAnaW5fcHJvZHVjdGlvbic6XG4gICAgICAgIHJldHVybiAnSW4gUHJvZHVjdGlvbic7XG4gICAgICBjYXNlICdjYW5jZWxsZWQnOlxuICAgICAgICByZXR1cm4gJ0NhbmNlbGxlZCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVOaWNlRGF0ZShvcmlnaW5hbERhdGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbmljZURhdGUgPSBuZXcgRGF0ZShvcmlnaW5hbERhdGUpO1xuXG4gICAgcmV0dXJuIG5pY2VEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgbWludXRlOiBcIm51bWVyaWNcIixcbiAgICAgIHNlY29uZDogXCJudW1lcmljXCIsXG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJEYXRhKCkge1xuICAgIHRoaXMubG9hZERhdGEoKTtcbiAgfVxuXG4gIHJlc2V0RmlsdGVyKCkge1xuICAgIHRoaXMuY3VzdG9tZXJOYW1lID0gJyc7XG4gICAgdGhpcy5vcmRlclN0YXR1cyA9ICcnO1xuICAgIHRoaXMuZmlsdGVyRGF0YSgpO1xuICB9XG5cbiAgY2FuY2VsUmVxdWVzdChvcmRlcklkOiBhbnkpICB7XG4gICAgdGhpcy5vcmRlckZvckRlbGV0ZSA9IG9yZGVySWQ7XG4gICAgdGhpcy5zaG93Q2FuY2VsTW9kYWwgPSB0cnVlO1xuICB9XG5cbiAgY29uZmlybUNhbmNlbE9yZGVyKCkge1xuICAgIGF4aW9zLnB1dCgnL2FwaS9jYW5jZWwvb3JkZXIvJysgdGhpcy5vcmRlckZvckRlbGV0ZSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgdGhpcy5jbG9zZUNhbmNlbE1vZGFsKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyRGF0YSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZUNhbmNlbE1vZGFsKCk7XG4gICAgICAgIGFsZXJ0KCdmYWlsZWQgdG8gY2FuY2VsIG9yZGVyJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNsb3NlQ2FuY2VsTW9kYWwoKSB7XG4gICAgdGhpcy5zaG93Q2FuY2VsTW9kYWwgPSBmYWxzZTtcbiAgICB0aGlzLm9yZGVyRm9yRGVsZXRlID0gJyc7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1jb250YWluZXJcIj5cbiAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgPGxpIGNsYXNzPVwicGFnaW5hdGlvbi1pdGVtXCIgKGNsaWNrKT1cImNoYW5nZVBhZ2UoMSlcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiPkZpcnN0PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJwYWdpbmF0aW9uLWl0ZW1cIiAoY2xpY2spPVwiY2hhbmdlUGFnZShjdXJyZW50UGFnZSAtIDEpXCIgW2NsYXNzLmRpc2FibGVkXT1cImN1cnJlbnRQYWdlID09PSAxXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIj5QcmV2aW91czwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwicGFnaW5hdGlvbi1pdGVtXCIgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXNSYW5nZVwiIChjbGljayk9XCJjaGFuZ2VQYWdlKHBhZ2UpXCJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImN1cnJlbnRQYWdlID09PSBwYWdlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIj57eyBwYWdlIH19PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJwYWdpbmF0aW9uLWl0ZW1cIiAoY2xpY2spPVwiY2hhbmdlUGFnZShjdXJyZW50UGFnZSArIDEpXCIgW2NsYXNzLmRpc2FibGVkXT1cImN1cnJlbnRQYWdlID09PSB0b3RhbFBhZ2VzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIj5OZXh0PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJwYWdpbmF0aW9uLWl0ZW1cIiAoY2xpY2spPVwiY2hhbmdlUGFnZSh0b3RhbFBhZ2VzKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCI+TGFzdDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAucGFnaW5hdGlvbi1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLnBhZ2luYXRpb24ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5wYWdpbmF0aW9uLWl0ZW0ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICBtYXJnaW46IDAgMnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgfVxuXG4gICAgLnBhZ2luYXRpb24taXRlbTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIH1cblxuICAgIC5wYWdpbmF0aW9uLWl0ZW0uZGlzYWJsZWQge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICB9XG5cbiAgICAucGFnaW5hdGlvbi1pdGVtLmRpc2FibGVkOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgfVxuICAgIFxuICAgIC5wYWdpbmF0aW9uLWxpbmsge1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuICAgIFxuICAgIC5wYWdpbmF0aW9uLWl0ZW0uYWN0aXZlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICB9XG4gICAgLnBhZ2luYXRpb24taXRlbS5hY3RpdmUgPiAucGFnaW5hdGlvbi1saW5rIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBjdXJyZW50UGFnZTogbnVtYmVyID0gMTtcbiAgQElucHV0KCkgdG90YWxQYWdlczogbnVtYmVyID0gMDtcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBnZXQgcGFnZXNSYW5nZSgpOiBudW1iZXJbXSB7XG4gICAgY29uc3QgcmFuZ2UgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgcmFuZ2UucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmdlO1xuICB9XG5cbiAgY2hhbmdlUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAocGFnZSA+IDAgJiYgcGFnZSA8PSB0aGlzLnRvdGFsUGFnZXMpIHtcbiAgICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHBhZ2UpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJBcHBDb21wb25lbnQiLCJfY3JlYXRlQ2xhc3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJfX2RlY29yYXRlIiwic2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsInN0eWxlcyIsIk5nTW9kdWxlIiwiQnJvd3Nlck1vZHVsZSIsIk9yZGVyc0NvbXBvbmVudCIsIk5hdmJhckNvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJGb3Jtc01vZHVsZSIsIkNhbmNlbE9yZGVyTW9kYWxDb21wb25lbnQiLCJBcHBNb2R1bGUiLCJkZWNsYXJhdGlvbnMiLCJpbXBvcnRzIiwicHJvdmlkZXJzIiwiYm9vdHN0cmFwIiwiRXZlbnRFbWl0dGVyIiwiT3V0cHV0IiwiY2FuY2VsQ29uZmlybWVkIiwibW9kYWxDbG9zZWQiLCJrZXkiLCJ2YWx1ZSIsImNhbmNlbE9yZGVyIiwiZW1pdCIsImNsb3NlTW9kYWwiLCJyZWZyZXNoUGFnZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiYXhpb3MiLCJfdGhpcyIsIm9yZGVycyIsImN1cnJlbnRQYWdlIiwiaXRlbXNQZXJQYWdlIiwidG90YWxQYWdlcyIsImN1c3RvbWVyTmFtZSIsIm9yZGVyU3RhdHVzIiwic2hvd0NhbmNlbE1vZGFsIiwib3JkZXJGb3JEZWxldGUiLCJsb2FkRGF0YSIsInJlcXVlc3REYXRhIiwiZ2V0IiwicGFyYW1zIiwidGhlbiIsInJlcyIsImRhdGEiLCJjYWxjdWxhdGVUb3RhbFBhZ2VzIiwibmdPbkluaXQiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsIm9uUGFnZUNoYW5nZSIsInBhZ2UiLCJzdGFydEluZGV4Iiwic2xpY2UiLCJnZXRTdGF0dXMiLCJzdGF0dXMiLCJnZW5lcmF0ZU5pY2VEYXRlIiwib3JpZ2luYWxEYXRlIiwibmljZURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsImZpbHRlckRhdGEiLCJyZXNldEZpbHRlciIsImNhbmNlbFJlcXVlc3QiLCJvcmRlcklkIiwiY29uZmlybUNhbmNlbE9yZGVyIiwiX3RoaXMyIiwicHV0IiwiY2xvc2VDYW5jZWxNb2RhbCIsImFsZXJ0IiwiSW5wdXQiLCJwYWdlQ2hhbmdlIiwicmFuZ2UiLCJpIiwicHVzaCIsImNoYW5nZVBhZ2UiLCJwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIiwiYm9vdHN0cmFwTW9kdWxlIiwiZXJyIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==