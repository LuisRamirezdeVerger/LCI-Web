import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Code2,
  Crown,
  Database,
  KeyRound,
  Layers,
  Music,
  ScrollText,
  ShieldCheck,
  Smartphone,
  Wrench,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Music Link · Caso de Estudio | La Casa de los Inventos",
  description:
    "Caso de estudio de Music Link: arquitectura MVVM + Clean, 33 ViewModels, 16 repositorios, sistema de roles jerárquico y seguridad en tres capas sobre Firebase.",
};

const STACK = [
  {
    nombre: "Kotlin",
    version: "2.1.0",
    descripcion: "100% Kotlin, sin Java. Lenguaje moderno, conciso y type-safe en toda la base de código.",
    icono: Code2,
    cols: "md:col-span-2 md:row-span-2",
    invertido: true,
  },
  {
    nombre: "Jetpack Compose",
    version: "Material 3",
    descripcion: "UI declarativa, reactiva y completamente nativa. Sin XML.",
    icono: Smartphone,
    cols: "md:col-span-2",
    invertido: false,
  },
  {
    nombre: "Dagger Hilt",
    version: "2.54",
    descripcion: "17 módulos de inyección de dependencias.",
    icono: Layers,
    cols: "md:col-span-1",
    invertido: false,
  },
  {
    nombre: "Coroutines & Flow",
    version: "Async",
    descripcion: "StateFlow, SharedFlow y callbackFlow para tiempo real.",
    icono: Zap,
    cols: "md:col-span-1",
    invertido: false,
  },
  {
    nombre: "Firebase",
    version: "Backend",
    descripcion: "Auth, Firestore, Storage, Analytics y Crashlytics integrados de forma desacoplada vía interfaces.",
    icono: Database,
    cols: "md:col-span-2",
    invertido: true,
  },
  {
    nombre: "Navigation Compose",
    version: "Type-Safe",
    descripcion: "Rutas tipadas con @Serializable y deep links desde push notifications.",
    icono: ScrollText,
    cols: "md:col-span-2",
    invertido: false,
  },
] as const;

const NUMEROS = [
  { valor: "33", etiqueta: "ViewModels" },
  { valor: "16", etiqueta: "Repositorios" },
  { valor: "17", etiqueta: "Módulos Hilt" },
  { valor: "19", etiqueta: "Modelos de dominio" },
] as const;

const ROLES = [
  {
    nombre: "Admin",
    icono: Crown,
    permisos: "Estructura · Contenido · Miembros · Eliminar org.",
    descripcion: "Control total. El fundador de la banda o el dueño de la sala.",
    invertido: true,
  },
  {
    nombre: "Ayudante",
    icono: Wrench,
    permisos: "Contenido · Editar info · Posts · Eventos.",
    descripcion: "No gestiona miembros ni borra la entidad. Manager o técnico de sonido.",
    invertido: false,
  },
  {
    nombre: "Integrante",
    icono: Music,
    permisos: "Lectura · Chat interno.",
    descripcion: "Aparece en el staff y accede al chat. Sin permisos de edición.",
    invertido: false,
  },
] as const;

const CAPAS_SEGURIDAD = [
  {
    numero: "01",
    titulo: "Firebase Auth",
    icono: KeyRound,
    descripcion: "Todo acceso requiere un JWT válido. El uid del token es la identidad base de toda regla.",
  },
  {
    numero: "02",
    titulo: "Security Rules",
    icono: ShieldCheck,
    descripcion: "Denegación total por defecto. Verificación de autoría e identidad en cada escritura. Campos estructurales protegidos.",
  },
  {
    numero: "03",
    titulo: "Cloud Functions",
    icono: Layers,
    descripcion: "Operaciones privilegiadas con Admin SDK fuera del alcance de las reglas: aprobaciones, soft-delete diferido, isPremium.",
  },
] as const;

