import { ICertificate, IProject } from '@/types';

export const GENERAL_INFO = {
    name: 'Fajar Tri Prasetyo',
    shortName: 'Fajar',
    email: 'fajartru1515@gmail.com',
    role: 'Web Developer | Software Engineer',
    bio: "Hi! I'm Fajar. A passionate Web Developer and Software Engineer with a solid foundation in modern front-end technologies, robust back-end systems, and full-stack web solutions.",
    location: 'Bekasi / Jakarta, Indonesia',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Fajar, I came across your portfolio and would like to connect...',
    githubProfile: 'https://github.com/FajarPrasetyo',
    linkedinProfile: 'https://www.linkedin.com/in/fajartriprasetyo15',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: GENERAL_INFO.githubProfile },
    { name: 'linkedin', url: GENERAL_INFO.linkedinProfile },
];

export const MY_STACK = {
    'Frontend & Web': [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React.js',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    'Backend & Frameworks': [
        {
            name: 'PHP',
            icon: '/logo/php.svg',
        },
        {
            name: 'Laravel',
            icon: '/logo/laravel.svg',
        },
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Java',
            icon: '/logo/java.svg',
        },
    ],
    'Database & Tools': [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
    'Machine Learning & Data': [
        {
            name: 'Python',
            icon: '/logo/python.svg',
        },
        {
            name: 'PyTorch',
            icon: '/logo/pytorch.svg',
        },
        {
            name: 'Scikit-Learn',
            icon: '/logo/scikit-learn.svg',
        },
        {
            name: 'Streamlit',
            icon: '/logo/streamlit.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'WGN Sport Center Platform',
        slug: 'wgnsportcenter',
        sourceCode: 'https://github.com/FajarPrasetyo/wgnsportcenter',
        year: 2025,
        description: `
      A full-stack, responsive web reservation and venue management platform engineered for WGN Sport Center to streamline court bookings, scheduling, and operational revenue tracking. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>📅 Interactive Court Booking: Real-time schedule checker preventing double-booking across badminton/futsal courts</li>
        <li>💳 Order & Payment Processing: Seamless workflow for booking verification and payment proof uploads</li>
        <li>🏆 Tournament & Event Management: Showcase upcoming leagues, brackets, and venue announcements</li>
        <li>👥 Multi-Role Administration: Dedicated dashboard for staff to approve customer bookings, manage time slots, and maintain Master Data records</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Structured relational database normalization in MySQL ensuring optimal query performance</li>
        <li>Clean modular backend architecture in PHP / Laravel with secure session handling</li>
        <li>Responsive, intuitive user interface styled with modern CSS and Bootstrap</li>
      </ul>
      `,
        role: `
      Web Developer <br/>
      <ul>
        <li>Designed normalized relational database schema (MySQL) for high-traffic booking transactions</li>
        <li>Engineered real-time court availability logic and dynamic slot reservation workflows</li>
        <li>Constructed comprehensive administrative dashboard and reporting modules</li>
      </ul>
      `,
        techStack: [
            'PHP',
            'Laravel',
            'MySQL',
            'JavaScript',
            'Bootstrap',
            'HTML5 / CSS3',
        ],
        thumbnail: '/projects/thumbnail/wgnsportcenter.png',
        longThumbnail: '/projects/long/wgnsportcenter.png',
        images: [
            '/projects/images/wgn-dashboard.png',
            '/projects/images/wgn-dashboard2.png',
            '/projects/images/wgn-lapangan.png',
            '/projects/images/wgn-pesanan.png',
        ],
        promoVideo: '/projects/videos/wgnsportcenter-promo.mp4',
    },
    {
        title: 'San Komputer Inventory',
        slug: 'san-komputer-inventory',
        sourceCode: 'https://github.com/FajarPrasetyo/San-Komputer-Inventory',
        year: 2026,
        description: `
      An enterprise-grade IT hardware store inventory management system developed with Laravel, Tailwind CSS, and Vite. Designed to manage product catalogs, stock tracking, and user role-based access control (RBAC). <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>📦 Real-Time Inventory Control: Track IT hardware stock, incoming units, and product categories</li>
        <li>🔐 Role-Based Access Control (RBAC): Strict permission boundaries for administrators, inventory staff, and cashiers</li>
        <li>📊 Responsive Dashboard: Live analytics showing inventory movement, recent additions, and critical stock alerts</li>
        <li>🐳 Containerized Deployment: Docker and Docker Compose configuration for effortless production setups</li>
      </ul>
      `,
        role: `
      Full-Stack Software Engineer <br/>
      <ul>
        <li>Architected MVC backend with Laravel, Eloquent ORM, and MySQL</li>
        <li>Built dynamic, responsive front-end components using Tailwind CSS and Vite</li>
        <li>Engineered secure authentication, input validation, and RBAC authorization policies</li>
      </ul>
      `,
        techStack: [
            'Laravel',
            'PHP',
            'Tailwind CSS',
            'MySQL',
            'Vite',
            'Docker',
        ],
        thumbnail: '/projects/thumbnail/san-komputer.png',
        longThumbnail: '/projects/long/san-komputer.png',
        images: [
            '/projects/images/san-komputer-dashboard.png',
            '/projects/images/san-komputer-create.png',
            '/projects/images/san-komputer-profile.png',
        ],
        promoVideo: '/projects/videos/sankomputer-promo.mp4',
    },
    {
        title: 'Bridge Capacity ML System',
        slug: 'bridge-capacity-ml',
        liveUrl: 'https://github.com/FajarPrasetyo/Machine-Learning---Prediksi-Kapasitas-Jembatan-',
        sourceCode: 'https://github.com/FajarPrasetyo/Machine-Learning---Prediksi-Kapasitas-Jembatan-',
        year: 2026,
        description: `
      An advanced end-to-end two-stage Machine Learning system engineered with CRISP-DM methodology to predict civil infrastructure bridge load capacity. Features an interactive Streamlit web application for real-time engineering assessment. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🔬 Two-Stage ML Architecture: Stage 1 Gaussian Process Regression (GPR) for structural baseline estimation, followed by Stage 2 Artificial Neural Network (ANN) / Ridge calibration.</li>
        <li>📊 Comprehensive CRISP-DM Workflow: Automated data understanding, outlier handling, distribution analysis, and residual diagnostics.</li>
        <li>🖥️ Interactive Streamlit Interface: Allows civil engineers and structural assessors to input bridge parameters and evaluate load ratings with instant visual feedback.</li>
      </ul>
      `,
        role: `
      Lead Researcher & Machine Learning Engineer <br/>
      <ul>
        <li>Formulated machine learning problem and engineered features from bridge inspection datasets</li>
        <li>Built predictive models (GPR, ANN, CatBoost, Ridge) and benchmarked evaluation metrics</li>
        <li>Developed and deployed the Streamlit diagnostic web application for real-time inference</li>
      </ul>
      `,
        techStack: [
            'Python',
            'Streamlit',
            'Scikit-learn',
            'PyTorch / Keras',
            'Gaussian Process',
            'Pandas',
        ],
        thumbnail: '/projects/thumbnail/bridge-ml.png',
        longThumbnail: '/projects/long/bridge-ml.png',
        images: [
            '/projects/images/bridge-ml-1.png',
            '/projects/images/bridge-ml-designstrength.png',
            '/projects/images/bridge-ml-responratio.png',
            '/projects/images/bridge-ml-2.png',
            '/projects/images/bridge-ml-3.png',
        ],
        promoVideo: '/projects/videos/jembatan-crispdm-promo.mp4',
    },
    {
        title: 'BlurryFace Portfolio v1',
        slug: 'blurryface-portfolio',
        liveUrl: 'https://fajarprasetyo.github.io',
        sourceCode: 'https://github.com/FajarPrasetyo/FajarPrasetyo.github.io',
        year: 2024,
        description: `
      The initial personal digital portfolio featuring an aesthetic dark/light mode toggle, dynamic interactive canvas particle network, animated typing effects, and modern responsive layout built with Tailwind CSS. <br/><br/>
      
      Highlights:
      <ul>
        <li>Interactive particle connections responding to cursor movement</li>
        <li>Dark mode preference persistence in localStorage</li>
        <li>Responsive mobile navigation drawer and certificate gallery</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      <ul>
        <li>Crafted responsive landing page layouts using Tailwind CSS</li>
        <li>Configured GitHub Pages automated deployment pipeline</li>
      </ul>
      `,
        techStack: ['JavaScript', 'Tailwind CSS', 'Particles.js', 'HTML5'],
        thumbnail: '/projects/thumbnail/blurryface.png',
        longThumbnail: '/projects/long/blurryface.png',
        images: ['/projects/images/blurryface-1.png'],
    },
    {
        title: 'Classroom Duty Manager',
        slug: 'piket-kebersihan-kelas',
        sourceCode: 'https://github.com/FajarPrasetyo/Aplikasi-Piket-Kebersihan-Kelas',
        year: 2024,
        description: `
      A tailored web-based management application to organize and automate classroom cleaning rotations (piket). Addresses absenteeism and task distribution by establishing transparent digital schedule logs. <br/><br/>
      
      Key Features:
      <ul>
        <li>Automated weekly schedule assignment based on student rosters</li>
        <li>Status logging for completed vs missed duty tasks</li>
        <li>Clean, intuitive dashboard accessible on desktop and mobile</li>
      </ul>
      `,
        role: `Sole Developer & Designer`,
        techStack: ['PHP', 'MySQL', 'CSS3', 'JavaScript'],
        thumbnail: '/projects/thumbnail/piket-kelas.png',
        longThumbnail: '/projects/long/piket-kelas.png',
        images: [
            '/projects/images/piket-kelas-1.png',
            '/projects/images/piket-kelas-2.png',
        ],
    },
    {
        title: 'Ambulance Emergency Dispatch',
        slug: 'ambulance-patient-dispatch',
        sourceCode: 'https://github.com/FajarPrasetyo/Ambulance-Bawa-Pasien',
        year: 2023,
        description: `
      An object-oriented simulation and patient transit system developed in Java. Simulates rapid response ambulance coordination, emergency triage prioritization, and status transitions from call reception to hospital admission. <br/><br/>
      
      Key Highlights:
      <ul>
        <li>Rigorous OOP design principles (Encapsulation, Inheritance, Polymorphism)</li>
        <li>State machine logic handling dispatch stages (En Route, At Scene, Hospital Transit, Cleared)</li>
        <li>Clean data structure modeling for urgent medical queues</li>
      </ul>
      `,
        role: `Software Developer (Java / OOP)`,
        techStack: ['Java', 'OOP', 'Data Structures'],
        thumbnail: '/projects/thumbnail/ambulance.png',
        longThumbnail: '/projects/long/ambulance.png',
        images: [
            '/projects/images/ambulance-1.png',
            '/projects/images/ambulance-2.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Computer Lab Assistant',
        company: 'Gunadarma University',
        duration: 'Aug 2024 - Oct 2026',
    },
    {
        title: 'Fullstack Web Developer',
        company: 'SanKomputer',
        duration: 'Jun 2026 - Jul 2026',
    },
    {
        title: 'Fullstack Web Developer',
        company: 'WGN Sport Center',
        duration: 'Aug 2025 - Sep 2025',
    },
    {
        title: 'IT Support',
        company: 'PT Malikul Mulk Abadi (SPBU 34.17112)',
        duration: 'Feb 2023 - Jun 2025',
    },
    {
        title: 'Bachelor of Computer Science - Information Systems (GPA: 3.71)',
        company: 'Gunadarma University',
        duration: '2022 - 2026',
    },
    {
        title: 'Software Engineering (RPL)',
        company: 'SMKN 1 Kota Bekasi',
        duration: '2019 - 2022',
    },
];

export const MY_CERTIFICATES: ICertificate[] = [
    {
        title: 'Junior Web Programmer',
        category: 'Professional Certification',
        issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
        institution: 'LSP Universitas Gunadarma',
        date: '15 July 2026',
        credentialId: 'No. 62019 2514 5 0025475 2026',
        validity: 'Valid for 3 years',
        description:
            'National competency certification in programming, covering data structures, user interface implementation, structured programming, debugging, and software documentation.',
        tags: ['BNSP', 'Programming', 'Web Development'],
        image: '/certificates/preview/bnsp-junior-web-programmer.webp',
        imageWidth: 900,
        imageHeight: 1239,
        imagePosition: 'top',
        pdf: '/certificates/bnsp-junior-web-programmer.pdf',
    },
    {
        title: 'Intro to Software Engineering',
        category: 'Course Certificate',
        issuer: 'RevoU Coding Camp',
        date: '23 October 2026',
        credentialId: 'CCSE-191026-01-1-00004',
        validity: 'Certificate of Attendance',
        description:
            'A one-week certified online course covering software engineering fundamentals, development workflows, and industry best practices.',
        tags: ['Software Engineering', 'Coding Camp'],
        image: '/certificates/preview/revou-intro-software-engineering.webp',
        imageWidth: 1200,
        imageHeight: 851,
        imagePosition: 'center',
        pdf: '/certificates/revou-intro-software-engineering.pdf',
    },
    {
        title: 'Aptitude Test',
        category: 'Assessment Certificate',
        issuer: 'Universitas Gunadarma',
        date: '26 June 2026',
        credentialId: 'No. 287762/AT/FPSI/2026',
        validity: 'Certificate of Assessment',
        description:
            'Cognitive assessment covering abstract thinking, logical reasoning, and conclusion-making, administered by Gunadarma University.',
        tags: ['Assessment', 'Logical Reasoning'],
        image: '/certificates/preview/gunadarma-aptitude-test.webp',
        imageWidth: 1100,
        imageHeight: 1556,
        imagePosition: 'top',
        pdf: '/certificates/gunadarma-aptitude-test.pdf',
    },
    {
        title: 'Basic Web Application Development',
        category: 'Training Certificate',
        issuer: 'Universitas Gunadarma',
        date: '06 June 2026',
        credentialId: 'No. 285100',
        validity: 'Certificate of Training',
        description:
            'Training on web application development fundamentals, from tools and system development to database, user interface, and programming implementation.',
        tags: ['Web Development', 'Database', 'UI'],
        image: '/certificates/preview/gunadarma-basic-web-app-development.webp',
        imageWidth: 1100,
        imageHeight: 1556,
        imagePosition: 'top',
        pdf: '/certificates/gunadarma-basic-web-app-development.pdf',
    },
    {
        title: 'Basic Web Application Design',
        category: 'Training Certificate',
        issuer: 'Universitas Gunadarma',
        date: '27 September 2025',
        credentialId: 'No. 617766',
        validity: 'Certificate of Training',
        description:
            'Web application design training covering system analysis, database design, user interface design, and PHP with XAMPP.',
        tags: ['Web Design', 'PHP', 'XAMPP'],
        image: '/certificates/preview/gunadarma-basic-web-design.webp',
        imageWidth: 1100,
        imageHeight: 1556,
        imagePosition: 'top',
        pdf: '/certificates/gunadarma-basic-web-design.pdf',
    },
    {
        title: 'Java (J2SE) Intermediate',
        category: 'Training Certificate',
        issuer: 'Universitas Gunadarma',
        date: '18 August 2025',
        credentialId: 'No. 900414',
        validity: 'Certificate of Training',
        description:
            'Intermediate Java training covering GUI development, MySQL database operations, multimedia, applets, and socket-based network programming.',
        tags: ['Java', 'MySQL', 'GUI'],
        image: '/certificates/preview/gunadarma-java-intermediate.webp',
        imageWidth: 1100,
        imageHeight: 1556,
        imagePosition: 'top',
        pdf: '/certificates/gunadarma-java-intermediate.pdf',
    },
    {
        title: 'Wide Area Network Using Cisco Router',
        category: 'Training Certificate',
        issuer: 'Universitas Gunadarma',
        date: '24 February 2025',
        credentialId: 'No. 186652',
        validity: 'Certificate of Training',
        description:
            'Intermediate WAN training covering subnetting and VLSM, EIGRP, OSPF, NAT and DHCP, PPP, Frame Relay, and ACL security.',
        tags: ['Cisco', 'WAN', 'Routing'],
        image: '/certificates/preview/gunadarma-cisco-wan.webp',
        imageWidth: 1100,
        imageHeight: 1556,
        imagePosition: 'top',
        pdf: '/certificates/gunadarma-cisco-wan.pdf',
    },
    {
        title: 'Java (J2SE) Beginner',
        category: 'Training Certificate',
        issuer: 'Universitas Gunadarma',
        date: '19 August 2024',
        credentialId: 'No. 188103',
        validity: 'Certificate of Training',
        description:
            'Java programming fundamentals: classes, objects, methods, inheritance, polymorphism, exception handling, threads, and Windows applications.',
        tags: ['Java', 'OOP', 'Programming'],
        image: '/certificates/preview/gunadarma-java-beginner.webp',
        imageWidth: 1100,
        imageHeight: 1556,
        imagePosition: 'top',
        pdf: '/certificates/gunadarma-java-beginner.pdf',
    },
    {
        title: 'Building Website Using HTML5',
        category: 'Training Certificate',
        issuer: 'Universitas Gunadarma',
        date: '25 July 2024',
        credentialId: 'No. 381352',
        validity: 'Certificate of Training',
        description:
            'HTML5 workshop covering semantic elements, audio and video, canvas graphics, and building a simple website from scratch.',
        tags: ['HTML5', 'Web Development'],
        image: '/certificates/preview/gunadarma-html5-workshop.webp',
        imageWidth: 1100,
        imageHeight: 1556,
        imagePosition: 'top',
        pdf: '/certificates/gunadarma-html5-workshop.pdf',
    },
    {
        title: 'Local Area Network Using Cisco Router',
        category: 'Training Certificate',
        issuer: 'Universitas Gunadarma',
        date: '19 February 2024',
        credentialId: 'No. 115410',
        validity: 'Certificate of Training',
        description:
            'LAN training covering network architecture, Cisco IOS configuration, subnetting and CIDR, routing and switching, and VLAN implementation.',
        tags: ['Cisco', 'LAN', 'VLAN'],
        image: '/certificates/preview/gunadarma-cisco-lan.webp',
        imageWidth: 1100,
        imageHeight: 1556,
        imagePosition: 'top',
        pdf: '/certificates/gunadarma-cisco-lan.pdf',
    },
    {
        title: 'Fundamental Networking',
        category: 'Training Certificate',
        issuer: 'Universitas Gunadarma',
        date: '21 August 2023',
        credentialId: 'No. 267080',
        validity: 'Certificate of Training',
        description:
            'Networking fundamentals covering the OSI model, TCP/IP, Packet Tracer, and Cisco, Mikrotik, and Juniper router basics.',
        tags: ['Networking', 'TCP/IP', 'Routing'],
        image: '/certificates/preview/gunadarma-fundamental-networking.webp',
        imageWidth: 1100,
        imageHeight: 1556,
        imagePosition: 'top',
        pdf: '/certificates/gunadarma-fundamental-networking.pdf',
    },
];
