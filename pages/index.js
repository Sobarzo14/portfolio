import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className='m-10 p-5'>
        Welcome to <a href='https://nextjs.org'>Next.js!</a>
      </h1>
    </main>
  )
}
