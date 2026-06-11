import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logoWordmark from "@/assets/logo-wordmark.svg";
import printCollDeRates from "@/assets/print-coll-de-rates-web.jpg";
import printCumbresDelSol from "@/assets/print-cumbres-del-sol-web.jpg";
import printPuertoDeTudons from "@/assets/print-puerto-de-tudons-web.jpg";
import sudaderaColCc from "@/assets/sudadera-col-cc.png";
import heroCollection from "@/assets/newhero.png";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "col.cc — The climb, remembered." },
      {
        name: "description",
        content:
          "Collector-grade art prints of Spain's iconic mountain passes. Drop 1 · Costa Blanca.",
      },
      { property: "og:title", content: "col.cc — The climb, remembered." },
      {
        property: "og:description",
        content:
          "Collector-grade art prints of Spain's iconic mountain passes.",
      },
    ],
  }),
});

const climbs = [
  {
    name: "Coll de Rates",
    region: "Marina Alta",
    drop: "Drop 01",
    edition: "Limited Edition",
    km: "6.75",
    avg: "5.24",
    elev: "626",
    elevGain: "354",
    tagline: "From Parcent to the summit. The best.",
    intro:
      "6.75 km from the valley floor at Parcent, climbing through pine and limestone at a consistent 5.24%. No sudden ramps, no tricks. Just a road that rewards patience — and keeps riders coming back every winter.",
    card: "6.75 km. 626 m. Parcent to the top. The climb that keeps bringing cyclists back.",
    copy: "A steady rhythm through pine and light.",
    image: printCollDeRates,
    productId: "coll-de-rates",
  },
  {
    name: "Puerto de Tudons",
    region: "Marina Alta",
    drop: "Drop 02",
    edition: "Open Edition",
    km: "20.35",
    avg: "4.4",
    elev: "888",
    elevGain: "633",
    tagline: "A long road between limestone giants.",
    intro:
      "20.35 km from the coast into the heart of the Sierra de Aitana. The road rises steadily through white villages and dense Mediterranean scrub, past Sella, past the Relleu crossroads, into a series of sweeping hairpins that arrive at Tudons almost without warning. Long, quiet, and completely alone.",
    card: "20.35 km. 888 m. From the valley to the pass. The climb the coast doesn't know about.",
    copy: "A quiet road between limestone giants.",
    image: printPuertoDeTudons,
    productId: "puerto-de-tudons",
  },
  {
    name: "Cumbre del Sol",
    region: "L'Alcoià",
    drop: "Drop 03",
    edition: "Open Edition",
    km: "6.28",
    avg: "6.0",
    elev: "378",
    elevGain: "366",
    tagline: "Short. Savage. The sea at the top.",
    intro:
      "6.28 km from Benitatxell that don't play fair. Two hairpins hidden by vegetation open into a straight kilometre at 10%. Then 500 metres at 15%. Then, just when you think it's over, 18% to the antennae. And at the top — the entire Marina Alta, the Montgó, the rock of Ifach, and on clear days, Ibiza.",
    card: "6.28 km. 378 m. Benitatxell to the antennae. Everything hurts. Then you see the sea.",
    copy: "Short. Savage. The sea at the top.",
    image: printCumbresDelSol,
    productId: "cumbres-del-sol",
  },
];



const cyclistPledges = [
  "We greet. A wave to the farmer. A nod at the bar. A buenos días that means it.",
  "We stop. For the school bus. For the tractor. For the old man walking his dog on the narrow road.",
  "We support. Every café stop, every village shop. That's how this place stays alive.",
  "We carry out. Every gel wrapper. Every bottle. Everything we brought in, we take back out.",
  "We try. A word in Spanish. A gràcies in Valencian. Enough to show we know where we are.",
  "We remember. This is someone's home. Not our training camp. Not our playground.",
];

const localPledges = [
  "We wave back. Even when there are twenty of them.",
  "We slow down. When we pass them on the road.",
  "We give space. One and a half metres. No closer.",
  "We know they chose here. Of all the places in the world.",
];

function PrintIllustration({ variant }: { variant: number }) {
  const peaks = [
    "M0 220 L80 80 L150 160 L240 60 L320 180 L400 120 L400 260 L0 260 Z",
    "M0 240 L60 140 L130 200 L210 100 L300 180 L380 60 L400 200 L400 260 L0 260 Z",
    "M0 230 L100 200 L180 100 L260 180 L340 40 L400 160 L400 260 L0 260 Z",
  ];
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" preserveAspectRatio="none">
      <rect width="400" height="260" fill="var(--teal)" />
      <circle cx={variant === 1 ? 310 : variant === 2 ? 90 : 260} cy="70" r="22" fill="var(--mustard)" />
      <path d={peaks[variant - 1]} fill="var(--forest)" opacity="0.55" />
      <path d={peaks[variant - 1].replace("220", "240").replace("80", "120")} fill="var(--forest)" />
    </svg>
  );
}

