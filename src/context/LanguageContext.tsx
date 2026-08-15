import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // General
    role: 'Desarrollador Frontend Junior | Ingeniero de Software',
    backToIndex: '↑ Volver al Índice',
    section: 'SECCIÓN',
    chapter: 'CAPÍTULO',
    
    // Index
    indexTitle: 'ÍNDICE',
    navProjects: 'Proyectos Destacados',
    navSkills: 'Habilidades Técnicas',
    navExperience: 'Experiencia y Estudios',
    navContact: 'Contacto',

    // Titles
    titleProjects: 'Proyectos Destacados',
    titleSkills: 'Habilidades Técnicas',
    titleExperience: 'Experiencia y Estudios',
    titleContact: 'Contacto',

    // Contact
    contactDesc: 'Disponible para oportunidades laborales en desarrollo frontend, proyectos web o soporte técnico.',
    emailLabel: 'CORREO ELECTRÓNICO',
    phoneLabel: 'TELÉFONO / WHATSAPP',
    locationLabel: 'UBICACIÓN',
  },
  en: {
    // General
    role: 'Junior Frontend Developer | Software Engineer',
    backToIndex: '↑ Back to Index',
    section: 'SECTION',
    chapter: 'CHAPTER',

    // Index
    indexTitle: 'INDEX',
    navProjects: 'Featured Projects',
    navSkills: 'Technical Skills',
    navExperience: 'Experience & Education',
    navContact: 'Contact',

    // Titles
    titleProjects: 'Featured Projects',
    titleSkills: 'Technical Skills',
    titleExperience: 'Experience & Education',
    titleContact: 'Contact',

    // Contact
    contactDesc: 'Available for job opportunities in frontend development, web projects, or IT support.',
    emailLabel: 'EMAIL ADDRESS',
    phoneLabel: 'PHONE / WHATSAPP',
    locationLabel: 'LOCATION',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
}