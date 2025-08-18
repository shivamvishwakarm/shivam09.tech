import React from 'react'
import ProjectCard from './project-card'
import { USER } from '@/data/user'
const Projects = () => {
    return (
        <div className='px-4 mt-10   '>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-10 hover:shadow-3xl shadow-red-400'>
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