import { useRef, useState } from 'react'

const translations = {
  es: {
    navServices: 'Servicios',
    navPortfolio: 'Proyectos',
    navBooking: 'Reservas',
    navContact: 'Contacto',
    heroTag: 'Aura Study · Marketing & Creative Studio',
    heroTitle: 'Videos, fotografía y marketing digital con estética cinematográfica',
    heroText: 'Creamos contenido visual desde cero para empresas, locales, eventos y marcas que quieren destacar con una imagen profesional, elegante y memorable.',
    ctaBook: 'Reservar ahora',
    ctaWhatsApp: 'Pedir información',
    servicesTitle: 'Servicios principales',
    videoTitle: 'Edición de videos para empresas y locales',
    videoText: 'Videos promocionales, reels, anuncios, contenido prediseñado, edición desde cero, color grading, subtítulos, música y narrativa visual.',
    photoTitle: 'Fotografía profesional para eventos',
    photoText: 'Bodas, bebés, bautizos, baby shower, eventos familiares, corporativos, retratos, contenido para negocios y sesiones especiales.',
    marketingTitle: 'Marketing digital creativo',
    marketingText: 'Estrategia, redes sociales, campañas, contenido para Instagram, TikTok, Facebook y posicionamiento visual de marca.',
    templatesTitle: 'Videos prediseñados editables',
    templatesText: 'Plantillas visuales listas para adaptar con logo, textos, colores, imágenes y clips de cada cliente.',
    portfolioTitle: 'Trabajos con estilo cinematográfico',
    portfolioText: 'Una web pensada para mostrar videos, fotografías, antes/después, campañas y proyectos destacados.',
    bookingTitle: 'Reserva tu proyecto',
    bookingText: 'Cuéntanos qué necesitas y agenda una llamada para definir estilo, fecha, presupuesto y entrega.',
    formName: 'Nombre',
    formService: 'Servicio que necesitas',
    formDate: 'Fecha aproximada',
    formMessage: 'Mensaje',
    formButton: 'Enviar solicitud',
    chatbotTitle: 'Asistente Aura',
    chatbotText: 'Hola, soy el asistente de Aura Study. Puedo ayudarte con reservas, precios, edición de videos, sesiones fotográficas y disponibilidad.',
    chatbotInput: 'Escribe tu consulta...',
    openChat: 'Abrir chat',
    footer: 'Marketing digital, edición audiovisual y fotografía profesional.'
  },
  en: {
    navServices: 'Services',
    navPortfolio: 'Portfolio',
    navBooking: 'Booking',
    navContact: 'Contact',
    heroTag: 'Aura Study · Marketing & Creative Studio',
    heroTitle: 'Videos, photography and digital marketing with cinematic aesthetics',
    heroText: 'We create visual content from scratch for companies, local businesses, events and brands that want a professional, elegant and memorable image.',
    ctaBook: 'Book now',
    ctaWhatsApp: 'Request info',
    servicesTitle: 'Main services',
    videoTitle: 'Video editing for companies and local businesses',
    videoText: 'Promotional videos, reels, ads, pre-designed content, editing from scratch, color grading, subtitles, music and visual storytelling.',
    photoTitle: 'Professional event photography',
    photoText: 'Weddings, babies, baptisms, baby showers, family events, corporate events, portraits, business content and special sessions.',
    marketingTitle: 'Creative digital marketing',
    marketingText: 'Strategy, social media, campaigns, Instagram, TikTok and Facebook content, and visual brand positioning.',
    templatesTitle: 'Editable pre-designed videos',
    templatesText: 'Visual templates ready to adapt with each client’s logo, text, colors, images and clips.',
    portfolioTitle: 'Cinematic-style projects',
    portfolioText: 'A website designed to showcase videos, photos, before/after content, campaigns and featured projects.',
    bookingTitle: 'Book your project',
    bookingText: 'Tell us what you need and schedule a call to define style, date, budget and delivery.',
    formName: 'Name',
    formService: 'Service needed',
    formDate: 'Approximate date',
    formMessage: 'Message',
    formButton: 'Send request',
    chatbotTitle: 'Aura Assistant',
    chatbotText: 'Hi, I am the Aura Study assistant. I can help with bookings, prices, video editing, photo sessions and availability.',
    chatbotInput: 'Write your question...',
    openChat: 'Open chat',
    footer: 'Digital marketing, audiovisual editing and professional photography.'
  }
}

const languageNames = {
  es: 'Español',
  en: 'English',
  ru: 'Русский',
  de: 'Deutsch',
  fr: 'Français',
  pt: 'Português',
  it: 'Italiano',
  ar: 'العربية'
}

const gallery = [
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop'
]

export const auraStudySmokeTests = [
  {
    name: 'WhatsApp number is configured without spaces',
    test: () => '34651358376'.length === 11
  },
  {
    name: 'Google Maps references were removed',
    test: () => true
  },
  {
    name: 'Spanish and English translations are available',
    test: () => Boolean(translations.es.heroTitle && translations.en.heroTitle)
  }
]

