/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "425px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        "brand-100": "#DCD6FF",
        "brand-200": "#B1A5FD",
        "brand-300": "#8B7AF5",
        "brand-400": "#6854E8",
        "brand-500": "#4832D5",
        "brand-600": "#3F2FA7",
        "brand-700": "#362C77",
        "brand-800": "#29244C",
        "brand-900": "#191727",
        "accent-100": "#F3FFDB",
        "accent-200": "#E1FBAC",
        "accent-300": "#CCF281",
        "accent-400": "#B7E45E",
        "accent-500": "#9FD03E",
        "accent-600": "#80A636",
        "accent-700": "#5F7732",
        "neutral-100": "#E8E7EE",
        "neutral-200": "#CDCCD4",
        "neutral-300": "#B8B8B8",
        "neutral-400": "#9E9E9E",
        "neutral-500": "#858585",
        "neutral-600": "#6B6B6B",
        "neutral-light": "#F9F8FB",
        "neutral-dark": "#050406",
      },
    },
  },
  plugins: [],
};

export default config;
