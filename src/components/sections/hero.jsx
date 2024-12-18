import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "@/css/home.module.css";
import Image from "next/image";
import background from "@/assets/section1.jpg";

export default function Hero() {
  return (
    <section className="pt-72 pb-16 md:py-52 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      <Image
        src={background}
        alt="Section 1 background"
        className="absolute -z-10 bg-cover bg-no-repeat bg-center opacity-10"
      />
      <div className={`${styles.hero_bg} -z-10`} />

      <h1 className="uppercase font-bold text-4xl sm:text-7xl max-w-[620px] text-wrap text-center">
        A community for gamers by gamers
      </h1>
      <p className="sm:text-xl max-w-96 text-center mt-4 mb-8 font-open-sans text-gray-300">
        Bądź na bieżąco ze światem gier, oznaczaj i planuj kolejne rozgrywki
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          href={"#"}
          className="text-xl px-10 py-2 leading-8 flex items-center font-semibold gap-4 bg-gradient-to-r from-[#8F00FF] to-[#b75dff] hover:scale-105 transition-all"
        >
          Dołącz do nas <ArrowUpRight className="-rotate-[9deg]" />
        </Link>
        <Link
          href={"#"}
          className="text-xl leading-8 border-2 flex items-center justify-center px-4 py-2 font-bold border-[#8F00FF] hover:scale-105 transition-all"
        >
          Zaloguj się
        </Link>
      </div>
    </section>
  );
}
