import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative">
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/50 to-transparent blur-xl opacity-60 animate-glow-pulse" />
            
            {/* Decorative Arc */}
            <div className="absolute -inset-4 rounded-full border-4 border-primary/30 border-t-primary border-r-primary animate-spin" style={{ animationDuration: "8s" }} />
            
            {/* Profile Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary glow-border">
              <img
                src={profilePhoto}
                alt="Suhani Sudesh Kanoje"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              Java Developer
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="inline-block px-4 py-2 bg-secondary rounded-full text-primary text-sm font-medium mb-6 animate-fade-in-up">
              👋 Welcome to my portfolio
            </div>

            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">Suhani Sudesh Kanoje</span>
            </h1>

            <h2
              className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Full Stack Java Developer | Software Developer
            </h2>

            <p
              className="text-muted-foreground text-lg mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              I am passionate about Java programming and enjoy building logical
              solutions. I am continuously learning new concepts to grow as a
              software developer.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                onClick={() => handleScroll("#contact")}
                size="lg"
                className="btn-primary-gradient text-primary-foreground font-semibold px-8 hover:opacity-90 transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 transition-all hover:scale-105"
                onClick={() => window.open("https://drive.google.com/uc?export=download&id=1RCr-1q6qg1at2PAqqS86ePQaQ1QcJ-8P", "_blank")}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => handleScroll("#about")}
            className="p-2 rounded-full border border-muted-foreground/30 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
