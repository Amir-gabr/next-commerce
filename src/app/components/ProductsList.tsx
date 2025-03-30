//
//
//
//
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function ProductsList() {
    return (
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          <div className="flex flex-col">
            <Link href={"/test"} className="relative w-full h-80">
                <Image
                  src={"/1_prod.webp"}
                  width={500}
                  height={500}
                  alt="product"
                  className="absolute h-full w-full object-cover object-center border z-10 hover:opacity-0 ease-in-out duration-300"
                />
                <Image
                  src={"/2_prod.webp"}
                  width={500}
                  height={500}
                  alt="product"
                  className="absolute h-full w-full object-cover object-center border"
                />
            </Link>
            <div className="flex flex-col gap-3 py-2">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Product Name</p>
                <p className="font-semibold">$ 40</p>
              </div>
              <p className="text-sm text-gray-500">Available Product Name</p>
              <button className="bg-black text-white py-2 px-4">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
    );
}
