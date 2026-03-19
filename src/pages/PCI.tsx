import { useState } from "react";
import { Download, Shield, Users, AlertTriangle, CheckCircle, FileText, Award, Building } from "lucide-react";
import pciCert from "@/assets/pci-certificate.jpg";
import aicteCert from "@/assets/aicte-certificate.jpg";
import ImageLightbox from "@/components/ImageLightbox";

const docLinks: Record<string, string> = {
  "PCI Approval Letter": "/docs/pci-approval-letter.pdf",
  "AKTU Approval Letter 2025": "/docs/aktu-approval-2025.pdf",
  "BTEUP Approval Letter 2025": "/docs/bteup-approval-2025.pdf",
  "Academic Session 2025-26": "/docs/academic-session-2025-26.pdf",
  "SIF Document": "/docs/sif-document.pdf",
  "Anti-Ragging Policy": "/docs/anti-ragging-policy.pdf",
  "Syllabus (B.Pharm)": "/docs/syllabus-bpharm.pdf",
};

const facultySummary = [
  { sno: 1, name: "Dr. Rajesh Kumar", designation: "Principal", qualification: "M.Pharm, Ph.D.", pciReg: "PCI-10293" },
  { sno: 2, name: "Dr. Sunita Sharma", designation: "Professor & HOD", qualification: "M.Pharm, Ph.D.", pciReg: "PCI-10485" },
  { sno: 3, name: "Dr. Amit Patel", designation: "Associate Professor", qualification: "M.Pharm, Ph.D.", pciReg: "PCI-11032" },
  { sno: 4, name: "Prof. Neha Gupta", designation: "Assistant Professor", qualification: "M.Pharm", pciReg: "PCI-11567" },
  { sno: 5, name: "Dr. Vikram Singh", designation: "Associate Professor", qualification: "M.Pharm, Ph.D.", pciReg: "PCI-10876" },
  { sno: 6, name: "Prof. Priya Mehta", designation: "Assistant Professor", qualification: "M.Pharm", pciReg: "PCI-12045" },
];

