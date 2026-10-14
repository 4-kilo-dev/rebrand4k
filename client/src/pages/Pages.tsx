import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  Layers3,
  Loader2,
  MapPin,
  MessageCircle,
  PenLine,
  Phone,
  Quote,
  Send,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { InlineCTA, PageHero, ProjectVisual, SectionHeading } from "@/components/SiteLayout";
import { ServiceCarousel } from "@/components/ServiceCarousel";
import { TeamCarousel } from "@/components/TeamCarousel";
import { WorkCarousel } from "@/components/WorkCarousel";
import { caseStudies, engagementModels, jobs, principles, products, projects, services, team, testimonials } from "@/data/site";

// ─── EmailJS via REST API (no npm package needed) ────────────────────────────
const EJS_SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EJS_CONTACT = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID ?? "";
const EJS_APPLY   = process.env.NEXT_PUBLIC_EMAILJS_APPLICATION_TEMPLATE_ID ?? "";
const EJS_KEY     = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

function isEjsConfigured(serviceId: string, templateId: string, publicKey: string): boolean {
  if (!serviceId || !templateId || !publicKey) return false;
  if (serviceId.includes("xxxxxxx") || templateId.includes("xxxxxxx") || publicKey.includes("xxxx")) return false;
  return true;
}

async function sendEmail(templateId: string, params: Record<string, string>): Promise<void> {
  const activeTemplate = templateId || EJS_APPLY;
  if (!isEjsConfigured(EJS_SERVICE, activeTemplate, EJS_KEY)) {
    throw new Error("EMAILJS_NOT_CONFIGURED");
  }

  const postEmail = async (tid: string) => {
    return fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: EJS_SERVICE,
        template_id: tid,
        user_id: EJS_KEY,
        template_params: params,
      }),
    });
  };

  let res = await postEmail(activeTemplate);

  // If the template ID is invalid/not found and a working fallback exists, retry once with the fallback template
  if (!res.ok && res.status === 400 && EJS_APPLY && activeTemplate !== EJS_APPLY) {
    const errorText = await res.text();
    if (errorText.toLowerCase().includes("not found")) {
      console.warn(`[EmailJS] Template ${activeTemplate} not found. Retrying with fallback ${EJS_APPLY}...`);
      res = await postEmail(EJS_APPLY);
    } else {
      throw new Error(`EmailJS error (${res.status}): ${errorText}`);
    }
  }

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`EmailJS error (${res.status}): ${text}`);
  }
}



// ─── Services ────────────────────────────────────────────────────────────────

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Good software starts with a <em style={{ color: "var(--yellow)", fontStyle: "normal" }}>clear reason.</em></>}
        copy="We help teams turn meaningful problems into dependable digital products — from the first sketch to the next version."
      />
      <section className="page-section">
        <div className="container">
          <SectionHeading eyebrow="Core Capabilities" title="What we bring to your product." />
          <ServiceCarousel services={services} />
        </div>
      </section>
      <section className="page-section">
        <div className="container content-grid">
          <div>
            <div className="eyebrow">A useful partnership</div>
            <h2>We bring enough structure to make progress feel easy.</h2>
          </div>
          <div>
            <p>Not every project needs more features. It needs the right features, understood by the people who will use them. We work alongside your team to find that shape and build it with care.</p>
            <Link href="/contact" className="text-link">Talk through your project <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
      <section className="page-section engagement-section" id="engagement">
        <div className="container">
          <SectionHeading eyebrow="Ways to work together" title="A model that fits the work." />
          <div className="card-grid">{engagementModels.map((model, index) => <article className="info-card engagement-card" key={model.name}><span className="eyebrow">0{index + 1} · {model.timing}</span><h3>{model.name}</h3><p>{model.description}</p><ul className="detail-list">{model.includes.map(item => <li key={item}><CheckCircle2 size={15} />{item}</li>)}</ul><Link href="/contact?topic=engagement" className="text-link">Discuss this model <ArrowRight size={14} /></Link></article>)}</div>
        </div>
      </section>
      <InlineCTA />
    </>
  );
}

