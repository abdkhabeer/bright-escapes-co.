import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Map, Users, Heart, Home, Calendar, Headphones } from "lucide-react";

const services = [
  { icon: Map, title: "Trip Planning Support", desc: "From choosing the right destination to building the perfect itinerary, our travel experts guide you every step of the way." },
  { icon: Calendar, title: "Custom Itineraries", desc: "Want something unique? We design completely personalized travel plans tailored to your interests, pace, and budget." },
  { icon: Users, title: "Group Travel Coordination", desc: "Planning for a large group? We handle logistics, accommodations, and activities to keep everyone happy." },
  { icon: Heart, title: "Destination Recommendations", desc: "Not sure where to go? We'll help you discover the perfect destination based on your travel style and preferences." },
  { icon: Home, title: "Accommodation Guidance", desc: "From boutique hotels to luxury villas, we hand-select the best places to stay for comfort and character." },
  { icon: Headphones, title: "Booking Assistance", desc: "We take the stress out of booking. From flights to transfers, we coordinate it all with transparent pricing." },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="What We Offer"
            title="Why Choose Wanderlux"
            description="We go beyond booking to deliver a complete travel planning experience."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-6 rounded-2xl bg-secondary"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <s.icon size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
