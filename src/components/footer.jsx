import Link from "next/link";

export default function Footer(){
    return(
        <footer className="flex flex-col lg:flex-row justify-evenly lg:justify-between items-center h-28 border border-black font-bold px-24">
            <div className="flex gap-11 text-center">
                <Link href={'#'}>Privacy Policy</Link>
                <Link href={'#'}>Term & Conditions</Link>
            </div>
            <div className="text-gray-300 text-lg">Copyright © <span className="text-white">Grux</span></div>
        </footer>
    )
}