// ─── Work ─────────────────────────────────────────────────────────────────────

export function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title={<>A few things we've <em style={{ color: "var(--yellow)", fontStyle: "normal" }}>helped move forward.</em></>}
        copy="Client work across food, finance, recruitment, and creative operations."
      />
      <section className="page-section">
        <div className="container">
          <WorkCarousel projects={projects} />
        </div>
      </section>
      <section className="page-section case-study-list-section" style={{ paddingTop: 0 }}>
        <div className="container"><SectionHeading eyebrow="Case studies" title="The thinking behind the finished product." /><div className="case-study-list">{caseStudies.map((study, index) => <Link href={`/work/${study.slug}`} className="case-study-row" key={study.slug}><span className="case-study-index">0{index + 1}</span><div><span className="eyebrow">{study.sector}</span><h3>{study.name}</h3><p>{study.summary}</p></div><ArrowUpRight size={20} /></Link>)}</div></div>
      </section>
      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="dark-panel">
            <div className="eyebrow">What matters</div>
            <h3 style={{ marginTop: 10 }}>A finished interface is only the beginning.</h3>
            <p>We care about the handoff, the load time, the edge cases, and what happens after launch. Every project we ship includes proper documentation and a plan for what comes next.</p>
          </div>
        </div>
      </section>
      <InlineCTA />
    </>
  );
}

