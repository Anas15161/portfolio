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
    title: "Smart Grid Optimizer",
    category: ["Web", "AI", "DevOps"],
    description: {
      fr: "Plateforme distribuée d'optimisation énergétique en temps réel. Moteur d'IA (RL & Federated Learning) et supervision IoT.",
      en: "Distributed real-time energy grid optimizer. AI engine (RL & Federated Learning) and IoT supervision dashboard."
    },
    longDescription: {
      fr: "Smart Grid Optimizer est une plateforme innovante conçue dans le cadre du département GI&IA de l'EMG. Elle combine l'Edge Computing pour la prise de décision locale, le Reinforcement Learning (PPO/DQN) pour l'auto-stabilisation du réseau face aux pics de charge, et le Federated Learning pour coordonner les nœuds de manière sécurisée et décentralisée. Le système comprend un pipeline de streaming de données InfluxDB/Kafka et une interface React fluide.",
      en: "Smart Grid Optimizer is an innovative distributed energy optimization platform. It combines Edge Computing for local decisions, Reinforcement Learning (PPO/DQN) for self-stabilization during consumption peaks, and Federated Learning to coordinate nodes without data centralization. It features a robust real-time IoT streaming pipeline with Kafka, InfluxDB, and an interactive React dashboard."
    },
    features: {
      fr: [
        "Simulation interactive de pics de consommation avec réponse autonome de l'agent RL",
        "Visualisation de séries temporelles de charge et délestage en direct sur React",
        "Architecture IoT distribuée (MQTT, Apache Kafka, base séries temporelles InfluxDB)",
        "Modélisation UML complète et planification de projet Agile Scrum (Gantt, PERT)"
      ],
      en: [
        "Interactive grid load peak simulation with real-time RL agent response log",
        "Live time-series chart monitoring frequency, voltage, and CO2 savings on React",
        "Distributed IoT pipeline (MQTT, Apache Kafka, InfluxDB TSDB)",
        "Comprehensive UML designs and Agile Scrum Gantt/PERT project planning"
      ]
    },
    screenshots: [
      "/projects/smartgrid/smart-grid.png",
      "/projects/smartgrid/usecase.jpeg",
      "/projects/smartgrid/seq.jpeg",
      "/projects/smartgrid/class.jpeg"
    ],
    stack: ["React", "Python", "PyTorch", "Kafka", "MQTT", "InfluxDB", "Docker"],
    status: { fr: "Terminé (EMG)", en: "Completed (EMG)" },
    github: "https://github.com/Anas15161/SmartGrid.git",
    demo: "#"
  },
  {
    id: 2,
    title: "Telecom Churn Analytics",
    category: ["Web", "AI", "Data Science"],
    description: {
      fr: "Système de prédiction industrielle du taux d'attrition client (churn) pour Horizon Telecom avec interface Web interactive.",
      en: "Industrial client churn prediction system for Horizon Telecom featuring a reactive Web simulation dashboard."
    },
    longDescription: {
      fr: "Développé pour l'opérateur Horizon Telecom selon la méthodologie CRISP-DM. Ce projet s'attaque au problème critique de l'attrition. Il comprend l'exploration de données (EDA), l'équilibrage par SMOTEENN, l'entraînement de classificateurs ML (Random Forest champion à 95.9% F1-score), et le déploiement sur un serveur Web Flask permettant des prédictions unitaires et des analyses batch par importation de fichiers CSV/Excel.",
      en: "Developed for Horizon Telecom following the CRISP-DM methodology. This project predicts customer attrition to orchestrate targeted loyalty campaigns. Includes Exploratory Data Analysis (EDA), SMOTEENN class balancing, model training (Random Forest champion with 95.9% F1-score), and deployment on a Flask web server for single predictions or batch CSV uploads."
    },
    features: {
      fr: [
        "Formulaire de simulation en temps réel avec profils prédéfinis injectables",
        "Analyse Batch permettant le chargement de listes de clients (CSV/Excel)",
        "Tableau comparatif dynamique des performances des algorithmes ML évalués",
        "Exportation directe des rapports de prédiction batch au format CSV"
      ],
      en: [
        "Real-time interactive profile simulation form with one-click presets",
        "Batch Client Analytics via CSV/Excel drag-and-drop file upload",
        "Model performance comparison detailing confusion matrices and ROC curves",
        "Direct export of batch predictions to downloadable CSV files"
      ]
    },
    screenshots: [
      "/projects/churn/screenshot_prediction_individuelle.png",
      "/projects/churn/screenshot_prediction_groupe.png",
      "/projects/churn/figure14_confusion_matrices.png",
      "/projects/churn/figure17_facteurs_determinants.png"
    ],
    stack: ["Flask", "Python", "Scikit-Learn", "SMOTEENN", "HTML/CSS/JS", "Pandas"],
    status: { fr: "Livré", en: "Delivered" },
    github: "https://github.com/Anas15161/Telecom-Churn-Analytics.git",
    demo: "#"
  },
  {
    id: 3,
    title: "DevOps CI/CD Dashboard",
    category: ["DevOps", "Web"],
    description: {
      fr: "Pipeline de déploiement continu automatisé et tableau de bord de métriques de conteneurs en temps réel.",
      en: "Automated continuous delivery pipeline and real-time container metrics dashboard."
    },
    longDescription: {
      fr: "Ce projet démontre les meilleures pratiques de livraison de logiciels DevOps. Il met en place un pipeline GitHub Actions automatisé sur chaque commit, exécutant des tests Jest/Supertest, construisant une image Docker optimisée (taille réduite de 88% via multi-stage builds sur Alpine), la poussant sur Docker Hub, et mettant en ligne un tableau de bord Node.js affichant la santé de l'API et les informations de build injectées en temps réel.",
      en: "This repository showcases a fully-automated DevOps CI/CD pipeline built around a Node.js web dashboard. It features a GitHub Actions workflow that runs Jest tests, builds an optimized multi-stage Alpine Docker container (88% size reduction), pushes to Docker Hub, and serves live uptime, health status, and metadata injected during compilation."
    },
    features: {
      fr: [
        "Pipeline CI/CD complet automatisé (GitHub Actions & Docker Hub)",
        "Conteneurisation hautement optimisée (Image de 900Mo réduite à 110Mo)",
        "Visualisation interactive des rapports de tests Jest & couverture à 100%",
        "Explorer de code interactif expliquant l'impact DevOps de chaque fichier"
      ],
      en: [
        "Automated deployment pipeline running tests and building tagged releases",
        "Multi-stage Docker build reducing container footprint from 900MB to 110MB",
        "Visual Jest test suite dashboard showing code coverage metrics",
        "Interactive code explorer detailing the DevOps importance of each script"
      ]
    },
    screenshots: [
      "/projects/devops/banner.png"
    ],
    stack: ["Node.js", "Express", "Jest", "Docker", "GitHub Actions", "Makefile"],
    status: { fr: "Opérationnel", en: "Operational" },
    github: "https://github.com/Anas15161/devops-ci-cd-dashboard.git",
    demo: "#"
  },
  {
    id: 4,
    title: "MiniShop E-Commerce",
    category: ["Web", "E-Commerce"],
    description: {
      fr: "Plateforme e-commerce moderne et complète avec gestion de panier de sessions, factures PDF et back-office.",
      en: "Modern and fully-featured e-commerce platform with session shopping cart, PDF invoicing, and admin panel."
    },
    longDescription: {
      fr: "MiniShop est une application e-commerce construite avec Laravel 12 et Tailwind CSS. Pour les clients, elle propose un catalogue avec recherche, un panier réactif et un export de factures PDF générées à la volée. Côté administrateur, elle offre un back-office complet (CRUD produits, gestion de stock en temps réel, catégorisation, et mise à jour dynamique du statut logistique des commandes).",
      en: "MiniShop is a responsive e-commerce web application powered by Laravel 12 and Tailwind CSS. It delivers a seamless shopping experience for customers (catalog filters, session cart, secure checkout, PDF invoices) and a complete real-time administrative control panel for store owners (CRUD catalog, stock tracking, order status controls)."
    },
    features: {
      fr: [
        "Panier d'achat basé sur la session avec calculs en temps réel",
        "Génération de factures PDF professionnelles avec Barryvdh DomPDF",
        "Back-office administrateur complet (Statistiques, Produits, Commandes)",
        "Base de données relationnelle sécurisée et seeding de comptes de test"
      ],
      en: [
        "Session-based shopping cart with real-time subtotal calculations",
        "Dynamic PDF invoice generation and downloading with Barryvdh DomPDF",
        "Robust back-office suite to manage products, categories, and logistics status",
        "Secure database architecture pre-seeded with admin and client test accounts"
      ]
    },
    screenshots: [
      "/projects/minishop/Acceuil_heroSection_headerbar.jpeg",
      "/projects/minishop/boutiqueClientPage.jpeg",
      "/projects/minishop/cart.jpeg",
      "/projects/minishop/Invoice.jpeg"
    ],
    stack: ["Laravel 12", "Tailwind CSS", "AlpineJS", "Vite", "MySQL", "DomPDF"],
    status: { fr: "Livré", en: "Delivered" },
    github: "https://github.com/Anas15161/LaravelProject.git",
    demo: "#"
  },
  {
    id: 5,
    title: "StockMaster Mobile ERP",
    category: ["Mobile"],
    description: {
      fr: "Application mobile de gestion d'inventaire hors-ligne (Offline-first) avec architecture MVVM et BLoC.",
      en: "Offline-first mobile inventory management ERP built with Flutter using MVVM & BLoC."
    },
    longDescription: {
      fr: "StockMaster est une application mobile cross-platform (Android, iOS, Windows) développée avec Flutter. Conçue pour la gestion de stocks en mobilité, elle implémente une base de données locale SQLite garantissant un fonctionnement hors-ligne optimal. L'architecture repose sur un pattern MVVM strict avec gestion d'état réactive (BLoC/Provider) et intègre un scanner photo de codes-barres/QR codes.",
      en: "StockMaster is a cross-platform mobile application built with Flutter to digitalize store inventories. Adopting an offline-first strategy, it uses a local SQLite database with automatic state synchronization. It is structured with a strict MVVM pattern and includes a camera QR/Barcode scanner, secure SHA-256 local authentication, and customizable dark/light themes."
    },
    features: {
      fr: [
        "Architecture MVVM stricte et gestion d'états réactive (Provider/BLoC)",
        "Stockage SQLite local et mode hors-ligne complet (Offline-first)",
        "Scanner de codes-barres et QR codes intégré via la caméra du smartphone",
        "Exportation de rapports d'inventaire en formats PDF et Excel/CSV"
      ],
      en: [
        "Strict MVVM design architecture with reactive state management",
        "Local database persistence via SQLite for seamless offline-first capability",
        "Integrated camera barcode & QR code scanning for fast inventory checks",
        "Professional reporting exports directly to PDF and Excel/CSV formats"
      ]
    },
    screenshots: [
      "/projects/stockmaster/Tableau_de_bord.png",
      "/projects/stockmaster/products_list.png",
      "/projects/stockmaster/codescanner.png",
      "/projects/stockmaster/login.jpeg"
    ],
    stack: ["Flutter", "Dart", "SQLite", "BLoC", "MVVM", "FL Chart"],
    status: { fr: "Terminé", en: "Completed" },
    github: "https://github.com/Anas15161/stockmaster.git",
    demo: "#"
  },
  {
    id: 6,
    title: "SmartStock ERP (J2EE)",
    category: ["Web", "Enterprise"],
    description: {
      fr: "Progiciel ERP de gestion de stocks et approvisionnements en architecture J2EE N-Tiers et base de données Oracle.",
      en: "Enterprise ERP system for stock management built with Jakarta EE 10, Hibernate, and Oracle DB."
    },
    longDescription: {
      fr: "SmartStockERP est un progiciel d'entreprise structuré en couches (N-Tiers) reposant sur Jakarta EE 10. Il utilise Hibernate pour la persistance avec une base de données Oracle XE. L'application intègre l'injection de dépendances CDI, une authentification sécurisée par BCrypt (4096 itérations), le suivi de commandes fournisseurs, la traçabilité des mouvements d'inventaire, et l'exportation de rapports PDF générés par iText 7.",
      en: "SmartStockERP is a robust enterprise resource planning system built with Jakarta EE 10. Designed with a strict N-tier architecture, it features JPA/Hibernate object-relational mapping, secure BCrypt authentication, purchase order life cycle management, automatic inventory movements logging, and custom PDF report streaming with iText 7."
    },
    features: {
      fr: [
        "Architecture N-Tiers découplée (JSP, Servlets MVC, Services CDI, JPA)",
        "Contrôle d'accès basé sur les rôles (RBAC) avec filtrage d'URL",
        "Génération de rapports d'inventaire et bons de commande PDF via iText 7",
        "Tableau de bord dynamique avec graphiques interactifs (Chart.js)"
      ],
      en: [
        "Decoupled N-Tier architecture (JSP views, MVC Servlets, CDI, JPA Repositories)",
        "Role-Based Access Control (RBAC) with secure session management and filters",
        "Automated PDF generation for invoices and orders using iText 7",
        "Supervision dashboard with data visualization using Chart.js"
      ]
    },
    screenshots: [
      "/projects/smartstock/logo.png"
    ],
    stack: ["Jakarta EE 10", "Java 17", "Hibernate", "Oracle XE", "Jersey", "JSP"],
    status: { fr: "Projet Académique", en: "Academic Project" },
    github: "https://github.com/Anas15161/SmartStockERP.git",
    demo: "#"
  },
  {
    id: 7,
    title: "PlayerPredict",
    category: ["AI", "Data Science"],
    description: {
      fr: "Application de Machine Learning prédisant la titularisation des joueurs de Manchester United via Random Forest et XGBoost.",
      en: "Machine Learning sports analytics app predicting Manchester United lineup starters using Random Forest and XGBoost."
    },
    longDescription: {
      fr: "PlayerPredict est une solution complète de sports analytics. Elle entraîne et évalue des modèles prédictifs (80% d'exactitude pour Random Forest et 90% pour XGBoost) basés sur les statistiques de performance de la saison. Elle comprend un script d'entraînement automatisé, un pipeline de normalisation de données et une interface web interactive en mode sombre.",
      en: "PlayerPredict is an end-to-end sports analytics application that predicts whether a player will start in the next lineup based on seasonal metrics. Compares Random Forest and XGBoost classifiers, exports serialized pipeline models (Joblib), and provides an interactive dark-themed web dashboard for starters simulation."
    },
    features: {
      fr: [
        "Double modélisation ML comparative (Random Forest vs XGBoost)",
        "Simulateur de profil de joueur en temps réel (Bruno, Rashford, Sancho)",
        "Classement de l'importance des variables clés influençant la titularisation",
        "Script interactif de pipeline automatisé sous forme de menu console"
      ],
      en: [
        "Dual-model ML comparative training (Random Forest vs XGBoost)",
        "Real-time starter simulation UI with real player statistical presets",
        "Feature importance tracking mapping game minutes, goals, and expected metrics",
        "Automated terminal interface script for training, plotting, and running web app"
      ]
    },
    screenshots: [
      "/projects/playerpredict/screenshot_app_bruno.png",
      "/projects/playerpredict/screenshot_app_sancho.png",
      "/projects/playerpredict/comparaison_modeles.png"
    ],
    stack: ["Python", "Scikit-Learn", "XGBoost", "HTML/JS", "Pandas", "Joblib"],
    status: { fr: "Terminé", en: "Completed" },
    github: "https://github.com/Anas15161/PlayerPredict.git",
    demo: "#"
  },
  {
    id: 8,
    title: "GestionNotes Django",
    category: ["Web", "Backend"],
    description: {
      fr: "Système académique de gestion des notes et de scolarité développé en Python avec Django.",
      en: "Academic grading and student registration management system built with Django and Python."
    },
    longDescription: {
      fr: "Un portail d'établissement scolaire conçu avec Django. Il gère l'inscription des étudiants, la répartition des cours par semestre, la saisie des notes et le calcul automatique des moyennes pondérées par module. L'interface utilise Bootstrap pour un rendu clair et responsive.",
      en: "An academic school administration portal built on Django. Manages student enrollments, course schedules, grading records, and automatically calculates weighted modular averages. Built with a responsive Bootstrap frontend."
    },
    features: {
      fr: [
        "Gestion complète des étudiants, enseignants, modules et notes (CRUD)",
        "Calcul automatisé des moyennes générales et d'admissibilité",
        "Interface d'administration Django personnalisée et sécurisée",
        "Recherche avancée et filtres par promotion et niveau"
      ],
      en: [
        "Comprehensive database CRUD for students, teachers, modules, and grades",
        "Automated arithmetic calculators for average marks and module completion",
        "Secure out-of-the-box Django admin control suite",
        "Search and filter utilities sorting by student class and semester"
      ]
    },
    screenshots: [
      "/projects/notesdjango/home.jpeg",
      "/projects/notesdjango/stats.jpeg",
      "/projects/notesdjango/admin.jpeg"
    ],
    stack: ["Django", "Python", "SQLite", "Bootstrap", "HTML/CSS"],
    status: { fr: "Projet Académique", en: "Academic Project" },
    github: "https://github.com/Anas15161/GestionNotes.git",
    demo: "#"
  },
  {
    id: 9,
    title: "GestionNotes Java Swing",
    category: ["Desktop"],
    description: {
      fr: "Application de bureau pour l'administration scolaire et le suivi des notes avec Java Swing et base de données MySQL.",
      en: "Desktop application for academic grade tracking built with Java Swing and MySQL database."
    },
    longDescription: {
      fr: "Une application lourde développée en Java SE (Swing) permettant aux enseignants et administrateurs d'enregistrer les informations académiques des étudiants. Elle se connecte à un serveur MySQL local via JDBC pour gérer la persistance de manière transactionnelle.",
      en: "A robust desktop client software built with Java SE (Swing components). It enables school administrative staff to record and track academic grading data. Connects locally to a MySQL server database using JDBC drivers."
    },
    features: {
      fr: [
        "Interface graphique Java Swing intuitive avec gestionnaires de layout",
        "Connexion transactionnelle MySQL via le driver JDBC officiel",
        "Opérations CRUD d'étudiants et de relevés de notes en temps réel",
        "Validation de formulaires et gestion des exceptions SQL"
      ],
      en: [
        "Native Java Swing GUI featuring responsive layouts and table grids",
        "Transactional MySQL connectivity driven by standard JDBC interfaces",
        "Real-time database CRUD operations for academic record updates",
        "Robust input validation checks and custom SQL exception logs"
      ]
    },
    screenshots: [
      "/projects/notesswing/login.png",
      "/projects/notesswing/Gestion_etudiants.png",
      "/projects/notesswing/Gestion_notes.png"
    ],
    stack: ["Java SE", "Swing", "MySQL", "JDBC"],
    status: { fr: "Projet Académique", en: "Academic Project" },
    github: "https://github.com/Anas15161/Gestion-Notes-Java-Swing.git",
    demo: "#"
  },
  {
    id: 10,
    title: "Hospital UML & Django",
    category: ["Web", "UML"],
    description: {
      fr: "Système de gestion hospitalière conçu via modélisation UML rigoureuse et implémenté sous Django.",
      en: "Hospital management system engineered using rigorous UML modeling and implemented with Django."
    },
    longDescription: {
      fr: "Ce projet intègre l'analyse de conception et l'implémentation logicielle. Après avoir modélisé l'architecture de la clinique (cas d'utilisation, diagrammes de séquence et diagrammes de classes UML), la solution a été développée en Django. Elle permet de gérer les dossiers patients, la planification des rendez-vous et le planning de garde des médecins.",
      en: "An engineering-driven management system. After drafting the database design and patient lifecycle diagrams in UML (use case, sequence, and class diagrams), the core system was built in Django. It orchestrates patient records, scheduling of medical appointments, and doctor shifts."
    },
    features: {
      fr: [
        "Modélisation UML exhaustive (Diagrammes de Classes, Cas d'utilisation et Séquence)",
        "Gestion des patients, des dossiers de santé et de la prise de rendez-vous",
        "Rôles d'utilisateurs distincts pour les patients, les médecins et les réceptionnistes",
        "Base de données relationnelle MySQL et intégration Bootstrap"
      ],
      en: [
        "Rigorous UML blueprints (Class, Use Case, and Sequence UML Diagrams)",
        "Interactive scheduler for clinic appointments and medical charts tracking",
        "Distinct authorization profiles separating patients, doctors, and desk staff",
        "MySQL relational database backend connected to a clean Bootstrap frontend"
      ]
    },
    screenshots: [
      "/projects/hospital/landing_page.png",
      "/projects/hospital/tableau_bord.png",
      "/projects/hospital/secretaire_dashboard.png",
      "/projects/hospital/class.png"
    ],
    stack: ["Django", "UML Modeling", "Python", "MySQL", "Bootstrap"],
    status: { fr: "Projet Académique", en: "Academic Project" },
    github: "https://github.com/Anas15161/Syst-me-de-Gestion-Hospitali-re-Mod-lisation-UML.git",
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
