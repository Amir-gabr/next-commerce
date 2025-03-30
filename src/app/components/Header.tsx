
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import MobileNavMenu from './MobileNavMenu';
import SearchBar from './SearchBar';
import NavMenuIcons from './NavIcons';

export default function Header() {
  return (
    <header className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 border-b">
      {/* small screen */}
      <div className="h-full flex md:hidden items-center justify-between">
        <Link href={"/"} className="font-semibold text-lg">
          Logo S
        </Link>
        <MobileNavMenu />
      </div>
      {/* medium screen */}
      <div className="h-full hidden md:flex lg:hidden items-center justify-between">
        <Link href={"/"} className="w-2/5 font-semibold text-xl">
          Logo M
        </Link>
        <div className="w-3/5 flex items-center justify-between">
          <SearchBar />
          <NavMenuIcons />
        </div>
      </div>
      {/* large screen */}
      <div className="h-full hidden md:hidden lg:flex items-center justify-between">
        <div className="w-1/2 flex items-center gap-12">
          <div className="">
            <Link href={"/"} className="font-semibold text-2xl">
              Logo L
            </Link>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/"}>contact</Link>
            <Link href={"/"}>about</Link>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-between">
          <SearchBar />
          <NavMenuIcons />
        </div>
      </div>
    </header>
  );
}
