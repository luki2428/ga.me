import Link from "next/link";
import NavLink from "./navLink";

export default function Header(){
    // Temp status
    const logged = true

    return(
        <header className="flex justify-between items-center py-10 px-20 w-full text-[#9F9F9F] text-center select-none absolute">
            <div className="text-3xl font-bold text-gradient">GA.ME</div>

            <nav className="flex gap-12 text-lg">
                <NavLink name={'Home'} path={'/'} />
                <NavLink name={'Blog'} path={'/blog'} />
                <NavLink name={'Lista gier'} path={'#'} />
                {/* <Link href={'/'} className="hover:text-white transition-all">Home</Link>
                <Link href={'/blog'} className="hover:text-white transition-all">Blog</Link>
                <Link href={'/game-list'} className="hover:text-white transition-all">Lista gier</Link> */}
                {logged && <NavLink name={'Twoja lista'} path={'/my-list'} />}
            </nav>

            <Link href={logged? '/logout' : '/login'} className="text-lg hover:text-white transition-all">{logged? 'Wyloguj się' : 'Zaloguj się'}</Link>
        </header>
    )
}