import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you with questions about VirtualTeam Pro. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const botResponses: { [key: string]: string } = {
    "pricing": "Our pricing starts at $500/month for starter plans with 20 hours of work. We also offer growth plans at $1,000/month for 40 hours, and custom enterprise solutions. Would you like to see our detailed pricing page?",
    "price": "Our pricing starts at $500/month for starter plans with 20 hours of work. We also offer growth plans at $1,000/month for 40 hours, and custom enterprise solutions. Would you like to see our detailed pricing page?",
    "cost": "Our pricing starts at $500/month for starter plans with 20 hours of work. We also offer growth plans at $1,000/month for 40 hours, and custom enterprise solutions. Would you like to see our detailed pricing page?",
    "how it works": "Our process is simple: 1) Tell us your needs, 2) We match you with pre-vetted professionals, 3) You start working with your new team member. The whole process typically takes 24-48 hours!",
    "services": "We provide virtual team members for any industry or skill you need - from digital marketing and web development to customer support, content creation, data analysis, and much more. What specific skill are you looking for?",
    "contact": "You can reach us at hello@virtualteampro.com or call us at +1 (555) 123-4567. Our team is available Monday to Friday, 9 AM to 6 PM PST.",
    "support": "You can reach us at hello@virtualteampro.com or call us at +1 (555) 123-4567. Our team is available Monday to Friday, 9 AM to 6 PM PST.",
    "get started": "Getting started is easy! Just click on our 'Get Started' button and fill out a quick form telling us about your needs. We'll match you with the perfect team member within 24 hours.",
    "start": "Getting started is easy! Just click on our 'Get Started' button and fill out a quick form telling us about your needs. We'll match you with the perfect team member within 24 hours.",
    "hello": "Hello! Welcome to VirtualTeam Pro. I'm here to help answer any questions about our virtual team services. What would you like to know?",
    "hi": "Hi there! Welcome to VirtualTeam Pro. I'm here to help answer any questions about our virtual team services. What would you like to know?",
    "help": "I'm here to help! I can answer questions about our pricing, services, how we work, getting started, or contact information. What would you like to know more about?"
  };

  const getDefaultResponse = () => {
    return "I don't have specific information about that topic. For detailed assistance, please contact our team:\n\n📧 Email: hello@virtualteampro.com\n📞 Phone: +1 (555) 123-4567\n\nOur team is available Monday to Friday, 9 AM to 6 PM PST and will be happy to help you with any questions!";
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    return getDefaultResponse();
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 p-0"
        size="lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 border border-border flex flex-col">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">VirtualTeam Assistant</h3>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isBot ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div className={`max-w-[70%] p-3 rounded-2xl ${
                  message.isBot 
                    ? 'bg-muted text-foreground' 
                    : 'bg-primary text-primary-foreground'
                }`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="sm" className="px-3">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;