import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  hideCursorOnComplete?: boolean;
}

const sentenceVariants: Variants = {
  hidden: { opacity: 1 },
  visible: (i: { speed: number; delay: number }) => ({
    opacity: 1,
    transition: {
      delayChildren: i.delay,
      staggerChildren: i.speed,
    },
  }),
};

const letterVariants: Variants = {
  hidden: { opacity: 0, display: 'none' },
  visible: {
    opacity: 1,
    display: 'inline-block',
  },
};

export default function TypewriterText({
  text,
  speed = 0.04,
  delay = 0.2,
  className = '',
  showCursor = true,
  hideCursorOnComplete = true,
}: TypewriterTextProps) {
  const [cursorVisible, setCursorVisible] = useState(showCursor);

  // Dividir el texto en palabras conservando espacios naturales
  const words = text.split(' ');

  useEffect(() => {
    if (!showCursor || !hideCursorOnComplete) return;

    const totalDuration = (delay + text.length * speed + 0.4) * 1000;
    const timer = setTimeout(() => {
      setCursorVisible(false);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, [text, speed, delay, showCursor, hideCursorOnComplete]);

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      custom={{ speed, delay }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={`word-${wordIndex}`}
          className="inline-block whitespace-nowrap" // Evita que la palabra se parta a la mitad
        >
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={`char-${wordIndex}-${charIndex}`}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {/* Espacio entre palabras si no es la última palabra */}
          {wordIndex < words.length - 1 && (
            <motion.span variants={letterVariants} className="inline-block">
              {'\u00A0'}
            </motion.span>
          )}
        </span>
      ))}

      {cursorVisible && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: 'linear',
          }}
          className="inline-block ml-1 font-mono font-bold text-olive"
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
}