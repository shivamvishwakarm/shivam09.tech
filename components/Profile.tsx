import React from 'react'
import Image from 'next/image'
const Profile = () => {
    return (
        <Image draggable={false} className='md:size-32 size-10 select-none mask-radial-from-16% border border-primary ' src="/profile.png" alt="profile" width={50} height={50} />


    )
}

export default Profile