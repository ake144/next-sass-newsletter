import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from '@/components/components/nav';
import { TextGenerate } from '@/components/components/text';
import Footer from "@/components/components/fotter";
import ReviewsSection from '@/components/components/testimonial'
import { Heroparallalx } from "@/components/components/parallel";
import { Bentogrid } from "@/components/components/feature";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen m-auto relative">
      <div className="w-full  py-3 my-8 ">
        <Navbar />
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <TextGenerate />
        <Heroparallalx />
        <Bentogrid/>
        <Button  className="p-5 m-5">Read More</Button>
       <ReviewsSection />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
