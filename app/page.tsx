"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
      <section className="relative h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background Image: Painting Wall */}
        <div className="absolute inset-0 z-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1562259949-001d9f4299b8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900/30 z-0" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Title with Gradient Text */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              L'Art de la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">
                Rénovation & Peinture
              </span>
            </h1>

            <p className="text-xl text-slate-100 max-w-2xl mx-auto mb-10 font-medium drop-shadow-md">
              Transformez votre intérieur avec notre expertise en peinture,
              plâtrerie et décoration. Qualité suisse, finitions impeccables.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* PRIMARY BUTTON: Green -> Blue Gradient (Fade) */}
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-brand-green to-brand-blue hover:from-brand-blue hover:to-brand-green text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-brand-green/30"
              >
                Demander un devis gratuit
              </Link>

              {/* SECONDARY BUTTON */}
              <Link
                href="/gallery"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg font-semibold transition-all"
              >
                Voir nos réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nos Services
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Nous offrons une gamme complète de services pour embellir et
              rénover votre habitat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Paintbrush className="w-10 h-10 text-brand-blue" />}
              title="Peinture Intérieure & Extérieure"
              desc="Application soignée, choix de couleurs infini et peintures écologiques pour vos murs et façades."
            />
            <ServiceCard
              icon={<Hammer className="w-10 h-10 text-brand-green" />}
              title="Plâtrerie & Cloisons"
              desc="Pose de faux-plafonds, cloisons sèches et lissage pour préparer parfaitement vos surfaces."
            />
            <ServiceCard
              icon={<Home className="w-10 h-10 text-brand-orange" />}
              title="Rénovation Complète"
              desc="Gestion de projets de rénovation de A à Z pour appartements, villas et bureaux."
            />
          </div>
        </div>
      </section>

      {/* --- ABOUT / WHY US --- */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?q=80&w=2070&auto=format&fit=crop"
                alt="Peintre professionnel au travail"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Pourquoi choisir Léman Peinture ?
            </h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Basés sur la côte, nous mettons un point d'honneur à offrir un
              service artisanal de proximité. Notre réputation s'est construite
              sur la précision de nos finitions et le respect des délais.
            </p>
            <ul className="space-y-4">
              {[
                "Devis gratuit et détaillé sous 48h",
                "Utilisation de matériaux de haute qualité",
                "Chantier propre et soigné",
                "Respect strict des délais annoncés",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-green w-5 h-5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- CTA BOTTOM --- */}
      <section className="py-20 bg-slate-900 text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à démarrer votre projet ?
        </h2>
        <p className="text-slate-300 mb-8 text-lg">
          Contactez-nous aujourd'hui pour une estimation gratuite.
        </p>

        {/* BUTTON: Green -> Blue Gradient (Fade) */}
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-gradient-to-r from-brand-green to-brand-blue hover:from-brand-blue hover:to-brand-green rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-brand-green/20"
        >
          Nous Contacter
        </Link>
      </section>
    </div>
  );
}

// Helper component
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
