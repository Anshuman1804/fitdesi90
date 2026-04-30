import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { COACH, waLink } from "@/lib/coach";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Program", to: "/program" },
  { label: "Funnel", to: "/funnel" },
  { label: "Admin", to: "/admin" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 bg-[#FBF9F6]/85 backdrop-blur-md border-b border-[#0F3818]/10"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        <Link to="/" data-testid="brand-link" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-[#FF7235] flex items-center justify-center text-white font-display font-black text-lg">F</div>
          <span className="font-display font-black text-xl text-[#0F3818]">{COACH.brand}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.label.toLowerCase()}`}
              className={`text-sm font-semibold transition-colors ${
                pathname === n.to ? "text-[#FF7235]" : "text-[#0F3818] hover:text-[#FF7235]"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-whatsapp-cta"
            className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#21B858] text-white font-bold rounded-full px-5 py-2.5 text-sm transition-all shadow-md shadow-[#25D366]/30 hover:scale-[1.02]"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            Get Free Plan
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-[#0F3818]"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#0F3818]/10 bg-[#FBF9F6]">
          <div className="px-5 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                className="text-base font-semibold text-[#0F3818] py-2"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-whatsapp-cta"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold rounded-full px-5 py-3 text-sm"
            >
              <MessageCircle size={16} /> Get Free Plan on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
