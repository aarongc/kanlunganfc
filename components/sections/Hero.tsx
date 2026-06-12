"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with B&W Filter */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Kanlungan FC Team"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Hero Text */}
      <div className="relative container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-normal mb-4 tracking-wider uppercase">
            <span className="text-yellow-400 drop-shadow-2xl">KANLUNGAN FC</span>
          </h1>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-normal mb-8 tracking-wider uppercase text-white drop-shadow-lg">
            CEBU'S PREMIER
          </h2>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal mb-12 tracking-wider uppercase">
            <span className="text-yellow-400 drop-shadow-2xl">FOOTBALL CLUB</span>
          </h2>
          <p className="font-display text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Building Champions Since 2014
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="font-display bg-yellow-500 hover:bg-yellow-600 text-black text-xl px-12 py-8 h-auto rounded-none uppercase tracking-wider shadow-2xl"
            >
              <Link href="/teams">Our Teams</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="font-display bg-white text-black hover:bg-yellow-400 hover:text-black text-xl px-12 py-8 h-auto rounded-none uppercase tracking-wider shadow-2xl"
            >
              <Link href="/contact">Join Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>

      {/* Copyright Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-400 z-10">
        <p className="font-display">Copyright © Kanlungan FC - All rights reserved - 2014-{new Date().getFullYear()}</p>
      </div>
    </section>
  );
}
