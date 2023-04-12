import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../utils/fakeDB";

const Details = () => {
  const getId = useParams();
  const datas = useLoaderData();
  
  const [detail, setDetail] = useState({});
  useEffect(()=> {
    const findData = datas.find((data) => data.id == getId.id)
    setDetail(findData);
  }, [])

  const handleAddToCart = id => {
    addToDb(id);
  }


  const {job_description, job_responsibility, educational_requirements,experiences,salary,job_title,location,phone,email, id} = detail;

  return (
    <div>
      <div className="py-32 text-center bg-slate-100">
        <h1 className="text-3xl font-extrabold text-gray-800">Job Details</h1>
      </div>

      <section className="grid grid-cols-3 gap-9 px-40 lg:px-20 py-32">
        <div className="col-span-2">
          <p className="text-base font-medium text-gray-500 pb-6">
            <span className="text-base font-extrabold text-gray-800">
              Job Description: 
            </span>{job_description}
          </p>
          <p className="text-base font-medium text-gray-500 pb-6">
            <span className="text-base font-extrabold text-gray-800">
              Job Responsibility:
            </span>{job_responsibility}
          </p>
          <h1 className="text-base font-extrabold text-gray-800 pb-4">
            Educational Requirements:
          </h1>
          <p className="text-base font-medium text-gray-500">
            {educational_requirements}
          </p>
          <h2 className="text-base font-extrabold text-slate-800 py-6">
            Experiences:
          </h2>
          <p className="text-base font-medium text-gray-500">
           {experiences}
          </p>
        </div>
        <div className="pb-6">
          <div className="info bg-violet-100 p-8 rounded-lg">
            <h3 className="text-xl font-extrabold  text-slate-700 pb-6">
              Job Details.
            </h3>
            <hr className="border-1 border-gray-300 pb-6" />
            <p className="text-xl font-medium text-slate-700 pb-4">
              <span className="text-xl font-bold text-slate-800">Salary :</span>{" "}
              {salary} (Per Month)
            </p>
            <p className="text-xl font-medium text-slate-700 pb-6">
              <span className="text-xl font-bold text-slate-800">
                Job Title :
              </span>
              {job_title}
            </p>
            <hr className="border-1 border-gray-300 pb-6" />
            <h2 className="text-xl font-bold text-slate-800 pb-4">
              Contact Information
            </h2>
            <p className="text-xl font-medium text-slate-600 pb-2">
              <span className="text-xl font-bold  text-slate-700 pb-4 pr-1">
                Phone :
              </span>
                {phone}
            </p>
            <p className="text-xl font-medium text-slate-600">
              <span className="text-xl font-bold  text-slate-700 pr-1">
                Email:
              </span>
              {email}
            </p>
            <p className="pt-4 text-xl font-medium text-slate-600">
              <span className="text-xl font-bold  text-slate-700 pr-1">
                Address:
              </span>
              {location}
            </p>
          </div>
          <button onClick={()=> handleAddToCart(id)} className="btn-primary w-full mt-6">Apply Now</button>
        </div>
      </section>
    </div>
  );
};

export default Details;
