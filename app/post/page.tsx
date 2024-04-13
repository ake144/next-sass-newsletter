 'use client'
 import React from 'react';
 import { IBlog, LatestBlog } from '@/utils/type';
import { Link } from 'lucide-react';
 
 async function getPost() {
   try {
     const response = await fetch("api/blog");
     if (!response.ok) {
       throw new Error('Failed to fetch posts');
     }
     const responseData = await response.json();
     if (responseData.success && responseData.data) {
       return responseData.data;
     } else {
       throw new Error('Failed to fetch posts data');
     }
   } catch (error) {
     console.error('Error fetching posts:', error);
     return []; // return an empty array in case of error
   }
 }
 
 export default function PostPage() {
   const [posts, setPosts] = React.useState<LatestBlog[]>([]);
 
   React.useEffect(() => {
     async function fetchPosts() {
       const fetchedPosts = await getPost();
       setPosts(fetchedPosts);
     }
     fetchPosts();
   }, []);
 
   return (
     <div>
       <h1>Blog Posts page</h1>
       <ul>
        <div  className='rounded-3 p-4 m-3  h-15 w-36 bg-gray-800'>
         {posts.map(post => (
            <Link>
           <li key={post.id}>
             <h2>{post.title}</h2>
             <p>{post.description}</p>
           </li>
           </Link>
         ))}
         </div>
       </ul>
     </div>
   );
 }
 