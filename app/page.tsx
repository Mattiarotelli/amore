"use client";
import { useState, useEffect, useCallback } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  const [cont, setCont] = useState(0);
  
  const x = useCallback(() => {
    if (cont >= 10000) {
      return "🤍";
    } else {
      return cont;
    }
  }, [cont]);

  const getRand = () => {
    return Math.floor(Math.random() * 10);
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        console.log(cont);
        if (cont < 10000) {
          setCont(cont + getRand());
        } else {
          clearInterval(interval);
        }
      },
      1
    );

    return () => clearInterval(interval);
  }, [cont]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-3 text-center">
        <Avatar>
        <AvatarImage src="/pfp.jpg"/>
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        mattiarotelli
      </div>

      <div className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 justify-center text-center flex flew-row">
        Quanto ti amo: {x()}
      </div>
    </div>
  );
}