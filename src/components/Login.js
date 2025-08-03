// components/Login.js
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const { setUserName, handleLoginClick } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(username);
    handleLoginClick(); 
    navigate("/"); 
  };

  return (
    <div className="flex justify-center items-center mt-20">
    <div className="login-form p-2 bg-white shadow-lg rounded-lg text-center w-[600px]">
      <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>
      <form onSubmit={handleSubmit} className="align-middle">
        <input
          type="text"
          placeholder="Username"
          className="border  border-black p-2 mb-2 w-[40%] "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Password"
          className="border border-black p-2 mb-4 w-[40%] "
        /><br />
        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
