import background from "@/assets/section3.jpg";
import Footer from "@/components/footer";
import axios from "axios";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return {
    openGraph: {
      title: res.data.title,
      description: res.data.body,
      url: `http://localhost:3000/blog/${res.data.id}`,
    },
  };
}

export default async function PostPage({ params }) {
  const { id } = await params;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return (
    <>
      {/* dodać jakiś super background */}
      <Image src={background} alt="Background" className="bg-center bg-cover bg-no-repeat fixed opacity-5 -z-10 md:top-0 md:left-0" />
      <h1 className="text-4xl font-bold">{res.data.title}</h1>
      <p className="p-8 mt-8 pb-28 font-open-sans text-gray-200">
        {res.data.body}
      </p>
      <Footer className={"absolute bottom-0 left-0 w-full"} />
    </>
  );
}
