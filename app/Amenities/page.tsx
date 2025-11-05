"use client";

import Image from "next/image";
import { amenitiesData } from "@/data/amenities";

export default function AmenitiesPage() {
  const { hero, amenities } = amenitiesData;

  return (
    <main className="flex flex-col items-center text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden bg-black">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-6">{hero.subtitle}</p>
          <p className="text-base opacity-80 leading-relaxed">
            {hero.description}
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="max-w-7xl w-full px-6 py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="w-20 h-20 relative rounded-full border border-dashed border-zinc-400 flex items-center justify-center mb-4 p-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-medium opacity-90">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
