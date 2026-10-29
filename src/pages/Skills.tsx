import { motion, type Variants } from 'framer-motion';
import BackToIndex from '../components/BackToIndex';
import ChapterNav from '../components/ChapterNav';
import TypewriterText from '../components/TypewriterText';
import { useLanguage } from '../context/LanguageContext';
import SpiderLilyBackground from '../components/SpiderLilyBackground';

const categoryVariants: Variants = {
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

export default function Skills() {
  const { language, t } = useLanguage();

  const skillCategories = [
    {
      category: 'FRONTEND DEVELOPMENT',
      skills: [
        'React',
        'TypeScript',
        'JavaScript (ES6+)',
        'Tailwind CSS',
        'HTML5 & CSS3',
        'Responsive Design',
        language === 'es' ? 'Consumo de APIs REST' : 'REST API Consumption',
      ],
    },
    {
      category: 'BACKEND & DATABASES',
      skills: ['Node.js', 'Python', 'Django', 'APIs REST', 'JWT & OAuth', 'MySQL', 'MongoDB', 'SQLite'],
    },
    {
      category: language === 'es' ? 'SISTEMAS & SOPORTE TI' : 'IT SUPPORT & SYSTEMS',
      skills: [
        language === 'es' ? 'Soporte Técnico L1' : 'L1 Technical Support',
        language === 'es' ? 'Mantenimiento Preventivo/Correctivo' : 'Preventive/Corrective Maintenance',
        'Windows 10/11',
        language === 'es' ? 'Redes Básicas' : 'Basic Networking',
        language === 'es' ? 'Consultas SQL' : 'SQL Queries',
      ],
    },
    {
      category: language === 'es' ? 'HERRAMIENTAS & FLUJO' : 'TOOLS & WORKFLOW',
      skills: [
        'Git & GitHub',
        'Postman',
        'VS Code',
        language === 'es' ? 'Automatización de Procesos' : 'Process Automation',
        language === 'es' ? 'Documentación Técnica' : 'Technical Documentation',
      ],
    },
    {
      category: language === 'es' ? 'IDIOMAS' : 'LANGUAGES',
      skills: [
        language === 'es' ? 'Español — Nativo' : 'Spanish — Native',
        language === 'es'
          ? 'Inglés — B1 (Lectura técnica y conversación fluida)'
          : 'English — B1 (Technical reading & conversational)',
      ],
    },
  ];

  return (
    <section id="skills" className="relative min-h-screen bg-light text-olive flex flex-col justify-center items-center px-4 py-20 overflow-hidden font-sans">
      
      {/* Pestañas laterales de navegación */}
      <ChapterNav prevPath="/projects" nextPath="/experience" />

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
              text={`— ${t('section')} II —`} 
              speed={0.03} 
              delay={0.2} 
              showCursor={false} 
            />
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-olive italic">
            <TypewriterText 
              text={t('titleSkills')} 
              speed={0.035} 
              delay={0.5} 
              showCursor={false} 
            />
          </h2>
        </div>

        {/* Rejilla / Lista de Habilidades */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((group, idx) => {
            const baseDelay = 0.9 + idx * 0.15;

            return (
              <motion.div 
                key={`${group.category}-${idx}`}
                variants={categoryVariants}
                initial="hidden"
                animate="visible"
                custom={baseDelay}
                className="border-t border-olive/30 pt-6 flex flex-col justify-start"
              >
                {/* Título de Categoría tipeado */}
                <h3 className="font-mono text-xs md:text-sm font-bold tracking-widest uppercase opacity-80 mb-6">
                  <TypewriterText 
                    text={`[ ${group.category} ]`} 
                    speed={0.015} 
                    delay={baseDelay} 
                    showCursor={false} 
                  />
                </h3>

                {/* Items de Habilidades */}
                <ul className="space-y-3">
                  {group.skills.map((skill, itemIdx) => (
                    <li 
                      key={itemIdx}
                      className="flex items-center text-base md:text-lg text-olive/90"
                    >
                      <span className="text-xs font-mono mr-3 opacity-50">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Botón para volver al Home / Index */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="w-full flex justify-center mt-12"
        >
          <BackToIndex />
        </motion.div>

      </div>
    </section>
  );
}