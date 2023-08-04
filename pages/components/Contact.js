import React from 'react'

export default function Contact() {
    return (
        <div className='flex flex-col items-center justify-center min-h-min drop-shadow-lg'>
            <h1 className='text-6xl font-bold text-black drop-shadow-sm'>
                Contact
            </h1>
            <p className='text-lg font-semibold text-center text-black drop-shadow-sm max-w-xl'>
                If you want to contact me, feel free to send me an email at <span className='text-rose-500'>
                    <a href='mailto:

                    '>  </a>
                </span> or message me on <span className='text-rose-500'>
                    <a href='https://www.linkedin.com/in/abelardo-ramirez-iii-0b0b3b1b0/'>LinkedIn</a>
                </span>.
            </p>
        </div>                  
    )
}