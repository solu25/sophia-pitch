import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * TextReveal — wraps children text and animates words in on scroll.
 * Usage: <TextReveal><h2 style={...}>Your heading here</h2></TextReveal>
 */
export default function TextReveal({ children, stagger = 0.04, duration = 0.8, y = 40 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Find the text element inside
    const textEl = el.querySelector('h1, h2, h3, p, span') || el;
    const originalText = textEl.textContent;
    const words = originalText.split(' ');

    // Wrap each word in a span
    textEl.innerHTML = words.map(word =>
      `<span style="display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:4px"><span class="reveal-word" style="display:inline-block;transform:translateY(${y}px);opacity:0">${word}</span></span>`
    ).join(' ');

    const wordEls = textEl.querySelectorAll('.reveal-word');

    gsap.to(wordEls, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === el) t.kill();
      });
      // Restore original text on cleanup
      textEl.textContent = originalText;
    };
  }, [stagger, duration, y]);

  return <div ref={containerRef}>{children}</div>;
}
