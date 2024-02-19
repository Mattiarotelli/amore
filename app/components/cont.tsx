"use client";
import { useState, useEffect } from "react";

export default function Cont() {

const [cont, setCont] = useState(0);
  function x() {
    if(cont>= 50){
      return "💀" //! WE GET NO BITCHES
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
  return <div className="flex items-center justify-center min-h-screen text-9xl text-justify">{x()}</div>; 
  //! wrappa tutto in una div, solo cosi potrai usare tailwind, inoltra sará tutto piú facile da gestire
}