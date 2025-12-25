import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  <strong>Last updated:</strong> December 2024
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Shri Amogha Energy Care Engineering ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Information We Collect</h2>
                <p className="mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Contact information (name, email, phone number, company name)</li>
                  <li>Business information related to service inquiries</li>
                  <li>Technical data (IP address, browser type) when you visit our website</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Process service requests and quotations</li>
                  <li>Send relevant communications about our services</li>
                  <li>Improve our website and services</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Third-Party Sharing</h2>
                <p className="mb-4">
                  We do not sell or rent your personal information to third parties. We may share information with service providers who assist us in our operations, subject to confidentiality agreements.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Contact Us</h2>
                <p className="mb-4">
                  For any privacy-related questions, please contact us at:
                </p>
                <p className="mb-4">
                  <strong>Email:</strong> shriamoghaenergycare@gmail.com<br />
                  <strong>Phone:</strong> +91 9080508426
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
