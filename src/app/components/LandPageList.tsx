import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LandPageList() {
  return (
    <div className="w-full flex gap-8 bg-gradient-to-r from-[rgb(255,163,224)] to-[#f4f4f4]">
      <div className="w-1/2 flex items-center ps-28 ">
        <div className="w-full flex flex-col justify-center ">
          <h3 className="leading-[40px] font-semibold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
            Grab up to 50% off on Selected Products
          </h3>
          <Link href="/" className="mt-5">
            <button className="font-semibold border-2 border-black hover:bg-black hover:text-white ease-in-out duration-200 rounded-lg py-2 px-4">Buy Now</button>
          </Link>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src={"/woman.png"}
          alt=" woman image"
          width={500}
          height={500}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}
