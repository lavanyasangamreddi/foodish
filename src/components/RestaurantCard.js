import {CDN_URL} from "../utils/constants";
const RestaurantCard=(props)=>{

    const{resData}=props;
    

    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.info;
        return(
        <div className="mx-3 my-3 p-3 w-[230px] h-330px rounded-lg bg-gray-100 hover:bg-gray-300 shadow-sm text-sm justify-items-center transition-all duration-200 text-left">
            <img className="rounded-md w-full h-[120px] object-cover" alt="img-logo"
                 src={CDN_URL+ cloudinaryImageId}/>
                <h3 className="font-semibold py-2 text-base line-clamp-2 text-left">{name}</h3>
                <p className="text-gray-700 text-xs line-clamp-2 text-left">{cuisines.join(", ")}</p>
                <div className="flex items-center gap-2 py-1 text-xs ">
                    <span className="bg-green-500 px-1 py-0.5 rounded text-white text-xs text-left">
                        ⭐ {avgRating}
                    </span>
                    <span>{costForTwo}</span>
                    <span>{deliveryTime}</span>
                </div>
        </div>
    );
};

export default RestaurantCard;