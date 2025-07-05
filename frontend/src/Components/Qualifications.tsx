import { GraduationCap, BookOpen } from "lucide-react";

function Qualifications() {
  const education = [
    {
      title: "King's College London",
      subtitle: "Bachelor of Science in Artificial Intelligence",
      date: "2024 - 2027",
    },
    {
      title: "Glyn School",
      subtitle: "A-levels in Maths, Further Maths, Computer Science, Physics",
      date: "2022 - 2024",
    },
    {
      title: "Glyn School",
      subtitle: "10 GCSEs at Grade 9.",
      date: "2017 - 2022",
    },
  ];

  const courses = [
    {
      title: "CS50: Computer Science",
      subtitle: "Harvard University",
      date: "June 2023",
    },
    {
      title: "PCEP - Python Programmer",
      subtitle: "Python Institute",
      date: "April 2021",
    },
  ];

  return (
    <div className="container gradient-border rounded-2xl shadow-xl p-6 sm:p-10 md:p-20 bg-blend-overlay opacity-0 animate-fade-in-delay-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Education</h2>
          </div>
          <ul className="space-y-8 relative">
            {education.map((item, i) => (
              <li key={i} className="pl-6 relative">
                <span className="absolute left-0 top-1.5 h-3 w-3 bg-primary rounded-full" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg">{item.subtitle}</p>
                <span className="text-muted-foreground text-base sm:text-lg">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Courses</h2>
          </div>
          <ul className="space-y-8 relative">
            {courses.map((item, i) => (
              <li key={i} className="pl-6 relative">
                <span className="absolute left-0 top-1.5 h-3 w-3 bg-primary rounded-full" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg">{item.subtitle}</p>
                <span className="text-muted-foreground text-base sm:text-lg">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;
