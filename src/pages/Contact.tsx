import { motion, type Variants } from 'framer-motion';
import BackToIndex from '../components/BackToIndex';
import ChapterNav from '../components/ChapterNav';
import TypewriterText from '../components/TypewriterText';
import { useLanguage } from '../context/LanguageContext';
import SpiderLilyBackground from '../components/SpiderLilyBackground';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: customDelay,
      ease: [0.25, 0.1, 0.25, 1.0] as const,
    },
  }),
};

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

      {/* MARCAS DE AGUA LYCORIS RADIATA */}
      <SpiderLilyBackground />

      {/* CONTENIDO PRINCIPAL */}
      <div key={language} className="relative z-10 max-w-2xl w-full flex flex-col items-center text-center">
        
        {/* Header de Sección */}
        <div className="mb-12">
          <span className="text-sm font-mono tracking-widest uppercase opacity-70 block mb-2">
            <TypewriterText 
              text={`— ${t('section')} IV —`} 
              speed={0.03} 
              delay={0.2} 
              showCursor={false} 
            />
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-olive italic mb-4">
            <TypewriterText 
              text={t('titleContact')} 
              speed={0.035} 
              delay={0.5} 
              showCursor={false} 
            />
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-base md:text-lg text-olive/90 max-w-md mx-auto font-normal"
          >
            {t('contactDesc')}
          </motion.p>
        </div>

        {/* Canales Directos */}
        <div className="w-full space-y-6 my-8 border-y border-olive/30 py-8">
          {contactInfo.map((item, idx) => {
            const rowDelay = 1.1 + idx * 0.2;

            return (
              <motion.div 
                key={`${item.label}-${idx}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={rowDelay}
                className="flex flex-col items-center"
              >
                <span className="font-mono text-xs tracking-widest uppercase opacity-70 mb-1">
                  <TypewriterText 
                    text={`[ ${item.label} ]`} 
                    speed={0.015} 
                    delay={rowDelay} 
                    showCursor={false} 
                  />
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
              </motion.div>
            );
          })}
        </div>

        {/* Enlaces Sociales / Perfiles */}
        <div className="flex gap-8 my-4 text-sm font-mono tracking-widest uppercase">
          {socialLinks.map((social, idx) => {
            const socialDelay = 1.8 + idx * 0.2;

            return (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: socialDelay, duration: 0.4 }}
                className="hover:underline underline-offset-4 transition-all"
              >
                [ <TypewriterText text={social.name} speed={0.03} delay={socialDelay} showCursor={false} /> ]
              </motion.a>
            );
          })}
        </div>

        {/* Colofón / Pie de página del libro */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="mt-16 text-xs font-mono opacity-50 tracking-widest uppercase"
        >
          <p>© {new Date().getFullYear()} Fernando Reyes — {language === 'es' ? 'Ingeniero de Software' : 'Software Engineer'}</p>
        </motion.div>

        {/* Botón para volver al Home / Index */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.5 }}
          className="w-full flex justify-center mt-12"
        >
          <BackToIndex />
        </motion.div>

      </div>
    </section>
  );
}