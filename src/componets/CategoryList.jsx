import React from "react";

const CategoryList = ({ category }) => {
  const { name, logo, jobs_available} = category;
  return (
    <div className="bg-slate-100 rounded p-10">
      <img src={logo} alt="" />
      <div className="pt-8">
        <h2 className="font-extrabold text-xl text-gray-700 pb-2">{name}</h2>
        <p className="text-base font-medium text-gray-400">
          {jobs_available} Jobs Available sss
        </p>
      </div>
    </div>
  );
};

export default CategoryList;
