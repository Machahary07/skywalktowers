import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";
// 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SKYWALK TOWERS",
  description: "Experience elevated living above the skyline — SKYWALK TOWERS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap');`}
        </style>
      </head>
      <body
        className="antialiased bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100"
        style={{ fontFamily: "'Host Grotesk', sans-serif" }}
      >
        <Navbar />
        <main className="pt-15 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
