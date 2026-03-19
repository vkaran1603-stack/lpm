import { useState } from "react";
import heroCampus from "@/assets/hero-campus.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import pciCert from "@/assets/pci-certificate.jpg";
import aicteCert from "@/assets/aicte-certificate.jpg";
import ImageLightbox from "@/components/ImageLightbox";

const About = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      {lightbox && <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}

      <div className="page-header">
        <div className="container">
          <h1>About Our Institution</h1>
          <p>L.P.M. College of Pharmacy — A legacy of pharmaceutical education since 2019.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-muted-foreground mb-4">
              L.P.M. College of Pharmacy was established in 2019 under the L.P.M. Educational Trust (LPMET) with a vision to create a centre of excellence in pharmaceutical education and research. Located at Purnachhapar Bhatni, Deoria, Uttar Pradesh, our institution has rapidly grown to become a respected pharmacy college in the region.
            </p>
            <p className="text-muted-foreground">
              With state-of-the-art infrastructure, distinguished faculty, and a robust curriculum aligned with PCI guidelines, we prepare students to become competent pharmacists and researchers who make meaningful contributions to healthcare. Our B.Pharm program is affiliated to AKTU, Lucknow and D.Pharm to BTEUP.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={heroCampus} alt="College Campus" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            <img src={campus2} alt="Campus Building" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            <img src={campus3} alt="Campus Entrance" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            <img src={event1} alt="College Event" className="rounded-xl shadow-lg w-full h-48 object-cover" />
          </div>
        </div>
      </section>

      {/* Event Photos Gallery */}
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Campus Life & Events</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: event1, alt: "College Event" },
              { img: event2, alt: "Award Ceremony" },
              { img: event3, alt: "Faculty & Staff" },
              { img: event4, alt: "Community Program" },
            ].map((e, i) => (
              <img key={i} src={e.img} alt={e.alt} className="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setLightbox({ src: e.img, alt: e.alt })} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="highlight-card">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a nationally recognized institution of pharmaceutical sciences that produces competent professionals through quality education, innovative research, and ethical practice, contributing to the advancement of public health in the Purvanchal region and beyond.
              </p>
            </div>
            <div className="highlight-card">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Provide quality pharmaceutical education as per PCI and university norms</li>
                <li>• Foster innovation and research in drug development and healthcare</li>
                <li>• Develop ethical, skilled professionals for the pharmaceutical industry</li>
                <li>• Promote community healthcare awareness through outreach programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approval & Affiliation */}
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Approval & Affiliation</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="highlight-card text-center cursor-pointer group"
              onClick={() => setLightbox({ src: pciCert, alt: "PCI Approval Certificate" })}
            >
              <img src={pciCert} alt="PCI Approval Certificate" className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" />
              <h3 className="font-semibold text-lg mb-2">PCI Approved</h3>
              <p className="text-sm text-muted-foreground">Approved by Pharmacy Council of India for B.Pharm and D.Pharm programs.</p>
              <span className="text-xs text-primary mt-2 inline-block font-medium">Click to view certificate →</span>
            </div>
            <div
              className="highlight-card text-center cursor-pointer group"
              onClick={() => setLightbox({ src: aicteCert, alt: "AICTE/AKTU Approval Certificate" })}
            >
              <img src={aicteCert} alt="AKTU Approval" className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" />
              <h3 className="font-semibold text-lg mb-2">AKTU Affiliated</h3>
              <p className="text-sm text-muted-foreground">B.Pharm affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow.</p>
              <span className="text-xs text-primary mt-2 inline-block font-medium">Click to view →</span>
            </div>
            <div className="highlight-card text-center">
              <div className="w-full h-40 bg-secondary rounded-lg mb-4 flex items-center justify-center">
                <span className="text-5xl text-primary font-bold">📋</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">BTEUP Affiliated</h3>
              <p className="text-sm text-muted-foreground">D.Pharm affiliated to Board of Technical Education, Uttar Pradesh.</p>
              <a href="/docs/bteup-approval-2025.pdf" download className="text-xs text-primary mt-2 inline-block font-medium hover:underline">Download approval letter →</a>
            </div>
            <div className="highlight-card text-center">
              <div className="w-full h-40 bg-secondary rounded-lg mb-4 flex items-center justify-center">
                <span className="text-5xl text-primary font-bold">🎓</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">LPMET Trust</h3>
              <p className="text-sm text-muted-foreground">Run by L.P.M. Educational Trust, dedicated to quality education in Deoria.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our History</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>Founded in 2019 by the L.P.M. Educational Trust (LPMET), L.P.M. College of Pharmacy began with a vision to bring quality pharmaceutical education to the Purvanchal region of Uttar Pradesh.</p>
            <p>Located at Purnachhapar Bhatni, Deoria, the college received PCI approval and started B.Pharm and D.Pharm programs. The institution quickly gained recognition for its emphasis on practical training and industry-relevant curriculum.</p>
            <p>In a short span, LPM Pharmacy has invested significantly in infrastructure—building advanced laboratories, a digital library, and modern facilities. We continue to grow and strive towards becoming a leading pharmacy institution in eastern Uttar Pradesh.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
