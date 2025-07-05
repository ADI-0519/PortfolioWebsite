import accessify from "../assets/accessify.jpg"
import weatherwise from "../assets/weatherwise.jpg"
import scraper from "../assets/scraper.jpg"
import { Github } from "lucide-react"
import Button from "./button"


function Projects() {
    const projects = [
        {
            id: 0,
            title: "Accessify",
            description: "A Chrome (Manifest V3) browser extension plus a small Flask micro-service that bundles multiple on-page accessibility helpers. Epilepsy safe video playback, Dyslexia mode, Colour-blind CSS filters, Irlen overlay, In-page text-to-speech, One-click paragraph summariser and a Learning Zone to improve web surfing and digestion of content.",
            image: accessify,
            tags: ["JavaScript","React","PostgreSQL","FastAPI", "TypeScript"],
            url: "#"
        },

        {
            id: 1,
            title: "AI Web Scraper",
            description: "Designed a web scraper to dynamically scrape user-provided web content URLs, extracting relevant DOM elements. Incorporated llama3.1 to develop an AI prompt system which returned information and insights from the scraped websites",
            image: scraper,
            tags: ["Python","Selenium","BeautifulSoup","Ollama"],
            url: "https://github.com/ADI-0519/AI-web-scraper"
        },

        {
            id: 2,
            title: "WeatherWise",
            description: "Smart weather application that provides real-time weather updates, a login system for personalised experiences, and daily outfit recommendations based on the weather and time of day. Users can quickly check the forecast and get tailored clothing suggestions to stay comfortable throughout the day.",
            image: weatherwise,
            tags: ["JavaScript","React","PostgreSQL", "NeonDB", "TypeScript"],
            url: "https://github.com/ADI-0519/WeatherWise-web-app"
        }



    ]




  return (
    <section id="projects" className="py-24 px-4 relative">
      

      <div className="container mx-auto ">

        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 mx-auto max-w-2xl">
            Here are my featured projects, each one carefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item, key) => (

              <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-lg card-hover border flex flex-col">
                <div>
                    <img src={item.image} className="w-full h-50 object-cover transition-transform duration-400 " />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                    <div className="flex flex-wrap gap-4 mb-4">
                        {item.tags.map((tag,i) => (

                            <span key={i} className="text-xs font-semibold text-secondary rounded-full bg-secondary px-1 py-1 border shadow-xl"> 
                                {tag}
                            </span>

                        ))}
                    </div>
                    
                <div className="flex-1">
                  <span className="text-xl font-bold block mb-2">{item.title}</span>
                  <p className="text-xs font-semibold text-secondary leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-4 flex justify-between items-center text-foreground/80 hover:text-primary transition-colors duration-100">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center m-12">
          <Button href="https://github.com/ADI-0519" type={true} text="Check my Github" />
        </div>
      </div>
    </section>
  )
}

export default Projects
