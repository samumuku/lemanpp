"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);

    // --- IMPORTANT: PASTE YOUR ACCESS KEY HERE ---
    // Go to web3forms.com to get one for free.
    formData.append("access_key", "3631d618-a844-455f-a544-0b84f09f4b45");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");
        // Optional: Reset form here if you want
      } else {
        console.error("Error:", data);
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("error");
    }
  }

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
          et sans engagement.
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
            {/* Contact Info Block (Same as before) */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Nos Coordonnées
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-orange">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Téléphone</h3>
                    <p className="text-slate-600 mb-1">Du Lundi au Vendredi</p>
                    <a
                      href="tel:+41798835008"
                      className="text-lg font-bold text-brand-blue hover:underline"
                    >
                      +41 79 883 50 08
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-blue">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <a
                      href="mailto:info@lemanpp.ch"
                      className="text-lg font-bold text-brand-blue hover:underline"
                    >
                      info@lemanpp.ch
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-green">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Zone d'intervention
                    </h3>
                    <p className="text-slate-600">
                      Nous intervenons dans le canton de Vaud.
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
                Lun - Ven : Dès 07h30
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
                  Merci. Nous vous répondrons sous 48h.
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
                {/* Hidden field to prevent spam bots (Honeypot) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                {/* ASTUCE : J'ai ajouté ce champ caché "subject". 
                   Comme ça, l'objet de l'email que vous recevez sera toujours clair 
                   (ex: "Nouveau contact depuis le site").
                */}
                <input
                  type="hidden"
                  name="subject"
                  value="Nouveau contact depuis le site web"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      Nom complet
                    </label>
                    <input
                      required
                      type="text"
                      // CHANGEMENT ICI : "name" -> "Nom"
                      name="Nom"
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
                      // CHANGEMENT ICI : "phone" -> "Téléphone"
                      name="Telephone"
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
                    // On garde "email", c'est standard et compréhensible
                    name="email"
                    placeholder="jean.dupont@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Type de projet
                  </label>
                  {/* CHANGEMENT ICI : "subject" -> "Projet" 
                      Ainsi dans l'email vous verrez : "Projet : Peinture Intérieure"
                  */}
                  <select
                    name="Projet"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-white"
                  >
                    <option value="Peinture Intérieure">
                      Peinture Intérieure
                    </option>
                    <option value="Rénovation Façade">Rénovation Façade</option>
                    <option value="Plâtrerie / Cloisons">
                      Plâtrerie / Cloisons
                    </option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Message
                  </label>
                  <textarea
                    required
                    // "message" -> "Message" (avec majuscule pour faire joli)
                    name="Message"
                    rows={4}
                    placeholder="Décrivez brièvement votre projet..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {formStatus === "error" && (
                  <div className="text-red-500 text-sm font-bold text-center">
                    Une erreur est survenue. Veuillez nous appeler directement.
                  </div>
                )}

                <button
                  disabled={formStatus === "submitting"}
                  type="submit"
                  className="w-full py-3.5 bg-brand-green hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer le message <Send className="w-4 h-4" />
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
