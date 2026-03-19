import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ScrollText, Microscope, GraduationCap, BookOpen, ChevronRight, ChevronLeft } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";
import campus4 from "@/assets/campus-4.jpg";
import labImg from "@/assets/lab.jpg";
import libraryImg from "@/assets/library.jpg";
import chairmanImg from "@/assets/chairman.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import NotificationBar from "@/components/NotificationBar";

const slides = [
  { img: heroCampus, title: "Excellence in Pharmaceutical Education", subtitle: "L.P.M. College of Pharmacy — Shaping Future Healthcare Professionals" },
  { img: campus2, title: "World-Class Campus & Infrastructure", subtitle: "Modern facilities at Purnachhapar Bhatni, Deoria" },
  { img: campus3, title: "PCI Approved Institution", subtitle: "Fully compliant with Pharmacy Council of India standards" },
  { img: campus4, title: "Vibrant Student Life", subtitle: "Seminars, events, and co-curricular activities" },
  { img: labImg, title: "State-of-the-Art Laboratories", subtitle: "Hands-on training with advanced pharmaceutical equipment" },
  { img: libraryImg, title: "Digital Library & Resources", subtitle: "Access to thousands of journals and e-books" },
  { img: event1, title: "Annual Events & Celebrations", subtitle: "Cultural programs and guest lectures" },
  { img: event2, title: "Award Distribution Ceremony", subtitle: "Recognizing excellence in academics and sports" },
  { img: event3, title: "Faculty & Staff", subtitle: "Dedicated team of experienced educators" },
  { img: event4, title: "Community Engagement", subtitle: "Building strong bonds with the local community" },
  { img: event5, title: "Media Coverage", subtitle: "LPM COLLEGE" },
];

const highlights = [
  { icon: <ScrollText className="w-8 h-8" />, title: "PCI Approved", desc: "Fully compliant with Pharmacy Council of India standards for B.Pharm & D.Pharm." },
  { icon: <Microscope className="w-8 h-8" />, title: "Modern Labs", desc: "State-of-the-art Pharmaceutics and Analysis laboratories with advanced equipment." },
  { icon: <GraduationCap className="w-8 h-8" />, title: "Expert Faculty", desc: "Learn from Ph.D. holders and industry veterans with decades of experience." },
  { icon: <BookOpen className="w-8 h-8" />, title: "AKTU & BTEUP Affiliated", desc: "B.Pharm affiliated to AKTU Lucknow, D.Pharm affiliated to BTEUP." },
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      {/* Hero Slideshow */}
      <header className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
          <div className="container relative z-10">
            <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4 animate-fade-in">
              Admissions Open 2025-26
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 max-w-3xl">
              {slides[current].title}
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-6 max-w-xl">{slides[current].subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-main">Apply Now</Link>
              <Link to="/courses" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:bg-primary-foreground hover:text-foreground">View Courses</Link>
            </div>
          </div>
        </div>
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground rounded-full p-2 hover:bg-primary-foreground/40 transition"><ChevronLeft className="w-6 h-6" /></button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground rounded-full p-2 hover:bg-primary-foreground/40 transition"><ChevronRight className="w-6 h-6" /></button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary-foreground w-8" : "bg-primary-foreground/40"}`} />
          ))}
        </div>
      </header>

      {/* Highlights */}
      <section className="section-padding">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="highlight-card text-center">
                <div className="text-primary mb-4 flex justify-center">{h.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notifications */}
      <NotificationBar />

      {/* Chairman's Message */}
      <section className="section-padding bg-secondary/30">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Chairman's Message</h2>
            <div className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row gap-6">
              <img src={chairmanImg} alt="Chairman, LPMET" className="w-32 h-40 object-cover rounded-lg flex-shrink-0" />
              <div>
                <p className="text-muted-foreground text-sm mb-4 italic">
                  "L.P.M. College of Pharmacy was founded with the vision of providing world-class pharmaceutical education in the Deoria region. Under L.P.M. Educational Trust, we are committed to nurturing future pharmacists who will serve society with knowledge, skill, and integrity."
                </p>
                <strong className="text-sm text-foreground">— Chairman, L.P.M. Educational Trust (LPMET)</strong>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Quick Downloads</h2>
            <div className="space-y-3">
              {[
                { label: "Academic Session 2025-26", file: "/docs/academic-session-2025-26.pdf" },
                { label: "AKTU Approval Letter 2025", file: "/docs/aktu-approval-2025.pdf" },
                { label: "BTEUP Approval Letter 2025", file: "/docs/bteup-approval-2025.pdf" },
                { label: "PCI Approval Letter", file: "/docs/pci-approval-letter.pdf" },
                { label: "Anti-Ragging Policy", file: "/docs/anti-ragging-policy.pdf" },
              ].map((d) => (
                <a key={d.label} href={d.file} download className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors group">
                  <span className="w-8 h-8 bg-destructive/10 text-destructive rounded-full flex items-center justify-center text-lg flex-shrink-0">📄</span>
                  <span className="text-sm font-medium flex-1">{d.label}</span>
                  <span className="text-xs text-primary font-medium group-hover:underline">Download</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Explore Our Institution</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "About Us", to: "/about" },
              { label: "Infrastructure", to: "/infrastructure" },
              { label: "PCI Compliance", to: "/pci" },
              { label: "Contact Us", to: "/contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="highlight-card flex items-center justify-center gap-2 text-primary font-medium hover:bg-secondary transition-colors">
                {l.label} <ChevronRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
