import React from 'react'
import ProjectCard from './project-card'
import { USER } from '@/data/user'
const Projects = () => {
    return (
        <div className='px-4 mt-10 transform md:-translate-x-40 '>
            <div className='flex md:flex-row flex-col gap-4 justify-between items-center hover:shadow-3xl shadow-red-400'>
                {
                    USER.projects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            name={project.name}
                            description={project.description}
                            url={project.url}
                            image={project.image}
                        />
                    ))
                }

            </div>
        </div>

    )
}

export default Projects