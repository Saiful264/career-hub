import React from "react";
import hpic from "../assets/Icons/accounts 1.png";

const CategoryList = () => {
  return (
    <div className="pt-32">
      <div className="text-center pb-8">
        <h1 className="font-semibold text-5xl text-gray-900">Job Category List</h1>
        <p className="text-base font-medium text-gray-400 pt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-between px-28">
        <div className="bg-slate-100 rounded p-10">
          <img src={hpic} alt="" />
          <div className="pt-8">
            <h2 className="font-extrabold text-xl text-gray-700 pb-2">
              Account & Finance
            </h2>
            <p className="text-base font-medium text-gray-400">
              300 Jobs Available
            </p>
          </div>
        </div>
        <div className="bg-slate-100 rounded p-10">
          <img src={hpic} alt="" />
          <div className="pt-8">
            <h2 className="font-extrabold text-xl text-gray-700 pb-2">
              Account & Finance
            </h2>
            <p className="text-base font-medium text-gray-400">
              300 Jobs Available
            </p>
          </div>
        </div>
        <div className="bg-slate-100 rounded p-10">
          <img src={hpic} alt="" />
          <div className="pt-8">
            <h2 className="font-extrabold text-xl text-gray-700 pb-2">
              Account & Finance
            </h2>
            <p className="text-base font-medium text-gray-400">
              300 Jobs Available
            </p>
          </div>
        </div>
        <div className="bg-slate-100 rounded p-10">
          <img src={hpic} alt="" />
          <div className="pt-8">
            <h2 className="font-extrabold text-xl text-gray-700 pb-2">
              Account & Finance
            </h2>
            <p className="text-base font-medium text-gray-400">
              300 Jobs Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
