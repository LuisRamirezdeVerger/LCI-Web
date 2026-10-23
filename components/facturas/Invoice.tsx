import logoLCI from "@/components/logo_lci.svg";
import styles from "./Invoice.module.css";

/** Una línea de la factura. `descuento` es un porcentaje sobre `precio`. */
export interface LineaFactura {
  id: string;
  concepto: string;
  cantidad: number;
  precio: number;
  descuento: number;
}

export interface DatosCliente {
  nombre: string;
  nif: string;
  direccion: string;
}

export interface Totales {
  subtotal: number;
  iva: number;
  irpf: number;
  total: number;
}

export interface InvoiceProps {
  numero: string;
  fecha: string;
  /** Fecha de operación (art. 6.1.f RD 1619/2012): solo si difiere de la emisión. */
  fechaOperacion?: string;
  cliente: DatosCliente;
  lineas: LineaFactura[];
  totales: Totales;
  /**
   * Logotipo. Por defecto el del estudio, importado como asset estático.
   * Admite cualquier ruta (.svg o .webp) para sobrescribirlo.
   */
  logoSrc?: string;
}

/** Datos del emisor. Inmutables. */
export const EMISOR = {
  nombre: "Luis Ramírez de Verger López",
  marca: "La Casa de los Inventos",
  nif: "53353961X",
  direccion: "Residencial Oriente, 30, local 25, 41007, Sevilla",
  telefono: "+34 689 00 21 55",
  email: "lacasadelosinventos@gmail.com",
  web: "https://www.lacasadelosinventos.com",
} as const;

export const CONDICIONES =
  "Condiciones de pago: Transferencia bancaria a 30 días. IBAN: ES04 1200 8483 7521 0025 7545";

export const IVA = 0.21;
export const IRPF = 0.07;

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});

/** Importe de una línea: cantidad × precio, menos su descuento porcentual. */
export const totalLinea = ({ cantidad, precio, descuento }: LineaFactura): number =>
  cantidad * precio * (1 - descuento / 100);

/** Plazo de pago en días que fijan las condiciones del pie. */
export const DIAS_VENCIMIENTO = 30;

/**
 * Vencimiento = emisión + 30 días. Se opera en UTC a propósito: construir la
 * fecha en hora local desplaza el día según la zona horaria del navegador.
 */
export const calcularVencimiento = (fecha: string): string => {
  const d = new Date(`${fecha}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return "";
  d.setUTCDate(d.getUTCDate() + DIAS_VENCIMIENTO);
  return d.toISOString().slice(0, 10);
};

export const calcularTotales = (lineas: LineaFactura[]): Totales => {
  const subtotal = lineas.reduce((acc, l) => acc + totalLinea(l), 0);
  const iva = subtotal * IVA;
  const irpf = subtotal * IRPF;
  return { subtotal, iva, irpf, total: subtotal + iva - irpf };
};

/**
 * Plantilla visual. Componente tonto: no tiene estado ni efectos, todo
 * llega por props, de modo que la vista de impresión es una función pura
 * del estado del generador.
 */
export const Invoice = ({
  numero,
  fecha,
  fechaOperacion,
  cliente,
  lineas,
  totales,
  // El import estático resuelve a la URL con hash que sirve Next: así el
  // logo no depende de que exista un archivo suelto en /public.
  logoSrc = logoLCI.src,
}: InvoiceProps) => {
  const vencimiento = calcularVencimiento(fecha);

  return (
  <article className={styles.factura}>
    <header className={styles.cabecera}>
      <div className={styles.emisor}>
        {/* alt vacío: el nombre del emisor va escrito justo debajo. */}
        <img src={logoSrc} alt="" aria-hidden="true" className={styles.logo} />
        <p className={styles.emisorNombre}>
          {EMISOR.nombre}
          <span className={styles.emisorMarca}>{EMISOR.marca}</span>
        </p>
      </div>

      <div className={styles.meta}>
        <h1 className={styles.titulo}>Factura</h1>
        <dl className={styles.metaLista}>
          <dt>Nº</dt>
          <dd>{numero}</dd>
          <dt>Fecha</dt>
          <dd>
            <time dateTime={fecha}>{fecha}</time>
          </dd>
          {fechaOperacion && (
            <>
              <dt>Operación</dt>
              <dd>
                <time dateTime={fechaOperacion}>{fechaOperacion}</time>
              </dd>
            </>
          )}
          <dt>Vencimiento</dt>
          <dd>
            <time dateTime={vencimiento}>{vencimiento || "—"}</time>
          </dd>
        </dl>

        <address className={styles.emisorDatos}>
          NIF: {EMISOR.nif}
          <br />
          {EMISOR.direccion}
          <br />
          {EMISOR.telefono}
          <br />
          {EMISOR.email}
          <br />
          {EMISOR.web}
        </address>
      </div>
    </header>

    <section className={styles.cliente} aria-label="Datos del cliente">
      <h2 className={styles.subtitulo}>Facturar a</h2>
      <p className={styles.clienteNombre}>{cliente.nombre || "—"}</p>
      <address className={styles.clienteDatos}>
        {cliente.nif && (
          <>
            NIF: {cliente.nif}
            <br />
          </>
        )}
        {cliente.direccion}
      </address>
    </section>

    <table className={styles.tabla}>
      <caption className={styles.subtitulo}>Conceptos</caption>
      <thead>
        <tr>
          <th scope="col" className={styles.colConcepto}>
            Concepto
          </th>
          <th scope="col" className={`${styles.num} ${styles.colCantidad}`}>
            Cantidad
          </th>
          <th scope="col" className={`${styles.num} ${styles.colImporte}`}>
            Precio
          </th>
          <th scope="col" className={`${styles.num} ${styles.colImporte}`}>
            Descuento
          </th>
          <th scope="col" className={`${styles.num} ${styles.colImporte}`}>
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {lineas.map((linea) => (
          <tr key={linea.id}>
            <td>{linea.concepto || "—"}</td>
            <td className={styles.num}>{linea.cantidad}</td>
            <td className={styles.num}>{eur.format(linea.precio)}</td>
            <td className={styles.num}>{linea.descuento}&nbsp;%</td>
            <td className={styles.num}>{eur.format(totalLinea(linea))}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <section className={styles.totales} aria-label="Totales">
      <dl className={styles.totalesLista}>
        <dt>Base imponible</dt>
        <dd>{eur.format(totales.subtotal)}</dd>
        <dt>IVA (21 %)</dt>
        <dd>+ {eur.format(totales.iva)}</dd>
        <dt>IRPF (7 %)</dt>
        <dd>− {eur.format(totales.irpf)}</dd>
        <dt className={styles.totalFinalEtiqueta}>Total</dt>
        <dd className={styles.totalFinalValor}>{eur.format(totales.total)}</dd>
      </dl>
    </section>

    <footer className={styles.pie}>
      <p>{CONDICIONES}</p>
    </footer>
    </article>
  );
};
