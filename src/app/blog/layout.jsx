import Footer from "@/components/footer";

export default function BlogLayout({ children }){
    return(
        <>
        <section className="min-h-screen pt-48 px-8">
            {children}
        </section>
        <Footer />
        </>
    )
}