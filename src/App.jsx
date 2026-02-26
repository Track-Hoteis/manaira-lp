import { FaGlobe, FaWhatsapp, FaCalendarCheck, FaComments, FaMapMarkerAlt, FaInstagram, FaFacebookF } from 'react-icons/fa'

const LINKS = [
  {
    icon: FaGlobe,
    label: 'Site',
    url: 'https://www.hotelmanaira.com.br/',
  },
  {
    icon: FaWhatsapp,
    label: 'Reserve sua hospedagem',
    url: 'https://api.whatsapp.com/send/?phone=558330219704&text&type=phone_number&app_absent=0',
  },
  {
    icon: FaCalendarCheck,
    label: 'Fale com o setor de eventos',
    url: 'https://api.whatsapp.com/send/?phone=5583994211565&text&type=phone_number&app_absent=0',
  },
  {
    icon: FaComments,
    label: 'Tire suas dúvidas',
    url: 'https://api.whatsapp.com/send/?phone=558330219700&text&type=phone_number&app_absent=0',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Localização',
    url: 'https://www.google.com/maps/place/Hotel+Mana%C3%ADra/@-7.1001401,-34.8365615,17z/data=!3m1!4b1!4m8!3m7!1s0x7acdd118f13f4d7:0x38c0467b66aa3fe!5m2!4m1!1i2!8m2!3d-7.1001401!4d-34.8339866',
  },
]

const SOCIALS = [
  {
    icon: FaInstagram,
    label: 'Instagram',
    url: 'https://www.instagram.com/hotelmanaira/',
  },
  {
    icon: FaFacebookF,
    label: 'Facebook',
    url: 'https://www.facebook.com/hotelmanaira',
  },
]

function LinkButton({ icon: Icon, label, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 w-full px-5 py-4 rounded-xl
                 bg-dark-800/60 backdrop-blur-md border border-gold-500/20
                 hover:border-gold-500/70 hover:bg-dark-800/80 hover:scale-[1.02]
                 transition-all duration-300 ease-out
                 text-white/90 hover:text-white no-underline"
    >
      <span className="flex items-center justify-center w-10 h-10 rounded-lg
                        bg-gold-500/10 text-gold-400 group-hover:bg-gold-500/20
                        group-hover:text-gold-300 transition-all duration-300">
        <Icon className="w-5 h-5" />
      </span>
      <span className="text-[15px] font-medium tracking-wide">{label}</span>
      <svg
        className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover:opacity-60 
                   group-hover:translate-x-0 transition-all duration-300 text-gold-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  )
}

function SocialButton({ icon: Icon, label, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-12 h-12 rounded-full
                 bg-dark-800/60 backdrop-blur-md border border-gold-500/20
                 hover:border-gold-500/60 hover:bg-gold-500/15
                 text-gold-400 hover:text-gold-300 hover:scale-110
                 transition-all duration-300 ease-out"
    >
      <Icon className="w-5 h-5" />
    </a>
  )
}

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://manaira.b-cdn.net/hero%20manaira.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Subtle gold radial glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]
                        bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen px-5 py-12">
        {/* Logo */}
        <div className="mb-3 animate-fade-in">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gold-500/30
                          shadow-[0_0_40px_rgba(201,168,76,0.15)] p-1 bg-dark-900/40 backdrop-blur-sm">
            <img
              src="https://hotelmanaira.com.br/wp-content/uploads/2023/08/logo.png"
              alt="Hotel Manaíra"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-wider mb-1">
          HOTEL MANAÍRA
        </h1>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-3" />

        {/* Tagline */}
        <p className="text-gold-300/80 text-sm md:text-base font-light tracking-wide mb-10 text-center max-w-xs">
          Hospitalidade, experiência e funcionalidade.
        </p>

        {/* Links */}
        <div className="w-full max-w-md flex flex-col gap-3.5 mb-12">
          {LINKS.map((link) => (
            <LinkButton key={link.label} {...link} />
          ))}
        </div>

        {/* Socials */}
        <div className="flex gap-4 mb-8">
          {SOCIALS.map((social) => (
            <SocialButton key={social.label} {...social} />
          ))}
        </div>

        {/* Footer */}
        <p className="text-white/25 text-xs tracking-widest mt-auto">
          João Pessoa · Paraíba
        </p>
      </div>
    </div>
  )
}

export default App
