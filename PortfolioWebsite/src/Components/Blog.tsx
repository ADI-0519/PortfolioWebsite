
import Button from "./button"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

function Blog() {
    const projects = [
    {
        id: 0,
        title: "Nash's Equilibrium",
        description: "A strategic simulation exploring optimal player behavior using game theory principles. Models equilibrium in competitive settings like poker.",
        image: img3,
        url: "/BlogPage"
    },

    {
        id: 1,
        title: "The Secretary Problem",
        description: "An interactive demo of the classic optimal stopping dilemma. Implements probabilistic selection to maximize chances of choosing the best option.",
        image: img1,
        url: "/BlogPage"
    },

    {
        id: 2,
        title: "Vector Search in Python",
        description: "A prototype search system using vector embeddings for fast semantic lookup. Explores cosine similarity and real-time query ranking.",
        image: img2,
        url: "/BlogPage"
    }
]





  return (
    <section id="blog" className="py-24 px-4 relative">
      

      <div className="container mx-auto ">

        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
                My <span className="text-primary">Blog</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 mx-auto max-w-2xl">
            Here are some of my recent posts on programming, math, and technical explorations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item, key) => (

              <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-lg card-hover border flex flex-col gap-5">
                <div>
                    <img src={item.image} className="w-full h-50 object-cover transition-transform duration-400 " />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                    
                  <div className="flex-1">
                    <span className="text-xl font-bold block mb-2">{item.title}</span>
                    <p className="text-xs font-semibold text-secondary leading-relaxed">{item.description}</p>
                  </div>

                  <div className="flex justify-center items-center">
                    <div className="text-center">
                      <Button href={item.url} type={true} text="View post" />
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Blog
