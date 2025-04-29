import SideBar from "../components/common/SideBar";
import { Link } from "react-router-dom";
import SearchBar from "../components/CourseDashboard/SearchBar";
import tracker from "../images/Certifications/tracker.png";
import icon from "../images/Certifications/icon.svg";
import icon2 from "../images/Certifications/icon2.svg";
import icon3 from "../images/Certifications/icon3.png";
import microsoft from "../images/Certifications/microsoft.svg";
import cisco from "../images/Certifications/cisco.svg";
import comptia from "../images/Certifications/comptia.svg";
import aws from "../images/Certifications/aws.svg";
import gcp from "../images/Certifications/gcp.svg";
import agile from "../images/Certifications/agile.svg";
import cap from "../images/Certifications/cap.svg";
import snowflake from "../images/Certifications/snowflake.svg";
import PeerTracker from "../components/CoursePage/PeerTracker";

function Certifications() {
  const options = [
    "IT Ops",
    "Cloud",
    "Security",
    "Project Management",
    "Data",
    "Software Development",
    "Popular Certifications",
    "Newest",
  ];

  const certifications = [
    {
        category: "IT Ops",
        paths: [
            {
                companyLogo: microsoft,
                heading: "Microsoft"
            },
            {
                companyLogo: cisco,
                heading: "Cisco"
            },
            {
                companyLogo: comptia,
                heading: "CompTIA"
            }
        ]
    },
    {
        category: "Cloud",
        paths: [
            {
                companyLogo: aws,
                heading: "Amazon Web Services"
            },
            {
                companyLogo: microsoft,
                heading: "Microsoft Azure"
            },
            {
                companyLogo: gcp,
                heading: "Google Cloud"
            }
        ]
    },
    {
        category: "Security",
        paths: [
            {
                companyLogo: comptia,
                heading: "(ISC)"
            },
            {
                companyLogo: comptia,
                heading: "CompTIA"
            },
            {
                companyLogo: comptia,
                heading: "ISACA"
            }
        ]
    },
    {
        category: "Project Management",
        paths: [
            {
                companyLogo: agile,
                heading: "Agile"
            },
            {
                companyLogo: comptia,
                heading: "CompTIA"
            },
            {
                companyLogo: icon3,
                heading: "Professional (PgMP)"
            }
        ]
    },
    {
        category: "Data",
        paths: [
            {
                companyLogo: cap,
                heading: "CAP"
            },
            {
                companyLogo: microsoft,
                heading: "Microsoft"
            },
            {
                companyLogo: snowflake,
                heading: "Snowflake"
            }
        ]
    }
  ];


  return (
    <div className="w-full">
        <section className="fixed top-0 left-0">
            <SideBar />
        </section>

        <div className="bg-purple-grad h-60 ml-80">

        </div>
      
      <main className="flex flex-col gap-12 justify-start w-full p-24 ml-80">
        <header>
          <h1 className="text-4xl font-medium">Certification Prep Center</h1>
        </header>
        <main className="flex gap-16 w-full">
          <aside className="flex flex-col gap-4 w-1/5">
            <section className="flex flex-col divide-y gap-4 bg-gray-200/60 w-80 p-6 rounded-xl transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-lg">
              <header>
                <h2 className="font-bold">
                  Explore Certification Training
                </h2>
              </header>
              <main className="pl-6 pt-4">
                <ul className="list-disc">
                  {options.map((option, idx) => (
                    <li key={idx}>{option}</li>
                  ))}
                </ul>
              </main>
            </section>
            <section className="w-80">
              <PeerTracker />
            </section>
            <section className="w-80 p-4 flex gap-24 bg-gray-200/60 rounded-xl transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-lg">
              <p>Get Support</p>
              <Link to="">Learn more &gt;</Link>
            </section>
          </aside>
          <main className="w-4/5 flex flex-col gap-12">
            <section >
              <SearchBar />
            </section>
            <section className="flex flex-col gap-16">
                  {certifications.map(({category, paths}, idx) => (
                    <div key={idx} className="flex flex-col gap-4">
                        <header>
                        <h3 className="text-xl font-bold tracking-wide">{category}</h3>
                        </header>
                        <main className="flex gap-4">
                            {paths.map(({companyLogo, heading}, key) => (
                                <div key={key} className="w-80 h-48 bg-gray-200/60 p-2 flex flex-col gap-4 rounded shadow-lg">
                                    <header className="flex justify-between">
                                        <img src={companyLogo} alt={category} className="w-14"/>
                                        <img src={icon2} alt="Certification" className="mr-10"/>
                                    </header>
                                    <main>
                                        <p>Certification Prep</p>
                                        <h4 className="text-lg font-semibold">{heading}</h4>
                                    </main>
                                    <footer>
                                        <Link>
                                        <button className="w-full h-9 bg-gray-200 rounded text-sm">
                                            See all training plans &gt;
                                        </button>
                                        </Link>
                                    </footer>
                                </div>
                            ))}
                        </main>
                    </div>
                  ))}
            </section>
          </main>
        </main>
      </main>
    </div>
  );
}

export default Certifications;
