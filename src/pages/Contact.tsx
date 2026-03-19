import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (form.phone && !/^\d{10}$/.test(form.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    toast.success("Thank you! Your message has been sent successfully.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with L.P.M. College of Pharmacy for admissions, queries, or any information.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-card focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-card focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-card focus:outline-none focus:ring-2 focus:ring-ring" placeholder="10-digit mobile number" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message *</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-card focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Your message..." />
                </div>
                <button type="submit" className="btn-main flex items-center gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">Campus Address</p>
                    Purnachhapar Bhatni,<br />Deoria, Uttar Pradesh, India
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">+91 7355441911, 9559001600</p>
                    <p className="text-muted-foreground">Mon–Sat, 9:00 AM – 5:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">lpmcollegeofpharmacy@gmail.com</p>
                    <p className="text-muted-foreground">lpmcollegeofpharmacy@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14286.123456789!2d83.85!3d26.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993e0000000000%3A0x0!2sBhatni%2C%20Deoria!5e0!3m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="L.P.M. College of Pharmacy Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
