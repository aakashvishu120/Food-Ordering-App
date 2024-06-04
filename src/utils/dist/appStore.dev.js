"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _cartSlice = _interopRequireDefault(require("./cartSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//one reducer for the whole app and it can contain multiple small reducer
var appStore = (0, _toolkit.configureStore)({
  reducer: {
    cart: _cartSlice["default"]
  }
});
var _default = appStore;
exports["default"] = _default;