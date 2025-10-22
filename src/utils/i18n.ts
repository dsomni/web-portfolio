// src/utils/i18n.ts

// Type definitions
export const languages = {
    en: 'English',
    ru: 'Русский',
} as const;

export type Language = keyof typeof languages;

// Default language
export const defaultLang: Language = 'en';

// Content data structure
export interface LocalizedContent {
    en: any;
    ru: any;
}

// Get content by language
export function getLocalizedContent<T>(content: LocalizedContent, lang: Language): T {
    return content[lang] as T;
}

// Translation keys interface
export interface Translations {

    // Personal
    'personal.name': string;
    'personal.surname': string;
    'personal.fullname': string;
    'personal.specialty': string;

    // Navigation
    'nav.home': string;
    'nav.projects': string;
    'nav.about': string;
    'nav.contact': string;

    // Hero section
    'hero.greeting': string;
    'hero.description': string;
    'hero.cta.primary': string;
    'hero.cta.secondary': string;
    'hero.cta.resume': string;

    // Sections
    'section.about': string;
    'section.experience': string;
    'section.research': string;
    'section.teaching': string;
    'section.projects': string;
    'section.education': string;
    'section.contact': string;
    'section.collaborations': string;

    // Subsections
    'subsection.languages': string;

    // Experience
    'experience.achievements': string;
    'experience.responsibilities': string;
    'experience.supervisor': string;
    'experience.concepts': string;


    // Projects
    "projects.featured": string;
    "projects.achievements": string;

    // Collaborations
    "collaborations.projects": string;


    // Common
    'common.resources': string;
    'common.readMore': string;
    'common.viewProject': string;
    'common.sourceCode': string;
    'common.present': string;
    'common.skills': string;
    'common.stack': string;
    'common.achievements': string;
    'common.responsibilities': string;
    'common.concepts': string;
    'common.supervisor': string;
    'common.co-supervisors': string;
    'common.advisor': string;
    'common.co-advisors': string;
    'common.fieldOfStudy': string;
    'common.relevantCoursework': string;
    'common.thesis': string;
    'common.demo': string;
    'common.website': string;
    'common.github': string;
    'common.link': string;


    // Contacts
    'contacts.emailMe': string;
    'contacts.target': string;

    // Footer
    'footer.rights': string;
    'footer.quickLinks': string;
    'footer.connect': string;

    // Utilities
    "clipboard.copied": string;
}

// Helper function to get language from URL
export function getLangFromUrl(url: URL): Language {
    const [, lang] = url.pathname.split('/');
    if (lang in languages) return lang as Language;
    return defaultLang;
}

// Helper to use translations in components
export function useTranslations(lang: Language) {
    return function t(key: keyof Translations): string {
        return translations[lang][key] || translations[defaultLang][key] || key;
    };
}

// Helper to get localized path
export function getLocalizedPath(path: string, lang: Language): string {
    if (lang === defaultLang) return path;
    return `/${lang}${path}`;
}

// Helper to format dates based on language
export function formatDate(date: Date | string, lang: Language): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    const locale = lang === 'ru' ? 'ru-RU' : 'en-US';

    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
    }).format(d);
}



