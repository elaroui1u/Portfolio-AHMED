import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Linkedin, ExternalLink, Code, Database, Award, ChevronDown, ArrowRight, Globe } from 'lucide-react';

/* =========================================================
   CONTENU BILINGUE (FR / EN)
   ========================================================= */

const content = {
  fr: {
    meta: { title: 'Ahmed EL AROUI – Analytics Data Engineer' },
    navigation: [
      { id: 'home', label: 'Accueil' },
      { id: 'about', label: 'À propos' },
      { id: 'experience', label: 'Expérience' },
      { id: 'projects', label: 'Projets' },
      { id: 'skills', label: 'Compétences' },
      { id: 'contact', label: 'Contact' }
    ],
    hero: {
      role: 'Analytics Data Engineer',
      intro: [
        'Spécialisé en ', 'Power BI', ', ', 'SQL', ', ', 'Databricks', ' et ', 'Microsoft Fabric',
        '. Du recueil du besoin au tableau de bord : pipelines de données et solutions décisionnelles à forte valeur métier.'
      ],
      contact: 'Me contacter',
      projects: 'Voir mes projets'
    },
    about: {
      title: 'À propos',
      education: 'Formation',
      master: 'Master EEA',
      masterSub: "Mesure et Traitement de l'Information",
      licence: 'Licence SPI EEA',
      university: 'Université de Lorraine (Metz)',
      certsLangs: 'Certifications & Langues',
      certificate: 'Certificat',
      languages: [
        { name: 'Français', level: 'Courant' },
        { name: 'Anglais', level: 'Professionnel' },
        { name: 'Arabe', level: 'Natif' }
      ]
    },
    experienceTitle: 'Expérience Professionnelle',
    experiences: [
      {
        title: 'Data Engineer – Analytics',
        company: 'Capgemini Engineering - Stellantis',
        period: 'Juin 2024 - Présent',
        achievements: [
          'Conception et maintenance de dashboards Power BI de pilotage (flottes et dataloggers, matériel, performance équipe), du recueil du besoin à la mise en production',
          'Monitoring de la batterie 12V des véhicules : recueil et analyse du besoin, puis développement de bout en bout (Databricks, Delta Lake, Power BI, Power Automate)',
          'Pipelines ETL/ELT multi-sources (API, SharePoint, DocInfo) sur Databricks avec SQL, PySpark et Delta : optimisation SQL de 40% des performances',
          'Contrôle de version sur Microsoft Fabric (GitHub) pour les modèles sémantiques et rapports Power BI',
          'Outils Python de contrôle qualité des signaux CAN/LIN (DBC) : -30% de temps de traitement, et de décodage de données véhicule (MF4, PCAP/PCAPNG)'
        ]
      },
      {
        title: 'Associate Software Engineer – Automotive',
        company: 'Capgemini Engineering - Stellantis',
        period: 'Déc. 2022 - Juin 2024',
        achievements: [
          'Plans de test et rapports de validation pour des applications embarquées sur boîtiers télématiques autonomes',
          "Campagnes de tests applicatifs, diagnostic, analyse et validation des anomalies",
          'Scripts JIRA automatisant la génération des plans de test selon la version logicielle et le type de validation'
        ]
      },
      {
        title: 'Data Scientist Junior / Développeur Fullstack',
        company: 'Uzerly by CibleClic',
        period: 'Déc. 2021 - Nov. 2022',
        achievements: [
          "Système de scoring pour segmenter les internautes et cibler les publicités : +40% d'efficacité des campagnes marketing",
          'Outils sur mesure pour les équipes Account Management : -50% de temps de traitement des campagnes',
          "Accompagnement des clients dans l'implémentation et la personnalisation des outils Uzerly"
        ]
      }
    ],
    projectsTitle: 'Projets',
    learnMore: 'En savoir plus',
    projects: [
      {
        title: 'Monitoring de la batterie 12V',
        description: "Suivi de la tension batterie des véhicules de flotte équipés de dataloggers : recueil et analyse du besoin, ingestion via API, détection des alertes de basse tension sur Databricks, dashboard Power BI et envoi automatique des alertes.",
        tech: ['Databricks', 'Delta Lake', 'PySpark', 'Power BI', 'Power Automate'],
        link: null,
        color: 'from-cyan-500 to-blue-500'
      },
      {
        title: 'Dashboards de pilotage des flottes',
        description: "Dashboards Power BI de monitoring des dataloggers (activité, versions, transferts, connectivité), de gestion du matériel et des configurations, et de suivi de la performance équipe.",
        tech: ['Power BI', 'DAX', 'Power Query', 'SQL'],
        link: null,
        color: 'from-green-500 to-emerald-500'
      },
      {
        title: 'Pipelines ETL/ELT & Microsoft Fabric',
        description: "Pipelines multi-sources sur Databricks (SQL optimisé : +40% de performance) et mise en place du contrôle de version sur Microsoft Fabric avec GitHub pour les modèles sémantiques et rapports Power BI.",
        tech: ['Databricks', 'Delta Lake', 'Microsoft Fabric', 'GitHub'],
        link: null,
        color: 'from-indigo-500 to-violet-500'
      },
      {
        title: 'Outils Python Qualité & Décodage',
        description: "Contrôle qualité automatisé des signaux CAN/LIN à partir des fichiers DBC (-30% de temps de traitement) et outil de décodage de données véhicule (MF4, PCAP/PCAPNG, DBC, LDF, ARXML).",
        tech: ['Python', 'DBC', 'MF4', 'PCAP', 'CAN/LIN'],
        link: null,
        color: 'from-orange-500 to-amber-500'
      },
      {
        title: 'Système de Scoring Marketing',
        description: "Plateforme d'analyse prédictive pour optimiser les campagnes marketing avec amélioration de 40% de l'efficacité.",
        tech: ['Python', 'PySpark', 'Databricks', 'SQL'],
        link: null,
        color: 'from-purple-500 to-pink-500'
      },
      {
        title: 'Modèle CNN pour Détection de Pneumonie',
        description: "Développement d'un réseau de neurones convolutif pour la prédiction de pneumonie sur radiographies pulmonaires. Projet incluant prétraitement d'images médicales, entraînement supervisé et évaluation de performance.",
        tech: ['Python', 'TensorFlow', 'Keras', 'CNN'],
        link: null,
        color: 'from-blue-500 to-cyan-500'
      }
    ],
    skillsTitle: 'Compétences',
    skills: {
      'BI & Visualisation': {
        items: ['Power BI (DAX, Power Query, dashboards)', 'Copilot pour Power BI', 'Power Automate', 'Dataiku'],
        icon: '📊'
      },
      'SQL & Modélisation analytique': {
        items: ['Requêtes complexes (CTE, window functions)', 'Optimisation de performances', 'Modélisation analytique (Star Schema)', 'KPI et indicateurs métier'],
        icon: '🎯'
      },
      'Data Engineering': {
        items: ['Databricks, PySpark, Delta Lake', 'Microsoft Fabric, OneLake, ADLS Gen2', 'Pipelines ETL/ELT', 'Qualité des données'],
        icon: '⚙️'
      },
      'Langages & Outils': {
        items: ['Python', 'SQL', 'Git / GitHub', 'Docker', 'JIRA'],
        icon: '💻'
      },
      'Bases de données': {
        items: ['PostgreSQL', 'MySQL', 'MariaDB'],
        icon: '🗄️'
      },
      'Automobile & Acquisition de données': {
        items: ['CAN, LIN, TECMP', 'DBC, LDF, ARXML', 'MF4, PCAP/PCAPNG'],
        icon: '🚗'
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Restons en contact',
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
      linkedin: 'LinkedIn',
      available: 'Disponible pour de nouvelles opportunités',
      license: 'Permis B'
    },
    footer: '© 2026 Ahmed El Aroui. Tous droits réservés.'
  },

  en: {
    meta: { title: 'Ahmed EL AROUI – Analytics Data Engineer' },
    navigation: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Skills' },
      { id: 'contact', label: 'Contact' }
    ],
    hero: {
      role: 'Analytics Data Engineer',
      intro: [
        'Specialized in ', 'Power BI', ', ', 'SQL', ', ', 'Databricks', ' and ', 'Microsoft Fabric',
        '. From gathering business needs to dashboards: data pipelines and decision-making solutions with strong business value.'
      ],
      contact: 'Contact me',
      projects: 'View my projects'
    },
    about: {
      title: 'About',
      education: 'Education',
      master: "Master's degree in EEA",
      masterSub: 'Measurement and Information Processing',
      licence: "Bachelor's degree in SPI EEA",
      university: 'Université de Lorraine (Metz)',
      certsLangs: 'Certifications & Languages',
      certificate: 'Certificate',
      languages: [
        { name: 'French', level: 'Fluent' },
        { name: 'English', level: 'Professional' },
        { name: 'Arabic', level: 'Native' }
      ]
    },
    experienceTitle: 'Professional Experience',
    experiences: [
      {
        title: 'Data Engineer – Analytics',
        company: 'Capgemini Engineering - Stellantis',
        period: 'Jun 2024 - Present',
        achievements: [
          'Design and maintenance of Power BI dashboards for steering fleets and dataloggers, equipment and team performance, from requirements gathering to production',
          'Vehicle 12V battery monitoring: requirements gathering and analysis, then end-to-end development (Databricks, Delta Lake, Power BI, Power Automate)',
          'Multi-source ETL/ELT pipelines (API, SharePoint, DocInfo) on Databricks with SQL, PySpark and Delta: 40% SQL performance improvement',
          'Version control on Microsoft Fabric (GitHub) for Power BI semantic models and reports',
          'Python tools for CAN/LIN signal quality control (DBC), cutting processing time by 30%, and for vehicle data decoding (MF4, PCAP/PCAPNG)'
        ]
      },
      {
        title: 'Associate Software Engineer – Automotive',
        company: 'Capgemini Engineering - Stellantis',
        period: 'Dec 2022 - Jun 2024',
        achievements: [
          'Test plans and validation reports for applications embedded on standalone telematics units',
          'Application test campaigns, diagnosis, analysis and validation of anomalies',
          'JIRA scripts automating test plan generation by software version and validation type'
        ]
      },
      {
        title: 'Junior Data Scientist / Fullstack Developer',
        company: 'Uzerly by CibleClic',
        period: 'Dec 2021 - Nov 2022',
        achievements: [
          'Scoring system to segment web users and target ads: +40% marketing campaign efficiency',
          'Custom tools for Account Management teams: -50% campaign processing time',
          'Customer support for implementing and customizing Uzerly tools'
        ]
      }
    ],
    projectsTitle: 'Projects',
    learnMore: 'Learn more',
    projects: [
      {
        title: '12V Battery Monitoring',
        description: 'Monitoring of battery voltage on fleet vehicles equipped with dataloggers: requirements gathering and analysis, API ingestion, low-voltage alert detection on Databricks, Power BI dashboard and automatic alert delivery.',
        tech: ['Databricks', 'Delta Lake', 'PySpark', 'Power BI', 'Power Automate'],
        link: null,
        color: 'from-cyan-500 to-blue-500'
      },
      {
        title: 'Fleet Steering Dashboards',
        description: 'Power BI dashboards for datalogger monitoring (activity, versions, transfers, connectivity), equipment and configuration management, and team performance tracking.',
        tech: ['Power BI', 'DAX', 'Power Query', 'SQL'],
        link: null,
        color: 'from-green-500 to-emerald-500'
      },
      {
        title: 'ETL/ELT Pipelines & Microsoft Fabric',
        description: 'Multi-source pipelines on Databricks (optimized SQL: +40% performance) and version control on Microsoft Fabric with GitHub for Power BI semantic models and reports.',
        tech: ['Databricks', 'Delta Lake', 'Microsoft Fabric', 'GitHub'],
        link: null,
        color: 'from-indigo-500 to-violet-500'
      },
      {
        title: 'Python Quality & Decoding Tools',
        description: 'Automated CAN/LIN signal quality control from DBC files (-30% processing time) and a vehicle data decoding tool (MF4, PCAP/PCAPNG, DBC, LDF, ARXML).',
        tech: ['Python', 'DBC', 'MF4', 'PCAP', 'CAN/LIN'],
        link: null,
        color: 'from-orange-500 to-amber-500'
      },
      {
        title: 'Marketing Scoring System',
        description: 'Predictive analytics platform to optimize marketing campaigns, improving efficiency by 40%.',
        tech: ['Python', 'PySpark', 'Databricks', 'SQL'],
        link: null,
        color: 'from-purple-500 to-pink-500'
      },
      {
        title: 'CNN Model for Pneumonia Detection',
        description: 'Development of a convolutional neural network to predict pneumonia from chest X-rays. The project covers medical image preprocessing, supervised training and performance evaluation.',
        tech: ['Python', 'TensorFlow', 'Keras', 'CNN'],
        link: null,
        color: 'from-blue-500 to-cyan-500'
      }
    ],
    skillsTitle: 'Skills',
    skills: {
      'BI & Visualization': {
        items: ['Power BI (DAX, Power Query, dashboards)', 'Copilot for Power BI', 'Power Automate', 'Dataiku'],
        icon: '📊'
      },
      'SQL & Analytical Modeling': {
        items: ['Complex queries (CTE, window functions)', 'Performance optimization', 'Analytical modeling (Star Schema)', 'KPIs and business indicators'],
        icon: '🎯'
      },
      'Data Engineering': {
        items: ['Databricks, PySpark, Delta Lake', 'Microsoft Fabric, OneLake, ADLS Gen2', 'ETL/ELT pipelines', 'Data quality'],
        icon: '⚙️'
      },
      'Languages & Tools': {
        items: ['Python', 'SQL', 'Git / GitHub', 'Docker', 'JIRA'],
        icon: '💻'
      },
      'Databases': {
        items: ['PostgreSQL', 'MySQL', 'MariaDB'],
        icon: '🗄️'
      },
      'Automotive & Data Acquisition': {
        items: ['CAN, LIN, TECMP', 'DBC, LDF, ARXML', 'MF4, PCAP/PCAPNG'],
        icon: '🚗'
      }
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's stay in touch",
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      linkedin: 'LinkedIn',
      available: 'Available for new opportunities',
      license: "Driver's licence (B)"
    },
    footer: '© 2026 Ahmed El Aroui. All rights reserved.'
  }
};

