import image from "../assets/image.jpg"

function AboutMe() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
      </h2>

        <div className="container mx-auto card-hover gradient-border bg-blend-overlay rounded-2xl h-150 p-10 outline-4">
            
            <div className="grid grid-rows-1 h-full grid-cols-[1fr_2fr]">
              <div className="w-full items-center justify-center flex drop-shadow-2xl">
                <div className="w-64 h-64 rounded-full overflow-hidden"><img src={image}></img></div>
              </div>

              <div className="text-xl font-bold text-muted-foreground text-center justify-between items-center">
                I am particularly fascinated by the advancements in AI, ML, data science and exploring how we can make a positive impact through innovative solutions. Beyond code, I enjoy playing the guitar, challenging my friends to a game of chess, and nurturing a small vegetable garden in my free time. I am always open to learning, be it new technologies, creative pursuits, or everyday skills.
              </div>
            </div>

            <div>


            </div>

        </div>
    </section>
  )
}

export default AboutMe
