import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Col.cc" },
      { name: "description", content: "Costa Blanca Canvas is a one-page website showcasing collector-grade art prints of Spanish mountain passes." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Col.cc" },
      { property: "og:description", content: "Costa Blanca Canvas is a one-page website showcasing collector-grade art prints of Spanish mountain passes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Col.cc" },
      { name: "twitter:description", content: "Costa Blanca Canvas is a one-page website showcasing collector-grade art prints of Spanish mountain passes." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0c68ef44-f0e5-4799-b6e2-a19c1c7b067f/id-preview-5e70b1a7--f8e2b0b9-d7bf-4ac3-9c94-b87f8f08595c.lovable.app-1777834648211.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0c68ef44-f0e5-4799-b6e2-a19c1c7b067f/id-preview-5e70b1a7--f8e2b0b9-d7bf-4ac3-9c94-b87f8f08595c.lovable.app-1777834648211.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
