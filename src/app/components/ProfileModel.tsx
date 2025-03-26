"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function ProfileModel() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative cursor-pointer">
      <Image
        src={"/profile.png"}
        alt="car"
        width={23}
        height={23}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute top-12 right-1/2 translate-x-1/2 z-50 py-2 w-32 bg-white shadow-md flex flex-col justify-center items-center gap-3">
          <Link href={"/"}>Profile</Link>
          <button>Logout</button>
        </div> 
      )}
    </div>
  );
}