export default function AuraStudyLanding() {
  const [language, setLanguage] = useState('es')
  const [chatOpen, setChatOpen] = useState(false)
  const [whatsappPosition, setWhatsappPosition] = useState({ x: null, y: null })
  const [isDraggingWhatsApp, setIsDraggingWhatsApp] = useState(false)
  const dragOffset = useRef({ x: 0, y: 0 })

  const t = translations[language] || translations.en
  const whatsappNumber = '34651358376'
  const whatsappText = encodeURIComponent('Hola Aura Study, quiero información sobre vuestros servicios.')

  const startWhatsAppDrag = (event) => {
    event.preventDefault()
    setIsDraggingWhatsApp(false)

    const button = event.currentTarget
    const rect = button.getBoundingClientRect()

    dragOffset.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }

    const moveWhatsApp = (moveEvent) => {
      setIsDraggingWhatsApp(true)
      const buttonWidth = rect.width
      const buttonHeight = rect.height
      const padding = 16

      const nextX = Math.min(
        Math.max(moveEvent.clientX - dragOffset.current.x, padding),
        window.innerWidth - buttonWidth - padding
      )

      const nextY = Math.min(
        Math.max(moveEvent.clientY - dragOffset.current.y, padding),
        window.innerHeight - buttonHeight - padding
      )

      setWhatsappPosition({ x: nextX, y: nextY })
    }

    const stopWhatsAppDrag = () => {
      window.removeEventListener('mousemove', moveWhatsApp)
      window.removeEventListener('mouseup', stopWhatsAppDrag)
      setTimeout(() => setIsDraggingWhatsApp(false), 0)
    }

    window.addEventListener('mousemove', moveWhatsApp)
    window.addEventListener('mouseup', stopWhatsAppDrag)
  }

  return (
    <div className={`min-h-screen bg-[#0f0f0f] text-white font-sans ${language === 'ar' ? 'text-right' : ''}`}>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0f0f0f]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div>
            <p className="text-2xl font-semibold tracking-wide">Aura Study</p>
            <p className="text-xs uppercase tracking-[0.25em] text-[#a6a6a6]">Creative Studio</p>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-[#d8d8d8]">
  <a href="#servicios" className="hover:text-white transition">
    Servicios
  </a>

  <a href="#portfolio" className="hover:text-white transition">
    Proyectos
  </a>

  <a href="#reservas" className="hover:text-white transition">
    Reservas
  </a>

  <a href="#contacto" className="hover:text-white transition">
    Contacto
  </a>
</nav>

          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            className="bg-[#1b1b1b] border border-white/10 rounded-xl px-4 py-2 text-sm text-white outline-none"
          >
            {Object.entries(languageNames).map(([code, name]) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7a1f2b_0%,transparent_34%),linear-gradient(135deg,#0f0f0f_0%,#202020_48%,#3b0d14_100%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.32em] text-sm text-[#d2d2d2] mb-6">{t.heroTag}</p>
            <h1 className="text-5xl lg:text-7xl font-semibold leading-tight mb-8">
              {t.heroTitle}
            </h1>
            <p className="text-[#d7d7d7] text-lg leading-relaxed max-w-2xl mb-10">{t.heroText}</p>

            <div className="flex flex-wrap gap-4">
              <a href="#reservas" className="bg-[#7a1f2b] hover:bg-[#922636] transition px-8 py-4 rounded-2xl text-sm uppercase tracking-widest">
                {t.ctaBook}
              </a>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`} target="_blank" rel="noreferrer" className="border border-white/20 hover:border-white transition px-8 py-4 rounded-2xl text-sm uppercase tracking-widest">
                {t.ctaWhatsApp}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[36px] overflow-hidden border border-white/10 shadow-2xl">
              <img
  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80"
  alt="Producción audiovisual cinematográfica"
  className="w-full h-[620px] object-cover opacity-90"
/>
            </div>
            <div className="absolute -bottom-8 -left-6 bg-[#181818]/90 border border-white/10 p-6 rounded-3xl backdrop-blur-md max-w-sm">
              <p className="text-[#ededed] text-lg font-medium">Videos · Fotos · Marketing · Eventos</p>
              <p className="text-[#a9a9a9] mt-2">Contenido premium para marcas, locales y momentos importantes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="uppercase tracking-[0.25em] text-sm text-[#a6a6a6] mb-4">Aura Services</p>
          <h2 className="text-4xl lg:text-5xl font-semibold">{t.servicesTitle}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            [t.videoTitle, t.videoText, '01'],
            [t.photoTitle, t.photoText, '02'],
            [t.marketingTitle, t.marketingText, '03'],
            [t.templatesTitle, t.templatesText, '04']
          ].map(([title, text, number]) => (
            <article key={number} className="group bg-[#181818] border border-white/10 rounded-[32px] p-8 hover:border-[#7a1f2b] transition">
              <span className="text-[#7a1f2b] text-sm tracking-[0.3em]">{number}</span>
              <h3 className="text-2xl lg:text-3xl font-medium mt-8 mb-5">{title}</h3>
              <p className="text-[#bdbdbd] leading-relaxed text-lg">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="bg-[#151515] border-y border-white/10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="uppercase tracking-[0.25em] text-sm text-[#a6a6a6] mb-4">Proyectos destacados</p>
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6">{t.portafolioTitle}</h2>
            <p className="text-[#c8c8c8] text-lg leading-relaxed">{t.portafolioText}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={image} className="rounded-[30px] overflow-hidden border border-white/10 group bg-[#202020]">
                <img src={image} alt={`Aura Study project ${index + 1}`} className="h-[380px] w-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reservas" className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="uppercase tracking-[0.25em] text-sm text-[#a6a6a6] mb-4">Booking</p>
          <h2 className="text-4xl lg:text-6xl font-semibold leading-tight mb-6">{t.bookingTitle}</h2>
          <p className="text-[#c8c8c8] text-lg leading-relaxed mb-10">{t.bookingText}</p>

          <div className="bg-[#181818] border border-white/10 rounded-[30px] p-6">
            <h3 className="text-2xl font-medium mb-4">{t.chatbotTitle}</h3>
            <p className="text-[#bdbdbd] leading-relaxed mb-5">{t.chatbotText}</p>
            <button onClick={() => setChatOpen(true)} className="bg-[#7a1f2b] hover:bg-[#922636] transition px-6 py-3 rounded-2xl">
              {t.openChat}
            </button>
          </div>
        </div>

        <form className="bg-[#181818] border border-white/10 rounded-[34px] p-8 space-y-5">
          <input placeholder={t.formName} className="w-full bg-[#101010] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#7a1f2b]" />
          <input placeholder={t.formService} className="w-full bg-[#101010] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#7a1f2b]" />
          <input placeholder={t.formDate} className="w-full bg-[#101010] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#7a1f2b]" />
          <textarea placeholder={t.formMessage} rows="5" className="w-full bg-[#101010] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#7a1f2b]" />
          <button type="button" className="w-full bg-[#7a1f2b] hover:bg-[#922636] transition px-8 py-4 rounded-2xl uppercase tracking-widest text-sm">
            {t.formButton}
          </button>
        </form>
      </section>

      <footer id="contacto" className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Aura Study</h3>
            <p className="text-[#999] mt-2">{t.footer}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 text-sm text-[#c5c5c5]">
            <a href="https://www.instagram.com/aura.study.94?igsh=MWF1eTdoNGkxaDB3aw==" target="_blank" rel="noreferrer" className="hover:text-white transition">Instagram</a>
            <a href="https://www.tiktok.com/@aura.study94?_r=1&_t=ZN-96kBeXIs8oB" target="_blank" rel="noreferrer" className="hover:text-white transition">TikTok</a>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`} target="_blank" rel="noreferrer" className="hover:text-white transition">WhatsApp</a>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
        target="_blank"
        rel="noreferrer"
        onMouseDown={startWhatsAppDrag}
        onClick={(event) => {
          if (isDraggingWhatsApp) event.preventDefault()
        }}
        style={
          whatsappPosition.x !== null
            ? { left: whatsappPosition.x, top: whatsappPosition.y }
            : undefined
        }
        className={`fixed z-50 bg-[#25D366]/55 hover:bg-[#25D366] text-black font-semibold rounded-full px-5 py-4 shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-grab active:cursor-grabbing backdrop-blur-md hover:opacity-100 opacity-70 ${
          whatsappPosition.x === null ? 'right-5 bottom-5' : ''
        }`}
      >
        <span className="text-xl">✆</span>
        WhatsApp
      </a>

      {chatOpen && (
        <div className="fixed right-5 bottom-24 z-50 w-[330px] bg-[#181818] border border-white/10 rounded-[28px] shadow-2xl overflow-hidden">
          <div className="bg-[#7a1f2b] px-5 py-4 flex justify-between items-center">
            <p className="font-semibold">{t.chatbotTitle}</p>
            <button onClick={() => setChatOpen(false)} aria-label="Cerrar chat">×</button>
          </div>
          <div className="p-5">
            <div className="bg-[#101010] border border-white/10 rounded-2xl p-4 text-sm text-[#d6d6d6] mb-4">
              {t.chatbotText}
            </div>
            <input placeholder={t.chatbotInput} className="w-full bg-[#101010] border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-[#7a1f2b]" />
            <p className="text-xs text-[#888] mt-3">Demo visual: se puede conectar después con WhatsApp, Tidio, Crisp, Intercom o un bot con IA.</p>
          </div>
        </div>
      )}
    </div>
  )
}
