import Link from "next/link"
import styles from "@/css/home.module.css"
import Image from "next/image"
import background from "@/assets/section3.jpg"

export default function Section3(){
    return(
        <section className="py-96 mt-32 h-[700px] flex flex-col items-center justify-center gap-14 overflow-hidden relative">
            <Image src={background} alt="Section 3 background" className="absolute -z-10 bg-cover bg-no-repeat bg-center" />
            <div className={`${styles.section3} -z-10`} />
            
            <h1 className="uppercase font-bold text-7xl max-w-[620px] text-wrap text-center">Nie czekaj Zbuduj listę już dziś</h1>
            <Link href={'#'} className="text-xl px-10 py-2 leading-8 flex items-center font-semibold gap-4 bg-gradient-to-r from-[#8F00FF] to-[#b75dff] hover:scale-105 transition-all">Utwórz konto</Link>
        </section>
    )
}