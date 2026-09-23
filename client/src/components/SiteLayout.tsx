import { Link, useLocation } from "wouter";
import { ArrowRight, ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { projects } from "@/data/site";

const links = [
  ["Home", "/"], ["Services", "/services"], ["Products", "/products"], ["Work", "/work"], ["Careers", "/careers"], ["About", "/about"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";
  const nav = (close = false) => close && setOpen(false);
  return (
    <header className="site-header">
      <div className="container">
        <div className="navbar">
          <Link href="/" className="wordmark" onClick={() => nav(true)} aria-label="4Kilo Dev home"><span className="wordmark-mark">4</span><span>4Kilo</span> Dev</Link>
          <nav className="nav-links" aria-label="Primary navigation">
            {links.map(([label, href]) => <Link key={href} href={href} className={`nav-link ${location === href ? "active" : ""}`}>{label}</Link>)}
          </nav>
          <div className="nav-actions">
            <Link href="/contact" className="btn btn-primary btn-sm">Partner with us <ArrowUpRight size={14} /></Link>
            <button className="icon-button" type="button" onClick={toggleTheme} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>{dark ? <Sun size={15} /> : <Moon size={15} />}</button>
            <button className="icon-button menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
        {open && <nav className="mobile-menu" aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} className={`nav-link ${location === href ? "active" : ""}`} onClick={() => nav(true)}>{label}</Link>)}<Link href="/contact" className="btn btn-primary" onClick={() => nav(true)}>Partner with us <ArrowUpRight size={15} /></Link></nav>}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="wordmark">4Kilo <span>Dev</span></Link>
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
        <div className="footer-bottom"><span>© 2026 4Kilo Dev. All rights reserved.</span><span>Made with care in Addis Ababa.</span></div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) { return <div className="app-shell"><SiteHeader /><main>{children}</main><SiteFooter /></div>; }

export function SectionHeading({ eyebrow, title, href, linkLabel }: { eyebrow: string; title: string; href?: string; linkLabel?: string }) { return <div className="section-head"><div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2></div>{href && <Link href={href} className="text-link">{linkLabel ?? "View all"} <ArrowRight size={14} /></Link>}</div>; }

export function ProjectVisual({ visual, title }: { visual: string; title: string }) {
  return (
    <div className={`work-visual ${visual}`} role="img" aria-label={`Abstract project artwork for ${title}`}>
      <div className="visual-label"><span>4K / FIELD NOTE</span><span>0{projects.findIndex(project => project.visual === visual) + 1}</span></div>
      <div className="visual-interface" aria-hidden="true">
        <div className="visual-interface-bar"><i /><i /><i /><span>{title}</span></div>
        <div className="visual-interface-body">
          <div className="visual-interface-copy"><i /><i /><i /><b /></div>
          <div className="visual-shape"><span /></div>
        </div>
      </div>
      <div className="visual-headline">{visual === "noodo" ? <>Fresh bakes.<br />Better days.</> : visual === "zions" ? <>Exceptional<br />coffee. Always.</> : visual === "afriuz" ? <>Banking for a brighter future.</> : visual === "vortex" ? <>Ideas into impact.</> : <>People. Work.<br />Progress.</>}</div>
    </div>
  );
}

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: React.ReactNode; copy: string }) { return <section className="page-hero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1 className="reveal">{title}</h1><p className="reveal reveal-delay">{copy}</p></div></section>; }

export function InlineCTA() { return <div className="container section-tight"><div className="cta-band"><div><div className="cta-arrow">↗</div></div><div style={{ flex: 1 }}><h2>Let’s build something great together.</h2><p>Have a project in mind? We’d love to hear from you.</p></div><Link href="/contact" className="btn">Start a project <ArrowUpRight size={15} /></Link></div></div>; }
