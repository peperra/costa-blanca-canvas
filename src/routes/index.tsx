import { createFileRoute } from "@tanstack/react-router";
import logoWordmark from "@/assets/logo-wordmark.svg";
import printCollDeRates from "@/assets/print-coll-de-rates.png";
import printCumbresDelSol from "@/assets/print-cumbres-del-sol.png";
import printPuertoDeTudons from "@/assets/print-puerto-de-tudons.jpg";
import sudaderaColCc from "@/assets/sudadera-col-cc.png";
import heroCollection from "@/assets/hero-collection.jpg";

// TODO: replace with real Shopify product URLs once the store is live
const SHOPIFY_BASE = "#shopify";

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
        content: "Collector-grade art prints of Spain's iconic mountain passes.",
      },
    ],
  }),
});

const climbs = [
  {
    name: "Coll de Rates",
    km: "6.75",
    avg: "5.24",
    elev: "626",
    tagline: "From Parcent to the summit. The best.",
    intro:
      "6.75 km from the valley floor at Parcent, climbing through pine and limestone at a consistent 5.24%. No sudden ramps, no tricks. Just a road that rewards patience — and keeps riders coming back every winter.",
    card: "6.75 km. 626 m. Parcent to the top. The climb that keeps bringing cyclists back.",
    copy: "A steady rhythm through pine and light.",
    image: printCollDeRates,
    shopUrl: `${SHOPIFY_BASE}/products/coll-de-rates`,
  },
  {
    name: "Puerto de Tudons",
    km: "20.35",
    avg: "4.4",
    elev: "888",
    tagline: "A long road between limestone giants.",
    intro:
      "20.35 km from the coast into the heart of the Sierra de Aitana. The road rises steadily through white villages and dense Mediterranean scrub, past Sella, past the Relleu crossroads, into a series of sweeping hairpins that arrive at Tudons almost without warning. Long, quiet, and completely alone.",
    card: "20.35 km. 888 m. From the valley to the pass. The climb the coast doesn't know about.",
    copy: "A quiet road between limestone giants.",
    image: printPuertoDeTudons,
    shopUrl: `${SHOPIFY_BASE}/products/puerto-de-tudons`,
  },
  {
    name: "Cumbres del Sol",
    km: "3.68",
    avg: "9.95",
    elev: "366",
    tagline: "Short, sharp, and ending at the sea.",
    intro: null,
    card: null,
    copy: "Short, sharp, and ending at the sea.",
    image: printCumbresDelSol,
    shopUrl: `${SHOPIFY_BASE}/products/cumbres-del-sol`,
  },
];

const SWEATSHIRT_SHOP_URL = `${SHOPIFY_BASE}/products/after-cycling-sweatshirt-coll-de-rates`;

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 600 500"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Sun */}
      <circle cx="430" cy="140" r="60" fill="var(--mustard)" />
      {/* Distant mountain */}
      <path d="M0 360 L120 220 L230 320 L340 200 L470 340 L600 240 L600 500 L0 500 Z" fill="var(--teal)" opacity="0.35" />
      {/* Front mountain */}
      <path d="M0 420 L100 300 L200 380 L310 260 L420 380 L520 320 L600 380 L600 500 L0 500 Z" fill="var(--teal)" />
      {/* Road */}
      <path
        d="M40 500 C 200 460, 220 420, 320 410 S 480 380, 560 360"
        stroke="var(--offwhite)"
        strokeWidth="3"
        strokeDasharray="8 10"
        fill="none"
      />
      {/* Cyclist silhouette */}
      <g transform="translate(260 388)">
        <circle cx="0" cy="-22" r="6" fill="var(--forest)" />
        <path d="M-10 0 L0 -16 L12 -2" stroke="var(--forest)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="-12" cy="6" r="9" stroke="var(--forest)" strokeWidth="2.5" fill="none" />
        <circle cx="14" cy="6" r="9" stroke="var(--forest)" strokeWidth="2.5" fill="none" />
      </g>
    </svg>
  );
}

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
      <path
        d={peaks[variant - 1].replace("220", "240").replace("80", "120")}
        fill="var(--forest)"
      />
    </svg>
  );
}

