# Guía Definitiva de Implementación SEO y AEO para Proyectos Web

Este documento establece el estándar de desarrollo y redacción para asegurar que cualquier proyecto web sea fácilmente descubrible por buscadores tradicionales (Google, Bing) y asimilable por motores de respuesta basados en IA (Perplexity, Gemini, ChatGPT, AI Overviews).

## 1. Fundamentos Técnicos (La Base)

Antes de optimizar el contenido, la plataforma debe ser técnicamente impecable. Ni los crawlers clásicos ni los bots de IA perderán tiempo en sitios lentos o inaccesibles.

### 1.1. Arquitectura y Rendimiento

* **Core Web Vitals:** El sitio debe cargar la pintura principal (LCP) en menos de 2.5 segundos. Optimiza el CLS (cambios de diseño) a menos de 0.1 y el INP (interacción) a menos de 200ms.

* **Renderizado:** Evita el *Client-Side Rendering (CSR)* puro para contenido público. Utiliza SSR (Server-Side Rendering) o SSG (Static Site Generation) con frameworks como Next.js, Nuxt o Astro para que el HTML llegue completamente formado a los bots.

* **Mobile-First:** El diseño debe ser 100% responsivo. Las IAs y Google evalúan la versión móvil por defecto.

### 1.2. Rastreo e Indexación

* **Sitemap XML:** Debe existir un `/sitemap.xml` dinámico y actualizado.

* **Robots.txt:** Archivo `/robots.txt` limpio, permitiendo el paso a `Googlebot`, `Bingbot`, y bots de IA como `Google-Extended`, `GPTBot`, `PerplexityBot` (a menos que haya razones legales para bloquearlos, bloquear a la IA mata tu AEO).

* **URLs Limpias:** Estructura de directorios lógica y URLs descriptivas.

  * *Mal:* `ejemplo.com/p=123?id=abc`

  * *Bien:* `ejemplo.com/servicios/desarrollo-web-madrid`

## 2. Optimización SEO On-Page (El Estándar Clásico)

Esta capa asegura que la página compita por palabras clave transaccionales y de investigación en los resultados de búsqueda normales.

### 2.1. Metaetiquetas Obligatorias

Cada página debe tener en su `<head>`:

* **Title (`<title>`):** 50-60 caracteres. Debe incluir la palabra clave principal al principio.

* **Meta Description:** 150-160 caracteres. No impacta directamente en el ranking, pero sí en el CTR (Click-Through Rate).

* **Canonical:** `<link rel="canonical" href="URL_ABSOLUTA" />` para evitar contenido duplicado.

* **Open Graph / Twitter Cards:** Para asegurar que los enlaces compartidos en redes sociales se previsualicen correctamente con imagen, título y descripción.

### 2.2. Semántica HTML Estricta

* **Jerarquía de Encabezados (H1 - H6):**

  * Solo un `<h1>` por página (el título principal).

  * Usa `<h2>` para secciones principales.

  * Usa `<h3>` para subsecciones de un `<h2>`.

  * **NUNCA** saltes niveles (ej. de H1 a H3 directamente) solo por diseño.

* **Etiquetas de Sección:** Envuelve el contenido en `<article>`, `<main>`, `<section>`, `<aside>` y `<nav>`. Esto ayuda a los bots a entender qué parte de la página es el contenido principal y qué es relleno.

* **Imágenes:** Todas deben tener el atributo `alt="..."` descriptivo. Formatos modernos (`.webp` o `.avif`) y atributo `loading="lazy"` para imágenes fuera de la vista inicial.

## 3. Optimización AEO (Answer Engine Optimization)

Aquí es donde preparamos la web para la Inteligencia Artificial. Los LLMs (Large Language Models) no "leen" la web como un humano, buscan extraer hechos verificables y respuestas directas de entidades confiables.

### 3.1. Estructura "Answer-First" (BLUF - Bottom Line Up Front)

Los artículos o páginas de servicios deben responder a la intención del usuario de inmediato.

1. **El Párrafo AEO (La Respuesta Directa):** Inmediatamente debajo del H1 o H2, proporciona una respuesta directa de 40-60 palabras a la pregunta implícita del título.

   * *Ejemplo de H2:* ¿Qué es el Desarrollo Web a Medida?

   * *Párrafo AEO:* El desarrollo web a medida es la creación de soluciones de software (páginas web, aplicaciones) programadas desde cero para adaptarse a las necesidades específicas de una empresa, sin utilizar plantillas prefabricadas. Esto garantiza mayor seguridad, escalabilidad y rendimiento exclusivo.

2. **Desarrollo del Contexto:** Después del párrafo inicial, expande la información.

3. **Uso de Formatos Masticables:** Las IAs aman extraer listas. Usa profusamente:

   * Listas numeradas (`<ol>`).

   * Listas de viñetas (`<ul>`).

   * Tablas HTML (`<table>`) para comparar datos (precios, características).

   * Párrafos cortos y concisos.

### 3.2. Marcado de Datos Estructurados (JSON-LD)

Esto es **innegociable** para el AEO. Le inyecta los datos directamente en vena al algoritmo en formato JSON.

* **¿Dónde va?** Dentro del `<head>` o justo antes de cerrar el `<body>`.

