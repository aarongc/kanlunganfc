"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const galleryImages = [
    { id: 1, src: "/images/gallery/690861702_989453347373012_1903943069353556815_n.jpg", alt: "Kanlungan FC Team Photo 1", height: "h-80", filter: "brightness-110 contrast-105" },
    { id: 2, src: "/images/gallery/692213494_989457164039297_1097634128739699567_n.jpg", alt: "Kanlungan FC Team Photo 2", height: "h-64", filter: "saturate-150 contrast-110" },
    { id: 3, src: "/images/gallery/695597444_989457134039300_5908620124649116912_n.jpg", alt: "Kanlungan FC Team Photo 3", height: "h-96", filter: "sepia-20 brightness-105" },
    { id: 4, src: "/images/gallery/705003240_1002433999408280_1698403333081623728_n.jpg", alt: "Kanlungan FC Team Photo 4", height: "h-72", filter: "contrast-120 saturate-120" },
    { id: 5, src: "/images/gallery/706020757_1001551019496578_1980396648142371333_n.jpg", alt: "Kanlungan FC Team Photo 5", height: "h-64", filter: "brightness-105 saturate-110" },
    { id: 6, src: "/images/gallery/706021267_1001551012829912_3130362631712066626_n.jpg", alt: "Kanlungan FC Team Photo 6", height: "h-80", filter: "contrast-115 brightness-110" },
    { id: 7, src: "/images/gallery/706527641_1001551036163243_7652792319658302076_n.jpg", alt: "Kanlungan FC Team Photo 7", height: "h-72", filter: "saturate-130 contrast-105" },
    { id: 8, src: "/images/gallery/715711673_1012606355057711_2406201888397208618_n.jpg", alt: "Kanlungan FC Team Photo 8", height: "h-96", filter: "brightness-110 sepia-10" },
    { id: 9, src: "/images/gallery/716510802_1012606348391045_2765484153034760177_n.jpg", alt: "Kanlungan FC Team Photo 9", height: "h-64", filter: "contrast-110 saturate-140" },
    { id: 10, src: "/images/gallery/680979200_975879158730431_1321401160795825209_n.jpg", alt: "Kanlungan FC Team Photo 10", height: "h-80", filter: "brightness-115 saturate-120" },
    { id: 11, src: "/images/gallery/658861036_953823130936034_4745056921707352159_n.jpg", alt: "Kanlungan FC Team Photo 11", height: "h-72", filter: "saturate-125 brightness-110" },
    { id: 12, src: "/images/gallery/642400227_930630423255305_2703634313386251260_n.jpg", alt: "Kanlungan FC Team Photo 12", height: "h-64", filter: "contrast-110 saturate-115" },
  ];

  const selectedImageData = selectedImage !== null 
    ? galleryImages.find(img => img.id === selectedImage) 
    : null;

  return (
    <div className="font-display relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/gallery-background.jpg"
          alt="Football Field Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl uppercase tracking-wider mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Memories from training sessions, matches, and club events
          </p>
        </div>
      </section>

      {/* Gallery Grid - Pinterest Style Masonry */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image.id)}
                className={`relative ${image.height} bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer break-inside-avoid mb-6 border-4 border-white`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover ${image.filter}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {mounted && selectedImage !== null && selectedImageData && createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10"
              aria-label="Close"
            >
              <X size={40} />
            </button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[90vh] w-full h-full cursor-default"
            >
              <Image
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}

      {/* Categories */}
      <section className="py-16 bg-gray-50/95">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl uppercase tracking-wider mb-8">Photo Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="text-xl uppercase tracking-wide mb-2">Training Sessions</h3>
              <p className="text-gray-600">Photos from our daily training activities</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="text-xl uppercase tracking-wide mb-2">Match Highlights</h3>
              <p className="text-gray-600">Action shots from competitive matches</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="text-xl uppercase tracking-wide mb-2">Events & Celebrations</h3>
              <p className="text-gray-600">Special moments and team celebrations</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

