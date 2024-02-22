import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row border-b justify-between w-full mb-4 items-center py-4 px-[5%]">
      <div className="flex flex-row gap-3 items-center text-center">
        <Avatar>
          <AvatarImage src="/pfp.jpg" />
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
        <Link href={"https://www.instagram.com/_mattiarotelli__/"}>
          mattiarotelli
        </Link>
      </div>
      <div className="text-lg font-semibold">
        <ul className="justify-between flex flex-row gap-10">
          <link href="Album">
            <li> Album </li>
          </link>
          <link href="Calendario ">
            <li> Calendario </li>
          </link>
          <link href="Ricordi">
            <li> Ricordi </li>
          </link>
        </ul>
      </div>
    </div>
  );
}
