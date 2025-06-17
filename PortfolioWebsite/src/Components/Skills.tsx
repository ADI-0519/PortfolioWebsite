import {
  FileCode,
} from "lucide-react";

import {
  SiPython,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiLinux,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiGit,
  SiJavascript,
  SiOpencv,
  SiVercel,
} from "react-icons/si";

import { DiJava, DiVisualstudio } from "react-icons/di";



function Skills() {
  const skills = [
    { name: "Python", level: 95, icon: <SiPython className="w-5 h-5 text-yellow-500" /> },
    { name: "Java", level: 95, icon: <DiJava className="w-5 h-5 text-red-600" /> },
    { name: "TypeScript", level: 95, icon: <SiTypescript className="w-5 h-5 text-blue-600" /> },
    { name: "Next.js", level: 95, icon: <SiNextdotjs className="w-5 h-5 text-black dark:text-white" /> },
    { name: "React", level: 95, icon: <SiReact className="w-5 h-5 text-cyan-500" /> },
    { name: "HTML/CSS", level: 95, icon: <FileCode className="w-5 h-5 text-orange-500" /> },
    { name: "Linux", level: 95, icon: <SiLinux className="w-5 h-5 text-gray-600" /> },
    { name: "Django", level: 95, icon: <SiDjango className="w-5 h-5 text-green-700" /> },
    { name: "FastAPI", level: 95, icon: <SiFastapi className="w-5 h-5 text-green-500" /> },
    { name: "SQL", level: 95, icon: <SiPostgresql className="w-5 h-5 text-indigo-500" /> },
    { name: "Git", level: 95, icon: <SiGit className="w-5 h-5 text-orange-600" /> },
    { name: "JavaScript", level: 95, icon: <SiJavascript className="w-5 h-5 text-yellow-400" /> },
    { name: "OpenCV", level: 95, icon: <SiOpencv className="w-5 h-5 text-purple-600" /> },
    { name: "Vercel", level: 95, icon: <SiVercel className="w-5 h-5 text-black dark:text-white" /> },
    { name: "VSCode", level: 95, icon: <DiVisualstudio className="w-5 h-5 text-blue-500" /> },
  ];

    return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] container max-w-5xl gap-6">
      {skills.map((skill, key) => (
        <div
          key={key}
          className="bg-card p-4 rounded-full shadow-sm card-hover opacity-0"
          style={{
            animation: `fade-in 0.6s ease-out forwards`,
            animationDelay: `${key * 0.1}s`,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            {skill.icon}
            <h3 className="font-medium text-sm">{skill.name}</h3>
          </div>
          <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
              style={{
                width: skill.level + "%",
                animation: "grow 1.5s ease-out forwards",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );


}

export default Skills