function Index() {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleBuy(productId: string) {
    setLoadingId(productId);
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
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
      {/* HERO — full bleed con nav superpuesto */}
      <section id="top" className="relative w-full">
        <div className="relative">
          <img
            src={heroCollection}
            alt="col.cc — sudadera, print enmarcado y gorra con vistas a la Costa Blanca"
            className="w-full h-auto block"
            width={1920}
            height={1080}
          />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-limestone/55 via-limestone/20 to-transparent" />

          {/* Nav flotante */}
          <header className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-20 py-5 md:py-7 flex items-center justify-between">
            <a href="#top" aria-label="col.cc" className="block">
              <img src={logoWordmark} alt="col.cc" className="h-8 md:h-11 w-auto" />
            </a>
            <div className="flex items-center gap-6 md:gap-10">
              <nav className="hidden md:flex gap-10 data-label text-forest">
                <a href="#collection" className="hover:text-teal transition-colors">Collection</a>
                <a href="#origin" className="hover:text-teal transition-colors">Origin</a>
                <a href="#manifesto" className="hover:text-teal transition-colors">Manifesto</a>
              </nav>
              <a href="#collection" aria-label="Cart" className="text-forest hover:text-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </a>
            </div>
          </header>

          {/* Texto hero — overlay solo en md+ */}
          <div className="hidden md:flex absolute inset-0 z-10 px-6 md:px-12 lg:px-20 flex-col justify-center max-w-2xl">
            <h1 className="font-serif text-forest leading-[1.0] tracking-tight text-[9vw] lg:text-[7.5vw] mb-6">
              The climb,<br />remembered.
            </h1>
            <p className="data-label mb-8 text-forest tracking-widest">Cycling art prints & apparel</p>
            <div className="flex flex-col items-start gap-5">
              <a
                href="#collection"
                className="inline-block bg-forest text-offwhite px-8 py-4 data-label hover:bg-teal transition-colors"
              >
                Shop the Collection
              </a>
              <a
                href="#origin"
                className="data-label text-forest/70 hover:text-forest transition-colors text-xs tracking-widest"
              >
                Our story ↓
              </a>
            </div>
          </div>
        </div>

        {/* Texto hero — bloque propio en móvil */}
        <div className="md:hidden bg-limestone/40 px-6 pt-10 pb-12">
          <h1 className="font-serif text-forest leading-[1.0] tracking-tight text-5xl mb-5">
            The climb,<br />remembered.
          </h1>
          <p className="data-label mb-7 text-forest tracking-widest text-xs">Cycling art prints & apparel</p>
          <div className="flex flex-col gap-5">
            <a
              href="#collection"
              className="block text-center bg-forest text-offwhite px-8 py-4 data-label hover:bg-teal transition-colors"
            >
              Shop the Collection
            </a>
            <a
              href="#origin"
              className="text-center data-label text-forest/70 hover:text-forest transition-colors text-xs tracking-widest"
            >
              Our story ↓
            </a>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="bg-forest">
        {/* Header */}
        <div className="px-6 md:px-12 lg:px-20 pt-14 md:pt-20 pb-12">
          <p className="data-label text-offwhite/60 mb-8 tracking-widest text-xs">Drop 01 — Costa Blanca · Prints + Apparel</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="font-serif text-offwhite text-5xl md:text-6xl lg:text-7xl leading-[0.95] max-w-lg">
              Three climbs, one sea.
            </h2>
            <p className="font-serif italic text-offwhite/80 text-xl md:text-2xl md:text-right max-w-xs leading-snug">
              Born on the Costa Blanca — where col.cc began.
            </p>
          </div>
        </div>

        {/* Cards integradas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
          {climbs.map((c, i) => (
            <article key={c.name} className="flex flex-col bg-limestone group">
              {/* Imagen */}
              <Link to="/poster/$productId" params={{ productId: c.productId }} className="block overflow-hidden">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={`${c.name} — col.cc art print`}
                    className="w-full h-auto block group-hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-[3/4]"><PrintIllustration variant={i + 1} /></div>
                )}
              </Link>

              {/* Info */}
              <div className="bg-forest px-6 pt-5 pb-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="data-label text-offwhite/50 text-xs tracking-widest">{c.region}</span>
                  <span className="data-label text-teal text-xs tracking-widest">{c.drop}</span>
                </div>
                <h3 className="font-serif text-offwhite text-2xl md:text-3xl mb-5 leading-tight">{c.name}</h3>

                <div className="border-t border-offwhite/15 pt-4 flex items-center justify-between mb-5">
                  <span className="font-serif text-offwhite text-lg">From €39</span>
                  <span className="data-label text-xs text-offwhite/40 tracking-widest">{c.edition}</span>
                </div>

                <div className="flex gap-3 mt-auto">
                  <Link
                    to="/poster/$productId"
                    params={{ productId: c.productId }}
                    className="flex-1 text-center border border-offwhite/40 text-offwhite px-4 py-3 data-label text-xs hover:border-offwhite transition-colors"
                  >
                    View details
                  </Link>
                  <button
                    onClick={() => handleBuy(c.productId)}
                    disabled={loadingId === c.productId}
                    className="flex-1 bg-teal text-offwhite px-4 py-3 data-label text-xs hover:bg-offwhite hover:text-forest transition-colors disabled:opacity-60 disabled:cursor-wait"
                  >
                    {loadingId === c.productId ? "Redirecting…" : "Buy print"}
                  </button>
                </div>
              </div>
            </article>
          ))}

          {/* Apparel — sudadera */}
          <article className="flex flex-col bg-limestone group">
            <a href="#sweatshirt" className="block overflow-hidden bg-limestone">
              <img
                src={sudaderaColCc}
                alt="After Cycling Sweatshirt — col.cc"
                className="w-full h-auto block group-hover:opacity-90 transition-opacity"
                loading="lazy"
              />
            </a>
            <div className="bg-forest px-6 pt-5 pb-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="data-label text-offwhite/50 text-xs tracking-widest">Apparel</span>
                <span className="data-label text-teal text-xs tracking-widest">Drop 01</span>
              </div>
              <h3 className="font-serif text-offwhite text-2xl md:text-3xl mb-5 leading-tight">After Cycling Sweatshirt</h3>

              <div className="border-t border-offwhite/15 pt-4 flex items-center justify-between mb-5">
                <span className="font-serif text-offwhite text-lg">€69</span>
                <span className="data-label text-xs text-offwhite/40 tracking-widest">Open Edition</span>
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href="#sweatshirt"
                  className="flex-1 text-center border border-offwhite/40 text-offwhite px-4 py-3 data-label text-xs hover:border-offwhite transition-colors"
                >
                  View details
                </a>
                <button
                  onClick={() => handleBuy("sweatshirt")}
                  disabled={loadingId === "sweatshirt"}
                  className="flex-1 bg-teal text-offwhite px-4 py-3 data-label text-xs hover:bg-offwhite hover:text-forest transition-colors disabled:opacity-60 disabled:cursor-wait"
                >
                  {loadingId === "sweatshirt" ? "Redirecting…" : "Buy"}
                </button>
              </div>
            </div>
          </article>

          {/* Apparel — próximamente */}
          <article className="flex flex-col border border-offwhite/15">
            <div className="flex-1 min-h-[280px] flex flex-col items-center justify-center gap-3 px-6 py-16">
              <span className="data-label text-offwhite/40 text-xs tracking-widest">Apparel · Drop 01</span>
              <p className="font-serif italic text-offwhite/60 text-xl text-center">Second piece — coming soon.</p>
            </div>
          </article>
        </div>
      </section>

      {/* SWEATSHIRT */}
      <section id="sweatshirt" className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="flex items-end justify-between mb-16 hairline pt-8">
          <div>
            <p className="data-label mb-3">The Sweatshirt</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest">
              Drop 1 · After Cycling
            </h2>
          </div>
          <p className="data-mono text-sm hidden md:block">01 / 01</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          <div className="lg:col-span-7 lg:col-start-6 aspect-[3/2] bg-limestone/40 overflow-hidden order-last lg:order-2 lg:row-start-1">
            <img
              src={sudaderaColCc}
              alt="After Cycling Sweatshirt — Coll de Rates, frente y espalda"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-1 lg:order-1 lg:row-start-1 lg:pt-8">
            <h3 className="font-serif text-3xl md:text-4xl text-forest mb-4 uppercase tracking-tight leading-tight">
              After Cycling Sweatshirt
            </h3>
            <p className="font-serif italic text-base md:text-lg text-teal mb-5 leading-snug">
              For arriving at the café, not for climbing the pass.
            </p>
            <p className="text-asphalt mb-8 leading-relaxed max-w-md">
              No hood. Sand cotton. col.cc on the chest. The profile of Coll de Rates on the back.
            </p>

            <dl className="grid grid-cols-2 gap-y-3 gap-x-6 mb-8 max-w-sm border-t border-asphalt/15 pt-5">
              <dt className="data-label text-asphalt/70">Fabric</dt>
              <dd className="data-mono text-xs text-forest">400 gsm · organic</dd>
              <dt className="data-label text-asphalt/70">Fit</dt>
              <dd className="data-mono text-xs text-forest">Boxy · unisex</dd>
              <dt className="data-label text-asphalt/70">Print</dt>
              <dd className="data-mono text-xs text-forest">Embroidered</dd>
              <dt className="data-label text-asphalt/70">Made in</dt>
              <dd className="data-mono text-xs text-forest">Portugal</dd>
            </dl>

            <p className="data-mono text-xs text-asphalt mb-6 leading-relaxed border-l-2 border-teal pl-4 max-w-md">
              6.75 km · 626 m · Coll de Rates. The climb on the back. The café on the chest.
            </p>

            <div className="text-center lg:text-left">
              <button
                onClick={() => handleBuy("sweatshirt")}
                disabled={loadingId === "sweatshirt"}
                className="inline-block bg-teal text-offwhite px-5 py-2 text-xs data-label hover:bg-forest transition-colors disabled:opacity-60 disabled:cursor-wait"
              >
                {loadingId === "sweatshirt" ? "Redirecting…" : "Shop sweatshirt"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGIN */}
      <section id="origin" className="px-6 md:px-12 lg:px-20 py-28 md:py-40 bg-limestone/30">
        <div className="max-w-3xl mx-auto">
          <div className="hairline pt-8 mb-16 text-center">
            <p className="data-label mb-3 text-mustard">Origin</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest">
              Born on these roads.
            </h2>
          </div>
          <div className="space-y-8 font-serif text-xl md:text-2xl text-forest leading-snug text-center">
            <p>Costa Blanca is where European cycling comes to survive the winter.</p>
            <p>The light is different here. The roads climb differently. And the silence at the top of a col — that's different too.</p>
            <p>But these roads belong to someone. To the farmer on the tractor at 7am. To the woman walking to the market in Alcalalí. To the kid on the school bus on the narrow road above Jalón. They were here before the pelotons arrived. They'll be here long after.</p>
            <p>col.cc was born here. Not to claim this place — but to honour it. To turn those climbs into memories worth keeping. And to make sure the people who live here are glad we came.</p>
            <p className="font-serif italic text-teal">Every climb has a community. Every road belongs to someone.</p>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-forest text-offwhite">
        <div className="max-w-3xl mx-auto">
          <div className="hairline pt-8 mb-16 border-offwhite/20">
            <p className="data-label mb-3 text-mustard">Manifesto</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Cyclist, come here.
            </h2>
          </div>

          <p className="font-serif italic text-lg md:text-xl text-offwhite/70 mb-16 leading-relaxed">
            We've all seen it. Cyclist Go Home. Painted on a wall, somewhere on a climb you love.
            We understand why it's there. This is our answer — and our ask.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <div>
              <p className="data-label mb-8 text-mustard">For the cyclist</p>
              <ul className="space-y-6">
                {cyclistPledges.map((pledge, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="data-mono text-xs text-offwhite/30 mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-offwhite/80 leading-relaxed">{pledge}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="data-label mb-8 text-mustard">For the local</p>
              <ul className="space-y-6">
                {localPledges.map((pledge, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="data-mono text-xs text-offwhite/30 mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-offwhite/80 leading-relaxed">{pledge}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-offwhite/20">
            <p className="font-serif text-2xl md:text-3xl text-offwhite">
              Cyclist, come here. col.cc.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 lg:px-20 py-16 mt-12">
        <div className="hairline pt-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
          <div>
            <img src={logoWordmark} alt="col.cc" className="h-7 w-auto mb-3" />
            <p className="data-mono text-xs text-asphalt">Born in Costa Blanca</p>
          </div>
          <div>
            <p className="data-label mb-3">Follow</p>
            <a href="#" className="text-asphalt hover:text-teal transition-colors">Instagram</a>
          </div>
          <div>
            <p className="data-label mb-3">Contact</p>
            <a href="mailto:hola@col.cc" className="text-asphalt hover:text-teal transition-colors">
              hola@col.cc
            </a>
          </div>
          <div>
            <p className="data-label mb-3">Language</p>
            <div className="flex gap-3 data-mono text-sm">
              <button className="text-forest border-b border-forest">EN</button>
              <span className="text-limestone">/</span>
              <button className="text-asphalt hover:text-forest transition-colors">ES</button>
            </div>
          </div>
        </div>
        <p className="data-mono text-xs text-asphalt mt-12">
          © {new Date().getFullYear()} col.cc · The climb, remembered.
        </p>
      </footer>
    </div>
  );
}
