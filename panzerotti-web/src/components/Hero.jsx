import { ArrowRight, MapPin, Phone, ShoppingBag } from 'lucide-react'
import { BRAND } from '../data/brand'
import { SEDES, telHref } from '../data/sedes'
import { WheatMark } from './ui'

export default function Hero() {
  const principal = SEDES.find((s) => s.estado === 'verificada')

  return (
    <section id="inicio" className="grain relative isolate overflow-hidden bg-crust-900 text-cream-50">
      {/* Fondo: foto real si existe; si no, degradado cálido */}
      {BRAND.heroImagen ? (
        <>
          <img src={BRAND.heroImagen} alt={BRAND.heroImagenAlt} className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-crust-950/90 via-crust-950/60 to-crust-950/20" />
        </>
      ) : (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_20%,rgba(243,185,77,0.35),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(196,87,43,0.35),transparent_50%)]" />
      )}

      <WheatMark className="floaty pointer-events-none absolute -right-6 top-24 -z-10 h-72 w-72 text-gold-400/20 md:right-16 md:h-96 md:w-96" />
      <WheatMark className="floaty pointer-events-none absolute -left-10 bottom-10 -z-10 h-48 w-48 -rotate-12 text-gold-400/10 [--r:-12deg]" />

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8">
        <p className="reveal eyebrow !text-gold-400">Villavicencio, Meta · Panadería y pastelería</p>
        <h1 className="reveal mt-5 max-w-3xl text-5xl font-extrabold leading-[1.02] [--d:100ms] sm:text-6xl md:text-7xl">
          La casa del pan <span className="text-gold-400">en Villavicencio.</span>
        </h1>
        <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-cream-200 [--d:200ms] md:text-xl">
          Pan caliente, chocho, postres y buñuelos de temporada. Conoce las sedes de {BRAND.nombreCompleto}, escríbeles
          o pasa a probar algo recién hecho.
        </p>

        <div className="reveal mt-9 flex flex-wrap gap-3 [--d:300ms]">
          <a href="#productos" className="btn btn-gold">
            <ShoppingBag size={18} aria-hidden="true" /> Explorar productos
          </a>
          <a href="#sedes" className="btn btn-ghost-light">
            <MapPin size={18} aria-hidden="true" /> Encontrar mi sede
          </a>
        </div>

        <div className="reveal mt-12 grid max-w-2xl gap-3 text-sm sm:grid-cols-2 [--d:400ms]">
          {principal && (
            <a href={telHref(principal.telefono)} className="group flex items-center gap-3 rounded-2xl bg-cream-50/10 p-4 backdrop-blur transition hover:bg-cream-50/20">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-400 text-crust-950"><Phone size={18} aria-hidden="true" /></span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-cream-300">Llamar · {principal.barrio}</span>
                <span className="text-lg font-bold">{principal.telefonoVisible}</span>
              </span>
            </a>
          )}
          <a href="#pedidos" className="group flex items-center justify-between gap-3 rounded-2xl bg-cream-50/10 p-4 backdrop-blur transition hover:bg-cream-50/20">
            <span>
              <span className="block text-xs uppercase tracking-wider text-cream-300">Pedidos y cotizaciones</span>
              <span className="text-lg font-bold">Cómo pedir</span>
            </span>
            <ArrowRight className="transition group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
