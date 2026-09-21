import { Route, Switch } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import { SiteLayout } from "@/components/SiteLayout";
import Home from "@/pages/Home";
import { AboutPage, CareersPage, ContactPage, JobDetailPage, ProductDetailPage, ProductsPage, ServicesPage, WorkPage } from "@/pages/Pages";
import NotFound from "@/pages/NotFound";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/services" component={ServicesPage} />
    <Route path="/work" component={WorkPage} />
    <Route path="/products" component={ProductsPage} />
    <Route path="/products/:slug">{params => <ProductDetailPage slug={params.slug} />}</Route>
    <Route path="/careers" component={CareersPage} />
    <Route path="/careers/:slug">{params => <JobDetailPage slug={params.slug} />}</Route>
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark" switchable><TooltipProvider><Toaster /><SiteLayout><Router /></SiteLayout></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
