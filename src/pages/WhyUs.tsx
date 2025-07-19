import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Users, Award, HeartHandshake, Zap, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const WhyUsPage = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Vetted Professionals",
      description: "Every team member goes through rigorous screening and skill assessment before joining your project.",
      details: [
        "Multi-stage interview process",
        "Skills testing and portfolio review",
        "Background and reference checks",
        "Continuous performance monitoring"
      ]
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Seamless Onboarding",
      description: "We handle all the setup, training, and integration so your new team member is productive from day one.",
      details: [
        "Complete project briefing and setup",
        "Tool and system access configuration",
        "Team introduction and culture alignment",
        "First week performance optimization"
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Real Humans, Not Bots",
      description: "Work with dedicated professionals who understand your business and communicate like in-house employees.",
      details: [
        "Native-level communication skills",
        "Deep understanding of business context",
        "Proactive problem-solving approach",
        "Long-term partnership mindset"
      ]
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Transparent Pricing",
      description: "No hidden fees, no surprise costs. Get premium talent at competitive rates with clear monthly pricing.",
      details: [
        "All-inclusive monthly rates",
        "No setup or onboarding fees",
        "Flexible payment terms",
        "Money-back guarantee"
      ]
    },
    {
      icon: <HeartHandshake className="w-12 h-12" />,
      title: "Dedicated Account Manager",
      description: "Your personal success manager ensures everything runs smoothly and addresses any concerns quickly.",
      details: [
        "Weekly check-ins and updates",
        "Performance tracking and reporting",
        "Issue resolution within 24 hours",
        "Strategic growth planning"
      ]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Instant Scalability",
      description: "Scale your team up or down based on demand. Add new skills or capacity without long-term commitments.",
      details: [
        "Add team members within 48 hours",
        "Flexible hour adjustments",
        "No long-term contracts required",
        "Easy skill set expansion"
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", description: "Businesses trust us with their teams" },
    { number: "98%", label: "Success Rate", description: "Client satisfaction and retention" },
    { number: "24h", label: "Avg. Match Time", description: "From request to team member" },
    { number: "50+", label: "Skill Categories", description: "Every niche and industry covered" }
  ];

  const testimonials = [
    {
      quote: "The quality of talent and the seamless process made this the best business decision we've made this year.",
      author: "Sarah Johnson",
      role: "CEO, TechFlow",
      rating: 5
    },
    {
      quote: "Our virtual team member feels like they've been with us for years. The integration was flawless.",
      author: "Mike Rodriguez",
      role: "Founder, GrowthLab",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar/>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Why Choose <span className="text-primary-foreground/90">Us</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            We're not just another freelancer platform. We're your strategic partner in building a world-class virtual team.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                <div className="text-primary mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-elegant">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">
              Trusted by Businesses Worldwide
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-5xl font-bold text-primary">{stat.number}</div>
                  <div className="text-xl font-semibold text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-card rounded-2xl p-8 shadow-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join hundreds of businesses who have transformed their operations with our virtual team members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="xl" className="group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="xl" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WhyUsPage;