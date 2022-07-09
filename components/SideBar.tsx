import React,{useState} from 'react';
import  type { NextPage } from 'next';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {GoogleLogin} from 'react-google-login';
import { AiFillHome,AiOutlineMenu } from 'react-icons/ai';
import {ImCancelCircle} from 'react-icons/im'
const SideBar:NextPage = () => {
    const [showSideBar,setShowSideBar] = useState(true);
  return (
    <div>
        <div className='block xl:hidden m-2 mt-3 ml-4 text-xl' onClick={()=>{
            setShowSideBar(!showSideBar)
        }}>
            {showSideBar?<ImCancelCircle/>:<AiFillHome />}            
        </div>
    </div>
  )
}

export default SideBar