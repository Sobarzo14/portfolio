import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        if (sidebarOpen) {
            document.getElementById('sidebar').classList.remove('-translate-x-0');
            document.getElementById('sidebar').classList.add('-translate-x-full');
        } else {
            document.getElementById('sidebar').classList.remove('-translate-x-full');
            document.getElementById('sidebar').classList.add('-translate-x-0');
        }
    }

    return (
    <div>
        <div className="w-full bg-rose-600 fixed z-10 flex justify-between p-2 md:hidden">
            <a href='#about-me' className="p-2 hover:bg-rose-400 rounded-md">
                <h1 className='font-extrabold text-lg'>Abelardo Sobarzo</h1>
            </a>
            <button onClick={toggleSidebar} className='focus:outline-none focus:bg-rose-400'>
                <AiOutlineMenu className='text-3xl text-white m-2' />
            </button>
        </div>
        <div id='sidebar' className="fixed z-10 inset-y-0 left-0 -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out bg-rose-600 w-64">
            <nav className='z-10 w-[50%] h-[100%] sticky flex flex-col top-0 font-semibold md:flex justify-between p-8 drop-shadow-md'>
                <h1 className='font-extrabold text-lg'>Abelardo Sobarzo</h1>
                <ul className='flex flex-col justify-start md:flex-row'>
                    <a href='#about-me' className="p-2 hover:bg-rose-400 rounded-md">
                        <li className='m-2'>About Me</li>
                    </a>
                    <a href='#projects' className="p-2 hover:bg-rose-400 rounded-md">
                        <li className='m-2'>Projects</li>
                    </a>
                    <a href='#contact' className="p-2 hover:bg-rose-400 rounded-md">
                        <li className='m-2'>Contact</li>
                    </a>
                </ul> 
            </nav>
        </div>
    </div>
    )
}