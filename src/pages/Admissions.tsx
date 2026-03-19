import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Download, FileText, ClipboardList, ChevronDown, GraduationCap, Calendar, Phone, HelpCircle } from "lucide-react";

const steps = [
  { title: "Get Application Form", desc: "Obtain the application form from the college office or download from website.", icon: <Download className="w-5 h-5" /> },
  { title: "Fill Application", desc: "Fill in the application form with accurate details and attach required documents.", icon: <FileText className="w-5 h-5" /> },
  { title: "Submit & Pay Fee", desc: "Submit the application along with the prescribed application fee.", icon: <ClipboardList className="w-5 h-5" /> },
  { title: "Attend Counselling", desc: "Attend the counselling/entrance exam as per the schedule announced.", icon: <Calendar className="w-5 h-5" /> },
  { title: "Document Verification", desc: "Complete document verification and fee payment upon selection.", icon: <CheckCircle className="w-5 h-5" /> },
  { title: "Get Admission!", desc: "Receive admission confirmation letter and join the program.", icon: <GraduationCap className="w-5 h-5" /> },
];

const documents = [
  "10th Mark Sheet & Certificate", "12th Mark Sheet & Certificate", "Transfer Certificate (TC)",
  "Migration Certificate", "Caste Certificate (if applicable)", "Domicile Certificate",
  "Entrance Exam Score Card", "Aadhar Card (photocopy)", "4 Passport Size Photographs", "Anti-Ragging Affidavit",
];

const faqs = [
  { q: "When do admissions for 2025-26 start?", a: "Admissions typically begin in June after the declaration of 12th board results. Keep checking our website and notice board for exact dates." },
  { q: "Is there any entrance exam?", a: "Admission to B.Pharm is through state-level or national-level entrance exams (UPCET/JEE). D.Pharm admissions may be based on merit." },
  { q: "What is the fee structure?", a: "Fee structure is as per AKTU/BTEUP/state government norms. Detailed fee breakup is available at the admission office and in the downloadable brochure." },
  { q: "Are scholarships available?", a: "Yes, government scholarships for SC/ST/OBC students and merit-based scholarships are available." },
  { q: "Is hostel accommodation available?", a: "Yes, separate hostel facilities are available for boys and girls with modern amenities." },
];

const Admissions = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Admissions</h1>
          <p>Join L.P.M. College of Pharmacy — a PCI-approved institution at Purnachhapar Bhatni, Deoria.</p>
        </div>
      </div>

      <section className="bg-primary text-primary-foreground py-8">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "60", label: "B.Pharm Seats" },
            { value: "60", label: "D.Pharm Seats" },
            { value: "AKTU", label: "B.Pharm Affiliation" },
            { value: "BTEUP", label: "D.Pharm Affiliation" },
          ].map((s) => (
            <div key={s.label}>
              <span className="text-3xl md:text-4xl font-bold">{s.value}</span>
              <p className="text-primary-foreground/70 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Eligibility Criteria</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="highlight-card border-l-4 border-l-primary">
              <h3 className="font-semibold text-lg text-primary mb-3">B.Pharm (AKTU)</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Passed 10+2 with PCB/PCM</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Minimum 50% aggregate marks</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Valid UPCET/JEE score</li>
              </ul>
            </div>
            <div className="highlight-card border-l-4 border-l-primary">
              <h3 className="font-semibold text-lg text-primary mb-3">D.Pharm (BTEUP)</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Passed 10+2 with PCB/PCM</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Minimum 45% aggregate marks</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> As per PCI/State norms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Admission Process</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 md:gap-6 items-start">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg">
                    {step.icon}
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5 flex-1 hover:-translate-y-0.5 transition-transform duration-200" style={{ boxShadow: "var(--shadow-card)" }}>
                    <h3 className="font-semibold text-primary mb-1">Step {i + 1}: {step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Required Documents</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {documents.map((doc, i) => (
              <div key={doc} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                <span className="text-sm">{doc}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/docs/academic-session-2025-26.pdf" download className="btn-main flex items-center gap-2">
              <Download className="w-4 h-4" /> Download Academic Session PDF
            </a>
            <a href="/docs/aktu-approval-2025.pdf" download className="btn-main flex items-center gap-2">
              <Download className="w-4 h-4" /> AKTU Approval Letter
            </a>
            <Link to="/contact" className="btn-outline-nav flex items-center gap-2">
              <ClipboardList className="w-4 h-4" /> Contact for Admission
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2"><HelpCircle className="w-7 h-7 text-primary" /> Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-medium text-sm">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground animate-fade-in">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-12">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Pharmacy Journey?</h2>
          <p className="text-primary-foreground/70 mb-6 max-w-lg mx-auto">Contact L.P.M. College of Pharmacy admission helpline for personalized guidance.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-medium px-6 py-3 rounded-lg hover:opacity-90 transition"><Phone className="w-4 h-4" /> Call: +91 7355441911</a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground font-medium px-6 py-3 rounded-lg hover:bg-primary-foreground hover:text-primary transition">Send Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admissions;
