/**
 * Portfolio Data Layer
 * Strongly typed interfaces and data with translation keys for i18n
 */

// ===== Interfaces =====

export interface Technology {
  readonly name: string;
  readonly icon: string;
  readonly color?: string;
}

export interface SocialLink {
  readonly name: string;
  readonly url: string;
  readonly icon: string;
}

export interface Experience {
  readonly id: string;
  readonly company: string; // Fallback display name
  readonly companyKey: string; // Translation key
  readonly companyLogo?: string;
  readonly role: string; // Fallback
  readonly roleKey: string; // Translation key
  readonly type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  readonly startDate: string;
  readonly endDate?: string;
  readonly location: string; // Fallback
  readonly locationKey: string; // Translation key
  readonly description: string; // Fallback
  readonly descriptionKey: string; // Translation key
  readonly highlights: readonly string[]; // Fallback
  readonly highlightKeys: readonly string[]; // Translation keys
  readonly technologies: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly name: string; // Fallback
  readonly nameKey: string; // Translation key
  readonly description: string; // Fallback
  readonly descriptionKey: string; // Translation key
  readonly image?: string;
  readonly technologies: readonly string[];
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly featured: boolean;
}

export interface Profile {
  readonly name: string;
  readonly title: string;
  readonly bio: string;
  readonly location: string;
  readonly email: string;
  readonly socialLinks: readonly SocialLink[];
}

export interface Education {
  readonly id: string;
  readonly institution: string; // Fallback
  readonly institutionKey: string; // Translation key
  readonly institutionLogo?: string;
  readonly degree: string; // Fallback
  readonly degreeKey: string; // Translation key
  readonly field: string; // Fallback
  readonly fieldKey: string; // Translation key
  readonly startDate: string;
  readonly endDate?: string;
  readonly location: string; // Fallback
  readonly locationKey: string; // Translation key
  readonly description: string; // Fallback
  readonly descriptionKey: string; // Translation key
  readonly highlights: readonly string[]; // Fallback
  readonly highlightKeys: readonly string[]; // Translation keys
}

// ===== Portfolio Data =====

export const PROFILE: Profile = {
  name: 'Breno Barbosa',
  title: 'HERO.TITLE',
  bio: 'HERO.BIO',
  location: 'Brasil',
  email: 'brenob99@protonmail.com',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/Brevex',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/breno-barbosa-de-oliveira-810866275/',
      icon: 'linkedin',
    },
  ],
} as const;

export const TECHNOLOGIES: readonly Technology[] = [
  { name: 'Python', icon: 'python', color: '#3776ab' },
  { name: 'Java', icon: 'java', color: '#f7df1e' },
  { name: 'Spring', icon: 'springboot', color: '#f7df1e' },
  { name: 'PyTorch', icon: 'pytorch', color: '#f7df1e' },
  { name: 'OpenCV', icon: 'opencv', color: '#f7df1e' },
  { name: 'PostgreSQL', icon: 'postgresql', color: '#4169e1' },
  { name: 'Docker', icon: 'docker', color: '#2496ed' },
  { name: 'Git', icon: 'git', color: '#f05032' },
  { name: 'Linux', icon: 'linux', color: '#fcc624' },
] as const;

// Map for fast lookup of technologies by name (used in Hero)
export const TECHNOLOGY_MAP: ReadonlyMap<string, Technology> = new Map(
  TECHNOLOGIES.map((tech) => [tech.name, tech]),
);

// All available tech icons (for Experience/Project badges)
// This includes all technologies that have icon assets available
export const ALL_TECH_ICONS: ReadonlyMap<string, string> = new Map([
  ['Python', 'python'],
  ['Java', 'java'],
  ['Spring', 'springboot'],
  ['PyTorch', 'pytorch'],
  ['OpenCV', 'opencv'],
  ['PostgreSQL', 'postgresql'],
  ['Docker', 'docker'],
  ['Git', 'git'],
  ['Linux', 'linux'],
  ['Rust', 'rust'],
  ['Angular', 'angular'],
  ['YOLO', 'yolo'],
]);

