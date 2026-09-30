import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { projects } from "@/data/site";

const links = [
  ["Home", "/"], ["Services", "/services"], ["Products", "/products"], ["Work", "/work"], ["Careers", "/careers"], ["About", "/about"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const nav = (close = false) => close && setOpen(false);
  return (
    <header className="site-header">
      <div className="container">
        <div className="navbar">
          <Link href="/" className="wordmark" onClick={() => nav(true)} aria-label="4Kilo Dev home"><span className="wordmark-logo" aria-hidden="true"><img src="/branding/4kilo-logo.jpg" width={30} height={30} alt="" /></span><span>4Kilo</span><span className="wordmark-suffix">Dev</span></Link>
          <nav className="nav-links" aria-label="Primary navigation">
            {links.map(([label, href]) => <Link key={href} href={href} className={`nav-link ${pathname === href ? "active" : ""}`}>{label}</Link>)}
          </nav>
          <div className="nav-actions">
            <Link href="/contact" className="btn btn-primary btn-sm">Partner with us <ArrowUpRight size={14} /></Link>
            <button className="icon-button menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
        {open && <nav className="mobile-menu" aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} className={`nav-link ${pathname === href ? "active" : ""}`} onClick={() => nav(true)}>{label}</Link>)}<Link href="/contact" className="btn btn-primary" onClick={() => nav(true)}>Partner with us <ArrowUpRight size={15} /></Link></nav>}
      </div>
    </header>
  );
}

export function SiteFooter() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  const linkedInUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="wordmark"><span className="wordmark-logo" aria-hidden="true"><img src="/branding/4kilo-logo.jpg" width={30} height={30} alt="" /></span><span>4Kilo</span><span className="wordmark-suffix">Dev</span></Link>
            <p>Software that moves business forward. Built from Addis Ababa for ambitious teams everywhere.</p>
          </div>
          <div>
            <p className="footer-title">Explore</p>
            <div className="footer-links"><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/products">Products</Link><Link href="/careers">Careers</Link></div>
          </div>
          <div>
            <p className="footer-title">Start here</p>
            <div className="footer-links"><Link href="/about">About us</Link><Link href="/contact">Contact</Link><a href="mailto:hello@4kilodev.com">hello@4kilodev.com</a><span>Addis Ababa, Ethiopia</span></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 4Kilo Dev. All rights reserved.</span><span>Made with care in Addis Ababa.</span><div className="footer-social">{linkedInUrl && <a href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="4Kilo Dev on LinkedIn"><Linkedin size={17} /></a>}{githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="4Kilo Dev on GitHub"><Github size={17} /></a>}{whatsappNumber && <a href={`https://wa.me/${whatsappNumber}?text=Hello%204Kilo%20Dev%2C%20I%27d%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noreferrer" aria-label="Message 4Kilo Dev on WhatsApp"><MessageCircle size={17} /></a>}</div></div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(
      ".section-head, .service-row, .reason-card, .testimonial-card, .case-study-row, .engagement-card, .product-band, .road-stop, .process-step",
    ));
    document.documentElement.classList.add("motion-ready");
    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 65}ms`);
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });

    elements.forEach(element => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
      elements.forEach(element => {
        element.classList.remove("scroll-reveal", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  return <div className="app-shell"><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}

export function SectionHeading({ eyebrow, title, href, linkLabel }: { eyebrow: string; title: string; href?: string; linkLabel?: string }) { return <div className="section-head"><div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2></div>{href && <Link href={href} className="text-link">{linkLabel ?? "View all"} <ArrowRight size={14} /></Link>}</div>; }

export function ProjectVisual({ visual, title, image }: { visual: string; title: string; image?: string }) {
  return (
    <div className={`work-visual ${visual} ${image ? "work-visual-image" : ""}`} role="img" aria-label={`${title} project preview`}>
      {image && <img className="work-screenshot" src={image} alt="" />}
      <div className="visual-label"><span>4K / FIELD NOTE</span><span>0{projects.findIndex(project => project.visual === visual) + 1}</span></div>
      {!image && <div className="visual-interface" aria-hidden="true">
        <div className="visual-interface-bar"><i /><i /><i /><span>{title}</span></div>
        <div className="visual-interface-body">
          <div className="visual-interface-copy"><i /><i /><i /><b /></div>
          <div className="visual-shape"><span /></div>
        </div>
      </div>}
      <div className="visual-headline">{visual === "enate" ? <>Eat<br />together.</> : visual === "zions" ? <>Exceptional<br />coffee. Always.</> : visual === "vortex" ? <>Big screens.<br />Bigger moments.</> : visual === "vortex-work" ? <>Work<br />in motion.</> : visual === "noodo" ? <>Fresh bakes.<br />Better days.</> : visual === "afriuz" ? <>Banking for a brighter future.</> : <>People. Work.<br />Progress.</>}</div>
    </div>
  );
}

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: React.ReactNode; copy: string }) { return <section className="page-hero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1 className="reveal">{title}</h1><p className="reveal reveal-delay">{copy}</p></div></section>; }

export function InlineCTA() { return <div className="container section-tight"><div className="cta-band"><div><div className="cta-arrow">↗</div></div><div style={{ flex: 1 }}><h2>Let’s build something great together.</h2><p>Have a project in mind? Book a free first conversation and we’ll help map a useful next step.</p></div><a href="mailto:hello@4kilodev.com?subject=Book%20a%20discovery%20call" className="btn">Book a discovery call <ArrowUpRight size={15} /></a></div></div>; }
