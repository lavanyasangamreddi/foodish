import {LOGO_URL} from "../utils/constants";
import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=({ btnReactName })=>{

    const {loggedInUser}=useContext(UserContext);

    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems); 

    return(
        <div className="flex justify-between bg-yellow-200 shadow-lg items-center px-4 py-2">
            <div className="flex items-center">
               <img  className="w-32 h-22" src={LOGO_URL}/>
            </div>
            <div>
                <ul className="flex gap-6 items-center list-none p-4 m-4">
                    <li className="px-2"> 
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/About">About</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/Contact">Contact us</Link>
                    </li>
                    <li className="px-2 cursor-pointer">
                        <Link to="/cart">🛒({cartItems.length}items)</Link>
                    </li>
                    <li className="px-2 cursor-pointer">
                        <Link to="/login">
                            <button className="login-btn">{btnReactName}</button>
                        </Link>
                    </li>
                    <li>{loggedInUser}</li> 
                </ul>
            </div>
        </div>
    );
};

export default Header;