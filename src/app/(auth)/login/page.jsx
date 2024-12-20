"use client"
import { UserRound, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { redirect } from "next/navigation"

export default function LoginPage(){
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const login = () => {
        localStorage.session = 'meow'
        redirect('/')
    }

    return(
        <>
            <h1 className="font-bold text-3xl uppercase">Logowanie</h1>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 px-4 py-2 bg-[#201826]">
                    <UserRound size={20} className="text-[#9F27FF]" />
                    <input type="text" className="h-5 font-poppins bg-transparent outline-none" placeholder="Nazwa użytkownika" />
                </div>
                <div className="flex gap-2 px-4 py-2 bg-[#201826]">
                    <input type={showPassword ? "text" : "password"} className="h-5 font-poppins bg-transparent outline-none" placeholder="Hasło" />
                    <button onClick={togglePasswordVisibility}>{showPassword? <EyeOff size={20} className="text-[#9F27FF]" /> : <Eye size={20} className="text-[#9F27FF]" />}</button>
                </div>
            </div>
            <button className="py-2 px-5 bg-gradient-to-r from-[#8F00FF] to-[#b75dff]" onClick={login}>Zaloguj się</button>
        </>
    )
}