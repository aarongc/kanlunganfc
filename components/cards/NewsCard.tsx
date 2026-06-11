"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  slug: string;
}

export default function NewsCard({
  title,
  excerpt,
  date,
  image = "/images/news-placeholder.jpg",
  slug,
}: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`}>
      <motion.div
        className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer"
        whileHover={{
          y: -10,
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="relative h-48 bg-yellow-500 overflow-hidden"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-black font-display text-xl uppercase tracking-wider opacity-30">
            NEWS
          </div>
        </motion.div>
        
        <div className="p-4">
          <div className="flex items-center text-sm text-gray-600 mb-2 font-display">
            <Calendar className="mr-2" size={16} />
            {date}
          </div>
          <h3 className="font-display text-lg uppercase tracking-wide mb-2 line-clamp-2">{title}</h3>
          <p className="font-display text-gray-600 text-sm line-clamp-3">{excerpt}</p>
        </div>
      </motion.div>
    </Link>
  );
}

