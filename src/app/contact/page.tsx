"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3.5 rounded-xl border ${
    hasError ? "border-red-400 bg-red-50/30" : "border-gray-200 bg-gray-50/50"
  } focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green focus:bg-white transition-all duration-300 text-sm`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "4ff70304-12b4-4dc9-8f73-b6f548cba76f",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Loop Fuels Website",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrors({ form: "Something went wrong. Please try again." });
      }
    } catch {
      setErrors({ form: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero
        badge="Get in Touch"
        title="Contact Us"
        subtitle="Have questions about our SAF technology, partnership opportunities, or investment? We'd love to hear from you."
      />

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div className="animate-on-scroll slide-left">
            {submitted ? (
              <div className="text-center py-20 px-8 rounded-3xl bg-brand-light/50 border border-green-100/50">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-brand-green flex items-center justify-center shadow-lg shadow-brand-green/20">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 12 2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3 tracking-tight">Message Sent!</h3>
                <p className="text-gray-500 leading-relaxed">
                  Thank you for reaching out. Our team will get back to you within
                  24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-brand-dark mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass(!!errors.name)}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-brand-dark mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass(!!errors.email)}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-brand-dark mb-2 uppercase tracking-wider">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={inputClass(!!errors.subject)}
                  >
                    <option value="">Select a topic</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="investment">Investment Inquiry</option>
                    <option value="technology">Technology Question</option>
                    <option value="media">Media & Press</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-1.5">{errors.subject}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-brand-dark mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClass(!!errors.message)} resize-none`}
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
                </div>
                {errors.form && <p className="text-red-500 text-sm text-center">{errors.form}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-animate w-full inline-flex items-center justify-center gap-2 bg-brand-green text-white py-4 rounded-xl font-semibold hover:bg-green-600 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <svg className="btn-arrow w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="animate-on-scroll slide-right space-y-8">
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-6 tracking-tight">Get In Touch</h3>
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    title: "Email",
                    lines: ["loopfuels@gmail.com"],
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    ),
                    title: "Phone",
                    lines: ["+91 9075346665"],
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-brand-green/5 border border-brand-green/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-brand-green/10 group-hover:scale-105">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-dark mb-0.5">{item.title}</p>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-sm text-gray-500">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
