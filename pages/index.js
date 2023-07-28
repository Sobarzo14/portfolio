import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-white'>
      <nav className='bg-rose-500 w-full top-0 font-semibold flex flex-row justify-between p-8 drop-shadow-md fixed z-10'>
        <h1 className='font-extrabold text-lg'>Abelardo Sobarzo</h1>
        <ul className='flex flex-row'>
          <a href='#about-me'>
            <li className='m-2'>About Me</li>
          </a>
          <a href='#projects'>
            <li className='m-2'>Projects</li>
          </a>
          <a href='#contact'>
            <li className='m-2'>Contact</li>
          </a>
        </ul> 
      </nav>
      <section id='about-me' className='flex flex-col items-center justify-center min-h-screen py-2 drop-shadow-lg m-4'>
        <h1 className='text-6xl font-bold text-black drop-shadow-sm'>
          Hello, I'm <span className='text-rose-500'>Abelardo</span>
        </h1> 
        <p className='text-2xl font-semibold text-black drop-shadow-sm'>
          I'm a software developer
        </p>
        <div className='mt-4'>
          <Image
            src='/images/abelardo.png'
            alt='Picture of the author'
            width={200}
            height={200}
            className='rounded-full'
          />
        </div>
      </section>
      <section id='projects' className='flex flex-col items-center justify-center min-h-screen py-2 drop-shadow-lg m-4'>
        <h1 className='text-6xl font-bold text-black drop-shadow-sm'>
          Projects
        </h1>
      </section>
      <section id='contact' className='flex flex-col items-center justify-center min-h-screen py-2 drop-shadow-lg m-4'>
        <h1 className='text-6xl font-bold text-black drop-shadow-sm'>
          Contact
        </h1>
      </section>
    </main>
  )
}
