import { Croissant, MapPinned, Store } from 'lucide-react'
import { BRAND } from '../data/brand'
import { SectionHeading, Pending } from './ui'

export default function About() {
  const puntos = [
    {
      icon: Store,
      titulo: 'Panadería y pastelería',
      texto: 'Así se presenta la marca en Facebook: una panadería y pastelería con sede en Villavicencio.',
    },
    {
      icon: Croissant,
      titulo: 'Pan recién hecho',
      texto: 'En sus videos invitan a visitar la panadería para disfrutar pan caliente y postres del día.',
    },
    {
      icon: MapPinned,
      titulo: 'Varias sedes en la ciudad',
      texto: 'Atienden en los barrios San Jorge y Catumare, y mencionan también La Esperanza.',
    },
  ]

  return (
    <section id="conoce" className="section">
      <div className="grid items-start gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading eyebrow="Conoce Panzerotti" title="Una panadería de barrio, hecha para el antojo de cada día">
            {BRAND.nombreCompleto} se describe como “{BRAND.eslogan.toLowerCase()}”. Esta página reúne lo que la marca
            publica abiertamente: dónde encontrarla, cómo contactarla y qué productos destaca.
          </SectionHeading>
          <p className="reveal rounded-2xl border border-dashed border-crust-700/30 bg-cream-50 p-4 text-sm leading-relaxed text-crust-800/80">
            <Pending>Historia por confirmar</Pending>
            <span className="mt-2 block">
              No encontramos información pública verificable sobre el año de fundación, los fundadores o la trayectoria de
              la marca, así que no los incluimos. Cuando los dueños los compartan, se agregan aquí.
            </span>
          </p>
        </div>

        <ul className="grid gap-4">
          {puntos.map(({ icon: Icon, titulo, texto }, i) => (
            <li key={titulo} className="card reveal flex gap-4 p-5" style={{ '--d': `${i * 120}ms` }}>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-400/30 text-crust-700">
                <Icon size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-crust-900">{titulo}</h3>
                <p className="mt-1 text-crust-800/80">{texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
