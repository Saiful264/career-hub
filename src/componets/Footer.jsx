import React from "react";
import sLogo from "../assets/Icons/Group 9969.png";

const Footer = () => {
  return (
    <div className="px-32 py-28 bg-gray-950 mt-28">
      <div className="grid grid-cols-6 pb-10">
        <div className="col-span-2">
          <h3 className="text-white font-extrabold text-3xl pb-5">CareerHub</h3>
          <p className="text-slate-300 font-normal text-base w-5/6 pb-5">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <img src={sLogo} alt="" />
        </div>
        <div>
          <h1 className="text-slate-300 text-xl font-semibold pb-3">Company</h1>
          <p className="text-slate-300 font-normal text-base">About</p>
          <p className="text-slate-300 font-normal text-base">Us Work</p>
          <p className="text-slate-300 font-normal text-base">Latest News</p>
          <p className="text-slate-300 font-normal text-base">Careers</p>
        </div>
        <div>
          <h1 className="text-slate-300 text-xl font-semibold pb-3">Product</h1>
          <p className="text-slate-300 font-normal text-base">Prototype</p>
          <p className="text-slate-300 font-normal text-base">
            Plans & Pricing
          </p>
          <p className="text-slate-300 font-normal text-base">Customers</p>
          <p className="text-slate-300 font-normal text-base">Integrations</p>
        </div>
        <div>
          <h1 className="text-slate-300 text-xl font-semibold pb-3">Support</h1>
          <p className="text-slate-300 font-normal text-base">Help Desk</p>
          <p className="text-slate-300 font-normal text-base">Sales</p>
          <p className="text-slate-300 font-normal text-base">
            Become a Partner
          </p>
          <p className="text-slate-300 font-normal text-base">Developers</p>
        </div>
        <div>
          <h1 className="text-slate-300 text-xl font-semibold pb-3">Contact</h1>
          <p className="text-slate-300 font-normal text-base">
            524 Broadway , NYC
          </p>
          <p className="text-slate-300 font-normal text-base">
            +1 777 - 978 - 5570
          </p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between pt-11">
        <p className="text-slate-400">@2023 CareerHub. All Rights Reserved</p>
        <p className="text-slate-400">Powered by CareerHub</p>
      </div>
    </div>
  );
};

export default Footer;
