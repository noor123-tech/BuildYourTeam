import { CheckCircle, Users, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Tell Us Your Need",
      description: "Fill out a short form about the task or role you need. We'll understand your requirements in minutes.",
      number: "01"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "We Match & Onboard",
      description: "We assign the best-fit virtual team member and handle all onboarding. No management needed from you.",
      number: "02"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "You Scale Smoothly",
      description: "Your new team member integrates seamlessly like an in-house employee. Focus on growth, not hiring.",
      number: "03"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card" id="how-it-works">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-transparent bg-clip-text bg-gradient-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your perfect team member in just 3 simple steps. No complex hiring process, no management overhead.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-12 lg:w-24 h-0.5 bg-gradient-primary z-10 transform translate-x-4"></div>
              )}
              
              <div className="relative bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group-hover:scale-105">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold shadow-glow">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;