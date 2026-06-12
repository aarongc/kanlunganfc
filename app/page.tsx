import Hero from "@/components/sections/Hero";
import MatchCard from "@/components/cards/MatchCard";
import NewsCard from "@/components/cards/NewsCard";
import PlayerCard from "@/components/cards/PlayerCard";
import AnimatedSection from "@/components/sections/AnimatedSection";
import StatsCounter from "@/components/sections/StatsCounter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { clubInfo } from "@/lib/siteData";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Stats Bar */}
      <section className="py-8 bg-black text-white border-y-4 border-yellow-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {clubInfo.stats.map((stat, index) => (
              <div key={index}>
                <div className="font-display text-5xl text-yellow-400 mb-2">{stat.value}</div>
                <div className="font-display text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/715711673_1012606355057711_2406201888397208618_n.jpg"
            alt="Kanlungan FC Team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection direction="up">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="font-display text-5xl md:text-7xl font-normal mb-8 uppercase tracking-wider">
                WHO <span className="text-yellow-500">WE ARE</span>
              </h2>
              <p className="font-display text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
                {clubInfo.name} is {clubInfo.tagline}, dedicated to developing champions on and off the field. 
                Since {clubInfo.foundedYear}, we've built a community where young athletes grow through professional coaching, competitive play, 
                and unwavering support.
              </p>
              <Button asChild size="lg" className="font-display bg-black hover:bg-gray-900 text-white text-lg px-12 py-8 h-auto rounded-none uppercase tracking-wider">
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up">
            <h2 className="font-display text-5xl md:text-7xl font-normal text-center mb-20 uppercase tracking-wider">
              OUR <span className="text-yellow-400">TEAMS</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {clubInfo.teams.map((team, index) => (
                <AnimatedSection key={team.name} delay={index * 0.1} direction="up">
                  <Link
                    href="/teams"
                    className="block bg-yellow-500 p-8 hover:bg-yellow-400 transition-all duration-300 group"
                  >
                    <h3 className="font-display text-2xl md:text-3xl font-normal mb-2 text-black uppercase tracking-wider">
                      {team.name}
                    </h3>
                    <p className="font-display text-black/70">{team.ages}</p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming Matches Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up">
            <h2 className="font-display text-5xl md:text-7xl font-normal text-center mb-20 uppercase tracking-wider">
              UPCOMING <span className="text-yellow-500">MATCHES</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1}>
              <MatchCard
                homeTeam="Kanlungan FC U12"
                awayTeam="Cebu United U12"
                date="June 15, 2026"
                time="3:00 PM"
                location="Cebu City Sports Center"
                status="upcoming"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <MatchCard
                homeTeam="Kanlungan FC U16"
                awayTeam="Mandaue FC U16"
                date="June 18, 2026"
                time="5:00 PM"
                location="Abellana Sports Complex"
                status="upcoming"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <MatchCard
                homeTeam="Kanlungan FC Adults"
                awayTeam="Lapu-Lapu FC"
                date="June 20, 2026"
                time="7:00 PM"
                location="Cebu City Sports Center"
                status="upcoming"
              />
            </AnimatedSection>
          </div>
          
          <div className="text-center mt-16">
            <Button asChild size="lg" className="font-display bg-black hover:bg-gray-900 text-white text-lg px-12 py-8 h-auto rounded-none uppercase tracking-wider">
              <Link href="/schedule">Full Schedule</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-40 bg-yellow-500 text-black">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-6xl md:text-8xl font-normal mb-8 uppercase tracking-widest">
                JOIN THE TEAM
              </h2>
              <p className="font-display text-2xl md:text-3xl mb-16">
                Start Your Football Journey Today
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="font-display bg-black hover:bg-gray-900 text-white text-xl px-16 py-10 h-auto rounded-none uppercase tracking-wider shadow-2xl">
                  <Link href="/contact">Register Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-display border-4 border-black text-black hover:bg-black hover:text-white text-xl px-16 py-10 h-auto rounded-none uppercase tracking-wider shadow-2xl">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
