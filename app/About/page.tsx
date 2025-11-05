"use client";

import Image from "next/image";
import Link from "next/link";
import { aboutData } from "@/data/about";
import DetailsCarousel from "@/components/DetailsCarousel";

export default function AboutPage() {
  const { intro, details, sitePlan, overview, consultants } = aboutData;

  return (
    <main className="flex flex-col text-gray-900 dark:text-gray-100">
      {/* 1️⃣ Intro Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-20 items-center">
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={intro.image}
            alt="Skywalk Towers"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
            {intro.title}
          </h1>
          <p className="text-lg leading-relaxed opacity-90">
            {intro.description}
          </p>
        </div>
      </section>

      {/* Scrollable Carousel with Arrow Buttons */}
      <DetailsCarousel details={details} />

      {/* 3️⃣ Site Plan Image */}
      <section className="w-full py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Image
            src={sitePlan.image}
            alt="Site Plan"
            width={1200}
            height={700}
            className="rounded-2xl shadow-lg object-contain"
          />
          {/* View more button */}
          <div className="flex justify-end"> 
          <Link
            href="/residences"
            className="inline-block mt-6 px-6 py-3 bg-[#C4001D] text-white text-lg font-medium rounded-full hover:bg-[#a10018] transition-all duration-300"
          >
            Explore More →
          </Link>
          </div>
        </div>
      </section>

      {/* 4️⃣ Overview Section (Features / Amenities / Connectivity) */}
      <section className="bg-gray-50 dark:bg-zinc-950 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#C4001D]">
              Key Features
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {overview.features.slice(0, 3).map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
            <Link
              href="/features"
              className="text-[#C4001D] mt-3 inline-block hover:underline"
            >
              View More →
            </Link>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#C4001D]">
              Amenities
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {overview.amenities.slice(0, 5).map((a, i) => (
                <li key={i}>• {a}</li>
              ))}
            </ul>
            <Link
              href="/amenities"
              className="text-[#C4001D] mt-3 inline-block hover:underline"
            >
              View More →
            </Link>
          </div>

          {/* Connectivity */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#C4001D]">
              Connectivity
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {overview.connectivity.slice(0, 3).map((c, i) => (
                <li key={i}>• {c}</li>
              ))}
            </ul>
            <Link
              href="/location"
              className="text-[#C4001D] mt-3 inline-block hover:underline"
            >
              View More →
            </Link>
          </div>
        </div>
      </section>

      {/* 5️⃣ Consultants Section */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            {consultants.heading}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {consultants.list.map((c, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-700"
              >
                <h3 className="text-lg font-semibold text-[#C4001D] mb-1">
                  {c.title}
                </h3>
                <p className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                  {c.name}
                </p>
                <p className="text-sm opacity-80 mb-1">{c.details}</p>
                {c.email && (
                  <p className="text-sm opacity-80">Email: {c.email}</p>
                )}
                {c.phone && (
                  <p className="text-sm opacity-80">Phone: {c.phone}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
