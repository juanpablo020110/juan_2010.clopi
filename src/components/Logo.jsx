import { BRAND } from '../data/brand'

// Muestra el logotipo oficial si se configuró; si no, un wordmark tipográfico sencillo.
export default function Logo({ light = false, className = '' }) {
  if (BRAND.logo) {
    return <img src={BRAND.logo} alt={`Logotipo de ${BRAND.nombreCompleto}`} className={`h-10 w-auto ${className}`} />
  }
  return (
    <span className={`inline-flex items-baseline gap-1 font-display text-2xl font-extrabold tracking-tight ${light ? 'text-cream-50' : 'text-crust-800'} ${className}`}>
      {BRAND.nombre}
      <span className="h-2 w-2 rounded-full bg-gold-400" aria-hidden="true" />
    </span>
  )
}
