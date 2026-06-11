"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface PlayerCardProps {
  name: string;
  position: string;
  number?: number;
  image?: string;
}

export default function PlayerCard({
  name,
  position,
  number,
  image = "/images/player-placeholder.jpg",
}: PlayerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-[380px] cursor-pointer perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-white border border-gray-200 rounded-lg overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-64 bg-yellow-500">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-black text-center">
                <div className="text-6xl font-bold opacity-30">{number || "?"}</div>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-display text-lg uppercase tracking-wide mb-1">{name}</h3>
            <p className="font-display text-gray-600 text-sm uppercase tracking-wide">{position}</p>
            {number && (
              <p className="font-display text-yellow-500 text-sm mt-2">#{number}</p>
            )}
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-yellow-500 rounded-lg p-6 flex flex-col justify-center items-center text-black"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="font-display text-7xl mb-4 opacity-30">{number || "?"}</div>
          <h3 className="font-display text-2xl uppercase tracking-wide mb-2">{name}</h3>
          <p className="font-display text-black text-lg uppercase tracking-wider mb-4">{position}</p>
          <p className="font-display text-sm text-center text-black/80">
            Player stats and details coming soon
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

