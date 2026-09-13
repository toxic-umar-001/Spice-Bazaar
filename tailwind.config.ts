import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        charcoal: {
          50: 'hsl(30 15% 96%)',
          100: 'hsl(30 15% 90%)',
          200: 'hsl(30 12% 80%)',
          300: 'hsl(30 10% 60%)',
          400: 'hsl(30 10% 40%)',
          500: 'hsl(30 10% 25%)',
          600: 'hsl(30 12% 18%)',
          700: 'hsl(30 14% 12%)',
          800: 'hsl(30 15% 8%)',
          900: 'hsl(30 15% 5%)',
          950: 'hsl(30 15% 3%)',
        },
        ivory: {
          50: 'hsl(40 30% 99%)',
          100: 'hsl(40 28% 97%)',
          200: 'hsl(38 25% 94%)',
          300: 'hsl(36 22% 90%)',
          400: 'hsl(34 18% 85%)',
          500: 'hsl(32 15% 78%)',
        },
        burgundy: {
          50: 'hsl(355 40% 95%)',
          100: 'hsl(355 45% 88%)',
          200: 'hsl(355 50% 75%)',
          300: 'hsl(355 55% 58%)',
          400: 'hsl(355 60% 42%)',
          500: 'hsl(355 65% 32%)',
          600: 'hsl(355 68% 25%)',
          700: 'hsl(355 70% 18%)',
          800: 'hsl(355 72% 12%)',
          900: 'hsl(355 75% 8%)',
        },
        gold: {
          50: 'hsl(40 50% 95%)',
          100: 'hsl(40 55% 88%)',
          200: 'hsl(40 58% 78%)',
          300: 'hsl(40 60% 68%)',
          400: 'hsl(38 58% 55%)',
          500: 'hsl(38 55% 42%)',
          600: 'hsl(38 50% 35%)',
          700: 'hsl(38 45% 25%)',
          800: 'hsl(38 40% 18%)',
          900: 'hsl(38 35% 12%)',
        },
        spice: {
          50: 'hsl(25 40% 95%)',
          100: 'hsl(25 45% 88%)',
          200: 'hsl(25 50% 75%)',
          300: 'hsl(25 55% 60%)',
          400: 'hsl(25 58% 48%)',
          500: 'hsl(25 60% 35%)',
          600: 'hsl(25 62% 28%)',
          700: 'hsl(25 65% 20%)',
          800: 'hsl(25 68% 14%)',
          900: 'hsl(25 70% 8%)',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.8s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
        urdu: ['Noto Nastaliq Urdu', 'serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
