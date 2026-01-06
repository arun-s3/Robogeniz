

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.25 }
);

document.querySelectorAll(".reveal-section").forEach(section => {
  revealObserver.observe(section);
});
