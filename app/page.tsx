"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const [cont, setCont] = useState(0);
  function x() {
    if(cont>= 50){
      return "🤍"
    }else{
      return cont
    }
  }
  useEffect(() => {

    const interval = setInterval(() => {    //delay di mezzo secondo 
      console.log(cont)
      if(cont<50){
        setCont(cont+1)     //incrementa
      }else{
        clearInterval(interval)
      }
       
    }, 10);
  
    return () => clearInterval(interval);     //perche si 
  }, [cont]);
  return <>{x()}</>;
}
