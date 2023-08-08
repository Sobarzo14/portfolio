import React from 'react'

export default function Contact() {
    return (
        <div className='flex flex-col items-center justify-center min-h-min drop-shadow-lg'>
            <p className='text-lg font-semibold text-center text-black drop-shadow-sm max-w-xl'>
                If you want to contact me, feel free to send me an email at <span className='text-rose-500'>
                    <a href='mailto:abelardo.sobarzo.14@gmail.com'>abelardo.sobarzo.14@gmail.com</a>
                    </span> or message me on <span className='text-rose-500'>
                    <a href='https://www.linkedin.com/in/abelardo-sobarzo/'>LinkedIn</a>
                </span>.
            </p>
            {/* <form className='flex flex-col justify-center items-center w-full'>
                <div className='flex flex-col items-center justify-center m-4 w-full'>
                    <label className='text-2xl font-bold text-black drop-shadow-sm shadow-pup'>
                        Name
                    </label>
                    <input
                        type='text'
                        name='name'
                        className='border-2 border-black rounded-md text-black drop-shadow-sm shadow-pup w-full'
                    />
                </div>
                <div className='flex flex-col items-center justify-center m-4 w-full'>
                    <label className='text-2xl font-bold text-black drop-shadow-sm shadow-pup'>
                        Email
                    </label>
                    <input
                        type='email'
                        name='email'
                        className='border-2 border-black rounded-md text-black drop-shadow-sm shadow-pup w-full'
                    />
                </div>
                <div className='flex flex-col items-center justify-center m-4 w-full'>
                    <label className='text-2xl font-bold text-black drop-shadow-sm shadow-pup'>
                        Message
                    </label>
                    <textarea
                        name='message'
                        className='border-2 border-black rounded-md text-black drop-shadow-sm shadow-pup w-full'
                    />
                </div>
                <button
                    type='submit'
                    className='bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-md drop-shadow-sm shadow-pup'
                >
                    Submit
                </button>
            </form> */}
        </div>                  
    )
}