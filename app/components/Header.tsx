import Image from "next/image";
import React from "react";
import { HiSearch, HiBell, HiChat } from "react-icons/hi"

function Header() {
  return (
    <div className="flex gap-3 md:gap-2 items-center p-6">
      <Image 
      src="/logo.png" 
      alt="logo" 
      width={50} 
      height={50}
      className="hover:bg-gray-600 p-2 rounded-full cursor-pointer"
      />
      <button className="bg-white text-black p-2 rounded-full px-4 hidden md:block">Home</button>
      <button className="font-semibold rounded-full px-4">Create</button>
      <div className="bg-gray-900 p-3 gap-3 items-center rounded-full w-full hidden md:flex">
        <HiSearch className="text-[25px] text-gray-500" />
        <input type="text" placeholder="Search" className="bg-transparent outline-none" />
      </div>
        <HiSearch className="text-[25px] text-gray-500 md:hidden" />
        <HiBell className="text-[40px] text-gray-500" />
        <HiChat className="text-[40px] text-gray-500"  />
        <Image 
        src="/profile.jpg"
        alt="profile image"
        width={50}
        height={50}
        className="hover:bg-gray-600 p-2 rounded-full cursor-pointer" 
        />
    </div>
  );
}

export default Header;
