import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: 799,
      originalPrice: 999,
      description: "Perfect for small businesses getting started with virtual team members",
      features: [
        "1 dedicated team member",
        "20 hours per month",
        "Email & chat support",
        "Basic reporting dashboard",
        "30-day money back guarantee",
        "Standard onboarding process"
      ],
      popular: false,
      savings: "Save $200/month"
    },
    {
      name: "Growth",
      price: 1499,
      originalPrice: 1899,
      description: "Ideal for growing businesses that need consistent support",
      features: [
        "1 dedicated team member",
        "40 hours per month",
        "Priority support (4-hour response)",
        "Advanced reporting & analytics",
        "30-day money back guarantee",
        "Dedicated account manager",
        "Custom skill matching",
        "Performance optimization"
      ],
      popular: true,
      savings: "Save $400/month"
    },
    {
      name: "Team",
      price: null,
      description: "Custom packages for enterprises and larger teams",
      features: [
        "Multiple team members",
        "Unlimited hours available",
        "24/7 priority support",
        "Custom integrations & tools",
        "Dedicated success manager",
        "SLA guarantee (99.9% uptime)",
        "Advanced security & compliance",
        "Custom reporting & analytics"
      ],
      popular: false,
      savings: "Custom pricing"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect on your next billing cycle."
    },
    {
      question: "What if I'm not satisfied with my team member?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll find a replacement or provide a full refund."
    },
    {
      question: "How quickly can I get started?",
      answer: "Most clients are matched with their perfect team member within 24-48 hours of signing up."
    },
    {
      question: "Do you offer custom packages?",
      answer: "Absolutely! Our Team plan is fully customizable. Contact us to discuss your specific needs and get a custom quote."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar/>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Simple, Transparent <span className="text-primary-foreground/90">Pricing</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            No hidden fees, no surprise costs. Choose the plan that fits your business needs and scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-gradient-card rounded-3xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : 'hover:scale-105'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                {/* Savings Badge */}
                {plan.savings && plan.price && (
                  <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold">
                    {plan.savings}
                  </div>
                )}
                
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    {plan.price ? (
                      <div>
                        {plan.originalPrice && (
                          <div className="text-lg text-muted-foreground line-through mb-1">
                            ${plan.originalPrice}/month
                          </div>
                        )}
                        <div className="text-5xl font-bold text-foreground">
                          ${plan.price}
                        </div>
                        <div className="text-muted-foreground">per month</div>
                      </div>
                    ) : (
                      <div className="text-3xl font-bold text-foreground">
                        Custom Quote
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Link to="/contact">
                  <Button 
                    variant={plan.popular ? "hero" : "premium"} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.price ? "Get Started" : "Contact Sales"}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. Here are some of the most common questions about our pricing.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-4">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gradient-primary rounded-3xl p-12 text-primary-foreground">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              All plans include a 30-day money-back guarantee. No setup fees, no long-term contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="xl" className="group">
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="xl" className="border-primary-foreground/20 text-primary-foreground bg-primary-foreground text-primary">
                Schedule Consultation
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>30-Day Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PricingPage;