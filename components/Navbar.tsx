"use client";

import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Navbar() {
  const path = usePathname();
  console.log(path);

  return (
    <div className="flex flex-row border-b justify-between w-full py-4 px-[5%]">
      <div className="flex flex-row  items-center text-center w-[25%] gap-3">
          {path != "/" ? (
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 34 16"
                fill="none"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM34 7L1 7V9L34 9V7Z"
                  fill="black"
                />
              </svg>
            </Link>
          ) : null}
          {"    "}
          <Avatar>
            <AvatarImage src="/pfp.jpg" />
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
          <Link href={"https://www.instagram.com/_mattiarotelli__/"}>
            mattiarotelli
          </Link>    
      </div>
      <div className="text-lg font-semibold justify-between flex flex-row gap-10">
        <Link href="/Album">Album</Link>
        <Link href="/Calendario ">Calendario</Link>
        <Link href="/Ricordi">Ricordi</Link>
      </div>
    </div>
  );
}
