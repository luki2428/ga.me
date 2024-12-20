import { Check, X } from "lucide-react";

export default function ListElement({content, compleated, onMarkReady, onDelete}){
    
    return(
        <div className={`min-h-12 w-full flex items-center justify-between gap-6 px-6 py-4 bg-[#101010] ${compleated? 'shadow-[0px_0px_20px_0px_rgba(0,255,25,0.5)]' : 'shadow-[0px_0px_20px_0px_rgba(156,30,254,0.5)]'}`}>
            <div className="text-wrap w-4/5 font-open-sans select-none">{content}</div>
            <div className="flex justify-between gap-3 z-30">
                {!compleated && <button onClick={onMarkReady} className="text-green-500"><Check /></button>}
                <button onClick={onDelete} className={compleated ? "text-gray-600" : "text-red-500"}><X /></button>
            </div>
        </div>
    )
}