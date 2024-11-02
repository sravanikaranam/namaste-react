import {LOGO_URL} from "./utils/links";
import {useState} from "react";
const Header=()=>{
 const [btnName,setbtnName]=useState("login");
    return(
     <div className="headercontainer">
         <div className="logocontainer">
             <img  className="logo" src={LOGO_URL} />
         </div>
       
           
         <div className="NaiveItems">
             <ul>
                 <li>Home</li>
                 <li>AboutUs</li>
                 <li>Cart</li> 
                 <button className="button"
                  onClick={()=>{
                 btnName==="login"
                ?setbtnName("logout")
                :setbtnName("login");
                }}>{btnName}</button>
         
             </ul>
         </div>
     </div>
    )
 }
 export default Header;