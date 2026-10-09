import type { MetadataRoute } from "next";
import { caseStudies, products } from "../client/src/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://4kilodev.com";

  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/products",
    "/careers",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const workRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productRoutes = products.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const jobRoutes = [
    "full-stack-engineer",
    "mobile-developer",
    "ui-ux-designer",
  ].map((job) => ({
    url: `${baseUrl}/careers/${job}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...workRoutes, ...productRoutes, ...jobRoutes];
}
