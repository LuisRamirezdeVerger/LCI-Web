"use client";

import { useMemo, useState } from "react";
import {
  Invoice,
  calcularTotales,
  type DatosCliente,
  type LineaFactura,
} from "./Invoice";
import styles from "./InvoiceGenerator.module.css";

const hoy = () => new Date().toISOString().slice(0, 10);

/** Identificador estable por fila: React necesita una key que no sea el índice. */
const nuevaLinea = (): LineaFactura => ({
  id: crypto.randomUUID(),
  concepto: "",
  cantidad: 1,
  precio: 0,
  descuento: 0,
});

/**
 * Generador stateless: nada se persiste ni viaja al servidor. El estado vive
 * en este componente y la factura se entrega imprimiendo a PDF desde el
 * diálogo nativo del navegador.
 */
export const InvoiceGenerator = () => {
  const [numero, setNumero] = useState("2026-001");
  const [fecha, setFecha] = useState(hoy);
  // Opcional: solo se imprime si la operación no coincide con la emisión.
  const [fechaOperacion, setFechaOperacion] = useState("");
  const [cliente, setCliente] = useState<DatosCliente>({
    nombre: "",
    nif: "",
    direccion: "",
  });
  const [lineas, setLineas] = useState<LineaFactura[]>(() => [nuevaLinea()]);

  const totales = useMemo(() => calcularTotales(lineas), [lineas]);

  const editarLinea = <K extends keyof LineaFactura>(
    id: string,
    campo: K,
    valor: LineaFactura[K],
  ) =>
    setLineas((prev) =>
      prev.map((l) => (l.id === id ? { ...l, [campo]: valor } : l)),
    );

  const eliminarLinea = (id: string) =>
    setLineas((prev) => prev.filter((l) => l.id !== id));

  return (
    <div className={styles.layout}>
      {/* Columna izquierda — controles. Se oculta al imprimir. */}
      <section className={styles.controles} aria-label="Datos de la factura">
        <h2 className={styles.seccion}>Factura</h2>
        <div className={styles.rejilla2}>
          <label className={styles.campo}>
            <span>Número</span>
            <input
              type="text"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </label>
          <label className={styles.campo}>
            <span>Fecha</span>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </label>
        </div>
        <label className={styles.campo}>
          <span>Fecha de operación (opcional)</span>
          <input
            type="date"
            value={fechaOperacion}
            onChange={(e) => setFechaOperacion(e.target.value)}
          />
        </label>

        <h2 className={styles.seccion}>Cliente</h2>
        <label className={styles.campo}>
          <span>Nombre o razón social</span>
          <input
            type="text"
            value={cliente.nombre}
            onChange={(e) =>
              setCliente((c) => ({ ...c, nombre: e.target.value }))
            }
          />
        </label>
        <div className={styles.rejilla2}>
          <label className={styles.campo}>
            <span>NIF / CIF</span>
            <input
              type="text"
              value={cliente.nif}
              onChange={(e) =>
                setCliente((c) => ({ ...c, nif: e.target.value }))
              }
            />
          </label>
          <label className={styles.campo}>
            <span>Dirección</span>
            <input
              type="text"
              value={cliente.direccion}
              onChange={(e) =>
                setCliente((c) => ({ ...c, direccion: e.target.value }))
              }
            />
          </label>
        </div>

        <h2 className={styles.seccion}>Conceptos</h2>
        <ul className={styles.lineas}>
          {lineas.map((linea, i) => (
            <li key={linea.id} className={styles.linea}>
              <label className={styles.campo}>
                <span>Concepto {i + 1}</span>
                <input
                  type="text"
                  value={linea.concepto}
                  onChange={(e) =>
                    editarLinea(linea.id, "concepto", e.target.value)
                  }
                />
              </label>
              <div className={styles.rejilla3}>
                <label className={styles.campo}>
                  <span>Cantidad</span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    inputMode="numeric"
                    value={linea.cantidad}
                    onChange={(e) =>
                      editarLinea(linea.id, "cantidad", Number(e.target.value))
                    }
                  />
                </label>
                <label className={styles.campo}>
                  <span>Precio (€)</span>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    inputMode="decimal"
                    value={linea.precio}
                    onChange={(e) =>
                      editarLinea(linea.id, "precio", Number(e.target.value))
                    }
                  />
                </label>
                <label className={styles.campo}>
                  <span>Descuento (%)</span>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    inputMode="decimal"
                    value={linea.descuento}
                    onChange={(e) =>
                      editarLinea(linea.id, "descuento", Number(e.target.value))
                    }
                  />
                </label>
              </div>
              <button
                type="button"
                className={styles.botonSecundario}
                onClick={() => eliminarLinea(linea.id)}
                /* La factura siempre conserva al menos una línea. */
                disabled={lineas.length === 1}
              >
                Eliminar línea
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.acciones}>
          <button
            type="button"
            className={styles.botonSecundario}
            onClick={() => setLineas((prev) => [...prev, nuevaLinea()])}
          >
            Añadir línea
          </button>
          <button
            type="button"
            className={styles.botonPrimario}
            onClick={() => window.print()}
          >
            Exportar / Imprimir
          </button>
        </div>
      </section>

      {/* Columna derecha — previsualización. Es lo único que se imprime. */}
      <section className={styles.previsualizacion} aria-label="Previsualización">
        <h2 className={`${styles.seccion} ${styles.soloPantalla}`}>
          Previsualización
        </h2>
        <div className={styles.hoja}>
          <Invoice
            numero={numero}
            fecha={fecha}
            fechaOperacion={fechaOperacion || undefined}
            cliente={cliente}
            lineas={lineas}
            totales={totales}
          />
        </div>
      </section>
    </div>
  );
};
