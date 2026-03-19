import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import { packages } from "@/data/packages";
import { Clock, MapPin, Check, X, Users, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const PackageDetail = () => {
  const { id } = useParams();
  const pkg = packages.find((p) => p.id === id);
  const related = packages.filter((p) => p.id !== id).slice(0, 3);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", dates: "", travelers: "", message: "",
  });

  if (!pkg) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Package not found</h1>
          <Button variant="outline" className="mt-4" asChild>
            <Link to="/packages">Back to Packages</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inquiry submitted! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", dates: "", travelers: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img src={pkg.image} alt={pkg.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="relative z-10 h-full flex items-end pb-12">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 text-primary-foreground/80 text-sm mb-2">
                <span className="flex items-center gap-1"><MapPin size={14} /> {pkg.destination}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {pkg.duration}</span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">{pkg.title}</h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{pkg.overview}</p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Itinerary</h2>
                <div className="space-y-3">
                  {pkg.itinerary.map((day, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-xl bg-secondary">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg h-fit whitespace-nowrap">
                        Day {i + 1}
                      </span>
                      <p className="text-sm text-foreground">{day.replace(/^Day \d+: /, "")}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">What's Included</h3>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">Not Included</h3>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X size={16} className="text-muted-foreground mt-0.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Ideal For</h3>
                <div className="flex flex-wrap gap-2">
                  {pkg.idealFor.map((t) => (
                    <span key={t} className="flex items-center gap-1 text-sm bg-teal px-3 py-1.5 rounded-full">
                      <Users size={14} /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-secondary rounded-2xl p-6">
                <div className="text-center mb-6">
                  <span className="text-sm text-muted-foreground">Starting from</span>
                  <p className="text-4xl font-bold text-primary font-display">${pkg.price.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
                <Button variant="coral" size="lg" className="w-full" asChild>
                  <a href="#inquiry">Book This Trip</a>
                </Button>
              </div>

              {/* Inquiry Form */}
              <div id="inquiry" className="bg-secondary rounded-2xl p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Send an Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  {[
                    { key: "name", placeholder: "Full Name", type: "text" },
                    { key: "email", placeholder: "Email", type: "email" },
                    { key: "phone", placeholder: "Phone", type: "tel" },
                    { key: "dates", placeholder: "Preferred Travel Dates", type: "text" },
                    { key: "travelers", placeholder: "Number of Travelers", type: "text" },
                  ].map((f) => (
                    <input
                      key={f.key}
                      type={f.type}
                      placeholder={f.placeholder}
                      required={f.key === "name" || f.key === "email"}
                      value={formData[f.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  ))}
                  <textarea
                    placeholder="Special requests or questions"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                  <Button variant="default" size="lg" className="w-full">
                    <Send size={16} /> Submit Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-10">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <PackageCard key={p.id} pkg={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackageDetail;
