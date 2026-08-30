/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d946ef',   /* Vibrant fuchsia/pink */
          light: '#e879f9',
          dark: '#a21caf',
        },
        accent: '#7c3aed',      /* Violet/purple */
        foreground: '#1c1917',
        muted: '#78716c',
        background: '#ffffff',
        surface: '#fafaf9',
        border: '#e7e5e4',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
