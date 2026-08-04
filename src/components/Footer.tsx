import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-royal text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-sky-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo } alt="Five Global logo" width={48} height={48} className="h-12 w-12 object-contain rounded-lg bg-white/10 p-1" />
              <span className="text-xl font-semibold tracking-tight">FIVE <span className="text-sky-accent">GLOBAL</span></span>
            </div>
            <p className="mt-5 text-white/80 max-w-sm leading-relaxed">
              A Dubai-headquartered international business solutions company delivering HR consultancy, ecommerce, and digital marketing to enterprises worldwide.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/85">
              <p className="flex items-center gap-3"><MapPin size={16} className="text-sky-accent" /> Business Bay, Dubai, UAE</p>
              <p className="flex items-center gap-3"><Mail size={16} className="text-sky-accent" /> info@fiveglobal.ae</p>
              <p className="flex items-center gap-3"><Phone size={16} className="text-sky-accent" /> +971 4 000 0000</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-sky-accent">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li><Link to="/hr-consultancy" className="hover:text-white">HR Consultancy</Link></li>
              <li><Link to="/ecommerce" className="hover:text-white">Ecommerce Solutions</Link></li>
              <li><Link to="/marketing" className="hover:text-white">Digital Marketing</Link></li>
              <li><Link to="/products" className="hover:text-white">Smart Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-sky-accent">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-sky-accent">Newsletter</h4>
            <p className="mt-5 text-sm text-white/80">Global business insights, monthly.</p>
            <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 min-w-0 rounded-l-full px-4 py-2.5 text-sm text-ink bg-white/95 outline-none"
              />
              <button className="rounded-r-full px-4 py-2.5 text-sm font-semibold bg-sky-accent text-ink hover:brightness-110 transition">
                Join
              </button>
            </form>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>© {new Date().getFullYear()} Five Global. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/97140000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden><path d="M19.11 17.28c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.15-.19.29-.73.94-.9 1.13-.17.19-.33.22-.62.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38 0 1.4 1.02 2.75 1.16 2.94.15.19 2 3.06 4.85 4.29.68.29 1.21.46 1.62.59.68.22 1.29.19 1.78.12.54-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34zM16.03 5.33C10.15 5.33 5.36 10.11 5.36 16c0 1.94.51 3.77 1.4 5.35L5.33 26.67l5.45-1.43a10.6 10.6 0 0 0 5.25 1.34h.01c5.88 0 10.67-4.78 10.67-10.67s-4.79-10.66-10.68-10.58zm0 19.5c-1.61 0-3.19-.43-4.58-1.26l-.33-.19-3.24.85.86-3.16-.21-.32a8.83 8.83 0 0 1-1.36-4.75c0-4.89 3.98-8.87 8.88-8.87s8.88 3.98 8.87 8.88c0 4.89-3.98 8.87-8.89 8.83z"/></svg>
      </a>
    </footer>
  );
}