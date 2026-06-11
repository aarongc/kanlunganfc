import { Mail, ExternalLink, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="font-display">
      {/* Hero Section */}
      <section className="py-20 pt-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl uppercase tracking-wider mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Get in touch with Kanlungan FC - we'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-5xl uppercase tracking-wide mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="+63 XXX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black uppercase tracking-wider">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-5xl uppercase tracking-wide mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-500 text-black p-3 rounded-lg mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="uppercase tracking-wider mb-1">Email</h3>
                    <p className="text-gray-700">info@kanlunganfc.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 text-black p-3 rounded-lg mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="uppercase tracking-wider mb-1">Phone</h3>
                    <p className="text-gray-700">+63 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 text-black p-3 rounded-lg mr-4">
                    <ExternalLink size={24} />
                  </div>
                  <div>
                    <h3 className="uppercase tracking-wider mb-1">Facebook</h3>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-500 hover:text-yellow-400"
                    >
                      @KanlunganFC
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 text-black p-3 rounded-lg mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="uppercase tracking-wider mb-1">Location</h3>
                    <p className="text-gray-700">
                      Cebu City Sports Center<br />
                      Cebu City, Cebu<br />
                      Philippines
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-500 rounded-lg">
                <h3 className="uppercase tracking-wider mb-2">Office Hours</h3>
                <p className="text-black">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 12:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

