import Image from 'next/image';

export default function Project(props) {
    return (
        <div className="flex flex-col min-w-full w-full min-h-fit rounded-lg">
            <div className="bg-white rounded-md">
                <div className="bg-white">
                    <Image
                        src={props.image}
                        alt={props.alt}
                        width={400}
                        height={200}
                        className="border-r-2"
                    /> 
                </div>
                <div className='bg-white p-4'>
                    <h1 className="text-xl font-bold text-black drop-shadow-sm text-center">
                        {props.title}
                    </h1>
                </div>
                <div className="rounded-md bg-white p-3 flex flex-row justify-around border-solid border-2 border-black">
                    <a href='{props.demo}' className='text-black hover:text-blue-400'>
                        Demo
                    </a>
                    <a href='{props.github}' className='text-black hover:text-blue-400'>
                        Code
                    </a>
                </div>
            </div>
        </div>
    );
};