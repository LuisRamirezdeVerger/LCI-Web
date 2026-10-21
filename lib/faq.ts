import { PRECIOS } from "@/lib/pricing";

export interface Faq {
  /** Slug estable: permite seleccionar preguntas sin depender del orden. */
  id: string;
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
    id: "precio-web",
    pregunta: "¿Cuánto cuesta una página web a medida?",
    respuesta:
      `En La Casa de los Inventos una landing page de alto rendimiento parte de ${PRECIOS.escaparate.texto} €. Una aplicación web transaccional con base de datos y autenticación parte de ${PRECIOS.motor.texto} €, y el desarrollo de una app móvil nativa parte de ${PRECIOS.bolsillo.texto} €. El precio final depende del alcance funcional, que cerramos antes de empezar.`,
  },
  {
    id: "que-es-a-medida",
    pregunta: "¿Qué es el desarrollo web a medida?",
    respuesta:
      "El desarrollo web a medida es la creación de software programado desde cero para las necesidades concretas de un negocio, sin plantillas prefabricadas. Permite controlar el rendimiento, la seguridad y la escalabilidad, y evita pagar cuotas por funciones que no se usan.",
  },
  {
    id: "plazos",
    pregunta: "¿Cuánto tarda un proyecto web?",
    respuesta:
      "Una landing page se entrega habitualmente en 1 a 2 semanas. Una aplicación web transaccional tarda entre 4 y 8 semanas según la complejidad de la lógica de negocio. Una app móvil nativa requiere de 8 a 12 semanas, incluyendo la fase de pruebas previa a publicación.",
  },
  {
    id: "tecnologias",
    pregunta: "¿Qué tecnologías utilizáis?",
    respuesta:
      "Trabajamos con Next.js y React en TypeScript estricto para web, Tailwind CSS para los estilos y Supabase (PostgreSQL) como base de datos. En móvil usamos Kotlin con Jetpack Compose para Android nativo. Desplegamos en Vercel con monitorización de rendimiento continua.",
  },
  {
    id: "fuera-de-sevilla",
    pregunta: "¿Trabajáis con clientes fuera de Sevilla?",
    respuesta:
      "Sí. Operamos desde Sevilla pero trabajamos en remoto con clientes de toda España. Las reuniones se hacen por videollamada y la entrega es digital, así que la ubicación del cliente no condiciona ni el plazo ni el precio del proyecto.",
  },
  {
    id: "auditoria",
    pregunta: "¿Puedo contratar solo una auditoría de mi web actual?",
    respuesta:
      "Sí. El servicio de Optimización funciona con bolsa de horas: auditamos el código, medimos el rendimiento real, corregimos errores y actualizamos dependencias de proyectos existentes en React o Next.js, sin necesidad de rehacer el producto desde cero.",
  },
  {
    id: "seo-incluido",
    pregunta: "¿La web incluye optimización SEO?",
    respuesta:
      "Sí. Todos los proyectos salen con SEO técnico implementado: renderizado en servidor, metaetiquetas, datos estructurados Schema.org, sitemap y robots.txt. Esto también los hace legibles para motores de respuesta con IA como Perplexity, ChatGPT o las AI Overviews de Google.",
  },
  {
    id: "primera-sesion",
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

/**
 * Subconjunto que se muestra en la home.
 *
 * La selección no es arbitraria: deja fuera a propósito las preguntas de
 * precio, plazos y stack. Esas son las consultas que `/nuestro-taller` debe
 * ganar, y si ambas URLs las responden con el mismo texto compiten entre sí
 * (canibalización) y el recuperador de un LLM cita la que más puntúe, que no
 * es necesariamente la que convierte.
 *
 * Lo que queda en la home son las tres preguntas que no solapan con ese
 * conjunto: la definicional (buen material de cita para motores de respuesta),
 * la de alcance geográfico (refuerza la señal local, que ya vive en la home
 * vía el schema `ProfessionalService`) y la de conversión.
 */
const IDS_HOME = ["que-es-a-medida", "fuera-de-sevilla", "primera-sesion"] as const;

export const FAQS_HOME: Faq[] = IDS_HOME.map((id) => {
  const faq = FAQS_SERVICIOS.find((f) => f.id === id);
  // Falla en build si alguien renombra un id en el SSoT: mejor que servir
  // una home con el bloque de FAQ silenciosamente vacío.
  if (!faq) throw new Error(`[faq] id desconocido en IDS_HOME: ${id}`);
  return faq;
});
