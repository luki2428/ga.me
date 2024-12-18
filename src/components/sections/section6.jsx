import Link from "next/link";
import styles from "@/css/home.module.css";
import Image from "next/image";
import background from "@/assets/section6.jpg";

export default function Section6() {
  return (
    <section className="py-8 md:py-96 mt-32 px-4 md:h-[700px] flex flex-col items-center justify-center gap-14 overflow-hidden relative">
      <Image
        src={background}
        alt="Section 3 background"
        className="absolute -z-20 bg-cover bg-no-repeat bg-center"
      />
      <div className={`${styles.section3} -z-20`} />

      <h1 className="uppercase font-bold text-4xl sm:text-7xl max-w-[620px] text-wrap text-center">
        Dołącz do społeczności
      </h1>
      <Link
        href={"#"}
        className="text-xl px-10 py-2 leading-8 flex items-center font-semibold gap-4 bg-gradient-to-r from-[#8F00FF] to-[#b75dff] hover:scale-105 transition-all"
      >
        Utwórz konto
      </Link>
    </section>
  );
}
