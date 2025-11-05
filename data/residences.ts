// data/residences.ts

export const residencesData = {
  hero: {
    title: "Residences at Skywalk Towers",
    subtitle: "Redefining Urban Living",
    description:
      "Discover 2BHK & 3BHK residences designed for those who desire elegance, privacy, and timeless comfort. Each home at Skywalk Towers blends architectural beauty with functional design.",
    image: "/images/hero-tower.webp",
    pdfLink: "/pdfs/SKYWALK-TOWERS-LAYOUT-AUGUST-m.pdf",
  },

  sections: [
    {
      id: "street-view",
      title: "A Grand Urban Presence",
      description:
        "Experience the harmony of modern architecture and green landscapes. Skywalk Towers stands tall as a symbol of sophistication and serenity.",
      image: "/images/residences/street-view.jpg",
    },
    {
      id: "site-plan",
      title: "Masterfully Planned Community",
      description:
        "The site plan ensures every resident enjoys privacy, greenery, and accessibility — from landscaped gardens to elegant entryways.",
      image: "/images/residences/site-plan.png",
    },
    {
      id: "towers",
      title: "Towers A–E",
      description:
        "Spacious 2BHK and 3BHK apartments designed for natural light and modern living. Towers A & B offer 2/3BHK options, while Towers C, D & E feature exclusive 3BHK residences.",
      image: "/images/features.webp",
      flats: [
        { tower: "A", flats: ["A", "B", "C", "D", "E", "F"], type: "2/3BHK" },
        { tower: "B", flats: ["A", "B", "C", "D", "E", "F"], type: "2/3BHK" },
        { tower: "C", flats: ["A", "B", "C", "D", "E", "F"], type: "3BHK" },
        { tower: "D", flats: ["A", "B", "C", "D", "E", "F"], type: "3BHK" },
        { tower: "E", flats: ["A", "B", "C", "D", "E", "F"], type: "3BHK" },
      ],
    },
    {
      id: "terrace",
      title: "Elevated Lifestyle – Terrace Plan",
      description:
        "Enjoy open skies and community spaces on the terrace – perfect for leisure, yoga, and gatherings under the stars.",
      image: "/images/gallery1.webp",
    },
    {
      id: "parking-lobby",
      title: "Convenience at Every Step",
      description:
        "Well-organized parking and grand double-height lobbies ensure seamless comfort from the moment you arrive home.",
      image: "/images/residences/parkinglayout.png",
    },
    {
      id: "specifications",
      title: "Specifications & Finishes",
      description:
        "Every detail reflects quality — from vitrified flooring and modular kitchens to premium bath fittings and elegant lighting.",
      image: "/images/room.png",
    },
    {
      id: "location",
      title: "Perfectly Positioned",
      description:
        "Located at Supreme Tower, GS Road, Guwahati — offering unmatched access to schools, offices, malls, and key city hubs.",
      image: "/images/distancesmap.svg",
      link: "/location",
    },
  ],

  gallery: [
    { src: "/images/residences/3bhkcdemidleft.png", caption: "3BHK Tower CDE - Mid Left" },
    { src: "/images/residences/3bhktowercdebottomleft.png", caption: "3BHK Tower CDE - Bottom Left" },
    { src: "/images/residences/3bhktowercdebottomright.png", caption: "3BHK Tower CDE - Bottom Right" },
    { src: "/images/residences/3bhktowercdemidright.png", caption: "3BHK Tower CDE - Mid Right" },
    { src: "/images/residences/3bhktowercdetopleft.png", caption: "3BHK Tower CDE - Top Left" },
    { src: "/images/residences/3bhktowercdetopright.png", caption: "3BHK Tower CDE - Top Right" },
    { src: "/images/residences/A4bhktowerB.png", caption: "4BHK Tower B - Type A" },
    { src: "/images/residences/B4bhktowerB.png", caption: "4BHK Tower B - Type B" },
    { src: "/images/residences/C4bhktowerB.png", caption: "4BHK Tower B - Type C" },
    { src: "/images/residences/CommtowerA.png", caption: "Commercial Tower A" },
    { src: "/images/residences/D4bhktowerB.png", caption: "4BHK Tower B - Type D" },
    { src: "/images/residences/E4bhktowerB.png", caption: "4BHK Tower B - Type E" },
    { src: "/images/residences/F4bhktowerB.png", caption: "4BHK Tower B - Type F" },
    { src: "/images/residences/floorplans3bhkcde.png", caption: "3BHK Tower CDE - Floor Plan" },
    { src: "/images/residences/floorplans4bhktowerB.png", caption: "4BHK Tower B - Floor Plan" },
    { src: "/images/residences/parkinglayout.png", caption: "Parking Layout" },
    { src: "/images/residences/site-plan.png", caption: "Site Plan" },
    { src: "/images/residences/terracelayout.png", caption: "Terrace Layout" },
  ],
};
