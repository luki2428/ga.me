import Link from "next/link";

export default function BlogPost({ post_id, title, content }){
    return(
        <Link href={`/blog/${post_id}`} className="w-11/12 md:w-auto">
            <div className="w-full h-72 p-4 aspect-[3/2] flex flex-col gap-6 rounded-sm shadow-[0px_0px_10px_3px_rgba(156,30,254,0.3)] hover:shadow-[0px_0px_10px_3px_rgba(220,116,255,0.3)] hover:scale-105 transition-all">
                <h1 className="font-bold text-lg md:text-3xl">{title}</h1>
                <div className="overflow-hidden">{content}</div>
            </div>
        </Link>
    )
}