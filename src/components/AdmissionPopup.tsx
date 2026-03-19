import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import pamphletImg from "@/assets/admission-pamphlet.jpg";

const AdmissionPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm animate-fade-in p-4">
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-xs w-full overflow-hidden border border-border">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 z-10 bg-destructive text-destructive-foreground rounded-full w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity shadow-lg"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <img src={pamphletImg} alt="Admissions Open 2025-26" className="w-full max-h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold text-primary mb-1">Admissions Open 2025-26</h3>
          <p className="text-xs text-muted-foreground mb-3">B.Pharm | D.Pharm — PCI Approved Programs</p>
          <Link to="/admissions" onClick={() => setShow(false)} className="btn-main w-full justify-center text-sm py-2">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPopup;
