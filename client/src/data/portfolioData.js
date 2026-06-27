// /home/anas/Desktop/portefolio/portfolio/client/src/data/portfolioData.js
import { Code, Layers, Database, Terminal, Brain, MonitorSmartphone, Server, CloudCog } from 'lucide-react';

export const personalInfo = {
  name: "Anas Haddou",
  title: "Élève Ingénieur · Full Stack Developer",
  bio: {
    fr: "Passionné par la <span class='highlight'>qualité logicielle</span>, les <span class='highlight'>architectures scalables</span>, le <span class='highlight'>DevOps</span> et les méthodes <span class='highlight'>Agiles (Scrum)</span>. Je transforme des problèmes complexes en solutions élégantes. En tant qu'élève ingénieur à l'EMG Rabat, j'ai développé une approche rigoureuse de l'ingénierie logicielle. Je m'épanouis dans la conception de systèmes complexes et la création d'expériences utilisateur fluides.",
    en: "Passionate about <span class='highlight'>software quality</span>, <span class='highlight'>scalable architectures</span>, <span class='highlight'>DevOps</span>, and <span class='highlight'>Agile methodologies (Scrum)</span>. I transform complex problems into elegant solutions. As an engineering student at EMG Rabat, I have developed a rigorous approach to software engineering. I thrive in designing complex systems and creating seamless user experiences."
  },
  email: "haddouanas18@gmail.com",
  phone: "06 15 23 42 79",
  github: "https://github.com/Anas15161",
  linkedin: "https://linkedin.com/in/anashaddou-91600a308",
  address: "Rabat, Maroc"
};

export const skillsData = [
  {
    category: { fr: "Langages", en: "Languages" },
    icon: Code,
    skills: [
      { name: "JavaScript", level: 88 },
      { name: "PHP", level: 85 },
      { name: "SQL", level: 82 },
      { name: "Java", level: 75 },
      { name: "Python", level: 70 },
      { name: "C#", level: 65 },
      { name: "Dart", level: 60 }
    ]
  },
  {
    category: { fr: "Frameworks", en: "Frameworks" },
    icon: Layers,
    skills: [
      { name: "Laravel", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "React", level: 80 },
      { name: "Jakarta EE", level: 72 },
      { name: "Django", level: 70 },
      { name: "Flutter", level: 65 }
    ]
  },
  {
    category: { fr: "Bases de données", en: "Databases" },
    icon: Database,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Eloquent ORM", level: 82 },
      { name: "Oracle/PL/SQL", level: 72 }
    ]
  },
  {
    category: { fr: "DevOps & Outils", en: "DevOps & Tools" },
    icon: Terminal,
    skills: [
      { name: "Git", level: 85 },
      { name: "Jira/Trello", level: 78 },
      { name: "GitHub Actions", level: 70 },
      { name: "Docker", level: 65 },
      { name: "SonarQube", level: 60 },
      { name: "Burp Suite", level: 55 }
    ]
  },
  {
    category: { fr: "IA & Data", en: "AI & Data" },
    icon: Brain,
    skills: [
      { name: "Google AI Studio", level: 72 },
      { name: "Jupyter Notebook", level: 68 },
      { name: "Gemini CLI", level: 65 },
      { name: "NotebookLM", level: 60 }
    ]
  }
];

