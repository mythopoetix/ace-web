"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimations() {
  useEffect(() => {
    // Smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Dramatic scroll reveals
    const sections = document.querySelectorAll("main > section, main > div.h-px");
    sections.forEach((section) => {
      // Headings — slide up with scale
      const headings = section.querySelectorAll("h2, h1:not(.hero-title)");
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Glass panels — rise up with blur
      const panels = section.querySelectorAll(".glass");
      panels.forEach((panel, i) => {
        gsap.fromTo(
          panel,
          { y: 50, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Open text paragraphs — fade slide
      const paragraphs = section.querySelectorAll("p.reveal-text");
      paragraphs.forEach((p, i) => {
        gsap.fromTo(
          p,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: 0.15 + i * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: p,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Icon badges — pop in
      const icons = section.querySelectorAll(".icon-badge");
      if (icons.length > 0) {
        gsap.fromTo(
          icons,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // Gradient accent strips — draw in from center
    const strips = document.querySelectorAll(".accent-strip");
    strips.forEach((strip) => {
      gsap.fromTo(
        strip,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: strip,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Desktop preview — parallax float
    const preview = document.querySelector(".desktop-preview");
    if (preview) {
      gsap.fromTo(
        preview,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: preview,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
