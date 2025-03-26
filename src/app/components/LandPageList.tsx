import Image from "next/image";
import React from "react";

export default function LandPageList() {
  return (
    <div className="w-full  flex gap-8">
      <div className="w-1/2 flex items-center ps-10 ">
      <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl">
      Sale! Up to 50% off on all products
      </p>
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
