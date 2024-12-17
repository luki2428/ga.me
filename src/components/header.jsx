import Link from "next/link";
import NavLink from "./navLink";

export default function Header(){
    // Temp status
    const logged = true

    return(
        <header className="flex justify-between items-center py-10 px-20 w-full text-[#9F9F9F] text-center select-none absolute z-10">
            <div className="text-3xl font-bold text-gradient">GA.ME</div>

            <nav className="flex gap-12 text-lg">
                <NavLink name={'Home'} path={'/'} />
                <NavLink name={'Blog'} path={'/blog'} />
                <NavLink name={'Lista gier'} path={'#'} />
                {logged && <NavLink name={'Twoja lista'} path={'/my-list'} />}
            </nav>

            <Link href={logged? '/logout' : '/login'} className="text-lg hover:text-white transition-all">{logged? 'Wyloguj się' : 'Zaloguj się'}</Link>
        </header>
    )
}