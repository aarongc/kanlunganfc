import { Users, Target, MapPin, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="font-display">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl uppercase tracking-wider mb-4">About Kanlungan FC</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
            Building champions on and off the field since our founding in Cebu City
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <Target className="text-yellow-500 mr-3" size={32} />
                <h2 className="text-3xl md:text-4xl uppercase tracking-wide">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700">
                To develop well-rounded athletes who excel in football while building character, 
                discipline, and life skills that extend beyond the pitch. We are committed to 
                providing quality coaching and competitive opportunities for youth in Cebu.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Award className="text-yellow-500 mr-3" size={32} />
                <h2 className="text-3xl md:text-4xl uppercase tracking-wide">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700">
                To be Cebu's leading youth football club, recognized for developing talented 
                players and contributing to the growth of Philippine football. We aim to create 
                a pathway for young athletes to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Club History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl uppercase tracking-wide mb-8">Our Story</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 mb-4">
              Kanlungan FC was founded with a simple vision: to provide quality football training 
              and competitive opportunities for the youth of Cebu. What started as a small group of 
              passionate coaches and dedicated players has grown into one of the region's premier 
              youth football clubs.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Today, we serve multiple age groups from U8 to adult level, with teams competing in 
              local and regional tournaments. Our club is built on the foundation of professional 
              coaching, strong values, and a commitment to player development.
            </p>
            <p className="text-lg text-gray-700">
              We believe that football is more than just a game – it's a platform for teaching 
              teamwork, perseverance, respect, and leadership. These are the values that define 
              Kanlungan FC.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <MapPin className="text-yellow-500 mr-3" size={32} />
            <h2 className="text-3xl md:text-5xl uppercase tracking-wide">Where We Train</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-xl md:text-2xl uppercase mb-2">Cebu City, Philippines</h3>
            <p className="text-gray-700 mb-4">
              Our teams train at various facilities across Cebu City, including the Cebu City 
              Sports Center and Abellana Sports Complex. We are proud to be based in Cebu, 
              contributing to the vibrant football community in the Visayas region.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl uppercase tracking-wider mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl uppercase mb-2">Excellence</h3>
              <p className="text-gray-600">
                Striving for the highest standards in everything we do
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl uppercase mb-2">Teamwork</h3>
              <p className="text-gray-600">
                Building strong bonds and working together toward common goals
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl uppercase mb-2">Respect</h3>
              <p className="text-gray-600">
                Treating everyone with dignity, on and off the field
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl uppercase mb-2">Growth</h3>
              <p className="text-gray-600">
                Continuous improvement as players and as people
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