// All translations
const translations: Record<Language, Translations> = {
    en: {
        'personal.name': 'Dmitry',
        'personal.surname': 'Beresnev',
        'personal.fullname': 'Dmitry Beresnev',
        'personal.specialty': 'ML Engineer & Data Scientist',

        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.about': 'About',
        'nav.contact': 'Contact',

        'hero.greeting': 'Hi, I\'m',
        'hero.description': `MSc student specializing in AI and Data Science with
deep research interest in Mathematical Optimization, LLMs and Deep Reinforcement Learning.
Building state-of-the-art ML solutions.`,
        'hero.cta.primary': 'View Projects',
        'hero.cta.secondary': 'Contact Me',
        'hero.cta.resume': 'Resume',

        'section.about': 'About Me',
        'section.experience': 'Work Experience',
        'section.research': 'Research Experience',
        'section.teaching': 'Teaching Experience',
        'section.projects': 'Projects',
        'section.education': 'Education',
        'section.contact': 'Get In Touch',
        'section.collaborations': 'Collaborations',

        'experience.achievements': 'Achievements',
        'experience.responsibilities': 'Responsibilities',
        'experience.supervisor': 'Supervisor',
        'experience.concepts': 'Concepts',

        "projects.featured": 'Featured',
        "projects.achievements": '✨ Achievements',

        "collaborations.projects": 'Featured projects',

        'subsection.languages': 'Languages',

        'common.resources': 'Resources',
        'common.readMore': 'Read more',
        'common.viewProject': 'View Project',
        'common.sourceCode': 'Source Code',
        'common.present': 'Present',
        'common.skills': 'Skills',
        'common.stack': 'Tech Stack',
        'common.achievements': 'Achievements',
        'common.responsibilities': 'Responsibilities',
        'common.concepts': 'Concepts',
        'common.supervisor': 'Supervisor',
        'common.co-supervisors': 'Co-supervisors',
        'common.advisor': 'Supervisor',
        'common.co-advisors': 'Co-supervisors',
        'common.fieldOfStudy': 'Field of study',
        'common.relevantCoursework': 'Relevant Coursework',
        'common.thesis': 'Thesis',
        'common.demo': 'Demo',
        'common.website': 'Website',
        'common.github': 'GitHub',
        'common.link': 'Link',

        'contacts.emailMe': "Send me an email",
        'contacts.target': "I'm currently seeking interesting R&D opportunities in Machine Learning and AI. Feel free to reach out!",

        'footer.rights': 'All rights reserved',
        'footer.quickLinks': 'Quick Links',
        'footer.connect': 'Connect',

        "clipboard.copied": "Copied!",
    },
    ru: {

        'personal.name': 'Дмитрий',
        'personal.surname': 'Береснев',
        'personal.fullname': 'Dmitry Beresnev',
        'personal.specialty': 'ML-инженер и Data Scientist',

        'nav.home': 'Главная',
        'nav.projects': 'Проекты',
        'nav.about': 'О себе',
        'nav.contact': 'Контакты',

        'hero.greeting': 'Привет, я',

        'hero.description': `Магистр Computer Science, специализирующийся на ИИ и науке о данных
с глубокой исследовательским интересом в математической оптимизации, LLMs и Deep Reinforcement Learning.
Создаю передовые ML-решения.`,
        'hero.cta.primary': 'Проекты',
        'hero.cta.secondary': 'Связаться',
        'hero.cta.resume': 'Резюме',

        'section.about': 'О себе',
        'section.experience': 'Опыт работы',
        'section.research': 'Исследовательский опыт',
        'section.teaching': 'Опыт преподавания',
        'section.projects': 'Проекты',
        'section.education': 'Образование',
        'section.contact': 'Связаться',
        'section.collaborations': 'Коллаборации',

        'subsection.languages': 'Языки',
        'experience.achievements': 'Достижения',
        'experience.responsibilities': 'Обязанности',
        'experience.supervisor': 'Руководитель',
        'experience.concepts': 'Концепции',

        "projects.featured": 'Избранное',
        "projects.achievements": '✨ Достижения',

        "collaborations.projects": 'Избранные проекты',

        'common.resources': 'Ресурсы',
        'common.readMore': 'Подробнее',
        'common.viewProject': 'Смотреть проект',
        'common.sourceCode': 'Исходный код',
        'common.present': 'Настоящее время',
        'common.skills': 'Навыки',
        'common.stack': 'Технологии',
        'common.achievements': 'Достижения',
        'common.responsibilities': 'Обязанности',
        'common.concepts': 'Концепции',
        'common.supervisor': 'Руководитель',
        'common.co-supervisors': 'Со-руководители',
        'common.advisor': 'Научный руководитель',
        'common.co-advisors': 'Со-руководители',
        'common.fieldOfStudy': 'Специализация',
        'common.relevantCoursework': 'Ключевые курсы',
        'common.thesis': 'Дипломная работа',
        'common.demo': 'Демо',
        'common.website': 'Сайт',
        'common.github': 'GitHub',
        'common.link': 'Ссылка',

        'contacts.emailMe': "Написать мне",
        'contacts.target': "В настоящее время ищу интересные R&D возможности в области машинного обучения и ИИ. Буду рад связи!",


        'footer.rights': 'Все права защищены',
        'footer.quickLinks': 'Быстрые ссылки',
        'footer.connect': 'Связаться',

        "clipboard.copied": "Скопировано!",
    },
};

export default translations;
