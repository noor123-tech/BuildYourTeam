import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO, TechFlow SaaS",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=150&h=150&fit=crop&crop=face",
      content: "We outsourced our tech support through this platform and it felt like hiring an in-house team. The onboarding was seamless and our customers love the support quality.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      title: "Founder, GrowthLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Found our perfect digital marketer in less than 24 hours. They've increased our leads by 300% in just 3 months. Best investment we've made for our business.",
      rating: 5
    },
    {
      name: "Emily Watson",
      title: "Owner, E-commerce Plus",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The account manager approach is what sets them apart. We have a dedicated point of contact who ensures everything runs smoothly. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-card" id="testimonials">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners say about working with our virtual team members.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Social Proof */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-card">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;