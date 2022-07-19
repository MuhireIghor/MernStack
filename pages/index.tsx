import { NextPage } from 'next';
import axios from 'axios';
import {Video} from '../types';
import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults';
interface Iprops{
  Videos:Video[];
}

const Home:NextPage<Iprops>=({Videos}) => {
console.log(Videos);
return (
    <div className='flex flex-col gap-3 h-full'>
    {/* <h1 className='flex flex-col videos gap-10 h-full'>Hello world</h1> */}
    {Videos.length ? (
      Videos.map((video:Video)=>(
        <VideoCard post={video} key = {video._id} />      
      ))
    ):(
      <NoResults text={'NO videos'} />
    )}
    </div>
 )}
export const getServerSideProps = async ()=>{
  const {data} = await axios.get('http://localhost:3000/api/post ');
return {
  props:{
    Videos:data
  }
}


}
export default Home;
