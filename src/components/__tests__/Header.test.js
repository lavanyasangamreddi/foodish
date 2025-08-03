import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import {fireEvent,render,screen} from "@testing-library/react";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";


test ("Should render Header component with login button",()=>{
     render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
             </Provider>
        </BrowserRouter>
     );

     //const loginButton=screen.getByRole("button");

     //Multiple buttons with text of Login
     const loginButton=screen.getByRole("button",{name:"Login"});

     //const loginButton=screen.getByText("Login");

     expect(loginButton).toBeInTheDocument();
});


test ("Should render Header component with cart item",()=>{ 
   render(
      <BrowserRouter>
          <Provider store={appStore}>
              <Header/>
           </Provider>
      </BrowserRouter>
   );

   const cartItems=screen.getByText(/Cart/);

   expect(cartItems).toBeInTheDocument();

});

test ("Should change login button to logout button",()=>{ 
   render(
      <BrowserRouter>
          <Provider store={appStore}>
              <Header/>
           </Provider>
      </BrowserRouter>
   );
   const loginButton=screen.getByRole("button",{name:"Login"});

   fireEvent.click(loginButton);

   const logoutButton=screen.getByRole("button",{name:"Logout"});

   expect(logoutButton).toBeInTheDocument();

});

