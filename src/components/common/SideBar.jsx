import companylogo from "../../images/companylogo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

function SideBar() {
  const [currPage, setCurrPage]     = useState("home");
  const [chiveOpen, setChiveOpen]   = useState(false);          // NEW
  const { user, registeredUsers }   = useAuth();

  const userName =
    user.firstName[0].toUpperCase() + user.firstName.slice(1);

  const sections = [
    [
      { name: "Home",  icon: "home",  link: "/courses" },
      { name: "CHive", icon: "browse", link: "#" },             // link stays '#'
    ],
    [
      { name: "Sage AI", icon: "wand_stars", link: "/sage" },
    ],
    [
      { name: "Hands-on",       icon: "library_books",     link: "/lab" },
      { name: "Channels",       icon: "bigtop_updates",    link: "" },
      { name: "Role IQ",        icon: "badge",             link: "" },
      { name: "Certifications", icon: "workspace_premium", link: "/certifications" },
      { name: "Paths",          icon: "fork_right",        link: "/learning-paths" },
      { name: "Skill IQ",       icon: "network_intelligence", link: "" },
    ],
    [
      { name: "Help & Support", icon: "contact_support", link: "" },
      { name: "Send Feedback",  icon: "chat",            link: "" },
    ],
  ];

  const businessFeatures = [
    { name: "Business",      icon: "work",   link: "/business" },
    { name: "Cloud",         icon: "cloud",  link: "" },
    { name: "Data",          icon: "storage",link: "/data" },
    { name: "Generative AI", icon: "smart_toy", link: "/genai" },
    { name: "IT Ops",        icon: "settings", link: "" },
    { name: "Security",      icon: "security", link: "" },
    { name: "Software Dev",  icon: "code",   link: "/softwaredev" },
  ];

  const renderItem = ({ name, icon, link }) => (
    <Link
      to={link}
      key={name}
      onClick={() => {
        setCurrPage(name);
        if (name === "CHive") setChiveOpen(prev => !prev); // toggle submenu
      }}
    >
      <div
        className={`flex gap-1 rounded p-1 transition-colors ${
          currPage === name
            ? "bg-purple-600 text-white"
            : "hover:bg-purple-600 hover:text-white"
        }`}
      >
        <span className="material-symbols-outlined mr-2">{icon}</span>
        {name}
        {name === "CHive" && (
          <span className="material-symbols-outlined ml-auto">
            {chiveOpen ? "expand_less" : "expand_more"}
          </span>
        )}
      </div>
    </Link>
  );

  return (
    <aside className="flex flex-col justify-between items-center w-80 h-screen p-4 rounded-r-lg shadow-lg">
      <section>
        <Link to="/">
          <header className="flex">
            <img src={companylogo} alt="Company Logo" className="w-16 h-16" />
            <section className="flex flex-col justify-center ml-2 text-[#4F1869] tracking-wide">
              <p className="text-3xl font-bold">NexusHive</p>
              <p className="text-xs uppercase font-bold">
                keep learning, keep buzzing
              </p>
            </section>
          </header>
        </Link>


        <main className="flex flex-col gap-3 divide-y divide-gray-300 mt-4 ml-3 text-gray-700">
          {sections.map((group, idx) => (
            <section className="flex flex-col gap-2 pt-2" key={idx}>
              {group.map(renderItem)}


              {idx === 0 &&
                user?.role === "business" &&
                chiveOpen && (
                  <div className="ml-6 mt-1 flex flex-col gap-1">
                    {businessFeatures.map(renderItem)}
                  </div>
                )}
            </section>
          ))}
        </main>
      </section>


      <footer className="flex gap-6">
        <div className="bg-red-300 w-8 rounded-full flex justify-center items-center font-semibold text-lg border-2 border-gray-300">
          {userName[0]}
        </div>
        <div className="flex items-center">{userName}</div>
        <div className="bg-purple-300 w-8 rounded-full flex justify-center items-center border-2 border-gray-300">
          <span className="material-symbols-outlined">notifications</span>
        </div>
      </footer>
    </aside>
  );
}

export default SideBar;
