import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import productCard from "@/assets/product-card.jpg";
import productBand from "@/assets/product-wristband.jpg";
import dubai from "@/assets/dubai-skyline.jpg";
import cubes from "@/assets/hero-cubes.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Five Global Case Studies" },
      { name: "description", content: "Selected work across HR, ecommerce, marketing and smart products for enterprises in Dubai and beyond." },
      { property: "og:title", content: "Portfolio — Five Global" },
      { property: "og:description", content: "Selected case studies and client work." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const categories = ["All", "HR", "Marketing", "Ecommerce", "Products", "Corporate"] as const;
type Cat = typeof categories[number];

const items: { title: string; cat: Cat; img: string; text: string }[] = [
  { title: "Regional Retail Group — Executive Search", cat: "HR", img: dubai, text: "14 executive placements in 6 months." },
  { title: "GCC D2C Brand — Shopify Plus", cat: "Ecommerce", img: productCard, text: "3.4x revenue growth in year one." },
  { title: "SaaS Company — Performance Marketing", cat: "Marketing", img: cubes, text: "-38% CAC, 2.1x pipeline." },
  { title: "iTapBand Launch — Product & GTM", cat: "Products", img: productBand, text: "Multi-market launch across GCC." },
  { title: "Enterprise Rebrand", cat: "Corporate", img: dubai, text: "Full identity and website relaunch." },
  { title: "Marketplace Build", cat: "Ecommerce", img: productCard, text: "Multi-vendor marketplace in 12 weeks." },
  { title: "Overseas Recruitment Program", cat: "HR", img: cubes, text: "220 hires across 6 countries." },
  { title: "Content & SEO Engine", cat: "Marketing", img: productBand, text: "5x organic traffic in 9 months." },
];

function PortfolioPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Work that moves the needle" subtitle="Selected engagements across HR, ecommerce, marketing and products." />
      <Section>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${active === c ? "bg-gradient-royal text-white shadow-elegant" : "bg-mist text-ink hover:bg-white border border-border"}`}>{c}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((it) => (
            <article key={it.title} className="group rounded-3xl overflow-hidden bg-white border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="aspect-[4/3] overflow-hidden"><img src={it.img} alt={it.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-royal font-semibold">{it.cat}</span>
                <h3 className="mt-2 text-lg font-semibold text-ink">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}