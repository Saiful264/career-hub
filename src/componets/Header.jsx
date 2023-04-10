import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around">
        <a className="font-semibold" href="">CareerHub</a>
        <div className="">
            <a href="">Statistics</a>
            <a href="">Applied Jobs</a>
            <a href="">Blog</a>
        </div>
        {/* <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">Star Applying</button> */}
        <button className="text-xl text-white">Star Applying</button>
    </div>
  );
};

export default Header;
