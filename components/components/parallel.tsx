"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import { useEffect,useState } from "react";
import { LatestBlog,posts } from "@/utils/type";

async function getPost() {
  try {
    const response = await fetch("api/latest",);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const responseData = await response.json();
    if (responseData.success && responseData.data) {
      return responseData.data;
    } else {
      throw new Error("Failed to fetch posts data");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // return an empty array in case of error
  }
}





export function Heroparallalx() {
  const [posts, setPosts] = React.useState<posts[]>([]);
 
  React.useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await getPost();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, []);

  return <HeroParallax products={posts} />;
}
