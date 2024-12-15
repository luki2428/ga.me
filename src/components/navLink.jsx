"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink({ name, path }){
    const pathname = usePathname()

    if(path != '/' && pathname.startsWith(path)){
        return <Link href={path} className="text-white">{name}</Link>
    } else if (path == '/' && pathname == '/'){
        return <Link href={path} className="text-white">{name}</Link>
    }

    return <Link href={path} className="hover:text-white transition-all">{name}</Link>
}