import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import Logo from './Logo'
import { SEDES, telHref } from '../data/sedes'

const LINKS = [
  ['#conoce', 'Conócenos'],
  ['#productos', 'Productos'],
  ['#galeria', 'Galería'],
  ['#sedes', 'Sedes'],
  ['#horarios', 'Horarios'],
  ['#pedidos', 'Pedidos'],
  ['#contacto', 'Contacto'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const principal = SEDES.find((s) => s.estado === 'verificada')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open ? 'bg-cream-50/95 shadow-md shadow-crust-900/10 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8" aria-label="Navegación principal">
        <a href="#inicio" aria-label="Panzerotti, ir al inicio">
          <Logo light={!scrolled && !open} />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-gold-400/30 ${
                  scrolled ? 'text-crust-800' : 'text-cream-50'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {principal && (
            <a href={telHref(principal.telefono)} className="btn btn-gold hidden !py-2 sm:inline-flex">
              <Phone size={16} aria-hidden="true" /> Llamar
            </a>
          )}
          <button
            type="button"
            className={`rounded-full p-2 lg:hidden ${scrolled || open ? 'text-crust-800' : 'text-cream-50'}`}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-movil" className="border-t border-crust-700/10 bg-cream-50 px-5 pb-6 pt-2 lg:hidden">
          <ul className="grid gap-1">
            {LINKS.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-lg font-semibold text-crust-800 hover:bg-gold-400/25"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {principal && (
            <a href={telHref(principal.telefono)} className="btn btn-primary mt-3 w-full">
              <Phone size={16} aria-hidden="true" /> Llamar a {principal.nombre}
            </a>
          )}
        </div>
      )}
    </header>
  )
}
