import { useMemo, useState } from 'react'
import { MapPin, Navigation, Phone, Search } from 'lucide-react'
import { ESTADOS, SEDES, mapsHref, telHref, waHref } from '../data/sedes'
import { REDES } from '../data/brand'
import { Pending, Photo, SectionHeading } from './ui'
import { WhatsAppIcon, socialIcon } from './icons'

const normaliza = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

// Si defines VITE_GOOGLE_MAPS_EMBED_KEY (clave pública restringida por dominio) se usa la
// Maps Embed API oficial. Sin clave, se usa el mapa incrustado básico de Google Maps.
function mapaSrc(query) {
  const key = import.meta.env.VITE_GOOGLE_MAPS_EMBED_KEY
  return key
    ? `https://www.google.com/maps/embed/v1/place?key=${key}&q=${encodeURIComponent(query)}`
    : `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
}

function SedeCard({ sede, onVerMapa, activa }) {
  const redes = REDES.filter((r) => r.confirmada)
  const estado = ESTADOS[sede.estado]
  return (
    <article className={`card group overflow-hidden ${activa ? 'ring-2 ring-gold-500' : ''}`}>
      <div className="aspect-[16/9] overflow-hidden">
        <Photo src={sede.foto} alt={sede.fotoAlt} label="Foto de la fachada pendiente" />
      </div>
      <div className="p-6">
        <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${estado.clase}`}>{estado.texto}</span>
        <h3 className="mt-3 text-2xl font-extrabold text-crust-900">{sede.nombre}</h3>

        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="font-bold text-crust-700">Dirección</dt>
            <dd className="text-crust-900">{sede.direccion ?? <Pending>Dirección por confirmar</Pending>}</dd>
          </div>
          <div>
            <dt className="font-bold text-crust-700">Teléfono</dt>
            <dd className="text-crust-900">
              {sede.telefonoVisible ?? <Pending>Teléfono por confirmar</Pending>}
              {sede.telefonoNota && <span className="mt-1 block text-xs text-crust-800/70">{sede.telefonoNota}</span>}
            </dd>
          </div>
          <div>
            <dt className="font-bold text-crust-700">Horario</dt>
            <dd>
              {sede.horarios ? (
                <a href="#horarios" className="underline">Ver horarios</a>
              ) : (
                <Pending>Horario por confirmar</Pending>
              )}
            </dd>
          </div>
          <div>
            <dt className="font-bold text-crust-700">Domicilios</dt>
            <dd>
              {sede.domicilios === true ? 'Disponible' : sede.domicilios === false ? 'No disponible' : <Pending>No confirmado</Pending>}
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-2">
          {sede.telefono && (
            <a href={telHref(sede.telefono)} className="btn btn-primary !px-4 !py-2.5">
              <Phone size={16} aria-hidden="true" /> Llamar
            </a>
          )}
          {sede.telefono && sede.whatsappConfirmado && (
            <a href={waHref(sede.telefono)} target="_blank" rel="noopener noreferrer" className="btn btn-gold !px-4 !py-2.5">
              <WhatsAppIcon width={16} height={16} /> WhatsApp
            </a>
          )}
          {sede.mapsQuery ? (
            <>
              <a href={mapsHref(sede.mapsQuery)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-4 !py-2.5">
                <Navigation size={16} aria-hidden="true" />
                {sede.mapsEsDireccionExacta ? 'Abrir en Maps' : 'Buscar en Maps'}
              </a>
              <button type="button" onClick={() => onVerMapa(sede.id)} className="btn btn-ghost !px-4 !py-2.5 lg:hidden">
                <MapPin size={16} aria-hidden="true" /> Ver mapa
              </button>
            </>
          ) : (
            <span className="btn btn-disabled !px-4 !py-2.5" aria-disabled="true">Ubicación por confirmar</span>
          )}
        </div>

        {sede.telefono && !sede.whatsappConfirmado && (
          <p className="mt-3 text-xs text-crust-800/60">WhatsApp: por confirmar si este número lo tiene habilitado.</p>
        )}

        <div className="mt-5 flex items-center gap-2 border-t border-crust-700/10 pt-4">
          {redes.map((r) => {
            const Icon = socialIcon[r.id]
            return (
              <a key={r.id} href={r.url} target="_blank" rel="noopener noreferrer" aria-label={`${r.nombre} de Panzerotti`} className="grid h-9 w-9 place-items-center rounded-full bg-cream-200 text-crust-700 transition hover:bg-crust-700 hover:text-cream-50">
                <Icon width={18} height={18} />
              </a>
            )
          })}
          <span className="ml-auto text-xs text-crust-800/60">Fuentes: {sede.fuentes.join(', ')}</span>
        </div>
      </div>
    </article>
  )
}

