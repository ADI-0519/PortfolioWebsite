import { useNavigate } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import StarBackground from "../Components/StarBackground"
import Toggle from "../Components/toggle"

function BlogPage() {
  const navigate = useNavigate();
  return (
    <div className="h-full text-foreground overflow-x-hidden bg-background">
        <Toggle />

        <StarBackground />

        <Navbar />

        <section className="py-24 px-4 min-h-screen items-center justify-center text-center min-w-screen flex flex-col gap-8">

        <div className="text-5xl text-foreground font-bold tracking-tight">Blog</div>

        <title>Title</title>
        
        <div className="text-5xl text-primary font-bold tracking-tight text-glow">
          Coming Soon
        </div>


        <button className="cosmic-button mt-5" onClick={() => navigate("/")}>Back to Home</button>

      </section>

        <Footer />

    </div>
  )
}

export default BlogPage
