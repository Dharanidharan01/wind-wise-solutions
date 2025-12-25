import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  <strong>Last updated:</strong> December 2024
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
                <p className="mb-4">
                  By accessing and using the website and services of Shri Amogha Energy Care Engineering, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Services</h2>
                <p className="mb-4">
                  Shri Amogha Energy Care Engineering provides wind turbine maintenance services and spare parts supply. All services are subject to availability and specific terms agreed upon in service contracts.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Service Quotations</h2>
                <p className="mb-4">
                  Quotations provided are valid for 30 days unless otherwise specified. Prices are subject to change based on material costs and service requirements.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Payment Terms</h2>
                <p className="mb-4">
                  Payment terms will be specified in individual service agreements. We accept various payment methods as communicated during the engagement process.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Warranty</h2>
                <p className="mb-4">
                  Spare parts and services come with warranty terms as specified at the time of purchase or service agreement. Warranty claims must be reported within the specified period.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Limitation of Liability</h2>
                <p className="mb-4">
                  While we strive to provide the highest quality services, our liability is limited to the value of services rendered. We are not liable for indirect, consequential, or incidental damages.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Intellectual Property</h2>
                <p className="mb-4">
                  All content on this website, including logos, text, and images, is the property of Shri Amogha Energy Care Engineering and is protected by intellectual property laws.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Governing Law</h2>
                <p className="mb-4">
                  These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Contact</h2>
                <p className="mb-4">
                  For questions about these terms, contact us at:
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

export default Terms;
