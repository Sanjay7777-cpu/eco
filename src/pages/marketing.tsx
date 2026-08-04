import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Target, Share2, PenTool, Mail, BarChart3, Sparkles, Users2, TrendingUp, ArrowRight } from "lucide-react";
import { PageHero, Section, FeatureGrid } from "@/components/PageHero";

export const Route = createFileRoute("/marketing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Agency Dubai — SEO, Ads, Social | Five Global" },
      { name: "description", content: "SEO, Google Ads, Meta Ads, social media, branding, content, email and performance marketing built for measurable ROI." },
      { property: "og:title", content: "Digital Marketing Dubai — Five Global" },
      { property: "og:description", content: "Performance marketing that pays back — from Dubai to global markets." },
      { property: "og:url", content: "/marketing" },
    ],
    links: [{ rel: "canonical", href: "/marketing" }],
  }),
  component: MarketingPage,
});

function MarketingPage() {
  const services = [
    { icon: Search, title: "SEO", text: "Technical, on-page and content SEO tuned for competitive keywords." },
    { icon: Target, title: "Google Ads", text: "Search, Performance Max, and YouTube campaigns at scale." },
    { icon: Share2, title: "Meta Ads", text: "Facebook and Instagram advertising engineered for ROAS." },
    { icon: Users2, title: "Social Media Marketing", text: "Organic strategy, content and community management." },
    { icon: Sparkles, title: "Branding", text: "Identity systems, positioning and messaging frameworks." },
    { icon: PenTool, title: "Content Marketing", text: "Editorial, video and thought leadership programs." },
    { icon: Mail, title: "Email Marketing", text: "Lifecycle automation, newsletters and CRM flows." },
    { icon: TrendingUp, title: "Performance Marketing", text: "Full-funnel media buying with clean attribution." },
    { icon: BarChart3, title: "Analytics", text: "GA4, dashboards and revenue reporting done right." },
  ];
  return (
    <>
      <PageHero eyebrow="Digital Marketing" title="Performance marketing that pays back" subtitle="Sharp strategy, disciplined execution, and rigorous measurement — from awareness to closed-won revenue." />
      <Section eyebrow="Capabilities" title="A modern marketing engine, in one team">
        <FeatureGrid items={services} />
      </Section>
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto rounded-4xl bg-gradient-royal p-10 md:p-14 text-white shadow-elegant text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Own your growth channels</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-royal-dark px-7 py-3.5 text-sm font-semibold">Book a growth audit <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}