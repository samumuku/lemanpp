"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeftRight, X, Maximize2, Layers } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: "Intérieur" | "Extérieur" | "Commercial";
  description: string;
  aspectRatio?: "landscape" | "portrait" | "square";
  // If it's a before/after pair:
  before?: string;
  after?: string;
  // If it's a standalone high-res showcase:
  image?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Rénovation Cuisine Moderne",
    category: "Intérieur",
    aspectRatio: "landscape",
    description:
      "Remise à neuf complète : lissage des murs, peinture satinée et pose de crédence.",
    before: "/photos/before-cuisine.jpg",
    after: "/photos/after-cuisine.png",
  },
  {
    id: 2,
    title: "Cage d'escalier & Hauteur sous plafond",
    category: "Intérieur",
    aspectRatio: "portrait", // Ideal for vertical renovations
    description:
      "Rattrapage des plâtres sur 5 mètres de hauteur et laquage des rampes.",
    before:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1595515106968-43644f80214f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Rénovation Façade Villa",
    category: "Extérieur",
    aspectRatio: "square",
    description:
      "Nettoyage haute pression, traitement anti-mousse et enduit minéral respirant.",
    image:
      "https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Open Space & Bureaux Commerciaux",
    category: "Commercial",
    aspectRatio: "landscape",
    description:
      "Mise en peinture rapide de 450 m² avec peinture veloutée sans odeur.",
    before:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Finitions & Menuiserie Laquée",
    category: "Intérieur",
    aspectRatio: "portrait",
    description:
      "Détail de boiseries et encadrements de portes restaurés à la main.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop",
  },
];

const categories = ["Tous", "Intérieur", "Extérieur", "Commercial"] as const;

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("Tous");
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) => filter === "Tous" || project.category === filter
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="bg-slate-900 pt-20 pb-28 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
        >
          Nos <span className="text-brand-green">Réalisations</span>
        </motion.h1>
        <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto">
          Explorez nos chantiers récents : rénovations complètes, finitions
          sur-mesure et transformations avant/après.
        </p>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-10 max-w-6xl">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-xs md:text-sm transition-all border ${
                filter === cat
                  ? "bg-brand-green text-white border-brand-green shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Layout: Handles varying heights naturally without clipping */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={(imgUrl) => setActiveModalImage(imgUrl)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 flex items-center justify-center"
            onClick={() => setActiveModalImage(null)}
          >
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-6 right-6 text-white hover:text-slate-300 p-2 z-50 bg-white/10 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
              <Image
                src={activeModalImage}
                alt="Vue agrandie"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({
  project,
  onOpenModal,
}: {
  project: Project;
  onOpenModal: (url: string) => void;
}) {
  const isBeforeAfter = Boolean(project.before && project.after);
  const [showBefore, setShowBefore] = useState(false);

  // Dynamic aspect ratio classes
  const aspectClass =
    project.aspectRatio === "portrait"
      ? "aspect-[3/4]"
      : project.aspectRatio === "square"
      ? "aspect-square"
      : "aspect-[16/10]";

  const currentImage = isBeforeAfter
    ? showBefore
      ? project.before!
      : project.after!
    : project.image!;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="break-inside-avoid bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200/80 transition-shadow group flex flex-col"
    >
      <div
        className={`relative w-full ${aspectClass} bg-slate-100 overflow-hidden`}
      >
        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-20 flex gap-2">
          <span className="bg-slate-900/70 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/10">
            {project.category}
          </span>
          {isBeforeAfter && (
            <span className="bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-semibold px-2 py-1 rounded-md flex items-center gap-1 border border-white/10">
              <Layers className="w-3 h-3" /> Avant/Après
            </span>
          )}
        </div>

        {/* Zoom Lightbox Trigger */}
        <button
          onClick={() => onOpenModal(currentImage)}
          className="absolute top-3 right-3 z-20 p-2 bg-slate-900/60 hover:bg-slate-900/90 text-white rounded-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
          aria-label="Agrandir"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Before / After Toggle Buttons */}
        {isBeforeAfter && (
          <div className="absolute bottom-3 right-3 z-20 flex bg-white/95 backdrop-blur-sm rounded-lg p-1 shadow-md border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setShowBefore(false)}
              className={`px-3 py-1 rounded-md transition-all ${
                !showBefore
                  ? "bg-brand-green text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Après
            </button>
            <button
              onClick={() => setShowBefore(true)}
              className={`px-3 py-1 rounded-md transition-all ${
                showBefore
                  ? "bg-amber-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Avant
            </button>
          </div>
        )}

        {/* Display Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={currentImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Bottom indicator for status */}
        {isBeforeAfter && (
          <div className="absolute bottom-3 left-3 z-20">
            <span
              className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded text-white ${
                showBefore ? "bg-amber-600/90" : "bg-emerald-700/90"
              }`}
            >
              {showBefore ? "État initial" : "Terminé"}
            </span>
          </div>
        )}
      </div>

      {/* Info Block */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-slate-900 text-base mb-1">
            {project.title}
          </h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            {project.description}
          </p>
        </div>

        {isBeforeAfter && (
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            Basculez entre Avant / Après
          </div>
        )}
      </div>
    </motion.div>
  );
}
