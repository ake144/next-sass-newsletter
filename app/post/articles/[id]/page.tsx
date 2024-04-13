'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { posts } from '@/utils/type';
import Link from "next/link";

export default function PostPage() {
  const { id } = useParams();

  const [postData, setPostData] = useState<posts | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/latest/${id}`, {cache: 'force-cache'});
        const data = await response.json();

        if (data.success) {
          setPostData(data.data.post);
        } else {
          setError(data.error);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Failed to fetch post');
      }
    };

    fetchPost();
  }, [id]);

  return (
    <>
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
              Articles
            </a>
          </div>

          <img src={postData.thumbnail} className="w-full object-cover lg:rounded" style={{ height: "28em" }}/>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="w-1/6"> </div>
          <div className="px-2 lg:px-0 justify-center items-center mt-12 text-white light:text-black text-lg leading-relaxed w-1/2">
            <p className="pb-6"> {postData.content}  </p>
          </div>
          <div></div>
          <div className="w-1/5 item-end justify-end right-0  mt-12">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2 w-1/3 h-20 ">
             
                <img src="/profile.png" className="h-10 w-10 rounded-full mr-2 object-cover" />
                <div>
                  <p className="font-semibold text-white light:text-black text-sm"> Akanji </p>
                  <p className="font-semibold text-white light:text-black text-xs"> Editor  </p>
                </div>
              </div>
              <p className="text-white light:text-black py-3">
                I will writes about technology and related things
              </p>
               <Link  href='https://www.linkedin.com/in/akeja/' >
              <button   className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                Follow 
                <i className='bx bx-user-plus ml-2' ></i>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    )}
    {error && <p>{error}</p>}
    </>
  );
}
