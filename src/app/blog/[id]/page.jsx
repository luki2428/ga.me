import axios from "axios"

export default async function PostPage({ params }){
    const content = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    // console.log(content)

    return(
        <h1>{content.data.body}</h1>
    )
}