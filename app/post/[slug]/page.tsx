'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LatestBlog } from '@/utils/type';
import Image from "next/image";
import Link from "next/link";
import { SkeletonCard } from "@/components/components/skeleton";


export default function PostPage({params:{slug}}:{params:{slug:string}}) {
  const decodedSlug = decodeURIComponent(slug); // Decoding the slug
  console.log("the value of slug is " + decodedSlug)

  const [Loading , setLoading] = useState(true)

  const [postData, setPostData] = useState<LatestBlog | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/${decodedSlug}`);
        const data = await response.json();

        if (data.success) {
          setPostData(data.data.post);
          setLoading(false)
        } else {
          setError(data.error);
          setLoading(false)
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("Failed to fetch post");
        setLoading(false)
      }
    };

    fetchPost();
  }, [decodedSlug]);

  return (
    <>
    <Link  href='/'  className="my-4 p-4 mx-4">
      <Image src='/back.png' alt=" back" height={25} width={50} />
     </Link>
     {Loading && (
      <SkeletonCard />
    )}
      {postData && (
        <main key={postData.id} className="mt-10">
          <div className="mb-4 md:mb-0 w-1/2 mx-auto relative">
            <div className="px-4 py-5 lg:px-0">
              <h2 className="text-4xl font-semibold text-white light:text-black leading-tight">
                {postData.title}
              </h2>
              <a
                href="#"
                className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
              >
                Blogs
              </a>
            </div>

            <Image
              src={postData.image}
              className="w-full object-cover lg:rounded"
              alt=" "
              height={14}
              width={100}
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="w-1/6"> </div>
            <div className="px-2 lg:px-0 justify-center items-center mt-12 text-white light:text-black text-lg leading-relaxed w-1/2">
              <p className="pb-6"> {postData.description} </p>
            </div>

            <div className="w-1/5 mx-2  justify-center mt-12">
              <div className="p-4 border-t border-b md:border md:rounded">
                <div className="flex py-2 w-1/4 h-20 ">
                  <Image
                  height={10}
                  alt=" "
                  width={10}
                    src="/profile.png"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white light:text-black text-sm">
                      {" "}
                      Akanji{" "}
                    </p>
                    <p className="font-semibold text-white light:text-black text-xs">
                      {" "}
                      Editor{" "}
                    </p>
                  </div>
                </div>
                <p className="text-white light:text-black py-3">
                  I will write about technology and related things
                </p>
                <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                  Follow
                  <i className="bx bx-user-plus ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </main>
      )}
      {error && <p>{error}</p>}
    </>
  );
}
