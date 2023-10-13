import React from 'react'
import Card from './Card'
import {LuBadgeDollarSign} from 'react-icons/lu'
import {GrNotes} from 'react-icons/gr'
import {RxBorderSplit} from 'react-icons/rx'
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'
import {LiaSalesforce} from 'react-icons/lia'
const CardHolder = () => {
  return (
    <div className='grid grid-cols-4 gap-x-10 overflow-x-scroll'>
     <Card Name='Earnings' Amount='$198' up={true} color='bg-green-500' text='text-green-300' img={LuBadgeDollarSign}/>
     <Card Name='Orders' Amount='$2.4' color='bg-purple-300' text='text-purple-500' img={RxBorderSplit} />

     <Card Name='Balance' Amount='$2.4' color='bg-blue-300' text='text-blue-500' up={true} img={MdOutlineAccountBalanceWallet}/>
     <Card Name='Total Sales' Amount='$89' color='bg-pink-300' text='text-pink-500' img={LiaSalesforce} />

    </div>
  )
}

export default CardHolder