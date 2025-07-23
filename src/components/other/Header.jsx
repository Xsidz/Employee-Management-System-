import React from "react";

const Header = ({data,logout}) => {
  return (
    <div className="flex items-end text-white justify-between">
      <h1 className="text-2xl font-medium sm: text-lg">
        Hello <br />
        {console.log(data)}
        <span className="text-3xl  font-semibold sm: text-xl">{data?.name} 👋</span> 
      </h1>
      <button className="bg-red-600 px-5 py-2 rounded-sm text-lg font-medium sm: text-sm" onClick={logout} >Log Out</button>
    </div>
  );
};

export default Header;
