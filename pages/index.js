import Image from 'next/image'
import { Inter } from 'next/font/google'
import Project from './components/Project'
import Skill from './components/Skill'

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
      <section id='about-me' className='flex flex-col items-center justify-center min-h-min drop-shadow-lg space-y-8'>
        <div className='font-extrabold'>
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
        <div className='flex flex-col'>
          <h1 className='text-6xl font-bold text-black drop-shadow-sm'>
            Skills
          </h1>
          <div className='flex flex-row'>
            <div className='flex flex-col m-9'>
              <h1 className='text-4xl font-bold text-black drop-shadow-sm'>
                Languages
              </h1>
              <ul className='text-2xl font-semibold text-black drop-shadow-sm'>
                <Skill
                  image='/../public/skills/python.png'
                  alt='Python'
                  title='Python'
                  className='border-r-2'
                ></Skill>
              </ul>
            </div>
            <div className='flex flex-col m-9'>
              <h1 className='text-4xl font-bold text-black drop-shadow-sm'>
                Frameworks
              </h1>
              <ul className='text-2xl font-semibold text-black drop-shadow-sm'>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Flask</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className='flex flex-col m-9'>
              <h1 className='text-4xl font-bold text-black drop-shadow-sm'>
                Tools
              </h1>
              <ul className='text-2xl font-semibold text-black drop-shadow-sm'>
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Postman</li>
                <li>Heroku</li>
                <li>Netlify</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id='projects' className='flex flex-col items-center justify-center min-h-min drop-shadow-lg space-y-8'>
        <h1 className='text-6xl font-bold text-black drop-shadow-sm'>
          Projects
        </h1>
        <div className='mt-7 grid grid-cols-3 gap-4'>
          <Project
            image='/../public/projects/nature.png'
            alt='Nature'
            title='Nature'
          />
          <Project
            image='/../public/projects/weather.png'
            alt='Weather'
            title='Weather'
          />
          <Project
            image='/../public/projects/voyage.png'
            alt='Voyage'
            title='Voyage'
          />
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
