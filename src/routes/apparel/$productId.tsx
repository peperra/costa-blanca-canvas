import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logoWordmark from "@/assets/logo-wordmark.svg";

import camisetaRates1 from "@/assets/camisetarates1.png";
import camisetaRates2 from "@/assets/camisetarates2.png";
import camisetaRates3 from "@/assets/camisetarates3.png";
import camisetaRates4 from "@/assets/camisetarates4.png";

export const Route = createFileRoute("/apparel/$productId")({
  component: ApparelPDP,
});

const apparel: Record<string, {
  name: string;
  tagline: string;
  intro: string;
  km: string;
  avg: string;
  alt: string;
  price: number;
  checkoutId: string;
  specs: { label: string; value: string }[];
  images: { src: string; label: string }[];
}> = {
  "coll-de-rates": {
    name: "Coll de Rates T-Shirt",
    tagline: "col.cc on the chest. The climb on the back.",
    intro:
      "The Coll de Rates traced across your back — 6.5 km, 5.4% average, topping out at 626 m above Parcent. Printed on a heavyweight cotton tee that holds its shape wash after wash. Discreet col.cc on the chest, the climb where it belongs.",
    km: "6.5",
    avg: "5.4",
    alt: "626",
    price: 40,
    checkoutId: "tshirt",
    specs: [
      { label: "Fabric", value: "Heavyweight cotton · structured, not flimsy" },
      { label: "Fit", value: "Regular · unisex · true to size" },
      { label: "Print", value: "Durable print, made to survive every wash" },
      { label: "Ships in", value: "5–7 business days" },
      { label: "Shipping", value: "Spain · EU · Worldwide" },
    ],
    images: [
      { src: camisetaRates1, label: "Back" },
      { src: camisetaRates2, label: "Front" },
      { src: camisetaRates3, label: "Detail" },
      { src: camisetaRates4, label: "Folded" },
    ],
  },
};

function ApparelPDP() {
  const { productId } = Route.useParams();
  const item = apparel[productId];

  const [activeIdx, setActiveIdx] = useState(0);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
        <p className="font-serif text-2xl text-forest">Piece not found.</p>
        <Link to="/" className="data-label text-teal underline">← Back to collection</Link>
      </div>
    );
  }

  async function handleBuy() {
    setLoadingId(item.checkoutId);
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: item.checkoutId }),
      });
      const { url } = await res.json();
      window.location.href = url;
    } catch (err) {
      console.error("Checkout error:", err);
      setLoadingId(null);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
        <Link to="/" aria-label="col.cc" className="block">
          <img src={logoWordmark} alt="col.cc" className="h-8 md:h-9 w-auto" />
        </Link>
        <Link
          to="/"
          className="data-label text-asphalt hover:text-forest transition-colors"
        >
          ← Collection
        </Link>
      </header>

      {/* Breadcrumb */}
      <div className="px-6 md:px-12 lg:px-20 pb-4">
        <p className="data-mono text-xs text-asphalt/60">
          <Link to="/" className="hover:text-teal transition-colors">col.cc</Link>
          {" / "}
          <Link to="/" hash="collection" className="hover:text-teal transition-colors">Apparel</Link>
          {" / "}
          <span className="text-forest">{item.name}</span>
        </p>
      </div>

      {/* Main PDP grid */}
      <main className="px-6 md:px-12 lg:px-20 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Gallery */}
          <div className="lg:sticky lg:top-8">
            {/* Main image */}
            <div className="bg-white shadow-[0_4px_36px_rgba(0,0,0,0.12)] mb-4">
              <img
                src={item.images[activeIdx].src}
                alt={`${item.name} — ${item.images[activeIdx].label}`}
                className="w-full h-auto block"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {item.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`flex-1 bg-white shadow-sm overflow-hidden border-2 transition-colors ${
                    activeIdx === i ? "border-teal" : "border-transparent"
                  }`}
                  aria-label={img.label}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-auto block object-cover aspect-square"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:pt-4">
            {/* Title */}
            <p className="data-label text-teal mb-2">Drop 01 · Costa Blanca</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest leading-tight tracking-tight uppercase mb-3">
              {item.name}
            </h1>
            <p className="font-serif italic text-lg text-teal mb-6 leading-snug">
              {item.tagline}
            </p>

            {/* Climb stats — los del print en la espalda */}
            <div className="grid grid-cols-3 gap-4 mb-8 border-t border-b border-asphalt/15 py-5">
              {[
                { label: "Distance", value: `${item.km} km` },
                { label: "Avg gradient", value: `${item.avg}%` },
                { label: "Altitude", value: `${item.alt} m` },
              ].map((s) => (
                <div key={s.label}>
                  <p className="data-label text-asphalt/60 mb-1" style={{ fontSize: "0.6rem" }}>
                    {s.label}
                  </p>
                  <p className="data-mono text-sm text-forest font-bold">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-asphalt leading-relaxed mb-10">{item.intro}</p>

            {/* Specs */}
            <div className="mb-10">
              <p className="data-label mb-4 text-forest">What you get</p>
              <dl className="grid grid-cols-2 gap-y-3 gap-x-6 border-t border-asphalt/15 pt-4">
                {item.specs.map((s) => (
                  <div key={s.label} className="contents">
                    <dt className="data-label text-asphalt/60">{s.label}</dt>
                    <dd className="data-mono text-xs text-forest">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* CTA */}
            <button
              onClick={handleBuy}
              disabled={loadingId === item.checkoutId}
              className="w-full bg-teal text-offwhite py-4 data-label text-sm hover:bg-forest transition-colors disabled:opacity-60 disabled:cursor-wait mb-4"
            >
              {loadingId === item.checkoutId ? "Redirecting…" : `Buy t-shirt — €${item.price}`}
            </button>
            <p className="data-mono text-xs text-asphalt text-center">
              Free shipping within Spain · 5–7 business days
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-20 py-10 border-t border-asphalt/10">
        <p className="data-mono text-xs text-asphalt">
          © {new Date().getFullYear()} col.cc · The climb, remembered.
        </p>
      </footer>
    </div>
  );
}
