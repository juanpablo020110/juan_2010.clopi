import { Gift, Phone, Sparkles } from 'lucide-react'
import { PEDIDOS } from '../data/brand'
import { telHref } from '../data/sedes'
import { Pending, SectionHeading } from './ui'

// Novedades extraídas de publicaciones reales de la marca.
// Se agregan aquí solo cuando hay una publicación que las respalde.
const NOVEDADES = [
  {
    titulo: 'Nuevo número en la sede Catumare',
    texto: 'La marca anunció en TikTok un número nuevo para la sede Catumare: 322 215 8576.',
    fuente: 'TikTok de la marca · fecha exacta por confirmar',
  },
  {
    titulo: 'Buñuelos para las novenas',
    texto: 'Han invitado a cotizar buñuelos para las novenas navideñas. Las cotizaciones se piden por el número de la sede San Jorge.',
    fuente: 'TikTok de la marca · fecha por confirmar',
  },
  {
    titulo: 'Recomendado de la semana',
    texto: 'En Facebook destacan semanalmente un producto; el pan calentano fue uno de ellos.',
    fuente: 'Facebook de la marca',
  },
]

export default function Pedidos() {
  return (
    <>
      <section id="pedidos" className="bg-cream-200/60">
        <div className="section">
          <SectionHeading eyebrow="Domicilios y pedidos" title="Cómo pedir en Panzerotti">
            {PEDIDOS.descripcion}
          </SectionHeading>

          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <div className="card reveal p-7">
              <h3 className="text-2xl font-bold text-crust-900">Pedidos y cotizaciones</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-crust-800">
                <li>Llama o escribe al número de la sede San Jorge.</li>
                <li>Cuéntales qué producto necesitas y para cuándo.</li>
                <li>Pregunta si pueden hacerte el envío a tu barrio y cuánto cuesta.</li>
              </ol>
              <a href={telHref(PEDIDOS.numero)} className="btn btn-primary mt-6">
                <Phone size={18} aria-hidden="true" /> Llamar al {PEDIDOS.numeroVisible}
              </a>
            </div>

            <div className="card reveal p-7 [--d:120ms]">
              <h3 className="text-xl font-bold text-crust-900">Lo que aún no está confirmado</h3>
              <ul className="mt-4 space-y-3 text-sm text-crust-800">
                <li className="flex flex-wrap items-center gap-2">Servicio de domicilios <Pending>No confirmado</Pending></li>
                <li className="flex flex-wrap items-center gap-2">Cobertura y costo de envío <Pending /></li>
                <li className="flex flex-wrap items-center gap-2">Pedidos en línea / apps <Pending>No encontrado</Pending></li>
              </ul>
              <p className="mt-4 text-xs text-crust-800/70">
                Este sitio no procesa pedidos ni pagos: todo se coordina directamente con la sede.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="novedades" className="section">
        <SectionHeading eyebrow="Promociones y novedades" title="Lo último que ha publicado la marca">
          No encontramos promociones o descuentos con fecha de vigencia verificada, por eso no publicamos ninguno. Estas son
          novedades tomadas de sus propias publicaciones.
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-3">
          {NOVEDADES.map((n, i) => (
            <article key={n.titulo} className="card reveal p-6" style={{ '--d': `${i * 100}ms` }}>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-400/30 text-crust-700">
                {i === 1 ? <Gift size={22} aria-hidden="true" /> : <Sparkles size={22} aria-hidden="true" />}
              </span>
              <h3 className="mt-4 text-xl font-bold text-crust-900">{n.titulo}</h3>
              <p className="mt-2 text-crust-800/80">{n.texto}</p>
              <p className="mt-3 text-xs text-crust-800/60">{n.fuente}</p>
            </article>
          ))}
        </div>

        <div className="reveal mt-6 rounded-3xl border border-dashed border-crust-700/30 p-6 text-center text-crust-800/80">
          <Pending>Promociones por confirmar</Pending>
          <p className="mt-2 text-sm">Cuando la marca confirme una promoción vigente, se agrega en <code>src/components/Pedidos.jsx</code>.</p>
        </div>
      </section>
    </>
  )
}
