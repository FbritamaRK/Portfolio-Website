import { Project, SkillColumn, ExperienceItem, CertificationItem, SocialLinkItem } from '../types';

export const HERO_DATA = {
  status: '[STATUS: AVAILABLE FOR HIRE & COLLABORATION]',
  greeting: 'Halo, saya',
  name: 'FEBRITAMA RAKA QUALITA AKHSANA',
  role: 'Web & Front-End Developer',
  specialization: 'Aksesibilitas Web (WCAG 2.2 Level AA) & Desain UI/UX',
  bio: 'Lulusan Informatika Universitas Islam Indonesia (IPK 3.70, Cum Laude) yang berfokus pada aksesibilitas web dan pengembangan front-end. Merancang ulang situs pemerintah daerah hingga memenuhi WCAG 2.2 Level AA dan menaikkan skor aksesibilitasnya memenuhi standar WCAG 2.2. Berpengalaman membangun proyek web, Android, dan game Unity dalam tim serta memiliki visi untuk mengembangkan software yang fungsional, adaptif, dan mudah digunakan semua pengguna.',
  location: 'Sleman, Daerah Istimewa Yogyakarta 55584',
  email: 'febriraka34@gmail.com',
  phone: '+62 881 2625 922',
  linkedin: 'https://linkedin.com/in/febritamaark/',
  github: 'https://github.com/FbritamaRK',
  portfolioUrl: 'https://portfolrk.vercel.app',
  cvDriveUrl: 'https://drive.google.com/drive/folders/12zl4iqQ76i23wDoYTdYwzo-exFyT6SC9?usp=drive_link',
};

export const ABOUT_DATA = {
  sectionNumber: '01',
  title: 'TENTANG SAYA',
  paragraphs: [
    'Lulusan Informatika Universitas Islam Indonesia (IPK 3.70, Cum Laude) yang berfokus pada aksesibilitas web dan pengembangan front-end.',
    'Merancang ulang situs pemerintah daerah hingga memenuhi standar WCAG 2.2 Level AA dan menaikkan skor aksesibilitasnya dari 60 menjadi 95 (skor 2-4/10 menjadi 9-10/10 dengan memperbaiki 40+ masalah melalui adopsi HTML semantik, WAI-ARIA, dan navigasi keyboard).',
    'Berpengalaman membangun proyek web, Android, dan game Unity dalam tim serta memiliki visi untuk mengembangkan software yang fungsional, adaptif, dan mudah digunakan semua pengguna.',
  ],
};

