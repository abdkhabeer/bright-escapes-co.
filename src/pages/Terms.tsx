import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const sections = [
  {
    title: "Booking & Inquiries",
    body: "Submitting an inquiry is not a confirmed booking. A reservation is only finalized once we confirm availability and you have completed the agreed payment. Quoted prices are subject to change until your booking is confirmed.",
  },
  {
    title: "Payments",
    body: "A deposit may be required to secure your trip, with the balance due before departure. Accepted payment methods and deadlines will be shared during the booking process.",
  },
  {
    title: "Cancellations & Refunds",
    body: "Cancellation terms vary by package and partner. We will always communicate the applicable policy before you confirm. Refunds, where available, are processed according to those terms.",
  },
  {
    title: "Travel Documents & Insurance",
    body: "You are responsible for ensuring you hold valid passports, visas, and any required vaccinations. We strongly recommend comprehensive travel insurance for every trip.",
  },
  {
    title: "Changes to Itineraries",
    body: "Occasionally, weather, availability, or circumstances beyond our control may require adjustments to your itinerary. We will always work to provide the best possible alternative.",
  },
  {
    title: "Liability",
    body: "Wanderlux acts as an intermediary between you and our travel partners. While we choose partners with great care, we are not liable for losses caused by third-party providers or events outside our control.",
  },
  {
    title: "Contact Us",
    body: "Need clarification on these terms? Email hello@wanderlux.travel or call +1 (555) 123-4567 and we'll be glad to help.",
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Legal"
            title="Terms of Service"
            description="The essentials of booking and traveling with Wanderlux, in plain language."
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

export default Terms;
