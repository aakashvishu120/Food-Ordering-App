import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { RESTAURANT_API } from "../utils/constant";
UserContext

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText , setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    } , []);

    const fetchData = async () => {
        //fetch function is not given by javascript it is given by browser
        const data = await fetch(RESTAURANT_API);
        const json = await data.json();

        console.log("aakash");
        console.log(data);
        console.log(json);
    
        let i;
        for( i =0 ; i < json.data.cards.length ; i++ ){
            let keyExist = json?.data?.cards[i]?.card?.card?.id === 'restaurant_grid_listing';
            if(keyExist){
                break;
            }
        }

        setListOfRestaurant(json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return <h1 className="offline">Looks like you are Offline !!
            <br></br>Please check your internet connection</h1>
    }

    const {loggedInUser , setUserName} = useContext(UserContext);

    return listOfRestaurants.length === 0 ?  <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" data-testid="searchInput" className="border border-solid border-black rounded-md py-1 w-72" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)}} />
                    <button onClick={
                        ()=>{
                        const filteredRestaurant = listOfRestaurants.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        console.log(filteredRestaurant);
                        setFilteredRestaurant(filteredRestaurant);
                    }} className="px-4 py-2 m-4 bg-green-300 rounded-lg">Search</button>
                </div>

                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={
                        ()=>{
                            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                                setFilteredRestaurant(filteredList);
                            }
                        }>Top Rated Restaurants</button>
                </div>

                {/* updating usercotext variable */}
                <div className="m-4 p-4 flex items-center">
                    <label>Username : </label>
                    <input className="border border-black mx-2 px-2" type="text" onChange={(e)=>setUserName(e.target.value)} value={loggedInUser}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant, index) => (<Link to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant.info} /></Link>))
                }
            </div>
        </div>
    )
}

export default Body;