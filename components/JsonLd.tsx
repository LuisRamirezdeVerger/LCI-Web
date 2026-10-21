/**
 * Inyecta un bloque de datos estructurados Schema.org.
 * Server Component: el JSON viaja en el HTML inicial, legible por crawlers
 * clásicos y por LLMs que no ejecutan JavaScript.
 */
export const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      // JSON.stringify no escapa "<": sin esto, un valor que contuviera
      // "</script>" cerraría la etiqueta y permitiría inyección. \u003c es
      // un escape válido dentro de una cadena JSON, así que los parsers lo leen igual.
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    }}
  />
);
