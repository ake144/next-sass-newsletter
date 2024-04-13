'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { posts } from '@/utils/type';

export default function PostPage() {
  const { id } = useParams();

  const [postData, setPostData] = useState<posts | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/latest/${id}`);
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
    <main className="mt-10">
      <div className="mb-4 md:mb-0 w-1/2 mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
            
          </h2>
          <a 
            href="#"
            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
          >
            Cryptocurrency
          </a>
        </div>

        <img src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="w-full object-cover lg:rounded" style={{ height: "28em" }}/>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="w-1/6"> </div>
        <div className="px-2 lg:px-0 justify-center items-center mt-12 text-gray-700 text-lg leading-relaxed w-1/2">
          <p className="pb-6">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was outlived peculiar rendered led six.</p>

          <p className="pb-6">Difficulty on insensible reasonable in. From as went he they. Preference themselves me as thoroughly partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening newspaper in advantage frankness to concluded unwilling.</p>

          {/* Remaining paragraphs and content */}
        </div>

        <div className="w-1/4 item-end justify-end right-0  mt-12">
          <div className="p-4 border-t border-b md:border md:rounded">
            <div className="flex py-2 w-1/3 h-20 ">
              <img src="https://randomuser.me/api/portraits/men/97.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
                <p className="font-semibold text-gray-700 text-sm"> Mike Sullivan </p>
                <p className="font-semibold text-gray-600 text-xs"> Editor </p>
              </div>
            </div>
            <p className="text-gray-700 py-3">
              Mike writes about technology
              Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
            </p>
            <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
              Follow 
              <i className='bx bx-user-plus ml-2' ></i>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
