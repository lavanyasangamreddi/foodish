import {useState} from "react";

const User=({name})=>{
    const [count]=useState(0);
    const [count2]=useState(1);
    return(
        <div className="user-card">
            <h2>count:{count}</h2>
            <h2>count2:{count2}</h2>
            <h2>Name:{name}</h2>
            <h3>Location:Rajam</h3>
            <h4>contact:s210129@raguktsklm.ac.in</h4>
        </div>
    );
};
export default User;