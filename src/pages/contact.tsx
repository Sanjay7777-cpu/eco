import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Mail, MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Five Global — Dubai HQ" },
      { name: "description", content: "Get in touch with Five Global. Book a consultation with our Dubai team for HR, ecommerce, marketing and smart products." },
      { property: "og:title", content: "Contact Five Global — Dubai" },
      { property: "og:description", content: "Book a free consultation with our Dubai team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your next move" subtitle="Reach out for a free consultation. Our team responds within one business day." />
      <Section>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <ContactRow icon={MapPin} title="Dubai Headquarters" text="Business Bay, Dubai, UAE" />
            <ContactRow icon={Mail} title="Email" text="info@fiveglobal.ae" />
            <ContactRow icon={Phone} title="Phone" text="+971 4 000 0000" />
            <ContactRow icon={MessageCircle} title="WhatsApp" text="+971 50 000 0000" />
            <div className="rounded-3xl overflow-hidden border border-border shadow-card">
              <iframe title="Dubai map" src="https://www.google.com/maps?q=Business%20Bay%20Dubai&output=embed" className="w-full h-64 border-0" loading="lazy" />
            </div>
          </div>
          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl bg-white border border-border p-8 shadow-card space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name"><input required className="fg-input" placeholder="Your name" /></Field>
                <Field label="Email"><input required type="email" className="fg-input" placeholder="you@company.com" /></Field>
                <Field label="Company"><input className="fg-input" placeholder="Company name" /></Field>
                <Field label="Phone"><input className="fg-input" placeholder="+971 ..." /></Field>
              </div>
              <Field label="Service of interest">
                <select className="fg-input">
                  <option>HR Consultancy</option>
                  <option>Ecommerce Solutions</option>
                  <option>Digital Marketing</option>
                  <option>Smart Products (iTapBand)</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="How can we help?">
                <textarea rows={5} className="fg-input resize-none" placeholder="Tell us about your project" />
              </Field>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-royal text-white px-7 py-3.5 text-sm font-semibold shadow-elegant hover:shadow-glow hover:scale-[1.02] transition">
                Send Message <ArrowRight size={16} />
              </button>
              {sent && <p className="text-sm text-royal">Thanks — we'll be in touch shortly.</p>}
            </form>
          </div>
        </div>
      </Section>
      <style>{`
        .fg-input { width:100%; border:1px solid var(--color-border); border-radius: 12px; padding: 10px 14px; font-size: 14px; background: white; color: var(--color-ink); outline: none; transition: border-color .2s, box-shadow .2s; }
        .fg-input:focus { border-color: var(--color-royal); box-shadow: 0 0 0 4px color-mix(in oklab, var(--color-royal) 15%, transparent); }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function ContactRow({ icon: Icon, title, text }: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4 rounded-3xl bg-white border border-border p-5 shadow-card">
      <div className="h-11 w-11 rounded-xl bg-gradient-royal grid place-items-center text-white shrink-0"><Icon size={20} /></div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="text-ink font-semibold mt-0.5">{text}</div>
      </div>
    </div>
  );
}