import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle min-h-screen flex items-center pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Your Dream Team, Delivered</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              We Find the Perfect{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Human Talent
              </span>{" "}
              So You Don't Have To
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Whatever your business needs — our vetted professionals work like your in-house team across any industry or niche. Scale your business without the hiring hassle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/get-started">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <AnimatedCounter 
                  end={500} 
                  suffix="+" 
                  className="text-2xl font-bold text-primary"
                />
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <AnimatedCounter 
                  end={98} 
                  suffix="%" 
                  className="text-2xl font-bold text-primary"
                />
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src="/lovable-uploads/3d6fa928-db09-446e-a1c6-efcdde782bb2.png" 
                alt="Virtual team professionals working together"
                className="w-full rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-card p-4 animate-bounce">
              <div className="text-sm font-medium text-primary">Any Skill</div>
              <div className="text-xs text-muted-foreground">Available Now</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-card p-4 animate-bounce delay-75">
              <div className="text-sm font-medium text-primary">Any Industry</div>
              <div className="text-xs text-muted-foreground">Ready to Start</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;