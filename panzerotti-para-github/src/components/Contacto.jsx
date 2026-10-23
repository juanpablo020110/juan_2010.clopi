import { Mail, MapPin, Phone } from 'lucide-react'
import { CORREO, REDES } from '../data/brand'
import { SEDES, mapsHref, telHref, waHref } from '../data/sedes'
import { Pending, SectionHeading } from './ui'
import { WhatsAppIcon, socialIcon } from './icons'

export default function Contacto() {
  const conTelefono = SEDES.filter((s) => s.telefono)

  return (
    <section id="contacto" className="section">
      <SectionHeading eyebrow="Contacto y redes sociales" title="Hablemos de pan">
        Teléfonos por sede y las redes sociales de la marca. Solo enlazamos perfiles que pudimos comprobar.
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card reveal p-7">
          <h3 className="text-2xl font-bold text-crust-900">Teléfonos y ubicación</h3>
          <ul className="mt-5 space-y-5">
            {conTelefono.map((s) => (
              <li key={s.id} className="flex flex-wrap items-center justify-between gap-3 border-b border-crust-700/10 pb-5 last:border-0 last:pb-0">
                <div>
                  <p className="font-bold text-crust-800">{s.nombre}</p>
                  <p className="text-sm text-crust-800/80">{s.direccion ?? 'Dirección por confirmar'}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a href={telHref(s.telefono)} className="btn btn-primary !px-4 !py-2.5">
                    <Phone size={16} aria-hidden="true" /> {s.telefonoVisible}
                  </a>
                  {s.whatsappConfirmado && (
                    <a href={waHref(s.telefono)} target="_blank" rel="noopener noreferrer" className="btn btn-gold !px-4 !py-2.5">
                      <WhatsAppIcon width={16} height={16} /> WhatsApp
                    </a>
                  )}
                  {s.mapsQuery && (
                    <a href={mapsHref(s.mapsQuery)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-4 !py-2.5">
                      <MapPin size={16} aria-hidden="true" /> Maps
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 flex flex-wrap items-center gap-2 text-sm text-crust-800/80">
            <WhatsAppIcon width={16} height={16} /> WhatsApp empresarial: <Pending>No confirmado</Pending>
          </p>
          <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-crust-800/80">
            <Mail size={16} aria-hidden="true" /> Correo comercial:{' '}
            {CORREO ? <a className="underline" href={`mailto:${CORREO}`}>{CORREO}</a> : <Pending>No publicado</Pending>}
          </p>
        </div>

        <div className="card reveal p-7 [--d:120ms]">
          <h3 className="text-2xl font-bold text-crust-900">Redes sociales</h3>
          <ul className="mt-5 grid gap-3">
            {REDES.map((r) => {
              const Icon = socialIcon[r.id]
              return (
                <li key={r.id}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl bg-cream-200/70 p-4 transition hover:bg-crust-700 hover:text-cream-50"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-crust-700 text-cream-50 transition group-hover:bg-gold-400 group-hover:text-crust-950">
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-2 font-bold">
                        {r.nombre} {!r.confirmada && <Pending>Cuenta por confirmar</Pending>}
                      </span>
                      <span className="block truncate text-sm opacity-80">{r.usuario}</span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
