// ==========================================================
// Snekitha Babu — Portfolio Behaviour (JavaScript)
// Animates the technical skill bars into view on scroll.
// ==========================================================
const rows = document.querySelectorAll('.skill-row');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const row = entry.target;
      const pct = row.getAttribute('data-pct');
      const fill = row.querySelector('.bar-fill');
      const label = row.querySelector('.skill-pct');

      requestAnimationFrame(() => { fill.style.width = pct + '%'; });

      let cur = 0;
      const step = () => {
        cur += Math.ceil(pct / 30);
        if (cur >= pct) {
          cur = pct;
          label.textContent = cur + '%';
          return;
        }
        label.textContent = cur + '%';
        requestAnimationFrame(step);
      };
      step();

      io.unobserve(row);
    }
  });
}, { threshold: 0.4 });

rows.forEach(r => io.observe(r));
