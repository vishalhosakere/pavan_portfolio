import { useCallback, useSyncExternalStore } from "react";

// Matches the html `scroll-pt-24` padding so a section becomes active exactly where an anchor jump lands it.
const ACTIVATION_OFFSET_PX = 96;

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

export function useActiveSection(sectionIds: readonly string[]): string {
  const getSnapshot = useCallback(() => {
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (scrolledToBottom) {
      return sectionIds[sectionIds.length - 1];
    }
    let active = sectionIds[0];
    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= ACTIVATION_OFFSET_PX + 1) {
        active = id;
      }
    }
    return active;
  }, [sectionIds]);

  return useSyncExternalStore(subscribe, getSnapshot, () => sectionIds[0]);
}
