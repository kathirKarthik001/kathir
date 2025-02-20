"use client";
import React from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/kathir.jpg", title: "kathir" },
  { src: "/pic1.jpg", title: "kathir" },
  { src: "/image3.jpg", title: "City Lights" },
  { src: "/image4.jpg", title: "Ocean Waves" },
  { src: "/image5.jpg", title: "Forest Trail" },
  { src: "/image6.jpg", title: "Desert Dunes" },
];

const Gallery = ({ images }) => {
  return (
    <section className="mb-12 px-4">
      <h2 className="text-3xl font-semibold text-white underline mb-6 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white shadow-lg  p-3 flex flex-col items-center"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden">
              <Image
                src={image.src}
                alt={image.title}
                width={300}
                height={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <p className="mt-3 text-lg font-medium text-gray-800">{image.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function GallerySection() {
  return <Gallery images={galleryImages} />;
}
