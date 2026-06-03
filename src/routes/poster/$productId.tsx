import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logoWordmark from "@/assets/logo-wordmark.svg";

import mockupCollDeRates from "@/assets/mockup-coll-de-rates.png";
import printCollDeRatesFull from "@/assets/print-coll-de-rates-full.png";
import printCollDeRatesDetail from "@/assets/print-coll-de-rates-detail.png";

import mockupCumbresDelSol from "@/assets/mockup-cumbres-del-sol.png";
import printCumbresDelSolFull from "@/assets/print-cumbres-del-sol-full.png";
import printCumbresDelSolDetail from "@/assets/print-cumbres-del-sol-detail.png";

import mockupPuertoDeTudons from "@/assets/mockup-puerto-de-tudons.png";
import printPuertoDeTudonsFull from "@/assets/print-puerto-de-tudons-full.png";
import printPuertoDeTudonsDetail from "@/assets/print-puerto-de-tudons-detail.png";

export const Route = createFileRoute("/poster/$productId")({
  component: PosterPDP,
});

const posters: Record<string, {
  name: string;
  tagline: string;
  intro: string;
  km: string;
  avg: string;
  elev: string;
  alt: string;
  productId: string;
  images: { src: string; label: string }[];
}> = {
  "coll-de-rates": {
    name: "Coll de Rates",
    tagline: "From Parcent to the summit. The best.",
    intro:
      "6.75 km from the valley floor at Parcent, climbing through pine and limestone at a consistent 5.24%. No sudden ramps, no tricks. Just a road that rewards patience — and keeps riders coming back every winter.",
    km: "6.75",
    avg: "5.24",
    elev: "354",
    alt: "626",
    productId: "coll-de-rates",
    images: [
      { src: mockupCollDeRates, label: "In situ" },
      { src: printCollDeRatesFull, label: "Poster" },
      { src: printCollDeRatesDetail, label: "Detail" },
    ],
  },
  "cumbres-del-sol": {
    name: "Cumbres del Sol",
    tagline: "Short. Savage. The sea at the top.",
    intro:
      "6.28 km from Benitatxell that don't play fair. Two hairpins hidden by vegetation open into a straight kilometre at 10%. Then 500 metres at 15%. Then, just when you think it's over, 18% to the antennae. And at the top — the entire Marina Alta, the Montgó, the rock of Ifach, and on clear days, Ibiza.",
    km: "3.68",
    avg: "9.95",
    elev: "366",
    alt: "419",
    productId: "cumbres-del-sol",
    images: [
      { src: mockupCumbresDelSol, label: "In situ" },
      { src: printCumbresDelSolFull, label: "Poster" },
      { src: printCumbresDelSolDetail, label: "Detail" },
    ],
  },
  "puerto-de-tudons": {
    name: "Puerto de Tudons",
    tagline: "A long road between limestone giants.",
    intro:
      "20.35 km from the coast into the heart of the Sierra de Aitana. The road rises steadily through white villages and dense Mediterranean scrub, past Sella, past the Relleu crossroads, into a series of sweeping hairpins that arrive at Tudons almost without warning. Long, quiet, and completely alone.",
    km: "11.8",
    avg: "5.4",
    elev: "633",
    alt: "1026",
    productId: "puerto-de-tudons",
    images: [
      { src: mockupPuertoDeTudons, label: "In situ" },
      { src: printPuertoDeTudonsFull, label: "Poster" },
      { src: printPuertoDeTudonsDetail, label: "Detail" },
    ],
  },
};

const specs = [
  { label: "Format", value: "A3 · 297 × 420 mm" },
  { label: "Paper", value: "300 gsm · Fine art matte" },
  { label: "Frame", value: "Solid oak · handmade" },
  { label: "Glazing", value: "Anti-reflective acrylic" },
  { label: "Ships in", value: "5–7 business days" },
  { label: "Shipping", value: "Spain · EU · Worldwide" },
];

function PosterPDP() {
  const { productId } = Route.useParams();
  const poster = posters[productId];

  const [activeIdx, setActiveIdx] = useState(0);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  if (!poster) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
        <p className="font-serif text-2xl text-forest">Poster not found.</p>
        <Link to="/" className="data-label text-teal underline">← Back to collection</Link>
      </div>
    );
  }

  async function handleBuy() {
    setLoadingId(poster.productId);
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: poster.productId }),
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
          <Link to="/" hash="prints" className="hover:text-teal transition-colors">Prints</Link>
          {" / "}
          <span className="text-forest">{poster.name}</span>
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
                src={poster.images[activeIdx].src}
                alt={`${poster.name} — ${poster.images[activeIdx].label}`}
                className="w-full h-auto block"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {poster.images.map((img, i) => (
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
              {poster.name}
            </h1>
            <p className="font-serif italic text-lg text-teal mb-6 leading-snug">
              {poster.tagline}
            </p>

            {/* Climb stats */}
            <div className="grid grid-cols-4 gap-4 mb-8 border-t border-b border-asphalt/15 py-5">
              {[
                { label: "Altitude", value: `${poster.alt} m` },
                { label: "Distance", value: `${poster.km} km` },
                { label: "Elev. gain", value: `${poster.elev} m` },
                { label: "Avg gradient", value: `${poster.avg}%` },
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
            <p className="text-asphalt leading-relaxed mb-10">{poster.intro}</p>

            {/* Specs */}
            <div className="mb-10">
              <p className="data-label mb-4 text-forest">What you get</p>
              <dl className="grid grid-cols-2 gap-y-3 gap-x-6 border-t border-asphalt/15 pt-4">
                {specs.map((s) => (
                  <>
                    <dt key={s.label + "-dt"} className="data-label text-asphalt/60">{s.label}</dt>
                    <dd key={s.label + "-dd"} className="data-mono text-xs text-forest">{s.value}</dd>
                  </>
                ))}
              </dl>
            </div>

            {/* CTA */}
            <button
              onClick={handleBuy}
              disabled={loadingId === poster.productId}
              className="w-full bg-teal text-offwhite py-4 data-label text-sm hover:bg-forest transition-colors disabled:opacity-60 disabled:cursor-wait mb-4"
            >
              {loadingId === poster.productId ? "Redirecting…" : "Buy print — framed & ready to hang"}
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
