import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 799,
      description: "Perfect for small businesses getting started with virtual team members",
      features: [
        "1 dedicated team member",
        "20 hours per month",
        "Email & chat support",
        "Basic reporting",
        "30-day money back guarantee"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: 1499,
      description: "Ideal for growing businesses that need consistent support",
      features: [
        "1 dedicated team member",
        "40 hours per month",
        "Priority support",
        "Advanced reporting",
        "30-day money back guarantee",
        "Account manager included"
      ],
      popular: true
    },
    {
      name: "Team",
      price: null,
      description: "Custom packages for enterprises and larger teams",
      features: [
        "Multiple team members",
        "Unlimited hours",
        "24/7 priority support",
        "Custom integrations",
        "Dedicated success manager",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No hidden fees, no surprise costs. Choose the plan that fits your business needs and scale as you grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-card rounded-3xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up ${
                plan.popular ? 'ring-2 ring-primary scale-105' : 'hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
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
              <Button 
                asChild
                variant={plan.popular ? "hero" : "premium"} 
                size="lg" 
                className="w-full"
              >
                <Link to={plan.price ? "/get-started" : "/contact"}>
                  {plan.price ? "Get Started" : "Contact Sales"}
                </Link>
              </Button>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            All plans include a 30-day money-back guarantee. No setup fees.
          </p>
          <Button asChild variant="ghost" className="text-primary hover:text-primary-foreground">
            <Link to="/contact">
              Questions? Schedule a free consultation →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;