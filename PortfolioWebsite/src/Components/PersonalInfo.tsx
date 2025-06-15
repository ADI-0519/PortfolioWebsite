import { Code } from "lucide-react"
import image from "../assets/image.jpg"


function PersonalInfo() {
  return (
    <div className="container card-hover gradient-border bg-blend-overlay rounded-2xl h-150 p-10 outline-4 opacity-0 animate-fade-in-delay-2">
          
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

          
  
        </div>
  )
}

export default PersonalInfo
