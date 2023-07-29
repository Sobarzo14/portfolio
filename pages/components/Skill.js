import Image from "next/image";

export default function Skill(props) {
    return (
        <div className="flex flex-col min-w-full w-full min-h-fit rounded-3xl drop-shadow-[0_35px_35px_{props.color}]">
            <Image
                src={props.image}
                alt={props.alt}
                width={200}
                height={200}
                className="border-r-2"
            />
            <h1 className="text-xl font-bold text-black drop-shadow-sm text-center">
                {props.title}
            </h1>
        </div>
    );
}