import React from 'react'
import Download from './icons/download'

const Button = () => {
    return (
        <a className='inline-flex items-center justify-center gap-1 bg-neutral-500 text-black px-2 py-0.5 rounded-sm font-semibold h-[34px]' href="https://drive.google.com/file/d/143QpZOcdrlRm29KLn3-bsTUNaZA2IMWD/view?usp=sharing" target='_blank' download={true}>
            Resume
            <Download className="md:block hidden" />
        </a>
    )
}

export default Button