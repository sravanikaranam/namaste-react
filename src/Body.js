
import RestrauCard from "./RestrauCard";
import resList from "./utils/mockdata";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
const Body=()=>{ 
    const[ListOfRes,setListOfRes]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const [searchtext,setsearchtext]=useState(" ");

    
    const   fetchData = async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.91870&lng=74.85980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const json =await data.json();
    console.log(json);
       setListOfRes(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
       
    }
    
    return(
   <div className="bodycontainer">
       <div className="filterContainer">
           <button className="filterbtn" 
           onClick={()=>{
            const filteredList=ListOfRes.filter(
                (res)=>res.info.avgRating >4.0
            )
            console.log(json);
            setListOfRes(filteredList);
           }
           }>Top Rated Restaurants</button>
           <input   type="text" className="input"
            value={searchtext}
            onChange={(e)=>{
                setsearchtext(e.target.value);
            }}>
           </input>
           <button onClick={()=>{
             const filteredres=ListOfRes.filter((res)=>res.info.name.includes(searchtext));
             setListOfRes(filteredres);
           }
           }>search</button>
       </div>     
            <div className="restrauContainer">
                {  ListOfRes?.map((restaurant)=>(
                < RestrauCard  key={restaurant?.info?.id} resData={restaurant}/>
                )) }
            </div>
   </div>
   )
};
export default Body;


    
    