import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList=({items})=>{

    const dispatch=useDispatch();

    const handleAddItems=(item)=>{
        dispatch(addItem(item));
    }

    return(
        <div>
            {items.map((item,index)=>(
                <div key={`${item.card.info.id}-${index}`} className="p-2 m-2 border-gray-700 border-b-2 text-left gap-4 w-70">
                   <div className="flex">
                        <div className="py-2 flex-1">
                             <span className="font-semibold">{item.card.info.name}</span>
                             <span className="font-semibold ml-2">
                                - ₹ {item.card.info.price
                                 ?item.card.info.price/100
                                 :item.card.info.defaultPrice/100   }
                             </span>
                             
                           <p className="text-sm mt-1  text-gray-600">{item.card.info.description}</p>
                        </div>
                        <div>
                            <div className="absolute">
                                <button className="px-2 py-1 mx-16 rounded-lg bg-white text-green-600 shadow-lg" 
                                onClick={()=>handleAddItems(item)}>Add +</button>
                            </div>
                            <img
                            src={CDN_URL + item.card.info.imageId}
                            className="w-24 h-24 object-cover rounded-lg"
                            alt={item.card.info.name}
                           />
                        </div>

                    </div>
                </div>
                        
             ))}
           
        </div>
    );
};

export default ItemList;