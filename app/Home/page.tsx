// app/home/page.tsx
"use client";

import Image from "next/image";
import { homeData } from "@/data/home";

export default function HomePage() {
  const { hero, about, features, gallery, contact } = homeData;

  return (
    <main className="flex flex-col items-center w-full text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex flex-col justify-center items-center text-center bg-black text-white overflow-hidden">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-6">{hero.subtitle}</p>
          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
            {hero.description}
          </p>
          <div className="space-x-4">
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              {hero.ctaPrimary}
            </button>
            <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
              {hero.ctaSecondary}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl w-full py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {about.title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">{about.text}</p>
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
      <section className="w-full bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            {features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.list.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-left"
              >
                <p className="text-gray-800 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
            {gallery.title}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gallery.images.map((src, i) => (
              <div
                key={i}
                className="relative w-full h-64 rounded-xl overflow-hidden"
              >
                <Image src={src} alt={`gallery-${i}`} fill className="object-cover hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-gray-900 text-white py-20 px-6 text-center">
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
