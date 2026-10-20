import { Project, SkillColumn, ExperienceItem, CertificationItem, SocialLinkItem } from '../types';

export const HERO_DATA = {
  status: '[STATUS: AVAILABLE FOR HIRE & COLLABORATION]',
  greeting: 'Halo, saya',
  name: 'FEBRITAMA RAKA QUALITA AKHSANA',
  role: 'Full-Stack Web Developer',
  specialization: 'UI/UX Design & Web Accessibility Specialist (WCAG 2.2 Level AA)',
  bio: 'Lulusan Informatika Universitas Islam Indonesia berpengalaman teknis lintas platform dalam pengembangan Full-Stack Web, aplikasi Mobile, dan Game interaktif. Berfokus pada inovasi digital inklusif melalui integrasi desain UI/UX dan standar aksesibilitas internasional (WCAG 2.2 Level AA).',
  location: 'Sleman, D.I. Yogyakarta 55584',
  email: 'febriraka34@gmail.com',
  phone: '+62 881 2625 922',
  linkedin: 'https://linkedin.com/in/febritamaark/',
  github: 'https://github.com/FbritamaRK',
  cvDriveUrl: 'https://drive.google.com/drive/folders/12zl4iqQ76i23wDoYTdYwzo-exFyT6SC9?usp=drive_link', // Ganti dengan URL berkas Google Drive CV Anda
};

export const ABOUT_DATA = {
  sectionNumber: '01',
  title: 'TENTANG SAYA',
  paragraphs: [
    'Lulusan Informatika dari Universitas Islam Indonesia (IPK 3.70 / 4.00, Cum Laude) dengan pengalaman teknis lintas platform dalam pengembangan Full-Stack Web, aplikasi Mobile, dan Game interaktif.',
    'Berfokus pada penciptaan inovasi digital yang inklusif melalui integrasi desain UI/UX dan standar aksesibilitas internasional Web Content Accessibility Guidelines (WCAG) 2.2 Level AA, memastikan seluruh platform ramah bagi seluruh kalangan termasuk penyandang disabilitas.',
    'Memiliki visi yang berorientasi ke depan untuk menggabungkan pendekatan human-centered dengan teknologi mutakhir, bertujuan merancang dan mengembangkan solusi perangkat lunak yang fungsional, adaptif, dan memberikan nilai tambah jangka panjang bagi industri teknologi.',
  ],
};

