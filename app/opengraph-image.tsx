import { ImageResponse } from "next/og";

export const alt = "La Casa de los Inventos · Desarrollo de software a medida en Sevilla";
/**
 * 1200 x 630 es la proporción 1.91:1 que exigen Open Graph y las Twitter Cards
 * de tipo `summary_large_image`. Los valores van en píxeles porque definen el
 * lienzo del PNG generado, no estilos de la interfaz.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "5rem",
          background: "#ffffff",
          color: "#000000",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: "4.5rem",
            fontWeight: 900,
            lineHeight: 1,
            textTransform: "uppercase",
            letterSpacing: "-0.03em",
          }}
        >
          La Casa de los Inventos
        </div>
        <div style={{ fontSize: "2rem", marginTop: "1.5rem" }}>
          Desarrollo de software a medida · Sevilla
        </div>
      </div>
    ),
    size,
  );
}
