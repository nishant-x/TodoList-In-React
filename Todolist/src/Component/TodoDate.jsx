import {useEffect, useState } from "react";;
export const TodoDate = () => {

    const [DateTime , setDateTime] = useState("");

   // That is correct but it have some issue
  // setInterval(() => {
  //   const now = new Date(); 
  //   const currDate = now.toLocaleDateString(); 
  //   const currTime = now.toLocaleTimeString(); 
  
  //   setDateTime(`${currDate} - ${currTime}`); 
  // }, 1000); 
  

  // Corrected code
    useEffect(()=>{
        const interval =  setInterval(() => {
        const now = new Date(); 
        const currDate = now.toLocaleDateString(); 
        const currTime = now.toLocaleTimeString(); 
      
        setDateTime(`${currDate} - ${currTime}`); 
      }, 1000); 
    
      return () => clearInterval(interval);
    
      } ,[]);

      return(
        <h2 >{DateTime}</h2>
      );
}