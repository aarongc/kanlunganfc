"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryImages } from "@/lib/siteData";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

