import ItemList from "./ItemList";


const RestaurantCategory=({data,showItems,setShowIndex})=>{
  const handleClick=()=>{
  setShowIndex();
 };
    return(
        <div>
          
          <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4"    >
            <div className="flex justify-between " onClick={handleClick}>
            <span className="font-bold text-lg cursor-pointer">{data.title} ({data.itemCards.length})</span>
            <span className="cursor-pointer"> ⬇️ </span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
          </div>
        </div>
    );
};

export default RestaurantCategory;