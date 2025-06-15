

function Skills() {
    const skills = [

        {name: "Python", level: 95},
        {name: "Java", level: 95},
        {name: "TypeScript", level: 95},
        {name: "Next.js", level: 95},
        {name: "React", level: 95},
        {name: "HTML/CSS", level: 95},
        {name: "Linux", level: 95},
        {name: "Django", level: 95},
        {name: "FastAPI", level: 95},
        {name: "SQL", level: 95},
        {name: "Git", level: 95},
        {name: "JavaScript", level: 95},
        {name: "OpenCV", level: 95},
        {name: "Vercel", level: 95},
        {name: "VSCode", level: 95},
    ];
  
    return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill,key) => (

        <div key={key} className="bg-card p-6 rounded-full shadow-xs card-hover opacity-0" style={{animation: `fade-in 0.6s ease-out forwards`, animationDelay: `${key * 0.1}s`}}>
            <div className="text-left mb-4 ">
                <h3 className="font-semibold text-sm">{skill.name}</h3>
            </div>

            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skill.level + "%", animation: "grow 1.5s ease-out forwards"}}/>
            </div>

            {/* <div className="text-right mt-1 ">
                <span className="text-sx text-muted-foreground">{skill.level}%</span>
            </div> */}

        </div>

      ))}
    </div>
  )
}

export default Skills
