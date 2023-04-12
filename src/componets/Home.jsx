import React from "react";
import FeaturedJobs from "./FeaturedJobs";
import Hero from "./Hero";
import CategoryList from "./CategoryList";
import { useLoaderData } from "react-router-dom";

const Home = () => {


  return (
    <>
      <Hero/>

     <CategoryList/>
      
      <FeaturedJobs/>
    </>
  );
};

export default Home;
