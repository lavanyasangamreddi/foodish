import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import {useParams } from "react-router-dom";
import {MENU_API} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {CDN_URL} from "../utils/constants";


const RestaurantMenu = () => {


  const {resId}=useParams();
  
  const resInfo=useRestaurantMenu(resId);

  const [showIndex,setShowIndex]=useState(null);


  if (!resInfo) return <Shimmer />;


  const { name,cuisines,costForTwo,cloudinaryImageId} =
    resInfo?.cards[2]?.card?.card?.info;
  
  let {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
    c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  
  return ( 
    <div className="bg-orange-400">
      <div className="mt-5">
        <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-800 text-white p-5 rounded-lg mx-auto w-[90%] h-[250px]">
          <img
           src={CDN_URL + cloudinaryImageId}
          alt="restaurant"
          className="w-[260px] h-[210px] object-cover rounded-lg  mb-3 md:mb-0 md:mr-6"
          />
    
          <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold m-2 p-2">{name}</h1>
              <p className="text-lg text-gray-300 m-2 p-2">{cuisines.join(", ")}</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-2 text-sm">
                 <span className="bg-green-600 px-2 py-1 mx-2 my-2  rounded text-white font-semibold text-lg">⭐ {resInfo?.cards[2]?.card?.card?.info?.avgRating}</span>
                 <span>{resInfo?.cards[2]?.card?.card?.info?.sla?.slaString}</span>
                 <span className="text-lg p-2 m-2">₹{costForTwo / 100} for two</span>
              </div>
          </div>
        </div>
      </div>
     {categories.map((category,index)=>(
      <RestaurantCategory key={category?.card?.card?.id || category?.card?.card?.title} data={category?.card?.card}
       showItems={index===showIndex ? true : false}
       setShowIndex={()=>setShowIndex(index)}
     />
     ))}
    </div>
  );
};

export default RestaurantMenu;