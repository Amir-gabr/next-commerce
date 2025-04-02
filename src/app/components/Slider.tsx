"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const slider = [
  {
    id        : 1,
    title: "Summer Sale collection",
    description: "Sale! Up to 50% off on all products",
    image: "/summer.jpg",
    url: "/",
    bg: " bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale collection",
    description: "Sale! Up to 50% off on all products",
    image: "/winter.jpg",
    url: "/",
    bg: " bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale collection",
    description: "Sale! Up to 50% off on all products",
    image: "/spring.jpg",
    url: "/",
    bg: " bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden ">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slider.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col md:flex-row `}
          >
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md: md:items-start  gap-5 py-40 ps-10">
              <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </p>
              <p className=" md:w-5/6 text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl">
                {slide.title}
              </p>
              <Link href={slide.url} className="">
                <button className="bg-black text-white py-2 px-4 hover:bg-white hover:text-black hover:border-2 border-black ">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="w-1/2 hidden md:block">
              <Image
                src={slide.image}
                alt={slide.title}
                width={500}
                height={500}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        {slider.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={` w-3 h-3 ring-1 ring-gray-600 rounded-full cursor-pointer flex justify-center items-center ${
              current === index ? "scale-150" : ""
            } `}
          >
            {current === index && (
              <div className="w-2 h-2 rounded-full bg-black"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
