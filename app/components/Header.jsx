"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import app from "../Shared/firebaseConfig";
import { useRouter } from "next/navigation";

function Header() {
  const { data: session } = useSession();

  const router = useRouter();

  console.log(session);

  const db = getFirestore(app);

  useEffect(() => {
    saveUserInfo();
  }, [session]);

  const saveUserInfo = async () => {
    if (session?.user) {
      await setDoc(doc(db, "user", session.user.email), {
        userName: session?.user.name,
        email: session?.user.email,
        userImage: session?.user.image,
      });
    }
  };
  return (
    <div className="flex gap-3 md:gap-2 items-center p-6">
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        onClick={()=>router.push('/')}
        priority={true}
        className="hover:bg-gray-600 p-2 rounded-full cursor-pointer"
      />
      <button className="bg-white text-black p-2 rounded-full px-4 hidden md:block">
        Home
      </button>
      <button className="font-semibold rounded-full px-4" onClick={()=>router.push('/pin-builder')}>Create</button>
      <div className="bg-gray-900 p-3 gap-3 items-center rounded-full w-full hidden md:flex">
        <HiSearch className="text-[25px] text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none"
        />
      </div>
      <HiSearch className="text-[25px] text-gray-500 md:hidden" />
      <HiBell className="text-[40px] text-gray-500" />
      <HiChat className="text-[40px] text-gray-500" />
      {session?.user ? (
        <Image
          src={session?.user?.image}
          onClick={() => router.push("/" + session)}
          alt="profile image"
          width={50}
          height={50}
          priority={true}
          className="hover:bg-gray-600 p-2 rounded-full cursor-pointer"
        />
      ) : (
        <button
          className="font-semibold rounded-full px-4"
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Header;
