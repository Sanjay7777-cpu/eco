import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Briefcase, Globe2, GraduationCap, ShieldCheck, LineChart, UserPlus, Building2, ArrowRight } from "lucide-react";
import { PageHero, Section, FeatureGrid } from "@/components/PageHero";

export const Route = createFileRoute("/hr-consultancy")({
  head: () => ({
    meta: [
      { title: "HR Consultancy Dubai — Executive Search & Recruitment | Five Global" },
      { name: "description", content: "Executive hiring, overseas recruitment, workforce planning, and HR advisory for enterprises in Dubai, GCC and international markets." },
      { property: "og:title", content: "HR Consultancy Dubai — Five Global" },
      { property: "og:description", content: "Executive search, overseas recruitment and HR advisory from Dubai." },
      { property: "og:url", content: "/hr-consultancy" },
    ],
    links: [{ rel: "canonical", href: "/hr-consultancy" }],
  }),
  component: HRPage,
});

function HRPage() {
  const services = [
    { icon: Briefcase, title: "Executive Hiring", text: "C-suite and senior leadership search backed by rigorous vetting." },
    { icon: Globe2, title: "Overseas Recruitment", text: "Global talent mobilization from India, Pakistan, Philippines, Europe and beyond." },
    { icon: UserPlus, title: "Talent Acquisition", text: "End-to-end hiring for mid and specialist roles at scale." },
    { icon: Users, title: "Staffing Solutions", text: "Contract, project-based and outsourced workforce models." },
    { icon: Building2, title: "Employer Branding", text: "Careers pages, EVPs, and campaigns that attract A-players." },
    { icon: LineChart, title: "Workforce Planning", text: "Data-driven org design and headcount modeling." },
    { icon: ShieldCheck, title: "Visa Assistance", text: "UAE labour and immigration workflows, handled end-to-end." },
    { icon: GraduationCap, title: "HR Advisory", text: "Policy, culture, and compliance frameworks for growth." },
  ];
  return (
    <>
      <PageHero eyebrow="HR Consultancy" title="Build world-class teams from Dubai to anywhere" subtitle="From executive search to overseas recruitment and workforce strategy — an accountable partner for every hire that matters." />
      <Section eyebrow="Capabilities" title="Full-spectrum HR expertise">
        <FeatureGrid items={services} />
      </Section>
      <Section tone="mist" eyebrow="Why us" title="A search partner your board will thank you for">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["10+ years", "Regional recruiting expertise"],
            ["40+ countries", "Overseas talent networks"],
            ["1,200+", "Successful placements"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-3xl bg-white p-8 shadow-card border border-border">
              <div className="text-4xl font-bold text-royal">{n}</div>
              <p className="mt-2 text-ink font-medium">{l}</p>
            </div>
          ))}
        </div>
      </Section>
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto rounded-4xl bg-gradient-royal p-10 md:p-14 text-white shadow-elegant text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Talk to a recruitment strategist</h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">Free 30-minute consultation with a Dubai-based partner.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-royal-dark px-7 py-3.5 text-sm font-semibold hover:scale-[1.03] transition">Get Consultation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}