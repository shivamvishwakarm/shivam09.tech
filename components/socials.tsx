import React from 'react'
import Button from './button'
import Github from '@/components/icons/github'
import Phone from '@/components/icons/phone'
import Envelope from '@/components/icons/envelope'
import Linkedin from '@/components/icons/linkedin'
import { USER } from '@/data/user'
import Image from 'next/image'
import Link from 'next/link'

const Socials = () => {
    return (
        <div className='grid grid-cols-5 gap-x-2 gap-y-2 mt-8'>
            <Button />

            <div className='space-x-3 col-span-4 rounded-lg flex items-center justify-center'>
                {
                    USER.socialLinks.map((socials) => (
                        <a key={socials.name} href={socials.url} target="_blank" rel="noreferrer" className='group'>
                            <img className="text-neutral-500 shadow-3xl size-8" src={socials.icon} alt={socials.name} />
                        </a>
                    ))


                }
                <Link href="mailto:admin@shivam09.tech">
                    <Envelope className="text-neutral-500 shadow-3xl size-10" />
                </Link>



            </div >
        </div >
    )
}

export default Socials
