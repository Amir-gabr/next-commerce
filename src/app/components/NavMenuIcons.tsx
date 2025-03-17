import Image from 'next/image'
import React from 'react'

export default function NavMenuIcons() {
  
  return (
    <div className="w-1/2 flex items-center justify-center gap-8">
      <Image src={"/profile.png"} alt="car" width={20} height={20} />
      <Image src={"/notification.png"} alt="car" width={20} height={20} />
      <Image src={"/cart.png"} alt="car" width={20} height={20} />
    </div>
  );
}
