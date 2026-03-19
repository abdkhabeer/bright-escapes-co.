import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import aboutTeam from "@/assets/about-team.jpg";
import { Heart, Globe, Shield, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Story"
            title="About Wanderlux"
            description="Born from a love of travel and a passion for creating unforgettable journeys."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={aboutTeam} alt="Wanderlux team" className="rounded-2xl shadow-lg w-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <h3 className="font-display text-2xl font-bold text-foreground">We Believe Travel Should Be Easy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wanderlux was founded in 2018 with a simple mission: to make travel planning as enjoyable as the trip itself. We believe that everyone deserves beautifully curated experiences without the hassle of endless research and coordination.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of travel experts hand-selects every accommodation, activity, and experience in our packages. We've helped thousands of travelers — from honeymooners to families to solo adventurers — discover the world with confidence and ease.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're chasing sunsets on a Greek island or exploring ancient temples in Japan, Wanderlux is your partner in creating memories that last a lifetime.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Passion for Travel", desc: "Every trip we design comes from genuine love for exploration and discovery." },
              { icon: Globe, title: "Local Expertise", desc: "Our partners on the ground ensure authentic, immersive experiences." },
              { icon: Shield, title: "Trust & Safety", desc: "Your safety and satisfaction are always our top priorities." },
              { icon: Star, title: "Excellence", desc: "We hold ourselves to the highest standards in every detail of your journey." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-6 bg-secondary rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <item.icon size={24} />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
