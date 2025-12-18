/**
 * Portfolio Data Layer
 * Strongly typed interfaces and mock data for all sections
 */

// ===== Interfaces =====

export interface Technology {
  readonly name: string;
  readonly icon: string; // SVG path or icon name
  readonly color?: string;
}

export interface SocialLink {
  readonly name: string;
  readonly url: string;
  readonly icon: string;
}

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly companyLogo?: string;
  readonly role: string;
  readonly type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  readonly startDate: string;
  readonly endDate?: string; // undefined = current
  readonly location: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly description: string;
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

// ===== Portfolio Data =====

export const PROFILE: Profile = {
  name: 'Breno Barbosa',
  title: 'Software Developer',
  bio: 'Desenvolvedor apaixonado por criar soluções elegantes e performáticas. Especialista em aplicações web modernas com foco em experiência do usuário.',
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
  { name: 'Angular', icon: 'angular', color: '#dd0031' },
  { name: 'TypeScript', icon: 'typescript', color: '#3178c6' },
  { name: 'JavaScript', icon: 'javascript', color: '#f7df1e' },
  { name: 'Python', icon: 'python', color: '#3776ab' },
  { name: 'Rust', icon: 'rust', color: '#dea584' },
  { name: 'Node.js', icon: 'nodejs', color: '#339933' },
  { name: 'PostgreSQL', icon: 'postgresql', color: '#4169e1' },
  { name: 'Docker', icon: 'docker', color: '#2496ed' },
  { name: 'Git', icon: 'git', color: '#f05032' },
  { name: 'Linux', icon: 'linux', color: '#fcc624' },
] as const;

export const EXPERIENCES: readonly Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Company',
    companyLogo: undefined,
    role: 'Senior Software Developer',
    type: 'full-time',
    startDate: '2022-01',
    endDate: undefined,
    location: 'Remoto',
    description:
      'Liderança técnica no desenvolvimento de aplicações web escaláveis utilizando Angular e Node.js. Responsável pela arquitetura de micro-frontends e implementação de práticas DevOps.',
    highlights: [
      'Reduziu tempo de build em 40% com otimizações de bundling',
      'Implementou CI/CD pipeline com GitHub Actions',
      'Mentoria de desenvolvedores júnior',
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'exp-2',
    company: 'Startup XYZ',
    companyLogo: undefined,
    role: 'Full Stack Developer',
    type: 'full-time',
    startDate: '2020-03',
    endDate: '2021-12',
    location: 'São Paulo, SP',
    description:
      'Desenvolvimento de plataforma SaaS para gestão empresarial. Stack completa com Angular no frontend e Python/FastAPI no backend.',
    highlights: [
      'Desenvolveu sistema de autenticação multi-tenant',
      'Criou biblioteca de componentes reutilizáveis',
      'Integração com APIs de pagamento',
    ],
    technologies: ['Angular', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'exp-3',
    company: 'Agência Digital',
    companyLogo: undefined,
    role: 'Frontend Developer',
    type: 'full-time',
    startDate: '2018-06',
    endDate: '2020-02',
    location: 'Rio de Janeiro, RJ',
    description:
      'Desenvolvimento de sites e aplicações web para clientes diversos. Foco em performance, acessibilidade e SEO.',
    highlights: [
      'Entregou mais de 20 projetos para clientes',
      'Implementou práticas de acessibilidade WCAG 2.1',
      'Otimização Core Web Vitals',
    ],
    technologies: ['JavaScript', 'Angular', 'SCSS', 'WordPress'],
  },
] as const;

export const PROJECTS: readonly Project[] = [
  {
    id: 'proj-1',
    name: 'CLI Forense',
    description:
      'Ferramenta de linha de comando em Rust para análise e recuperação de dados em sistemas de arquivos. Suporte a múltiplos formatos e otimizada para performance.',
    image: undefined,
    technologies: ['Rust', 'CLI', 'Sistemas'],
    githubUrl: 'https://github.com/brenobarbosa/cli-forense',
    liveUrl: undefined,
    featured: true,
  },
  {
    id: 'proj-2',
    name: 'Dashboard Analytics',
    description:
      'Dashboard em tempo real para visualização de métricas e KPIs. Construído com Angular e WebSockets para atualizações instantâneas.',
    image: undefined,
    technologies: ['Angular', 'TypeScript', 'D3.js', 'WebSocket'],
    githubUrl: 'https://github.com/brenobarbosa/dashboard',
    liveUrl: undefined,
    featured: true,
  },
  {
    id: 'proj-3',
    name: 'API Gateway',
    description:
      'Gateway de API com rate limiting, caching e autenticação JWT. Desenvolvido em Node.js com foco em alta disponibilidade.',
    image: undefined,
    technologies: ['Node.js', 'TypeScript', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/brenobarbosa/api-gateway',
    liveUrl: undefined,
    featured: true,
  },
  {
    id: 'proj-4',
    name: 'Design System',
    description:
      'Biblioteca de componentes UI reutilizáveis com documentação Storybook e testes automatizados.',
    image: undefined,
    technologies: ['Angular', 'SCSS', 'Storybook', 'Jest'],
    githubUrl: 'https://github.com/brenobarbosa/design-system',
    liveUrl: undefined,
    featured: false,
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
