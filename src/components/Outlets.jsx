import React from 'react'
import Outlet from './Outlet'
import  {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { SwiggyFetchMindAPI } from '../utlis/constants';
import SkeletonCard from '../skeletion/SkeletonCard';

function Outlets() {
  
    const [carosel, setcarosel] = useState([]);   

    useEffect(()=>
    {
    fetchapi();
    },    
[]);

    const fetchapi = async ()=>{
            const data =  await fetch(SwiggyFetchMindAPI);
            const json =  await data.json();
            setcarosel(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)                             
            
 }
  if(carosel.length === 0) { return <SkeletonCard/>}

  return (
    <>  
    <div className="pl-4 pt-5 w-full  lg:w-[1100px] mx-auto  flex  overflow-x-auto   ">
             {
             carosel.map((res)=>(
             <Link
             key={res.info.id}
            to={"/restaurants/" + res.info.id}>
              <Outlet  restobj = {res}/> </Link>
))
            }
    </div>
</>
)
  
}

export default Outlets