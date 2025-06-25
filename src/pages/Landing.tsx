import { Link } from "react-router";
import { Mail, Users, Settings, Info, Bell, LogIn, UserPlus } from 'lucide-react';
import { useState } from "react";

export default function MailyLandingPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
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
            {/* <a href="#" className="text-gray-600 hover:text-teal-700 px-3 py-2">Produits</a>
            <a href="#" className="text-gray-600 hover:text-teal-700 px-3 py-2">Business</a> */}
            {/* <a href="#" className="text-gray-600 hover:text-teal-700 px-3 py-2">Support</a> */}
          </div>
          <div className="flex items-center space-x-4">
            {/* <div className="relative">
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
            </div> */}
            <Link to="/signIn" className="bg-teal-700 text-white hover:bg-teal-800 px-4 py-2 rounded-md">
              Connexion
            </Link>
            <Link to="/info" className="border border-teal-700 text-teal-700 hover:bg-teal-50 px-4 py-2 rounded-md">
              S'inscrire
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-100 via-white to-emerald-100 py-20 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute left-0 top-0 w-96 h-96 bg-teal-200 opacity-20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-emerald-200 opacity-20 rounded-full blur-2xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-0 md:pr-8">
            <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-semibold mb-4 shadow-sm">
              Nouvelle génération
            </span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
              Maily, Le mail que vous voulez. Rien de plus.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              "Un seul compte Maily. Tous vos mails, filtres intelligents et paramètres au même endroit. Connectez-vous pour garder le contrôle."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signIn" className="bg-teal-700 text-white hover:bg-teal-800 px-4 py-2 rounded-md">
                <div className="flex items-center justify-center">
                  <LogIn className="mr-2 h-5 w-5" />
                  Se connecter
                </div>
              </Link>
              <Link to="/info" className="border border-teal-700 text-teal-700 hover:bg-teal-50 px-4 py-2 rounded-md">
                <div className="flex items-center justify-center">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Créer un compte
                </div>
              </Link>
            </div>
            <div className="mt-8">
              {/* <a href="#" className="text-teal-700 hover:text-teal-900 flex items-center font-medium transition">
                <span>Voir les tarifs et forfaits</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a> */}
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            {/* Remplacez la fausse barre par une image réelle */}
            <div className="relative">
              <div className="rounded-2xl shadow-2xl bg-white overflow-hidden border border-gray-100">
                <img 
                  src="public/freepik__upload__49375.png" 
                  alt="Aperçu de l'application Maily"
                  className="w-full h-auto transition duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ minWidth: "320px", minHeight: "200px", objectFit: "cover" }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-teal-100 rounded-full w-20 h-20"></div>
              <div className="absolute -top-4 -right-4 bg-emerald-100 rounded-full w-16 h-16"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Navigation */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-8">
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
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Fonctionnalités principales
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Découvrez comment Maily peut transformer votre expérience de messagerie avec des fonctionnalités intelligentes et intuitives.
            </p>
          </div>

          {/* Affichage conditionnel des onglets */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Intelligent</h3>
                <p className="text-gray-600">
                  Triez automatiquement vos emails, répondez rapidement avec des modèles, et ne manquez jamais un message important.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                 <Mail className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">IA Anti-Spam</h3>
                <p className="text-gray-600">
                   Analysez vos e-mails en temps réel grâce à une intelligence artificielle intégrée capable de détecter les spams avec précision et de s'adapter à vos préférences.
                  </p>
              </div>


              {/* Feature 3 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gestion des Contacts</h3>
                <p className="text-gray-600">
                  Organisez vos contacts, créez des groupes et communiquez efficacement avec votre réseau professionnel.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Notifications Personnalisées</h3>
                <p className="text-gray-600">
                  Recevez des alertes pour les messages importants et configurez les notifications selon vos préférences.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Personnalisation Avancée</h3>
                <p className="text-gray-600">
                  Adaptez l'interface à vos besoins, créez des filtres et automatisez votre flux de travail.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Info className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sécurité Renforcée</h3>
                <p className="text-gray-600">
                  Protégez vos communications avec un chiffrement de bout en bout et des contrôles d'accès avancés.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="mt-16 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-teal-700">FAQ</h3>
              <div className="space-y-6 text-left">
                <div>
                  <div className="font-semibold text-gray-900">Comment créer un compte Maily&nbsp;?</div>
                  <div className="text-gray-600">
                    Cliquez sur "S'inscrire" en haut à droite de la page d'accueil. Vous devrez fournir votre adresse email, créer un mot de passe sécurisé et vérifier votre email. L'inscription est gratuite et ne prend que quelques minutes.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Comment récupérer mon mot de passe oublié&nbsp;?</div>
                  <div className="text-gray-600">
                    Cliquez sur "Mot de passe oublié ?" sur la page de connexion. Saisissez votre numéro de téléphone et nous vous enverrons un code de réinitialisation sécurisé par WhatsApp.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Comment fonctionne l'IA anti-spam&nbsp;?</div>
                  <div className="text-gray-600">
                    Notre IA analyse en temps réel le contenu, l'expéditeur et les modèles de vos emails pour détecter automatiquement les spams. Elle apprend de vos actions (marquer comme spam/non-spam) pour s'améliorer continuellement.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Puis-je personnaliser les filtres de tri automatique&nbsp;?</div>
                  <div className="text-gray-600">
                    Oui, vous pouvez créer des règles personnalisées basées sur l'expéditeur, l'objet, les mots-clés ou d'autres critères. Les emails seront automatiquement triés dans les dossiers appropriés.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maily fonctionne-t-il hors ligne&nbsp;?</div>
                  <div className="text-gray-600">
                    Maily synchronise vos emails récents pour une consultation hors ligne limitée. Cependant, l'envoi d'emails nécessite une connexion internet.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Pourquoi mes emails arrivent-ils en retard&nbsp;?</div>
                  <div className="text-gray-600">
                    Les délais peuvent être dus à votre fournisseur d'email, la connexion internet ou les paramètres de synchronisation. Vérifiez la fréquence de synchronisation dans les paramètres.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Comment récupérer des emails supprimés accidentellement&nbsp;?</div>
                  <div className="text-gray-600">
                    Consultez d'abord votre dossier Corbeille. Les emails y restent 30 jours avant suppression définitive. Pour les plans premium, nous proposons une récupération étendue.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">L'interface est lente, que faire&nbsp;?</div>
                  <div className="text-gray-600">
                    Videz le cache de votre navigateur, fermez les onglets inutiles, ou utilisez l'application desktop pour de meilleures performances. Contactez le support si le problème persiste.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Comment synchroniser mes contacts&nbsp;?</div>
                  <div className="text-gray-600">
                    Maily peut importer vos contacts depuis Google, Outlook, Apple et autres services. Allez dans Paramètres &gt; Contacts &gt; Importer pour commencer la synchronisation.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Puis-je accéder à Maily depuis plusieurs appareils simultanément&nbsp;?</div>
                  <div className="text-gray-600">
                    Oui, vous pouvez être connecté sur autant d'appareils que vous le souhaitez. Tous vos emails, dossiers et paramètres restent synchronisés en temps réel.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maily est-il vraiment gratuit&nbsp;?</div>
                  <div className="text-gray-600">
                    Oui, Maily est totalement gratuit pour tous les utilisateurs.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maily lit-il mes emails&nbsp;?</div>
                  <div className="text-gray-600">
                    Non, Maily ne lit pas le contenu de vos emails. Notre IA anti-spam traite les données localement et de manière chiffrée. Nous respectons strictement votre vie privée.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Mes données sont-elles vendues à des tiers&nbsp;?</div>
                  <div className="text-gray-600">
                    Jamais. Maily ne vend, ne loue ni ne partage vos données personnelles avec des tiers. Notre modèle économique repose uniquement sur les abonnements premium.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Comment supprimer définitivement mon compte&nbsp;?</div>
                  <div className="text-gray-600">
                    Allez dans Paramètres &gt; Compte &gt; Supprimer le compte. Cette action est irréversible et supprimera toutes vos données de nos serveurs sous 30 jours.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maily est-il conforme au RGPD&nbsp;?</div>
                  <div className="text-gray-600">
                    Oui, Maily est entièrement conforme au RGPD européen et aux réglementations internationales sur la protection des données. Vous gardez le contrôle total de vos informations.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Comment puis-je créer un compte&nbsp;?</div>
                  <div className="text-gray-600">
                    Cliquez sur "S'inscrire" en haut à droite et suivez les instructions.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Comment contacter le support&nbsp;?</div>
                  <div className="text-gray-600">
                    Utilisez la section "Support" dans le menu ou envoyez-nous un email via la page de contact.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="mt-16 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-teal-700">Conseils & Astuces</h3>
              <div className="space-y-6 text-left">
                <div>
                  <span className="mr-2">🧐</span>
                  <span className="font-semibold text-gray-900">1. Gardez un œil sur les messages signalés</span>
                  <div className="text-gray-600">
                    Maily utilise l’intelligence artificielle pour détecter les spams, mais aucun système n’est parfait. Avant de supprimer un message marqué comme indésirable, prenez quelques secondes pour le vérifier.
                  </div>
                </div>
                <div>
                  <span className="mr-2">✅</span>
                  <span className="font-semibold text-gray-900">2. Corrigez l’IA en un clic</span>
                  <div className="text-gray-600">
                    Si un e-mail est classé à tort comme spam, cliquez sur « Ce n’est pas un spam ». Votre retour permet à Maily d’apprendre et de s’améliorer au fil du temps.
                  </div>
                </div>
                <div>
                  <span className="mr-2">🚫</span>
                  <span className="font-semibold text-gray-900">3. Marquez les spams manuellement</span>
                  <div className="text-gray-600">
                    Repérez un message indésirable non détecté ? N’hésitez pas à le signaler comme spam. Cela renforce la précision du filtre dans les futurs classements.
                  </div>
                </div>
                <div>
                  <span className="mr-2">⚙️</span>
                  <span className="font-semibold text-gray-900">4. Adaptez le niveau de détection</span>
                  <div className="text-gray-600">
                    Dans les paramètres, vous pouvez ajuster la sensibilité de la détection des spams : une détection plus stricte ou plus souple, selon votre usage.
                  </div>
                </div>
                <div>
                  <span className="mr-2">🧽</span>
                  <span className="font-semibold text-gray-900">5. Pensez à nettoyer régulièrement</span>
                  <div className="text-gray-600">
                    La boîte spam peut s’accumuler. Un petit ménage de temps en temps permet de garder votre messagerie rapide et organisée.
                  </div>
                </div>
                <div>
                  <span className="mr-2">🎯</span>
                  <span className="font-semibold text-gray-900">6. Activez des règles intelligentes</span>
                  <div className="text-gray-600">
                    Gagnez du temps en créant des règles personnalisées : expéditeurs de confiance, mots-clés importants, etc. Maily s’occupe du tri.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tour' && (
            <div className="mt-16 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-teal-700">Visite guidée</h3>
              <TourGuide />
            </div>
          )}

          {activeTab === 'legal' && (
            <div className="mt-16 max-w-4xl mx-auto">
              <div
                className="bg-white rounded-3xl shadow-2xl p-12 text-left transform transition-transform duration-500 hover:scale-105 hover:rotate-1 hover:shadow-3xl animate-fade-in"
                style={{
                  boxShadow: "0 10px 40px 0 rgba(16,185,129,0.15), 0 2px 8px 0 rgba(0,0,0,0.08)",
                  perspective: "800px"
                }}
              >
                <h3 className="text-4xl font-extrabold mb-10 text-teal-700 text-center drop-shadow-lg">Légal & Sécurité</h3>
                <div className="space-y-10">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🔐</span>
                    <div>
                      <span className="font-semibold text-gray-900 text-2xl">Légal</span>
                      <div className="text-gray-600 mt-2 text-lg">
                        Maily respecte les lois en vigueur relatives à la protection des données et à l’usage des services en ligne.<br />
                        Nous nous engageons à ne pas vendre, partager ou exploiter les données de nos utilisateurs à des fins commerciales.<br />
                        <br />
                        Pour toute question juridique, veuillez nous contacter à l’adresse : <a href="mailto:legal@maily.app" className="text-teal-700 underline">legal@maily.app</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🔒</span>
                    <div>
                      <span className="font-semibold text-gray-900 text-2xl">Confidentialité</span>
                      <div className="text-gray-600 mt-2 text-lg">
                        Votre vie privée est notre priorité.<br />
                        Nous collectons uniquement les données nécessaires au bon fonctionnement de l’application (par exemple : adresse e-mail, préférences, messages à analyser).<br />
                        Ces données ne sont jamais revendues ni utilisées sans votre consentement.<br />
                        <br />
                        Vous pouvez accéder, modifier ou supprimer vos données à tout moment.<br />
                        Vos e-mails analysés par l’IA ne sont ni stockés ni lus par un humain.<br />
                        <a href="#" className="text-teal-700 underline">Consulter notre politique de confidentialité complète</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📜</span>
                    <div>
                      <span className="font-semibold text-gray-900 text-2xl">Conditions</span>
                      <div className="text-gray-600 mt-2 text-lg">
                        En utilisant Maily, vous acceptez :<br />
                        <ul className="list-disc ml-6">
                          <li>De ne pas utiliser l’application pour envoyer du contenu illégal ou frauduleux</li>
                          <li>Que les suggestions de l’IA ne sont pas garanties comme infaillibles</li>
                          <li>Que l'utilisateur reste responsable des actions prises dans sa boîte mail</li>
                          <li>L'utilisation est gratuite dans sa version de base. Certaines fonctionnalités avancées peuvent faire l’objet d’un abonnement ou d’un accès restreint.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🛡️</span>
                    <div>
                      <span className="font-semibold text-gray-900 text-2xl">Sécurité</span>
                      <div className="text-gray-600 mt-2 text-lg">
                        Nous mettons en œuvre des mesures de sécurité avancées pour protéger vos données :<br />
                        <ul className="list-disc ml-6">
                          <li>Connexions chiffrées via HTTPS</li>
                          <li>Analyse des spams côté serveur avec chiffrement</li>
                          <li>Authentification sécurisée de votre compte</li>
                          <li>En cas de faille de sécurité, nous vous en informerons dans les plus brefs délais.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📋</span>
                    <div>
                      <span className="font-semibold text-gray-900 text-2xl">Conformité</span>
                      <div className="text-gray-600 mt-2 text-lg">
                        Maily est conçu dans le respect des principales normes de sécurité et de confidentialité :<br />
                        <ul className="list-disc ml-6">
                          <li>✅ RGPD (Règlement Général sur la Protection des Données – Europe)</li>
                          <li>✅ LPD (Loi sur la Protection des Données – Maroc)</li>
                          <li>✅ Meilleures pratiques en matière de traitement automatisé via IA</li>
                        </ul>
                        Nous surveillons en continu la conformité légale et éthique de notre système de détection.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Ajoute ici d'autres onglets si besoin */}
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-gradient-to-r from-teal-700 to-emerald-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Prêt à améliorer votre communication professionnelle ?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Rejoignez des milliers d'entreprises qui utilisent Maily pour gérer efficacement leurs communications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-lg font-semibold shadow transition">
              Commencer gratuitement
            </button>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      <footer className="bg-gray-900 py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Section Légal supprimée */}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-teal-400 rounded flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div className="ml-3 text-white font-bold text-xl">Maily</div>
            </div>
            {/* <div className="mt-4 md:mt-0 text-gray-400">
              © 2025 Maily. Tous droits réservés.
            </div> */}
            <div className="w-full mt-4 md:mt-0 text-gray-400 text-center">
              © 2025 Maily. Tous droits réservés.
            </div>
            {/* Social icons removed */}
          </div>
        </div>
      </footer>
    </div>
  );
}

