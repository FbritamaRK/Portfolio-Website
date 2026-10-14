import { useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the class `is-visible` is added.
 * Combine with CSS that uses `.animate-on-scroll` (initial hidden state)
 * and `.animate-on-scroll.is-visible` (final visible state).
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px', once = false } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove('is-visible');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * Observes multiple children inside a container.
 * Each child with class `animate-on-scroll` gets `is-visible` added
 * with a staggered delay via CSS custom property `--delay`.
 */
export function useStaggerAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions & { staggerMs?: number } = {}
) {
  const { threshold = 0.08, rootMargin = '0px 0px -30px 0px', once = false, staggerMs = 80 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(
      container.querySelectorAll<HTMLElement>('.animate-on-scroll')
    );

    children.forEach((child, i) => {
      child.style.setProperty('--delay', `${i * staggerMs}ms`);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => child.classList.add('is-visible'));
          if (once) observer.unobserve(container);
        } else if (!once) {
          children.forEach((child) => child.classList.remove('is-visible'));
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, staggerMs]);

  return ref;
}
