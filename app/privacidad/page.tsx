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
  title: "Política de Privacidad",
  description:
    "Política de privacidad y protección de datos de La Casa de los Inventos, conforme al RGPD y la LOPDGDD.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <main className={LEGAL_MAIN}>
      <PageHeader
        titulo="Política de"
        acento="Privacidad"
        descripcion={
          <>
            Cómo tratamos tus datos personales conforme al{" "}
            <span className="font-black">RGPD</span> y la LOPDGDD 3/2018. Última
            actualización:{" "}
            <span className="font-black">{TITULAR.ultimaActualizacion}</span>.
          </>
        }
      />

      <section aria-labelledby="responsable" className={LEGAL_SECTION}>
        <SectionTitle id="responsable">1. Responsable del tratamiento</SectionTitle>
        <address className={`${LEGAL_BODY} not-italic flex flex-col gap-[0.5rem]`}>
          <span><strong>Titular:</strong> {TITULAR.nombre} ({TITULAR.actividad})</span>
          <span><strong>NIF:</strong> {TITULAR.nif}</span>
          <span><strong>Domicilio:</strong> {TITULAR.direccion}</span>
          <span>
            <strong>Contacto:</strong>{" "}
            <a className="underline break-all" href={`mailto:${TITULAR.email}`}>
              {TITULAR.email}
            </a>
          </span>
        </address>
      </section>

      <section aria-labelledby="finalidades" className={LEGAL_SECTION}>
        <SectionTitle id="finalidades">2. Finalidades del tratamiento</SectionTitle>
        <p className={LEGAL_BODY}>Tratamos tus datos personales para:</p>
        <ul className={`${LEGAL_BODY} list-disc pl-[1.5rem] flex flex-col gap-[0.5rem]`}>
          <li>Responder a las consultas recibidas por correo electrónico o por teléfono.</li>
          <li>Gestionar las relaciones precontractuales y contractuales (elaboración de presupuestos, prestación de servicios).</li>
          <li>Cumplir con las obligaciones legales, contables y fiscales aplicables.</li>
        </ul>
      </section>

      <section aria-labelledby="base-legal" className={LEGAL_SECTION}>
        <SectionTitle id="base-legal">3. Base legal</SectionTitle>
        <ul className={`${LEGAL_BODY} list-disc pl-[1.5rem] flex flex-col gap-[0.5rem]`}>
          <li><strong>Consentimiento del interesado</strong> (art. 6.1.a RGPD), otorgado al dirigirnos voluntariamente una comunicación.</li>
          <li><strong>Ejecución de un contrato o medidas precontractuales</strong> (art. 6.1.b RGPD) cuando la comunicación tiene por objeto la contratación de servicios.</li>
          <li><strong>Cumplimiento de una obligación legal</strong> (art. 6.1.c RGPD) para la conservación de datos de facturación.</li>
        </ul>
      </section>

      <section aria-labelledby="datos" className={LEGAL_SECTION}>
        <SectionTitle id="datos">4. Categorías de datos</SectionTitle>
        <p className={LEGAL_BODY}>
          Únicamente los datos que el usuario incluye voluntariamente en su
          comunicación: nombre, dirección de correo electrónico o número de
          teléfono, empresa (opcional) y contenido del mensaje. Este sitio web
          no dispone de formularios de recogida de datos. No se recogen
          categorías especiales de datos.
        </p>
      </section>

      <section aria-labelledby="destinatarios" className={LEGAL_SECTION}>
        <SectionTitle id="destinatarios">5. Destinatarios y encargados</SectionTitle>
        <p className={LEGAL_BODY}>
          Tus datos no se cederán a terceros con fines comerciales. Los datos
          son tratados por los siguientes encargados de tratamiento,
          seleccionados por sus garantías técnicas y jurídicas:
        </p>
        <ul className={`${LEGAL_BODY} list-disc pl-[1.5rem] flex flex-col gap-[0.5rem]`}>
          <li><strong>Vercel Inc.</strong> — hosting y despliegue del sitio (EE.UU.).</li>
        </ul>
      </section>

      <section aria-labelledby="transferencias" className={LEGAL_SECTION}>
        <SectionTitle id="transferencias">6. Transferencias internacionales</SectionTitle>
        <p className={LEGAL_BODY}>
          Vercel presta servicio desde EE.UU. Las transferencias
          internacionales se amparan en las{" "}
          <strong>Cláusulas Contractuales Tipo (SCC)</strong> aprobadas por la
          Comisión Europea mediante Decisión 2021/914, así como en las medidas
          técnicas y organizativas complementarias adoptadas por el propio
          proveedor.
        </p>
      </section>

      <section aria-labelledby="conservacion" className={LEGAL_SECTION}>
        <SectionTitle id="conservacion">7. Plazo de conservación</SectionTitle>
        <p className={LEGAL_BODY}>
          Los datos se conservarán durante el tiempo estrictamente necesario
          para atender la consulta y hasta seis (6) meses después de finalizada
          la relación, salvo obligación legal que exija plazos superiores (por
          ejemplo, datos de facturación conservados durante cinco años según la
          normativa fiscal).
        </p>
      </section>

      <section aria-labelledby="derechos" className={LEGAL_SECTION}>
        <SectionTitle id="derechos">8. Derechos del interesado</SectionTitle>
        <p className={LEGAL_BODY}>
          Puedes ejercer en cualquier momento los derechos de acceso,
          rectificación, supresión, oposición, limitación del tratamiento y
          portabilidad, así como retirar el consentimiento prestado. Envíanos un
          correo a{" "}
          <a className="underline break-all" href={`mailto:${TITULAR.email}`}>
            {TITULAR.email}
          </a>{" "}
          acreditando tu identidad (copia de DNI o documento equivalente).
        </p>
        <p className={LEGAL_BODY}>
          Si consideras que tus derechos no han sido debidamente atendidos,
          puedes presentar una reclamación ante la{" "}
          <a
            className="underline"
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agencia Española de Protección de Datos
          </a>.
        </p>
      </section>

      <section aria-labelledby="seguridad" className={LEGAL_SECTION}>
        <SectionTitle id="seguridad">9. Seguridad</SectionTitle>
        <p className={LEGAL_BODY}>
          El titular aplica medidas técnicas y organizativas apropiadas para
          garantizar un nivel de seguridad adecuado al riesgo, incluyendo
          cifrado en tránsito (HTTPS/TLS), control de accesos y minimización de
          los datos tratados.
        </p>
      </section>
    </main>
  );
}