export const SKILLS_DATA: SkillColumn[] = [
  {
    title: 'AKSESIBILITAS WEB',
    skills: [
      'WCAG 2.2 Level AA',
      'WAI-ARIA & Semantik Web',
      'Audit Aksesibilitas (axe, WAVE)',
      'Pembaca Layar NVDA',
      'Testing & Evaluasi',
    ],
  },
  {
    title: 'WEB & DESAIN',
    skills: [
      'HTML Semantik & CSS3',
      'JavaScript (ES6+) & TypeScript',
      'React.js',
      'Figma (UI/UX Design)',
      'Prototyping & Wireframing',
    ],
  },
  {
    title: 'MOBILE & GAME DEV',
    skills: [
      'Kotlin (Android Development)',
      'MVVM & Clean Architecture',
      'Game Engine (Unity)',
      'Pemrograman C#',
    ],
  },
  {
    title: 'BAHASA & RISET',
    skills: [
      'Bahasa Indonesia (Penutur Asli)',
      'Bahasa Inggris (Menengah-Atas, CEPT 559)',
      'Design Science Research (DSR)',
      'Git & Version Control',
      'Human-Centered Design',
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-dpmptsp',
    tag: '#PROYEK-01',
    title: 'Perancangan Ulang Situs DPMPTSP Kab. Gunungkidul',
    subtitle: 'Proyek Tugas Akhir S1 (Sep 2025 – Jun 2026)',
    description:
      'Perancangan ulang antarmuka dan struktur informasi halaman situs perizinan dan investasi DPMPTSP Kabupaten Gunungkidul guna memenuhi standar aksesibilitas internasional WCAG 2.2 Level AA.',
    techStack: ['React.js', 'TypeScript', 'WCAG 2.2 Level AA', 'WAI-ARIA', 'Figma', 'WAVE & NVDA'],
    demoUrl: 'https://dpmptspproto.vercel.app/',
    repoUrl: 'https://github.com/FbritamaRK',
    metrics: 'Skor Aksesibilitas: 2-4/10 → 9-10/10 (60 → 95) | 40+ Masalah Diperbaiki | WCAG 2.2 Level AA',
    highlights: [
      'Merancang ulang antarmuka dan struktur informasi halaman situs perizinan dan investasi DPMPTSP Kabupaten Gunungkidul.',
      'Menaikkan skor aksesibilitas dari 2-4/10 menjadi 9-10/10 dengan memperbaiki 40+ masalah dengan mengadopsi WCAG 2.2 Level AA (HTML semantik, WAI-ARIA, navigasi keyboard).',
      'Memperbaiki sistem navigasi guna mempermudah pengguna dalam mengakses informasi perizinan dan investasi secara transparan.',
      'Mengaudit halaman dengan WAVE, dan pembaca layar NVDA, serta menguji langsung ke pengguna penyandang disabilitas.',
      'Menyusun skripsi dengan metode Design Science Research dan prototipe React/TypeScript.',
    ],
    archTree: `├── ui-ux-design/
│   ├── figma-wireframes/
│   ├── design-system-tokens/
│   └── user-flow-perizinan/
├── accessibility-audit/
│   ├── wcag-2.2-aa-checklist/
│   ├── screen-reader-tests (NVDA)
│   ├── axe-and-wave-reports/
│   └── color-contrast-ratios (>= 4.5:1)
├── web-implementation/
│   ├── semantic-html5-templates/
│   ├── wai-aria-attributes/
│   ├── keyboard-nav-focus-management/
│   └── react-typescript-components/
└── usability-evaluation/
    └── testing-reports-disability-users/`,
    archDescription:
      'Penerapan metodologi Design Science Research (DSR) dengan perancangan ulang antarmuka inklusif, perbaikan 40+ isu aksesibilitas berbasis WCAG 2.2 Level AA, navigasi keyboard penuh, serta verifikasi dengan pembaca layar NVDA dan pengujian ke pengguna disabilitas.',
  },
  {
    id: 'project-mangrove-bleberan',
    tag: '#PROYEK-02',
    title: 'Situs Ekowisata Mangrove Dusun Bleberan',
    subtitle: 'Proyek Pengabdian Masyarakat / KKN (Jan 2026 – Mar 2026)',
    description:
      'Pembangunan situs ekowisata dan konservasi mangrove Dusun Bleberan, Kulon Progo, untuk wisatawan, peneliti, dan warga guna menyajikan dokumentasi lingkungan dan edukasi publik yang ramah pengguna.',
    techStack: ['Full-Stack Web', 'JavaScript', 'HTML Semantik', 'CSS3', 'UI/UX Design', 'KKN Community'],
    demoUrl: 'https://pesonableberan.vercel.app/',
    repoUrl: 'https://github.com/FbritamaRK',
    metrics: 'Pusat Edukasi & Konservasi | Antarmuka Ramah Pengguna | Kolaborasi Warga & KKN',
    highlights: [
      'Membangun situs ekowisata dan konservasi mangrove Dusun Bleberan untuk wisatawan, peneliti, dan warga.',
      'Membangun antarmuka yang ramah pengguna (user-friendly) untuk menyajikan dokumentasi lingkungan, informasi wisata ekologis, dan edukasi publik secara transparan serta mudah diakses.',
      'Berkolaborasi dengan komunitas lokal dan tim KKN dalam mengumpulkan kebutuhan informasi guna menjembatani komunikasi antara wisatawan, peneliti, dan warga setempat.',
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
      'Mengembangkan simulator web interaktif untuk Tes Kraepelin (bawah ke atas) dan Tes Pauli (atas ke bawah) sesuai standar asesmen psikologi kerja profesional.',
      'Mengimplementasikan sistem pewaktuan otomatis (15 detik/lajur) dengan sintesis suara lonceng "PINDAH LAJUR!" dan beep warning berbasis Web Audio API.',
      'Merancang directional adaptive auto-scroll dan focus tracking mulus yang mendukung kontrol keyboard PC numpad maupun mobile keyboard.',
      'Mengkalkulasi metrik evaluasi kecepatan, grafik ketelitian, dan analisis ritme stabilitas konsentrasi secara real-time.',
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
      'Mengembangkan simulator tes ketelitian data (Clerical Aptitude) dengan 5 kategori data: Angka (0-9), Alfanumerik, Huruf Acak, Nama/Instansi, dan Campuran.',
      'Merancang sistem pewaktuan fleksibel (1.0 - 30.0 detik/soal) dengan progress bar visual dinamis dan peringatan waktu kritis.',
      'Mengimplementasikan generator jebakan psikotes realistis (transposition urutan angka, lookalike pairs seperti 3 vs 8, O vs 0, B vs 8).',
      'Menyediakan sound effects synthesizer prosedural berbasis Web Audio API (tanpa aset audio eksternal) dengan kontrol toggle suara.',
      'Fitur evaluasi mendalam: kalkulasi akurasi (%), grade ketelitian psikotes, kecepatan respon, visualisasi diff error highlight warna merah, dan mode "Ulangi yang Salah".',
      'Mendukung kontrol ganda: pintasan keyboard penuh (Spasi/Enter, 1/S, 2/T) untuk PC serta tombol sentuh responsif untuk smartphone/tablet.',
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
    id: 'project-recyclearn',
    tag: '#PROYEK-05',
    title: 'Recyclearn – Edukasi Pengelolaan Sampah',
    subtitle: 'Team Project, Universitas Islam Indonesia (Okt 2024 – Jan 2025)',
    description:
      'Aplikasi mobile edukasi pengelolaan sampah berbasis Android dengan Kotlin, MVVM, dan Clean Architecture yang dilengkapi layar klasifikasi tiga kategori sampah serta performa buka aplikasi yang cepat.',
    techStack: ['Android', 'Kotlin', 'MVVM', 'Clean Architecture', 'Mobile UI/UX', 'Performance'],
    demoUrl: 'https://github.com/FbritamaRK',
    repoUrl: 'https://github.com/FbritamaRK',
    metrics: 'Waktu Buka Aplikasi: 4s → 2s (50% Lebih Cepat) | MVVM & Clean Architecture | 3 Kategori Sampah',
    highlights: [
      'Mengembangkan aplikasi edukasi pengelolaan sampah berbasis Android dengan Kotlin, MVVM, dan Clean Architecture.',
      'Membangun layar klasifikasi sampah (organik, non-organik, B3).',
      'Memperbaiki bug dan mempercepat waktu buka aplikasi dari 4 detik menjadi 2 detik.',
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
    └── UnitAndStartupPerformanceTests.kt`,
    archDescription:
      'Penerapan pola MVVM dengan Clean Architecture (Presentation, Domain, Data) untuk skalabilitas kode, pengujian unit yang terisolasi, serta optimasi startup time dari 4 detik menjadi 2 detik.',
  },
  {
    id: 'project-fight-for-castle',
    tag: '#PROYEK-06',
    title: "Fight for Castle: The Queen's Guard",
    subtitle: 'Team Project, Universitas Islam Indonesia (Sep 2024 – Jan 2025)',
    description:
      'Game strategi taktis berbasis Unity Engine dan pemrograman C# yang menghadirkan gameplay pertahanan istana, sistem pertahanan, 5 mekanika inti gameplay, dan antarmuka game intuitif.',
    techStack: ['Unity Engine', 'C#', 'Game AI / Pathfinding', '5 Mekanika Gameplay', 'Defense System'],
    demoUrl: 'https://github.com/FbritamaRK',
    repoUrl: 'https://github.com/FbritamaRK',
    metrics: 'Unity Engine & C# | 5 Mekanika Inti Gameplay | Sistem Pertahanan Real-Time',
    highlights: [
      'Memprogram gameplay dengan C# pada game strategi berbasis Unity.',
      'Membangun sistem pertahanan dan 5 mekanika inti gameplay.',
      'Merancang antarmuka game (UI/UX) yang intuitif.',
    ],
    archTree: `├── Assets/
│   ├── Scripts/
│   │   ├── AI/
│   │   │   ├── EnemyPathfinding.cs
│   │   │   └── EnemyStateMachine.cs
│   │   ├── Gameplay/
│   │   │   ├── DefenseSystem.cs
│   │   │   ├── CastleHealthManager.cs
│   │   │   ├── CoreGameMechanics (5 Mechanics)
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
      'Arsitektur berorientasi objek dalam Unity dengan pemisahan modul AI pathfinding berbasis grid, state machine musuh, 5 mekanika inti gameplay, dan controller pertahanan istana yang sinkron.',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: 'Sep 2025 – Jun 2026',
    periodStyle: 'highlight', // Yellow badge
    role: 'Perancang UI/UX & Pengembang Web (Proyek Tugas Akhir S1)',
    company: 'Perancangan Ulang Situs DPMPTSP Kabupaten Gunungkidul',
    description:
      'Perancangan ulang antarmuka dan struktur informasi halaman situs perizinan dan investasi DPMPTSP Kabupaten Gunungkidul berbasis standar aksesibilitas internasional WCAG 2.2 Level AA.',
    bullets: [
      'Merancang ulang antarmuka dan struktur informasi halaman situs perizinan dan investasi DPMPTSP Kabupaten Gunungkidul.',
      'Menaikkan skor aksesibilitas dari 2-4/10 menjadi 9-10/10 dengan memperbaiki 40+ masalah dengan mengadopsi WCAG 2.2 Level AA (HTML semantik, WAI-ARIA, navigasi keyboard).',
      'Memperbaiki sistem navigasi guna mempermudah pengguna dalam mengakses informasi perizinan dan investasi secara transparan.',
      'Mengaudit halaman dengan WAVE, dan pembaca layar NVDA, serta menguji langsung ke pengguna penyandang disabilitas.',
    ],
  },
  {
    period: 'Jan 2026 – Mar 2026',
    periodStyle: 'dark', // Black badge
    role: 'Pengembang Full-Stack (Proyek Pengabdian Masyarakat / KKN)',
    company: 'Situs Ekowisata Mangrove Dusun Bleberan – Kulon Progo',
    description:
      'Membangun situs ekowisata dan konservasi mangrove Dusun Bleberan untuk wisatawan, peneliti, dan warga.',
    bullets: [
      'Membangun situs ekowisata dan konservasi mangrove Dusun Bleberan untuk wisatawan, peneliti, dan warga.',
      'Membangun antarmuka yang ramah pengguna (user-friendly) untuk menyajikan dokumentasi lingkungan, informasi wisata ekologis, dan edukasi publik secara transparan serta mudah diakses.',
      'Berkolaborasi dengan komunitas lokal dan tim KKN dalam mengumpulkan kebutuhan informasi guna menjembatani komunikasi antara wisatawan, peneliti, dan warga setempat.',
    ],
  },
  {
    period: 'Okt 2024 – Jan 2025',
    periodStyle: 'dark', // Black badge
    role: 'Pengembang Android (Team Project, Universitas Islam Indonesia)',
    company: 'Recyclearn – Aplikasi Edukasi Pengelolaan Sampah',
    description:
      'Mengembangkan aplikasi edukasi pengelolaan sampah berbasis Android dengan Kotlin, MVVM, dan Clean Architecture.',
    bullets: [
      'Mengembangkan aplikasi edukasi pengelolaan sampah berbasis Android dengan Kotlin, MVVM, dan Clean Architecture.',
      'Membangun layar klasifikasi sampah (organik, non-organik, B3).',
      'Memperbaiki bug dan mempercepat waktu buka aplikasi dari 4 detik menjadi 2 detik.',
    ],
  },
  {
    period: 'Sep 2024 – Jan 2025',
    periodStyle: 'dark', // Black badge
    role: 'Pengembang Game (Team Project, Universitas Islam Indonesia)',
    company: "Fight for Castle: The Queen's Guard – Game Strategi Unity",
    description:
      'Memprogram gameplay dengan C# pada game strategi berbasis Unity.',
    bullets: [
      'Memprogram gameplay dengan C# pada game strategi berbasis Unity.',
      'Membangun sistem pertahanan dan 5 mekanika inti gameplay.',
      'Merancang antarmuka game.',
    ],
  },
];

export const EDUCATION_DATA: ExperienceItem[] = [
  {
    period: 'Sep 2022 – Jul 2026',
    periodStyle: 'outline', // Outline badge
    role: 'S1 INFORMATIKA – IPK 3.70 / 4.00 (CUM LAUDE)',
    company: 'UNIVERSITAS ISLAM INDONESIA',
    description:
      'Menyusun skripsi tentang perancangan ulang aksesibilitas situs pemerintah daerah dengan metode Design Science Research dan prototipe React/TypeScript.',
    bullets: [
      'Menyusun skripsi tentang perancangan ulang aksesibilitas situs pemerintah daerah dengan metode Design Science Research dan prototipe React/TypeScript.',
      'Lulus dengan predikat kelulusan Cum Laude dengan Indeks Prestasi Kumulatif (IPK) 3.70 dari skala 4.00.',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Certificate of English Proficiency Test (CEPT) – Skor 559',
    issuer: 'CILACS Universitas Islam Indonesia',
    period: 'Okt 2025 – Okt 2027',
    score: 'Skor 559 (Menengah-Atas / Upper-Intermediate)',
    description:
      'Sertifikat kemahiran bahasa Inggris resmi yang diterbitkan oleh CILACS Universitas Islam Indonesia dengan skor 559.',
    imageUrl: '/certificate-cept.jpg',
  },
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    label: 'Portofolio Online',
    tag: '[portfolrk.vercel.app]',
    url: 'https://portfolrk.vercel.app',
    type: 'ext',
  },
  {
    label: 'LinkedIn',
    tag: '[febritamaark]',
    url: 'https://linkedin.com/in/febritamaark/',
    type: 'ext',
  },
  {
    label: 'GitHub',
    tag: '[FbritamaRK]',
    url: 'https://github.com/FbritamaRK',
    type: 'ext',
  },
  {
    label: 'Email Langsung',
    tag: '[febriraka34@gmail.com]',
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
${HERO_DATA.email} | ${HERO_DATA.linkedin} | ${HERO_DATA.portfolioUrl}

RINGKASAN PROFESIONAL
----------------------------------------------------------------------
${HERO_DATA.bio}

PENDIDIKAN
----------------------------------------------------------------------
Universitas Islam Indonesia                                Sep 2022 – Jul 2026
S1 Informatika – IPK 3.70 / 4.00 (Cum Laude)
• Menyusun skripsi tentang perancangan ulang aksesibilitas situs pemerintah daerah dengan metode Design Science Research dan prototipe React/TypeScript.

PENGALAMAN PROYEK
----------------------------------------------------------------------
Perancang UI/UX & Pengembang Web (Proyek Tugas Akhir S1)   Sep 2025 – Jun 2026
Perancangan Ulang Situs DPMPTSP Kabupaten Gunungkidul
• Merancang ulang antarmuka dan struktur informasi halaman situs perizinan dan investasi DPMPTSP Kabupaten Gunungkidul.
• Menaikkan skor aksesibilitas dari 2-4/10 menjadi 9-10/10 dengan memperbaiki 40+ masalah dengan mengadopsi WCAG 2.2 Level AA (HTML semantik, WAI-ARIA, navigasi keyboard).
• Memperbaiki sistem navigasi guna mempermudah pengguna dalam mengakses informasi perizinan dan investasi secara transparan.
• Mengaudit halaman dengan WAVE, dan pembaca layar NVDA, serta menguji langsung ke pengguna penyandang disabilitas.

Pengembang Full-Stack (Proyek Pengabdian Masyarakat / KKN) Jan 2026 – Mar 2026
Situs Ekowisata Mangrove Dusun Bleberan – Kulon Progo
• Membangun situs ekowisata dan konservasi mangrove Dusun Bleberan untuk wisatawan, peneliti, dan warga.
• Membangun antarmuka yang ramah pengguna (user-friendly) untuk menyajikan dokumentasi lingkungan, informasi wisata ekologis, dan edukasi publik secara transparan serta mudah diakses.
• Berkolaborasi dengan komunitas lokal dan tim KKN dalam mengumpulkan kebutuhan informasi guna menjembatani komunikasi antara wisatawan, peneliti, dan warga setempat.

Pengembang Android (Team Project, Universitas Islam Indonesia) Okt 2024 – Jan 2025
Recyclearn – Aplikasi Edukasi Pengelolaan Sampah
• Mengembangkan aplikasi edukasi pengelolaan sampah berbasis Android dengan Kotlin, MVVM, dan Clean Architecture.
• Membangun layar klasifikasi sampah (organik, non-organik, B3).
• Memperbaiki bug dan mempercepat waktu buka aplikasi dari 4 detik menjadi 2 detik.

Pengembang Game (Team Project, Universitas Islam Indonesia) Sep 2024 – Jan 2025
Fight for Castle: The Queen's Guard – Game Strategi Unity
• Memprogram gameplay dengan C# pada game strategi berbasis Unity.
• Membangun sistem pertahanan dan 5 mekanika inti gameplay.
• Merancang antarmuka game.

SERTIFIKASI
----------------------------------------------------------------------
Certificate of English Proficiency Test (CEPT) – Skor 559  Okt 2025 – Okt 2027
CILACS Universitas Islam Indonesia

KEAHLIAN & BAHASA
----------------------------------------------------------------------
Aksesibilitas: WCAG 2.2 AA, WAI-ARIA, audit aksesibilitas (axe, WAVE), pembaca layar NVDA, Testing
Web & Desain: HTML, JavaScript, TypeScript, React.js, Figma, prototyping
Mobile & Game: Kotlin (Android, MVVM), Unity, C#
Bahasa: Indonesia (penutur asli), Inggris (menengah-atas, CEPT 559)
`;
};

export const downloadAtsCvFile = (): void => {
  const content = generateAtsCvText();
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'CV_FEBRITAMA_RAKA_QUALITA_AKHSANA.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