export const experienceData = [
  {
    period: { fr: "Mai–Juil. 2025", en: "May–Jul. 2025" },
    role: { fr: "Assistant Doc & Dév. Back-End — PFE", en: "Doc Assistant & Back-End Dev — Final Year Project" },
    company: "SUP MTI · Rabat | LaM3alam.ma",
    description: {
      fr: "Développé des fonctionnalités back-end avec Laravel (routes, contrôleurs, Eloquent ORM). Rédigé la documentation technique complète : spécifications, architecture, endpoints API. Appliqué Agile/Scrum : sprints, revues de code, gestion sur Jira/Trello.",
      en: "Developed back-end features with Laravel (routes, controllers, Eloquent ORM). Wrote comprehensive technical documentation: specifications, architecture, API endpoints. Applied Agile/Scrum: sprints, code reviews, managed on Jira/Trello."
    },
    stack: ["Laravel", "PHP", "MySQL", "Agile", "Git"]
  },
  {
    period: { fr: "Mars–Avr. 2025", en: "Mar–Apr. 2025" },
    role: { fr: "Développeur Back-End — Projet Tayssir", en: "Back-End Developer — Tayssir Project" },
    company: "MJTECH · Temara",
    description: {
      fr: "Implémenté la génération automatique de rapports HTML/PDF. Développé des vues Blade dynamiques selon les formulaires. Conçu des contrôleurs Laravel pour le traitement des données.",
      en: "Implemented automatic generation of HTML/PDF reports. Developed dynamic Blade views according to forms. Designed Laravel controllers for data processing."
    },
    stack: ["Laravel", "Blade", "PHP", "MySQL", "PDF Export"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "LaM3alam.ma (PFE)",
    category: ["Web", "SaaS", "Backend"],
    description: {
      fr: "Plateforme éducative en ligne. Back-end Laravel complet, API REST documentée, architecture MVC, gestion des rôles.",
      en: "Online educational platform. Complete Laravel back-end, documented REST API, MVC architecture, role management."
    },
    longDescription: {
      fr: "LaM3alam.ma est mon Projet de Fin d'Études, une plateforme éducative innovante conçue pour connecter les enseignants et les élèves. J'ai pris en charge le développement intégral du Back-end en utilisant le framework Laravel. Ce projet se distingue par son architecture MVC stricte, la création d'une API RESTful complète et hautement documentée, ainsi qu'un système avancé de gestion des rôles et des permissions. Les méthodes Agile et Scrum ont été appliquées tout au long du cycle de développement pour garantir une livraison itérative et de qualité.",
      en: "LaM3alam.ma is my Final Year Project, an innovative educational platform designed to connect teachers and students. I took charge of the full Back-end development using the Laravel framework. This project is distinguished by its strict MVC architecture, the creation of a complete and highly documented RESTful API, as well as an advanced role and permission management system. Agile and Scrum methods were applied throughout the development cycle to ensure iterative and high-quality delivery."
    },
    features: {
      fr: ["Architecture MVC Robuste", "API RESTful documentée (Swagger/Postman)", "Système complexe d'authentification et d'autorisation", "Modélisation de base de données avancée avec Eloquent ORM", "Dashboard administrateur complet"],
      en: ["Robust MVC Architecture", "Documented RESTful API (Swagger/Postman)", "Complex authentication and authorization system", "Advanced database modeling with Eloquent ORM", "Comprehensive admin dashboard"]
    },
    screenshots: [
      "https://placehold.co/1200x800/2a2a2a/00f5ff?text=LaM3alam+Dashboard",
      "https://placehold.co/1200x800/2a2a2a/00f5ff?text=LaM3alam+API+Docs"
    ],
    stack: ["Laravel", "PHP", "MySQL", "Eloquent", "REST API", "Agile"],
    status: { fr: "En production (PFE)", en: "In production" },
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Tayssir",
    category: ["Web", "Backend"],
    description: {
      fr: "Système de génération automatique de rapports officiels. Vues Blade dynamiques, export HTML/PDF, filtrage avancé.",
      en: "Automatic official report generation system. Dynamic Blade views, HTML/PDF export, advanced filtering."
    },
    longDescription: {
      fr: "Le projet Tayssir a été développé pour automatiser et digitaliser la création de rapports officiels. J'ai implémenté un système de génération de documents complexes en HTML et PDF. L'interface repose sur des vues Blade dynamiques qui s'adaptent instantanément aux formulaires remplis par les utilisateurs. Le backend, propulsé par Laravel, assure un traitement de données rapide et sécurisé, incluant un système de filtrage de données multicritères très performant.",
      en: "The Tayssir project was developed to automate and digitize the creation of official reports. I implemented a system for generating complex documents in HTML and PDF. The interface is based on dynamic Blade views that adapt instantly to user-filled forms. The backend, powered by Laravel, ensures fast and secure data processing, including a high-performance multi-criteria data filtering system."
    },
    features: {
      fr: ["Génération automatisée de rapports PDF", "Vues Laravel Blade dynamiques et réactives", "Traitement par lots de données volumineuses", "Système de recherche et filtres avancés"],
      en: ["Automated PDF report generation", "Dynamic and reactive Laravel Blade views", "Batch processing of large datasets", "Advanced search and filtering system"]
    },
    screenshots: [
      "https://placehold.co/1200x800/2a2a2a/00f5ff?text=Tayssir+Reporting",
      "https://placehold.co/1200x800/2a2a2a/00f5ff?text=Tayssir+PDF+Export"
    ],
    stack: ["Laravel", "Blade", "PHP", "MySQL", "PDF Export"],
    status: { fr: "Livré", en: "Delivered" },
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "SmartStock ERP",
    category: ["Web", "Backend"],
    description: {
      fr: "ERP de gestion d'interventions et stocks. Migration Java SE vers Jakarta EE 10, API Jersey REST, Hibernate ORM, Oracle XE.",
      en: "Intervention and inventory management ERP. Migration from Java SE to Jakarta EE 10, Jersey REST API, Hibernate ORM, Oracle XE."
    },
    longDescription: {
      fr: "SmartStock ERP est un projet académique majeur visant à moderniser un système d'information de bureau (Java SE) vers une architecture web d'entreprise (Jakarta EE 10). L'application gère les stocks de matériel et planifie les interventions techniques. Le développement a mis l'accent sur la robustesse du backend avec la création d'une API RESTful (Jersey), le mapping objet-relationnel complexe (Hibernate) et l'intégration avec une base de données Oracle XE.",
      en: "SmartStock ERP is a major academic project aimed at modernizing a desktop information system (Java SE) to an enterprise web architecture (Jakarta EE 10). The application manages hardware inventory and schedules technical interventions. The development focused on backend robustness with the creation of a RESTful API (Jersey), complex object-relational mapping (Hibernate), and integration with an Oracle XE database."
    },
    features: {
      fr: ["Migration d'architecture monolithique vers web", "Intégration Jakarta EE 10 et Hibernate", "API REST développée avec Jersey", "Gestion de base de données relationnelle Oracle XE"],
      en: ["Migration from monolithic to web architecture", "Jakarta EE 10 and Hibernate integration", "REST API developed with Jersey", "Oracle XE relational database management"]
    },
    screenshots: [
      "https://placehold.co/1200x800/2a2a2a/00f5ff?text=SmartStock+ERP",
      "https://placehold.co/1200x800/2a2a2a/00f5ff?text=SmartStock+Inventory"
    ],
    stack: ["Jakarta EE", "Java 17", "Oracle XE", "Hibernate", "Jersey", "Bootstrap"],
    status: { fr: "Projet académique", en: "Academic project" },
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "AeroSource SaaS",
    category: ["Web", "SaaS"],
    description: {
      fr: "Solution cloud de gestion de l'eau via capteurs IoT. Dashboard temps réel, alertes automatisées, API sécurisée.",
      en: "Cloud solution for water management via IoT sensors. Real-time dashboard, automated alerts, secure API."
    },
    longDescription: {
      fr: "AeroSource est un prototype SaaS innovant exploitant l'Internet des Objets (IoT) pour la gestion intelligente des ressources en eau. Le système collecte en temps réel les données de multiples capteurs, les stocke dans PostgreSQL via un backend robuste en Django, et les affiche sur un dashboard interactif en React. L'architecture inclut des systèmes d'alertes automatisés en cas de détection d'anomalies, le tout conteneurisé avec Docker.",
      en: "AeroSource is an innovative SaaS prototype leveraging the Internet of Things (IoT) for smart water resource management. The system collects real-time data from multiple sensors, stores it in PostgreSQL via a robust Django backend, and displays it on an interactive React dashboard. The architecture includes automated alert systems for anomaly detection, all containerized with Docker."
    },
    features: {
      fr: ["Intégration de données IoT en temps réel", "Dashboard analytique interactif (React)", "Système d'alertes et de notifications automatisées", "Backend API sécurisé (Django REST Framework)"],
      en: ["Real-time IoT data integration", "Interactive analytical dashboard (React)", "Automated alert and notification system", "Secure API backend (Django REST Framework)"]
    },
    screenshots: [
      "https://placehold.co/1200x800/2a2a2a/00f5ff?text=AeroSource+Dashboard",
      "https://placehold.co/1200x800/2a2a2a/00f5ff?text=AeroSource+IoT+Metrics"
    ],
    stack: ["Django", "React", "Python", "PostgreSQL", "IoT", "Docker"],
    status: { fr: "Prototype", en: "Prototype" },
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    title: "StockMaster App",
    category: ["Mobile"],
    description: {
      fr: "Application mobile d'inventaire avec architecture MVVM stricte. Navigation UI contrôlée, BLoC pattern, sync offline/online.",
      en: "Mobile inventory app with strict MVVM architecture. Controlled UI navigation, BLoC pattern, offline/online sync."
    },
    longDescription: {
      fr: "StockMaster est une application mobile cross-platform construite avec Flutter, axée sur la gestion d'inventaire en mobilité. L'application se distingue par son architecture technique avancée : elle implémente strictement le pattern MVVM et utilise BLoC pour une gestion d'état prédictible. Une de ses caractéristiques phares est sa capacité à fonctionner hors-ligne grâce à une base de données SQLite locale, qui se synchronise automatiquement avec le serveur une fois la connexion rétablie.",
      en: "StockMaster is a cross-platform mobile application built with Flutter, focused on mobile inventory management. The app stands out for its advanced technical architecture: it strictly implements the MVVM pattern and uses BLoC for predictable state management. One of its key features is its ability to work offline using a local SQLite database, which automatically syncs with the server once the connection is restored."
    },
    features: {
      fr: ["Architecture MVVM et State Management (BLoC)", "Support du mode Hors-Ligne (Offline-first)", "Synchronisation de base de données locale (SQLite) vers Distante", "Interface Utilisateur fluide et animations personnalisées"],
      en: ["MVVM Architecture and State Management (BLoC)", "Offline-first mode support", "Local (SQLite) to Remote database synchronization", "Smooth User Interface and custom animations"]
    },
    screenshots: [
      "https://placehold.co/600x1200/2a2a2a/00f5ff?text=StockMaster+Home",
      "https://placehold.co/600x1200/2a2a2a/00f5ff?text=StockMaster+Scanner"
    ],
    stack: ["Flutter", "Dart", "SQLite", "MVVM", "BLoC"],
    status: { fr: "En développement", en: "In development" },
    github: "#",
    demo: "#"
  }
];

export const educationData = [
  {
    school: "EMG Rabat",
    degree: { fr: "Cycle Ingénieur Génie Informatique BAC+4", en: "Software Engineering Degree BAC+4" },
    period: { fr: "2025–Présent", en: "2025–Present" },
    location: "Rabat, Maroc",
    description: {
      fr: "Formation d'ingénieur d'état spécialisée en ingénierie logicielle et architectures distribuées.",
      en: "State engineering degree specialized in software engineering and distributed architectures."
    },
    modules: ["Génie Logiciel Avancé", "Architectures Microservices", "Intelligence Artificielle", "Sécurité des SI", "DevOps & Cloud"]
  },
  {
    school: "SUP MTI Rabat",
    degree: { fr: "Licence Pro ISI BAC+3", en: "Professional License ISI BAC+3" },
    period: "2024–2025",
    location: "Rabat, Maroc",
    description: {
      fr: "Licence professionnelle en Ingénierie des Systèmes d'Information.",
      en: "Professional License in Information Systems Engineering."
    },
    modules: ["Développement Web Avancé (Laravel/React)", "Bases de données avancées (Oracle)", "Gestion de projet (Scrum)", "Administration Système"]
  },
  {
    school: "ISTA Témara",
    degree: { fr: "Technicien Web Full Stack BAC+2", en: "Web Full Stack Technician BAC+2" },
    period: "2022–2024",
    location: "Témara, Maroc",
    description: {
      fr: "Formation technique approfondie axée sur le développement web full stack.",
      en: "In-depth technical training focused on full stack web development."
    },
    modules: ["HTML/CSS/JS", "PHP/MySQL", "Frameworks Front-end", "Conception UML"]
  },
  {
    school: "Lycée Omar Oujda",
    degree: { fr: "Bac Sciences Physiques", en: "High School Diploma (Physics)" },
    period: "2021",
    location: "Oujda, Maroc",
    description: {
      fr: "Baccalauréat scientifique option Sciences Physiques.",
      en: "Scientific Baccalaureate with Physics option."
    },
    modules: ["Mathématiques", "Physique-Chimie", "Sciences de l'Ingénieur"]
  }
];

export const languagesData = [
  { name: { fr: "Arabe", en: "Arabic" }, level: 100, comment: { fr: "Langue maternelle", en: "Native" }, color: "bg-accent1" },
  { name: { fr: "Français", en: "French" }, level: 90, comment: { fr: "Courant", en: "Fluent" }, color: "bg-accent2" },
  { name: { fr: "Anglais", en: "English" }, level: 65, comment: { fr: "Intermédiaire technique", en: "Technical Intermediate" }, color: "bg-gray-500" }
];

export const servicesData = [
  {
    icon: MonitorSmartphone,
    title: { fr: "Développement Frontend", en: "Frontend Development" },
    description: {
      fr: "Création d'interfaces utilisateur modernes, responsives et animées avec React, Tailwind CSS et Framer Motion.",
      en: "Creation of modern, responsive, and animated user interfaces with React, Tailwind CSS, and Framer Motion."
    },
    tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"]
  },
  {
    icon: Server,
    title: { fr: "Développement Backend & API", en: "Backend & API Development" },
    description: {
      fr: "Conception d'APIs RESTful robustes, sécurisées et scalables avec Node.js, Express ou Laravel.",
      en: "Design of robust, secure, and scalable RESTful APIs with Node.js, Express, or Laravel."
    },
    tech: ["Laravel", "Node.js", "REST API", "Microservices"]
  },
  {
    icon: Database,
    title: { fr: "Modélisation de Données", en: "Data Modeling" },
    description: {
      fr: "Architecture, optimisation et requêtage avancé sur des bases de données SQL (MySQL, Oracle) et NoSQL.",
      en: "Architecture, optimization, and advanced querying on SQL (MySQL, Oracle) and NoSQL databases."
    },
    tech: ["MySQL", "Oracle", "PostgreSQL", "Eloquent ORM"]
  },
  {
    icon: CloudCog,
    title: { fr: "Intégration & DevOps", en: "Integration & DevOps" },
    description: {
      fr: "Mise en place de pipelines CI/CD, conteneurisation avec Docker et respect des bonnes pratiques agiles.",
      en: "Implementation of CI/CD pipelines, containerization with Docker, and adherence to agile best practices."
    },
    tech: ["Docker", "GitHub Actions", "SonarQube", "Agile/Scrum"]
  }
];

export const articlesData = [
  {
    id: 1,
    title: {
      fr: "L'Architecture Microservices avec Node.js",
      en: "Microservices Architecture with Node.js"
    },
    excerpt: {
      fr: "Découvrez comment structurer efficacement une application scalable en divisant vos services pour une meilleure maintenabilité.",
      en: "Learn how to efficiently structure a scalable application by dividing your services for better maintainability."
    },
    date: "12 Oct 2025",
    readTime: { fr: "5 min de lecture", en: "5 min read" },
    tags: ["Node.js", "Architecture"],
    image: "https://placehold.co/600x400/1a1a1a/00f5ff?text=Microservices",
    content: {
      fr: [
        { type: 'text', value: "L'architecture microservices est devenue le standard pour le développement d'applications scalables et résilientes. Dans cet article, nous allons voir comment implémenter cette architecture avec Node.js et Docker." },
        { type: 'image', value: "https://placehold.co/800x400/1a1a1a/00f5ff?text=Schema+Architecture", caption: "Schéma d'une architecture microservices classique" },
        { type: 'heading', value: "Les avantages des microservices" },
        { type: 'text', value: "Contrairement au monolithe, les microservices permettent de diviser le code en petits composants indépendants. Cela facilite le déploiement continu, permet d'utiliser différentes technologies selon le besoin, et offre une scalabilité ciblée." },
        { type: 'file', value: "#", name: "Code_Source_Exemple.zip", size: "2.4 MB" }
      ],
      en: [
        { type: 'text', value: "Microservices architecture has become the standard for developing scalable and resilient applications. In this article, we will see how to implement this architecture with Node.js and Docker." },
        { type: 'image', value: "https://placehold.co/800x400/1a1a1a/00f5ff?text=Architecture+Diagram", caption: "Classic microservices architecture diagram" },
        { type: 'heading', value: "Benefits of microservices" },
        { type: 'text', value: "Unlike monoliths, microservices allow dividing code into small independent components. This facilitates continuous deployment, allows using different technologies as needed, and offers targeted scalability." },
        { type: 'file', value: "#", name: "Example_Source_Code.zip", size: "2.4 MB" }
      ]
    }
  },
  {
    id: 2,
    title: {
      fr: "Optimiser les performances sous React 18",
      en: "Optimizing performance in React 18"
    },
    excerpt: {
      fr: "Comprendre les concurrent features et comment utiliser useTransition pour des interfaces utilisateurs parfaitement fluides.",
      en: "Understanding concurrent features and how to use useTransition for perfectly smooth user interfaces."
    },
    date: "05 Nov 2025",
    readTime: { fr: "8 min de lecture", en: "8 min read" },
    tags: ["React", "Performance"],
    image: "https://placehold.co/600x400/1a1a1a/7c3aed?text=React+18",
    content: {
      fr: [
        { type: 'text', value: "React 18 apporte des changements majeurs, notamment le rendu concurrent. Cela permet à React de mettre en pause, de reprendre ou d'abandonner un rendu." },
        { type: 'heading', value: "Le hook useTransition" },
        { type: 'text', value: "Ce hook permet de marquer certaines mises à jour d'état comme non urgentes. L'interface utilisateur reste ainsi réactive même lors de traitements lourds." },
        { type: 'gallery', images: [
          "https://placehold.co/400x300/1a1a1a/7c3aed?text=Screenshot+1",
          "https://placehold.co/400x300/1a1a1a/7c3aed?text=Screenshot+2",
          "https://placehold.co/400x300/1a1a1a/7c3aed?text=Screenshot+3"
        ]},
        { type: 'file', value: "#", name: "CheatSheet_React18.pdf", size: "1.1 MB" }
      ],
      en: [
        { type: 'text', value: "React 18 brings major changes, notably concurrent rendering. This allows React to pause, resume, or abandon a render." },
        { type: 'heading', value: "The useTransition hook" },
        { type: 'text', value: "This hook allows marking some state updates as non-urgent. The user interface thus remains responsive even during heavy processing." },
        { type: 'gallery', images: [
          "https://placehold.co/400x300/1a1a1a/7c3aed?text=Screenshot+1",
          "https://placehold.co/400x300/1a1a1a/7c3aed?text=Screenshot+2",
          "https://placehold.co/400x300/1a1a1a/7c3aed?text=Screenshot+3"
        ]},
        { type: 'file', value: "#", name: "React18_CheatSheet.pdf", size: "1.1 MB" }
      ]
    }
  },
  {
    id: 3,
    title: {
      fr: "Déploiement CI/CD avec GitHub Actions",
      en: "CI/CD Deployment with GitHub Actions"
    },
    excerpt: {
      fr: "Automatisez vos tests et vos déploiements en toute simplicité grâce à la puissance des workflows GitHub Actions.",
      en: "Automate your tests and deployments with ease using the power of GitHub Actions workflows."
    },
    date: "20 Dec 2025",
    readTime: { fr: "6 min de lecture", en: "6 min read" },
    tags: ["DevOps", "CI/CD"],
    image: "https://placehold.co/600x400/1a1a1a/00f5ff?text=CI/CD",
    content: {
      fr: [
        { type: 'text', value: "Mettre en place une pipeline CI/CD robuste est indispensable pour garantir la qualité de votre code. Avec GitHub Actions, ce processus devient intégré et naturel." },
        { type: 'heading', value: "Structure d'un Workflow" },
        { type: 'text', value: "Un workflow est composé de jobs, qui sont eux-mêmes composés d'étapes (steps). Vous pouvez déclencher ces workflows sur des événements spécifiques comme un push ou une pull request." },
        { type: 'image', value: "https://placehold.co/800x400/1a1a1a/00f5ff?text=GitHub+Actions+Pipeline", caption: "Exemple de pipeline CI/CD" }
      ],
      en: [
        { type: 'text', value: "Setting up a robust CI/CD pipeline is essential to guarantee your code's quality. With GitHub Actions, this process becomes integrated and natural." },
        { type: 'heading', value: "Workflow Structure" },
        { type: 'text', value: "A workflow is composed of jobs, which are themselves composed of steps. You can trigger these workflows on specific events like a push or a pull request." },
        { type: 'image', value: "https://placehold.co/800x400/1a1a1a/00f5ff?text=GitHub+Actions+Pipeline", caption: "Example of a CI/CD pipeline" }
      ]
    }
  }
];
