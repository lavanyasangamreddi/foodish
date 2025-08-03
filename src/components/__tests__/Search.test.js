import {render,act,screen} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResList.json";
import {BrowserRouter} from "react-router-dom"; 
import "@testing-library/jest-dom";


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

test ("Should render the Body Component with search",async()=>{
    await act(async()=>{
    render(<BrowserRouter><Body/></BrowserRouter>)
   });

    // const searchBtn=screen.getByRole("button",{name:"Search"});

    
    // console.log(searchBtn);

    // expect(searchBtn).toBeInTheDocument();  

    //const cardsBeForSearch=screen.

    
     
});