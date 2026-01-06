import { useEffect, useRef, useState } from "react";
import { Code, Database, Globe, Cpu, Server, Terminal, Zap, Blocks } from "lucide-react";

const skillsData = [
  { name: "Java Programming", percentage: 90, icon: Code },
  { name: "C++", percentage: 75, icon: Terminal },
  { name: "Full Stack Development", percentage: 80, icon: Blocks },
  { name: "HTML, CSS, JavaScript", percentage: 85, icon: Globe },
  { name: "JSP & Servlets", percentage: 78, icon: Server },
  { name: "MySQL & Database", percentage: 82, icon: Database },
  { name: "Python (Basics)", percentage: 60, icon: Zap },
  { name: "Arduino & IoT", percentage: 70, icon: Cpu },
];

const SkillCard = ({ skill, index, isVisible }: { skill: typeof skillsData[0]; index: number; isVisible: boolean }) => {
  const Icon = skill.icon;
  
  return (
    <div
      className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      {/* Skill Name */}
      <h3 className="font-display font-semibold text-lg mb-4">{skill.name}</h3>

      {/* Progress Bar */}
      <div className="relative">
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className={`h-full btn-primary-gradient rounded-full transition-all duration-1000 ease-out ${
              isVisible ? "" : "w-0"
            }`}
            style={{
              width: isVisible ? `${skill.percentage}%` : "0%",
              transitionDelay: `${index * 0.1}s`,
            }}
          />
        </div>
        <span className="absolute right-0 -top-6 text-sm font-semibold text-primary">
          {skill.percentage}%
        </span>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-primary text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My Work <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various programming languages and technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
