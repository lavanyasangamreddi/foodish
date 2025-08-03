import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData.js";
import { useState, useEffect ,useContext} from "react";
import Shimmer from "./Shimmer";
import {SWIGGY_API_URL} from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const[searchText,setSearchText]=useState("");
  


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
      const cards = json?.data?.cards || [];

  let allRestaurants = [];

for (const card of cards) {
  const restaurants =card?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  if (restaurants) {
    allRestaurants = allRestaurants.concat(restaurants);
  }
}

setListOfRestaurant(allRestaurants.slice(0,20)); 
setFilteredRestaurant(allRestaurants.slice(0,20));

};
  
const onlineStatus=useOnlineStatus();

if (onlineStatus==="false" )return (
  <h1>Looks like you are offline.
  Check your internet connection</h1>);

// const {loggedInUser,setUserName}=useContext(UserContext);

  if(listOfRestaurants.length===0){
    return   <Shimmer />;
  }
  
    return (
        <div className="body">
            <div className="filter flex">
              <div className="search m-1 p-4 w-[60%]">
                    <input 
                      type="text"  className="w-[60%] max-w-md px-4 py-2 text-black placeholder-black border border-black rounded-l-md focus:outline-none" 
                      value={searchText}     placeholder="Enter your search "
                      onChange={(e)=>{
                      setSearchText(e.target.value);
                    }}/>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-r-md transition duration-200"
                       onClick={()=>{
                         const filteredRestaurant=listOfRestaurants.filter((res)=>
                         res.info.name.toLowerCase().includes(searchText.toLowerCase())
                       );
                       setFilteredRestaurant(filteredRestaurant);
                       }}>Search
                    </button>
              </div>
              <div className="search m-1 p-4 flex items-center">
                   <button className=" bg-green-200 px-4 py-2 rounded-lg"
                   onClick={()=>{
                      const filteredList=listOfRestaurants.filter(
                         (res)=>res.info.avgRating>4.5
                       );
                      setFilteredRestaurant(filteredList);
                    }}>
                    Top rated Restaurants</button>
              </div>
            </div>
        
            
            <div className="flex flex-wrap">
              {
                 Array.from(new Map(filteredRestaurant.map
                  (r => [r.info.id, r])).values()).map((restaurant) => (
                    <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant.info.id}>
                          <RestaurantCard resData={restaurant} />
                    </Link>
                  ))
              }
            
            </div>
        </div>
    );
};

export default Body;