import BlogPost from "@/components/blogPost"
import axios from "axios"
import Link from "next/link"

export default async function BlogPage({ searchParams }){
    const postsLimit = 21
    const { page } = await searchParams
    const curPage = parseInt(page, 10) || 1
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${postsLimit}&_page=${curPage}`)
    const end = posts.data.length == postsLimit

    return(
        <>
        <div className="pb-8 flex justify-evenly gap-12 flex-wrap">
            {posts.data.map((element, index) => (
                <BlogPost key={index} post_id={element.id} title={element.title} content={element.body}  />
            ))}
        </div>

        <div className="flex justify-center gap-6 text-center pb-4">
            {curPage > 1 && <Link href={`?page=${curPage-1}`} className="bg-purple-900 hover:bg-purple-700 transition-all rounded-xl p-1">Poprzednia strona</Link>}
            {end && <Link href={`?page=${curPage+1}`} className="bg-purple-900 hover:bg-purple-700 transition-all rounded-xl p-1">Następna strona</Link>}
        </div>
        </>
    )
}