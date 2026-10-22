export type ProjectDiscipline = "App Móvil" | "Sistemas de Gestión" | "Web";
export type ProjectCategory = "client" | "internal";

/** Claves de icono — se resuelven a componentes en la vista, no en los datos. */
export type IconKey =
  | "code"
  | "smartphone"
  | "layers"
  | "zap"
  | "database"
  | "scroll"
  | "crown"
  | "wrench"
  | "music"
  | "key"
  | "shield"
  | "server"
  | "bolt"
  | "bell"
  | "palette"
  | "users"
  | "calendar"
  | "star"
  | "lock";

export interface StackItem {
  nombre: string;
  version: string;
  descripcion: string;
  icono: IconKey;
  cols: string;
  invertido: boolean;
}

export interface CaseStudy {
  tagline: string;
  tags: string[];
  stack?: StackItem[];
  arquitectura?: {
    titulo: string;
    intro: string;
    capas: { num: string; titulo: string; texto: string }[];
    metricas: { valor: string; etiqueta: string }[];
  };
  roles?: {
    titulo: string;
    intro: string;
    items: {
      nombre: string;
      icono: IconKey;
      permisos: string;
      descripcion: string;
      invertido: boolean;
    }[];
  };
  seguridad?: {
    titulo: string;
    intro: string;
    capas: {
      numero: string;
      titulo: string;
      icono: IconKey;
      descripcion: string;
    }[];
  };
  cierre?: string;
}

export interface Project {
  id: string;
  title: string;
  discipline: ProjectDiscipline;
  category: ProjectCategory;
  description: string;
  featured: boolean;
  image: string;
  gradient?: string;
  /** URL pública del proyecto en producción, si está publicado. */
  externalLink?: string;
  /** Fecha ISO de publicación de la ficha (señal de frescura para answer engines). */
  datePublished?: string;
  /** Fecha ISO de la última revisión del caso de estudio. */
  dateModified?: string;
  caseStudy?: CaseStudy;
}

