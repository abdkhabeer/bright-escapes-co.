import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sand pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Wanderlux</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Curated travel experiences that turn dream destinations into unforgettable memories.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body font-semibold text-foreground mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Destinations", path: "/destinations" },
                { label: "Packages", path: "/packages" },
                { label: "About Us", path: "/about" },
                { label: "Testimonials", path: "/testimonials" },
                { label: "FAQ", path: "/faq" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body font-semibold text-foreground mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              {["Trip Planning", "Custom Itineraries", "Group Travel", "Honeymoon Packages", "Family Trips"].map(
                (item) => (
                  <Link key={item} to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <span>hello@wanderlux.travel</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span>Miami, FL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Wanderlux Travel. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary cursor-pointer transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
