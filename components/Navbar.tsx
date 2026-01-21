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
    { name: "Services", href: "/#services" }, // Added slash for better routing
    { name: "Galerie", href: "/gallery" },
    { name: "À Propos", href: "/#about" },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm py-3 transition-all">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* LOGO SECTION - Touches area increased for mobile home link */}
          <Link
            href="/"
            className="flex items-center gap-3 group relative z-50"
          >
            <div className="relative w-10 h-10 md:w-16 md:h-16 flex-shrink-0">
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
              <span className="text-xs md:text-sm font-bold text-brand-green leading-none mt-1">
                et Rénovation
              </span>
            </div>
          </Link>

          {/* DESKTOP Menu (Hidden on Mobile) */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-600 hover:text-brand-green transition-colors uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2 bg-gradient-to-r from-brand-green to-brand-blue hover:from-brand-blue hover:to-brand-green text-white text-sm font-bold rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE Menu Toggle - Large Touch Target */}
          <button
            className="md:hidden text-slate-900 p-2 relative z-50 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE FULL SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col h-screen"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-slate-800 py-3 border-b border-slate-100 active:text-brand-green"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full text-center bg-gradient-to-r from-brand-green to-brand-blue text-white py-4 rounded-xl font-bold text-xl shadow-lg active:scale-95 transition-transform"
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
