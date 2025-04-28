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
      
      <main className="flex flex-col gap-12 justify-start w-full p-24 ml-80">
        <header>
          <h1 className="text-4xl font-medium">Certification Prep Center</h1>
        </header>
        <main className="flex gap-16 w-full">
          <aside className="flex flex-col gap-4 w-1/5">
            <section className="flex flex-col divide-y gap-4 bg-gray-400/60 w-80 p-6 rounded-xl">
              <header>
                <h2 className="font-bold text-">
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
              <img
                src={tracker}
                alt="Tracker"
                className="h-[30rem] w-80 rounded-xl"
              />
            </section>
            <section className="w-80 p-4 flex gap-24 bg-gray-400/60 rounded-xl">
              <p>Get Support</p>
              <Link to="">Learn more &gt;</Link>
            </section>
          </aside>
          <main className="w-4/5 flex flex-col gap-12">
            <section className="flex bg-gray-400/60 rounded-xl gap-8 w-3/4">
              <img src={icon} alt="Certifications" />
              <div className="flex flex-col gap-4 justify-center">
                <h2 className="text-lg font-bold">Your One-Stop Shop for Certifications</h2>
                <section>
                  <p>
                    Take our exam prep, complete with Labs and Practice Exams.
                  </p>
                  <p>
                    Improve your score every time and be ready to pass your
                    certification exam.
                  </p>
                </section>
              </div>
            </section>
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
                                <div key={key} className="w-80 h-48 bg-gray-400/60 p-2 flex flex-col gap-4 rounded shadow-md">
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
