import Stripe from "stripe";

// Catálogo de productos — precios en céntimos (2500 = 25€)
const POSTER_VARIANTS = {
  print: { label: "Print only", amount: 2500 },
  framed: { label: "Framed — oak", amount: 4000 },
};

const CATALOG = {
  "coll-de-rates": {
    name: "Coll de Rates — col.cc Art Print",
    description: "6.75 km · 626 m · Parcent to the top.",
    variants: POSTER_VARIANTS,
  },
  "puerto-de-tudons": {
    name: "Puerto de Tudons — col.cc Art Print",
    description: "20.35 km · 888 m · From the valley to the pass.",
    variants: POSTER_VARIANTS,
  },
  "cumbres-del-sol": {
    name: "Cumbre del Sol — col.cc Art Print",
    description: "6.28 km · 378 m · Benitatxell to the antennae.",
    variants: POSTER_VARIANTS,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { productId, variant } = req.body;
  const product = CATALOG[productId];

  if (!product) {
    return res.status(400).json({ error: "Product not found" });
  }

  let name = product.name;
  let amount = product.amount;

  if (product.variants) {
    const v = product.variants[variant];
    if (!v) {
      return res.status(400).json({ error: "Variant not found" });
    }
    name = `${product.name} (${v.label})`;
    amount = v.amount;
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const origin = process.env.PUBLIC_URL ?? "https://costa-blanca-canvas.vercel.app";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name,
            description: product.description,
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/#collection`,
    shipping_address_collection: {
      allowed_countries: ["ES", "FR", "PT", "DE", "IT", "GB", "NL", "BE"],
    },
    phone_number_collection: { enabled: true },
  });

  return res.status(200).json({ url: session.url });
}
