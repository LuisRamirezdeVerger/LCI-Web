/**
 * Inyecta un bloque de datos estructurados Schema.org.
 * Server Component: el JSON viaja en el HTML inicial, legible por crawlers
 * clásicos y por LLMs que no ejecutan JavaScript.
 */
export const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);
