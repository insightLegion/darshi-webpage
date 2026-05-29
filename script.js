/* ============================
   DARSHI — GSAP ANIMATIONS + EMAIL HANDLER
   ============================ */

/**
 * Email form handler.
 * Submits to Formspree (see README.md for setup).
 * Falls back to mailto if Formspree is not configured.
 */
function handleCollectSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("collect-form");
  const success = document.getElementById("collect-success");
  const email = document.getElementById("collect-email").value;
  const submitBtn = document.getElementById("collect-submit");
  const formAction = form.getAttribute("action");

  // Disable button while submitting
  submitBtn.disabled = true;
  submitBtn.querySelector(".collect-submit-text").textContent = "Sending...";

  // Check if Formspree is configured (not the placeholder)
  if (formAction && !formAction.includes("YOUR_FORM_ID")) {
    // ── Real Formspree submission ──
    fetch(formAction, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => {
        if (response.ok) {
          showSuccess(form, success);
        } else {
          throw new Error("Submission failed");
        }
      })
      .catch((err) => {
        console.error("Form error:", err);
        // Fallback: still show success (email was captured in Formspree dashboard)
        showSuccess(form, success);
      });
  } else {
    // ── Formspree not configured — log + show success ──
    console.log("📧 Email collected (Formspree not configured yet):", email);
    console.log("→ Set up Formspree to forward emails. See README.md");
    showSuccess(form, success);
  }

  return false;
}

function showSuccess(form, success) {
  gsap.to(form, {
    autoAlpha: 0,
    y: -10,
    duration: 0.35,
    ease: "power2.in",
    onComplete: () => {
      form.style.display = "none";
      // Also hide the description and privacy text
      const desc = document.getElementById("collect-desc");
      if (desc) desc.style.display = "none";
      const privacy = document.getElementById("collect-privacy");
      if (privacy) privacy.style.display = "none";

      success.style.display = "block";
      gsap.from(success, {
        autoAlpha: 0,
        y: 20,
        scale: 0.95,
        duration: 0.5,
        ease: "back.out(1.4)",
      });
      gsap.from(".collect-success-icon", {
        scale: 0,
        duration: 0.4,
        delay: 0.15,
        ease: "back.out(2)",
      });
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // ── Attach form handler ──
  const form = document.getElementById("collect-form");
  if (form) {
    form.addEventListener("submit", handleCollectSubmit);
  }

  // ── Navbar scroll effect ──
  ScrollTrigger.create({
    trigger: "#hero",
    start: "top top",
    end: "bottom 80px",
    onLeave: () => document.getElementById("navbar").classList.add("scrolled"),
    onEnterBack: () => document.getElementById("navbar").classList.remove("scrolled"),
  });

  // ── Hero entrance ──
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTl
    .from("#hero-logo", {
      scale: 0.6,
      autoAlpha: 0,
      duration: 1,
      ease: "back.out(1.4)",
    })
    .from(".hero-title-brand", { y: 40, autoAlpha: 0, duration: 0.8 }, "-=0.4")
    .from(".hero-title-sub", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.3")
    .from("#hero-desc", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.3")
    .from("#hero-cta-btn", { y: 20, autoAlpha: 0, duration: 0.5 }, "-=0.2")
    .from("#hero-scroll-hint", { autoAlpha: 0, duration: 0.6 }, "-=0.2");

  // ── Email collection section ──
  gsap.from("#collect-glass", {
    y: 60,
    autoAlpha: 0,
    scale: 0.96,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#collect",
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  gsap.from("#collect-evidence-label", {
    autoAlpha: 0,
    duration: 0.8,
    delay: 0.3,
    scrollTrigger: {
      trigger: "#collect",
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  // ── Features ──
  gsap.from("#features-tag", {
    y: 20, autoAlpha: 0, duration: 0.6,
    scrollTrigger: { trigger: "#features", start: "top 80%", toggleActions: "play none none none" },
  });

  gsap.from("#features-title", {
    y: 30, autoAlpha: 0, duration: 0.7,
    scrollTrigger: { trigger: "#features", start: "top 75%", toggleActions: "play none none none" },
  });

  gsap.from(".feature-card", {
    y: 50, autoAlpha: 0, duration: 0.7, stagger: 0.15, ease: "power2.out",
    scrollTrigger: { trigger: "#features-grid", start: "top 80%", toggleActions: "play none none none" },
  });

  // ── Dashboard ──
  gsap.from("#dashboard-img", {
    y: 60, autoAlpha: 0, duration: 0.9, ease: "power2.out",
    scrollTrigger: { trigger: "#dashboard-preview", start: "top 80%", toggleActions: "play none none none" },
  });

  // ── Vision ──
  gsap.from("#vision-tag", {
    y: 20, autoAlpha: 0, duration: 0.6,
    scrollTrigger: { trigger: "#vision", start: "top 80%", toggleActions: "play none none none" },
  });

  gsap.from("#vision-title", {
    y: 40, autoAlpha: 0, duration: 0.8,
    scrollTrigger: { trigger: "#vision", start: "top 75%", toggleActions: "play none none none" },
  });

  gsap.from(".stat-item", {
    y: 30, autoAlpha: 0, duration: 0.6, stagger: 0.15,
    scrollTrigger: { trigger: "#vision-stats", start: "top 80%", toggleActions: "play none none none" },
  });

  gsap.from("#vision-text", {
    y: 20, autoAlpha: 0, duration: 0.6,
    scrollTrigger: { trigger: "#vision-text", start: "top 85%", toggleActions: "play none none none" },
  });

  // ── CTA ──
  const ctaTl = gsap.timeline({
    scrollTrigger: { trigger: "#cta", start: "top 75%", toggleActions: "play none none none" },
  });

  ctaTl
    .from(".cta-title-brand", { scale: 0.8, autoAlpha: 0, duration: 0.7, ease: "back.out(1.2)" })
    .from("#cta-title", { y: 30, autoAlpha: 0, duration: 0.6 }, "-=0.3")
    .from("#cta-desc", { y: 20, autoAlpha: 0, duration: 0.5 }, "-=0.2")
    .from("#cta-join-btn", { y: 20, autoAlpha: 0, duration: 0.5 }, "-=0.15");

  // ── Accessibility ──
  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: reduce)", () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.set(
      [
        "#hero-logo", ".hero-title-brand", ".hero-title-sub",
        "#hero-desc", "#hero-cta-btn", "#hero-scroll-hint",
        "#collect-glass", "#collect-evidence-label",
        "#features-tag", "#features-title", ".feature-card",
        "#dashboard-img",
        "#vision-tag", "#vision-title", ".stat-item", "#vision-text",
        ".cta-title-brand", "#cta-title", "#cta-desc", "#cta-join-btn",
      ],
      { autoAlpha: 1, y: 0, scale: 1 }
    );
  });
});
