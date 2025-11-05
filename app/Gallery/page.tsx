"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryData } from "@/data/gallery";

export default function GalleryPage() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <main className="bg-black text-white min-h-screen py-20 px-6 md:px-16 overflow-x-hidden">
      {/* 🔴 HEADER */}
      <section className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#C4001D]">
          Gallery
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Step inside Skywalk Towers — where architecture meets artistry.
          Explore the visuals that define our elegance.
        </p>
      </section>

      {/* 🖼️ IMAGE GRID */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryData.images.slice(0, visibleCount).map((img, i) => (
            <div
              key={i}
              className="relative w-full aspect-square rounded-2xl overflow-hidden group"
            >
              <Image
                src={img}
                alt={`gallery-${i}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all" />
            </div>
          ))}
        </div>

        {/* 🔽 LOAD MORE BUTTON */}
        {visibleCount < galleryData.images.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 border-2 border-[#C4001D] rounded-md text-[#C4001D] font-semibold hover:bg-[#C4001D] hover:text-white transition-all"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
