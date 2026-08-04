/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        night: {
          950: '#05070F', // Page base background
          900: '#060A14', // Alternate section background (banding)
          800: '#0A101F', // Card / surface
          700: '#0F1830', // Elevated surface / header scrolled bg
          600: '#16203D', // Hover surface
          500: '#223056', // Border strong
        },
        champagne: {
          200: '#F4E3B5', // Gold text highlight (on dark)
          300: '#ECCF94', // Gold text, hover links
          400: '#E4C580', // Primary accent
          500: '#D4AF6A', // Deep accent / borders / hover
          600: '#BC944F', // Accent-pressed
          700: '#93723C', // Muted gold text
        },
        ink: {
          DEFAULT: '#EAF0FA', // Primary text
          2: '#A6B2C8', // Secondary text
          3: '#6B7A93', // Muted / labels
        },
        line: {
          DEFAULT: 'rgba(148, 163, 184, 0.10)', // Hairlines, grid
          strong: 'rgba(148, 163, 184, 0.18)', // Borders, dividers
        },
        primary: {
          50: '#e6eaf0',
          100: '#ccd4e0',
          200: '#99a9c2',
          300: '#667fa3',
          400: '#335485',
          500: '#0A2342',
          600: '#091c35',
          700: '#071528',
          800: '#04101b',
          900: '#02080e',
        },
        success: {
          500: '#10B981', // Live / status dot
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideInLeft: 'slideInLeft 0.5s ease-in-out',
        slideInRight: 'slideInRight 0.5s ease-in-out',
        slideInUp: 'slideInUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
