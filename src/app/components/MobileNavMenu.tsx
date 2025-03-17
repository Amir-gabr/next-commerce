"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Image src="/menu.png" alt="menu" width={28} height={28} />
      </button>
      {isOpen && (
        <div className="absolute top-20 right-0 w-full h-[calc(100vh-80px)] bg-black shadow-md flex flex-col justify-center items-center gap-3 text-white z-100 ">
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
