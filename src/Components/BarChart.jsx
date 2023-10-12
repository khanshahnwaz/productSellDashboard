import React from 'react';
import { TbDashboard, TbBrandWindows,TbHexagonLetterO } from "react-icons/tb";
import {
    MdOutlineMarkEmailUnread,
    MdOutlineContactPage,
    MdKeyboardArrowDown,
    MdKeyboardArrowRight,
  } from "react-icons/md";
const BarChart = () => {
  const data = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 200 },
    { month: 'Mar', value: 150 },
    {month:'Apr'},
    {month:'May'},
    {month:'Jun'},
    {month:'July'},
    {month:'Aug'},
    {month:'Sept'},
    {month:'Oct',h:44},
    {month:'Nov'},
    {month:'Dec'}
    // Add more months and values as needed
  ];

  return (
    <div className=" p-4 bg-white shadow rounded">
        <div className='flex justify-between my-2'>
            <div>
                <p className='font-bold text-xl'>Overview</p>
                <small>Monthly Earning</small>
            </div>
            <div className="flex  justify-between text-gray-500">
              <div className="flex justify-start gap-x-4">
                <p className="self-center">Quarterly</p>
              </div>
              <MdKeyboardArrowDown className="my-auto text-xl text-[#7879f1]" />
            </div>
        </div>
      <div className=" flex justify-between h-max">
        {data.map(item => (
          <div className="  items-center mb-4 relative" key={item.month}>
            
            <div className=" h-full w-2 ml-4 ">
              <div className={`a h-${item.h?item.h:'28'} bg-blue-300  w-8 rounded`}></div>
            </div>
            <div className="w-16 font-bold text-center">{item.month}</div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
