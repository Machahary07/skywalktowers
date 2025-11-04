import Carousel from "@/components/Carousel";
import { locationData } from "@/data/location";

export default function LocationPage() {
  return (
    <div className="flex flex-col gap-16 px-6 md:px-16 py-10 text-gray-800">
      {/* 🗺️ Map Section */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Explore the Location
        </h1>
        <div
          className="rounded-xl overflow-hidden shadow-lg"
          dangerouslySetInnerHTML={{ __html: locationData.mapEmbed }}
        />
      </section>

      {/* 🏪 Nearby Essentials */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Nearby Essentials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {locationData.nearbyEssentials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition-all"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.distance} away</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚆 Connectivity */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Connectivity & Commute
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {locationData.connectivity.map((route, index) => (
            <div
              key={index}
              className="bg-gray-100 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="font-semibold">{route.name}</h3>
              <p className="text-gray-600">{route.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌆 Lifestyle Highlights */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Lifestyle Highlights
        </h2>
        <Carousel images={locationData.lifestyleImages.map(imgObj => imgObj.img)} />
      </section>
    </div>
  );
}
