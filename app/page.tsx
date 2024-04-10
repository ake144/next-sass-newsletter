import Image from "next/image";
import { Button } from "@/components/ui/button"
import  {Navbar} from '@/components/components/nav'
import  {TextGenerate} from '@/components/components/text'
import Footer from "@/components/components/fotter";


export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
     <div className="flex flex-row items-center justify-center"> 
     <Navbar />
     </div>
     <TextGenerate />  
      
      <Button>Click me</Button>
    <div  className="w-full  "> <Footer /> </div> 
    </main>
  );
}
