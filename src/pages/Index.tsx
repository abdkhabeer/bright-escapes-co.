import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import TestimonialCard from "@/components/TestimonialCard";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import { testimonials } from "@/data/testimonials";
import { Compass, CalendarCheck, Headphones, Sparkles, MapPin, Send } from "lucide-react";
import heroBg from "@/assets/hero-beach.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Tropical beach" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-foreground/50" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Discover Trips <br className="hidden md:block" />Worth Taking
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-xl mx-auto"
          >
            Curated travel experiences designed for stress-free planning and unforgettable memories.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" asChild>
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
            <Button variant="heroOutline" asChild>
              <Link to="/contact">Book Your Trip</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Explore"
            title="Featured Destinations"
            description="From sun-drenched islands to vibrant cities, discover handpicked destinations for every kind of traveler."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
              >
                <DestinationCard destination={dest} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Travel Packages"
            title="Curated Trips for You"
            description="Expertly planned itineraries with handpicked stays, activities, and experiences."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.slice(0, 3).map((pkg, i) => (
              <motion.div
                key={pkg.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
              >
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/packages">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Travel With Us */}
      <section className="py-20 md:py-28 bg-teal">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Why Wanderlux"
            title="Travel Made Simple"
            description="We handle every detail so you can focus on making memories."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Compass, title: "Curated Itineraries", desc: "Every trip is thoughtfully designed by travel experts who know the destination inside out." },
              { icon: CalendarCheck, title: "Easy Booking", desc: "Simple inquiry process and transparent pricing. No hidden fees, no stress." },
              { icon: Headphones, title: "24/7 Support", desc: "Our team is always just a message away, before, during, and after your trip." },
              { icon: Sparkles, title: "Memorable Experiences", desc: "Hand-selected stays and activities that go beyond the ordinary tourist path." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                  <item.icon size={28} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="How It Works"
            title="Your Journey in 4 Steps"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Choose a Destination", desc: "Browse our curated destinations and find your perfect escape." },
              { step: "02", title: "Select a Package", desc: "Pick a travel package that fits your style and budget." },
              { step: "03", title: "Send Your Inquiry", desc: "Fill out our simple form and our experts will take it from there." },
              { step: "04", title: "Confirm & Travel", desc: "Review your itinerary, confirm your booking, and start packing!" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <span className="font-display text-5xl font-bold text-primary/15">{item.step}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Travelers Say"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Travel Inspiration"
            title="Moments Worth Chasing"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, heroBg].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`overflow-hidden rounded-2xl ${i === 1 ? "row-span-2" : ""}`}
              >
                <img
                  src={img}
                  alt="Travel inspiration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
              Subscribe for exclusive travel deals and destination guides, or start planning your dream trip today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <Button variant="coral" size="lg">
                <Send size={16} />
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
