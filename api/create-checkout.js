import Stripe from "stripe";

// Catálogo de productos — precios en céntimos (3900 = 39€)
const CATALOG = {
  "coll-de-rates": {
    name: "Coll de Rates — col.cc Art Print",
    amount: 3900, // ← cambia el precio aquí
    description: "6.75 km · 626 m · Parcent to the top.",
  },
  "puerto-de-tudons": {
    name: "Puerto de Tudons — col.cc Art Print",
    amount: 3900, // ← cambia el precio aquí
    description: "20.35 km · 888 m · From the valley to the pass.",
  },
  "cumbres-del-sol": {
    name: "Cumbre del Sol — col.cc Art Print",
    amount: 3900, // ← cambia el precio aquí
    description: "6.28 km · 378 m · Benitatxell to the antennae.",
  },
  sweatshirt: {
    name: "After Cycling Sweatshirt — Coll de Rates",
    amount: 6900, // ← cambia el precio aquí
    description: "No hood. Sand. col.cc on the chest.",
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { productId } = req.body;
  const product = CATALOG[productId];

  if (!product) {
    return res.status(400).json({ error: "Product not found" });
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
            name: product.name,
            description: product.description,
          },
          unit_amount: product.amount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/#prints`,
    shipping_address_collection: {
      allowed_countries: ["ES", "FR", "PT", "DE", "IT", "GB", "NL", "BE"],
    },
    phone_number_collection: { enabled: true },
  });

  return res.status(200).json({ url: session.url });
}
