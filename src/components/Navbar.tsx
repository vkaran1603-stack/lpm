import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import collegeLogo from "@/assets/college-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Courses", path: "/courses" },
  
  { label: "Infrastructure", path: "/infrastructure" },
  { label: "Admissions", path: "/admissions" },
  { label: "PCI", path: "/pci" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`sticky top-0 z-50 bg-card transition-all duration-300 ${scrolled ? "shadow-lg py-2" : "py-3"}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={collegeLogo} alt="L.P.M. College of Pharmacy Logo" className="w-12 h-12 object-contain" />
          <div>
            <span className="block font-bold text-primary text-base md:text-lg leading-tight">L.P.M. College of Pharmacy</span>
            <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">LPMET | Purnachhapar Bhatni, Deoria</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.path}>
              {link.label === "Admissions" ? (
                <Link to={link.path} className="btn-main text-sm px-4 py-2">
                  {link.label}
                </Link>
              ) : (
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <ul className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-secondary text-primary"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
