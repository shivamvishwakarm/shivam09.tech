import React from 'react'
import { USER } from '@/data/user'


const Socials = () => {
    return (
        <div className='grid grid-cols-5 gap-x-2 gap-y-2 '>

            <div className='space-x-3 col-span-4 rounded-lg flex items-start justify-start'>
                {
                    USER.socialLinks.map((socials) => (
                        <a
                            key={socials.name}
                            href={socials.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group bg-neutral-800 p-1 rounded-md hover:bg-teal-800 transition-all duration-200 ease-in-out"
                        >
                            <socials.icon
                                className="text-neutral-500 shadow-3xl size-10 "
                                width={20}
                                height={20}
                                aria-label={socials.name}
                            />
                        </a>
                    ))


                }




            </div >
        </div >
    )
}

export default Socials