export const PROJECTS: Project[] = [
  {
    id: "miau",
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    title: "Miau!",
    discipline: "App Móvil",
    category: "internal",
    description:
      "App móvil para interactuar con tu gato a distancia mediante sonidos y reclamos naturales.",
    featured: false,
    image: "/projects/miau.webp",
    gradient: "from-blue-900 to-black",
    caseStudy: {
      tagline:
        "Sonidos y reclamos que tu gato reconoce, en tu bolsillo. Un experimento de LCI Labs sobre cuánto engancha una app que hace una sola cosa muy bien.",
      tags: ["Android", "Gamificación", "Retención", "Sin latencia"],
      stack: [
        {
          nombre: "Retención",
          version: "Uso diario",
          descripcion:
            "La app se abre varias veces al día porque el gato responde. El bucle de interacción no lo diseñamos nosotros: lo diseñó la naturaleza.",
          icono: "star",
          cols: "md:col-span-2 md:row-span-2",
          invertido: true,
        },
        {
          nombre: "Cero latencia",
          version: "Audio nativo",
          descripcion:
            "El sonido suena en el instante en que pulsas. Cualquier retardo rompe la reacción del animal y la magia del momento.",
          icono: "bolt",
          cols: "md:col-span-2",
          invertido: false,
        },
        {
          nombre: "Móvil primero",
          version: "Nativo",
          descripcion:
            "Construida en Kotlin y Jetpack Compose para aprovechar el hardware sin capas intermedias.",
          icono: "smartphone",
          cols: "md:col-span-1",
          invertido: false,
        },
        {
          nombre: "Gamificación",
          version: "Enganche",
          descripcion:
            "Descubrir qué reclamo funciona con tu gato convierte el uso en un juego de prueba y error.",
          icono: "zap",
          cols: "md:col-span-1",
          invertido: false,
        },
      ],
      cierre: "Una sola cosa, hecha muy bien.",
    },
  },
  {
    id: "miau-gold",
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    title: "Miau! GOLD",
    discipline: "App Móvil",
    category: "internal",
    description:
      "Versión premium de Miau! con contenido exclusivo y funciones avanzadas para dueños exigentes.",
    featured: false,
    image: "/projects/miauGold.webp",
    gradient: "from-yellow-600 to-black",
    caseStudy: {
      tagline:
        "La capa premium de Miau!. El laboratorio donde probamos cómo convertir usuarios enganchados en suscriptores sin romper la experiencia gratuita.",
      tags: ["Suscripción", "Contenido exclusivo", "Android", "Monetización"],
      stack: [
        {
          nombre: "Monetización",
          version: "Suscripción",
          descripcion:
            "Modelo recurrente en lugar de pago único: ingresos previsibles y un incentivo real para seguir añadiendo contenido cada mes.",
          icono: "star",
          cols: "md:col-span-2 md:row-span-2",
          invertido: true,
        },
        {
          nombre: "Valor exclusivo",
          version: "Premium",
          descripcion:
            "Sonidos y funciones que solo existen aquí. La versión gratuita nunca se degrada para forzar el pago.",
          icono: "crown",
          cols: "md:col-span-2",
          invertido: false,
        },
        {
          nombre: "Rendimiento",
          version: "Fluido",
          descripcion:
            "Misma respuesta instantánea que la versión base, con más contenido cargado.",
          icono: "bolt",
          cols: "md:col-span-1",
          invertido: false,
        },
        {
          nombre: "Experiencia",
          version: "Nativa",
          descripcion:
            "Interfaz cuidada al detalle para que pagar se sienta como un salto de categoría.",
          icono: "smartphone",
          cols: "md:col-span-1",
          invertido: false,
        },
      ],
      cierre: "Premium de verdad, no gratuito capado.",
    },
  },
  {
    id: "music-link",
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    title: "Music Link",
    discipline: "App Móvil",
    category: "internal",
    description:
      "Red social para músicos: conecta bandas, salas y artistas en el ecosistema musical local.",
    featured: false,
    image: "/projects/musicLink.webp",
    gradient: "from-slate-400 to-black",
    caseStudy: {
      tagline:
        "La escena musical local, unificada. Músicos, bandas, salas y fans en un mismo sitio para dejar de buscarse por grupos de Facebook y boca a boca.",
      tags: ["Comunidad", "Networking", "Retención", "Escalable"],
      stack: [
        {
          nombre: "Comunidad",
          version: "Hiper-segmentada",
          descripcion:
            "No es una red social más: aquí todo el mundo comparte un mismo contexto. Esa especificidad es lo que hace que cada publicación importe y que el usuario vuelva.",
          icono: "users",
          cols: "md:col-span-2 md:row-span-2",
          invertido: true,
        },
        {
          nombre: "Networking directo",
          version: "Sin intermediarios",
          descripcion:
            "Una banda encuentra sala y una sala encuentra cartel sin pasar por terceros. Menos fricción, más conciertos cerrados.",
          icono: "music",
          cols: "md:col-span-2",
          invertido: false,
        },
        {
          nombre: "Retención",
          version: "Uso recurrente",
          descripcion:
            "Chat, eventos y logros dan motivos reales para abrir la app cada semana.",
          icono: "star",
          cols: "md:col-span-1",
          invertido: false,
        },
        {
          nombre: "Móvil nativo",
          version: "Android",
          descripcion:
            "Rendimiento y notificaciones instantáneas donde el músico ya tiene la atención: el teléfono.",
          icono: "smartphone",
          cols: "md:col-span-1",
          invertido: false,
        },
        {
          nombre: "Escalabilidad",
          version: "Ciudad a ciudad",
          descripcion:
            "El modelo funciona en cualquier escena local: replicarlo en una ciudad nueva no exige reescribir el producto, solo llenarlo de gente.",
          icono: "bolt",
          cols: "md:col-span-2",
          invertido: true,
        },
      ],
      arquitectura: {
        titulo: "Un ecosistema conectado",
        intro:
          "Tres tipos de usuario con necesidades distintas conviviendo en el mismo producto. Cada uno entra por una puerta diferente, pero todos acaban en la misma escena.",
        capas: [
          {
            num: "Artistas",
            titulo: "Encuentran banda y bolos",
            texto:
              "Perfil con instrumentos, géneros y nivel. Buscan proyecto o se postulan directamente a eventos abiertos.",
          },
          {
            num: "Bandas",
            titulo: "Gestionan equipo y agenda",
            texto:
              "Roles internos, chat privado para coordinar ensayos y candidaturas a salas sin llamar a nadie.",
          },
          {
            num: "Salas",
            titulo: "Llenan el cartel",
            texto:
              "Publican convocatorias abiertas y reciben bandas que ya encajan con su público y su estilo.",
          },
        ],
        metricas: [
          { valor: "3", etiqueta: "Tipos de perfil" },
          { valor: "16", etiqueta: "Tipos de notificación" },
          { valor: "6", etiqueta: "Categorías de logros" },
          { valor: "1", etiqueta: "Escena unificada" },
        ],
      },
      roles: {
        titulo: "Equipos que se organizan solos",
        intro:
          "Bandas y salas gestionan su gente con tres niveles de permiso. El fundador delega sin perder el control y nadie toca lo que no debe.",
        items: [
          {
            nombre: "Admin",
            icono: "crown",
            permisos: "Estructura · Contenido · Miembros · Eliminar org.",
            descripcion:
              "Control total. El fundador de la banda o el dueño de la sala.",
            invertido: true,
          },
          {
            nombre: "Ayudante",
            icono: "wrench",
            permisos: "Contenido · Editar info · Posts · Eventos.",
            descripcion:
              "No gestiona miembros ni borra la entidad. Manager o técnico de sonido.",
            invertido: false,
          },
          {
            nombre: "Integrante",
            icono: "music",
            permisos: "Lectura · Chat interno.",
            descripcion:
              "Aparece en el staff y accede al chat. Sin permisos de edición.",
            invertido: false,
          },
        ],
      },
      seguridad: {
        titulo: "Una comunidad protegida",
        intro:
          "Una red social solo funciona si la gente se siente segura dentro. Estas son las tres garantías que sostienen la confianza del ecosistema.",
        capas: [
          {
            numero: "01",
            titulo: "Nadie suplanta a nadie",
            icono: "key",
            descripcion:
              "Cada mensaje, publicación o candidatura queda vinculada a su autor real. Imposible publicar en nombre de otro artista o banda.",
          },
          {
            numero: "02",
            titulo: "Conversaciones privadas",
            icono: "shield",
            descripcion:
              "Los chats entre artistas y el canal interno de cada banda solo son legibles por sus participantes. Sin excepciones.",
          },
          {
            numero: "03",
            titulo: "Moderación real",
            icono: "lock",
            descripcion:
              "Sistema de reportes con revisión y protección anti-spam en mensajería para que la comunidad no se degrade al crecer.",
          },
        ],
      },
      cierre: "La escena local, por fin en un solo sitio.",
    },
  },
  {
    id: "ticketurn",
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    title: "TickeTurn",
    discipline: "Sistemas de Gestión",
    category: "client",
    description:
      "Plataforma de gestión de turnos y colas para negocios de servicio. Producto consolidado y en fase de expansión comercial.",
    featured: true,
    image: "/projects/ticketurn.webp",
    gradient: "from-blue-950 from-30% to-blue-400 to-70%",
    externalLink: "https://www.ticketurn.com/",
    caseStudy: {
      tagline:
        "Gestión de turnos y colas en tiempo real. Tus clientes esperan desde donde quieran y tú controlas el flujo de tu negocio desde cualquier dispositivo.",
      tags: ["Tiempo real", "Marca blanca", "Instalable", "Multi-negocio"],
      stack: [
        {
          nombre: "Velocidad",
          version: "Rendimiento",
          descripcion:
            "Carga instantánea y máxima optimización SEO para retener usuarios. Cada segundo de espera es un cliente que se va: aquí no hay espera.",
          icono: "server",
          cols: "md:col-span-2 md:row-span-2",
          invertido: true,
        },
        {
          nombre: "Privacidad",
          version: "Seguridad",
          descripcion:
            "Arquitectura blindada: aislamiento absoluto y seguridad total de los datos de cada cliente.",
          icono: "database",
          cols: "md:col-span-2",
          invertido: false,
        },
        {
          nombre: "Personalización",
          version: "Tu marca",
          descripcion:
            "Marca blanca 100% adaptable a la identidad corporativa de cualquier negocio.",
          icono: "palette",
          cols: "md:col-span-1",
          invertido: false,
        },
        {
          nombre: "Accesibilidad",
          version: "Sin tiendas",
          descripcion:
            "Aplicación instalable directamente desde el navegador, sin barreras ni comisiones de las tiendas de apps.",
          icono: "bell",
          cols: "md:col-span-1",
          invertido: false,
        },
        {
          nombre: "Ligereza",
          version: "Sin lastre",
          descripcion:
            "Construido sin dependencias innecesarias: menos peso, menos fallos y un producto que no envejece con las modas.",
          icono: "bolt",
          cols: "md:col-span-2",
          invertido: true,
        },
      ],
      arquitectura: {
        titulo: "Arquitectura multi-tenant",
        intro:
          "Cada negocio es un tenant aislado. Toda mutación pasa exclusivamente por Server Actions, que validan sesión y pertenencia antes de tocar Postgres. La identidad visual se resuelve en el servidor e inyecta como variables CSS inline, permitiendo marca blanca real sin recompilar ni duplicar hojas de estilo.",
        capas: [
          {
            num: "Edge",
            titulo: "Resolución de tenant",
            texto:
              "El subdominio o slug identifica al tenant y carga su configuración de marca antes del primer render.",
          },
          {
            num: "Server",
            titulo: "Server Actions",
            texto:
              "Único punto de escritura. Validan sesión, tenant y payload antes de ejecutar la transacción en Postgres.",
          },
          {
            num: "Data",
            titulo: "RLS por tenant",
            texto:
              "Row Level Security en Postgres garantiza el aislamiento aunque una consulta se escape de la capa de aplicación.",
          },
        ],
        metricas: [
          { valor: "0", etiqueta: "API Routes expuestas" },
          { valor: "100%", etiqueta: "Mutaciones vía Server Actions" },
          { valor: "RLS", etiqueta: "Aislamiento en base de datos" },
          { valor: "0", etiqueta: "Librerías de i18n o fechas" },
        ],
      },
      seguridad: {
        titulo: "Retos de ingeniería",
        intro:
          "Tres decisiones estructurales que definen el producto: superficie de ataque mínima, personalización sin duplicar código y una filosofía de dependencias deliberadamente austera.",
        capas: [
          {
            numero: "01",
            titulo: "Mutación centralizada",
            icono: "shield",
            descripcion:
              "Al no existir API Routes, no hay endpoints públicos que auditar. Cada Server Action valida identidad y tenant en el mismo punto donde escribe.",
          },
          {
            numero: "02",
            titulo: "Marca blanca dinámica",
            icono: "palette",
            descripcion:
              "Los colores del tenant se resuelven en servidor y se inyectan como variables CSS inline. Un solo build sirve a todos los clientes.",
          },
          {
            numero: "03",
            titulo: "Zero external libs",
            icono: "bolt",
            descripcion:
              "i18n implementado a mano y fechas resueltas con Intl. Menos peso, menos CVEs y ningún bloqueo por abandono de un paquete.",
          },
        ],
      },
      cierre: "Un solo build. Cada cliente, su propia marca.",
    },
  },
  {
    id: "saas-clinicas",
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    title: "SaaS para clínicas",
    discipline: "Sistemas de Gestión",
    category: "client",
    description:
      "Sistema integral para clínicas y consultas profesionales: agenda, historial y facturación en un flujo único. Fase final de desarrollo.",
    featured: false,
    image: "/projects/consulta-me.webp",
    gradient: "from-sky-500 to-black",
    caseStudy: {
      tagline:
        "El día a día de una consulta, resuelto. Agenda, historial y facturación en un único flujo para que dediques tu tiempo a los pacientes, no al papeleo.",
      tags: ["Privacidad total", "Agenda automática", "Sin papeleo", "Multi-consulta"],
      stack: [
        {
          nombre: "Privacidad total",
          version: "Datos sensibles",
          descripcion:
            "Los datos de tus pacientes están cifrados y aislados. Cumplimiento normativo desde el primer día, sin que tengas que preocuparte por ello.",
          icono: "shield",
          cols: "md:col-span-2 md:row-span-2",
          invertido: true,
        },
        {
          nombre: "Agenda automática",
          version: "Sin llamadas",
          descripcion:
            "Reservas, confirmaciones y recordatorios se gestionan solos. Menos huecos vacíos y menos ausencias sin avisar.",
          icono: "calendar",
          cols: "md:col-span-2",
          invertido: false,
        },
        {
          nombre: "Menos carga",
          version: "Administración",
          descripcion:
            "Historial y facturación conectados: lo que registras una vez no vuelves a escribirlo.",
          icono: "bolt",
          cols: "md:col-span-1",
          invertido: false,
        },
        {
          nombre: "Para todos",
          version: "Accesible",
          descripcion:
            "Funciona en cualquier dispositivo y es usable también para pacientes mayores o con baja visión.",
          icono: "users",
          cols: "md:col-span-1",
          invertido: false,
        },
      ],
      seguridad: {
        titulo: "Lo que resuelve",
        intro:
          "Tres problemas reales de cualquier consulta profesional, atacados desde el diseño del producto.",
        capas: [
          {
            numero: "01",
            titulo: "Confianza del paciente",
            icono: "lock",
            descripcion:
              "Cada historial queda aislado y accesible solo por quien debe verlo. La privacidad no es una opción de configuración: es el punto de partida.",
          },
          {
            numero: "02",
            titulo: "Agenda que se llena sola",
            icono: "calendar",
            descripcion:
              "El paciente reserva cuando le viene bien y recibe recordatorio automático. Menos ausencias, menos horas muertas.",
          },
          {
            numero: "03",
            titulo: "Horas administrativas recuperadas",
            icono: "bolt",
            descripcion:
              "Facturar deja de ser una tarea de final de mes. Los datos ya están donde tienen que estar.",
          },
        ],
      },
      cierre: "Tu consulta funcionando sola mientras tú atiendes.",
    },
  },
  {
    id: "podologia-balboa",
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    title: "Podología Balboa",
    discipline: "Web",
    category: "client",
    description:
      "Web clínica con UX orientada a confianza y conversión: reserva de cita en segundos y comunicación transparente del servicio.",
    featured: false,
    image: "/projects/podologiaBalboa.webp",
    gradient: "from-rose-900 to-black",
    externalLink: "https://www.podologiabalboa.es/es",
    caseStudy: {
      tagline:
        "Una web clínica pensada para generar confianza antes de la primera visita: información clara, reserva en segundos y cero fricción para cualquier paciente.",
      tags: ["Confianza", "Reserva rápida", "Accesible", "Privacidad"],
      stack: [
        {
          nombre: "Confianza",
          version: "Primera impresión",
          descripcion:
            "Diseño limpio y comunicación transparente del servicio. El paciente entiende qué se le va a hacer antes de pedir cita, y eso reduce la duda que frena la reserva.",
          icono: "shield",
          cols: "md:col-span-2 md:row-span-2",
          invertido: true,
        },
        {
          nombre: "Reserva en segundos",
          version: "Sin llamadas",
          descripcion:
            "Pedir cita no exige llamar en horario de consulta. Menos barreras, más pacientes que completan la reserva.",
          icono: "calendar",
          cols: "md:col-span-2",
          invertido: false,
        },
        {
          nombre: "Accesibilidad",
          version: "Universal",
          descripcion:
            "Textos legibles, contraste alto y navegación simple para pacientes de cualquier edad.",
          icono: "users",
          cols: "md:col-span-1",
          invertido: false,
        },
        {
          nombre: "Datos protegidos",
          version: "Privacidad",
          descripcion:
            "Solo se pide lo imprescindible y se trata con las garantías que exige el sector sanitario.",
          icono: "lock",
          cols: "md:col-span-1",
          invertido: false,
        },
      ],
      seguridad: {
        titulo: "Lo que resuelve",
        intro:
          "Una clínica no compite por tráfico: compite por que quien entra acabe pidiendo cita.",
        capas: [
          {
            numero: "01",
            titulo: "Conversión, no visitas",
            icono: "calendar",
            descripcion:
              "Cada elemento de la página está orientado a un único objetivo: que el paciente reserve. Sin distracciones ni pasos innecesarios.",
          },
          {
            numero: "02",
            titulo: "Autoridad clínica",
            icono: "shield",
            descripcion:
              "Explicar bien el servicio genera la confianza que un paciente necesita antes de poner sus pies en manos de alguien.",
          },
          {
            numero: "03",
            titulo: "Nadie se queda fuera",
            icono: "users",
            descripcion:
              "El público de una podología es transversal en edad. La web funciona igual de bien a los 20 que a los 80.",
          },
        ],
      },
      cierre: "Que entrar en la web sea el primer paso del tratamiento.",
    },
  },
];
