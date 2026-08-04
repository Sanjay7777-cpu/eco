import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/hr-consultancy", label: "HR Consultancy" },
  { to: "/ecommerce", label: "Ecommerce" },
  { to: "/marketing", label: "Marketing" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-card border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo }
            alt="Five Global — Dubai international business solutions"
            width={44}
            height={44}
            className="h-11 w-11 object-contain rounded-lg"
          />
          <span className={`font-semibold tracking-tight text-lg hidden sm:inline transition-colors ${scrolled ? "text-ink" : "text-white"}`}>
            FIVE <span className="text-royal">GLOBAL</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium story-link transition-colors ${
                scrolled ? "text-ink hover:text-royal" : "text-white/90 hover:text-white"
              }`}
              activeProps={{ className: "text-royal" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold bg-gradient-royal text-white shadow-elegant hover:shadow-glow hover:scale-[1.03] transition-all"
          >
            Get Consultation
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-ink" : "text-white"}`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border shadow-elegant animate-fade-up">
          <div className="px-6 py-6 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-ink font-medium py-2"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-full px-5 py-3 font-semibold bg-gradient-royal text-white"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}