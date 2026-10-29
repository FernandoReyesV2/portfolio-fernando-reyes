import { useState, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact,
  SiPython,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiNodedotjs,
} from 'react-icons/si';
import { LuScanEye, LuNetwork } from 'react-icons/lu';

// Mapeo con componentes de react-icons oficiales
const TECH_ICONS: Record<string, { label: string; icon: ReactNode }> = {
  react: {
    label: 'React',
    icon: <SiReact className="w-8 h-8 md:w-14 md:h-14" />,
  },
  python: {
    label: 'Python',
    icon: <SiPython className="w-8 h-8 md:w-14 md:h-14" />,
  },
  typescript: {
    label: 'TypeScript',
    icon: <SiTypescript className="w-8 h-8 md:w-14 md:h-14" />,
  },
  tailwind: {
    label: 'Tailwind CSS',
    icon: <SiTailwindcss className="w-8 h-8 md:w-14 md:h-14" />,
  },
  fastapi: {
    label: 'FastAPI',
    icon: <SiFastapi className="w-8 h-8 md:w-14 md:h-14" />,
  },
  nodejs: {
    label: 'Node.js',
    icon: <SiNodedotjs className="w-8 h-8 md:w-14 md:h-14" />,
  },
  yolo: {
    label: 'YOLO',
    icon: <LuScanEye className="w-8 h-8 md:w-14 md:h-14 stroke-[1.5] " />,
  },
  api: {
    label: 'REST API',
    icon: <LuNetwork className="w-8 h-8 md:w-14 md:h-14 stroke-[1.5]" />,
  },
};

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  techStack?: string[];
}

export default function ProjectModal({ isOpen, onClose, images, techStack = [] }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen, images]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length]);

  return (
    <AnimatePresence>
      {isOpen && images.length > 0 && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 md:p-8">
          {/* Fondo oscuro traslúcido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/90 backdrop-blur-md"
          />

          {/* Botón de cierre (✕) */}
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-olive/20 hover:bg-olive text-light border border-olive/40 transition-all duration-300 font-mono text-xl cursor-pointer"
          >
            ✕
          </button>

          {/* Área principal del visor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center max-w-5xl w-full"
          >
            {/* LOGOS OFICIALES: Sin caja contenedora, con nombre abajo */}
            {techStack.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex items-center justify-center gap-6 md:gap-8 mb-6 select-none"
              >
                {techStack.map((techKey) => {
                  const tech = TECH_ICONS[techKey.toLowerCase()];
                  if (!tech) return null;

                  return (
                    <div
                      key={techKey}
                      className="flex flex-col items-center justify-center text-light hover:text-rose transition-colors group cursor-default"
                    >
                      <div className="transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                        {tech.icon}
                      </div>
                      <span className="text-[10px] md:text-xs font-mono tracking-wider mt-2 opacity-75 group-hover:opacity-100 transition-opacity">
                        {tech.label}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {/* Contenedor de la imagen y flechas */}
            <div className="relative w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Captura ${currentIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="max-h-[70vh] w-auto max-w-full object-contain select-none rounded-lg shadow-2xl border border-olive/20"
                />
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    aria-label="Imagen anterior"
                    className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-olive/30 hover:bg-olive border-none flex items-center justify-center text-light/70 hover:text-light transition-all font-mono text-2xl cursor-pointer"
                  >
                    ‹
                  </button>

                  <button
                    onClick={handleNext}
                    aria-label="Imagen siguiente"
                    className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-olive/30 hover:bg-olive border-none flex items-center justify-center text-light/70 hover:text-light transition-all font-mono text-2xl cursor-pointer"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Contador y Paginación */}
            {images.length > 1 && (
              <div className="flex items-center justify-between w-full max-w-md mt-6 font-mono text-xs tracking-widest text-light">
                <span className="opacity-75">
                  {currentIndex + 1} / {images.length}
                </span>

                <div className="flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Ir a imagen ${idx + 1}`}
                      className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                        idx === currentIndex
                          ? 'w-6 bg-light'
                          : 'w-2 bg-light/30 hover:bg-light/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}