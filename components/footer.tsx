import React from 'react'

const Footer = () => {
    return (
        <footer className=" w-full flex items-center justify-center py-3">
            <div className="text-neutral-500 text-sm italic font-thin flex  gap-2 ">
                <p>Design and coded by</p>
                <a
                    className="underline"
                    href="https://github.com/shivam-vishwakarma"
                    target="_blank"
                    rel="noreferrer"
                >
                    Shivam Vishwakarma
                </a>
            </div>
        </footer>

    )
}

export default Footer