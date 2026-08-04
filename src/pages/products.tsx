import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Zap } from "lucide-react";
import { PageHero, Section } from "@/components/PageHero";
import productWristband from "@/assets/product-wristband.jpg";
import productCard from "@/assets/product-card.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Smart NFC Products — iTapBand & Digital Cards | Five Global" },
      { name: "description", content: "iTapBand, NFC business cards, smart wristbands, digital business cards, event bands and corporate smart solutions." },
      { property: "og:title", content: "iTapBand & Smart NFC Products — Five Global" },
      { property: "og:description", content: "Premium NFC products engineered in Dubai." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const products = [
    { name: "iTapBand", tag: "Flagship", desc: "The signature smart NFC wristband for modern professionals.", img: productWristband },
    { name: "NFC Business Cards", desc: "Premium metal and PVC tap-to-share cards.", img: productCard },
    { name: "Smart Tap Cards", desc: "Instantly programmable, endlessly reusable.", img: productCard },
    { name: "Smart Hand Bands", desc: "Wearable identity for teams and events.", img: productWristband },
    { name: "NFC Wrist Bands", desc: "Access control and payments for events.", img: productWristband },
    { name: "Event Bands", desc: "Custom-branded bands for conferences.", img: productWristband },
    { name: "Digital Business Cards", desc: "Fully digital, instantly shareable.", img: productCard },
    { name: "Smart Identity Cards", desc: "Corporate NFC IDs with directory sync.", img: productCard },
    { name: "QR Products", desc: "Static and dynamic QR for physical and digital.", img: productCard },
    { name: "NFC Accessories", desc: "Tags, stickers, keychains and add-ons.", img: productCard },
    { name: "Corporate Smart Solutions", desc: "Enterprise NFC ecosystems, end-to-end.", img: productWristband },
  ];
  return (
    <>
      <PageHero eyebrow="Our Products" title="The tap-first product suite" subtitle="Premium hardware and beautifully engineered digital experiences. Designed in Dubai. Trusted globally." />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.name} className="group rounded-3xl overflow-hidden bg-white border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {p.tag && <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-white/90 text-royal px-3 py-1 text-xs font-semibold"><Zap size={12} /> {p.tag}</span>}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal">Explore <ChevronRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}