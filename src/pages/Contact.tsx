import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", dates: "", travelers: "", destination: "", budget: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your inquiry has been submitted. We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", phone: "", dates: "", travelers: "", destination: "", budget: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Get in Touch"
            title="Plan Your Dream Trip"
            description="Fill out the form below and our travel experts will help you plan the perfect getaway."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                  <input type="email" placeholder="Email Address *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                  <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                  <input type="text" placeholder="Preferred Travel Dates" value={form.dates} onChange={(e) => setForm({ ...form, dates: e.target.value })} className={inputClass} />
                  <input type="text" placeholder="Number of Travelers" value={form.travelers} onChange={(e) => setForm({ ...form, travelers: e.target.value })} className={inputClass} />
                  <select value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} className={inputClass}>
                    <option value="">Destination of Interest</option>
                    <option value="santorini">Santorini, Greece</option>
                    <option value="bali">Bali, Indonesia</option>
                    <option value="maldives">Maldives</option>
                    <option value="amalfi">Amalfi Coast, Italy</option>
                    <option value="swiss">Swiss Alps</option>
                    <option value="kyoto">Kyoto, Japan</option>
                    <option value="other">Other</option>
                  </select>
                  <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={inputClass}>
                    <option value="">Budget Range</option>
                    <option value="under2k">Under $2,000</option>
                    <option value="2k-3k">$2,000 – $3,000</option>
                    <option value="3k-5k">$3,000 – $5,000</option>
                    <option value="5k+">$5,000+</option>
                  </select>
                </div>
                <textarea
                  placeholder="Tell us about your dream trip — special occasions, interests, or any requests..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
                <Button variant="coral" size="lg" className="w-full sm:w-auto">
                  <Send size={16} /> Submit Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">hello@wanderlux.travel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Office</p>
                      <p className="text-muted-foreground">123 Ocean Drive, Miami, FL 33139</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground">Mon – Fri: 9AM – 6PM EST</p>
                <p className="text-sm text-muted-foreground">Sat: 10AM – 4PM EST</p>
                <p className="text-sm text-muted-foreground">Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
