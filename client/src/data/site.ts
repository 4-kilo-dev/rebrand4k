import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Cloud, Code2, GitBranch, Smartphone } from "lucide-react";

export type Service = { title: string; description: string; icon: LucideIcon };
export type Project = { name: string; type: string; description: string; visual: string; href: string };

export const services: Service[] = [
  { title: "Web Development", description: "Scalable, high-performance web platforms built around your goals.", icon: Code2 },
  { title: "Mobile Apps", description: "Beautiful, reliable mobile apps for iOS and Android.", icon: Smartphone },
  { title: "AI & Machine Learning", description: "Intelligent systems that automate, optimize, and create value.", icon: BrainCircuit },
  { title: "Automation & Integrations", description: "Connected workflows that remove repetitive work and keep systems moving.", icon: GitBranch },
  { title: "Cloud & DevOps", description: "Secure, scalable infrastructure for long-term growth.", icon: Cloud },
];

export const projects: Project[] = [
  { name: "Noodo Bakers", type: "Web Platform · E-commerce", description: "A warmer, faster ordering experience for a growing bakery brand.", visual: "noodo", href: "https://play.google.com/store/apps/details?id=com.noodobakers.customer" },
  { name: "Zions Coffee", type: "Web Platform · E-commerce", description: "A digital home for exceptional coffee, always.", visual: "zions", href: "https://zionscoffee.com" },
  { name: "Afriuz", type: "Mobile App · Fintech", description: "A brighter, simpler interface for everyday banking.", visual: "afriuz", href: "https://afriuz.com" },
  { name: "Vortex Visual", type: "Web Platform · Creative Agency", description: "Operations management for a fast-moving LED screen business.", visual: "vortex", href: "https://work.vortexvisual.et/" },
  { name: "Askamar Labor", type: "Web Platform · Recruitment", description: "A clearer path from skilled talent to meaningful work.", visual: "askamar", href: "https://askamarlabor.com/resume/" },
];

export const partners = [
  { name: "Noodo Bakers", mark: "NB", descriptor: "Commerce" },
  { name: "Zions Coffee", mark: "ZC", descriptor: "Hospitality" },
  { name: "Afriuz", mark: "A", descriptor: "Fintech" },
  { name: "Vortex Visual", mark: "VV", descriptor: "Operations" },
  { name: "Askamar Labor", mark: "AL", descriptor: "Recruitment" },
];

export const principles = [
  { title: "Useful over flashy", description: "We make decisions based on the people using the product and the business it needs to move." },
  { title: "Clear communication", description: "You should always know what is happening, what is next, and why we made a call." },
  { title: "Built to last", description: "We choose practical foundations, document the important parts, and leave teams in a better place." },
  { title: "Local perspective, global craft", description: "We build from Addis Ababa for teams everywhere, bringing care and context to every project." },
];

export const products = [
  { name: "KiloFlow", slug: "kiloflow", tagline: "A lightweight workflow automation tool for modern teams.", status: "Beta", description: "TODO: Replace this placeholder product story with the real problem, audience, and launch context.", features: ["Simple workflow building", "Team visibility", "Useful automations"] },
  { name: "KiloDesk", slug: "kilodesk", tagline: "A calm operations hub for growing service businesses.", status: "Coming soon", description: "TODO: Add the real product positioning, demo details, and waitlist destination.", features: ["Shared client context", "Repeatable playbooks", "Actionable reporting"] },
];

export const jobs = [
  { slug: "full-stack-engineer", title: "Full Stack Engineer", department: "Engineering", location: "Addis Ababa / Remote", type: "Full-time", description: "TODO: Replace with the real role description.", responsibilities: ["Ship thoughtful product experiences", "Work closely with design and clients", "Improve systems as we learn"], requirements: ["Strong TypeScript fundamentals", "Comfort with modern React", "A practical, collaborative mindset"] },
  { slug: "mobile-developer", title: "Mobile Developer", department: "Engineering", location: "Addis Ababa / Hybrid", type: "Full-time", description: "TODO: Replace with the real role description.", responsibilities: ["Build and refine mobile experiences", "Collaborate across product disciplines", "Support a reliable release process"], requirements: ["Experience with React Native or native mobile", "Strong product instincts", "Clear written communication"] },
  { slug: "ui-ux-designer", title: "UI/UX Designer", department: "Design", location: "Addis Ababa / Remote", type: "Part-time", description: "TODO: Replace with the real role description.", responsibilities: ["Turn complex needs into clear flows", "Create interfaces with a strong point of view", "Help teams see the product before it is built"], requirements: ["A portfolio showing end-to-end thinking", "Strong visual and interaction fundamentals", "Curiosity and care"] },
];
