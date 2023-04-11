import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around items-center py-12 bg-slate-100">
        <Link className="font-bold text-3xl" to="/">CareerHub</Link>
        <div className="">
            <Link className="pl-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold text-sm" to="/statistics">Statistics</Link>
            <Link className="pl-8 text-gray-500 font-semibold text-sm" to="">Home</Link>
            <Link className="pl-8 text-gray-500 font-semibold text-sm" to="/applied">Applied Jobs</Link>
            <Link className="pl-8 text-gray-500 font-semibold text-sm" to="/blog">Blog</Link>
        </div>
        <button className="btn-primary">Star Applying</button>
    </div>
  );
};

export default Header;
