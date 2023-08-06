import React from 'react'
import Image from 'next/image'

function UserInfo({userInfo}) {
  console.log(userInfo)
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
    </div>
  )
}

export default UserInfo