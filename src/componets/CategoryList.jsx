import React from "react";
import hpic from "../assets/Icons/accounts 1.png";

const CategoryList = ({category}) => {
  const {logo, name, jobs_available} = category;
  return (
    <>
    <div className="bg-slate-100 rounded p-10">
<img src={logo} alt="" />
<div className="pt-8">
  <h2 className="font-extrabold text-xl text-gray-700 pb-2">
    {name}
  </h2>
  <p className="text-base font-medium text-gray-400">
    {jobs_available} Jobs Available
  </p>
</div>
</div>
    </>
  );
};

export default CategoryList;