function SweatshirtIllustration() {
  return (
    <svg viewBox="0 0 500 500" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="500" height="500" fill="var(--limestone)" />
      {/* Sweatshirt silhouette */}
      <path
        d="M150 140 L110 180 L80 280 L120 300 L140 250 L140 420 L360 420 L360 250 L380 300 L420 280 L390 180 L350 140 L300 130 Q250 165 200 130 Z"
        fill="var(--offwhite)"
      />
      {/* Neckline */}
      <path d="M210 140 Q250 170 290 140" stroke="var(--limestone)" strokeWidth="3" fill="none" />
      {/* Chest wordmark */}
      <text
        x="250"
        y="240"
        textAnchor="middle"
        fontFamily="DM Serif Display, serif"
        fontSize="22"
        fill="var(--forest)"
      >
        col.cc
      </text>
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
        <a href="#top" aria-label="col.cc" className="block">
          <img src={logoWordmark} alt="col.cc" className="h-8 md:h-9 w-auto" />
        </a>
        <nav className="hidden md:flex gap-10 data-label">
          <a href="#prints" className="hover:text-teal transition-colors">Prints</a>
          <a href="#sweatshirt" className="hover:text-teal transition-colors">Sweatshirt</a>
          <a href="#origin" className="hover:text-teal transition-colors">Origin</a>
          <a href="#climbs" className="hover:text-teal transition-colors">Climbs</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative w-full">
        <div className="relative w-full h-[80vh] min-h-[520px] max-h-[820px] overflow-hidden">
          <img
            src={heroCollection}
            alt="col.cc — sudadera, print enmarcado y gorra sobre estante de piedra"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-limestone/60 via-limestone/20 to-transparent" />
          <div className="relative z-10 h-full px-6 md:px-12 lg:px-20 flex flex-col justify-center max-w-6xl">
            <p className="data-label mb-6 text-forest">Drop 01 — Costa Blanca</p>
            <h1 className="font-serif text-forest leading-[0.98] tracking-tight text-[12vw] md:text-[8vw] lg:text-[6.5vw] mb-6 max-w-5xl">
              The climb, remembered.
            </h1>
            <p className="text-base md:text-lg text-asphalt max-w-xl mb-8 leading-relaxed bg-offwhite/70 px-3 py-2 backdrop-blur-sm w-fit">
              Collector-grade prints &amp; after-cycling wear from Spain's iconic mountain passes.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#prints"
                className="inline-block bg-teal text-offwhite px-7 py-4 data-label hover:bg-forest transition-colors"
              >
                Shop the prints
              </a>
              <a
                href="#sweatshirt"
                className="inline-block bg-offwhite/90 text-forest px-7 py-4 data-label hover:bg-offwhite transition-colors border border-forest/20"
              >
                Shop the sweatshirt
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* PRINTS */}
      <section id="prints" className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="flex items-end justify-between mb-16 hairline pt-8">
          <div>
            <p className="data-label mb-3">The Prints</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest">
              Drop 1 · Costa Blanca
            </h2>
          </div>
          <p className="data-mono text-sm hidden md:block">03 / 03</p>
        </div>

        {/* Small index of the three prints — horizontal, name on top, image below */}
        <ul className="hidden lg:grid grid-cols-3 gap-4 md:gap-8 mb-20 md:mb-28">
          {climbs.map((c, i) => (
            <li key={`idx-${c.name}`} className="flex flex-col">
              <p className="data-mono text-xs text-teal mb-1">1.{i + 1}</p>
              <p className="font-serif text-sm md:text-base text-forest uppercase tracking-tight mb-3 leading-tight">
                {c.name}
              </p>
              <div className="aspect-[4/5] overflow-hidden bg-limestone/40">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={`${c.name} thumbnail`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <PrintIllustration variant={i + 1} />
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-12">
          {climbs.map((c, i) => (
            <article key={c.name} className="flex flex-col">
              <p className="data-label mb-3">
                <span className="text-teal">1.{i + 1}</span> · Print N° 0{i + 1}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-forest mb-3 uppercase tracking-tight">
                {c.name}
              </h3>
              <p className="data-mono text-xs mb-4">
                {c.km} · {c.avg} · {c.elev}
              </p>
              <p className="text-asphalt mb-6 leading-relaxed">{c.copy}</p>
              <div className="aspect-[4/5] mb-6 overflow-hidden bg-limestone/40">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={`${c.name} — col.cc art print`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <PrintIllustration variant={i + 1} />
                )}
              </div>
              <a
                href={c.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="data-label text-teal border-b border-teal pb-1 self-start hover:text-forest hover:border-forest transition-colors"
              >
                Buy print →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* SWEATSHIRT */}
      <section id="sweatshirt" className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="aspect-[3/2] bg-limestone overflow-hidden">
            <img
              src={sudaderaColCc}
              alt="After Cycling Sweatshirt — Coll de Rates, frente y espalda"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <div>
            <p className="data-label mb-6">The Sweatshirt</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6 leading-tight">
              After Cycling Sweatshirt<br />
              <span className="text-asphalt">— Coll de Rates</span>
            </h2>
            <p className="text-lg text-asphalt leading-relaxed mb-8 max-w-md">
              No hood. Sand. col.cc on the chest. The profile of Coll de Rates on the back.
              For arriving at the café, not for climbing the pass.
            </p>
            <div className="flex items-center gap-6 mb-10 hairline pt-6">
              <span className="data-label">Back print</span>
              <span className="data-mono text-sm">6.5 · 5.4 · 626</span>
            </div>
            <a
              href={SWEATSHIRT_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal text-offwhite px-8 py-4 data-label hover:bg-forest transition-colors"
            >
              Shop sweatshirt
            </a>
          </div>
        </div>
      </section>

      {/* ORIGIN */}
      <section id="origin" className="px-6 py-28 md:py-40">
        <div className="max-w-2xl mx-auto text-center">
          <p className="data-label mb-10 text-mustard">Origin</p>
          <div className="space-y-8 font-serif text-2xl md:text-3xl text-forest leading-snug">
            <p>Costa Blanca is where European cycling comes to survive the winter.</p>
            <p>But the roads belong to someone.</p>
            <p>col.cc was born here. To turn those climbs into memories worth keeping.</p>
          </div>
        </div>
      </section>

      {/* CLIMBS DATA */}
      <section id="climbs" className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="hairline pt-8 mb-12">
          <p className="data-label mb-3">Index</p>
          <h2 className="font-serif text-4xl md:text-5xl text-forest">The Climbs</h2>
        </div>

        <div className="grid grid-cols-12 gap-4 data-label pb-4 border-b border-limestone">
          <div className="col-span-12 md:col-span-4">Pass</div>
          <div className="col-span-4 md:col-span-1 text-right md:text-left">km</div>
          <div className="col-span-4 md:col-span-1 text-right md:text-left">avg %</div>
          <div className="col-span-4 md:col-span-2 text-right md:text-left">elevation</div>
          <div className="hidden md:block md:col-span-4">Note</div>
        </div>

        {climbs.map((c) => (
          <div
            key={c.name}
            className="grid grid-cols-12 gap-4 py-6 border-b border-limestone items-baseline"
          >
            <div className="col-span-12 md:col-span-4 font-serif text-2xl text-forest uppercase tracking-tight">
              {c.name}
            </div>
            <div className="col-span-4 md:col-span-1 data-mono text-sm">{c.km}</div>
            <div className="col-span-4 md:col-span-1 data-mono text-sm">{c.avg}</div>
            <div className="col-span-4 md:col-span-2 data-mono text-sm">{c.elev} m</div>
            <div className="col-span-12 md:col-span-4 text-asphalt italic">{c.copy}</div>
          </div>
        ))}
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
