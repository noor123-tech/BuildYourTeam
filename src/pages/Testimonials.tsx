import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO, TechFlow SaaS",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=150&h=150&fit=crop&crop=face",
      content: "We outsourced our tech support through this platform and it felt like hiring an in-house team. The onboarding was seamless and our customers love the support quality. Our response time improved by 80% and customer satisfaction scores are at an all-time high.",
      rating: 5,
      company: "TechFlow SaaS",
      industry: "Technology",
      teamSize: "3 team members",
      results: "80% faster response time"
    },
    {
      name: "Marcus Rodriguez",
      title: "Founder, GrowthLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Found our perfect digital marketer in less than 24 hours. They've increased our leads by 300% in just 3 months. Best investment we've made for our business. The ROI has been incredible and the quality of work exceeds our expectations.",
      rating: 5,
      company: "GrowthLab",
      industry: "Marketing Agency",
      teamSize: "2 team members",
      results: "300% increase in leads"
    },
    {
      name: "Emily Watson",
      title: "Owner, E-commerce Plus",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The account manager approach is what sets them apart. We have a dedicated point of contact who ensures everything runs smoothly. Our virtual team feels like they've been with us for years. Highly recommended!",
      rating: 5,
      company: "E-commerce Plus",
      industry: "E-commerce",
      teamSize: "4 team members",
      results: "50% cost reduction"
    },
    {
      name: "David Kim",
      title: "CTO, StartupFlow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "We needed specialized React developers urgently. Within 48 hours, we had two senior developers who integrated seamlessly with our team. They delivered our product launch on time and within budget.",
      rating: 5,
      company: "StartupFlow",
      industry: "Software Development",
      teamSize: "2 team members",
      results: "On-time product launch"
    },
    {
      name: "Lisa Thompson",
      title: "Marketing Director, RetailCorp",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      content: "Our social media engagement has tripled since working with our virtual marketing team. They understand our brand voice perfectly and create content that resonates with our audience. Amazing results!",
      rating: 5,
      company: "RetailCorp",
      industry: "Retail",
      teamSize: "3 team members",
      results: "3x social engagement"
    },
    {
      name: "James Wilson",
      title: "CEO, FinanceFirst",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: "The quality of financial analysts we got through this platform is exceptional. They've helped us optimize our processes and save over $100k annually. Professional, reliable, and results-driven.",
      rating: 5,
      company: "FinanceFirst",
      industry: "Financial Services",
      teamSize: "2 team members",
      results: "$100k annual savings"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, number: "98%", label: "Success Rate" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "24h", label: "Avg. Match Time" },
    { icon: <Star className="w-8 h-8" />, number: "4.9/5", label: "Client Rating" }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar/>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            What Our <span className="text-primary-foreground/90">Clients Say</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Don't just take our word for it. Here's what business owners say about working with our virtual team members.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                {/* Quote Icon */}
                <div className="text-primary/20 mb-6">
                  <Quote className="w-10 h-10" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>
                
                {/* Results */}
                <div className="bg-primary/10 rounded-lg p-4 mb-6">
                  <div className="text-sm font-semibold text-primary mb-1">Key Result:</div>
                  <div className="text-lg font-bold text-foreground">{testimonial.results}</div>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </div>
                    <div className="text-xs text-primary">
                      {testimonial.company} • {testimonial.industry}
                    </div>
                  </div>
                </div>
                
                {/* Team Info */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold">Team Size:</span> {testimonial.teamSize}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Video Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our clients about their success stories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-card text-center">
              <div className="bg-gradient-primary rounded-2xl p-12 mb-6 text-primary-foreground">
                <div className="text-6xl mb-4">🎥</div>
                <div className="text-xl font-bold">Coming Soon</div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Client Success Stories</h3>
              <p className="text-muted-foreground">Watch in-depth interviews with our successful clients</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-card text-center">
              <div className="bg-gradient-primary rounded-2xl p-12 mb-6 text-primary-foreground">
                <div className="text-6xl mb-4">📊</div>
                <div className="text-xl font-bold">Case Studies</div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Detailed Results</h3>
              <p className="text-muted-foreground">Deep dive into specific client achievements and ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-card rounded-full px-8 py-4 shadow-card mb-12">
            <div className="flex -space-x-2">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                alt="Client" 
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b977?w=40&h=40&fit=crop&crop=face" 
                alt="Client" 
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                alt="Client" 
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <div className="text-left">
              <div className="font-bold text-foreground">500+ Happy Clients</div>
              <div className="text-sm text-muted-foreground">Join the growing community</div>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your journey today and become our next success story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Get Started Now
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

export default TestimonialsPage;