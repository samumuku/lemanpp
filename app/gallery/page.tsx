"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeftRight, Paintbrush, Home, Building } from "lucide-react";

// --- DATA: PLACEHOLDER PROJECTS ---
// Once you have real photos, just replace the 'before' and 'after' URLs here.
const projects = [
  {
    id: 1,
    title: "Rénovation Cuisine - Apartement Lausanne",
    category: "Intérieur",
    description:
      "Remise à neuf complète : lissage des murs, peinture, cuisine moderne installée, pose de carrelage.",
    before: "/photos/before-cuisine.jpeg",
    after: "/photos/after-cuisine.jpg",
  },
  {
    id: 2,
    title: "Rénovation Salon - Lausanne",
    category: "Intérieur",
    description:
      "Réparation des fissures, peinture, ponçage et parquet rénové.",
    before: "/photos/before-salon.jpeg",
    after: "/photos/after-salon.jpg",
    fit: "contain",
  },
  {
    id: 3,
    title: "Chambre à Coucher - Genève",
    category: "Intérieur",
    description:
      "Création d'une ambiance chaleureuse avec une peinture écologique sans odeur.",
    before:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop", // Before
    after:
      "https://images.unsplash.com/photo-1595515106968-43644f80214f?q=80&w=1000&auto=format&fit=crop", // After
  },
  {
    id: 4,
    title: "Rénovation Bureaux",
    category: "Commercial",
    description:
      "Peinture rapide de locaux commerciaux pour une remise en location.",
    before:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop", // Construction
    after:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop", // Office
  },
];

const categories = ["Tous", "Intérieur", "Extérieur", "Commercial"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("Tous");

  const filteredProjects = projects.filter((project) =>
    filter === "Tous" ? true : project.category === filter,
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* --- HEADER --- */}
      <div className="bg-slate-900 pt-20 pb-24 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Nos{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">
            Réalisations
          </span>
        </motion.h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Découvrez la qualité de notre travail à travers nos projets avant /
          après.
        </p>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-10">
        {/* --- FILTERS --- */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all shadow-sm
                ${
                  filter === cat
                    ? "bg-brand-green text-white shadow-brand-green/30"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- GRID --- */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: PROJECT CARD (WITH TOGGLE) ---
// --- SUB-COMPONENT: PROJECT CARD (WITH BLUR FIX) ---
function ProjectCard({ project }: { project: any }) {
  const [showBefore, setShowBefore] = useState(false);
  const currentImage = showBefore ? project.before : project.after;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
    >
      {/* Image Container */}
      <div className="relative h-[300px] md:h-[350px] w-full bg-slate-100 overflow-hidden">
        {/* Toggle Button */}
        <div className="absolute top-4 right-4 z-30 flex bg-white/95 backdrop-blur-sm rounded-full p-1.5 shadow-lg border border-white/20">
          <button
            onClick={() => setShowBefore(false)}
            className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${!showBefore ? "bg-brand-green text-white" : "text-slate-500 hover:text-slate-900"}`}
          >
            APRÈS
          </button>
          <button
            onClick={() => setShowBefore(true)}
            className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${showBefore ? "bg-brand-orange text-white" : "text-slate-500 hover:text-slate-900"}`}
          >
            AVANT
          </button>
        </div>

        {/* Badge */}
        <div className="absolute top-4 left-4 z-30 bg-slate-900/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-md border border-white/20">
          {project.category}
        </div>

        {/* Images logic */}
        <AnimatePresence mode="wait">
          <motion.div
            key={showBefore ? "before" : "after"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* 1. COUCHE DE FOND (FLOU) - Seulement si mode 'contain' */}
            {project.fit === "contain" && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={currentImage}
                  alt="Background blur"
                  fill
                  className="object-cover blur-xl scale-110 opacity-60"
                />
              </div>
            )}

            {/* 2. IMAGE PRINCIPALE (NETTE) */}
            <div className="absolute inset-0 z-10">
              <Image
                src={currentImage}
                alt={project.title}
                fill
                className={
                  project.fit === "contain" ? "object-contain" : "object-cover"
                }
              />
            </div>

            {/* Label Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent z-20">
              <span
                className={`inline-block px-2 py-1 rounded text-xs font-bold ${showBefore ? "bg-brand-orange text-white" : "bg-brand-green text-white"}`}
              >
                {showBefore ? "ÉTAT ORIGINAL" : "RÉSULTAT FINAL"}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
          <ArrowLeftRight className="w-4 h-4" />
          Touchez pour comparer
        </div>
      </div>
    </motion.div>
  );
}
