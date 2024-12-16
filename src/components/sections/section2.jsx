import { CircleDot, Share2, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/assets/img1.png"

export default function Section2(){
    return (
        <section className="pt-36 pb-72 flex items-center justify-center">
            <div className="aspect-square h-[500px] bg-purple-500 relative scale-[30%] md:scale-50 lg:scale-100">
                <Image src={img1} alt="" className="object-cover object-center w-full h-full" />

                <div className="uppercase absolute text-[80px] leading-[80px] w-72 font-bold -right-36 -top-11">Bądź Na Bieżąco</div>
        
                <div className="flex flex-col absolute w-[15%] -right-9 -bottom-9 gap-8">
                    {/* Kółka mają gradient */}
                    <div className="aspect-square bg-[radial-gradient(circle,rgba(186,98,255,1)0%,rgba(143,0,255,1)70%)] rounded-full text-white flex justify-center items-center">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.8949 12.55C32.0449 6.86504 26.3383 3.33337 19.9999 3.33337C10.8099 3.33337 3.33325 10.81 3.33325 20C3.33325 29.19 10.8099 36.6667 19.9999 36.6667C26.3383 36.6667 32.0449 33.135 34.8949 27.45C35.0859 27.0692 35.1237 26.6296 35.0007 26.2217C34.8776 25.8137 34.603 25.4684 34.2333 25.2567L25.0283 20L34.2316 14.745C34.9999 14.305 35.2916 13.3417 34.8949 12.55ZM20.8399 18.5534C20.5846 18.6989 20.3723 18.9093 20.2246 19.1634C20.077 19.4175 19.9992 19.7062 19.9992 20C19.9992 20.2939 20.077 20.5826 20.2246 20.8367C20.3723 21.0907 20.5846 21.3012 20.8399 21.4467L31.1283 27.3217C29.9216 29.1721 28.2714 30.6914 26.3278 31.7413C24.3842 32.7913 22.209 33.3386 19.9999 33.3334C12.6483 33.3334 6.66659 27.3517 6.66659 20C6.66659 12.6484 12.6483 6.66671 19.9999 6.66671C22.2088 6.6615 24.3839 7.20859 26.3275 8.25823C28.271 9.30787 29.9213 10.8267 31.1283 12.6767L20.8399 18.5534Z" fill="white"/><path d="M19.1667 15C20.5475 15 21.6667 13.8807 21.6667 12.5C21.6667 11.1193 20.5475 10 19.1667 10C17.786 10 16.6667 11.1193 16.6667 12.5C16.6667 13.8807 17.786 15 19.1667 15Z" fill="white"/></svg>
                    </div>
                    <div className="aspect-square bg-[radial-gradient(circle,rgba(186,98,255,1)0%,rgba(143,0,255,1)70%)] rounded-full text-white flex justify-center items-center"><CircleDot size={32} /></div>
                    <div className="aspect-square bg-[radial-gradient(circle,rgba(186,98,255,1)0%,rgba(143,0,255,1)70%)] rounded-full text-white flex justify-center items-center"><Share2 size={32} /></div>
                </div>
        
                <div className="absolute -left-36 -bottom-52 w-80 flex flex-col gap-5">
                    <div className="uppercase text-[80px] font-bold leading-[80px]">Zbuduj Swoją Listę</div>
                    <div className="text-gray-300 font-open-sans">Stwórz swoją listę gier, oznaczaj ograne tytuły i udostępnij swoją bibliotekę. Bądź na bieżąco w świecie gier.</div>
                    {/* Też dodać gradient do strzałki*/}
                    <div>
                        <Link href={'#'} className="font-bold w-auto hover:underline">Dołącz do nas<MoveRight className="text-purple-500 inline-block ml-4" /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}