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
  title: "Aviso Legal",
  description:
    "Aviso legal y condiciones de uso de La Casa de los Inventos, en cumplimiento de la LSSI-CE.",
};

export default function AvisoLegalPage() {
  return (
    <main className={LEGAL_MAIN}>
      <PageHeader
        titulo="Aviso"
        acento="Legal"
        descripcion={
          <>
            Información legal sobre el titular del sitio, condiciones de uso,
            propiedad intelectual y legislación aplicable. Última
            actualización:{" "}
            <span className="font-black">{TITULAR.ultimaActualizacion}</span>.
          </>
        }
      />

      <section aria-labelledby="titular" className={LEGAL_SECTION}>
        <SectionTitle id="titular">1. Titular del sitio</SectionTitle>
        <address className={`${LEGAL_BODY} not-italic flex flex-col gap-[0.5rem]`}>
          <span><strong>Nombre:</strong> {TITULAR.nombre} ({TITULAR.actividad})</span>
          <span><strong>NIF:</strong> {TITULAR.nif}</span>
          <span><strong>Domicilio:</strong> {TITULAR.direccion}</span>
          <span>
            <strong>Email:</strong>{" "}
            <a className="underline break-all" href={`mailto:${TITULAR.email}`}>
              {TITULAR.email}
            </a>
          </span>
        </address>
      </section>

      <section aria-labelledby="objeto" className={LEGAL_SECTION}>
        <SectionTitle id="objeto">2. Objeto</SectionTitle>
        <p className={LEGAL_BODY}>
          Este sitio muestra los servicios profesionales del titular, dedicado
          al diseño y desarrollo de aplicaciones web y móviles a medida, así
          como sistemas de gestión para pymes y startups. El acceso es libre y
          gratuito.
        </p>
      </section>

      <section aria-labelledby="uso" className={LEGAL_SECTION}>
        <SectionTitle id="uso">3. Condiciones de uso</SectionTitle>
        <p className={LEGAL_BODY}>
          El usuario se compromete a hacer un uso lícito y respetuoso del sitio,
          absteniéndose de acciones que puedan dañar su funcionamiento,
          comprometer su seguridad o afectar a los derechos de terceros. Queda
          expresamente prohibida cualquier tentativa de ingeniería inversa,
          scraping automatizado no autorizado o acceso a áreas restringidas.
        </p>
      </section>

      <section aria-labelledby="propiedad" className={LEGAL_SECTION}>
        <SectionTitle id="propiedad">4. Propiedad intelectual</SectionTitle>
        <p className={LEGAL_BODY}>
          Los textos, gráficos, código, marcas, logotipos y demás elementos del
          sitio son propiedad del titular o cuentan con licencia para su uso,
          salvo indicación expresa en contrario. Se prohíbe su reproducción,
          distribución, comunicación pública o transformación sin autorización
          previa y por escrito.
        </p>
      </section>

      <section aria-labelledby="enlaces" className={LEGAL_SECTION}>
        <SectionTitle id="enlaces">5. Enlaces externos</SectionTitle>
        <p className={LEGAL_BODY}>
          Este sitio puede contener enlaces a webs de terceros. El titular no se
          responsabiliza del contenido ni de las prácticas de privacidad de
          dichos sitios.
        </p>
      </section>

      <section aria-labelledby="responsabilidad" className={LEGAL_SECTION}>
        <SectionTitle id="responsabilidad">
          6. Limitación de responsabilidad
        </SectionTitle>
        <p className={LEGAL_BODY}>
          El titular no garantiza la disponibilidad continua del sitio y no será
          responsable de daños derivados de interrupciones técnicas, virus u
          otros elementos que puedan afectar a los equipos del usuario, siempre
          que haya actuado con la diligencia debida.
        </p>
      </section>

      <section aria-labelledby="legislacion" className={LEGAL_SECTION}>
        <SectionTitle id="legislacion">
          7. Legislación y jurisdicción
        </SectionTitle>
        <p className={LEGAL_BODY}>
          El presente aviso legal se rige por la legislación española. Para
          cualquier controversia derivada del uso del sitio, las partes se
          someten a los Juzgados y Tribunales de Sevilla, con renuncia expresa
          a cualquier otro fuero que pudiera corresponderles.
        </p>
      </section>
    </main>
  );
}
