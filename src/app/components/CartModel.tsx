"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CartModel() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative cursor-pointer">
      <div className="relative" onClick={() => setIsOpen(!isOpen)}>
        <Image src={"/cart.png"} alt="car" width={23} height={23} />
        <p className="absolute -right-2 -top-2 bg-red-400 text-white w-[18px] h-[18px] rounded-full flex justify-center items-center">
          2
        </p>
      </div>
      {isOpen && (
        <div className="border rounded-md md:w-[30vw] lg:w-[26vw] absolute top-12 right-0 p-2 z-50 bg-white shadow-md flex flex-col justify-between gap-4">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <div className="flex justify-between gap-1 bg-slate-100 ">
            <div className="border w-3/12">
              <Image
                src={"/cart.png"}
                alt="car"
                width={23}
                height={23}
                className="w-full"
              />
            </div>
            <div className="w-6/12">
              <p className="">product name</p>
              <p className="">Available</p>
              <p className="">QTy 1</p>
            </div>
            <div className="flex flex-col justify-around w-3/12">
              <p className="">$ 40</p>
              <p className="">Remove</p>
            </div>
          </div>
          <div className="flex justify-between ">
            <button className="border border-slate-900 rounded-md px-1">
              View Cart
            </button>
            <button className="bg-slate-900 text-white rounded-md px-1">
              Check out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
