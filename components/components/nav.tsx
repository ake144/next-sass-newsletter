"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import { ModeToggle } from "@/components/components/darkToggle";
import { posts } from "@/utils/type";

export function Navbar() {
  const [postData, setPostData] = useState<posts[]>([]);
  const [error, setError] = useState<any>([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/latest`, {
          cache: "force-cache",
        });
        const data = await response.json();

        if (data.success) {
          console.log(data.data);
          setPostData(data.data.post);
        } else {
          setError(data.error);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("Failed to fetch post");
      }
    };

    fetchPost();
  }, []);

  return (
    <div className="relative w-full flex flex-row items-center justify-center">
      <Nav className="top-2"/>
    </div>
  );
}

function Nav({
  className}: {
  className?: string;

}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="News">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
                title='Scientists Discover New Species '
                link="http://localhost:3000/post/articles/1"
                thumbnail='https://source.unsplash.com/featured/?amazon-rainforest'
                content="Scientists conducting research in the Amazon rainforest have discovered a new species of frog."
            />
            <ProductItem
                title='SpaceX Launches Record-Breaking Satellite'
                link="http://localhost:3000/post/articles/3"
                thumbnail='https://source.unsplash.com/featured/?spacex-satellite-launch'
                content="SpaceX successfully launched its heaviest satellite to date into orbit around the Earth."
            />
             <ProductItem
                title='Global Leaders Gathered'
                link="http://localhost:3000/post/articles/2"
                thumbnail='https://source.unsplash.com/featured/?paris-climate-summit'
                content="World leaders from over 100 countries have convened in Paris for a crucial climate summit."
            />
             <ProductItem
                title='Renewable Energy Surpasses Fossil Fuels in Europe'
                link="http://localhost:3000/post/articles/5"
                thumbnail='https://source.unsplash.com/featured/?renewable-energy'
                content="Renewable energy sources, including solar and wind power, have surpassed fossil fuels as the leading source of electricity generation in Europe" 
                          />

          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      <div className="absolute bottom-2 right-4 items-end justify-end">
        <ModeToggle />
      </div>
    </div>
  );
}
