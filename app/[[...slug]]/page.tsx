import type { Metadata } from "next";
import App from "../../client/src/App";
import { caseStudies, products } from "../../client/src/data/site";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "": {
    title: "4Kilo Dev — Product Engineering Studio",
    description: "Software that moves business forward. Dependable web platforms, mobile products, and automation systems built in Addis Ababa for ambitious teams.",
  },
  services: {
    title: "Software & Digital Services | 4Kilo Dev",
    description: "Web and mobile development, UI/UX design, ERP systems, brand identity, and automation software from 4Kilo Dev.",
  },
  work: {
    title: "Selected Work & Case Studies | 4Kilo Dev",
    description: "Explore digital products, mobile applications, and operational platforms designed and built by 4Kilo Dev.",
  },
  products: {
    title: "Products by 4Kilo Dev",
    description: "Discover Geba, KiloFlow, KiloDesk, and internal management platforms created by 4Kilo Dev.",
  },
  about: {
    title: "About the Studio | 4Kilo Dev",
    description: "Meet the product engineering studio building useful software from Addis Ababa, Ethiopia.",
  },
  contact: {
    title: "Contact & Discovery Call | 4Kilo Dev",
    description: "Tell 4Kilo Dev what you are building and book a discovery conversation with our team in Addis Ababa.",
  },
  careers: {
    title: "Careers & Opportunities | 4Kilo Dev",
    description: "Join 4Kilo Dev in Addis Ababa and build useful digital products with a collaborative, multidisciplinary team.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug = [] } = await params;
  const path = slug.join("/");
  const product = path.startsWith("products/") ? products.find(item => item.slug === path.slice("products/".length)) : undefined;
  const project = path.startsWith("work/") ? caseStudies.find(item => item.slug === path.slice("work/".length)) : undefined;
  const job = path.startsWith("careers/") ? path.slice("careers/".length).replaceAll("-", " ") : undefined;
  const content = product
    ? { title: `${product.name} | 4Kilo Dev`, description: `${product.name}: ${product.tagline} Built by 4Kilo Dev.` }
    : project
      ? { title: `${project.name} Case Study | 4Kilo Dev`, description: `${project.summary} Engineered by 4Kilo Dev.` }
      : job
        ? { title: `${job} | 4Kilo Dev Careers`, description: `Explore the ${job} opportunity at 4Kilo Dev in Addis Ababa.` }
        : pageMetadata[path] ?? { title: "4Kilo Dev — Product Engineering Studio", description: "Software that moves business forward. Built in Addis Ababa for ambitious teams everywhere." };
  const canonical = path ? `/${path}` : "/";
  return {
    title: {
      absolute: content.title,
    },
    description: content.description,
    alternates: { canonical },
    openGraph: { title: content.title, description: content.description, url: canonical, siteName: "4Kilo Dev", locale: "en_ET", type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "4Kilo Dev — Product Engineering Studio" }] },
    twitter: { card: "summary_large_image", title: content.title, description: content.description, images: ["/og-image.png"] },
  };
}

export default function CatchAllPage() {
  return <App />;
}
