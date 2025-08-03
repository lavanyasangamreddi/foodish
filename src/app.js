import './app.css'; 
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import RestaurantCard from "./components/RestaurantCard.js";
import About from  "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from './utils/UserContext.js';
import {useState,useEffect} from "react";
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';
import Login from './components/Login.js';
import UserContext from './utils/UserContext.js';
import appStore from './utils/appStore.js';


const AppLayout=()=>{

  const [userName,setUserName]=useState();
  const [btnReactName, setBtnNameReact] = useState("Login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const data={
      name:""
    };
    setUserName(data.name);
  },[]);

  
    const handleLoginClick = () => {
      if (btnReactName === "Login") {
        setIsLoggedIn(true);
        setBtnNameReact("Logout");
      } else {
        setIsLoggedIn(false);
        setBtnNameReact("Login");
      }
    };
   return(
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName,setUserName, handleLoginClick,}}>
        <div className="px-6">
        <Header btnReactName={btnReactName} handleLoginClick={handleLoginClick} />
          <Outlet/>
        </div>
      </UserContext.Provider>
    </Provider>
    );
   };


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      { path: "/", element: <Body /> },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },{
        path:"/cart",
        element:<Cart/>
      },
      {
        path: "/login",
        element: <Login />
      }
    ],

errorElement:<Error/>,
  },
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);