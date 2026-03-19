import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import labImg from "@/assets/lab.jpg";
import libraryImg from "@/assets/library.jpg";
import classroomImg from "@/assets/classroom.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import sports from "@/assets/sports.jpg";
import canteen from "@/assets/canteen.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus4 from "@/assets/campus-4.jpg";

const heroSlides = [
  { img: heroCampus, label: "Main Campus Building" },
  { img: labImg, label: "Pharmaceutical Laboratory" },
  { img: libraryImg, label: "Central Library" },
  { img: classroomImg, label: "Smart Classrooms" },
  { img: sports, label: "Sports Ground" },
  { img: canteen, label: "College Canteen" },
];

const sections = [
  { title: "Laboratories", desc: "Our college houses 8 well-equipped laboratories covering Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmacognosy, Pharmaceutical Analysis, and Pharmacy Practice. Each lab is designed to accommodate 60 students with individual workstations, fume hoods, and modern analytical instruments including HPLC, UV-Spectrophotometer, and dissolution apparatus.", img: labImg },
  { title: "Library", desc: "library offers a rich collection of books, national and international journals, and access to e-resources through DELNET. It also includes a digital section with computer facilities, allowing students to explore online journals and research databases easily.", img: libraryImg },
  { title: "Classrooms", desc: "The college has well-equipped classrooms and seminar halls with modern audio-visual facilities. All rooms are spacious, well-ventilated, and properly lit to ensure a comfortable and effective learning environment.", img: classroomImg },
  { title: "Sports & Recreation", desc: "A multi-purpose sports ground for cricket, football, volleyball, and badminton. Indoor games like table tennis, chess, and carrom are also available. Annual sports day and inter-college tournaments are organized regularly.", img: sports },
];

const galleryImages = [heroCampus, labImg, libraryImg, classroomImg,  sports, canteen, campus2, campus4];

const Infrastructure = () => {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % heroSlides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Infrastructure</h1>
          <p>World-class facilities designed for effective learning and research in pharmaceutical sciences.</p>
        </div>
      </div>

      {/* Hero Slideshow */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
            <img src={slide.img} alt={slide.label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
          </div>
        ))}
        <div className="absolute bottom-6 left-0 right-0 z-10 text-center">
          <p className="text-primary-foreground text-lg font-semibold">{heroSlides[current].label}</p>
          <div className="flex gap-2 justify-center mt-3">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary-foreground w-6" : "bg-primary-foreground/40"}`} />
            ))}
          </div>
        </div>
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground rounded-full p-2 hover:bg-primary-foreground/40 transition"><ChevronLeft className="w-6 h-6" /></button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground rounded-full p-2 hover:bg-primary-foreground/40 transition"><ChevronRight className="w-6 h-6" /></button>
      </section>

      {/* Sections */}
      <section className="section-padding">
        <div className="container space-y-16">
          {sections.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-10 items-center`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{s.title}</h2>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <img src={s.img} alt={s.title} className="w-full rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Gallery */}
      <section className="section-padding bg-secondary/30 overflow-hidden">
        <div className="container mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Campus Gallery</h2>
        </div>
        <div className="relative">
          <div className="flex animate-marquee gap-4">
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden group">
                <img src={img} alt={`Campus ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Infrastructure;
