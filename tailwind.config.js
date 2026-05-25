/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette
        forest: {
          DEFAULT: '#0B3D2E', // Dark Green
          50: '#e9f3ee',
          100: '#cfe3d8',
          600: '#13533c',
          700: '#0B3D2E',
          800: '#082d22',
          900: '#051d16',
        },
        leaf: {
          DEFAULT: '#1F7A4D', // Agriculture Green
          400: '#34a06a',
          500: '#1F7A4D',
          600: '#196641',
        },
        gold: {
          DEFAULT: '#E8B923', // Golden Yellow
          400: '#f1cb4e',
          500: '#E8B923',
          600: '#caa015',
        },
        earth: {
          DEFAULT: '#8B5E3C', // Earth Brown
          500: '#8B5E3C',
          600: '#704a2e',
        },
        cream: '#F7F8F5', // Soft Background
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(11, 61, 46, 0.18)',
        card: '0 24px 60px -20px rgba(11, 61, 46, 0.25)',
        glow: '0 0 0 1px rgba(255,255,255,0.18), 0 20px 50px -20px rgba(11,61,46,0.4)',
      },
      backgroundImage: {
        'grain-radial':
          'radial-gradient(circle at 20% 20%, rgba(232,185,35,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(31,122,77,0.18), transparent 45%)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-fast': 'float-fast 4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
