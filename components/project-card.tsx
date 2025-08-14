import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FollowerPointerCard } from './following-pointer'

interface Project {
    name: string;
    description: string;
    url: string;
    image: string;
}

const ProjectCard = (project: Project) => {
    return (
        <Link href={project.url} target='_blank'>
            <FollowerPointerCard
                title={
                    <p className='text-xl font-bold px-2 bg-clip-text '>
                        Visit
                    </p>
                }
            >

                <div className='w-72  bg-linear-to-b from-neutral-500 to-neutral-900 rounded-lg p-2 space-y-4 border border-neutral-800 border-opacity-50 flex flex-col items-center justify-center shadow-sm shadow-neutral-800'>
                    <Image src={project.image} alt="snake" width={500} height={500} />
                    <p className='bottom-0 text-neutral-400 font-thin text-lg'>{project.name}</p>
                </div>
            </FollowerPointerCard>
        </Link>
    )
}

export default ProjectCard