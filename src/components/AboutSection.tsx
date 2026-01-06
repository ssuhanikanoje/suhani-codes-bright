import { Mail, Phone, Linkedin, Github, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  const contactDetails = [
    { label: "Name", value: "Suhani Sudesh Kanoje" },
    { label: "Email", value: "ssuhanikanoje@gmail.com" },
    { label: "Phone", value: "+91 8669054947" },
    { label: "Location", value: "Maharashtra, India" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Get to know <span className="gradient-text">who I am</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="relative lg:w-2/5">
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-border">
                <img
                  src={profilePhoto}
                  alt="Suhani Sudesh Kanoje"
                  className="w-full aspect-square object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">B.Tech</div>
                <div className="text-sm opacity-80">Final Year</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 lg:w-3/5">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Passionate Java Developer building{" "}
              <span className="gradient-text">innovative solutions</span>
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As a final year B.Tech student in Robotics & Artificial Intelligence, I have developed a strong foundation in Java programming and full-stack development. My journey in software development has been driven by a passion for creating logical, efficient solutions.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I thrive on continuous learning and have hands-on experience with technologies like JSP, Servlets, MySQL, and modern web development. My goal is to build impactful applications that solve real-world problems while continuously growing as a software developer.
            </p>

            {/* Contact Details Card */}
            <div className="card-gradient rounded-2xl p-6 border border-border mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-primary text-sm font-medium">
                      {detail.label}
                    </span>
                    <span className="text-foreground">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button className="btn-primary-gradient text-primary-foreground font-semibold px-6 hover:opacity-90 transition-all hover:scale-105">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 transition-all"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <div className="flex items-center gap-3 ml-auto">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
