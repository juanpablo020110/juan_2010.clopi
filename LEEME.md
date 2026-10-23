# Panzerotti Villavicencio — sitio web

Sitio en **React + Vite + Tailwind CSS v4**. Todos los datos viven en `src/data/` y se editan sin tocar los componentes.

> **Nota sobre el nombre:** en las fuentes públicas la marca se escribe **Panzerotti** (con doble "t"), no "Panzerroti". El sitio usa la grafía encontrada.

## Ejecutar en tu computador

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev        # desarrollo: http://localhost:5173
npm run build      # genera la carpeta dist/
npm run preview    # prueba la versión de producción
```

## Publicar en internet

El resultado de `npm run build` es la carpeta `dist/` (sitio estático). Opciones gratuitas:

- **Netlify:** arrastra la carpeta `dist/` a app.netlify.com/drop, o conecta el repositorio con *Build command* `npm run build` y *Publish directory* `dist`.
- **Vercel:** importa el repositorio; detecta Vite automáticamente.
- **Cloudflare Pages / GitHub Pages:** mismo comando de build y carpeta `dist`.

Después de publicar, añade en `index.html` la etiqueta `<link rel="canonical" href="https://TU-DOMINIO">` y registra el sitio en Google Search Console.

## Estructura

```
src/
  data/        ← AQUÍ se edita la información
    brand.js     marca, redes sociales, canal de pedidos, logo y foto de portada
    sedes.js     sedes, teléfonos, direcciones, horarios
    productos.js productos y categorías
    galeria.js   fotos de la galería
    faq.js       preguntas frecuentes
  components/  secciones de la página (Hero, Sedes, Productos, Galería…)
  hooks/       animación de entrada al hacer scroll
public/images/ ← aquí van las fotografías reales
```

## Cómo completar la información pendiente

| Quiero agregar… | Dónde |
|---|---|
| Horarios de una sede | `sedes.js` → `horarios: { lunes: '7:00 a. m. – 8:00 p. m.', martes: '…', … }` (los 7 días). La tabla aparece sola en "Horarios". |
| Dirección de Catumare / La Esperanza | `sedes.js` → `direccion` y `mapsQuery` (con la dirección) y `mapsEsDireccionExacta: true`. |
| WhatsApp | `sedes.js` → `whatsappConfirmado: true` (el botón aparece solo). |
| Domicilios | `sedes.js` → `domicilios: true/false`, y `brand.js` → `PEDIDOS.domiciliosConfirmados`. |
| Logotipo | Copia el archivo a `public/images/` y escribe la ruta en `brand.js` → `logo`. |
| Foto de portada | `public/images/hero/` y `brand.js` → `heroImagen`. |
| Fotos de sedes | `public/images/sedes/` y `sedes.js` → `foto`. |
| Fotos de productos / precios | `productos.js` → `imagen`, `precio`. |
| Fotos de la galería | `public/images/galeria/` y `galeria.js` → `src`. |
| Correo comercial | `brand.js` → `CORREO`. |
| Marcar el sitio como autorizado | `brand.js` → `autorizadoPorLaMarca: true` (quita el aviso del pie de página). |

Imágenes: usa WebP o JPG de ~1600 px de ancho y menos de 300 KB para que cargue rápido.

## Mapa de Google (claves de API)

Por defecto el mapa usa la incrustación básica de Google Maps y **no requiere clave**. Si prefieres la *Maps Embed API* oficial:

1. Crea una clave en Google Cloud Console y limítala por **referente HTTP** a tu dominio y a la API "Maps Embed API".
2. Crea un archivo `.env.local` (no se sube al repositorio) con: `VITE_GOOGLE_MAPS_EMBED_KEY=tu_clave`.
3. En Netlify/Vercel, define la misma variable en el panel del proyecto.

Las claves de la Embed API quedan visibles en el navegador por diseño; la restricción por dominio es lo que las protege. Nunca uses aquí una clave sin restricciones.

---

## Datos que todavía necesitan confirmación

1. **Horarios** de todas las sedes (no se encontró ninguno verificable; "Always open" en Facebook es un campo genérico, no un horario).
2. **Sede Catumare:** dirección exacta y cuál teléfono está vigente (Instagram: 322 829 4114; TikTok anuncia número nuevo 322 215 8576; el sitio muestra el más reciente).
3. **Sede La Esperanza:** la marca la nombra (TikTok) y un cliente pregunta por ella en Facebook, pero no hay dirección ni teléfono públicos.
4. **WhatsApp:** si 320 307 6156 y 322 215 8576 son líneas de WhatsApp.
5. **Domicilios:** existencia, cobertura, costos y canal oficial.
6. **TikTok oficial:** hay dos usuarios (`@panaderia.panzerotti` y `@panaderiapanzerotti`).
7. **Logotipo y colores oficiales:** la paleta del sitio es provisional.
8. **Catálogo completo y precios** de productos.
9. **Fotografías reales** de fachadas, interiores, vitrinas y productos (con autorización).
10. **Historia de la marca:** fundación, fundadores, trayectoria.
11. **Razón social y correo comercial.** Un directorio lista "Panadería y Pastelería Panzerotti del Llano S.A.S." con el teléfono 321 413 4331, pero no se pudo comprobar que sea el canal de la marca, por eso no se publicó.
12. **Fechas** de las publicaciones usadas en "Novedades" (buñuelos para novenas, número nuevo de Catumare).
13. **Dirección de San Jorge:** coincide entre Facebook ("C20 39B 07 San Jorge 3") y un directorio ("Cl. 20 Sur #39 Bis 07"); conviene confirmar nomenclatura y complemento con la sede.

## Por qué no hay fotos reales todavía

Instagram, Facebook y TikTok bloquean la lectura automatizada de sus páginas, y las imágenes de esas redes pertenecen a la marca. Por eso no se descargó ninguna. La galería, las tarjetas de sedes y de productos están listas y muestran un espacio claramente marcado como "foto pendiente". Lo ideal es pedirle a la marca las fotos originales o tomarlas directamente.

## Advertencia sobre nombres parecidos

Existen otros negocios llamados "Panzerotti" que **no** corresponden a esta marca (por ejemplo, uno en Bogotá, calle 79A Bis, y otro con sedes en Bucaramanga). Sus datos no se usaron.

## Fuentes consultadas

- Instagram oficial: https://www.instagram.com/panaderiapanzerotti/ (biografía: eslogan, sedes San Jorge y Catumare, teléfonos)
- Facebook: https://www.facebook.com/panaderiapanzerotti/ (dirección de San Jorge, teléfono, categoría, "pan calentano", comentario sobre sede La Esperanza)
- TikTok (resultados públicos de búsqueda de @panaderia.panzerotti y @panaderiapanzerotti): https://www.tiktok.com/discover/panaderia-panzerotti-villavicencio, https://www.tiktok.com/discover/villavicencio-catumare (chocho, buñuelos, tres leches, nuevo número Catumare, sedes San Jorge/Catumare/La Esperanza)
- Directorio Planeta Colombia: https://www.planetacolombia.com/villavicencio/panaderias (dirección de San Jorge)
- Directorio Informa Colombia: https://www.informacolombia.com/directorio-empresas/actividad/1081_ELABORACION-DE-PRODUCTOS-DE-PANADERIA/localidad_villavicencio (razón social sin validar; no publicada)
- Yandex Maps (ficha sin dirección ni horario verificables; descartada): https://yandex.com/maps/org/211402596585/

Consultas sin resultados útiles: Google Maps / Google Business Profile (sin acceso automatizado), Rappi y similares (no aparece Panzerotti).
