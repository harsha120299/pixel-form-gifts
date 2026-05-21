import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MessageCircle, Camera, Palette, Printer, Truck,
  Instagram, Facebook, Mail, MapPin, Star, ChevronDown, Menu, X, Sparkles,
} from "lucide-react";
import heroFig from "@/assets/hero-figurine.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WA = "https://wa.me/947XXXXXXXX?text=Hi%20I%20want%20to%20order%20a%20custom%203D%20figurine";

const nav = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight">
      <div className="relative w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
        <Sparkles className="w-5 h-5 text-primary-foreground" />
      </div>
      <span>Figura<span className="text-gradient">LK</span></span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-7xl px-4 transition-all ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all ${scrolled ? "glass shadow-card" : ""}`}>
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <a key={n.href} href={n.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg">
                {n.label}
              </a>
            ))}
          </nav>
          <a href={WA} target="_blank" rel="noopener"
             className="hidden lg:inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-glow transition-all hover:scale-105">
            <MessageCircle className="w-4 h-4" /> Order Now
          </a>
          <button className="lg:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden glass rounded-2xl mt-2 p-4 flex flex-col gap-1 animate-fade-up">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                 className="px-3 py-3 text-sm hover:bg-secondary rounded-lg">
                {n.label}
              </a>
            ))}
            <a href={WA} target="_blank" rel="noopener"
               className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold">
              <MessageCircle className="w-4 h-4" /> Order on WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-36 lg:pt-44 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-glow/15 blur-[140px] animate-glow" />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Handcrafted in Sri Lanka 🇱🇰
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Turn Your Photos Into{" "}
            <span className="text-gradient">Custom 3D Collectible</span>{" "}
            Figurines
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Personalized cartoon-style figurines, designed by hand and 3D printed with premium paint finishes. The perfect emotional gift.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href={WA} target="_blank" rel="noopener"
               className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-4 rounded-full font-semibold text-base hover:shadow-glow transition-all hover:scale-105">
              <MessageCircle className="w-5 h-5" /> Order via WhatsApp
            </a>
            <a href="#gallery"
               className="inline-flex items-center justify-center gap-2 glass px-7 py-4 rounded-full font-semibold text-base hover:bg-secondary transition-all">
              View Gallery
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="flex">{Array.from({length:5}).map((_,i)=>(<Star key={i} className="w-4 h-4 fill-primary text-primary"/>))}</div>
              <span>4.9 from 500+ orders</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-3xl rounded-full animate-glow" />
          <img src={heroFig} alt="Custom 3D figurine of a couple" width={520} height={520}
               className="relative w-full max-w-lg drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] animate-float" />
          <div className="absolute top-10 -left-2 glass rounded-2xl p-3 animate-float-slow hidden sm:block">
            <div className="text-xs text-muted-foreground">Hand-painted</div>
            <div className="font-display font-bold">Premium Finish</div>
          </div>
          <div className="absolute bottom-10 -right-2 glass rounded-2xl p-3 animate-float hidden sm:block" style={{animationDelay:"1s"}}>
            <div className="text-xs text-muted-foreground">Made in</div>
            <div className="font-display font-bold">🇱🇰 Sri Lanka</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: Camera, title: "Send Your Photos", desc: "Share clear front and side photos via WhatsApp." },
  { icon: Palette, title: "We Create Your Design", desc: "Our artists craft a custom cartoon-style 3D model." },
  { icon: Printer, title: "We 3D Print & Paint", desc: "Printed in detail and hand-painted with premium finish." },
  { icon: Truck, title: "Delivered To Your Door", desc: "Island-wide delivery, safely packed and ready to gift." },
];

function How() {
  return (
    <section id="how" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="How It Works" title="From photo to figurine in 4 steps" />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={i} className="group relative bg-gradient-card rounded-3xl p-6 border border-border hover:border-primary/40 transition-all hover:-translate-y-1 shadow-card">
              <div className="absolute top-4 right-5 text-6xl font-display font-bold text-primary/10">0{i+1}</div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-display font-bold text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const tiers = [
  { name: "Single Figurine", price: "8,000", features: ["16 cm tall", "Personalized design", "Hand-painted finish", "Display base"] },
  { name: "Couple Figurines", price: "12,000", features: ["Two characters", "Custom poses", "Shared scenic base", "Premium paint"], featured: true },
  { name: "Premium Display Edition", price: "20,000", features: ["Detailed sculpted base", "Optional LED display", "Ultra-premium finish", "Gift packaging"] },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Pricing" title="Pick your perfect figurine" />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name}
                 className={`relative rounded-3xl p-8 border transition-all hover:-translate-y-2 hover:shadow-glow
                   ${t.featured
                     ? "bg-gradient-card border-primary/50 shadow-glow"
                     : "bg-gradient-card border-border hover:border-primary/30"}`}>
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="font-display font-bold text-2xl">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">from</span>
                <span className="font-display font-bold text-5xl">Rs. {t.price}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary" /> {f}
                  </li>
                ))}
              </ul>
              <a href={WA} target="_blank" rel="noopener"
                 className={`mt-8 inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full font-semibold transition-all hover:scale-[1.02]
                   ${t.featured
                     ? "bg-gradient-primary text-primary-foreground hover:shadow-glow"
                     : "glass hover:bg-secondary"}`}>
                <MessageCircle className="w-4 h-4" /> Order on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: g1, alt: "Pixar-style figurine of a man", h: "row-span-2" },
  { src: g2, alt: "Anime style figurine", h: "" },
  { src: g3, alt: "Funko-inspired figurine", h: "row-span-2" },
  { src: g4, alt: "Family figurines", h: "" },
  { src: g5, alt: "Couple figurine", h: "row-span-2" },
  { src: g6, alt: "Premium LED base figurine", h: "" },
];

function Gallery() {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Gallery" title="A peek inside our workshop" />
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 auto-rows-[180px] md:auto-rows-[240px] gap-4">
          {gallery.map((g, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-3xl bg-card border border-border ${g.h}`}>
              <img src={g.src} alt={g.alt} loading="lazy"
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                {g.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { name: "Anushka P.", text: "The figurine of me and my husband looks just like us. Best anniversary gift ever!", img: "https://i.pravatar.cc/120?img=47" },
  { name: "Dilshan R.", text: "Quality blew me away — the paint finish is super premium. Worth every rupee.", img: "https://i.pravatar.cc/120?img=12" },
  { name: "Tharushi M.", text: "Ordered a family figurine for my parents. They literally cried. So emotional 🥹", img: "https://i.pravatar.cc/120?img=49" },
  { name: "Kavindu S.", text: "Anime style turned out incredible. Got so many compliments on it!", img: "https://i.pravatar.cc/120?img=32" },
];

