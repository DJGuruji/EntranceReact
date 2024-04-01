import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-3/4 max-w-md p-6 bg-white shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-center mb-3 text-slate-700 lg:mt-2 lg:mb-2 lg:text-2xl xl:mt-2 xl:mb-2 xl:text-2xl ">
            <i class="fa-duotone fa-user"></i> ADMIN LOGIN
          </h1>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
             User Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
   
  

          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
      Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center">
          <button className="border-2 bg-blue-500 text-white hover:bg-blue-600 hover:border-blue-400 w-1/2 h-9 text-center rounded-md lg:mt-5 xl:mt-5 ">
            <input type="submit" value="login" className="capitalize" />
          </button>
        </div>
        <p className="ml-7 lg:ml-9 xl:ml-9 mt-5 ">
          Not registered yet?{" "}
          <a
            onClick={() => navigate("/")}
            className="text-blue-700 hover:underline hover:text-green-700 "
          >
            signup{" "}
          </a>
          here.
        </p>
      </form>
    </div>
  );
};

export default Login;
