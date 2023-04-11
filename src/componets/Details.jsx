import React from "react";

const Details = () => {
  return (
    <div>
      <div className="py-32 text-center bg-purple-100">
        <h1 className="text-3xl font-extrabold text-gray-800">Job Details</h1>
      </div>

      <section className="grid grid-cols-3 gap-9 px-40 lg:px-20 py-32">
        <div className="col-span-2">
          <p className="text-base font-medium text-gray-500 pb-6">
            <span className="text-base font-extrabold text-gray-800">
              Job Description:
            </span>{" "}
            A UI/UX (User Interface/User Experience) designer is responsible for
            designing and creating engaging and effective interfaces for
            software and web applications. This includes designing the layout,
            visual design, and interactivity of the user interface.
          </p>
          <p className="text-base font-medium text-gray-500 pb-6">
            <span className="text-base font-extrabold text-gray-800">
              Job Responsibility:
            </span>{" "}
            Collaborating with cross-functional teams: UI/UX designers often
            work closely with other teams, including product management,
            engineering, and marketing, to ensure that the user interface is
            aligned with business and technical requirements. You will need to
            be able to effectively communicate your design ideas and gather
            feedback from other team members.
          </p>
          <h1 className="text-base font-extrabold text-gray-800 pb-4">
            Educational Requirements:
          </h1>
          <p className="text-base font-medium text-gray-500">
            Bachelor degree to complete any reputational university.
          </p>
          <h2 className="text-base font-extrabold text-slate-800 py-6">
            Experiences:
          </h2>
          <p className="text-base font-medium text-gray-500">
            p2-3 Years in this field.
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
              100K - 150K (Per Month)
            </p>
            <p className="text-xl font-medium text-slate-700 pb-6">
              <span className="text-xl font-bold text-slate-800">
                Job Title :
              </span>
              Product Designer
            </p>
            <hr className="border-1 border-gray-300 pb-6" />
            <h2 className="text-xl font-bold text-slate-800 pb-4">
              Contact Information
            </h2>
            <p className="text-xl font-medium text-slate-600 pb-2">
              <span className="text-xl font-bold  text-slate-700 pb-4 pr-1">
                Phone :
              </span>
              01750-00 00 00
            </p>
            <p className="text-xl font-medium text-slate-600">
              <span className="text-xl font-bold  text-slate-700 pr-1">
                Email:
              </span>
              info@gmail.con
            </p>
            <p className="pt-4 text-xl font-medium text-slate-600">
              <span className="text-xl font-bold  text-slate-700 pr-1">
                Address:
              </span>
              Dhanmondi 32, Sukrabad Dhaka, Bangladesh
            </p>
          </div>
          <button className="btn-primary w-full mt-6">Apply Now</button>
        </div>
      </section>
    </div>
  );
};

export default Details;
