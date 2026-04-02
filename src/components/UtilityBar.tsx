import { Phone, Mail } from "lucide-react";

const UtilityBar = () => {
  return (
    <div className="bg-primary text-primary-foreground text-sm py-2 border-b border-primary-foreground/10">
      <div className="container flex justify-between items-center">
        <span className="hidden sm:inline">PCI Approved | AKTU Affiliated | BTEUP Affiliated | ESTD 2019</span>
        <div className="flex items-center gap-4 ml-auto sm:ml-0">
          <a href="tel:+919876543210" className="flex items-center gap-1 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            <Phone className="w-3 h-3" />
            +91 7355441911, 9559001600, 8687280763
          </a>
          <a href="mailto:lpmcollegeofpharmacy@gmail.com" className="flex items-center gap-1 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            <Mail className="w-3 h-3" />
            lpmcollegeofpharmacy@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
