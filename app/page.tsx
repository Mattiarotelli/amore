"use client";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  const [cont, setCont] = useState(2348);
  function x() {
    if (cont >= 10000) {
      return "🤍";
    } else {
      return cont;
    }
  }
  useEffect(() => {
    const interval = setInterval(
      () => {
        //delay di mezzo secondo
        console.log(cont);
        if (cont < 10000) {
          setCont(cont + 1); //incrementa
        } else {
          clearInterval(interval);
        }
      },
      0,
      5
    );

    return () => clearInterval(interval); //perche si
  }, [cont]);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-3 text-center">
        <Avatar>
        <AvatarImage src="https://github.com/shadcn.png"/>
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
