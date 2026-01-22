"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// Removed unused Image import
import { Paintbrush, Hammer, Home, CheckCircle2 } from "lucide-react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* 1. NOUVELLE IMAGE DE FOND : Focalisée sur le matériel (Peinture, Rouleau, Bac) */}
        <div className="absolute inset-0 z-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1604709177595-ee9c2580e9a3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

        {/* 2. Filtre dégradé pour que le texte blanc reste lisible */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/40 z-10" />

        {/* 3. Texture subtile de pinceau */}
        <div
          className="absolute inset-0 z-20 opacity-[0.08] mix-blend-overlay pointer-events-none bg-repeat"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/brush-strokes.png')`,
          }}
        />

        <div className="relative z-30 container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              L'Art de la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">
                Rénovation & Peinture
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mb-8 md:mb-10 font-medium drop-shadow-md px-2">
              Transformez votre intérieur avec notre expertise en peinture,
              plâtrerie et décoration. Qualité suisse.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-green to-brand-blue hover:from-brand-blue hover:to-brand-green text-white rounded-lg font-bold transition-all shadow-lg text-center"
              >
                Demander un devis
              </Link>
              <Link
                href="/gallery"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg font-semibold transition-all text-center"
              >
                Voir nos réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nos Services
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Nous offrons une gamme complète de services pour embellir et
              rénover votre habitat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={<Paintbrush className="w-10 h-10 text-brand-blue" />}
              title="Peinture Intérieure"
              desc="Application soignée, choix de couleurs infini et peintures écologiques."
            />
            <ServiceCard
              icon={<Hammer className="w-10 h-10 text-brand-green" />}
              title="Plâtrerie & Cloisons"
              desc="Pose de faux-plafonds, cloisons sèches et lissage parfait."
            />
            <ServiceCard
              icon={<Home className="w-10 h-10 text-brand-orange" />}
              title="Rénovation Complète"
              desc="Gestion de projets de rénovation de A à Z pour appartements et villas."
            />
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 w-full">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* IMAGE PROFESSIONNELLE (Celle qu'on a validée juste avant) */}
              <img
                src="https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=2070&auto=format&fit=crop"
                alt="Matériel de peinture professionnel et nuanciers de couleurs"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Basés sur la côte, nous mettons un point d'honneur à offrir un
              service artisanal de proximité.
            </p>
            <ul className="space-y-4">
              {[
                "Devis gratuit et détaillé sous 48h",
                "Utilisation de matériaux de haute qualité",
                "Chantier propre et soigné",
                "Respect strict des délais annoncés",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-green w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- CTA BOTTOM --- */}
      <section className="py-16 md:py-20 bg-slate-900 text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à démarrer ?
        </h2>
        <p className="text-slate-300 mb-8 text-lg">
          Contactez-nous aujourd'hui pour une estimation gratuite.
        </p>
        <Link
          href="/contact"
          className="inline-block w-full sm:w-auto px-10 py-4 bg-brand-green hover:bg-green-700 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-green-500/20"
        >
          Nous Contacter
        </Link>
      </section>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all"
    >
      <div className="mb-6 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
