import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  ArrowRight 
} from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    skillNeeded: '',
    budget: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will require Supabase integration for actual functionality
    alert("To enable this contact form to actually send messages, you'll need to connect Supabase integration first. Click the green Supabase button in the top right to set this up!");
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@virtualteampro.com",
      description: "We'll respond within 4 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Schedule an in-person meeting"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      details: "Within 24 hours",
      description: "Usually much faster!"
    }
  ];

  const reasons = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Free Consultation",
      description: "Get expert advice on building your virtual team at no cost"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Custom Matching",
      description: "We'll find the perfect talent based on your specific requirements"
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Quick Response",
      description: "Hear back from us within hours, not days"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar/>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Let's Build Your <span className="text-primary-foreground/90">Dream Team</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Ready to find your perfect virtual team member? Get in touch and we'll match you with the ideal talent in 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-card rounded-3xl p-8 shadow-elegant">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Tell Us What You Need
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out this form and we'll get back to you with a custom solution within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What Skills Do You Need? *
                  </label>
                  <Input
                    name="skillNeeded"
                    value={formData.skillNeeded}
                    onChange={handleInputChange}
                    placeholder="e.g., Digital Marketing, Web Development, Customer Support"
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select budget range</option>
                      <option value="500-1000">$500-$1,000/month</option>
                      <option value="1000-2000">$1,000-$2,000/month</option>
                      <option value="2000-5000">$2,000-$5,000/month</option>
                      <option value="5000+">$5,000+/month</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      When Do You Need Them?
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (within 48 hours)</option>
                      <option value="week">Within a week</option>
                      <option value="month">Within a month</option>
                      <option value="flexible">I'm flexible</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your project, goals, and what you're looking for in a team member..."
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  Send My Request
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Prefer to reach out directly? Here are all the ways you can contact us.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gradient-card rounded-2xl shadow-card">
                    <div className="text-primary">{info.icon}</div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                      <div className="text-lg font-semibold text-primary mb-1">{info.details}</div>
                      <div className="text-sm text-muted-foreground">{info.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Why Contact Us */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>
                <div className="space-y-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-primary-foreground/80">{reason.icon}</div>
                      <div>
                        <h4 className="font-bold mb-1">{reason.title}</h4>
                        <p className="text-primary-foreground/90 text-sm">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Questions Before You Contact Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some quick answers to common questions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="text-lg font-bold text-foreground mb-3">How quickly can you find someone?</h3>
              <p className="text-muted-foreground">Most matches are made within 24-48 hours. For urgent needs, we can often find someone the same day.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="text-lg font-bold text-foreground mb-3">Do you work with all industries?</h3>
              <p className="text-muted-foreground">Yes! We have talent across every industry and niche. If the skill exists, we can find it.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="text-lg font-bold text-foreground mb-3">What if I'm not happy with the match?</h3>
              <p className="text-muted-foreground">We offer a 30-day guarantee. If you're not satisfied, we'll find a replacement or provide a full refund.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="text-lg font-bold text-foreground mb-3">Is there a minimum commitment?</h3>
              <p className="text-muted-foreground">No long-term contracts required. You can scale up, down, or cancel anytime with 30 days notice.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;