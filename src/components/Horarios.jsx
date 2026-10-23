import { Clock, Phone } from 'lucide-react'
import { DIAS, SEDES, telHref } from '../data/sedes'
import { Pending, SectionHeading } from './ui'

export default function Horarios() {
  const sedes = SEDES.filter((s) => s.estado !== 'mencionada')
  const hayAlgunHorario = sedes.some((s) => s.horarios)

  return (
    <section id="horarios" className="section">
      <SectionHeading eyebrow="Horarios de atención" title="Antes de ir, confirma la hora">
        {hayAlgunHorario
          ? 'Horarios publicados por sede.'
          : 'No pudimos verificar horarios vigentes de ninguna sede, así que preferimos no mostrar uno equivocado. Llama a la sede y te confirman.'}
      </SectionHeading>

      <div className="grid gap-6 md:grid-cols-2">
        {sedes.map((s, i) => (
          <article key={s.id} className="card reveal p-6" style={{ '--d': `${i * 120}ms` }}>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-400/30 text-crust-700"><Clock size={22} aria-hidden="true" /></span>
              <h3 className="text-2xl font-bold text-crust-900">{s.nombre}</h3>
            </div>

            {s.horarios ? (
              <table className="mt-5 w-full text-sm">
                <caption className="sr-only">Horario de {s.nombre}</caption>
                <tbody>
                  {DIAS.map(([k, label]) => (
                    <tr key={k} className="border-b border-crust-700/10 last:border-0">
                      <th scope="row" className="py-2 text-left font-semibold text-crust-700">{label}</th>
                      <td className="py-2 text-right">{s.horarios[k] ?? <Pending />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="mt-5 rounded-2xl bg-cream-200/70 p-4 text-sm text-crust-800">
                <Pending>Horario por confirmar</Pending>
                <p className="mt-2">
                  Todavía no hay un horario oficial verificado para esta sede.
                </p>
              </div>
            )}

            {s.telefono && (
              <a href={telHref(s.telefono)} className="btn btn-ghost mt-5 w-full sm:w-auto">
                <Phone size={16} aria-hidden="true" /> Preguntar al {s.telefonoVisible}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
