/** @type {import('tailwindcss').Config} */ const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'seccion': '5rem',
        'bloque': '2.5rem',
      },
      colors: {
        inventor: {
          principal: '#2563eb',
          oscuro: '#1e293b',
          acento: '#f59e0b',
        },
      },
      // Añadimos las animaciones para que el archivo sea autoconclusivo
      keyframes: {
        flotar: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-1rem)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'invento-flotando': 'flotar 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;