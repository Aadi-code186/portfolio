import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#EFE9E1',
          secondary: '#D9D9D9',
        },
        card: '#D1C7BD',
        borderToken: '#AC9C8D',
        accent: {
          DEFAULT: '#72383D',
          hover: '#592B2F',
        },
        charcoal: '#322D29',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      borderRadius: {
        card: '24px',
        btn: '16px',
        input: '18px',
        img: '28px',
      },
      boxShadow: {
        luxury: '0 12px 40px rgba(0, 0, 0, 0.08)',
        'luxury-hover': '0 20px 50px rgba(50, 45, 41, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
