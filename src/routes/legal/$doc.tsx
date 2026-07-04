import { createFileRoute, Link } from "@tanstack/react-router";
import logoWordmark from "@/assets/logo-wordmark.svg";

export const Route = createFileRoute("/legal/$doc")({
  component: LegalPage,
});

type Block =
  | { h: string }
  | { p: string }
  | { list: string[] };

type Doc = {
  title: string;
  updated: string;
  blocks: Block[];
};

const UPDATED = "4 de julio de 2026";

const TITULAR = "María Vilas";
const NIF = "53487155B";
const DOMICILIO = "Paseo de Europa 7, 28703 San Sebastián de los Reyes (Madrid)";

const docs: Record<string, Doc> = {
  "aviso-legal": {
    title: "Aviso legal",
    updated: UPDATED,
    blocks: [
      { h: "1. Titular del sitio web" },
      {
        p: "En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos del titular de este sitio web:",
      },
      {
        list: [
          `Titular: ${TITULAR}`,
          `NIF/CIF: ${NIF}`,
          `Domicilio: ${DOMICILIO}`,
          "Correo electrónico: hello@colcc.cc",
          "Sitio web: colcc.cc",
        ],
      },
      { h: "2. Objeto" },
      {
        p: "Este sitio web (col.cc) tiene por objeto la venta de láminas artísticas y prendas de vestir inspiradas en los puertos de montaña de la Costa Blanca. El acceso y uso del sitio implica la aceptación de las condiciones recogidas en este Aviso legal.",
      },
      { h: "3. Propiedad intelectual e industrial" },
      {
        p: "Todos los contenidos del sitio (diseños, ilustraciones, textos, marcas, logotipos y código) son titularidad del responsable o cuentan con la autorización correspondiente, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o transformación sin autorización expresa.",
      },
      { h: "4. Responsabilidad" },
      {
        p: "El titular no se hace responsable de los daños derivados de un uso inadecuado del sitio ni de interrupciones, errores u omisiones ajenos a su control. El titular se reserva el derecho a modificar los contenidos sin previo aviso.",
      },
      { h: "5. Legislación aplicable" },
      {
        p: "Las presentes condiciones se rigen por la legislación española. Para cualquier controversia serán competentes los juzgados y tribunales del domicilio del consumidor.",
      },
    ],
  },

  privacidad: {
    title: "Política de privacidad",
    updated: UPDATED,
    blocks: [
      { h: "1. Responsable del tratamiento" },
      {
        list: [
          `Responsable: ${TITULAR}`,
          `NIF/CIF: ${NIF}`,
          `Domicilio: ${DOMICILIO}`,
          "Correo electrónico: hello@colcc.cc",
        ],
      },
      { h: "2. Datos que tratamos" },
      {
        p: "Tratamos los datos que nos facilitas al realizar un pedido o al contactar con nosotros: nombre y apellidos, dirección de envío, correo electrónico y teléfono. Los datos de pago (tarjeta) son tratados directamente por nuestro proveedor de pagos (Stripe); col.cc no almacena ni tiene acceso a los datos completos de tu tarjeta.",
      },
      { h: "3. Finalidad y base jurídica" },
      {
        list: [
          "Gestionar, tramitar y enviar tus pedidos — base: ejecución del contrato.",
          "Atender tus consultas — base: tu consentimiento / interés legítimo.",
          "Cumplir obligaciones legales (fiscales y contables) — base: obligación legal.",
        ],
      },
      { h: "4. Conservación" },
      {
        p: "Conservaremos tus datos durante el tiempo necesario para gestionar tu pedido y, posteriormente, durante los plazos legalmente exigidos (por ejemplo, obligaciones fiscales y contables).",
      },
      { h: "5. Destinatarios" },
      {
        p: "Para prestar el servicio, tus datos pueden ser comunicados a los siguientes proveedores, que actúan como encargados del tratamiento:",
      },
      {
        list: [
          "Stripe — procesamiento de pagos.",
          "Vercel — alojamiento (hosting) del sitio web.",
          "Empresa de transporte (agencia de mensajería / Correos) — entrega de los pedidos.",
        ],
      },
      { h: "6. Transferencias internacionales" },
      {
        p: "Algunos de estos proveedores (como Stripe o Vercel) pueden tratar datos fuera del Espacio Económico Europeo. En tales casos, dichas transferencias se realizan con las garantías adecuadas previstas en el RGPD (por ejemplo, cláusulas contractuales tipo).",
      },
      { h: "7. Tus derechos" },
      {
        p: "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a hello@colcc.cc. Si consideras que no hemos atendido correctamente tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).",
      },
      { h: "8. Seguridad" },
      {
        p: "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdida o alteración.",
      },
    ],
  },

  cookies: {
    title: "Política de cookies",
    updated: UPDATED,
    blocks: [
      { h: "1. Qué son las cookies" },
      {
        p: "Una cookie es un pequeño archivo que se almacena en tu dispositivo al visitar una web y que permite, entre otras cosas, recordar información sobre tu navegación.",
      },
      { h: "2. Cookies que utilizamos" },
      {
        p: "Actualmente este sitio solo utiliza cookies técnicas o necesarias, imprescindibles para su funcionamiento y para procesar los pagos de forma segura a través de Stripe. Estas cookies no requieren consentimiento.",
      },
      {
        p: "No utilizamos cookies de analítica, publicidad ni seguimiento de terceros.",
      },
      { h: "3. Gestión de cookies" },
      {
        p: "Puedes configurar o eliminar las cookies desde los ajustes de tu navegador. Ten en cuenta que desactivar las cookies técnicas puede afectar al funcionamiento del sitio.",
      },
      { h: "4. Cambios" },
      {
        p: "Si en el futuro incorporamos herramientas de analítica o publicidad, actualizaremos esta política e implementaremos un sistema de consentimiento previo antes de instalar dichas cookies.",
      },
    ],
  },

  terminos: {
    title: "Términos y condiciones de venta",
    updated: UPDATED,
    blocks: [
      { h: "1. Vendedor" },
      {
        p: `Las ventas realizadas a través de este sitio las efectúa ${TITULAR} (NIF ${NIF}), con domicilio en ${DOMICILIO} y correo electrónico hello@colcc.cc.`,
      },
      { h: "2. Productos" },
      {
        p: "Ofrecemos láminas artísticas y prendas de vestir. Los productos se fabrican bajo demanda (made to order) en edición abierta. Las imágenes son orientativas; pueden existir ligeras variaciones de color propias de cada lote de impresión.",
      },
      { h: "3. Precios" },
      {
        p: "Los precios mostrados son los precios finales en euros (€). Los gastos de envío, cuando proceda, se indican antes de finalizar la compra.",
      },
      { h: "4. Proceso de compra y pago" },
      {
        p: "Para comprar, selecciona el producto y completa el pago. El pago se realiza con tarjeta a través de la pasarela segura de Stripe. Una vez confirmado el pedido, recibirás un correo de confirmación.",
      },
      { h: "5. Envíos" },
      {
        list: [
          "Plazo estimado: 5–7 días hábiles.",
          "Envío gratuito dentro de España.",
          "Realizamos envíos a la Unión Europea y al resto del mundo; los gastos aplicables se muestran antes de pagar.",
          `Los pedidos son preparados y enviados directamente por ${TITULAR}.`,
        ],
      },
      { h: "6. Desistimiento y devoluciones" },
      {
        p: "Como consumidor, dispones de 14 días naturales para desistir de tu compra. Consulta los detalles en nuestra página de Devoluciones y derecho de desistimiento.",
      },
      { h: "7. Garantía legal" },
      {
        p: "Los productos cuentan con la garantía legal de conformidad prevista en la normativa de consumo vigente. Si recibes un producto defectuoso o erróneo, contáctanos en hello@colcc.cc y lo solucionaremos.",
      },
      { h: "8. Ley aplicable y resolución de conflictos" },
      {
        p: "Estas condiciones se rigen por la legislación española. Conforme al Reglamento (UE) 524/2013, tienes a tu disposición la plataforma europea de resolución de litigios en línea: https://ec.europa.eu/consumers/odr.",
      },
    ],
  },

  devoluciones: {
    title: "Devoluciones y derecho de desistimiento",
    updated: UPDATED,
    blocks: [
      { h: "1. Derecho de desistimiento" },
      {
        p: "Si eres consumidor, tienes derecho a desistir de tu compra en un plazo de 14 días naturales desde la recepción del producto, sin necesidad de justificación.",
      },
      { h: "2. Cómo ejercerlo" },
      {
        p: "Para desistir, comunícanoslo por correo electrónico a hello@colcc.cc indicando tu número de pedido antes de que finalice el plazo de 14 días. Te indicaremos la dirección a la que enviar el producto.",
      },
      { h: "3. Reembolso" },
      {
        p: "Una vez recibida tu comunicación, te reembolsaremos el importe del producto y los gastos de envío de entrega estándar en un plazo de 14 días. Podremos retener el reembolso hasta haber recibido el producto de vuelta o una prueba de su devolución.",
      },
      { h: "4. Coste de la devolución" },
      {
        p: "El coste directo de devolver el producto (el envío de vuelta) corre a cargo del cliente.",
      },
      { h: "5. Estado del producto" },
      {
        p: "El producto debe devolverse sin uso y en condiciones adecuadas. Serás responsable de la disminución de valor resultante de una manipulación distinta a la necesaria para comprobar el producto.",
      },
      { h: "6. Productos defectuosos o erróneos" },
      {
        p: "Si el producto llega dañado, defectuoso o no se corresponde con tu pedido, escríbenos a hello@colcc.cc y lo repondremos o reembolsaremos sin coste para ti.",
      },
    ],
  },
};

