"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  // Simple state to show a "Success" message after clicking send (for demo purposes)
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate sending delay
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* --- PAGE HEADER --- */}
      <div className="bg-slate-900 pt-20 pb-24 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Contactez{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">
            Léman Peinture
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-300 text-lg max-w-2xl mx-auto"
        >
          Une question ? Un projet de rénovation ? Demandez votre devis gratuit
          et sans engagement. Réponse sous 48h.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* --- LEFT COLUMN: INFO --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl h-full flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Nos Coordonnées
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-orange">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Téléphone</h3>
                    <p className="text-slate-600 mb-1">
                      Disponible du Lundi au Vendredi
                    </p>
                    <a
                      href="tel:+41798835008"
                      className="text-lg font-bold text-brand-blue hover:underline"
                    >
                      +41 79 883 50 08
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-blue">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <p className="text-slate-600 mb-1">
                      Envoyez-nous votre demande
                    </p>
                    <a
                      href="mailto:info@lemanpp.ch"
                      className="text-lg font-bold text-brand-blue hover:underline"
                    >
                      info@lemanpp.ch
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-green">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Zone d'intervention
                    </h3>
                    <p className="text-slate-600">
                      Nous intervenons au canton de Vaud.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-slate-400" />
                <span className="font-bold text-slate-700">Horaires</span>
              </div>
              <p className="text-sm text-slate-600 ml-8">
                Lun - Ven : 07h30 - 18h00
                <br />
                Samedi : Sur rendez-vous
              </p>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: FORM --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Envoyez-nous un message
            </h2>

            {formStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Message Envoyé !
                </h3>
                <p className="text-slate-500">
                  Merci de nous avoir contactés. Nous reviendrons vers vous sous
                  48h.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-8 text-brand-blue font-bold hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      Nom complet
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      Téléphone
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="079 123 45 67"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="jean.dupont@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Type de projet
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-white">
                    <option>Peinture Intérieure</option>
                    <option>Rénovation Façade</option>
                    <option>Plâtrerie / Cloisons</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Décrivez brièvement votre projet..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  disabled={formStatus === "submitting"}
                  type="submit"
                  className="w-full py-4 bg-brand-green hover:bg-green-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer le message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
