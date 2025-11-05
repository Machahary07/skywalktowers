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
      <section className="py-20 px-6 bg-black text-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#C4001D]">
      {consultants.heading}
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {consultants.list.map((c, i) => (
        <div
          key={i}
          className="p-8 bg-[#111] border border-[#222] rounded-2xl shadow-md hover:border-[#C4001D] hover:shadow-[#C4001D]/20 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold text-[#C4001D] mb-2 uppercase tracking-wide">
            {c.title}
          </h3>

          <p className="text-xl font-medium text-white mb-1">
            {c.name}
          </p>

          <p className="text-sm text-gray-400 mb-2">{c.details}</p>

          {c.email && (
            <p className="text-sm text-gray-400">
              <span className="text-gray-500">Email:</span>{" "}
              <a
                href={`mailto:${c.email}`}
                className="hover:text-[#C4001D] transition-colors"
              >
                {c.email}
              </a>
            </p>
          )}

          {c.phone && (
            <p className="text-sm text-gray-400 mt-1">
              <span className="text-gray-500">Phone:</span>{" "}
              <a
                href={`tel:${c.phone}`}
                className="hover:text-[#C4001D] transition-colors"
              >
                {c.phone}
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

    </main>
  );
}
