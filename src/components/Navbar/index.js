import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Project", label: "Projects" },
    { href: "/About", label: "About" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="relative bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl h-14 flex items-center justify-between px-5 shadow-lg shadow-black/20">

          {/* Logo */}
          <Link href="/" className="relative group flex-shrink-0">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
            <Image
              src="/assets/logo.jpg"
              alt="Logo"
              width={32}
              height={32}
              className="relative object-contain rounded-full ring-1 ring-white/10 group-hover:ring-violet-500/40 transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav — centered pill links */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/[0.08] border border-white/[0.1] rounded-xl"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right side — status dot */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-40" />
              </div>
              <span className="text-xs font-medium text-emerald-400">Open to work</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-xl text-gray-300 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col gap-1.5 items-center justify-center w-4">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="block w-full h-[1.5px] bg-current rounded-full origin-center"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="block w-full h-[1.5px] bg-current rounded-full"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-full h-[1.5px] bg-current rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden mx-4 mt-2"
          >
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-3 shadow-lg shadow-black/20 space-y-1">
              {navLinks.map((link) => {
                const isActive = router.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-center font-medium transition-all duration-300 ${isActive
                        ? "bg-white/[0.08] text-white border border-white/[0.1]"
                        : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {/* Mobile status */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-emerald-400">Open to work</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}