"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clearCart = exports.removeItem = exports.addItem = void 0;

var _toolkit = require("@reduxjs/toolkit");

//in this case there are multiple small reducer
var cartSlice = (0, _toolkit.createSlice)({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: function addItem(state, action) {
      //redux toolkit uses immer BTS
      //modifying state here or return a new state
      state.items.push(action.payload); //vanialla(older) Redux => Dont mutate state, returning was mandatory
      //const newState = [...state];
      //newState.items.push(action.payload);
      //return newState;
    },
    removeItem: function removeItem(state, action) {
      state.items.pop();
    },
    clearCart: function clearCart(state) {
      state.items.length = 0;
      console.log((0, _toolkit.current)(state)); //state = []  // we can't do this it will be done locally not to that reference/original
      //return {items : []}   //this new [] will be replaced inside originalState = items : []
    }
  }
});
var _cartSlice$actions = cartSlice.actions,
    addItem = _cartSlice$actions.addItem,
    removeItem = _cartSlice$actions.removeItem,
    clearCart = _cartSlice$actions.clearCart;
exports.clearCart = clearCart;
exports.removeItem = removeItem;
exports.addItem = addItem;
var _default = cartSlice.reducer;
exports["default"] = _default;