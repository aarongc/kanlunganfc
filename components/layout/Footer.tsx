import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-yellow-500">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4">
              <span className="text-yellow-400">KANLUNGAN</span> FC
            </h3>
            <p className="font-display text-gray-400">
              Building champions on and off the field. Cebu's premier youth football club since 2014.
            </p>
          </div>

          <div>
            <h4 className="font-display mb-4">Quick Links</h4>
            <ul className="space-y-2 font-display">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/teams" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display mb-4">Connect With Us</h4>
            <div className="space-y-3 font-display">
              <a
                href="https://www.facebook.com/people/Kanlungan-FC/100089250671484/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <ExternalLink className="mr-2" size={20} />
                Facebook
              </a>
              <div className="flex items-center text-gray-400">
                <Mail className="mr-2" size={20} />
                info@kanlunganfc.com
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="mr-2" size={20} />
                Cebu City, Philippines
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p className="font-display">&copy; {new Date().getFullYear()} Kanlungan FC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
