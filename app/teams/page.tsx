import PlayerCard from "@/components/cards/PlayerCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const teams = [
  { id: "u8", name: "U8 Team", ageGroup: "Under 8", description: "Introduction to football fundamentals" },
  { id: "u10", name: "U10 Team", ageGroup: "Under 10", description: "Building technical skills and game awareness" },
  { id: "u12", name: "U12 Team", ageGroup: "Under 12", description: "Competitive development and tactical understanding" },
  { id: "u16", name: "U16 Team", ageGroup: "Under 16", description: "Advanced training and tournament competition" },
  { id: "adults", name: "Adult Team", ageGroup: "18+", description: "Competitive adult league football" },
];

export default function TeamsPage() {
  return (
    <div className="font-display">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl uppercase tracking-wider mb-4">Our Teams</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            From grassroots to competitive football - teams for every age and skill level
          </p>
        </div>
      </section>

      {/* Teams List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team) => (
              <div
                key={team.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl md:text-3xl uppercase tracking-wide mb-2">{team.name}</h3>
                <p className="text-yellow-500 mb-3">{team.ageGroup}</p>
                <p className="text-gray-700 mb-4">{team.description}</p>
                <Button asChild className="w-full bg-black hover:bg-gray-900 text-white uppercase">
                  <Link href={`/teams/${team.id}`}>View Team Details</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Players Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl uppercase tracking-wider mb-8">Featured Players</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <PlayerCard name="Juan Dela Cruz" position="Forward" number={9} />
            <PlayerCard name="Maria Santos" position="Midfielder" number={10} />
            <PlayerCard name="Pedro Garcia" position="Defender" number={4} />
            <PlayerCard name="Ana Lopez" position="Goalkeeper" number={1} />
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl uppercase tracking-wider mb-4">Want to Join a Team?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Registration is open for all age groups. Contact us to learn more.
          </p>
          <Button asChild size="lg" className="bg-black hover:bg-gray-900 text-white uppercase">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

