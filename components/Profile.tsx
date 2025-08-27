"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
const Profile = () => {
    const MotionImage = motion(Image);

    return (
        <MotionImage
            initial={{ borderColor: 'rgba(156, 163, 175, 1)' }} // Tailwind gray-400
            animate={{
                borderColor: [
                    'rgba(156, 163, 175, 1)', // visible
                    'rgba(156, 163, 175, 0)', // transparent
                    'rgba(156, 163, 175, 1)', // visible again
                    'rgba(156, 163, 175, 0)', // transparent
                    'rgba(156, 163, 175, 1)', // visible again
                ],
            }}
            transition={{
                delay: 1,
                duration: 0.7,
                times: [0, 0.5, 1],
                ease: 'easeInOut',
            }}


            quality={100} draggable={false} className='md:size-32 size-10 select-none mask-radial-from-16% border border-gray-400 brightness-90 ' src="/profile.png" alt="profile" width={50} height={50} />


    )
}

export default Profile