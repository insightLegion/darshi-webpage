/* ============================
   DARSHI — GSAP ANIMATIONS
   Minimal, purposeful scroll-triggered reveals
   ============================ */

document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // ─── Navbar scroll effect ───
  ScrollTrigger.create({
    trigger: "#hero",
    start: "top top",
    end: "bottom 80px",
    onLeave: () => document.getElementById("navbar").classList.add("scrolled"),
    onEnterBack: () => document.getElementById("navbar").classList.remove("scrolled"),
  });

  // ─── Hero entrance timeline ───
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTl
    .from("#hero-logo", {
      scale: 0.6,
      autoAlpha: 0,
      duration: 1,
      ease: "back.out(1.4)",
    })
    .from(
      ".hero-title-hindi",
      {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
      },
      "-=0.4"
    )
    .from(
      ".hero-title-sub",
      {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
      },
      "-=0.3"
    )
    .from(
      "#hero-desc",
      {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
      },
      "-=0.3"
    )
    .from(
      "#hero-actions .btn",
      {
        y: 20,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.12,
      },
      "-=0.2"
    )
    .from(
      "#hero-scroll-hint",
      {
        autoAlpha: 0,
        duration: 0.6,
      },
      "-=0.2"
    );

  // ─── Features section ───
  gsap.from("#features-tag", {
    y: 20,
    autoAlpha: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: "#features",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from("#features-title", {
    y: 30,
    autoAlpha: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#features",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".feature-card", {
    y: 50,
    autoAlpha: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#features-grid",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // ─── Gallery section ───
  gsap.from("#gallery-tag", {
    y: 20,
    autoAlpha: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: "#gallery",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from("#gallery-title", {
    y: 40,
    autoAlpha: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#gallery",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from("#gallery-subtitle", {
    y: 20,
    autoAlpha: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: "#gallery",
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  // ─── Vision section ───
  gsap.from("#vision-tag", {
    y: 20,
    autoAlpha: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: "#vision",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from("#vision-title", {
    y: 40,
    autoAlpha: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#vision",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".stat-item", {
    y: 30,
    autoAlpha: 0,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
      trigger: "#vision-stats",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from("#vision-text", {
    y: 20,
    autoAlpha: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: "#vision-text",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // ─── CTA section ───
  const ctaTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#cta",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  ctaTl
    .from(".cta-title-hindi", {
      scale: 0.8,
      autoAlpha: 0,
      duration: 0.7,
      ease: "back.out(1.2)",
    })
    .from(
      "#cta-title",
      {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
      },
      "-=0.3"
    )
    .from(
      "#cta-desc",
      {
        y: 20,
        autoAlpha: 0,
        duration: 0.5,
      },
      "-=0.2"
    )
    .from(
      "#cta-actions .btn",
      {
        y: 20,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.12,
      },
      "-=0.15"
    );

  // ─── Accessibility: respect prefers-reduced-motion ───
  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: reduce)", () => {
    // Kill all ScrollTriggers and set everything visible
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.set(
      [
        "#hero-logo",
        ".hero-title-hindi",
        ".hero-title-sub",
        "#hero-desc",
        "#hero-actions .btn",
        "#hero-scroll-hint",
        "#features-tag",
        "#features-title",
        ".feature-card",
        "#gallery-tag",
        "#gallery-title",
        "#gallery-subtitle",
        "#vision-tag",
        "#vision-title",
        ".stat-item",
        "#vision-text",
        ".cta-title-hindi",
        "#cta-title",
        "#cta-desc",
        "#cta-actions .btn",
      ],
      { autoAlpha: 1, y: 0, scale: 1 }
    );
  });
});
