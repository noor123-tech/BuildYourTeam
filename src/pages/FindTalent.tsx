import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Star, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const FindTalent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "All Categories",
    "Digital Marketing",
    "Web Development", 
    "Customer Support",
    "Content Creation",
    "Data Analysis",
    "Virtual Assistant",
    "Sales & CRM",
    "Social Media"
  ];

  const talents = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Digital Marketing Specialist",
      rating: 4.9,
      reviews: 127,
      location: "United States",
      hourlyRate: "$25-35",
      skills: ["SEO", "Google Ads", "Content Marketing", "Analytics"],
      availability: "Available now",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Full Stack Developer",
      rating: 4.8,
      reviews: 89,
      location: "Canada",
      hourlyRate: "$40-60",
      skills: ["React", "Node.js", "Python", "PostgreSQL"],
      availability: "Available in 1 week",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      title: "Customer Support Manager",
      rating: 5.0,
      reviews: 156,
      location: "Mexico",
      hourlyRate: "$18-25",
      skills: ["Zendesk", "Live Chat", "CRM", "Multi-lingual"],
      availability: "Available now",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "David Kim",
      title: "Content Creator & Copywriter",
      rating: 4.7,
      reviews: 94,
      location: "South Korea",
      hourlyRate: "$30-45",
      skills: ["Copywriting", "Blog Posts", "Email Marketing", "Social Media"],
      availability: "Available in 3 days",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Find Your Perfect Team Member
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Browse our curated selection of pre-vetted professionals ready to join your team.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by skill, role, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white/90 backdrop-blur-sm border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={selectedCategory === category.toLowerCase().replace(' ', '-') ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedCategory(category.toLowerCase().replace(' ', '-'))}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {talents.map((talent) => (
              <div key={talent.id} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {talent.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-yellow-500 mb-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium text-foreground">{talent.rating}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">({talent.reviews} reviews)</div>
                  </div>
                </div>

                <h3 className="font-bold text-foreground text-lg mb-1">{talent.name}</h3>
                <p className="text-muted-foreground mb-3">{talent.title}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{talent.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{talent.availability}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-lg font-bold text-primary mb-2">{talent.hourlyRate}/hour</div>
                  <div className="flex flex-wrap gap-1">
                    {talent.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {talent.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{talent.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <Button className="w-full">
                  View Profile
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Talent
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us find the perfect match for your specific needs. We'll connect you with the right talent within 24 hours.
          </p>
          <Button size="xl" className="group">
            Request Custom Match
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FindTalent;