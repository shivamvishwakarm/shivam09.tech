import React from 'react'
import Image from 'next/image'
const Projects = () => {
    return (
        <div className='px-4'>
            <h1 className='text-neutral-500 text-2xl font-semibold mt-10'>Projects</h1>
            <div className='flex flex-row justify-between items-center'>
                <div className='w-72  bg-linear-to-b from-neutral-500 to-neutral-900 rounded-lg p-2 space-y-4 border border-neutral-800 border-opacity-50 flex flex-col items-center justify-center shadow-sm shadow-neutral-800'>
                    <Image src="/snake-ladder-npm.png" alt="snake" width={500} height={500} />
                    <p className='bottom-0 text-neutral-400 font-thin text-lg'>Snake and Ladder WS Package</p>

                </div>
                <div className='w-72  bg-linear-to-b from-neutral-500 to-neutral-900 rounded-lg p-2 space-y-4 border border-neutral-800 border-opacity-50 flex flex-col items-center justify-center shadow-sm shadow-neutral-800'>
                    <Image src="/snake-ladder-npm.png" alt="snake" width={500} height={500} />
                    <p className='bottom-0 text-neutral-400 font-thin text-lg'>Workshop Leager</p>

                </div>
            </div>
        </div>
    )
}

export default Projects