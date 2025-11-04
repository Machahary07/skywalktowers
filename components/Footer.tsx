// components/Footer.tsx
import Link from "next/link";
import { footerData } from "@/data/footer";

export default function Footer() {
  const { brand, contact, consultants } = footerData;

  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">
            {brand.title.split(" ")[0]}{" "}
            <span className="text-[#C4001D]">{brand.title.split(" ")[1]}</span>
          </h3>
          <p className="text-sm leading-6 opacity-80">{brand.description}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Residences", href: "/residences" },
              { name: "Amenities", href: "/amenities" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-[#C4001D]">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-medium text-white mb-4">Contact</h4>
          <p className="text-sm opacity-80">
            {contact.address.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <p className="mt-4 text-sm">
            <span className="font-medium text-white">Phone:</span>{" "}
            {contact.phone}
          </p>
          <p className="text-sm">
            <span className="font-medium text-white">Email:</span>{" "}
            {contact.email}
          </p>
        </div>

        {/* Consultants */}
        <div>
          <h4 className="text-lg font-medium text-white mb-4">Consultants</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {consultants.map((item, i) => (
              <li key={i}>
                {item.role}: {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-zinc-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white">SKYWALK TOWERS</span>. All rights reserved.
        | RERA Registered Project |{" "}
        <span className="ml-1">
          Designed & Maintained by{" "}
          <a
            href="https://themanki.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C4001D] hover:underline"
          >
            TheManki.com
          </a>
        </span>
      </div>
    </footer>
  );
}
