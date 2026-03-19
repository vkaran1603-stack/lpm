import { ExternalLink } from "lucide-react";

const notifications = [
  { text: "B.Pharm Semester VII Results Declared", link: "/docs/sif-document.pdf", isNew: true },
  { text: "Admissions Open 2025-26 — Apply Now", link: "/admissions", isNew: true },
  { text: "AKTU Approval Letter 2025 Available", link: "/docs/aktu-approval-2025.pdf", isNew: true },
  { text: "BTEUP Approval Letter 2025 Available", link: "/docs/bteup-approval-2025.pdf", isNew: true },
  { text: "Anti-Ragging Affidavit Submission Deadline Extended", link: "/docs/anti-ragging-policy.pdf", isNew: false },
  
];

const importantLinks = [
 
 
  { text: "AKTU Approval Letter Download", link: "/docs/aktu-approval-2025.pdf", isNew: true },
  { text: "PCI Approval Status", link: "/docs/pci-approval-letter.pdf", isNew: false },
  { text: "BTEUP Approval Letter", link: "/docs/bteup-approval-2025.pdf", isNew: false },
];

const NotificationBar = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-border rounded-xl overflow-hidden">
            <h3 className="text-center font-bold text-lg py-3 border-b border-border bg-secondary/50 tracking-wide uppercase">
              Notifications
            </h3>
            <div className="h-64 overflow-hidden relative">
              <div className="animate-marquee-vertical">
                {[...notifications, ...notifications].map((n, i) => (
                  <a
                    key={i}
                    href={n.link}
                    download={n.link.endsWith('.pdf') ? true : undefined}
                    target={n.link.startsWith('http') ? '_blank' : undefined}
                    className="flex items-start gap-2 px-4 py-3 text-sm hover:bg-secondary/30 transition-colors border-b border-border/50 text-destructive font-medium"
                  >
                    <span className="mt-0.5">☑️</span>
                    <span>{n.text}</span>
                    {n.isNew && (
                      <span className="ml-1 bg-destructive text-destructive-foreground text-[10px] px-1.5 py-0.5 rounded font-bold flex-shrink-0">
                        new
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-border rounded-xl overflow-hidden">
            <h3 className="text-center font-bold text-lg py-3 border-b border-border bg-secondary/50 tracking-wide uppercase">
              Important Links
            </h3>
            <div className="h-64 overflow-hidden relative">
              <div className="animate-marquee-vertical" style={{ animationDelay: "2s" }}>
                {[...importantLinks, ...importantLinks].map((l, i) => (
                  <a
                    key={i}
                    href={l.link}
                    download={l.link.endsWith('.pdf') ? true : undefined}
                    target={l.link.startsWith('http') ? '_blank' : undefined}
                    rel={l.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-2 px-4 py-3 text-sm hover:bg-secondary/30 transition-colors border-b border-border/50 text-destructive font-medium"
                  >
                    <span className="mt-0.5">☑️</span>
                    <span>{l.text}</span>
                    {l.isNew && (
                      <span className="ml-1 bg-destructive text-destructive-foreground text-[10px] px-1.5 py-0.5 rounded font-bold flex-shrink-0">
                        new
                      </span>
                    )}
                    {l.link.startsWith('http') && <ExternalLink className="w-3 h-3 mt-1 flex-shrink-0" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationBar;
