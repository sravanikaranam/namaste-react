import {RESTRAU_URL} from "./utils/links";

const RestrauCard=(props)=>{
    const {resData}=props; 
    const {cloudinaryImageId,name,avgRating,costForTwo}=resData.info; 
     return(
         <div className="cardContainer" style={{backgroundColor:"#f0f0f0"}}>
             <img className="image" src={ RESTRAU_URL+cloudinaryImageId
 
             }/>
             <h3>{name}</h3>
             <h3>{costForTwo}</h3>
             
             <h3>{avgRating} rating</h3>
             
         </div>
     )
 
 }; 
 export default RestrauCard;