import { Phone, Mail, User, Home, GraduationCap } from "lucide-react";
import image from "../assets/image.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import  type { ReactNode } from "react";


interface infoItemProps{
  icon: ReactNode;
  text: string;
}

function PersonalInfo() {
  return (
    <div className="container card-hover gradient-border bg-blend-overlay rounded-2xl shadow-xl p-20 outline-4 opacity-0 animate-fade-in-delay-1 flex overflow-wrap">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:items-center">
        
       
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
            <img src={image} alt="Aditya" className="object-cover w-full h-full" />
          </div>


          <div className="flex gap-6 items-center text-foreground/80 transition-colors duration-100">
            <a href="/CV_Aditya_Ranjan.pdf" target="_blank" rel="noopener noreferrer" className="cosmic-button">Resume</a>
            <a href="https://www.github.com/ADI-0519" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/aditya-ranjan19" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        
        <div className="flex flex-col justify-center gap-6 px-2 md:px-6">
          <p className="text-base md:text-xl font-semibold text-muted-foreground text-center md:text-left leading-relaxed">
            Hi, I'm Aditya, an Artificial Intelligence student at King's College London with a strong interest in machine learning, software engineering, and building systems that make a real-world impact. I'm passionate about using intelligent technologies to improve accessibility, automate decision-making,  or creating intelligent tools that adapt to complex environments. <br></br>
Outside of tech, I enjoy playing the guitar, playing chess, and tending to my vegetable garden. I'm always curious and open to learning, whether it's a new framework, a creative side project, or something entirely different.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <InfoItem icon={<User className="h-5 w-5 text-primary" />} text="Aditya Ranjan" />
            <InfoItem icon={<Phone className="h-5 w-5 text-primary" />} text="07308466396" />
            <InfoItem icon={<Mail className="h-5 w-5 text-primary" />} text="adiranjan2019 @gmail.com" />
            <InfoItem icon={<Home className="h-5 w-5 text-primary" />} text="London, UK" />
            <InfoItem icon={<GraduationCap className="h-5 w-5 text-primary" />} text="BSc (Hons) in AI at King's College London" />
          </div>
        </div>
      </div>
    </div>
  );
}


function InfoItem({ icon, text }: infoItemProps) {
  return (
    <div className="flex flex-row gap-4 items-center">
      <div className="p-3 rounded-full bg-primary/10 w-fit">
        {icon}
      </div>
      <span className="text-foreground text-xl text-glow text-left md:text-xl sm:text-sm">{text}</span>
    </div>
  );
}

export default PersonalInfo;
