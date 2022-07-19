import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import {GoogleOAuthProvider} from '@react-oauth/google';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);

  }, [])
  if (isSSR)
    return null;
  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`} >
            <NavBar />
        <div> 
      <div className='flex gap-6 md:gap-20'>
        <div className='h-[92vh] overflow-scroll xl:hover:overflow-hidden'>
          <SideBar />
        </div>
        <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
      </GoogleOAuthProvider>

  )
}

export default MyApp
