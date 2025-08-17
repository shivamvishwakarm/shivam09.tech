import React from 'react'

const Arrow = ({ className = '', ...props }) => {
    return (
        <svg {...props} className={className} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
    )
}

export default Arrow