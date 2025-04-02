//
"use client";

import React, { useState } from "react";

const sizes = [
  { id: 1, size: "small" },
  { id: 2, size: "medium" },
  { id: 3, size: "large" },
];
const colors = [
  { id: 1, color: "#60a5fa" },
  { id: 2, color: "#f87171" },
  { id: 3, color: "#000000" },
];

export default function Sort() {
  const [quantity, setQuantity] = useState(1);
  const [SelectedColor, setSelectedColor] = useState(0);
  const [SelectedSize, setSelectedSize] = useState(0);

  const stock = 7;
  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
      // console.log(quantity)
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
      // console.log(quantity)
    }
  };
  return (
    <>
      <div className="">
        <p className="text-lg mb-3">Choose a Color</p>
        <div className="flex gap-4">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(color.id)}
              style={{ backgroundColor: color.color }}
              className={`w-6 h-6 ${
                color.id === SelectedColor ? "ring-4 ring-gray-300" : ""
              }  rounded-full`}
            ></button>
          ))}
        </div>
      </div>
      <div className="">
        <p className="text-lg mb-3">Choose a Size</p>
        <div className="flex gap-4">
          {sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(size.id)}
              className={`${
                size.id === SelectedSize ? "bg-red-400 text-white" : ""
              } border-2 border-red-400 rounded-lg text-red-500 px-3 py-1`}
            >
              {size.size}
            </button>
          ))}
        </div>
      </div>
      <div className=" ">
        <p className="text-lg mb-3">Choose a Quantity</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center bg-gray-100 gap-6 py-2 px-4 rounded-2xl">
            <button
              className="text-2xl font-semibold cursor-pointer"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            <p className="">{quantity}</p>
            <button
              className="text-xl font-semibold  cursor-pointer"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <p className="border-2 h-fit border-red-400 rounded-xl text-red-500 hover:bg-red-400 hover:text-white px-4 py-2 cursor-pointer ease-in-out duration-300">
            ADD TO CART
          </p>
        </div>
      </div>
    </>
  );
}
