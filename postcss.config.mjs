// postcss.config.mjs
// Tailwind v4 (vía @tailwindcss/postcss) gestiona los prefijos vendor con
// Lightning CSS internamente, así que no necesitamos autoprefixer por separado.
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
