import { useDispatch } from "react-redux";
import { CDN_URL, NO_IMG } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));   //passed in itemlist at action params in addItem obj
    }

    return <div>
            {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-4 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                
                <div className="py-2">
                    <span>
                        {item.card.info.name}
                    </span>
                    <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs text-gray-400">{item.card.info.description}</p>
            </div>

            <div className="w-3/12 p-4">
                <div className="absolute mb-1">
                    <button className="p-2 mx-6 mt-44 rounded-lg bg-white shadow-lg font-bold text-green-800 text-2xl w-40" 
                    onClick={() => handleAddItem(item)}>ADD</button>
                </div>
                <img src={item.card.info.imageId ? CDN_URL+item.card.info.imageId : NO_IMG} className="w-full rounded-lg h-52" alt="" />
                
            </div>
            
</div>

        ))}
    </div>
}

export default ItemList;

//for image fix use middleware parcel plugin 