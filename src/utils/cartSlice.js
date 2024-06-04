import { createSlice, current } from "@reduxjs/toolkit";


//in this case there are multiple small reducer
const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state, action) => {
            //redux toolkit uses immer BTS
            //modifying state here or return a new state
            state.items.push(action.payload);



            //vanialla(older) Redux => Dont mutate state, returning was mandatory
            //const newState = [...state];
            //newState.items.push(action.payload);
            //return newState;
        },
        removeItem : (state, action) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0; 
            console.log(current(state));
            //state = []  // we can't do this it will be done locally not to that reference/original
            //return {items : []}   //this new [] will be replaced inside originalState = items : []
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;