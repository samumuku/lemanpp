export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Léman<span className="text-blue-500"> Peinture et Rénovation</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Votre partenaire de confiance pour la peinture, la plâtrerie et la
            rénovation en Suisse Romande.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm mb-2"> Lausanne, Suisse</p>
          <p className="text-sm mb-2">📞 +41 79 883 50 08</p>
          <p className="text-sm">✉️ info@lemanpp.ch</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Liens Rapides</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/gallery" className="hover:text-white">
                Nos Réalisations
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Demander un Devis
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Léman Peinture & Rénovation. Tous droits
        réservés.
      </div>
    </footer>
  );
}
