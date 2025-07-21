import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Code, 
  Headphones, 
  ShoppingCart, 
  UserCheck, 
  Settings 
} from "lucide-react";

const Services = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing & Growth",
      description: "Content creators, social media experts, SEO specialists, and growth hackers to expand your reach.",
      features: ["Content Creation", "Social Media", "SEO & Growth", "Brand Strategy"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical & Development",
      description: "Developers, designers, and technical specialists to build and maintain your digital presence.",
      features: ["Web & App Dev", "UI/UX Design", "Tech Support", "System Admin"]
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Operations & Support",
      description: "Administrative professionals and support specialists to handle your day-to-day operations.",
      features: ["Customer Service", "Admin Tasks", "Data Management", "Virtual Assistance"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Sales & Business",
      description: "Sales professionals, business analysts, and strategic thinkers to grow your revenue.",
      features: ["Sales & Lead Gen", "Business Analysis", "Project Management", "Strategy Planning"]
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Creative & Content",
      description: "Writers, designers, video editors, and creative professionals for all your content needs.",
      features: ["Content Writing", "Graphic Design", "Video Editing", "Creative Direction"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Any Other Skill",
      description: "Whatever you need, we'll find it. Our network covers every industry and skill set imaginable.",
      features: ["Custom Expertise", "Niche Specialists", "Industry Experts", "Unique Skills"]
    }
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Whatever You <span className="text-transparent bg-clip-text bg-gradient-primary">Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From common business roles to highly specialized experts — if the skill exists, we can find the right person for your team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-8">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button asChild variant="premium" className="w-full group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <Link to="/get-started">Find Talent</Link>
              </Button>
            </div>
          ))}
        </div>
        
        {/* Call to Action for Other Skills */}
        <div className="mt-16 bg-gradient-primary rounded-3xl p-12 text-center text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">Don't See What You Need?</h3>
          <p className="text-xl mb-8 text-primary-foreground/90">
            No worries! We have access to professionals in every field imaginable. Just tell us what you're looking for.
          </p>
          <Button asChild variant="secondary" size="xl">
            <Link to="/get-started">Request Custom Talent</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;