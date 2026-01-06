import { ArrowUpRight, Code, Server, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    title: "Full Stack Java Development",
    description:
      "Building complete web applications using Java, JSP, Servlets with modern frontend technologies and MySQL databases.",
    icon: Code,
  },
  {
    title: "Backend Development",
    description:
      "Developing robust server-side solutions, REST APIs, and database management systems using Java and related technologies.",
    icon: Server,
  },
  {
    title: "Academic & Student Projects",
    description:
      "Assisting fellow students with programming projects, debugging, and implementing software solutions for academic requirements.",
    icon: GraduationCap,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-primary text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional services I offer to help bring your ideas to life with clean, efficient code.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                {/* Card Content */}
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Arrow Button */}
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span className="group-hover:underline">Learn More</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="btn-primary-gradient text-primary-foreground font-semibold px-8 hover:opacity-90 transition-all hover:scale-105">
            See All Services
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
