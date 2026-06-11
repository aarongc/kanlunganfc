import MatchCard from "@/components/cards/MatchCard";

const upcomingMatches = [
  {
    homeTeam: "Kanlungan FC U12",
    awayTeam: "Cebu United U12",
    date: "June 15, 2026",
    time: "3:00 PM",
    location: "Cebu City Sports Center",
    status: "upcoming" as const,
  },
  {
    homeTeam: "Kanlungan FC U16",
    awayTeam: "Mandaue FC U16",
    date: "June 18, 2026",
    time: "5:00 PM",
    location: "Abellana Sports Complex",
    status: "upcoming" as const,
  },
  {
    homeTeam: "Kanlungan FC Adults",
    awayTeam: "Lapu-Lapu FC",
    date: "June 20, 2026",
    time: "7:00 PM",
    location: "Cebu City Sports Center",
    status: "upcoming" as const,
  },
];

const recentResults = [
  {
    homeTeam: "Kanlungan FC U12",
    awayTeam: "Talisay FC U12",
    date: "June 8, 2026",
    time: "2:00 PM",
    location: "Cebu City Sports Center",
    status: "completed" as const,
    score: { home: 3, away: 1 },
  },
  {
    homeTeam: "Mandaue FC U10",
    awayTeam: "Kanlungan FC U10",
    date: "June 5, 2026",
    time: "4:00 PM",
    location: "Mandaue Sports Complex",
    status: "completed" as const,
    score: { home: 1, away: 2 },
  },
];

export default function SchedulePage() {
  return (
    <div className="font-display">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl uppercase tracking-wider mb-4">Fixtures & Results</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Keep track of all Kanlungan FC matches and training schedules
          </p>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl uppercase tracking-wider mb-8">Upcoming Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMatches.map((match, index) => (
              <MatchCard key={index} {...match} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl uppercase tracking-wider mb-8">Recent Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentResults.map((match, index) => (
              <MatchCard key={index} {...match} />
            ))}
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl uppercase tracking-wider mb-8">Training Schedule</h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-yellow-500 text-black">
                <tr>
                  <th className="px-6 py-4 text-left uppercase tracking-wide">Team</th>
                  <th className="px-6 py-4 text-left uppercase tracking-wide">Days</th>
                  <th className="px-6 py-4 text-left uppercase tracking-wide">Time</th>
                  <th className="px-6 py-4 text-left uppercase tracking-wide">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 uppercase tracking-wide">U8 Team</td>
                  <td className="px-6 py-4">Tue, Thu</td>
                  <td className="px-6 py-4">4:00 PM - 5:30 PM</td>
                  <td className="px-6 py-4">Cebu City Sports Center</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 uppercase tracking-wide">U10 Team</td>
                  <td className="px-6 py-4">Mon, Wed, Fri</td>
                  <td className="px-6 py-4">4:00 PM - 6:00 PM</td>
                  <td className="px-6 py-4">Cebu City Sports Center</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 uppercase tracking-wide">U12 Team</td>
                  <td className="px-6 py-4">Mon, Wed, Fri</td>
                  <td className="px-6 py-4">5:00 PM - 7:00 PM</td>
                  <td className="px-6 py-4">Abellana Sports Complex</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 uppercase tracking-wide">U16 Team</td>
                  <td className="px-6 py-4">Tue, Thu, Sat</td>
                  <td className="px-6 py-4">5:30 PM - 7:30 PM</td>
                  <td className="px-6 py-4">Abellana Sports Complex</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 uppercase tracking-wide">Adult Team</td>
                  <td className="px-6 py-4">Wed, Fri, Sun</td>
                  <td className="px-6 py-4">7:00 PM - 9:00 PM</td>
                  <td className="px-6 py-4">Cebu City Sports Center</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

