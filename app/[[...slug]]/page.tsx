import type { Metadata } from "next";
import App from "../../client/src/App";
import { caseStudies, products } from "../../client/src/data/site";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "": {
    title: "4Kilo Dev (4Kilo Tech) — Product Engineering & Software Studio",
    description: "4Kilo Dev (also 4Kilo Tech / 4K / 4Kilo) is an Addis Ababa software studio building web platforms, mobile apps, ERP systems, and automation software for ambitious teams.",
  },
  services: {
    title: "Software & Digital Services | 4Kilo Dev (4Kilo Tech)",
    description: "Web & mobile development, UI/UX design, ERP systems, graphic design, social media management, video editing, and AI automation by 4Kilo Dev (4Kilo Tech / 4K).",
  },
  work: {
    title: "Case Studies & Work | 4Kilo Dev (4Kilo Tech)",
    description: "Explore digital products, mobile applications, and enterprise systems built by 4Kilo Dev (4Kilo Tech / 4K) in Addis Ababa.",
  },
  products: {
    title: "Products by 4Kilo Dev (4Kilo Tech)",
    description: "Discover Geba, KiloFlow, KiloDesk, and internal management platforms created by 4Kilo Dev (4Kilo Tech).",
  },
  about: {
    title: "About the Studio | 4Kilo Dev (4Kilo Tech)",
    description: "Meet 4Kilo Dev (4Kilo Tech / 4K), an engineering-driven software development studio based in Addis Ababa, Ethiopia.",
  },
  contact: {
    title: "Contact & Discovery Call | 4Kilo Dev (4Kilo Tech)",
    description: "Get in touch with 4Kilo Dev (4Kilo Tech). Call +251913197834 / +251974210731 or email hello@4kilodev.com to start your project.",
  },
  careers: {
    title: "Careers & Jobs | 4Kilo Dev (4Kilo Tech)",
    description: "Join 4Kilo Dev (4Kilo Tech / 4K) in Addis Ababa and build world-class digital products with a multidisciplinary team.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug = [] } = await params;
  const path = slug.join("/");
  const product = path.startsWith("products/") ? products.find(item => item.slug === path.slice("products/".length)) : undefined;
  const project = path.startsWith("work/") ? caseStudies.find(item => item.slug === path.slice("work/".length)) : undefined;
  const job = path.startsWith("careers/") ? path.slice("careers/".length).replaceAll("-", " ") : undefined;
  const content = product
    ? { title: `${product.name} — Product by 4Kilo Dev (4Kilo Tech)`, description: `${product.name}: ${product.tagline} Built by 4Kilo Dev (4Kilo Tech / 4K).` }
    : project
      ? { title: `${project.name} Case Study | 4Kilo Dev (4Kilo Tech)`, description: `${project.summary} Engineered by 4Kilo Dev (4Kilo Tech / 4K).` }
      : job
        ? { title: `${job} Careers | 4Kilo Dev (4Kilo Tech)`, description: `Explore the ${job} position at 4Kilo Dev (4Kilo Tech / 4K) in Addis Ababa.` }
        : pageMetadata[path] ?? { title: "4Kilo Dev (4Kilo Tech) — Product Engineering Studio", description: "Software that moves business forward. Built in Addis Ababa by 4Kilo Dev (4Kilo Tech / 4K) for ambitious teams everywhere." };
  const canonical = path ? `/${path}` : "/";
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical },
    openGraph: { title: content.title, description: content.description, url: canonical, siteName: "4Kilo Dev (4Kilo Tech)", locale: "en_ET", type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "4Kilo Dev (4Kilo Tech) — Product Engineering Studio" }] },
    twitter: { card: "summary_large_image", title: content.title, description: content.description, images: ["/og-image.png"] },
  };
}

export default function CatchAllPage() {
  return <App />;
}
