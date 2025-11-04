// data/location.ts

export const locationData = {
  mapEmbed: `<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.338610341486!2d91.77921137550838!3d26.15309957710812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59b703c581ad%3A0xc3fd7ce59466624a!2sSupreme%20Tower!5e0!3m2!1sen!2sin!4v1762269165873!5m2!1sen!2sin" 
    width="100%" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>`,

  nearbyEssentials: [
    { icon: "🏥", name: "Apollo Hospital", distance: "2.5 km" },
    { icon: "🎓", name: "Royal Global School", distance: "1.8 km" },
    { icon: "☕", name: "The Bean Café", distance: "1.2 km" },
    { icon: "🛍️", name: "Central Mall", distance: "3.4 km" },
    { icon: "🌳", name: "Bashistha Park", distance: "1.5 km" },
  ],

  connectivity: [
    { name: "Airport", time: "25 mins" },
    { name: "City Center", time: "15 mins" },
    { name: "Tech Park", time: "20 mins" },
    { name: "Railway Station", time: "18 mins" },
  ],

   lifestyleImages: [
    { id: 1, title: "Cafés", img: "/images/gallery1.webp" },
    { id: 2, title: "Shopping Malls", img: "/images/gallery2.webp" },
    { id: 3, title: "Jogging Parks", img: "/images/gallery3.webp" },
    { id: 4, title: "Nightlife", img: "/images/gallery4.webp" },
  ],
};
