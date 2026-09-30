import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Cloud, Code2, GitBranch, Image, LayoutDashboard, Palette, Scissors, Share2, Smartphone } from "lucide-react";

export type Service = { title: string; description: string; icon: LucideIcon };
export type Project = { name: string; type: string; description: string; visual: string; image?: string; href: string; approach?: string };
export type Partner = { name: string; logo?: string; mark?: string; wordmark?: string; descriptor: string };

export const services: Service[] = [
  { title: "Web Development", description: "Scalable, high-performance web platforms built around your goals.", icon: Code2 },
  { title: "Mobile Apps", description: "Beautiful, reliable mobile apps for iOS and Android.", icon: Smartphone },
  { title: "UI/UX Design", description: "Interfaces that are clear, considered, and a pleasure to use — from first wireframe to polished screen.", icon: LayoutDashboard },
  { title: "Graphic Design", description: "Visual work that communicates with confidence — from brand assets to marketing material.", icon: Palette },
  { title: "Logo & Brand Identity", description: "Distinctive marks and identity systems that give a business a coherent, memorable presence.", icon: Image },
  { title: "Social Media Management", description: "Consistent, on-brand content and community presence across the platforms that matter to your audience.", icon: Share2 },
  { title: "Video Editing", description: "Polished video content cut for purpose — from short-form social clips to longer brand films.", icon: Scissors },
  { title: "AI & Machine Learning", description: "Intelligent systems that automate, optimize, and create value.", icon: BrainCircuit },
  { title: "Automation & Integrations", description: "Connected workflows that remove repetitive work and keep systems moving.", icon: GitBranch },
  { title: "Cloud & DevOps", description: "Secure, scalable infrastructure for long-term growth.", icon: Cloud },
];

export const projects: Project[] = [
  { name: "Enate", type: "Web Platform · Restaurant", description: "A rich digital home for Ethiopian and Eritrean cuisine in Soho.", visual: "enate", image: "/projects/enate-site-clean.png", href: "https://enate.et" },
  { name: "Zions Coffee", type: "Web Platform · Hospitality", description: "A warm digital storefront for pastries, coffee, and pickup.", visual: "zions", image: "/projects/zions-site-clean.png", href: "https://zionscoffee.com" },
  { name: "Vortex Visual", type: "Web Platform · Creative Agency", description: "A bold marketing site for LED screens and live experiences.", visual: "vortex", image: "/projects/vortex-site.png", href: "https://vortexvisual.et" },
  { name: "Vortex Work", type: "Operations ERP · Booking & inventory", description: "An operational command center for online bookings, equipment inventory, crew preparation, and delivery workflows.", visual: "vortex-work", image: "/projects/vortex-work.png", href: "https://work.vortexvisual.et/" },
  { name: "Kelem", type: "School Management System · Education", description: "A clear school operations dashboard for students, teachers, attendance, scheduling, and performance insights.", visual: "kelem", image: "/projects/kelem-school-management.png", href: "/work", approach: "Product engineering · SaaS platforms" },
  { name: "Noodo Bakers", type: "Android App · Bakery & ordering", description: "A mobile ordering experience for browsing handcrafted cakes and pastries, choosing delivery, pickup, or dine-in, and tracking an order in real time.", visual: "noodo", href: "https://play.google.com/store/apps/details?id=com.noodobakers.customer&pli=1", approach: "Mobile engineering · Android" },
];

