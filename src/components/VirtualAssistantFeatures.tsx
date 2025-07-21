import { 
  Calendar, 
  Mail, 
  FileText, 
  ShoppingCart, 
  Phone, 
  Settings,
  Plane,
  CreditCard,
  Bot,
  Users
} from "lucide-react";

const VirtualAssistantFeatures = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Calendar Management",
      description: "Manage complex personal and team calendars, and coordinate times for team meetings.",
      hybrid: "AI scheduling + human coordination"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email and Response Management",
      description: "Let your assistant manage emails, conduct follow-ups, forward important and urgent emails.",
      hybrid: "AI filtering + human personalization"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Basic Research and Reports",
      description: "Gather data from different platforms and produce reports and insights as required.",
      hybrid: "AI data collection + human analysis"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Order Products and Supplies",
      description: "Take care of miscellaneous needs such as ordering office supplies, furniture, team lunch, etc.",
      hybrid: "AI recommendations + human procurement"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Receive Your Calls",
      description: "Your assistant can handle your phone calls, take notes, and attend/route them as required.",
      hybrid: "AI call screening + human handling"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Handle CRM Tools",
      description: "Your assistant can input and update records and collect information for your CRM tools.",
      hybrid: "AI data entry + human verification"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Make Travel Arrangements",
      description: "Wing Assistant prepares itineraries for company executives, books hotels and cars, and more.",
      hybrid: "AI booking + human trip planning"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Track Expenses and Invoices",
      description: "Creates or sends statements or invoices, track payments, and record company expenses.",
      hybrid: "AI tracking + human reconciliation"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="virtual-assistant-features">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Does a <span className="text-transparent bg-clip-text bg-gradient-primary">Virtual Assistant</span> Do?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            A VirtualTeam Pro Assistant (VA) will take care of your administrative and personal work and help you streamline your day-to-day operations so you can focus on growing your business and achieving your goals.
          </p>
          
          {/* Hybrid Approach Highlight */}
          <div className="inline-flex items-center gap-4 bg-gradient-primary/10 rounded-full px-6 py-3 mb-8">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">AI Agents</span>
            </div>
            <span className="text-muted-foreground">+</span>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Real People</span>
            </div>
            <span className="text-sm text-muted-foreground">= Perfect Results</span>
          </div>
          
          <p className="text-muted-foreground">
            Do you need something else? Jump to: <a href="#services" className="text-primary hover:underline">More Virtual Assistant Services</a>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-background rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="text-primary group-hover:scale-110 transition-transform duration-300 bg-primary/10 rounded-xl p-3">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-gradient-primary/5 rounded-full px-3 py-1 text-sm text-primary">
                    <Bot className="w-3 h-3" />
                    <span>{feature.hybrid}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualAssistantFeatures;