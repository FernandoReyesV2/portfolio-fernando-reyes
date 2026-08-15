import BackToIndex from '../components/BackToIndex';
import ChapterNav from '../components/ChapterNav';
import { useLanguage } from '../context/LanguageContext';
import SpiderLilyBackground from '../components/SpiderLilyBackground';

export default function Contact() {
  const { language, t } = useLanguage();

  const contactInfo = [
    {
      label: t('emailLabel'),
      value: 'fernandojrv73@hotmail.com',
      href: 'mailto:fernandojrv73@hotmail.com',
    },
    {
      label: t('phoneLabel'),
      value: '+593 96 994 2670',
      href: 'https://wa.me/593969942670',
    },
    {
      label: t('locationLabel'),
      value: 'Milagro, Ecuador',
      href: null,
    },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/FernandoReyesV2' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/fernando-josue-reyes-vanegas-3876602aa' },
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-light text-olive flex flex-col justify-center items-center px-4 py-20 overflow-hidden font-sans">
      
      {/* Pestañas laterales de navegación */}
      <ChapterNav prevPath="/experience" />

      {/* CAPA DE TEXTURA DE GRANO */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.30] grayscale contrast-125"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* EFECTO DE VIÑETA */}
      <div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.10) 100%)'
        }}
      />

      {/* MARCAS DE AGUA LYCORIS RADIATA (#A37774) */}
      <SpiderLilyBackground />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center text-center">
        
        {/* Header de Sección */}
        <div className="mb-12">
          <span className="text-sm font-mono tracking-widest uppercase opacity-70 block mb-2">
            — {t('section')} IV —
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-olive italic mb-4">
            {t('titleContact')}
          </h2>
          <p className="text-base md:text-lg text-olive/90 max-w-md mx-auto font-normal">
            {t('contactDesc')}
          </p>
        </div>

        {/* Canales Directos */}
        <div className="w-full space-y-6 my-8 border-y border-olive/30 py-8">
          {contactInfo.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-mono text-xs tracking-widest uppercase opacity-70 mb-1">
                [ {item.label} ]
              </span>
              {item.href ? (
                <a 
                  href={item.href} 
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-medium hover:underline underline-offset-4 transition-all"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-lg md:text-xl font-medium">
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Enlaces Sociales / Perfiles */}
        <div className="flex gap-8 my-4 text-sm font-mono tracking-widest uppercase">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4 transition-all"
            >
              [ {social.name} ]
            </a>
          ))}
        </div>

        {/* Colofón / Pie de página del libro */}
        <div className="mt-16 text-xs font-mono opacity-50 tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Fernando Reyes — {language === 'es' ? 'Ingeniero de Software' : 'Software Engineer'}</p>
        </div>

        {/* Botón para volver al Home / Index */}
        <BackToIndex />

      </div>
    </section>
  );
}