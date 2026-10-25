const targets = document.querySelectorAll(
  ".hero-content, .hero-image, .contact, .faq"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

targets.forEach((target) => observer.observe(target));