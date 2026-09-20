/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#090d16',
          card: '#0f172a',
          surface: '#141e33',
          border: 'rgba(255, 255, 255, 0.08)',
          muted: '#94a3b8',
        },
        brand: {
          emerald: '#10b981',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          indigo: '#6366f1',
        }
      },
      boxShadow: {
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.25)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.25)',
        'glow-indigo': '0 0 30px -5px rgba(99, 102, 241, 0.25)',
      },
    },
  },
  plugins: [],
};
