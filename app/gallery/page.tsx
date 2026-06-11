export default function GalleryPage() {
  return (
    <div className="font-display">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl uppercase tracking-wider mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Memories from training sessions, matches, and club events
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div
                key={item}
                className="relative h-64 bg-yellow-500 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center text-black text-2xl uppercase tracking-wider opacity-30">
                  Gallery Image {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
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
  );
}

