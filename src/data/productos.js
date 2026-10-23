// ─────────────────────────────────────────────────────────────
// Productos que la marca muestra o menciona en sus publicaciones.
// Solo se incluyen productos con evidencia pública.
// `precio` y `imagen` quedan en null hasta que se confirmen.
// (Nota: el "panzerotti madurini" visto en internet pertenece a otra empresa
//  de otra ciudad y NO se incluye aquí.)
// ─────────────────────────────────────────────────────────────

export const CATEGORIAS = ['Todos', 'Panadería', 'Pastelería y postres', 'Temporada']

export const PRODUCTOS = [
  {
    id: 'pan-calentano',
    nombre: 'Pan calentano',
    categoria: 'Panadería',
    descripcion:
      'La marca lo presentó como "recomendado de la semana" en su página de Facebook.',
    precio: null,
    imagen: null,
    imagenAlt: 'Pan calentano de Panadería Panzerotti',
    disponibilidad: null,
    fuente: 'Facebook de la marca',
  },
  {
    id: 'chocho',
    nombre: 'Chocho',
    categoria: 'Panadería',
    descripcion:
      'Uno de los productos que más promociona la marca en video: lo presenta como "el mejor chocho de Villavicencio".',
    precio: null,
    imagen: null,
    imagenAlt: 'Chocho de Panadería Panzerotti',
    disponibilidad: null,
    fuente: 'TikTok de la marca',
  },
  {
    id: 'pan-recien-horneado',
    nombre: 'Pan recién horneado',
    categoria: 'Panadería',
    descripcion:
      'Panes calientes del día: la marca invita a visitar la panadería a disfrutar "algo delicioso recién hecho".',
    precio: null,
    imagen: null,
    imagenAlt: 'Pan recién horneado en Panadería Panzerotti',
    disponibilidad: null,
    fuente: 'TikTok de la marca',
  },
  {
    id: 'tres-leches',
    nombre: 'Postre tres leches',
    categoria: 'Pastelería y postres',
    descripcion:
      'Postre que la marca muestra en sus videos, anunciado desde la sede San Jorge.',
    precio: null,
    imagen: null,
    imagenAlt: 'Postre tres leches de Panadería Panzerotti',
    disponibilidad: null,
    fuente: 'TikTok de la marca',
  },
  {
    id: 'bunuelos',
    nombre: 'Buñuelos para novenas',
    categoria: 'Temporada',
    descripcion:
      'La marca invita a cotizar buñuelos para las novenas navideñas. La cotización se hace por su número de contacto.',
    precio: null,
    imagen: null,
    imagenAlt: 'Buñuelos de Panadería Panzerotti',
    disponibilidad: 'Por encargo / cotización',
    fuente: 'TikTok de la marca',
  },
]
