import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { CATEGORIAS, PRODUCTOS } from '../data/productos'
import { Photo, Pending, SectionHeading } from './ui'

const normaliza = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export default function Products() {
  const [cat, setCat] = useState('Todos')
  const [q, setQ] = useState('')

  const lista = useMemo(() => {
    const nq = normaliza(q.trim())
    return PRODUCTOS.filter(
      (p) =>
        (cat === 'Todos' || p.categoria === cat) &&
        (!nq || normaliza(`${p.nombre} ${p.descripcion} ${p.categoria}`).includes(nq)),
    )
  }, [cat, q])

  return (
    <section id="productos" className="bg-cream-200/60">
      <div className="section">
        <SectionHeading eyebrow="Nuestros productos" title="Lo que la marca muestra en sus vitrinas y redes">
          Estos son los productos que Panzerotti destaca públicamente. El catálogo completo y los precios aún están por
          confirmar, por eso no mostramos valores.
        </SectionHeading>

        <div className="reveal mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div role="tablist" aria-label="Filtrar productos por categoría" className="flex flex-wrap gap-2">
            {CATEGORIAS.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  cat === c ? 'bg-crust-700 text-cream-50 shadow-md' : 'bg-cream-50 text-crust-800 hover:bg-gold-400/40'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="relative block md:w-72">
            <span className="sr-only">Buscar producto</span>
            <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-crust-700/60" aria-hidden="true" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar producto…"
              className="w-full rounded-full border border-crust-700/20 bg-cream-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-gold-500"
            />
          </label>
        </div>

        <p className="sr-only" aria-live="polite">{lista.length} productos encontrados</p>

        {lista.length === 0 ? (
          <p className="card p-8 text-center text-crust-800/80">
            No encontramos productos con esa búsqueda. Prueba con otra palabra o elige “Todos”.
          </p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lista.map((p, i) => (
              <li key={p.id} className="card reveal group overflow-hidden" style={{ '--d': `${(i % 3) * 100}ms` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <Photo src={p.imagen} alt={p.imagenAlt} />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-terra-500">{p.categoria}</span>
                  <h3 className="mt-1 text-2xl font-bold text-crust-900">{p.nombre}</h3>
                  <p className="mt-2 text-crust-800/80">{p.descripcion}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                    {p.precio ? (
                      <span className="font-bold text-crust-800">{p.precio}</span>
                    ) : (
                      <Pending>Precio por confirmar</Pending>
                    )}
                    {p.disponibilidad && (
                      <span className="rounded-full bg-gold-400/30 px-2.5 py-0.5 text-xs font-bold text-crust-800">
                        {p.disponibilidad}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-xs text-crust-800/60">Fuente: {p.fuente}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