export const SKILLS_DATA: SkillColumn[] = [
  {
    title: 'WEB & AKSESIBILITAS',
    skills: [
      'Web Design & Prototyping',
      'HTML5 Semantik & CSS3',
      'JavaScript (ES6+) & TypeScript',
      'WCAG 2.2 Level AA Compliance',
      'Usability Testing & Accessibility Audit',
    ],
  },
  {
    title: 'MOBILE & GAME DEV',
    skills: [
      'Android Development (Kotlin)',
      'MVVM & Clean Architecture',
      'Game Engine (Unity)',
      'C# Programming',
      'AI Pathfinding & Game Mechanics',
    ],
  },
  {
    title: 'SOFTWARE & TOOLS',
    skills: [
      'Figma (UI/UX & Prototyping)',
      'Microsoft Office Suite (Word, Excel, PPT)',
      'Git & Version Control',
      'Performance Optimization & Testing',
      'Information Architecture',
    ],
  },
  {
    title: 'SOFT SKILLS & BAHASA',
    skills: [
      'Human-Centered Design',
      'Analytical Thinking & Problem Solving',
      'Teamwork & Communication',
      'Responsibility & Discipline',
      'Bahasa Indonesia (Native)',
      'English (Upper-Intermediate, CEPT: 559)',
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-dpmptsp',
    tag: '#PROYEK-01',
    title: 'DPMPTSP v2 Kab. Gunungkidul',
    subtitle: 'Academic Project - Tugas Akhir S1 (Sept 2025 - July 2026)',
    description:
      'Perancangan ulang antarmuka pengguna (UI/UX) dan restrukturisasi arsitektur informasi situs resmi DPMPTSP Kabupaten Gunungkidul sebagai Proyek Tugas Akhir S1 berbasis standar aksesibilitas internasional.',
    techStack: ['UI/UX Design', 'WCAG 2.2 Level AA', 'Web Development', 'Information Architecture', 'Usability Testing'],
    demoUrl: 'https://dpmptspproto.vercel.app/',
    repoUrl: 'https://github.com/FbritamaRK',
    metrics: 'WCAG 2.2 Level AA Standard | Tugas Akhir S1 | Cum Laude GPA 3.70',
    highlights: [
      'Merancang ulang antarmuka pengguna (UI/UX) dan struktur informasi situs resmi DPMPTSP Kabupaten Gunungkidul',
      'Mengimplementasikan standar internasional Web Content Accessibility Guidelines (WCAG) 2.2 Level AA agar inklusif bagi penyandang disabilitas',
      'Memperbaiki sistem navigasi guna mempermudah masyarakat dalam mengakses informasi perizinan dan investasi secara transparan',
    ],
    archTree: `├── ui-ux-design/
│   ├── figma-wireframes/
│   ├── design-system-tokens/
│   └── user-flow-perizinan/
├── accessibility-audit/
│   ├── wcag-2.2-aa-checklist.xlsx
│   ├── screen-reader-tests (NVDA/JAWS)
│   └── color-contrast-ratios (>= 4.5:1)
├── web-implementation/
│   ├── semantic-html5-templates/
│   ├── aria-live-announcements/
│   └── responsive-navigation/
└── usability-evaluation/
    └── testing-reports/`,
    archDescription:
      'Penerapan metodologi Human-Centered Design dengan pemetaan alur pengguna yang inklusif, validasi kontras warna WCAG 2.2 Level AA, keyboard navigability penuh, dan pengujian kegunaan bagi pengguna publik.',
  },
  {
    id: 'project-mangrove-bleberan',
    tag: '#PROYEK-02',
    title: 'Platform Ekowisata Mangrove Bleberan',
    subtitle: 'Organizational & Community Service - Kulon Progo (Jan 2026 - Mar 2026)',
    description:
      'Platform web pusat informasi serta edukasi publik untuk Dusun Bleberan, Kulon Progo, guna mendukung potensi ekowisata dan konservasi hutan mangrove secara berkelanjutan.',
    techStack: ['Full-Stack Web', 'JavaScript', 'HTML5 & CSS3', 'UI/UX Design', 'Community Collab'],
    demoUrl: 'https://pesonableberan.vercel.app/',
    repoUrl: 'https://github.com/FbritamaRK',
    metrics: 'Pusat Edukasi Publik | Konservasi Mangrove | Kolaborasi Komunitas KKN',
    highlights: [
      'Merancang dan menguji platform web pusat informasi serta edukasi publik untuk Dusun Bleberan, Kulon Progo',
      'Membangun antarmuka yang ramah pengguna (user-friendly) untuk menyajikan dokumentasi lingkungan dan informasi ekologis',
      'Berkolaborasi erat dengan komunitas lokal dan tim KKN untuk menjembatani komunikasi antara wisatawan, peneliti, dan warga setempat',
    ],
    archTree: `├── client/
│   ├── components/
│   │   ├── EcoTourGallery/
│   │   ├── MangroveEducation/
│   │   └── VisitorInformation/
│   └── styles/
│       └── responsive-theme.css
├── server/
│   ├── controllers/contentController.js
│   └── routes/apiRoutes.js
├── content-assets/
│   ├── environmental-docs/
│   └── ecotourism-maps/
└── docs/
    └── kkn-community-report.pdf`,
    archDescription:
      'Arsitektur web berbasis modul konten yang ringan dan responsif, dioptimalkan untuk akses cepat masyarakat pedesaan maupun wisatawan menggunakan koneksi internet mobile.',
  },
  {
    id: 'project-kraeplin-simulator',
    tag: '#PROYEK-03',
    title: 'Kraepelin & Pauli Simulator',
    subtitle: 'Web Application - Interactive Psychological Assessment (2026)',
    description:
      'Aplikasi simulator psikotes interaktif untuk Tes Kraepelin dan Tes Pauli (Tes Koran / Hitungan Cepat) berbasis web yang dirancang untuk persiapan ujian asesmen seleksi kerja profesional (BUMN, Perbankan, Swasta, CPNS). Dilengkapi sistem auto-timer 15 detik/lajur, audio synthesizer sinyal lonceng "PINDAH LAJUR!", serta directional adaptive auto-scroll.',
    techStack: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'Web Audio API', 'Adaptive Auto-Scroll', 'Performance Metrics'],
    demoUrl: 'https://kraeplinpaulisimulator.vercel.app',
    repoUrl: 'https://github.com/FbritamaRK/Kraeplin-Simulator',
    metrics: 'Web Audio Synthesizer | Adaptive Auto-Scroll | Standar Asesmen 50 Lajur @ 15s',
    highlights: [
      'Mengembangkan simulator web interaktif untuk Tes Kraepelin (bawah ke atas) dan Tes Pauli (atas ke bawah) sesuai standar asesmen psikologi kerja profesional',
      'Mengimplementasikan sistem pewaktuan otomatis (15 detik/lajur) dengan sintesis suara lonceng "PINDAH LAJUR!" dan beep warning berbasis Web Audio API',
      'Merancang directional adaptive auto-scroll dan focus tracking mulus yang mendukung kontrol keyboard PC numpad maupun mobile keyboard',
      'Mengkalkulasi metrik evaluasi kecepatan, grafik ketelitian, dan analisis ritme stabilitas konsentrasi secara real-time',
    ],
    archTree: `├── index.html                # Konfigurasi simulasi, instruksi pengerjaan, & mode lajur
├── playKraep.html            # Antarmuka simulasi pengerjaan Kraepelin & Pauli
├── styles.css                # Sistem layout grid lajur, tipografi, & visual alerts
├── app.js                    # State machine ujian, Web Audio API chime, timer lajur, & skor
└── README.md                 # Dokumentasi komprehensif panduan psikotes & fitur aplikasi`,
    archDescription:
      'Arsitektur web client-side murni (Vanilla JS, HTML5, CSS3) tanpa dependensi eksternal untuk menjamin zero-latency input dan manipulasi DOM instan saat perpindahan lajur angka cepat.',
  },
  {
    id: 'project-intelligence-test',
    tag: '#PROYEK-04',
    title: 'Simulasi Tes Ketelitian Data (Clerical Test)',
    subtitle: 'Web Application - Interactive Psychological Assessment (2026)',
    description:
      'Aplikasi simulasi tes ketelitian data interaktif (Clerical Aptitude & Accuracy Test) berbasis web yang dirancang khusus untuk persiapan menghadapi psikotes seleksi lowongan pekerjaan di BUMN, Perbankan (Bank BCA, Mandiri, BNI, BRI), CPNS / Kementerian, serta Perusahaan Swasta & Multinasional. Menguji kecepatan reaksi mata, konsentrasi fokus, dan ketelitian membandingkan dua blok data dalam batas waktu presisi sub-detik.',
    techStack: [
      'JavaScript (ES6+)',
      'HTML5 & CSS3',
      'Web Audio API',
      'Vite',
      'Keyboard & Touch Engine',
      'Diff Highlighting Engine',
    ],
    demoUrl: 'https://intelligence-test-eosin.vercel.app/',
    repoUrl: 'https://github.com/FbritamaRK/Intelligence-Test',
    metrics: 'Web Audio Synthesizer | Timer Presisi 1-30s | Subtle Diff Trap Generator & Error Highlighting',
    highlights: [
      'Mengembangkan simulator tes ketelitian data (Clerical Aptitude) dengan 5 kategori data: Angka (0-9), Alfanumerik, Huruf Acak, Nama/Instansi, dan Campuran',
      'Merancang sistem pewaktuan fleksibel (1.0 - 30.0 detik/soal) dengan progress bar visual dinamis dan peringatan waktu kritis',
      'Mengimplementasikan generator jebakan psikotes realistis (transposition urutan angka, lookalike pairs seperti 3 vs 8, O vs 0, B vs 8)',
      'Menyediakan sound effects synthesizer prosedural berbasis Web Audio API (tanpa aset audio eksternal) dengan kontrol toggle suara',
      'Fitur evaluasi mendalam: kalkulasi akurasi (%), grade ketelitian psikotes, kecepatan respon, visualisasi diff error highlight warna merah, dan mode "Ulangi yang Salah"',
      'Mendukung kontrol ganda: pintasan keyboard penuh (Spasi/Enter, 1/S, 2/T) untuk PC serta tombol sentuh responsif untuk latihan di smartphone/tablet',
    ],
    archTree: `├── index.html                # Single Page App layout, panel quick-config, view-home & view-simulation
├── style.css                 # Desain antarmuka responsif, typography JetBrains Mono, & alert styling
├── app.js                    # SoundEffects (Web Audio API), RealDataPool generator, test engine, & diff review
├── vite.config.js            # Konfigurasi dev server & build Vite (port 8080 host enabled)
├── start.bat                 # One-click launcher untuk Windows & akses Wi-Fi LAN
├── package.json              # Konfigurasi project & npm scripts
└── README.md                 # Dokumentasi lengkap simulasi, panduan pengerjaan, & pintasan keyboard`,
    archDescription:
      'Arsitektur web client-side murni berbasis Vanilla JavaScript dan HTML5/CSS3 yang dioptimalkan untuk zero-latency input. Menggabungkan sintesis audio prosedural via Web Audio API, generator permutasi jebakan psikotes dinamis, serta diff highlighting otomatis untuk analisis evaluasi visual instan.',
  },
  {
    id: 'project-fight-for-castle',
    tag: '#PROYEK-05',
    title: "Fight for Castle: The Queen's Guard",
    subtitle: 'Game Dev Team Project - Hexa (Sep 2024 - Jan 2025)',
    description:
      'Game strategi taktis bertema pertahanan istana yang dikembangkan menggunakan game engine Unity dan bahasa C#, mengintegrasikan sistem pertahanan dinamis dan AI pathfinding musuh.',
    techStack: ['Unity Engine', 'C#', 'Game AI / Pathfinding', 'Defense System', 'Game UI/UX'],
    demoUrl: 'https://github.com/FbritamaRK',
    repoUrl: 'https://github.com/FbritamaRK',
    metrics: 'Unity Engine | Algoritma Pathfinding AI | Real-time Defense Mechanics',
    highlights: [
      'Berkonsentrasi dalam pengembangan game strategi "Fight for Castle: The Queen\'s Guard" menggunakan Unity & C#',
      'Membangun mekanika gameplay, sistem pertahanan (defense system), dan algoritma logika pergerakan musuh (pathfinding/AI)',
      'Merancang dan mengimplementasikan antarmuka pengguna (UI) intuitif untuk kenyamanan dan pengalaman bermain pengguna (UX)',
    ],
    archTree: `├── Assets/
│   ├── Scripts/
│   │   ├── AI/
│   │   │   ├── EnemyPathfinding.cs
│   │   │   └── EnemyStateMachine.cs
│   │   ├── Gameplay/
│   │   │   ├── DefenseSystem.cs
│   │   │   ├── CastleHealthManager.cs
│   │   │   └── WaveSpawner.cs
│   │   └── UI/
│   │       ├── HUDController.cs
│   │       └── MenuNavigation.cs
│   ├── Prefabs/
│   │   ├── Units/
│   │   └── Towers/
│   └── Scenes/
│       ├── MainMenu.unity
│       └── BattleStage.unity`,
    archDescription:
      'Arsitektur berorientasi objek dalam Unity dengan pemisahan modul AI pathfinding berbasis grid, state machine musuh, dan controller pertahanan istana yang sinkron.',
  },
  {
    id: 'project-recyclearn',
    tag: '#PROYEK-06',
    title: 'Recyclearn - Edukasi Pengelolaan Sampah',
    subtitle: 'Mobile Team Project - Fufufafa Team (Oct 2024 - Jan 2025)',
    description:
      'Aplikasi mobile edukasi pengelolaan sampah berbasis Android menggunakan Kotlin dengan penerapan arsitektur modern (MVVM / Clean Architecture) dan navigasi interaktif.',
    techStack: ['Android', 'Kotlin', 'MVVM', 'Clean Architecture', 'Mobile UI/UX', 'Testing'],
    demoUrl: 'https://github.com/FbritamaRK',
    repoUrl: 'https://github.com/FbritamaRK',
    metrics: 'MVVM Clean Architecture | Zero Crash Stability | 3 Kategori Sampah (Organik, Anorganik, B3)',
    highlights: [
      'Mengembangkan aplikasi edukasi pengelolaan sampah Recyclearn berbasis Android Kotlin',
      'Mengimplementasikan arsitektur Android modern (MVVM / Clean Architecture) untuk skalabilitas kode',
      'Merancang dan mengimplementasikan UI interaktif serta navigasi intuitif untuk fitur klasifikasi sampah, materi edukasi, dan artikel',
      'Melakukan pengujian fungsi dan optimasi performa untuk memastikan aplikasi responsif dan bebas crash',
    ],
    archTree: `├── app/src/main/java/com/recyclearn/
│   ├── presentation/
│   │   ├── ui/
│   │   │   ├── classification/ (Organik, Non-organik, B3)
│   │   │   ├── education/
│   │   │   └── articles/
│   │   └── viewmodel/
│   ├── domain/
│   │   ├── model/WasteItem.kt
│   │   └── usecase/GetWasteClassificationUseCase.kt
│   └── data/
│       ├── repository/WasteRepositoryImpl.kt
│       └── datasource/local/WasteDao.kt
└── app/src/test/
    └── UnitAndPerformanceTests.kt`,
    archDescription:
      'Penerapan pola MVVM dengan pemisahan lapisan Presentasi, Domain, dan Data (Clean Architecture), memfasilitasi pengujian unit yang independen dan penanganan memori yang efisien.',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: 'Sept 2025 - July 2026',
    periodStyle: 'highlight', // Yellow badge
    role: 'UI/UX DESIGNER & WEB DEVELOPER (ACADEMIC PROJECT)',
    company: 'PROJECT TUGAS AKHIR S1: DPMPTSP V2 GUNUNGKIDUL',
    description:
      'Perancangan ulang antarmuka pengguna (UI/UX) dan struktur informasi situs resmi DPMPTSP Kabupaten Gunungkidul sebagai Proyek Tugas Akhir S1. Mengimplementasikan standar internasional Web Content Accessibility Guidelines (WCAG) 2.2 Level AA untuk memastikan platform inklusif bagi penyandang disabilitas, serta memperbaiki sistem navigasi guna transparansi akses informasi perizinan dan investasi.',
    bullets: [
      'Perancangan Ulang UI/UX: Merancang antarmuka pengguna modern dan struktur informasi terpadu',
      'Standar Aksesibilitas Web: Implementasi penuh standar internasional WCAG 2.2 Level AA',
      'Aksesibilitas Informasi: Memperbaiki sistem navigasi untuk mempermudah perizinan & investasi',
    ],
  },
  {
    period: 'Jan 2026 - Mar 2026',
    periodStyle: 'dark', // Black badge
    role: 'PENGEMBANG FULL STACK (PERSONAL PROJECT)',
    company: 'ORGANIZATIONAL & COMMUNITY SERVICE - KULON PROGO, INDONESIA',
    description:
      'Merancang dan menguji platform web pusat informasi serta edukasi publik untuk Dusun Bleberan, Kulon Progo, guna mendukung potensi ekowisata dan konservasi hutan mangrove. Membangun antarmuka yang ramah pengguna untuk menyajikan dokumentasi lingkungan serta berkolaborasi dengan komunitas lokal dan tim KKN.',
    bullets: [
      'Pengembangan Platform Web: Merancang & menguji portal web ekowisata & konservasi mangrove',
      'Fitur & Konten: Antarmuka ramah pengguna menyajikan dokumentasi lingkungan secara transparan',
      'Kolaborasi Masyarakat: Menjembatani komunikasi wisatawan, peneliti, dan warga setempat',
    ],
  },
  {
    period: 'Oct 2024 - Jan 2025',
    periodStyle: 'dark', // Black badge
    role: 'PENGEMBANG APLIKASI MOBILE (TEAM PROJECT)',
    company: 'FUFUFAFA TEAM - SLEMAN, INDONESIA',
    description:
      'Mengembangkan aplikasi edukasi pengelolaan sampah (Recyclearn) berbasis Android menggunakan Kotlin dengan arsitektur Android modern (MVVM / Clean Architecture). Merancang UI interaktif dan navigasi intuitif untuk klasifikasi sampah (organik, non-organik, B3) serta melakukan optimasi fungsi dan performa bebas crash.',
    bullets: [
      'Pengembangan Aplikasi: Mengembangkan Recyclearn berbasis Kotlin dengan arsitektur MVVM / Clean',
      'Fitur Utama & UI/UX: Merancang UI interaktif untuk klasifikasi sampah, edukasi, dan artikel',
      'Optimasi & Pengujian: Pengujian menyeluruh untuk performa responsif dan bebas crash',
    ],
  },
  {
    period: 'Sep 2024 - Jan 2025',
    periodStyle: 'dark', // Black badge
    role: 'GAME DEVELOPER (TEAM PROJECT)',
    company: 'HEXA - SLEMAN, INDONESIA',
    description:
      'Berkonsentrasi dalam pengembangan game strategi "Fight for Castle: The Queen\'s Guard" menggunakan engine Unity dan bahasa pemrograman C#. Membangun mekanika gameplay, sistem pertahanan istana, algoritma logika AI musuh (pathfinding), serta merancang antarmuka UI/UX yang nyaman bagi pemain.',
    bullets: [
      'Pengembangan Game: Membangun game strategi "Fight for Castle" dengan Unity dan C#',
      'Implementasi Gameplay: Sistem pertahanan (defense system) & algoritma logika pathfinding/AI',
      'Desain UI/UX: Merancang antarmuka pengguna intuitif untuk pengalaman bermain optimal',
    ],
  },
];

