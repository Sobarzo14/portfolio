import Image from 'next/image'
import Project from './components/Project'
import Skill from './components/Skill'
import Navbar from './components/Navbar'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { useState } from 'react'
import { projects } from './api/projects'
import { skills } from './api/skills'

export default function Home() {
  const [currentIndex, setIndex] = useState(0);
  const prevIndex = () => {
    setIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  }
  const nextIndex = () => {
    setIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
  }

  return (
    <main className='bg-white'>
      <Navbar />
      <section id='about-me' className='flex flex-col items-center justify-center min-h-min drop-shadow-lg space-y-8 md:mt-0'>
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
          <div className='mt-7 grid grid-cols-2 gap-10'>
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
      <section id='projects' className='mt-6 flex flex-col items-center justify-center min-h-min drop-shadow-lg'>
        <h1 className='text-6xl font-bold text-black drop-shadow-sm'>
          Projects
        </h1>
        <div className='m-5 flex flex-row items-center justify-center'>
          <GrPrevious onClick={prevIndex} className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-4xl rounded-full p-2 bg-rose-600'/>
            <Project
              image={projects[currentIndex].image}
              alt={projects[currentIndex].alt}
              title={projects[currentIndex].title}
            />
          <GrNext onClick={nextIndex} className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-4xl rounded-full p-2 bg-rose-600'/>
        </div>
      </section>  
      <section id='contact' className='mt-6 flex flex-col items-center justify-center min-h-min py-2 drop-shadow-lg m-4 space-y-8'>
        <h1 className='text-6xl font-bold text-black drop-shadow-sm'>
          Contact
        </h1>
      </section>
    </main>
  )
}
