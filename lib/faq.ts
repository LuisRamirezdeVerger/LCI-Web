import { PRECIOS } from "@/lib/pricing";

export interface Faq {
  pregunta: string;
  /** Respuesta directa de 40-60 palabras (formato Answer-First / BLUF). */
  respuesta: string;
}

/**
 * Preguntas frecuentes de servicio. Alimentan tanto la UI como el schema
 * `FAQPage`, así que editar aquí actualiza ambos a la vez.
 */
export const FAQS_SERVICIOS: Faq[] = [
  {
    pregunta: "¿Cuánto cuesta una página web a medida?",
    respuesta:
      `En La Casa de los Inventos una landing page de alto rendimiento parte de ${PRECIOS.escaparate.texto} €. Una aplicación web transaccional con base de datos y autenticación parte de ${PRECIOS.motor.texto} €, y el desarrollo de una app móvil nativa parte de ${PRECIOS.bolsillo.texto} €. El precio final depende del alcance funcional, que cerramos antes de empezar.`,
  },
  {
    pregunta: "¿Qué es el desarrollo web a medida?",
    respuesta:
      "El desarrollo web a medida es la creación de software programado desde cero para las necesidades concretas de un negocio, sin plantillas prefabricadas. Permite controlar el rendimiento, la seguridad y la escalabilidad, y evita pagar cuotas por funciones que no se usan.",
  },
  {
    pregunta: "¿Cuánto tarda un proyecto web?",
    respuesta:
      "Una landing page se entrega habitualmente en 1 a 2 semanas. Una aplicación web transaccional tarda entre 4 y 8 semanas según la complejidad de la lógica de negocio. Una app móvil nativa requiere de 8 a 12 semanas, incluyendo la fase de pruebas previa a publicación.",
  },
  {
    pregunta: "¿Qué tecnologías utilizáis?",
    respuesta:
      "Trabajamos con Next.js y React en TypeScript estricto para web, Tailwind CSS para los estilos y PostgreSQL o Firebase como base de datos. En móvil usamos Kotlin con Jetpack Compose para Android nativo. Desplegamos en Vercel con monitorización de rendimiento continua.",
  },
  {
    pregunta: "¿Trabajáis con clientes fuera de Sevilla?",
    respuesta:
      "Sí. Operamos desde Sevilla pero trabajamos en remoto con clientes de toda España. Las reuniones se hacen por videollamada y la entrega es digital, así que la ubicación del cliente no condiciona ni el plazo ni el precio del proyecto.",
  },
  {
    pregunta: "¿Puedo contratar solo una auditoría de mi web actual?",
    respuesta:
      "Sí. El servicio de Optimización funciona con bolsa de horas: auditamos el código, medimos el rendimiento real, corregimos errores y actualizamos dependencias de proyectos existentes en React o Next.js, sin necesidad de rehacer el producto desde cero.",
  },
  {
    pregunta: "¿La web incluye optimización SEO?",
    respuesta:
      "Sí. Todos los proyectos salen con SEO técnico implementado: renderizado en servidor, metaetiquetas, datos estructurados Schema.org, sitemap y robots.txt. Esto también los hace legibles para motores de respuesta con IA como Perplexity, ChatGPT o las AI Overviews de Google.",
  },
  {
    pregunta: "¿Qué incluye la primera sesión de consultoría?",
    respuesta:
      "La primera sesión no tiene coste ni compromiso. Analizamos tu idea, definimos el alcance técnico y salimos con un plan, un plazo y un precio cerrado. Si consideramos que el proyecto no encaja con nosotros, te lo decimos y te orientamos hacia otra opción.",
  },
];

/** Construye el schema FAQPage desde la misma fuente que renderiza la UI. */
export const faqSchema = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ pregunta, respuesta }) => ({
    "@type": "Question",
    name: pregunta,
    acceptedAnswer: { "@type": "Answer", text: respuesta },
  })),
});
