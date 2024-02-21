"use client";
import { useState, useEffect, useCallback } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  const [cont, setCont] = useState(0);
  
  const x = useCallback(() => cont >= 10000 ? "🤍" : cont, [cont]); // arrow function se cont >= 10000 cuore bianco altrimenti cont

  const getRand = () => Math.floor(Math.random() * 10); // gen random number 0-9

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(cont); // console.log per vedere il contatore
      if (cont < 10000) {
        setCont(prevCont => prevCont + getRand());// incrementa contatore
      }
    }, 1);

    return () => clearInterval(interval);
  }, [cont]);


  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-3 text-center">
        <Avatar>
          <AvatarImage src="/pfp.jpg"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        Mattiarotelli
      </div>

      <div className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 justify-center text-center flex flew-row">
        Quanto ti amo: {x()}
      </div>
    </div>
  );
}