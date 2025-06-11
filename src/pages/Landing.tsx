import { Link } from "react-router";
import { Mail, Calendar, Users, Settings, Info, Bell, LogIn, UserPlus } from 'lucide-react';
import { useState } from "react";


export default function MailyLandingPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 bg-teal-400 rounded flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">Maily</h1>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-teal-700 px-3 py-2">Produits</a>
            <a href="#" className="text-gray-600 hover:text-teal-700 px-3 py-2">Business</a>
            <a href="#" className="text-gray-600 hover:text-teal-700 px-3 py-2">Tarifs</a>
            <a href="#" className="text-gray-600 hover:text-teal-700 px-3 py-2">Support</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher"
                className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
            <Link to="/signIn" className="border border-teal-700 text-teal-700 hover:bg-teal-50 px-4 py-2 rounded-md">
              Connexion
              </Link>
            <Link to="/Info" className="bg-teal-700 text-white hover:bg-teal-800 px-4 py-2 rounded-md">
              S'inscrire
              </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
          <div className="w-1/2 pr-8">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
             AI-Powered Email Spam Detection
            </h2>
            <p className="text-xl text-gray-600 mb-8">
            Keep your inbox clean and secure with advanced AI spam detection. Say goodbye to phishing attempts, scams, and unwanted emails. Available on desktop, mobile, and web.
            </p>
            <div className="flex space-x-4">
              <button className="bg-teal-700 text-white hover:bg-teal-800 px-6 py-3 rounded-md font-medium">
                <div className="flex items-center">
                  <LogIn className="mr-2 h-5 w-5" />
                  Se connecter
                </div>
              </button>
              <button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md font-medium">
                <div className="flex items-center">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Créer un compte gratuit
                </div>
              </button>
            </div>
            <div className="mt-6">
              <a href="#" className="text-teal-700 hover:text-teal-900 flex items-center">
                <span>Voir les tarifs et forfaits</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <div className="relative">
              <div className="rounded-lg shadow-xl bg-white overflow-hidden">
                <img 
                  src="/api/placeholder/800/500" 
                  alt="MailPro Application Interface" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-teal-100 rounded-full w-20 h-20"></div>
              <div className="absolute -top-4 -right-4 bg-emerald-100 rounded-full w-16 h-16"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-teal-500 text-teal-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Aperçu
            </button>
            <button
              onClick={() => setActiveTab('tour')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'tour'
                  ? 'border-teal-500 text-teal-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Visite guidée
            </button>
            <button
              onClick={() => setActiveTab('download')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'download'
                  ? 'border-teal-500 text-teal-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Télécharger l'application
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'pricing'
                  ? 'border-teal-500 text-teal-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Tarifs
            </button>
            <button
              onClick={() => setActiveTab('apps')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'apps'
                  ? 'border-teal-500 text-teal-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'tips'
                  ? 'border-teal-500 text-teal-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Conseils & Astuces
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'faq'
                  ? 'border-teal-500 text-teal-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              FAQ
            </button>
          </nav>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Fonctionnalités principales
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Tout ce dont vous avez besoin pour gérer votre communication professionnelle de manière efficace
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Intelligent</h3>
              <p className="text-gray-600">
                Triez automatiquement vos emails, répondez rapidement avec des modèles, et ne manquez jamais un message important.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Calendrier Intégré</h3>
              <p className="text-gray-600">
                Planifiez vos réunions, partagez votre disponibilité et synchronisez tous vos calendriers en un seul endroit.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gestion des Contacts</h3>
              <p className="text-gray-600">
                Organisez vos contacts, créez des groupes et communiquez efficacement avec votre réseau professionnel.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Notifications Personnalisées</h3>
              <p className="text-gray-600">
                Recevez des alertes pour les messages importants et configurez les notifications selon vos préférences.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personnalisation Avancée</h3>
              <p className="text-gray-600">
                Adaptez l'interface à vos besoins, créez des filtres et automatisez votre flux de travail.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Info className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sécurité Renforcée</h3>
              <p className="text-gray-600">
                Protégez vos communications avec un chiffrement de bout en bout et des contrôles d'accès avancés.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Prêt à améliorer votre communication professionnelle ?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Rejoignez des milliers d'entreprises qui utilisent Maily pour gérer efficacement leurs communications.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-md font-medium">
              Commencer gratuitement
            </button>
            <button className="bg-teal-600 text-white hover:bg-teal-500 px-8 py-3 rounded-md font-medium border border-teal-500">
              Voir les tarifs
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Produit</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Fonctionnalités</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Tarifs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Applications</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Intégrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Ressources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Guides</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Webinaires</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Entreprise</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">À propos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Carrières</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Presse</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Légal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Confidentialité</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Conditions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Sécurité</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Conformité</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-teal-400 rounded flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div className="ml-3 text-white font-bold text-xl">Maily</div>
            </div>
            <div className="mt-4 md:mt-0 text-gray-400">
              © 2025 Maily. Tous droits réservés.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}