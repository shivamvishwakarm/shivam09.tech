import React from 'react'
import CodeMerged from '../icons/code-merged'
import Link from 'next/link'

interface PRProps {
  title: string;
  link: string;
}

const PRCard = (pr: PRProps): React.ReactElement => {
  return (
    <Link href={pr.link} target='_blank' className='flex items-center gap-2 dark:bg-[#1d1d1d] bg-[#f4f4f4] dark:text-neutral-100 px-4 py-2 rounded-md hover:bg-neutral-200/80 dark:hover:bg-neutral-800 transition-colors'>
      <CodeMerged size={30} className='text-[#8957e5]' />
      <p className='text-xl'>{pr.title} </p>
    </Link>
  )
}

export default PRCard