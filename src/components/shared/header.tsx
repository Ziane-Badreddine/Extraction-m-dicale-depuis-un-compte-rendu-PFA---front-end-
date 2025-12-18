import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className=" sticky inset-0 w-full h-16 z-50 px-4 md:px-10 bg-background  ">
      <div className=" w-full h-16 flex items-center justify-between">
        <Link href={"/"}>
          <Image src={"/logo-name.svg"} alt="logo" width={168} height={56} />
        </Link>
        <div className="flex items-center justify-center gap-4">
          <Link href={"/login"}>
            <Button
              variant={"outline"}
              className=" cursor-pointer hover:rounded-none transition-all duration-300"
            >
              login
            </Button>
          </Link>
          <Link href={"/register"}>
            <Button className=" cursor-pointer hover:rounded-none transition-all duration-300">
              {" "}
              register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
