import { createFileRoute } from "@tanstack/react-router";
import logoWordmark from "@/assets/logo-wordmark.svg";

export const Route = createFileRoute("/success")({
  component: SuccessPage,
  head: () => ({
    meta: [{ title: "Order confirmed — col.cc" }],
  }),
});

function SuccessPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Nav */}
      <header className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
        <a href="/" aria-label="col.cc" className="block">
          <img src={logoWordmark} alt="col.cc" className="h-8 md:h-9 w-auto" />
        </a>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-8 h-8 text-teal"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <p className="data-label mb-4 text-teal">Order confirmed</p>
          <h1 className="font-serif text-4xl md:text-5xl text-forest mb-6 leading-tight">
            The climb, remembered.
          </h1>
          <p className="text-asphalt leading-relaxed mb-3">
            Your order is confirmed. You'll receive an email shortly with your
            receipt and shipping details.
          </p>
          <p className="text-asphalt leading-relaxed mb-12">
            We'll take care of it from here.
          </p>

          <a
            href="/"
            className="inline-block bg-teal text-offwhite px-7 py-4 data-label hover:bg-forest transition-colors"
          >
            Back to col.cc
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-20 py-10">
        <p className="data-mono text-xs text-asphalt">
          © {new Date().getFullYear()} col.cc · Born in Costa Blanca
        </p>
      </footer>
    </div>
  );
}