function TourGuide() {
  const steps = [
    {
      img: "public/image-1750608573371.png",
      title: "Bienvenue dans Maily",
      desc: "Creez un compte gratuit pour commencer à utiliser Maily. Vous pouvez vous connecter avec domaine professionnel maily.tech."
    },
    {
      img: "/public/c0nnect to your account.jpg",
      title: "Connectez-vous à votre compte",
      desc: "Accédez à vos e-mails personnels, professionnels ou scolaires dans l'application Maily sur ordinateur, y compris maily.tech et bien plus."
    },
     {
      img: "public/screen.png",
      title: "Ecrire un e-mail efficacement",
      desc: "Rédigez des e-mails professionnels en quelques clics. Utilisez des modèles, des signatures personnalisées et des réponses automatiques pour gagner du temps."
    },
    {
      img: "public/imbox of email.jpg",
      title: "Imbox intelligente",
      desc: "Retrouvez tout ce dont vous avez besoin pour organiser votre journée en un seul endroit. Gérez facilement vos e-mails, spam,  et contacts , à la maison ou en déplacement."
    },
    {
      img: "public/parler en groupe sous le meme domain.jpg",
      title: "Communiquer en groupe",
      desc: "Créez des groupes de discussion pour communiquer facilement avec vos collègues, amis ou famille. Partagez des informations et collaborez efficacement."
    },
    {
      img: "public/image.png",
      title: "Traducteur intégré",
      desc: "Utilisez le traducteur intégré pour traduire vos e-mails dans la langue de votre choix. Maily prend en charge plusieurs langues pour faciliter la communication internationale."
    }
  ];
  const [step, setStep] = useState(0);
  const [zoom, setZoom] = useState(false);

  const handleImgClick = () => {
    setZoom(true);
  };

  const handleOverlayClick = () => {
    setZoom(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <img
          src={steps[step].img}
          alt={steps[step].title}
          onClick={handleImgClick}
          className="rounded-lg shadow mb-4 w-full max-w-md object-contain cursor-pointer transition-transform duration-300"
          style={{ background: "#f0fdfa", height: "320px", width: "100%", maxWidth: "420px" }}
        />
        <div className="font-bold text-lg mb-2 text-teal-700">{steps[step].title}</div>
        <div className="text-gray-700 mb-4 text-center">{steps[step].desc}</div>
      </div>
      <div className="flex items-center gap-2 mb-4">
        {steps.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === step ? "bg-teal-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold disabled:opacity-50"
          onClick={() => setStep(s => Math.max(0, s - 1))}
          disabled={step === 0}
        >
          Précédent
        </button>
        {step < steps.length - 1 ? (
          <button
            className="px-4 py-2 rounded bg-teal-600 text-white font-semibold"
            onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))}
          >
            Suivant
          </button>
        ) : (
          <button
            className="px-4 py-2 rounded bg-emerald-600 text-white font-semibold"
            onClick={() => setStep(0)}
          >
            Recommencer
          </button>
        )}
      </div>
      {zoom && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <img
            src={steps[step].img}
            alt={steps[step].title}
            className="rounded-lg shadow-2xl max-w-3xl max-h-[90vh] object-contain border-4 border-white"
            style={{ background: "#f0fdfa" }}
          />
        </div>
      )}
    </div>
  );
}