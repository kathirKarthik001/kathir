"use client";
import React from "react";
import Image from "next/image";

const images = [
  { src: "/events/e0-techzooka.webp", title: "Infosys TechZooka '24" },
  { src: "/events/e1-web-wizard.webp", title: "Web Wizards Showdown" },
  { src: "/events/e2-academic-topper.webp", title: "Academic Topper Award" },
  { src: "/events/e3-cisco-aicte.webp", title: "Cisco Aicte Intern" },
  { src: "/events/e4-pixel-perfect.webp", title: "Pixel Perfect" },
  { src: "/events/e6-ieee-flame.webp", title: "IEEE Flame S1" },
  { src: "/events/e7-ieee-flame2.webp", title: "IEEE Flame S2" },
  { src: "/events/e8-poster-design.webp", title: "Poster Design" },
  { src: "/events/e9-ieee-cs-day.webp", title: "IEEE CS Day" },
  { src: "/events/e10-innovosense.webp", title: "Innovosense '23" },
];

const Gallery = () => {
  return (
    <section className="mb-12 px-4">
      <h2 className="text-3xl font-semibold text-white underline mb-6 text-center">Gallery</h2>
      <div 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-3 flex flex-col items-center"
          >
            {/* Image */}
            <div className="w-full h-56 overflow-hidden">
              <Image
                src={image.src}
                alt={image.title}
                width={300}
                height={200}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
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

export default Gallery;