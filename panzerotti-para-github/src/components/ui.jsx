import { ImageOff, Info } from 'lucide-react'

export function SectionHeading({ eyebrow, title, children, light = false }) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <p className={`eyebrow ${light ? '!text-gold-400' : ''}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-4xl font-extrabold leading-tight md:text-5xl ${light ? 'text-cream-50' : 'text-crust-900'}`}>
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-cream-200' : 'text-crust-800/80'}`}>{children}</p>
      )}
    </div>
  )
}

// Etiqueta que marca información pendiente de confirmar
export function Pending({ children = 'Por confirmar' }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-900">
      <Info size={12} aria-hidden="true" />
      {children}
    </span>
  )
}

// Foto real si existe; si no, un espacio claramente marcado como pendiente
export function Photo({ src, alt, label = 'Foto real pendiente', className = '' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${className}`}
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={`${alt} (fotografía pendiente de incorporar)`}
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-cream-200 to-cream-300 p-4 text-center text-crust-700/70 ${className}`}
    >
      <ImageOff size={28} aria-hidden="true" />
      <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
    </div>
  )
}

// Dibujo decorativo original (no es una fotografía ni un producto real)
export function WheatMark({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M32 60V22" />
      <path d="M32 22c-6-2-8-8-6-14 6 2 8 8 6 14zM32 22c6-2 8-8 6-14-6 2-8 8-6 14z" />
      <path d="M32 36c-7-1-10-7-9-12 6 1 10 6 9 12zM32 36c7-1 10-7 9-12-6 1-10 6-9 12z" />
      <path d="M32 50c-7-1-10-7-9-12 6 1 10 6 9 12zM32 50c7-1 10-7 9-12-6 1-10 6-9 12z" />
    </svg>
  )
}
