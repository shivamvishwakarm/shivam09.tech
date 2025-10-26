import React from 'react'
import CodeMerged from '../icons/code-merged'

const PRCard = () => {
  return (
    <div className='flex items-center gap-2 bg-primary px-4 py-3 rounded-md'>
        <CodeMerged size={30} className='text-[#8957e5]'/>
        <p className='text-xl'>Create Custom plugin of editor js to show code </p>
    </div>
  )
}


// view all merged pr: https://github.com/pulls?q=is%3Apr+author%3Ashivamvishwakarm+archived%3Afalse+is%3Aclosed
export default PRCard