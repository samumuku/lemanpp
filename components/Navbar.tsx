"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Galerie", href: "/gallery" },
    { name: "À Propos", href: "#about" },
  ];

  return (
    // CHANGE: Fixed height, thinner padding (py-3 instead of py-6)
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm py-2.5 transition-all">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* LOGO SECTION - Compact */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Image: Reduced size (w-12 on desktop instead of w-20) */}
          <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
            <Image
              src="/logo.jpeg"
              alt="Logo Léman Peinture"
              fill
              className="object-contain"
            />
          </div>

          {/* Title Text: Reduced size */}
          <div className="flex flex-col justify-center">
            <span className="text-lg md:text-xl font-black text-slate-900 leading-none tracking-tight">
              Léman Peinture
            </span>
            <span className="text-xs md:text-sm font-bold text-brand-green leading-none">
              et Rénovation
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
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
            className="px-5 py-2 bg-gradient-to-r from-brand-green to-brand-blue hover:from-brand-blue hover:to-brand-green text-white text-xs md:text-sm font-bold rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden flex flex-col p-4 gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-slate-800"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-brand-green text-white py-3 rounded-lg font-bold shadow-md"
          >
            Demander un devis
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
