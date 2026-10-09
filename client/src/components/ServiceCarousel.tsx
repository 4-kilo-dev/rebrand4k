"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { Service } from "@/data/site";

function cardPosition(index: number, active: number, total: number) {
  const offset = (index - active + total) % total;
  if (offset === 0) return "is-active";
  if (offset === 1) return "is-next";
  if (offset === total - 1) return "is-prev";
  return "is-hidden";
}

export function ServiceCarousel({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || services.length < 2) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % services.length), 5500);
    return () => window.clearInterval(timer);
  }, [paused, services.length]);

  const goTo = (index: number) => setActive((index + services.length) % services.length);

  return (
    <div
      className="service-showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="service-carousel-stage" aria-live="polite">
        {services.map((service, index) => {
          const position = cardPosition(index, active, services.length);
          const isActive = position === "is-active";
          const Icon = service.icon;

          return (
            <div
              className={`service-feature-card ${position}`}
              key={service.title}
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
            >
              <div className="service-feature-copy">
                <div className="service-feature-top">
                  <span className="service-feature-kicker">
                    CAPABILITY 0{index + 1} / 0{services.length}
                  </span>
                  <div className="service-icon-badge">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-feature-detail">
                  <span>OUR APPROACH</span>
                  <strong>Senior engineering · Addis Ababa Hub · Long-term care</strong>
                </div>

                <a href="/contact" className="service-feature-btn btn btn-primary btn-sm">
                  Partner on this capability <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="service-feature-visual">
                <div className="service-visual-box">
                  <div className="service-visual-circle">
                    <Icon size={64} strokeWidth={1.4} />
                  </div>
                  <div className="service-visual-badges">
                    <span>High Scalability</span>
                    <span>Agile Sprints</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="work-carousel-footer service-carousel-footer">
        <div className="work-carousel-dots" role="tablist" aria-label="Choose a service capability">
          {services.map((service, index) => (
            <button
              className={index === active ? "is-active" : ""}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show ${service.title}`}
              onClick={() => goTo(index)}
              key={service.title}
            >
              <span />
            </button>
          ))}
        </div>
        <div className="work-carousel-arrows">
          <button type="button" aria-label="Previous capability" onClick={() => goTo(active - 1)}>
            <ArrowLeft size={19} />
          </button>
          <button type="button" aria-label="Next capability" onClick={() => goTo(active + 1)}>
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </div>
  );
}
