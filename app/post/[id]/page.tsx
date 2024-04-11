'use client'

import { useEffect, useState } from "react";
import { IBlog } from '@/utils/type';
import { Link } from 'lucide-react';

const PageDetail = ({ id }: { id: number }) => {
  const [post, setPost] = useState<IBlog | null>(null); // Set initial state to null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/post/" + id);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const responseData = await response.json();
        if (responseData.success && responseData.data) {
          setPost(responseData.data); // Set fetched data to the post state
        } else {
          throw new Error('Failed to fetch post data');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Blog Details</h1>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      )}
    </div>
  );
};

export default PageDetail;