function LegalPage() {
  const { doc } = Route.useParams();
  const content = docs[doc];

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
        <p className="font-serif text-2xl text-forest">Página no encontrada.</p>
        <Link to="/" className="data-label text-teal underline">← Volver a col.cc</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Nav */}
      <header className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
        <Link to="/" aria-label="col.cc" className="block">
          <img src={logoWordmark} alt="col.cc" className="h-8 md:h-9 w-auto" />
        </Link>
        <Link to="/" className="data-label text-asphalt hover:text-forest transition-colors">
          ← col.cc
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 md:px-12 lg:px-20 py-10 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-forest leading-tight mb-3">
            {content.title}
          </h1>
          <p className="data-mono text-xs text-asphalt/60 mb-12">
            Última actualización: {content.updated}
          </p>

          <div className="space-y-5">
            {content.blocks.map((block, i) => {
              if ("h" in block) {
                return (
                  <h2 key={i} className="font-serif text-xl md:text-2xl text-forest pt-6">
                    {block.h}
                  </h2>
                );
              }
              if ("list" in block) {
                return (
                  <ul key={i} className="list-disc pl-5 space-y-2 text-asphalt leading-relaxed">
                    {block.list.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-asphalt leading-relaxed">
                  {block.p}
                </p>
              );
            })}
          </div>

          {/* Otras páginas legales */}
          <div className="mt-16 pt-8 border-t border-asphalt/15">
            <p className="data-label text-asphalt/60 mb-4 text-xs tracking-widest">Más información legal</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 data-mono text-xs">
              {Object.entries(docs)
                .filter(([slug]) => slug !== doc)
                .map(([slug, d]) => (
                  <Link
                    key={slug}
                    to="/legal/$doc"
                    params={{ doc: slug }}
                    className="text-teal hover:text-forest transition-colors"
                  >
                    {d.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-20 py-10 border-t border-asphalt/10">
        <p className="data-mono text-xs text-asphalt">
          © {new Date().getFullYear()} col.cc · Born in Costa Blanca
        </p>
      </footer>
    </div>
  );
}
