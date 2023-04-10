import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around items-center py-12 bg-slate-100">
        <a className="font-bold text-3xl" href="">CareerHub</a>
        <div className="">
            <a className="pl-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold text-sm" href="">Statistics</a>
            <a className="pl-8 text-gray-500 font-semibold text-sm" href="">Applied Jobs</a>
            <a className="pl-8 text-gray-500 font-semibold text-sm" href="">Blog</a>
        </div>
        <button className="btn-primary">Star Applying</button>
    </div>
  );
};

export default Header;
