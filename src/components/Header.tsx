import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Destinations", path: "/destinations" },
  { label: "Packages", path: "/packages" },
  { label: "About", path: "/about" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const headerBg = scrolled || !isHome
    ? "bg-background/95 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-foreground" : "text-primary-foreground";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className={`font-display text-xl md:text-2xl font-bold tracking-tight ${textColor} transition-colors`}>
          Wanderlux
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${textColor} ${
                location.pathname === link.path ? "opacity-100" : "opacity-70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="coral" size="sm" asChild>
            <Link to="/contact">Book Now</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium py-2 px-3 rounded-md transition-colors hover:bg-secondary ${
                  location.pathname === link.path ? "bg-secondary text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="coral" className="mt-2" asChild>
              <Link to="/contact">Book Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
