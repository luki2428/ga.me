"use client"
import { Play } from "lucide-react"

export default function Section5(){
    const link = "OSfPfbFeymc"

    return(
        <section className="py-32 flex flex-col items-center justify-center gap-14 relative">
            <div className="bg-red-50 relative w-[700px] h-[400px] flex justify-center items-center shadow-[0px_0px_200px_400px_rgba(186,98,255,0.1)] -z-10">
                <h1 className="uppercase absolute text-7xl font-bold -left-16 -top-14">Nasze<br /> poradniki</h1>
                <iframe src={`https://www.youtube.com/embed/${link}`} width={700} height={400} className="pointer-events-none" allowFullScreen title="video"></iframe>
                {/* <button className="absolute bg-gradient-to-r from-[#8F00FF] to-[#b75dff] h-20 aspect-[10/7] flex items-center justify-center rounded-xl">
                    <Play size={32} fill="white" />
                </button> */}
                {/* <div className="absolute bg-purple-400 w-full h-full -left-14 -bottom-6 -z-10 backdrop-blur-[500px] blur-[1000px]" /> */}
            </div>
        </section>
    )
}