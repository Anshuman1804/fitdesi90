import { Link } from "react-router-dom";
import { MessageCircle, Instagram, Youtube } from "lucide-react";
import { COACH, waLink } from "@/lib/coach";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#0F3818] text-[#FBF9F6] mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#FF7235] flex items-center justify-center text-white font-display font-black text-lg">F</div>
            <span className="font-display font-black text-2xl">{COACH.brand}</span>
          </div>
          <p className="text-[#FBF9F6]/70 text-sm leading-relaxed max-w-sm">
            India's busy-professional friendly transformation coaching — built around your thali, your schedule, your goals.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-[#FF7235]">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#FF7235]">Home</Link></li>
            <li><Link to="/program" className="hover:text-[#FF7235]">90-Day Program</Link></li>
            <li><Link to="/funnel" className="hover:text-[#FF7235]">How it Works</Link></li>
            <li><Link to="/lead-form" className="hover:text-[#FF7235]">Free Plan</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-[#FF7235]">Reach Us</h4>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-whatsapp-cta"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#21B858] text-white font-bold rounded-full px-6 py-3 text-sm transition shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle size={16} strokeWidth={2.5} /> Chat on WhatsApp
          </a>
          <div className="flex gap-3 mt-5">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF7235] flex items-center justify-center transition" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF7235] flex items-center justify-center transition" aria-label="YouTube"><Youtube size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-[#FBF9F6]/60">
          <p>© {new Date().getFullYear()} {COACH.brand}. Made with ghee &amp; grit in India.</p>
          <p>Disclaimer: Results vary. Consult your doctor before starting any program.</p>
        </div>
      </div>
    </footer>
  );
}
