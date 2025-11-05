"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DetailSection {
  title: string;
  image: string;
  content: string;
}

export default function DetailsCarousel({
  details,
}: {
  details: { heading: string; sections: DetailSection[] };
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalCards = details.sections.length;

  // Get how many cards to show based on screen width
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Total "sets" of slides (for dots)
  const totalSlides = Math.ceil(totalCards / visibleCards);

  // GSAP slide animation
  const animateSlide = (newIndex: number, direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const distance = direction === "right" ? -50 : 50;

    gsap.to(container, {
      xPercent: distance,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.set(container, { xPercent: -distance });
        gsap.to(container, {
          xPercent: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      },
    });
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + visibleCards) % totalCards;
    animateSlide(nextIndex, "right");
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - visibleCards + totalCards) % totalCards;
    animateSlide(prevIndex, "left");
  };

  const goToSlide = (index: number) => {
    const direction = index > currentIndex ? "right" : "left";
    animateSlide(index * visibleCards, direction);
  };

  // Pick visible items
  const visibleItems: DetailSection[] = [];
  for (let i = 0; i < visibleCards; i++) {
    const index = (currentIndex + i) % totalCards;
    visibleItems.push(details.sections[index]);
  }

  return (
    <section className="relative py-20 px-6 bg-gray-50 dark:bg-zinc-950 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        {details.heading}
      </h2>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-800 p-3 rounded-full shadow-lg border border-zinc-200 dark:border-zinc-700 hover:scale-105 transition"
      >
        <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-gray-100" />
      </button>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex justify-center gap-8 transition-transform duration-500 ease-in-out"
      >
        {visibleItems.map((item, i) => (
          <div
            key={i}
            className="group relative flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-md overflow-hidden transition-all duration-500 w-full max-w-[350px] sm:max-w-[400px] flex-shrink-0"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h3 className="text-lg font-semibold text-[#C4001D] mb-2 uppercase">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-800 p-3 rounded-full shadow-lg border border-zinc-200 dark:border-zinc-700 hover:scale-105 transition"
      >
        <ChevronRight className="w-6 h-6 text-gray-900 dark:text-gray-100" />
      </button>

      {/* 🟣 Slide Dots */}
      <div className="flex justify-center mt-10 space-x-3">
        {Array.from({ length: totalSlides }).map((_, index) => {
          const isActive =
            Math.floor(currentIndex / visibleCards) === index;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-[#C4001D] scale-125"
                  : "bg-gray-400 dark:bg-gray-600 hover:bg-[#C4001D]/70"
              }`}
            />
          );
        })}
      </div>

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 dark:from-zinc-950 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 dark:from-zinc-950 to-transparent"></div>
    </section>
  );
}
