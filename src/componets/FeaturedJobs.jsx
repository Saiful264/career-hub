import React from "react";
import cPic from "../assets/All Images/google-1-1 1.png"

const FeaturedJobs = () => {
  return (
    <div className="text-center">
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
        <div className="border-2 rounded-md p-10">
            <img src={cPic} alt="" />
            <div className="pt-8">
            <h1 className="text-2xl font-extrabold text-gray-600">Technical Database Engineer</h1>
            <p className="text-xl font-semibold text-gray-400">Google LLC</p>
            <div className="flex gap-2 pt-4">
                <p className="btn-secoundry">Remote</p>
                <p className="btn-secoundry">Full Time</p>
            </div>
            <div className="flex gap-6 pt-4 pb-6">
                <p className="text-lg font-semibold text-gray-600">Dhaka, Bangladesh</p>
                <p className="text-lg font-semibold text-gray-600">Salary : 100K - 150K</p>
            </div>
            <button className="btn-primary">View Details</button>
            </div>
        </div>
        <div className="border-2 rounded-md p-10">
            <img src={cPic} alt="" />
            <div className="pt-8">
            <h1 className="text-2xl font-extrabold text-gray-600">Technical Database Engineer</h1>
            <p className="text-xl font-semibold text-gray-400">Google LLC</p>
            <div className="flex gap-2 pt-4">
                <p className="btn-secoundry">Remote</p>
                <p className="btn-secoundry">Full Time</p>
            </div>
            <div className="flex gap-6 pt-4 pb-6">
                <p className="text-lg font-semibold text-gray-600">Dhaka, Bangladesh</p>
                <p className="text-lg font-semibold text-gray-600">Salary : 100K - 150K</p>
            </div>
            <button className="btn-primary">View Details</button>
            </div>
        </div>
        <div className="border-2 rounded-md p-10">
            <img src={cPic} alt="" />
            <div className="pt-8">
            <h1 className="text-2xl font-extrabold text-gray-600">Technical Database Engineer</h1>
            <p className="text-xl font-semibold text-gray-400">Google LLC</p>
            <div className="flex gap-2 pt-4">
                <p className="btn-secoundry">Remote</p>
                <p className="btn-secoundry">Full Time</p>
            </div>
            <div className="flex gap-6 pt-4 pb-6">
                <p className="text-lg font-semibold text-gray-600">Dhaka, Bangladesh</p>
                <p className="text-lg font-semibold text-gray-600">Salary : 100K - 150K</p>
            </div>
            <button className="btn-primary">View Details</button>
            </div>
        </div>
        <div className="border-2 rounded-md p-10">
            <img src={cPic} alt="" />
            <div className="pt-8">
            <h1 className="text-2xl font-extrabold text-gray-600">Technical Database Engineer</h1>
            <p className="text-xl font-semibold text-gray-400">Google LLC</p>
            <div className="flex gap-2 pt-4">
                <p className="btn-secoundry">Remote</p>
                <p className="btn-secoundry">Full Time</p>
            </div>
            <div className="flex gap-6 pt-4 pb-6">
                <p className="text-lg font-semibold text-gray-600">Dhaka, Bangladesh</p>
                <p className="text-lg font-semibold text-gray-600">Salary : 100K - 150K</p>
            </div>
            <button className="btn-primary">View Details</button>
            </div>
        </div>
      </div>
      <button className="btn-primary">See All Jobs</button>
    </div>
  );
};

export default FeaturedJobs;
