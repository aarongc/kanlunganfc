"use client";

import { Calendar, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  location: string;
  status?: "upcoming" | "live" | "completed";
  score?: { home: number; away: number };
}

export default function MatchCard({
  homeTeam,
  awayTeam,
  date,
  time,
  location,
  status = "upcoming",
  score,
}: MatchCardProps) {
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-sm text-gray-600 font-display">
          <Calendar className="mr-2" size={16} />
          {date}
        </div>
        <motion.span
          className={`font-display px-3 py-1 rounded-full text-xs ${
            status === "live"
              ? "bg-yellow-500 text-white"
              : status === "completed"
              ? "bg-gray-600 text-white"
              : "bg-blue-600 text-white"
          }`}
          animate={
            status === "live"
              ? {
                  scale: [1, 1.1, 1],
                  transition: { repeat: Infinity, duration: 1.5 },
                }
              : {}
          }
        >
          {status.toUpperCase()}
        </motion.span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="text-center flex-1">
          <p className="font-display text-lg">{homeTeam}</p>
        </div>
        
        <div className="text-center px-4">
          {score ? (
            <p className="font-display text-3xl text-yellow-500">
              {score.home} - {score.away}
            </p>
          ) : (
            <p className="font-display text-2xl text-gray-400">VS</p>
          )}
        </div>

        <div className="text-center flex-1">
          <p className="font-display text-lg">{awayTeam}</p>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-600 font-display">
        <div className="flex items-center">
          <Clock className="mr-2" size={16} />
          {time}
        </div>
        <div className="flex items-center">
          <MapPin className="mr-2" size={16} />
          {location}
        </div>
      </div>
    </motion.div>
  );
}

