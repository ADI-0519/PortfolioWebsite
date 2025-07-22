import { useNavigate } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import StarBackground from "../Components/StarBackground"
import Toggle from "../Components/toggle"


import Blogs from "../Components/Blogs";



function BlogPage() {
  const navigate = useNavigate();
  
  return (
    <div className="h-full text-foreground overflow-x-hidden bg-background">
        <Toggle />

        <StarBackground />

        <Navbar />

        <section className="py-24 px-4 min-h-screen items-center justify-center flex flex-col gap-8 z-50 container ">

        <div className="text-5xl text-foreground font-bold tracking-tight animate-fade-in-delay-1">Blog</div>
        
        <div className="text-xl font-bold tracking-tight">
          Welcome to my Blog Page, where I explore ideas at the intersection of algorithms, quantitative methods, and intelligent systems. A space for deep thinking on computer science, reasoning, and machine learning.
        </div>  

         <div className="container z-50 mx-auto">
          <Blogs />
        </div>


        <button className="cosmic-button mt-5" onClick={() => navigate("/")}>Back to Home</button>

      </section>

        <Footer />

    </div>
  )
}

export default BlogPage
