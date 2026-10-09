import "../client/src/index.css";
import type { Metadata } from "next";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://4kilodev.com/#organization",
      name: "4Kilo Dev",
      alternateName: ["4Kilo", "4K", "4Kilo Tech", "4Kilo Dev Studio", "4Kilo Technology"],
      url: "https://4kilodev.com",
      logo: {
        "@type": "ImageObject",
        url: "https://4kilodev.com/branding/4kilo-logo.jpg",
        caption: "4Kilo Dev / 4Kilo Tech Logo",
      },
      image: "https://4kilodev.com/og-image.png",
      email: "hello@4kilodev.com",
      telephone: ["+251913197834", "+251974210731"],
      description: "4Kilo Dev (also known as 4Kilo Tech, 4K, or 4Kilo) is a product engineering studio in Addis Ababa, Ethiopia specializing in custom web applications, mobile software, ERP systems, UI/UX design, and AI automation.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
      },
      sameAs: [
        "https://www.linkedin.com/company/4kilo-dev/",
        "https://www.instagram.com/4kilodev/",
        "https://www.tiktok.com/@4kilo_dev",
        "https://share.google/Yliy4cYKInxkfboRS",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://4kilodev.com/#website",
      url: "https://4kilodev.com",
      name: "4Kilo Dev — 4Kilo Tech & Product Engineering Studio",
      alternateName: ["4Kilo", "4K", "4Kilo Tech", "4Kilo Dev Studio"],
      publisher: {
        "@id": "https://4kilodev.com/#organization",
      },
      inLanguage: "en-US",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://4kilodev.com"),
  title: {
    default: "4Kilo Dev (4Kilo Tech) — Product Engineering Studio",
    template: "%s | 4Kilo Dev (4Kilo Tech)",
  },
  description: "4Kilo Dev (4Kilo Tech / 4K) is a product engineering and software development studio in Addis Ababa, Ethiopia. We build custom web apps, mobile products, ERP systems, and automation software.",
  applicationName: "4Kilo Dev",
  keywords: [
    "4Kilo Dev",
    "4Kilo",
    "4K",
    "4Kilo Tech",
    "4Kilo Dev Ethiopia",
    "4Kilo Tech Addis Ababa",
    "4Kilo software studio",
    "4K Tech Ethiopia",
    "software development Ethiopia",
    "product engineering Addis Ababa",
    "web development Ethiopia",
    "mobile app development Ethiopia",
    "ERP systems Ethiopia",
    "automation software Addis Ababa",
    "custom software development Ethiopia",
  ],
  creator: "4Kilo Dev",
  publisher: "4Kilo Dev",
  authors: [{ name: "4Kilo Dev", url: "https://4kilodev.com" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "4Kilo Dev (4Kilo Tech) — Product Engineering & Software Studio",
    description: "4Kilo Dev (4Kilo / 4K Tech) builds web platforms, mobile applications, ERP systems, and automation tools in Addis Ababa for ambitious teams worldwide.",
    url: "https://4kilodev.com",
    siteName: "4Kilo Dev",
    locale: "en_ET",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "4Kilo Dev (4Kilo Tech) — Product Engineering Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "4Kilo Dev (4Kilo Tech) — Product Engineering Studio",
    description: "4Kilo Dev (4Kilo / 4K Tech) builds web platforms, mobile applications, ERP systems, and automation tools in Addis Ababa.",
    images: ["/og-image.png"],
    creator: "@4kilodev",
  },
  icons: {
    icon: "/favicon-4kilo.ico",
    shortcut: "/favicon-4kilo.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
