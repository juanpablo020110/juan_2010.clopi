// ─────────────────────────────────────────────────────────────
// Galería: espacios listos para fotografías REALES y autorizadas.
//
// Para activar una foto:
//   1. Copia el archivo a /public/images/galeria/ (JPG o WebP, ancho ≈ 1600 px).
//   2. Escribe su ruta en `src` (p. ej. '/images/galeria/fachada-san-jorge.webp').
//   3. Ajusta `alt` para describir lo que realmente se ve.
//
// Mientras `src` sea null, se muestra un espacio claramente marcado como pendiente.
// Fuentes recomendadas: fotos propias del negocio o publicaciones oficiales
// de @panaderiapanzerotti usadas con autorización de la marca.
// ─────────────────────────────────────────────────────────────

export const GALERIA = [
  { id: 'g1', etiqueta: 'Fachada · Sede San Jorge', src: null, alt: 'Fachada de la sede San Jorge', grande: true },
  { id: 'g2', etiqueta: 'Vitrina de panes', src: null, alt: 'Vitrina con panes de Panzerotti' },
  { id: 'g3', etiqueta: 'Pan calentano', src: null, alt: 'Pan calentano' },
  { id: 'g4', etiqueta: 'Chocho', src: null, alt: 'Chocho' },
  { id: 'g5', etiqueta: 'Interior · Sede San Jorge', src: null, alt: 'Interior de la sede San Jorge' },
  { id: 'g6', etiqueta: 'Postre tres leches', src: null, alt: 'Postre tres leches' },
  { id: 'g7', etiqueta: 'Fachada · Sede Catumare', src: null, alt: 'Fachada de la sede Catumare', grande: true },
  { id: 'g8', etiqueta: 'Buñuelos', src: null, alt: 'Buñuelos' },
]
