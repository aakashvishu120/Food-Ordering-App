import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    const [btnNameReact , setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    //subscribing to store using a selector --redux
    const cartItems = useSelector((store) => store.cart.items);


    useEffect(()=>{ 
        console.log("useEffects called");
    } , [btnNameReact]);
    
    return (
        <div className="flex justify-between md:bg-pink-100 shadow-lg sm:bg-yellow-100 max-lg:bg-green-50">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status : {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li> 
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart">Cart ({cartItems.length} items)</Link>
                    </li>



                    <button className="Login" onClick={()=>{
                        btnNameReact === "Login" ? setbtnNameReact("Log Out") : setbtnNameReact("Login");
                        }}>{btnNameReact}</button>

                        <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;