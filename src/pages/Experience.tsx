import { motion, type Variants } from 'framer-motion';
import BackToIndex from '../components/BackToIndex';
import ChapterNav from '../components/ChapterNav';
import TypewriterText from '../components/TypewriterText';
import { useLanguage } from '../context/LanguageContext';
import SpiderLilyBackground from '../components/SpiderLilyBackground';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
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

export default function Experience() {
  const { language, t } = useLanguage();

  const experiences = [
    {
      period: language === 'es' ? 'AGOSTO 2024 — OCTUBRE 2024' : 'AUGUST 2024 — OCTOBER 2024',
      role: language === 'es' ? 'Practicante en Sistemas Informáticos' : 'IT Systems Intern',
      entity:
        language === 'es'
          ? 'Agencia Nacional de Regulación, Control y Vigilancia Sanitaria (ARCSA)'
          : 'National Agency for Sanitary Regulation, Control and Surveillance (ARCSA)',
      details: [
        language === 'es'
          ? 'Desarrollo de aplicación web en React para automatizar la conversión de archivos Excel a formatos institucionales, reduciendo tareas manuales.'
          : 'Developed a React web application to automate the conversion of Excel files into official institutional formats, reducing manual tasks.',
        language === 'es'
          ? 'Implementación de autenticación segura mediante Google OAuth e integración con APIs REST.'
          : 'Implemented secure authentication via Google OAuth and integration with REST APIs.',
        language === 'es'
          ? 'Soporte técnico nivel 1 a más de 20 usuarios internos, resolución de incidencias de hardware/software y mantenimiento preventivo.'
          : 'Provided L1 technical support to over 20 internal users, resolving hardware/software issues and conducting preventive maintenance.',
        language === 'es'
          ? 'Validación y verificación de datos utilizando consultas SQL y elaboración de documentación técnica.'
          : 'Data validation and verification using SQL queries and drafting technical documentation.',
      ],
    },
    {
      period: language === 'es' ? 'MARZO 2024 — ABRIL 2024' : 'MARCH 2024 — APRIL 2024',
      role: language === 'es' ? 'Practicante de Servicios Informáticos' : 'IT Services Intern',
      entity:
        language === 'es'
          ? 'Universidad Estatal de Milagro (UNEMI)'
          : 'State University of Milagro (UNEMI)',
      details: [
        language === 'es'
          ? 'Soporte técnico de primer nivel a docentes y personal administrativo.'
          : 'First-level technical support for teaching staff and administrative personnel.',
        language === 'es'
          ? 'Instalación, configuración y mantenimiento de software y equipos informáticos institucionales.'
          : 'Installation, configuration, and maintenance of institutional software and IT equipment.',
      ],
    },
  ];

  const education = {
    period: language === 'es' ? 'ENERO 2026' : 'JANUARY 2026',
    degree: language === 'es' ? 'Ingeniero de Software' : 'Software Engineer Degree',
    institution:
      language === 'es'
        ? 'Universidad Estatal de Milagro (UNEMI)'
        : 'State University of Milagro (UNEMI)',
  };

  return (
    <section id="experience" className="relative min-h-screen bg-light text-olive flex flex-col justify-center items-center px-4 py-20 overflow-hidden font-sans">

      {/* Pestañas laterales de navegación */}
      <ChapterNav prevPath="/skills" nextPath="/contact" />

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
      <div key={language} className="relative z-10 max-w-3xl w-full flex flex-col items-center">
        
        {/* Header de Sección */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono tracking-widest uppercase opacity-70 block mb-2">
            <TypewriterText 
              text={`— ${t('section')} III —`} 
              speed={0.03} 
              delay={0.2} 
              showCursor={false} 
            />
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-olive italic">
            <TypewriterText 
              text={t('titleExperience')} 
              speed={0.035} 
              delay={0.5} 
              showCursor={false} 
            />
          </h2>
        </div>

        {/* Bloque de Experiencia Profesional */}
        <div className="w-full space-y-12 mb-16">
          <h3 className="font-mono text-xs md:text-sm font-bold tracking-widest uppercase opacity-80 border-b border-olive/30 pb-2">
            <TypewriterText 
              text={`[ ${language === 'es' ? 'TRAYECTORIA PROFESIONAL' : 'PROFESSIONAL EXPERIENCE'} ]`} 
              speed={0.02} 
              delay={0.9} 
              showCursor={false} 
            />
          </h3>

          {experiences.map((item, idx) => {
            const expDelay = 1.1 + idx * 0.25;

            return (
              <motion.article 
                key={`${item.period}-${idx}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={expDelay}
                className="border-l-2 border-olive/40 pl-6 space-y-2"
              >
                <span className="text-xs font-mono tracking-widest opacity-70 block">
                  <TypewriterText 
                    text={item.period} 
                    speed={0.015} 
                    delay={expDelay} 
                    showCursor={false} 
                  />
                </span>
                <h4 className="text-xl md:text-2xl font-bold italic">
                  <TypewriterText 
                    text={item.role} 
                    speed={0.02} 
                    delay={expDelay + 0.1} 
                    showCursor={false} 
                  />
                </h4>
                <p className="text-sm md:text-base font-mono opacity-90 pb-2">
                  {item.entity}
                </p>
                <ul className="space-y-2 pt-2">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-base text-olive/90 flex items-start">
                      <span className="text-xs font-mono mr-2 mt-1 opacity-60">—</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* Bloque de Formación Académica */}
        <div className="w-full space-y-6">
          <h3 className="font-mono text-xs md:text-sm font-bold tracking-widest uppercase opacity-80 border-b border-olive/30 pb-2">
            <TypewriterText 
              text={`[ ${language === 'es' ? 'FORMACIÓN ACADÉMICA' : 'EDUCATION'} ]`} 
              speed={0.02} 
              delay={1.7} 
              showCursor={false} 
            />
          </h3>

          <motion.article 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={1.9}
            className="border-l-2 border-olive/40 pl-6 space-y-1"
          >
            <span className="text-xs font-mono tracking-widest opacity-70 block">
              <TypewriterText 
                text={education.period} 
                speed={0.02} 
                delay={1.9} 
                showCursor={false} 
              />
            </span>
            <h4 className="text-xl md:text-2xl font-bold italic">
              <TypewriterText 
                text={education.degree} 
                speed={0.02} 
                delay={2.05} 
                showCursor={false} 
              />
            </h4>
            <p className="text-base text-olive/90">
              {education.institution}
            </p>
          </motion.article>
        </div>

        {/* Botón para volver al Home / Index */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.5 }}
          className="w-full flex justify-center mt-12"
        >
          <BackToIndex />
        </motion.div>

      </div>
    </section>
  );
}