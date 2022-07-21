import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {GoogleLogin,googleLogout} from '@react-oauth/google';
import {AiOutlineLogout} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import {IoMdAdd} from 'react-icons/io';
import Logo from '../utils/utils/tiktik-logo.png';
import { createOrGetUser } from '../utils/utils';
import useAuthStore from '../Store/authStore';
// import { Header } from '../utils/utils/Header';
const NavBar = () => {
  const {userProfile,addUser} = useAuthStore()
  return (
    <div className='w-full flex justify-between items-center border border-b-2 py-2 px- 4 border-gray-200'>
        <Link href='/'>
        <div className='w-[100px] md:w-[130px] '>
            <Image className="cursor-pointer"
            src= {Logo} 
            alt="Tiktik" 
            layout="responsive" />
        </div>
        </Link>
        <div>SEARCH</div>
        <div>
          {userProfile ? (
            <div> 
              {userProfile?.name}
            </div>            
          ): (
            <GoogleLogin 
            onSuccess={(response)=>{createOrGetUser(response,addUser);
            }}
            onError = {()=>{console.log('error');
            }}
            />
             )}
        </div>
    </div>
  )
}

export default NavBar