import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray('.cards_item');
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.cardsjj',
    pin: true,
    start: 'top +=10px',
    markers: false,
    scrub: 1,
    snap: {
      snapTo: 1 / (sections.length - 1),
      duration: { min: 0.5, max: 0.9 },
      delay: 0
    },
    end: () => '+=' + document.querySelector('.portfolio__gsap').offsetWidth / 5
  }
});
