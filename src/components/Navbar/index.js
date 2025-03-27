import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/Project', label: 'Project' },
    { href: '/Experience', label: 'Experience' },
    { href: '/About', label: 'About' },
    { href: '/Contact', label: 'Contact' },
  ];

  return (
    <nav className="flex items-center justify-between bg-black/60 shadow-md h-16 px-6 w-full top-0 z-10 fixed border-b border-white/20">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
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
    </nav>
  );
}