import SideBar from "../components/common/SideBar";
import { Link } from "react-router-dom";
import SearchBar from "../components/CourseDashboard/SearchBar";
import python_1 from "../images/Certifications/banners/python-1.png";
import python_2 from "../images/Certifications/banners/python-2.png";
import python_3 from "../images/Certifications/banners/python-3.png";
import cybersec_1 from "../images/Certifications/banners/cybersec-1.png";
import cybersec_2 from "../images/Certifications/banners/cybersec-2.png";
import cybersec_3 from "../images/Certifications/banners/cybersec-3.png";
import scrum_1 from "../images/Certifications/banners/scrum-1.png";
import scrum_2 from "../images/Certifications/banners/scrum-2.png";
import scrum_3 from "../images/Certifications/banners/scrum-3.png";
import hacking_1 from "../images/Certifications/banners/hacking-1.png";
import hacking_2 from "../images/Certifications/banners/hacking-2.png";
import hacking_3 from "../images/Certifications/banners/hacking-3.png";
import fsd_1 from "../images/Certifications/banners/fsd-1.png";
import fsd_2 from "../images/Certifications/banners/fsd-2.png";
import fsd_3 from "../images/Certifications/banners/fsd-3.png";
import java_1 from "../images/Certifications/banners/java-1.png";
import java_2 from "../images/Certifications/banners/java-2.png";
import java_3 from "../images/Certifications/banners/java-3.png";
import kubernetes_1 from "../images/Certifications/banners/kubernetes-1.png";
import kubernetes_2 from "../images/Certifications/banners/kubernetes-2.png";
import kubernetes_3 from "../images/Certifications/banners/kubernetes-3.png";
import golang_1 from "../images/Certifications/banners/golang-1.png";
import golang_2 from "../images/Certifications/banners/golang-2.png";
import golang_3 from "../images/Certifications/banners/golang-3.png";
import pmp_1 from "../images/Certifications/banners/pmp-1.png";
import pmp_2 from "../images/Certifications/banners/pmp-2.png";
import pmp_3 from "../images/Certifications/banners/pmp-3.png";
import banner from "../images/Banners/Banner.png";
import SkillDistributionPie from "../components/Certifications/SkillDistributionPie";
import PeerEngageBarChart from "../components/Certifications/PeerEngateBarChart";

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
      category: "Python",
      paths: [
        {
          banner: python_1
        },
        {
          banner: python_2
        },
        {
          banner: python_3
        },
      ],
    },
    {
      category: "Cybersecurity",
      paths: [
        {
          banner: cybersec_1
        },
        {
          banner: cybersec_2
        },
        {
          banner: cybersec_3
        },
      ],
    },
    {
      category: "Scrum",
      paths: [
        {
          banner: scrum_1
        },
        {
          banner: scrum_2
        },
        {
          banner: scrum_3
        },
      ],
    },
    {
      category: "Hacking",
      paths: [
        {
          banner: hacking_1
        },
        {
          banner: hacking_2
        },
        {
          banner: hacking_3
        },
      ],
    },
    {
      category: "Full Stack Development",
      paths: [
        {
          banner: fsd_1
        },
        {
          banner: fsd_2
        },
        {
          banner: fsd_3
        },
      ],
    },
    {
      category: "Java",
      paths: [
        {
          banner: java_1
        },
        {
          banner: java_2
        },
        {
          banner: java_3
        },
      ],
    },
    {
      category: "Kubernetes",
      paths: [
        {
          banner: kubernetes_1
        },
        {
          banner: kubernetes_2
        },
        {
          banner: kubernetes_3
        },
      ],
    },
    {
      category: "Golang",
      paths: [
        {
          banner: golang_1
        },
        {
          banner: golang_2
        },
        {
          banner: golang_3
        },
      ],
    },
    {
      category: "PMP",
      paths: [
        {
          banner: pmp_1
        },
        {
          banner: pmp_2
        },
        {
          banner: pmp_3
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      <section className="fixed top-0 left-0">
        <SideBar />
      </section>

      <div
        className="bg-cover h-96 ml-80 flex justify-center items-center text-white"
        style={{ backgroundImage: `url('${banner}')` }}
      >
        <h1 className="text-5xl font-bold">Track with Certification Prep</h1>
      </div>

      <main className="flex flex-col gap-12 justify-start w-full p-24 ml-80">
        <main className="flex gap-16 w-full">
          {/* <aside className="flex flex-col gap-4 w-1/5">
            <section className="flex flex-col divide-y gap-4 bg-gray-200/60 w-80 p-6 rounded-xl transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-lg">
              <header>
                <h2 className="font-bold">Explore Certification Training</h2>
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
          </aside> */}

          <main className="w-full flex">
            <div className="w- flex flex-col gap-12">
              <section>
                <SearchBar />
              </section>
              <section className="flex flex-col gap-16">
                {certifications.map(({ category, paths }, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <header>
                      <h3 className="text-xl font-bold tracking-wide">
                        {category}
                      </h3>
                    </header>
                    <main className="flex gap-1">
                      {paths.map(({ banner }, key) => (
                        <Link to="/certifications/1/path" key={key}>
                            <img src={banner} alt={`${category} - ${key}`} className="h-40 w-72 object-cover rounded-lg shadow-md transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-lg" /> 
                        </Link>
                      ))}
                    </main>
                  </div>
                ))}
              </section>
            </div>
            <aside className="space-y-40 p-2 w-1/2">
              <SkillDistributionPie />
              <PeerEngageBarChart />
            </aside>
          </main>
        </main>
      </main>
    </div>
  );
}

export default Certifications;
