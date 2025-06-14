import { Code } from "lucide-react"
import image from "../assets/image.jpg"
import { useState } from "react"

function AboutMe() {
  const [activeSection, setSection] = useState("Personal Info");
  const categories = ["Personal Info", "Qualifications", "Skills"]

  return (
    <section id="about" className="py-24 px-4 relative">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
      </h2>

      <div className="flex container flex-wrap justify-center gap-6 mb-12">
        {categories.map((item,key) => (

            <button key={key} onClick={() => setSection(item)} className= {`"px-5 py-2 rounded-full transition-all duration-300 capitalize" ${activeSection === item ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"}`}>
              {item}
            </button>
        ))}
      </div>




      <div className="container mx-auto card-hover gradient-border bg-blend-overlay rounded-2xl h-150 p-10 outline-4">
          
          <div className="grid grid-rows-1 h-full grid-cols-[1fr_2fr]">
            <div className="w-full items-center justify-center flex drop-shadow-2xl">
              <div className="w-64 h-64 rounded-full overflow-hidden"><img src={image}></img></div>
            </div>

            <div className="w-full items-center justify-center flex drop-shadow-2xl">

              <div className="text-xl font-semibold text-muted-foreground text-center m-10  items-center justify-center">
                Hi, I'm Aditya and I am particularly fascinated by the advancements in AI, ML, data science and exploring how we can make a positive impact through innovative solutions. Beyond code, I enjoy playing the guitar, challenging my friends to a game of chess, and nurturing a small vegetable garden in my free time. I am always open to learning, be it new technologies, creative pursuits, or everyday skills.

                <div className="p-3 rounded-full bg-primary/10 w-12">
                  <Code className="h-6 w-6 text-primary"/>
                </div>               
              
              </div>

            </div>

            
          </div>

          <div>


        </div>

      </div>
    </section>
  )
}

export default AboutMe
