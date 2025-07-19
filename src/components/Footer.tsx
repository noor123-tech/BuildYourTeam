import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">VirtualTeam Pro</h3>
              <p className="text-background/80">
                Your trusted partner for finding and managing world-class virtual team members.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="w-4 h-4" />
                <span>hello@virtualteampro.com</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-background/80">
              <li><Link to="/get-started" className="hover:text-background transition-colors">Digital Marketing</Link></li>
              <li><Link to="/get-started" className="hover:text-background transition-colors">Web Development</Link></li>
              <li><Link to="/get-started" className="hover:text-background transition-colors">Customer Support</Link></li>
              <li><Link to="/get-started" className="hover:text-background transition-colors">E-commerce</Link></li>
              <li><Link to="/get-started" className="hover:text-background transition-colors">Sales & CRM</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-background/80">
              <li><Link to="/why-us" className="hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-background transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-background transition-colors">Pricing</Link></li>
              <li><Link to="/testimonials" className="hover:text-background transition-colors">Success Stories</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-background/80 mb-4">
              Get the latest insights on virtual team management and business growth.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/80">
              © 2024 VirtualTeam Pro. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            
            {/* Legal Links */}
            <div className="flex gap-6 text-background/80 text-sm">
              <Link to="/privacy-policy" className="hover:text-background transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-background transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;