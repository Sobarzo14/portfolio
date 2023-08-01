import Image from "next/image";

export default function Skill(props) {
    return (
        <div className={`w-full flex flex-col justify-center items-center min-w-full min-h-fit rounded-lg shadow-md ${props.color} p-4`}>
            <Image
                src={props.image}
                alt={props.alt}
                width={100}
                height={100}
                className="rounded-lg m-2"
            />
            <h1 className="text-xl font-bold text-black text-center">
                {props.title}
            </h1>
        </div>
    );
}