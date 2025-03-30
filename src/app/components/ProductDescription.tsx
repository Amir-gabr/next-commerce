import React from "react";

export default function ProductDescription() {
  return (
    <div className="">
      <div className="flex flex-col gap-6">
        <h4 className="font-semibold text-xl lg:text-2xl">Product Name</h4>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
        </p>
        <p className="font-semibold text-lg">$ 40</p>
        <div className="">
            <p className="text-lg mb-3">Choose a Color</p>
            <div className="flex gap-4">
            <p className="w-8 h-8 bg-blue-400 rounded-full"></p>
            <p className="w-8 h-8 bg-red-400 rounded-full"></p>
            <p className="w-8 h-8 bg-black rounded-full"></p>
            </div>
        </div>
        <div className="">
            <p className="text-lg mb-3">Choose a Size</p>
            <div className="flex gap-4">
            <p className="border-2 border-red-400 rounded-xl text-red-500 px-3">
                Small
            </p>
            <p className="border-2 border-red-400 rounded-xl text-red-500 px-3">
                medium
            </p>
            <p className="border-2 border-red-400 rounded-xl text-red-500 px-3">
                Large
            </p>
            </div>
        </div>
        <div className=" ">
            <p className="text-lg mb-3">Choose a Quantity</p>
            <div className="flex justify-between items-center">
                <div className="flex bg-gray-100 gap-6 py-2 px-4 rounded-2xl">
                    <p className="">T</p>
                    <p className="">1</p>
                    <p className="">T</p>
                </div>
                <p className="border-2 h-fit border-red-400 rounded-xl text-red-500 px-3">
                    ADD TO CART
                </p>
            </div>
        </div>
      </div>
      <p className="border-t my-4"></p>
      <div className="flex flex-col gap-5">
        <h4 className="font-semibold text-xl">Product Info</h4>
        <p className="">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
        </p>
        <p className="">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
        </p>
        <p className="">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </div>
  );
}