/* =========================================================
   LANGUE : détection + persistance
   ========================================================= */

const getInitialLang = () => {
  try {
    const saved = window.localStorage.getItem('lang');
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {
    /* localStorage indisponible : on ignore */
  }
  return (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en';
};

const LangSwitch = ({ lang, setLang, className = '' }) => (
  <div
    className={`inline-flex items-center gap-1 rounded-full border border-cyan-400/40 bg-slate-800/60 p-1 ${className}`}
    role="group"
    aria-label="Language"
  >
    <Globe size={14} className="ml-2 text-cyan-400" aria-hidden="true" />
    {['fr', 'en'].map((code) => (
      <button
        key={code}
        type="button"
        onClick={() => setLang(code)}
        aria-pressed={lang === code}
        className={`px-3 py-1 rounded-full text-xs font-semibold uppercase transition-all duration-300 ${
          lang === code
            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow'
            : 'text-gray-300 hover:text-cyan-400'
        }`}
      >
        {code}
      </button>
    ))}
  </div>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState(getInitialLang);

  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    try {
      window.localStorage.setItem('lang', lang);
    } catch {
      /* localStorage indisponible : on ignore */
    }
  }, [lang, t.meta.title]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AEA
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {t.navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-cyan-400 scale-110'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <LangSwitch lang={lang} setLang={setLang} />
            </div>

            <div className="md:hidden flex items-center gap-3">
              <LangSwitch lang={lang} setLang={setLang} />
              <button
                className="text-white"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {t.navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-block mb-8 animate-float">
              <div className="w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl ring-4 ring-cyan-400/30">
                AE
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Ahmed El Aroui
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-400 mb-8 font-light">
              {t.hero.role}
            </p>
            <p className="max-w-3xl mx-auto text-gray-300 mb-12 text-lg leading-relaxed">
              {t.hero.intro.map((part, i) =>
                i % 2 === 1 ? (
                  <span key={i} className="text-cyan-400 font-semibold">{part}</span>
                ) : (
                  <React.Fragment key={i}>{part}</React.Fragment>
                )
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
              >
                {t.hero.contact}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 transition-all duration-300"
              >
                {t.hero.projects}
              </button>
            </div>
            <div className="mt-16 animate-bounce">
              <ChevronDown className="mx-auto text-cyan-400" size={32} />
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="min-h-screen pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-16 text-center">{t.about.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">{t.about.education}</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-cyan-400 pl-4">
                    <p className="font-semibold text-white text-lg">{t.about.master}</p>
                    <p className="text-gray-300">{t.about.masterSub}</p>
                    <p className="text-sm text-gray-400">{t.about.university}</p>
                    <p className="text-xs text-cyan-400 mt-1">2019 - 2021</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="font-semibold text-white text-lg">{t.about.licence}</p>
                    <p className="text-sm text-gray-400">{t.about.university}</p>
                    <p className="text-xs text-blue-400 mt-1">2018 - 2019</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">{t.about.certsLangs}</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg border border-purple-500/30">
                    <Award className="text-purple-400 flex-shrink-0" size={32} />
                    <div>
                      <p className="font-semibold text-white">Dataiku Core Designer</p>
                      <p className="text-sm text-gray-300">{t.about.certificate}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {t.about.languages.map((language) => (
                      <div key={language.name} className="bg-slate-800/50 p-3 rounded-lg text-center border border-slate-700">
                        <p className="font-semibold text-white">{language.name}</p>
                        <p className="text-xs text-cyan-400">{language.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {activeSection === 'experience' && (
        <section className="min-h-screen pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-16 text-center">{t.experienceTitle}</h2>
            <div className="space-y-8">
              {t.experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Code className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
                      <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 ml-18">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-3 text-lg">▸</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="min-h-screen pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-16 text-center">{t.projectsTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Database className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:gap-2 transition-all">
                      {t.learnMore} <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <section className="min-h-screen pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-16 text-center">{t.skillsTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(t.skills).map(([category, data], index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <span className="text-3xl mr-3">{data.icon}</span>
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {data.items.map((skill, i) => (
                      <div key={i} className="px-4 py-3 bg-slate-800/50 text-gray-300 rounded-lg text-sm border border-slate-700 hover:border-cyan-500/50 transition-all">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="min-h-screen pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-16 text-center">{t.contact.title}</h2>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-12 border border-slate-700/50">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-white mb-8">{t.contact.subtitle}</h3>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{t.contact.email}</p>
                      <a href="mailto:ahmedelaroui00@gmail.com" className="text-white font-medium hover:text-cyan-400 transition-colors">
                        ahmedelaroui00@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{t.contact.phone}</p>
                      <a href="tel:+33753898331" className="text-white font-medium hover:text-cyan-400 transition-colors">
                        +33 7 53 89 83 31
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{t.contact.location}</p>
                      <p className="text-white font-medium">Montbéliard, France</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Linkedin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{t.contact.linkedin}</p>
                      <a href="https://www.linkedin.com/in/ahmed-el-aroui-650487141" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-cyan-400 transition-colors">
                        @ahmedelaroui
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                  <div className="text-center">
                    <p className="text-xl text-white mb-6 font-semibold">{t.contact.available}</p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium shadow-lg">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      {t.contact.license}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">{t.footer}</p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
