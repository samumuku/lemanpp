"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Galerie", href: "/gallery" },
    { name: "À Propos", href: "/#about" },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] py-3 transition-all">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 group relative z-50"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="Logo Léman Peinture"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-lg md:text-xl font-black text-slate-900 leading-none tracking-tight">
                Léman Peinture
              </span>
              <span className="text-xs md:text-sm font-semibold text-brand-green leading-none mt-1">
                et Rénovation
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-7 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-brand-green hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-all shadow-sm hover:shadow"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-900 p-2 relative z-50 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col h-screen"
          >
            <div className="flex flex-col gap-5 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-slate-800 py-3 border-b border-slate-100 active:text-brand-green"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 w-full text-center bg-brand-green hover:bg-emerald-700 text-white py-3.5 rounded-lg font-bold text-lg shadow-sm active:scale-[0.98] transition-all"
              >
                Demander un devis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
