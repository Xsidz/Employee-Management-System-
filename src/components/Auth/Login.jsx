import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email + password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20 md:w-1/3 w-4/5">
        <form className="flex flex-col items-center justify-center">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter Your Password"
          />
          <button
            onClick={submitHandler}
            className="text-white outline-none bg-emerald-600 border-none text-xl py-3 px-5 rounded-full mt-3 placeholder:text-black">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
