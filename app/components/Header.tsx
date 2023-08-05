import Image from "next/image";
import React from "react";
import { HiSearch, HiBell, HiChat } from "react-icons/hi"

function Header() {
  return (
    <div>
      <Image 
      src="/logo.png" 
      alt="logo" 
      width={50} 
      height={50}
      className="hover:bg-gray-600 p-2 rounded-full cursor-pointer"
      />
      <button className="bg-white text-black p-2 rounded-full px-4">Home</button>
      <button className="font-semibold rounded-full px-4">Create</button>
      <div className="bg-gray-900 p-3 flex gap-3 items-center rounded-full">
        <HiSearch className="text-[25px] text-gray-500" />
        <input type="text" placeholder="Search" className="bg-transparent" />
      </div>
      <HiBell />
        <HiChat />
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
