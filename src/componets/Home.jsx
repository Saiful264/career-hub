import React from "react";
import CategoryList from "./categoryList";
import FeaturedJobs from "./FeaturedJobs";
import Hero from "./Hero";
import { useLoaderData } from "react-router-dom";

const Home = () => {
const categoryList = useLoaderData();

  return (
    <>
      <Hero/>

      <div className="pt-32">
      <div className="text-center pb-8">
        <h1 className="font-semibold text-5xl text-gray-900">Job Category List</h1>
        <p className="text-base font-medium text-gray-400 pt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-between px-28">
      {
        categoryList.map(category => <CategoryList 
        key = {category._id}
        category = {category}
        />)
      }
      </div>
    </div>
      
      <FeaturedJobs/>
    </>
  );
};

export default Home;
