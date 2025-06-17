
import { useState } from "react"
import PersonalInfo from "./PersonalInfo";
import Qualifications from "./Qualifications";
import Skills from "./Skills";

function AboutMe() {
  const [activeSection, setSection] = useState("Personal Info");
  const categories = ["Personal Info", "Qualifications", "Skills"]


  return (
    <section id="about" className="py-24 px-4 relative">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center container">
                About <span className="text-primary">Me</span>
      </h2>

      <div className="flex container flex-wrap justify-center gap-5 mb-12 w-fit bg-secondary/90 rounded-full mx-auto">
        {categories.map((item,key) => (

            <button key={key} onClick={() => setSection(item)} className= {`px-5 py-2 rounded-full transition-all duration-300 cursor-pointer capitalize ${activeSection === item ? "bg-primary text-primary-foreground shadow-xl" : "bg-secondary/70 text-foreground hover:bd-secondary"}`}>
              {item}
            </button>
        ))}
      </div>

      <div className="container h-150 rounded-2xl">

        {activeSection === "Personal Info" && < PersonalInfo />}
        {activeSection === "Qualifications" && <Qualifications/>}
        {activeSection === "Skills" && <Skills/>}

      </div>
      
    </section>
  )
}

export default AboutMe
