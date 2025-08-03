import { createContext } from "react";

const UserContext=createContext({
    loggedInUser: null,
    setUserName: () => {},
    handleLoginClick: () => {},

});

export default UserContext;