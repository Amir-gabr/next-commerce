"use client"

import React,{useState} from "react";
import Sort from "./Sort";

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
        <Sort/>
      </div>
      <p className="border-t my-4"></p>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-xl mb-4">Product Info</h4>
        <h6 className="font-semibold text-lg">Title</h6>
        <p className="">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
        </p>
        <h6 className="font-semibold text-lg">Title</h6>
        <p className="">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
        </p>
        <h6 className="font-semibold text-lg">Title</h6>
        <p className="">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </div>
  );
}
