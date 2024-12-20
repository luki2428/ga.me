import Link from "next/link";

export default function Footer({ className }){
    return(
        <footer className={`flex flex-col lg:flex-row justify-evenly lg:justify-between items-center h-28 border border-black font-bold px-24 ${className}`}>
            <div className="flex gap-11 text-center">
                <Link href={'#'} className="hover:underline">Privacy Policy</Link>
                <Link href={'#'} className="hover:underline">Term & Conditions</Link>
            </div>
            <div className="text-gray-300 text-lg text-center">Copyright © <span className="text-white">Grux</span></div>
        </footer>
    )
}