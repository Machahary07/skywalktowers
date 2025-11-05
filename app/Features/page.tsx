"use client";

import Image from "next/image";
import { featuresData } from "@/data/features";

export default function FeaturesPage() {
  const { hero, sections } = featuresData;

  return (
    <main className="flex flex-col items-center w-full bg-black text-white overflow-x-hidden">
      {/* 🏙️ HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            {hero.subtitle}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </section>

      {/* 🌟 FEATURES GRID */}
      <section className="max-w-7xl w-full px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sections.map((feature, index) => (
          <div
            key={index}
            className="bg-[#111] border border-[#222] rounded-2xl p-8 shadow-lg hover:border-[#C4001D] hover:shadow-[#C4001D]/30 transition-all duration-300"
          >
            <div className="text-4xl mb-4 text-[#C4001D]">{feature.icon}</div>
            <h2 className="text-xl font-semibold mb-3 text-white uppercase tracking-wide">
              {feature.title}
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