export default function MusicLinkCaseStudyPage() {
  return (
    <main className="min-h-[90vh] w-full max-w-[100vw] overflow-x-hidden bg-white text-black px-[5%] py-[6rem] flex flex-col gap-[6rem] md:gap-[8rem]">
      {/* HERO */}
      <header className="flex flex-col gap-[2rem] animate-fade-in-up">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-[0.5rem] self-start text-xs uppercase font-bold tracking-[0.2em] hover:opacity-60 active:scale-[0.98] transition-all duration-300"
        >
          <ArrowLeft size="1rem" className="shrink-0" />
          Volver a proyectos
        </Link>

        <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[8rem] font-[900] uppercase tracking-tighter leading-[0.9] break-words hyphens-auto">
          Music
          <br />
          Link
        </h1>

        <p className="text-lg md:text-xl max-w-[42rem] leading-relaxed font-medium">
          Conectamos músicos, bandas, salas de conciertos y fans en una sola
          plataforma diseñada para que la escena musical local crezca.
        </p>

        <div className="flex flex-wrap gap-[0.5rem] mt-[1rem]">
          {["Android", "Jetpack Compose", "Kotlin", "Firebase"].map((tag) => (
            <span
              key={tag}
              className="text-[0.7rem] font-bold border-2 border-black px-[0.75rem] py-[0.35rem] uppercase tracking-widest whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* STACK · BENTO */}
      <Reveal>
        <section
          aria-labelledby="stack-tecnologico"
          className="flex flex-col gap-[2.5rem]"
        >
          <h2
            id="stack-tecnologico"
            className="text-[1.75rem] sm:text-3xl md:text-5xl font-black uppercase tracking-tighter break-words hyphens-auto"
          >
            Stack tecnológico
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[12rem] grid-flow-dense gap-[1.5rem]">
            {STACK.map(({ nombre, version, descripcion, icono: Icono, cols, invertido }) => (
              <article
                key={nombre}
                className={`${cols} border-2 border-black p-[2rem] flex flex-col justify-between gap-[1rem] transition-colors duration-300 hover:bg-black hover:text-white active:bg-black active:text-white active:scale-[0.98] ${
                  invertido ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <div className="flex items-center gap-[0.75rem]">
                  <Icono size="1.5rem" className="shrink-0" />
                  <span className="text-xs uppercase font-bold tracking-[0.2em] opacity-70">
                    {version}
                  </span>
                </div>
                <div className="flex flex-col gap-[0.5rem]">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter break-words">
                    {nombre}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed opacity-90 break-words">
                    {descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ARQUITECTURA */}
      <Reveal>
        <section
          aria-labelledby="arquitectura"
          className="flex flex-col gap-[2.5rem]"
        >
          <h2
            id="arquitectura"
            className="text-[1.75rem] sm:text-3xl md:text-5xl font-black uppercase tracking-tighter break-words hyphens-auto"
          >
            Arquitectura: MVVM + Clean
          </h2>
          <p className="text-base md:text-lg max-w-[42rem] leading-relaxed">
            Tres capas con responsabilidades estrictamente separadas. La{" "}
            <span className="font-black">UI Layer</span> solo pinta estados y
            lanza eventos. La <span className="font-black">Domain Layer</span>{" "}
            define modelos, interfaces de repositorio y use cases. La{" "}
            <span className="font-black">Data Layer</span> implementa los
            repositorios contra Firebase, encapsulando todos los detalles del
            SDK detrás de tipos limpios (`Result&lt;T&gt;`, `Flow&lt;T&gt;`).
          </p>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
            {[
              {
                num: "UI",
                titulo: "Compose Screens + ViewModels",
                texto: "Pantallas declarativas y ViewModels @HiltViewModel con StateFlow<UiState> y patrón sealed class.",
              },
              {
                num: "Domain",
                titulo: "Modelos, interfaces, use cases",
                texto: "Contratos puros sin dependencia de Firebase. 16 repository interfaces, 10 use cases.",
              },
              {
                num: "Data",
                titulo: "Repository Implementations",
                texto: "try/catch → Result<T>, callbackFlow para snapshot listeners, batches atómicos en Firestore.",
              },
            ].map(({ num, titulo, texto }) => (
              <li
                key={num}
                className="border-2 border-black p-[1.5rem] flex flex-col gap-[0.75rem] transition-colors duration-300 hover:bg-black hover:text-white active:bg-black active:text-white active:scale-[0.98]"
              >
                <span className="text-xs uppercase font-bold tracking-[0.2em] opacity-70">
                  Capa
                </span>
                <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                  {num}
                </span>
                <h3 className="text-base md:text-lg font-bold leading-snug">
                  {titulo}
                </h3>
                <p className="text-sm leading-relaxed opacity-90 break-words">
                  {texto}
                </p>
              </li>
            ))}
          </ol>

          <Reveal delay={150}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1.5rem] border-t-2 border-black pt-[2.5rem]">
              {NUMEROS.map(({ valor, etiqueta }) => (
                <li
                  key={etiqueta}
                  className="flex flex-col gap-[0.25rem]"
                >
                  <span className="text-[2.5rem] md:text-[4.5rem] font-[900] tracking-tighter leading-none break-words">
                    {valor}
                  </span>
                  <span className="text-xs md:text-sm uppercase font-bold tracking-[0.2em] opacity-70 break-words">
                    {etiqueta}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      </Reveal>

      {/* ROLES */}
      <Reveal>
        <section
          aria-labelledby="roles"
          className="flex flex-col gap-[2.5rem]"
        >
          <h2
            id="roles"
            className="text-[1.75rem] sm:text-3xl md:text-5xl font-black uppercase tracking-tighter break-words hyphens-auto"
          >
            Roles jerárquicos
          </h2>
          <p className="text-base md:text-lg max-w-[42rem] leading-relaxed">
            Bandas y salas comparten un sistema de tres roles que define qué
            puede hacer cada miembro del equipo. Los permisos se materializan
            tanto en la UI como en las Security Rules de Firestore.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
            {ROLES.map(({ nombre, icono: Icono, permisos, descripcion, invertido }) => (
              <article
                key={nombre}
                className={`border-2 border-black p-[2rem] flex flex-col gap-[1rem] transition-colors duration-300 active:scale-[0.98] ${
                  invertido
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white active:bg-black active:text-white"
                }`}
              >
                <Icono size="2rem" className="shrink-0" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                  {nombre}
                </h3>
                <p className="text-xs uppercase font-bold tracking-[0.15em] opacity-80 break-words">
                  {permisos}
                </p>
                <p className="text-sm md:text-base leading-relaxed opacity-90 break-words">
                  {descripcion}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {/* SEGURIDAD */}
      <Reveal>
        <section
          aria-labelledby="seguridad"
          className="flex flex-col gap-[2.5rem]"
        >
          <h2
            id="seguridad"
            className="text-[1.75rem] sm:text-3xl md:text-5xl font-black uppercase tracking-tighter break-words hyphens-auto"
          >
            Seguridad en tres capas
          </h2>
          <p className="text-base md:text-lg max-w-[42rem] leading-relaxed">
            La defensa se aplica antes de tocar la base de datos. Las reglas
            verifican identidad, autoría y campos estructurales protegidos en
            cada operación. Auto-promoción a admin, suplantación de identidad y
            escalada de privilegios quedan bloqueadas a nivel de Firestore.
          </p>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
            {CAPAS_SEGURIDAD.map(({ numero, titulo, icono: Icono, descripcion }) => (
              <li
                key={numero}
                className="border-2 border-black p-[1.5rem] flex flex-col gap-[1rem] transition-colors duration-300 hover:bg-black hover:text-white active:bg-black active:text-white active:scale-[0.98]"
              >
                <div className="flex items-center justify-between">
                  <Icono size="1.5rem" className="shrink-0" />
                  <span className="text-xs uppercase font-bold tracking-[0.2em] opacity-70">
                    {numero}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">
                  {titulo}
                </h3>
                <p className="text-sm md:text-base leading-relaxed opacity-90 break-words">
                  {descripcion}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      {/* CIERRE */}
      <Reveal>
        <section className="border-t-2 border-black pt-[3rem] md:pt-[4rem] flex flex-col gap-[1.5rem]">
          <p className="text-xs uppercase font-bold tracking-[0.2em] opacity-70">
            Caso de estudio
          </p>
          <p className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter leading-tight max-w-[40rem] break-words hyphens-auto">
            Una arquitectura pensada para crecer sin romperse.
          </p>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-[0.5rem] self-start text-xs uppercase font-bold tracking-[0.2em] mt-[1rem] hover:opacity-60 active:scale-[0.98] transition-all duration-300"
          >
            <ArrowLeft size="1rem" className="shrink-0" />
            Volver a proyectos
          </Link>
        </section>
      </Reveal>
    </main>
  );
}
