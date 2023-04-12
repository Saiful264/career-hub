import React, { useEffect, useState } from "react";
import logo from '../assets/Icons/accounts 1.png'

const CategoryList = () => {
  // const [catrgory, setCatrgory] = useState([]);

  // useEffect(()=>{
  //   const loadData = async() => {
  //     const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  //           const data = await res.json();
  //           console.log(data.data);
  //   }
  //   loadData();
  // },[])

  return (
    <div className="pt-32">
      <div className="text-center pb-8">
        <h1 className="font-semibold text-5xl text-gray-900">
          Job Category List
        </h1>
        <p className="text-base font-medium text-gray-400 pt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-between px-28">
        <div className="bg-slate-100 rounded p-10">
          <img src={logo} alt="" />
          <div className="pt-8">
            <h2 className="font-extrabold text-xl text-gray-700 pb-2">
              sasddasdsad
            </h2>
            <p className="text-base font-medium text-gray-400">
              122 Jobs Available sss
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