export const EDUCATION_DATA: ExperienceItem[] = [
  {
    period: 'Sep 2022 - Oct 2026',
    periodStyle: 'outline', // Outline badge
    role: 'BACHELOR, INFORMATIKA (S.KOM) — GPA: 3.70 / 4.00 (CUM LAUDE)',
    company: 'UNIVERSITAS ISLAM INDONESIA',
    description:
      'Menempuh pendidikan Sarjana Informatika dengan predikat Cum Laude (IPK 3.70 dari skala 4.00). Berfokus pada bidang Pengembangan dan Audit Aksesibilitas Website, perancangan antarmuka human-centered, rekayasa perangkat lunak, dan arsitektur sistem.',
    bullets: [
      'Predikat: Cum Laude dengan IPK 3.70 / 4.00',
      'Fokus Bidang: Pengembangan dan Audit Aksesibilitas Website (WCAG 2.2 Level AA)',
      'Aktivitas: Rekayasa perangkat lunak, riset aksesibilitas digital, proyek kolaboratif',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Certificate of English Proficiency Test (CEPT)',
    issuer: 'CILACS Universitas Islam Indonesia',
    period: 'Oct 2025 - Oct 2027',
    score: 'Overall Score: 559 (Upper-Intermediate)',
    description:
      'Sertifikat kemahiran bahasa Inggris resmi yang diterbitkan oleh CILACS Universitas Islam Indonesia dengan skor 559.',
  },
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    label: 'LinkedIn',
    tag: '[LINKEDIN]',
    url: 'https://linkedin.com/in/febritamaark/',
    type: 'ext',
  },
  {
    label: 'GitHub',
    tag: '[GITHUB]',
    url: 'https://github.com/FbritamaRK',
    type: 'ext',
  },
  {
    label: 'Email Langsung',
    tag: '[EMAIL]',
    url: 'mailto:febriraka34@gmail.com',
    type: 'mail',
  },
  {
    label: 'WhatsApp / Telepon',
    tag: '[+62 881 2625 922]',
    url: 'https://wa.me/628812625922',
    type: 'ext',
  },
];

