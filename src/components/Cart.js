import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {


    const  cartItems = useSelector((store) => store.cart.items);

    //performance loss in this code  inefficient code, always subscribe(select) the right portion of the store to optimise performance
    //const store = useSelector((store) => store);
    //const cartItems = store.cart.items;


    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto border-solid border-2 border-black-400 rounded-lg">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length == 0 && (<h2>Cart is Empty Add Items to the Cart</h2>)}
            <ItemList items={cartItems} />
        </div>
    </div>
    );
};

export default Cart;