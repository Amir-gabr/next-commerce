import Image from 'next/image'
import React from 'react'

export default function ProductImages() {
  return (
          <div className="flex flex-col gap-4">
            <div className="w-full h-full ">
              <Image src={"/2_prod.webp"}alt="product name"width={500}height={500}className="w-full border"/>
            </div>
            <div className="flex gap-4">
              <Image src={"/2_prod.webp"}alt="product name"width={500}height={500}className="w-1/4 border rounded-lg"/>
              <Image src={"/2_prod.webp"}alt="product name"width={500}height={500}className="w-1/4 border rounded-lg"/>
            </div>
          </div>
  )
}
