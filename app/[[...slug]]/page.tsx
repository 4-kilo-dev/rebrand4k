import type { Metadata } from "next";
import App from "../../client/src/App";
import { caseStudies, products } from "../../client/src/data/site";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "": { title: "Product engineering for what’s next", description: "4Kilo Dev is an Addis Ababa software studio building dependable web platforms, mobile products, and automation systems for ambitious teams." },
  services: { title: "Software development services", description: "Product strategy, web and mobile development, AI, automation, and cloud engineering from 4Kilo Dev." },
  work: { title: "Selected work and case studies", description: "Explore digital products, websites, and operational platforms designed and built by 4Kilo Dev." },
  products: { title: "Products by 4Kilo Dev", description: "Meet Geba and the useful software products 4Kilo Dev is building for teams and businesses." },
  about: { title: "About the studio", description: "Meet the product engineering studio building useful software from Addis Ababa, Ethiopia." },
  contact: { title: "Book a discovery call", description: "Tell 4Kilo Dev what you are building and book a first conversation with our Addis Ababa product engineering team." },
  careers: { title: "Careers", description: "Join the 4Kilo Dev team and build useful digital products with a close, multidisciplinary team." },
};

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug = [] } = await params;
  const path = slug.join("/");
  const product = path.startsWith("products/") ? products.find(item => item.slug === path.slice("products/".length)) : undefined;
  const project = path.startsWith("work/") ? caseStudies.find(item => item.slug === path.slice("work/".length)) : undefined;
  const job = path.startsWith("careers/") ? path.slice("careers/".length).replaceAll("-", " ") : undefined;
  const content = product
    ? { title: product.name, description: product.tagline }
    : project
      ? { title: `${project.name} case study`, description: project.summary }
      : job
        ? { title: `${job} careers`, description: `Explore the ${job} opportunity at 4Kilo Dev in Addis Ababa.` }
        : pageMetadata[path] ?? { title: "4Kilo Dev — Product engineering", description: "Software that moves business forward. Built in Addis Ababa for ambitious teams everywhere." };
  const canonical = path ? `/${path}` : "/";
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical },
    openGraph: { title: content.title, description: content.description, url: canonical, siteName: "4Kilo Dev", locale: "en_ET", type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "4Kilo Dev — Product engineering for what’s next" }] },
    twitter: { card: "summary_large_image", title: content.title, description: content.description, images: ["/og-image.png"] },
  };
}

export default function CatchAllPage() {
  return <App />;
}