const PCI = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      {lightbox && <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}

      <div className="page-header">
        <div className="container">
          <h1>PCI Statutory Disclosure</h1>
          <p>L.P.M. College of Pharmacy — Mandatory information as per Pharmacy Council of India guidelines.</p>
        </div>
      </div>

      {/* Compliance Banner */}
      <section className="bg-primary/5 border-b border-border py-6">
        <div className="container flex flex-wrap gap-6 justify-center">
          {[
            { icon: <CheckCircle className="w-5 h-5" />, text: "PCI Approved" },
            { icon: <Award className="w-5 h-5" />, text: "AKTU Affiliated" },
            { icon: <Building className="w-5 h-5" />, text: "BTEUP Affiliated" },
            { icon: <Shield className="w-5 h-5" />, text: "Anti-Ragging Compliant" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2 text-primary font-medium text-sm">
              {b.icon} {b.text}
            </div>
          ))}
        </div>
      </section>

      {/* SIF Download + Certificates */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <div className="highlight-card flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2"><FileText className="w-5 h-5 text-primary" /> Standard Inspection Form (SIF)</h2>
              <p className="text-sm text-muted-foreground">Latest SIF submitted to PCI for the academic year 2025-26.</p>
            </div>
            <a href="/docs/sif-document.pdf" download className="btn-main flex items-center gap-2 whitespace-nowrap">
              <Download className="w-4 h-4" /> Download SIF (PDF)
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer group" onClick={() => setLightbox({ src: pciCert, alt: "PCI Approval Certificate" })}>
              <img src={pciCert} alt="PCI Approval Certificate" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1">PCI Approval Certificate</h3>
                <p className="text-xs text-muted-foreground">Click to view full certificate</p>
                <a href="/docs/pci-approval-letter.pdf" download onClick={(e) => e.stopPropagation()} className="text-xs text-primary font-medium mt-2 inline-flex items-center gap-1 hover:underline">
                  <Download className="w-3 h-3" /> Download PDF
                </a>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer group" onClick={() => setLightbox({ src: aicteCert, alt: "AKTU/AICTE Approval" })}>
              <img src={aicteCert} alt="AKTU Approval" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1">AKTU Approval Certificate</h3>
                <p className="text-xs text-muted-foreground">Click to view full certificate</p>
                <a href="/docs/aktu-approval-2025.pdf" download onClick={(e) => e.stopPropagation()} className="text-xs text-primary font-medium mt-2 inline-flex items-center gap-1 hover:underline">
                  <Download className="w-3 h-3" /> Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approval Details */}
      <section className="section-padding bg-secondary/30">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold mb-6">Approval & Affiliation Details</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "PCI Approval", value: "Approved for B.Pharm & D.Pharm", icon: <CheckCircle className="w-4 h-4" /> },
              { label: "AKTU Affiliation", value: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow", icon: <Award className="w-4 h-4" /> },
              { label: "BTEUP Affiliation", value: "Board of Technical Education, U.P.", icon: <Building className="w-4 h-4" /> },
              { label: "Trust", value: "L.P.M. Educational Trust (LPMET)", icon: <FileText className="w-4 h-4" /> },
              { label: "Programs Approved", value: "B.Pharm, D.Pharm", icon: <CheckCircle className="w-4 h-4" /> },
              { label: "Location", value: "Purnachhapar Bhatni, Deoria, U.P.", icon: <Users className="w-4 h-4" /> },
            ].map((item) => (
              <div key={item.label} className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 text-primary mb-1">{item.icon}<span className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span></div>
                <p className="font-medium text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Table
      <section className="section-padding">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold mb-6">Faculty Details Summary</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="compliance-table">
              <thead><tr><th>S.No</th><th>Name</th><th>Designation</th><th>Qualification</th><th>PCI Reg No.</th></tr></thead>
              <tbody>
                {facultySummary.map((f) => (
                  <tr key={f.sno}><td>{f.sno}</td><td className="font-medium">{f.name}</td><td>{f.designation}</td><td>{f.qualification}</td><td>{f.pciReg}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* Student Intake */}
      <section className="section-padding bg-secondary/30">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Users className="w-6 h-6 text-primary" /> Student Intake Details</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="compliance-table">
              <thead><tr><th>Program</th><th>Sanctioned Intake</th><th>Duration</th></tr></thead>
              <tbody>
                <tr><td>B.Pharm</td><td>60</td><td>4 Years</td></tr>
                <tr><td>D.Pharm</td><td>60</td><td>2 Years</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Anti-Ragging & Grievance */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="highlight-card border-l-4 border-l-destructive">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" /> Anti-Ragging Committee
              </h3>
              <p className="text-sm text-muted-foreground mb-4">The institution follows a zero-tolerance policy towards ragging as per UGC/AICTE/PCI directives.</p>
              <ul className="text-sm space-y-2">
                <li><strong>Anti-Ragging Helpline:</strong> 1800-180-5522</li>
              </ul>
              <a href="/docs/anti-ragging-policy.pdf" download className="text-xs text-primary font-medium mt-4 inline-flex items-center gap-1 hover:underline">
                <Download className="w-3 h-3" /> Download Anti-Ragging Policy
              </a>
            </div>
            <div className="highlight-card border-l-4 border-l-primary">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" /> Grievance Redressal Cell
              </h3>
              <p className="text-sm text-muted-foreground mb-4">A dedicated cell to address student and staff grievances promptly and transparently.</p>
              <ul className="text-sm space-y-2">
                <li><strong>Email:</strong> grievance@lpmpharmacy.edu.in</li>
                <li><strong>Response Time:</strong> Within 7 working days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Download */}
      <section className="section-padding bg-secondary/30">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold mb-6">Downloadable Documents</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(docLinks).map(([doc, href]) => (
              <a key={doc} href={href} download className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors group">
                <Download className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{doc}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PCI;
