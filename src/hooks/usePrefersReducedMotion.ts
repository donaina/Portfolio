import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

const getPreference = () =>
  typeof window !== 'undefined' && window.matchMedia(QUERY).matches;

/**
 * Tracks the user's OS-level reduced-motion setting so JS-driven animation
 * (framer-motion, react-scroll) can opt out alongside the CSS media query.
 */
export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getPreference);

  useEffect(() => {
    const media = window.matchMedia(QUERY);
    const update = () => setPrefersReducedMotion(media.matches);

    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return prefersReducedMotion;
};
