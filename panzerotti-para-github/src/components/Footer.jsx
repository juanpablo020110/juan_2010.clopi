import { BRAND, REDES } from '../data/brand'
import { SEDES, telHref } from '../data/sedes'
import Logo from './Logo'
import { socialIcon } from './icons'

export default function Footer() {
  const anio = new Date().getFullYear()
  return (
    <footer className="bg-crust-950 text-cream-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-3 text-sm">{BRAND.eslogan}.</p>
          <div className="mt-4 flex gap-2">
            {REDES.filter((r) => r.confirmada).map((r) => {
              const Icon = socialIcon[r.id]
              return (
                <a key={r.id} href={r.url} target="_blank" rel="noopener noreferrer" aria-label={`${r.nombre} de Panzerotti`} className="grid h-10 w-10 place-items-center rounded-full bg-cream-50/10 transition hover:bg-gold-400 hover:text-crust-950">
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>

        <nav aria-label="Secciones del sitio">
          <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-gold-400">Secciones</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {[['#conoce', 'Conócenos'], ['#productos', 'Productos'], ['#galeria', 'Galería'], ['#sedes', 'Sedes'], ['#horarios', 'Horarios'], ['#pedidos', 'Pedidos'], ['#faq', 'Preguntas frecuentes'], ['#contacto', 'Contacto']].map(([h, l]) => (
              <li key={h}><a href={h} className="hover:text-gold-400">{l}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-gold-400">Sedes</h2>
          <ul className="mt-3 space-y-3 text-sm">
            {SEDES.map((s) => (
              <li key={s.id}>
                <a href="#sedes" className="font-semibold hover:text-gold-400">{s.nombre}</a>
                {s.telefono && <a href={telHref(s.telefono)} className="block text-cream-300 hover:text-gold-400">{s.telefonoVisible}</a>}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-gold-400">Aviso</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Los datos de este sitio provienen de información pública. Lo que aparece como “por confirmar” no ha sido verificado.
            No recopilamos datos personales: este sitio no tiene formularios ni cuentas.
          </p>
        </div>
      </div>

      <div className="border-t border-cream-50/10 px-5 py-6 text-center text-xs text-cream-300 sm:px-8">
        {!BRAND.autorizadoPorLaMarca && (
          <p className="mx-auto mb-2 max-w-3xl">
            Sitio independiente elaborado a partir de información pública. No ha sido autorizado ni avalado por Panadería
            Panzerotti. Los nombres y marcas pertenecen a sus propietarios.
          </p>
        )}
        <p>© {anio} Panzerotti Villavicencio. Todos los derechos reservados por sus respectivos titulares.</p>
      </div>
    </footer>
  )
}
