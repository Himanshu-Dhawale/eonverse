/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#1E90FF', // Ocean blue
        light: '#4BA3FF',
        dark: '#0072E5',
      },
      secondary: {
        DEFAULT: '#FDBD10', // Sunrise yellow
        light: '#FFCF4A',
        dark: '#E5A800',
      },
      accent: {
        DEFAULT: '#191970', // Midnight blue
        light: '#2D2D9A',
        dark: '#0F0F46',
      },
      background: {
        DEFAULT: '#ECEFF1', // Cloud white
        paper: '#F5F7F9',
        card: '#FFFFFF',
      },
      text: {
        DEFAULT: '#1e1e1e', // Text color
        light: '#474747',
        muted: '#6E6E6E',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
      display: ['var(--font-montserrat)', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        subtle: '0 2px 10px rgba(0, 0, 0, 0.05)',
        elevation: '0 8px 30px rgba(0, 0, 0, 0.07)',
        glow: '0 0 15px rgba(30, 144, 255, 0.5)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
