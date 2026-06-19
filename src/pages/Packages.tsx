import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import { packages } from "@/data/packages";
import { destinations } from "@/data/destinations";

const Packages = () => {
  const [searchParams] = useSearchParams();
  const destinationId = searchParams.get("destination");

  const activeDestination = destinationId
    ? destinations.find((d) => d.id === destinationId)
    : undefined;

  const filteredPackages = activeDestination
    ? packages.filter((pkg) =>
        pkg.destination.toLowerCase().includes(activeDestination.name.toLowerCase())
      )
    : packages;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Travel Packages"
            title={activeDestination ? `Packages in ${activeDestination.name}` : "Curated Trips & Tours"}
            description={
              activeDestination
                ? `Handpicked stays, activities, and experiences in ${activeDestination.name}, ${activeDestination.country}.`
                : "Expertly planned travel packages with handpicked stays, activities, and unforgettable experiences."
            }
          />

          {activeDestination && (
            <div className="flex justify-center mb-10">
              <Button variant="outline" size="sm" asChild>
                <Link to="/packages">
                  <X size={14} /> Clear filter — view all packages
                </Link>
              </Button>
            </div>
          )}

          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg, i) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-6">
                No packages found for this destination yet. Explore all our curated trips instead.
              </p>
              <Button variant="coral" asChild>
                <Link to="/packages">View All Packages</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Packages;
