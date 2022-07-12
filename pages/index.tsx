import type { NextPage } from 'next';
import axios from 'axios';
import {Video} from '../types';
interface Iprops{
  videos:Video[];
}

const Home = ({videos}:Iprops) => {
  console.log(videos);
  
  return (
    <div >
    <h1 className='flex flex-col videos gap-10 h-full'>Hello world</h1>
    {videos.length ? (
      videos.map((video:Video)=>(
        <VideoCard post={video} key = {video._id} />
      ))
    ):(
      <NoResults text={'NO videos'} />
    )}
    </div>
  )
}
export const getServerSideProps = async ()=>{
  const {data} = await axios.get('http://localhost:3000/api/post ');
// console.log(response.data.name);

return {
  props:{
    videos:data
  }
}


}
export default Home