export const EXPERIENCES: readonly Experience[] = [
  {
    id: 'exp-3',
    company: 'EXPERIENCE.COMPANIES.DELL',
    companyKey: 'EXPERIENCE.COMPANIES.DELL',
    companyLogo: 'assets/logos/imd.png',
    role: 'EXPERIENCE.ROLES.BACKEND_DEV',
    roleKey: 'EXPERIENCE.ROLES.BACKEND_DEV',
    type: 'full-time',
    startDate: '2025/12',
    endDate: undefined,
    location: 'EXPERIENCE.LOCATIONS.REMOTE',
    locationKey: 'EXPERIENCE.LOCATIONS.REMOTE',
    description: 'EXPERIENCE.DESCRIPTIONS.EXP_3',
    descriptionKey: 'EXPERIENCE.DESCRIPTIONS.EXP_3',
    highlights: ['EXPERIENCE.HIGHLIGHTS.EXP_3_H1'],
    highlightKeys: ['EXPERIENCE.HIGHLIGHTS.EXP_3_H1'],
    technologies: ['Java', 'Spring', 'Angular', 'PostgreSQL', 'Docker', 'Git'],
  },
  {
    id: 'exp-2',
    company: 'EXPERIENCE.COMPANIES.GUARARAPES',
    companyKey: 'EXPERIENCE.COMPANIES.GUARARAPES',
    companyLogo: 'assets/logos/imd.png',
    role: 'EXPERIENCE.ROLES.IA_DEV',
    roleKey: 'EXPERIENCE.ROLES.IA_DEV',
    type: 'full-time',
    startDate: '2025/01',
    endDate: 'EXPERIENCE.CURRENT',
    location: 'EXPERIENCE.LOCATIONS.NATAL',
    locationKey: 'EXPERIENCE.LOCATIONS.NATAL',
    description: 'EXPERIENCE.DESCRIPTIONS.EXP_2',
    descriptionKey: 'EXPERIENCE.DESCRIPTIONS.EXP_2',
    highlights: [
      'EXPERIENCE.HIGHLIGHTS.EXP_2_H1',
      'EXPERIENCE.HIGHLIGHTS.EXP_2_H2',
      'EXPERIENCE.HIGHLIGHTS.EXP_2_H3',
    ],
    highlightKeys: [
      'EXPERIENCE.HIGHLIGHTS.EXP_2_H1',
      'EXPERIENCE.HIGHLIGHTS.EXP_2_H2',
      'EXPERIENCE.HIGHLIGHTS.EXP_2_H3',
    ],
    technologies: ['Python', 'PyTorch', 'OpenCV', 'YOLO', 'Docker', 'Git'],
  },
  {
    id: 'exp-1',
    company: 'EXPERIENCE.COMPANIES.ICE',
    companyKey: 'EXPERIENCE.COMPANIES.ICE',
    companyLogo: 'assets/logos/Instituto_do_cerebro.png',
    role: 'EXPERIENCE.ROLES.IA_DEV',
    roleKey: 'EXPERIENCE.ROLES.IA_DEV',
    type: 'part-time',
    startDate: '2024/07',
    endDate: '2025/01',
    location: 'EXPERIENCE.LOCATIONS.NATAL',
    locationKey: 'EXPERIENCE.LOCATIONS.NATAL',
    description: 'EXPERIENCE.DESCRIPTIONS.EXP_1',
    descriptionKey: 'EXPERIENCE.DESCRIPTIONS.EXP_1',
    highlights: [
      'EXPERIENCE.HIGHLIGHTS.EXP_1_H1',
      'EXPERIENCE.HIGHLIGHTS.EXP_1_H2',
      'EXPERIENCE.HIGHLIGHTS.EXP_1_H3',
    ],
    highlightKeys: [
      'EXPERIENCE.HIGHLIGHTS.EXP_1_H1',
      'EXPERIENCE.HIGHLIGHTS.EXP_1_H2',
      'EXPERIENCE.HIGHLIGHTS.EXP_1_H3',
    ],
    technologies: ['Python', 'PyTorch', 'Java', 'Spring', 'PostgreSQL', 'Docker', 'Git'],
  },
] as const;