export const generateAtsCvText = (): string => {
  return `${HERO_DATA.name}
${HERO_DATA.location} | ${HERO_DATA.phone}
${HERO_DATA.email} | ${HERO_DATA.linkedin} | ${HERO_DATA.github}

PROFESSIONAL SUMMARY
----------------------------------------------------------------------
${ABOUT_DATA.paragraphs.join('\n\n')}

EDUCATION
----------------------------------------------------------------------
Universitas Islam Indonesia                                Sep 2022 - Oct 2026
Bachelor, Informatika - GPA: 3.70 / 4.00 (Cum Laude)
• Fokus pada bidang Pengembangan dan Audit Aksesibilitas Website

RELEVANT PROJECT EXPERIENCE
----------------------------------------------------------------------
UI/UX Designer & Web Developer (Academic Project)           Sept 2025 - July 2026
Project Tugas Akhir S1: DPMPTSP v2 Gunungkidul
• Perancangan Ulang UI/UX: Merancang ulang antarmuka pengguna (UI/UX) dan struktur informasi situs resmi DPMPTSP Kabupaten Gunungkidul sebagai Proyek Tugas Akhir S1.
• Standar Aksesibilitas Web: Memuat dan mengimplementasikan standar internasional Web Content Accessibility Guidelines (WCAG) 2.2 Level AA untuk memastikan platform inklusif bagi penyandang disabilitas.
• Aksesibilitas Informasi: Memperbaiki sistem navigasi guna mempermudah masyarakat dalam mengakses informasi perizinan dan investasi secara transparan.

Pengembang Full Stack (Personal Project)                    Jan 2026 - Mar 2026
Organizational & Community Service - Kulon Progo, Indonesia
• Pengembangan Platform Web: Merancang dan menguji platform web pusat informasi serta edukasi publik untuk Dusun Bleberan, Kulon Progo, guna mendukung potensi ekowisata dan konservasi hutan mangrove.
• Fitur & Konten: Membangun antarmuka yang ramah pengguna (user-friendly) untuk menyajikan dokumentasi lingkungan, informasi wisata ekologis, dan edukasi publik secara transparan serta mudah diakses.
• Kolaborasi Masyarakat: Berkolaborasi dengan komunitas lokal dan tim KKN dalam mengumpulkan kebutuhan informasi guna menjembatani komunikasi antara wisatawan, peneliti, dan warga setempat.

Pengembang Aplikasi Mobile (Team Project)                   Oct 2024 - Jan 2025
Fufufafa Team - Sleman, Indonesia
• Pengembangan Aplikasi: Mengembangkan aplikasi edukasi pengelolaan sampah (Recyclearn) berbasis Android menggunakan Kotlin dengan mengimplementasikan arsitektur Android modern (MVVM / Clean Architecture).
• Fitur Utama & Antarmuka (UI/UX): Merancang dan mengimplementasikan antarmuka pengguna (UI) yang interaktif serta navigasi aplikasi intuitif untuk fitur klasifikasi sampah (organik, non-organik, B3), materi edukasi, dan artikel.
• Optimasi & Pengujian: Melakukan pengujian fungsi dan pengoptimalan performa aplikasi untuk memastikan pengalaman pengguna yang responsif dan bebas crash.

Game Developer (Team Project)                               Sep 2024 - Jan 2025
Hexa - Sleman, Indonesia
• Pengembangan Game & Tech Stack: Berkonsentrasi dalam pengembangan game strategi 'Fight for Castle: The Queen\\'s Guard' menggunakan engine Unity dan bahasa pemrograman C#.
• Implementasi Gameplay & Logika: Membangun mekanika gameplay, sistem pertahanan (defense system), dan algoritma logika pergerakan musuh (pathfinding/AI).
• Desain UI/UX: Merancang dan mengimplementasikan antarmuka pengguna (User Interface) intuitif untuk meningkatkan kenyamanan dan pengalaman bermain pengguna (User Experience).

Pengembang Aplikasi Web (Personal Project)                  2026
Kraepelin & Pauli Simulator
• Simulator Interaktif: Mengembangkan simulator web interaktif untuk Tes Kraepelin dan Tes Pauli dengan Web Audio API dan adaptive auto-scroll.
• Algoritma & Performa: Mengkalkulasi metrik evaluasi kecepatan, grafik ketelitian, dan ritme konsentrasi secara real-time tanpa latensi.

Pengembang Aplikasi Web (Personal Project)                  2026
Simulasi Tes Ketelitian Data (Clerical Aptitude & Accuracy Test)
• Simulator Interaktif: Mengembangkan aplikasi tes ketelitian data berbasis web standar seleksi kerja BUMN, Perbankan, & CPNS dengan timer presisi sub-detik (1-30s), sound effect synthesizer (Web Audio API), dan keyboard shortcuts.
• Algoritma & Evaluasi: Mengimplementasikan generator soal dinamis (numerik, alfanumerik, verbal) dengan subtle diff traps, skoring akurasi & kecepatan real-time, serta diff error highlighting.

CERTIFICATIONS
----------------------------------------------------------------------
Certificate of English Proficiency Test (CEPT)             Oct 2025 - Oct 2027
– Overall Score: 559
CILACS Universitas Islam Indonesia

SKILLS & LANGUAGES
----------------------------------------------------------------------
Hard Skills: Web Design, TypeScript, HTML, JavaScript, Usability Testing, Prototyping, C#, Kotlin, Unity, WCAG 2.2 Level AA
Soft Skills: Responsibility, Analytical Thinking, Discipline, Teamwork, Human-centered design
Software Skills: Microsoft Office Suite (Word, Excel, PowerPoint), Figma, Git
Languages: Bahasa Indonesia (Native), English (Upper-Intermediate, CEPT Score: 559)
`;
};

export const downloadAtsCvFile = (): void => {
  const content = generateAtsCvText();
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'CV_FEBRITAMA_RAKA_QUALITA_AKHSANA_ATS.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

