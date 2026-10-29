import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import BackToIndex from '../components/BackToIndex';
import ChapterNav from '../components/ChapterNav';
import ProjectModal from '../components/ProjectModal';
import TypewriterText from '../components/TypewriterText';
import { useLanguage } from '../context/LanguageContext';
import SpiderLilyBackground from '../components/SpiderLilyBackground';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: customDelay,
      ease: [0.25, 0.1, 0.25, 1.0] as const,
    },
  }),
};

export default function Projects() {
  const { language, t } = useLanguage();
  const [selectedPreview, setSelectedPreview] = useState<{
  title: string;
  images: string[];
  techStack?: string[];
  } | null>(null);

  const proyectos = [
    {
      capitulo: language === 'es' ? 'CAPÍTULO I' : 'CHAPTER I',
      titulo:
        language === 'es'
          ? 'Sistema Inteligente de Optimización de Cámaras'
          : 'Intelligent Camera Placement Optimization System',
      tech: 'React • Python • YOLO • REST APIs',
      techStack: ['react', 'python', 'yolo', 'api'],
      descripcion:
        language === 'es'
          ? 'Aplicación web para optimizar la ubicación de cámaras de seguridad en planos arquitectónicos. Integra un modelo de visión por computadora (YOLO) para detectar habitaciones automáticamente y un algoritmo de eficiencia espacial.'
          : 'Web application designed to optimize security camera placement on architectural floor plans. Features a computer vision model (YOLO) to automatically detect rooms and a spatial efficiency algorithm.',
      repo: 'https://github.com/FernandoReyesV2/SPCv3',
      images: [
        '/preview-spc-1.png',
        '/preview-spc-2.png',
        '/preview-spc-3.png',
        '/preview-spc-4.png',
        '/preview-spc-5.png',
        '/preview-spc-6.png',
      ],
    },
    {
      capitulo: language === 'es' ? 'CAPÍTULO II' : 'CHAPTER II',
      titulo:
        language === 'es'
          ? 'Tracker de Entrenamiento'
          : 'Training Tracker',
      tech: 'React • TypeScript • FastAPI (Microservicios) • Tailwind CSS',
      techStack: ['react', 'typescript', 'fastapi', 'tailwind'],
      descripcion:
        language === 'es'
          ? 'Aplicación fullstack de seguimiento de entrenamiento con arquitectura de microservicios en FastAPI. Implementa registro semanal de rendimiento por serie, progresión automática de carga basada en sobrecarga progresiva y un dashboard con gráficas de evolución, volumen por grupo muscular y consistencia.'
          : 'Fullstack training tracking application built with a FastAPI microservices architecture and React frontend. Implements weekly performance logging per set, automated load progression based on progressive overload principles, and a dashboard with evolution charts, muscle volume, and training consistency.',
      repo: 'https://github.com/FernandoReyesV2/workout-tracker-microservices',
      images: [
        '/preview-wtm-1.png',
        '/preview-wtm-2.png',
        '/preview-wtm-3.png',
        '/preview-wtm-4.png',
      ],
    },
    {
      capitulo: language === 'es' ? 'CAPÍTULO III' : 'CHAPTER III',
      titulo:
        language === 'es'
          ? 'Automatización de Datos Institucionales (ARCSA)'
          : 'Institutional Data Automation (ARCSA)',
      tech: 'React • JavaScript • OAuth • Python',
      techStack: ['react', 'python'],
      descripcion:
        language === 'es'
          ? 'Herramienta web desarrollada durante prácticas en ARCSA para automatizar la conversión y transformación de archivos Excel a formatos institucionales, reduciendo tiempos de procesamiento manual e integrando autenticación con Google OAuth.'
          : 'Web tool developed during an internship at ARCSA to automate the conversion and transformation of Excel files into official institutional formats, reducing manual processing time and integrating Google OAuth authentication.',
      repo: null,
      images: [],
    },
    {
      capitulo: language === 'es' ? 'CAPÍTULO IV' : 'CHAPTER IV',
      titulo:
        language === 'es'
          ? 'MuditosBot - Bot de Automatización'
          : 'MuditosBot - Automation Bot',
      tech: 'Node.js • JavaScript • REST APIs',
      techStack: ['nodejs', 'api'],
      descripcion:
        language === 'es'
          ? 'Bot personalizado para Discord enfocado en la automatización de tareas administrativas, gestión de eventos en tiempo real y ejecución de comandos personalizados mediante arquitectura cliente-servidor.'
          : 'Custom Discord bot focused on automating administrative tasks, managing real-time events, and executing custom commands using a client-server architecture.',
      repo: 'https://github.com/FernandoReyesV2/MuditosBot',
      images: [
        '/preview-mbot-1.png',
        '/preview-mbot-2.png',
        '/preview-mbot-3.png',
      ],
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-light text-olive flex flex-col justify-center items-center px-4 py-20 overflow-hidden font-sans">
      <ChapterNav prevPath="/" nextPath="/skills" />

      {/* Grano */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.30] grayscale contrast-125"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Viñeta */}
      <div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.10) 100%)'
        }}
      />

      {/* MARCAS DE AGUA */}
      <SpiderLilyBackground />

      <div key={language} className="relative z-10 max-w-3xl w-full flex flex-col items-center">
        {/* Encabezado de Sección */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono tracking-widest uppercase opacity-70 block mb-2">
            <TypewriterText 
              text={`— ${t('section')} I —`} 
              speed={0.03} 
              delay={0.2} 
              showCursor={false} 
            />
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-olive italic">
            <TypewriterText 
              text={t('titleProjects')} 
              speed={0.035} 
              delay={0.5} 
              showCursor={false} 
            />
          </h2>
        </div>

        {/* Listado de Proyectos */}
        <div className="w-full space-y-16">
          {proyectos.map((proj, idx) => {
            const hasImages = proj.images && proj.images.length > 0;
            const baseDelay = 1.0 + idx * 0.25;

            return (
              <motion.article 
                key={`${proj.capitulo}-${idx}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={baseDelay}
                className="border-b border-olive/30 pb-12 last:border-b-0"
              >
                {/* Contenedor adaptativo: columna en móvil, fila con justify-between en pantallas medianas */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2 font-mono text-xs md:text-sm opacity-70 tracking-widest">
                  <span>
                    <TypewriterText 
                      text={proj.capitulo} 
                      speed={0.02} 
                      delay={baseDelay} 
                      showCursor={false} 
                    />
                  </span>
                  <span className="opacity-80">{proj.tech}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-olive mb-4 italic">
                  <TypewriterText 
                    text={proj.titulo} 
                    speed={0.02} 
                    delay={baseDelay + 0.1} 
                    showCursor={false} 
                  />
                </h3>

                <p className="text-base md:text-lg leading-relaxed text-olive/90 mb-6 font-normal">
                  {proj.descripcion}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm font-mono tracking-widest uppercase">
                  {hasImages && (
                    <button
                      onClick={() => setSelectedPreview({ title: proj.titulo, images: proj.images, techStack: proj.techStack })}
                      className="hover:underline underline-offset-4 transition-all"
                    >
                      [ {language === 'es' ? 'Ver Galería' : 'View Gallery'} ({proj.images.length}) ]
                    </button>
                  )}

                  {hasImages && proj.repo && (
                    <span className="opacity-40">•</span>
                  )}

                  {proj.repo ? (
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4 transition-all"
                    >
                      [ {language === 'es' ? 'Código en GitHub →' : 'GitHub Code →'} ]
                    </a>
                  ) : (
                    <span className="text-xs font-mono tracking-widest uppercase opacity-50">
                      [ {language === 'es' ? 'Proyecto Institucional / Privado' : 'Institutional / Private Project'} ]
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="w-full flex justify-center mt-12"
        >
          <BackToIndex />
        </motion.div>
      </div>

      {/* Modal con carrusel */}
      <ProjectModal
        isOpen={!!selectedPreview}
        onClose={() => setSelectedPreview(null)}
        title={selectedPreview?.title || ''}
        images={selectedPreview?.images || []}
        techStack={selectedPreview?.techStack || []}
      />
    </section>
  );
}