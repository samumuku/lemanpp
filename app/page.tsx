"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Paintbrush, Hammer, Home, CheckCircle2 } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1604709177595-ee9c2580e9a3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

        {/* Clean, Uniform Scrim (No multi-color wash) */}
        <div className="absolute inset-0 bg-slate-950/75 z-10" />

        <div className="relative z-30 container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Title with solid high-contrast highlight */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              L'Art de la <br />
              <span className="text-brand-green">Rénovation & Peinture</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-normal px-2">
              Transformez votre intérieur avec notre expertise en peinture,
              plâtrerie et décoration. Finitions soignées en Suisse Romande.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-green hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all shadow-sm hover:shadow text-center"
              >
                Demander un devis
              </Link>
              <Link
                href="/gallery"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-lg font-semibold transition-all text-center"
              >
                Voir nos réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Nos Services
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Une gamme complète de prestations pour embellir et moderniser vos
              espaces de vie et de travail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              icon={<Paintbrush className="w-8 h-8 text-brand-green" />}
              title="Peinture Intérieure"
              desc="Application soignée, préparation minutieuse des supports et peintures écologiques sans odeur."
            />
            <ServiceCard
              icon={<Hammer className="w-8 h-8 text-brand-green" />}
              title="Plâtrerie & Cloisons"
              desc="Faux-plafonds acoustiques, cloisons légères, isolation et lissage impeccable."
            />
            <ServiceCard
              icon={<Home className="w-8 h-8 text-brand-green" />}
              title="Rénovation Complète"
              desc="Coordination et exécution de chantiers de rénovation pour villas et appartements."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/60"
      >
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full">
            <div className="relative h-[380px] md:h-[460px] w-full rounded-xl overflow-hidden shadow-sm border border-slate-200/80">
              <img
                src="https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=2070&auto=format&fit=crop"
                alt="Matériel artisanal de peinture"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-slate-600 mb-8 text-base leading-relaxed">
              Basés dans la région lémanique, nous défendons un travail
              artisanal rigoureux, le respect des délais et la propreté
              irréprochable de vos lieux.
            </p>
            <ul className="space-y-4">
              {[
                "Devis gratuit et détaillé",
                "Matériaux professionnels et peintures durables",
                "Chantier bâché, protégé et propre",
                "Suivi personnalisé du début à la fin des travaux",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-green w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-950 text-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-slate-400 mb-8 text-base">
            Contactez-nous pour une visite sur place et une estimation précise
            sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 bg-brand-green hover:bg-emerald-700 rounded-lg font-semibold text-base transition-all shadow-sm hover:shadow"
          >
            Demander un devis gratuit
          </Link>
        </div>
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
    <div className="p-8 bg-white border border-slate-200/80 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
      <div className="mb-6 w-14 h-14 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2.5">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
