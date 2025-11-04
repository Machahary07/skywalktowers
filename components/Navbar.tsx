"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Residences", href: "/residences" },
  { name: "Amenities", href: "/amenities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800">
      <nav className="max-w-9xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="Skywalk Towers Logo"
            width={30}
            height={30}
            className="object-contain"
            priority
          />
          <h1 className="text-2xl font-semibold tracking-wide flex items-baseline">
            <span className="text-black dark:text-white">SKYWALK</span>
            <span className="text-[#C4001D] ml-1">TOWERS</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-800 dark:text-gray-200">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-[#C4001D] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-800 dark:text-gray-200 hover:text-[#C4001D] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
