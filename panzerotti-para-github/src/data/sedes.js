// ─────────────────────────────────────────────────────────────
// Sedes de Panzerotti en Villavicencio.
//
// estado:
//   'verificada'  → hay dirección y teléfono publicados por fuentes consistentes
//   'parcial'     → existe la sede, pero faltan datos (dirección, horario, etc.)
//   'mencionada'  → la marca la nombra, pero no hay ningún dato de contacto público
//
// Cualquier campo en `null` se muestra como "Por confirmar".
// Para completar datos, edita este archivo: no hay que tocar los componentes.
// ─────────────────────────────────────────────────────────────

export const SEDES = [
  {
    id: 'san-jorge',
    nombre: 'Sede San Jorge',
    barrio: 'San Jorge',
    estado: 'verificada',
    direccion: 'Calle 20 Sur #39 Bis 07, barrio San Jorge',
    telefono: '3203076156',
    telefonoVisible: '320 307 6156',
    telefonoNota: null,
    // El número aparece en Instagram, Facebook y TikTok de la marca.
    // No se confirmó que sea una línea de WhatsApp Business: pon `true` cuando lo confirmen.
    whatsappConfirmado: false,
    // Búsqueda de Google Maps con la dirección publicada
    mapsQuery: 'Panadería Panzerotti Calle 20 Sur 39 Bis 07 San Jorge Villavicencio Meta',
    mapsEsDireccionExacta: true,
    // Horario por día: { lunes: '7:00 a. m. – 8:00 p. m.', ... }. null = no verificado.
    horarios: null,
    domicilios: null, // true / false / null (no confirmado)
    servicios: ['Panadería', 'Pastelería'],
    foto: null, // p. ej. '/images/sedes/san-jorge.jpg'
    fotoAlt: 'Fachada de la sede San Jorge de Panadería Panzerotti en Villavicencio',
    fuentes: ['Facebook', 'Instagram', 'Directorio Planeta Colombia'],
  },
  {
    id: 'catumare',
    nombre: 'Sede Catumare',
    barrio: 'Catumare',
    estado: 'parcial',
    direccion: null, // No se encontró una dirección exacta publicada
    telefono: '3222158576',
    telefonoVisible: '322 215 8576',
    telefonoNota:
      'La marca anunció en TikTok un "nuevo número" para esta sede. La biografía de Instagram aún muestra 322 829 4114. Confirma cuál está vigente.',
    whatsappConfirmado: false,
    // Sin dirección exacta, solo se ofrece una búsqueda: no se afirma una ubicación puntual.
    mapsQuery: 'Panadería Panzerotti Catumare Villavicencio Meta',
    mapsEsDireccionExacta: false,
    horarios: null,
    domicilios: null,
    servicios: ['Panadería'],
    foto: null,
    fotoAlt: 'Sede Catumare de Panadería Panzerotti en Villavicencio',
    fuentes: ['Instagram', 'TikTok'],
  },
  {
    id: 'la-esperanza',
    nombre: 'Sede La Esperanza',
    barrio: 'La Esperanza',
    estado: 'mencionada',
    direccion: null,
    telefono: null,
    telefonoVisible: null,
    telefonoNota: null,
    whatsappConfirmado: false,
    mapsQuery: null,
    mapsEsDireccionExacta: false,
    horarios: null,
    domicilios: null,
    servicios: [],
    foto: null,
    fotoAlt: 'Sede La Esperanza de Panadería Panzerotti',
    fuentes: ['TikTok (mención de la marca)', 'Comentario en Facebook'],
  },
]

export const DIAS = [
  ['lunes', 'Lunes'],
  ['martes', 'Martes'],
  ['miercoles', 'Miércoles'],
  ['jueves', 'Jueves'],
  ['viernes', 'Viernes'],
  ['sabado', 'Sábado'],
  ['domingo', 'Domingo'],
]

export const ESTADOS = {
  verificada: { texto: 'Datos verificados', clase: 'bg-emerald-100 text-emerald-900' },
  parcial: { texto: 'Datos parciales', clase: 'bg-amber-100 text-amber-900' },
  mencionada: { texto: 'Sede mencionada · datos por confirmar', clase: 'bg-stone-200 text-stone-800' },
}

export const telHref = (n) => (n ? `tel:+57${n}` : null)
export const waHref = (n, texto = 'Hola, quisiera información de Panzerotti.') =>
  n ? `https://wa.me/57${n}?text=${encodeURIComponent(texto)}` : null
export const mapsHref = (q) =>
  q ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}` : null
