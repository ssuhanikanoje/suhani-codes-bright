import { GraduationCap, Calendar, Building } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Robotics & Artificial Intelligence",
    institution: "Priyadarshini College of Engineering",
    period: "2023 – 2026",
    status: "Final Year",
    description:
      "Pursuing advanced studies in robotics and AI with focus on software development and programming fundamentals.",
  },
  {
    degree: "Diploma in Computer Technology",
    institution: "Government Polytechnic",
    period: "Completed",
    status: "Completed",
    description:
      "Built strong foundation in computer science, programming, and software development concepts.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-primary text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            My Educational <span className="gradient-text">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-background glow-border z-10" />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
                    {/* Status Badge */}
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-4">
                      {edu.status}
                    </span>

                    {/* Degree */}
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building size={16} className="text-primary" />
                      <span>{edu.institution}</span>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar size={16} className="text-primary" />
                      <span>{edu.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
