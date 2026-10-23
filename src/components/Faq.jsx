import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ } from '../data/faq'
import { SectionHeading } from './ui'

export default function Faq() {
  const [abierta, setAbierta] = useState(0)

  return (
    <section id="faq" className="bg-cream-200/60">
      <div className="section">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Lo que más nos preguntan" />
        <ul className="mx-auto grid max-w-3xl gap-3">
          {FAQ.map((item, i) => {
            const open = abierta === i
            return (
              <li key={item.q} className="card reveal overflow-hidden" style={{ '--d': `${i * 50}ms` }}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-${i}`}
                    onClick={() => setAbierta(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-lg font-bold text-crust-900"
                  >
                    {item.q}
                    <ChevronDown className={`shrink-0 transition ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  role="region"
                  className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-crust-800/85">{item.a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
