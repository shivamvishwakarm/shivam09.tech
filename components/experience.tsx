import React from 'react'
import { USER } from '@/data/user'
import Link from 'next/link'

const Experience = () => {
    return (
        <div className='mt-4 px-4 py-1' >

            <h2 className='text-neutral-500 text-2xl font-semibold'>Experience </h2>
            {
                USER.job.map((job, index) => (

                    <Link key={index} href={job.website} target="_blank" rel="noreferrer">

                        <h3 className='text-lg'>{job.position}  <span className=" italic font-thin text-neutral-500"> - {job.company}</span></h3>
                        {/* <p className='text-neutral-500 italic font-thin'>Dec 2024 - Present</p> */}

                    </Link >

                ))
            }


        </div >
    )
}

export default Experience