import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { CART_URL } from "../utils/constants";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    console.log("Cart Items:", cartItems);


    const dispatch=useDispatch();

    const handleClearCart=()=>{
       dispatch(clearCart());
    };
    const handleCheckout = () => {
        alert("Proceeding to checkout!"); 
    };

    const totalAmount = cartItems.reduce((sum, item) => {
        const priceInPaise = item.card?.info?.price || 0;
        const priceInRupees = priceInPaise / 100;
        return sum + priceInRupees;
      }, 0);
      
    return(
        <div>
            <h1 className="font-bold text-center p-2 ">Cart</h1>
            <div className="w-9/12 m-auto">
                <button className="bg-blue-200 rounded-lg p-2 text-center text-black mx-auto block align-right" 
                 onClick={handleClearCart}>Clear cart</button>
                 {cartItems.length===0 &&(
                     <div>
                         <img className="h-60 w-30 border-black bg-white m-auto " src={CART_URL}/>
                         <h1 className="font-bold text-center text-[25px]">Your cart is empty!!</h1>
                     </div>
                 )}
                  <ItemList items={cartItems}/>
            </div>
            <div className="flex flex-col items-center mt-8">
                <h2 className="text-xl font-semibold mb-4">
                   Total: ₹ {totalAmount}
                </h2>
                <button
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                   onClick={handleCheckout}
                  > Checkout</button>
            </div>
       </div>
       

       
     );
};

export default Cart;