"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export function TestimonialSpotlight({ testimonials }: { testimonials: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const selectPrevious = () => setActiveIndex(current => (current - 1 + testimonials.length) % testimonials.length);
  const selectNext = () => setActiveIndex(current => (current + 1) % testimonials.length);

  return (
    <div className="testimonial-showcase">
      <figure className="testimonial-feature" aria-live="polite">
        <div className="testimonial-feature-top">
          <span className="testimonial-feature-label"><i /> Selected client note</span>
          <span className="testimonial-counter">{String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
        </div>
        <Quote className="testimonial-quote-icon" aria-hidden="true" size={42} strokeWidth={1.25} />
        <blockquote key={active.name} className="testimonial-feature-quote">{active.quote}</blockquote>
        <figcaption className="testimonial-feature-client">
          <span className="testimonial-avatar" aria-hidden="true">{active.name.slice(0, 1)}</span>
          <span><strong>{active.name}</strong><small>{active.context}</small></span>
        </figcaption>
        <div className="testimonial-controls" aria-label="Browse client voices">
          <button type="button" onClick={selectPrevious} aria-label="Previous client voice"><ArrowLeft size={17} /></button>
          <button type="button" onClick={selectNext} aria-label="Next client voice"><ArrowRight size={17} /></button>
        </div>
      </figure>

      <div className="testimonial-client-list" role="list" aria-label="Client voices">
        <span className="testimonial-list-label">More client voices</span>
        {testimonials.map((testimonial, index) => (
          <button
            type="button"
            key={testimonial.name}
            aria-pressed={index === activeIndex}
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <span className="testimonial-list-index">{String(index + 1).padStart(2, "0")}</span>
            <span>{testimonial.name}<small>{testimonial.context}</small></span>
            <ArrowRight className="testimonial-list-arrow" size={16} />
          </button>
        ))}
      </div>
    </div>
  );
}
