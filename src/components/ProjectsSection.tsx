import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Arduino-Based Home Automation System",
    description:
      "Developed a smart home automation system using Arduino Uno microcontroller with sensors for controlling home appliances remotely.",
    tags: ["Arduino", "IoT", "Sensors", "Microcontrollers"],
    highlights: [
      "Industry 4.0 workshop project",
      "Circuit design and implementation",
      "Real-time sensor integration",
    ],
  },
  {
    title: "Hostel Management System",
    description:
      "Comprehensive hostel management application handling student records, room allocation, and administrative tasks with database integration.",
    tags: ["HTML", "CSS", "JavaScript", "JSP", "MySQL", "PHP"],
    highlights: [
      "Mega project implementation",
      "Database design and management",
      "User authentication and roles",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my hands-on projects showcasing practical implementation of programming concepts and problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary to-background flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-4xl font-display font-bold text-primary">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button
                    size="sm"
                    className="btn-primary-gradient text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
