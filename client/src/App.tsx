"use client";

import { usePathname } from "next/navigation";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import { SiteLayout } from "@/components/SiteLayout";
import Home from "@/pages/Home";
import { AboutPage, CareersPage, ContactPage, JobDetailPage, ProductCaseStudyPage, ProductDetailPage, ProductsPage, ServicesPage, WorkPage } from "@/pages/Pages";
import NotFound from "@/pages/NotFound";

function Router() {
  const pathname = usePathname();

  if (pathname === "/") return <Home />;
  if (pathname === "/services") return <ServicesPage />;
  if (pathname === "/work") return <WorkPage />;
  if (pathname.startsWith("/work/")) return <ProductCaseStudyPage slug={pathname.replace("/work/", "")} />;
  if (pathname === "/products") return <ProductsPage />;
  if (pathname.startsWith("/products/")) {
    const slug = pathname.replace("/products/", "");
    return <ProductDetailPage slug={slug} />;
  }
  if (pathname === "/careers") return <CareersPage />;
  if (pathname.startsWith("/careers/")) {
    const slug = pathname.replace("/careers/", "");
    return <JobDetailPage slug={slug} />;
  }
  if (pathname === "/about") return <AboutPage />;
  if (pathname === "/contact") return <ContactPage />;
  if (pathname === "/404") return <NotFound />;

  return <NotFound />;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><SiteLayout><Router /></SiteLayout></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
