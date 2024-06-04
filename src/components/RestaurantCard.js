import { CDN_URL } from "../utils/constant";

const styleCard = {
    backgroundColor : "#f0f0f0",
}

const RestaurantCard = (props) => {
    const {resData} = props;
    // console.log("resDATA = ");
    // console.log(resData);

    const {cloudinaryImageId , areaName, name , cuisines , avgRating, sla , costForTwo} = resData;
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img src={CDN_URL+cloudinaryImageId} alt="res-logo" className="rounded-lg min-h-64" />
            <h3 className="font-bold py-4">{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{sla.deliveryTime} mins</h4>
            <h4>{costForTwo}</h4>
            <h4>{areaName}</h4>
        </div>
    )
}

export default RestaurantCard;