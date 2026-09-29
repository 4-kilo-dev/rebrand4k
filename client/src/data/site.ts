import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Cloud, Code2, GitBranch, Smartphone } from "lucide-react";

export type Service = { title: string; description: string; icon: LucideIcon };
export type Project = { name: string; type: string; description: string; visual: string; image: string; href: string };
export type Partner = { name: string; logo?: string; mark?: string; wordmark?: string; descriptor: string };

export const services: Service[] = [
  { title: "Web Development", description: "Scalable, high-performance web platforms built around your goals.", icon: Code2 },
  { title: "Mobile Apps", description: "Beautiful, reliable mobile apps for iOS and Android.", icon: Smartphone },
  { title: "AI & Machine Learning", description: "Intelligent systems that automate, optimize, and create value.", icon: BrainCircuit },
  { title: "Automation & Integrations", description: "Connected workflows that remove repetitive work and keep systems moving.", icon: GitBranch },
  { title: "Cloud & DevOps", description: "Secure, scalable infrastructure for long-term growth.", icon: Cloud },
];

export const projects: Project[] = [
  { name: "Enate", type: "Web Platform · Restaurant", description: "A rich digital home for Ethiopian and Eritrean cuisine in Soho.", visual: "enate", image: "/projects/enate-site-clean.png", href: "https://enate.et" },
  { name: "Zions Coffee", type: "Web Platform · Hospitality", description: "A warm digital storefront for pastries, coffee, and pickup.", visual: "zions", image: "/projects/zions-site-clean.png", href: "https://zionscoffee.com" },
  { name: "Vortex Visual", type: "Web Platform · Creative Agency", description: "A bold marketing site for LED screens and live experiences.", visual: "vortex", image: "/projects/vortex-site.png", href: "https://vortexvisual.et" },
  { name: "Vortex Work", type: "Operations ERP · Booking & inventory", description: "An operational command center for online bookings, equipment inventory, crew preparation, and delivery workflows.", visual: "vortex-work", image: "/projects/vortex-work.png", href: "https://work.vortexvisual.et/" },
  { name: "Kelem", type: "School Management System · Education", description: "A clear school operations dashboard for students, teachers, attendance, scheduling, and performance insights.", visual: "kelem", image: "/projects/kelem-school-management.png", href: "/work" },
];

export const partners: Partner[] = [
  { name: "Partner mark N", logo: "/partners/partner-mark-n-transparent.png", descriptor: "Partner reference" },
  { name: "Enate", logo: "/partners/enate-logo.png", descriptor: "Restaurant" },
  { name: "Gulf Ingot Multimodal", logo: "/partners/gulf-ingot-logo.png", descriptor: "Ethiopia · Logistics" },
  { name: "Zions Coffee", logo: "/partners/zions-logo-transparent.png", descriptor: "Hospitality" },
    { name: "Adore Trading", logo: "/partners/adore-trading-logo.png", descriptor: "Ethiopia · Trading" },
  { name: "Vortex Visual", logo: "/partners/vortex-logo.png", descriptor: "Creative technology" },
  { name: "Ephron Industries", logo: "/partners/ephron-industries-logo.png", descriptor: "Ethiopia · Industry" },
];

export const principles = [
  { title: "Useful over flashy", description: "We make decisions based on the people using the product and the business it needs to move." },
  { title: "Clear communication", description: "You should always know what is happening, what is next, and why we made a call." },
  { title: "Built to last", description: "We choose practical foundations, document the important parts, and leave teams in a better place." },
  { title: "Local perspective, global craft", description: "We build from Addis Ababa for teams everywhere, bringing care and context to every project." },
];

export const products = [
  { name: "Geba", slug: "geba", tagline: "Verify payments before you complete the sale.", status: "Beta", description: "A mobile-first payment verification tool for Ethiopian businesses, with transaction checks, provider history, and clear confirmation before a sale is completed.", features: ["Telebirr and bank-transfer checks", "Duplicate transaction detection", "Branch-aware payment history"] },
  { name: "KiloFlow", slug: "kiloflow", tagline: "A lightweight workflow automation tool for modern teams.", status: "Beta", description: "KiloFlow removes the friction from day-to-day operations. Build simple automations, give your team visibility over shared work, and stop relying on spreadsheets and chat threads to keep things moving.", features: ["Simple workflow building", "Team visibility", "Useful automations"] },
  { name: "KiloDesk", slug: "kilodesk", tagline: "A calm operations hub for growing service businesses.", status: "Coming soon", description: "KiloDesk brings client context, repeatable playbooks, and clear reporting into one focused space — so service teams can spend less time on coordination and more time on delivery.", features: ["Shared client context", "Repeatable playbooks", "Actionable reporting"] },
];

export const jobs = [
  { slug: "full-stack-engineer", title: "Full Stack Engineer", department: "Engineering", location: "Addis Ababa / Remote", type: "Full-time", description: "We're looking for a full-stack engineer who enjoys building product end-to-end — from a well-considered API to a responsive, accessible UI. You'll work across client projects and our own products in a small team where your decisions have real weight.", responsibilities: ["Ship thoughtful product experiences", "Work closely with design and clients", "Improve systems as we learn"], requirements: ["Strong TypeScript fundamentals", "Comfort with modern React", "A practical, collaborative mindset"] },
  { slug: "mobile-developer", title: "Mobile Developer", department: "Engineering", location: "Addis Ababa / Hybrid", type: "Full-time", description: "We're hiring a mobile developer to help build and refine apps that people actually enjoy using. You'll work across the full mobile lifecycle — from first prototype to a stable, well-maintained release — on a team that cares about the details.", responsibilities: ["Build and refine mobile experiences", "Collaborate across product disciplines", "Support a reliable release process"], requirements: ["Experience with React Native or native mobile", "Strong product instincts", "Clear written communication"] },
  { slug: "ui-ux-designer", title: "UI/UX Designer", department: "Design", location: "Addis Ababa / Remote", type: "Part-time", description: "We're looking for a designer who thinks in systems and sweats the details. You'll shape how our products feel — turning complex requirements into clear, considered interfaces that are a pleasure to use and straightforward to build.", responsibilities: ["Turn complex needs into clear flows", "Create interfaces with a strong point of view", "Help teams see the product before it is built"], requirements: ["A portfolio showing end-to-end thinking", "Strong visual and interaction fundamentals", "Curiosity and care"] },
];
