import {render,screen} from "@testing-library/react";
import act from "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";

global.fetch =jest.fn(()=>
    Promise.resolve({
        json: ()=>Promise.resolve(MOCK_DATA);
    })
);

test ("Should load restaurant menu ",async()=>{
    await act(async()=>render (<RestaurantMenu/>));

    const accordianHeader=screen.getByText("Cornetto");
});