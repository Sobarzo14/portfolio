import Image from 'next/image'
import { Inter } from 'next/font/google'
import Project from './components/Project'

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
      <section id='about-me' className='flex flex-col items-center justify-center min-h-screen drop-shadow-lg m-4'>
        <div className='font-extrabold mt-'>
          <h1 className='text-6xl font-bold text-black drop-shadow-sm'>
            About Me
          </h1>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col m-9'>
            <h1 className='text-6xl font-bold text-black drop-shadow-sm'>
              Hello, I'm <span className='text-rose-500'>Abelardo</span>
            </h1> 
            <p className='text-2xl font-semibold text-black drop-shadow-sm max-w-xl'>
              I'm a software developer studying at the Pennsylvania State University. I'm currently working on a project called <span className='text-rose-500'>PokeDex</span> which is a web application that allows users to search for Pokemon and view their stats.
            </p>
          </div>
          <div className='m-9'>
            <Image
              src='/../public/abelardo.jpeg'
              alt='Picture of the author'
              width={400}
              height={400}
              className='rounded-md text-black drop-shadow-sm'
            />
          </div>
        </div>
      </section>
      <section id='projects' className='flex flex-col items-center justify-center min-h-screen drop-shadow-lg'>
        <h1 className='text-6xl font-bold text-black drop-shadow-sm'>
          Projects
        </h1>
        <Project
          image='/../public/website.png'
          alt='website'
        ></Project>
      </section>  
      <section id='contact' className='flex flex-col items-center justify-center min-h-screen py-2 drop-shadow-lg m-4'>
        <h1 className='text-6xl font-bold text-black drop-shadow-sm'>
          Contact
        </h1>
      </section>
    </main>
  )
}
