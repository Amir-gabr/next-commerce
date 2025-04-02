"use client"
//
import Image from 'next/image'
import React, { useState } from 'react'

const images=[
  {id:1,url:"/2_prod.webp"},
  {id:2,url:"/1_prod.webp"},
  {id:3,url:"/1_prod.webp"},
  {id:3,url:"/1_prod.webp"},
]
export default function ProductImages() {
  const [selected,setSelected]=useState(1)
  return (
    <div className="relative">
      <div className="sticky top-10 h-fit flex flex-col gap-4">
        <div className="w-full h-full ">
          <Image
            src={images[selected].url}
            alt="product name"
            width={500}
            height={500}
            className="w-full border"
          />
        </div>
        <div className="flex gap-4 ">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className="w-1/4 border rounded-lg cursor-pointer"
            >
              <Image
                src={img.url}
                alt="product name"
                width={500}
                height={500}
                className="w-full h-full object-cover object-center rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
