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
        content:
          "Collector-grade art prints of Spain's iconic mountain passes.",
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
    name: "Cumbre del Sol",
    km: "6.28",
    avg: "6.0",
    elev: "378",
    tagline: "Short. Savage. The sea at the top.",
    intro:
      "6.28 km from Benitatxell that don't play fair. Two hairpins hidden by vegetation open into a straight kilometre at 10%. Then 500 metres at 15%. Then, just when you think it's over, 18% to the antennae. And at the top — the entire Marina Alta, the Montgó, the rock of Ifach, and on clear days, Ibiza.",
    card: "6.28 km. 378 m. Benitatxell to the antennae. Everything hurts. Then you see the sea.",
    copy: "Short. Savage. The sea at the top.",
    image: printCumbresDelSol,
    shopUrl: `${SHOPIFY_BASE}/products/cumbres-del-sol`,
  },
];

const SWEATSHIRT_SHOP_URL = `${SHOPIFY_BASE}/products/after-cycling-sweatshirt-coll-de-rates`;

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
          <a href="#manifesto" className="hover:text-teal transition-colors">Manifesto</a>
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
            <h1 className="font-serif text-forest leading-[0.98] tracking-tight text-[12vw] md:text-[8vw] lg:text-[6.5vw] mb-6 max-w-5xl">
              The climb, remembered.
            </h1>
            <p className="data-label mb-8 text-forest">Drop 01 — Costa Blanca</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#prints"
                className="inline-block bg-teal text-offwhite px-7 py-4 data-label hover:bg-forest transition-colors"
              >
                Shop the prints
              </a>
              <a
                href="#sweatshirt"
                className="inline-block bg-teal text-offwhite px-7 py-4 data-label hover:bg-forest transition-colors"
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-12">
          {climbs.map((c, i) => (
            <article key={c.name} className="flex flex-col">
              <h3 className="font-serif text-2xl md:text-3xl text-forest mb-3 uppercase tracking-tight">
                {c.name}
              </h3>
              {c.tagline && (
                <p className="font-serif italic text-base md:text-lg text-teal mb-4 leading-snug">
                  {c.tagline}
                </p>
              )}
              <p className="text-asphalt mb-6 leading-relaxed">{c.intro ?? c.copy}</p>
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
              {c.card && (
                <p className="data-mono text-xs text-asphalt mb-6 leading-relaxed border-l-2 border-teal pl-4">
                  {c.card}
                </p>
              )}
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
          <div className="aspect-[3/2] bg-limestone overflow-hidden order-last lg:order-2">
            <img
              src={sudaderaColCc}
              alt="After Cycling Sweatshirt — Coll de Rates, frente y espalda"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="lg:order-1">
            <p className="data-label mb-6">The Sweatshirt</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6 leading-tight">
              After Cycling Sweatshirt<br />
              <span className="text-asphalt">— Coll de Rates</span>
            </h2>
            <p className="text-lg text-asphalt leading-relaxed mb-8 max-w-md">
              No hood. Sand. col.cc on the chest. The profile of Coll de Rates on the back. For
              arriving at the café, not for climbing the pass.
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
            <p>The light is different here. The roads climb differently. And the silence at the top of a col — that's different too.</p>
            <p>But these roads belong to someone. To the farmer on the tractor at 7am. To the woman walking to the market in Alcalalí. To the kid on the school bus on the narrow road above Jalón. They were here before the pelotons arrived. They'll be here long after.</p>
            <p>col.cc was born here. Not to claim this place — but to honour it. To turn those climbs into memories worth keeping. And to make sure the people who live here are glad we came.</p>
            <p>But every climb has a community. Every road belongs to someone.</p>
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
            We've all seen it. "Cyclist Go Home." Painted on a wall, somewhere on a climb you love.
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
            <p className="font-serif text-2xl md:text-3xl text-offwhite mb-2">
              Cyclist, come here.
            </p>
            <p className="data-mono text-sm text-mustard">col.cc</p>
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
