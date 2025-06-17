import { Briefcase } from "lucide-react";

function Experience() {
  const timelineElements = [
    {
      id: 1,
      title: "Spring Insight | Nomura",
      location: "London, UK",
      description:
        "• Presented trade recommendations by analysing commodity price changes, SWF allocations and macroeconomic data.\n• Outperformed peers by presenting an M&A Case Study under CMA oversight.",
      date: "April 2025",
    },
    {
      id: 2,
      title: "SWE Job Simulation | JP Morgan",
      location: "Remote",
      description:
        "• Set up a local dev environment to correctly process and display a live data feed of stock prices, enabling effective comparisons of under/over-valued stocks for traders.\n• Implemented Perspective to view data with interactive real-time charts, and integrated critical events & price threshold alerts.",
      date: "Sep 2024 - Oct 2024",
    },
    {
      id: 3,
      title: "Data Work Experience | GSK",
      location: "London, UK",
      description:
        "• Learnt, sorted, and filtered 5000+ patients' data via Microsoft Excel to improve data accuracy and consistency.\n• Produced informed predictions to select patients for clinical trials based on key characteristics for each hospital. \n •Automated Python scripts increased efficiency by 25%.",
      date: "Apr 2023 - May 2023",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Experience</h2>

      <div className="relative container mx-auto">
        
        <div className="absolute left-1/2 transform -translate-x-1 bg-primary h-full w-1" />

        <div className="space-y-20">
          {timelineElements.map((exp, idx) => {
            const isLeft = idx % 2 === 0;

            return (

              <div key={exp.id} className={`relative flex flex-col md:flex-row items-center  ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
                
                <div className={`z-10 bg-primary text-white rounded-full p-3 shadow-md absolute left-1/2 transform -translate-x-1/2`}>
                  <Briefcase className="w-5 h-5" />
                </div>
                
                <div className={`border card-hover gradient-border rounded-2xl shadow-lg p-6 mt-6 outline-4 md:mt-0 md:w-[40%] opacity-0 animate-fade-in-delay-1 ${isLeft ? "md:ml-0" : "md:mr-0"}`}>

                  <p className="text-sm text-muted-foreground">{exp.date}</p>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-md text-muted-foreground">{exp.location}</p>
                  <p className="mt-2 whitespace-pre-line text-foreground">{exp.description}</p>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
