import React from 'react'
import { USER } from '@/data/user'
import Link from 'next/link'

const Experience = () => {
    return (
        <div className='mt-2 px-4 py-1' >

            <h2 className='text-neutral-500 md:text-2xl text-xl font-semibold mb-3'>Experience </h2>
            <div className='flex flex-col gap-4'>
                {
                    USER.job.map((job, index) => (

                        <div key={index}>

                            <h3 className='md:text-2xl text-md font-semibold '>{job.position} - <Link href={job.website} className=" italic font-normal text-neutral-500 underline" target='_blank'>  {job.company}</Link></h3>
                            {
                                job.description.map((desc, index) => (
                                    <li key={index} className='font-sans text-sm mt-2 text-neutral-400 italic font-thin selection:bg-primary/20 selection:text-primary'>{desc}</li>
                                ))
                            }


                        </div>

                    ))
                }
            </div>

        </div >
    )
}

export default Experience