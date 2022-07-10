import React from 'react';
import {NextPage} from 'next';
import { footerList1,footerList2,footerList3 } from '../utils/utils/constants';
 const List = ({items}:{items:string[]})=>(
    <div className='flex flex-wrap gap-2 mt-5'>
    {items.map((item)=>(
        <p className='text-gray-400 text-sm hover:underline cursor-pointer' key={item}>{item}</p>
    ))}
                </div>
)
const Footer:NextPage=()=>{
    return(
        <div className='mt-6 hidden xl:block'>
 <List items={footerList1}/> 
 <List items={footerList2}/> 
 <List items={footerList3}/> 
 <p className='text-gray-400 text-sm mt-5'>TikTik 2022 clone</p>

        </div>
    )
}
export default Footer;