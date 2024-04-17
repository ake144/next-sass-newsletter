'use client'
import { cn } from "@/utils/cn";
import React from "react";
import { useState, useEffect } from "react";
import { LatestBlog } from  "@/utils/type";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


async function getPost() {
  try {
    const response = await fetch("api/blog",);
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


export function Bentogrid() {

  const [posts, setPosts] = React.useState<LatestBlog[]>([]);

  React.useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await getPost();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, []);
  return (<>
  <h2 className="text-4xl p-4 m-4">Our  Latest Articles </h2>
    <BentoGrid className="max-w-4xl mx-auto">
      {posts.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Skeleton  image={item.image}/>}
          image={item.image}
          link = {item.link}
          slug={item.slug}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </>
  );
}
const Skeleton = ({ image }: { image:string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    {
      <Image src={image} width={270} height={16} alt={'Imageoooo'} />}
  </div>
);
