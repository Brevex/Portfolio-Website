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
  title: 'Software Developer',
  bio: 'Desenvolvedor apaixonado por criar soluções elegantes e performáticas.',
  location: 'Brasil',
  email: 'contato@brenobarbosa.dev',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/brenobarbosa',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/brenobarbosa',
      icon: 'linkedin',
    },
  ],
} as const;

export const TECHNOLOGIES: readonly Technology[] = [
  { name: 'Python', icon: 'python', color: '#3776ab' },
  { name: 'Java', icon: 'java', color: '#f7df1e' },
  { name: 'PyTorch', icon: 'pytorch', color: '#f7df1e' },
  { name: 'OpenCV', icon: 'opencv', color: '#f7df1e' },
  { name: 'PostgreSQL', icon: 'postgresql', color: '#4169e1' },
  { name: 'Docker', icon: 'docker', color: '#2496ed' },
  { name: 'Git', icon: 'git', color: '#f05032' },
  { name: 'Linux', icon: 'linux', color: '#fcc624' },
] as const;

export const EXPERIENCES: readonly Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Company',
    companyKey: 'EXPERIENCE.COMPANIES.TECH_COMPANY',
    companyLogo: undefined,
    role: 'Senior Software Developer',
    roleKey: 'EXPERIENCE.ROLES.SENIOR_DEV',
    type: 'full-time',
    startDate: '2022-01',
    endDate: undefined,
    location: 'Remoto',
    locationKey: 'EXPERIENCE.LOCATIONS.REMOTE',
    description: 'Liderança técnica no desenvolvimento de aplicações web escaláveis.',
    descriptionKey: 'EXPERIENCE.DESCRIPTIONS.EXP_1',
    highlights: [
      'Reduziu tempo de build em 40%',
      'Implementou CI/CD pipeline',
      'Mentoria de desenvolvedores',
    ],
    highlightKeys: [
      'EXPERIENCE.HIGHLIGHTS.EXP_1_H1',
      'EXPERIENCE.HIGHLIGHTS.EXP_1_H2',
      'EXPERIENCE.HIGHLIGHTS.EXP_1_H3',
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'exp-2',
    company: 'Startup XYZ',
    companyKey: 'EXPERIENCE.COMPANIES.STARTUP_XYZ',
    companyLogo: undefined,
    role: 'Full Stack Developer',
    roleKey: 'EXPERIENCE.ROLES.FULLSTACK_DEV',
    type: 'full-time',
    startDate: '2020-03',
    endDate: '2021-12',
    location: 'São Paulo, SP',
    locationKey: 'EXPERIENCE.LOCATIONS.SAO_PAULO',
    description: 'Desenvolvimento de plataforma SaaS para gestão empresarial.',
    descriptionKey: 'EXPERIENCE.DESCRIPTIONS.EXP_2',
    highlights: [
      'Sistema de autenticação multi-tenant',
      'Biblioteca de componentes reutilizáveis',
      'Integração com APIs de pagamento',
    ],
    highlightKeys: [
      'EXPERIENCE.HIGHLIGHTS.EXP_2_H1',
      'EXPERIENCE.HIGHLIGHTS.EXP_2_H2',
      'EXPERIENCE.HIGHLIGHTS.EXP_2_H3',
    ],
    technologies: ['Angular', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'exp-3',
    company: 'Agência Digital',
    companyKey: 'EXPERIENCE.COMPANIES.DIGITAL_AGENCY',
    companyLogo: undefined,
    role: 'Frontend Developer',
    roleKey: 'EXPERIENCE.ROLES.FRONTEND_DEV',
    type: 'full-time',
    startDate: '2018-06',
    endDate: '2020-02',
    location: 'Rio de Janeiro, RJ',
    locationKey: 'EXPERIENCE.LOCATIONS.RIO',
    description: 'Desenvolvimento de sites e aplicações web para clientes diversos.',
    descriptionKey: 'EXPERIENCE.DESCRIPTIONS.EXP_3',
    highlights: [
      'Entregou mais de 20 projetos',
      'Implementou acessibilidade WCAG 2.1',
      'Otimização Core Web Vitals',
    ],
    highlightKeys: [
      'EXPERIENCE.HIGHLIGHTS.EXP_3_H1',
      'EXPERIENCE.HIGHLIGHTS.EXP_3_H2',
      'EXPERIENCE.HIGHLIGHTS.EXP_3_H3',
    ],
    technologies: ['JavaScript', 'Angular', 'SCSS', 'WordPress'],
  },
] as const;

