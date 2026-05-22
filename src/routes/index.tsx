import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  MessageCircle, Camera, Palette, Printer, Truck,
  Instagram, Facebook, Mail, MapPin, Star, ChevronDown, Menu, X, Sparkles, Lightbulb, Frame, Boxes, Heart,
  UploadCloud, Image as ImageIcon, FileText, CheckCircle2, AlertTriangle, Loader2
} from "lucide-react";
import heroFig from "@/assets/hero-figurine.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import catAnime from "@/assets/cat-anime.jpg";
import catCartoon from "@/assets/cat-cartoon.jpg";
import catLightbox from "@/assets/cat-lightbox.jpg";
import catShadowbox from "@/assets/cat-shadowbox.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "";
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "";

const WA = "https://wa.me/94766065801?text=Hi%20I%20want%20to%20order%20a%20custom%203D%20figurine";
const waFor = (product: string) =>
  `https://wa.me/94766065801?text=${encodeURIComponent(`Hi! I'd like to order: ${product}`)}`;

const waForWithPhotos = (product: string, frontUrl: string | null, sideUrl: string | null, notes: string) => {
  let message = `Hi! I'd like to order a customized *${product}*.\n\n`;
  if (frontUrl) message += `📸 *Front Photo:* ${frontUrl}\n`;
  if (sideUrl) message += `📸 *Side Photo:* ${sideUrl}\n`;
  if (notes.trim()) message += `📝 *Custom Notes:* ${notes}\n`;
  return `https://wa.me/94766065801?text=${encodeURIComponent(message)}`;
};

const nav = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how" },
  { label: "Products", href: "#products" },
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
              <div className="flex">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="w-4 h-4 fill-primary text-primary" />))}</div>
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
          <div className="absolute bottom-10 -right-2 glass rounded-2xl p-3 animate-float hidden sm:block" style={{ animationDelay: "1s" }}>
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
              <div className="absolute top-4 right-5 text-6xl font-display font-bold text-primary/10">0{i + 1}</div>
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

type Category = "all" | "cartoon" | "anime" | "lightbox" | "shadowbox";

const categories: { id: Category; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "all", label: "All Products", icon: Boxes },
  { id: "cartoon", label: "Cartoon Figures", icon: Heart },
  { id: "anime", label: "Anime Figures", icon: Sparkles },
  { id: "lightbox", label: "Light Boxes", icon: Lightbulb },
];

type Product = {
  id: string;
  name: string;
  category: Exclude<Category, "all">;
  price: string;
  img: string;
  tag?: string;
  features: string[];
};

const products: Product[] = [
  {
    id: "c1", name: "Single Cartoon Figurine", category: "cartoon", price: "8,000", img: catCartoon, tag: "Bestseller",
    features: ["Pixar-style cartoon", "16 cm tall", "Hand-painted", "Display base"]
  },
  {
    id: "c2", name: "Couple Cartoon Figurines", category: "cartoon", price: "12,000", img: g5,
    features: ["Two characters", "Custom poses", "Shared scenic base"]
  },
  {
    id: "c3", name: "Family Cartoon Set", category: "cartoon", price: "18,000", img: g4,
    features: ["3+ characters", "Group composition", "Premium finish"]
  },
  {
    id: "a1", name: "Anime Action Figure", category: "anime", price: "10,000", img: catAnime, tag: "New",
    features: ["Dynamic anime pose", "Vibrant paint", "Detailed accessories"]
  },
  {
    id: "a2", name: "Anime Character Bust", category: "anime", price: "7,500", img: g2,
    features: ["Head & shoulders", "Ultra-detailed hair", "Display plinth"]
  },
  {
    id: "l1", name: "Personalized LED Light Box", category: "lightbox", price: "5,500", img: catLightbox,
    features: ["Acrylic 3D engraving", "Wooden LED base", "USB powered"]
  },
];

