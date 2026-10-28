"use client";

import { useEffect, useLayoutEffect, useSyncExternalStore } from "react";
import { PiMoonBold, PiSunBold } from "react-icons/pi";

import { DARK_SCHEME_QUERY, THEME_COLORS, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

function systemTheme(): Theme {
  return window.matchMedia(DARK_SCHEME_QUERY).matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (root.getAttribute("data-theme") !== theme) {
    root.setAttribute("data-theme", theme);
  }
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => meta.setAttribute("content", THEME_COLORS[theme]));
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getTheme(): Theme | null {
  const theme = document.documentElement.getAttribute("data-theme");
  return theme === "light" || theme === "dark" ? theme : null;
}

function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => null);

  // The inline head script sets the theme before paint; this re-applies it after React's dev-mode
  // remount resets <html> attributes, and points theme-color at an explicitly chosen theme.
  useLayoutEffect(() => {
    applyTheme(readStoredTheme() ?? systemTheme());
  }, []);

  useEffect(() => {
    const query = window.matchMedia(DARK_SCHEME_QUERY);
    const followSystem = () => {
      if (!readStoredTheme()) {
        applyTheme(systemTheme());
      }
    };
    query.addEventListener("change", followSystem);
    return () => query.removeEventListener("change", followSystem);
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  function toggleTheme() {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Storage can be unavailable (e.g. blocked cookies); the switch still applies for this visit.
    }
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme ? `Switch to ${nextTheme} theme` : "Toggle color theme"}
      title={theme ? `Switch to ${nextTheme} theme` : "Toggle color theme"}
      className="grid size-11 cursor-pointer place-items-center rounded-full border border-edge text-2xl text-fg-strong transition-colors hover:bg-surface hover:text-accent"
    >
      <PiMoonBold aria-hidden="true" className="dark:hidden" />
      <PiSunBold aria-hidden="true" className="hidden dark:block" />
    </button>
  );
}

export default ThemeToggle;
