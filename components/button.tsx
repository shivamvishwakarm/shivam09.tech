import React from 'react'
import Download from './icons/download'

const Button = () => {
    return (
        <button className='inline-flex items-center justify-center gap-1 bg-neutral-500 text-black px-2 py-0.5 rounded-sm font-semibold h-[34px]'>
            Resume
            <Download />
        </button>
    )
}

export default Button