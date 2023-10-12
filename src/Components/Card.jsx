import { useContext, useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import user from './Assets/user2.jpg'
import {BsArrowUpShort,BsArrowDownShort} from 'react-icons/bs'
function Card(props) {
  // console.log(props);
 
  

  return (
    <>
      <div className="border-gray-200 rounded-xl shadow-md hover:shadow-2xl sm:p-4 p-2 flex gap-x-3 justify-evenly ">

      <div className={` h-20 w-1/2 rounded-full ${props.color}`}>
          {<props.img className={`my-auto text-4xl mx-auto h-full ${props.text}`}/>}
        </div>

        <div className="my-auto w-full ">
          <div className="sm:pr-5">
            <p>{props.Name}</p>
            <b className="text-2xl">{props.Amount}</b>
            <div className=" flex">
                {props.up?
                <><BsArrowUpShort className="my-auto text-base text-green-400"/>
                <span className="text-green-400 pr-2">46% </span> this month</>:<> <BsArrowDownShort className="my-auto text-base text-red-400"/>
                <span className="text-red-400 pr-2">46% </span> this month</>}
                
            </div>
          </div>
          
        </div>

        
      </div>
    </>
  );
}

export default Card;
