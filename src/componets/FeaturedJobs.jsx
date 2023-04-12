import React, { useContext, useEffect, useState } from "react";
import Jobs from "./jobs";

const FeaturedJobs = () => {
  const [jobs , setJobs] = useState([]);

  useEffect(()=> {
    const dataLoader = async() =>{
      const res = await fetch("FeaturedJobs.json");
      const data = await res.json();
      setJobs(data);
    }
    dataLoader();

  }, [])

  return (
    <div className="text-center pb-8">
      <div className="text-center pt-32 pb-8">
        <h1 className="font-semibold text-5xl text-gray-900">
        Featured Jobs
        </h1>
        <p className="text-base font-medium text-gray-400 pt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 px-32 text-left">

    {
      jobs.map((job) => 

      <Jobs key={job.id}
      job = {job}
      /> 
      )
    }
      </div>
      <button className="btn-primary mt-10">See All Jobs</button>
    </div>
  );
};

export default FeaturedJobs;
