import type { Viewport } from "next";

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

export const DARK_SCHEME_QUERY = "(prefers-color-scheme: dark)";

// Must match --canvas for each theme in src/app/globals.css.
export const THEME_COLORS: Record<Theme, string> = {
  light: "#fafafa",
  dark: "#171717",
};

// Inlined in <head> so data-theme (and theme-color, whose metas precede it) is set before first paint:
// a stored choice wins, otherwise the system preference.
export const THEME_INIT_SCRIPT = `(function(){var d=document.documentElement,c=${JSON.stringify(THEME_COLORS)},t=matchMedia(${JSON.stringify(DARK_SCHEME_QUERY)}).matches?"dark":"light";try{var s=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(s==="light"||s==="dark")t=s}catch(e){}d.setAttribute("data-theme",t);document.querySelectorAll('meta[name="theme-color"]').forEach(function(m){m.setAttribute("content",c[t])})})()`;

export const THEME_VIEWPORT: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: THEME_COLORS.light },
    { media: DARK_SCHEME_QUERY, color: THEME_COLORS.dark },
  ],
};
