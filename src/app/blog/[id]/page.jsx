import axios from "axios"

// export const metadata = {
//     title: 'test'
// }

export async function generateMetadata({ params }) {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    return {
        openGraph: {
            title: data.data.title,
            description: data.data.body,
            url: `localhost://blog/${data.data.id}`
        }
    }
}

export default async function PostPage({ params }){
    const content = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    // console.log(content)

    return(
        <h1>{content.data.body}</h1>
    )
}