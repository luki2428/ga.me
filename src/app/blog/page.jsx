import BlogPost from "@/components/blogPost"
import axios from "axios"

export default async function BlogPage({params}){
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=21&_page=1')

    return(
        <>
        <div className="pb-8 flex justify-evenly gap-12 flex-wrap">
            {posts.data.map((element, index) => (
                <BlogPost key={index} post_id={element.id} title={element.title} content={element.body}  />
            ))}
        </div>
        {/* <div className="flex justify-center gap-1">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div> */}
        </>
    )
}