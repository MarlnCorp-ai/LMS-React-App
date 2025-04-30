import { Link } from "react-router-dom";
import SideBar from "../../components/common/SideBar";
import banner from "../../images/Banners/Banner.png";
import handson from "../../images/Lab/handson.png";
import cloudsandboxes from "../../images/Lab/cloud-sandboxes.png";
import cloud from "../../images/Lab/cloud.png";
import aisandboxes from "../../images/Lab/ai-sandboxes.png";
import banner1 from "../../images/Lab/banner-1.png";
import banner2 from "../../images/Lab/banner-2.png";
import banner3 from "../../images/Lab/banner-3.png";
import banner4 from "../../images/Lab/banner-4.png";

const cards = [

  { title: "AI Sandboxes", link: "/lab/workspace", image: aisandboxes },
  { title: "Cloud Sandboxes", link: "/lab/workspace", image: cloudsandboxes },
  { title: "Cloud", link: "/lab/workspace", image: cloud },
  { title: "Hands-on-Learning", link: "/lab/workspace", image: handson },
];

const banners = [banner1, banner2, banner3, banner4];
export default function LabPage() {
  return (
    <div className="relative ">
      <aside className="fixed top-0 left-0 bg-white">
        <SideBar />
      </aside>
      <div className="min-h-screen mb-60 ml-80">
        {/* Header hero */}
        <div
          className="bg-purple-banner h-96 w-full py-16 flex flex-col items-center justify-center text-white bg-cover"
          style={{ backgroundImage: `url('${banner}')` }}
        >
          <h1 className="mt-2 text-[56px] font-bold">NexusHive LAB</h1>
          <p className="mt-2 max-w-4xl text-[20px] text-center">
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
          <span className="inline-block bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
            Nexushive Lab
          </span>
        </div>

        {/* Cards grid */}
        <div className="container mx-auto px-6 mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
          {banners.map((image, idx) => (
            <Link to="/lab/workspace">
                <img src={image} key={idx} alt={`Banner ${idx}`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
