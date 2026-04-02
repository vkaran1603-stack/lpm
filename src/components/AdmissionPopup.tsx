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
    <div className="fixed inset-0 z-[100] flex items-center justify-center 
                    bg-black/60 backdrop-blur-sm animate-fade-in p-4">

      {/* Popup Box */}
      <div className="relative bg-white rounded-2xl shadow-2xl 
                      w-full max-w-sm md:max-w-md lg:max-w-lg 
                      max-h-[90vh] overflow-y-auto border">

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 z-10 bg-red-500 text-white 
                     rounded-full w-9 h-9 flex items-center justify-center 
                     hover:opacity-80 transition shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ✅ Full Visible Image */}
        <img
          src={pamphletImg}
          alt="Admissions Open 2026-27"
          className="w-full h-auto object-contain rounded-t-2xl"
        />

        {/* Content */}
        <div className="p-4 text-center">
          <h3 className="text-lg md:text-xl font-bold text-blue-700 mb-1">
            Admissions Open 2026-27
          </h3>

          <p className="text-xs md:text-sm text-gray-600 mb-3">
            B.Pharm | D.Pharm — PCI Approved Programs
          </p>

          <Link
            to="/admissions"
            onClick={() => setShow(false)}
            className="w-full inline-block bg-blue-600 text-white 
                       py-2 rounded-lg text-sm font-medium 
                       hover:bg-blue-700 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPopup;