function Products({ onSelectProduct }: { onSelectProduct: (product: Product) => void }) {
  const [active, setActive] = useState<Category>("all");
  const list = active === "all" ? products : products.filter((p) => p.category === active);
  return (
    <section id="products" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Products" title="Explore our full collection" />
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          From cartoon and anime figurines to LED light boxes and shadow boxes — every piece is handcrafted to order.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => {
            const Icon = c.icon;
            const isActive = active === c.id;
            return (
              <button key={c.id} onClick={() => setActive(c.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all
                  ${isActive
                    ? "bg-gradient-primary text-primary-foreground shadow-glow scale-105"
                    : "glass text-muted-foreground hover:text-foreground hover:bg-secondary"}`}>
                <Icon className="w-4 h-4" /> {c.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <article key={p.id}
              className="group relative bg-gradient-card rounded-3xl border border-border overflow-hidden shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all">
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {p.tag && (
                  <span className="absolute top-3 left-3 bg-gradient-primary text-primary-foreground text-[11px] font-bold px-3 py-1 rounded-full shadow-glow">
                    {p.tag}
                  </span>
                )}
                <span className="absolute top-3 right-3 glass text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  {categories.find((c) => c.id === p.category)?.label.replace(" Figures", "").replace(" Boxes", "")}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-xs text-muted-foreground">from</span>
                  <span className="font-display font-bold text-2xl">Rs. {p.price}</span>
                </div>
                <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => onSelectProduct(p)}
                  className="mt-5 inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full text-sm font-semibold bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all hover:scale-[1.02] cursor-pointer">
                  {/* <MessageCircle className="w-4 h-4" /> Order on WhatsApp */}
                  View All
                </button>
              </div>
            </article>
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">No products in this category yet.</p>
        )}
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

const DEFAULT_REVIEWS = [
  { name: "Anushka P.", rating: 5, text: "The figurine of me and my husband looks just like us. Best anniversary gift ever!", img: "https://i.pravatar.cc/120?img=47" },
  { name: "Dilshan R.", rating: 5, text: "Quality blew me away — the paint finish is super premium. Worth every rupee.", img: "https://i.pravatar.cc/120?img=12" },
  { name: "Tharushi M.", rating: 5, text: "Ordered a family figurine for my parents. They literally cried. So emotional 🥹", img: "https://i.pravatar.cc/120?img=49" },
  { name: "Kavindu S.", rating: 5, text: "Anime style turned out incredible. Got so many compliments on it!", img: "https://i.pravatar.cc/120?img=32" },
];

function Reviews() {
  const [reviewsList, setReviewsList] = useState(DEFAULT_REVIEWS);
  const [formOpen, setFormOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState("");
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("figura_reviews");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setReviewsList([...parsed, ...DEFAULT_REVIEWS]);
      } catch (e) {
        console.error("Failed to parse saved reviews", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;

    const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(newName)}&backgroundColor=F43F5E`;

    const newReview = {
      name: newName.trim(),
      rating: newRating,
      text: newText.trim(),
      img: avatarUrl,
    };

    const existingCustom = reviewsList.filter(
      (r) => !DEFAULT_REVIEWS.some((d) => d.name === r.name && d.text === r.text)
    );
    const updatedCustom = [newReview, ...existingCustom];
    localStorage.setItem("figura_reviews", JSON.stringify(updatedCustom));

    setReviewsList([newReview, ...reviewsList]);
    setNewName("");
    setNewText("");
    setNewRating(5);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormOpen(false);
    }, 2000);
  };

  return (
    <section id="reviews" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Reviews" title="Loved by 500+ happy customers" />
        
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviewsList.map((r, i) => {
            const rating = r.rating ?? 5;
            return (
              <div key={i} className="bg-gradient-card rounded-3xl p-6 border border-border hover:border-primary/40 transition-all hover:-translate-y-1 shadow-card animate-fade-up">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => {
                    const isFilled = j < rating;
                    return (
                      <Star 
                        key={j} 
                        className={`w-4 h-4 ${isFilled ? "fill-primary text-primary" : "text-muted-foreground"}`} 
                      />
                    );
                  })}
                </div>
                <p className="mt-4 text-sm leading-relaxed">"{r.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={r.img} alt={r.name} loading="lazy" width={40} height={40}
                    className="w-10 h-10 rounded-full border-2 border-primary/30 object-cover" />
                  <div className="font-semibold text-sm">{r.name}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <button 
            onClick={() => setFormOpen(!formOpen)}
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground font-semibold px-6 py-3 rounded-full text-sm transition-all hover:scale-105 cursor-pointer border-none"
          >
            {formOpen ? "Close Form" : "Write a Review"}
          </button>
        </div>

        {formOpen && (
          <form 
            onSubmit={handleSubmit}
            className="mt-8 max-w-xl mx-auto rounded-3xl border border-border p-6 md:p-8 bg-gradient-card shadow-glow animate-fade-up"
          >
            <h4 className="font-display font-bold text-lg mb-4">Share your experience</h4>
            
            {submitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-2 animate-bounce" />
                <p className="text-sm font-semibold text-emerald-500 animate-pulse">Thank you! Your review has been added.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="revName" className="block text-xs font-semibold mb-1 text-muted-foreground">Your Name</label>
                  <input
                    id="revName"
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="E.g., John D."
                    className="w-full rounded-2xl glass border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-transparent text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-muted-foreground">Rating</label>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => {
                      const starVal = idx + 1;
                      const isSelected = starVal <= (hoverRating ?? newRating);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setNewRating(starVal)}
                          onMouseEnter={() => setHoverRating(starVal)}
                          onMouseLeave={() => setHoverRating(null)}
                          className="p-1 cursor-pointer transition-all hover:scale-110 border-none bg-transparent"
                        >
                          <Star 
                            className={`w-6 h-6 ${isSelected ? "fill-primary text-primary" : "text-muted-foreground"}`} 
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label htmlFor="revText" className="block text-xs font-semibold mb-1 text-muted-foreground">Your Review</label>
                  <textarea
                    id="revText"
                    required
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="Describe your figurine's quality, paint finish, or how the recipient loved it!"
                    className="w-full h-28 rounded-2xl glass border border-border p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-transparent text-foreground resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground font-semibold py-3 rounded-full text-sm hover:shadow-glow transition-all hover:scale-[1.02] cursor-pointer border-none"
                >
                  Submit Review
                </button>
              </div>
            )}
          </form>
        )}
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

type OrderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
};

function OrderModal({ isOpen, onClose, product }: OrderModalProps) {
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [sideImage, setSideImage] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [isUploadingFront, setIsUploadingFront] = useState(false);
  const [isUploadingSide, setIsUploadingSide] = useState(false);
  const [showConfigNotice, setShowConfigNotice] = useState(false);
  const [isMockMode, setIsMockMode] = useState(false);

  const frontInputRef = useRef<HTMLInputElement>(null);
  const sideInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setFrontImage(null);
      setSideImage(null);
      setNotes("");
      setShowConfigNotice(false);
      setIsMockMode(false);
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleUploadImage = async (file: File, isFront: boolean) => {
    const setUploading = isFront ? setIsUploadingFront : setIsUploadingSide;
    const setImage = isFront ? setFrontImage : setSideImage;

    setUploading(true);
    setShowConfigNotice(false);

    // Development / Fallback Mock Mode:
    // If Cloudinary credentials are not set up or are empty, simulate upload in dev mode
    if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
      setIsMockMode(true);
      setShowConfigNotice(true);
      setTimeout(() => {
        const mockUrl = URL.createObjectURL(file);
        setImage(mockUrl);
        setUploading(false);
      }, 1500);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Cloudinary API configuration error");
      }

      const data = await response.json();
      setImage(data.secure_url);
    } catch (err) {
      console.error("Cloudinary upload failed, falling back to mock simulator:", err);
      setIsMockMode(true);
      setShowConfigNotice(true);
      const mockUrl = URL.createObjectURL(file);
      setImage(mockUrl);
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, isFront: boolean) => {
    const file = e.target.files?.[0];
    if (file) handleUploadImage(file, isFront);
  };

  const whatsAppLink = waForWithPhotos(
    product.name,
    isMockMode ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500" : frontImage,
    isMockMode ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500" : sideImage,
    notes
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md animate-fade-in" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-gradient-card rounded-3xl border border-border p-6 md:p-8 shadow-glow animate-scale-up z-10 overflow-y-auto max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-border">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Customize Order</span>
            <h3 className="font-display font-bold text-2xl tracking-tight mt-1">{product.name}</h3>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full glass hover:bg-secondary grid place-items-center transition-all cursor-pointer border-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-6">
          
          {/* Cloudinary Notice */}
          {showConfigNotice && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-start gap-3 text-sm animate-fade-up">
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Cloudinary Mock Mode Enabled</p>
                <p className="text-xs text-muted-foreground mt-1">
                  We simulated this upload locally. To use live cloud storage, configure 
                  <code className="px-1.5 py-0.5 mx-1 rounded bg-secondary text-foreground text-[11px] font-mono">VITE_CLOUDINARY_CLOUD_NAME</code> 
                  and 
                  <code className="px-1.5 py-0.5 mx-1 rounded bg-secondary text-foreground text-[11px] font-mono">VITE_CLOUDINARY_UPLOAD_PRESET</code>.
                </p>
              </div>
            </div>
          )}

          {/* Photo Drop Zones */}
          <div>
            <label className="block text-sm font-semibold mb-3">Upload Reference Photos</label>
            <p className="text-xs text-muted-foreground mb-4">
              Upload clear front-facing and side-profile photos. Good lighting helps our designers capture every detail perfectly!
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              
              {/* Front Photo Zone */}
              <div 
                onClick={() => !isUploadingFront && frontInputRef.current?.click()}
                className={`relative h-44 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-4 cursor-pointer transition-all select-none
                  ${frontImage 
                    ? "border-emerald-500/40 bg-emerald-500/5" 
                    : "border-border hover:border-primary/50 hover:bg-secondary/20"
                  }`}
              >
                <input 
                  type="file" 
                  ref={frontInputRef}
                  onChange={(e) => handleFileChange(e, true)}
                  className="hidden" 
                  accept="image/*"
                />
                
                {isUploadingFront ? (
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    <span className="text-xs text-muted-foreground">Uploading Front Photo...</span>
                  </div>
                ) : frontImage ? (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-2" />
                    <span className="text-xs font-semibold text-emerald-500">Front Photo Uploaded</span>
                    <span className="text-[10px] text-muted-foreground mt-1 truncate max-w-full">
                      {isMockMode ? "Simulated File" : "Stored in Cloudinary"}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setFrontImage(null);
                      }}
                      className="absolute top-2 right-2 px-2.5 py-1 text-[10px] rounded bg-destructive text-destructive-foreground hover:bg-destructive/90 font-semibold border-none cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center">
                    <UploadCloud className="w-8 h-8 text-muted-foreground mb-2" />
                    <span className="text-xs font-semibold">Front-Facing Photo</span>
                    <span className="text-[10px] text-muted-foreground mt-1">Click to browse file</span>
                  </div>
                )}
              </div>

              {/* Side Photo Zone */}
              <div 
                onClick={() => !isUploadingSide && sideInputRef.current?.click()}
                className={`relative h-44 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-4 cursor-pointer transition-all select-none
                  ${sideImage 
                    ? "border-emerald-500/40 bg-emerald-500/5" 
                    : "border-border hover:border-primary/50 hover:bg-secondary/20"
                  }`}
              >
                <input 
                  type="file" 
                  ref={sideInputRef}
                  onChange={(e) => handleFileChange(e, false)}
                  className="hidden" 
                  accept="image/*"
                />
                
                {isUploadingSide ? (
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    <span className="text-xs text-muted-foreground">Uploading Side Photo...</span>
                  </div>
                ) : sideImage ? (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-2" />
                    <span className="text-xs font-semibold text-emerald-500">Side Photo Uploaded</span>
                    <span className="text-[10px] text-muted-foreground mt-1 truncate max-w-full">
                      {isMockMode ? "Simulated File" : "Stored in Cloudinary"}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSideImage(null);
                      }}
                      className="absolute top-2 right-2 px-2.5 py-1 text-[10px] rounded bg-destructive text-destructive-foreground hover:bg-destructive/90 font-semibold border-none cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center">
                    <UploadCloud className="w-8 h-8 text-muted-foreground mb-2" />
                    <span className="text-xs font-semibold">Side-Profile Photo</span>
                    <span className="text-[10px] text-muted-foreground mt-1">Click to browse file</span>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Notes Area */}
          <div>
            <label htmlFor="notes" className="block text-sm font-semibold mb-2">Special Requests / Custom Notes (Optional)</label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="E.g., Please draw a blue jacket, style my hair like the attached reference, or include our pet dog in the scenery."
              className="w-full h-24 rounded-2xl glass border border-border p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all placeholder:text-muted-foreground bg-transparent text-foreground"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-border flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            Once clicked, we will redirect you to WhatsApp with your order details prefilled.
          </p>
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener"
            onClick={onClose}
            className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold shadow-glow transition-all hover:scale-[1.02] w-full sm:w-auto text-primary-foreground bg-gradient-primary border-none cursor-pointer`}
          >
            <MessageCircle className="w-4 h-4" /> Send Order via WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}

function Index() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <main className="min-h-screen relative">
      <Nav />
      <Hero />
      <How />
      <Products onSelectProduct={(p) => {
        setSelectedProduct(p);
        setOrderModalOpen(true);
      }} />
      <Gallery />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWA />
      <OrderModal 
        isOpen={orderModalOpen} 
        onClose={() => setOrderModalOpen(false)} 
        product={selectedProduct} 
      />
    </main>
  );
}
