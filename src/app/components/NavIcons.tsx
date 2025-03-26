import Image from 'next/image'
import React from 'react'
import ProfileMenu from './ProfileModel';
import CartModel from './CartModel';

export default function NavIcons() {
  
  return (
    <div className=" md:w-2/5 lg:w-1/3 flex items-center justify-center gap-8">
      <ProfileMenu />
      <Image src={"/notification.png"} alt="car" width={23} height={23} />
      <CartModel />
    </div>
  );
}
