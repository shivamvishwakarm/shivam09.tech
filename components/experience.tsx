import React from 'react'
import { USER } from '@/data/user'
import Link from 'next/link'

const Experience = () => {
    return (
        <div className='mt-2 px-4 py-1' >

            <h2 className='text-neutral-500 text-2xl font-semibold mb-3'>Experience </h2>
            <div className='flex flex-col gap-4'>
                {
                    USER.job.map((job, index) => (

                        <div key={index}>

                            <h3 className='text-2xl font-semibold '>{job.position} - <Link href={job.website} className=" italic font-normal text-neutral-500 underline" target='_blank'>  {job.company}</Link></h3>
                            <p className=' mt-2 text-neutral-400 italic font-thin selection:bg-gray-400 selection:text-white'>{job.description}</p>

                        </div>

                    ))
                }
            </div>

        </div >
    )
}

export default Experience