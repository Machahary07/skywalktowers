"use client";

import Image from "next/image";
import { featuresData } from "@/data/features";

export default function FeaturesPage() {
  const { hero, sections } = featuresData;

  return (
    <main className="flex flex-col items-center w-full text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden bg-black">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl opacity-90">{hero.subtitle}</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl w-full px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sections.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h2 className="text-xl font-semibold mb-3">{feature.title}</h2>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
