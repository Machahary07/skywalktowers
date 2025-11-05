// app/home/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { homeData } from "@/data/home";

export default function HomePage() {
  const { hero, about, features, gallery, contact } = homeData;

  return (
    <main className="bg-black flex flex-col items-center w-full text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex flex-col justify-center items-center text-center bg-black text-white overflow-hidden">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          className="object-cover opacity-40"
        />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-4">
            {hero.title}
          </h1>
          <p className="text-xl text-[#C4001D] md:text-2xl font-semibold mb-6">{hero.subtitle}</p>
          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
            {hero.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {hero.booklets.map((booklet, i) => (
              <a
                key={i}
                href={booklet.file}
                download
                className="border border-white px-6 py-3 rounded-full font-medium hover:bg-[#C4001D] hover:text-black transition"
              >
                Download {booklet.name}
              </a>
            ))}

            <Link
              href="/contact"
              className="border border-white px-6 py-3 rounded-full font-medium hover:bg-[#C4001D] hover:text-black transition"
            >
              {hero.ctaSecondary} →
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
      </section>

      {/* About Section */}
      <section className="bg-black max-w-6xl w-full py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#C4001D] dark:text-[#C4001D]">
            {about.title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            {about.text}
          </p>
          <Link
            href="/about"
            className="text-[#C4001D] font-medium hover:underline"
          >
            Know More →
          </Link>
        </div>
        <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={about.image}
            alt={about.title}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white dark:bg-black py-20 px-6 border-t border-gray-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-black dark:text-white">
            {features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {features.list.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
              >
                <p className="text-black dark:text-gray-200 text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/amenities"
            className="text-[#C4001D] font-medium hover:underline"
          >
            Explore More →
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-black dark:text-white">
            {gallery.title}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gallery.images.map((src, i) => (
              <div
                key={i}
                className="relative w-full h-64 rounded-xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`gallery-${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="text-[#C4001D] font-medium hover:underline"
            >
              View More →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-black text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            {contact.title}
          </h2>
          <p className="text-lg mb-8 opacity-90">{contact.text}</p>
          <div className="space-y-2">
            <p className="text-xl font-medium">{contact.phone}</p>
            <p className="text-xl">{contact.email}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
