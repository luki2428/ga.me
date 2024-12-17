import Image from "next/image";
import temp from "@/assets/temp.jpg"

export default function GameCard({ players, status, img }){
    return(
        <div className="rounded-2xl h-96 aspect-[4/5] relative overflow-hidden flex-shrink-0">
            <Image src={`/games/${img}`} sizes="100%" fill={true} alt="Game Image" className="absolute object-cover inset-2" />
            <div className="absolute bottom-0 bg-white bg-opacity-10 w-full h-1/6 flex items-center justify-between px-6 backdrop-blur-lg">
                <div className="font-open-sans font-light">{players? players : 0} osób</div>
                <div className={`h-3 aspect-square rounded-full ${status? 'bg-green-400' : 'bg-red-500'}`} />
            </div>
        </div>
    )
}