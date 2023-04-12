import React, { useEffect, useState } from "react";
import cPic from "../assets/All Images/google-1-1 1.png";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../utils/fakeDB";

const Applied = () => {
// const datas = useLoaderData();
// const storedCart = getStoredCart();
// // console.log(storedCart.);

// const [detail, setDetail] = useState({});
// useEffect(()=> {
//   const findData = datas.map((data) => console.log(data))
//   // setDetail(findData);
// }, [])


  return (
    <div>
      <div className="py-32 text-center bg-slate-100">
        <h1 className="text-3xl font-extrabold text-gray-800">Applied Jobs</h1>
      </div> 

      <div className="flex border-2 mx-40 rounded-md p-5 mt-32">
        <div className="m-auto">
          <img className="w-full " src={cPic} alt="" />  
        </div>
        <div className="flex justify-between items-center w-full p-8">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-800">Technical Database Engineer</h2>
            <p className="text-2xl font-semibold text-slate-500 pb-4">Google LLC</p>
            <div className="flex gap-2 pt-4">
              <p className="btn-secoundry">Remote</p>
              <p className="btn-secoundry">Full Time</p>
            </div>
            <div className="flex gap-6 pt-6">
              <p className="text-lg font-semibold text-gray-600">
                Dhaka, Bangladesh
              </p>
              <p className="text-lg font-semibold text-gray-600">
                Salary : 100K - 150K
              </p>
            </div>
          </div>
            <button className="btn-primary align-middle">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Applied;
