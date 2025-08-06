import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaBehance } from 'react-icons/fa';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/Project', label: 'Project' },
    { href: '/Experience', label: 'Experience' },
    { href: '/About', label: 'About' },
    { href: '/Contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/sourabhgautam/', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
    { href: 'https://www.behance.net/sourabhgautam98', icon: <FaBehance size={20} />, label: 'Behance' },
  ];

  return (
    <nav className="flex items-center justify-between bg-black/60 shadow-md h-16 px-4 sm:px-20 w-full top-0 z-10 fixed border-b border-white/20">

      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
      </div>

      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div className={`md:flex md:space-x-6 ${isMenuOpen ? 'flex' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-black/80 md:bg-transparent flex-col md:flex-row items-center pb-4 md:pb-0`}>
        <div className="w-full flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:underline hover:underline-offset-10 py-2 md:py-0 w-full text-center md:w-auto"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="w-full flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-4 md:ml-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 py-2 md:py-0 w-full text-center md:w-auto flex items-center justify-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {social.icon}
              <span className="md:hidden ml-2">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}