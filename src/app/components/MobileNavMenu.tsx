"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Image src="/menu.png" alt="" width={28} height={28} />
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 w-[200px] h-[200px] bg-white shadow-md flex flex-col justify-center items-center gap-3 text-black">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Home</Link>
        </div>
      )}
    </div>
  );
}
