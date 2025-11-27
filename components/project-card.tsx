import React from 'react'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react';

interface Project {
    name: string;
    description: string;
    url: string;
    github?: string;
    techStack?: string[];
}

const ProjectCard = (project: Project) => {
    return (
        <div className='group block h-full relative'>
            <Link href={project.url} target='_blank' className='absolute inset-0 z-0' />
            <div className='h-full bg-white dark:bg-[#18181b] hover:bg-neutral-50 dark:hover:bg-[#27272a] transition-colors rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between group-hover:border-neutral-300 dark:group-hover:border-neutral-700 relative'>
                <div className='space-y-4'>
                    <div className='flex items-start justify-between'>
                        <h3 className='text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-black dark:group-hover:text-white transition-colors'>
                            {project.name}
                        </h3>
                        <div className='flex items-center gap-3 text-neutral-500 dark:text-neutral-400 relative z-20'>
                            {project.github && (
                                <Link href={project.github} target="_blank" className='hover:text-black dark:hover:text-white transition-colors'>
                                    <Github className='w-5 h-5' />
                                </Link>
                            )}
                            <Link href={project.url} target="_blank" className='hover:text-black dark:hover:text-white transition-colors'>
                                <ExternalLink className='w-5 h-5' />
                            </Link>
                        </div>
                    </div>

                    <p className='text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed italic'>
                        {project.description}
                    </p>
                </div>

                {project.techStack && (
                    <div className='flex flex-wrap gap-2 mt-6'>
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className='text-xs font-medium px-3 py-1.5 rounded-md bg-neutral-100 dark:bg-[#27272a] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/50'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectCard