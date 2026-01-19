import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Code, Database, Award, ChevronDown, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'experience', label: 'Expérience' },
    { id: 'projects', label: 'Projets' },
    { id: 'skills', label: 'Compétences' },
    { id: 'contact', label: 'Contact' }
  ];

  const experiences = [
    {
      title: "Data Engineer – Analytics",
      company: "Capgemini Engineering - Stellantis",
      period: "2024 - Présent",
      achievements: [
        "Conception et optimisation de dashboards Power BI basés sur des modèles SQL performants",
        "Migration de jeux de données analytiques améliorant les temps de requêtes de 40%",
        "Développement de logiques de scoring et indicateurs métier à partir de données multi-sources",
        "Automatisation des traitements analytiques réduisant les actions manuelles de 80%"
      ]
    },
    {
      title: "Associate Software Engineer – Data",
      company: "Capgemini Engineering - Stellantis",
      period: "2022 - 2024",
      achievements: [
        "Analyse, transformation et validation de données issues de systèmes embarqués",
        "Écriture de requêtes SQL complexes pour le suivi qualité et le reporting",
        "Automatisation de scripts de contrôle et d'indicateurs (+35% d'efficacité)",
        "Collaboration avec les équipes de développement dans l'amélioration continue des processus qualité"
      ]
    },
    {
      title: "Data Scientist Junior",
      company: "Uzerly by CibleClic",
      period: "2021 - 2022",
      achievements: [
        "Construction de pipelines analytiques SQL/Python pour le scoring marketing",
        "Préparation, nettoyage et agrégation de données clients",
        "Optimisation des traitements data réduisant le temps de campagne de 60%"
      ]
    }
  ];

  const projects = [
    {
      title: "Modèle CNN pour Détection de Pneumonie",
      description: "Développement d'un réseau de neurones convolutif pour la prédiction de pneumonie sur radiographies pulmonaires. Projet incluant prétraitement d'images médicales, entraînement supervisé et évaluation de performance.",
      tech: ["Python", "TensorFlow", "Keras", "CNN"],
      link: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Système de Scoring Marketing",
      description: "Plateforme d'analyse prédictive pour optimiser les campagnes marketing avec amélioration de 40% de l'efficacité.",
      tech: ["Python", "PySpark", "Databricks", "SQL"],
      link: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Dashboard Analytics Automobile",
      description: "Migration et optimisation de dashboards Power BI pour l'analyse de données à grande échelle dans le secteur automobile.",
      tech: ["Power BI", "SQL", "Python", "DAX"],
      link: "#",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const skills = {
    "SQL & Modélisation analytique": {
      items: ["Requêtes complexes (CTE, window functions)", "Optimisation de performances", "Modélisation analytique", "KPI et indicateurs métier"],
      icon: "🎯"
    },
    "Data Engineering & Analytics": {
      items: ["Pipelines ETL/ELT", "Transformation de données", "Scoring", "Automatisation", "Qualité des données"],
      icon: "⚙️"
    },
    "BI & Visualisation": {
      items: ["Power BI (DAX, dashboards)", "Dataiku", "Databricks"],
      icon: "📊"
    },
    "Langages & Outils": {
      items: ["Python", "PySpark", "SQL", "Git", "Docker", "JIRA"],
      icon: "💻"
    },
    "Bases de données": {
      items: ["PostgreSQL", "MySQL"],
      icon: "🗄️"
    }
  };

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
            
            <div className="hidden md:flex space-x-8">
              {navigation.map(item => (
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
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
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
              Analytics Data Engineer
            </p>
            <p className="max-w-3xl mx-auto text-gray-300 mb-12 text-lg leading-relaxed">
              Spécialisé en <span className="text-cyan-400 font-semibold">SQL</span>, <span className="text-cyan-400 font-semibold">modélisation analytique</span> et <span className="text-cyan-400 font-semibold">BI</span>. Construction de pipelines de données et tableaux de bord décisionnels à forte valeur métier.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
              >
                Me contacter
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 transition-all duration-300"
              >
                Voir mes projets
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
            <h2 className="text-5xl font-bold text-white mb-16 text-center">À propos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Formation</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-cyan-400 pl-4">
                    <p className="font-semibold text-white text-lg">Master EEA</p>
                    <p className="text-gray-300">Mesure et Traitement de l'Information</p>
                    <p className="text-sm text-gray-400">Université de Lorraine (Metz)</p>
                    <p className="text-xs text-cyan-400 mt-1">2019 - 2021</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="font-semibold text-white text-lg">Licence SPI EEA</p>
                    <p className="text-sm text-gray-400">Université de Lorraine (Metz)</p>
                    <p className="text-xs text-blue-400 mt-1">2018 - 2019</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Certifications & Langues</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg border border-purple-500/30">
                    <Award className="text-purple-400 flex-shrink-0" size={32} />
                    <div>
                      <p className="font-semibold text-white">Dataiku Core Designer</p>
                      <p className="text-sm text-gray-300">Certificate</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="bg-slate-800/50 p-3 rounded-lg text-center border border-slate-700">
                      <p className="font-semibold text-white">Français</p>
                      <p className="text-xs text-cyan-400">Courant</p>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg text-center border border-slate-700">
                      <p className="font-semibold text-white">Anglais</p>
                      <p className="text-xs text-cyan-400">Professionnel</p>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg text-center border border-slate-700">
                      <p className="font-semibold text-white">Arabe</p>
                      <p className="text-xs text-cyan-400">Natif</p>
                    </div>
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
            <h2 className="text-5xl font-bold text-white mb-16 text-center">Expérience Professionnelle</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
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
            <h2 className="text-5xl font-bold text-white mb-16 text-center">Projets</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
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
                  <a href={project.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:gap-2 transition-all">
                    En savoir plus <ExternalLink size={16} className="ml-1" />
                  </a>
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
            <h2 className="text-5xl font-bold text-white mb-16 text-center">Compétences</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, data], index) => (
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
            <h2 className="text-5xl font-bold text-white mb-16 text-center">Contact</h2>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-12 border border-slate-700/50">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-white mb-8">Restons en contact</h3>
                  
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
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
                      <p className="text-sm text-gray-400">Téléphone</p>
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
                      <p className="text-sm text-gray-400">Localisation</p>
                      <p className="text-white font-medium">Montbéliard, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Linkedin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <a href="www.linkedin.com/in/ahmed-el-aroui-650487141" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-cyan-400 transition-colors">
                        @ahmedelaroui
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center items-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                  <div className="text-center">
                    <p className="text-xl text-white mb-6 font-semibold">Disponible pour de nouvelles opportunités</p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium shadow-lg">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      Permis B
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
          <p className="text-gray-400">© 2026 Ahmed El Aroui. Tous droits réservés.</p>
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