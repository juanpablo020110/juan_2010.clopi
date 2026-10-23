import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { GALERIA } from '../data/galeria'
import { Photo, SectionHeading } from './ui'

export default function Gallery() {
  const [abierta, setAbierta] = useState(null) // índice dentro de `conFoto`
  const conFoto = GALERIA.filter((g) => g.src)
  const hayFotos = conFoto.length > 0

  const cerrar = useCallback(() => setAbierta(null), [])
  const mover = useCallback(
    (d) => setAbierta((i) => (i === null ? i : (i + d + conFoto.length) % conFoto.length)),
    [conFoto.length],
  )

  useEffect(() => {
    if (abierta === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') cerrar()
      if (e.key === 'ArrowRight') mover(1)
      if (e.key === 'ArrowLeft') mover(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [abierta, cerrar, mover])

  const actual = abierta !== null ? conFoto[abierta] : null

  return (
    <section id="galeria" className="section">
      <SectionHeading eyebrow="Galería" title="Fachadas, vitrinas y pan recién salido del horno">
        {hayFotos
          ? 'Fotografías reales de Panzerotti. Toca una imagen para ampliarla.'
          : 'Esta galería está lista para recibir fotografías reales y autorizadas. Mientras no estén incorporadas, mostramos los espacios vacíos en lugar de usar imágenes de otros negocios.'}
      </SectionHeading>

      <ul className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
        {GALERIA.map((g, i) => {
          const idx = conFoto.findIndex((x) => x.id === g.id)
          return (
            <li
              key={g.id}
              className={`reveal group relative overflow-hidden rounded-3xl bg-cream-200 ${g.grande ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{ '--d': `${(i % 4) * 80}ms` }}
            >
              {g.src ? (
                <button type="button" onClick={() => setAbierta(idx)} className="block h-full w-full" aria-label={`Ampliar: ${g.etiqueta}`}>
                  <Photo src={g.src} alt={g.alt} />
                </button>
              ) : (
                <Photo src={null} alt={g.alt} label="Foto pendiente" />
              )}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-crust-950/80 to-transparent p-3 text-sm font-bold text-cream-50">
                {g.etiqueta}
              </span>
            </li>
          )
        })}
      </ul>

      {!hayFotos && (
        <p className="reveal mt-6 rounded-2xl border border-dashed border-crust-700/30 bg-cream-50 p-4 text-sm text-crust-800/80">
          <strong>¿Cómo agregar fotos?</strong> Copia las imágenes a <code>public/images/galeria/</code> y escribe su ruta
          en <code>src/data/galeria.js</code>. Usa solo fotos propias o con autorización de la marca.
        </p>
      )}

      {actual && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={actual.etiqueta}
          className="fixed inset-0 z-[60] grid place-items-center bg-crust-950/95 p-4"
          onClick={cerrar}
        >
          <button type="button" onClick={cerrar} aria-label="Cerrar" className="absolute right-4 top-4 rounded-full bg-cream-50/10 p-3 text-cream-50 hover:bg-cream-50/20">
            <X />
          </button>
          {conFoto.length > 1 && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); mover(-1) }} aria-label="Anterior" className="absolute left-3 rounded-full bg-cream-50/10 p-3 text-cream-50 hover:bg-cream-50/20"><ChevronLeft /></button>
              <button type="button" onClick={(e) => { e.stopPropagation(); mover(1) }} aria-label="Siguiente" className="absolute right-3 rounded-full bg-cream-50/10 p-3 text-cream-50 hover:bg-cream-50/20"><ChevronRight /></button>
            </>
          )}
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={actual.src} alt={actual.alt} className="max-h-[80vh] rounded-2xl object-contain" />
            <figcaption className="mt-3 text-center text-cream-200">{actual.etiqueta}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
