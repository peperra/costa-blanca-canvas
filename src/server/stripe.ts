import { createServerFn } from "@tanstack/react-start";
import Stripe from "stripe";

// ─── PRECIOS ────────────────────────────────────────────────────────────────
// Importan en CÉNTIMOS (100 = 1€). Cámbia estos valores cuando tengas precios.
// Ejemplo: 3900 = 39€ · 6900 = 69€
const CATALOG: Record<
  string,
  { name: string; amount: number; description: string }
> = {
  "coll-de-rates": {
    name: "Coll de Rates — col.cc Art Print",
    amount: 3900, // ← cambia aquí el precio en céntimos
    description: "6.75 km · 626 m · Parcent to the top.",
  },
  "puerto-de-tudons": {
    name: "Puerto de Tudons — col.cc Art Print",
    amount: 3900, // ← cambia aquí el precio en céntimos
    description: "20.35 km · 888 m · From the valley to the pass.",
  },
  "cumbres-del-sol": {
    name: "Cumbre del Sol — col.cc Art Print",
    amount: 3900, // ← cambia aquí el precio en céntimos
    description: "6.28 km · 378 m · Benitatxell to the antennae.",
  },
  sweatshirt: {
    name: "After Cycling Sweatshirt — Coll de Rates",
    amount: 6900, // ← cambia aquí el precio en céntimos
    description: "No hood. Sand. col.cc on the chest.",
  },
};

// ─── SERVER FUNCTION ─────────────────────────────────────────────────────────
// Esta función se ejecuta en el servidor (Cloudflare Workers / Vercel).
// El cliente la llama directamente — TanStack Start gestiona la petición HTTP.
export const createCheckoutSession = createServerFn({ method: "POST" })
  .validator((data: { productId: string }) => data)
  .handler(async ({ data }) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const product = CATALOG[data.productId];
    if (!product) throw new Error(`Product not found: ${data.productId}`);

    const origin =
      process.env.PUBLIC_URL ?? "https://costa-blanca-canvas.vercel.app";

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
      // Países a los que envías — añade o elimina según necesites
      shipping_address_collection: {
        allowed_countries: ["ES", "FR", "PT", "DE", "IT", "GB", "NL", "BE"],
      },
      phone_number_collection: { enabled: true },
    });

    return { url: session.url! };
  });
