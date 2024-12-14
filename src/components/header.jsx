import Link from "next/link";

export default function Header(){
    // Temp status
    const logged = true

    return(
        <header className="flex justify-between items-center py-10 px-20 w-full text-[#9F9F9F] text-center select-none absolute">
            <div className="text-3xl font-bold text-gradient">GA.ME</div>

            <nav className="flex gap-12 text-lg">
                <Link href={'/'} className="hover:text-white transition-all">Home</Link>
                <Link href={'/blog'} className="hover:text-white transition-all">Blog</Link>
                <Link href={'/game-list'} className="hover:text-white transition-all">Lista gier</Link>
                {logged && <Link href={'/my-list'} className="hover:text-white transition-all">Twoja lista</Link>}
            </nav>

            <Link href={logged? '/logout' : '/login'} className="text-lg hover:text-white transition-all">{logged? 'Wyloguj się' : 'Zaloguj się'}</Link>
        </header>
    )
}