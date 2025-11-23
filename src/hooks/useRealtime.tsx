import { useEffect, useRef } from 'react';

/**
 * Hook for polling data at regular intervals to simulate real-time updates
 * @param callback - Function to call on each poll
 * @param interval - Polling interval in milliseconds (default: 3000ms)
 * @param enabled - Whether polling is enabled (default: true)
 */
export function useRealtime(
  callback: () => void | Promise<void>,
  interval: number = 3000,
  enabled: boolean = true
) {
  const savedCallback = useRef<() => void | Promise<void>>();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    if (!enabled) return;

    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    // Call immediately on mount
    tick();

    // Then set up interval
    const id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval, enabled]);
}
