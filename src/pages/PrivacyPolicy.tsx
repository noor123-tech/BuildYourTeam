import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
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

            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              request our services, or contact us for support. This may include your name, email address, 
              phone number, company information, and project requirements.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-6">
              We use the information we collect to provide, maintain, and improve our services, 
              match you with suitable virtual team members, process transactions, send communications, 
              and comply with legal obligations.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information with trusted service providers who assist us in operating our platform, 
              conducting business, or serving you.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground mb-6">
              You have the right to access, update, or delete your personal information. You may also 
              opt out of certain communications from us. Contact us if you wish to exercise these rights.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@virtualteampro.com
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

export default PrivacyPolicy;