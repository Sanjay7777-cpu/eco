import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, Store, Layers, Package, CreditCard, Boxes, RefreshCcw, Search, ArrowRight } from "lucide-react";
import { PageHero, Section, FeatureGrid } from "@/components/PageHero";

export const Route = createFileRoute("/ecommerce")({
  head: () => ({
    meta: [
      { title: "Ecommerce Development Dubai — Shopify, WooCommerce | Five Global" },
      { name: "description", content: "Shopify, WooCommerce, and marketplace development. Store optimization, payment integration, inventory and order automation." },
      { property: "og:title", content: "Ecommerce Solutions Dubai — Five Global" },
      { property: "og:description", content: "Engineered ecommerce for global scale." },
      { property: "og:url", content: "/ecommerce" },
    ],
    links: [{ rel: "canonical", href: "/ecommerce" }],
  }),
  component: EcomPage,
});

function EcomPage() {
  const services = [
    { icon: ShoppingBag, title: "Ecommerce Websites", text: "Custom-built stores optimized for conversion and speed." },
    { icon: Store, title: "Shopify Development", text: "Shopify Plus, custom themes, and headless architectures." },
    { icon: Layers, title: "WooCommerce", text: "Flexible WordPress ecommerce with enterprise extensions." },
    { icon: Package, title: "Marketplace Development", text: "Multi-vendor marketplaces engineered end-to-end." },
    { icon: Search, title: "Product Listing", text: "Catalog structuring, SEO copy, and rich media assets." },
    { icon: RefreshCcw, title: "Store Optimization", text: "CRO audits, Core Web Vitals, and revenue playbooks." },
    { icon: CreditCard, title: "Payment Integration", text: "Stripe, Tap, Telr, PayTabs, Apple Pay and more." },
    { icon: Boxes, title: "Inventory & Orders", text: "Automation across ERP, WMS, and fulfilment partners." },
  ];
  return (
    <>
      <PageHero eyebrow="Ecommerce Solutions" title="Storefronts engineered to convert" subtitle="Design, engineering and optimization for ambitious ecommerce brands across the region and worldwide." />
      <Section eyebrow="Capabilities" title="Everything your store needs to scale">
        <FeatureGrid items={services} />
      </Section>
      <Section tone="mist" eyebrow="Outcomes" title="Numbers our clients care about">
        <div className="grid md:grid-cols-4 gap-6">
          {[["350+", "Stores launched"], ["3.4x", "Avg. revenue growth"], ["+120%", "Conversion uplift"], ["45+", "Payment integrations"]].map(([n, l]) => (
            <div key={l} className="rounded-3xl bg-white p-7 shadow-card border border-border">
              <div className="text-4xl font-bold text-royal">{n}</div><p className="mt-2 text-ink font-medium">{l}</p>
            </div>
          ))}
        </div>
      </Section>
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto rounded-4xl bg-gradient-royal p-10 md:p-14 text-white shadow-elegant text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Launch. Optimize. Scale.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-royal-dark px-7 py-3.5 text-sm font-semibold">Start a project <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}