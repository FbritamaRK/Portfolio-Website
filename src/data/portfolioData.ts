import { Project, SkillColumn, ExperienceItem, SocialLinkItem } from '../types';

export const HERO_DATA = {
  status: '[STATUS: AVAILABLE FOR HIRE]',
  greeting: 'Halo, saya',
  name: 'ALEX PRATAMA',
  bio: 'Full-Stack Web Developer & Software Engineer yang berfokus pada arsitektur web modern, performa tinggi, dan pengalaman pengguna yang intuitif.',
};

export const ABOUT_DATA = {
  sectionNumber: '01',
  title: 'TENTANG SAYA',
  paragraphs: [
    'Saya adalah seorang pengembang perangkat lunak dengan pengalaman lebih dari 5 tahun dalam membangun aplikasi web berbasis cloud, sistem backend berskala besar, serta antarmuka pengguna yang terstruktur dan aksesibel.',
    'Pendekatan rekayasa perangkat lunak saya menitikberatkan pada standar web terbuka, kode semantik yang bersih, efisiensi kinerja, dan arsitektur data yang tangguh untuk mendukung pertumbuhan produk secara berkelanjutan.',
  ],
};

export const SKILLS_DATA: SkillColumn[] = [
  {
    title: 'PENGEMBANGAN FRONTEND',
    skills: [
      'HTML5 & Semantik Web',
      'CSS3, Flexbox & CSS Grid',
      'JavaScript (ES6+) & TypeScript',
      'React.js & Next.js',
      'Aksesibilitas Web (WCAG/ARIA)',
    ],
  },
  {
    title: 'PENGEMBANGAN BACKEND',
    skills: [
      'Node.js & Express',
      'Python & FastAPI',
      'PostgreSQL & Redis',
      'RESTful API & GraphQL',
    ],
  },
  {
    title: 'DEVOPS & PERKAKAS KERJA',
    skills: [
      'Git & GitHub Actions',
      'Docker & Kubernetes',
      'Linux / Shell Scripting',
      'Vite, Webpack & CI/CD',
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-1',
    tag: '#PROJECT-01',
    title: 'Platform Analitik SaaS Cloud',
    description:
      'Dashboard analitik real-time yang memproses jutaan metrik data harian dengan visualisasi interaktif dan sistem pelaporan otomatis.',
    techStack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    demoUrl: 'https://demo.alexpratama.dev/saas-analytics',
    repoUrl: 'https://github.com/alexpratama/saas-cloud-analytics',
    metrics: '99.9% Uptime | <80ms Query Response | 1.2M Event / Hari',
    highlights: [
      'Visualisasi time-series dengan canvas terakselerasi',
      'Sistem cache bertingkat memanfaatkan Redis',
      'Ekspor laporan PDF & spreadsheet instan',
    ],
  },
  {
    id: 'project-2',
    tag: '#PROJECT-02',
    title: 'E-Commerce Engine Berbasis Mikroservis',
    description:
      'Sistem backend perdagangan elektronik performa tinggi dengan pengelolaan keranjang belanja, integrasi payment gateway, dan manajemen inventaris.',
    techStack: ['Node.js', 'Docker', 'Redis', 'PostgreSQL'],
    demoUrl: 'https://demo.alexpratama.dev/microservice-ecommerce',
    repoUrl: 'https://github.com/alexpratama/ecommerce-engine-microservices',
    metrics: '5.000 TPS Benchmark | PCI-DSS Compliant | Zero-Downtime Deployment',
    highlights: [
      'Event-driven architecture dengan Apache Kafka & RabbitMQ',
      'Sistem lock terdistribusi untuk mencegah overselling',
      'Webhook idempotency untuk konsistensi transaksi perbankan',
    ],
  },
  {
    id: 'project-3',
    tag: '#PROJECT-03',
    title: 'Dokumentasi API & Komponen Desain',
    description:
      'Situs portal dokumentasi teknis open-source dengan mesin pencarian cepat terindeks dan sistem playground kode interaktif.',
    techStack: ['HTML5 Semantik', 'Vanilla JS', 'Web Components'],
    demoUrl: 'https://demo.alexpratama.dev/api-docs-system',
    repoUrl: 'https://github.com/alexpratama/api-docs-design-system',
    metrics: 'Lighthouse 100/100 | <15kb Bundle JS | Tanpa dependensi pihak ketiga',
    highlights: [
      'Fuzzy search berbasis Web Worker untuk pencarian sub-millisecond',
      'Web Components terisolasi dengan Shadow DOM',
      'Mendukung mode kontras tinggi dan pembaca layar (screen reader)',
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: 'Januari 2022 - Sekarang',
    periodStyle: 'highlight', // Yellow highlight badge
    role: 'LEAD FULL-STACK ENGINEER',
    company: 'TECH SOLUSI NUSANTARA',
    description:
      'Memimpin tim rekayasa frontend dan backend dalam perancangan arsitektur mikroservis, peningkatan skor performa Core Web Vitals hingga 95+, dan migrasi sistem cloud.',
  },
  {
    period: 'Juli 2019 - Desember 2021',
    periodStyle: 'dark', // Black badge
    role: 'SOFTWARE DEVELOPER',
    company: 'DIGITAL DAYA KREASI',
    description:
      'Membangun antarmuka modular, mengembangkan API gateway terpusat, dan menyederhanakan proses automated deployment dengan Docker.',
  },
  {
    period: 'Agustus 2015 - Juni 2019',
    periodStyle: 'outline', // White badge with black border
    role: 'SARJANA ILMU KOMPUTER (S.KOM)',
    company: 'UNIVERSITAS INDONESIA',
    description:
      'Fokus pada Rekayasa Perangkat Lunak, Algoritma Struktur Data, dan Sistem Terdistribusi. Lulus dengan predikat Sangat Memuaskan.',
  },
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    label: 'GitHub',
    tag: '[EXT]',
    url: 'https://github.com/alexpratama',
    type: 'ext',
  },
  {
    label: 'LinkedIn',
    tag: '[EXT]',
    url: 'https://linkedin.com/in/alexpratama',
    type: 'ext',
  },
  {
    label: 'Twitter / X',
    tag: '[EXT]',
    url: 'https://x.com/alexpratama_dev',
    type: 'ext',
  },
  {
    label: 'Email Langsung',
    tag: '[MAIL]',
    url: 'mailto:alex.pratama@dev.id',
    type: 'mail',
  },
];
