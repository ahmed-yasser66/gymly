import Image from "next/image";
import bodyPartCardImg from "@/public/body-part.webp"
export default function BodyPartCard({ title }: { title: string }) {
    return (
        <div className="flex flex-col items-center gap-16 ">
            <div className=" h-[40rem] relative">
                <div className="inset-0 absolute bg-black/35" />
                <p className="[writing-mode:vertical-rl] text-7xl absolute top-1/2 left-1/2
                -translate-1/2 font-semibold">{title}</p>
                <Image src={bodyPartCardImg} alt="" className="object-cover size-full" />
            </div>
            <button className="border-2 border-primary size-fit w-full text-[2rem] px-8 py-4 rounded-4xl hover:bg-primary hover:text-black font-medium cursor-pointer duration-300">Start Today</button>
        </div>
    )
}