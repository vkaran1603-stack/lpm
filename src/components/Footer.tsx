import { Link } from "react-router-dom";
import collegeLogo from "@/assets/college-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={collegeLogo} alt="LPM Logo" className="w-14 h-14 object-contain bg-primary-foreground rounded-lg p-1" />
              <h3 className="font-bold text-lg leading-tight">L.P.M. College<br/>of Pharmacy</h3>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Approved by PCI, New Delhi. Affiliated to AKTU, Lucknow & BTEUP. Run by L.P.M. Educational Trust (LPMET). Established 2019, Purnachhapar Bhatni, Deoria, U.P.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/pci" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">PCI SIF Disclosure</Link></li>
              <li><Link to="/faculty" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Faculty List</Link></li>
              <li><Link to="/admissions" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Admission Criteria</Link></li>
              <li><Link to="/courses" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Courses Offered</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="text-sm text-primary-foreground/70 space-y-2">
              <p>Purnachhapar Bhatni,<br />Deoria, Uttar Pradesh, India</p>
              <p>Phone: +91 7355441911, 9559001600</p>
              <p>Email: lpmcollegeofpharmacy@gmail.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Recognitions</h4>
            <ul className="text-sm text-primary-foreground/70 space-y-2">
              <li>✓ PCI Approved</li>
              <li>✓ AKTU Affiliated (B.Pharm)</li>
              <li>✓ BTEUP Affiliated (D.Pharm)</li>
              <li>✓ LPMET Trust</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6">
        <p className="container text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} L.P.M. College of Pharmacy, Purnachhapar Bhatni, Deoria. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
