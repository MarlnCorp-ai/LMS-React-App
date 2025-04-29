import { Link } from "react-router-dom";

const cards = [
  { title: "AI Sandboxes", link: "/lab/workspace" },
  { title: "Cloud Sandboxes", link: "/lab/workspace" },
  { title: "Cloud Servers", link: "/lab/workspace" },
  { title: "Instant Terminal", link: "/lab/workspace" },
];

export default function LabPage() {
  return (
    <div className="min-h-screen mb-60">
      {/* Header hero */}
      <div className="bg-purple-banner h-96 w-full py-16 pl-56 text-white">
        <h1 className="mt-2 text-[56px] font-bold">NexusHive LAB</h1>
        <p className="mt-2 max-w-2xl text-[20px]">
          Learn by doing through our unique, hands-on learning experiences.
          You’ll be able to access real-world, live environments and
          technologies to build, practice, and apply new technology skills.
        </p>
      </div>

      {/* Info panel */}
      {/* <div className="mx-auto max-w-4xl bg-blue-600 rounded-lg shadow-lg p-4">
        <h3 className="text-lg font-semibold text-white">
          What Is Nexushive Lab?
        </h3>
        <p className="mt-2 text-blue-100">
          The Nexushive Lab is Hands-on – Learning space to explore, and
          practice in live environments.
        </p>
      </div> */}

      {/* Tab */}
      <div className="container mx-auto px-6 mt-40">
        <span className="inline-block bg-purple-300 text-white text-sm font-semibold px-4 py-2 rounded-full">
          Nexushive Lab
        </span>
      </div>

      {/* Cards grid */}
      <div className="container mx-auto px-6 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
        {cards.map((c) => (
          <div
            key={c.title}
            className="bg-gray-200/30 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            {/* Placeholder image area */}
            <div className="h-40 bg-gray-400/20 bg-opacity-30" />

            {/* Card content */}
            <div className="p-4">
              <h4 className="text-gray-600 font-semibold">{c.title}</h4>
              <div className="mt-4 flex items-center space-x-4">
                <Link to={c.link}>
                  <button className="bg-purple-300 hover:bg-purple-400 text-white text-sm font-medium px-3 py-1 rounded">
                    Get Started
                  </button>
                </Link>
                <button className="hover:text-gray-200 text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
