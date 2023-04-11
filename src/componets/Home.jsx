import React from "react";
import CategoryList from "./CategoryList";
import FeaturedJobs from "./FeaturedJobs";
import Hero from "./Hero";

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
