export default function AuthLayout({ children }){
    return(
        <section className="w-full h-screen flex justify-center items-center">
            <div className="p-12 flex flex-col gap-8 items-center bg-[#101010] shadow-[0px_4px_44px_16px_rgba(156,30,254,0.5)]">
                {children}
            </div>
        </section>
    )
}