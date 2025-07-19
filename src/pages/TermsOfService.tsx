import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: January 2024
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing and using VirtualTeam Pro services, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">2. Service Description</h2>
            <p className="text-muted-foreground mb-6">
              VirtualTeam Pro provides virtual team member matching and management services. We connect 
              businesses with qualified professionals for various projects and ongoing support needs.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground mb-6">
              Users are responsible for providing accurate information, maintaining the confidentiality 
              of their account, and using our services in compliance with applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
            <p className="text-muted-foreground mb-6">
              Payment terms are specified in your service agreement. All fees are non-refundable unless 
              otherwise stated. We reserve the right to modify our pricing with 30 days notice.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              VirtualTeam Pro shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">6. Termination</h2>
            <p className="text-muted-foreground mb-6">
              Either party may terminate the service agreement with 30 days written notice. Upon 
              termination, all rights and obligations cease except those that by nature should survive.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              For questions about these Terms of Service, contact us at:
              <br />
              Email: legal@virtualteampro.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;