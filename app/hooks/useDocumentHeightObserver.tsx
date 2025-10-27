import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Custom hook to observe changes in document height and refresh ScrollTrigger.
 * This is useful for layouts that change dynamically due to content loading,
 * image loading, or other DOM manipulations.
 *
 * @param {number} debounceDelay - Optional delay in milliseconds to debounce the refresh calls.
 */
export const useDocumentHeightObserver = (debounceDelay: number = 100) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined' || typeof ScrollTrigger === 'undefined') {
      return;
    }

    const refreshScrollTrigger = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        ScrollTrigger.refresh();
        console.log("ScrollTrigger refreshed due to document height change.");
      }, debounceDelay);
    };

    // Use ResizeObserver to detect changes in the document's root element (<html>)
    const resizeObserver = new ResizeObserver((entries) => {
      // We are observing document.documentElement, so entries[0] will be for it.
      // We don't need to check for specific height changes, just that a resize occurred.
      refreshScrollTrigger();
    });

    // Observe the document's root element
    resizeObserver.observe(document.documentElement);

    // Initial refresh in case content is already there
    refreshScrollTrigger();

    return () => {
      resizeObserver.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [debounceDelay]);
};