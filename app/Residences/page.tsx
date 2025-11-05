"use client";

import Image from "next/image";
import Link from "next/link";
import { residencesData } from "@/data/residences";
import ResidencesCarousel from "@/components/ResidencesCarousel";

export default function ResidencesPage() {
  const { hero, sections } = residencesData;

  return (
    <main className="flex flex-col bg-black text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] md:h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <Image
          src={hero.image}
          alt="Skywalk Towers"
          fill
          className="object-cover opacity-30"
          priority
        />

        <div className="relative z-10 p-6 sm:p-8 max-w-[90%] sm:max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 text-white leading-tight">
            {hero.title}
          </h1>
          <p className="text-[#C4001D] text-lg sm:text-xl mb-3 font-medium">
            {hero.subtitle}
          </p>
          <p className="mb-8 text-gray-300 text-sm sm:text-base leading-relaxed">
            {hero.description}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </section>

      {/* SECTIONS */}
      {sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 sm:gap-12 py-16 sm:py-20 px-4 sm:px-6 transition-all duration-700 ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-xl border border-[#222] hover:scale-[1.02] transition-transform duration-700">
              <Image
                src={section.image}
                alt={section.title}
                width={700}
                height={500}
                className="object-cover w-full h-auto max-h-[400px] sm:max-h-[500px]"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C4001D]">
              {section.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {section.description}
            </p>

            {/* TOWER GRID */}
            {section.id === "towers" && section.flats && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                {section.flats.map((tower) => (
                  <div
                    key={tower.tower}
                    className="border border-[#1f1f1f] bg-[#111] p-4 rounded-lg hover:border-[#C4001D] transition-all"
                  >
                    <p className="text-[#C4001D] font-semibold text-base">
                      Tower {tower.tower}
                    </p>
                    <p className="text-sm text-gray-400">{tower.type}</p>
                    <p className="text-xs text-gray-500">
                      Flats: {tower.flats.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* LOCATION LINK */}
            {section.id === "location" && (
              <Link
                href={section.link || "#"}
                className="inline-block mt-3 text-[#C4001D] font-semibold underline hover:opacity-80 text-sm sm:text-base"
              >
                View Location →
              </Link>
            )}
          </div>
        </section>
      ))}

      {/* GALLERY CAROUSEL SECTION */}
      <section className="py-16 px-4 border-t border-[#1f1f1f]">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#C4001D] mb-10">
          Skywalk Towers Gallery
        </h2>
        <ResidencesCarousel />
      </section>

      {/* CTA FOOTER */}
      <section className="bg-[#111] text-center py-16 sm:py-24 mt-10 border-t border-[#1f1f1f] px-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white leading-snug">
          Your Skywalk Story Begins Here
        </h3>
        <p className="mb-8 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Explore, experience, and elevate your lifestyle at Skywalk Towers — a
          home that defines urban luxury.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={hero.pdfLink}
            download
            className="px-5 sm:px-6 py-3 bg-[#C4001D] hover:bg-white hover:text-[#C4001D] border-2 border-[#C4001D] transition-all duration-300 rounded-md font-semibold text-sm sm:text-base text-center"
          >
            Download Layout Booklet (PDF)
          </Link>
          <Link
            href="/contact"
            className="px-5 sm:px-6 py-3 border-2 border-white hover:bg-white hover:text-black rounded-md transition-all font-medium text-sm sm:text-base text-center"
          >
            Book a Visit
          </Link>
        </div>
      </section>
    </main>
  );
}
