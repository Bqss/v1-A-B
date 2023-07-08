import About from "@/components/organism/About";
import Contact from "@/components/organism/Contact";
import Experience from "@/components/organism/Experience";
import Home from "@/components/organism/Home";
import Works from "@/components/organism/Works";



const Page = () => {

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-24">
      <Home/>
      <About/>
      <Experience/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default Page;