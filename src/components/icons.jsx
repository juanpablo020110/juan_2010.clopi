// Iconos de redes sociales (lucide ya no incluye logotipos de marcas)
const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }

export const InstagramIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
  </svg>
)

export const FacebookIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.95.4-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.15-2.4-.15-2.5 0-4.2 1.5-4.2 4.3v2.5H7.5v3.3h2.8V22h3.2z" />
  </svg>
)

export const TikTokIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M16.6 2h-3.1v13.2a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .8.1V9.2a6 6 0 1 0 5.2 5.9V8.8a7.4 7.4 0 0 0 4.3 1.4V7.1a4.4 4.4 0 0 1-4.3-5.1z" />
  </svg>
)

export const WhatsAppIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.25-.12-1.45-.7-1.7-.8-.2-.1-.4-.1-.55.1l-.8 1c-.15.15-.3.2-.5.05a6.7 6.7 0 0 1-3.3-2.9c-.25-.4.25-.4.7-1.3.08-.15.04-.3-.02-.4l-.8-1.9c-.2-.5-.4-.4-.55-.4h-.45c-.15 0-.4.06-.6.3-.2.25-.8.8-.8 1.9s.8 2.2.95 2.35c.1.15 1.6 2.4 3.9 3.4 1.45.6 2 .65 2.7.55.45-.06 1.4-.6 1.6-1.1.2-.55.2-1 .14-1.1-.05-.1-.2-.15-.45-.27z" />
  </svg>
)

export const socialIcon = { instagram: InstagramIcon, facebook: FacebookIcon, tiktok: TikTokIcon }
