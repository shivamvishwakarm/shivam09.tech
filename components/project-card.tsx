import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Arrow from './icons/arrow';

interface Project {
    name: string;
    description: string;
    url: string;
    image: string;
}

const ProjectCard = (project: Project) => {
    return (
        <Link className='group ' href={project.url} target='_blank'>
            <div className='  bg-gradient-to-b from-teal-900 to-black rounded-lg p-2 space-y-4 border border-neutral-900 border-opacity-50 flex flex-col items-center justify-center shadow-sm shadow-teal-800 '>
                <Image src={project.image} className='rounded filter brightness-70 ' alt="snake" width={500} height={500} />
                <p className=' flex flex-row gap-1  items-center bottom-0 text-neutral-400 font-thin text-lg '>
                    <span> {project.name}</span>  <Arrow className='opacity-0 md:group-hover:opacity-100 transition-all duration-200 ease-in-out md:group-hover:text-teal-500' />

                </p>
            </div>
        </Link >
    )
}

export default ProjectCard