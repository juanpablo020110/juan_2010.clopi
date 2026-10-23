// ─────────────────────────────────────────────────────────────
// Configuración general de la marca.
// Todo lo que aquí aparece fue encontrado en fuentes públicas.
// Lo que NO se pudo verificar se deja en `null` y la interfaz
// muestra "Por confirmar" en lugar de inventar datos.
// ─────────────────────────────────────────────────────────────

export const BRAND = {
  nombre: 'Panzerotti',
  nombreCompleto: 'Panadería Panzerotti',
  eslogan: 'La casa del pan en Villavicencio', // Biografía oficial de Instagram
  ciudad: 'Villavicencio, Meta',

  // ¿Este sitio cuenta con autorización expresa de la marca?
  // Mientras sea `false`, el pie de página muestra un aviso de sitio independiente.
  // Cuando los dueños lo aprueben, cámbialo a `true`.
  autorizadoPorLaMarca: false,

  // Logotipo oficial: no fue posible obtenerlo por canales automáticos.
  // Copia el archivo en /public/images/ y escribe aquí su ruta, p. ej. '/images/logo.png'.
  logo: null,

  // Foto real de portada (fachada, vitrina o producto). Ruta en /public/images/hero/.
  // p. ej. '/images/hero/portada.jpg'
  heroImagen: null,
  heroImagenAlt: 'Fachada o productos de Panadería Panzerotti en Villavicencio',
}

export const REDES = [
  {
    id: 'instagram',
    nombre: 'Instagram',
    usuario: '@panaderiapanzerotti',
    url: 'https://www.instagram.com/panaderiapanzerotti/',
    confirmada: true,
    nota: 'Perfil con la biografía "La casa del pan en Villavicencio", sedes y teléfonos.',
  },
  {
    id: 'facebook',
    nombre: 'Facebook',
    usuario: 'Panadería y pastelería Panzerotti',
    url: 'https://www.facebook.com/panaderiapanzerotti/',
    confirmada: true,
    nota: 'Página de la marca (categoría: panadería).',
  },
  {
    id: 'tiktok',
    nombre: 'TikTok',
    usuario: '@panaderia.panzerotti',
    url: 'https://www.tiktok.com/@panaderia.panzerotti',
    confirmada: false,
    nota: 'Se encontraron dos usuarios parecidos (@panaderia.panzerotti y @panaderiapanzerotti). Falta confirmar cuál es el oficial.',
  },
]

// Correo comercial: no se encontró uno público.
export const CORREO = null

// ─────────────────────────────────────────────────────────────
// Canal de pedidos
// Las publicaciones de la marca invitan a pedir/cotizar por el
// número de San Jorge. NO se confirmó un servicio de domicilios,
// ni cobertura, ni costos, ni un canal en línea.
// ─────────────────────────────────────────────────────────────
export const PEDIDOS = {
  domiciliosConfirmados: false,
  numero: '3203076156',
  numeroVisible: '320 307 6156',
  descripcion:
    'En sus publicaciones, la marca invita a pedir y cotizar (por ejemplo buñuelos para novenas) escribiendo o llamando al número de la sede San Jorge.',
}
