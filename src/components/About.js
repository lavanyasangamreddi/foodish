import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import React from "react";
import foodishLogo from '../assets/foodish.png'; // adjust path if needed

const logo = new URL('../assets/foodish.png', import.meta.url).href;

const About=()=>{
    return(
        <div>
            <img src={logo} alt="Foodish Logo"  className="mx-auto w-48 h-auto m-4"/>
            <h1 className="text-center text-xl text-bold">Welcome to our Foodish </h1>
            <h2 className="text-lg mb-4 text-gray-700">
                 Your shortcut to good food, anytime, anywhere.
            </h2>
            <p className="text-base mb-4">
                This app is designed to make food ordering simple, fast, and enjoyable.
                From spicy Indian curries to cheesy pizzas and healthy salads, we bring your
                favorite meals right to your doorstep with just a few taps.
            </p>
            <p className="text-base mb-4">
                 Whether you're a student looking for affordable options, a foodie hunting
                 for new tastes, or someone who just wants a quick meal after a long day —
                 Foodish is made for you.
            </p>
            <ul className="text-left list-disc list-inside mb-4">
                <li>Easy browsing</li>
                <li>Real-time order tracking</li>
                <li>Quick delivery</li>
                <li>Top-rated restaurants</li>
            </ul>
            <p className="text-base font-medium">
                Our goal is to connect people with the food they love — quickly, affordably, and reliably.
            </p>
        </div>
    );
}

export default About;