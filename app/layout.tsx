import "../client/src/index.css";
import type { Metadata } from "next";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "4Kilo Dev",
  url: "https://4kilodev.com",
  email: "hello@4kilodev.com",
  description: "Product engineering, web platforms, mobile products, and automation systems for ambitious teams.",
  address: { "@type": "PostalAddress", addressLocality: "Addis Ababa", addressCountry: "ET" },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://4kilodev.com"),
  title: { default: "4Kilo Dev — Product engineering for what’s next", template: "%s | 4Kilo Dev" },
  description: "Product engineering, automation, and software systems for ambitious teams. Built in Addis Ababa, Ethiopia.",
  applicationName: "4Kilo Dev",
  keywords: ["software development Ethiopia", "product engineering", "web development Addis Ababa", "mobile app development", "automation systems", "custom software"],
  creator: "4Kilo Dev",
  publisher: "4Kilo Dev",
  openGraph: {
    title: "4Kilo Dev — Product engineering for what’s next",
    description: "Dependable web platforms, mobile products, and automation systems for ambitious teams.",
    url: "https://4kilodev.com",
    siteName: "4Kilo Dev",
    locale: "en_ET",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "4Kilo Dev — Product engineering for what’s next" }],
  },
  twitter: { card: "summary_large_image", title: "4Kilo Dev — Product engineering for what’s next", description: "Dependable web platforms, mobile products, and automation systems for ambitious teams.", images: ["/og-image.png"] },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />{children}</body>
    </html>
  );
}
