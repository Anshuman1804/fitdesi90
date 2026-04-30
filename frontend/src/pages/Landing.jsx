import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Flame,
  Clock,
  Salad,
  Utensils,
  Dumbbell,
  CalendarCheck,
  Quote,
  Star,
  Gift,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { waLink } from "@/lib/coach";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" } }),
};

const PROBLEMS = [
  { icon: Flame, title: "Belly fat that won't budge", body: "You've cut rice, skipped roti, even tried keto — par pet waisa ka waisa hai." },
  { icon: Clock, title: "Zero gym time", body: "Between meetings, traffic and family, where's the 90-minute gym slot? Ghar pe kya karein?" },
  { icon: Salad, title: "Confusing diet advice", body: "Instagram says one thing, mummy says another, dietician 5000 charges. Phir bhi confusion." },
];

const SOLUTIONS = [
  {
    icon: Utensils,
    title: "Indian Diet, Customized",
    body: "Roti, dal, sabzi, dahi — your real food, with portion control that actually fits Indian kitchens.",
    img: "https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg",
  },
  {
    icon: Dumbbell,
    title: "20-Minute Home Workouts",
    body: "No gym, no equipment — just bodyweight routines designed for busy professionals at home.",
    img: "https://images.pexels.com/photos/11800270/pexels-photo-11800270.jpeg",
  },
  {
    icon: CalendarCheck,
    title: "Weekly WhatsApp Check-ins",
    body: "Real accountability. Real coach. No app to install. Just message and we course-correct.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "HR Manager, Bengaluru",
    quote: "Lost 8kg in 11 weeks while eating roti and ghee daily. Coach Arjun's plan actually fit my Indian kitchen. Best part — no supplements.",
    rating: 5,
    img: "https://images.pexels.com/photos/30076938/pexels-photo-30076938.jpeg",
    result: "−8 kg / 11 weeks",
  },
  {
    name: "Rahul Verma",
    role: "Software Engineer, Pune",
    quote: "I work 11 hours a day. Never thought I'd transform without gym. 20-min home workouts and weekly check-ins changed it all. Down 12 kg.",
    rating: 5,
    img: "https://images.pexels.com/photos/28945957/pexels-photo-28945957.jpeg",
    result: "−12 kg / 16 weeks",
  },
];

