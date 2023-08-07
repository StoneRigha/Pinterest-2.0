import React from 'react'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function UserInfo({userInfo}) {
  console.log(userInfo)

  const router = useRouter
  const {data:session} = useSession();
  const onLogoutClick=()=>{
    signOut();
    router.push('/');
  }
  return (
    <div className='flex flex-col items-center'>
      <Image 
      src={userInfo.userImage}
      alt='User image'
      width={100}
      height={100}
      priority={true} 
      className='rounded-full'
      />

      <h2 className='text-[30px] font-semibold'>{ userInfo.userName }</h2>
      <h2 className='text-gray-500'>{userInfo.email}</h2>
      <button className="bg-gray-200 text-black font-semibold mt-5 p-2 rounded-full px-4">Share</button>
      {session?.user.email == userInfo.email? <button className="bg-gray-200 text-black font-semibold mt-5 p-2 rounded-full px-4"
      onClick={()=>onLogoutClick()}>Logout</button>:null
  }
    </div>
  )
}

export default UserInfo