function Reviews() {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Reviews" title="Loved by 500+ happy customers" />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gradient-card rounded-3xl p-6 border border-border hover:border-primary/40 transition-all hover:-translate-y-1 shadow-card">
              <div className="flex gap-0.5">
                {Array.from({length:5}).map((_,j)=>(<Star key={j} className="w-4 h-4 fill-primary text-primary"/>))}
              </div>
              <p className="mt-4 text-sm leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={r.img} alt={r.name} loading="lazy" width={40} height={40}
                     className="w-10 h-10 rounded-full border-2 border-primary/30" />
                <div className="font-semibold text-sm">{r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "How long does it take?", a: "Typically 10–14 working days from order confirmation to delivery, depending on detail and queue." },
  { q: "Can I customize clothes?", a: "Absolutely. You can choose outfits, accessories, poses and even hairstyles. Just share references on WhatsApp." },
  { q: "Do you deliver across Sri Lanka?", a: "Yes, island-wide delivery with secure packaging. International shipping is also available on request." },
  { q: "What photos should I send?", a: "Clear front-facing and side-profile photos with good lighting. The clearer the photo, the better the result." },
  { q: "Can I request anime style?", a: "Yes! We offer Pixar, anime, Funko and stylized cartoon looks. Just tell us your vibe." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 relative">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHead eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-gradient-card rounded-2xl border border-border overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="font-display font-semibold">{f.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Contact" title="Let's bring your figurine to life" />
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-card rounded-3xl p-8 border border-border shadow-card">
            <h3 className="font-display font-bold text-2xl">Get in touch</h3>
            <p className="mt-2 text-muted-foreground">WhatsApp is the fastest way to start your order.</p>
            <div className="mt-8 space-y-3">
              <a href={WA} target="_blank" rel="noopener"
                 className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener"
                 className="flex items-center gap-3 px-5 py-4 rounded-2xl glass hover:bg-secondary transition-all">
                <Instagram className="w-5 h-5 text-primary" /> @figuralk
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener"
                 className="flex items-center gap-3 px-5 py-4 rounded-2xl glass hover:bg-secondary transition-all">
                <Facebook className="w-5 h-5 text-primary" /> FiguraLK
              </a>
              <a href="mailto:hello@figura.lk"
                 className="flex items-center gap-3 px-5 py-4 rounded-2xl glass hover:bg-secondary transition-all">
                <Mail className="w-5 h-5 text-primary" /> hello@figura.lk
              </a>
              <div className="flex items-center gap-3 px-5 py-4 rounded-2xl glass">
                <MapPin className="w-5 h-5 text-primary" /> Colombo, Sri Lanka
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-card min-h-[400px] relative bg-secondary">
            <iframe
              title="FiguraLK location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=79.82%2C6.88%2C79.90%2C6.96&layer=mapnik"
              className="w-full h-full min-h-[400px] grayscale opacity-80"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo />
        <div className="flex items-center gap-3">
          <a href={WA} target="_blank" rel="noopener" className="w-10 h-10 rounded-full glass grid place-items-center hover:bg-secondary transition-all"><MessageCircle className="w-4 h-4" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener" className="w-10 h-10 rounded-full glass grid place-items-center hover:bg-secondary transition-all"><Instagram className="w-4 h-4" /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener" className="w-10 h-10 rounded-full glass grid place-items-center hover:bg-secondary transition-all"><Facebook className="w-4 h-4" /></a>
          <a href="mailto:hello@figura.lk" className="w-10 h-10 rounded-full glass grid place-items-center hover:bg-secondary transition-all"><Mail className="w-4 h-4" /></a>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} FiguraLK. Made with ❤️ in Sri Lanka.</p>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a href={WA} target="_blank" rel="noopener" aria-label="Order on WhatsApp"
       className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full grid place-items-center shadow-glow hover:scale-110 transition-transform"
       style={{ backgroundColor: "var(--whatsapp)" }}>
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: "var(--whatsapp)", opacity: 0.3 }} />
    </a>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-4">{eyebrow}</div>
      <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">{title}</h2>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen relative">
      <Nav />
      <Hero />
      <How />
      <Pricing />
      <Gallery />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWA />
    </main>
  );
}
