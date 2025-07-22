import Project from "../Components/Project"
import Button from "../Components/button"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import StarBackground from "../Components/StarBackground"
import Toggle from "../Components/toggle"


function ProjectsPage() {
  return (
    <div className="h-full text-foreground overflow-x-hidden bg-background">
        <Toggle />

        <StarBackground />

        <Navbar />

        <section className="py-24 px-4 min-h-screen items-center justify-center flex flex-col gap-8 z-30 container ">

        <div className="text-5xl text-foreground font-bold tracking-tight animate-fade-in-delay-1">Projects</div>
        
        <div className="text-xl font-bold tracking-tight">
          Welcome to my Projects Page, where I explore ideas at the intersection of algorithms, quantitative methods, and intelligent systems. A space for deep thinking on computer science, reasoning, and machine learning.
        </div>  

         <div className="container z-30 mx-auto">
          <Project />

        </div>

        {/* <Hello /> */}

        {/* <button className="cosmic-button mt-5" onClick={() => navigate("/")}>Back to Home</button> */}
        <Button href={"/#home"} type={true} text={"Back to Home"}/>


      </section>

        <Footer />

    </div>
  )
}

export default ProjectsPage
