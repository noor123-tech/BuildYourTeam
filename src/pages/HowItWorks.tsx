import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const HowItWorksPage = () => {
  const steps = [
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Tell Us Your Need",
      description: "Fill out a short form about the task or role you need. We'll understand your requirements in minutes and start sourcing immediately.",
      details: [
        "Describe your project or ongoing needs",
        "Specify required skills and experience level",
        "Set your budget and timeline expectations",
        "Choose your preferred communication style"
      ],
      number: "01"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "We Match & Onboard",
      description: "We assign the best-fit virtual team member and handle all onboarding. No management needed from you.",
      details: [
        "We screen and interview candidates for you",
        "Match based on skills, timezone, and culture fit",
        "Handle all contracts and legal documentation",
        "Provide comprehensive onboarding and training"
      ],
      number: "02"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "You Scale Smoothly",
      description: "Your new team member integrates seamlessly like an in-house employee. Focus on growth, not hiring.",
      details: [
        "Dedicated team member works in your timezone",
        "Regular check-ins and performance monitoring",
        "Easy scaling up or down based on needs",
        "Ongoing support from your account manager"
      ],
      number: "03"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar/>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            How It <span className="text-primary-foreground/90">Works</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Get your perfect team member in just 3 simple steps. No complex hiring process, no management overhead.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <div className="text-primary">{step.icon}</div>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-foreground">
                    {step.title}
                  </h2>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-card rounded-3xl p-12 shadow-elegant">
                    <div className="text-center">
                      <div className="text-primary mb-6">{step.icon}</div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground">Step {step.number} of our proven process</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who have found their perfect team members through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="premium" size="xl">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;