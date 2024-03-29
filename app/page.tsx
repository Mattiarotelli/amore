"use client";
import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [cont, setCont] = useState(0);
  
  const x = useCallback(() => cont >= 10000 ? "🤍" : cont, [cont]); // arrow function se cont >= 10000 cuore bianco altrimenti cont

  const getRand = () => Math.floor(Math.random() * 10); // gen random number 0-9

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(cont); // console.log per vedere il contatore
      if (cont < 10000) {
        setCont(i => i + getRand());// incrementa contatore
      }else{
        clearInterval(interval); 
      }
    }, 1);

    return () => clearInterval(interval);
  }, [cont]);


  return (
      <div className="flex flex-col">
        <div className="text-3xl font-semibold tracking-tight w-full first:mt-10 text-center">
          Quanto ti amo: {x()}
        </div>
      </div>
    
  );
}