export const caseStudies = [
  { slug: "enate", name: "Enate", sector: "Hospitality", summary: "A warm, immersive digital home for Ethiopian and Eritrean dining in Soho, London.", challenge: "Help guests understand the restaurant's food, atmosphere, story, and events before they arrive, while making table discovery straightforward.", approach: "We shaped the experience around strong food imagery, a clear restaurant story, and direct paths to menus, events, and reservations.", delivery: ["Restaurant brand translated into a responsive web experience", "Menu, story, room, and events surfaced in clear navigation", "Booking action stays visible throughout the visit"], outcome: "A distinctive restaurant website that brings the Enate experience online and makes the next step clear for guests." },
  { slug: "zions-coffee", name: "Zions Coffee", sector: "Hospitality & commerce", summary: "A digital storefront for specialty coffee, pastries, celebration cakes, and branch visits.", challenge: "Present a growing range of bakery and coffee offerings in a way that feels warm, trustworthy, and easy to act on.", approach: "We paired an editorial brand feel with direct paths to branch information, support, and product discovery, using Zions' deep green and gold identity.", delivery: ["Responsive storefront experience", "Featured coffee and bakery product storytelling", "Branch and support navigation"], outcome: "A polished digital front door that gives Zions' coffee and bakery range a coherent place online." },
  { slug: "vortex-visual", name: "Vortex Visual", sector: "Events & creative technology", summary: "A bold marketing site for LED screen rental and permanent display installations.", challenge: "Explain a specialist screen and event service quickly, while giving prospective clients a clear route to request a quote.", approach: "We centered the experience on high-impact event visuals, a concise service message, and straightforward service and portfolio navigation.", delivery: ["Brand-led responsive website", "Clear service and portfolio discovery", "Quote-focused calls to action"], outcome: "A focused online presence built to introduce Vortex Visual's screens and event capabilities." },
  { slug: "vortex-work", name: "Vortex Work", sector: "Operations software", summary: "An online booking, inventory, and operational workflow platform for an LED screen business.", challenge: "Coordinate bookings, equipment, crew, and delivery status across a workflow where each handoff matters.", approach: "We brought day-to-day operations into a single dashboard, with booking visibility, equipment tracking, reports, and a staged preparation-to-completion flow.", delivery: ["Online booking and operational overview", "Equipment inventory and checkout flows", "Crew, damage, and reporting tools", "Booking lifecycle visibility from reservation through completion"], outcome: "A connected operations platform that brings core ERP-style workflows into one working system." },
  { slug: "kelem", name: "Kelem", sector: "Education technology", summary: "A school management dashboard for student, teacher, schedule, attendance, and performance information.", challenge: "Give school administrators a clear overview across academic activity and the people who support it.", approach: "We organized the dashboard around essential school indicators, with quick navigation into students, teachers, attendance, schedules, messages, and notices.", delivery: ["Enrollment and teacher overview", "Student performance and attendance charts", "Calendar, scheduling, messaging, and notice-board navigation"], outcome: "A unified school dashboard that makes key academic and administrative areas visible from one starting point." },
  { slug: "noodo-bakers", name: "Noodo Bakers", sector: "Food & mobile commerce", summary: "A mobile ordering experience for handcrafted cakes, pastries, and beverages — with delivery, pickup, and dine-in options.", challenge: "Give Noodo's customers a smooth, enjoyable way to browse baked goods, place an order, and track it in real time — all from their phone.", approach: "We built a clean Android app focused on beautiful product presentation, a simple ordering flow, and real-time order tracking that keeps customers informed from confirmation through delivery.", delivery: ["Product catalogue with category browsing and search", "Delivery, pickup, and dine-in order flow", "Real-time order status and tracking", "Order history and reorder shortcuts"], outcome: "A polished mobile ordering app that puts Noodo's full menu and ordering experience in the customer's pocket." },
];

export const testimonials = [
  { quote: "They took time to understand what we needed, then turned it into a digital experience that feels true to our business.", name: "Genet E", context: "Client" },
  { quote: "The team brought structure to a complicated process and kept communication clear from the first conversation through delivery.", name: "Dereje Z", context: "Client" },
  { quote: "They were thoughtful about the details and practical about what would make the biggest difference for our customers.", name: "Israel S", context: "Client" },
  { quote: "The result gave us a much clearer way to present our work and help people understand what we offer.", name: "Anna M", context: "Client" },
  { quote: "The team listened carefully, moved with purpose, and made sure the final product worked for the people using it.", name: "Ephron E", context: "Client" },
  { quote: "They brought a strong mix of product thinking and engineering, and made the whole process feel collaborative.", name: "Eyosias J", context: "Client" },
  { quote: "They helped us turn our ideas into a clear, polished experience that is easy for people to navigate.", name: "Tsion A", context: "Client" },
  { quote: "Working with 4Kilo gave us a dependable partner who cared about both the quality of the build and the business behind it.", name: "Melaku H", context: "Client" },
];

export const engagementModels = [
  { name: "Product discovery", timing: "Focused start", description: "Align on the user problem, map the important workflows, and leave with a prioritized plan and a buildable scope.", includes: ["Stakeholder and user conversations", "Journey and workflow mapping", "Technical direction and delivery roadmap"] },
  { name: "Fixed-scope build", timing: "Defined outcome", description: "Build a clearly scoped website, product feature, or internal platform with milestones and a transparent handoff.", includes: ["Agreed scope and milestones", "Design and engineering delivery", "Launch support and documentation"] },
  { name: "Embedded product team", timing: "Ongoing partnership", description: "Add a close product and engineering partner to your team for continuous delivery, iteration, and care after launch.", includes: ["A steady delivery cadence", "Direct collaboration with your team", "Maintenance and ongoing improvements"] },
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
