import Image from 'next/image'
import { Inter } from 'next/font/google'
import Project from './components/Project'
import Skill from './components/Skill'
import { projects } from './api/projects'
import { skills } from './api/skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-white'>
      <nav className='bg-rose-500 w-full top-0 font-semibold flex flex-row justify-between p-8 drop-shadow-md'>
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
      <section id='about-me' className='flex flex-col items-center justify-center min-h-min drop-shadow-lg space-y-8 mt-10 md:mt-0'>
        <h1 className='text-5xl md:text-6xl font-bold text-black drop-shadow-sm mb-2'>
          About Me
        </h1>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='flex flex-col my-0 mx-4'>
            <div className='m-2'>
              <Image
                src='/../public/abelardo.jpeg'
                alt='Picture of the author'
                width={400}
                height={400}
                className='rounded-md text-black drop-shadow-sm'
              />
            </div>
            <h1 className='text-3xl font-bold text-black drop-shadow-sm text-center'>
              Hello, I'm <span className='text-rose-500'>Abelardo</span>
            </h1> 
            <p className='text-lg font-semibold text-center text-black drop-shadow-sm max-w-xl'>
              I'm a software developer studying at the Pennsylvania State University. I'm currently working on a project called <span className='text-rose-500'>PokeDex</span> which is a web application that allows users to search for Pokemon and view their stats.
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-6xl font-bold text-black drop-shadow-sm shadow-pup'>
            Skills
          </h1>
          <div className='mt-7 grid grid-cols-3 gap-6'>
            { skills.map((skill) => (
              <Skill
                image={skill.image}
                alt={skill.alt}
                title={skill.title}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </section>
      <section id='projects' className='flex flex-col items-center justify-center min-h-min drop-shadow-lg space-y-8'>
        <h1 className='text-6xl font-bold text-black drop-shadow-sm'>
          Projects
        </h1>
        <div className='mt-7 grid grid-cols-3 gap-4'>
          {
            projects.map((project) => (
              <Project
                image={project.image}
                alt={project.alt}
                title={project.title}
              />
            ))
          }
        </div>
      </section>  
      <section id='contact' className='flex flex-col items-center justify-center min-h-min py-2 drop-shadow-lg m-4 space-y-8'>
        <h1 className='text-6xl font-bold text-black drop-shadow-sm'>
          Contact
        </h1>
      </section>
    </main>
  )
}
