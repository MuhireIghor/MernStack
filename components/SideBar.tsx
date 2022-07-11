import React, { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleLogin } from 'react-google-login';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im'
import Discover from './Discover';
import SuggestedAccounts from './SuggestedAccounts';
import Footer from './Footer';
const SideBar: NextPage = () => {
    const [showSideBar, setShowSideBar] = useState(true);
    const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded ';
    const userProfile = false;
    return (
        <div>
            <div className='block xl:hidden m-2 mt-3 ml-4 text-xl' onClick={() => {
                setShowSideBar((prev) => !prev)
            }}>
                {showSideBar ? <ImCancelCircle /> : <AiFillHome />}
            </div>
            {showSideBar && (
                <div className='xl:w-400  flex w-20 flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3'>
                    <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
                        <Link href='/'>
                            <div className={normalLink}>

                                <p className='text-2xl '>
                                    <AiFillHome />
                                </p>
                                <span className='text-xl hidden xl:block '>
                                    For You users
                                </span>
                            </div>
                        </Link>
                    <Discover />
                    </div>
                    {!userProfile && (
                        <div className='px-2 py-4 hidden xl:block'>
                            <p className='text-gray-400'>Login to like and comment on videos</p>
                            <div className='pr-4'>
                                <GoogleLogin
                                    clientId=""
                                    render={(renderProps) => (
                                        <button className='bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#F51997] cursor-pointer' onClick={renderProps.onClick} disabled={renderProps.disabled}>LogIn</button>


                                    )}
                                    onSuccess={() => { }}
                                    onFailure={() => { }}
                                    cookiePolicy='single_host_origin' />
                            </div>
                                    <SuggestedAccounts />
                            <Footer />

                        </div>
                    )}

                </div>
            )}
        </div>
    )
}

export default SideBar