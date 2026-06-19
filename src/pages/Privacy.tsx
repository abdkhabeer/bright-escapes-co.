import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const sections = [
  {
    title: "Information We Collect",
    body: "When you send an inquiry, subscribe to our newsletter, or book a trip, we collect details such as your name, email address, phone number, travel dates, and preferences. We only ask for what we need to plan your journey.",
  },
  {
    title: "How We Use Your Information",
    body: "Your information helps us respond to inquiries, tailor travel recommendations, process bookings, and share relevant deals and destination guides. We never sell your personal data to third parties.",
  },
  {
    title: "Sharing With Trusted Partners",
    body: "To deliver your trip, we share necessary details with carefully selected accommodation, transport, and activity partners. These partners are bound to handle your data securely and only for the purpose of your booking.",
  },
  {
    title: "Cookies & Analytics",
    body: "We use cookies and analytics tools to understand how travelers use our site so we can keep improving it. You can disable cookies in your browser at any time, though some features may not work as smoothly.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time. Simply reach out to us and we will respond promptly.",
  },
  {
    title: "Contact Us",
    body: "Questions about your privacy? Email hello@wanderlux.travel or call +1 (555) 123-4567 and our team will be happy to help.",
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Legal"
            title="Privacy Policy"
            description="Your trust matters to us. Here's how we collect, use, and protect your information."
          />
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-sm text-muted-foreground text-center">Last updated: June 2026</p>
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="bg-secondary rounded-2xl p-6"
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;
