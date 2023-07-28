import Image from 'next/image';

export default function Project(props) {
    return (
        <div className="flex flex-col">
            <div className="bg-black">
                <Image
                    src={props.image}
                    alt={props.alt}
                    width={200}
                    height={100}
                    className="border-r-2"
                /> 
            </div>
            <div className="bg-black">
                <h1 className="text-2xl font-bold text-black drop-shadow-sm">
                    {props.title}
                </h1>
            </div>
            <div className="bg-black">
                <span>
                    Demo
                </span>
                <span>
                    Code
                </span>
            </div>
        </div>
    );
};