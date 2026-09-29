"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project } from "@/data/site";
import { ProjectVisual } from "@/components/SiteLayout";

function cardPosition(index: number, active: number, total: number) {
  const offset = (index - active + total) % total;
  if (offset === 0) return "is-active";
  if (offset === 1) return "is-next";
  if (offset === total - 1) return "is-prev";
  return "is-hidden";
}

export function WorkCarousel({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || projects.length < 2) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % projects.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused, projects.length]);

  const goTo = (index: number) => setActive((index + projects.length) % projects.length);

  return (
    <div className="work-showcase" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
      <div className="work-carousel-stage" aria-live="polite">
        {projects.map((project, index) => {
          const position = cardPosition(index, active, projects.length);
          const isActive = position === "is-active";
          return (
            <a
              className={`work-feature-card ${position}`}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.name}
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
            >
              <div className="work-feature-copy">
                <span className="work-feature-kicker">{project.type.replace(" · ", " / ")}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="work-feature-detail">
                  <span>CORE APPROACH</span>
                  <strong>Product engineering · Web platforms</strong>
                </div>
                <span className="work-feature-link">View details <ArrowUpRight size={18} /></span>
              </div>
              <div className="work-feature-media">
                <ProjectVisual visual={project.visual} title={project.name} image={project.image} />
              </div>
            </a>
          );
        })}
      </div>
      <div className="work-carousel-footer">
        <div className="work-carousel-dots" role="tablist" aria-label="Choose a featured project">
          {projects.map((project, index) => (
            <button className={index === active ? "is-active" : ""} type="button" role="tab" aria-selected={index === active} aria-label={`Show ${project.name}`} onClick={() => goTo(index)} key={project.name}>
              <span />
            </button>
          ))}
        </div>
        <div className="work-carousel-arrows">
          <button type="button" aria-label="Previous project" onClick={() => goTo(active - 1)}><ArrowLeft size={19} /></button>
          <button type="button" aria-label="Next project" onClick={() => goTo(active + 1)}><ArrowRight size={19} /></button>
        </div>
      </div>
    </div>
  );
}
