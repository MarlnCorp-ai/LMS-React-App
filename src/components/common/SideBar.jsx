import companylogo from "../../images/companylogo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

function SideBar() {
    const [currPage, setCurrPage] = useState("home");
    const { user, registeredUsers } = useAuth();
    console.log(user, registeredUsers);
    const userName = user.firstName[0].toUpperCase() + user.firstName.slice(1);
  const sections = [
    [
      {
        name: "Home",
        icon: "home",
        link: "/courses",
      },
      {
        name: "Browse",
        icon: "browse",
        link: "/courses",
      },
    ],
    [
      {
        name: "Sage AI",
        icon: "wand_stars",
        link: "/sage",
      },
    ],
    [
      {
        name: "Hands-on",
        icon: "library_books",
        link: "/lab",
      },
      {
        name: "Channels",
        icon: "bigtop_updates",
        link: "",
      },
      {
        name: "Role IQ",
        icon: "badge",
        link: "",
      },
      {
        name: "Certifications",
        icon: "workspace_premium",
        link: "/certifications",
      },
      {
        name: "Paths",
        icon: "fork_right",
        link: "/learning-paths",
      },
      {
        name: "Skill IQ",
        icon: "network_intelligence",
        link: "",
      },
    ],
    [
      {
        name: "Help & Support",
        icon: "contact_support",
        link: "",
      },
      {
        name: "Send Feedback",
        icon: "chat",
        link: "",
      },
    ],
  ];

  const businessFeatures = [
    {
        name: "Business",
        icon: "work",
        link: "/business",
      },
      {
        name: "Cloud",
        icon: "cloud",
        link: "",
      },
      {
        name: "Data",
        icon: "storage",
        link: "/data",
      },
      {
        name: "Generative AI",
        icon: "smart_toy",
        link: "/genai",
      },
      {
        name: "IT Ops",
        icon: "settings",
        link: "",
      },
      {
        name: "Security",
        icon: "security",
        link: "",
      },
      {
        name: "Software Dev",
        icon: "code",
        link: "/softwaredev",
      }
  ];

  if(user && user.role === "business")
  {
    sections[0].splice(1,0, ...businessFeatures)
  }

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
          {sections.map((options, idx) => (
            <section className="flex flex-col gap-2 pt-2" key={idx}>
              {options.map(({ name, icon, link }, key) => (
                <Link to={link} key={key} onClick={() => setCurrPage(name)}>
                  <div className={`flex gap-1 ${currPage === name ? "bg-purple-600 text-white" : "hover:bg-purple-600 hover:text-white"} rounded p-1`}>
                    <span class="material-symbols-outlined mr-2">{icon}</span> {name}
                  </div>
                </Link>
              ))}
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
          <span class="material-symbols-outlined">notifications</span>
        </div>
      </footer>
    </aside>
  );
}

export default SideBar;
