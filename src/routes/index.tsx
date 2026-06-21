import { createFileRoute, Link } from "@tanstack/react-router";
import logoWordmark from "@/assets/logo-wordmark.svg";
import printCollDeRates from "@/assets/print-coll-de-rates-web.jpg";
import printCumbresDelSol from "@/assets/print-cumbres-del-sol-web.jpg";
import printPuertoDeTudons from "@/assets/print-puerto-de-tudons-web.jpg";
import camisetaRates1 from "@/assets/camisetarates1.png";
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
  return (
    <div className="min-h-screen bg-background">
      {/* HERO — full bleed con nav superpuesto */}
      <section id="top" className="relative w-full">
        <div className="relative">
          <img
            src={heroCollection}
            alt="col.cc — camiseta, print enmarcado y gorra con vistas a la Costa Blanca"
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
          <p className="data-label text-offwhite/60 mb-8 tracking-widest text-xs">Drop 01 — Costa Blanca · The prints</p>
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
                  <span className="data-label text-offwhite/50 text-xs tracking-widest">Art Print</span>
                  <span className="data-label text-teal text-xs tracking-widest">A3 · Giclée</span>
                </div>
                <h3 className="font-serif text-offwhite text-2xl md:text-3xl mb-5 leading-tight">{c.name}</h3>

                <div className="border-t border-offwhite/15 pt-4 flex items-center justify-between mb-5">
                  <span className="font-serif text-offwhite text-lg">From €25</span>
                  <span className="data-label text-xs text-offwhite/40 tracking-widest">Framed €40</span>
                </div>

                <div className="flex mt-auto">
                  <Link
                    to="/poster/$productId"
                    params={{ productId: c.productId }}
                    className="flex-1 text-center bg-teal text-offwhite px-4 py-3 data-label text-xs hover:bg-offwhite hover:text-forest transition-colors"
                  >
                    View & buy
                  </Link>
                </div>
              </div>
            </article>
          ))}

        </div>

        {/* Specs — prints */}
        <div className="px-6 md:px-12 lg:px-20 pb-16 md:pb-20">
          <div className="border-t border-offwhite/15 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="data-label text-offwhite/40 text-[10px] tracking-widest mb-2">Paper</p>
              <p className="data-mono text-xs text-offwhite/80">300 gsm · Fine art matte · Giclée</p>
            </div>
            <div>
              <p className="data-label text-offwhite/40 text-[10px] tracking-widest mb-2">Format</p>
              <p className="data-mono text-xs text-offwhite/80">A3 · 297 × 420 mm</p>
            </div>
            <div>
              <p className="data-label text-offwhite/40 text-[10px] tracking-widest mb-2">Print or framed</p>
              <p className="data-mono text-xs text-offwhite/80">€25 in a tube · €40 oak frame, ready to hang</p>
            </div>
            <div>
              <p className="data-label text-offwhite/40 text-[10px] tracking-widest mb-2">Shipping</p>
              <p className="data-mono text-xs text-offwhite/80">5–7 days · Spain, EU & worldwide</p>
            </div>
          </div>
        </div>

        {/* Header — apparel (separa prints de camisetas) */}
        <div className="px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-12">
          <div className="border-t border-offwhite/15 pt-12 md:pt-16">
            <p className="data-label text-offwhite/60 mb-8 tracking-widest text-xs">Drop 01 — Costa Blanca · Apparel</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <h2 className="font-serif text-offwhite text-5xl md:text-6xl lg:text-7xl leading-[0.95] max-w-lg">
                Wear the climb.
              </h2>
              <p className="font-serif italic text-offwhite/80 text-xl md:text-2xl md:text-right max-w-xs leading-snug">
                The climb, now on your back.
              </p>
            </div>
          </div>
        </div>

        {/* Apparel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
          {/* Apparel — camiseta Coll de Rates */}
          <article className="flex flex-col bg-limestone group">
            {/* Imagen — solo la espalda */}
            <Link
              to="/apparel/$productId"
              params={{ productId: "coll-de-rates" }}
              className="block overflow-hidden bg-limestone"
            >
              <img
                src={camisetaRates1}
                alt="Coll de Rates T-Shirt — col.cc"
                className="w-full h-auto block group-hover:opacity-90 transition-opacity"
                loading="lazy"
              />
            </Link>

            {/* Info */}
            <div className="bg-forest px-6 pt-5 pb-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="data-label text-offwhite/50 text-xs tracking-widest">Apparel</span>
                <span className="data-label text-teal text-xs tracking-widest">Regular · Unisex</span>
              </div>
              <h3 className="font-serif text-offwhite text-2xl md:text-3xl mb-5 leading-tight">Coll de Rates T-Shirt</h3>

              <div className="border-t border-offwhite/15 pt-4 flex items-center mb-5">
                <span className="font-serif text-offwhite text-lg">€40</span>
              </div>

              <div className="flex mt-auto">
                <Link
                  to="/apparel/$productId"
                  params={{ productId: "coll-de-rates" }}
                  className="flex-1 text-center bg-teal text-offwhite px-4 py-3 data-label text-xs hover:bg-offwhite hover:text-forest transition-colors"
                >
                  View & buy
                </Link>
              </div>
            </div>
          </article>

          {/* Apparel — próximamente */}
          <article className="flex flex-col border border-offwhite/15">
            <div className="flex-1 min-h-[280px] flex flex-col items-center justify-center gap-3 px-6 py-16">
              <span className="data-label text-offwhite/40 text-xs tracking-widest">Apparel</span>
              <p className="font-serif italic text-offwhite/60 text-xl text-center">Second piece — coming soon.</p>
            </div>
          </article>
        </div>

        {/* Specs — apparel */}
        <div className="px-6 md:px-12 lg:px-20 pb-16 md:pb-20">
          <div className="border-t border-offwhite/15 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="data-label text-offwhite/40 text-[10px] tracking-widest mb-2">Fabric</p>
              <p className="data-mono text-xs text-offwhite/80">Heavyweight cotton · structured, not flimsy</p>
            </div>
            <div>
              <p className="data-label text-offwhite/40 text-[10px] tracking-widest mb-2">Fit</p>
              <p className="data-mono text-xs text-offwhite/80">Regular · unisex · true to size</p>
            </div>
            <div>
              <p className="data-label text-offwhite/40 text-[10px] tracking-widest mb-2">Print</p>
              <p className="data-mono text-xs text-offwhite/80">Durable print, made to survive every wash</p>
            </div>
            <div>
              <p className="data-label text-offwhite/40 text-[10px] tracking-widest mb-2">Shipping</p>
              <p className="data-mono text-xs text-offwhite/80">5–7 days · Spain, EU & worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section id="process" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-background">
        <div className="text-center mb-16 md:mb-20">
          <p className="data-label mb-4 text-asphalt/60 tracking-widest text-xs">The Process</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest">
            From the road to your wall.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto">
          {[
            {
              num: "01",
              title: "We ride it",
              copy: "Every climb in the collection is ridden and surveyed — the real gradient, the real summit, recorded from the road.",
            },
            {
              num: "02",
              title: "We draw it",
              copy: "The elevation profile and route become a composition — typeset by hand, balanced for the wall, never auto-generated.",
            },
            {
              num: "03",
              title: "We make it",
              copy: "Every print and garment is made to order — checked piece by piece before it ships. No warehouse, no leftovers. Just your climb, made for you.",
            },
          ].map((step) => (
            <div key={step.num}>
              <p className="data-mono text-sm text-teal mb-4">{step.num}</p>
              <div className="border-t border-asphalt/15 pt-6 mb-4" />
              <h3 className="font-serif text-2xl md:text-3xl text-forest mb-4">{step.title}</h3>
              <p className="text-asphalt leading-relaxed">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ORIGIN */}
      <section id="origin" className="px-6 md:px-12 lg:px-20 py-28 md:py-40 bg-forest">
        <div className="max-w-3xl mx-auto">
          <div className="hairline pt-8 mb-16 text-center border-offwhite/20">
            <p className="data-label mb-3 text-mustard">Origin</p>
            <h2 className="font-serif text-4xl md:text-5xl text-offwhite">
              Born on these roads.
            </h2>
          </div>
          <div className="space-y-8 font-serif text-xl md:text-2xl text-offwhite/90 leading-snug text-center">
            <p>Costa Blanca is where European cycling comes to survive the winter.</p>
            <p>The light is different here. The roads climb differently. And the silence at the top of a col — that's different too.</p>
            <p>But these roads belong to someone. To the farmer on the tractor at 7am. To the woman walking to the market in Alcalalí. To the kid on the school bus on the narrow road above Jalón. They were here before the pelotons arrived. They'll be here long after.</p>
            <p>col.cc was born here. Not to claim this place — but to honour it. To turn those climbs into memories worth keeping. And to make sure the people who live here are glad we came.</p>
            <p className="font-serif italic text-mustard">Every climb has a community. Every road belongs to someone.</p>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="hairline pt-8 mb-16">
            <p className="data-label mb-3 text-mustard">Manifesto</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-forest">
              Cyclist, come here.
            </h2>
          </div>

          <p className="font-serif italic text-lg md:text-xl text-asphalt mb-16 leading-relaxed">
            We've all seen it. Cyclist Go Home. Painted on a wall, somewhere on a climb you love.
            We understand why it's there. This is our answer — and our ask.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <div>
              <p className="data-label mb-8 text-mustard">For the cyclist</p>
              <ul className="space-y-6">
                {cyclistPledges.map((pledge, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="data-mono text-xs text-asphalt/40 mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-asphalt leading-relaxed">{pledge}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="data-label mb-8 text-mustard">For the local</p>
              <ul className="space-y-6">
                {localPledges.map((pledge, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="data-mono text-xs text-asphalt/40 mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-asphalt leading-relaxed">{pledge}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-asphalt/15">
            <p className="font-serif text-2xl md:text-3xl text-forest">
              Cyclist, come here. col.cc.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 lg:px-20 py-16 bg-forest">
        <div className="border-t border-offwhite/20 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
          <div>
            <img src={logoWordmark} alt="col.cc" className="h-7 w-auto mb-3 brightness-0 invert" />
            <p className="data-mono text-xs text-offwhite/60">Born in Costa Blanca</p>
          </div>
          <div>
            <p className="data-label mb-3 text-offwhite/50">Follow</p>
            <a href="#" className="text-offwhite/80 hover:text-mustard transition-colors">Instagram</a>
          </div>
          <div>
            <p className="data-label mb-3 text-offwhite/50">Contact</p>
            <a href="mailto:hola@col.cc" className="text-offwhite/80 hover:text-mustard transition-colors">
              hola@col.cc
            </a>
          </div>
          <div>
            <p className="data-label mb-3 text-offwhite/50">Language</p>
            <div className="flex gap-3 data-mono text-sm">
              <button className="text-offwhite border-b border-offwhite">EN</button>
              <span className="text-offwhite/30">/</span>
              <button className="text-offwhite/60 hover:text-offwhite transition-colors">ES</button>
            </div>
          </div>
        </div>
        <p className="data-mono text-xs text-offwhite/50 mt-12">
          © {new Date().getFullYear()} col.cc · The climb, remembered.
        </p>
      </footer>
    </div>
  );
}
