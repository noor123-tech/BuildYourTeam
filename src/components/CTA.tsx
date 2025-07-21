import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Get Help Without Hiring?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Stop struggling with recruitment, training, and management. Get your perfect virtual team member in 24 hours and start scaling your business today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild variant="secondary" size="xl" className="group">
              <Link to="/get-started">
                Request Your First Assistant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-primary-foreground/20 text-primary-foreground bg-primary-foreground text-primary">
              <Link to="/contact">
                <MessageCircle className="w-5 h-5" />
                Schedule Free Consultation
              </Link>
            </Button>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;