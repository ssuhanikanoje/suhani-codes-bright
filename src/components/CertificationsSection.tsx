import { Award, ExternalLink, CheckCircle } from "lucide-react";

const certificationsData = [
  {
    title: "Arduino & Industry 4.0 Certification",
    issuer: "Industrial Workshop",
    description:
      "Completed hands-on training in Arduino programming and Industry 4.0 concepts including IoT integration.",
  },
  {
    title: "Python & AI Internship",
    issuer: "MS-IT Services",
    description:
      "Gained practical experience in Python programming and artificial intelligence fundamentals.",
  },
  {
    title: "AI & ML Course",
    issuer: "AICTE",
    description:
      "Completed comprehensive course covering artificial intelligence and machine learning concepts.",
  },
  {
    title: "Industrial Training Certification",
    issuer: "V-soft",
    description:
      "Acquired industry-relevant skills through professional training program.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-primary text-sm font-medium mb-4">
            Certifications
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verified credentials and certifications that validate my technical skills and commitment to continuous learning.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.title}
              className="group card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Verified Badge */}
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
