import React from "react";
import { BiSearch } from "react-icons/bi";
import {FaHandsClapping} from 'react-icons/fa6'
import CardHolder from "./CardHolder";
import BarChart from "./BarChart";
const Dashboard = () => {
  return (
    <div className=" w-4/5   mx-20 my-10 grid gap-y-10">
      {/* search header  */}
      <div className="flex justify-between">
        <div className="flex justify-start gap-x-2">
          <p className="text-2xl font-semibold">Hello Shahnwaz </p>
          <FaHandsClapping className="my-auto text-yellow-600 text-2xl"/>
        </div>

        <div className=" flex justify-around gap-x-4 bg-[#211a75] p-3  rounded-2xl my-auto">
          <BiSearch className="my-auto text-2xl text-[#7879f1]" />
          <input
            placeholder="Search icons"
            className="bg-inherit outline-none "
          />
        </div>
      </div>

      {/* Card holder box  */}
      <CardHolder/>
      {/* bar chart  */}
      <div className="flex">
      <BarChart/>
      </div>
      
    </div>
  );
};

export default Dashboard;
