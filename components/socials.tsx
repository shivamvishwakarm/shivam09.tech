import React from 'react'
import Button from './button'
import Github from '@/components/icons/github'
import Phone from '@/components/icons/phone'
import Envelope from '@/components/icons/envelope'
import Linkedin from '@/components/icons/linkedin'

const Socials = () => {
    return (
        <div className='grid grid-cols-5 gap-x-2 gap-y-2 mt-8'>
            <Button />

            <div className='space-x-3 col-span-4 rounded-lg flex items-center justify-center'>
                <a href="https://github.com/shivam-vishwakarma" target="_blank" rel="noreferrer" className='group
                '>
                    <Github className=" text-neutral-500 shadow-3xl shadow-red-800" size={39} />
                </a>
                <a href="https://github.com/shivam-vishwakarma" target="_blank" rel="noreferrer">
                    <Linkedin className="text-neutral-500" size={39} />
                </a>
                <a href="https://github.com/shivam-vishwakarma" target="_blank" rel="noreferrer">
                    <Phone className=" text-neutral-500" size={39} />
                </a>

                <a href="https://github.com/shivam-vishwakarma" target="_blank" rel="noreferrer">
                    <Envelope className=" text-neutral-500" size={39} />
                </a>


            </div>
        </div>
    )
}

export default Socials
