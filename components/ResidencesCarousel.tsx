"use client";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { residencesData } from "@/data/residences";

export default function ResidencesCarousel() {
  const { gallery } = residencesData;
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [selectedCaption, setSelectedCaption] = useState<string>("");

  const handleOpen = (src: string, caption: string) => {
    setSelectedImg(src);
    setSelectedCaption(caption);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden border border-[#222] shadow-lg">
      <Carousel fade interval={3000} pause="hover">
        {gallery.map((img, index) => (
          <Carousel.Item key={index}>
            <div
              className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] cursor-pointer"
              onClick={() => handleOpen(img.src, img.caption)}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            <Carousel.Caption className="pb-10 sm:pb-16">
              <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                {img.caption}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">Click to enlarge</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* MODAL */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        size="xl"
        contentClassName="bg-black border border-[#333] rounded-2xl"
      >
        <Modal.Body className="relative p-0">
          {selectedImg && (
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImg}
                alt={selectedCaption}
                fill
                className="object-contain"
              />
            </div>
          )}

          <div className="text-center text-gray-300 mt-3 mb-4 text-sm sm:text-base">
            {selectedCaption}
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 px-4 py-2 bg-[#C4001D] text-white rounded-md hover:bg-white hover:text-[#C4001D] transition-all"
          >
            ✕ Close
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
