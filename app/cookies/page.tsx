import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import {
  LEGAL_BODY,
  LEGAL_MAIN,
  LEGAL_SECTION,
  TITULAR,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Uso de cookies en La Casa de los Inventos: solo técnicas y análisis anónimo sin cookies, exentos por el art. 22.2 LSSI-CE.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <main className={LEGAL_MAIN}>
      <PageHeader
        titulo="Política de"
        acento="Cookies"
        descripcion={
          <>
            Este sitio no utiliza cookies de seguimiento, publicidad ni
            analítica basada en cookies. Solo empleamos almacenamiento técnico y
            analítica anónima —{" "}
            <span className="font-black">exentos del deber de consentimiento</span>{" "}
            conforme al art. 22.2 de la LSSI-CE. Última actualización:{" "}
            <span className="font-black">{TITULAR.ultimaActualizacion}</span>.
          </>
        }
      />

      <section aria-labelledby="que-son" className={LEGAL_SECTION}>
        <SectionTitle id="que-son">1. Qué son las cookies</SectionTitle>
        <p className={LEGAL_BODY}>
          Una cookie es un pequeño fichero de información que un sitio web
          almacena en el navegador del usuario. Se usan tanto para el
          funcionamiento técnico del sitio como para análisis, personalización o
          publicidad.
        </p>
      </section>

      <section aria-labelledby="usa" className={LEGAL_SECTION}>
        <SectionTitle id="usa">2. Qué usa este sitio</SectionTitle>
        <p className={LEGAL_BODY}>
          En La Casa de los Inventos hemos adoptado una política minimalista y
          respetuosa con la privacidad:
        </p>
        <ul className={`${LEGAL_BODY} list-disc pl-[1.5rem] flex flex-col gap-[0.5rem]`}>
          <li>
            <strong>Almacenamiento técnico</strong>: usamos{" "}
            <code>localStorage</code> y, en su caso, cookies estrictamente
            necesarias de sesión (marcadas como <code>HttpOnly</code> y{" "}
            <code>Secure</code>) para el funcionamiento del sitio (preferencias
            de interfaz, mantenimiento de estado).
          </li>
          <li>
            <strong>Analítica anónima sin cookies</strong>: utilizamos{" "}
            <em>Vercel Analytics</em>, que mide el tráfico agregado{" "}
            <strong>sin instalar cookies ni identificadores persistentes</strong>{" "}
            y sin recopilar datos personales.
          </li>
          <li>
            <strong>NO usamos</strong> cookies publicitarias, de perfilado, de
            terceros con fines comerciales ni tecnologías de{" "}
            <em>fingerprinting</em>.
          </li>
        </ul>
      </section>

      <section aria-labelledby="exencion" className={LEGAL_SECTION}>
        <SectionTitle id="exencion">3. Por qué no mostramos banner</SectionTitle>
        <p className={LEGAL_BODY}>
          El art. 22.2 de la Ley 34/2002, de Servicios de la Sociedad de la
          Información (LSSI-CE), exime del deber de recabar consentimiento a
          aquellas cookies o tecnologías equivalentes que sean{" "}
          <strong>estrictamente necesarias</strong> para prestar el servicio
          solicitado por el usuario.
        </p>
        <p className={LEGAL_BODY}>
          Al utilizar únicamente almacenamiento técnico necesario y analítica
          anónima sin cookies (que no requiere consentimiento por no procesar
          datos personales ni instalar identificadores), este sitio queda
          exento de la obligación de mostrar un banner de cookies.
        </p>
      </section>

      <section aria-labelledby="gestion" className={LEGAL_SECTION}>
        <SectionTitle id="gestion">4. Cómo gestionar cookies desde el navegador</SectionTitle>
        <p className={LEGAL_BODY}>
          Aunque no instalamos cookies de seguimiento, puedes en cualquier
          momento configurar tu navegador para bloquear o eliminar todas las
          cookies:
        </p>
        <ul className={`${LEGAL_BODY} list-disc pl-[1.5rem] flex flex-col gap-[0.5rem]`}>
          <li>
            <a className="underline" href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
              Google Chrome
            </a>
          </li>
          <li>
            <a className="underline" href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a className="underline" href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
              Safari
            </a>
          </li>
          <li>
            <a className="underline" href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
              Microsoft Edge
            </a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="cambios" className={LEGAL_SECTION}>
        <SectionTitle id="cambios">5. Cambios en la política</SectionTitle>
        <p className={LEGAL_BODY}>
          El titular se reserva el derecho a modificar esta política para
          adaptarla a nuevas exigencias legales o cambios técnicos. La versión
          vigente será siempre la publicada en esta página con su fecha de
          última actualización.
        </p>
      </section>

      <section aria-labelledby="contacto-cookies" className={LEGAL_SECTION}>
        <SectionTitle id="contacto-cookies">6. Contacto</SectionTitle>
        <p className={LEGAL_BODY}>
          Cualquier consulta sobre esta política puede dirigirse a{" "}
          <a className="underline break-all" href={`mailto:${TITULAR.email}`}>
            {TITULAR.email}
          </a>.
        </p>
      </section>
    </main>
  );
}
