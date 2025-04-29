import companylogo from "../../images/companylogo.png";
import { Link } from "react-router-dom";

function SideBar() {

    const sections = [
        [
            {
                name: "Home",
                icon: "home",
                link: ""
            },
            {
                name: "Browse",
                icon: "browse",
                link: ""
            }
        ],
        [
            {
                name: "Sage AI",
                icon: "wand_stars",
                link: ""
            }
        ],
        [
            {
                name: "Hands-on",
                icon: "library_books",
                link: ""
            },
            {
                name: "Channels",
                icon: "bigtop_updates",
                link: ""
            },
            {
                name: "Role IQ",
                icon: "badge",
                link: ""
            },
            {
                name: "Certifications",
                icon: "workspace_premium",
                link: ""
            },
            {
                name: "Paths",
                icon: "fork_right",
                link: ""
            },
            {
                name: "Skill IQ",
                icon: "network_intelligence",
                link: ""
            }
        ],
        [
            {
                name: "Help & Support",
                icon: "contact_support",
                link: ""
            },
            {
                name: "Send Feedback",
                icon: "chat",
                link: ""
            }
        ]
    ];
  return (
    <aside className="flex flex-col justify-between items-center w-80 h-screen p-4 rounded-r-lg shadow-lg">
      <section>
        <header className="flex ">
          <img src={companylogo} alt="Company Logo" className="w-16 h-16" />
          <section className="flex flex-col justify-center ml-2 text-[#4F1869] tracking-wide">
            <p className="text-3xl font-bold">NexusHive</p>
            <p className="text-xs uppercase font-bold">
              keep learning, keep buzzing
            </p>
          </section>
        </header>
        <main className="flex flex-col gap-4 divide-y divide-gray-300 mt-4 ml-3 text-gray-700">
            {sections.map((options, idx) => (
                <section className="flex flex-col gap-4 py-2" key={idx}>
                    {options.map(({name, icon, link}, key) => (
                        <Link to={link} key={key} >
                            <div className="flex gap-1 hover:bg-purple-grad rounded p-1 hover:text-gray-100">
                            <span class="material-symbols-outlined">{icon}</span> {name}
                            </div>
                        </Link>
                    ))}
                </section>
            ))}
        </main>
      </section>
      <footer className="flex gap-6">
        <div className="bg-red-300 w-8 rounded-full flex justify-center items-center font-semibold text-lg border-2 border-gray-300">M</div>
        <div className="flex items-center">Mohammed</div>
        <div className="bg-purple-300 w-8 rounded-full flex justify-center items-center border-2 border-gray-300">
          <span class="material-symbols-outlined">notifications</span>
        </div>
      </footer>
    </aside>
  );
}

export default SideBar;
