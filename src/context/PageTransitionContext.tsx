import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

export type Direction = 'forward' | 'backward';

interface PageTransitionContextType {
  navigateToChapter: (to: string, direction: Direction) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined);

// Tipado explícito con Variants y 'as const' en las curvas Bézier
const overlayVariants: Variants = {
  initial: (dir: Direction) => ({
    x: dir === 'forward' ? '100%' : '-100%',
    opacity: 0.85,
  }),
  animate: {
    x: '0%',
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.32, 0, 0.24, 1] as const,
    },
  },
  exit: (dir: Direction) => ({
    x: dir === 'forward' ? '-100%' : '100%',
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  }),
};

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<Direction>('forward');

  const navigateToChapter = (to: string, dir: Direction) => {
    if (isTransitioning) return;

    setDirection(dir);
    setIsTransitioning(true);

    setTimeout(() => {
      navigate(to);
      window.scrollTo(0, 0);
    }, 450);
  };

  return (
    <PageTransitionContext.Provider value={{ navigateToChapter }}>
      {children}

      <AnimatePresence onExitComplete={() => setIsTransitioning(false)}>
        {isTransitioning && (
          <motion.div
            key="blur-page-turn"
            custom={direction}
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={(definition) => {
              if (definition === 'animate') {
                setIsTransitioning(false);
              }
            }}
            className="pointer-events-none fixed inset-0 z-9999 backdrop-blur-md bg-light/50 shadow-2xl"
            style={{
              WebkitMaskImage:
                direction === 'forward'
                  ? 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)'
                  : 'linear-gradient(to left, transparent 0%, black 25%, black 75%, transparent 100%)',
              maskImage:
                direction === 'forward'
                  ? 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)'
                  : 'linear-gradient(to left, transparent 0%, black 25%, black 75%, transparent 100%)',
            }}
          />
        )}
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition debe usarse dentro de un PageTransitionProvider');
  }
  return context;
}