export default function Landing() {
  return (
    <main data-testid="landing-page">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-20 md:pb-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}
              className="inline-flex items-center gap-2 bg-[#0F3818] text-[#FBF9F6] rounded-full px-4 py-2 text-xs font-semibold tracking-wide">
              <Flame size={14} className="text-[#FF7235]" /> 90-DAY TRANSFORMATION COACHING
            </motion.div>
            <motion.h1
              initial="hidden" animate="show" variants={fadeUp} custom={1}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-[#0F3818] mt-5 leading-[0.95] tracking-tight"
            >
              Transform Your Body in <span className="text-[#FF7235]">90 Days</span> — Without Starving or Spending Hours in the Gym.
            </motion.h1>
            <motion.p initial="hidden" animate="show" variants={fadeUp} custom={2}
              className="mt-6 text-lg md:text-xl text-[#4A5D4E] max-w-xl leading-relaxed">
              Personalized <span className="font-semibold text-[#0F3818]">Indian Diet + Home Workout</span> built for busy professionals who want real results — not gym selfies.
            </motion.p>

            <motion.ul initial="hidden" animate="show" variants={fadeUp} custom={3} className="mt-7 grid sm:grid-cols-3 gap-3 max-w-2xl">
              {["No supplements, no shakes", "Home workouts only", "Works with hectic schedules"].map((b) => (
                <li key={b} className="flex items-start gap-2 bg-white/70 border border-[#0F3818]/10 rounded-2xl px-4 py-3">
                  <CheckCircle2 className="text-[#FF7235] shrink-0 mt-0.5" size={18} strokeWidth={2.5} />
                  <span className="text-sm font-semibold text-[#0F3818]">{b}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={4} className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/lead-form"
                data-testid="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#21B858] text-white font-bold rounded-full px-7 py-4 text-base md:text-lg transition-all shadow-lg shadow-[#25D366]/30 hover:scale-[1.02]"
              >
                <MessageCircle size={20} strokeWidth={2.5} /> Get Your Free Fat Loss Plan on WhatsApp
              </Link>
              <Link
                to="/program"
                data-testid="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#0F3818] text-[#0F3818] font-bold rounded-full px-6 py-4 text-base hover:bg-[#0F3818] hover:text-[#FBF9F6] transition"
              >
                See 90-Day Program <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={5} className="mt-7 flex items-center gap-3 text-sm text-[#4A5D4E]">
              <div className="flex -space-x-2">
                {[
                  "https://images.pexels.com/photos/30076938/pexels-photo-30076938.jpeg",
                  "https://images.pexels.com/photos/28945957/pexels-photo-28945957.jpeg",
                ].map((u, i) => (
                  <img key={i} src={u} alt="" className="w-8 h-8 rounded-full border-2 border-[#FBF9F6] object-cover" />
                ))}
              </div>
              <span><span className="font-bold text-[#0F3818]">340+ desis</span> transformed in last 12 months</span>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-[#0F3818]/20">
              <img src="https://images.pexels.com/photos/5221029/pexels-photo-5221029.jpeg" alt="Transform your body" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3818]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF7235] flex items-center justify-center text-white font-display font-black text-xl">90</div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#4A5D4E] font-semibold">Average Result</p>
                  <p className="font-display font-black text-[#0F3818] text-lg leading-tight">8–14 kg fat loss in 90 days</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#FF7235] text-white rounded-2xl px-4 py-2 font-bold shadow-lg rotate-3">100% Indian Food</div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-[#F3EFE9] border-y border-[#0F3818]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7235] mb-3">The struggle is real</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0F3818] leading-tight">
              Tried everything. Still no results?
            </h2>
            <p className="mt-4 text-lg text-[#4A5D4E]">You're not alone. 9 out of 10 working Indians face these exact problems:</p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {PROBLEMS.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i}
                data-testid={`problem-card-${i}`}
                className="bg-white p-7 rounded-3xl border border-[#0F3818]/10 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF7235]/15 flex items-center justify-center">
                  <p.icon className="text-[#FF7235]" size={22} strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-bold text-xl text-[#0F3818] mt-5">{p.title}</h3>
                <p className="mt-3 text-[#4A5D4E] leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7235] mb-3">The {`{FitDesi}`} system</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0F3818] leading-tight">
              A coaching system built for <span className="text-[#FF7235]">Indian lives.</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-[#4A5D4E] text-lg">No protein powders, no boring chicken-broccoli. Real food, real coaching, real results — straight to your WhatsApp.</p>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i}
              data-testid={`solution-card-${i}`}
              className={`${i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : "md:col-span-12"} bg-[#F3EFE9] rounded-3xl p-8 border border-[#0F3818]/10 hover:-translate-y-1 transition-all overflow-hidden relative`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F3818] text-[#FBF9F6] flex items-center justify-center shrink-0">
                  <s.icon size={22} strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-2xl text-[#0F3818]">{s.title}</h3>
                  <p className="mt-2 text-[#4A5D4E] leading-relaxed">{s.body}</p>
                </div>
              </div>
              {s.img && (
                <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/9]">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-[#0F3818] text-[#FBF9F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7235] mb-3">Real desis, real results</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">Transformations that speak.</h2>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex">{Array(5).fill(0).map((_, i) => <Star key={i} size={18} fill="#FF7235" stroke="#FF7235" />)}</div>
              <span className="font-semibold">4.9/5 from 220+ clients</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i}
                data-testid={`testimonial-${i}`}
                className="bg-white text-[#0F3818] rounded-3xl p-8 relative overflow-hidden"
              >
                <Quote className="absolute top-6 right-6 text-[#FF7235]/20" size={64} />
                <div className="flex">{Array(t.rating).fill(0).map((_, j) => <Star key={j} size={16} fill="#FF7235" stroke="#FF7235" />)}</div>
                <p className="mt-4 text-lg leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#FF7235]" />
                  <div className="flex-1">
                    <p className="font-display font-bold text-lg">{t.name}</p>
                    <p className="text-sm text-[#4A5D4E]">{t.role}</p>
                  </div>
                  <div className="bg-[#FF7235] text-white rounded-2xl px-4 py-2 font-display font-black text-sm">
                    {t.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section id="lead-magnet" className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          data-testid="lead-magnet-card"
          className="relative bg-gradient-to-br from-[#FF7235] to-[#FF8A55] text-white rounded-[2.5rem] p-10 md:p-16 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#0F3818]/30 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider">
                <Gift size={14} /> 100% Free — No Credit Card
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mt-5 leading-[0.95]">
                Free 7-Day Fat Loss Plan, delivered on WhatsApp.
              </h2>
              <ul className="mt-6 space-y-3 text-lg">
                {["Personalized Indian Diet Chart (veg + non-veg)", "20-Minute Home Workout Guide (PDF)", "Daily WhatsApp tips for 7 days"].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="text-white shrink-0 mt-1" size={20} strokeWidth={2.5} /> <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/lead-form"
                data-testid="lead-magnet-cta"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#21B858] text-white font-bold rounded-full px-7 py-4 text-base md:text-lg transition shadow-lg hover:scale-[1.02]"
              >
                <MessageCircle size={20} /> Send Me My Free Plan
              </Link>
            </div>
            <div className="md:col-span-5">
              <div className="bg-white text-[#0F3818] rounded-3xl p-6 shadow-2xl rotate-2">
                <p className="text-xs uppercase tracking-wider font-bold text-[#FF7235]">Day 1 Sample</p>
                <h4 className="font-display font-black text-xl mt-2">Veg Indian Plan • 1500 kcal</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex justify-between border-b border-[#0F3818]/10 pb-2"><span>🌅 Breakfast</span><span className="font-semibold">Poha + 5 almonds</span></li>
                  <li className="flex justify-between border-b border-[#0F3818]/10 pb-2"><span>☀️ Lunch</span><span className="font-semibold">2 roti + dal + sabzi</span></li>
                  <li className="flex justify-between border-b border-[#0F3818]/10 pb-2"><span>🌇 Snack</span><span className="font-semibold">Roasted chana</span></li>
                  <li className="flex justify-between"><span>🌙 Dinner</span><span className="font-semibold">Khichdi + curd</span></li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="bg-[#0F3818] text-[#FBF9F6] rounded-[2.5rem] p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-black leading-tight">
            Aaj se shuru karo. Apni body ko shukriya kahega.
          </h2>
          <p className="mt-4 text-[#FBF9F6]/70 text-lg max-w-xl mx-auto">
            Free plan in 60 seconds. No commitment, no spam. Just your transformation roadmap.
          </p>
          <a
            href={waLink("Hi Coach, I want my free 7-day fat loss plan")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-cta-whatsapp"
            className="mt-8 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#21B858] text-white font-bold rounded-full px-7 py-4 text-base md:text-lg transition shadow-xl shadow-[#25D366]/40 hover:scale-[1.02]"
          >
            <MessageCircle size={20} /> Get Your Free Fat Loss Plan
          </a>
        </div>
      </section>
    </main>
  );
}
