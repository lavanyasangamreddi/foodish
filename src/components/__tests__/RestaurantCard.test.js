import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test ("Should render Restaurant card componenet with props",()=>{

    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name=screen.getByText("PRAKASH TIFFIN PARLOUR");

    expect(name).toBeInTheDocument();
});