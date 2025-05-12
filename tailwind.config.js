/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))', /* Verde */
          foreground: 'hsl(var(--primary-foreground))', /* Branco */
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', /* Laranja */
          foreground: 'hsl(var(--secondary-foreground))', /* Branco */
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))', /* Laranja mais claro ou um tom complementar */
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))', /* Cinza claro para fundos de seção alternados */
          foreground: 'hsl(var(--muted-foreground))', /* Cinza escuro para texto */
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))', /* Branco para cards */
          foreground: 'hsl(var(--card-foreground))', /* Cinza escuro para texto do card */
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fadeInUp': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'fadeInUp': 'fadeInUp 0.5s ease-out forwards',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], 
        heading: ['"Open Sans"', 'sans-serif'],
      },
      spacing: {
        'section-sm': '40px',
        'section-md': '60px',
        'section-lg': '80px',
        'element-sm': '15px',
        'element-md': '20px',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
};