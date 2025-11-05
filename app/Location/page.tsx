"use client";

import Image from "next/image";
import Carousel from "@/components/Carousel";
import { locationData } from "@/data/location";

export default function LocationPage() {
  return (
    <div className="flex flex-col gap-20 px-6 md:px-16 py-16 bg-black text-white overflow-x-hidden">
      {/* 🗺️ MAP SECTION */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#C4001D]">
          Explore the Location
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Located strategically in the heart of Guwahati — Skywalk Towers offers
          unmatched access to business districts, educational institutions, and
          lifestyle destinations.
        </p>

        {/* 🧭 Distances Map (SVG Illustration) */}
        <div className="max-w-5xl mx-auto mb-10">
          <Image
            src="/images/distancesmap.svg"
            alt="Skywalk Towers Distances Map"
            width={1200}
            height={700}
            className="w-full h-auto rounded-2xl border border-[#222] shadow-md"
          />
        </div>

        {/* 📍 Google Map Embed */}
        <div
          className="rounded-2xl overflow-hidden border border-[#222] shadow-lg max-w-6xl mx-auto aspect-video [&>iframe]:block [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0"
          dangerouslySetInnerHTML={{ __html: locationData.mapEmbed }}
        />
      </section>

      {/* 🏪 NEARBY ESSENTIALS */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-10 text-[#C4001D]">
          Nearby Essentials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {locationData.nearbyEssentials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#111] border border-[#222] p-6 rounded-2xl hover:border-[#C4001D] hover:scale-[1.03] transition-all duration-300"
            >
              <div className="text-3xl mb-3 text-[#C4001D]">{item.icon}</div>
              <h3 className="font-semibold text-white">{item.name}</h3>
              <p className="text-sm text-gray-400 mt-1">
                {item.distance} away
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚆 CONNECTIVITY */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-10 text-[#C4001D]">
          Connectivity & Commute
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {locationData.connectivity.map((route, index) => (
            <div
              key={index}
              className="bg-[#111] border border-[#222] rounded-2xl px-6 py-5 shadow-sm hover:border-[#C4001D] hover:scale-[1.03] transition-all"
            >
              <h3 className="font-semibold text-white">{route.name}</h3>
              <p className="text-gray-400">{route.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌆 LIFESTYLE HIGHLIGHTS */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-10 text-[#C4001D]">
          Lifestyle Highlights
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Enjoy proximity to top lifestyle and entertainment hubs that make
          every day vibrant and fulfilling.
        </p>
        <Carousel images={locationData.lifestyleImages.map((imgObj) => imgObj.img)} />
      </section>
    </div>
  );
}