export function ProductCaseStudyPage({ slug }: { slug: string }) {
  const study = caseStudies.find(item => item.slug === slug);
  if (!study) return <><PageHero eyebrow="Case study" title={<>Work built around <em style={{ color: "var(--yellow)", fontStyle: "normal" }}>real needs.</em></>} copy="This case study could not be found." /><InlineCTA /></>;
  const project = projects.find(item => item.name === study.name);
  return <>
    <PageHero eyebrow={`Case study · ${study.sector}`} title={<>{study.name} <em style={{ color: "var(--yellow)", fontStyle: "normal" }}>in practice.</em></>} copy={study.summary} />
    {project && <section className="page-section case-study-preview"><div className="container">{project.image ? <img src={project.image} alt={`${study.name} project interface`} /> : <ProjectVisual visual={project.visual} title={project.name} />}</div></section>}
    <section className="page-section"><div className="container case-study-story"><article><div className="eyebrow">The challenge</div><h2>Start with what needed to work better.</h2><p>{study.challenge}</p></article><article><div className="eyebrow">Our approach</div><h2>Make the important path clear.</h2><p>{study.approach}</p></article></div></section>
    <section className="page-section case-study-delivery"><div className="container content-grid"><div><div className="eyebrow">What we delivered</div><h2>Thoughtful details, connected end to end.</h2></div><div><ul className="detail-list">{study.delivery.map(item => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul></div></div></section>
    <section className="page-section"><div className="container"><div className="dark-panel case-study-outcome"><div className="eyebrow">The result</div><h3>{study.name}, ready for its next chapter.</h3><p>{study.outcome}</p></div><div className="case-study-next"><Link href="/work" className="text-link"><ArrowRight size={14} /> Back to all work</Link><Link href="/contact?topic=similar-project" className="btn btn-primary">Build something similar <ArrowUpRight size={15} /></Link></div></div></section>
    <InlineCTA />
  </>;
}

// ─── Products ─────────────────────────────────────────────────────────────────

export function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>Ideas we're building <em style={{ color: "var(--yellow)", fontStyle: "normal" }}>ourselves.</em></>}
        copy="Products are our space to learn in public, follow a hunch, and build something useful from the ground up."
      />
      <section className="page-section">
        <div className="container">
          <div className="card-grid">
            {products.map(product => (
              <article className="info-card" key={product.slug}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div className="product-mark-icon" style={{ width: 30, height: 30 }}><Layers3 size={15} /></div>
                  <span className="eyebrow">{product.status}</span>
                </div>
                <h3>{product.name}</h3>
                <p style={{ color: "var(--paper)" }}>{product.tagline}</p>
                <p>{product.description}</p>
                <Link href={`/products/${product.slug}`} className="text-link">Learn more <ArrowRight size={14} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <InlineCTA />
    </>
  );
}

// ─── Product Detail ───────────────────────────────────────────────────────────

export function ProductDetailPage({ slug }: { slug: string }) {
  const product = products.find(p => p.slug === slug) ?? products[0];
  return (
    <>
      <PageHero
        eyebrow={`Product · ${product.status}`}
        title={<>{product.name} <em style={{ color: "var(--yellow)", fontStyle: "normal" }}>for better flow.</em></>}
        copy={product.tagline}
      />
      <section className="page-section">
        <div className="container content-grid">
          <div>
            <div className="eyebrow">The idea</div>
            <h2>Less busywork. More forward motion.</h2>
            <p>{product.description}</p>
          </div>
          <div className="dark-panel">
            <PenLine size={22} color="var(--yellow)" />
            <h3>What it does</h3>
            <ul className="detail-list">
              {product.features.map(feature => <li key={feature}><CheckCircle2 size={15} /> {feature}</li>)}
            </ul>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: 20 }}>
              {product.status === "Live" ? "Visit product" : product.status === "Beta" ? "Request a demo" : "Join waitlist"} <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading eyebrow="FAQ" title="Questions, before you dive in." />
          {["Who is this for?", "When can I try it?", "Can you help us shape the workflow?"].map(q => (
            <details key={q} className="info-card" style={{ marginBottom: 10 }}>
              <summary style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
                {q}<ChevronDown size={16} color="var(--yellow)" />
              </summary>
              <p style={{ marginTop: 14 }}>Reach out via the <Link href="/contact" className="text-link">contact page</Link> and we'll give you a direct answer for {product.name}.</p>
            </details>
          ))}
        </div>
      </section>
      <InlineCTA />
    </>
  );
}

// ─── Careers ──────────────────────────────────────────────────────────────────

export function CareersPage() {
  const [dept, setDept] = useState("All");
  const [type, setType] = useState("All");
  const filtered = useMemo(
    () => jobs.filter(j => (dept === "All" || j.department === dept) && (type === "All" || j.type === type)),
    [dept, type],
  );
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Do work you can be <em style={{ color: "var(--yellow)", fontStyle: "normal" }}>proud of.</em></>}
        copy="We're a small, thoughtful team building useful things from Addis Ababa. If you care about the craft and want room to do it properly, we'd love to hear from you."
      />
      <section className="page-section">
        <div className="container content-grid">
          <div>
            <div className="eyebrow">Our culture</div>
            <h2>Good work needs good conditions.</h2>
            <p>We value clarity, curiosity, and enough space to do the work properly. We are serious about the craft, but not precious about ourselves.</p>
          </div>
          <div className="dark-panel">
            <Users size={22} color="var(--yellow)" />
            <h3>How we hire</h3>
            <p>Apply → Intro call → Practical task → Team interview → Offer</p>
            <p>We keep the process focused, respectful, and close to the actual work.</p>
          </div>
        </div>
      </section>
      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading eyebrow="Open positions" title="Find your next good challenge." />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}>
            <select className="btn btn-ghost btn-sm" value={dept} onChange={e => setDept(e.target.value)}>
              <option>All</option><option>Engineering</option><option>Design</option>
            </select>
            <select className="btn btn-ghost btn-sm" value={type} onChange={e => setType(e.target.value)}>
              <option>All</option><option>Full-time</option><option>Part-time</option>
            </select>
          </div>
          <div className="card-grid">
            {filtered.map(job => (
              <Link href={`/careers/${job.slug}`} className="info-card" key={job.slug}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                  <BriefcaseBusiness size={21} color="var(--yellow)" /><ArrowUpRight size={16} color="var(--yellow)" />
                </div>
                <h3>{job.title}</h3>
                <p>{job.department} · {job.location} · {job.type}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <InlineCTA />
    </>
  );
}

// ─── Job Detail ───────────────────────────────────────────────────────────────

export function JobDetailPage({ slug }: { slug: string }) {
  const job = jobs.find(j => j.slug === slug) ?? jobs[0];
  return (
    <>
      <PageHero
        eyebrow={`${job.department} · ${job.type}`}
        title={<>{job.title} <em style={{ color: "var(--yellow)", fontStyle: "normal" }}>at 4Kilo.</em></>}
        copy={job.description}
      />
      <section className="page-section">
        <div className="container content-grid">
          <div>
            <div className="eyebrow">The role</div>
            <h2>Make something useful with us.</h2>
            <p>This is a hands-on position on a small, focused team. You'll work closely with clients and colleagues, ship real things, and help us keep improving how we work.</p>
            <h3 style={{ fontFamily: "Space Grotesk", fontSize: "1.2rem", marginTop: 28 }}>Responsibilities</h3>
            <ul className="detail-list">
              {job.responsibilities.map(r => <li key={r}><CheckCircle2 size={15} /> {r}</li>)}
            </ul>
            <h3 style={{ fontFamily: "Space Grotesk", fontSize: "1.2rem", marginTop: 28 }}>What we're looking for</h3>
            <ul className="detail-list">
              {job.requirements.map(r => <li key={r}><CheckCircle2 size={15} /> {r}</li>)}
            </ul>
          </div>
          <ApplicationForm jobTitle={job.title} />
        </div>
      </section>
    </>
  );
}

// ─── Application Form (EmailJS via fetch) ────────────────────────────────────

type FormStatus = "idle" | "sending" | "sent" | "error";

function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fields, setFields] = useState({ from_name: "", from_email: "", portfolio: "", cover_note: "" });

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(f => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendEmail(EJS_APPLY, {
        ...fields,
        job_title: jobTitle,
        name: fields.from_name,
        from_name: fields.from_name,
        user_name: fields.from_name,
        email: fields.from_email,
        from_email: fields.from_email,
        user_email: fields.from_email,
        reply_to: fields.from_email,
        portfolio: fields.portfolio,
        cover_note: fields.cover_note,
        message: fields.cover_note,
      });
      setStatus("sent");
    } catch (err: unknown) {
      console.error("[EmailJS] Send failed:", err);
      const msg = err instanceof Error ? err.message : "";
      if (msg === "EMAILJS_NOT_CONFIGURED") {
        setErrorMsg("Email service is not configured yet. Please check your EmailJS credentials in .env.local.");
      } else if (msg.startsWith("EmailJS error")) {
        setErrorMsg(`Failed to send: ${msg.replace(/^EmailJS error \(\d+\):\s*/, "")}`);
      } else {
        setErrorMsg("Something went wrong sending your application. Please try again or email us directly at hello@4kilodev.com");
      }
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="success-card">
        <CheckCircle2 size={25} />
        <h3>Application received.</h3>
        <p>Thanks for putting yourself forward for <strong>{jobTitle}</strong>. We'll review your application and be in touch within a few days.</p>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          style={{ marginTop: 16 }}
          onClick={() => {
            setFields({ from_name: "", from_email: "", portfolio: "", cover_note: "" });
            setStatus("idle");
          }}
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="eyebrow">Apply now</div>
      <h3 style={{ fontFamily: "Space Grotesk", fontSize: "1.35rem", margin: "9px 0 18px" }}>Tell us a little about you.</h3>
      <div className="form-grid">
        <Field label="Name" placeholder="Your name" value={fields.from_name} onChange={set("from_name")} />
        <Field label="Email" placeholder="you@example.com" type="email" value={fields.from_email} onChange={set("from_email")} />
        <Field label="Portfolio / GitHub / LinkedIn" placeholder="https://" value={fields.portfolio} onChange={set("portfolio")} full />
        <Field label="CV (PDF)" type="file" full />
        <Field label="Short cover note" placeholder="A few words about why this role feels like a fit…" textarea value={fields.cover_note} onChange={set("cover_note")} full />
      </div>
      {status === "error" && (
        <p style={{ color: "var(--yellow)", fontSize: "0.9rem", marginTop: 12 }}>{errorMsg}</p>
      )}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"} style={{ marginTop: 18 }}>
        {status === "sending" ? <><Loader2 size={15} style={{ animation: "spin 1s linear infinite" }} /> Sending…</> : <>Send application <Send size={15} /></>}
      </button>
    </form>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About 4Kilo"
        title={<>Small team. <em style={{ color: "var(--yellow)", fontStyle: "normal" }}>Useful work.</em></>}
        copy="4Kilo Dev is a software development studio based in Addis Ababa, Ethiopia. We build web platforms, mobile apps, and AI-integrated systems for clients here and internationally."
      />
      <section className="page-section">
        <div className="container content-grid">
          <div>
            <div className="eyebrow">Our story</div>
            <h2>Close enough to care. Skilled enough to ship.</h2>
          </div>
          <div>
            <p>We started 4Kilo Dev with a simple belief: the best software is useful, understandable, and made with the people who need it. Our work spans product thinking, design, engineering, and the steady care that keeps a system healthy after launch.</p>
            <p>Based in the 4 Kilo neighbourhood of Addis Ababa, we work with clients across Ethiopia and internationally — bringing local context and global craft to every project we take on.</p>
          </div>
        </div>
      </section>
      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading eyebrow="What we value" title="The principles behind the work." />
          <div className="value-timeline">
            {principles.map((p, i) => (
              <article className="value-item" key={p.title}>
                <span className="value-marker" aria-hidden="true" />
                <div className="value-card">
                  <div className="eyebrow">0{i + 1} <span> / 04</span></div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="page-section team-section" id="team">
        <div className="container">
          <SectionHeading eyebrow="The team" title="Small, multidisciplinary, close to the work." />
          <p className="team-subhead">
            We bring product strategy, UI/UX design, full-stack engineering, mobile development, and operational automation together in one collaborative team based in Addis Ababa. We work directly on every project without layers or handoffs.
          </p>
          <TeamCarousel members={team} />
        </div>
      </section>
      <section className="page-section" id="client-voices" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading eyebrow="Client voices" title="Built in true partnership." />
          <div className="testimonial-modern-grid">
            {testimonials.map((item, i) => (
              <figure className="testimonial-v2-card" key={i}>
                <div className="testimonial-v2-head">
                  <div className="testimonial-avatar">{item.name.split(" ")[0][0] + (item.name.split(" ")[1] ? item.name.split(" ")[1][0] : "")}</div>
                  <div className="testimonial-meta">
                    <strong>{item.name}</strong>
                    <span>{item.context}</span>
                  </div>
                  <Quote size={20} className="testimonial-v2-icon" />
                </div>
                <blockquote>"{item.quote}"</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <InlineCTA />
    </>
  );
}

// ─── Contact Page (EmailJS via fetch) ────────────────────────────────────────

export function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fields, setFields] = useState({ from_name: "", from_email: "", project_type: "", budget: "", message: "" });

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(f => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendEmail(EJS_CONTACT, {
        ...fields,
        name: fields.from_name,
        from_name: fields.from_name,
        user_name: fields.from_name,
        email: fields.from_email,
        from_email: fields.from_email,
        user_email: fields.from_email,
        reply_to: fields.from_email,
        project_type: fields.project_type,
        budget: fields.budget,
        message: fields.message,
      });
      setStatus("sent");
    } catch (err: unknown) {
      console.error("[EmailJS] Send failed:", err);
      const msg = err instanceof Error ? err.message : "";
      if (msg === "EMAILJS_NOT_CONFIGURED") {
        setErrorMsg("Email service is not configured yet. Please check your EmailJS credentials in .env.local.");
      } else if (msg.startsWith("EmailJS error")) {
        setErrorMsg(`Failed to send: ${msg.replace(/^EmailJS error \(\d+\):\s*/, "")}`);
      } else {
        setErrorMsg("Something went wrong sending your message. Please try again or email us directly at hello@4kilodev.com");
      }
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's make the next <em style={{ color: "var(--yellow)", fontStyle: "normal" }}>move.</em></>}
        copy="Tell us what you're building, what is getting in the way, or what you want to explore. We'll get back to you with a thoughtful next step."
      />
      <section className="page-section">
        <div className="container form-shell">
          <div>
            <div className="eyebrow">Start a conversation</div>
            <h2>A good project starts with a good question.</h2>
            <p>Share a little context and we'll reply at <a href="mailto:hello@4kilodev.com" className="text-link">hello@4kilodev.com</a>.</p>
            <div className="detail-list">
              <div><Phone size={16} /> <a href="tel:+251913197834" className="text-link">+251913197834</a> / <a href="tel:+251974210731" className="text-link">+251974210731</a></div>
              <div><MapPin size={16} /> Addis Ababa, Ethiopia</div>
              <div><MessageCircle size={16} /> Usually replying within 1–2 business days</div>
              <div><Zap size={16} /> Web, mobile, AI, and custom software</div>
            </div>
            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:hello@4kilodev.com?subject=Book%20a%20discovery%20call">Book a discovery call <ArrowUpRight size={15} /></a>
              {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER && <a className="btn btn-secondary" href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.replace(/\D/g, "")}?text=Hello%204Kilo%20Dev%2C%20I%27d%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noreferrer">WhatsApp us <MessageCircle size={15} /></a>}
            </div>
          </div>

          {status === "sent" ? (
            <div className="success-card">
              <CheckCircle2 size={25} />
              <h3>Message sent.</h3>
              <p>Thanks for reaching out. We'll review your message and come back to you within 1–2 business days.</p>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                style={{ marginTop: 16 }}
                onClick={() => {
                  setFields({ from_name: "", from_email: "", project_type: "", budget: "", message: "" });
                  setStatus("idle");
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="form-grid">
                <Field label="Name" placeholder="Your name" value={fields.from_name} onChange={set("from_name")} />
                <Field label="Email" placeholder="you@example.com" type="email" value={fields.from_email} onChange={set("from_email")} />
                <Field label="Project type" placeholder="Web, mobile, AI…" value={fields.project_type} onChange={set("project_type")} required={false} />
                <Field label="Budget range" placeholder="A helpful range" value={fields.budget} onChange={set("budget")} required={false} />
                <Field label="Message" placeholder="What are you hoping to build?" textarea value={fields.message} onChange={set("message")} full />
              </div>
              {status === "error" && (
                <p style={{ color: "var(--yellow)", fontSize: "0.9rem", marginTop: 12 }}>{errorMsg}</p>
              )}
              <button className="btn btn-primary" type="submit" disabled={status === "sending"} style={{ marginTop: 18 }}>
                {status === "sending"
                  ? <><Loader2 size={15} style={{ animation: "spin 1s linear infinite" }} /> Sending…</>
                  : <>Send inquiry <Send size={15} /></>}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

// ─── Field helper ─────────────────────────────────────────────────────────────

function Field({
  label, placeholder, type = "text", textarea = false, full = false, value, onChange, required = true,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  full?: boolean;
  value?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}) {
  return (
    <div className={`field ${full ? "full" : ""}`}>
      <label>{label}</label>
      {textarea
        ? <textarea placeholder={placeholder} value={value} onChange={onChange} required={required} />
        : <input type={type} placeholder={placeholder} value={type === "file" ? undefined : value} onChange={onChange} required={type === "file" ? false : required} />}
    </div>
  );
}
