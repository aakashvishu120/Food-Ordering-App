"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

//this is like global variable and can be accessible from anywhere in our app
var UserContext = (0, _react.createContext)({
  loggedInUser: "Default User"
});
var _default = UserContext;
exports["default"] = _default;