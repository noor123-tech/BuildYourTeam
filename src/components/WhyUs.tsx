import { Shield, Clock, Users, Award, HeartHandshake, Zap } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const WhyUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Vetted Professionals",
      description: "Every team member goes through rigorous screening and skill assessment before joining your project."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Seamless Onboarding",
      description: "We handle all the setup, training, and integration so your new team member is productive from day one."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Real Humans, Not Bots",
      description: "Work with dedicated professionals who understand your business and communicate like in-house employees."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Transparent Pricing",
      description: "No hidden fees, no surprise costs. Get premium talent at competitive rates with clear monthly pricing."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Dedicated Account Manager",
      description: "Your personal success manager ensures everything runs smoothly and addresses any concerns quickly."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Scalability",
      description: "Scale your team up or down based on demand. Add new skills or capacity without long-term commitments."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle" id="why-us">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another freelancer platform. We're your strategic partner in building a world-class virtual team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-elegant">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <AnimatedCounter 
                end={500} 
                suffix="+" 
                className="text-4xl font-bold text-primary"
              />
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <AnimatedCounter 
                end={98} 
                suffix="%" 
                className="text-4xl font-bold text-primary"
              />
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="space-y-2">
              <AnimatedCounter 
                end={24} 
                suffix="h" 
                className="text-4xl font-bold text-primary"
              />
              <div className="text-muted-foreground">Avg. Match Time</div>
            </div>
            <div className="space-y-2">
              <AnimatedCounter 
                end={50} 
                suffix="+" 
                className="text-4xl font-bold text-primary"
              />
              <div className="text-muted-foreground">Skill Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;