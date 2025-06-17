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
    <div className="container card-hover gradient-border bg-blend-overlay rounded-2xl shadow-xl h-150 p-10 outline-4 opacity-0 animate-fade-in-delay-1">
      <div className="grid grid-rows-1 h-full grid-cols-[1fr_2fr]">
        
       
        <div className="w-full items-center justify-center flex flex-col gap-15 drop-shadow-2xl">
          <div className="w-64 h-64 rounded-full overflow-hidden">
            <img src={image} alt="Aditya" />
          </div>

          <div className="flex flex-row gap-10 text-foreground/80 transition-colors duration-100 animate-bounce ">
              
              <div className="cosmic-button"><a href="/CV_Aditya_Ranjan.pdf" target="_blank" rel="noopener noreferrer">Resume</a></div>
              <div className="hover:text-primary cursor-pointer"><a href="https://www.github.com/ADI-0519" target="_blank" rel="noopener noreferrer"><FaGithub size={30}/></a></div>
              <div className="hover:text-primary cursor-pointer"><a href="https://www.linkedin.com/in/aditya-ranjan19" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30}/></a></div>
            
          </div>
          
        </div>

        
        <div className="w-full flex flex-col justify-center drop-shadow-2xl gap-5 px-6">
          
          
          <div className="text-xl font-semibold text-muted-foreground text-center">
            Hi, I'm Aditya and I am particularly fascinated by the advancements in AI, ML, data science and exploring how we can make a positive impact through innovative solutions. Beyond code, I enjoy playing the guitar, challenging my friends to a game of chess, and nurturing a small vegetable garden in my free time. I am always open to learning, be it new technologies, creative pursuits, or everyday skills.
          </div>
         
          <div className="grid grid-cols-2 gap-5 mt-10">
            <InfoItem icon={<User className="h-6 w-6 text-primary" />} text="Aditya Ranjan" />
            <InfoItem icon={<Phone className="h-6 w-6 text-primary" />} text="07308466396" />
            <InfoItem icon={<Mail className="h-6 w-6 text-primary" />} text="adiranjan2019@gmail.com" />
            <InfoItem icon={<Home className="h-6 w-6 text-primary" />} text="London, UK" />
            <InfoItem icon={<GraduationCap className="h-6 w-6 text-primary" />} text="BSc (Hons) in AI at King's College London" />
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
      <span className="text-foreground text-glow text-xl text-left">{text}</span>
    </div>
  );
}

export default PersonalInfo;