export const EDUCATION: readonly Education[] = [
  {
    id: 'edu-2',
    institution: 'EDUCATION.INSTITUTIONS.FEDERAL_UNIVERSITY',
    institutionKey: 'EDUCATION.INSTITUTIONS.FEDERAL_UNIVERSITY',
    institutionLogo: 'assets/logos/ufrn.png',
    degree: 'EDUCATION.DEGREES.BACHELOR',
    degreeKey: 'EDUCATION.DEGREES.BACHELOR',
    field: 'EDUCATION.FIELDS.COMPUTER_SCIENCE',
    fieldKey: 'EDUCATION.FIELDS.COMPUTER_SCIENCE',
    startDate: '2025/08',
    endDate: 'EXPERIENCE.CURRENT',
    location: 'EDUCATION.LOCATIONS.NATAL',
    locationKey: 'EDUCATION.LOCATIONS.NATAL',
    description: 'EDUCATION.DESCRIPTIONS.EDU_2',
    descriptionKey: 'EDUCATION.DESCRIPTIONS.EDU_2',
    highlights: ['EDUCATION.HIGHLIGHTS.EDU_2_H1', 'EDUCATION.HIGHLIGHTS.EDU_2_H2'],
    highlightKeys: ['EDUCATION.HIGHLIGHTS.EDU_2_H1', 'EDUCATION.HIGHLIGHTS.EDU_2_H2'],
  },
  {
    id: 'edu-1',
    institution: 'EDUCATION.INSTITUTIONS.FEDERAL_UNIVERSITY',
    institutionKey: 'EDUCATION.INSTITUTIONS.FEDERAL_UNIVERSITY',
    institutionLogo: 'assets/logos/ufrn.png',
    degree: 'EDUCATION.DEGREES.BACHELOR',
    degreeKey: 'EDUCATION.DEGREES.BACHELOR',
    field: 'EDUCATION.FIELDS.IT',
    fieldKey: 'EDUCATION.FIELDS.IT',
    startDate: '2022/03',
    endDate: '2025/07',
    location: 'EDUCATION.LOCATIONS.NATAL',
    locationKey: 'EDUCATION.LOCATIONS.NATAL',
    description: 'EDUCATION.DESCRIPTIONS.EDU_1',
    descriptionKey: 'EDUCATION.DESCRIPTIONS.EDU_1',
    highlights: ['EDUCATION.HIGHLIGHTS.EDU_1_H1', 'EDUCATION.HIGHLIGHTS.EDU_1_H2'],
    highlightKeys: ['EDUCATION.HIGHLIGHTS.EDU_1_H1', 'EDUCATION.HIGHLIGHTS.EDU_1_H2'],
  },
] as const;

export const PROJECTS: readonly Project[] = [
  {
    id: 'proj-1',
    name: 'PROJECTS.TITLES.PROJ_1',
    nameKey: 'PROJECTS.TITLES.PROJ_1',
    description: 'PROJECTS.DESCRIPTIONS.PROJ_1',
    descriptionKey: 'PROJECTS.DESCRIPTIONS.PROJ_1',
    image: undefined,
    technologies: ['Rust', 'CLI', 'Low Level', 'Memory Management'],
    githubUrl: 'https://github.com/Brevex/Argos.git',
    liveUrl: undefined,
    featured: true,
  },
  {
    id: 'proj-2',
    name: 'PROJECTS.TITLES.PROJ_2',
    nameKey: 'PROJECTS.TITLES.PROJ_2',
    description: 'PROJECTS.DESCRIPTIONS.PROJ_2',
    descriptionKey: 'PROJECTS.DESCRIPTIONS.PROJ_2',
    image: undefined,
    technologies: ['Python', 'FastAPI', 'LLM', 'RAG', 'Docker'],
    githubUrl: 'https://github.com/Brevex/PaintMatch-AI.git',
    liveUrl: undefined,
    featured: true,
  },
  {
    id: 'proj-3',
    name: 'PROJECTS.TITLES.PROJ_3',
    nameKey: 'PROJECTS.TITLES.PROJ_3',
    description: 'PROJECTS.DESCRIPTIONS.PROJ_3',
    descriptionKey: 'PROJECTS.DESCRIPTIONS.PROJ_3',
    image: undefined,
    technologies: ['C++', 'ESP32', 'MQTT', 'IoT'],
    githubUrl: 'https://github.com/Brevex/Smart-Parking-System.git',
    liveUrl: undefined,
    featured: true,
  },
] as const;

// ===== Helper Functions =====

export function formatDateRange(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const startStr = start.toLocaleDateString('pt-BR', {
    month: 'short',
    year: 'numeric',
  });

  if (!endDate) {
    return `${startStr} - Presente`;
  }

  const end = new Date(endDate);
  const endStr = end.toLocaleDateString('pt-BR', {
    month: 'short',
    year: 'numeric',
  });

  return `${startStr} - ${endStr}`;
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}