* **Esquemas mínimos necesarios:**

  * `Organization` (En la página de inicio o contacto).

  * `Article` / `BlogPosting` (En todas las entradas de blog o noticias).

  * `FAQPage` (Vital para AEO. Convierte tus "Preguntas Frecuentes" en datos puros).

  * `Product` / `Service` (En páginas de venta, incluyendo precios y valoraciones).

#### Ejemplo de Código: Script JSON-LD para FAQ (Preguntas Frecuentes)

```javascript
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "¿Cuánto cuesta una página web a medida?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "El precio de una web a medida varía según la complejidad, empezando generalmente en los 1.500€ para proyectos corporativos básicos y pudiendo superar los 10.000€ para aplicaciones web complejas."
    }
  }, {
    "@type": "Question",
    "name": "¿Cuál es el tiempo estimado de entrega?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Un proyecto web a medida estándar suele tardar entre 4 y 8 semanas desde la fase de diseño hasta el despliegue final en el servidor."
    }
  }]
}
</script>
```

### 3.3. Densidad de Hechos y EEAT

* **Fact-Density:** Cuantos más datos verificables (porcentajes, fechas, nombres propios, estadísticas) incluyas, más probable es que la IA te cite como fuente de autoridad. Evita los adjetivos vacíos ("somos los mejores") y cámbialos por hechos ("más de 50 proyectos entregados en 2025").

* **Autoridad (EEAT):** Google y las IAs evalúan la Experiencia, Expertise, Autoridad y Confiabilidad.

  * Incluye cajas de autor (`<address>` o componente de Autor) con biografías reales.

  * Enlaza a perfiles de LinkedIn o fuentes académicas externas que respalden la información.

  * Cita las fuentes de tus datos externos.

## 4. Medición y Monitorización del Rendimiento

El SEO y el AEO requieren métricas diferentes. Mientras que el primero busca volumen de tráfico, el segundo busca citas y referencias (autoridad de marca).

### 4.1. Google Search Console (GSC)
* **Resultados Enriquecidos (Rich Results):** Revisa la pestaña de "Mejoras" o "Experiencia". GSC validará si está leyendo correctamente tu marcado JSON-LD (FAQ, fragmentos de reseñas, artículos). Si hay un error de sintaxis en tus esquemas, te alertará aquí.
* **Monitorización de AI Overviews:** Las búsquedas de "cero clics" están en aumento. Si en GSC notas que un artículo mantiene o sube en impresiones pero baja drásticamente en clics para consultas de tipo "Qué es..." o "Cómo...", es muy probable que la IA de Google esté extrayendo tu contenido (AEO exitoso), aunque debas ajustar tu estrategia para captar tráfico secundario.

### 4.2. Monitorización de Motores de IA (Perplexity, ChatGPT)
* **Tráfico de Referencia (Referral Traffic):** En tu herramienta de analítica (como Google Analytics 4), monitoriza las fuentes de adquisición. Presta especial atención al tráfico que proviene de dominios como `perplexity.ai`, `chatgpt.com` o `claude.ai`. Un clic desde un motor de IA es tráfico altamente cualificado.
* **Pruebas de Prompt (Prompt Coverage):** De forma periódica (ej. mensualmente), formula preguntas clave de tu sector en las principales IAs (ej. "Mejores estrategias de X en 2026"). Evalúa si los modelos recomiendan tu marca y si los enlaces que generan apuntan correctamente a tu web. Esto se conoce como medir tu *Share of Model* (Cuota de Modelo).

### 4.3. Herramientas de Validación Continua
* **Schema Markup Validator:** Antes de desplegar a producción, valida siempre tus scripts JSON-LD en [validator.schema.org](https://validator.schema.org/).
* **PageSpeed Insights / Lighthouse:** Mantén un monitoreo mensual de la velocidad para asegurar que las actualizaciones de diseño no penalizan los tiempos de carga de los bots.

## 5. Checklist de Lanzamiento (Check final)

Antes de pasar a producción cualquier página nueva, verifica:

* [ ] ¿El `<title>` es único, tiene entre 50-60 caracteres y la keyword principal?
* [ ] ¿La `<meta name="description">` es atractiva y menor a 160 caracteres?
* [ ] ¿La etiqueta `<h1>` es única y refleja el tema exacto de la página?
* [ ] ¿Se respeta la jerarquía de `<h2>`, `<h3>` sin saltos?
* [ ] ¿El primer párrafo bajo el H1 responde a la intención de búsqueda principal (formato Answer-First)?
* [ ] ¿Todas las imágenes tienen el atributo `alt` completado?
* [ ] ¿El código HTML utiliza etiquetas semánticas (`<main>`, `<article>`, `<section>`)?
* [ ] ¿Se ha incluido un script `JSON-LD` adecuado para la tipología de la página (FAQ, Artículo, Producto)?
* [ ] ¿El script `JSON-LD` ha pasado la prueba sin errores en el validador oficial?
* [ ] ¿La URL es limpia, sin parámetros basura, y fácil de leer?
* [ ] ¿La página carga rápido en móvil y los enlaces/botones son fácilmente clicables (dedos)?
* [ ] ¿El archivo `robots.txt` y el `sitemap.xml` permiten a los bots descubrir la nueva URL?