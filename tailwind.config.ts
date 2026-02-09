/** @type {import('tailwindcss').Config} */ const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Como tu estructura no tiene 'src', estas rutas son las correctas
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
      },
      animation: {
        'invento-flotando': 'flotar 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;