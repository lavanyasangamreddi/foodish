import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


// describe("Contact us Page test case",()=>{

//     beforeAll(()=>{
//         console.log("after All");
//     });

//     afterAll(()=>{
//         console.log("After all");
//     })

//     beforeEach(()=>{
//         console.log("Before Each");
//     });

//     afterEach(()=>{
//         console.log("After each");
//     })

test ("Should load contact us componenet",()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading", { level: 1 }); 

    expect(heading).toBeInTheDocument();

});

test ("Should load contact us componenet",()=>{
    render(<Contact/>);

    const button=screen.getByText("Submit");

    expect(button).toBeInTheDocument();

});

test ("Should load contact us componenet",()=>{
    render(<Contact/>);

    const button=screen.getByRole("button");

    expect(button).toBeInTheDocument();

});

test("Should load name input of placeholder",()=>{
    render(<Contact/>);

    //Querying

    const inputName=screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();

});

test("Should load 2 input boxes",()=>{
    render(<Contact/>);

    const inputBoxes=screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(2);

});
});