export default function Sedes() {
  const [q, setQ] = useState('')
  const [mapaId, setMapaId] = useState('san-jorge')

  const lista = useMemo(() => {
    const nq = normaliza(q.trim())
    if (!nq) return SEDES
    return SEDES.filter((s) => normaliza(`${s.nombre} ${s.barrio} ${s.direccion ?? ''}`).includes(nq))
  }, [q])

  const sedeMapa = SEDES.find((s) => s.id === mapaId && s.mapsQuery) ?? SEDES.find((s) => s.mapsQuery)

  const verMapa = (id) => {
    setMapaId(id)
    document.getElementById('mapa-sedes')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section id="sedes" className="bg-crust-900 text-cream-50">
      <div className="section">
        <SectionHeading light eyebrow="Nuestras sedes en Villavicencio" title="Encuentra la panadería más cercana">
          Mostramos solo lo que pudimos verificar. Donde falta un dato lo marcamos como “por confirmar” en lugar de adivinarlo.
        </SectionHeading>

        <label className="reveal relative mb-8 block max-w-md">
          <span className="sr-only">Buscar sede por nombre o barrio</span>
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-crust-700/60" aria-hidden="true" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por nombre o barrio…"
            className="w-full rounded-full bg-cream-50 py-3 pl-11 pr-4 text-sm text-crust-950 outline-none ring-gold-500 transition focus:ring-2"
          />
        </label>
        <p className="sr-only" aria-live="polite">{lista.length} sedes encontradas</p>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="grid gap-6 text-crust-950">
            {lista.length === 0 && (
              <p className="rounded-3xl bg-cream-50 p-6">No hay sedes con ese nombre. Prueba con “San Jorge” o “Catumare”.</p>
            )}
            {lista.map((s) => (
              <div key={s.id} className="reveal">
                <SedeCard sede={s} onVerMapa={verMapa} activa={s.id === sedeMapa?.id} />
              </div>
            ))}
          </div>

          <div id="mapa-sedes" className="reveal lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl bg-cream-50 text-crust-950 shadow-xl">
              <div role="tablist" aria-label="Elegir sede en el mapa" className="flex flex-wrap gap-2 border-b border-crust-700/10 p-3">
                {SEDES.filter((s) => s.mapsQuery).map((s) => (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={sedeMapa?.id === s.id}
                    onClick={() => setMapaId(s.id)}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition ${sedeMapa?.id === s.id ? 'bg-crust-700 text-cream-50' : 'bg-cream-200 hover:bg-gold-400/40'}`}
                  >
                    {s.barrio}
                  </button>
                ))}
              </div>
              {sedeMapa && (
                <iframe
                  key={sedeMapa.id}
                  title={`Mapa de ${sedeMapa.nombre}`}
                  src={mapaSrc(sedeMapa.mapsQuery)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[380px] w-full border-0 md:h-[460px]"
                  allowFullScreen
                />
              )}
              <p className="p-4 text-xs text-crust-800/70">
                {sedeMapa?.mapsEsDireccionExacta
                  ? `Mapa según la dirección publicada: ${sedeMapa.direccion}.`
                  : 'Este mapa es una búsqueda aproximada: aún no hay una dirección exacta publicada para esta sede. Confirma antes de ir.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
