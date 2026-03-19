import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import { packages } from "@/data/packages";

const Packages = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Travel Packages"
            title="Curated Trips & Tours"
            description="Expertly planned travel packages with handpicked stays, activities, and unforgettable experiences."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Packages;
