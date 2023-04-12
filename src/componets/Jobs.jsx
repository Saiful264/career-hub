import React from 'react';
import { Link } from "react-router-dom";

const Jobs = ({job}) => {
    const {company_logo,job_title, fulltime_or_parttime, location, salary, company_name, id} = job;
    return (

            <div className="border-2 rounded-md p-10">
            <img src={company_logo} alt="" />
            <div className="pt-8">
            <h1 className="text-2xl font-extrabold text-gray-600">{job_title}</h1>
            <p className="text-xl font-semibold text-gray-400">{company_name}</p>
            <div className="flex gap-2 pt-4">
                <p className="btn-secoundry">{fulltime_or_parttime}</p>
            </div>
            <div className="flex gap-6 pt-4 pb-6">
                <p className="text-lg font-semibold text-gray-600">{location}</p>
                <p className="text-lg font-semibold text-gray-600">Salary : {salary}</p>
            </div>
            <Link to={`/job/${id}`} className="btn-primary">View Details</Link>
            </div>
        </div>
    )
};

export default Jobs;