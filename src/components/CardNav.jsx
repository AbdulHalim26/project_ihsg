"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";

const CardNav = ({ logo, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    // Container Luar: Full Width (inset-x-0)
    <div className="fixed top-0 left-0 right-0 w-full z-[9999] px-4 py-4">
      <nav className="mx-auto w-full max-w-[1400px] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl transition-all duration-300">
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-16 px-6">
          
          {/* KIRI: Logo Aksara */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-7 w-auto" />
            <span className="font-bold text-slate-900 dark:text-white tracking-tight">AKSARA</span>
          </div>

          {/* KANAN: Theme + Burger */}
          <div className="flex items-center gap-2">
            {/* Toggle Theme */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-yellow-400 transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Burger Icon Dropdown */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-80 transition-all"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* DROPDOWN MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-slate-100 dark:border-slate-800"
            >
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {items?.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                      {section.label}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {section.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          className="flex items-center justify-between group text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-500 transition-colors"
                        >
                          {link.label}
                          <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default CardNav;