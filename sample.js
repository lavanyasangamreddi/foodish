import React from "react";
import ReactDOM from "react-dom/client";

// 1.Basic React element:
//const heading=React.createElement("h1",{id:"heading"},"Namaste React");
// console.log(heading);

//2.React Element:
// const jsxHeading= <h1 className="head">Namaste React using JSX</h1>;
// console.log(jsxHeading);

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);


//3.React Functional Component
//Component COmpostion: keeping one component into another

 const Title= ()=>{
 return <h1 className="head">Namaste React using JSX</h1>
 };
const num=1000;
const HC=()=>(
    <div id="container">
    <Title/>
      <Title></Title>
      {Title()}
    <h1>Namaste React using Functional Component</h1>
    </div>
);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HC/>);

 //4.Element composition in a Component
// const title=(
//     <h1>Namaste React using JSX</h1>
//     );

//    const HC1=()=>(
//        <div id="container">
//        {title}
//        <h1>Namaste React using Functional Component</h1>
//        </div>
//    );
//    const root=ReactDOM.createRoot(document.getElementById("root"));
//    root.render(<HC1/>);
Chicken biryani:
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_sgLzSDMkgmekV9wMU0IaeVoy4uCHHtTdw&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2gwtP68nBBWgBEogSmZSHSo_f8iZ4vZISQ&s


