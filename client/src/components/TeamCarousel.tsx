"use client";

import { ArrowLeft, ArrowRight, Layers3, Sparkles, Code2, Smartphone, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import type { TeamMember } from "@/data/site";

const icons = [Layers3, Code2, Sparkles, Smartphone, Settings];

function cardPosition(index: number, active: number, total: number) {
  const offset = (index - active + total) % total;
  if (offset === 0) return "is-active";
  if (offset === 1) return "is-next";
  if (offset === total - 1) return "is-prev";
  return "is-hidden";
}

export function TeamCarousel({ members }: { members: TeamMember[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || members.length < 2) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % members.length), 5500);
    return () => window.clearInterval(timer);
  }, [paused, members.length]);

  const goTo = (index: number) => setActive((index + members.length) % members.length);

  return (
    <div
      className="team-showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="team-carousel-stage" aria-live="polite">
        {members.map((member, index) => {
          const position = cardPosition(index, active, members.length);
          const isActive = position === "is-active";
          const Icon = icons[index % icons.length];

          return (
            <div
              className={`team-feature-card ${position}`}
              key={member.discipline}
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
            >
              <div className="team-feature-copy">
                <div className="team-feature-top">
                  <span className="team-feature-kicker">
                    DISCIPLINE 0{index + 1} / 0{members.length}
                  </span>
                  <span className="team-category-badge">{member.category}</span>
                </div>

                <h3>{member.discipline}</h3>
                <p>{member.bio}</p>

                <div className="team-feature-detail">
                  <span>CORE FOCUS</span>
                  <strong>{member.focus} · Addis Ababa, ET</strong>
                </div>
              </div>

              <div className="team-feature-visual">
                <div className="team-visual-box">
                  <div className="team-visual-circle">
                    <Icon size={56} strokeWidth={1.5} />
                  </div>
                  <div className="team-visual-tags">
                    <span>{member.category}</span>
                    <span>{member.focus}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="work-carousel-footer team-carousel-footer">
        <div className="work-carousel-dots" role="tablist" aria-label="Choose a team discipline">
          {members.map((member, index) => (
            <button
              className={index === active ? "is-active" : ""}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show ${member.discipline}`}
              onClick={() => goTo(index)}
              key={member.discipline}
            >
              <span />
            </button>
          ))}
        </div>
        <div className="work-carousel-arrows">
          <button type="button" aria-label="Previous team discipline" onClick={() => goTo(active - 1)}>
            <ArrowLeft size={19} />
          </button>
          <button type="button" aria-label="Next team discipline" onClick={() => goTo(active + 1)}>
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </div>
  );
}
