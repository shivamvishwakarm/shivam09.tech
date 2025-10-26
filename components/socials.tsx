import React from 'react'
import { USER } from '@/data/user'


const Socials = () => {
    return (
        <div className='grid grid-cols-5 gap-x-2 gap-y-2 '>

            <div className='space-x-2 col-span-4 rounded-lg flex items-end justify-end'>
                {
                    USER.socialLinks.map((socials) => (
                        <a
                            key={socials.name}
                            href={socials.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group  p-1 rounded-md transition-all duration-200 ease-in-out"
                        >
                            <socials.icon
                            color="#666666"
                                className="text-neutral-500 shadow-3xl size-10 "
                                width={35}
                                height={35}
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
