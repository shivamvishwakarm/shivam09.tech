import React from 'react'
import ProjectCard from './project-card'
import { USER } from '@/data/user'
const Projects = () => {
    return (
        <div className=' mt-10 
  '>
            <h2 className='text-neutral-500 md:text-2xl text-xl font-semibold mb-3'>Projects </h2>
            <div className='grid items-center md:grid-cols-2 grid-cols-1 gap-12 hover:shadow-3xl shadow-red-400
           
            '>
                {
                    USER.projects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            name={project.name}
                            description={project.description}
                            url={project.url}
                            github={project.github}

                            techStack={project.techStack}
                        />
                    ))
                }
            </div>
        </div>

    )
}

export default Projects