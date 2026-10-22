document.documentElement.classList.add('js');

const revealTargets = document.querySelectorAll([
  '.intro-section > *', '.essence-card > *', '.beliefs-heading > *',
  '.faith-copy > *', '.beliefs-list li', '.editorial-section > *',
  '.section-heading > *', '.section-intro > *', '.welcome-cards > *',
  '.family-cards > *', '.feature-band > *', '.leadership > header',
  '.leadership-profiles > *', '.history > *', '.history-content > *',
  '.ministries > header > *', '.group', '.final-invitation > *'
].join(','));

revealTargets.forEach((element, index) => {
  element.classList.add('reveal');
  if (index % 2) element.classList.add('reveal-delay');
});

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
}
