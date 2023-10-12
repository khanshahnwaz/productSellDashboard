import {
  AiOutlineMenu,
  AiFillWechat,
  AiOutlineShop,
  AiOutlineSetting,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { TbDashboard, TbBrandWindows,TbHexagonLetterO } from "react-icons/tb";
import {
  MdOutlineMarkEmailUnread,
  MdOutlineContactPage,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import user from './Assets/user2.jpg'
import { BsFillCalendar2Fill } from "react-icons/bs";
import { FaUsersRectangle, FaFileInvoiceDollar } from "react-icons/fa6";
import { PiDotsNine } from "react-icons/pi";

import { RxDoubleArrowLeft } from "react-icons/rx";

import MobileViews from "./MobileViews";
const Left = (props) => {
  return (
    <div className="lg:w-1/5">
      <div
        className={` lg:w-1/5 w-full sm:w-max    h-full bg-[#0c122b] text-left py-10 lg:px-auto px-10  fixed ${props.controlSideBar} lg:left-0 z-50 transition-all ease-in-out duration-1000 `}
      >
        {/* <img src={tri} alt='triangle' className='indivne float-left'/> */}
        <div className="w-4/5 mx-auto sm:mx-0 lg:mx-auto text-left grid gap-y-5 ">
          <div className="flex lg:gap-x-4 lg:justify-start justify-between">
          <TbHexagonLetterO className=" lg:block hidden my-auto text-3xl text-white" />

            <h1 className="text-white font-semibold text-left ">weframetech</h1>
            <RxDoubleArrowLeft
              onClick={() => props.setControlSideBar("-left-[200%]")}
              className="cursor-pointer lg:hidden my-auto text-3xl font-bold text-white"
            />
          </div>
          {/* designs that will be displayed on small scree size  */}
          <MobileViews />
          
          <div className="text-sm space-y-6">
            
           
           
           
            <div className="flex  p-2 rounded-md justify-between text-gray-300 bg-[#5555b8]">
              <div className="flex justify-start gap-x-4">
                <TbBrandWindows className="my-auto text-2xl" />
                <p className="self-center">Dashoboard</p>
              </div>
              <MdKeyboardArrowRight className="my-auto text-xl text-[#7879f1]" />
            </div>
            <div className="flex  justify-between text-gray-300">
              <div className="flex justify-start gap-x-4">
                <TbBrandWindows className="my-auto text-2xl" />
                <p className="self-center">Product</p>
              </div>
              <MdKeyboardArrowRight className="my-auto text-xl text-[#7879f1]" />
            </div>
            <div className="flex  justify-between text-gray-300">
              <div className="flex justify-start gap-x-4">
                <TbBrandWindows className="my-auto text-2xl" />
                <p className="self-center">Customers</p>
              </div>
              <MdKeyboardArrowRight className="my-auto text-xl text-[#7879f1]" />
            </div>
            <div className="flex  justify-between text-gray-300">
              <div className="flex justify-start gap-x-4">
                <TbBrandWindows className="my-auto text-2xl" />
                <p className="self-center">Income</p>
              </div>
              <MdKeyboardArrowRight className="my-auto text-xl text-[#7879f1]" />
            </div>
            <div className="flex  justify-between text-gray-300">
              <div className="flex justify-start gap-x-4">
                <TbBrandWindows className="my-auto text-2xl" />
                <p className="self-center">Help</p>
              </div>
              <MdKeyboardArrowRight className="my-auto text-xl text-[#7879f1]" />
            </div>
            
           
          
           
          </div>
         
        </div>
        <div className="w-4/5 flex   justify-between gap-x-5 px-3 py-1 text-gray-300 absolute bottom-10 bg-[#5555bf] rounded-md">
          <img
                  className="my-auto h-10 rounded-full border-2 border-white"
                  src={user}
                  alt="user"
                ></img>
              <div className=" ">
                <p>Evano</p>
                <small>Projet Manager</small>
              </div>
              <MdKeyboardArrowDown className="my-auto text-xl text-[#7879f1]" />
            </div>
      </div>
    </div>
  );
};

export default Left;