export const PROJECTS: readonly Project[] = [
  {
    id: 'proj-1',
    name: 'CLI Forense',
    nameKey: 'PROJECTS.TITLES.PROJ_1',
    description: 'Ferramenta de linha de comando em Rust para análise e recuperação de dados.',
    descriptionKey: 'PROJECTS.DESCRIPTIONS.PROJ_1',
    image: undefined,
    technologies: ['Rust', 'CLI', 'Sistemas'],
    githubUrl: 'https://github.com/brenobarbosa/cli-forense',
    liveUrl: undefined,
    featured: true,
  },
  {
    id: 'proj-2',
    name: 'Dashboard Analytics',
    nameKey: 'PROJECTS.TITLES.PROJ_2',
    description: 'Dashboard em tempo real para visualização de métricas e KPIs.',
    descriptionKey: 'PROJECTS.DESCRIPTIONS.PROJ_2',
    image: undefined,
    technologies: ['Angular', 'TypeScript', 'D3.js', 'WebSocket'],
    githubUrl: 'https://github.com/brenobarbosa/dashboard',
    liveUrl: undefined,
    featured: true,
  },
  {
    id: 'proj-3',
    name: 'API Gateway',
    nameKey: 'PROJECTS.TITLES.PROJ_3',
    description: 'Gateway de API com rate limiting, caching e autenticação JWT.',
    descriptionKey: 'PROJECTS.DESCRIPTIONS.PROJ_3',
    image: undefined,
    technologies: ['Node.js', 'TypeScript', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/brenobarbosa/api-gateway',
    liveUrl: undefined,
    featured: true,
  },
  {
    id: 'proj-4',
    name: 'Design System',
    nameKey: 'PROJECTS.TITLES.PROJ_4',
    description: 'Biblioteca de componentes UI reutilizáveis com Storybook.',
    descriptionKey: 'PROJECTS.DESCRIPTIONS.PROJ_4',
    image: undefined,
    technologies: ['Angular', 'SCSS', 'Storybook', 'Jest'],
    githubUrl: 'https://github.com/brenobarbosa/design-system',
    liveUrl: undefined,
    featured: false,
  },
] as const;

export const EDUCATION: readonly Education[] = [
  {
    id: 'edu-1',
    institution: 'Universidade Federal',
    institutionKey: 'EDUCATION.INSTITUTIONS.FEDERAL_UNIVERSITY',
    institutionLogo: undefined,
    degree: 'Bachelor',
    degreeKey: 'EDUCATION.DEGREES.BACHELOR',
    field: 'Computer Science',
    fieldKey: 'EDUCATION.FIELDS.COMPUTER_SCIENCE',
    startDate: '2016-03',
    endDate: '2020-12',
    location: 'São Paulo, SP',
    locationKey: 'EDUCATION.LOCATIONS.SAO_PAULO',
    description: 'Bacharelado em Ciência da Computação com foco em engenharia de software.',
    descriptionKey: 'EDUCATION.DESCRIPTIONS.EDU_1',
    highlights: [
      'TCC sobre Aprendizado de Máquina',
      'Bolsista de Iniciação Científica',
      'Projeto de extensão em tecnologia assistiva',
    ],
    highlightKeys: [
      'EDUCATION.HIGHLIGHTS.EDU_1_H1',
      'EDUCATION.HIGHLIGHTS.EDU_1_H2',
      'EDUCATION.HIGHLIGHTS.EDU_1_H3',
    ],
  },
  {
    id: 'edu-2',
    institution: 'MIT',
    institutionKey: 'EDUCATION.INSTITUTIONS.MIT',
    institutionLogo: undefined,
    degree: 'Certificate',
    degreeKey: 'EDUCATION.DEGREES.CERTIFICATE',
    field: 'Machine Learning',
    fieldKey: 'EDUCATION.FIELDS.MACHINE_LEARNING',
    startDate: '2021-06',
    endDate: '2021-12',
    location: 'Online',
    locationKey: 'EDUCATION.LOCATIONS.ONLINE',
    description: 'Certificação profissional em Machine Learning e Data Science.',
    descriptionKey: 'EDUCATION.DESCRIPTIONS.EDU_2',
    highlights: ['Deep Learning com TensorFlow', 'Computer Vision aplicado'],
    highlightKeys: ['EDUCATION.HIGHLIGHTS.EDU_2_H1', 'EDUCATION.HIGHLIGHTS.EDU_2_H2'],
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
