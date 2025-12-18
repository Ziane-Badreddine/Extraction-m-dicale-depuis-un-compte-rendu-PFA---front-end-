"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className, size = 35 }: LogoProps) {
  return (
    <Link href={"/"} className="flex items-center fill-primary gap-2">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={size}
        height={size}
        className="fill-primary"
      />
    </Link>
  );
}
